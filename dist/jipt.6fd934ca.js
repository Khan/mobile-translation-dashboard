// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ttqo":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copied from https://github.com/Khan/webapp/blob/31b9cfc1f5629de6eba6a461b77e187cf8342639/services/static/third_party/jipt/jipt-base.js
(function (undefined) {
  var $,
      // self loaded jQuery object
  editContextTimeout = null,
      stringsToUpdate = {
    updatedStrings: [],
    newStrings: []
  },
      isMobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|Windows Phone/i),
      config = {
    preload_texts: 'auto',
    project: document.domain,
    // before_dom_insert(text, node, attribute)
    before_dom_insert: function before_dom_insert(text) {
      return text;
    },
    // before_commit(source, translation, context, language)
    before_commit: null,
    // edit_string_context(context)
    edit_strings_context: null,
    // show badges for all elements
    touch_optimized: 'ontouchstart' in document.documentElement,
    // escape()
    escape: null,
    // sub-domain for enterprise
    domain: null
  },
      setCookie = function setCookie(name, value, expires) {
    if (typeof expires === 'undefined') {
      var expires_date = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);
      expires = expires_date.toGMTString();
    }

    document.cookie = name + '=' + escape(value) + '; path=/; expires=' + expires;
  },
      removeCookie = function removeCookie(name) {
    document.cookie = name + '=; path=/; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  },
      getCookie = function getCookie(check_name) {
    var documentCookies = document.cookie.split(';');
    var temporaryCookies = '';
    var cookieName = '';
    var cookieValue = '';
    var isThereAnyCookie = false;

    for (var i = 0; i < documentCookies.length; i++) {
      temporaryCookies = documentCookies[i].split('=');
      cookieName = temporaryCookies[0].replace(/^\s+|\s+$/g, '');

      if (cookieName === check_name) {
        isThereAnyCookie = true;

        if (temporaryCookies.length > 1) {
          cookieValue = unescape(temporaryCookies[1].replace(/^\s+|\s+$/g, ''));
        }

        return cookieValue;
      }

      temporaryCookies = null;
      cookieName = '';
    }

    if (!isThereAnyCookie) {
      return null;
    }
  },
      Storage = {
    save: function save(key, value) {
      full_key = 'jipt_' + key + '_' + get_project_identifier();

      if (window.localStorage) {
        localStorage.setItem(full_key, value);
      } else {
        setCookie(full_key, value);
      }
    },
    get: function get(key) {
      var value = null;
      var full_key = 'jipt_' + key + '_' + get_project_identifier();

      if (window.localStorage) {
        value = localStorage.getItem(full_key) ? localStorage.getItem(full_key) : null; // from (string) to (type) 'undefined'

        value = value === 'undefined' ? undefined : value;
      } else {
        value = getCookie(full_key);
      }

      return value;
    },
    delete: function _delete(key) {
      var full_key = 'jipt_' + key + '_' + get_project_identifier();

      if (window.localStorage) {
        localStorage.removeItem(full_key);
      } else {
        removeCookie(full_key);
      }
    }
  },
      Url = {
    join: 'join',
    login: 'login',
    enterpriseLogin: 'u/signin',
    entryPoint: '',
    apiEntryPoint: '',
    jiptCDN: 'https://cdn.crowdin.com/jipt',
    authDomain: 'https://accounts.crowdin.com',
    crowdinDomain: 'crowdin.com',
    getEntryPoint: function getEntryPoint() {
      if (this.entryPoint.length === 0) {
        var domain = config.domain != null ? config.domain + '.' : '';
        this.entryPoint = 'https://' + domain + this.crowdinDomain;
      }

      return this.entryPoint;
    },
    getAuthEntryPoint: function getAuthEntryPoint(url, params) {
      params = params || {};

      if (config.domain !== null) {
        params.domain = config.domain;
      }

      var queryParams = $.param(params);
      return this.authDomain + url + (queryParams ? '?' + queryParams : '');
    },
    getFullUrl: function getFullUrl(path) {
      return this.getEntryPoint() + path;
    },
    getJiptPath: function getJiptPath(action) {
      var pathAction;

      if (action == this.join || action == this.login) {
        pathAction = config.domain ? this.enterpriseLogin : action;
      } else {
        pathAction = this.login;
      }

      return this.getAuthEntryPoint('/login', {
        continue: '/' + pathAction + '?redirect_hash=' + jipt.user.redirectHash
      });
    }
  },
      get_project_identifier = function get_project_identifier() {
    return config.project;
  },
      applyUserConfig = function applyUserConfig() {
    var cfg = _jipt || [];

    for (var i = 0; i < cfg.length; i++) {
      config[cfg[i][0]] = cfg[i][1];
    }
  },
      maskDocument = function maskDocument() {
    var mask,
        message,
        body,
        bodyLoadInterval,
        maskStyle = '';
    var messageStyle = '';
    var message_margin = 0;
    document.documentElement.style.opacity = '0';
    maskStyle += 'position: fixed;';
    maskStyle += 'top: 0;';
    maskStyle += 'right: 0;';
    maskStyle += 'bottom: 0;';
    maskStyle += 'left: 0;';
    maskStyle += 'z-index: 2037483647;';
    maskStyle += 'text-align: center;';
    maskStyle += 'background-color: #fff;';
    mask = document.createElement('div');
    mask.setAttribute('id', 'crowdin-jipt-mask');
    mask.setAttribute('style', maskStyle);
    message_margin = document.documentElement.clientHeight / 2 - 25;
    messageStyle += 'height: 40px;';
    messageStyle += 'width: 40px;';
    messageStyle += 'background-image: url(' + Url.jiptCDN + '/images/preloader.gif);';
    messageStyle += 'background-repeat: no-repeat;';
    messageStyle += 'background-position: center center;';
    messageStyle += 'display: inline-block;';
    messageStyle += 'margin-top: ' + message_margin + 'px;';
    message = document.createElement('div');
    message.setAttribute('style', messageStyle);
    bodyLoadInterval = window.setInterval(function () {
      body = document.getElementsByTagName('body')[0];

      if (body !== undefined) {
        window.clearInterval(bodyLoadInterval);
        body.appendChild(mask);
        mask.appendChild(message);
        document.documentElement.style.opacity = '';
      }
    }, 100);
  },
      unmaskDocument = function unmaskDocument() {
    var mask = document.getElementById('crowdin-jipt-mask');

    if (mask) {
      mask.parentNode.removeChild(mask);
    }
  },
      loadResource = function loadResource(resourceIdentifier, resourceType, callback) {
    var resourceHandler,
        loaded = false;

    if (resourceType === 'js') {
      resourceHandler = document.createElement('script');
      resourceHandler.setAttribute('type', 'text/javascript');
      resourceHandler.setAttribute('src', resourceIdentifier);
    } else if (resourceType === 'css') {
      resourceHandler = document.createElement('link');
      resourceHandler.setAttribute('rel', 'stylesheet');
      resourceHandler.setAttribute('type', 'text/css');
      resourceHandler.setAttribute('href', resourceIdentifier);
    }

    if (resourceHandler === undefined) {
      return;
    }

    resourceHandler.onload = resourceHandler.onreadystatechange = function () {
      if (!loaded && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
        loaded = true;

        if (callback) {
          callback();
        }

        resourceHandler.onload = resourceHandler.onreadystatechange = null;
      }
    };

    document.getElementsByTagName('head')[0].appendChild(resourceHandler);
  },
      htmlspecialchars = function htmlspecialchars(string) {
    return string ? string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '';
  },
      jipt = {
    callbacks: {},
    phrases: {},
    concurrentRequestsMaxCount: 10,
    pendingRequests: [],
    _phrases: {
      need_load: {},
      was_loaded: {},
      callbacks: [],
      load_timeout: null
    },
    projectLink: null,
    projectId: null,
    projectName: null,
    projectURL: null,
    editor: {
      currentTranslation: null
    },
    target_languages: [],
    workflowSteps: [],
    language: {
      code: null,
      id: 0,
      name: ''
    },
    workflowStep: {
      id: 0,
      type: ''
    },
    source_language: {
      code: null
    },
    user: {
      isLoggedIn: true,
      isLeader: true,
      isManager: false,
      name: '',
      login: '',
      picture: '',
      redirectHash: ''
    },
    regexp: {
      placeholders: {},
      startPhrase: /{crwdns(\d+):(\d)}/i,
      globalStartPhrase: /{crwdns(\d+):\d}/gi,
      globalPhrase: /{crwdns(\d+):(\d)}([\s\S]*?){crwdne\1:\2}/gi,
      exactPhrase: /^{crwdns(\d+):(\d)}([\s\S]*?){crwdne\1:\2}$/i,
      delimiterPart: function delimiterPart(id, plural) {
        return '{crwdnd' + id + ':' + plural + '}';
      },
      endPart: function endPart(id, plural) {
        return '{crwdne' + id + ':' + plural + '}';
      },
      wrapText: function wrapText(text) {
        return '{crwdns0:0}' + text + '{crwdne0:0}';
      }
    },
    regexp_new: {
      startPhrase: /crwdns(\d+):(\d)/i,
      globalStartPhrase: /crwdns(\d+):\d/gi,
      globalPhrase: /crwdns(\d+):(\d)([\s\S]*?)crwdne\1:\2/gi,
      exactPhrase: /^crwdns(\d+):(\d)([\s\S]*?)crwdne\1:\2$/i,
      delimiterPart: function delimiterPart(id, plural) {
        return 'crwdnd' + id + ':' + plural;
      },
      endPart: function endPart(id, plural) {
        return 'crwdne' + id + ':' + plural;
      },
      wrapText: function wrapText(text) {
        return 'crwdns0:0' + text + 'crwdne0:0';
      }
    },
    status: {
      untranslated: 'untranslated',
      partially_translated: 'partially_translated',
      translated: 'translated',
      partially_approved: 'partially_approved',
      approved: 'approved',
      hidden: 'hidden',
      not_found: 'not_found',
      not_visible_on_step: 'not_visible_on_step',
      file_not_available_for_language: 'file_not_available_for_language'
    },
    pluralsPreview: false,
    translatable_placeholders: [],
    translation_preview: {
      id: false,
      value: '',
      plural_id: -1
    },
    alertFunction: null,
    confirmFunction: null,
    promptFunction: null,
    loginDialog: null,
    editorDialog: null,
    translationDialog: null,
    dialog_zindex: 2047483647,
    // minimum z-index of JIPT dialogs. Should be grater than page elements maximum z-index, but not be close to max css z-index value
    minimized_translation_panel: true,
    // jipt translating panel: show or minimize by default
    translations_preview: null,
    translations_highlight: null,
    translations_filter: null,
    touch_optimized: null,
    panel_search_phrase: null,
    rebuild_panel_timeout: null,
    panel_page: 0,
    panel_pages: 1,
    open_hotkeys_settings: false,
    open_editor_settings: false,
    editor_loaded: false,
    editorDialogIframe: null,
    not_found_warning: '[Unrecognized text]',
    loginDialogContent: function loginDialogContent() {
      var signup = '';

      if (!config.domain) {
        signup = '<div class="jipt-register-block jipt-help-block">Don\'t have an account? ' + '<a target="_blank" href="javascript:void(0)" id="crowdin-join">Sign Up</a>' + '</div>';
      }

      return '<div class="crowdin-login-panel" style="display: none;">' + '<div id="Jipt_Language">' + '<div class="language-group">' + '<label for="crowdin-login-language-field">Target Language:</label>' + '<div>' + '<select class="no-margin input-block-level" id="crowdin-login-language-field"></select>' + '</div>' + '</div>' + '</div>' + '<div id="Jipt_Workflow_Step">' + '<div class="workflow-step-group hide">' + '<label class="jipt-s-margin-right" for="crowdin-login-workflow-step-field">Workflow Step:</label>' + '<div>' + '<select class="no-margin input-block-level" id="crowdin-login-workflow-step-field"></select>' + '</div>' + '</div>' + '</div>' + '<hr class="jipt-hr">' + '<div class="jipt-clearfix text-center">' + '<h4 class="no-margin-top">Log in with your Crowdin account</h4>' + '<div id="regular_login">' + '<button type="submit" class="jipt-btn" id="crowdin-jipt-login">Log In</button>' + signup + '</div>' + '</div>' + '</div>' + '<div class="crowdin-languages-panel" style="display: none;">' + '<div>' + '<label for="crowdin-language-field">Target Language: </label>' + '<div>' + '<select class="input-block-level" id="crowdin-language-field"></select>' + '</div>' + '</div>' + '<div class="workflow-step-group hide">' + '<label for="crowdin-workflow-step-field">Workflow Step: </label>' + '<div>' + '<select class="input-block-level" id="crowdin-workflow-step-field"></select>' + '</div>' + '</div>' + '<div>' + '<button type="button" class="jipt-btn" id="crowdin-select-language-and-step" style="margin-top: 10px;">Select</button>' + '</div>' + '</div>';
    },
    translationDialogButtons: function translationDialogButtons() {
      var screenshotBtn = '';

      if (jipt.user.isManager) {
        screenshotBtn = '<li><a  href="#jipt-screenshot" class="jipt-btn jipt-btn-icon"><i class="jipt-icon-add-screenshot"></i></a></li>';
      }

      return '' + '<div class="jipt-clearfix">' + '<ul id="translation_panel_tabs" class="jipt-tabs pull-left">' + '<li><a id="show_translations" class="jipt-btn active jipt-btn-icon" href="#jipt-translations"><i class="jipt-icon-home"></i></a></li>' + screenshotBtn + '<li><a id="show_options" href="#jipt-options" class="jipt-btn jipt-btn-icon"><i class="jipt-icon-options"></i></a></li>' + '</ul>' + '<div id="translation_panel_paging_wrapper" class="pull-right">' + '<form id="translation_panel_paging" class="jipt-paging no-margin jipt-clearfix" style="display: none;">' + '<input type="text" class="pull-left" id="translation_panel_current_page" size="5">' + '<div class="pull-right">' + '<a href="#" class="jipt-panel-page jipt-btn jipt-btn-icon" id="translation_panel_prev_page"><i class="jipt-icon-prev"></i></a>' + '<a href="#" class="jipt-panel-page jipt-btn jipt-btn-icon" id="translation_panel_next_page"><i class="jipt-icon-next"></i></a>' + '</div>' + '</form>' + '</div>' + '</div>';
    },
    translationDialogContent: function translationDialogContent() {
      var checked_preview = jipt.translations_preview === true ? ' checked' : '';
      var checked_highlight = jipt.translations_highlight === true ? ' checked' : '';
      var checked_filter = jipt.translations_filter === true ? ' checked' : '';
      var touch_optimized = jipt.touch_optimized === true ? ' checked' : '';
      var login = jipt.user.login;
      var user_name = jipt.user.name;
      var user_picture = jipt.user.picture;
      var user_picture_src = user_picture ? 'src="' + user_picture + '"' : '';
      var profile = Url.getEntryPoint() + (config.domain ? '/u/' : '/profile/' + login);
      var option_preview = '<div class="jipt-control-group">' + '<label class="jipt-checkbox"><input type="checkbox" id="jipt-translations-preview"' + checked_preview + '>Preview translations</label>' + '</div>';
      var option_highlight = '<div class="jipt-control-group">' + '<label class="jipt-checkbox"><input type="checkbox" id="jipt-translations-highlight"' + checked_highlight + '>Highlight</label>' + '</div>';
      var option_filter = config.preload_texts ? '<div class="jipt-control-group">' + '<label class="jipt-checkbox"><input type="checkbox" id="jipt-translations-filter"' + checked_filter + '>List only texts from the current page</label>' + '<div class="jipt-help-block">Home screen will show only strings used on this page.</div>' + '</div>' : '';
      var touch_optimized = config.touch_optimized ? '<div class="jipt-control-group">' + '<label class="jipt-checkbox"><input type="checkbox" id="jipt-touch-optimized"' + touch_optimized + '>Touch optimized mode</label>' + '</div>' : '';
      var keyboard_shortcuts = isMobile ? '' : '<div class="jipt-control-group jipt-settings-toggle">' + '<a href="javascript:void(0);" id="jipt-hotkeys-settings">Keyboard Shortcuts</a>' + '</div>';
      var jiptWorkflowStep = '';

      if (jipt.workflowSteps.length) {
        jiptWorkflowStep = '<div class="jipt-control-group workflow-step-group">' + '<label for="jipt-workflow-step">Workflow Step: </label>' + '<div>' + '<select class="input-block-level" id="jipt-workflow-step"></select>' + '</div>' + '</div>';
      }

      return '<div class="crowdin-translation-panel-container">' + '<div id="translation_panel_tabs_content" class="jipt-tabs-content">' + '<div class="jipt-tab-pane" id="jipt-translations">' + '<div class="jipt-clear-btn-wrapper">' + '<input type="text" class="jipt-search-phrase input-block-level" placeholder="Type to search string" />' + '<a class="jipt-clear-btn" href="#" style="display: none;"></a>' + '</div>' + '<div class="jipt-phrases-container no-focus">' + '<ul class="jipt-phrases-to-translate">' + '<li class="jipt-loading-msg">Loading...</li>' + '</ul>' + '</div>' + '</div>' + '<div class="jipt-tab-pane" id="jipt-options" style="display: none">' + '<div class="jipt-control-group">' + '<label for="jipt-target-languages">Language: </label>' + '<div>' + '<select class="input-block-level" id="jipt-target-languages"></select>' + '</div>' + '</div>' + jiptWorkflowStep + '<div>' + '<button type="button" class="jipt-btn" id="jipt-change-language-and-step">Change</button>' + '</div>' + '<hr class="jipt-hr">' + option_preview + option_highlight + option_filter + touch_optimized + '<hr class="jipt-hr jipt-settings-toggle">' + '<div class="jipt-control-group jipt-clearfix jipt-settings-toggle">' + '<a class="pull-left jipt_user" target="_blank" href="' + profile + '">' + '<img alt="" ' + user_picture_src + ' class="jipt_user_picture"></a>' + '<div style="margin-left: 54px">' + '<div class="jipt_user_name"><a target="_blank" href="' + profile + '">' + user_name + '</a></div>' + '<button type="button" id="jipt-logout" class="jipt-btn">Log Out</button>' + '</div>' + '</div>' + '<hr class="jipt-hr jipt-settings-toggle">' + '<div class="jipt-control-group jipt-settings-toggle">' + '<a target="_blank" href="' + jipt.projectURL + '">View in Crowdin</a>' + '</div>' + '<div class="jipt-control-group jipt-settings-toggle">' + '<a href="javascript:void(0);" id="jipt-editor-settings">Editor Settings</a>' + '</div>' + keyboard_shortcuts + '</div>' + '<div class="jipt-tab-pane" id="jipt-screenshot" style="display: none">' + '<div>Take a screenshot of the current screen and upload it to Crowdin. All strings will be tagged automatically.</div>' + '<div class="screenshot-button-section" style="margin-top: 20px">' + '<div><button type="button" id="make_screenshot" class="jipt-btn">Take screenshot</button></div>' + '</div>' + '<div class="screenshot-status" id="screenshot-status"></div>' + '</div>' + '</div>' + '</div>';
    },
    init: function init() {
      maskDocument();
      applyUserConfig();
      loadResource(Url.jiptCDN + '/jipt.css?v3', 'css');
      loadResource(Url.jiptCDN + '/lib/h2c.min.js', 'js');
      loadResource(Url.jiptCDN + '/lib/ResizeSensor.js', 'js');
      loadResource(Url.jiptCDN + '/lib/jquery.min.js', 'js', function () {
        $ = jQuery.noConflict(true); // $ is not a global variable

        jipt.init_plugins();
        jipt.init_editor_listener();
        $(document).ready(function () {
          jipt.checkCookie(function () {
            jipt.init_login_panel();
            jipt.init_highlight();
            jipt.init_preview();
            jipt.init_filter();
            jipt.init_touch_optimized();
            jipt.init_project();
          });
        });
      });
    },
    init_plugins: function init_plugins() {
      jipt.init_jipt_dialog();
      jipt.init_mouse_touch_events();
      jipt.init_drags();
      jipt.init_center_position();
    },
    init_icu: function init_icu() {
      loadResource(Url.jiptCDN + '/../js/lib/moment.min.js', 'js');
      loadResource(Url.jiptCDN + '/../js/lib/icu/Intl.complete.min.js', 'js');
      loadResource(Url.jiptCDN + '/../js/lib/icu/messageformatLight.js', 'js');
    },
    init_jipt_dialog: function init_jipt_dialog() {
      $.fn.jiptDialog = function (options) {
        options = $.extend({
          modal: false,
          position: '',
          save_position: false,
          drags: true,
          resize: false,
          fixed: true,
          title_pane: '',
          minimize_btn: true,
          close_btn: true,
          minimized: false,
          icon: '',
          buttons_pane: '',
          width: 'auto',
          height: 'auto',
          save_height: false,
          custom_class: '',
          close_callback: '',
          iframe: false,
          action: 'init'
        }, options);
        var dialog_inner = $(this);
        var dialog = {};
        var content = {};

        if (options.action !== 'init') {
          dialog = dialog_inner.parent();

          if (!dialog.hasClass('jipt-dialog')) {
            console.warn('Crowdin In-Context dialog: seems that dialog is not initialized.');
            return;
          }
        }

        switch (options.action) {
          case 'init':
            init();
            return content;

          case 'open':
            open();
            break;

          case 'close':
            close();
            break;

          case 'destroy':
            destroy();
            break;

          case 'toggle_minimized':
            toggle_minimized();
            break;

          case 'toggle_minimized_show':
            toggle_minimized(true);
            break;

          case 'center':
            dialog.center();
            break;

          case 'is_visible':
            return dialog.is(':visible');

          case 'move_to_front':
            move_to_front();
            break;

          default:
            console.warn('Crowdin JIPT dialog: unknown action :(');
            return;
        }

        function createOverlay() {
          if (!$('#jipt-modal-mask').length) {
            $($('<div>').attr('id', 'jipt-modal-mask').css('display', 'none')).appendTo('body');
          }
        }

        function init() {
          if (dialog_inner.hasClass('jipt-dialog-content')) {
            console.warn('Crowdin In-Context dialog: seems that dialog is already initialized.');
            return;
          }

          dialog = $('<div data-html2canvas-ignore="true" class="jipt-dialog crowdin-jipt ' + options.custom_class + '" style="display:none">');
          dialog_inner.addClass('jipt-dialog-content');
          dialog.appendTo('body');

          if (options.iframe) {
            var iframe_contents = dialog_inner.html();
            var iframe = $('<iframe class="crowdin-jipt" frameBorder="0"/>');
            iframe.css({
              width: '100%',
              display: 'block',
              overflow: 'hidden',
              height: options.height
            });
            dialog_inner.empty().append(iframe).css('padding', 0);
            dialog.html(dialog_inner);
            var iframe_doc = iframe.contents()[0];
            iframe_doc.open();
            iframe_doc.write('<!doctype html>' + '<html>' + '<head>' + '<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">' + '<link rel="stylesheet" type="text/css" href="' + Url.jiptCDN + '/jipt.css' + '"/>' + '</head>' + '<body style="margin: 0" id ="' + dialog_inner.get(0).id + '" class="jipt-dialog-content crowdin-jipt ' + options.custom_class + '">' + iframe_contents + '</body>' + '</html>');
            iframe_doc.close();
            content = iframe.contents();
            content.mousedown(function (e) {
              if ($(e.target).closest('.no-focus').length === 0) {
                move_to_front();
              }
            });
          } else {
            dialog.html(dialog_inner);
            content = dialog_inner;
          }

          var dialog_id = dialog_inner.attr('id');
          var icon_class = options.icon ? ' jipt-dialog-icon-' + options.icon : '';
          var close_btn = options.close_btn ? '<a href="#" data-id="#' + dialog_id + '" class="jipt-close-btn jipt-dialog-close">&times;</a>' : '';
          var minimize_btn = options.minimize_btn ? '<a href="#" data-id="#' + dialog_id + '" class="jipt-minimize-btn jipt-dialog-minimize"><span></span></a>' : '';
          var title_pane = '';
          var title_buttons = '';
          var buttons_pane = '';

          if (options.title_pane) {
            title_pane = '<div class="jipt-dialog-title jipt-dialog-drags jipt-clearfix' + icon_class + '">' + options.title_pane + '</div>';
          }

          if (close_btn || minimize_btn) {
            title_buttons = '<div class="jipt-dialog-title-buttons jipt-clearfix">' + close_btn + minimize_btn + '</div>';
          }

          dialog_inner.before(title_buttons + title_pane);

          if (options.buttons_pane) {
            buttons_pane = '<div class="jipt-dialog-buttons jipt-dialog-drags jipt-clearfix">' + options.buttons_pane + '</div>';
            dialog_inner.after(buttons_pane);
          }

          dialog.css('position', options.fixed === true ? 'fixed' : 'absolute');
          dialog.width(options.width === 'auto' ? dialog.width() : options.width);
          dialog_inner.height(options.height);
          dialog_inner.append('<div class="jipt-dialog-content-mask" style="display: none; height:' + dialog_inner.height() + 'px;"><div>');

          if (options.save_height && !options.iframe) {
            dialog.data('save_height', true);
          }

          if (options.modal) {
            dialog.data('modal', true);
            createOverlay();
          }

          if (options.drags && options.title_pane) {
            var position = options.fixed === true ? 'fixed' : 'absolute';
            dialog.udraggable({
              position: position,
              handle: '.jipt-dialog-drags'
            });
          }

          if (options.resize) {
            dialog.addClass('jipt-dialog-resize');
            dialog_inner.before('<div class="jipt-dialog-mask mask-hidden"></div>');
          }

          if (options.minimized) {
            if (Storage.get(dialog_inner.attr('id') + '_min') !== 'no') {
              dialog.addClass('jipt-dialog-minimized');
            }
          }

          dialog.find('.jipt-dialog-close').click(function () {
            dialog_inner.jiptDialog({
              action: 'close'
            });
            return false;
          });
          dialog.find('.jipt-dialog-minimize').click(function () {
            dialog_inner.jiptDialog({
              action: 'toggle_minimized'
            });
            return false;
          });
          dialog.find('.jipt-dialog-title').on('utap', function () {
            if (dialog.hasClass('jipt-dialog-minimized')) {
              dialog_inner.jiptDialog({
                action: 'toggle_minimized_show'
              });
            }
          });
          dialog.on('jipt_dialog_close', function () {
            if (options.close_callback) {
              options.close_callback();
            }
          });
          options.save_position ? restorePosition() : setPosition();
        }

        function toggle_minimized(show_only) {
          var offset;

          if (dialog.hasClass('jipt-dialog-minimized')) {
            dialog.removeClass('jipt-dialog-minimized');

            if (Storage.get(dialog_inner.attr('id') + '_normal')) {
              offset = JSON.parse(Storage.get(dialog_inner.attr('id') + '_normal'));
              dialog.css(offset);
            } else {
              dialog.css('top', $(window).height() - dialog.outerHeight() - 10 + 'px');
            }
          } else if (!show_only) {
            var offset_top = dialog.offset().top - $(window).scrollTop();
            var offset_left = dialog.offset().left - $(window).scrollLeft();
            offset = {
              top: offset_top,
              left: offset_left
            }; // relative to window

            Storage.save(dialog_inner.attr('id') + '_normal', JSON.stringify(offset));
            dialog.addClass('jipt-dialog-minimized');
          }
        }

        function setPosition() {
          var top, left;

          switch (options.position) {
            case 'center':
              if (options.fixed === false) {
                dialog.center(window, true);
              } else {
                dialog.center();
              }

              break;

            case 'bottom-left':
              top = $(window).height() - dialog.outerHeight() - 10 + $(window).scrollTop();
              dialog.css({
                top: (top < 0 ? 0 : top) + 'px',
                left: 10 + 'px'
              });
              break;

            case 'bottom-right':
              top = $(window).height() - dialog.outerHeight() - 10 + $(window).scrollTop();
              left = $(window).width() - dialog.outerWidth() - 10 + $(window).scrollLeft();
              dialog.css({
                top: (top < 0 ? 0 : top) + 'px',
                left: (left > 0 ? 0 : left) + 'px'
              });
              break;

            default:
              if (options.fixed === false) {
                dialog.center(window, true);
              } else {
                dialog.center();
              }

          }
        }

        function savePosition() {
          $(window).unload(function () {
            if (dialog.is(':visible')) {
              var offset_top = dialog.offset().top - $(window).scrollTop();
              var offset_left = dialog.offset().left - $(window).scrollLeft();
              var offset = {
                top: offset_top,
                left: offset_left
              }; // relative to window

              Storage.save(dialog_inner.attr('id'), JSON.stringify(offset));

              if (dialog.hasClass('jipt-dialog-minimized')) {
                Storage.save(dialog_inner.attr('id') + '_min', 'yes');
              } else {
                Storage.save(dialog_inner.attr('id') + '_min', 'no');
              }
            }
          });
        }

        function restorePosition() {
          if (Storage.get(dialog_inner.attr('id') + '_min') === 'yes') {
            dialog.addClass('jipt-dialog-minimized');
          }

          if (Storage.get(dialog_inner.attr('id'))) {
            var offset = JSON.parse(Storage.get(dialog_inner.attr('id')));
            var min_offset_left = 0;
            var min_offset_top = 0;
            var max_offset_left = $(window).width() - dialog.outerWidth();
            var max_offset_top = $(window).height() - dialog.outerHeight();

            if (offset.left < min_offset_left) {
              offset.left = min_offset_left;
            } else if (offset.left > max_offset_left) {
              offset.left = max_offset_left;
            }

            if (offset.top < min_offset_top) {
              offset.top = min_offset_top;
            } else if (offset.top > max_offset_top) {
              offset.top = max_offset_top;
            }

            dialog.css(offset);
            savePosition();
          } else {
            setPosition();
            savePosition();
          }
        }

        function open() {
          if (dialog.data('modal')) {
            $('#jipt-modal-mask').css('z-index', jipt.dialog_zindex += 1).show();
            $('html').addClass('jipt-no-scroll');
          }

          if (options.position !== '' && !dialog.is(':visible')) {
            setPosition();
          }

          move_to_front();
          dialog.css('visibility', 'visible');
          dialog.css('display', 'block');

          if (dialog.data('save_height')) {
            dialog_inner.height(dialog_inner.height()).css('overflow', 'auto');
          }
        }

        function close() {
          if (dialog.data('modal')) {
            $('html').removeClass('jipt-no-scroll');
            $('#jipt-modal-mask').hide();
          }

          dialog.css('display', 'none');
          dialog.trigger('jipt_dialog_close');
        }

        function destroy() {
          if (dialog.data('modal')) {
            $('#jipt-modal-mask').hide();
          }

          dialog.remove();
        }

        function move_to_front() {
          var time, type;
          var sensor = typeof __ResizeSensor !== 'undefined' && new __ResizeSensor(dialog, function (e) {
            if (type === 'move_to_front') {
              dialog.find('.jipt-dialog-mask').removeClass('mask-hidden');
              clearTimeout(time);
              time = setTimeout(function () {
                $(document).on('mouseup', function () {
                  dialog.find('.jipt-dialog-mask').addClass('mask-hidden');
                  sensor.detach(dialog);
                });
              }, 100);
            }

            type = options.action;
          });
          dialog.css('z-index', jipt.dialog_zindex += 1).siblings('.jipt-dialog').removeClass('active-dialog').end().addClass('active-dialog');
        }
      };

      $(document).on('mousedown utapstart', function (e) {
        var dialog = $(e.target).closest('.jipt-dialog');

        if (dialog.length) {
          dialog.find('.jipt-dialog-content').jiptDialog({
            action: 'move_to_front'
          });
        } else {
          $('.jipt-dialog').removeClass('active-dialog');
        }
      });
    },
    init_mouse_touch_events: function init_mouse_touch_events() {
      /* Jquery plugin for unified mouse and touch events
       * Version 0.3.2
       * Modified by Anton
       * https://github.com/mmikowski/jquery.event.ue/blob/master/jquery.event.ue.js
       */
      var $Special = $.event.special,
          // shortcut for special event
      motionMapMap = {},
          // map of pointer motions by cursor
      isMoveBound = false,
          // flag if move handlers bound
      pxPinchZoom = -1,
          // distance between pinch-zoom points
      optionKey = 'ue_bound',
          // data key for storing options
      doDisableMouse = false,
          // flag to discard mouse input
      defaultOptMap = {
        // Default option hash
        bound_ns_map: {},
        // namspace hash e.g. bound_ns_map.utap.fred
        wheel_ratio: 15,
        // multiplier for mousewheel delta
        px_radius: 1,
        // 'distance' dragged before dragstart
        ignore_class: ':input',
        // 'not' suppress matching elements
        tap_time: 200,
        // millisecond max time to consider tap
        held_tap_time: 300 // millisecond min time to consider taphold

      },
          callbackList = [],
          // global callback stack
      zoomMouseNum = 1,
          // multiplier for mouse zoom
      zoomTouchNum = 4,
          // multiplier for touch zoom
      boundList,
          Ue,
          motionDragId,
          motionHeldId,
          motionDzoomId,
          motion1ZoomId,
          motion2ZoomId,
          checkMatchVal,
          removeListVal,
          pushUniqVal,
          makeListPlus,
          fnHeld,
          fnMotionStart,
          fnMotionMove,
          fnMotionEnd,
          onMouse,
          onTouch,
          onMousewheel; //----------------- END MODULE SCOPE VARIABLES ---------------
      //------------------- BEGIN UTILITY METHODS ------------------
      // Begin utiltity /makeListPlus/
      // Returns an array with much desired methods:
      //   * remove_val(value) : remove element that matches
      //     the provided value. Returns number of elements
      //     removed.
      //   * match_val(value)  : shows if a value exists
      //   * push_uniq(value)  : pushes a value onto the stack
      //     iff it does not already exist there
      // Note: the reason I need this is to compare objects to
      //   objects (perhaps jQuery has something similar?)

      checkMatchVal = function checkMatchVal(data) {
        var match_count = 0,
            idx;

        for (idx = this.length; idx; 0) {
          if (this[--idx] === data) {
            match_count++;
          }
        }

        return match_count;
      };

      removeListVal = function removeListVal(data) {
        var removed_count = 0,
            idx;

        for (idx = this.length; idx; 0) {
          if (this[--idx] === data) {
            this.splice(idx, 1);
            removed_count++;
            idx++;
          }
        }

        return removed_count;
      };

      pushUniqVal = function pushUniqVal(data) {
        if (checkMatchVal.call(this, data)) {
          return false;
        }

        this.push(data);
        return true;
      }; // primary utility


      makeListPlus = function makeListPlus(input_list) {
        if (input_list && $.isArray(input_list)) {
          if (input_list.remove_val) {
            console.warn('The array appears to already have listPlus capabilities');
            return input_list;
          }
        } else {
          input_list = [];
        }

        input_list.remove_val = removeListVal;
        input_list.match_val = checkMatchVal;
        input_list.push_uniq = pushUniqVal;
        return input_list;
      }; // End utility /makeListPlus/
      //-------------------- END UTILITY METHODS -------------------
      //--------------- BEGIN JQUERY SPECIAL EVENTS ----------------
      // Unique array for bound objects


      boundList = makeListPlus(); // Begin define special event handlers

      Ue = {
        setup: function setup(data, a_names, fn_bind) {
          var elem_this = this,
              $to_bind = $(elem_this),
              seen_map = {},
              option_map,
              idx,
              namespace_key,
              ue_namespace_code,
              namespace_list; // if previous related event bound do not rebind, but do add to
          // type of event bound to this element, if not already noted

          if ($.data(this, optionKey)) {
            return;
          }

          option_map = {};
          $.extend(true, option_map, defaultOptMap);
          $.data(elem_this, optionKey, option_map);
          namespace_list = makeListPlus(a_names.slice(0));

          if (!namespace_list.length || namespace_list[0] === '') {
            namespace_list = ['000'];
          }

          NSPACE_00: for (idx = 0; idx < namespace_list.length; idx++) {
            namespace_key = namespace_list[idx];

            if (!namespace_key) {
              continue NSPACE_00;
            }

            if (seen_map.hasOwnProperty(namespace_key)) {
              continue NSPACE_00;
            }

            seen_map[namespace_key] = true;
            ue_namespace_code = '.__ue' + namespace_key;
            $to_bind.bind('mousedown' + ue_namespace_code, onMouse);
            $to_bind.bind('touchstart' + ue_namespace_code, onTouch);
            $to_bind.bind('mousewheel' + ue_namespace_code, onMousewheel);
          }

          boundList.push_uniq(elem_this); // record as bound element

          if (!isMoveBound) {
            // console.log('first element bound - adding global binds');
            $(document).bind('mousemove.__ue', onMouse);
            $(document).bind('touchmove.__ue', onTouch);
            $(document).bind('mouseup.__ue', onMouse);
            $(document).bind('touchend.__ue', onTouch);
            $(document).bind('touchcancel.__ue', onTouch);
            isMoveBound = true;
          }
        },
        // arg_map.type = string - name of event to bind
        // arg_map.data = poly - whatever (optional) data was passed when binding
        // arg_map.namespace = string - A sorted, dot-delimited list of namespaces
        //   specified when binding the event
        // arg_map.handler  = fn - the event handler the developer wishes to be bound
        //   to the event.  This function should be called whenever the event
        //   is triggered
        // arg_map.guid = number - unique ID for event handler, provided by jQuery
        // arg_map.selector = string - selector used by 'delegate' or 'live' jQuery
        //   methods.  Only available when these methods are used.
        //
        // this - the element to which the event handler is being bound
        // this always executes immediate after setup (if first binding)
        add: function add(arg_map) {
          var elem_this = this,
              option_map = $.data(elem_this, optionKey),
              namespace_str = arg_map.namespace,
              event_type = arg_map.type,
              bound_ns_map,
              namespace_list,
              idx,
              namespace_key;

          if (!option_map) {
            return;
          }

          bound_ns_map = option_map.bound_ns_map;

          if (!bound_ns_map[event_type]) {
            // this indicates a non-namespaced entry
            bound_ns_map[event_type] = {};
          }

          if (!namespace_str) {
            return;
          }

          namespace_list = namespace_str.split('.');

          for (idx = 0; idx < namespace_list.length; idx++) {
            namespace_key = namespace_list[idx];
            bound_ns_map[event_type][namespace_key] = true;
          }
        },
        remove: function remove(arg_map) {
          var elem_bound = this,
              option_map = $.data(elem_bound, optionKey),
              bound_ns_map = option_map.bound_ns_map,
              event_type = arg_map.type,
              namespace_str = arg_map.namespace,
              namespace_list,
              idx,
              namespace_key;

          if (!bound_ns_map[event_type]) {
            return;
          } // No namespace(s) provided:
          // Remove complete record for custom event type (e.g. utap)


          if (!namespace_str) {
            delete bound_ns_map[event_type];
            return;
          } // Namespace(s) provided:
          // Remove namespace flags from each custom event typei (e.g. utap)
          // record.  If all claimed namespaces are removed, remove
          // complete record.


          namespace_list = namespace_str.split('.');

          for (idx = 0; idx < namespace_list.length; idx++) {
            namespace_key = namespace_list[idx];

            if (bound_ns_map[event_type][namespace_key]) {
              delete bound_ns_map[event_type][namespace_key];
            }
          }

          if ($.isEmptyObject(bound_ns_map[event_type])) {
            delete bound_ns_map[event_type];
          }
        },
        teardown: function teardown(a_names) {
          var elem_bound = this,
              $bound = $(elem_bound),
              option_map = $.data(elem_bound, optionKey),
              bound_ns_map = option_map.bound_ns_map,
              idx,
              namespace_key,
              ue_namespace_code,
              namespace_list; // do not tear down if related handlers are still bound

          if (!$.isEmptyObject(bound_ns_map)) {
            return;
          }

          namespace_list = makeListPlus(a_names);
          namespace_list.push_uniq('000');

          NSPACE_01: for (idx = 0; idx < namespace_list.length; idx++) {
            namespace_key = namespace_list[idx];

            if (!namespace_key) {
              continue NSPACE_01;
            }

            ue_namespace_code = '.__ue' + namespace_key;
            $bound.unbind('mousedown' + ue_namespace_code);
            $bound.unbind('touchstart' + ue_namespace_code);
            $bound.unbind('mousewheel' + ue_namespace_code);
          }

          $.removeData(elem_bound, optionKey); // Unbind document events only after last element element is removed

          boundList.remove_val(this);

          if (boundList.length === 0) {
            // console.log('last bound element removed - removing global binds');
            $(document).unbind('mousemove.__ue');
            $(document).unbind('touchmove.__ue');
            $(document).unbind('mouseup.__ue');
            $(document).unbind('touchend.__ue');
            $(document).unbind('touchcancel.__ue');
            isMoveBound = false;
          }
        }
      }; // End define special event handlers
      //--------------- BEGIN JQUERY SPECIAL EVENTS ----------------
      //------------------ BEGIN MOTION CONTROLS -------------------
      // Begin motion control /fnHeld/

      fnHeld = function fnHeld(arg_map) {
        var timestamp = +new Date(),
            motion_id = arg_map.motion_id,
            motion_map = arg_map.motion_map,
            bound_ns_map = arg_map.bound_ns_map,
            event_ue;
        delete motion_map.idto_tapheld;

        if (!motion_map.do_allow_tap) {
          return;
        }

        motion_map.px_end_x = motion_map.px_start_x;
        motion_map.px_end_y = motion_map.px_start_y;
        motion_map.ms_timestop = timestamp;
        motion_map.ms_elapsed = timestamp - motion_map.ms_timestart;

        if (bound_ns_map.uheld) {
          event_ue = $.Event('uheld');
          $.extend(event_ue, motion_map);
          $(motion_map.elem_bound).trigger(event_ue);
        } // remove tracking, as we want no futher action on this motion


        if (bound_ns_map.uheldstart) {
          event_ue = $.Event('uheldstart');
          $.extend(event_ue, motion_map);
          $(motion_map.elem_bound).trigger(event_ue);
          motionHeldId = motion_id;
        } else {
          delete motionMapMap[motion_id];
        }
      }; // End motion control /fnHeld/
      // Begin motion control /fnMotionStart/


      fnMotionStart = function fnMotionStart(arg_map) {
        var motion_id = arg_map.motion_id,
            event_src = arg_map.event_src,
            request_dzoom = arg_map.request_dzoom,
            option_map = $.data(arg_map.elem, optionKey),
            bound_ns_map = option_map.bound_ns_map,
            $target = $(event_src.target),
            do_zoomstart = false,
            motion_map,
            cb_map,
            do_allow_tap,
            event_ue; // this should never happen, but it does

        if (motionMapMap[motion_id]) {
          return;
        }

        if (request_dzoom && !bound_ns_map.uzoomstart) {
          return;
        } // :input selector includes text areas


        if ($target.is(option_map.ignore_class) || $target.is('a') || $target.parent().is('a')) {
          return;
        }

        event_src.preventDefault();
        do_allow_tap = bound_ns_map.utap || bound_ns_map.uheld || bound_ns_map.uheldstart ? true : false;
        cb_map = callbackList.pop();

        while (cb_map) {
          if ($target.is(cb_map.selector_str) || $(arg_map.elem).is(cb_map.selector_str)) {
            if (cb_map.callback_match) {
              cb_map.callback_match(arg_map);
            }
          } else {
            if (cb_map.callback_nomatch) {
              cb_map.callback_nomatch(arg_map);
            }
          }

          cb_map = callbackList.pop();
        }

        motion_map = {
          do_allow_tap: do_allow_tap,
          elem_bound: arg_map.elem,
          elem_target: event_src.target,
          ms_elapsed: 0,
          ms_timestart: event_src.timeStamp,
          ms_timestop: undefined,
          option_map: option_map,
          orig_target: event_src.target,
          px_current_x: event_src.clientX,
          px_current_y: event_src.clientY,
          px_end_x: undefined,
          px_end_y: undefined,
          px_start_x: event_src.clientX,
          px_start_y: event_src.clientY,
          timeStamp: event_src.timeStamp
        };
        motionMapMap[motion_id] = motion_map;
        event_ue = $.Event('utapstart');
        $.extend(event_ue, motion_map);
        $(motion_map.elem_bound).trigger(event_ue);

        if (bound_ns_map.uzoomstart) {
          if (request_dzoom) {
            motionDzoomId = motion_id;
          } else if (!motion1ZoomId) {
            motion1ZoomId = motion_id;
          } else if (!motion2ZoomId) {
            motion2ZoomId = motion_id;
            event_ue = $.Event('uzoomstart');
            do_zoomstart = true;
          }

          if (do_zoomstart) {
            event_ue = $.Event('uzoomstart');
            motion_map.px_delta_zoom = 0;
            $.extend(event_ue, motion_map);
            $(motion_map.elem_bound).trigger(event_ue);
            return;
          }
        }

        if (bound_ns_map.uheld || bound_ns_map.uheldstart) {
          motion_map.idto_tapheld = setTimeout(function () {
            fnHeld({
              motion_id: motion_id,
              motion_map: motion_map,
              bound_ns_map: bound_ns_map
            });
          }, option_map.held_tap_time);
        }
      }; // End motion control /fnMotionStart/
      // Begin motion control /fnMotionMove/


      fnMotionMove = function fnMotionMove(arg_map) {
        var motion_id = arg_map.motion_id,
            event_src = arg_map.event_src,
            do_zoommove = false,
            motion_map,
            option_map,
            bound_ns_map,
            event_ue,
            px_pinch_zoom,
            px_delta_zoom,
            mzoom1_map,
            mzoom2_map;

        if (!motionMapMap[motion_id]) {
          return;
        }

        event_src.preventDefault();
        motion_map = motionMapMap[motion_id];
        option_map = motion_map.option_map;
        bound_ns_map = option_map.bound_ns_map;
        motion_map.timeStamp = event_src.timeStamp;
        motion_map.elem_target = event_src.target;
        motion_map.ms_elapsed = event_src.timeStamp - motion_map.ms_timestart;
        motion_map.px_delta_x = event_src.clientX - motion_map.px_current_x;
        motion_map.px_delta_y = event_src.clientY - motion_map.px_current_y;
        motion_map.px_current_x = event_src.clientX;
        motion_map.px_current_y = event_src.clientY; // native event object override

        motion_map.timeStamp = event_src.timeStamp; // disallow tap if outside of zone or time elapsed
        // we use this for other events, so we do it every time

        if (motion_map.do_allow_tap) {
          if (Math.abs(motion_map.px_delta_x) > option_map.px_radius || Math.abs(motion_map.pd_delta_y) > option_map.px_radius || motion_map.ms_elapsed > option_map.tap_time) {
            motion_map.do_allow_tap = false;
          }
        }

        if (motion1ZoomId && motion2ZoomId && (motion_id === motion1ZoomId || motion_id === motion2ZoomId)) {
          motionMapMap[motion_id] = motion_map;
          mzoom1_map = motionMapMap[motion1ZoomId];
          mzoom2_map = motionMapMap[motion2ZoomId];
          px_pinch_zoom = Math.floor(Math.sqrt(Math.pow(mzoom1_map.px_current_x - mzoom2_map.px_current_x, 2) + Math.pow(mzoom1_map.px_current_y - mzoom2_map.px_current_y, 2)) + 0.5);

          if (pxPinchZoom === -1) {
            px_delta_zoom = 0;
          } else {
            px_delta_zoom = (px_pinch_zoom - pxPinchZoom) * zoomTouchNum;
          } // save value for next iteration delta comparison


          pxPinchZoom = px_pinch_zoom;
          do_zoommove = true;
        } else if (motionDzoomId === motion_id) {
          if (bound_ns_map.uzoommove) {
            px_delta_zoom = motion_map.px_delta_y * zoomMouseNum;
            do_zoommove = true;
          }
        }

        if (do_zoommove) {
          event_ue = $.Event('uzoommove');
          motion_map.px_delta_zoom = px_delta_zoom;
          $.extend(event_ue, motion_map);
          $(motion_map.elem_bound).trigger(event_ue);
          return;
        }

        if (motionHeldId === motion_id) {
          if (bound_ns_map.uheldmove) {
            event_ue = $.Event('uheldmove');
            $.extend(event_ue, motion_map);
            $(motion_map.elem_bound).trigger(event_ue);
          }
        } else if (motionDragId === motion_id) {
          if (bound_ns_map.udragmove) {
            event_ue = $.Event('udragmove');
            $.extend(event_ue, motion_map);
            $(motion_map.elem_bound).trigger(event_ue);
          }
        }

        if (!motionDragId && !motionHeldId && bound_ns_map.udragstart && motion_map.do_allow_tap === false) {
          motionDragId = motion_id;
          event_ue = $.Event('udragstart');
          $.extend(event_ue, motion_map);
          $(motion_map.elem_bound).trigger(event_ue);

          if (motion_map.idto_tapheld) {
            clearTimeout(motion_map.idto_tapheld);
            delete motion_map.idto_tapheld;
          }
        }
      }; // End motion control /fnMotionMove/
      // Begin motion control /fnMotionEnd/


      fnMotionEnd = function fnMotionEnd(arg_map) {
        var motion_id = arg_map.motion_id,
            event_src = arg_map.event_src,
            do_zoomend = false,
            motion_map,
            option_map,
            bound_ns_map,
            event_ue;
        doDisableMouse = false;

        if (!motionMapMap[motion_id]) {
          return;
        }

        motion_map = motionMapMap[motion_id];
        option_map = motion_map.option_map;
        bound_ns_map = option_map.bound_ns_map;
        motion_map.elem_target = event_src.target;
        motion_map.ms_elapsed = event_src.timeStamp - motion_map.ms_timestart;
        motion_map.ms_timestop = event_src.timeStamp;

        if (motion_map.px_current_x) {
          motion_map.px_delta_x = event_src.clientX - motion_map.px_current_x;
          motion_map.px_delta_y = event_src.clientY - motion_map.px_current_y;
        }

        motion_map.px_current_x = event_src.clientX;
        motion_map.px_current_y = event_src.clientY;
        motion_map.px_end_x = event_src.clientX;
        motion_map.px_end_y = event_src.clientY; // native event object override

        motion_map.timeStamp = event_src.timeStamp;
        event_ue = $.Event('utapend');
        $.extend(event_ue, motion_map);
        $(motion_map.elem_bound).trigger(event_ue); // clear-out any long-hold tap timer

        if (motion_map.idto_tapheld) {
          clearTimeout(motion_map.idto_tapheld);
          delete motion_map.idto_tapheld;
        } // trigger utap


        if (bound_ns_map.utap && motion_map.ms_elapsed <= option_map.tap_time && motion_map.do_allow_tap) {
          event_ue = $.Event('utap');
          $.extend(event_ue, motion_map);
          $(motion_map.elem_bound).trigger(event_ue);
        } // trigger udragend


        if (motion_id === motionDragId) {
          if (bound_ns_map.udragend) {
            event_ue = $.Event('udragend');
            $.extend(event_ue, motion_map);
            $(motion_map.elem_bound).trigger(event_ue);
          }

          motionDragId = undefined;
        } // trigger heldend


        if (motion_id === motionHeldId) {
          if (bound_ns_map.uheldend) {
            event_ue = $.Event('uheldend');
            $.extend(event_ue, motion_map);
            $(motion_map.elem_bound).trigger(event_ue);
          }

          motionHeldId = undefined;
        } // trigger uzoomend


        if (motion_id === motionDzoomId) {
          do_zoomend = true;
          motionDzoomId = undefined;
        } // cleanup zoom info
        else if (motion_id === motion1ZoomId) {
            if (motion2ZoomId) {
              motion1ZoomId = motion2ZoomId;
              motion2ZoomId = undefined;
              do_zoomend = true;
            } else {
              motion1ZoomId = undefined;
            }

            pxPinchZoom = -1;
          }

        if (motion_id === motion2ZoomId) {
          motion2ZoomId = undefined;
          pxPinchZoom = -1;
          do_zoomend = true;
        }

        if (do_zoomend && bound_ns_map.uzoomend) {
          event_ue = $.Event('uzoomend');
          motion_map.px_delta_zoom = 0;
          $.extend(event_ue, motion_map);
          $(motion_map.elem_bound).trigger(event_ue);
        } // remove pointer from consideration


        delete motionMapMap[motion_id];
      }; // End motion control /fnMotionEnd/
      //------------------ END MOTION CONTROLS -------------------
      //------------------- BEGIN EVENT HANDLERS -------------------
      // Begin event handler /onTouch/ for all touch events.
      // We use the 'type' attribute to dispatch to motion control


      onTouch = function onTouch(event) {
        var elem_this = this,
            timestamp = +new Date(),
            o_event = event.originalEvent,
            a_touches = o_event.changedTouches || [],
            idx,
            touch_event,
            motion_id,
            handler_fn;
        doDisableMouse = true;
        event.timeStamp = timestamp;

        switch (event.type) {
          case 'touchstart':
            handler_fn = fnMotionStart; //             event.preventDefault();

            break;

          case 'touchmove':
            handler_fn = fnMotionMove; //             event.preventDefault();

            break;

          case 'touchend':
          case 'touchcancel':
            handler_fn = fnMotionEnd;
            break;

          default:
            handler_fn = null;
        }

        if (!handler_fn) {
          return;
        }

        for (idx = 0; idx < a_touches.length; idx++) {
          touch_event = a_touches[idx];
          motion_id = 'touch' + String(touch_event.identifier);
          event.clientX = touch_event.clientX;
          event.clientY = touch_event.clientY;
          handler_fn({
            elem: elem_this,
            motion_id: motion_id,
            event_src: event
          });
        }
      }; // End event handler /onTouch/
      // Begin event handler /onMouse/ for all mouse events
      // We use the 'type' attribute to dispatch to motion control


      onMouse = function onMouse(event) {
        var elem_this = this,
            motion_id = 'mouse' + String(event.button),
            request_dzoom = false,
            handler_fn;

        if (doDisableMouse) {
          event.stopImmediatePropagation();
          return;
        }

        if (event.shiftKey) {
          request_dzoom = true;
        } // skip left or middle clicks


        if (event.type !== 'mousemove') {
          if (event.button !== 0) {
            return true;
          }
        }

        switch (event.type) {
          case 'mousedown':
            handler_fn = fnMotionStart;
            break;

          case 'mouseup':
            handler_fn = fnMotionEnd;
            break;

          case 'mousemove':
            handler_fn = fnMotionMove; //             event.preventDefault();

            break;

          default:
            handler_fn = null;
        }

        if (!handler_fn) {
          return;
        }

        handler_fn({
          elem: elem_this,
          event_src: event,
          request_dzoom: request_dzoom,
          motion_id: motion_id
        });
      }; // End event handler /onMouse/
      //-------------------- END EVENT HANDLERS --------------------
      // Export special events through jQuery API


      $Special.ue = $Special.utap = $Special.uheld = $Special.uzoomstart = $Special.uzoommove = $Special.uzoomend = $Special.udragstart = $Special.udragmove = $Special.udragend = $Special.uheldstart = $Special.uheldmove = $Special.uheldend = Ue;

      $.ueSetGlobalCb = function (selector_str, callback_match, callback_nomatch) {
        callbackList.push({
          selector_str: selector_str || '',
          callback_match: callback_match || null,
          callback_nomatch: callback_nomatch || null
        });
      };
    },
    init_drags: function init_drags() {
      /* Jquery Udraggable
       * Modified by Anton
       * http://grantm.github.io/jquery-udraggable/
       */
      'use strict';

      var floor = Math.floor;
      var min = Math.min;
      var max = Math.max;

      window.requestAnimationFrame = window.requestAnimationFrame || function (work) {
        return setTimeout(work, 10);
      };

      window.cancelAnimationFrame = window.cancelAnimationFrame || function (id) {
        return clearTimeout(id);
      }; // Constructor function


      var UDraggable = function UDraggable(el, options) {
        var that = this;
        this.el = el;
        this.$el = $(el);
        this.options = $.extend({}, $.fn.udraggable.defaults, options);
        this.positionElement = this.options.positionElement || this.positionElement;
        this.getStartPosition = this.options.getStartPosition || this.getStartPosition;

        this.updatePositionFrameHandler = function () {
          delete that.queuedUpdate;

          if (that.ui) {
            // anton
            var pos = that.ui.position;
            that.positionElement(that.$el, that.started, pos.left, pos.top);

            if (that.options.dragUpdate) {
              that.options.dragUpdate.apply(that.el, [that.ui]);
            }
          }
        };

        this.queuePositionUpdate = function () {
          if (!that.queuedUpdate) {
            that.queuedUpdate = window.requestAnimationFrame(that.updatePositionFrameHandler);
          }
        };

        this.init();
      };

      UDraggable.prototype = {
        constructor: UDraggable,
        init: function init() {
          var that = this;
          this.disabled = false;
          this.started = false;
          this.normalisePosition();
          var $target = this.options.handle ? this.$el.find(this.options.handle) : this.$el;
          $target.on('utapstart.udraggable', function (e) {
            $(document.body).addClass('draggable');
          }).on('utapend.udraggable', function (e) {
            $(document.body).removeClass('draggable');
          });

          if (this.options.longPress) {
            $target.on('uheldstart.udraggable', function (e) {
              that.start(e);
            }).on('uheldmove.udraggable', function (e) {
              that.move(e);
            }).on('uheldend.udraggable', function (e) {
              that.end(e);
            });
          } else {
            $target.on('udragstart.udraggable', function (e) {
              that.start(e);
            }).on('udragmove.udraggable', function (e) {
              that.move(e);
            }).on('udragend.udraggable', function (e) {
              that.end(e);
            });
          }
        },
        destroy: function destroy() {
          var $target = this.options.handle ? this.$el.find(this.options.handle) : this.$el;
          $target.off('.udraggable');
          this.$el.removeData('udraggable');
        },
        disable: function disable() {
          this.disabled = true;
        },
        enable: function enable() {
          this.disabled = false;
        },
        option: function option() {
          var name;

          if (arguments.length === 0) {
            return this.options;
          }

          if (arguments.length === 2) {
            this.options[arguments[0]] = arguments[1];
            return;
          }

          if (arguments.length === 1) {
            if (typeof arguments[0] === 'string') {
              return this.options[arguments[0]];
            }

            if (_typeof(arguments[0]) === 'object') {
              for (name in arguments[0]) {
                if (arguments[0].hasOwnProperty(name)) {
                  this.options[name] = arguments[0][name];
                }
              }
            }
          }

          if (this.options.containment) {
            this._initContainment();
          }
        },
        normalisePosition: function normalisePosition() {
          var pos = this.$el.position();
          this.$el.css({
            position: this.options.position,
            top: pos.top,
            left: pos.left,
            right: 'auto',
            bottom: 'auto'
          });
        },
        start: function start(e) {
          if (this.disabled) {
            return;
          }

          var start = this.getStartPosition(this.$el);

          this._initContainment();

          this.ui = {
            helper: this.$el,
            offset: {
              top: start.y,
              left: start.x
            },
            originalPosition: {
              top: start.y,
              left: start.x
            },
            position: {
              top: start.y,
              left: start.x
            }
          };

          if (this.options.longPress) {
            this._start(e);
          }

          return this._stopPropagation(e);
        },
        move: function move(e) {
          if (this.disabled || !this.started && !this._start(e)) {
            return;
          }

          var delta_x = e.px_current_x - e.px_start_x;
          var delta_y = e.px_current_y - e.px_start_y;
          var axis = this.options.axis;

          if (axis && axis === 'x') {
            delta_y = 0;
          }

          if (axis && axis === 'y') {
            delta_x = 0;
          }

          var cur = {
            left: this.ui.originalPosition.left,
            top: this.ui.originalPosition.top
          };

          if (!axis || axis === 'x') {
            cur.left += delta_x;
          }

          if (!axis || axis === 'y') {
            cur.top += delta_y;
          }

          this._applyGrid(cur);

          this._applyContainment(cur);

          var pos = this.ui.position;

          if (cur.top !== pos.top || cur.left !== pos.left) {
            this.ui.position.left = cur.left;
            this.ui.position.top = cur.top;
            this.ui.offset.left = cur.left;
            this.ui.offset.top = cur.top;

            if (this.options.drag) {
              this.options.drag.apply(this.el, [e, this.ui]);
            }

            this.queuePositionUpdate();
          }

          return this._stopPropagation(e);
        },
        end: function end(e) {
          if (this.started || this._start(e)) {
            this.$el.removeClass('udraggable-dragging');
            this.started = false;

            if (this.queuedUpdate) {
              window.cancelAnimationFrame(this.queuedUpdate);
            }

            this.updatePositionFrameHandler();

            if (this.options.stop) {
              this.options.stop.apply(this.el, [e, this.ui]);
            }
          }

          return this._stopPropagation(e);
        },
        // helper methods
        _stopPropagation: function _stopPropagation(e) {
          e.stopPropagation();
          e.preventDefault();
          return false;
        },
        _start: function _start(e) {
          if (!this._mouseDistanceMet(e) || !this._mouseDelayMet(e)) {
            return;
          }

          this.started = true;
          this.queuePositionUpdate();

          if (this.options.start) {
            this.options.start.apply(this.el, [e, this.ui]);
          }

          this.$el.addClass('udraggable-dragging');
          return true;
        },
        _mouseDistanceMet: function _mouseDistanceMet(e) {
          return max(Math.abs(e.px_start_x - e.px_current_x), Math.abs(e.px_start_y - e.px_current_y)) >= this.options.distance;
        },
        _mouseDelayMet: function _mouseDelayMet(e) {
          return e.ms_elapsed > this.options.delay;
        },
        _initContainment: function _initContainment() {
          var o = this.options;
          var $c, ce;

          if (!o.containment) {
            this.containment = null;
            return;
          }

          if (o.containment.constructor === Array) {
            this.containment = o.containment;
            return;
          }

          if (o.containment === 'parent') {
            o.containment = this.$el.offsetParent();
          }

          $c = $(o.containment);
          ce = $c[0];

          if (!ce) {
            return;
          }

          this.containment = [0, 0, $c.innerWidth() - this.$el.outerWidth(), $c.innerHeight() - this.$el.outerHeight()];
        },
        _applyGrid: function _applyGrid(cur) {
          if (this.options.grid) {
            var gx = this.options.grid[0];
            var gy = this.options.grid[1];
            cur.left = floor((cur.left + gx / 2) / gx) * gx;
            cur.top = floor((cur.top + gy / 2) / gy) * gy;
          }
        },
        _applyContainment: function _applyContainment(cur) {
          var cont = this.containment;

          if (cont) {
            cur.left = min(max(cur.left, cont[0]), cont[2]);
            cur.top = min(max(cur.top, cont[1]), cont[3]);
          }
        },
        getStartPosition: function getStartPosition($el) {
          return {
            x: parseInt($el.css('left'), 10) || 0,
            y: parseInt($el.css('top'), 10) || 0
          };
        },
        positionElement: function positionElement($el, dragging, left, top) {
          $el.css({
            left: left,
            top: top
          });
        }
      }; // jQuery plugin function

      $.fn.udraggable = function (option) {
        var args = Array.prototype.slice.call(arguments, 1);
        var results = [];
        this.each(function () {
          var $this = $(this);
          var data = $this.data('udraggable');

          if (!data) {
            data = new UDraggable(this, option);
            $this.data('udraggable', data);
          }

          if (typeof option === 'string') {
            // option is a method - call it
            if (typeof data[option] !== 'function') {
              throw "jquery.udraggable has no '" + option + "' method";
            }

            var result = data[option].apply(data, args);

            if (result !== undefined) {
              results.push(result);
            }
          }
        });
        return results.length > 0 ? results[0] : this;
      };

      $.fn.udraggable.defaults = {
        axis: null,
        delay: 0,
        distance: 0,
        longPress: false,
        position: 'fixed',
        // callbacks
        drag: null,
        start: null,
        stop: function stop() {
          $(document.body).removeClass('draggable');
        }
      };
    },
    init_center_position: function init_center_position() {
      $.fn.center = function (parent, scroll) {
        if (parent) {
          parent = this.parent();
        } else {
          parent = window;
        }

        var scroll_top = 0;
        var scroll_left = 0;

        if (scroll) {
          scroll_top = $(parent).scrollTop();
          scroll_left = $(parent).scrollLeft();
        }

        var top = ($(parent).height() - this.outerHeight()) / 2 + scroll_top;
        var left = ($(parent).width() - this.outerWidth()) / 2 + scroll_left;
        top = top < 0 ? 0 : top;
        left = left < 0 ? 0 : left;
        this.css({
          top: top + 'px',
          left: left + 'px'
        });
        return this;
      };
    },
    place_close_btn: function place_close_btn() {
      if (typeof config.escape === 'function') {
        $('<a id="jipt-close-btn">').html('&times;').attr('href', '#').appendTo('#jipt-modal-mask').click(function (e) {
          e.preventDefault();
          config.escape();
        });
      }
    },
    init_login_panel: function init_login_panel() {
      jipt.loginDialog = $('<div>').attr('id', 'jipt-login-panel').html(jipt.loginDialogContent());
      jipt.loginDialog.content = jipt.loginDialog.jiptDialog({
        modal: true,
        width: '400px',
        height: '400px',
        drags: true,
        minimize_btn: false,
        close_btn: false,
        iframe: true,
        custom_class: 'jipt-login-dialog',
        title_pane: getLoginDialogTitle()
      });

      function getLoginDialogTitle() {
        return '<div style="text-align: center">' + '<div style="min-height: 32px">' + '<svg class="crowdin-jipt-logo" width="173" height="32">' + '<image xlink:href="' + Url.jiptCDN + '/images/crowdin-logo-small.svg" src="' + Url.jiptCDN + '/images/crowdin-logo-small.png" width="173" height="32" alt="Crowdin &mdash Localization Management Platform" />' + '</svg>' + '</div>' + '<h3 class="crowdin-jipt-login-header">Crowdin In-Context Translations</h3>' + '</div>';
      }

      jipt.loginDialog.content.find('#crowdin-login-language-field').change(function () {
        jipt.loginDialog.content.find('#crowdin-login-workflow-step-field').html(jipt.getWorkflowStepsOptions($(this).val()));
      });
      jipt.loginDialog.content.find('#crowdin-language-field').change(function () {
        jipt.loginDialog.content.find('#crowdin-workflow-step-field').html(jipt.getWorkflowStepsOptions($(this).val()));
      });
      jipt.loginDialog.content.find('#crowdin-jipt-login').click(function () {
        jipt._login_action();

        return false;
      });
      jipt.loginDialog.content.find('#crowdin-join').click(function () {
        jipt._join_action();

        return false;
      });
      jipt.loginDialog.content.find('#crowdin-select-language-and-step').click(function () {
        var language = jipt.loginDialog.content.find('#crowdin-language-field option:selected');
        jipt.set_current_language(language.val(), language.data('id'), language.html());
        var workflow_step = jipt.loginDialog.content.find('#crowdin-workflow-step-field option:selected');
        jipt.setCurrentWorkflowStep(workflow_step.val(), workflow_step.html());
        jipt.loginDialog.jiptDialog({
          action: 'close'
        });
        jipt.init_project();
        return false;
      });
      jipt.loginDialog.content.find('.crowdin-jipt-to-login').click(function () {
        jipt.show_login_panel();
      });
    },
    init_highlight: function init_highlight() {
      if (Storage.get('highlight') !== 'no') {
        jipt.translations_highlight = true;
        $('body').addClass('jipt-highlight');
      } else {
        jipt.translations_highlight = false;
        $('body').removeClass('jipt-highlight');
      }
    },
    init_preview: function init_preview() {
      if (Storage.get('preview') !== 'no') {
        jipt.translations_preview = true;
      } else {
        jipt.translations_preview = false;
      }
    },
    init_filter: function init_filter() {
      if (config.preload_texts && Storage.get('filter') !== 'yes') {
        jipt.translations_filter = false;
      } else {
        jipt.translations_filter = true;
      }
    },
    init_touch_optimized: function init_touch_optimized() {
      if (config.touch_optimized && Storage.get('touch_optimized') !== 'no') {
        $('#crowdin-translation-badge').remove();
        jipt.touch_optimized = true;
      } else {
        jipt.touch_optimized = false;
      }
    },
    init_translation_panel: function init_translation_panel() {
      var timeout = null;
      jipt.translationDialog = $('<div>').attr('id', 'crowdin-translation-panel').html(jipt.translationDialogContent());
      jipt.translationDialog.content = jipt.translationDialog.jiptDialog({
        width: '400px',
        height: '400px',
        drags: true,
        save_position: true,
        save_height: true,
        close_btn: false,
        iframe: true,
        position: 'bottom-left',
        custom_class: 'jipt-translations-dialog',
        icon: 'crowdin',
        minimized: jipt.minimized_translation_panel,
        title_pane: getTranslationDialogTitle(),
        buttons_pane: getTranslationDialogButtons()
      });

      function getTranslationDialogTitle() {
        return '<h4>Crowdin In-Context</h4>';
      }

      function getTranslationDialogButtons() {
        return jipt.translationDialogButtons();
      }

      jipt.translationDialog.jiptDialog({
        action: 'open'
      });
      var targetLanguages = jipt.translationDialog.content.find('#jipt-target-languages');
      targetLanguages.html(jipt._get_target_languages_options());
      jipt.translationDialog.content.find('#jipt-workflow-step').html(jipt.getWorkflowStepsOptions($(targetLanguages).val()));
      jipt.load_phrases();
      jipt.translationDialog.content.find('#jipt-target-languages').change(function () {
        jipt.translationDialog.content.find('#jipt-workflow-step').html(jipt.getWorkflowStepsOptions($(this).val()));
      });
      jipt.translationDialog.content.find('#jipt-change-language-and-step').click(function () {
        var selected = jipt.translationDialog.content.find('#jipt-target-languages').find('option:selected');
        jipt.set_current_language(selected.val(), selected.data('id'), selected.html());
        var workflow_step = jipt.translationDialog.content.find('#jipt-workflow-step').find('option:selected');
        jipt.setCurrentWorkflowStep(workflow_step.val(), workflow_step.html());
        window.location.reload();
      });
      jipt.translationDialog.content.find('#jipt-logout').click(function () {
        jipt._logout_action();

        return false;
      });
      jipt.translationDialog.content.find('#jipt-translations-preview').change(function () {
        if ($(this).prop('checked')) {
          Storage.save('preview', 'yes');
        } else {
          Storage.save('preview', 'no');
        }

        jipt.init_preview();
        jipt.set_translations_preview();
      });
      jipt.translationDialog.content.find('#jipt-translations-highlight').change(function () {
        if ($(this).prop('checked')) {
          Storage.save('highlight', 'yes');
        } else {
          Storage.save('highlight', 'no');
        }

        jipt.init_highlight();
      });
      jipt.translationDialog.content.find('#jipt-translations-filter').change(function () {
        if ($(this).prop('checked')) {
          Storage.save('filter', 'yes');
        } else {
          Storage.save('filter', 'no');
        }

        jipt.init_filter();
        jipt.rebuild_panel_phrases(jipt.panel_search_phrase);
      });
      jipt.translationDialog.content.find('#jipt-touch-optimized').change(function () {
        if ($(this).prop('checked')) {
          Storage.save('touch_optimized', 'yes');
        } else {
          Storage.save('touch_optimized', 'no');
        }

        jipt.init_touch_optimized();
        jipt.set_translations_preview();
      });
      jipt.translationDialog.content.on('click', '.jipt-phrases-to-translate li:not(.disabled) a', function () {
        jipt.show_editor(jipt.phrases[this.rel].data);
        return false;
      });
      jipt.translationDialog.content.on('click', '#jipt-hotkeys-settings', function () {
        jipt.show_settings('hotkeys');
        return false;
      });
      jipt.translationDialog.content.on('click', '#jipt-editor-settings', function () {
        jipt.show_settings('editor');
        return false;
      });
      $('#translation_panel_tabs a').click(function () {
        if (!$(this).hasClass('active')) {
          $(this).closest('ul').find('a').removeClass('active');
          $(this).addClass('active');
          jipt.translationDialog.content.find('#translation_panel_tabs_content .jipt-tab-pane').hide();
          var hrefHash = $(this).attr('href').substring($(this).attr('href').indexOf('#'));
          jipt.translationDialog.content.find(hrefHash).show();
        }

        return false;
      });
      $('#show_translations').click(function () {
        if (jipt.panel_pages) {
          $('#translation_panel_paging_wrapper').show();
        }

        jipt.translationDialog.parent().removeClass('jipt_options');
      });
      $('#show_options').click(function () {
        $('#translation_panel_paging_wrapper').hide();
        jipt.translationDialog.parent().addClass('jipt_options');
      });
      jipt.translationDialog.content.find('#make_screenshot').click(function () {
        var takeScreenshotBtn = this; //disable btn and hide highlights and preview before generating screenshot

        $(takeScreenshotBtn).attr('disabled', true);
        var translationsPreviewEnabled = false;
        var translationsHighlightEnabled = false;

        if (Storage.get('preview') === 'yes') {
          translationsPreviewEnabled = true;
          Storage.save('preview', 'no');
          jipt.init_preview();
          jipt.set_translations_preview();
        }

        if (Storage.get('highlight') === 'yes') {
          translationsHighlightEnabled = true;
          Storage.save('highlight', 'no');
          jipt.init_highlight();
        }

        jipt.translationDialog.content.find('#screenshot-status').addClass('alert-gray').text('Uploading...').show();
        var devicePixelRatio = window.devicePixelRatio;

        var getScale = function getScale(devicePixelRatio) {
          if (devicePixelRatio === 2) {
            return '@2x';
          }

          if (devicePixelRatio >= 3) {
            return '@3x';
          }

          return '';
        };

        __html2canvas(document.body, {
          allowTaint: true,
          scrollY: 0,
          scrollX: 0,
          proxy: Url.getFullUrl('/api/v2/jipt/project/' + jipt.projectId + '/screenshots'),
          height: document.body.scrollHeight,
          windowHeight: document.body.scrollHeight,
          logging: true
        }).then(function (canvas) {
          var accumulatedDataForTags = [];

          for (var key in jipt.phrases) {
            var phrase = jipt.phrases[key].data;

            if (!phrase.elements || phrase.status === 'not_found') {
              // Phrase is not on page or not found, skip it.
              continue;
            }

            for (elementKey in phrase.elements) {
              var element = phrase.elements[elementKey];
              var win = element.element.ownerDocument.defaultView;
              var bbox = element.element.getBoundingClientRect();
              var x,
                  y,
                  width,
                  height = 0;
              x = (Math.round(+bbox.x) + win.pageXOffset) * devicePixelRatio;
              y = (Math.round(+bbox.y) + win.pageYOffset) * devicePixelRatio;
              width = Math.round(+bbox.width) * devicePixelRatio;
              height = Math.round(+bbox.height) * devicePixelRatio; // TODO: Temporary solution. ApiV2 does not allow to set coordinates greater that screenshot height or width.
              // TODO: investigate sticky elements when scrolled to bottom. Now it is displayed exactly in the scrolled place. Element should be on top

              if (y + height > canvas.height || x + width > canvas.width) {
                continue;
              }

              if (!x || !y || !width || !height) {
                continue;
              }

              accumulatedDataForTags.push({
                position: {
                  x: x,
                  y: y,
                  width: width,
                  height: height
                },
                stringId: +element.id
              });
            }
          }

          if (translationsHighlightEnabled) {
            Storage.save('highlight', 'yes');
            jipt.init_highlight();
          }

          if (translationsPreviewEnabled) {
            Storage.save('preview', 'yes');
            jipt.init_preview();
            jipt.set_translations_preview();
          }

          var dataURL = canvas.toDataURL('image/jpeg', 0.5);
          var blob = dataURItoBlob(dataURL);
          var formData = new FormData();
          formData.append('file', blob);
          var screenshotExtension = '.jpeg';
          var storageScreenshotName = document.title;

          if (!document.title) {
            storageScreenshotName = window.location.hostname + window.location.pathname;
          }

          var notAllowedChars = /\\|\/|:|\*|\?|"|<|>|\|/gi;
          storageScreenshotName = storageScreenshotName.replace(notAllowedChars, '.');
          jipt.request('post', Url.getFullUrl('/api/v2/jipt/storages'), blob, function (data) {
            var storageId = data.data.id;
            var screenshotName = storageScreenshotName + getScale(devicePixelRatio) + screenshotExtension;
            var bodyData = {
              storageId: storageId,
              name: screenshotName,
              autoTag: false
            };
            jipt.translationDialog.content.find('#screenshot-status').html('Tagging strings...');
            jipt.request('POST', Url.getFullUrl('/api/v2/jipt/project/' + jipt.projectId + '/screenshots'), bodyData, function (data) {
              var screenshotId = data.data.id;
              jipt.request('PUT', Url.getFullUrl('/api/v2/jipt/project/' + jipt.projectId + '/screenshots/' + screenshotId + '/tags'), accumulatedDataForTags.length ? accumulatedDataForTags : {
                autoTag: true
              }, function (data) {
                jipt.translationDialog.content.find('#screenshot-status').removeClass('alert-gray').addClass('alert-success').html('Screenshot was successfully uploaded.<br> Name: <i>"' + htmlspecialchars(screenshotName) + '"</i>');
                setTimeout(function () {
                  if (jipt.translationDialog.content.find('#screenshot-status').hasClass('alert-gray')) {
                    return;
                  }

                  jipt.translationDialog.content.find('#screenshot-status').fadeOut('slow', function () {
                    jipt.translationDialog.content.find('#screenshot-status').attr('class', 'screenshot-status');
                  });
                }, 5000);
                $(takeScreenshotBtn).attr('disabled', false);
              }, function (error) {
                errorTemplate();
              });
            }, function (error) {
              errorTemplate();
            });
          }, function (error) {
            errorTemplate();
          }, {
            'Crowdin-API-FileName': encodeURIComponent(storageScreenshotName + screenshotExtension)
          });
        }).catch(function (error) {
          errorTemplate();
        });

        function dataURItoBlob(dataURI) {
          // convert base64/URLEncoded data component to raw binary data held in a string
          var byteString;

          if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
          } else {
            byteString = unescape(dataURI.split(',')[1]);
          } // separate out the mime component


          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to a typed array

          var ia = new Uint8Array(byteString.length);

          for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }

          return new Blob([ia], {
            type: mimeString
          });
        }

        function errorTemplate() {
          jipt.translationDialog.content.find('#screenshot-status').removeClass('alert-gray').addClass('alert-error').text('Something went wrong. Please, try again or contact support');
          $(takeScreenshotBtn).attr('disabled', false);
        }
      });
      jipt.translationDialog.content.find('.jipt-search-phrase').on('input propertychange', function () {
        clearTimeout(timeout);
        jipt.panel_search_phrase = this.value;
        var clear_btn = $(this).parent().find('.jipt-clear-btn');

        if (jipt.panel_search_phrase) {
          clear_btn.show();
        } else {
          clear_btn.hide();
        }

        timeout = setTimeout(function () {
          jipt.rebuild_panel_phrases(jipt.panel_search_phrase);
        }, 300);
      });
      $('#translation_panel_prev_page').click(function () {
        if (jipt.panel_page > 0) {
          jipt.rebuild_panel_phrases(jipt.panel_search_phrase, jipt.panel_page - 1);
        }

        return false;
      });
      $('#translation_panel_next_page').click(function () {
        if (jipt.panel_page + 1 < jipt.panel_pages) {
          jipt.rebuild_panel_phrases(jipt.panel_search_phrase, jipt.panel_page + 1);
        }

        return false;
      });
      jipt.translationDialog.content.find('.jipt-clear-btn').click(function () {
        var input = $(this).siblings('input[type="text"]').val('');
        jipt.panel_search_phrase = '';
        jipt.rebuild_panel_phrases();
        $(this).hide();
        input.focus();
        return false;
      });
      $('#translation_panel_current_page').click(function () {
        $(this).val(jipt.panel_page + 1);
        $(this).select();
        return false;
      });
      $('#translation_panel_paging').submit(function () {
        var page = $('#translation_panel_current_page').val();
        jipt.rebuild_panel_phrases(jipt.panel_search_phrase, page - 1);
        $('#translation_panel_current_page').blur();
        return false;
      });
    },
    init_project: function init_project() {
      var project = get_project_identifier();
      var language_code = Storage.get('language_code');
      var workflowStepId = Storage.get('workflow_step_id') || undefined;
      var language_id = Storage.get('language_id');
      var language_name = Storage.get('language_name');
      jipt.request('GET', Url.getFullUrl('/api/v2/jipt/project/' + project), {
        origin: document.location.protocol + '//' + document.location.host,
        pathName: document.location.pathname + document.location.search,
        languageCode: language_code ? language_code : '',
        workflowStepId: workflowStepId,
        preloadTexts: config.preload_texts
      }, function (response) {
        config.preload_texts = JSON.parse(response.data.preloadTexts); // convert to boolean ("false" -> false)

        jipt.user.isLoggedIn = response.data.isLoggedIn;
        jipt.user.isLeader = response.data.isLeader;
        jipt.user.isManager = response.data.isManager;
        jipt.user.login = response.data.login;
        jipt.user.name = response.data.userName;
        jipt.user.picture = response.data.userPicture;
        jipt.user.workflowStepId = response.data.workflowStepId;
        jipt.user.redirectHash = response.data.redirectHash;
        jipt.workflowStepIds = response.data.workflowStepIds;
        jipt.source_language.code = response.data.sourceLanguageCode;
        jipt.target_languages = response.data.targetLanguages;
        jipt.workflowSteps = response.data.workflowSteps || [];
        jipt.projectLink = response.data.editorLink;
        jipt.projectId = response.data.projectId;
        jipt.projectModelId = response.data.projectModelId;
        jipt.projectName = response.data.projectName;
        jipt.projectURL = response.data.projectUrl;
        jipt.pluralsPreview = response.data.pluralsPreview;
        jipt.hasIcu = response.data.hasIcu;

        for (var _i = 0, _Object$keys = Object.keys(response.data.placeholdersRegexps); _i < _Object$keys.length; _i++) {
          var fileFormat = _Object$keys[_i];
          jipt.regexp.placeholders[fileFormat] = new RegExp(response.data.placeholdersRegexps[fileFormat], 'gi');
        }

        if (!response.data.isLoggedIn) {
          jipt.show_login_panel();
          return;
        }

        if (!language_code || !language_name || !language_id || response.data.missedLanguage) {
          jipt.show_languages_panel();
          return;
        }

        jipt.language.code = language_code;
        jipt.language.id = language_id;
        jipt.language.name = language_name;
        jipt.workflowStep.id = workflowStepId;
        jipt.init_translations();
      });
    },
    init_translations: function init_translations() {
      jipt.alertFunction = window.alert;

      window.alert = function () {
        return jipt.handle_browser_popups(jipt.alertFunction, this, arguments);
      };

      jipt.confirmFunction = window.confirm;

      window.confirm = function () {
        return jipt.handle_browser_popups(jipt.confirmFunction, this, arguments);
      };

      jipt.promptFunction = window.prompt;

      window.prompt = function () {
        return jipt.handle_browser_popups(jipt.promptFunction, this, arguments);
      };

      if (jipt.hasIcu) {
        jipt.init_icu();
      }

      jipt.init_editor();
      jipt.init_translation_panel();
    },
    handle_browser_popups: function handle_browser_popups(method, context, arguments) {
      var translations = [];

      for (var i = 0; i < arguments.length; i++) {
        arguments[i] = arguments[i].replace(jipt.regexp.globalPhrase, function (match, phrase_id, plural_id) {
          var phrase = jipt.phrases[phrase_id].data;

          if (phrase) {
            translations.push(phrase);
            var source_segment = jipt.get_source_segment(phrase, plural_id);
            var new_value = jipt.phrase2preview(phrase, phrase.isIcu ? jipt.get_icu_placeholders(source_segment, match) : jipt.get_placeholders(source_segment, match, phrase.fileFormat), plural_id);

            if (config.edit_strings_context) {
              jipt.update_strings_context(phrase.id, phrase.context);
            }

            new_value = config.before_dom_insert(new_value);

            if (new_value === false) {
              return match;
            }

            return new_value;
          } else {
            jipt._load_phrases_delayed(match, function () {});

            return match;
          }
        });
      }

      var result = method.apply(context, arguments);

      if (translations.length > 0) {
        jipt.show_editor(translations[0]);
      }

      return result;
    },
    init_dom_mutation_handler: function init_dom_mutation_handler() {
      var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

      if (MutationObserver) {
        var observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            jipt.handle_dom_mutation(mutation);
          });
        });
        observer.observe(document.body, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true,
          characterDataOldValue: true,
          attributeOldValue: true
        });
      }
    },
    handle_dom_mutation: function handle_dom_mutation(mutation) {
      if (mutation.type === 'childList') {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
          jipt.crowdin_each_element(mutation.addedNodes[i]);
        }

        if (mutation.removedNodes.length && jipt.translations_filter) {
          jipt.remove_phrases_not_on_page();
        }
      }

      if (mutation.type === 'characterData') {
        if (mutation.target.nodeType === 3) {
          jipt.match_element_text(mutation.target, mutation.target.parentNode);
        }
      }

      if (jipt.check_if_jipt_class_was_removed(mutation)) {
        var matches = mutation.oldValue.match(/crowdin_jipt_[^\s-]+/);

        if (matches[0]) {
          $(mutation.target).addClass(matches[0]);
        }
      }

      if (mutation.type === 'attributes') {
        jipt.match_element_attributes(mutation.target);
      }
    },
    check_if_jipt_class_was_removed: function check_if_jipt_class_was_removed(mutation) {
      return mutation.type === 'attributes' && mutation.attributeName === 'class' && typeof mutation.target.className.indexOf === 'function' && mutation.target.className.indexOf('crowdin_jipt_') === -1 && mutation.oldValue && mutation.oldValue.indexOf('crowdin_jipt_') !== -1;
    },
    remove_phrases_not_on_page: function remove_phrases_not_on_page() {
      for (var i in jipt.phrases) {
        var p = jipt.phrases[i].data;

        if (p.elements) {
          for (var el = 0; el < p.elements.length; el++) {
            if (!$(document.body).find(p.elements[el].element).length) {
              p.elements.splice(el, 1);

              if (!p.elements.length) {
                delete p.elements;
                break;
              }
            }
          }
        }
      }

      jipt.delayed_rebuild_panel_phrases();
    },
    findTextsDOM: function findTextsDOM() {
      for (var name in self.status) {
        $('.crowdin_jipt_' + this.status[name]).removeClass('crowdin_jipt_' + this.status[name]);
      }

      var phrases_ids = jipt.get_phrases_from_text(document.documentElement.innerHTML); // if no old placeholders found - search for new placeholders

      if ($.isEmptyObject(phrases_ids)) {
        $.extend(jipt.regexp, jipt.regexp_new);
        phrases_ids = jipt.get_phrases_from_text(document.documentElement.innerHTML);
      }

      return phrases_ids;
    },
    load_phrases: function load_phrases() {
      var phrases_ids = this.findTextsDOM();
      var self = this;

      if ($.isEmptyObject(phrases_ids)) {
        setTimeout(function () {
          var _phrases_ids = self.findTextsDOM();

          if (jipt.user.isManager && $.isEmptyObject(_phrases_ids) && Storage.get('no_phrases_warning_disabled') !== 'yes') {
            self._show_no_texts_warning();
          }
        }, 5000);
      }

      jipt._load_phrases(phrases_ids, [function () {
        if (document.getElementsByTagName('title').length) {
          jipt.handle_document_title(document.getElementsByTagName('title')[0]);
        }

        jipt.crowdin_each_element(document.body);
        jipt.init_dom_mutation_handler();
        unmaskDocument();
      }]);
    },
    init_editor: function init_editor() {
      var editor_height = 650;
      var client_height = document.documentElement.clientHeight;
      editor_height = editor_height + 110 > client_height ? client_height - 110 : editor_height;
      jipt.editorDialog = $('<div id="crowdin-editor">');
      jipt.editorDialog.jiptDialog({
        width: '550px',
        height: editor_height + 'px',
        save_position: true,
        modal: false,
        drags: true,
        resize: true,
        icon: 'crowdin',
        custom_class: 'jipt-editor-dialog',
        close_callback: function close_callback() {
          EditorDialogClose();
        },
        title_pane: getEditorDialogTitle(),
        buttons_pane: getEditorDialogButtons()
      });

      function getEditorDialogTitle() {
        return '<h4>Translating to ' + jipt.language.name + '</h4>';
      }

      function getEditorDialogButtons() {
        return '<div class="jipt-dialog-buttons-wrapper">' + '<abbr id="jipt-preview-available-msg" title="Preview is not available since plural forms of source and target languages do not match">No preview available</abbr>' + '</div>';
      }

      jipt.editorDialog.append('<iframe frameBorder="0" id="crowdin-editor-iframe"></iframe>');
      jipt.editorDialogIframe = $('iframe#crowdin-editor-iframe');
      jipt.editorDialogIframe.css({
        width: '100%',
        display: 'block',
        overflow: 'hidden',
        height: editor_height + 'px'
      });
      jipt.editorDialogIframe.attr('src', jipt.projectLink);

      function EditorDialogClose() {
        jipt.place_translation_preview();
        $('.jipt-selected').removeClass('jipt-selected');
      }
    },
    send_post_message: function send_post_message(message) {
      message = JSON.stringify(message);

      if (jipt.editorDialogIframe.length) {
        jipt.editorDialogIframe.get(0).contentWindow.postMessage(message, jipt.projectLink);
      }
    },
    init_editor_listener: function init_editor_listener() {
      window.onmessage = function (event) {
        event = event || window.event;

        if (event.origin !== Url.getEntryPoint()) {
          return;
        }

        var message = _typeof(event.data) === 'object' ? event.data : JSON.parse(event.data);

        switch (message.msg_type) {
          case 'edit_translation':
            if (jipt.editor.currentTranslation) {
              if (jipt.translations_preview !== false && jipt.editorDialog.jiptDialog({
                action: 'is_visible'
              })) {
                if (message.value.length > 0) {
                  jipt.place_translation_preview(+message.translation_id, message.value, message.plural_id);
                } else {
                  jipt.place_translation_preview();
                }
              }
            }

            break;

          case 'update_phrase':
          case 'update_translation':
            var currentTranslation = jipt.editor.currentTranslation;
            jipt.editor.currentTranslation = jipt.phrases[message.translation_id].data;

            if ('top_suggestion' in message) {
              var plural_id = message.plural_id >= 0 ? message.plural_id : 0;
              jipt.editor.currentTranslation.translation[plural_id] = message.top_suggestion;
              jipt.editor.currentTranslation.status = message.translation_status;
              jipt.place_translation_preview();
            } else {
              // update translation
              jipt.editor.currentTranslation.hidden = message.translation.hidden;
            }

            jipt.update_phrase_dom_highlight();
            jipt.update_phrase_highlight();
            jipt.editor.currentTranslation = currentTranslation;
            break;

          case 'next_translation':
            if (jipt.editor.currentTranslation) {
              jipt.place_translation_preview();
              jipt.show_next_element(jipt.editor.currentTranslation.active_element);
            }

            break;

          case 'prev_translation':
            if (jipt.editor.currentTranslation) {
              jipt.place_translation_preview();
              jipt.show_prev_element(jipt.editor.currentTranslation.active_element);
            }

            break;

          case 'success':
            jipt.editor_loaded = true;
            jipt.setup_jipt_validation();

            if (jipt.editor.currentTranslation) {
              jipt.show_editor(jipt.editor.currentTranslation, jipt.editor.currentTranslation.active_element);
            }

            break;

          case 'close_editor':
            jipt.editorDialog.jiptDialog({
              action: 'close'
            });
            break;

          case 'focus':
            jipt.editorDialog.jiptDialog({
              action: 'move_to_front'
            });
            break;

          case 'before_commit':
            jipt.handle_before_commit_request(message.request_id, message.data);
            break;

          case 'save_suggestions':
            jipt.handle_save_suggestions(message.data);
            break;

          case 'editor_settings':
            jipt.editor_settings();
            break;

          case 'close_editor_settings':
            jipt.open_editor_settings = false;
            jipt.close_editor_dialog();
            break;

          case 'hotkeys_settings':
            jipt.hotkeys_settings();
            break;

          case 'close_hotkeys_settings':
            jipt.open_hotkeys_settings = false;
            jipt.close_editor_dialog();
            break;

          case 'logged_out':
            window.location.reload();
            break;

          default:
            return;
        }
      };
    },
    close_editor_dialog: function close_editor_dialog() {
      $('.jipt-dialog-title h4', '.jipt-editor-dialog').text('Translating to ' + jipt.language.name);

      if (!jipt.editor.currentTranslation && !jipt.open_editor_settings && !jipt.open_hotkeys_settings) {
        jipt.editorDialog.jiptDialog({
          action: 'close'
        });
      }
    },
    setup_jipt_validation: function setup_jipt_validation() {
      var message = {
        msg_type: 'setup_jipt_validation',
        validation_enabled: config.before_commit !== null
      };
      jipt.send_post_message(message);
    },
    handle_before_commit_request: function handle_before_commit_request(request_id, data) {
      var result = config.before_commit(data.source, data.translation, data.context, data.language);
      var message = {
        msg_type: 'before_commit_result',
        request_id: request_id,
        result: result
      };
      jipt.send_post_message(message);
    },
    handle_save_suggestions: function handle_save_suggestions(data) {
      if (!this.callbacks.save_suggestions) {
        return false;
      }

      if (typeof this.callbacks.save_suggestions == 'function') {
        this.callbacks.save_suggestions(data);
      }
    },
    set_draft_suggestion: function set_draft_suggestion(translation_id, text) {
      var message = {
        msg_type: 'set_draft_suggestion',
        translation_id: translation_id,
        text: text
      };
      jipt.send_post_message(message);
    },
    save_suggestions: function save_suggestions(suggestions, force_saving, callback) {
      this.callbacks.save_suggestions = callback;
      var message = {
        msg_type: 'save_suggestions',
        suggestions: suggestions,
        force_saving: force_saving
      };
      jipt.send_post_message(message);
    },
    editor_settings: function editor_settings() {
      jipt.open_editor_settings = true;
      var message = {
        msg_type: 'editor_settings'
      };
      jipt.send_post_message(message);
    },
    hotkeys_settings: function hotkeys_settings() {
      jipt.open_hotkeys_settings = true;
      var message = {
        msg_type: 'hotkeys_settings'
      };
      jipt.send_post_message(message);
    },
    // do not specify parameters to reset preview
    place_translation_preview: function place_translation_preview(id, value, plural_id) {
      jipt.translation_preview.id = id;
      jipt.translation_preview.value = value;
      jipt.translation_preview.plural_id = plural_id >= 0 ? plural_id : 0;
      if (!jipt.editor.currentTranslation) return;
      var elements = jipt.editor.currentTranslation.elements;
      var newValue;

      if (!elements) {
        return;
      }

      for (var i = 0; i < elements.length; i++) {
        newValue = jipt.phrase2preview(jipt.phrases[elements[i].id].data, elements[i].placeholders, elements[i].plural_id);

        if (elements[i].attr !== false) {
          newValue = config.before_dom_insert(newValue, elements[i].element, elements[i].attr);
        } else {
          newValue = config.before_dom_insert(newValue, elements[i].element);
        }

        if (newValue === false) {
          continue;
        }

        if (elements[i].attr !== false) {
          elements[i].element.setAttribute(elements[i].attr, newValue);

          if (config.touch_optimized && !jipt.touch_optimized) {
            jipt.hide_translation_badge(elements[i].element);
          }
        } else {
          // innerHTML is undefined in svg node
          if (elements[i].element.innerHTML !== undefined) {
            elements[i].element.innerHTML = newValue;
          } else {
            elements[i].element.textContent = newValue;
          }
        }

        if (jipt.touch_optimized) {
          jipt.show_translation_badge(elements[i].element);
        }
      }
    },
    set_translations_preview: function set_translations_preview() {
      var currentTranslation = jipt.editor.currentTranslation;

      for (var i in jipt.phrases) {
        jipt.editor.currentTranslation = jipt.phrases[i].data;
        jipt.place_translation_preview();
      }

      jipt.editor.currentTranslation = currentTranslation;
    },
    crowdin_each_element: function crowdin_each_element(element) {
      if (element.id === 'crowdin-translation-panel' || element.id === 'crowdin-editor') {
        return;
      }

      jipt.match_element_attributes(element);

      if (element.hasChildNodes()) {
        for (var i = 0; i < element.childNodes.length; i++) {
          jipt.crowdin_each_element(element.childNodes[i]);
          jipt.match_element_attributes(element.childNodes[i]);
        }
      }

      if (element && element.nodeType === 3 && element.nodeValue.length) {
        var startMatch = element.nodeValue.match(jipt.regexp.startPhrase);

        if (startMatch) {
          if (element.nodeValue.toLowerCase().indexOf(jipt.regexp.endPart(startMatch[1], startMatch[2])) > -1) {
            jipt.match_element_text(element, element.parentNode);
          } else {
            jipt.match_element_html(element, startMatch[1], startMatch[2]);
          }
        }
      }
    },
    match_element_text: function match_element_text(textNode, parentNode) {
      if (!parentNode || parentNode.nodeName === 'SCRIPT' || !textNode.parentNode) return; // is this need?

      var exactMatch = textNode.nodeValue.match(jipt.regexp.exactPhrase);
      var siblingsCount = textNode.parentNode.childNodes.length;

      if (exactMatch && siblingsCount === 1) {
        if (jipt.phrases[exactMatch[1]]) {
          jipt.handle_element(textNode.parentNode, jipt.phrases[exactMatch[1]].data, exactMatch[2]);
        } else {
          jipt._load_phrases_delayed(textNode.nodeValue, function () {
            jipt.match_element_text(textNode, parentNode);
          });
        }
      } else {
        var replace = textNode.nodeValue.replace(jipt.regexp.globalPhrase, '<span class="crowdin_phrase">$&</span>');

        if (replace !== textNode.nodeValue) {
          $(textNode).replaceWith(replace);

          for (var i = 0; i < parentNode.childNodes.length; i++) {
            var crowdinPhrase = parentNode.childNodes[i];

            if (crowdinPhrase.className === 'crowdin_phrase' && crowdinPhrase.firstChild.nodeType === 3) {
              jipt.match_element_text(crowdinPhrase.firstChild, crowdinPhrase);
            }
          }
        }
      }
    },
    match_element_html: function match_element_html(textNode, id, plural_id) {
      if (!textNode.parentNode) return;
      var exactMatch = textNode.parentNode.innerHTML.match(jipt.regexp.exactPhrase);

      if (exactMatch) {
        if (jipt.phrases[exactMatch[1]]) {
          jipt.handle_element(textNode.parentNode, jipt.phrases[exactMatch[1]].data, exactMatch[2]);
        } else {
          jipt._load_phrases_delayed(textNode.parentNode.innerHTML, function () {
            jipt.match_element_html(textNode, id, plural_id);
          });
        }
      } else {
        var currentNode = textNode;
        var nodes = [];
        var html = '';
        var is_tags_broken = true;

        do {
          nodes.push(currentNode);
          html += currentNode.nodeValue ? htmlspecialchars(currentNode.nodeValue) : currentNode.outerHTML;

          if (currentNode.nodeType === 3 && currentNode.nodeValue.toLowerCase().indexOf(jipt.regexp.endPart(id, plural_id)) > -1) {
            is_tags_broken = false;
            break;
          } else {
            currentNode = currentNode.nextSibling;
          }
        } while (currentNode);

        if (is_tags_broken) {
          return;
        }

        html = html.replace(jipt.regexp.globalPhrase, '<span class="crowdin_phrase">$&</span>');
        var parentNode = textNode.parentNode;
        $(nodes[0]).before(html);

        for (var i = 0; i < nodes.length; i++) {
          parentNode.removeChild(nodes[i]);
        }

        for (var i = 0; i < parentNode.childNodes.length; i++) {
          var crowdinPhrase = parentNode.childNodes[i];

          if (crowdinPhrase.className === 'crowdin_phrase' && crowdinPhrase.firstChild.nodeType === 3) {
            jipt.crowdin_each_element(crowdinPhrase);
          }
        }
      }
    },
    match_element_attributes: function match_element_attributes(element) {
      var attribute, new_value, i;
      var jq_element = $(element);

      if (element && element.attributes) {
        if (element.value && !element.getAttribute('value')) {
          element.setAttribute('value', element.value);
        }

        for (i = 0; i < element.attributes.length; i++) {
          attribute = element.attributes.item(i);
          new_value = attribute.nodeValue.replace(jipt.regexp.globalPhrase, function (match, phraseId, pluralId) {
            var phrase = jipt.phrases[phraseId];

            if (phrase) {
              jipt.translatable_placeholders = [];
              var source_segment = jipt.get_source_segment(phrase.data, pluralId);
              var placeholders = phrase.data.isIcu ? jipt.get_icu_placeholders(source_segment, match) : jipt.get_placeholders(source_segment, match, phrase.fileFormat);
              var result = jipt.phrase2preview(phrase.data, placeholders, pluralId); // store element only if exact match

              if (attribute.nodeValue.length === match.length) {
                if (!phrase.data.elements) {
                  phrase.data.elements = [];
                  jipt.delayed_rebuild_panel_phrases();
                }

                var element_data = {
                  id: phrase.data.id,
                  element: element,
                  placeholders: placeholders,
                  attr: attribute.nodeName,
                  plural_id: pluralId
                };
                jipt.addPhraseToElement(jq_element, element_data);
                phrase.data.elements.push(element_data);

                for (var i = 0; i < jipt.translatable_placeholders.length; i++) {
                  var translatable_item = jipt.translatable_placeholders[i];

                  if (config.edit_strings_context) {
                    jipt.update_strings_context(translatable_item.phrase.id, translatable_item.phrase.context);
                  }

                  if (!translatable_item.phrase.elements) {
                    translatable_item.phrase.elements = [];
                    jipt.delayed_rebuild_panel_phrases();
                  }

                  jipt.addPhraseToElement(jq_element, {
                    id: translatable_item.phrase.id,
                    placeholders: translatable_item.placeholders,
                    attr: element_data.attr,
                    plural_id: translatable_item.plural_id
                  });
                  translatable_item.phrase.elements.push(element_data);
                }

                jq_element.addClass(jipt.element_classname(jq_element));
                jq_element.mouseenter(function () {
                  jipt.hover_show_translation_badge(element);
                });

                if (jipt.touch_optimized) {
                  jipt.show_translation_badge(element);
                }
              }

              if (config.edit_strings_context) {
                jipt.update_strings_context(phrase.data.id, phrase.data.context);
              }

              return result;
            } else {
              jipt._load_phrases_delayed(match, function () {
                jipt.match_element_attributes(element);
              });

              return match;
            }
          });

          if (attribute.nodeValue !== new_value) {
            new_value = config.before_dom_insert(new_value, element, attribute.nodeName);

            if (new_value !== false) {
              attribute.nodeValue = new_value;

              if (attribute.name === 'value') {
                element.value = new_value;
              }
            }
          }
        }
      }
    },
    // source and target plurals is equal
    get_translation_segment: function get_translation_segment(phrase, plural_id) {
      plural_id = parseInt(plural_id);
      plural_id = plural_id ? plural_id : 0;

      if (phrase.translation[plural_id] !== undefined) {
        return phrase.translation[plural_id];
      } else {
        return phrase.translation[0];
      }
    },
    get_source_segment: function get_source_segment(phrase, plural_id) {
      plural_id = parseInt(plural_id);
      plural_id = plural_id ? plural_id : 0;

      if (phrase.text[plural_id] !== undefined) {
        return phrase.text[plural_id];
      } else {
        return phrase.text[0];
      }
    },
    get_placeholders: function get_placeholders(source_segment, jipt_segment, file_format) {
      var keys = [];
      var values = [];
      var regexpPlaceholders = jipt.regexp.placeholders[file_format] || jipt.regexp.placeholders['default'];
      var matchedKeys = source_segment.match(regexpPlaceholders);
      var matchedValues = jipt_segment.match(jipt.regexp.exactPhrase);

      if (matchedValues && matchedValues[3]) {
        var delimiter = jipt.regexp.delimiterPart(matchedValues[1], matchedValues[2]);

        if (matchedValues[3].toLowerCase().indexOf(delimiter) >= 0) {
          values = jipt.split(matchedValues[3], delimiter);
        } else {
          values = [matchedValues[3]];
        }
      }

      if (matchedKeys !== null) {
        keys = matchedKeys;
      }

      return [keys, values];
    },
    get_icu_placeholders: function get_icu_placeholders(source_segment, jipt_segment) {
      var keys = [];
      var values = [];
      var matched;
      var matchedValues = jipt_segment.match(jipt.regexp.exactPhrase);

      if (matchedValues && matchedValues[3]) {
        var delimiter = jipt.regexp.delimiterPart(matchedValues[1], matchedValues[2]);

        if (matchedValues[3].toLowerCase().indexOf(delimiter) >= 0) {
          matched = jipt.split(matchedValues[3], delimiter);
        } else {
          matched = [matchedValues[3]];
        }
      }

      for (var i = 0; i < matched.length; i++) {
        var result_split = matched[i].split('=');
        keys.push(result_split.shift());
        values.push(result_split.join('='));
      }

      return [keys, values];
    },
    // this is ugly hack for HTML title preview. Sorry about that
    handle_document_title: function handle_document_title(title) {
      if (!title.firstChild) {
        // disable this in ie8 and earlier
        return;
      }

      title.innerHTML = jipt.regexp.wrapText(title.innerHTML);
      jipt.phrases['0'] = {
        data: {
          id: '0',
          text: ['%s'],
          translation: [''],
          hidden: '0',
          status: 'translated'
        }
      };
      jipt.match_element_text(title.firstChild, title);
    },
    is_editor_element: function is_editor_element(jq_element) {
      return '#crowdin-editor' === jq_element.data('id');
    },
    handle_element: function handle_element(element, phrase, plural_id) {
      var newValue;
      var currentValue;
      var placeholderValues;
      var jq_element = $(element);
      var source_segment = jipt.get_source_segment(phrase, plural_id);
      this.translatable_placeholders = []; // innerHTML is undefined for svg nodes

      currentValue = element.innerHTML !== undefined ? element.innerHTML : element.textContent;
      placeholderValues = phrase.isIcu ? jipt.get_icu_placeholders(source_segment, currentValue) : jipt.get_placeholders(source_segment, currentValue, phrase.fileFormat);
      newValue = jipt.phrase2preview(phrase, placeholderValues, plural_id);

      if (config.edit_strings_context) {
        jipt.update_strings_context(phrase.id, phrase.context);
      }

      newValue = config.before_dom_insert(newValue, element);

      if (newValue !== false) {
        if (element.innerHTML !== undefined) {
          element.innerHTML = newValue;
        } else {
          element.textContent = newValue;
        }
      }

      var element_data = {
        id: phrase.id,
        // refference to phrase (used for translatable placeholders)
        element: element,
        placeholders: placeholderValues,
        attr: false,
        plural_id: plural_id
      };

      if (!phrase.elements) {
        phrase.elements = [];
        jipt.delayed_rebuild_panel_phrases();
      }

      jipt.addPhraseToElement(jq_element, element_data);
      phrase.elements.push(element_data);

      for (var i = 0; i < this.translatable_placeholders.length; i++) {
        if (!this.translatable_placeholders[i].phrase.elements) {
          this.translatable_placeholders[i].phrase.elements = [];
          jipt.delayed_rebuild_panel_phrases();
        }

        if (config.edit_strings_context) {
          jipt.update_strings_context(this.translatable_placeholders[i].phrase.id, this.translatable_placeholders[i].phrase.context);
        }

        jipt.addPhraseToElement(jq_element, {
          id: this.translatable_placeholders[i].phrase.id,
          placeholders: this.translatable_placeholders[i].placeholders,
          attr: element_data.attr,
          plural_id: this.translatable_placeholders[i].plural_id
        });
        this.translatable_placeholders[i].phrase.elements.push(element_data);
      }

      if (!jipt.is_editor_element(jq_element)) {
        jq_element.addClass(jipt.element_classname(jq_element));
      }

      if (jq_element.is('option') || jq_element.parent().is('option')) {
        var select_element = jq_element.closest('select');

        if (select_element) {
          select_element.addClass(jipt.element_classname(select_element));
          element = select_element.get(0);
        }
      }

      if (jipt.editor.currentTranslation && jipt.editor.currentTranslation.id === +phrase.id) {
        jipt.editor.currentTranslation = phrase;
        jipt.update_active_phrase_highlight(); // add selected class if loaded phrase already in editor
      }

      $(element).off('mouseenter').mouseenter(function () {
        jipt.hover_show_translation_badge(element);
      });

      if (jipt.touch_optimized && !$(element).is('select')) {
        jipt.show_translation_badge(element);
      }
    },
    phrase2preview: function phrase2preview(phrase, placeholders, plural_id) {
      var translation = jipt.get_translation_segment(phrase, plural_id);
      var preview_enabled = jipt.pluralsPreview || phrase.text.length === 1;
      var translation_preview = '';

      if (this.translation_preview.id === phrase.id && +this.translation_preview.plural_id === +plural_id) {
        translation_preview = this.translation_preview.value;
      }

      if (preview_enabled && jipt.translations_preview === true && translation_preview.length) {
        return phrase.isIcu ? jipt.replace_placeholders_icu(translation_preview, placeholders) : jipt.replace_placeholders(translation_preview, placeholders, phrase.fileFormat);
      }

      if (preview_enabled && jipt.translations_preview === true && translation.length) {
        return phrase.isIcu ? jipt.replace_placeholders_icu(translation, placeholders) : jipt.replace_placeholders(translation, placeholders, phrase.fileFormat);
      }

      var content = jipt.get_source_segment(phrase, plural_id);
      return phrase.isIcu ? jipt.replace_placeholders_icu(content, placeholders) : jipt.replace_placeholders(content, placeholders, phrase.fileFormat);
    },
    replace_placeholders_icu: function replace_placeholders_icu(text, stored_placeholders) {
      // no need to change stored placeholders
      var keys = stored_placeholders[0].slice(0);
      var values = stored_placeholders[1].slice(0);

      for (var i = 0; i < values.length; i++) {
        values[i] = values[i].replace(jipt.regexp.globalPhrase, function (match, phrase_id, plural_id) {
          var phrase = jipt.phrases[phrase_id];

          if (phrase) {
            var source_segment = jipt.get_source_segment(phrase.data, plural_id);
            var placeholders = phrase.data.isIcu ? jipt.get_icu_placeholders(source_segment, match) : jipt.get_placeholders(source_segment, match, phrase.fileFormat);
            jipt.translatable_placeholders.push({
              phrase: phrase.data,
              placeholders: placeholders,
              plural_id: plural_id
            });
            return jipt.phrase2preview(phrase.data, placeholders, plural_id);
          } else {
            return match;
          }
        });
      }

      var obj = {};
      var icu_parser = new MessageFormatLight(jipt.language.code);

      for (var i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
      }

      text = icu_parser.compiler(text, obj);

      if (!text) {
        return jipt.insert_source_text_in_dom();
      }

      return jipt.sanitizing_text(text);
    },
    insert_source_text_in_dom: function insert_source_text_in_dom() {
      var text;
      var current_translation = jipt.editor.currentTranslation;

      if (current_translation.isIcu) {
        var placeholders = current_translation.elements[0].placeholders;
        var obj = {};
        var icu_parser = new MessageFormatLight(jipt.language.code);

        for (var i = 0; i < placeholders[0].length; i++) {
          obj[placeholders[0][i]] = placeholders[1][i];
        }

        text = icu_parser.compiler(current_translation.text[0], obj);
      } else {
        text = jipt.get_source_segment(current_translation, current_translation.elements[0].plural_id);
      }

      return jipt.sanitizing_text(text);
    },
    sanitizing_text: function sanitizing_text(text) {
      text = sanitizer.tags(text, ['meta', 'base', 'iframe', 'object', 'embed', 'script', 'style', 'isindex', 'applet', 'form']);
      text = sanitizer.attributes(text);
      text = text.replace(/\b(on\w+=(["'])?.*?\2)/gi, '');
      text = text.replace(/\\n/g, '\n'); // need to be configurable?

      return text;
    },
    replace_placeholders: function replace_placeholders(text, stored_placeholders, file_format) {
      // no need to change stored placeholders
      var keys = stored_placeholders[0].slice(0);
      var values = stored_placeholders[1].slice(0);

      for (var i = 0; i < values.length; i++) {
        values[i] = values[i].replace(jipt.regexp.globalPhrase, function (match, phrase_id, plural_id) {
          var phrase = jipt.phrases[phrase_id];

          if (phrase.data) {
            var source_segment = jipt.get_source_segment(phrase.data, plural_id);
            var placeholders = phrase.data.isIcu ? jipt.get_icu_placeholders(source_segment, match) : jipt.get_placeholders(source_segment, match, file_format);
            jipt.translatable_placeholders.push({
              phrase: phrase.data,
              placeholders: placeholders,
              plural_id: plural_id
            });
            return jipt.phrase2preview(phrase.data, placeholders, plural_id);
          } else {
            return match;
          }
        });
      }

      if (values.length > 0) {
        var regexpPlaceholders = jipt.regexp.placeholders[file_format] || jipt.regexp.placeholders['default'];
        text = text.replace(regexpPlaceholders, function (match) {
          for (var i = 0; i < keys.length; i++) {
            if (keys[i] === match && values[i] !== undefined) {
              var result = values[i];
              keys.splice(i, 1);
              values.splice(i, 1);
              return result;
            }
          }

          return match;
        });
      }

      return jipt.sanitizing_text(text);
    },
    get_element_position: function get_element_position(node) {
      var offsetLeft = 0;
      var offsetTop = 0;
      var translateX = 0;
      var translateY = 0;
      var fixed = false;
      var style, transform, mat, pos;
      var node_el = node;

      if (node.tagName === 'OPTION') {
        node = $(node).closest('select').get(0);
      }

      while (node) {
        style = window.getComputedStyle(node);
        pos = style.getPropertyValue('position');

        if (pos === 'fixed') {
          fixed = true;
        }

        offsetLeft += node.offsetLeft - node.scrollLeft + node.clientLeft;
        offsetTop += node.offsetTop - node.scrollTop + node.clientTop;
        node = node.offsetParent === document.body ? null : node.offsetParent;
      }

      node = node_el;

      while (node) {
        style = window.getComputedStyle(node); //handling translate css options

        transform = style.transform || style.webkitTransform || style.mozTransform;
        mat = transform.match(/^matrix3d\((.+)\)$/);

        if (mat) {
          translateX = parseFloat(mat[1].split(', ')[12]);
          translateY = parseFloat(mat[1].split(', ')[13]);
        } else {
          mat = transform.match(/^matrix\((.+)\)$/);
          translateX = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
          translateY = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
        }

        offsetLeft += translateX;
        offsetTop += translateY;
        node = node.parentElement === document.body ? null : node.parentElement;
      }

      return {
        left: offsetLeft,
        top: offsetTop,
        position: fixed ? 'fixed' : 'absolute'
      };
    },
    create_translation_badge: function create_translation_badge(element) {
      var badge_id = 'crowdin-translation-badge';
      var badge = $('#' + badge_id);
      var touch = false;

      if (jipt.touch_optimized && !$(element).is('area, base, br, col, command, embed, hr, img, input, textarea, wbr')) {
        touch = true;
      }

      if (!badge.length || touch) {
        // touch optimized or first time badge creation
        var zIndex = jipt.dialog_zindex;
        badge = $('<span data-html2canvas-ignore="true" class="crowdin-jipt"><span class="jipt-badge-inner"></span></span>');

        if (!touch) {
          badge.attr('id', badge_id).css('position', 'absolute').css('z-index', --zIndex).appendTo('body').mouseleave(function () {
            jipt.hide_translation_badge();
          });
        } else if ($(element).children('.' + badge_id).length === 0) {
          badge.addClass(badge_id).prependTo($(element));
        }
      }

      if (!touch) {
        var elementPosition = jipt.get_element_position(element);
        badge.css('top', elementPosition.top - 7 + 'px').css('left', elementPosition.left - 7 + 'px').css('position', elementPosition.position);
      }

      return badge;
    },
    get_element_data: function get_element_data(element) {
      var phrases = [];
      var is_parent_element = false;

      if (!$(element).data('phrases')) {
        var child_elements = $(element).find('[class*=crowdin_jipt]');

        if (child_elements.length) {
          phrases = child_elements.first().data('phrases');
          is_parent_element = true;
        } else {
          return; // This element has no translatable phrases.
        }
      } else {
        phrases = $(element).data('phrases');
      }

      return {
        is_parent_element: is_parent_element,
        phrases: phrases,
        phrase: jipt.phrases[phrases[0].id].data
      };
    },
    show_translation_badge: function show_translation_badge(element) {
      var element_data = jipt.get_element_data(element);

      if (!element_data) {
        return;
      }

      var phrase = element_data.phrase;
      var badge = jipt.create_translation_badge(element);

      if (element_data.is_parent_element) {
        element = $(element).find('[class*=crowdin_jipt]').get(0);
      }

      badge.show().off('click').on('click', function (e) {
        if (element_data.phrases.length > 1 || phrase.hidden || jipt.get_phrase_status(phrase.status) === jipt.status.not_found || jipt.get_phrase_status(phrase.status) === jipt.status.not_visible_on_step || jipt.get_phrase_status(phrase.status) === jipt.status.file_not_available_for_language) {
          jipt.show_badge_popup(element, element_data.phrases);
        } else {
          jipt.show_editor(phrase, element);
        }

        e.stopPropagation();
        e.preventDefault();
        return false;
      });
    },
    hover_show_translation_badge: function hover_show_translation_badge(element) {
      if (!jipt.touch_optimized || $(element).is('select')) {
        setTimeout(function () {
          jipt.show_translation_badge(element);
        }, 1);
      } else if ($(element).children('.crowdin-translation-badge').length === 0) {
        setTimeout(function () {
          jipt.show_translation_badge(element);
        }, 1);
      }
    },
    show_badge_popup: function show_badge_popup(element, phrases) {
      jipt.hide_translation_badge();
      var elementPosition = jipt.get_element_position(element);
      var list = '<ul>';

      if (!$('#crowdin-translation-badge-popup').length) {
        $('body').append($('<div>').attr('id', 'crowdin-translation-badge-popup').addClass('crowdin-jipt').css({
          position: 'absolute',
          'z-index': jipt.dialog_zindex - 1,
          display: 'none'
        }));
      } else {
        $('#crowdin-translation-badge-popup').html('');
      }

      $('#crowdin-translation-badge-popup').css('top', elementPosition.top + 'px').css('left', elementPosition.left + 'px').css('position', elementPosition.position);

      for (var i = 0; i < phrases.length; i++) {
        var id = phrases[i].id;
        var not_found_string = jipt.get_phrase_status(jipt.phrases[id].data.status) === jipt.status.not_found;
        var not_visible_on_step = jipt.get_phrase_status(jipt.phrases[id].data.status) === jipt.status.not_visible_on_step;
        var file_not_available_for_language = jipt.get_phrase_status(jipt.phrases[id].data.status) === jipt.status.file_not_available_for_language;
        var disabled_class = !jipt.user.isLeader && jipt.phrases[id].data.hidden || not_found_string || not_visible_on_step || file_not_available_for_language ? 'disabled' : '';
        var status_class = jipt.phrase_classname(jipt.phrases[id].data) + '_popup';
        list += '<li class="' + disabled_class + '"><a href="javascript:void(0)" data-id="' + id + '" class="popup-phrase ' + status_class + '">';

        if (phrases[i].attr) {
          list += '<span class="popup-phrase-attr">' + phrases[i].attr + ':</span>';
        }

        if (jipt.phrases[id].data.hidden) {
          list += '<span class="popup-phrase-attr">This string is hidden and should not be translated.</span>';
        }

        if (not_found_string) {
          list += '<span class="popup-phrase-attr">String is not loaded. Probably it has been deleted.</span>';
        }

        if (not_visible_on_step) {
          list += '<span class="popup-phrase-attr">This string is not included in the workflow step</span>';
        }

        if (file_not_available_for_language) {
          list += '<span class="popup-phrase-attr">Seems like ' + jipt.language.name + ' is not enabled as a target language <br>for the file this string comes from.</span>';
        }

        var placeholders = [[], []];

        if (jipt.phrases[id].data.isIcu) {
          placeholders = phrases[i].placeholders;
        }

        var preview = jipt.phrase2preview(jipt.phrases[id].data, placeholders, phrases[i].plural_id);
        list += $('<span>' + preview + '</span>').text();
        list += '</a></li>';
      }

      list += '</ul>';
      $('#crowdin-translation-badge-popup').html(list).show();
      $('#crowdin-translation-badge-popup li:not(.disabled) a.popup-phrase').click(function (e) {
        var id = $(e.target).closest('a.popup-phrase').data('id');
        $('#crowdin-translation-badge-popup').hide();
        jipt.show_editor(jipt.phrases[id].data, element);
        return false;
      });
      jipt.autoHideBadgePopup();
    },
    autoHideBadgePopup: function autoHideBadgePopup() {
      $(document).one('utapstart mousedown', function (e) {
        if ($(e.target).closest('#crowdin-translation-badge-popup').length === 0) {
          $('#crowdin-translation-badge-popup').hide();
        } else {
          jipt.autoHideBadgePopup();
        }
      });
    },
    hide_translation_badge: function hide_translation_badge(element) {
      $('#crowdin-translation-badge').hide();

      if (typeof element !== 'undefined') {
        $(element).children('.crowdin-translation-badge').remove();
      }
    },
    // active phrase in the DOM
    update_active_phrase_highlight: function update_active_phrase_highlight() {
      $('.jipt-selected').removeClass('jipt-selected');

      if (jipt.editor.currentTranslation.elements) {
        for (var i = 0; i < jipt.editor.currentTranslation.elements.length; i++) {
          var jq_element = $(jipt.editor.currentTranslation.elements[i].element);
          jq_element.addClass('jipt-selected');

          if (jq_element.is('option') || jq_element.parent().is('option')) {
            var select_element = jq_element.closest('select');

            if (select_element) {
              select_element.addClass('jipt-selected');
            }
          }
        }
      }
    },
    highlight_panel_opened_phrase: function highlight_panel_opened_phrase() {
      if (jipt.editor.currentTranslation) {
        jipt.translationDialog.content.find('#jipt-translations').find('li.active').removeClass('active');
        jipt.translationDialog.content.find('#jipt-translations').find('a[rel=' + jipt.editor.currentTranslation.id + ']').parent().addClass('active');
      }
    },
    // phrases status in the DOM
    update_phrase_dom_highlight: function update_phrase_dom_highlight() {
      if (jipt.editor.currentTranslation.elements) {
        for (var i = 0; i < jipt.editor.currentTranslation.elements.length; i++) {
          var element = jipt.editor.currentTranslation.elements[i].element;
          var jq_element = $(element);
          var class_name = jipt.element_classname(jq_element);
          jq_element.removeClass(function (index, css) {
            return (css.match(/\bcrowdin_jipt_\S+/g) || []).join(' ');
          }).addClass(class_name);

          if (jq_element.is('option') || jq_element.parent().is('option')) {
            var select_element = jq_element.closest('select');

            if (select_element) {
              select_element.removeClass(function (index, css) {
                return (css.match(/\bcrowdin_jipt_\S+/g) || []).join(' ');
              });

              for (var name in jipt.status) {
                if (select_element.find('[class*=crowdin_jipt_' + jipt.status[name] + ']').length) {
                  select_element.addClass('crowdin_jipt_' + jipt.status[name]);
                }
              }
            }
          }
        }
      }
    },
    // phrase status in the translation panel
    update_phrase_highlight: function update_phrase_highlight() {
      if (jipt.editor.currentTranslation) {
        var class_name = jipt.phrase_classname(jipt.editor.currentTranslation) + '_item';
        var jq_element = jipt.translationDialog.content.find('#jipt-translations a[rel=' + jipt.editor.currentTranslation.id + ']');
        jq_element.removeClass(function (index, css) {
          return (css.match(/\bcrowdin_jipt_\S+/g) || []).join(' ');
        }).addClass(class_name);
      }
    },
    get_next_phrase: function get_next_phrase(active_element) {
      var result = {
        id: null,
        element: null
      };
      var element = $(active_element);

      if (element.length) {
        var next_id = jipt.get_first_untranslated(element, 'next', true);

        if (!next_id) {
          var selector = '.crowdin_jipt_untranslated, .crowdin_jipt_partially_translated';
          element = jipt.findNext('next', element, selector) || jipt.findNext('next', $(document), selector);

          if (!element) {
            return result;
          } // end of phrases


          next_id = jipt.get_first_untranslated(element);

          if (!parseInt(next_id)) {
            return jipt.get_next_phrase(element);
          }
        }

        result.id = next_id;
        result.element = element;
      }

      return result;
    },
    get_prev_phrase: function get_prev_phrase(active_element) {
      var result = {
        id: null,
        element: null
      };
      var element = $(active_element);

      if (element.length) {
        var prev_id = jipt.get_first_untranslated(element, 'prev', true);

        if (!prev_id) {
          element = jipt.findNext('prev', element, '.crowdin_jipt_untranslated, .crowdin_jipt_partially_translated');

          if (element.length) {
            prev_id = jipt.get_first_untranslated(element, 'prev');

            if (!parseInt(prev_id)) {
              return jipt.get_prev_phrase(element);
            }
          }
        }

        result.id = prev_id;
        result.element = element;
      }

      return result;
    },
    show_next_element: function show_next_element(active_element) {
      var next_phrase = jipt.get_next_phrase(active_element);

      if (!next_phrase.id) {
        var selector = '.crowdin_phrase';
        var element = jipt.findNext('next', $(active_element), selector) || jipt.findNext('next', $(document), selector);

        if (element) {
          jipt.show_editor(jipt.get_element_data(element).phrase, element);
        }

        jipt.refresh_suggestions();
        return;
      }

      jipt.show_editor(jipt.phrases[next_phrase.id].data, next_phrase.element.get(0));
    },
    show_prev_element: function show_prev_element(active_element) {
      var prev_phrase = jipt.get_prev_phrase(active_element);

      if (!prev_phrase.id) {
        var selector = '.crowdin_phrase';
        var element = jipt.findNext('prev', $(active_element), selector) || jipt.findNext('prev', $(document), selector);

        if (element) {
          var phrase = jipt.get_element_data(element).phrase;

          if (!phrase.visibleOnStep) {
            jipt.show_prev_element(element[0]);
            return;
          }

          jipt.show_editor(phrase, element);
        }

        return;
      }

      jipt.show_editor(jipt.phrases[prev_phrase.id].data, prev_phrase.element.get(0));
    },
    get_first_untranslated: function get_first_untranslated(element, direction, self_only) {
      var id = null;

      if (element.data('phrases')) {
        var phrases = element.data('phrases').slice();
        var reached_active_phrase = false;

        if (direction === 'prev') {
          phrases.reverse();
        }

        for (var i = 0; i < phrases.length; i++) {
          var phrase = jipt.phrases[phrases[i].id].data; // phrase.id !== '0' - skip phrase at document.title with manually setted id

          if ((this.get_phrase_status(phrase.status) === this.status.untranslated || this.get_phrase_status(phrase.status) === this.status.partially_translated) && !phrase.hidden && phrase.id !== 0) {
            if (self_only) {
              if (reached_active_phrase) {
                id = phrase.id;
                break;
              }

              if (phrase.id === jipt.editor.currentTranslation.id) {
                reached_active_phrase = true;
              }
            } else {
              id = phrase.id;
              break;
            }
          }
        }
      }

      return id;
    },
    show_settings: function show_settings(mode) {
      mode === 'hotkeys' ? jipt.hotkeys_settings() : jipt.editor_settings();
      $('.jipt-dialog-title h4', '.jipt-editor-dialog').text(mode === 'hotkeys' ? 'Hotkeys Settings' : 'Editor Settings');
      jipt.editorDialog.jiptDialog({
        action: 'open'
      });
    },
    show_editor: function show_editor(string, element) {
      if (!jipt.user.isLoggedIn) {
        alert('Login first to be able submit translations');
        jipt.show_login_panel();
        return;
      }

      jipt.place_translation_preview();
      jipt.editor.currentTranslation = string;

      if (element) {
        jipt.editor.currentTranslation.active_element = element;
      } else if (jipt.editor.currentTranslation.elements) {
        jipt.editor.currentTranslation.active_element = jipt.editor.currentTranslation.elements[0].element;
      }

      jipt.update_active_phrase_highlight();
      jipt.editorDialog.jiptDialog({
        action: 'open'
      });
      jipt.editorDialog.jiptDialog({
        action: 'toggle_minimized_show'
      });
      jipt.highlight_panel_opened_phrase();
      var preload_ids = [];

      if (jipt.editor.currentTranslation.active_element) {
        var prev_phrase_id = jipt.get_prev_phrase(jipt.editor.currentTranslation.active_element).id;
        var next_phrase_id = jipt.get_next_phrase(jipt.editor.currentTranslation.active_element).id;
        next_phrase_id && preload_ids.push(+next_phrase_id);
        prev_phrase_id && preload_ids.push(+prev_phrase_id);
      }

      jipt.show_string(string.id, preload_ids);

      if (!jipt.pluralsPreview) {
        if (string.text.length === 1) {
          // phrase doesn't has plurals
          $('#jipt-preview-available-msg').hide();
        } else {
          $('#jipt-preview-available-msg').show();
        }
      }
    },
    show_string: function show_string(string_id, preload_ids) {
      var message = {
        msg_type: 'show_string',
        id: string_id,
        preload_ids: preload_ids
      };
      jipt.send_post_message(message);
    },
    refresh_suggestions: function refresh_suggestions() {
      var message = {
        msg_type: 'refresh_suggestions'
      };
      jipt.send_post_message(message);
    },
    _get_target_languages_options: function _get_target_languages_options() {
      var language_code = Storage.get('language_code');
      var options = '';
      var selected = '';

      for (var i = 0; i < jipt.target_languages.length; i++) {
        selected = '';

        if (jipt.target_languages[i].code === language_code) {
          selected = 'selected';
        }

        options += '<option value="' + jipt.target_languages[i].code + '" data-id="' + jipt.target_languages[i].id + '" ' + selected + ' >';
        options += jipt.target_languages[i].name;
        options += '</option>';
      }

      return options;
    },
    getWorkflowStepsOptions: function getWorkflowStepsOptions(languageCode) {
      var workflowStepId = Storage.get('workflow_step_id');
      var options = '';
      var workflowSteps = [];

      if (jipt.workflowSteps.length) {
        jipt.workflowSteps.forEach(function (element) {
          var test = element.languages.map(function (value) {
            return value['code'];
          });

          if (test.indexOf(languageCode) >= 0) {
            workflowSteps.push(element);
          }
        });

        for (var i = 0; i < workflowSteps.length; i++) {
          var opt = document.createElement('option');
          opt.value = workflowSteps[i].id;
          opt.innerHTML = workflowSteps[i].title + ' (' + workflowSteps[i].type + ')';

          if (workflowSteps[i].id === workflowStepId) {
            opt.defaultSelected = true;
          }

          options += opt.outerHTML;
        }
      }

      return options;
    },
    show_login_panel: function show_login_panel() {
      var loginLanguageField = jipt.loginDialog.content.find('#crowdin-login-language-field');
      loginLanguageField.html(jipt._get_target_languages_options());

      if (jipt.getWorkflowStepsOptions($(loginLanguageField).val())) {
        jipt.loginDialog.content.find('#crowdin-login-workflow-step-field').html(jipt.getWorkflowStepsOptions($(loginLanguageField).val())).parents('.workflow-step-group').removeClass('hide');
      }

      jipt.loginDialog.content.find('.crowdin-languages-panel').hide();
      jipt.loginDialog.content.find('.crowdin-login-panel').show();
      jipt.loginDialog.jiptDialog({
        action: 'open',
        position: 'center'
      });
      jipt.loginDialog.content.find('#crowdin-login-field').focus();
      jipt.place_close_btn();
    },
    checkCookie: function checkCookie(callback) {
      var data = {
        origin: window.location.origin
      };
      jipt.request('POST', Url.getFullUrl('/api/v2/jipt/cookie'), data, function () {
        jipt.request('DELETE', Url.getFullUrl('/api/v2/jipt/cookie'), data, function (response) {
          var errorMessage = 'Your browser preferences are set to block third-party cookies.' + '<p>To allow Crowdin In-Context to operate correctly, please make sure to clear the checkboxes <i>Block third-party cookies</i> or <i>Prevent cross-site tracking</i>.</p>';

          if (response.success) {
            callback();
          } else {
            jipt._show_error_dialog(errorMessage, true);
          }
        });
      });
    },
    show_languages_panel: function show_languages_panel() {
      var languageField = jipt.loginDialog.content.find('#crowdin-language-field');
      languageField.html(jipt._get_target_languages_options());

      if (jipt.getWorkflowStepsOptions($(languageField).val())) {
        jipt.loginDialog.content.find('#crowdin-workflow-step-field').html(jipt.getWorkflowStepsOptions($(languageField).val())).parents('.workflow-step-group').removeClass('hide');
      }

      jipt.loginDialog.content.find('.crowdin-login-panel').hide();
      jipt.loginDialog.content.find('.crowdin-languages-panel').show();
      jipt.loginDialog.jiptDialog({
        action: 'open',
        position: 'center'
      });
    },
    set_current_language: function set_current_language(code, id, name) {
      jipt.language.code = code;
      jipt.language.id = id;
      jipt.language.name = name;
      Storage.save('language_code', code);
      Storage.save('language_id', id);
      Storage.save('language_name', name);
    },
    setCurrentWorkflowStep: function setCurrentWorkflowStep(id, type) {
      jipt.workflowStep.id = id;
      jipt.workflowStep.type = type;
      Storage.save('workflow_step_id', id);
      Storage.save('workflow_step_type', type);
    },
    _login_action: function _login_action() {
      var language = jipt.loginDialog.content.find('#crowdin-login-language-field option:selected');
      jipt.set_current_language(language.val(), language.data('id'), language.html());
      var workflow_step = jipt.loginDialog.content.find('#crowdin-login-workflow-step-field option:selected');
      jipt.setCurrentWorkflowStep(workflow_step.val(), workflow_step.html());
      window.top.location.href = Url.getJiptPath('login');
    },
    _join_action: function _join_action() {
      window.top.location.href = Url.getJiptPath('join');
    },
    _logout_action: function _logout_action() {
      var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
      var eventer = window[eventMethod];
      var messageEvent = eventMethod == 'attachEvent' ? 'onmessage' : 'message';
      eventer(messageEvent, function (e) {
        if (e.data === 'logout') {
          window.location.reload();
        }
      }, false);
      var iframe = document.createElement('iframe');
      iframe.style = 'display: none;';
      iframe.src = Url.getAuthEntryPoint('/logout');
      document.body.append(iframe);
    },
    search: function search(query, strings) {
      if (Object.prototype.toString.call(strings) === '[object Object]') {
        strings = $.map(strings, function (el) {
          return el;
        });
      }

      for (var index = 0; index < strings.length; index++) {
        if (strings[index].toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          return true;
        }
      }

      return false;
    },
    rebuild_panel_phrases: function rebuild_panel_phrases(query, page) {
      jipt.translationDialog.content.find('.jipt-phrases-to-translate').html('');
      var list = '';
      var itemClass;
      var item_counter = 0;
      var items_on_page = 50;
      var pages = jipt.panel_pages;
      var current_page = 0;

      if (page && /^\+?(0|[1-9]\d*)$/.test(page)) {
        current_page = page;

        if (page >= pages) {
          current_page = pages - 1;
        }
      }

      var start_item = current_page * items_on_page;
      jipt.panel_page = current_page;

      for (var i in jipt.phrases) {
        var phrase = jipt.phrases[i].data;

        if (i === '0' || this.get_phrase_status(phrase.status) === jipt.status.not_found || !phrase.visibleOnStep || phrase.fileNotAvailableForLanguage) {
          continue; // pseudo phrase for html title and not found
        }

        var disabled_class = !jipt.user.isLeader && phrase.hidden ? 'disabled' : '';
        var disabled_title = phrase.hidden ? 'title="This string is hidden and should not be translated."' : '';

        if (query && !this.search(query, phrase.text) && !this.search(query, phrase.translation)) {
          continue;
        }

        if (jipt.translations_filter === true) {
          if (!phrase.elements) {
            continue;
          }
        }

        if (item_counter < start_item || item_counter >= start_item + items_on_page) {
          item_counter++;
          continue;
        }

        itemClass = jipt.phrase_classname(phrase) + '_item';
        list += '<li ' + disabled_title + ' class="' + disabled_class + '"><a href="javascript:void(0)" class="' + itemClass + '" rel="' + i + '">';
        list += htmlspecialchars(phrase.text[0]);
        list += '</a></li>';
        item_counter++;
      }

      var no_items_help = jipt.translations_filter ? ' The search was made among the texts of current page.' : '';

      if (item_counter === 0) {
        list += '<li><div style="padding: 30px; text-align: center; color: #999">No items.' + no_items_help + '</div></li>';
      }

      jipt.translationDialog.content.find('.jipt-phrases-to-translate').html(list);
      pages = Math.ceil(item_counter / items_on_page);
      jipt.panel_pages = pages;

      if (pages < 2) {
        $('#translation_panel_paging').hide();
      } else {
        var input_size = pages.toString(10).length * 2 + 3;
        var prev_btn = $('#translation_panel_prev_page');
        var next_btn = $('#translation_panel_next_page');
        $('#translation_panel_current_page').attr({
          size: input_size
        }).val(current_page + 1 + ' / ' + pages);
        current_page === 0 ? prev_btn.addClass('jipt-page-disabled') : prev_btn.removeClass('jipt-page-disabled');
        current_page + 1 === pages ? next_btn.addClass('jipt-page-disabled') : next_btn.removeClass('jipt-page-disabled');
        $('#translation_panel_paging').show();
      }

      jipt.highlight_panel_opened_phrase();
    },
    delayed_rebuild_panel_phrases: function delayed_rebuild_panel_phrases() {
      clearTimeout(jipt.rebuild_panel_timeout);
      jipt.rebuild_panel_timeout = setTimeout(function () {
        jipt.rebuild_panel_phrases(jipt.panel_search_phrase, jipt.panel_page);
      }, 500);
    },
    getJoinProjectDialogTpl: function getJoinProjectDialogTpl(data) {
      var entryPoint = Url.getEntryPoint(),
          joinRequestSent = data.joinRequestSent;
      var buttonUrl = entryPoint + (config.domain ? data.projectManagersUrl : data.languageUrl);
      var buttonText = config.domain ? 'contact project manager' : 'send request';
      var sendRequestBtn = Boolean(joinRequestSent) === false ? '<div style="padding: 0; margin: 25px 0 25px">' + '<a href="' + buttonUrl + '" target="_blank" class="jipt-btn">' + buttonText + '</a>' + '</div>' : '';
      var style = joinRequestSent ? 'style="padding: 0 10px 20px 10px"' : '';
      return '' + '<div class="text-center"' + style + '>\n' + data.message + sendRequestBtn + '<p class="text-center">' + '<a href="#" id="jipt-select-language" style="margin-right: 10px;">Change Language</a>' + this.logoutLinkTpl() + '</p>' + '</div>';
    },
    mfaSettingsAndLogoutTpl: function mfaSettingsAndLogoutTpl(profileUrl) {
      return '' + '<p class="text-center">' + '<a target="_blank" href="' + Url.getEntryPoint() + profileUrl + '" style="margin-right: 10px;">Profile Settings</a>' + this.logoutLinkTpl() + '</p>';
    },
    logoutLinkTpl: function logoutLinkTpl() {
      return '<a id="jipt-join-logout-error" href="#">Logout</a>';
    },
    _show_no_texts_warning: function _show_no_texts_warning() {
      var configURL = this.get_in_context_config_url(jipt);
      var helpURL = Url.getEntryPoint() + '/contacts';
      var warningDialogContent = '<div>' + '<strong>Crowdin In-Context was unable to identify translatable texts.</strong>' + '<p>Possible reasons:</p>' + '<ul style="margin-left: 15px; list-style-type: square">' + '<li>the pseudo-language is not integrated;</li>' + '<li>current application locale is not set to the language that contains Crowdin In-Context pseudo-language;</li>' + '<li>there are no translatable texts on this page.</li>' + '</ul>' + '<p>Check the <a target="_blank" href="' + configURL + '">integration guide</a> for more information ' + 'or <a href="' + helpURL + '" target="_blank">contact Crowdin Support</a></p>' + '<div class="jipt-control-group">' + '<label class="jipt-checkbox"><input type="checkbox" id="skip_no_phrases_msg">Do not show this message again.</label>' + '</div>' + '</div>';
      var warningDialog = $('<div id="no_texts_warning">').html(warningDialogContent);
      warningDialog.content = warningDialog.jiptDialog({
        modal: false,
        width: '550px',
        height: '320px',
        iframe: true,
        drags: true,
        minimize_btn: false,
        icon: 'crowdin',
        custom_class: 'jipt-no-translations',
        title_pane: '<h4>Nothing to translate</h4>',
        buttons_pane: '<div style="text-align:right; margin: 8px 20px;">' + '<button type="button" class="jipt-btn jipt-dialog-close">Close</button>' + '</div>'
      });
      warningDialog.content.find('#skip_no_phrases_msg').click(function () {
        if ($(this).prop('checked') == true) {
          Storage.save('no_phrases_warning_disabled', 'yes');
        } else {
          Storage.save('no_phrases_warning_disabled', 'no');
        }
      });
      warningDialog.jiptDialog({
        action: 'open'
      });
    },
    _show_error_dialog: function _show_error_dialog(msg, hideLogoutLink) {
      var view = msg;
      var hideLink = hideLogoutLink || false;

      if (hideLink === false) {
        view = msg + '<p class="text-center">' + this.logoutLinkTpl() + '</p>';
      }

      var errorDialog = $('<div>').html(view);
      var dialogConfig = {
        modal: true,
        width: '450px',
        drags: false,
        minimize_btn: false,
        close_btn: false,
        icon: 'crowdin',
        title_pane: '<h4>Crowdin In-Context</h4>'
      };
      errorDialog.jiptDialog(dialogConfig);
      errorDialog.jiptDialog({
        action: 'open'
      });
      jipt.place_close_btn();
      $('#jipt-join-logout-error').on('click', function () {
        jipt._logout_action();
      });
      $('#jipt-select-language').on('click', function () {
        errorDialog.jiptDialog({
          action: 'destroy'
        }); // reset language

        jipt.set_current_language(undefined, null, undefined);
        jipt.init_project();
        jipt.show_languages_panel();
      });
    },
    _handle_jipt_error: function _handle_jipt_error(data) {
      var msg = '';
      var configURL = data.projectId ? this.get_in_context_config_url(data) : '';
      var helpURL = Url.getEntryPoint() + '/contacts';

      switch (data.errorCode) {
        case 'auth_error':
          alert('Your session has expired. Please log in again');
          window.location.reload();
          break;

        case 'moderate_language':
          this._show_error_dialog(this.getJoinProjectDialogTpl(data.data), true);

          break;

        case 'project_not_found':
          this._show_error_dialog('<p class="text-center" style="margin: 0 0 10px; padding: 0;"><strong>Translation mode is unavailable.</strong>' + '<p class="text-center">Crowdin In-Context can not find appropriate project at Crowdin. ' + 'Please contact project manager for further assistance.</p>');

          break;

        case 'jipt_disabled':
          if (data.data.isManager) {
            msg = '<p class="text-center" style="margin: 0 0 10px; padding: 0;"><strong>Crowdin In-Context is disabled for this project.</strong></p>' + '<p class="text-center">Check the <a target="_blank" href="' + configURL + '">integration guide</a> for more information ' + 'or <a href="' + helpURL + '" target="_blank">contact Crowdin Support</a></p>';
          } else {
            msg = '<p class="text-center" style="margin: 0 0 10px; padding: 0;"><strong>Translation mode is currently disabled.</strong></p>' + '<p class="text-center">Please contact <a href="' + data.ownerUrl + '">project manager</a> for further assistance.</p>';
          }

          this._show_error_dialog(msg);

          break;

        case 'denied':
          this._show_error_dialog('<p class="text-center">Sorry, you do not have access to this project</p>');

          break;

        case 'mfa_denied':
          this._show_error_dialog('' + '<p class="text-center">' + 'Project participants are required to have two-factor authentication enabled to be able to access the project' + '</p>' + this.mfaSettingsAndLogoutTpl(data.data.mfa_settings_url), true);

          break;

        case 'timeout':
          this._show_error_dialog('<p class="text-center">Oops. Could not load data from remote server</p>');

          break;

        case 'language_not_found':
          Storage.delete('language_id');
          Storage.delete('language_code');
          Storage.delete('language_name');

          this._show_error_dialog('<p class="text-center">' + 'The specified language was not found in your project' + '</p>', true);

          break;

        default:
          this._show_error_dialog('<p class="text-center">' + 'Something went wrong while performing request' + '</p>', true);

      }
    },
    element_classname: function element_classname($element) {
      if ($element.is('select')) {
        var classes = [];

        for (var name in jipt.status) {
          if ($element.find('[class*=crowdin_jipt_' + jipt.status[name] + ']').length) {
            classes.push('crowdin_jipt_' + jipt.status[name]);
          }
        }

        if ($element.find('[class*=crowdin_jipt_no_preview]').length) {
          classes.push('crowdin_jipt_no_preview');
        }

        return classes.join(' ');
      }

      var phrases = $element.data('phrases') || [];
      var statuses = [];
      var no_preview_class = '';

      for (var i = 0; i < phrases.length; i++) {
        var phrase = jipt.phrases[phrases[i].id].data;
        statuses.push(jipt.phrase_classname(phrase));

        if (!no_preview_class) {
          no_preview_class = jipt.phrase_no_preview_classname(phrase);
        }
      }

      for (var name in jipt.status) {
        var status = 'crowdin_jipt_' + jipt.status[name];

        if ($.inArray(status, statuses) >= 0) {
          return status + no_preview_class;
        }
      }

      return '' + no_preview_class;
    },
    phrase_no_preview_classname: function phrase_no_preview_classname(phrase) {
      var classname = jipt.pluralsPreview || phrase.text.length === 1 ? '' : ' crowdin_jipt_no_preview';
      return classname;
    },
    phrase_classname: function phrase_classname(phrase) {
      if (phrase.hidden) {
        return 'crowdin_jipt_hidden';
      }

      return 'crowdin_jipt_' + this.get_phrase_status(phrase.status);
    },
    addPhraseToElement: function addPhraseToElement(element, data) {
      var phrases = [];

      if (element.data('phrases')) {
        phrases = element.data('phrases');
      }

      for (var i = 0; i < phrases.length; i++) {
        if (+phrases[i].id === data.id) {
          return; // already exists
        }
      }

      phrases.push(data);
      element.data('phrases', phrases);
    },
    request: function request(method, url, data, callback, errorCallback, additionalHeaders) {
      var headers = {
        Accept: 'application/json'
      };

      if (additionalHeaders) {
        for (var i in additionalHeaders) {
          headers[i] = additionalHeaders[i];
        }
      }

      var isBlob = data instanceof Blob;

      if (method !== 'GET' && false === isBlob) {
        headers['Content-Type'] = 'application/json';
        data = JSON.stringify(data);
      }

      $.ajax({
        method: method,
        url: url,
        data: data,
        xhrFields: {
          withCredentials: true
        },
        dataType: isBlob ? null : 'json',
        headers: headers,
        crossDomain: true,
        timeout: 45000,
        contentType: isBlob ? 'application/octet-stream' : '',
        processData: !isBlob,
        beforeSend: function beforeSend(xhr, settings) {
          if ($.active > jipt.concurrentRequestsMaxCount) {
            jipt.pendingRequests.push($.extend({}, settings));
            xhr.abort();
          }
        },
        complete: function complete(xhr, status) {
          while (jipt.pendingRequests.length > 0 && $.active < jipt.concurrentRequestsMaxCount) {
            $.ajax(jipt.pendingRequests.shift());
          }

          if (status === 'timeout') {
            jipt._handle_jipt_error({
              errorCode: 'timeout'
            });
          }
        },
        success: function success(response) {
          callback(response);
        },
        error: function error(xhr) {
          if (errorCallback) {
            errorCallback(xhr);
            return;
          }

          if (xhr.status === 0) {
            jipt._show_error_dialog('<p class="text-center">Oops. Could not load data from remote server</p>', true);

            return;
          }

          if (xhr.status === 401) {
            jipt._handle_jipt_error({
              errorCode: 'auth_error'
            });
          } else if (xhr.responseJSON) {
            jipt._handle_jipt_error(xhr.responseJSON);
          }
        }
      });
    },
    findNext: function findNext(direction, element, selector) {
      var candidate = jipt[direction](element);

      while (true) {
        if (candidate === false) {
          return false;
        }

        if (candidate.is(selector)) {
          return candidate;
        }

        candidate = jipt[direction](candidate);
      }
    },
    next: function next(element) {
      var first_child = element.find('*:first');

      if (first_child.length !== 0) {
        return first_child;
      }

      var next = element.next();

      if (next.length !== 0) {
        return next;
      }

      var parent = element.parent();

      while (true) {
        if (parent.is('html') || parent.length === 0) {
          return false;
        }

        var parent_next = parent.next();

        if (parent_next.length !== 0) {
          return parent_next;
        }

        parent = parent.parent();
      }
    },
    prev: function prev(element) {
      var prev = element.prev();

      if (prev.length !== 0) {
        var prev_last = prev.find('*:last');

        if (prev_last.length !== 0) {
          return prev_last;
        } else {
          return prev;
        }
      }

      if (element.is('html') || element.length === 0) {
        return false;
      }

      return element.parent();
    },
    _load_phrases_delayed: function _load_phrases_delayed(text, callback) {
      if (config.preload_texts === true) {
        return; // load phrases only once
      }

      $.extend(jipt._phrases.need_load, jipt.get_phrases_from_text(text));

      jipt._phrases.callbacks.push(callback);

      clearTimeout(jipt._phrases.load_timeout);
      jipt._phrases.load_timeout = setTimeout(function () {
        var ids = jipt._phrases.need_load;

        var callbacks = jipt._phrases.callbacks.slice(0);

        jipt._phrases.need_load = {};
        jipt._phrases.callbacks = [];

        for (var id in ids) {
          if (jipt._phrases.was_loaded[id]) {
            delete ids[id];
          }
        }

        $.extend(jipt._phrases.was_loaded, ids);

        if ($.isEmptyObject(ids)) {
          return;
        }

        jipt._load_phrases(ids, callbacks);
      }, 200);
    },
    _load_phrases: function _load_phrases(ids, callbacks) {
      var responses_count = 0;
      var edit_strings_context = 0;

      if (config.edit_strings_context && !config.preload_texts) {
        edit_strings_context = 1;
      }

      if (config.preload_texts === true) {
        var serialized_ids_chunks = ['all'];
      } else {
        var serialized_ids = jipt.serialize_ids(ids);
        var serialized_ids_chunks = jipt.string_chunks(serialized_ids, 1400, '.');

        if (!serialized_ids_chunks.length) {
          for (var j = 0; j < callbacks.length; j++) {
            callbacks[j]();
          }

          jipt.rebuild_panel_phrases();
          return;
        }
      }

      for (var i = 0; i < serialized_ids_chunks.length; i++) {
        jipt.request('GET', Url.getFullUrl('/api/v2/jipt/project/' + get_project_identifier() + '/strings'), {
          languageCode: jipt.language.code,
          workflowStepId: jipt.workflowStep.id,
          editStringsContext: edit_strings_context,
          phrasesIds: serialized_ids_chunks[i]
        }, function (response) {
          responses_count++;
          $.extend(jipt.phrases, response.data);

          if (responses_count === serialized_ids_chunks.length) {
            for (var id in ids) {
              if (typeof jipt.phrases[id] === 'undefined') {
                jipt.phrases[id] = {
                  data: {
                    hidden: '0',
                    id: id,
                    status: 'not_found',
                    text: [jipt.not_found_warning],
                    translation: ['']
                  }
                };
              } else {
                if (config.domain && jipt.phrases[id].data.visibleOnStep == false) {
                  jipt.phrases[id].data.status = 'not_visible_on_step';
                }

                if (jipt.phrases[id].data.fileNotAvailableForLanguage) {
                  jipt.phrases[id].data.status = 'file_not_available_for_language';
                }
              }
            }

            for (var j = 0; j < callbacks.length; j++) {
              callbacks[j]();
            }

            jipt.delayed_rebuild_panel_phrases();
          }
        });
      }
    },
    update_strings_context: function update_strings_context(string_id, context) {
      if (+string_id === 0 || typeof context === 'undefined') {
        return;
      }

      if (!config.preload_texts) {
        var new_context = config.edit_strings_context(context);

        if (editContextTimeout) {
          window.clearTimeout(editContextTimeout);
        }

        if (new_context.length > 1500) {
          console.warn('Crowdin In-Context: Context cannot be updated because it is too long. String ID: ' + string_id);
          return;
        }

        if (context === new_context) {
          return;
        }

        if ($.inArray(string_id, stringsToUpdate.updatedStrings) > 0) {
          return;
        } else {
          stringsToUpdate.updatedStrings.push(string_id);
        }

        var stringsToCheck = stringsToUpdate.newStrings.slice();
        stringsToCheck.push({
          id: string_id,
          context: new_context
        });

        if (JSON.stringify(stringsToCheck).length > 1500) {
          jipt.send_strings();
        }

        stringsToUpdate.newStrings.push({
          id: string_id,
          context: new_context
        });
        editContextTimeout = window.setTimeout(function () {
          jipt.send_strings();
        }, 1000);
      }
    },
    send_strings: function send_strings() {
      jipt.request('PATCH', Url.getFullUrl('/api/v2/jipt/project/' + get_project_identifier() + '/strings'), {
        origin: window.location.origin,
        workflowStepId: jipt.workflowStep.id,
        strings: stringsToUpdate.newStrings
      }, function () {});
      stringsToUpdate.newStrings.splice(0, stringsToUpdate.newStrings.length);
    },
    get_phrases_from_text: function get_phrases_from_text(text) {
      var phrase_ids = {};

      while (true) {
        var match = jipt.regexp.globalStartPhrase.exec(text);

        if (match === null) {
          break;
        }

        phrase_ids[parseInt(match[1])] = true;
      }

      return phrase_ids;
    },
    serialize_ids: function serialize_ids(ids) {
      var chunks = [];
      var chunk = [];
      var last = 0;

      for (var id in ids) {
        if (id - last !== 1 && chunk.length !== 0) {
          chunks.push(chunk);
          chunk = [];
        }

        chunk.push(id);
        last = id;
      }

      if (chunk.length !== 0) {
        chunks.push(chunk);
      }

      var result = [];

      for (var i = 0; i < chunks.length; i++) {
        var first = chunks[i][0];
        var last = chunks[i][chunks[i].length - 1];

        if (first === last) {
          result.push(first);
        } else {
          result.push(first + '-' + last);
        }
      }

      return result.join('.');
    },
    string_chunks: function string_chunks(string, size, delimiter) {
      var result = [];

      while (true) {
        var index = string.indexOf(delimiter, size);

        if (index === -1) {
          if (string.length !== 0) {
            result.push(string);
          }

          break;
        }

        result.push(string.slice(0, index));
        string = string.slice(index + 1);
      }

      return result;
    },
    split: function split(text, search) {
      var result = [];
      var searchLength = search.length;

      while (true) {
        var searchPos = text.toLowerCase().indexOf(search);

        if (searchPos === -1) {
          result.push(text);
          break;
        }

        result.push(text.substr(0, searchPos));
        text = text.substr(searchPos + searchLength);
      }

      return result;
    },
    get_workflow_proofread_step_id: function get_workflow_proofread_step_id() {
      var workflowStepId = this.user.workflowStepId;

      if (workflowStepId == 1 || $.inArray(workflowStepId, this.workflowStepIds) == -1) {
        return this.workflowStepIds[this.workflowStepIds.length - 1];
      }

      return workflowStepId;
    },
    get_phrase_status: function get_phrase_status(translation_status) {
      if (typeof translation_status == 'string') {
        return translation_status;
      }

      var s_id = this.get_workflow_proofread_step_id();
      var status = this.status.untranslated; // in this case it is important to maintain consistency checks

      translation_status.translated && (status = this.status.translated);
      translation_status.approved[s_id] && (status = this.status.approved);
      translation_status.partially_approved[s_id] && (status = this.status.partially_approved);
      translation_status.partially_translated && (status = this.status.partially_translated);
      return status;
    },
    get_in_context_config_url: function get_in_context_config_url(data) {
      if (jipt.projectURL) {
        return jipt.projectURL + '/tools/in-context';
      }

      if (config.domain) {
        return Url.getEntryPoint() + '/u/projects/' + data.projectId + '/tools/in-context';
      }

      return Url.getEntryPoint() + '/project/' + data.projectId + '/tools/in-context';
    }
  };

  if (!window.location.search.match('\\bdisable_jipt\\b')) {
    jipt.init();
  }

  window.jipt = {
    target_language: Storage.get('language_code'),
    set_draft_suggestion: function set_draft_suggestion(translation_id, text) {
      jipt.set_draft_suggestion(translation_id, text);
    },
    save_suggestions: function save_suggestions(suggestions, force_saving, callback) {
      jipt.save_suggestions(suggestions, force_saving, callback);
    }
  };
})();

var sanitizer = new function () {
  this.uri_protocol_named_ref_map = {
    Tab: '\t',
    NewLine: '\n'
  };
  this.uri_blacklist_protocols = {
    javascript: 1,
    data: 1,
    vbscript: 1,
    mhtml: 1
  };
  this.uri_protocol_colon = /(?::|&#[xX]0*3[aA];?|&#0*58;?|&colon;)/;
  this.uri_protocols_whitespaces = /\\n|(?:^[\x00-\x20]+|[\t\n\r\x00]+)/g;
  this.special_attr_value_unquoted_chars = /(?:^(?:["'`]|\x00+$|$)|[\x09-\x0D >])/g;
  this.sensitive_html_entities = /&(?:#([xX][0-9A-Fa-f]+|\d+);?|(Tab|NewLine|colon|semi|lpar|rpar|apos|sol|comma|excl|ast|midast|ensp|emsp|thinsp);|(nbsp|amp|AMP|lt|LT|gt|GT|quot|QUOT);?)/g, this.null_value = /\x00/g;

  this.url = function (string) {
    return this.uri_blacklist_protocols[this._getProtocol(this._convertSpecialChars(string))] ? '#' : string;
  };

  this.attributes = function (string) {
    var reg,
        match,
        url,
        i,
        matches = [];
    reg = /\s+on\w*\s*=\s*("([^"]*")|'[^']*'|([^'">\s]*))/gi; //onClick ...

    while ((match = reg.exec(string)) !== null) {
      string = string.replace(match[0], '');
    }

    reg = /\bhref\s*=[^"']*(?:"([^"]*)"|'([^']*)')/gi; //href='javascript:alert(0)'

    while ((match = reg.exec(string)) !== null) {
      matches.push(match[1]);
    }

    for (i in matches) {
      url = this.url(matches[i]);
      string = string.replace(matches[i], url);
    }

    return string;
  };

  this.tags = function (string, tags) {
    var self = this;
    var repeat_action = false;
    tags.map(function (tag) {
      var reg = new RegExp('<' + tag + '\\b[^<]*(?:(?!<\\/' + tag + '>)<[^<]*)*((<\\/' + tag + '>)|>)', 'ig');
      var matchFullTag = string.match(reg);

      if (matchFullTag) {
        repeat_action = true;

        if (matchFullTag.length === 1) {
          var matches = reg.exec(string);
          string = self._replaceTags(string, matches);
        } else {
          string = self._replaceTags(string, matchFullTag);
        }
      }
    });

    if (repeat_action) {
      string = self.tags(string, tags);
    }

    return string;
  };

  this._replaceTags = function (string, matches) {
    for (var i = 0, length = matches.length; i < length; i++) {
      string = string.replace(matches[i], '');
    }

    return string;
  };

  this._getRawProtocol = function (string) {
    string = string.split(this.uri_protocol_colon, 2);
    return string.length === 2 && string[0] ? string[0] : null;
  };

  this._getProtocol = function (string) {
    string = this._getRawProtocol(string.replace(this.null_value, ''));
    var self = this;
    return string ? this._htmlDecode(string, this.uri_protocol_named_ref_map, this.sensitive_html_entities, function () {
      return this.replace(self.uri_protocols_whitespaces, '').toLowerCase();
    }) : null;
  };

  this._getCharacter = function (num) {
    return !isFinite(num) || num <= 0 || num > 0x10ffff || num === 0x0b || num >= 0x01 && num <= 0x08 || num >= 0x0e && num <= 0x1f || num >= 0x7f && num <= 0x9f || num >= 0xfdd0 && num <= 0xfdef || (num & 0xffff) === 0xffff || (num & 0xffff) === 0xfffe ? '' : this._fromCodePoint(num);
  };

  this._fromCodePoint = String.fromCodePoint || function (codePoint) {
    if (arguments.length === 0) {
      return '';
    }

    if (codePoint <= 0xffff) {
      return String.fromCharCode(codePoint);
    }

    codePoint -= 0x10000;
    return String.fromCharCode((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
  };

  this._convertSpecialChars = function (string) {
    return this._stringify(string, String.prototype.replace, this.special_attr_value_unquoted_chars, function (m) {
      return m === '\t' ? '&#9;' : m === '\n' ? '&#10;' : m === '\x0B' ? '&#11;' : m === '\f' ? '&#12;' : m === '\r' ? '&#13;' : m === ' ' ? '&#32;' : m === '>' ? '&gt;' : m === '"' ? '&quot;' : m === "'" ? '&#39;' : m === '`' ? '&#96;' : '';
    });
  };

  this._stringify = function (string, callback) {
    return typeof string === 'undefined' ? 'undefined' : string === null ? 'null' : callback.apply(string.toString(), [].splice.call(arguments, 2));
  };

  this._htmlDecode = function (string, namedRefMap, reNamedRef, callback) {
    var decodedStr,
        args = [].splice.call(arguments, 4),
        self = this;
    return this._stringify(string, function () {
      decodedStr = this.replace(this.null_value, '').replace(reNamedRef, function (m, num, named, named1) {
        if (num) {
          num = Number(num[0] <= '9' ? num : '0' + num);
          return num >= 0xd800 && num <= 0xdfff || num === 0x0d ? '' : self._getCharacter(num);
        }

        return namedRefMap[named || named1] || m;
      });
      return callback ? callback.apply(decodedStr, args) : decodedStr;
    });
  };
}();
},{}]},{},["ttqo"], null)
//# sourceMappingURL=/jipt.6fd934ca.js.map