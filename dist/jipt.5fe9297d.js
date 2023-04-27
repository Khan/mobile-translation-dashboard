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

!function (t) {
  var e,
      i = null,
      n = {
    updatedStrings: [],
    newStrings: []
  },
      a = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|Windows Phone/i),
      o = {
    preload_texts: 'auto',
    project: document.domain,
    before_dom_insert: function before_dom_insert(t) {
      return t;
    },
    before_commit: null,
    edit_strings_context: null,
    touch_optimized: 'ontouchstart' in document.documentElement,
    escape: null,
    domain: null
  },
      s = function s(t, e) {
    var i = new Date(new Date().getTime() + 31536e6);
    document.cookie = t + '=' + escape(e) + '; path=/; expires=' + i.toGMTString();
  },
      r = function r(t) {
    for (var e = document.cookie.split(';'), i = '', n = '', a = !1, o = 0; o < e.length; o++) {
      if (i = e[o].split('='), i[0].replace(/^\s+|\s+$/g, '') === t) return a = !0, i.length > 1 && (n = unescape(i[1].replace(/^\s+|\s+$/g, ''))), n;
      i = null, '';
    }

    if (!a) return null;
  },
      l = {
    save: function save(t, e) {
      full_key = 'jipt_' + t + '_' + p(), window.localStorage ? localStorage.setItem(full_key, e) : s(full_key, e);
    },
    get: function get(t) {
      var e = null,
          i = 'jipt_' + t + '_' + p();
      return e = window.localStorage ? 'undefined' === (e = localStorage.getItem(i) ? localStorage.getItem(i) : null) ? void 0 : e : r(i);
    }
  },
      d = {
    join: 'join',
    login: 'login',
    enterpriseLogin: 'u/signin',
    entryPoint: '',
    jiptCDN: 'https://cdn.crowdin.com/jipt',
    crowdinDomain: 'crowdin.com',
    getEntryPoint: function getEntryPoint() {
      if (0 === this.entryPoint.length) {
        var t = null != o.domain ? o.domain + '.' : '';
        this.entryPoint = 'https://' + t + this.crowdinDomain;
      }

      return this.entryPoint;
    },
    getFullUrl: function getFullUrl(t) {
      return this.getEntryPoint() + (o.domain ? '/backend' : '') + t;
    },
    getJiptPath: function getJiptPath(t) {
      var e;
      return e = t == this.join || t == this.login ? o.domain ? this.enterpriseLogin : t : this.login, this.getEntryPoint() + '/' + e + '?redirect_hash=' + f.user.redirect_hash;
    }
  },
      p = function p() {
    return o.project;
  },
      c = function c() {
    for (var t = _jipt || [], e = 0; e < t.length; e++) {
      o[t[e][0]] = t[e][1];
    }
  },
      u = function u() {
    var t,
        e,
        i,
        n,
        a = '',
        o = '',
        s = 0;
    document.documentElement.style.opacity = '0', a += 'position: fixed;', a += 'top: 0;', a += 'right: 0;', a += 'bottom: 0;', a += 'left: 0;', a += 'z-index: 2037483647;', a += 'text-align: center;', a += 'background-color: #fff;', (t = document.createElement('div')).setAttribute('id', 'crowdin-jipt-mask'), t.setAttribute('style', a), s = document.documentElement.clientHeight / 2 - 25, o += 'height: 40px;', o += 'width: 40px;', o += 'background-image: url(' + d.jiptCDN + '/images/preloader.gif);', o += 'background-repeat: no-repeat;', o += 'background-position: center center;', o += 'display: inline-block;', o += 'margin-top: ' + s + 'px;', (e = document.createElement('div')).setAttribute('style', o), n = window.setInterval(function () {
      void 0 !== (i = document.getElementsByTagName('body')[0]) && (window.clearInterval(n), i.appendChild(t), t.appendChild(e), document.documentElement.style.opacity = '');
    }, 100);
  },
      _ = function _() {
    var t = document.getElementById('crowdin-jipt-mask');
    t && t.parentNode.removeChild(t);
  },
      g = function g(t, e, i) {
    var n,
        a = !1;
    'js' === e ? ((n = document.createElement('script')).setAttribute('type', 'text/javascript'), n.setAttribute('src', t)) : 'css' === e && ((n = document.createElement('link')).setAttribute('rel', 'stylesheet'), n.setAttribute('type', 'text/css'), n.setAttribute('href', t)), void 0 !== n && (n.onload = n.onreadystatechange = function () {
      a || this.readyState && 'loaded' !== this.readyState && 'complete' !== this.readyState || (a = !0, i && i(), n.onload = n.onreadystatechange = null);
    }, document.getElementsByTagName('head')[0].appendChild(n));
  },
      h = function h(t) {
    return t ? t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '';
  },

  /* KHAN ACADEMY CHANGE - added `= window.crowdinState` so that we can know the selected language */
  f = window.crowdinState = {
    callbacks: {},
    phrases: {},
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
      is_logged_in: !0,
      is_leader: !0,
      is_manager: !1,
      name: '',
      login: '',
      picture: '',
      redirect_hash: ''
    },
    regexp: {
      placeholders: null,
      startPhrase: /{crwdns(\d+):(\d)}/i,
      globalStartPhrase: /{crwdns(\d+):\d}/gi,
      globalPhrase: /{crwdns(\d+):(\d)}([\s\S]*?){crwdne\1:\2}/gi,
      exactPhrase: /^{crwdns(\d+):(\d)}([\s\S]*?){crwdne\1:\2}$/i,
      delimiterPart: function delimiterPart(t, e) {
        return '{crwdnd' + t + ':' + e + '}';
      },
      endPart: function endPart(t, e) {
        return '{crwdne' + t + ':' + e + '}';
      },
      wrapText: function wrapText(t) {
        return '{crwdns0:0}' + t + '{crwdne0:0}';
      }
    },
    regexp_new: {
      startPhrase: /crwdns(\d+):(\d)/i,
      globalStartPhrase: /crwdns(\d+):\d/gi,
      globalPhrase: /crwdns(\d+):(\d)([\s\S]*?)crwdne\1:\2/gi,
      exactPhrase: /^crwdns(\d+):(\d)([\s\S]*?)crwdne\1:\2$/i,
      delimiterPart: function delimiterPart(t, e) {
        return 'crwdnd' + t + ':' + e;
      },
      endPart: function endPart(t, e) {
        return 'crwdne' + t + ':' + e;
      },
      wrapText: function wrapText(t) {
        return 'crwdns0:0' + t + 'crwdne0:0';
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
      not_visible_on_step: 'not_visible_on_step'
    },
    plurals_preview: !1,
    translatable_placeholders: [],
    translation_preview: {
      id: !1,
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
    minimized_translation_panel: !0,
    translations_preview: null,
    translations_highlight: null,
    translations_filter: null,
    touch_optimized: null,
    panel_search_phrase: null,
    rebuild_panel_timeout: null,
    panel_page: 0,
    panel_pages: 1,
    open_hotkeys_settings: !1,
    open_editor_settings: !1,
    editor_loaded: !1,
    editorDialogIframe: null,
    not_found_warning: '[Unrecognized text]',
    loginDialogContent: function loginDialogContent() {
      var t = '';
      return o.domain || (t = '<div class="jipt-register-block jipt-help-block">Don\'t have a profile? <a target="_blank" href="javascript:void(0)" id="crowdin-join">Sign Up</a></div>'), '<div class="crowdin-login-panel" style="display: none;"><div id="Jipt_Language"><div class="language-group"><label for="crowdin-login-language-field">Target Language:</label><div><select class="no-margin input-block-level" id="crowdin-login-language-field"></select></div></div></div><div id="Jipt_Workflow_Step"><div class="workflow-step-group hide"><label class="jipt-s-margin-right" for="crowdin-login-workflow-step-field">Workflow Step:</label><div><select class="no-margin input-block-level" id="crowdin-login-workflow-step-field"></select></div></div></div><hr class="jipt-hr"><div class="jipt-clearfix text-center"><h4 class="no-margin-top">Sign in with your Crowdin account</h4><div id="regular_login"><button type="submit" class="jipt-btn" id="crowdin-jipt-login">Sign In</button>' + t + '</div></div></div><div class="crowdin-languages-panel" style="display: none;"><div><label for="crowdin-language-field">Target Language: </label><div><select class="input-block-level" id="crowdin-language-field"></select></div></div><div class="workflow-step-group hide"><label for="crowdin-workflow-step-field">Workflow Step: </label><div><select class="input-block-level" id="crowdin-workflow-step-field"></select></div></div><div><button type="button" class="jipt-btn" id="crowdin-select-language-and-step" style="margin-top: 10px;">Select</button></div></div><div class="crowdin-login-failed" style="display: none;"><div class="crowdin-jipt-alert" style="margin-bottom: 30px;"><b>Login failed.</b> Check that third-party cookies are enabled in your browser and try again.</div><h4 class="crowdin-login-failed-help-heading" style="display: none;">Allowing Third-Party Cookies to Be Set</h4><ol class="crowdin-login-failed-help-safari" style="margin: 0 0 20px 20px; display: none;"><li>Click <strong>Safari</strong> in the menu bar.</li><li>Click <strong>Preferences...</strong></li><li>Click the <strong>Privacy</strong> panel.</li><li>For the option <strong>Block cookies and other website data</strong>, select <strong>Never</strong>.</li></ol><ol class="crowdin-login-failed-help-chrome" style="margin: 0 0 20px 20px; display: none;"><li>Click the <strong>Chrome menu</strong> in the upper right of the window.</li><li>Click <strong>Settings</strong>.</li><li>Click <strong>Show advanced settings...</strong></li><li>Open <strong>Content settings...</strong></li><li>Ensure the option <strong>Allow local data to be set (recommended)</strong> is selected.</li><li>Ensure the checkbox labelled <strong>Block third-party cookies and site data</strong> is <strong>unchecked</strong>.</li></ol><ol class="crowdin-login-failed-help-ie" style="margin: 0 0 20px 20px; display: none;"><li>Click the <strong>cog menu</strong> in the upper right of the window.</li><li>Click <strong>Internet Options</strong>.</li><li>Click the <strong>Privacy</strong> tab.</li><li>Click and drag the slider in the <strong>Settings</strong> section to the bottom, to <strong>Accept All Cookies</strong>.</li><li>Click <strong>OK</strong>.</li></ol><ol class="crowdin-login-failed-help-firefox" style="margin: 0 0 20px 20px; display: none;"><li>Click the <strong>Firefox</strong> menu.</li><li>Open the <strong>Options</strong> window.<li>Click <strong>Options</strong> (in Windows) or <strong>Preferences...</strong> (in OS X)</li><li>Click the <strong>Privacy</strong> panel.</li><li>In the <strong>History</strong> section, select <strong>Firefox will: Remember history</strong>.</li></ol><ol class="crowdin-login-failed-help-opera" style="margin: 0 0 20px 20px; display: none;"><li>Click the "Opera" menu.</li><li>Click "Settings".</li><li>Select "Privacy & Security" on the left list.</li><li>Open <strong>Content settings...</strong></li><li>Ensure the option <strong>Allow local data to be set (recommended)</strong> is selected.</li><li>Ensure the checkbox labelled <strong>Block third-party cookies and site data</strong> is <strong>unchecked</strong>.</li></ol><input type="button" class="jipt-btn crowdin-jipt-to-login" value="Back to Login"></div>';
    },
    translationDialogButtons: function translationDialogButtons() {
      return '<div class="jipt-clearfix"><ul id="translation_panel_tabs" class="jipt-tabs pull-left"><li><a id="show_translations" class="jipt-btn active jipt-btn-icon" href="#jipt-translations"><i class="jipt-icon-home"></i></a></li><li><a id="show_options" href="#jipt-options" class="jipt-btn jipt-btn-icon"><i class="jipt-icon-options"></i></a></li></ul><div id="translation_panel_paging_wrapper" class="pull-right"><form id="translation_panel_paging" class="jipt-paging no-margin jipt-clearfix" style="display: none;"><input type="text" class="pull-left" id="translation_panel_current_page" size="5"><div class="pull-right"><a href="#" class="jipt-panel-page jipt-btn jipt-btn-icon" id="translation_panel_prev_page"><i class="jipt-icon-prev"></i></a><a href="#" class="jipt-panel-page jipt-btn jipt-btn-icon" id="translation_panel_next_page"><i class="jipt-icon-next"></i></a></div></form></div></div>';
    },
    translationDialogContent: function translationDialogContent() {
      var t = !0 === f.translations_preview ? ' checked' : '',
          e = !0 === f.translations_highlight ? ' checked' : '',
          i = !0 === f.translations_filter ? ' checked' : '',
          n = !0 === f.touch_optimized ? ' checked' : '',
          s = f.user.login,
          r = f.user.name,
          l = f.user.picture,
          p = l ? 'src="' + l + '"' : '',
          c = d.getEntryPoint() + '/profile/' + s,
          u = '<div class="jipt-control-group"><label class="jipt-checkbox"><input type="checkbox" id="jipt-translations-preview"' + t + '>Preview translations</label></div>',
          _ = '<div class="jipt-control-group"><label class="jipt-checkbox"><input type="checkbox" id="jipt-translations-highlight"' + e + '>Highlight</label></div>',
          g = o.preload_texts ? '<div class="jipt-control-group"><label class="jipt-checkbox"><input type="checkbox" id="jipt-translations-filter"' + i + '>List only texts from the current page</label><div class="jipt-help-block">Home screen will show only strings used on this page.</div></div>' : '',
          n = o.touch_optimized ? '<div class="jipt-control-group"><label class="jipt-checkbox"><input type="checkbox" id="jipt-touch-optimized"' + n + '>Touch optimized mode</label></div>' : '',
          h = a ? '' : '<div class="jipt-control-group jipt-settings-toggle"><a href="javascript:void(0);" id="jipt-hotkeys-settings">Keyboard Shortcuts</a></div>',
          m = '';

      return f.workflowSteps.length && (m = '<div class="jipt-control-group workflow-step-group"><label for="jipt-workflow-step">Workflow Step: </label><div><select class="input-block-level" id="jipt-workflow-step"></select></div></div>'), '<div class="crowdin-translation-panel-container"><div id="translation_panel_tabs_content" class="jipt-tabs-content"><div class="jipt-tab-pane" id="jipt-translations"><div class="jipt-clear-btn-wrapper"><input type="text" class="jipt-search-phrase input-block-level" placeholder="Type to search string" /><a class="jipt-clear-btn" href="#" style="display: none;"></a></div><div class="jipt-phrases-container no-focus"><ul class="jipt-phrases-to-translate"><li class="jipt-loading-msg">Loading...</li></ul></div></div><div class="jipt-tab-pane" id="jipt-options" style="display: none"><div class="jipt-control-group"><label for="jipt-target-languages">Language: </label><div><select class="input-block-level" id="jipt-target-languages"></select></div></div>' + m + '<div><button type="button" class="jipt-btn" id="jipt-change-language-and-step">Change</button></div><hr class="jipt-hr">' + u + _ + g + n + '<hr class="jipt-hr jipt-settings-toggle"><div class="jipt-control-group jipt-clearfix jipt-settings-toggle"><a class="pull-left jipt_user" target="_blank" href="' + c + '"><img alt="" ' + p + ' class="jipt_user_picture"></a><div style="margin-left: 54px"><div class="jipt_user_name"><a target="_blank" href="' + c + '">' + r + '</a></div><button type="button" id="jipt-logout" class="jipt-btn">Log Out</button></div></div><hr class="jipt-hr jipt-settings-toggle"><div class="jipt-control-group jipt-settings-toggle"><a target="_blank" href="' + f.projectURL + '">View in Crowdin</a></div><div class="jipt-control-group jipt-settings-toggle"><a href="javascript:void(0);" id="jipt-editor-settings">Editor Settings</a></div>' + h + '</div></div></div>';
    },
    init: function init() {
      u(), c(), g(d.jiptCDN + '/jipt.css?v3', 'css'), g(d.jiptCDN + '/lib/jquery.min.js', 'js', function () {
        e = jQuery.noConflict(!0), f.init_plugins(), f.init_editor_listener(), e(document).ready(function () {
          f.init_login_panel(), f.init_highlight(), f.init_preview(), f.init_filter(), f.init_touch_optimized(), f.init_project();
        });
      });
    },
    init_plugins: function init_plugins() {
      f.init_jipt_dialog(), f.init_mouse_touch_events(), f.init_drags(), f.init_center_position();
    },
    init_icu: function init_icu() {
      g(d.jiptCDN + '/../js/lib/moment.min.js', 'js'), g(d.jiptCDN + '/../js/lib/icu/Intl.complete.min.js', 'js'), g(d.jiptCDN + '/../js/lib/icu/messageformatLight.js', 'js');
    },
    init_jipt_dialog: function init_jipt_dialog() {
      e.fn.jiptDialog = function (t) {
        function i() {
          e('#jipt-modal-mask').length || e(e('<div>').attr('id', 'jipt-modal-mask').css('display', 'none')).appendTo('body');
        }

        function n(t) {
          var i;
          c.hasClass('jipt-dialog-minimized') ? (c.removeClass('jipt-dialog-minimized'), l.get(p.attr('id') + '_normal') ? (i = JSON.parse(l.get(p.attr('id') + '_normal')), c.css(i)) : c.css('top', e(window).height() - c.outerHeight() - 10 + 'px')) : t || (i = {
            top: c.offset().top - e(window).scrollTop(),
            left: c.offset().left - e(window).scrollLeft()
          }, l.save(p.attr('id') + '_normal', JSON.stringify(i)), c.addClass('jipt-dialog-minimized'));
        }

        function a() {
          var i, n;

          switch (t.position) {
            case 'center':
              !1 === t.fixed ? c.center(window, !0) : c.center();
              break;

            case 'bottom-left':
              i = e(window).height() - c.outerHeight() - 10 + e(window).scrollTop(), c.css({
                top: (i < 0 ? 0 : i) + 'px',
                left: '10px'
              });
              break;

            case 'bottom-right':
              i = e(window).height() - c.outerHeight() - 10 + e(window).scrollTop(), n = e(window).width() - c.outerWidth() - 10 + e(window).scrollLeft(), c.css({
                top: (i < 0 ? 0 : i) + 'px',
                left: (n > 0 ? 0 : n) + 'px'
              });
              break;

            default:
              !1 === t.fixed ? c.center(window, !0) : c.center();
          }
        }

        function o() {
          e(window).unload(function () {
            if (c.is(':visible')) {
              var t = {
                top: c.offset().top - e(window).scrollTop(),
                left: c.offset().left - e(window).scrollLeft()
              };
              l.save(p.attr('id'), JSON.stringify(t)), c.hasClass('jipt-dialog-minimized') ? l.save(p.attr('id') + '_min', 'yes') : l.save(p.attr('id') + '_min', 'no');
            }
          });
        }

        function s() {
          if ('yes' === l.get(p.attr('id') + '_min') && c.addClass('jipt-dialog-minimized'), l.get(p.attr('id'))) {
            var t = JSON.parse(l.get(p.attr('id'))),
                i = e(window).width() - c.outerWidth(),
                n = e(window).height() - c.outerHeight();
            t.left < 0 ? t.left = 0 : t.left > i && (t.left = i), t.top < 0 ? t.top = 0 : t.top > n && (t.top = n), c.css(t), o();
          } else a(), o();
        }

        function r() {
          c.css('z-index', f.dialog_zindex += 1).siblings('.jipt-dialog').removeClass('active-dialog').end().addClass('active-dialog');
        }

        t = e.extend({
          modal: !1,
          position: '',
          save_position: !1,
          drags: !0,
          resize: !1,
          fixed: !0,
          title_pane: '',
          minimize_btn: !0,
          close_btn: !0,
          minimized: !1,
          icon: '',
          buttons_pane: '',
          width: 'auto',
          height: 'auto',
          save_height: !1,
          custom_class: '',
          close_callback: '',
          iframe: !1,
          action: 'init'
        }, t);
        var p = e(this),
            c = {},
            u = {};
        if ('init' === t.action || (c = p.parent()).hasClass('jipt-dialog')) switch (t.action) {
          case 'init':
            return function () {
              if (p.hasClass('jipt-dialog-content')) console.warn('Crowdin In-Context dialog: seems that dialog is already initialized.');else {
                if (c = e('<div class="jipt-dialog crowdin-jipt ' + t.custom_class + '" style="display:none">'), p.addClass('jipt-dialog-content'), c.appendTo('body'), t.iframe) {
                  var n = p.html(),
                      o = e('<iframe class="crowdin-jipt" frameBorder="0"/>');
                  o.css({
                    width: '100%',
                    display: 'block',
                    overflow: 'hidden',
                    height: t.height
                  }), p.empty().append(o).css('padding', 0), c.html(p);
                  var _ = o.contents()[0];
                  _.open(), _.write('<!doctype html><html><head><link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"><link rel="stylesheet" type="text/css" href="' + d.jiptCDN + '/jipt.css"/></head><body style="margin: 0" id ="' + p.get(0).id + '" class="jipt-dialog-content crowdin-jipt ' + t.custom_class + '">' + n + '</body></html>'), _.close(), (u = o.contents()).mousedown(function (t) {
                    0 === e(t.target).closest('.no-focus').length && r();
                  });
                } else c.html(p), u = p;

                var g = p.attr('id'),
                    h = t.icon ? ' jipt-dialog-icon-' + t.icon : '',
                    f = t.close_btn ? '<a href="#" data-id="#' + g + '" class="jipt-close-btn jipt-dialog-close">&times;</a>' : '',
                    m = t.minimize_btn ? '<a href="#" data-id="#' + g + '" class="jipt-minimize-btn jipt-dialog-minimize"><span></span></a>' : '',
                    v = '',
                    w = '',
                    b = '';

                if (t.title_pane && (v = '<div class="jipt-dialog-title jipt-dialog-drags jipt-clearfix' + h + '">' + t.title_pane + '</div>'), (f || m) && (w = '<div class="jipt-dialog-title-buttons jipt-clearfix">' + f + m + '</div>'), p.before(w + v), t.buttons_pane && (b = '<div class="jipt-dialog-buttons jipt-dialog-drags jipt-clearfix">' + t.buttons_pane + '</div>', p.after(b)), c.css('position', !0 === t.fixed ? 'fixed' : 'absolute'), c.width('auto' === t.width ? c.width() : t.width), p.height(t.height), p.append('<div class="jipt-dialog-content-mask" style="display: none; height:' + p.height() + 'px;"><div>'), t.save_height && !t.iframe && c.data('save_height', !0), t.modal && (c.data('modal', !0), i()), t.drags && t.title_pane) {
                  var j = !0 === t.fixed ? 'fixed' : 'absolute';
                  c.udraggable({
                    position: j,
                    handle: '.jipt-dialog-drags'
                  });
                }

                t.resize && c.addClass('jipt-dialog-resize'), t.minimized && 'no' !== l.get(p.attr('id') + '_min') && c.addClass('jipt-dialog-minimized'), c.find('.jipt-dialog-close').click(function () {
                  return p.jiptDialog({
                    action: 'close'
                  }), !1;
                }), c.find('.jipt-dialog-minimize').click(function () {
                  return p.jiptDialog({
                    action: 'toggle_minimized'
                  }), !1;
                }), c.find('.jipt-dialog-title').on('utap', function () {
                  c.hasClass('jipt-dialog-minimized') && p.jiptDialog({
                    action: 'toggle_minimized_show'
                  });
                }), c.on('jipt_dialog_close', function () {
                  t.close_callback && t.close_callback();
                }), t.save_position ? s() : a();
              }
            }(), u;

          case 'open':
            c.data('modal') && (e('#jipt-modal-mask').css('z-index', f.dialog_zindex += 1).show(), e('html').addClass('jipt-no-scroll')), '' === t.position || c.is(':visible') || a(), r(), c.css('visibility', 'visible'), c.css('display', 'block'), c.data('save_height') && p.height(p.height()).css('overflow', 'auto');
            break;

          case 'close':
            c.data('modal') && (e('html').removeClass('jipt-no-scroll'), e('#jipt-modal-mask').hide()), c.css('display', 'none'), c.trigger('jipt_dialog_close');
            break;

          case 'destroy':
            c.data('modal') && e('#jipt-modal-mask').hide(), c.remove();
            break;

          case 'toggle_minimized':
            n();
            break;

          case 'toggle_minimized_show':
            n(!0);
            break;

          case 'center':
            c.center();
            break;

          case 'is_visible':
            return c.is(':visible');

          case 'move_to_front':
            r();
            break;

          default:
            return void console.warn('Crowdin JIPT dialog: unknown action :(');
        } else console.warn('Crowdin In-Context dialog: seems that dialog is not initialized.');
      }, e(document).on('mousedown utapstart', function (t) {
        var i = e(t.target).closest('.jipt-dialog');
        i.length ? i.find('.jipt-dialog-content').jiptDialog({
          action: 'move_to_front'
        }) : e('.jipt-dialog').removeClass('active-dialog');
      });
    },
    init_mouse_touch_events: function init_mouse_touch_events() {
      var t,
          i,
          n,
          a,
          o,
          s,
          r,
          l,
          d,
          p,
          c,
          u,
          _,
          g,
          h,
          f,
          m,
          v = e.event.special,
          w = {},
          b = !1,
          j = -1,
          x = !1,
          y = {
        bound_ns_map: {},
        wheel_ratio: 15,
        px_radius: 1,
        ignore_class: ':input',
        tap_time: 200,
        held_tap_time: 300
      },
          k = [];

      l = function l(t) {
        var e,
            i = 0;

        for (e = this.length; e; 0) {
          this[--e] === t && i++;
        }

        return i;
      }, d = function d(t) {
        var e,
            i = 0;

        for (e = this.length; e; 0) {
          this[--e] === t && (this.splice(e, 1), i++, e++);
        }

        return i;
      }, p = function p(t) {
        return !l.call(this, t) && (this.push(t), !0);
      }, t = (c = function c(t) {
        if (t && e.isArray(t)) {
          if (t.remove_val) return console.warn('The array appears to already have listPlus capabilities'), t;
        } else t = [];

        return t.remove_val = d, t.match_val = l, t.push_uniq = p, t;
      })(), i = {
        setup: function setup(i, n, a) {
          var o,
              s,
              r,
              l,
              d,
              p = this,
              u = e(p),
              _ = {};

          if (!e.data(this, 'ue_bound')) {
            for (o = {}, e.extend(!0, o, y), e.data(p, 'ue_bound', o), (d = c(n.slice(0))).length && '' !== d[0] || (d = ['000']), s = 0; s < d.length; s++) {
              (r = d[s]) && (_.hasOwnProperty(r) || (_[r] = !0, l = '.__ue' + r, u.bind('mousedown' + l, f), u.bind('touchstart' + l, m), u.bind('mousewheel' + l, void 0)));
            }

            t.push_uniq(p), b || (e(document).bind('mousemove.__ue', f), e(document).bind('touchmove.__ue', m), e(document).bind('mouseup.__ue', f), e(document).bind('touchend.__ue', m), e(document).bind('touchcancel.__ue', m), b = !0);
          }
        },
        add: function add(t) {
          var i,
              n,
              a,
              o,
              s = this,
              r = e.data(s, 'ue_bound'),
              l = t.namespace,
              d = t.type;
          if (r && ((i = r.bound_ns_map)[d] || (i[d] = {}), l)) for (n = l.split('.'), a = 0; a < n.length; a++) {
            o = n[a], i[d][o] = !0;
          }
        },
        remove: function remove(t) {
          var i,
              n,
              a,
              o = this,
              s = e.data(o, 'ue_bound').bound_ns_map,
              r = t.type,
              l = t.namespace;
          if (s[r]) if (l) {
            for (i = l.split('.'), n = 0; n < i.length; n++) {
              a = i[n], s[r][a] && delete s[r][a];
            }

            e.isEmptyObject(s[r]) && delete s[r];
          } else delete s[r];
        },
        teardown: function teardown(i) {
          var n,
              a,
              o,
              s,
              r = this,
              l = e(r),
              d = e.data(r, 'ue_bound').bound_ns_map;

          if (e.isEmptyObject(d)) {
            for ((s = c(i)).push_uniq('000'), n = 0; n < s.length; n++) {
              (a = s[n]) && (o = '.__ue' + a, l.unbind('mousedown' + o), l.unbind('touchstart' + o), l.unbind('mousewheel' + o));
            }

            e.removeData(r, 'ue_bound'), t.remove_val(this), 0 === t.length && (e(document).unbind('mousemove.__ue'), e(document).unbind('touchmove.__ue'), e(document).unbind('mouseup.__ue'), e(document).unbind('touchend.__ue'), e(document).unbind('touchcancel.__ue'), b = !1);
          }
        }
      }, u = function u(t) {
        var i,
            n = +new Date(),
            o = t.motion_id,
            s = t.motion_map,
            r = t.bound_ns_map;
        delete s.idto_tapheld, s.do_allow_tap && (s.px_end_x = s.px_start_x, s.px_end_y = s.px_start_y, s.ms_timestop = n, s.ms_elapsed = n - s.ms_timestart, r.uheld && (i = e.Event('uheld'), e.extend(i, s), e(s.elem_bound).trigger(i)), r.uheldstart ? (i = e.Event('uheldstart'), e.extend(i, s), e(s.elem_bound).trigger(i), a = o) : delete w[o]);
      }, _ = function _(t) {
        var i,
            n,
            a,
            l,
            d = t.motion_id,
            p = t.event_src,
            c = t.request_dzoom,
            _ = e.data(t.elem, 'ue_bound'),
            g = _.bound_ns_map,
            h = e(p.target),
            f = !1;

        if (!w[d] && (!c || g.uzoomstart) && !(h.is(_.ignore_class) || h.is('a') || h.parent().is('a'))) {
          for (p.preventDefault(), a = !!(g.utap || g.uheld || g.uheldstart), n = k.pop(); n;) {
            h.is(n.selector_str) || e(t.elem).is(n.selector_str) ? n.callback_match && n.callback_match(t) : n.callback_nomatch && n.callback_nomatch(t), n = k.pop();
          }

          if (i = {
            do_allow_tap: a,
            elem_bound: t.elem,
            elem_target: p.target,
            ms_elapsed: 0,
            ms_timestart: p.timeStamp,
            ms_timestop: void 0,
            option_map: _,
            orig_target: p.target,
            px_current_x: p.clientX,
            px_current_y: p.clientY,
            px_end_x: void 0,
            px_end_y: void 0,
            px_start_x: p.clientX,
            px_start_y: p.clientY,
            timeStamp: p.timeStamp
          }, w[d] = i, l = e.Event('utapstart'), e.extend(l, i), e(i.elem_bound).trigger(l), g.uzoomstart && (c ? o = d : s ? r || (r = d, l = e.Event('uzoomstart'), f = !0) : s = d, f)) return l = e.Event('uzoomstart'), i.px_delta_zoom = 0, e.extend(l, i), void e(i.elem_bound).trigger(l);
          (g.uheld || g.uheldstart) && (i.idto_tapheld = setTimeout(function () {
            u({
              motion_id: d,
              motion_map: i,
              bound_ns_map: g
            });
          }, _.held_tap_time));
        }
      }, g = function g(t) {
        var i,
            l,
            d,
            p,
            c,
            u,
            _,
            g,
            h = t.motion_id,
            f = t.event_src,
            m = !1;

        if (w[h]) {
          if (f.preventDefault(), i = w[h], l = i.option_map, d = l.bound_ns_map, i.timeStamp = f.timeStamp, i.elem_target = f.target, i.ms_elapsed = f.timeStamp - i.ms_timestart, i.px_delta_x = f.clientX - i.px_current_x, i.px_delta_y = f.clientY - i.px_current_y, i.px_current_x = f.clientX, i.px_current_y = f.clientY, i.timeStamp = f.timeStamp, i.do_allow_tap && (Math.abs(i.px_delta_x) > l.px_radius || Math.abs(i.pd_delta_y) > l.px_radius || i.ms_elapsed > l.tap_time) && (i.do_allow_tap = !1), s && r && (h === s || h === r) ? (w[h] = i, _ = w[s], g = w[r], c = Math.floor(Math.sqrt(Math.pow(_.px_current_x - g.px_current_x, 2) + Math.pow(_.px_current_y - g.px_current_y, 2)) + 0.5), u = -1 === j ? 0 : 4 * (c - j), j = c, m = !0) : o === h && d.uzoommove && (u = 1 * i.px_delta_y, m = !0), m) return p = e.Event('uzoommove'), i.px_delta_zoom = u, e.extend(p, i), void e(i.elem_bound).trigger(p);
          a === h ? d.uheldmove && (p = e.Event('uheldmove'), e.extend(p, i), e(i.elem_bound).trigger(p)) : n === h && d.udragmove && (p = e.Event('udragmove'), e.extend(p, i), e(i.elem_bound).trigger(p)), n || a || !d.udragstart || !1 !== i.do_allow_tap || (n = h, p = e.Event('udragstart'), e.extend(p, i), e(i.elem_bound).trigger(p), i.idto_tapheld && (clearTimeout(i.idto_tapheld), delete i.idto_tapheld));
        }
      }, h = function h(t) {
        var i,
            l,
            d,
            p,
            c = t.motion_id,
            u = t.event_src,
            _ = !1;

        x = !1, w[c] && (d = (l = (i = w[c]).option_map).bound_ns_map, i.elem_target = u.target, i.ms_elapsed = u.timeStamp - i.ms_timestart, i.ms_timestop = u.timeStamp, i.px_current_x && (i.px_delta_x = u.clientX - i.px_current_x, i.px_delta_y = u.clientY - i.px_current_y), i.px_current_x = u.clientX, i.px_current_y = u.clientY, i.px_end_x = u.clientX, i.px_end_y = u.clientY, i.timeStamp = u.timeStamp, p = e.Event('utapend'), e.extend(p, i), e(i.elem_bound).trigger(p), i.idto_tapheld && (clearTimeout(i.idto_tapheld), delete i.idto_tapheld), d.utap && i.ms_elapsed <= l.tap_time && i.do_allow_tap && (p = e.Event('utap'), e.extend(p, i), e(i.elem_bound).trigger(p)), c === n && (d.udragend && (p = e.Event('udragend'), e.extend(p, i), e(i.elem_bound).trigger(p)), n = void 0), c === a && (d.uheldend && (p = e.Event('uheldend'), e.extend(p, i), e(i.elem_bound).trigger(p)), a = void 0), c === o ? (_ = !0, o = void 0) : c === s && (r ? (s = r, r = void 0, _ = !0) : s = void 0, j = -1), c === r && (r = void 0, j = -1, _ = !0), _ && d.uzoomend && (p = e.Event('uzoomend'), i.px_delta_zoom = 0, e.extend(p, i), e(i.elem_bound).trigger(p)), delete w[c]);
      }, m = function m(t) {
        var e,
            i,
            n,
            a,
            o = this,
            s = +new Date(),
            r = t.originalEvent.changedTouches || [];

        switch (x = !0, t.timeStamp = s, t.type) {
          case 'touchstart':
            a = _;
            break;

          case 'touchmove':
            a = g;
            break;

          case 'touchend':
          case 'touchcancel':
            a = h;
            break;

          default:
            a = null;
        }

        if (a) for (e = 0; e < r.length; e++) {
          i = r[e], n = 'touch' + String(i.identifier), t.clientX = i.clientX, t.clientY = i.clientY, a({
            elem: o,
            motion_id: n,
            event_src: t
          });
        }
      }, f = function f(t) {
        var e,
            i = this,
            n = 'mouse' + String(t.button),
            a = !1;
        if (x) t.stopImmediatePropagation();else {
          if (t.shiftKey && (a = !0), 'mousemove' !== t.type && 0 !== t.button) return !0;

          switch (t.type) {
            case 'mousedown':
              e = _;
              break;

            case 'mouseup':
              e = h;
              break;

            case 'mousemove':
              e = g;
              break;

            default:
              e = null;
          }

          e && e({
            elem: i,
            event_src: t,
            request_dzoom: a,
            motion_id: n
          });
        }
      }, v.ue = v.utap = v.uheld = v.uzoomstart = v.uzoommove = v.uzoomend = v.udragstart = v.udragmove = v.udragend = v.uheldstart = v.uheldmove = v.uheldend = i, e.ueSetGlobalCb = function (t, e, i) {
        k.push({
          selector_str: t || '',
          callback_match: e || null,
          callback_nomatch: i || null
        });
      };
    },
    init_drags: function init_drags() {
      'use strict';

      var t = Math.floor,
          i = Math.min,
          n = Math.max;
      window.requestAnimationFrame = window.requestAnimationFrame || function (t) {
        return setTimeout(t, 10);
      }, window.cancelAnimationFrame = window.cancelAnimationFrame || function (t) {
        return clearTimeout(t);
      };

      var a = function a(t, i) {
        var n = this;
        this.el = t, this.$el = e(t), this.options = e.extend({}, e.fn.udraggable.defaults, i), this.positionElement = this.options.positionElement || this.positionElement, this.getStartPosition = this.options.getStartPosition || this.getStartPosition, this.updatePositionFrameHandler = function () {
          if (delete n.queuedUpdate, n.ui) {
            var t = n.ui.position;
            n.positionElement(n.$el, n.started, t.left, t.top), n.options.dragUpdate && n.options.dragUpdate.apply(n.el, [n.ui]);
          }
        }, this.queuePositionUpdate = function () {
          n.queuedUpdate || (n.queuedUpdate = window.requestAnimationFrame(n.updatePositionFrameHandler));
        }, this.init();
      };

      a.prototype = {
        constructor: a,
        init: function init() {
          var t = this;
          this.disabled = !1, this.started = !1, this.normalisePosition();
          var i = this.options.handle ? this.$el.find(this.options.handle) : this.$el;
          i.on('utapstart.udraggable', function (t) {
            e(document.body).addClass('draggable');
          }).on('utapend.udraggable', function (t) {
            e(document.body).removeClass('draggable');
          }), this.options.longPress ? i.on('uheldstart.udraggable', function (e) {
            t.start(e);
          }).on('uheldmove.udraggable', function (e) {
            t.move(e);
          }).on('uheldend.udraggable', function (e) {
            t.end(e);
          }) : i.on('udragstart.udraggable', function (e) {
            t.start(e);
          }).on('udragmove.udraggable', function (e) {
            t.move(e);
          }).on('udragend.udraggable', function (e) {
            t.end(e);
          });
        },
        destroy: function destroy() {
          (this.options.handle ? this.$el.find(this.options.handle) : this.$el).off('.udraggable'), this.$el.removeData('udraggable');
        },
        disable: function disable() {
          this.disabled = !0;
        },
        enable: function enable() {
          this.disabled = !1;
        },
        option: function option() {
          var t;
          if (0 === arguments.length) return this.options;

          if (2 !== arguments.length) {
            if (1 === arguments.length) {
              if ('string' == typeof arguments[0]) return this.options[arguments[0]];
              if ('object' == _typeof(arguments[0])) for (t in arguments[0]) {
                arguments[0].hasOwnProperty(t) && (this.options[t] = arguments[0][t]);
              }
            }

            this.options.containment && this._initContainment();
          } else this.options[arguments[0]] = arguments[1];
        },
        normalisePosition: function normalisePosition() {
          var t = this.$el.position();
          this.$el.css({
            position: this.options.position,
            top: t.top,
            left: t.left,
            right: 'auto',
            bottom: 'auto'
          });
        },
        start: function start(t) {
          if (!this.disabled) {
            var e = this.getStartPosition(this.$el);
            return this._initContainment(), this.ui = {
              helper: this.$el,
              offset: {
                top: e.y,
                left: e.x
              },
              originalPosition: {
                top: e.y,
                left: e.x
              },
              position: {
                top: e.y,
                left: e.x
              }
            }, this.options.longPress && this._start(t), this._stopPropagation(t);
          }
        },
        move: function move(t) {
          if (!this.disabled && (this.started || this._start(t))) {
            var e = t.px_current_x - t.px_start_x,
                i = t.px_current_y - t.px_start_y,
                n = this.options.axis;
            n && 'x' === n && (i = 0), n && 'y' === n && (e = 0);
            var a = {
              left: this.ui.originalPosition.left,
              top: this.ui.originalPosition.top
            };
            n && 'x' !== n || (a.left += e), n && 'y' !== n || (a.top += i), this._applyGrid(a), this._applyContainment(a);
            var o = this.ui.position;
            return a.top === o.top && a.left === o.left || (this.ui.position.left = a.left, this.ui.position.top = a.top, this.ui.offset.left = a.left, this.ui.offset.top = a.top, this.options.drag && this.options.drag.apply(this.el, [t, this.ui]), this.queuePositionUpdate()), this._stopPropagation(t);
          }
        },
        end: function end(t) {
          return (this.started || this._start(t)) && (this.$el.removeClass('udraggable-dragging'), this.started = !1, this.queuedUpdate && window.cancelAnimationFrame(this.queuedUpdate), this.updatePositionFrameHandler(), this.options.stop && this.options.stop.apply(this.el, [t, this.ui])), this._stopPropagation(t);
        },
        _stopPropagation: function _stopPropagation(t) {
          return t.stopPropagation(), t.preventDefault(), !1;
        },
        _start: function _start(t) {
          if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) return this.started = !0, this.queuePositionUpdate(), this.options.start && this.options.start.apply(this.el, [t, this.ui]), this.$el.addClass('udraggable-dragging'), !0;
        },
        _mouseDistanceMet: function _mouseDistanceMet(t) {
          return n(Math.abs(t.px_start_x - t.px_current_x), Math.abs(t.px_start_y - t.px_current_y)) >= this.options.distance;
        },
        _mouseDelayMet: function _mouseDelayMet(t) {
          return t.ms_elapsed > this.options.delay;
        },
        _initContainment: function _initContainment() {
          var t,
              i = this.options;
          i.containment ? i.containment.constructor !== Array ? ('parent' === i.containment && (i.containment = this.$el.offsetParent()), (t = e(i.containment))[0] && (this.containment = [0, 0, t.innerWidth() - this.$el.outerWidth(), t.innerHeight() - this.$el.outerHeight()])) : this.containment = i.containment : this.containment = null;
        },
        _applyGrid: function _applyGrid(e) {
          if (this.options.grid) {
            var i = this.options.grid[0],
                n = this.options.grid[1];
            e.left = t((e.left + i / 2) / i) * i, e.top = t((e.top + n / 2) / n) * n;
          }
        },
        _applyContainment: function _applyContainment(t) {
          var e = this.containment;
          e && (t.left = i(n(t.left, e[0]), e[2]), t.top = i(n(t.top, e[1]), e[3]));
        },
        getStartPosition: function getStartPosition(t) {
          return {
            x: parseInt(t.css('left'), 10) || 0,
            y: parseInt(t.css('top'), 10) || 0
          };
        },
        positionElement: function positionElement(t, e, i, n) {
          t.css({
            left: i,
            top: n
          });
        }
      }, e.fn.udraggable = function (t) {
        var i = Array.prototype.slice.call(arguments, 1),
            n = [];
        return this.each(function () {
          var o = e(this),
              s = o.data('udraggable');

          if (s || (s = new a(this, t), o.data('udraggable', s)), 'string' == typeof t) {
            if ('function' != typeof s[t]) throw "jquery.udraggable has no '" + t + "' method";
            var r = s[t].apply(s, i);
            void 0 !== r && n.push(r);
          }
        }), n.length > 0 ? n[0] : this;
      }, e.fn.udraggable.defaults = {
        axis: null,
        delay: 0,
        distance: 0,
        longPress: !1,
        position: 'fixed',
        drag: null,
        start: null,
        stop: function stop() {
          e(document.body).removeClass('draggable');
        }
      };
    },
    init_center_position: function init_center_position() {
      e.fn.center = function (t, i) {
        t = t ? this.parent() : window;
        var n = 0,
            a = 0;
        i && (n = e(t).scrollTop(), a = e(t).scrollLeft());
        var o = (e(t).height() - this.outerHeight()) / 2 + n,
            s = (e(t).width() - this.outerWidth()) / 2 + a;
        return o = o < 0 ? 0 : o, s = s < 0 ? 0 : s, this.css({
          top: o + 'px',
          left: s + 'px'
        }), this;
      };
    },
    place_close_btn: function place_close_btn() {
      'function' == typeof o.escape && e('<a id="jipt-close-btn">').html('&times;').attr('href', '#').appendTo('#jipt-modal-mask').click(function (t) {
        t.preventDefault(), o.escape();
      });
    },
    init_login_panel: function init_login_panel() {
      f.loginDialog = e('<div>').attr('id', 'jipt-login-panel').html(f.loginDialogContent()), f.loginDialog.content = f.loginDialog.jiptDialog({
        modal: !0,
        width: Math.min(window.innerWidth - 2, window.outerWidth - 2, 400) + 'px',
        height: '400px',
        drags: !0,
        minimize_btn: !1,
        close_btn: !1,
        iframe: !0,
        custom_class: 'jipt-login-dialog',
        title_pane: '<div style="text-align: center"><div style="min-height: 32px"><svg class="crowdin-jipt-logo" width="173" height="32"><image xlink:href="' + d.jiptCDN + '/images/crowdin-logo-small.svg" src="' + d.jiptCDN + '/images/crowdin-logo-small.png" width="173" height="32" alt="Crowdin &mdash Localization Management Platform" /></svg></div><h3 class="crowdin-jipt-login-header">Crowdin In-Context Translations</h3></div>'
      }), f.loginDialog.content.find('#crowdin-login-language-field').change(function () {
        f.loginDialog.content.find('#crowdin-login-workflow-step-field').html(f.getWorkflowStepsOptions(e(this).val()));
      }), f.loginDialog.content.find('#crowdin-language-field').change(function () {
        f.loginDialog.content.find('#crowdin-workflow-step-field').html(f.getWorkflowStepsOptions(e(this).val()));
      }), f.loginDialog.content.find('#crowdin-jipt-login').click(function () {
        return f._login_action(), !1;
      }), f.loginDialog.content.find('#crowdin-join').click(function () {
        return f._join_action(), !1;
      }), f.loginDialog.content.find('#crowdin-select-language-and-step').click(function () {
        var t = f.loginDialog.content.find('#crowdin-language-field option:selected');
        f.set_current_language(t.val(), t.data('id'), t.html());
        var e = f.loginDialog.content.find('#crowdin-workflow-step-field option:selected');
        return f.setCurrentWorkflowStep(e.val(), e.html()), f.loginDialog.jiptDialog({
          action: 'close'
        }), f.init_project(), !1;
      }), f.loginDialog.content.find('.crowdin-jipt-to-login').click(function () {
        f.show_login_panel();
      });
    },
    init_highlight: function init_highlight() {
      'no' !== l.get('highlight') ? (f.translations_highlight = !0, e('body').addClass('jipt-highlight')) : (f.translations_highlight = !1, e('body').removeClass('jipt-highlight'));
    },
    init_preview: function init_preview() {
      'no' !== l.get('preview') ? f.translations_preview = !0 : f.translations_preview = !1;
    },
    init_filter: function init_filter() {
      o.preload_texts && 'yes' !== l.get('filter') ? f.translations_filter = !1 : f.translations_filter = !0;
    },
    init_touch_optimized: function init_touch_optimized() {
      o.touch_optimized && 'no' !== l.get('touch_optimized') ? (e('#crowdin-translation-badge').remove(), f.touch_optimized = !0) : f.touch_optimized = !1;
    },
    init_translation_panel: function init_translation_panel() {
      var t = null;
      f.translationDialog = e('<div>').attr('id', 'crowdin-translation-panel').html(f.translationDialogContent()), f.translationDialog.content = f.translationDialog.jiptDialog({
        width: Math.min(window.innerWidth - 2, window.outerWidth - 2, 400) + 'px',
        height: '400px',
        drags: !0,
        save_position: !0,
        save_height: !0,
        close_btn: !1,
        iframe: !0,
        position: 'bottom-left',
        custom_class: 'jipt-translations-dialog',
        icon: 'crowdin',
        minimized: f.minimized_translation_panel,
        title_pane: '<h4>Crowdin In-Context</h4>',
        buttons_pane: f.translationDialogButtons()
      }), f.translationDialog.jiptDialog({
        action: 'open'
      });
      var i = f.translationDialog.content.find('#jipt-target-languages');
      i.html(f._get_target_languages_options()), f.translationDialog.content.find('#jipt-workflow-step').html(f.getWorkflowStepsOptions(e(i).val())), f.load_phrases(), f.translationDialog.content.find('#jipt-target-languages').change(function () {
        f.translationDialog.content.find('#jipt-workflow-step').html(f.getWorkflowStepsOptions(e(this).val()));
      }), f.translationDialog.content.find('#jipt-change-language-and-step').click(function () {
        var t = f.translationDialog.content.find('#jipt-target-languages').find('option:selected');
        f.set_current_language(t.val(), t.data('id'), t.html());
        var e = f.translationDialog.content.find('#jipt-workflow-step').find('option:selected');
        f.setCurrentWorkflowStep(e.val(), e.html()), window.location.reload();
      }), f.translationDialog.content.find('#jipt-logout').click(function () {
        return f._logout_action(), !1;
      }), f.translationDialog.content.find('#jipt-translations-preview').change(function () {
        e(this).prop('checked') ? l.save('preview', 'yes') : l.save('preview', 'no'), f.init_preview(), f.set_translations_preview();
      }), f.translationDialog.content.find('#jipt-translations-highlight').change(function () {
        e(this).prop('checked') ? l.save('highlight', 'yes') : l.save('highlight', 'no'), f.init_highlight();
      }), f.translationDialog.content.find('#jipt-translations-filter').change(function () {
        e(this).prop('checked') ? l.save('filter', 'yes') : l.save('filter', 'no'), f.init_filter(), f.rebuild_panel_phrases(f.panel_search_phrase);
      }), f.translationDialog.content.find('#jipt-touch-optimized').change(function () {
        e(this).prop('checked') ? l.save('touch_optimized', 'yes') : l.save('touch_optimized', 'no'), f.init_touch_optimized(), f.set_translations_preview();
      }), f.translationDialog.content.on('click', '.jipt-phrases-to-translate li:not(.disabled) a', function () {
        return f.show_editor(f.phrases[this.rel]), !1;
      }), f.translationDialog.content.on('click', '#jipt-hotkeys-settings', function () {
        return f.show_settings('hotkeys'), !1;
      }), f.translationDialog.content.on('click', '#jipt-editor-settings', function () {
        return f.show_settings('editor'), !1;
      }), e('#translation_panel_tabs a').click(function () {
        return e(this).hasClass('active') || (e(this).closest('ul').find('a').removeClass('active'), e(this).addClass('active'), f.translationDialog.content.find('#translation_panel_tabs_content .jipt-tab-pane').hide(), f.translationDialog.content.find(e(this).attr('href')).show()), !1;
      }), e('#show_translations').click(function () {
        f.panel_pages && e('#translation_panel_paging_wrapper').show(), f.translationDialog.parent().removeClass('jipt_options');
      }), e('#show_options').click(function () {
        e('#translation_panel_paging_wrapper').hide(), f.translationDialog.parent().addClass('jipt_options');
      }), f.translationDialog.content.find('.jipt-search-phrase').on('input propertychange', function () {
        clearTimeout(t), f.panel_search_phrase = this.value;
        var i = e(this).parent().find('.jipt-clear-btn');
        f.panel_search_phrase ? i.show() : i.hide(), t = setTimeout(function () {
          f.rebuild_panel_phrases(f.panel_search_phrase);
        }, 300);
      }), e('#translation_panel_prev_page').click(function () {
        return f.panel_page > 0 && f.rebuild_panel_phrases(f.panel_search_phrase, f.panel_page - 1), !1;
      }), e('#translation_panel_next_page').click(function () {
        return f.panel_page + 1 < f.panel_pages && f.rebuild_panel_phrases(f.panel_search_phrase, f.panel_page + 1), !1;
      }), f.translationDialog.content.find('.jipt-clear-btn').click(function () {
        var t = e(this).siblings('input[type="text"]').val('');
        return f.panel_search_phrase = '', f.rebuild_panel_phrases(), e(this).hide(), t.focus(), !1;
      }), e('#translation_panel_current_page').click(function () {
        return e(this).val(f.panel_page + 1), e(this).select(), !1;
      }), e('#translation_panel_paging').submit(function () {
        var t = e('#translation_panel_current_page').val();
        return f.rebuild_panel_phrases(f.panel_search_phrase, t - 1), e('#translation_panel_current_page').blur(), !1;
      });
    },
    init_project: function init_project(t) {
      var e = p(),
          i = l.get('language_code'),
          n = l.get('workflow_step_id') || void 0,
          a = l.get('language_id'),
          s = l.get('language_name');
      t = t || {}, f.ajax(d.getFullUrl('/jipt/init_project'), {
        project: e,
        origin: document.location.protocol + '//' + document.location.host,
        path_name: document.location.pathname,
        language_code: i || '',
        workflow_step_id: n,
        preload_texts: o.preload_texts
      }, function (e) {
        o.preload_texts = JSON.parse(e.preload_texts), f.user.redirect_hash = e.redirect_hash, f.user.is_logged_in = e.is_logged_in, f.user.is_leader = e.is_leader, f.user.is_manager = e.is_manager, f.user.login = e.login, f.user.name = e.user_name, f.user.picture = e.user_picture, f.user.workflow_step_id = e.workflow_step_id, f.workflow_step_ids = e.workflow_step_ids, f.source_language.code = e.source_language_code, f.target_languages = e.target_languages, f.workflowSteps = e.workflow_steps || [], f.projectLink = e.editor_link, f.projectId = e.project_id, f.projectName = e.project_name, f.projectURL = e.project_url, f.regexp.placeholders = new RegExp(e.placeholders_regexp, 'gi'), f.plurals_preview = e.plurals_preview, f.has_icu = e.has_icu, e.is_logged_in && i && s && a && !e.missed_language ? (f.language.code = i, f.language.id = a, f.language.name = s, f.workflowStep.id = n, f.init_translations()) : e.is_logged_in ? f.show_languages_panel() : !!t.just_logged_id ? f.show_login_failed_panel() : f.show_login_panel();
      });
    },
    init_translations: function init_translations() {
      f.alertFunction = window.alert, window.alert = function () {
        return f.handle_browser_popups(f.alertFunction, this, arguments);
      }, f.confirmFunction = window.confirm, window.confirm = function () {
        return f.handle_browser_popups(f.confirmFunction, this, arguments);
      }, f.promptFunction = window.prompt, window.prompt = function () {
        return f.handle_browser_popups(f.promptFunction, this, arguments);
      }, f.has_icu && f.init_icu(), f.init_editor(), f.init_translation_panel();
    },
    handle_browser_popups: function handle_browser_popups(t, e, arguments) {
      for (var i = [], n = 0; n < arguments.length; n++) {
        arguments[n] = arguments[n].replace(f.regexp.globalPhrase, function (t, e, n) {
          var a = f.phrases[e];

          if (a) {
            i.push(a);
            var s = f.get_source_segment(a, n),
                r = f.phrase2preview(a, a.is_icu ? f.get_icu_placeholders(s, t) : f.get_placeholders(s, t), n);
            return o.edit_strings_context && f.update_strings_context(a.id, a.context), !1 === (r = o.before_dom_insert(r)) ? t : r;
          }

          return f._load_phrases_delayed(t, function () {}), t;
        });
      }

      var a = t.apply(e, arguments);
      return i.length > 0 && f.show_editor(i[0]), a;
    },
    init_dom_mutation_handler: function init_dom_mutation_handler() {
      var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      t && new t(function (t) {
        t.forEach(function (t) {
          f.handle_dom_mutation(t);
        });
      }).observe(document.body, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0,
        characterDataOldValue: !0,
        attributeOldValue: !0
      });
    },
    handle_dom_mutation: function handle_dom_mutation(t) {
      if ('childList' === t.type) {
        for (var i = 0; i < t.addedNodes.length; i++) {
          f.crowdin_each_element(t.addedNodes[i]);
        }

        t.removedNodes.length && f.translations_filter && f.remove_phrases_not_on_page();
      }

      if ('characterData' === t.type && 3 === t.target.nodeType && f.match_element_text(t.target, t.target.parentNode), f.check_if_jipt_class_was_removed(t)) {
        var n = t.oldValue.match(/crowdin_jipt_[^\s-]+/);
        n[0] && e(t.target).addClass(n[0]);
      }

      'attributes' === t.type && f.match_element_attributes(t.target);
    },
    check_if_jipt_class_was_removed: function check_if_jipt_class_was_removed(t) {
      return 'attributes' === t.type && 'class' === t.attributeName && 'function' == typeof t.target.className.indexOf && -1 === t.target.className.indexOf('crowdin_jipt_') && t.oldValue && -1 !== t.oldValue.indexOf('crowdin_jipt_');
    },
    remove_phrases_not_on_page: function remove_phrases_not_on_page() {
      for (var t in f.phrases) {
        var i = f.phrases[t];
        if (i.elements) for (var n = 0; n < i.elements.length; n++) {
          if (!e(document.body).find(i.elements[n].element).length && (i.elements.splice(n, 1), !i.elements.length)) {
            delete i.elements;
            break;
          }
        }
      }

      f.delayed_rebuild_panel_phrases();
    },
    load_phrases: function load_phrases() {
      for (var t in this.status) {
        e('.crowdin_jipt_' + this.status[t]).removeClass('crowdin_jipt_' + this.status[t]);
      }

      var i = f.get_phrases_from_text(document.documentElement.innerHTML);
      e.isEmptyObject(i) && (e.extend(f.regexp, f.regexp_new), i = f.get_phrases_from_text(document.documentElement.innerHTML)), f.user.is_manager && e.isEmptyObject(i) && 'yes' !== l.get('no_phrases_warning_disabled') && this._show_no_texts_warning(), f._load_phrases(i, [function () {
        document.getElementsByTagName('title').length && f.handle_document_title(document.getElementsByTagName('title')[0]), f.crowdin_each_element(document.body), f.init_dom_mutation_handler(), _();
      }]);
    },
    init_editor: function init_editor() {
      function t() {
        f.place_translation_preview(), e('.jipt-selected').removeClass('jipt-selected');
      }

      var i = 650,
          n = document.documentElement.clientHeight;
      i = i + 110 > n ? n - 110 : i, f.editorDialog = e('<div id="crowdin-editor">'), f.editorDialog.jiptDialog({
        width: Math.min(window.innerWidth - 2, window.outerWidth - 2, 550) + 'px',
        height: i + 'px',
        save_position: !0,
        modal: !1,
        drags: !0,
        resize: !0,
        icon: 'crowdin',
        custom_class: 'jipt-editor-dialog',
        close_callback: function close_callback() {
          t();
        },
        title_pane: '<h4>Translating to ' + f.language.name + '</h4>',
        buttons_pane: '<div class="jipt-dialog-buttons-wrapper"><abbr id="jipt-preview-available-msg" title="Preview is not available since plural forms of source and target languages do not match">No preview available</abbr></div>'
      }), f.editorDialog.append('<iframe frameBorder="0" id="crowdin-editor-iframe"></iframe>'), f.editorDialogIframe = e('iframe#crowdin-editor-iframe'), f.editorDialogIframe.css({
        width: '100%',
        display: 'block',
        overflow: 'hidden',
        height: i + 'px'
      }), f.editorDialogIframe.attr('src', f.projectLink);
    },
    send_post_message: function send_post_message(t) {
      t = JSON.stringify(t), f.editorDialogIframe.length && f.editorDialogIframe.get(0).contentWindow.postMessage(t, f.projectLink);
    },
    init_editor_listener: function init_editor_listener() {
      window.onmessage = function (t) {
        if ((t = t || window.event).origin === d.getEntryPoint()) {
          var e = JSON.parse(t.data);

          switch (e.msg_type) {
            case 'edit_translation':
              f.editor.currentTranslation && !1 !== f.translations_preview && f.editorDialog.jiptDialog({
                action: 'is_visible'
              }) && (e.value.length > 0 ? f.place_translation_preview(e.translation_id, e.value, e.plural_id) : f.place_translation_preview());
              break;

            case 'update_phrase':
            case 'update_translation':
              var i = f.editor.currentTranslation;

              if (f.editor.currentTranslation = f.phrases[e.translation_id], 'top_suggestion' in e) {
                var n = e.plural_id >= 0 ? e.plural_id : 0;
                f.editor.currentTranslation.translation[n] = e.top_suggestion, f.editor.currentTranslation.status = e.translation_status, f.place_translation_preview();
              } else f.editor.currentTranslation.hidden = e.translation.hidden ? '1' : '0';

              f.update_phrase_dom_highlight(), f.update_phrase_highlight(), f.editor.currentTranslation = i;
              break;

            case 'next_translation':
              f.editor.currentTranslation && (f.place_translation_preview(), f.show_next_element(f.editor.currentTranslation.active_element));
              break;

            case 'prev_translation':
              f.editor.currentTranslation && (f.place_translation_preview(), f.show_prev_element(f.editor.currentTranslation.active_element));
              break;

            case 'success':
              f.editor_loaded = !0, f.setup_jipt_validation(), f.editor.currentTranslation && f.show_editor(f.editor.currentTranslation, f.editor.currentTranslation.active_element);
              break;

            case 'close_editor':
              f.editorDialog.jiptDialog({
                action: 'close'
              });
              break;

            case 'focus':
              f.editorDialog.jiptDialog({
                action: 'move_to_front'
              });
              break;

            case 'before_commit':
              f.handle_before_commit_request(e.request_id, e.data);
              break;

            case 'save_suggestions':
              f.handle_save_suggestions(e.data);
              break;

            case 'editor_settings':
              f.editor_settings();
              break;

            case 'close_editor_settings':
              f.open_editor_settings = !1, f.close_editor_dialog();
              break;

            case 'hotkeys_settings':
              f.hotkeys_settings();
              break;

            case 'close_hotkeys_settings':
              f.open_hotkeys_settings = !1, f.close_editor_dialog();
              break;

            case 'logged_out':
              window.location.reload();
              break;

            default:
              return;
          }
        }
      };
    },
    close_editor_dialog: function close_editor_dialog() {
      e('.jipt-dialog-title h4', '.jipt-editor-dialog').text('Translating to ' + f.language.name), f.editor.currentTranslation || f.open_editor_settings || f.open_hotkeys_settings || f.editorDialog.jiptDialog({
        action: 'close'
      });
    },
    setup_jipt_validation: function setup_jipt_validation() {
      var t = {
        msg_type: 'setup_jipt_validation',
        validation_enabled: null !== o.before_commit
      };
      f.send_post_message(t);
    },
    handle_before_commit_request: function handle_before_commit_request(t, e) {
      var i = {
        msg_type: 'before_commit_result',
        request_id: t,
        result: o.before_commit(e.source, e.translation, e.context, e.language)
      };
      f.send_post_message(i);
    },
    handle_save_suggestions: function handle_save_suggestions(t) {
      if (!this.callbacks.save_suggestions) return !1;
      'function' == typeof this.callbacks.save_suggestions && this.callbacks.save_suggestions(t);
    },
    set_draft_suggestion: function set_draft_suggestion(t, e) {
      var i = {
        msg_type: 'set_draft_suggestion',
        translation_id: t,
        text: e
      };
      f.send_post_message(i);
    },
    save_suggestions: function save_suggestions(t, e, i) {
      this.callbacks.save_suggestions = i;
      var n = {
        msg_type: 'save_suggestions',
        suggestions: t,
        force_saving: e
      };
      f.send_post_message(n);
    },
    editor_settings: function editor_settings() {
      f.open_editor_settings = !0;
      f.send_post_message({
        msg_type: 'editor_settings'
      });
    },
    hotkeys_settings: function hotkeys_settings() {
      f.open_hotkeys_settings = !0;
      f.send_post_message({
        msg_type: 'hotkeys_settings'
      });
    },
    place_translation_preview: function place_translation_preview(t, e, i) {
      if (f.translation_preview.id = t, f.translation_preview.value = e, f.translation_preview.plural_id = i >= 0 ? i : 0, f.editor.currentTranslation) {
        var n,
            a = f.editor.currentTranslation.elements;
        if (a) for (var s = 0; s < a.length; s++) {
          n = f.phrase2preview(f.phrases[a[s].id], a[s].placeholders, a[s].plural_id), !1 !== (n = !1 !== a[s].attr ? o.before_dom_insert(n, a[s].element, a[s].attr) : o.before_dom_insert(n, a[s].element)) && (!1 !== a[s].attr ? (a[s].element.setAttribute(a[s].attr, n), o.touch_optimized && !f.touch_optimized && f.hide_translation_badge(a[s].element)) : void 0 !== a[s].element.innerHTML ? a[s].element.innerHTML = n : a[s].element.textContent = n, f.touch_optimized && f.show_translation_badge(a[s].element));
        }
      }
    },
    set_translations_preview: function set_translations_preview() {
      var t = f.editor.currentTranslation;

      for (var e in f.phrases) {
        f.editor.currentTranslation = f.phrases[e], f.place_translation_preview();
      }

      f.editor.currentTranslation = t;
    },
    crowdin_each_element: function crowdin_each_element(t) {
      if ('crowdin-translation-panel' !== t.id && 'crowdin-editor' !== t.id) {
        if (f.match_element_attributes(t), t.hasChildNodes()) for (var e = 0; e < t.childNodes.length; e++) {
          f.crowdin_each_element(t.childNodes[e]), f.match_element_attributes(t.childNodes[e]);
        }

        if (t && 3 === t.nodeType && t.nodeValue.length) {
          var i = t.nodeValue.match(f.regexp.startPhrase);
          i && (t.nodeValue.toLowerCase().indexOf(f.regexp.endPart(i[1], i[2])) > -1 ? f.match_element_text(t, t.parentNode) : f.match_element_html(t, i[1], i[2]));
        }
      }
    },
    match_element_text: function match_element_text(t, i) {
      if (i && 'SCRIPT' !== i.nodeName && t.parentNode) {
        var n = t.nodeValue.match(f.regexp.exactPhrase),
            a = t.parentNode.childNodes.length;
        if (n && 1 === a) f.phrases[n[1]] ? f.handle_element(t.parentNode, f.phrases[n[1]], n[2]) : f._load_phrases_delayed(t.nodeValue, function () {
          f.match_element_text(t, i);
        });else {
          var o = t.nodeValue.replace(f.regexp.globalPhrase, '<span class="crowdin_phrase">$&</span>');

          if (o !== t.nodeValue) {
            e(t).replaceWith(o);

            for (var s = 0; s < i.childNodes.length; s++) {
              var r = i.childNodes[s];
              'crowdin_phrase' === r.className && 3 === r.firstChild.nodeType && f.match_element_text(r.firstChild, r);
            }
          }
        }
      }
    },
    match_element_html: function match_element_html(t, i, n) {
      if (t.parentNode) {
        var a = t.parentNode.innerHTML.match(f.regexp.exactPhrase);
        if (a) f.phrases[a[1]] ? f.handle_element(t.parentNode, f.phrases[a[1]], a[2]) : f._load_phrases_delayed(t.parentNode.innerHTML, function () {
          f.match_element_html(t, i, n);
        });else {
          var o = t,
              s = [],
              r = '',
              l = !0;

          do {
            if (s.push(o), r += o.nodeValue ? h(o.nodeValue) : o.outerHTML, 3 === o.nodeType && o.nodeValue.toLowerCase().indexOf(f.regexp.endPart(i, n)) > -1) {
              l = !1;
              break;
            }

            o = o.nextSibling;
          } while (o);

          if (l) return;
          r = r.replace(f.regexp.globalPhrase, '<span class="crowdin_phrase">$&</span>');
          var d = t.parentNode;
          e(s[0]).before(r);

          for (p = 0; p < s.length; p++) {
            d.removeChild(s[p]);
          }

          for (var p = 0; p < d.childNodes.length; p++) {
            var c = d.childNodes[p];
            'crowdin_phrase' === c.className && 3 === c.firstChild.nodeType && f.crowdin_each_element(c);
          }
        }
      }
    },
    match_element_attributes: function match_element_attributes(t) {
      var i,
          n,
          a,
          s = e(t);
      if (t && t.attributes) for (t.value && !t.getAttribute('value') && t.setAttribute('value', t.value), a = 0; a < t.attributes.length; a++) {
        n = (i = t.attributes.item(a)).nodeValue.replace(f.regexp.globalPhrase, function (e, n, a) {
          var r = f.phrases[n];

          if (r) {
            f.translatable_placeholders = [];
            var l = f.get_source_segment(r, a),
                d = r.is_icu ? f.get_icu_placeholders(l, e) : f.get_placeholders(l, e),
                p = f.phrase2preview(r, d, a);

            if (i.nodeValue.length === e.length) {
              r.elements || (r.elements = [], f.delayed_rebuild_panel_phrases());
              var c = {
                id: r.id,
                element: t,
                placeholders: d,
                attr: i.nodeName,
                plural_id: a
              };
              f.addPhraseToElement(s, c), r.elements.push(c);

              for (var u = 0; u < f.translatable_placeholders.length; u++) {
                var _ = f.translatable_placeholders[u];
                o.edit_strings_context && f.update_strings_context(_.phrase.id, _.phrase.context), _.phrase.elements || (_.phrase.elements = [], f.delayed_rebuild_panel_phrases()), f.addPhraseToElement(s, {
                  id: _.phrase.id,
                  placeholders: _.placeholders,
                  attr: c.attr,
                  plural_id: _.plural_id
                }), _.phrase.elements.push(c);
              }

              s.addClass(f.element_classname(s)), s.mouseenter(function () {
                f.hover_show_translation_badge(t);
              }), f.touch_optimized && f.show_translation_badge(t);
            }

            return o.edit_strings_context && f.update_strings_context(r.id, r.context), p;
          }

          return f._load_phrases_delayed(e, function () {
            f.match_element_attributes(t);
          }), e;
        }), i.nodeValue !== n && !1 !== (n = o.before_dom_insert(n, t, i.nodeName)) && (i.nodeValue = n, 'value' === i.name && (t.value = n));
      }
    },
    get_translation_segment: function get_translation_segment(t, e) {
      return e = parseInt(e), e = e || 0, void 0 !== t.translation[e] ? t.translation[e] : t.translation[0];
    },
    get_source_segment: function get_source_segment(t, e) {
      return e = parseInt(e), e = e || 0, void 0 !== t.text[e] ? t.text[e] : t.text[0];
    },
    get_placeholders: function get_placeholders(t, e) {
      var i = [],
          n = [],
          a = t.match(f.regexp.placeholders),
          o = e.match(f.regexp.exactPhrase);

      if (o && o[3]) {
        var s = f.regexp.delimiterPart(o[1], o[2]);
        n = o[3].toLowerCase().indexOf(s) >= 0 ? f.split(o[3], s) : [o[3]];
      }

      return null !== a && (i = a), [i, n];
    },
    get_icu_placeholders: function get_icu_placeholders(t, e) {
      var i,
          n = [],
          a = [],
          o = e.match(f.regexp.exactPhrase);

      if (o && o[3]) {
        var s = f.regexp.delimiterPart(o[1], o[2]);
        i = o[3].toLowerCase().indexOf(s) >= 0 ? f.split(o[3], s) : [o[3]];
      }

      for (var r = 0; r < i.length; r++) {
        var l = i[r].split('=');
        n.push(l.shift()), a.push(l.join('='));
      }

      return [n, a];
    },
    handle_document_title: function handle_document_title(t) {
      t.firstChild && (t.innerHTML = f.regexp.wrapText(t.innerHTML), f.phrases[0] = {
        id: '0',
        text: ['%s'],
        translation: [''],
        hidden: '0',
        status: 'translated'
      }, f.match_element_text(t.firstChild, t));
    },
    handle_element: function handle_element(t, i, n) {
      var a,
          s,
          r,
          l = e(t),
          d = f.get_source_segment(i, n);
      this.translatable_placeholders = [], s = void 0 !== t.innerHTML ? t.innerHTML : t.textContent, r = i.is_icu ? f.get_icu_placeholders(d, s) : f.get_placeholders(d, s), a = f.phrase2preview(i, r, n), o.edit_strings_context && f.update_strings_context(i.id, i.context), !1 !== (a = o.before_dom_insert(a, t)) && (void 0 !== t.innerHTML ? t.innerHTML = a : t.textContent = a);
      var p = {
        id: i.id,
        element: t,
        placeholders: r,
        attr: !1,
        plural_id: n
      };
      i.elements || (i.elements = [], f.delayed_rebuild_panel_phrases()), f.addPhraseToElement(l, p), i.elements.push(p);

      for (var c = 0; c < this.translatable_placeholders.length; c++) {
        this.translatable_placeholders[c].phrase.elements || (this.translatable_placeholders[c].phrase.elements = [], f.delayed_rebuild_panel_phrases()), o.edit_strings_context && f.update_strings_context(this.translatable_placeholders[c].phrase.id, this.translatable_placeholders[c].phrase.context), f.addPhraseToElement(l, {
          id: this.translatable_placeholders[c].phrase.id,
          placeholders: this.translatable_placeholders[c].placeholders,
          attr: p.attr,
          plural_id: this.translatable_placeholders[c].plural_id
        }), this.translatable_placeholders[c].phrase.elements.push(p);
      }

      if (l.addClass(f.element_classname(l)), l.is('option') || l.parent().is('option')) {
        var u = l.closest('select');
        u && (u.addClass(f.element_classname(u)), t = u.get(0));
      }

      f.editor.currentTranslation && f.editor.currentTranslation.id === i.id && (f.editor.currentTranslation = i, f.update_active_phrase_highlight()), e(t).off('mouseenter').mouseenter(function () {
        f.hover_show_translation_badge(t);
      }), f.touch_optimized && !e(t).is('select') && f.show_translation_badge(t);
    },
    phrase2preview: function phrase2preview(t, e, i) {
      var n = f.get_translation_segment(t, i),
          a = f.plurals_preview || 1 === t.text.length,
          o = '';
      if (this.translation_preview.id === t.id && this.translation_preview.plural_id == i && (o = this.translation_preview.value), a && !0 === f.translations_preview && o.length) return t.is_icu ? f.replace_placeholders_icu(o, e) : f.replace_placeholders(o, e);
      if (a && !0 === f.translations_preview && n.length) return t.is_icu ? f.replace_placeholders_icu(n, e) : f.replace_placeholders(n, e);
      var s = f.get_source_segment(t, i);
      return t.is_icu ? f.replace_placeholders_icu(s, e) : f.replace_placeholders(s, e);
    },
    replace_placeholders_icu: function replace_placeholders_icu(t, e) {
      for (var i = e[0].slice(0), n = e[1].slice(0), a = 0; a < n.length; a++) {
        n[a] = n[a].replace(f.regexp.globalPhrase, function (t, e, i) {
          var n = f.phrases[e];

          if (n) {
            var a = f.get_source_segment(n, i),
                o = n.is_icu ? f.get_icu_placeholders(a, t) : f.get_placeholders(a, t);
            return f.translatable_placeholders.push({
              phrase: n,
              placeholders: o,
              plural_id: i
            }), f.phrase2preview(n, o, i);
          }

          return t;
        });
      }

      for (var o = {}, s = new MessageFormatLight(f.language.code), a = 0; a < i.length; a++) {
        o[i[a]] = n[a];
      }

      return (t = s.compiler(t, o)) ? f.sanitizing_text(t) : f.insert_source_text_in_dom();
    },
    insert_source_text_in_dom: function insert_source_text_in_dom() {
      var t,
          e = f.editor.currentTranslation;

      if (e.is_icu) {
        for (var i = e.elements[0].placeholders, n = {}, a = new MessageFormatLight(f.language.code), o = 0; o < i[0].length; o++) {
          n[i[0][o]] = i[1][o];
        }

        t = a.compiler(e.text[0], n);
      } else t = f.get_source_segment(e, e.elements[0].plural_id);

      return f.sanitizing_text(t);
    },
    sanitizing_text: function sanitizing_text(t) {
      return t = sanitizer.tags(t, ['meta', 'base', 'iframe', 'object', 'embed', 'script', 'style', 'isindex', 'applet', 'form']), t = sanitizer.attributes(t), t = t.replace(/\b(on\w+=(["'])?.*?\2)/gi, ''), t = t.replace(/\\n/g, '\n');
    },
    replace_placeholders: function replace_placeholders(t, e) {
      for (var i = e[0].slice(0), n = e[1].slice(0), a = 0; a < n.length; a++) {
        n[a] = n[a].replace(f.regexp.globalPhrase, function (t, e, i) {
          var n = f.phrases[e];

          if (n) {
            var a = f.get_source_segment(n, i),
                o = n.is_icu ? f.get_icu_placeholders(a, t) : f.get_placeholders(a, t);
            return f.translatable_placeholders.push({
              phrase: n,
              placeholders: o,
              plural_id: i
            }), f.phrase2preview(n, o, i);
          }

          return t;
        });
      }

      return n.length > 0 && (t = t.replace(f.regexp.placeholders, function (t) {
        for (var e = 0; e < i.length; e++) {
          if (i[e] === t && void 0 !== n[e]) {
            var a = n[e];
            return i.splice(e, 1), n.splice(e, 1), a;
          }
        }

        return t;
      })), f.sanitizing_text(t);
    },
    get_element_position: function get_element_position(t) {
      var i,
          n,
          a,
          o = 0,
          s = 0,
          r = 0,
          l = 0,
          d = !1,
          p = t;

      for ('OPTION' === t.tagName && (t = e(t).closest('select').get(0)); t;) {
        'fixed' === (i = window.getComputedStyle(t)).getPropertyValue('position') && (d = !0), o += t.offsetLeft - t.scrollLeft + t.clientLeft, s += t.offsetTop - t.scrollTop + t.clientTop, t = t.offsetParent === document.body ? null : t.offsetParent;
      }

      for (t = p; t;) {
        (a = (n = (i = window.getComputedStyle(t)).transform || i.webkitTransform || i.mozTransform).match(/^matrix3d\((.+)\)$/)) ? (r = parseFloat(a[1].split(', ')[12]), l = parseFloat(a[1].split(', ')[13])) : (r = (a = n.match(/^matrix\((.+)\)$/)) ? parseFloat(a[1].split(', ')[4]) : 0, l = a ? parseFloat(a[1].split(', ')[5]) : 0), o += r, s += l, t = t.parentElement === document.body ? null : t.parentElement;
      }

      return {
        left: o,
        top: s,
        position: d ? 'fixed' : 'absolute'
      };
    },
    create_translation_badge: function create_translation_badge(t) {
      var i = 'crowdin-translation-badge',
          n = e('#' + i),
          a = !1;

      if (f.touch_optimized && !e(t).is('area, base, br, col, command, embed, hr, img, input, textarea, wbr') && (a = !0), !n.length || a) {
        var o = f.dialog_zindex;
        n = e('<span class="crowdin-jipt"><span class="jipt-badge-inner"></span></span>'), a ? 0 === e(t).children('.' + i).length && n.addClass(i).prependTo(e(t)) : n.attr('id', i).css('position', 'absolute').css('z-index', --o).appendTo('body').mouseleave(function () {
          f.hide_translation_badge();
        });
      }

      if (!a) {
        var s = f.get_element_position(t);
        n.css('top', s.top - 7 + 'px').css('left', s.left - 7 + 'px').css('position', s.position);
      }

      return n;
    },
    get_element_data: function get_element_data(t) {
      var i = [],
          n = !1;
      if (e(t).data('phrases')) i = e(t).data('phrases');else {
        var a = e(t).find('[class*=crowdin_jipt]');
        if (!a.length) return;
        i = a.first().data('phrases'), n = !0;
      }
      return {
        is_parent_element: n,
        phrases: i,
        phrase: f.phrases[i[0].id]
      };
    },
    show_translation_badge: function show_translation_badge(t) {
      var i = f.get_element_data(t);

      if (i) {
        var n = i.phrase,
            a = f.create_translation_badge(t);
        i.is_parent_element && (t = e(t).find('[class*=crowdin_jipt]').get(0)), a.show().off('click').on('click', function (e) {
          return i.phrases.length > 1 || '1' === n.hidden || f.get_phrase_status(n.status) === f.status.not_found || f.get_phrase_status(n.status) === f.status.not_visible_on_step ? f.show_badge_popup(t, i.phrases) : f.show_editor(n, t), e.stopPropagation(), e.preventDefault(), !1;
        });
      }
    },
    hover_show_translation_badge: function hover_show_translation_badge(t) {
      !f.touch_optimized || e(t).is('select') ? setTimeout(function () {
        f.show_translation_badge(t);
      }, 1) : 0 === e(t).children('.crowdin-translation-badge').length && setTimeout(function () {
        f.show_translation_badge(t);
      }, 1);
    },
    show_badge_popup: function show_badge_popup(t, i) {
      f.hide_translation_badge();
      var n = f.get_element_position(t),
          a = '<ul>';
      e('#crowdin-translation-badge-popup').length ? e('#crowdin-translation-badge-popup').html('') : e('body').append(e('<div>').attr('id', 'crowdin-translation-badge-popup').addClass('crowdin-jipt').css({
        position: 'absolute',
        'z-index': f.dialog_zindex - 1,
        display: 'none'
      })), e('#crowdin-translation-badge-popup').css('top', n.top + 'px').css('left', n.left + 'px').css('position', n.position);

      for (var o = 0; o < i.length; o++) {
        var s = i[o].id,
            r = '1' === f.phrases[s].hidden,
            l = f.get_phrase_status(f.phrases[s].status) === f.status.not_found,
            d = f.get_phrase_status(f.phrases[s].status) === f.status.not_visible_on_step;
        a += '<li class="' + (!f.user.is_leader && r || l || d ? 'disabled' : '') + '"><a href="javascript:void(0)" data-id="' + s + '" class="popup-phrase ' + (f.phrase_classname(f.phrases[s]) + '_popup') + '">', i[o].attr && (a += '<span class="popup-phrase-attr">' + i[o].attr + ':</span>'), r && (a += '<span class="popup-phrase-attr">This string is hidden and should not be translated.</span>'), l && (a += '<span class="popup-phrase-attr">String is not loaded. Probably it has been deleted.</span>'), d && (a += '<span class="popup-phrase-attr">String is not loaded. This string is not in workflow step</span>');
        var p = f.phrase2preview(f.phrases[s], [[], []], i[o].plural_id);
        a += e('<span>' + p + '</span>').text(), a += '</a></li>';
      }

      a += '</ul>', e('#crowdin-translation-badge-popup').html(a).show(), e('#crowdin-translation-badge-popup li:not(.disabled) a.popup-phrase').click(function (i) {
        var n = e(i.target).closest('a.popup-phrase').data('id');
        return e('#crowdin-translation-badge-popup').hide(), f.show_editor(f.phrases[n], t), !1;
      }), f.autoHideBadgePopup();
    },
    autoHideBadgePopup: function autoHideBadgePopup() {
      e(document).one('utapstart mousedown', function (t) {
        0 === e(t.target).closest('#crowdin-translation-badge-popup').length ? e('#crowdin-translation-badge-popup').hide() : f.autoHideBadgePopup();
      });
    },
    hide_translation_badge: function hide_translation_badge(t) {
      e('#crowdin-translation-badge').hide(), void 0 !== t && e(t).children('.crowdin-translation-badge').remove();
    },
    update_active_phrase_highlight: function update_active_phrase_highlight() {
      if (e('.jipt-selected').removeClass('jipt-selected'), f.editor.currentTranslation.elements) for (var t = 0; t < f.editor.currentTranslation.elements.length; t++) {
        var i = e(f.editor.currentTranslation.elements[t].element);

        if (i.addClass('jipt-selected'), i.is('option') || i.parent().is('option')) {
          var n = i.closest('select');
          n && n.addClass('jipt-selected');
        }
      }
    },
    highlight_panel_opened_phrase: function highlight_panel_opened_phrase() {
      f.editor.currentTranslation && (f.translationDialog.content.find('#jipt-translations').find('li.active').removeClass('active'), f.translationDialog.content.find('#jipt-translations').find('a[rel=' + f.editor.currentTranslation.id + ']').parent().addClass('active'));
    },
    update_phrase_dom_highlight: function update_phrase_dom_highlight() {
      if (f.editor.currentTranslation.elements) for (var t = 0; t < f.editor.currentTranslation.elements.length; t++) {
        var i = f.editor.currentTranslation.elements[t].element,
            n = e(i),
            a = f.element_classname(n);

        if (n.removeClass(function (t, e) {
          return (e.match(/\bcrowdin_jipt_\S+/g) || []).join(' ');
        }).addClass(a), n.is('option') || n.parent().is('option')) {
          var o = n.closest('select');

          if (o) {
            o.removeClass(function (t, e) {
              return (e.match(/\bcrowdin_jipt_\S+/g) || []).join(' ');
            });

            for (var s in f.status) {
              o.find('[class*=crowdin_jipt_' + f.status[s] + ']').length && o.addClass('crowdin_jipt_' + f.status[s]);
            }
          }
        }
      }
    },
    update_phrase_highlight: function update_phrase_highlight() {
      if (f.editor.currentTranslation) {
        var t = f.phrase_classname(f.editor.currentTranslation) + '_item';
        f.translationDialog.content.find('#jipt-translations a[rel=' + f.editor.currentTranslation.id + ']').removeClass(function (t, e) {
          return (e.match(/\bcrowdin_jipt_\S+/g) || []).join(' ');
        }).addClass(t);
      }
    },
    get_next_phrase: function get_next_phrase(t) {
      var i = {
        id: null,
        element: null
      },
          n = e(t);

      if (n.length) {
        var a = f.get_first_untranslated(n, 'next', !0);

        if (!a) {
          var o = '.crowdin_jipt_untranslated, .crowdin_jipt_partially_translated';
          if (!(n = f.findNext('next', n, o) || f.findNext('next', e(document), o))) return i;
          if (a = f.get_first_untranslated(n), !parseInt(a)) return f.get_next_phrase(n);
        }

        i.id = a, i.element = n;
      }

      return i;
    },
    get_prev_phrase: function get_prev_phrase(t) {
      var i = {
        id: null,
        element: null
      },
          n = e(t);

      if (n.length) {
        var a = f.get_first_untranslated(n, 'prev', !0);
        if (!a && (n = f.findNext('prev', n, '.crowdin_jipt_untranslated, .crowdin_jipt_partially_translated')).length && (a = f.get_first_untranslated(n, 'prev'), !parseInt(a))) return f.get_prev_phrase(n);
        i.id = a, i.element = n;
      }

      return i;
    },
    show_next_element: function show_next_element(t) {
      var i = f.get_next_phrase(t);

      if (!i.id) {
        var n = f.findNext('next', e(t), '.crowdin_phrase') || f.findNext('next', e(document), '.crowdin_phrase');
        return n && f.show_editor(f.get_element_data(n).phrase, n), void f.refresh_suggestions();
      }

      f.show_editor(f.phrases[i.id], i.element.get(0));
    },
    show_prev_element: function show_prev_element(t) {
      var i = f.get_prev_phrase(t);
      if (i.id) f.show_editor(f.phrases[i.id], i.element.get(0));else {
        var n = f.findNext('prev', e(t), '.crowdin_phrase') || f.findNext('prev', e(document), '.crowdin_phrase');

        if (n) {
          var a = f.get_element_data(n).phrase;
          if (!a.visible_on_step) return void f.show_prev_element(n[0]);
          f.show_editor(a, n);
        }
      }
    },
    get_first_untranslated: function get_first_untranslated(t, e, i) {
      var n = null;

      if (t.data('phrases')) {
        var a = t.data('phrases').slice(),
            o = !1;
        'prev' === e && a.reverse();

        for (var s = 0; s < a.length; s++) {
          var r = f.phrases[a[s].id];

          if ((this.get_phrase_status(r.status) === this.status.untranslated || this.get_phrase_status(r.status) === this.status.partially_translated) && '1' !== r.hidden && '0' !== r.id) {
            if (!i) {
              n = r.id;
              break;
            }

            if (o) {
              n = r.id;
              break;
            }

            r.id === f.editor.currentTranslation.id && (o = !0);
          }
        }
      }

      return n;
    },
    show_settings: function show_settings(t) {
      'hotkeys' === t ? f.hotkeys_settings() : f.editor_settings(), e('.jipt-dialog-title h4', '.jipt-editor-dialog').text('hotkeys' === t ? 'Hotkeys Settings' : 'Editor Settings'), f.editorDialog.jiptDialog({
        action: 'open'
      });
    },
    show_editor: function show_editor(t, i) {
      if (!f.user.is_logged_in) return alert('Login first to be able submit translations'), void f.show_login_panel();
      f.place_translation_preview(), f.editor.currentTranslation = t, i ? f.editor.currentTranslation.active_element = i : f.editor.currentTranslation.elements && (f.editor.currentTranslation.active_element = f.editor.currentTranslation.elements[0].element), f.update_active_phrase_highlight(), f.editorDialog.jiptDialog({
        action: 'open'
      }), f.editorDialog.jiptDialog({
        action: 'toggle_minimized_show'
      }), f.highlight_panel_opened_phrase();
      var n = [];

      if (f.editor.currentTranslation.active_element) {
        var a = f.get_prev_phrase(f.editor.currentTranslation.active_element).id,
            o = f.get_next_phrase(f.editor.currentTranslation.active_element).id;
        o && n.push(+o), a && n.push(+a);
      }

      f.show_string(t.id, n), f.plurals_preview || (1 === t.text.length ? e('#jipt-preview-available-msg').hide() : e('#jipt-preview-available-msg').show());
    },
    show_string: function show_string(t, e) {
      var i = {
        msg_type: 'show_string',
        id: t,
        preload_ids: e
      };
      f.send_post_message(i);
    },
    refresh_suggestions: function refresh_suggestions() {
      f.send_post_message({
        msg_type: 'refresh_suggestions'
      });
    },
    _get_target_languages_options: function _get_target_languages_options() {
      for (var t = l.get('language_code'), e = '', i = '', n = 0; n < f.target_languages.length; n++) {
        i = '', f.target_languages[n].code === t && (i = 'selected'), e += '<option value="' + f.target_languages[n].code + '" data-id="' + f.target_languages[n].id + '" ' + i + ' >', e += f.target_languages[n].name, e += '</option>';
      }

      return e;
    },
    getWorkflowStepsOptions: function getWorkflowStepsOptions(t) {
      var e = l.get('workflow_step_id'),
          i = '',
          n = [];

      if (f.workflowSteps.length) {
        f.workflowSteps.forEach(function (e) {
          e.languages.map(function (t) {
            return t.code;
          }).indexOf(t) >= 0 && n.push(e);
        });

        for (var a = 0; a < n.length; a++) {
          var o = document.createElement('option');
          o.value = n[a].id, o.innerHTML = n[a].type, n[a].id === e && (o.defaultSelected = !0), i += o.outerHTML;
        }
      }

      return i;
    },
    show_login_panel: function show_login_panel() {
      var t = f.loginDialog.content.find('#crowdin-login-language-field');
      t.html(f._get_target_languages_options()), f.getWorkflowStepsOptions(e(t).val()) && f.loginDialog.content.find('#crowdin-login-workflow-step-field').html(f.getWorkflowStepsOptions(e(t).val())).parents('.workflow-step-group').removeClass('hide'), f.loginDialog.content.find('.crowdin-languages-panel, .crowdin-login-failed').hide(), f.loginDialog.content.find('.crowdin-login-panel').show(), f.loginDialog.jiptDialog({
        action: 'open',
        position: 'center'
      }), f.loginDialog.content.find('#crowdin-login-field').focus(), f.place_close_btn();
    },
    show_languages_panel: function show_languages_panel() {
      var t = f.loginDialog.content.find('#crowdin-language-field');
      t.html(f._get_target_languages_options()), f.getWorkflowStepsOptions(e(t).val()) && f.loginDialog.content.find('#crowdin-workflow-step-field').html(f.getWorkflowStepsOptions(e(t).val())).parents('.workflow-step-group').removeClass('hide'), f.loginDialog.content.find('.crowdin-login-panel, .crowdin-login-failed').hide(), f.loginDialog.content.find('.crowdin-languages-panel').show(), f.loginDialog.jiptDialog({
        action: 'open',
        position: 'center'
      });
    },
    show_login_failed_panel: function show_login_failed_panel() {
      var t = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
          e = {
        isOpera: t,
        isFirefox: 'undefined' != typeof InstallTrigger,
        isSafari: Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
        isChrome: !!window.chrome && !t,
        isIE: !!document.documentMode
      };

      for (var i in e) {
        if (!0 === e[i]) {
          var n = i.substring(2).toLowerCase();
          f.loginDialog.content.find('.crowdin-login-failed-help-heading').show(), f.loginDialog.content.find('.crowdin-login-failed-help-' + n).show();
          break;
        }
      }

      f.loginDialog.content.find('.crowdin-login-panel, .crowdin-languages-panel').hide(), f.loginDialog.content.find('.crowdin-login-failed').show(), f.loginDialog.jiptDialog({
        action: 'open',
        position: 'center'
      }), f.loginDialog.content.find('.crowdin-jipt-to-login').focus(), f.place_close_btn();
    },
    set_current_language: function set_current_language(t, e, i) {
      f.language.code = t, f.language.id = e, f.language.name = i, l.save('language_code', t), l.save('language_id', e), l.save('language_name', i);
    },
    setCurrentWorkflowStep: function setCurrentWorkflowStep(t, e) {
      f.workflowStep.id = t, f.workflowStep.type = e, l.save('workflow_step_id', t), l.save('workflow_step_type', e);
    },
    _login_action: function _login_action() {
      var t = f.loginDialog.content.find('#crowdin-login-language-field option:selected');
      f.set_current_language(t.val(), t.data('id'), t.html());
      var e = f.loginDialog.content.find('#crowdin-login-workflow-step-field option:selected');
      f.setCurrentWorkflowStep(e.val(), e.html()), window.location.href = d.getJiptPath('login');
    },
    _join_action: function _join_action() {
      window.location.href = d.getJiptPath('join');
    },
    _logout_action: function _logout_action() {
      f.ajax(d.getFullUrl('/jipt/logout'), {
        project: p()
      }, function (t) {
        t.success ? window.location.reload() : alert('An error occurred while logging out');
      });
    },
    search: function search(t, i) {
      '[object Object]' === Object.prototype.toString.call(i) && (i = e.map(i, function (t) {
        return t;
      }));

      for (var n = 0; n < i.length; n++) {
        if (-1 !== i[n].toLowerCase().indexOf(t.toLowerCase())) return !0;
      }

      return !1;
    },
    rebuild_panel_phrases: function rebuild_panel_phrases(t, i) {
      f.translationDialog.content.find('.jipt-phrases-to-translate').html('');
      var n = '',
          a = 0,
          o = f.panel_pages,
          s = 0;
      i && /^\+?(0|[1-9]\d*)$/.test(i) && (s = i, i >= o && (s = o - 1));
      var r = 50 * s;
      f.panel_page = s;

      for (var l in f.phrases) {
        var d = f.phrases[l];

        if ('0' !== l && this.get_phrase_status(d.status) !== f.status.not_found && this.get_phrase_status(d.status) !== f.status.not_visible_on_step) {
          var p = '1' === d.hidden,
              c = !f.user.is_leader && p ? 'disabled' : '',
              u = p ? 'title="This string is hidden and should not be translated."' : '';
          (!t || this.search(t, d.text) || this.search(t, d.translation)) && (!0 !== f.translations_filter || d.elements) && (a < r || a >= r + 50 ? a++ : (n += '<li ' + u + ' class="' + c + '"><a href="javascript:void(0)" class="' + (f.phrase_classname(d) + '_item') + '" rel="' + l + '">', n += h(d.text[0]), n += '</a></li>', a++));
        }
      }

      var _ = f.translations_filter ? ' The search was made among the texts of current page.' : '';

      if (0 === a && (n += '<li><div style="padding: 30px; text-align: center; color: #999">No items.' + _ + '</div></li>'), f.translationDialog.content.find('.jipt-phrases-to-translate').html(n), o = Math.ceil(a / 50), f.panel_pages = o, o < 2) e('#translation_panel_paging').hide();else {
        var g = 2 * o.toString(10).length + 3,
            m = e('#translation_panel_prev_page'),
            v = e('#translation_panel_next_page');
        e('#translation_panel_current_page').attr({
          size: g
        }).val(s + 1 + ' / ' + o), 0 === s ? m.addClass('jipt-page-disabled') : m.removeClass('jipt-page-disabled'), s + 1 === o ? v.addClass('jipt-page-disabled') : v.removeClass('jipt-page-disabled'), e('#translation_panel_paging').show();
      }
      f.highlight_panel_opened_phrase();
    },
    delayed_rebuild_panel_phrases: function delayed_rebuild_panel_phrases() {
      clearTimeout(f.rebuild_panel_timeout), f.rebuild_panel_timeout = setTimeout(function () {
        f.rebuild_panel_phrases(f.panel_search_phrase, f.panel_page);
      }, 500);
    },
    _show_join_translations_dialog: function _show_join_translations_dialog(t) {
      var i = this,
          n = '<div style="text-align: center; height: 265px;"><img style="margin-top:35px;" src="' + d.jiptCDN + '/images/preloader.gif" /></div>',
          a = e('<div>').html(n);
      a.content = a.jiptDialog({
        modal: !0,
        width: Math.min(window.innerWidth - 2, window.outerWidth - 2, 550) + 'px',
        height: '265px',
        iframe: !0,
        drags: !0,
        minimize_btn: !1,
        close_btn: !1,
        icon: 'crowdin',
        custom_class: 'jipt-join-translations',
        title_pane: '<h4>Join Translation Team</h4>',
        buttons_pane: '<div style="text-align:right; margin: 8px 20px;"><button type="button" id="jipt-join-logout" class="jipt-btn" style="margin-right: 8px;">Logout</button><button type="button" class="jipt-btn" id="jipt-join-language">Send Request</button></div>'
      }), e('#crowdin-jipt-mask > div').hide(), a.jiptDialog({
        action: 'open'
      }), f.ajax(d.getFullUrl('/jipt/join_dialog'), {
        language_id: t.language_id,
        project_id: t.project_id,
        project: p()
      }, function (t) {
        var n = '';

        switch (t.dialog_type) {
          case 'sent':
            e('#jipt-join-language').remove(), n = n = i.getJoinGroupRequestWasSentTpl(t.strings.requestHasBeenSentForApproval);
            break;

          case 'moderate':
            n = i.getJoinProjectModerate(t.project, t.language, t.strings.inOrderToJoinMembershipShouldBeReviewed, t.strings.whyDoYouWantToJoinQ);
            break;

          case 'open':
            n = i.getJoinProjectOpenTpl(t.project, t.language, t.strings.youAreAboutToJoin);
        }

        a.content.find('body').html(n), a.jiptDialog({
          action: 'center'
        }), a.content.find('textarea').focus();
      }), e('#jipt-join-language').click(function () {
        return f.ajax(d.getFullUrl('/jipt/send_invitation_request'), {
          language_id: t.language_id,
          project_id: t.project_id,
          project: p(),
          text: a.content.find('textarea').val().substr(0, 1500)
        }, function (t) {
          var e = 'group_sent' === t.dialog_type ? i.getJoinGroupRequestWasSentTpl(t.strings.requestHasBeenSentForApproval) : i.getJoinSuccessTpl(t.strings.youAreNowMember);
          a.html(e);
        }), e('#jipt-join-language').parent().remove(), a.html(n), !1;
      }), e('#jipt-join-logout').click(function () {
        return f._logout_action(), !1;
      }), f.set_current_language('', 0, '');
    },
    getJoinGroupRequestWasSentTpl: function getJoinGroupRequestWasSentTpl(t) {
      return '<div style="text-align: center; margin: 20px">' + t + '</div>';
    },
    getJoinProjectOpenTpl: function getJoinProjectOpenTpl(t, e, i) {
      return '<div class="alert alert-info">' + i + '</div><form><input type="hidden" id="join_project_id" value="' + t.id + '"><input type="hidden" id="join_language_id" value="' + e.id + '"></form>';
    },
    getJoinProjectModerate: function getJoinProjectModerate(t, e, i, n) {
      return '<div class="alert alert-info">\n' + i + '</div><form><fieldset><input type="hidden" id="join_project_id" value="' + t.id + '"><input type="hidden" id="join_language_id" value="' + e.id + '"><div class="control-group" style="margin-top: 20px;"><label for="join_group_request">' + n + '</label><textarea rows="5" id="join_group_request" class="input-block-level"></textarea></div></fieldset></form>';
    },
    getJoinSuccessTpl: function getJoinSuccessTpl(t) {
      return '<div class="alert alert-success">' + t + '</div>';
    },
    _show_no_texts_warning: function _show_no_texts_warning() {
      var t = '<div><strong>Crowdin In-Context was unable to identify translatable texts.</strong><p>Possible reasons:</p><ul style="margin-left: 15px; list-style-type: square"><li>the pseudo-language is not integrated;</li><li>current application locale is not set to the language that contains Crowdin In-Context pseudo-language;</li><li>there are no translatable texts on this page.</li></ul><p>Check the <a target="_blank" href="' + (d.getEntryPoint() + '/project/' + f.projectId + '/settings#in-context') + '">integration guide</a> for more information or <a href="' + (d.getEntryPoint() + '/contacts') + '" target="_blank">contact Crowdin Support</a></p><div class="jipt-control-group"><label class="jipt-checkbox"><input type="checkbox" id="skip_no_phrases_msg">Do not show this message again.</label></div></div>',
          i = e('<div id="no_texts_warning">').html(t);
      i.content = i.jiptDialog({
        modal: !1,
        width: Math.min(window.innerWidth - 2, window.outerWidth - 2, 550) + 'px',
        height: '320px',
        iframe: !0,
        drags: !0,
        minimize_btn: !1,
        icon: 'crowdin',
        custom_class: 'jipt-no-translations',
        title_pane: '<h4>Nothing to translate</h4>',
        buttons_pane: '<div style="text-align:right; margin: 8px 20px;"><button type="button" class="jipt-btn jipt-dialog-close">Close</button></div>'
      }), i.content.find('#skip_no_phrases_msg').click(function () {
        1 == e(this).prop('checked') ? l.save('no_phrases_warning_disabled', 'yes') : l.save('no_phrases_warning_disabled', 'no');
      }), i.jiptDialog({
        action: 'open'
      });
    },
    _show_error_dialog: function _show_error_dialog(t) {
      var i = e('<div>').html(t);
      i.jiptDialog({
        modal: !0,
        width: Math.min(window.innerWidth - 2, window.outerWidth - 2, 450) + 'px',
        drags: !1,
        minimize_btn: !1,
        close_btn: !1,
        icon: 'crowdin',
        title_pane: '<h4>Crowdin In-Context</h4>'
      }), i.jiptDialog({
        action: 'open'
      }), f.place_close_btn();
    },
    _handle_jipt_error: function _handle_jipt_error(t) {
      var e = '',
          i = t.project_id ? d.getEntryPoint() + '/project/' + t.project_id + '/settings#in-context' : '',
          n = d.getEntryPoint() + '/contacts';

      switch (t.error_code) {
        case 'auth_error':
          alert('Your session has expired. Please log in again'), window.location.reload();
          break;

        case 'moderate_language':
          this._show_join_translations_dialog(t.data);

          break;

        case 'project_not_found':
          this._show_error_dialog('<p style="margin: 0 0 10px; padding: 0;"><strong>Translation mode is unavailable.</strong><p>Crowdin In-Context can not find appropriate project at Crowdin. Please contact project manager for further assistance.');

          break;

        case 'private_project':
          this._show_error_dialog('It seems that you do not have permission to participate. Try to switch ' + t.brand_name + ' account if you have several or contact <a href="' + t.owner_url + '">project manager</a> for further assistance.');

          break;

        case 'jipt_disabled':
          e = t.is_manager ? '<p style="margin: 0 0 10px; padding: 0;"><strong>Crowdin In-Context is disabled for this project.</strong></p>Check the <a target="_blank" href="' + i + '">integration guide</a> for more information or <a href="' + n + '" target="_blank">contact Crowdin Support</a>' : '<p style="margin: 0 0 10px; padding: 0;"><strong>Translation mode is currently disabled.</strong></p>Please contact <a href="' + t.owner_url + '">project manager</a> for further assistance.', this._show_error_dialog(e);
          break;

        case 'denied':
          this._show_error_dialog('Sorry, you do not have access to this project.');

          break;

        case 'mfa_denied':
          this._show_error_dialog('The project has security requirements.');

          break;

        case 'timeout':
          this._show_error_dialog('Oops. Could not load data from remote server.');

          break;

        case 'language_not_found':
          this._show_error_dialog('The specified language was not found in your project. Please reload the page and try again.');

      }
    },
    element_classname: function element_classname(t) {
      if (t.is('select')) {
        var i = [];

        for (var n in f.status) {
          t.find('[class*=crowdin_jipt_' + f.status[n] + ']').length && i.push('crowdin_jipt_' + f.status[n]);
        }

        return t.find('[class*=crowdin_jipt_no_preview]').length && i.push('crowdin_jipt_no_preview'), i.join(' ');
      }

      for (var a = t.data('phrases') || [], o = [], s = '', r = 0; r < a.length; r++) {
        var l = f.phrases[a[r].id];
        o.push(f.phrase_classname(l)), s || (s = f.phrase_no_preview_classname(l));
      }

      for (var n in f.status) {
        var d = 'crowdin_jipt_' + f.status[n];
        if (e.inArray(d, o) >= 0) return d + s;
      }

      return '' + s;
    },
    phrase_no_preview_classname: function phrase_no_preview_classname(t) {
      return f.plurals_preview || 1 === t.text.length ? '' : ' crowdin_jipt_no_preview';
    },
    phrase_classname: function phrase_classname(t) {
      return '1' === t.hidden ? 'crowdin_jipt_hidden' : 'crowdin_jipt_' + this.get_phrase_status(t.status);
    },
    addPhraseToElement: function addPhraseToElement(t, e) {
      var i = [];
      t.data('phrases') && (i = t.data('phrases'));

      for (var n = 0; n < i.length; n++) {
        if (i[n].id === e.id) return;
      }

      i.push(e), t.data('phrases', i);
    },
    ajax: function ajax(t, i, n) {
      e.ajax({
        url: t,
        dataType: 'jsonp',
        data: i,
        timeout: 45e3,
        complete: function complete(t, e) {
          'timeout' === e && f._handle_jipt_error({
            error_code: 'timeout'
          });
        },
        success: function success(t) {
          t.jipt_error ? f._handle_jipt_error(t) : n(t);
        }
      });
    },
    findNext: function findNext(t, e, i) {
      for (var n = f[t](e);;) {
        if (!1 === n) return !1;
        if (n.is(i)) return n;
        n = f[t](n);
      }
    },
    next: function next(t) {
      var e = t.find('*:first');
      if (0 !== e.length) return e;
      var i = t.next();
      if (0 !== i.length) return i;

      for (var n = t.parent();;) {
        if (n.is('html') || 0 === n.length) return !1;
        var a = n.next();
        if (0 !== a.length) return a;
        n = n.parent();
      }
    },
    prev: function prev(t) {
      var e = t.prev();

      if (0 !== e.length) {
        var i = e.find('*:last');
        return 0 !== i.length ? i : e;
      }

      return !t.is('html') && 0 !== t.length && t.parent();
    },
    _load_phrases_delayed: function _load_phrases_delayed(t, i) {
      !0 !== o.preload_texts && (e.extend(f._phrases.need_load, f.get_phrases_from_text(t)), f._phrases.callbacks.push(i), clearTimeout(f._phrases.load_timeout), f._phrases.load_timeout = setTimeout(function () {
        var t = f._phrases.need_load,
            i = f._phrases.callbacks.slice(0);

        f._phrases.need_load = {}, f._phrases.callbacks = [];

        for (var n in t) {
          f._phrases.was_loaded[n] && delete t[n];
        }

        e.extend(f._phrases.was_loaded, t), e.isEmptyObject(t) || f._load_phrases(t, i);
      }, 200));
    },
    _load_phrases: function _load_phrases(t, i) {
      var n = 0,
          a = 0;
      if (o.edit_strings_context && !o.preload_texts && (a = 1), !0 === o.preload_texts) var s = ['all'];else {
        var r = f.serialize_ids(t);

        if (!(s = f.string_chunks(r, 1400, '.')).length) {
          for (var l = 0; l < i.length; l++) {
            i[l]();
          }

          return void f.rebuild_panel_phrases();
        }
      }

      for (var c = 0; c < s.length; c++) {
        f.ajax(d.getFullUrl('/jipt/phrases'), {
          language_code: f.language.code,
          workflow_step_id: f.workflowStep.id,
          project: p(),
          edit_strings_context: a,
          phrase_ids: s[c]
        }, function (a) {
          if (n++, e.extend(f.phrases, a.data), n === s.length) {
            for (var r in t) {
              void 0 === f.phrases[r] ? f.phrases[r] = {
                hidden: '0',
                id: r,
                status: 'not_found',
                text: [f.not_found_warning],
                translation: ['']
              } : o.domain && 0 == f.phrases[r].visible_on_step && (f.phrases[r].status = 'not_visible_on_step');
            }

            for (var l = 0; l < i.length; l++) {
              i[l]();
            }

            f.delayed_rebuild_panel_phrases();
          }
        });
      }
    },
    update_strings_context: function update_strings_context(t, a) {
      if ('0' !== t && void 0 !== a && !o.preload_texts) {
        var s = o.edit_strings_context(a);
        if (i && window.clearTimeout(i), s.length > 1500) return void console.warn('Crowdin In-Context: Context cannot be updated because it is too long. String ID: ' + t);
        if (a === s) return;
        if (e.inArray(t, n.updatedStrings) > 0) return;
        n.updatedStrings.push(t);
        var r = n.newStrings.slice();
        r.push({
          id: t,
          context: s
        }), JSON.stringify(r).length > 1500 && f.send_strings(), n.newStrings.push({
          id: t,
          context: s
        }), i = window.setTimeout(function () {
          f.send_strings();
        }, 1e3);
      }
    },
    send_strings: function send_strings() {
      f.ajax(d.getFullUrl('/jipt/edit_strings_context'), {
        project: p(),
        contexts: JSON.stringify(n.newStrings)
      }, function () {}), n.newStrings.splice(0, n.newStrings.length);
    },
    get_phrases_from_text: function get_phrases_from_text(t) {
      for (var e, i = {};;) {
        if (null === (e = f.regexp.globalStartPhrase.exec(t))) break;
        i[parseInt(e[1])] = !0;
      }

      return i;
    },
    serialize_ids: function serialize_ids(t) {
      var e = [],
          i = [],
          n = 0;

      for (var a in t) {
        a - n != 1 && 0 !== i.length && (e.push(i), i = []), i.push(a), n = a;
      }

      0 !== i.length && e.push(i);

      for (var o = [], s = 0; s < e.length; s++) {
        var r = e[s][0];
        r === (n = e[s][e[s].length - 1]) ? o.push(r) : o.push(r + '-' + n);
      }

      return o.join('.');
    },
    string_chunks: function string_chunks(t, e, i) {
      for (var n = [];;) {
        var a = t.indexOf(i, e);

        if (-1 === a) {
          0 !== t.length && n.push(t);
          break;
        }

        n.push(t.slice(0, a)), t = t.slice(a + 1);
      }

      return n;
    },
    split: function split(t, e) {
      for (var i = [], n = e.length;;) {
        var a = t.toLowerCase().indexOf(e);

        if (-1 === a) {
          i.push(t);
          break;
        }

        i.push(t.substr(0, a)), t = t.substr(a + n);
      }

      return i;
    },
    get_workflow_proofread_step_id: function get_workflow_proofread_step_id() {
      var t = this.user.workflow_step_id;
      return 1 == t || -1 == e.inArray(t, this.workflow_step_ids) ? this.workflow_step_ids[this.workflow_step_ids.length - 1] : t;
    },
    get_phrase_status: function get_phrase_status(t) {
      if ('string' == typeof t) return t;
      var e = this.get_workflow_proofread_step_id(),
          i = this.status.untranslated;
      return t.translated && (i = this.status.translated), t.approved[e] && (i = this.status.approved), t.partially_approved[e] && (i = this.status.partially_approved), t.partially_translated && (i = this.status.partially_translated), i;
    }
  };

  window.location.search.match('\\bdisable_jipt\\b') || f.init(), window.jipt = {
    target_language: l.get('language_code'),
    set_draft_suggestion: function set_draft_suggestion(t, e) {
      f.set_draft_suggestion(t, e);
    },
    save_suggestions: function save_suggestions(t, e, i) {
      f.save_suggestions(t, e, i);
    }
  };
}();
var sanitizer = new function () {
  this.uri_protocol_named_ref_map = {
    Tab: '\t',
    NewLine: '\n'
  }, this.uri_blacklist_protocols = {
    javascript: 1,
    data: 1,
    vbscript: 1,
    mhtml: 1
  }, this.uri_protocol_colon = /(?::|&#[xX]0*3[aA];?|&#0*58;?|&colon;)/, this.uri_protocols_whitespaces = /\\n|(?:^[\x00-\x20]+|[\t\n\r\x00]+)/g, this.special_attr_value_unquoted_chars = /(?:^(?:["'`]|\x00+$|$)|[\x09-\x0D >])/g, this.sensitive_html_entities = /&(?:#([xX][0-9A-Fa-f]+|\d+);?|(Tab|NewLine|colon|semi|lpar|rpar|apos|sol|comma|excl|ast|midast|ensp|emsp|thinsp);|(nbsp|amp|AMP|lt|LT|gt|GT|quot|QUOT);?)/g, this.null_value = /\x00/g, this.url = function (t) {
    return this.uri_blacklist_protocols[this._getProtocol(this._convertSpecialChars(t))] ? '#' : t;
  }, this.attributes = function (t) {
    var e,
        i,
        n,
        a,
        o = [];

    for (e = /\s+on\w*\s*=\s*("([^"]*")|'[^']*'|([^'">\s]*))/gi; null !== (i = e.exec(t));) {
      t = t.replace(i[0], '');
    }

    for (e = /\bhref\s*=[^"']*(?:"([^"]*)"|'([^']*)')/gi; null !== (i = e.exec(t));) {
      o.push(i[1]);
    }

    for (a in o) {
      n = this.url(o[a]), t = t.replace(o[a], n);
    }

    return t;
  }, this.tags = function (t, e) {
    var i = this,
        n = !1;
    return e.map(function (e) {
      var a = new RegExp('<' + e + '\\b[^<]*(?:(?!<\\/' + e + '>)<[^<]*)*((<\\/' + e + '>)|>)', 'ig'),
          o = t.match(a);
      if (o) if (n = !0, 1 === o.length) {
        var s = a.exec(t);
        t = i._replaceTags(t, s);
      } else t = i._replaceTags(t, o);
    }), n && (t = i.tags(t, e)), t;
  }, this._replaceTags = function (t, e) {
    for (var i = 0, n = e.length; i < n; i++) {
      t = t.replace(e[i], '');
    }

    return t;
  }, this._getRawProtocol = function (t) {
    return 2 === (t = t.split(this.uri_protocol_colon, 2)).length && t[0] ? t[0] : null;
  }, this._getProtocol = function (t) {
    var e = this;
    return (t = this._getRawProtocol(t.replace(this.null_value, ''))) ? this._htmlDecode(t, this.uri_protocol_named_ref_map, this.sensitive_html_entities, function () {
      return this.replace(e.uri_protocols_whitespaces, '').toLowerCase();
    }) : null;
  }, this._getCharacter = function (t) {
    return !isFinite(t) || t <= 0 || t > 1114111 || 11 === t || t >= 1 && t <= 8 || t >= 14 && t <= 31 || t >= 127 && t <= 159 || t >= 64976 && t <= 65007 || 65535 == (65535 & t) || 65534 == (65535 & t) ? '' : this._fromCodePoint(t);
  }, this._fromCodePoint = String.fromCodePoint || function (t) {
    return 0 === arguments.length ? '' : t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), t % 1024 + 56320));
  }, this._convertSpecialChars = function (t) {
    return this._stringify(t, String.prototype.replace, this.special_attr_value_unquoted_chars, function (t) {
      return '\t' === t ? '&#9;' : '\n' === t ? '&#10;' : '\v' === t ? '&#11;' : '\f' === t ? '&#12;' : '\r' === t ? '&#13;' : ' ' === t ? '&#32;' : '>' === t ? '&gt;' : '"' === t ? '&quot;' : "'" === t ? '&#39;' : '`' === t ? '&#96;' : '';
    });
  }, this._stringify = function (t, e) {
    return void 0 === t ? 'undefined' : null === t ? 'null' : e.apply(t.toString(), [].splice.call(arguments, 2));
  }, this._htmlDecode = function (t, e, i, n) {
    var a,
        o = [].splice.call(arguments, 4),
        s = this;
    return this._stringify(t, function () {
      return a = this.replace(this.null_value, '').replace(i, function (t, i, n, a) {
        return i ? (i = Number(i[0] <= '9' ? i : '0' + i)) >= 55296 && i <= 57343 || 13 === i ? '' : s._getCharacter(i) : e[n || a] || t;
      }), n ? n.apply(a, o) : a;
    });
  };
}();
},{}]},{},["ttqo"], null)
//# sourceMappingURL=/jipt.5fe9297d.js.map