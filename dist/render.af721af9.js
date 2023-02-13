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
})({"SpGf":[function(require,module,exports) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
},{}],"b9XL":[function(require,module,exports) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],"OUZ9":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],"9vK/":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],"Rom6":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;
},{}],"69HE":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":"OUZ9","./iterableToArrayLimit":"9vK/","./nonIterableRest":"Rom6"}],"IxO8":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],"mbYX":[function(require,module,exports) {
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],"OWwF":[function(require,module,exports) {
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],"koiw":[function(require,module,exports) {
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/keys.js":"mbYX","./lib/is_arguments.js":"OWwF"}],"J4Nk":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"awqi":[function(require,module,exports) {
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var k = require("object-assign"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.concurrent_mode") : 60111,
    y = n ? Symbol.for("react.forward_ref") : 60112,
    z = n ? Symbol.for("react.suspense") : 60113,
    aa = n ? Symbol.for("react.memo") : 60115,
    ba = n ? Symbol.for("react.lazy") : 60116,
    A = "function" === typeof Symbol && Symbol.iterator;

function ca(a, b, d, c, e, g, h, f) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [d, c, e, g, h, f],
          m = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[m++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function B(a) {
  for (var b = arguments.length - 1, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) d += "&args[]=" + encodeURIComponent(arguments[c + 1]);

  ca(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", d);
}

var C = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    D = {};

function E(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

E.prototype.isReactComponent = {};

E.prototype.setState = function (a, b) {
  "object" !== typeof a && "function" !== typeof a && null != a ? B("85") : void 0;
  this.updater.enqueueSetState(this, a, b, "setState");
};

E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function F() {}

F.prototype = E.prototype;

function G(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

var H = G.prototype = new F();
H.constructor = G;
k(H, E.prototype);
H.isPureReactComponent = !0;
var I = {
  current: null
},
    J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, d) {
  var c = void 0,
      e = {},
      g = null,
      h = null;
  if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = b[c]);
  var f = arguments.length - 2;
  if (1 === f) e.children = d;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) l[m] = arguments[m + 2];

    e.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) void 0 === e[c] && (e[c] = f[c]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: h,
    props: e,
    _owner: J.current
  };
}

function da(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function N(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var O = /\/+/g,
    P = [];

function Q(a, b, d, c) {
  if (P.length) {
    var e = P.pop();
    e.result = a;
    e.keyPrefix = b;
    e.func = d;
    e.context = c;
    e.count = 0;
    return e;
  }

  return {
    result: a,
    keyPrefix: b,
    func: d,
    context: c,
    count: 0
  };
}

function R(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > P.length && P.push(a);
}

function S(a, b, d, c) {
  var e = typeof a;
  if ("undefined" === e || "boolean" === e) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (e) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return d(c, a, "" === b ? "." + T(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
    e = a[h];
    var f = b + T(e, h);
    g += S(e, f, d, c);
  } else if (null === a || "object" !== typeof a ? f = null : (f = A && a[A] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(e = a.next()).done;) e = e.value, f = b + T(e, h++), g += S(e, f, d, c);else "object" === e && (d = "" + a, B("31", "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, ""));
  return g;
}

function U(a, b, d) {
  return null == a ? 0 : S(a, "", b, d);
}

function T(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ea(a, b) {
  a.func.call(a.context, b, a.count++);
}

function fa(a, b, d) {
  var c = a.result,
      e = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? V(a, c, d, function (a) {
    return a;
  }) : null != a && (N(a) && (a = da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + d)), c.push(a));
}

function V(a, b, d, c, e) {
  var g = "";
  null != d && (g = ("" + d).replace(O, "$&/") + "/");
  b = Q(b, g, c, e);
  U(a, fa, b);
  R(b);
}

function W() {
  var a = I.current;
  null === a ? B("321") : void 0;
  return a;
}

var X = {
  Children: {
    map: function (a, b, d) {
      if (null == a) return a;
      var c = [];
      V(a, c, null, b, d);
      return c;
    },
    forEach: function (a, b, d) {
      if (null == a) return a;
      b = Q(null, null, b, d);
      U(a, ea, b);
      R(b);
    },
    count: function (a) {
      return U(a, function () {
        return null;
      }, null);
    },
    toArray: function (a) {
      var b = [];
      V(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function (a) {
      N(a) ? void 0 : B("143");
      return a;
    }
  },
  createRef: function () {
    return {
      current: null
    };
  },
  Component: E,
  PureComponent: G,
  createContext: function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function (a) {
    return {
      $$typeof: y,
      render: a
    };
  },
  lazy: function (a) {
    return {
      $$typeof: ba,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function (a, b) {
    return {
      $$typeof: aa,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  useCallback: function (a, b) {
    return W().useCallback(a, b);
  },
  useContext: function (a, b) {
    return W().useContext(a, b);
  },
  useEffect: function (a, b) {
    return W().useEffect(a, b);
  },
  useImperativeHandle: function (a, b, d) {
    return W().useImperativeHandle(a, b, d);
  },
  useDebugValue: function () {},
  useLayoutEffect: function (a, b) {
    return W().useLayoutEffect(a, b);
  },
  useMemo: function (a, b) {
    return W().useMemo(a, b);
  },
  useReducer: function (a, b, d) {
    return W().useReducer(a, b, d);
  },
  useRef: function (a) {
    return W().useRef(a);
  },
  useState: function (a) {
    return W().useState(a);
  },
  Fragment: r,
  StrictMode: t,
  Suspense: z,
  createElement: M,
  cloneElement: function (a, b, d) {
    null === a || void 0 === a ? B("267", a) : void 0;
    var c = void 0,
        e = k({}, a.props),
        g = a.key,
        h = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (h = b.ref, f = J.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
    }

    c = arguments.length - 2;
    if (1 === c) e.children = d;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) l[m] = arguments[m + 2];

      e.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: h,
      props: e,
      _owner: f
    };
  },
  createFactory: function (a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: N,
  version: "16.8.6",
  unstable_ConcurrentMode: x,
  unstable_Profiler: u,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: I,
    ReactCurrentOwner: J,
    assign: k
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;
},{"object-assign":"J4Nk"}],"1n8/":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"awqi"}],"5IvP":[function(require,module,exports) {
var global = arguments[3];
/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var d=null,e=!1,g=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a)}}
function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,Q=l;g=a;l=b;try{var h=c()}finally{g=f,l=Q}if("function"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=h.next=h.previous=h;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next}while(a!==d);null===c?c=d:c===d&&(d=h,p());b=c.previous;b.next=c.previous=h;h.next=c;h.previous=
b}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1}}}function t(a){m=!0;var b=e;e=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,e=b,null!==d?p():n=!1,v()}}
var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}
if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof global&&(G=global);
if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a)}finally{I=null}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1))};q=function(){I=null};w=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var c=exports.unstable_now(),f=!1;if(0>=P-c)if(-1!==b&&b<=c)f=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(f)}finally{O=!1}}};
var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V))};q=function(){K=null;L=!1;M=-1}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=g,f=k;g=a;k=exports.unstable_now();try{return b()}finally{g=c,k=f,v()}};exports.unstable_next=function(a){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var c=g,f=k;g=b;k=exports.unstable_now();try{return a()}finally{g=c,k=f,v()}};
exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(g){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3}a={callback:a,priorityLevel:g,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var f=d;do{if(f.expirationTime>b){c=f;break}f=f.next}while(f!==d);null===c?c=d:c===d&&(d=a,p());
b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=g;return function(){var c=g,f=k;g=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{g=c,k=f,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return g};
exports.unstable_shouldYield=function(){return!e&&(null!==d&&d.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==d&&p()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return d};

},{}],"MDSO":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.production.min.js":"5IvP"}],"i17t":[function(require,module,exports) {
/** @license React v16.8.6
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';var aa=require("react"),n=require("object-assign"),r=require("scheduler");function ba(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function x(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:x("227");function ca(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}}
var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,l){da=!1;ea=null;ca.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da){if(da){var k=ea;da=!1;ea=null}else x("198"),k=void 0;fa||(fa=!0,ha=k)}}var la=null,ma={};
function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x("96",a);if(!oa[c]){b.extractEvents?void 0:x("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x("99",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:x("98",d,a)}}}}
function qa(a,b,c){ra[a]?x("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null}function xa(a,b){null==b?x("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
var Ba={injectEventPluginOrder:function(a){la?x("101"):void 0;la=Array.prototype.slice.call(a);na()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x("102",c):void 0,ma[c]=d,b=!0)}b&&na()}};
function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?x("231",b,typeof c):void 0;
return c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa),za?x("95"):void 0,fa))throw a=ha,fa=!1,ha=null,a;}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}
function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x("33")}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}
function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),$a=Wa("transitionend"),ab="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=null,cb=null,db=null;
function eb(){if(db)return db;var a,b=cb,c=b.length,d,e="value"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return!0}function gb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}
n(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=fb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=fb)},persist:function(){this.isPersistent=fb},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb}var kb=y.extend({data:null}),lb=y.extend({data:null}),mb=[9,13,27,32],nb=Ra&&"CompositionEvent"in window,ob=null;Ra&&"documentMode"in document&&(ob=document.documentMode);
var pb=Ra&&"TextEvent"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},tb=!1;
function ub(a,b){switch(a){case "keyup":return-1!==mb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function vb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case "compositionend":return vb(b);case "keypress":if(32!==b.which)return null;tb=!0;return rb;case "textInput":return a=b.data,a===rb&&tb?null:a;default:return null}}
function yb(a,b){if(wb)return"compositionend"===a||!nb&&ub(a,b)?(a=eb(),db=cb=bb=null,wb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return qb&&"ko"!==b.locale?null:b.data;default:return null}}
var zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case "compositionstart":e=sb.compositionStart;break b;case "compositionend":e=sb.compositionEnd;break b;case "compositionupdate":e=sb.compositionUpdate;break b}e=void 0}else wb?ub(a,c)&&(e=sb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&"ko"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d,cb="value"in bb?bb.value:bb.textContent,wb=
!0)),e=kb.getPooled(e,b,c,d),f?e.data=f:(f=vb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){"function"!==typeof Ab?x("280"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b)}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a])}}
function Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1,null!==Bb||null!==Cb)Ib(),Fb()}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Lb[a.type]:"textarea"===b?!0:!1}
function Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Pb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Qb(a){var b=Pb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a))}function Sb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Pb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Tb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty("ReactCurrentDispatcher")||(Tb.ReactCurrentDispatcher={current:null});
var Ub=/^(.*)[\\\/]/,z="function"===typeof Symbol&&Symbol.for,Vb=z?Symbol.for("react.element"):60103,Wb=z?Symbol.for("react.portal"):60106,Xb=z?Symbol.for("react.fragment"):60107,Yb=z?Symbol.for("react.strict_mode"):60108,Zb=z?Symbol.for("react.profiler"):60114,$b=z?Symbol.for("react.provider"):60109,ac=z?Symbol.for("react.context"):60110,bc=z?Symbol.for("react.concurrent_mode"):60111,cc=z?Symbol.for("react.forward_ref"):60112,dc=z?Symbol.for("react.suspense"):60113,ec=z?Symbol.for("react.memo"):
60115,fc=z?Symbol.for("react.lazy"):60116,gc="function"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||"object"!==typeof a)return null;a=gc&&a[gc]||a["@@iterator"];return"function"===typeof a?a:null}
function ic(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case bc:return"ConcurrentMode";case Xb:return"Fragment";case Wb:return"Portal";case Zb:return"Profiler";case Yb:return"StrictMode";case dc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ac:return"Context.Consumer";case $b:return"Context.Provider";case cc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ub,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};
function oc(a){if(lc.call(nc,a))return!0;if(lc.call(mc,a))return!1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return!1}function pc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qc(a,b,c,d){if(null===b||"undefined"===typeof b||pc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new C(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new C(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new C(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new C(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new C(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new C(a,3,!0,a,null)});
["capture","download"].forEach(function(a){D[a]=new C(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){D[a]=new C(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){D[a]=new C(a,5,!1,a.toLowerCase(),null)});var rc=/[\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rc,
sc);D[b]=new C(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new C(a,1,!1,a.toLowerCase(),null)});
function tc(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null),d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function uc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function vc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function wc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function xc(a,b){b=b.checked;null!=b&&tc(a,"checked",b,!1)}
function yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Ac(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Bc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Cc(a,b,c){a=y.getPooled(Bc.change,a,b,c);a.type="change";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a)}
function Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if("change"===a)return b}var Ic=!1;Ra&&(Ic=Ob("input")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent("onpropertychange",Kc),Ec=Dc=null)}function Kc(a){"value"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)),Kb(Fc,a))}function Lc(a,b,c){"focus"===a?(Jc(),Dc=b,Ec=c,Dc.attachEvent("onpropertychange",Kc)):"blur"===a&&Jc()}function Mc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Gc(Ec)}
function Nc(a,b){if("click"===a)return Gc(b)}function Oc(a,b){if("input"===a||"change"===a)return Gc(b)}
var Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc,g=Lc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&zc(e,"number",e.value)}},Qc=y.extend({view:null,detail:null}),Rc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}
var Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?"mousemove"===a.type?a.screenX-b:0:(Wc=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Vc;Vc=a.screenY;return Xc?"mousemove"===a.type?a.screenY-b:0:(Xc=!0,0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yc,h=$c.mouseLeave,l=$c.mouseEnter,k="mouse";
else if("pointerout"===a||"pointerover"===a)g=Zc,h=$c.pointerLeave,l=$c.pointerEnter,k="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b),k--;for(;0<g-k;)e=La(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=
f.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;
function dd(a,b){if(bd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return!1;return!0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x("188"):void 0}
function gd(a){var b=a.alternate;if(!b)return b=ed(a),3===b?x("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e),a;if(g===d)return fd(e),b;g=g.sibling}x("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:x("189")}}c.alternate!==d?x("190"):void 0}3!==c.tag?x("188"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var id=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ld(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?nd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return"keypress"===
a.type?ld(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ld(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["abort","abort"],[Xa,"animationEnd"],[Ya,"animationIteration"],[Za,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[$a,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){wd(a,!0)});td.forEach(function(a){wd(a,!1)});
var xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===ld(c))return null;case "keydown":case "keyup":a=od;break;case "blur":case "focus":a=kd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case "scroll":a=Qc;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Zc;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,
zd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l))}Da(g)}}var Bd=!0;
function E(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1)}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0)}function Cd(a,b){Hb(Dd,a,b)}
function Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||"number"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>zd.length&&zd.push(a)}}}var Fd={},Gd=0,Hd="_reactListenersID"+(""+Math.random()).slice(2);
function Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++,Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Kd(c)}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Jd(a.document)}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Pd(){var a=Nd();if(Od(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);
if(null===(t=m.firstChild))break;p=m;m=t}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode}m=t}b=-1===g||-1===h?null:{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;return{focusedElem:a,selectionRange:b}}
function Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ld(c,f);var g=Ld(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Rd=Ra&&"documentMode"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Td=null,Ud=null,Vd=null,Wd=!1;
function Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;"selectionStart"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c,a=y.getPooled(Sd.select,Ud,a,b),a.type="select",a.target=Td,Qa(a),a)}
var Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Mb(e)||"true"===e.contentEditable)Td=e,Ud=b,Vd=null;break;case "blur":Vd=Ud=Td=null;break;case "mousedown":Wd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Wd=!1,Xd(c,d);case "selectionchange":if(Rd)break;
case "keydown":case "keyup":return Xd(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function $d(a,b){a=n({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function be(a,b){null!=b.dangerouslySetInnerHTML?x("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?x("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:x("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:uc(c)}}
function de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ge(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ie=void 0,je=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==fe.svg||"innerHTML"in a)a.innerHTML=b;else{ie=ie||document.createElement("div");ie.innerHTML="<svg>"+b+"</svg>";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a]})});function ne(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(""+b).trim():b+"px"}
function oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ne(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var pe=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?x("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:x("61")),null!=b.style&&"object"!==typeof b.style?x("62",""):void 0)}
function re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ed("scroll",a);break;case "focus":case "blur":Ed("focus",a);Ed("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Ob(e)&&Ed(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===ab.indexOf(e)&&E(e,a)}c[e]=!0}}}function te(){}var ue=null,ve=null;
function we(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function xe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var ye="function"===typeof setTimeout?setTimeout:void 0,ze="function"===typeof clearTimeout?clearTimeout:void 0,Ae=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback;
function Ce(a,b,c,d,e){a[Ga]=e;"input"===c&&"radio"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?oe(a,h):"dangerouslySetInnerHTML"===g?je(a,h):"children"===g?ke(a,h):tc(a,g,h,d)}switch(c){case "input":yc(a,e);break;case "textarea":de(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,
!0):ae(a,!!e.multiple,e.multiple?[]:"",!1))}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Fe=[],Ge=-1;function F(a){0>Ge||(a.current=Fe[Ge],Fe[Ge]=null,Ge--)}function G(a,b){Ge++;Fe[Ge]=a.current;a.current=b}var He={},H={current:He},I={current:!1},Ie=He;
function Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function J(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F(I,a);F(H,a)}function Le(a){F(I,a);F(H,a)}
function Me(a,b,c){H.current!==He?x("168"):void 0;G(H,b,a);G(I,c,a)}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x("108",ic(b)||"Unknown",e);return n({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H.current;G(H,b,a);G(I,I.current,a);return!0}
function Pe(a,b,c){var d=a.stateNode;d?void 0:x("169");c?(b=Ne(a,b,Ie),d.__reactInternalMemoizedMergedChildContext=b,F(I,a),F(H,a),G(H,b,a)):F(I,a);G(I,c,a)}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}
function Te(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function K(a,b,c,d){return new Ue(a,b,c,d)}
function Ve(a){a=a.prototype;return!(!a||!a.isReactComponent)}function We(a){if("function"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}
function Xe(a,b){var c=a.alternate;null===c?(c=K(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Ye(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ve(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K(12,c,b,e|4),a.elementType=Zb,a.type=Zb,a.expirationTime=f,a;case dc:return a=K(13,c,b,e),a.elementType=dc,a.type=dc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=
14;break a;case fc:g=16;d=null;break a}x("130",null==a?a:typeof a,"")}b=K(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K(6,a,null,b);a.expirationTime=c;return a}
function bf(a,b,c){b=K(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a)}
function ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,cf(a,b)):
b>c&&cf(a,b)}df(0,a)}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a)}
function gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function L(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new aa.Component).refs;
function kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var tf={isMounted:function(a){return(a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=
sf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c)}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}
function vf(a,b,c){var d=!1,e=He;var f=b.contextType;"object"===typeof f&&null!==f?f=M(f):(e=J(b)?Ie:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function wf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null)}
function xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=M(f):(f=J(b)?Ie:H.current,e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(kf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&tf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var zf=Array.isArray;
function Af(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x("309"):void 0,d=c.stateNode);d?void 0:x("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?x("284"):void 0;c._owner?void 0:x("290",a)}return a}
function Bf(a,b){"textarea"!==a.type&&x("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Xe(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Af(a,b,c),d.return=a,d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=bf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=af(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c),c.ref=Af(a,null,b),c.return=a,c;case Wb:return b=bf(b,a.mode,c),b.return=a,b}if(zf(b)||
hc(b))return b=Ze(b,a.mode,c,null),b.return=a,b;Bf(a,b)}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c)}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null,d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null,m(b,a,d,e,null);Bf(b,d)}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q,q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&
q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key),g=f(B,g,u),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);"function"!==typeof l?x("150"):void 0;h=l.call(h);null==h?x("151"):void 0;
for(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++,w=h.next()){q.index>u?(B=q,q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B}if(w.done)return c(e,q),l;if(null===q){for(;!w.done;u++,w=h.next())w=p(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(q=d(e,q);!w.done;u++,w=h.next())w=A(q,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:
w.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props,h);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h),h.ref=Af(a,d,f),h.return=a,a=h)}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=bf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=af(f,a.mode,h),d.return=a,a=d),g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,x("152",h.displayName||h.name||"Component")}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x("174"):void 0;return a}
function Jf(a,b){G(Hf,b,a);G(Gf,a,a);G(N,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=he(b,c)}F(N,a);G(N,b,a)}function Kf(a){F(N,a);F(Gf,a);F(Hf,a)}function Lf(a){If(Hf.current);var b=If(N.current);var c=he(b,a.type);b!==c&&(G(Gf,a,a),G(N,c,a))}function Mf(a){Gf.current===a&&(F(N,a),F(Gf,a))}
var Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O=null,P=null,Yf=null,Q=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x("321")}function gg(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return!1;return!0}
function hg(a,b,c,d,e,f){Wf=f;Xf=b;P=null!==a?a.memoizedState:null;Vf.current=null===P?ig:jg;b=c(d,e);if(cg){do cg=!1,eg+=1,P=null!==a?a.memoizedState:null,Zf=Yf,ag=Q=O=null,Vf.current=jg,b=c(d,e);while(cg);dg=null;eg=0}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O&&null!==O.next;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;a?x("300"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0}
function mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q?Yf=Q=a:Q=Q.next=a;return Q}function ng(){if(null!==Zf)Q=Zf,Zf=Q.next,O=P,P=null!==O?O.next:null;else{null===P?x("310"):void 0;O=P;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};Q=null===Q?Yf=a:Q.next=a;P=O.next}return Q}function og(a,b){return"function"===typeof b?b(a):b}
function pg(a){var b=ng(),c=b.queue;null===c?x("311"):void 0;c.lastRenderedReducer=a;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0,h=g,e=f),m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==d);k||(h=g,e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null},ag.lastEffect=a.next=a):(b=ag.lastEffect,null===b?ag.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d)}
function tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d)}function ug(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function vg(){}
function wg(a,b,c){25>eg?void 0:x("301");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0,a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null},null===dg&&(dg=new Map),c=dg.get(b),void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===
d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e)}}
var kg={readContext:M,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},
useMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=wg.bind(null,Xf,a);return[d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,
lastRenderedReducer:og,lastRenderedState:a};a=a.dispatch=wg.bind(null,Xf,a);return[b.memoizedState,a]},useDebugValue:vg},jg={readContext:M,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,
b){return tg(4,Pf|Sf,a,b)},useMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og,a)},useDebugValue:vg},xg=null,yg=null,zg=!1;
function Ag(a,b){var c=K(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c)}xg=a;yg=Ee(b)}else a.effectTag|=2,zg=!1,xg=a}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a}function Eg(a){if(a!==xg)return!1;if(!zg)return Dg(a),zg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b),b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return!0}function Fg(){yg=xg=null;zg=!1}
var Gg=Tb.ReactCurrentOwner,qg=!1;function S(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d)}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:dd,c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1,e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Mg(a,b,c,d,e){var f=J(c)?Ie:H.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Og(a,b,c,d,e){if(J(c)){var f=!0;Oe(b)}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),vf(b,c,d,e),xf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e),l=b.memoizedState);h!==d||t!==l||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),l=b.memoizedState),(h=Pg||uf(b,c,h,d,t,l,k))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:L(b.type,h),l=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k),Pg=!1,l=b.memoizedState,t=g.state=l,A=b.updateQueue,null!==A&&(yf(b,A,d,g,e),t=b.memoizedState),h!==d||l!==t||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),t=b.memoizedState),(m=Pg||uf(b,c,h,d,l,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
t),g.props=d,g.state=t,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Qg(a,b,c,d,f,e)}
function Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1),Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f),b.child=Df(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo)}
function Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Xe(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Xe(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=Ze(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=Ze(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Df(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x("153"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xe(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Je(b,H.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J(d)){var f=!0;Oe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,
c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L(a.type,f),d,c);break;default:x("306",a,"")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Mg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
e=b.elementType===d?e:L(d,e),Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(),b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo),xg=b,e=zg=!0;e?(b.effectTag|=2,b.child=Ef(b,null,d,c)):(S(a,b,d,c),Fg());b=b.child}return b;case 5:return Lf(b),null===a&&Cg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,
g=e.children,xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16),Ng(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(S(a,b,g,c),b=b.child),b;case 6:return null===a&&Cg(b),null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Df(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Hg(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I.current){b=Jg(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
(k.observedBits&f)){1===h.tag&&(k=nf(c),k.tag=sf,pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?
null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ig(b,c),e=M(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=L(e,b.pendingProps),f=L(e.type,f),Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===
d?e:L(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,J(d)?(a=!0,Oe(b)):a=!1,Ig(b,c),vf(b,d,e,c),xf(b,d,e,c),Qg(null,b,d,!0,a,c)}x("156")}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G(Vg,c._currentValue,a);c._currentValue=b}function Zg(a){var b=Vg.current;F(Vg,a);a.type._context._currentValue=b}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null}
function M(a,b){if(Yg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Yg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x("308"):void 0,Xg=b,Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function ch(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bh(a.memoizedState),e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b),dh(e,b)):(dh(d,b),e.lastUpdate=b)}
function eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}
function gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case sf:Pg=!0}return d}
function yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l,null===g&&(f=k)),h<p&&(h=p)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=
32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}
function hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?x("191",c):void 0;c.call(d)}a=a.nextEffect}}
function jh(a,b){return{value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};mh=function(){};
nh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N.current);a=null;switch(c){case "input":f=vc(g,f);d=vc(g,d);a=[];break;case "option":f=$d(g,f);d=$d(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=be(g,f);d=be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=te)}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&kh(b)}};oh=function(a,b,c,d){c!==d&&kh(b)};
var ph="function"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function rh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){sh(a,c)}else b.current=null}
function th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Nf&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ne("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function vh(a){"function"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){sh(e,f)}}c=c.next}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){sh(a,f)}break;case 5:rh(a);break;case 4:wh(a)}}
function xh(a){return 5===a.tag||3===a.tag||4===a.tag}
function yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return}x("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x("161")}c.effectTag&16&&(ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&
2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d,b)}break;case 6:null===b.stateNode?x("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=
b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:x("163")}}var Bh="function"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b)};return c}
function Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Gh(a){switch(a.tag){case 1:J(a.type)&&Ke(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Le(a),b=a.effectTag,0!==(b&64)?x("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Kf(a),null;case 10:return Zg(a),null;default:return null}}
var Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T=null,Lh=null,U=0,Mh=-1,Nh=!1,V=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T)for(var a=T.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke(b);break;case 3:Kf(b);Le(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Zg(b)}a=a.return}Lh=null;U=0;Mh=-1;Nh=!1;T=null}
function Th(){for(;null!==V;){var a=V.effectTag;a&16&&ke(V.stateNode,"");if(a&128){var b=V.alternate;null!==b&&(b=b.ref,null!==b&&("function"===typeof b?b(null):b.current=null))}switch(a&14){case 2:yh(V);V.effectTag&=-3;break;case 6:yh(V);V.effectTag&=-3;zh(V.alternate,V);break;case 4:zh(V.alternate,V);break;case 8:a=V,wh(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null)}V=V.nextEffect}}
function Uh(){for(;null!==V;){if(V.effectTag&256)a:{var a=V.alternate,b=V;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x("163")}}V=V.nextEffect}}
function Vh(a,b){for(;null!==V;){var c=V.effectTag;if(c&36){var d=V.alternate,e=V,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}d=e.updateQueue;null!==d&&hh(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
e.child.stateNode;break;case 1:g=e.child.stateNode}hh(e,d,g,f)}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x("163")}}c&128&&(e=V.ref,null!==e&&(f=V.stateNode,"function"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V=V.nextEffect}}
function Wh(a,b){Rh=Qh=Ph=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f)}catch(g){d=!0,e=g}d&&sh(b,e)}b=b.nextEffect}while(null!==b);W=c;c=a.expirationTime;0!==c&&Xh(a,c);X||W||Yh(1073741823,!1)}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh()}
function Zh(a,b){Oh=Kh=!0;a.current===b?x("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?x("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V=d;null!==V;){e=!1;var f=void 0;try{Uh()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}for(V=d;null!==V;){e=!1;
f=void 0;try{Th()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V=d;null!==V;){e=!1;f=void 0;try{Vh(a,c)}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=r.unstable_runWithPriority(r.unstable_NormalPriority,function(){return Ae(g)});Rh=g}Kh=Oh=!1;"function"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=
b>c?b:c;0===b&&(Fh=null);$h(a,b)}
function ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J(b.type)&&Ke(b);break;case 3:Kf(b);Le(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Eg(b),b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var l=If(N.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case "iframe":case "object":E("load",e);break;case "video":case "audio":for(k=0;k<ab.length;k++)E(ab[k],e);break;case "source":E("error",e);break;case "img":case "image":case "link":E("error",e);E("load",e);break;case "form":E("reset",e);E("submit",e);break;case "details":E("toggle",e);break;case "input":wc(e,m);E("invalid",e);se(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};E("invalid",e);se(p,"onChange");break;case "textarea":ce(e,m),E("invalid",e),se(p,"onChange")}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],"children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case "input":Rb(e);Ac(e,m,!0);break;case "textarea":Rb(e);ee(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=te)}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b)}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(p));l===fe.html?"script"===p?(e=k.createElement("div"),e.innerHTML="<script>\x3c/script>",k=e.removeChild(e.firstChild)):"string"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p),"select"===p&&(p=k,e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case "iframe":case "object":E("load",
p);h=m;break;case "video":case "audio":for(h=0;h<ab.length;h++)E(ab[h],p);h=m;break;case "source":E("error",p);h=m;break;case "img":case "image":case "link":E("error",p);E("load",p);h=m;break;case "form":E("reset",p);E("submit",p);h=m;break;case "details":E("toggle",p);h=m;break;case "input":wc(p,m);h=vc(p,m);E("invalid",p);se(t,"onChange");break;case "option":h=$d(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});E("invalid",p);se(t,"onChange");break;case "textarea":ce(p,
m);h=be(p,m);E("invalid",p);se(t,"onChange");break;default:h=m}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];"style"===l?oe(R,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0,null!=q&&je(R,q)):"children"===l?"string"===typeof q?("textarea"!==v||""!==q)&&ke(R,q):"number"===typeof q&&ke(R,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A))}switch(k){case "input":Rb(p);
Ac(p,m,!1);break;case "textarea":Rb(p);ee(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+uc(m.value));break;case "select":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(p.onclick=te)}(g=we(f,g))&&kh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?x("166"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?x("166"):void 0),e=If(Hf.current),If(N.current),Eg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Fa]=g,(g=f.nodeValue!==e)&&kh(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Fa]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J(b.type)&&Ke(b);break;case 18:break;default:x("156")}T=null}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==T)return T;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&
(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gh(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function bi(a){var b=Tg(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}
function ci(a,b){Kh?x("243"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U||a!==Lh||null===T)Sh(),Lh=a,U=d,T=Xe(Lh.current,null,U),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T&&!di();)T=bi(T);else for(;null!==T;)T=bi(T)}catch(u){if(Yg=Xg=Wg=null,lg(),null===T)e=!0,Dh(u);else{null===T?x("271"):void 0;var f=T,g=f.return;if(null===g)e=!0,Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState,null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if("number"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v}m=m.return}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=
64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823),g.tag=sf,pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh,v=new Set,R.set(p,v)):(v=R.get(p),void 0===v&&(v=new Set,R.set(p,v)));v.has(l)||(v.add(l),k=ei.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3),h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((ic(k.type)||"A React component")+
" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+jc(k))}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m,A=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;
h.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return}while(null!==h)}T=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null,a.finishedWork=null;else if(null!==T)a.finishedWork=null;else{c=a.current.alternate;null===c?x("281"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;
b=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d),b=10*(1073741822-gf(a,d)),b<Mh&&(Mh=b),b=10*(1073741822-lf()),b=Mh-b,fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=c)}}
function sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return}3===a.tag&&(c=jh(b,a),c=Ch(a,c,1073741823),pf(a,c),qf(a,1073741823))}
function mf(a,b){var c=r.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U;else{switch(c){case r.unstable_ImmediatePriority:d=1073741823;break;case r.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case r.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case r.unstable_LowPriority:case r.unstable_IdlePriority:d=1;break;default:x("313")}null!==Lh&&d===U&&--d}c===r.unstable_UserBlockingPriority&&
(0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U===c)Lh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c)}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b),b=a.expirationTime,0!==b&&Xh(a,b))}
function hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U&&b>U&&Sh(),cf(a,b),Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime),ii>ji&&(ii=0,x("185")))}function ki(a,b,c,d,e){return r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y=null,mi=0,ni=void 0,W=!1,oi=null,Z=0,gi=0,pi=!1,qi=null,X=!1,ri=!1,si=null,ti=r.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((r.unstable_now()-ti)/10|0)}
function yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&r.unstable_cancelCallback(ni)}mi=b;a=r.unstable_now()-ti;ni=r.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a})}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c)}function $h(a,b){a.expirationTime=b;a.finishedWork=null}
function lf(){if(W)return vi;Ci();if(0===Z||1===Z)xi(),vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===Y?(li=Y=a,a.nextScheduledRoot=a):(Y=Y.nextScheduledRoot=a,Y.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W||(X?ri&&(oi=a,Z=1073741823,Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b))}
function Ci(){var a=0,b=null;if(null!==Y)for(var c=Y,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y?x("244"):void 0;if(d===d.nextScheduledRoot){li=Y=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot,Y.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===Y){Y=c;Y.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===Y)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}oi=b;Z=a}var Ei=!1;function di(){return Ei?!0:r.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot}while(a!==li)}Yh(0,!0)}finally{Ei=!1}}
function Yh(a,b){Ci();if(b)for(xi(),vi=ui;null!==oi&&0!==Z&&a<=Z&&!(Ei&&ui>Z);)Di(oi,Z,ui>Z),Ci(),xi(),vi=ui;else for(;null!==oi&&0!==Z&&a<=Z;)Di(oi,Z,!1),Ci();b&&(mi=0,ni=null);0!==Z&&yi(oi,Z);ii=0;wi=null;if(null!==si)for(a=si,si=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Bi(a,b){W?x("253"):void 0;oi=a;Z=b;Di(a,b,!1);Yh(1073741823,!1)}
function Di(a,b,c){W?x("245"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)))}else d=a.finishedWork,null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&Fi(a,d,b));W=!1}
function Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a,ii=0);r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){Zh(a,b)})}function Dh(a){null===oi?x("246"):void 0;oi.expirationTime=0;pi||(pi=!0,qi=a)}function Gi(a,b){var c=X;X=!0;try{return a(b)}finally{(X=c)||W||Yh(1073741823,!1)}}
function Hi(a,b){if(X&&!ri){ri=!0;try{return a(b)}finally{ri=!1}}return a(b)}function Ii(a,b,c){X||W||0===gi||(Yh(gi,!1),gi=0);var d=X;X=!0;try{return r.unstable_runWithPriority(r.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X=d)||W||Yh(1073741823,!1)}}
function Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);x("171");g=void 0}if(1===c.tag){var h=c.type;if(J(h)){c=Ne(c,h,g);break a}}c=g}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
of();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Wb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Ab=function(a,b,c){switch(b){case "input":yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x("90");Sb(d);yc(d,e)}}}break;case "textarea":de(a,c);break;case "select":b=c.value,null!=b&&ae(a,!!c.multiple,b,!1)}};
function Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ni.prototype.render=function(a){this._defer?void 0:x("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};
Ni.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ni.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?x("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Oi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?x("191",c):void 0;c()}}};
function Pi(a,b,c){b=K(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Pi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};
Pi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Qi(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W||0===gi||(Yh(gi,!1),gi=0)};
function Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}
function Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ri(c,d);if("function"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a)}}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Li(f._internalRoot)}
function Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x("200");return Mi(a,b,null,c)}
var Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?x("188"):x("268",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x("200");null==a||void 0===a._reactInternalFiber?
x("38"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x("40");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W?x("187"):void 0;var c=X;X=!0;try{return ki(a,b)}finally{X=c,Yh(1073741823,!1)}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=
X;X=!0;try{ki(a)}finally{(X=b)||W||Yh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa)},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x("299","unstable_createRoot");return new Pi(a,!0,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return Te(n({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;module.exports=Xi.default||Xi;

},{"react":"1n8/","object-assign":"J4Nk","scheduler":"MDSO"}],"NKHc":[function(require,module,exports) {
'use strict';

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if ("production" !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if ("production" === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.production.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}
},{"./cjs/react-dom.production.min.js":"i17t"}],"WOQ0":[function(require,module,exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "translations": {
    "singular": {
      "device_language": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388957:0crwdne6388957:0",
          "source": "Device Language"
        },
        "comment": "id:device_language\n\nUsed in the following files:\nFile: /Languages/index.js"
      },
      "language_content_notice": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388991:0crwdne6388991:0",
          "source": "Please note that content availability may differ between languages."
        },
        "comment": "id:language_content_notice\n\nUsed in the following files:\nFile: /Languages/index.js"
      },
      "change_icon_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns7479849:0%(iconName)scrwdne7479849:0",
          "source": "Change icon to Khan Academy %(iconName)s?"
        },
        "comment": "id:change_icon_title\nthe title of the \"change app icon\" alert on android\nUsed in the following files:\nFile: /Settings/AppIconPicker.js"
      },
      "change_icon_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns7479851:0crwdne7479851:0",
          "source": "Changing the icon will close the app."
        },
        "comment": "id:change_icon_message\nthe message of the \"change app icon\" alert on android\nUsed in the following files:\nFile: /Settings/AppIconPicker.js"
      },
      "change_icon_confirm": {
        "form": {
          "status": "approved",
          "translated": "crwdns7479853:0crwdne7479853:0",
          "source": "Change icon"
        },
        "comment": "id:change_icon_confirm\nThe button to confirm & close the \"change app icon\" alert on android, resulting in the icon for our app being changed, and the app being closed.\nUsed in the following files:\nFile: /Settings/AppIconPicker.js"
      },
      "available_offline": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388019:0crwdne6388019:0",
          "source": "Available offline"
        },
        "comment": "id:available_offline\nTitle of the filter in Search which limits results to those available offline\nUsed in the following files:\nFile: /redux/search/index.js"
      },
      "videos_filter": {
        "form": {
          "status": "approved",
          "translated": "crwdns7089375:0crwdne7089375:0",
          "source": "Videos"
        },
        "comment": "id:videos_filter\nTitle of the filter in Search which limits results to videos\nUsed in the following files:\nFile: /redux/search/index.js"
      },
      "articles_filter": {
        "form": {
          "status": "approved",
          "translated": "crwdns7089377:0crwdne7089377:0",
          "source": "Articles"
        },
        "comment": "id:articles_filter\nTitle of the filter in Search which limits results to articles\nUsed in the following files:\nFile: /redux/search/index.js"
      },
      "exercises_filter": {
        "form": {
          "status": "approved",
          "translated": "crwdns7089379:0crwdne7089379:0",
          "source": "Exercises"
        },
        "comment": "id:exercises_filter\nTitle of the filter in Search which limits results to exercises\nUsed in the following files:\nFile: /redux/search/index.js"
      },
      "offline_banner": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388021:0crwdne6388021:0",
          "source": "You're offline."
        },
        "comment": "id:offline_banner\nTitle of the offline banner.\nUsed in the following files:\nFile: /Explore/Explore.js\nFile: /shared/User/queries.js\nFile: /shared/components/OfflineBanner.js"
      },
      "offline_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388023:0crwdne6388023:0",
          "source": "Connect to Wi-Fi or cellular to go online."
        },
        "comment": "id:offline_subtitle\nText on the Search Screen that shows up when the user is offline and has no search results\nUsed in the following files:\nFile: /Explore/Explore.js"
      },
      "dismiss": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388025:0crwdne6388025:0",
          "source": "Dismiss"
        },
        "comment": "id:dismiss\nButton title for dismissing an alert.\nUsed in the following files:\nFile: /AddCoaches/index.js\nFile: /AppUpdateMessage/WhatsNewView.js\nFile: /BookmarksScreen/Cells/BookmarkCell.js\nFile: /BookmarksScreen/download-utils.js\nFile: /ManageCoaches/CoachListScene.js\nFile: /redux/bookmarks/download/download-utils.js\nFile: /redux/bookmarks/download/thunkActions.js\nFile: /redux/bookmarks/index.js\nFile: /redux/bookmarks/persist-utils.js\nFile: /shared/components/NavBar.js"
      },
      "error_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388027:0crwdne6388027:0",
          "source": "Error retrieving data"
        },
        "comment": "id:error_title\nTitle for an alert that's displayed when network request fails\nUsed in the following files:\nFile: /Home/Sections/MyCourses/OpenCoursesPickerButton.js\nFile: /shared/alert-utils.js"
      },
      "error_body": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388029:0crwdne6388029:0",
          "source": "We encountered an error while attempting to retrieve your data; please try again later."
        },
        "comment": "id:error_body\nMessage for an alert that's displayed when network request fails\nUsed in the following files:\nFile: /Home/Sections/MyCourses/OpenCoursesPickerButton.js\nFile: /shared/alert-utils.js"
      },
      "error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388031:0crwdne6388031:0",
          "source": "Error"
        },
        "comment": "id:error\nTitle for an alert.\nUsed in the following files:\nFile: /AddCoaches/index.js\nFile: /Assignments/AssignmentsScreen/index.js\nFile: /CoursesPicker/DoneNavigationButton.js\nFile: /redux/bookmarks/index.js\nFile: /redux/bookmarks/persist-utils.js\nFile: /shared/makeScreenDataLoader.js"
      },
      "explore": {
        "form": {
          "status": "approved",
          "translated": "crwdns7098981:0crwdne7098981:0",
          "source": "Explore"
        },
        "comment": "id:explore\nTitle for the explore & search tab\nUsed in the following files:\nFile: /navigators/Tabs.js"
      },
      "search": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388007:0crwdne6388007:0",
          "source": "Search"
        },
        "comment": "id:search\nSearch field placeholder\nUsed in the following files:\nFile: /Explore/Explore.js"
      },
      "apply_search_filter": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388013:0crwdne6388013:0",
          "source": "Apply"
        },
        "comment": "id:apply_search_filter\nButton title to apply filters selected within search UI\nUsed in the following files:\nFile: /Explore/Explore.js"
      },
      "filter": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388015:0crwdne6388015:0",
          "source": "Filter"
        },
        "comment": "id:filter\nButton title to allow choosing search filters.\nUsed in the following files:\nFile: /Explore/Explore.js"
      },
      "no_results": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388017:0crwdne6388017:0",
          "source": "No results.\n Try a different search?"
        },
        "comment": "id:no_results\nMessage for when no search results are found\nUsed in the following files:\nFile: /Explore/Explore.js"
      },
      "recent_searches": {
        "form": {
          "status": "approved",
          "translated": "crwdns6642474:0crwdne6642474:0",
          "source": "Recent searches"
        },
        "comment": "id:recent_searches\nTitle for a search feature that displays recent search terms\nUsed in the following files:\nFile: /Explore/RecentSearches.js"
      },
      "clear": {
        "form": {
          "status": "approved",
          "translated": "crwdns6642476:0crwdne6642476:0",
          "source": "Clear"
        },
        "comment": "id:clear\nButton title that erases recent search terms.\nUsed in the following files:\nFile: /Explore/RecentSearches.js"
      },
      "khan_kids_upsell_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388033:0crwdne6388033:0",
          "source": "Kids ages 2-8 can learn math, reading, and more, while practicing English."
        },
        "comment": "id:khan_kids_upsell_message\nMessage for our Khan kids upsell on the explore screen. NOTE do not change \"English\" into the name of the localized language - translate as-is.\nUsed in the following files:\nFile: /Home/Sections/KhanKids/KhanKidsCard.js"
      },
      "download_now": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388035:0crwdne6388035:0",
          "source": "Download now"
        },
        "comment": "id:download_now\nButton text that will take you to the app store to install the khan kids app\nUsed in the following files:\nFile: /Home/Sections/KhanKids/KhanKidsCard.js"
      },
      "curriculum_picker_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450911:0crwdne6450911:0",
          "source": "Khan Academy supports many languages and regions."
        },
        "comment": "id:curriculum_picker_message\nMessage for our Region Picker explore card, which points people to the region/language picker screen.\nUsed in the following files:\nFile: /Home/Sections/CurriculumPicker/CurriculumPickerCard.js"
      },
      "select_language": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450913:0crwdne6450913:0",
          "source": "Select language"
        },
        "comment": "id:select_language\nButton text that will take you to the region picker screen.\nUsed in the following files:\nFile: /Home/Sections/CurriculumPicker/CurriculumPickerCard.js"
      },
      "change_language_settings": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450915:0crwdne6450915:0",
          "source": "Change this later in settings"
        },
        "comment": "id:change_language_settings\nAlert header when someone says they are done with changing their region.\nUsed in the following files:\nFile: /Home/Sections/CurriculumPicker/CurriculumPickerCard.js"
      },
      "change_language_settings_text": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450917:0crwdne6450917:0",
          "source": "If you need to change the language later, you can do that in Profile > Settings."
        },
        "comment": "id:change_language_settings_text\nAlert text when someone says they are done with changing their region.\nUsed in the following files:\nFile: /Home/Sections/CurriculumPicker/CurriculumPickerCard.js"
      },
      "language_wait_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388993:0%1$scrwdne6388993:0",
          "source": "Please wait a moment while we configure the language (<xliff:g xmlns:xliff=\"urn:oasis:names:tc:xliff:document:1.2\" id=\"target_language\">%1$s</xliff:g>)"
        },
        "comment": "id:language_wait_message\n\nUsed in the following files:\nFile: /Languages/index.js"
      },
      "explore_welcome_ready_to_start": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388037:0crwdne6388037:0",
          "source": "Ready to start learning?"
        },
        "comment": "id:explore_welcome_ready_to_start\nTitle/intro/attention-grabber on the Home Screen's Welcome Card\nUsed in the following files:\nFile: /Home/Sections/Welcome/WelcomeCard.js"
      },
      "explore_sign_in_prompt": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821718:0crwdne6821718:0",
          "source": "Log in or sign up to save your progress as you work through courses on Khan Academy."
        },
        "comment": "id:explore_sign_in_prompt\nSubtitle below the 'Ready to start learning?' title/attention-grabber on the Home Screen's Welcome Card.\nUsed in the following files:\nFile: /Home/Sections/Welcome/WelcomeCard.js"
      },
      "explore_domains_browse_khan": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388041:0crwdne6388041:0",
          "source": "Browse Khan Academy"
        },
        "comment": "id:explore_domains_browse_khan\nHeader for the Home Screen's Domain Section, the section listing the different learning domains (eg. Math, Science, Arts and humanities)\nUsed in the following files:\nFile: /Home/Sections/Domains/DomainsCard.js"
      },
      "explore_my_courses": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388047:0crwdne6388047:0",
          "source": "My courses"
        },
        "comment": "id:explore_my_courses\nHeader for the Home Screen's My Courses Section (the section listing the user's 'bookmarked' courses)\nUsed in the following files:\nFile: /Home/Sections/MyCourses/MyCoursesCard.js"
      },
      "explore_base_card_error_try_again": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388049:0crwdne6388049:0",
          "source": "Try again"
        },
        "comment": "id:explore_base_card_error_try_again\nButton title shown on Try Again button there was an error loading an Home Screen card's data\nUsed in the following files:\nFile: /wonderblocks-doctoral-candidates/LoadingStateWrapper.js"
      },
      "explore_loading_assignments": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399415:0crwdne6399415:0",
          "source": "Loading your assignments..."
        },
        "comment": "id:explore_loading_assignments\nString shown in Assignment Card on Home Screen assignments are loading\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/AssignmentsScreenList.js\nFile: /ClassDetails/Cards/AssignmentsCard.js\nFile: /ClassDetails/ClassDetailsScreen.js"
      },
      "explore_loading_domains": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399417:0crwdne6399417:0",
          "source": "Loading your domains..."
        },
        "comment": "id:explore_loading_domains\nString shown in Domain Card on Home Screen when domains are loading and the card is empty\nUsed in the following files:\nFile: /Home/Sections/Domains/DomainsCard.js"
      },
      "explore_loading_my_courses": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399419:0crwdne6399419:0",
          "source": "Loading your courses..."
        },
        "comment": "id:explore_loading_my_courses\nString shown in My Courses Card on Home Screen when my courses are loading and the card is empty\nUsed in the following files:\nFile: /Home/Sections/MyCourses/MyCoursesCard.js"
      },
      "explore_loading_my_classes": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821720:0crwdne6821720:0",
          "source": "Loading your classes..."
        },
        "comment": "id:explore_loading_my_classes\nString shown in My Classes Card on Home Screen when my classes are loading and the card is empty\nUsed in the following files:\nFile: /Home/Sections/MyClassesCard/MyClassesCard.js\nFile: /MyClasses/MyClassesScreen.js"
      },
      "explore_loading_course_mastery": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399421:0crwdne6399421:0",
          "source": "Loading Course Mastery..."
        },
        "comment": "id:explore_loading_course_mastery\nString shown in My Course Mastery Card on Home Screen when assigned Course Mastery goals are loading and the card is empty\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/AssignmentsScreenList.js\nFile: /ClassDetails/Cards/AssignedCourseMasteryCard.js"
      },
      "explore_loading_kmap": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399423:0crwdne6399423:0",
          "source": "Loading your MAP Accelerator..."
        },
        "comment": "id:explore_loading_kmap\nString shown in My Map Accelerator Card on Home Screen when assigned kmap goals are loading and the card is empty\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/AssignmentsScreenList.js\nFile: /ClassDetails/Cards/AssignedKmapCard.js"
      },
      "explore_no_assignments_explore_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6412021:0crwdne6412021:0",
          "source": "No assignments due soon"
        },
        "comment": "id:explore_no_assignments_explore_title\nDisplayed on large layouts in the Assignments Card when there are no assignments\nUsed in the following files:\nFile: /ClassDetails/Cards/AssignmentsCard.js\nFile: /MyClasses/ui-utils.js"
      },
      "explore_no_assignments_explore_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6412023:0crwdne6412023:0",
          "source": "Nice hustle! Tap “See all” to view past assignments."
        },
        "comment": "id:explore_no_assignments_explore_subtitle\nDisplayed in the Assignments Card when there are no assignments\nUsed in the following files:\nFile: /ClassDetails/Cards/AssignmentsCard.js"
      },
      "see_all": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388069:0crwdne6388069:0",
          "source": "See all"
        },
        "comment": "id:see_all\nTitle for button that takes user to see all assignments/bookmarks/etc.\nUsed in the following files:\nFile: /Home/components/SeeAllButton.js"
      },
      "explore_no_my_courses_button": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388071:0crwdne6388071:0",
          "source": "Get started"
        },
        "comment": "id:explore_no_my_courses_button\nDisplayed on button in the My Courses Card when there are no assignments\nUsed in the following files:\nFile: /Home/Sections/MyCourses/MyCoursesCard.js"
      },
      "explore_no_my_courses_2": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388075:0crwdne6388075:0",
          "source": "Pick a few courses, and we’ll keep them on your home screen for quick access."
        },
        "comment": "id:explore_no_my_courses_2\nDisplayed in the My Courses Card when there are no selected courses\nUsed in the following files:\nFile: /Home/Sections/MyCourses/MyCoursesCard.js"
      },
      "domain_screen_nav_button_home": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388077:0crwdne6388077:0",
          "source": "Home"
        },
        "comment": "id:domain_screen_nav_button_home\nText displayed on the nav bar's Back button on the Domain Screen and the bottom tab bar, to take you 'home' to the Home Screen.\nUsed in the following files:\nFile: /navigators/Tabs.js"
      },
      "explore_recent_lessons": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399425:0crwdne6399425:0",
          "source": "Recent lessons"
        },
        "comment": "id:explore_recent_lessons\nTitle of a card showing the lessons that the user has recently interacted with\nUsed in the following files:\nFile: /Home/Sections/RecentLessons/RecentLessonsCard.js"
      },
      "surprise_me": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388081:0crwdne6388081:0",
          "source": "Surprise me!"
        },
        "comment": "id:surprise_me\nText for a button that will take you to a random video or article from the whole content library\nUsed in the following files:\nFile: /Home/Sections/Domains/DomainsCard.js"
      },
      "explore_no_recent_lessons": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399427:0crwdne6399427:0",
          "source": "No recent lessons"
        },
        "comment": "id:explore_no_recent_lessons\nIndicates that the user has no recent lessons (generally because they haven't viewed any videos yet)\nUsed in the following files:\nFile: /Home/Sections/RecentLessons/RecentLessonsCard.js"
      },
      "explore_loading_recent_lessons": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399429:0crwdne6399429:0",
          "source": "Loading your recent lessons..."
        },
        "comment": "id:explore_loading_recent_lessons\nString shown in Recent Lesson Card on Home Screen when recent lessons are loading and the card is empty\nUsed in the following files:\nFile: /Home/Sections/RecentLessons/RecentLessonsCard.js"
      },
      "loading_state_wrapper_default_error_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399431:0crwdne6399431:0",
          "source": "Content isn’t loading right now."
        },
        "comment": "id:loading_state_wrapper_default_error_message\nAssignments screen error-state text, that tells the learner to try again.\nUsed in the following files:\nFile: /wonderblocks-doctoral-candidates/LoadingStateWrapper.js"
      },
      "loading_state_wrapper_default_loading_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399433:0crwdne6399433:0",
          "source": "Loading your content..."
        },
        "comment": "id:loading_state_wrapper_default_loading_message\nString shown to user when loading any general content from the web.\nUsed in the following files:\nFile: /Domain/index.js\nFile: /wonderblocks-doctoral-candidates/LoadingStateWrapper.js"
      },
      "explore_header_error_alert_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6499501:0crwdne6499501:0",
          "source": "Error loading content"
        },
        "comment": "id:explore_header_error_alert_title\nTitle on an alert on the Home Cards, when there was an error loading the content but the card is using cached content. Alert comes from little error indicator button.\nUsed in the following files:\nFile: /Home/components/HomeHeader.js"
      },
      "explore_header_error_alert_body": {
        "form": {
          "status": "approved",
          "translated": "crwdns6499503:0crwdne6499503:0",
          "source": "We were unable to load the latest content."
        },
        "comment": "id:explore_header_error_alert_body\nBody on an alert on the Home Cards, when there was an error loading the content but the card is using cached content. Alert comes from little error indicator button.\nUsed in the following files:\nFile: /Home/components/HomeHeader.js"
      },
      "explore_my_classes_upsell_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821722:0crwdne6821722:0",
          "source": "Need to add a class?"
        },
        "comment": "id:explore_my_classes_upsell_title\nTitle on a home screen card asking if a learner needs to join a class.\nUsed in the following files:\nFile: /Home/Sections/MyClassesUpsell/MyClassesUpsellCard.js"
      },
      "explore_my_classes_upsell_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821724:0crwdne6821724:0",
          "source": "Add your teacher with their class code or email address."
        },
        "comment": "id:explore_my_classes_upsell_description\nDescription on a home screen card explaining that a learner can join a class via a code or the teacher's email address\nUsed in the following files:\nFile: /Home/Sections/MyClassesUpsell/MyClassesUpsellCard.js"
      },
      "explore_my_classes_upsell_button": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821726:0crwdne6821726:0",
          "source": "Join class"
        },
        "comment": "id:explore_my_classes_upsell_button\nButton title to join a class\nUsed in the following files:\nFile: /Home/Sections/MyClassesUpsell/MyClassesUpsellCard.js"
      },
      "expand_courses_button_text": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474089:0crwdne6474089:0",
          "source": "See All"
        },
        "comment": "id:expand_courses_button_text\nString shown on button for a collapsed list of courses that expands that list to show all the possible courses for a domain \nUsed in the following files:\nFile: /CoursesPicker/SelectCourses.js"
      },
      "expand_courses_button_text_with_number": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474091:0%(num)dcrwdne6474091:0",
          "source": "See All (%(num)d)"
        },
        "comment": "id:expand_courses_button_text_with_number\nString shown on button for a collapsed list of courses that expands that list to show all the possible courses for a domain. This string also shows a number for the full possible number of courses. For example, the string may display \"See All (34)\" if there are 34 items in the fully expanded list\nUsed in the following files:\nFile: /CoursesPicker/SelectCourses.js"
      },
      "collapse_courses_button_text": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474093:0crwdne6474093:0",
          "source": "See Fewer"
        },
        "comment": "id:collapse_courses_button_text\nString shown on button for a expanded list of courses that collapses that list to show a limited list of courses for a domain \nUsed in the following files:\nFile: /CoursesPicker/SelectCourses.js"
      },
      "grade_picker_nav_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474095:0crwdne6474095:0",
          "source": "Choose grade"
        },
        "comment": "id:grade_picker_nav_title\nThe nav bar text on the grade selection screen\nUsed in the following files:\nFile: /navigators/Home.js"
      },
      "courses_picker_nav_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474097:0crwdne6474097:0",
          "source": "Choose courses"
        },
        "comment": "id:courses_picker_nav_title\nThe nav bar text on the courses selection screen.\nUsed in the following files:\nFile: /navigators/Home.js"
      },
      "courses_picker_back_button": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474099:0crwdne6474099:0",
          "source": "Grade"
        },
        "comment": "id:courses_picker_back_button\nThe back button text on the courses selection screen that navigates back to the grade selection screen."
      },
      "grade_picker_header_primary": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474101:0crwdne6474101:0",
          "source": "What grade are you in?"
        },
        "comment": "id:grade_picker_header_primary\nThe main header on the grade selection screen\nUsed in the following files:\nFile: /CoursesPicker/SelectGrade.js"
      },
      "courses_picker_header_primary": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474105:0crwdne6474105:0",
          "source": "What courses can we help you learn?"
        },
        "comment": "id:courses_picker_header_primary\nThe main header on the courses selection screen\nUsed in the following files:\nFile: /CoursesPicker/SelectCourses.js"
      },
      "courses_picker_too_many_courses_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474109:0crwdne6474109:0",
          "source": "Alas! We can’t track more than 9 courses for you yet."
        },
        "comment": "id:courses_picker_too_many_courses_error\nThis is the error text that displays when a user tries to select more than 9 courses in the course selection screen. This is the same message displayed in the web app.\nUsed in the following files:\nFile: /CoursesPicker/SelectCourses.js"
      },
      "submit_selected_courses_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474111:0crwdne6474111:0",
          "source": "Sorry, we saw an unexpected error when updating your courses! Please try again later."
        },
        "comment": "id:submit_selected_courses_error\nThis error is displayed if a user tries to submit the courses picker data and there is some error such as a bad internet connection.\nUsed in the following files:\nFile: /CoursesPicker/DoneNavigationButton.js"
      },
      "unavailable_content": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389061:0crwdne6389061:0",
          "source": "This content isn't available in our app."
        },
        "comment": "id:unavailable_content\n\nUsed in the following files:\nFile: /shared/makeScreenDataLoader.js\nFile: /shared/native/NavigationModule.js"
      },
      "open_in_browser_accept": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389011:0crwdne6389011:0",
          "source": "Open in browser"
        },
        "comment": "id:open_in_browser_accept\n\nUsed in the following files:\nFile: /shared/makeScreenDataLoader.js\nFile: /shared/native/NavigationModule.js"
      },
      "my_classes": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821728:0crwdne6821728:0",
          "source": "My classes"
        },
        "comment": "id:my_classes\nTitle for the My Classes feature, where a learner can view all of their classes and teachers.\nUsed in the following files:\nFile: /Home/Sections/MyClassesCard/MyClassesCard.js\nFile: /navigators/Home.js"
      },
      "active_classes": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821730:0crwdne6821730:0",
          "source": "Active classes"
        },
        "comment": "id:active_classes\nSection header title for a list of classes that have current assignments\nUsed in the following files:\nFile: /MyClasses/MyClassesScreen.js"
      },
      "inactive_classes": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821732:0crwdne6821732:0",
          "source": "Inactive classes"
        },
        "comment": "id:inactive_classes\nSection header title for a list of classes that have not had an assignment in a very long time.\nUsed in the following files:\nFile: /MyClasses/MyClassesScreen.js"
      },
      "inactive_class": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821734:0crwdne6821734:0",
          "source": "Inactive class"
        },
        "comment": "id:inactive_class\nLabel to describe a class that has not had an assignment in a very long time\nUsed in the following files:\nFile: /MyClasses/ui-utils.js"
      },
      "inactive_class_footer": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821736:0crwdne6821736:0",
          "source": "A class is considered inactive when there has been no assignment activity in one year."
        },
        "comment": "id:inactive_class_footer\nSection footer description to explain what conditions cause a class to be considered inactive.\nUsed in the following files:\nFile: /MyClasses/MyClassesScreen.js"
      },
      "no_assignments": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821738:0crwdne6821738:0",
          "source": "No assignments"
        },
        "comment": "id:no_assignments\nLabel to describe a class that does not have any assignments\nUsed in the following files:\nFile: /ClassDetails/ClassDetailsScreen.js"
      },
      "no_assignments_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821740:0crwdne6821740:0",
          "source": "Your teacher hasn't assigned anything yet."
        },
        "comment": "id:no_assignments_subtitle\nDescription label that explains why there are no assignments in a classroom.\nUsed in the following files:\nFile: /ClassDetails/ClassDetailsScreen.js"
      },
      "map_accelerator": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821742:0crwdne6821742:0",
          "source": "MAP Accelerator"
        },
        "comment": "id:map_accelerator\nLabel to describe the MAP Accelerator feature\nUsed in the following files:\nFile: /MyClasses/ui-utils.js"
      },
      "no_active_classes": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821744:0crwdne6821744:0",
          "source": "No active classes"
        },
        "comment": "id:no_active_classes\nEmpty-state title for our my classes feature - if you do not have any active classes.\nUsed in the following files:\nFile: /Home/Sections/MyClassesCard/MyClassesCard.js"
      },
      "no_active_classes_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821746:0crwdne6821746:0",
          "source": "You don’t have any active classes right now."
        },
        "comment": "id:no_active_classes_subtitle\nEmpty-state subtitle for our my classes feature - if you do not have any active classes.\nUsed in the following files:\nFile: /Home/Sections/MyClassesCard/MyClassesCard.js"
      },
      "five_plus_assignments": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821748:0crwdne6821748:0",
          "source": "5+ assignments"
        },
        "comment": "id:five_plus_assignments\nLabel for class that has five or more assignments\nUsed in the following files:\nFile: /MyClasses/ui-utils.js"
      },
      "five_plus_assignments_due_soon": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821750:0crwdne6821750:0",
          "source": "5+ assignments due soon"
        },
        "comment": "id:five_plus_assignments_due_soon\nLabel for class that has five or more assignments that are due soon\nUsed in the following files:\nFile: /MyClasses/ui-utils.js"
      },
      "five_plus_assignments_overdue": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821752:0crwdne6821752:0",
          "source": "5+ assignments overdue"
        },
        "comment": "id:five_plus_assignments_overdue\nLabel for class that has five or more assignments that are overdue\nUsed in the following files:\nFile: /MyClasses/ui-utils.js"
      },
      "courses_count": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821754:0%(num1)scrwdne6821754:0",
          "source": "Courses (%(num1)s)"
        },
        "comment": "id:courses_count\nNumber courses that a teacher has assigned for the student.\nUsed in the following files:\nFile: /ClassDetails/Cards/AssignedCourseMasteryCard.js"
      },
      "courses": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821756:0crwdne6821756:0",
          "source": "Courses"
        },
        "comment": "id:courses\nCourses that a teacher has assigned for the student.\nUsed in the following files:\nFile: /ClassDetails/Cards/AssignedCourseMasteryCard.js"
      },
      "error_loading_class": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821758:0crwdne6821758:0",
          "source": "Error loading class"
        },
        "comment": "id:error_loading_class\nShort screen title describing that there was an error loading the class.\nUsed in the following files:\nFile: /ClassDetails/ClassDetailsScreen.js"
      },
      "add_a_class": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821760:0crwdne6821760:0",
          "source": "Add a class"
        },
        "comment": "id:add_a_class\nTitle for a button that adds a class for the learner.\nUsed in the following files:\nFile: /Home/Sections/MyClassesCard/MyClassesCard.js"
      },
      "last_due_date": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821762:0%(num)scrwdne6821762:0",
          "source": "Last assignment %(num)s"
        },
        "comment": "id:last_due_date\nThe date of the most-recent assignment for a given class.\nUsed in the following files:\nFile: /MyClasses/ui-utils.js"
      },
      "lessons": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388089:0crwdne6388089:0",
          "source": "Lessons"
        },
        "comment": "id:lessons\nTitle of table-of-contents that lists lessons within a unit.\nUsed in the following files:\nFile: /Unit/UnitScreenLargeLayoutLeftHandList.js"
      },
      "course_challenge_card_test_your_knowledge": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388111:0crwdne6388111:0",
          "source": "Test your knowledge of the skills in this course."
        },
        "comment": "id:course_challenge_card_test_your_knowledge\nSubtitle for the course challenge card on the Course screen\nUsed in the following files:\nFile: /Course/Cards/CourseChallengeCard.js"
      },
      "course_challenge": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388113:0crwdne6388113:0",
          "source": "Course challenge"
        },
        "comment": "id:course_challenge\nTitle for course challenge card on the Course screen that directs the user to the challenge for that course\nUsed in the following files:\nFile: /Course/Cards/CourseChallengeCard.js\nFile: /Course/CourseScreen.js\nFile: /Course/UnitList/CourseChallengeCell.js\nFile: /Course/UnitList/index.js"
      },
      "cc_card_last_attempt": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388115:0%(num)scrwdne6388115:0",
          "source": "Last attempt %(num)s"
        },
        "comment": "id:cc_card_last_attempt\nLabel on course challenge card on the Course screen beside the actual previous attempt details\nUsed in the following files:\nFile: /Course/Cards/CourseChallengeCard.js"
      },
      "cc_card_take_challenge_button": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388117:0crwdne6388117:0",
          "source": "Take Course Challenge"
        },
        "comment": "id:cc_card_take_challenge_button\nText for button on the Course Challenge card when the challenge has never been attempted\nUsed in the following files:\nFile: /Course/Cards/CourseChallengeCard.js"
      },
      "cc_card_take_challenge_again_button": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388119:0crwdne6388119:0",
          "source": "Take Course Challenge Again"
        },
        "comment": "id:cc_card_take_challenge_again_button\nText for button on the Course Challenge card when the challenge has been attempted one, or more, times\nUsed in the following files:\nFile: /Course/Cards/CourseChallengeCard.js"
      },
      "course_challenge_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388121:0crwdne6388121:0",
          "source": "Test your understanding"
        },
        "comment": "id:course_challenge_subtitle\nSubtitle below the course_challenge\nUsed in the following files:\nFile: /Course/UnitList/CourseChallengeCell.js"
      },
      "content_update_notification_indication": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388123:0crwdne6388123:0",
          "source": "New content added!"
        },
        "comment": "id:content_update_notification_indication\nBrief text alerting a user that new content was added when landing on a Course Page. This is on both the title of the alert that pops up automatically and on the Unit Card headers of the units with the content.\nUsed in the following files:\nFile: /Course/Cards/UnitCard.js\nFile: /Course/Mastery/contentUpdateNotificationUtils.js"
      },
      "content_update_notification_detail": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388125:0crwdne6388125:0",
          "source": "Because we've added new content for you to learn, your Mastery percentage may have gone down. However, the number of Mastery points you've collected is still the same!"
        },
        "comment": "id:content_update_notification_detail\nMore detailed explanation alerting the user that new content was added, when landing on a Course Page, and that their mastery percentage has gone down. This is in the body of the alert that pops up automatically.\nUsed in the following files:\nFile: /Course/Mastery/contentUpdateNotificationUtils.js"
      },
      "content_update_notification_alert_learn_more_button": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388127:0crwdne6388127:0",
          "source": "Learn more"
        },
        "comment": "id:content_update_notification_alert_learn_more_button\nThis is a title of a button of an alert the users sees when landing on a Course Page that has new content added. Clicking the button takes them to the web where they can learn more.\nUsed in the following files:\nFile: /Course/Mastery/contentUpdateNotificationUtils.js"
      },
      "ok_button": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388129:0crwdne6388129:0",
          "source": "OK"
        },
        "comment": "id:ok_button\nAn OK button for an alert.\nUsed in the following files:\nFile: /Course/Mastery/contentUpdateNotificationUtils.js\nFile: /CoursesPicker/SelectCourses.js\nFile: /Curriculum/CurriculumScreen.js\nFile: /Home/Sections/CurriculumPicker/CurriculumPickerCard.js\nFile: /Home/components/HomeHeader.js"
      },
      "unit_title_prefix": {
        "form": {
          "status": "approved",
          "translated": "crwdns6684686:0%(title)scrwdne6684686:0",
          "source": "Unit: %(title)s"
        },
        "comment": "id:unit_title_prefix\nThe title displayed at the top of our Unit screen. The title of the unit will be inserted into the string, e.g. \"Unit: Negative numbers\"\nUsed in the following files:\nFile: /Unit/index.js"
      },
      "title_profile": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388131:0crwdne6388131:0",
          "source": "Profile"
        },
        "comment": "id:title_profile\nProfile tab title"
      },
      "action_login": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388137:0crwdne6388137:0",
          "source": "Sign in"
        },
        "comment": "id:action_login\nButton text for logging in\nUsed in the following files:\nFile: /Home/Sections/Welcome/WelcomeCard.js\nFile: /Settings/__test__/utils.test.js\nFile: /Settings/utils.js"
      },
      "action_logout": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388139:0crwdne6388139:0",
          "source": "Sign out"
        },
        "comment": "id:action_logout\nButton text for logging out\nUsed in the following files:\nFile: /Settings/__test__/utils.test.js\nFile: /Settings/utils.js"
      },
      "are_you_sure_sign_out": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849516:0crwdne6849516:0",
          "source": "Are you sure you want to sign out?"
        },
        "comment": "id:are_you_sure_sign_out\nAlert title to confirm that a user wants to take an action.\nUsed in the following files:\nFile: /Settings/utils.js"
      },
      "try_again": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388141:0crwdne6388141:0",
          "source": "Try again"
        },
        "comment": "id:try_again\nButton text for reloading\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/AssignmentsScreenList.js\nFile: /Home/components/HomeHeader.js\nFile: /Task/Exercise/ActionBar/Button.js\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "settings_icon": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388149:0crwdne6388149:0",
          "source": "Settings"
        },
        "comment": "id:settings_icon\nSettings Icon Label\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "assignments": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388151:0crwdne6388151:0",
          "source": "Assignments"
        },
        "comment": "id:assignments\nAssignments screen / row header\nUsed in the following files:\nFile: /ClassDetails/Cards/AssignmentsCard.js"
      },
      "upcoming_assignments": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388157:0crwdne6388157:0",
          "source": "Upcoming"
        },
        "comment": "id:upcoming_assignments\nDescription for the upcoming assignments section of the assignments screen\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/index.js"
      },
      "active_goals": {
        "form": {
          "status": "approved",
          "translated": "crwdns6412025:0crwdne6412025:0",
          "source": "Active"
        },
        "comment": "id:active_goals\nTitle for the section of active goals in the assignments screen.\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/index.js"
      },
      "past_assignments": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388159:0crwdne6388159:0",
          "source": "Past"
        },
        "comment": "id:past_assignments\nDescription for the past assignments section of the assignments screen\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/index.js"
      },
      "error_loading_assigned_content_banner": {
        "form": {
          "status": "approved",
          "translated": "crwdns6499505:0crwdne6499505:0",
          "source": "Unable to load latest content. Try again?"
        },
        "comment": "id:error_loading_assigned_content_banner\nText on a banner that is displayed on the Assignments Screen when there was an error loading the data, but there is cached data to use.\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/AssignmentsScreenList.js"
      },
      "back": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388165:0crwdne6388165:0",
          "source": "Back"
        },
        "comment": "id:back\nText for a button that closes an error alert\nUsed in the following files:\nFile: /shared/alert-utils.js\nFile: /shared/components/BackButton.js\nFile: /shared/components/NavBar.js"
      },
      "loading": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388169:0crwdne6388169:0",
          "source": "Loading"
        },
        "comment": "id:loading\nText to indicate that the assignments are loading"
      },
      "nothing_upcoming": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388173:0crwdne6388173:0",
          "source": "You're all set! Nothing's upcoming."
        },
        "comment": "id:nothing_upcoming\nText for the empty state of the upcoming tab in the assignments screen.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_complete": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388177:0crwdne6388177:0",
          "source": "Assignment complete!"
        },
        "comment": "id:assignment_complete\nText for a notification that appears when an assignment is completed.\nUsed in the following files:\nFile: /Assignments/AssignmentNotif/index.js"
      },
      "complete": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388179:0crwdne6388179:0",
          "source": "Complete"
        },
        "comment": "id:complete\nText that replaces the due date of assignments that are complete on the explore tab.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "best_score": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388181:0%(num1)dcrwdne6388181:0",
          "source": "%(num1)d%"
        },
        "comment": "id:best_score\nThe best score, as a percentage (e.g., \"80%\") for completed assignments on the explore tab.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_no_content": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388187:0crwdne6388187:0",
          "source": "This assignment is not available in your language."
        },
        "comment": "id:assignment_no_content\nA title shown for an assignment if it is unavailable.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_no_content_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388189:0crwdne6388189:0",
          "source": "We're sorry, but this assignment is not available in your language. Please switch to your classroom's primary language to access your assignment."
        },
        "comment": "id:assignment_no_content_error\nAn alert shown for assignments that are unavailable in the user's language.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assigned_goal_no_content": {
        "form": {
          "status": "approved",
          "translated": "crwdns6499507:0crwdne6499507:0",
          "source": "This course is not available in your language."
        },
        "comment": "id:assigned_goal_no_content\nA title shown for an assigned goal when it is unavailable in the user's language.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assigned_goal_no_content_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6499509:0crwdne6499509:0",
          "source": "We're sorry, but this course is not available in your language. Please switch to your classroom's primary language."
        },
        "comment": "id:assigned_goal_no_content_error\nAn alert shown for assigned Course Mastery goals that are unavailable in the user's language.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignments_nav_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399437:0crwdne6399437:0",
          "source": "Assignments"
        },
        "comment": "id:assignments_nav_title\nNavigation bar title for the `Assignments` screen.\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/index.js"
      },
      "assignments_nav_title_course_mastery": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399439:0crwdne6399439:0",
          "source": "Courses"
        },
        "comment": "id:assignments_nav_title_course_mastery\nNavigation bar title for the `Courses` screen.\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/index.js"
      },
      "assignments_nav_title_kmap": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399441:0crwdne6399441:0",
          "source": "MAP Accelerator"
        },
        "comment": "id:assignments_nav_title_kmap\nNavigation bar title for the `MAP Accelerator` screen.\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/index.js\nFile: /ClassDetails/Cards/AssignedKmapCard.js"
      },
      "assignments_see_more_button": {
        "form": {
          "status": "approved",
          "translated": "crwdns6515094:0crwdne6515094:0",
          "source": "See more"
        },
        "comment": "id:assignments_see_more_button\nThe title displayed on the button at the bottom of the assignments screen. Used to fetch more assignments.\nUsed in the following files:\nFile: /Assignments/AssignmentsScreen/AssignmentsScreenList.js"
      },
      "assignment_no_upcoming_assignments_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6412027:0crwdne6412027:0",
          "source": "No upcoming assignments"
        },
        "comment": "id:assignment_no_upcoming_assignments_title\nEmpty-state text for the learner's Assignments screen if there are no upcoming assignments.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_no_past_assignments_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399445:0crwdne6399445:0",
          "source": "No past assignments"
        },
        "comment": "id:assignment_no_past_assignments_title\nEmpty-state text for the learner's Assignments screen if there are no past assignments.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_no_past_assignments_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399447:0crwdne6399447:0",
          "source": "Assignments past their due date will appear here soon!"
        },
        "comment": "id:assignment_no_past_assignments_subtitle\nEmpty-state subtitle for the Assignments (Past) screen, if there are no past assignments.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_no_active_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399449:0crwdne6399449:0",
          "source": "No active goals"
        },
        "comment": "id:assignment_course_mastery_no_active_title\nAssignments screen empty-state header when there are no active learning goals for the learner.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_no_active_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399451:0crwdne6399451:0",
          "source": "You don't have any active goals right now. Ask your teacher for a new goal to get started!"
        },
        "comment": "id:assignment_course_mastery_no_active_subtitle\nAssignments screen empty-state detail description when there are no active learning goals for the learner.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_no_past_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399453:0crwdne6399453:0",
          "source": "No past goals"
        },
        "comment": "id:assignment_course_mastery_no_past_title\nAssignments screen empty-state header when there are no past learning goals for the learner.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_no_past_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399455:0crwdne6399455:0",
          "source": "You don't have any complete or past-due goals yet."
        },
        "comment": "id:assignment_course_mastery_no_past_subtitle\nAssignments screen empty-state detail description when there are no past learning goals for the learner.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_why_archived_alert_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6410363:0crwdne6410363:0",
          "source": "Why is this goal archived?"
        },
        "comment": "id:assignment_course_mastery_why_archived_alert_title\nTitle for an alert that helps the learner understand why a goal is archived.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_why_archived_alert_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6410365:0crwdne6410365:0",
          "source": "Your teacher determined this goal was no longer best for you."
        },
        "comment": "id:assignment_course_mastery_why_archived_alert_message\nMessage body for an alert that helps the learner understand that a teacher archived a goal because it was no longer best for the learner..\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_completed_alert_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6410367:0%(num1)scrwdne6410367:0",
          "source": "You completed this goal on %(num1)s."
        },
        "comment": "id:assignment_course_mastery_completed_alert_message\nMessage body for an alert that tells the learner they completed a course-mastery goal on a given date.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_incomplete_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6410369:0crwdne6410369:0",
          "source": "Why is this goal incomplete?"
        },
        "comment": "id:assignment_course_mastery_incomplete_title\nMessage title for an alert that explains why a goal was marked as incomplete.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_incomplete_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6410371:0crwdne6410371:0",
          "source": "The due date for this goal has passed, but you can continue working on it."
        },
        "comment": "id:assignment_course_mastery_incomplete_message\nMessage body for an alert that explains why a goal was marked as incomplete.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_kmap_current_placement": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399461:0%(num1)scrwdne6399461:0",
          "source": "Current placement: %(num1)s"
        },
        "comment": "id:assignment_kmap_current_placement\nSubtitle text on a current MAP placement goal with the placement scores.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_kmap_archived": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399463:0%(num1)scrwdnd6399463:0%(num2)scrwdne6399463:0",
          "source": "Archived %(num1)s: %(num2)s"
        },
        "comment": "id:assignment_kmap_archived\nSubtitle text on an archived MAP placement goal with the placement scores. num1 = date completed (\"Jun 1\"), num2 = score range (\"160-180\")\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_kmap_completed": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399465:0%(num1)scrwdnd6399465:0%(num2)scrwdne6399465:0",
          "source": "Completed %(num1)s: %(num2)s"
        },
        "comment": "id:assignment_kmap_completed\nSubtitle text on a completed MAP placement goal with the placement scores. num1 = date completed (\"Jun 1\"), num2 = score range (\"160-180\")\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_completed": {
        "form": {
          "status": "approved",
          "translated": "crwdns6462723:0%(num1)scrwdne6462723:0",
          "source": "Completed %(num1)s"
        },
        "comment": "id:assignment_course_mastery_completed\nSubtitle text on a completed course-mastery goal. num1 = date completed (\"Jun 1\")\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_archived": {
        "form": {
          "status": "approved",
          "translated": "crwdns6462725:0%(num1)scrwdne6462725:0",
          "source": "Archived %(num1)s"
        },
        "comment": "id:assignment_course_mastery_archived\nSubtitle text on an archived course-mastery goal. num1 = date completed (\"Jun 1\")\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_course_mastery_incomplete": {
        "form": {
          "status": "approved",
          "translated": "crwdns6462729:0%(num1)scrwdne6462729:0",
          "source": "Incomplete %(num1)s"
        },
        "comment": "id:assignment_course_mastery_incomplete\nSubtitle text on an incomplete course-mastery goal. num1 = due date (\"Jun 1\")\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assigned_goals_waiting_empty_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450919:0crwdne6450919:0",
          "source": "Hold tight! Your teacher is setting up your work."
        },
        "comment": "id:assigned_goals_waiting_empty_title\nMAP Goals empty-state header that explains that a teacher is setting up MAP goals for the learner.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assigned_goals_waiting_empty_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450921:0crwdne6450921:0",
          "source": "Your teacher is adding new things to learn, just for you."
        },
        "comment": "id:assigned_goals_waiting_empty_subtitle\nMAP Goals empty-state description that explains that a teacher is setting up MAP goals for the learner.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_kmap_active_empty_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399471:0crwdne6399471:0",
          "source": "No active placements"
        },
        "comment": "id:assignment_kmap_active_empty_title\nMAP Goals empty state header that explains there are no active placement goals assigned to the student.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_kmap_active_empty_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399473:0crwdne6399473:0",
          "source": "You don't have any active placements right now. Ask your teacher for a new placement to get started!"
        },
        "comment": "id:assignment_kmap_active_empty_subtitle\nMAP Goals empty state description that explains there are no active placement goals for the learner, and that they can ask their teacher for new ones.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_kmap_past_empty_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399475:0crwdne6399475:0",
          "source": "No past placements"
        },
        "comment": "id:assignment_kmap_past_empty_title\nMAP Goals empty state header that explains there are no old goals in their history.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_kmap_past_empty_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399477:0crwdne6399477:0",
          "source": "You don't have any complete or past-due placements yet."
        },
        "comment": "id:assignment_kmap_past_empty_subtitle\nMAP Goals empty state description that explains there are no old goals in their history.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_kmap_why_archived_alert_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6410375:0crwdne6410375:0",
          "source": "Why is this archived?"
        },
        "comment": "id:assignment_kmap_why_archived_alert_title\nTitle for an alert that helps the learner understand why MAP materials were archived.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_kmap_why_archived_alert_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6410377:0crwdne6410377:0",
          "source": "Your teacher determined that these materials are no longer best for you."
        },
        "comment": "id:assignment_kmap_why_archived_alert_message\nMessage body for an alert that helps the learner understand that a teacher archived some MAP materials because they were no longer best for the learner..\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "assignment_kmap_completed_alert_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6469345:0%(num1)scrwdne6469345:0",
          "source": "You completed these materials on %(num1)s."
        },
        "comment": "id:assignment_kmap_completed_alert_message\nMessage body for an alert that tells the learner they completed a kmap goal on a given date.\nUsed in the following files:\nFile: /Assignments/ui-utils.js"
      },
      "keep_going": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388193:0crwdne6388193:0",
          "source": "Keep going!"
        },
        "comment": "id:keep_going\nDisplayed when learner does not reach 100%\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "sign_up": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388207:0crwdne6388207:0",
          "source": "Sign up"
        },
        "comment": "id:sign_up\nTitle for the sign up screen.\nUsed in the following files:\nFile: /navigators/Settings.js"
      },
      "sign_up_prompt": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388209:0crwdne6388209:0",
          "source": "Tell us a little bit about yourself to create your account"
        },
        "comment": "id:sign_up_prompt\nThe placeholder text for first name text input.\nUsed in the following files:\nFile: /SignUp/SignUpScreen.js"
      },
      "first_name": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388211:0crwdne6388211:0",
          "source": "First name"
        },
        "comment": "id:first_name\nThe placeholder text for first name text input.\nUsed in the following files:\nFile: /SignUp/SignUpScreen.js"
      },
      "last_name": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388213:0crwdne6388213:0",
          "source": "Last name"
        },
        "comment": "id:last_name\nThe placeholder text for last name text input.\nUsed in the following files:\nFile: /SignUp/SignUpScreen.js"
      },
      "birthday": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388215:0crwdne6388215:0",
          "source": "Birthday"
        },
        "comment": "id:birthday\nThe prompt for entering a birthday.\nUsed in the following files:\nFile: /SignUp/BirthdayInput.js"
      },
      "email_address": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388217:0crwdne6388217:0",
          "source": "Email address"
        },
        "comment": "id:email_address\nThe placeholder text for email address text input.\nUsed in the following files:\nFile: /SignUp/SignUpScreen.js"
      },
      "password": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388219:0crwdne6388219:0",
          "source": "Password"
        },
        "comment": "id:password\nThe placeholder text for password text input.\nUsed in the following files:\nFile: /LogIn/PasswordLogin.js\nFile: /SignUp/PasswordInput.js"
      },
      "password_requirements": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388221:0crwdne6388221:0",
          "source": "Passwords should be at least 8 characters long and should contain a mixture of letters, numbers, and other characters."
        },
        "comment": "id:password_requirements\nThe requirements for a valid password.\nUsed in the following files:\nFile: /SignUp/SignUpScreen.js"
      },
      "create": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388223:0crwdne6388223:0",
          "source": "Create"
        },
        "comment": "id:create\nA button used to create a new account.\nUsed in the following files:\nFile: /SignUp/index.js"
      },
      "default_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388225:0crwdne6388225:0",
          "source": "Sorry, we saw an unexpected error! Please try again later."
        },
        "comment": "id:default_error\nAn unexpected error while trying to sign up.\nUsed in the following files:\nFile: /AddCoaches/index.js\nFile: /ClassDetails/ClassDetailsScreen.js\nFile: /LogIn/shared-buttons.js\nFile: /SignUp/index.js\nFile: /shared/User/queries.js\nFile: /shared/makeScreenDataLoader.js"
      },
      "sign_up_underage_alert_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474347:0crwdne6474347:0",
          "source": "Unable to sign up"
        },
        "comment": "id:sign_up_underage_alert_title\nAlert title when a user is unable to sign up in the app.\nUsed in the following files:\nFile: /SignUp/api-utils.js"
      },
      "sign_up_underage_alert_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474349:0crwdne6474349:0",
          "source": "Unfortunately, you can't sign-up here, but you can try on our website!"
        },
        "comment": "id:sign_up_underage_alert_message\nAlert message when a user is unable to sign up in the app.\nUsed in the following files:\nFile: /SignUp/api-utils.js"
      },
      "continue_on_the_web": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474351:0crwdne6474351:0",
          "source": "Continue on the web"
        },
        "comment": "id:continue_on_the_web\nButton title to continue an action on the Khan Academy website.\nUsed in the following files:\nFile: /SignUp/api-utils.js"
      },
      "log_in_header": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388227:0crwdne6388227:0",
          "source": "A world class education for anyone, anywhere. 100% free."
        },
        "comment": "id:log_in_header\nHeader that encourages the user to create a KA account.\nUsed in the following files:\nFile: /Welcome/index.js"
      },
      "log_in_subheader": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388229:0crwdne6388229:0",
          "source": "We'll keep your progress in sync no matter what phone, device, or computer you're using."
        },
        "comment": "id:log_in_subheader\nText that describes the benefits of logging in / signing up.\nUsed in the following files:\nFile: /Welcome/index.js"
      },
      "continue_with_google": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388231:0crwdne6388231:0",
          "source": "Continue with Google"
        },
        "comment": "id:continue_with_google\nLabel for a button that allows a user to sign up / log in with Google.\nUsed in the following files:\nFile: /Welcome/index.js"
      },
      "continue_with_facebook": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388233:0crwdne6388233:0",
          "source": "Continue with Facebook"
        },
        "comment": "id:continue_with_facebook\nLabel for a button that allows a user to sign up / log in with Facebook.\nUsed in the following files:\nFile: /Welcome/index.js"
      },
      "continue_with_apple": {
        "form": {
          "status": "approved",
          "translated": "crwdns6637198:0crwdne6637198:0",
          "source": "Continue with Apple"
        },
        "comment": "id:continue_with_apple\nLabel for a button that allows a user to sign up / log in with Sign in With Apple.\nUsed in the following files:\nFile: /Welcome/index.js"
      },
      "sign_up_with_email": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388235:0crwdne6388235:0",
          "source": "Sign up with email"
        },
        "comment": "id:sign_up_with_email\nLabel for a button that allows a user to sign up with email.\nUsed in the following files:\nFile: /Welcome/index.js"
      },
      "already_a_user": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388237:0crwdne6388237:0",
          "source": "Already a user?"
        },
        "comment": "id:already_a_user\nPrompt for a sign in button.\nUsed in the following files:\nFile: /Welcome/index.js"
      },
      "welcome": {
        "form": {
          "status": "approved",
          "translated": "crwdns6637200:0crwdne6637200:0",
          "source": "Welcome"
        },
        "comment": "id:welcome\nScreen title for our sign-in and sign-up feature.\nUsed in the following files:\nFile: /navigators/Settings.js"
      },
      "sign_in": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388239:0crwdne6388239:0",
          "source": "Sign in"
        },
        "comment": "id:sign_in\nText for a nav bar or button or that allows the user to sign in.\nUsed in the following files:\nFile: /LogIn/PasswordLogin.js\nFile: /Welcome/index.js\nFile: /navigators/Settings.js"
      },
      "logging_in": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388999:0crwdne6388999:0",
          "source": "Signing in…"
        },
        "comment": "id:logging_in\nTitle text on the screen that lets the user know they're being signed in.\nUsed in the following files:\nFile: /navigators/Root.js\nFile: /shared/native/DeepLinkModule.js"
      },
      "or": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388241:0crwdne6388241:0",
          "source": "Or"
        },
        "comment": "id:or\nText that separates the Google and Facebook log in from password log in.\nUsed in the following files:\nFile: /LogIn/index.js"
      },
      "error_no_facebook_email_address": {
        "form": {
          "status": "approved",
          "translated": "crwdns7089327:0crwdne7089327:0",
          "source": "We couldn't connect your Facebook account because we didn't receive your email address from Facebook."
        },
        "comment": "id:error_no_facebook_email_address\nText displayed to indicate that the facebook account can't be used to login to khan academy, because it doesn't have a verified email address.\nUsed in the following files:\nFile: /shared/User/queries.js"
      },
      "error_incorrect_password": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388975:0crwdne6388975:0",
          "source": "Invalid password"
        },
        "comment": "id:error_incorrect_password\n\nUsed in the following files:\nFile: /shared/User/queries.js"
      },
      "error_login_shadowed_account": {
        "form": {
          "status": "approved",
          "translated": "crwdns6824338:0%(loginMethod)scrwdne6824338:0",
          "source": "You may already have an account! Please log into khanacademy.org/settings/account to link %(loginMethod)s to your existing account."
        },
        "comment": "id:error_login_shadowed_account\nThe error that is displayed when a user signs in using a third-party account (Google, Facebook, Apple) and their third-party account's email address is already in use on another Khan Academy account.\nUsed in the following files:\nFile: /shared/User/queries.js"
      },
      "error_duplicate_username": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821764:0crwdne6821764:0",
          "source": "Oops! We’re unable to sign you in with that username. Please sign in with your email address and then change your username to fix this issue. If you don’t have an email address, contact support for help."
        },
        "comment": "id:error_duplicate_username\nError text that is displayed when a user attempts to log in with a non-unique username.\nUsed in the following files:\nFile: /shared/User/queries.js"
      },
      "error_existing_email": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821766:0crwdne6821766:0",
          "source": "There’s already an account with that email. If it’s yours, log in to continue."
        },
        "comment": "id:error_existing_email\nError text that is displayed when a user attempts to sign up with an existing email.\nUsed in the following files:\nFile: /shared/User/queries.js"
      },
      "error_third_party_login": {
        "form": {
          "status": "approved",
          "translated": "crwdns6824340:0%(num1)scrwdne6824340:0",
          "source": "There was an issue signing in with %(num1)s"
        },
        "comment": "id:error_third_party_login\nNaive-only string (Android) used when an unknown error occurs during login."
      },
      "sign_in_with_apple": {
        "form": {
          "status": "approved",
          "translated": "crwdns6684688:0crwdne6684688:0",
          "source": "Sign in with Apple"
        },
        "comment": "id:sign_in_with_apple\nLabel for a button that allows a user to sign in with Apple.\nUsed in the following files:\nFile: /LogIn/index.js"
      },
      "sign_in_with_google": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388243:0crwdne6388243:0",
          "source": "Sign in with Google"
        },
        "comment": "id:sign_in_with_google\nLabel for a button that allows a user to sign in with Google.\nUsed in the following files:\nFile: /LogIn/index.js"
      },
      "sign_in_with_facebook": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388245:0crwdne6388245:0",
          "source": "Sign in with Facebook"
        },
        "comment": "id:sign_in_with_facebook\nLabel for a button that allows a user to sign in with Facebook.\nUsed in the following files:\nFile: /LogIn/index.js"
      },
      "signing_in_with_clever": {
        "form": {
          "status": "approved",
          "translated": "crwdns6831250:0crwdne6831250:0",
          "source": "Signing in with Clever…"
        },
        "comment": "id:signing_in_with_clever\nText on screen that lets the user know they're being signed in with Clever\nUsed in the following files:\nFile: /LoginInProgress/index.js"
      },
      "sign_in_with_clever_account_not_linked": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849518:0crwdne6849518:0",
          "source": "It looks like you haven't activated your Clever account with Khan Academy yet. Would you like to do that now?"
        },
        "comment": "id:sign_in_with_clever_account_not_linked\nThis message is displayed to the user in an alert when theylog into the app with a Clever account that has not completed activation. The alert has 2 options: Continue and Cancel\nUsed in the following files:\nFile: /shared/native/DeepLinkModule.js"
      },
      "email_address_or_username": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388247:0crwdne6388247:0",
          "source": "Enter an e-mail address or username"
        },
        "comment": "id:email_address_or_username\nDefault text for email / username text input.\nUsed in the following files:\nFile: /LogIn/PasswordLogin.js"
      },
      "forgot_password": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388249:0crwdne6388249:0",
          "source": "Forgot?"
        },
        "comment": "id:forgot_password\nText for forgot password button.\nUsed in the following files:\nFile: /LogIn/PasswordLogin.js"
      },
      "signInDefaultError": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388901:0crwdne6388901:0",
          "source": "There was an issue signing in"
        },
        "comment": "id:signInDefaultError\nAn error message for when the user is trying to login but an error occurs.\nUsed in the following files:\nFile: /LogIn/PasswordLogin.js\nFile: /shared/User/queries.js"
      },
      "signInGenericError": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849520:0%(loginMethod)scrwdne6849520:0",
          "source": "There was an issue signing in with %(loginMethod)s"
        },
        "comment": "id:signInGenericError\nAn error message displayed when there is an issue signing them in with the given service (the service name is provided by the app, such as Facebook, Clever, Google, etc).\nUsed in the following files:\nFile: /shared/User/queries.js\nFile: /shared/native/NavigationModule.js"
      },
      "signInAppleError": {
        "form": {
          "status": "approved",
          "translated": "crwdns6684690:0crwdne6684690:0",
          "source": "There was an issue signing in with Apple"
        },
        "comment": "id:signInAppleError\nAn error message for when the user is trying to login with Apple but an error occurs.\nUsed in the following files:\nFile: /shared/User/queries.js"
      },
      "signInFacebookError": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388903:0crwdne6388903:0",
          "source": "There was an issue signing in with Facebook"
        },
        "comment": "id:signInFacebookError\nAn error message for when the user is trying to login with Facebook but an error occurs.\nUsed in the following files:\nFile: /shared/User/queries.js"
      },
      "signInGoogleError": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388905:0crwdne6388905:0",
          "source": "There was an issue signing in with Google"
        },
        "comment": "id:signInGoogleError\nAn error message for when the user is trying to login with Google but an error occurs.\nUsed in the following files:\nFile: /shared/User/queries.js"
      },
      "teachers_header_text": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388251:0crwdne6388251:0",
          "source": "Teachers"
        },
        "comment": "id:teachers_header_text\nNav bar title for the manage teachers screen.\nUsed in the following files:\nFile: /navigators/Home.js"
      },
      "your_teachers": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388253:0crwdne6388253:0",
          "source": "Your teachers"
        },
        "comment": "id:your_teachers\nHeader text for a list of the user's teachers"
      },
      "add_teacher": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388255:0crwdne6388255:0",
          "source": "Add teacher"
        },
        "comment": "id:add_teacher\nText for a button or screen that allows user to add teachers.\nUsed in the following files:\nFile: /ManageCoaches/EmptyStates.js\nFile: /navigators/Home.js"
      },
      "add_a_teacher": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821768:0crwdne6821768:0",
          "source": "Add a teacher"
        },
        "comment": "id:add_a_teacher\nButton title that allows a user to add a teacher.\nUsed in the following files:\nFile: /ManageCoaches/TeacherList.js"
      },
      "add_teacher_prompt": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388257:0crwdne6388257:0",
          "source": "Enter a class code or your teacher's email address"
        },
        "comment": "id:add_teacher_prompt\nText that prompts the user to add a teacher.\nUsed in the following files:\nFile: /AddCoaches/index.js"
      },
      "cannot_add_teacher": {
        "form": {
          "status": "approved",
          "translated": "crwdns6824342:0crwdne6824342:0",
          "source": "Cannot add teacher"
        },
        "comment": "id:cannot_add_teacher\nTitle for an alert that explains that the learner cannot add a teacher.\nUsed in the following files:\nFile: /ManageCoaches/CoachListScene.js"
      },
      "ask_parent_or_guardian": {
        "form": {
          "status": "approved",
          "translated": "crwdns6824344:0crwdne6824344:0",
          "source": "Ask your parent or guardian for help."
        },
        "comment": "id:ask_parent_or_guardian\nDescription for an alert that explains that a learner can ask their parent or guardian for help.\nUsed in the following files:\nFile: /ManageCoaches/CoachListScene.js"
      },
      "remove_teacher_a11y_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474071:0crwdne6474071:0",
          "source": "Remove teacher"
        },
        "comment": "id:remove_teacher_a11y_label\nAccessibility label for a button that removes a teacher from your list of teachers.\nUsed in the following files:\nFile: /ManageCoaches/TeacherRow.js"
      },
      "class_code_placeholder": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388263:0crwdne6388263:0",
          "source": "e.g. ABC123 or teacher@example.com"
        },
        "comment": "id:class_code_placeholder\nPlaceholder for the input where the user adds a class code.\nUsed in the following files:\nFile: /AddCoaches/index.js"
      },
      "add_teacher_button": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388265:0crwdne6388265:0",
          "source": "Add"
        },
        "comment": "id:add_teacher_button\nText for a button that adds a teacher.\nUsed in the following files:\nFile: /AddCoaches/index.js"
      },
      "class_not_found": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388267:0crwdne6388267:0",
          "source": "Class not found. Please enter another class code or email address."
        },
        "comment": "id:class_not_found\nError message when a user enters an incorrect class code.\nUsed in the following files:\nFile: /AddCoaches/index.js"
      },
      "teacher_not_found": {
        "form": {
          "status": "approved",
          "translated": "crwdns6543215:0crwdne6543215:0",
          "source": "Teacher not found. Please enter another email address or class code."
        },
        "comment": "id:teacher_not_found\nError message when a user enters an incorrect email address.\nUsed in the following files:\nFile: /AddCoaches/index.js"
      },
      "invalid_class_code": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388269:0crwdne6388269:0",
          "source": "Please enter a valid class code or email address."
        },
        "comment": "id:invalid_class_code\nError message when a user enters an invalid class code.\nUsed in the following files:\nFile: /AddCoaches/index.js"
      },
      "couldnt_add_teacher_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388271:0crwdne6388271:0",
          "source": "Couldn't add teacher"
        },
        "comment": "id:couldnt_add_teacher_title\nError message title when a teacher cannot be added\nUsed in the following files:\nFile: /AddCoaches/index.js"
      },
      "teacher_added": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849522:0crwdne6849522:0",
          "source": "Teacher added"
        },
        "comment": "id:teacher_added\nAlert title to confirm that a teacher was added.\nUsed in the following files:\nFile: /AddCoaches/index.js"
      },
      "teacher_added_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849524:0%(email)scrwdne6849524:0",
          "source": "You've added %(email)s to your account - once they add you to a class, you'll see it in the app!"
        },
        "comment": "id:teacher_added_description\nAlert description to confirm that a teacher was added.\nUsed in the following files:\nFile: /AddCoaches/index.js"
      },
      "remove_teacher_button": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388273:0crwdne6388273:0",
          "source": "Remove teacher?"
        },
        "comment": "id:remove_teacher_button\nButton in an alert that allows a user to remove a coach.\nUsed in the following files:\nFile: /ManageCoaches/TeacherRow.js"
      },
      "remove_teacher_warning": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388275:0crwdne6388275:0",
          "source": "If you remove this teacher, you will not receive future assignments from them."
        },
        "comment": "id:remove_teacher_warning\ntext to be shown in an alert when removing a teacher\nUsed in the following files:\nFile: /ManageCoaches/TeacherRow.js"
      },
      "remove": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388277:0crwdne6388277:0",
          "source": "Remove"
        },
        "comment": "id:remove\nButton text to remove a bookmark or a teacher\nUsed in the following files:\nFile: /ManageCoaches/TeacherRow.js\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "no_teachers_header": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388279:0crwdne6388279:0",
          "source": "No teachers"
        },
        "comment": "id:no_teachers_header\nHeader text to show when there are no teachers\nUsed in the following files:\nFile: /ManageCoaches/EmptyStates.js"
      },
      "no_teachers_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388281:0crwdne6388281:0",
          "source": "You haven't added any teachers. After you add a teacher you can receive assignments from them."
        },
        "comment": "id:no_teachers_description\nBody text to show when there are no teachers\nUsed in the following files:\nFile: /ManageCoaches/EmptyStates.js"
      },
      "error_loading_teachers_header": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388283:0crwdne6388283:0",
          "source": "Error loading teachers"
        },
        "comment": "id:error_loading_teachers_header\nHeader text when teacher list fails to load\nUsed in the following files:\nFile: /ManageCoaches/EmptyStates.js\nFile: /ManageCoaches/state/Actions.js"
      },
      "error_loading_teacher_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388285:0crwdne6388285:0",
          "source": "We couldn't update your teachers right now."
        },
        "comment": "id:error_loading_teacher_description\nBody text when teacher list fails to load\nUsed in the following files:\nFile: /ManageCoaches/EmptyStates.js\nFile: /ManageCoaches/state/Actions.js"
      },
      "retry_loading_teachers": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388287:0crwdne6388287:0",
          "source": "Reload"
        },
        "comment": "id:retry_loading_teachers\nButton text to show to reload teacher list\nUsed in the following files:\nFile: /ManageCoaches/EmptyStates.js"
      },
      "my_teachers": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821770:0crwdne6821770:0",
          "source": "My teachers"
        },
        "comment": "id:my_teachers\nSection title for a list of the learner's teachers\nUsed in the following files:\nFile: /ManageCoaches/TeacherList.js"
      },
      "district_assigned_teachers": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821772:0crwdne6821772:0",
          "source": "District-assigned teachers"
        },
        "comment": "id:district_assigned_teachers\nSection title for a list of the learner's district-assigned teachers\nUsed in the following files:\nFile: /ManageCoaches/TeacherList.js"
      },
      "learn_more_sentence": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821774:0crwdne6821774:0",
          "source": "Learn more."
        },
        "comment": "id:learn_more_sentence\nBrief sentence that links out to a webpage that fully explains a feature.\nUsed in the following files:\nFile: /ManageCoaches/SectionFooter.js"
      },
      "manage_teachers_underage_footer": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821776:0crwdne6821776:0",
          "source": "To remove one of these teachers, ask your parent or teacher for help."
        },
        "comment": "id:manage_teachers_underage_footer\nUnderage learners can't remove a teacher; this sentence asks them to ask a parent or teacher for help.\nUsed in the following files:\nFile: /ManageCoaches/TeacherList.js"
      },
      "manage_teachers_district_footer": {
        "form": {
          "status": "approved",
          "translated": "crwdns6821778:0crwdne6821778:0",
          "source": "These classes are managed by your school district."
        },
        "comment": "id:manage_teachers_district_footer\nIf a class is district-managed, then users can't manually remove them. This sentence is displayed below a list of district-managed classes.\nUsed in the following files:\nFile: /ManageCoaches/TeacherList.js"
      },
      "bookmarks": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388291:0crwdne6388291:0",
          "source": "Bookmarks"
        },
        "comment": "id:bookmarks\nTitle for Bookmarks\nUsed in the following files:\nFile: /navigators/Bookmarks.js\nFile: /navigators/Tabs.js"
      },
      "edit": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388293:0crwdne6388293:0",
          "source": "Edit"
        },
        "comment": "id:edit\nLabel for a button that allows a user to edit a list of items.\nUsed in the following files:\nFile: /BookmarksScreen/EditButton.js\nFile: /Home/Sections/MyCourses/MyCoursesCard.js"
      },
      "undownload": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388295:0crwdne6388295:0",
          "source": "Undownload"
        },
        "comment": "id:undownload\nTitle for button which removes single or multiple offline downloads of bookmarks.\nUsed in the following files:\nFile: /BookmarksScreen/BulkEditingBar.js\nFile: /BookmarksScreen/Cells/SwipeableButton.js"
      },
      "delete": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388297:0crwdne6388297:0",
          "source": "Delete"
        },
        "comment": "id:delete\nLabel for a button that allows a user to delete selected items.\nUsed in the following files:\nFile: /BookmarksScreen/BulkEditingBar.js\nFile: /BookmarksScreen/Cells/SwipeableButton.js\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "bookmarks_empty_state_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388299:0crwdne6388299:0",
          "source": "You have no bookmarks."
        },
        "comment": "id:bookmarks_empty_state_title\nTitle for empty state bookmarks Screen\nUsed in the following files:\nFile: /BookmarksScreen/index.js"
      },
      "bookmarks_empty_state_subtitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388301:0crwdne6388301:0",
          "source": "You can download videos in Bookmarks for offline viewing."
        },
        "comment": "id:bookmarks_empty_state_subtitle\nSubtitle for empty state bookmarks Screen\nUsed in the following files:\nFile: /BookmarksScreen/index.js"
      },
      "download_settings": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388303:0crwdne6388303:0",
          "source": "Download settings"
        },
        "comment": "id:download_settings\nLabel for a button that navigates the user to the Download settings page.\nUsed in the following files:\nFile: /BookmarksScreen/DownloadSettings/DownloadSettingsCell.js\nFile: /Settings/utils.js\nFile: /navigators/Bookmarks.js"
      },
      "no_longer_available": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388305:0crwdne6388305:0",
          "source": "No longer available"
        },
        "comment": "id:no_longer_available\nText that indicates that a bookmark's content is no longer available.\nUsed in the following files:\nFile: /BookmarksScreen/Cells/BookmarkCell.js"
      },
      "no_longer_available_body": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388307:0crwdne6388307:0",
          "source": "Our library has updated, and this item is no longer available."
        },
        "comment": "id:no_longer_available_body\nBody for an alert that indicates that a bookmark's content is no longer available.\nUsed in the following files:\nFile: /BookmarksScreen/Cells/BookmarkCell.js"
      },
      "not_available_in": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388309:0%(num)scrwdne6388309:0",
          "source": "Not available in %(num)s"
        },
        "comment": "id:not_available_in\nText that indicates that a bookmark in not available in a specific language.\nUsed in the following files:\nFile: /BookmarksScreen/Cells/BookmarkCell.js"
      },
      "to_view_bookmark_change_langauge": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388311:0crwdne6388311:0",
          "source": "To view this bookmark, please change your language in Settings."
        },
        "comment": "id:to_view_bookmark_change_langauge\nBody of an alert indicating that a bookmark is not available in the current locale.\nUsed in the following files:\nFile: /BookmarksScreen/Cells/BookmarkCell.js"
      },
      "download_automatically": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388313:0crwdne6388313:0",
          "source": "Download automatically"
        },
        "comment": "id:download_automatically\nExplanatory label appearing next to a switch which causes newly-added bookmarks to automatically be downloaded.\nUsed in the following files:\nFile: /BookmarksScreen/DownloadSettings/PreferenceCell.js"
      },
      "download_automatically_subtitle_on": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388315:0crwdne6388315:0",
          "source": "Bookmarks will automatically download when you add them."
        },
        "comment": "id:download_automatically_subtitle_on\nExplanatory label appearing under a switch which causes newly-added bookmarks to automatically be downloaded. This label explains the behavior of when the switch is on.\nUsed in the following files:\nFile: /BookmarksScreen/DownloadSettings/PreferenceCell.js"
      },
      "download_automatically_subtitle_off": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388317:0crwdne6388317:0",
          "source": "Items will not automatically download when you bookmark them."
        },
        "comment": "id:download_automatically_subtitle_off\nExplanatory label appearing under a switch which causes newly-added bookmarks to automatically be downloaded. This label explains the behavior of when the switch is off.\nUsed in the following files:\nFile: /BookmarksScreen/DownloadSettings/PreferenceCell.js"
      },
      "download_over_wifi": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388319:0crwdne6388319:0",
          "source": "Download over Wi-Fi only"
        },
        "comment": "id:download_over_wifi\nExplanatory label appearing next to a switch which causes the app to only download content over WiFi.\nUsed in the following files:\nFile: /BookmarksScreen/DownloadSettings/PreferenceCell.js"
      },
      "download_over_wifi_subtitle_on": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388321:0crwdne6388321:0",
          "source": "Downloads will only occur if you're connected to Wi-Fi."
        },
        "comment": "id:download_over_wifi_subtitle_on\nExplanatory label appearing under a switch which causes the app to only download content over WiFi. This label explains the behavior of when the switch is on\nUsed in the following files:\nFile: /BookmarksScreen/DownloadSettings/PreferenceCell.js"
      },
      "download_over_wifi_subtitle_off": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388323:0crwdne6388323:0",
          "source": "Downloads will be allowed, even when on a cellular connection."
        },
        "comment": "id:download_over_wifi_subtitle_off\nExplanatory label appearing under a switch which causes the app to only download content over WiFi. This label explains the behavior of when the switch is off\nUsed in the following files:\nFile: /BookmarksScreen/DownloadSettings/PreferenceCell.js"
      },
      "download_prefer_HD": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388325:0crwdne6388325:0",
          "source": "Prefer HD-quality downloads"
        },
        "comment": "id:download_prefer_HD\nExplanatory label appearing next to a switch which causes the app to download content in HD quality, if available.\nUsed in the following files:\nFile: /BookmarksScreen/DownloadSettings/PreferenceCell.js"
      },
      "download_prefer_HD_subtitle_on": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388327:0crwdne6388327:0",
          "source": "Videos will be downloaded in a larger, higher-quality format."
        },
        "comment": "id:download_prefer_HD_subtitle_on\nExplanatory label appearing under a switch which causes the app to download content in HD quality, if available. This label explains the behavior of when the switch is on\nUsed in the following files:\nFile: /BookmarksScreen/DownloadSettings/PreferenceCell.js"
      },
      "download_prefer_HD_subtitle_off": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388329:0crwdne6388329:0",
          "source": "Videos will be downloaded in the smaller, lower-quality format."
        },
        "comment": "id:download_prefer_HD_subtitle_off\nExplanatory label appearing under a switch which causes the app to download content in HD quality, if available. This label explains the behavior of when the switch is off\nUsed in the following files:\nFile: /BookmarksScreen/DownloadSettings/PreferenceCell.js"
      },
      "available_space": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388331:0crwdne6388331:0",
          "source": "Available space"
        },
        "comment": "id:available_space\nTitle for cell which shows the available disk space for downloading offline videos\nUsed in the following files:\nFile: /BookmarksScreen/DownloadSettings/AvailableSpaceCell.js"
      },
      "start": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388343:0crwdne6388343:0",
          "source": "Start"
        },
        "comment": "id:start\nText for button that starts an action."
      },
      "error_downloading_bookmark": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388345:0crwdne6388345:0",
          "source": "Error downloading bookmark"
        },
        "comment": "id:error_downloading_bookmark\nTitle for an alert shown when downloading a bookmark fails due to an error.\nUsed in the following files:\nFile: /redux/bookmarks/download/download-utils.js\nFile: /redux/bookmarks/download/thunkActions.js"
      },
      "want_to_retry_download": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388347:0crwdne6388347:0",
          "source": "Want to retry the download?"
        },
        "comment": "id:want_to_retry_download\nError message asking user if they'd like to retry the download for a failed bookmark download.\nUsed in the following files:\nFile: /redux/bookmarks/download/download-utils.js"
      },
      "not_enough_storage_available": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388349:0crwdne6388349:0",
          "source": "There is not enough storage available on this device."
        },
        "comment": "id:not_enough_storage_available\nError message indicating that a bookmark could not be downloaded because there is not enough storage available.\nUsed in the following files:\nFile: /redux/bookmarks/download/download-utils.js"
      },
      "remove_this_bookmark": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388351:0crwdne6388351:0",
          "source": "Remove this bookmark?"
        },
        "comment": "id:remove_this_bookmark\nTitle for alert which appears when you take an action which would both remove a bookmark and remove its offline download in one step.\nUsed in the following files:\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "remove_these_bookmarks": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388353:0crwdne6388353:0",
          "source": "Remove these bookmarks?"
        },
        "comment": "id:remove_these_bookmarks\nTitle for alert which appears when you take an action which would remove multiple bookmarks and their offline downloads in one step.\nUsed in the following files:\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "removing_bookmark_will_remove_downloads": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388355:0crwdne6388355:0",
          "source": "Removing this bookmark will also remove its downloaded content."
        },
        "comment": "id:removing_bookmark_will_remove_downloads\nBody of alert which appears when you take an action which would both remove a bookmarked topic and remove its offline download in one step.\nUsed in the following files:\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "removing_bookmarks_will_remove_downloads": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388357:0crwdne6388357:0",
          "source": "Removing these bookmarks will also remove their downloaded content."
        },
        "comment": "id:removing_bookmarks_will_remove_downloads\nBody of alert which appears when you take an action which would remove multiple bookmarks and their offline downloads in one step.\nUsed in the following files:\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "download_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388359:0crwdne6388359:0",
          "source": "Download bookmark"
        },
        "comment": "id:download_accessibility_label\nAccessibility label for the download bookmark button.\nUsed in the following files:\nFile: /BookmarksScreen/Cells/AccessoryView.js"
      },
      "undownload_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388361:0crwdne6388361:0",
          "source": "Undownload bookmark"
        },
        "comment": "id:undownload_accessibility_label\nAccessibility label for the undownload bookmark button.\nUsed in the following files:\nFile: /BookmarksScreen/Cells/SwipeableButton.js"
      },
      "delete_bookmark_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388363:0crwdne6388363:0",
          "source": "Delete bookmark"
        },
        "comment": "id:delete_bookmark_accessibility_label\nAccessibility label for the delete bookmark button.\nUsed in the following files:\nFile: /BookmarksScreen/Cells/SwipeableButton.js"
      },
      "stop_download_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388365:0crwdne6388365:0",
          "source": "Stop downloading bookmark"
        },
        "comment": "id:stop_download_accessibility_label\nAccessibility label for a button that stops a bookmark download.\nUsed in the following files:\nFile: /BookmarksScreen/Cells/AccessoryView.js"
      },
      "select_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388367:0crwdne6388367:0",
          "source": "Select bookmark"
        },
        "comment": "id:select_accessibility_label\nAccessibility label for a button that selects a bookmark for bulk editing (to delete or undownload bookmarks).\nUsed in the following files:\nFile: /BookmarksScreen/Cells/AccessoryView.js"
      },
      "unselect_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388369:0crwdne6388369:0",
          "source": "Unselect bookmark"
        },
        "comment": "id:unselect_accessibility_label\nAccessibility label for a button that unselects a bookmark for bulk editing (to delete or undownload bookmarks)\nUsed in the following files:\nFile: /BookmarksScreen/Cells/AccessoryView.js"
      },
      "added_bookmark_toast": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388371:0%(num)scrwdne6388371:0",
          "source": "Added \"%(num)s\" to Bookmarks"
        },
        "comment": "id:added_bookmark_toast\nMessage when a bookmark with the given name has been added.\nUsed in the following files:\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "removed_bookmark_toast": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388373:0%(num)scrwdne6388373:0",
          "source": "Removed \"%(num)s\" from Bookmarks"
        },
        "comment": "id:removed_bookmark_toast\nMessage when a bookmark with the given name has been removed.\nUsed in the following files:\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "add_video_bookmark_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388375:0crwdne6388375:0",
          "source": "You added a video to Bookmarks!"
        },
        "comment": "id:add_video_bookmark_title\nTitle for an alert when the user first bookmarks a video.\nUsed in the following files:\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "add_article_bookmark_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388377:0crwdne6388377:0",
          "source": "You added an article to Bookmarks!"
        },
        "comment": "id:add_article_bookmark_title\nTitle for an alert when the user first bookmarks an article."
      },
      "add_topic_bookmark_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388379:0crwdne6388379:0",
          "source": "You added a topic to Bookmarks!"
        },
        "comment": "id:add_topic_bookmark_title\nTitle for an alert when the user first bookmarks a topic.\nUsed in the following files:\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "add_bookmark_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388381:0crwdne6388381:0",
          "source": "Now you can download it for offline use in the Bookmarks tab."
        },
        "comment": "id:add_bookmark_message\nBody of an alert when the user first bookmarks content.\nUsed in the following files:\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "add_bookmark_go_to_bookmarks_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388383:0crwdne6388383:0",
          "source": "Go to Bookmarks"
        },
        "comment": "id:add_bookmark_go_to_bookmarks_label\nAction label for navigating to the bookmarks tab.\nUsed in the following files:\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "add_bookmark_stay_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388385:0crwdne6388385:0",
          "source": "Got it"
        },
        "comment": "id:add_bookmark_stay_label\nAction label for acknowledging bookmark alert.\nUsed in the following files:\nFile: /redux/bookmarks/bookmark-alerts-utils.js"
      },
      "please_connect_to_wifi": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388387:0crwdne6388387:0",
          "source": "Please connect to Wi-Fi"
        },
        "comment": "id:please_connect_to_wifi\nTitle for an alert that is shown when a user tries to download a bookmark while they are not connected to Wi-Fi, but they have the download over wifi only preference enabled.\nUsed in the following files:\nFile: /BookmarksScreen/download-utils.js"
      },
      "please_connect_to_wifi_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388389:0crwdne6388389:0",
          "source": "To download this item, please connect to Wi-Fi, or change your download settings."
        },
        "comment": "id:please_connect_to_wifi_message\nMessage for an alert that is shown when a user tries to download a bookmark while they are not connected to Wi-Fi, but they have the download over wifi only preference enabled.\nUsed in the following files:\nFile: /BookmarksScreen/download-utils.js"
      },
      "settings": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388391:0crwdne6388391:0",
          "source": "Settings"
        },
        "comment": "id:settings\nLabel for a button that navigates the user to the Download settings page.\nUsed in the following files:\nFile: /BookmarksScreen/download-utils.js\nFile: /navigators/Settings.js"
      },
      "setting_download_settings_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388399:0crwdne6388399:0",
          "source": "Saving download setting failed."
        },
        "comment": "id:setting_download_settings_error\nError message indicating that saving a download setting failed.\nUsed in the following files:\nFile: /redux/bookmarks/index.js"
      },
      "saving_bookmarks_failed": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388401:0crwdne6388401:0",
          "source": "Saving bookmarks failed."
        },
        "comment": "id:saving_bookmarks_failed\nError message indicating that saving bookmarks failed.\nUsed in the following files:\nFile: /redux/bookmarks/persist-utils.js"
      },
      "plus_x_more": {
        "form": {
          "status": "approved",
          "translated": "crwdns6853288:0%(num)crwdne6853288:0",
          "source": "+ %(num) more"
        },
        "comment": "id:plus_x_more\nLabel describing how many-more items there are in the list."
      },
      "bookmarks_widget_summary": {
        "form": {
          "status": "approved",
          "translated": "crwdns6853290:0crwdne6853290:0",
          "source": "Quickly access your recent bookmarks."
        },
        "comment": "id:bookmarks_widget_summary\nLabel describing our new Bookmarks widget on iOS."
      },
      "identify_growth_one": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388403:0crwdne6388403:0",
          "source": "Identify your areas for growth in this lesson:"
        },
        "comment": "id:identify_growth_one\nPre-mastery: Prompt to begin a unit quiz with one tutorial.\nUsed in the following files:\nFile: /Unit/Cells/QuizCell.js"
      },
      "identify_growth_multiple": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388405:0crwdne6388405:0",
          "source": "Identify your areas for growth in these lessons:"
        },
        "comment": "id:identify_growth_multiple\nPre-mastery: Prompt to begin a unit quiz with multiple tutorials.\nUsed in the following files:\nFile: /Unit/Cells/QuizCell.js"
      },
      "start_quiz": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388407:0crwdne6388407:0",
          "source": "Start quiz"
        },
        "comment": "id:start_quiz\nButton that allows a user to start a unit quiz."
      },
      "start_quiz_brief": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388409:0crwdne6388409:0",
          "source": "Start"
        },
        "comment": "id:start_quiz_brief\nButton on Topic view that allows a user to start a unit quiz.\nUsed in the following files:\nFile: /Unit/Cells/QuizCell.js"
      },
      "retake_quiz_brief": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388411:0crwdne6388411:0",
          "source": "Redo quiz"
        },
        "comment": "id:retake_quiz_brief\nButton on Topic view that allows a user to retake a unit quiz.\nUsed in the following files:\nFile: /Unit/Cells/QuizCell.js"
      },
      "unit_test_shelf_description_mastered": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388423:0crwdne6388423:0",
          "source": "Great work! You’ve already mastered this unit and can’t level up in any skills nor collect any mastery points."
        },
        "comment": "id:unit_test_shelf_description_mastered\nPrompt to retake a unit test in an already mastered unit.\nUsed in the following files:\nFile: /Unit/Cells/UnitTestCell.js"
      },
      "start_test": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388425:0crwdne6388425:0",
          "source": "Start test"
        },
        "comment": "id:start_test\nButton that allows a user to start a unit test."
      },
      "retake_test": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388427:0crwdne6388427:0",
          "source": "Redo test"
        },
        "comment": "id:retake_test\nButton that allows a user to redo a unit test."
      },
      "start_test_brief": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388429:0crwdne6388429:0",
          "source": "Start"
        },
        "comment": "id:start_test_brief\nButton with brief title that allows a user to start a unit test.\nUsed in the following files:\nFile: /Unit/Cells/UnitTestCell.js"
      },
      "retake_test_brief": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388431:0crwdne6388431:0",
          "source": "Redo"
        },
        "comment": "id:retake_test_brief\nButton with brief title that allows a user to redo a unit test.\nUsed in the following files:\nFile: /Unit/Cells/UnitTestCell.js"
      },
      "unit_test": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388433:0crwdne6388433:0",
          "source": "Unit test"
        },
        "comment": "id:unit_test\nTitle for a unit test\nUsed in the following files:\nFile: /Unit/UnitScreenLargeLayoutLeftHandList.js\nFile: /shared/components/ContentThumbnail.js\nFile: /shared/native/NavigationModule.js"
      },
      "level_up_in_the_skills_above": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388437:0crwdne6388437:0",
          "source": "Level up in the skills above"
        },
        "comment": "id:level_up_in_the_skills_above\nSubtitle on a quiz cell, which improves your mastery-level in the skills above it\nUsed in the following files:\nFile: /Unit/UnitScreenLargeLayoutLeftHandList.js"
      },
      "nice_work": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388439:0crwdne6388439:0",
          "source": "Nice work!"
        },
        "comment": "id:nice_work\nExercise feedback text when a user has answered correctly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "good_work": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388441:0crwdne6388441:0",
          "source": "Good work!"
        },
        "comment": "id:good_work\nExercise feedback text when a user has answered correctly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "great_work": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388443:0crwdne6388443:0",
          "source": "Great work!"
        },
        "comment": "id:great_work\nExercise feedback text when a user has answered correctly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "not_quite": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388445:0crwdne6388445:0",
          "source": "Not quite!"
        },
        "comment": "id:not_quite\nExercise feedback text when a user has answered incorrectly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "give_it_another_shot": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388447:0crwdne6388447:0",
          "source": "Give it another shot!"
        },
        "comment": "id:give_it_another_shot\nExercise feedback text when a user has answered incorrectly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "not_quite_yet": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388449:0crwdne6388449:0",
          "source": "Not quite yet..."
        },
        "comment": "id:not_quite_yet\nExercise feedback text when a user has answered incorrectly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "way_to_go": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388451:0crwdne6388451:0",
          "source": "Way to go!"
        },
        "comment": "id:way_to_go\nExercise feedback text when a user has answered correctly after answering incorrectly.\nUsed in the following files:\nFile: /Assignments/ui-utils.js\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "there_you_go": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388453:0crwdne6388453:0",
          "source": "There you go!"
        },
        "comment": "id:there_you_go\nExercise feedback text when a user has answered correctly after answering incorrectly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "you_improved_your_answer": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388455:0crwdne6388455:0",
          "source": "You improved your answer!"
        },
        "comment": "id:you_improved_your_answer\nExercise feedback text when a user has answered correctly after answering incorrectly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "you_got_it": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388457:0crwdne6388457:0",
          "source": "You got it!"
        },
        "comment": "id:you_got_it\nExercise feedback text when a user has answered correctly after answering incorrectly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "almost_there": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388459:0crwdne6388459:0",
          "source": "You're almost there!"
        },
        "comment": "id:almost_there\nExercise feedback text when a user has not met the question critera.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "step_by_step": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388461:0crwdne6388461:0",
          "source": "Or see a step-by-step solution."
        },
        "comment": "id:step_by_step\nExercise feedback text that allows the user to see the solution.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "you_got_it_onward": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388463:0crwdne6388463:0",
          "source": "You got it. Onward!"
        },
        "comment": "id:you_got_it_onward\nExercise feedback text when a user has answered correctly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "get_help": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388465:0crwdne6388465:0",
          "source": "Get help."
        },
        "comment": "id:get_help\nExercise feedback text that prompts the user to get a hint.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "skip_for_now": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388467:0crwdne6388467:0",
          "source": "Skip for now."
        },
        "comment": "id:skip_for_now\nExercise feedback text that allows the user to skip the question.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "move_on": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388469:0crwdne6388469:0",
          "source": "Or move on."
        },
        "comment": "id:move_on\nExercise feedback text that allows the user to skip the question.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "right_answer": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388471:0crwdne6388471:0",
          "source": "That's the right answer. Keep practicing!"
        },
        "comment": "id:right_answer\nExercise feedback text when a user has answered correctly after answering incorrectly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "stuck_with_it": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388473:0crwdne6388473:0",
          "source": "Great that you stuck with it. Onward!"
        },
        "comment": "id:stuck_with_it\nExercise feedback text when a user has answered correctly after answering incorrectly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "you_got_it_persistence": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388475:0crwdne6388475:0",
          "source": "You got it; keep up the great persistence."
        },
        "comment": "id:you_got_it_persistence\nExercise feedback text when a user has answered correctly after answering incorrectly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "great_persistence": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388477:0crwdne6388477:0",
          "source": "Keep up the great persistence!"
        },
        "comment": "id:great_persistence\nExercise feedback text when a user has answered correctly after answering incorrectly.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "check": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388479:0crwdne6388479:0",
          "source": "Check"
        },
        "comment": "id:check\nText for a button that checks whether a problem attempt is correct.\nUsed in the following files:\nFile: /Task/Exercise/ActionBar/Button.js"
      },
      "next_question": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388481:0crwdne6388481:0",
          "source": "Next question"
        },
        "comment": "id:next_question\nText for a button that moves on to the next question in an exercise.\nUsed in the following files:\nFile: /Task/Exercise/ActionBar/Button.js"
      },
      "check_again": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388483:0crwdne6388483:0",
          "source": "Check again"
        },
        "comment": "id:check_again\nText for a button that allows the user to check a problem attempt again.\nUsed in the following files:\nFile: /Task/Exercise/ActionBar/Button.js"
      },
      "start_over": {
        "form": {
          "status": "approved",
          "translated": "crwdns7499873:0crwdne7499873:0",
          "source": "Start over"
        },
        "comment": "id:start_over\nText for the start over button, which allows the user to restart a task."
      },
      "are_you_sure": {
        "form": {
          "status": "approved",
          "translated": "crwdns7499875:0crwdne7499875:0",
          "source": "Are you sure?"
        },
        "comment": "id:are_you_sure\nHeading for a confirmation modal."
      },
      "start_over_lose_progress_warning": {
        "form": {
          "status": "approved",
          "translated": "crwdns7499877:0crwdne7499877:0",
          "source": "You will lose your progress if you start over."
        },
        "comment": "id:start_over_lose_progress_warning\nWarns the user that they will lose their progress on a task if they start it over."
      },
      "close": {
        "form": {
          "status": "approved",
          "translated": "crwdns7499879:0crwdne7499879:0",
          "source": "Close"
        },
        "comment": "id:close\nText for the button to close a confirmation modal without taking the action it is asking the user to confirm."
      },
      "toggle_scratchpad": {
        "form": {
          "status": "approved",
          "translated": "crwdns7088219:0crwdne7088219:0",
          "source": "Toggle scratchpad"
        },
        "comment": "id:toggle_scratchpad\nAccessibility label for the scratchpad button, a button that hides and shows the scratchpad view during exercises.\nUsed in the following files:\nFile: /Task/Exercise/ActionBar/index.js"
      },
      "show_summary": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388485:0crwdne6388485:0",
          "source": "Show summary"
        },
        "comment": "id:show_summary\nText for a button that allows the user to see the end of task card after completing an exercise.\nUsed in the following files:\nFile: /Task/Exercise/ActionBar/Button.js"
      },
      "stuck_hint": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388487:0crwdne6388487:0",
          "source": "Stuck? Use a hint."
        },
        "comment": "id:stuck_hint\nText that prompts the user to use a hint.\nUsed in the following files:\nFile: /Task/Exercise/Help/GetHintHelpPrompt.js"
      },
      "hint_alert_body": {
        "form": {
          "status": "approved",
          "translated": "crwdns6503887:0crwdne6503887:0",
          "source": "If you use a hint, this problem won't count towards your progress."
        },
        "comment": "id:hint_alert_body\nText that describes the consequence of taking a hint.\nUsed in the following files:\nFile: /Task/Exercise/Help/GetHintHelpPrompt.js"
      },
      "use_hint": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388493:0crwdne6388493:0",
          "source": "Use hint"
        },
        "comment": "id:use_hint\nText that allows the user to see a hint.\nUsed in the following files:\nFile: /Task/Exercise/Help/GetHintHelpPrompt.js"
      },
      "use_hint_question": {
        "form": {
          "status": "approved",
          "translated": "crwdns6503888:0crwdne6503888:0",
          "source": "Use hint?"
        },
        "comment": "id:use_hint_question\nText that asks the user if they would like to take a hint.\nUsed in the following files:\nFile: /Task/Exercise/Help/GetHintHelpPrompt.js"
      },
      "cancel": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388495:0crwdne6388495:0",
          "source": "Cancel"
        },
        "comment": "id:cancel\nText that allows the user to cancel an action.\nUsed in the following files:\nFile: /Curriculum/CurriculumScreen.js\nFile: /ManageCoaches/TeacherRow.js\nFile: /Settings/AppIconPicker.js\nFile: /Settings/utils.js\nFile: /SignUp/api-utils.js\nFile: /Task/Exercise/Help/GetHintHelpPrompt.js\nFile: /Task/Exercise/Scratchpad/index.js\nFile: /navigators/Home.js\nFile: /navigators/Settings.js\nFile: /redux/bookmarks/bookmark-alerts-utils.js\nFile: /shared/native/DeepLinkModule.js\nFile: /shared/native/NavigationModule.js"
      },
      "exercise_watch_a_video": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388497:0crwdne6388497:0",
          "source": "Watch a video"
        },
        "comment": "id:exercise_watch_a_video\nText that prompts the user to watch a video.\nUsed in the following files:\nFile: /Task/Exercise/Help/RelatedVideos.js"
      },
      "exercise_error_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388499:0crwdne6388499:0",
          "source": "Error making task progress"
        },
        "comment": "id:exercise_error_title\nTitle for an alert that is displayed upon error during an exercise.\nUsed in the following files:\nFile: /Task/Exercise/state/error-utils.js"
      },
      "exercise_error_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388501:0crwdne6388501:0",
          "source": "We encountered an error while attempting to make progress in this task; please try again later."
        },
        "comment": "id:exercise_error_message\nMessage for an alert that is displayed upon error during an exercise.\nUsed in the following files:\nFile: /Task/Exercise/state/error-utils.js\nFile: /Task/Exercise/state/mastery.js"
      },
      "exercise_error_accept": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388503:0crwdne6388503:0",
          "source": "Okay"
        },
        "comment": "id:exercise_error_accept\nAction label to exit an exercise after an error has occurred.\nUsed in the following files:\nFile: /Task/Exercise/state/error-utils.js"
      },
      "error_loading_exercise": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388505:0crwdne6388505:0",
          "source": "Could not load this exercise. Try again."
        },
        "comment": "id:error_loading_exercise\nText that explains that the exercise could not be loaded."
      },
      "error_loading_exercise_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6499679:0crwdne6499679:0",
          "source": "Oh no!"
        },
        "comment": "id:error_loading_exercise_title\nScreen header-title for an exercise that could not be loaded.\nUsed in the following files:\nFile: /Task/index.js"
      },
      "error_loading_exercise_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6499681:0crwdne6499681:0",
          "source": "We weren't able to load this exercise."
        },
        "comment": "id:error_loading_exercise_description\nScreen description for an exercise that could not be loaded.\nUsed in the following files:\nFile: /Task/index.js"
      },
      "checking": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388507:0crwdne6388507:0",
          "source": "Checking..."
        },
        "comment": "id:checking\nButton text that indicates a problem attempt is being checked.\nUsed in the following files:\nFile: /Task/Exercise/ActionBar/Button.js"
      },
      "loading_completion_data": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388509:0crwdne6388509:0",
          "source": "Loading…"
        },
        "comment": "id:loading_completion_data\nButton text that indicates completion data is loading.\nUsed in the following files:\nFile: /Task/Exercise/ActionBar/Button.js"
      },
      "exercise_not_available": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388511:0crwdne6388511:0",
          "source": "This exercise is not available in our app; please complete it on the web."
        },
        "comment": "id:exercise_not_available\nModal text that indicates the exercise cannot be completed in the app.\nUsed in the following files:\nFile: /Task/Exercise/state/online.js"
      },
      "hide_scratchpad": {
        "form": {
          "status": "approved",
          "translated": "crwdns6824346:0crwdne6824346:0",
          "source": "Hide scratchpad"
        },
        "comment": "id:hide_scratchpad\nTitle for a button that hides the scratchpad\nUsed in the following files:\nFile: /Task/Exercise/Scratchpad/Toolbar.js"
      },
      "erase_drawing": {
        "form": {
          "status": "approved",
          "translated": "crwdns6824348:0crwdne6824348:0",
          "source": "Erase drawing?"
        },
        "comment": "id:erase_drawing\nTitle for an alert confirming that the learner wants to erase the entire drawing.\nUsed in the following files:\nFile: /Task/Exercise/Scratchpad/index.js"
      },
      "erase": {
        "form": {
          "status": "approved",
          "translated": "crwdns6824350:0crwdne6824350:0",
          "source": "Erase"
        },
        "comment": "id:erase\nButton title to erase something.\nUsed in the following files:\nFile: /Task/Exercise/Scratchpad/index.js"
      },
      "a11y_add": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849526:0crwdne6849526:0",
          "source": "Add"
        },
        "comment": "id:a11y_add\nAccessibility label for the \"add\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_subtract": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849528:0crwdne6849528:0",
          "source": "Subtract"
        },
        "comment": "id:a11y_subtract\nAccessibility label for the \"subtract\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_negative": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849530:0crwdne6849530:0",
          "source": "Negative"
        },
        "comment": "id:a11y_negative\nAccessibility label for the \"negative\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_multiply": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849532:0crwdne6849532:0",
          "source": "Multiply"
        },
        "comment": "id:a11y_multiply\nAccessibility label for the \"multiply\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_divide": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849534:0crwdne6849534:0",
          "source": "Divide"
        },
        "comment": "id:a11y_divide\nAccessibility label for the \"divide\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_decimal": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849536:0crwdne6849536:0",
          "source": "Decimal"
        },
        "comment": "id:a11y_decimal\nAccessibility label for the \"decimal\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_percent": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849538:0crwdne6849538:0",
          "source": "Percent"
        },
        "comment": "id:a11y_percent\nAccessibility label for the \"percent\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_dot": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849540:0crwdne6849540:0",
          "source": "Dot"
        },
        "comment": "id:a11y_dot\nAccessibility label for the \"dot-multiply\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_equals": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849542:0crwdne6849542:0",
          "source": "Equals"
        },
        "comment": "id:a11y_equals\nAccessibility label for the \"equals\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_not_equal": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849544:0crwdne6849544:0",
          "source": "Not equal"
        },
        "comment": "id:a11y_not_equal\nAccessibility label for the \"not equal\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_greater_than": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849546:0crwdne6849546:0",
          "source": "Greater than"
        },
        "comment": "id:a11y_greater_than\nAccessibility label for the \"greater than\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_less_than": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849548:0crwdne6849548:0",
          "source": "Less than"
        },
        "comment": "id:a11y_less_than\nAccessibility label for the \"less than\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_greater_than_or_equal_to": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849550:0crwdne6849550:0",
          "source": "Greater than or equal to"
        },
        "comment": "id:a11y_greater_than_or_equal_to\nAccessibility label for the \"greater than or equal to\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_less_than_or_equal_to": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849552:0crwdne6849552:0",
          "source": "Less than or equal to"
        },
        "comment": "id:a11y_less_than_or_equal_to\nAccessibility label for the \"less than or equal to\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_fraction": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849554:0crwdne6849554:0",
          "source": "Fraction"
        },
        "comment": "id:a11y_fraction\nAccessibility label for the \"fraction\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_mixed_fraction": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849556:0crwdne6849556:0",
          "source": "Mixed fraction"
        },
        "comment": "id:a11y_mixed_fraction\nAccessibility label for the \"mixed fraction\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_exponent": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849558:0crwdne6849558:0",
          "source": "Exponent"
        },
        "comment": "id:a11y_exponent\nAccessibility label for the \"exponent\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_squared": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849560:0crwdne6849560:0",
          "source": "Squared"
        },
        "comment": "id:a11y_squared\nAccessibility label for the \"squared\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_cubed": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849562:0crwdne6849562:0",
          "source": "Cubed"
        },
        "comment": "id:a11y_cubed\nAccessibility label for the \"cubed\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_square_root": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849564:0crwdne6849564:0",
          "source": "Square root"
        },
        "comment": "id:a11y_square_root\nAccessibility label for the \"square root\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_cube_root": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849566:0crwdne6849566:0",
          "source": "Cube root"
        },
        "comment": "id:a11y_cube_root\nAccessibility label for the \"cube root\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_radical": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849568:0crwdne6849568:0",
          "source": "Radical"
        },
        "comment": "id:a11y_radical\nAccessibility label for the \"radical\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_open_parenthesis": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849570:0crwdne6849570:0",
          "source": "Open parenthesis"
        },
        "comment": "id:a11y_open_parenthesis\nAccessibility label for the \"Open parenthesis\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_close_parenthesis": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849572:0crwdne6849572:0",
          "source": "Close parenthesis"
        },
        "comment": "id:a11y_close_parenthesis\nAccessibility label for the \"close parenthesis\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_natural_log": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849574:0crwdne6849574:0",
          "source": "Natural log"
        },
        "comment": "id:a11y_natural_log\nAccessibility label for the \"natural log\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_log": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849576:0crwdne6849576:0",
          "source": "Log"
        },
        "comment": "id:a11y_log\nAccessibility label for the \"log\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_log_n": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849578:0crwdne6849578:0",
          "source": "Log N"
        },
        "comment": "id:a11y_log_n\nAccessibility label for the \"log n\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_sine": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849580:0crwdne6849580:0",
          "source": "Sine"
        },
        "comment": "id:a11y_sine\nAccessibility label for the \"sine\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_cosine": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849582:0crwdne6849582:0",
          "source": "Cosine"
        },
        "comment": "id:a11y_cosine\nAccessibility label for the \"cosine\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_tangent": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849584:0crwdne6849584:0",
          "source": "Tangent"
        },
        "comment": "id:a11y_tangent\nAccessibility label for the \"tangent\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_pi": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849586:0crwdne6849586:0",
          "source": "Pi"
        },
        "comment": "id:a11y_pi\nAccessibility label for the \"pi\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_theta": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849588:0crwdne6849588:0",
          "source": "Theta"
        },
        "comment": "id:a11y_theta\nAccessibility label for the \"theta\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_exit_parenthesis": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849590:0crwdne6849590:0",
          "source": "Exit parenthesis"
        },
        "comment": "id:a11y_exit_parenthesis\nAccessibility label for the \"exit parenthesis\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_exit_exponent": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849592:0crwdne6849592:0",
          "source": "Exit exponent"
        },
        "comment": "id:a11y_exit_exponent\nAccessibility label for the \"exit exponent\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_exit_base": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849594:0crwdne6849594:0",
          "source": "Exit base"
        },
        "comment": "id:a11y_exit_base\nAccessibility label for the \"exit base\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_enter_numerator": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849596:0crwdne6849596:0",
          "source": "Enter numerator"
        },
        "comment": "id:a11y_enter_numerator\nAccessibility label for the \"enter numerator\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_exit_numerator": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849598:0crwdne6849598:0",
          "source": "Exit numerator"
        },
        "comment": "id:a11y_exit_numerator\nAccessibility label for the \"exit numerator\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_exit_denominator": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849600:0crwdne6849600:0",
          "source": "Exit denominator"
        },
        "comment": "id:a11y_exit_denominator\nAccessibility label for the \"exit denominator\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_zero": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849602:0crwdne6849602:0",
          "source": "Zero"
        },
        "comment": "id:a11y_zero\nAccessibility label for the \"zero\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_one": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849604:0crwdne6849604:0",
          "source": "One"
        },
        "comment": "id:a11y_one\nAccessibility label for the \"one\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_two": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849606:0crwdne6849606:0",
          "source": "Two"
        },
        "comment": "id:a11y_two\nAccessibility label for the \"two\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_three": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849608:0crwdne6849608:0",
          "source": "Three"
        },
        "comment": "id:a11y_three\nAccessibility label for the \"three\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_four": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849610:0crwdne6849610:0",
          "source": "Four"
        },
        "comment": "id:a11y_four\nAccessibility label for the \"four\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_five": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849612:0crwdne6849612:0",
          "source": "Five"
        },
        "comment": "id:a11y_five\nAccessibility label for the \"five\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_six": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849614:0crwdne6849614:0",
          "source": "Six"
        },
        "comment": "id:a11y_six\nAccessibility label for the \"six\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_seven": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849616:0crwdne6849616:0",
          "source": "Seven"
        },
        "comment": "id:a11y_seven\nAccessibility label for the \"seven\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_eight": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849618:0crwdne6849618:0",
          "source": "Eight"
        },
        "comment": "id:a11y_eight\nAccessibility label for the \"eight\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_nine": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849620:0crwdne6849620:0",
          "source": "Nine"
        },
        "comment": "id:a11y_nine\nAccessibility label for the \"nine\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js"
      },
      "a11y_up": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849622:0crwdne6849622:0",
          "source": "Up"
        },
        "comment": "id:a11y_up\nAccessibility label for the \"up\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/DirectionalPadButton.js"
      },
      "a11y_down": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849624:0crwdne6849624:0",
          "source": "Down"
        },
        "comment": "id:a11y_down\nAccessibility label for the \"down\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/DirectionalPadButton.js"
      },
      "a11y_left": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849626:0crwdne6849626:0",
          "source": "Left"
        },
        "comment": "id:a11y_left\nAccessibility label for the \"left\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/DirectionalPadButton.js"
      },
      "a11y_right": {
        "form": {
          "status": "approved",
          "translated": "crwdns6849628:0crwdne6849628:0",
          "source": "Right"
        },
        "comment": "id:a11y_right\nAccessibility label for the \"right\" button on our keypad\nUsed in the following files:\nFile: /Task/Exercise/Keypad/DirectionalPadButton.js"
      },
      "sot_ready_to_practice": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474129:0crwdne6474129:0",
          "source": "Ready to practice?"
        },
        "comment": "id:sot_ready_to_practice\nScreen title shown before starting a practice exercise.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "lets_go": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474131:0crwdne6474131:0",
          "source": "Let's go"
        },
        "comment": "id:lets_go\nButton title to start an exercise, quiz, or unit test.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_warning_cannot_level_up_with_practice": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474133:0crwdne6474133:0",
          "source": "You can’t level up with practice anymore. Take a unit test or course challenge to reach mastery!"
        },
        "comment": "id:sot_warning_cannot_level_up_with_practice\nWarning shown before practicing an exercise, that the learner should take a unit test or course challenge instead, because they cannot level-up by doing a practice exercise for this skill.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_warning_already_mastered": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474135:0crwdne6474135:0",
          "source": "You’re already a master of this skill — there are no more levels to reach on this practice!"
        },
        "comment": "id:sot_warning_already_mastered\nWarning shown before practicing an exercie, that the learner is already mastered and cannot level-up in practice.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "eot_keep_going_keep_growing": {
        "form": {
          "status": "approved",
          "translated": "crwdns6508123:0crwdne6508123:0",
          "source": "Keep going. Keep growing. 💪"
        },
        "comment": "id:eot_keep_going_keep_growing\nEnd-of-task card title, often used when the mastery level did not change.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "eot_leveled_up": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474139:0crwdne6474139:0",
          "source": "🔥 Awesome! You leveled up! 🔥"
        },
        "comment": "id:eot_leveled_up\nScreen title to celebrate a level-up in mastery skill at the end of a practice task. The fire-emoji should be at the start and end of the string.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "eot_keep_practicing": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474141:0crwdne6474141:0",
          "source": "📚 Keep on practicing!"
        },
        "comment": "id:eot_keep_practicing\nScreen title to encourage a learner to keep trying on a practice task; it is shown if the learner lost a mastery level or did not level up. The book-emoji should be at the start of the string.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "eot_leveled_down_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474143:0crwdne6474143:0",
          "source": "You leveled down this time.  Not to worry — keep practicing this skill and you’ll ace it next time!"
        },
        "comment": "id:eot_leveled_down_description\nExplanatory text shown when a learner lost a mastery level after practicing a skill.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "eot_level_did_not_change_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474145:0crwdne6474145:0",
          "source": "Your level stayed the same.  Keep on practicing and you’ll level up in no time!"
        },
        "comment": "id:eot_level_did_not_change_description\nExplanatory text shown when there was no change to your mastery level after an exercise.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "eot_take_unit_test_or_course_challenge": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474147:0crwdne6474147:0",
          "source": "Take a unit test or course challenge to level up."
        },
        "comment": "id:eot_take_unit_test_or_course_challenge\nExplanatory text that tells the learner to take a unit test or course challenge to improve their mastery level.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "eot_energy_points_short_format": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474149:0%(num1)scrwdne6474149:0",
          "source": "%(num1)s energy pts"
        },
        "comment": "id:eot_energy_points_short_format\nSummary information about the number of energy points earned from an activity. The word `points` is truncated to `pts` in english, to save space, so if you have a shorter version of the word `points` available, please use it!\nUsed in the following files:\nFile: /Task/SkillsListTaskCard/utils.js"
      },
      "eot_fraction_correct": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474151:0%(num1)dcrwdnd6474151:0%(num2)dcrwdne6474151:0",
          "source": "%(num1)d/%(num2)d correct"
        },
        "comment": "id:eot_fraction_correct\nSummary information about the fraction of questions-correct divided by the questions-incorrect, eg `4/5 correct`. num1 = number correct, num2 = total.\nUsed in the following files:\nFile: /Task/SkillsListTaskCard/utils.js"
      },
      "sot_time_for_a_quiz": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474153:0crwdne6474153:0",
          "source": "Time for a quiz?"
        },
        "comment": "id:sot_time_for_a_quiz\nScreen title shown before a learner takes a quiz.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_quiz_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474155:0crwdne6474155:0",
          "source": "Get ready for questions on the unit so far."
        },
        "comment": "id:sot_quiz_description\nScreen description shown before a learner takes a quiz, explaining that the quiz contains questions from the unit so-far.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_warning_quiz_already_proficient_or_mastered": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474159:0crwdne6474159:0",
          "source": "You’re already proficient or a master of these skills — there are no more levels to reach!"
        },
        "comment": "id:sot_warning_quiz_already_proficient_or_mastered\nWarning banner shown on start-of-task screen for a quiz if the learner is already proficient and cannot level-up from taking the quiz.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_warning_unit_test_already_mastered": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474161:0crwdne6474161:0",
          "source": "You already mastered these skills — there are no more levels to reach!"
        },
        "comment": "id:sot_warning_unit_test_already_mastered\nWarning banner shown on start-of-task screen for a unit test if the learner is already mastered and cannot level-up from taking the quiz.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_unit_test_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474163:0crwdne6474163:0",
          "source": "All set for the unit test?"
        },
        "comment": "id:sot_unit_test_title\nScreen title shown before a learner takes a unit test.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_unit_test_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474165:0crwdne6474165:0",
          "source": "Welcome to the unit test — where you get to test your skills for the entire unit!"
        },
        "comment": "id:sot_unit_test_description\nScreen description shown before a learner takes a unit test, explaining that the test will cover everything in the unit.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_course_challenge_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474353:0crwdne6474353:0",
          "source": "Ready for the Course Challenge?"
        },
        "comment": "id:sot_course_challenge_title\nScreen title shown before a learner takes a course challenge.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_course_challenge_description_1": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474355:0crwdne6474355:0",
          "source": "That's right. Test your course skills in a challenge!"
        },
        "comment": "id:sot_course_challenge_description_1\nScreen description (part 1 of 2) shown before a learner takes a course challenge.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_course_challenge_description_2": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474357:0crwdne6474357:0",
          "source": "Put everything you've learned to the test and show what you know."
        },
        "comment": "id:sot_course_challenge_description_2\nScreen description (part 2 of 2) shown before a learner takes a course challenge.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_minutes_estimate": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474359:0%(num1)scrwdnd6474359:0%(num2)scrwdne6474359:0",
          "source": "%(num1)s–%(num2)s minutes"
        },
        "comment": "id:sot_minutes_estimate\nTime estimate for an exercise, quiz, or unit test, e.g. `4-6 minutes`.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "sot_exercise_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474179:0crwdne6474179:0",
          "source": "Okay, show us what you can do!"
        },
        "comment": "id:sot_exercise_description\nDescriptive text before an exercise that encourages the learner to show us what they know!\nUsed in the following files:\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "eot_summary_leveled_up": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474167:0crwdne6474167:0",
          "source": "Leveled up"
        },
        "comment": "id:eot_summary_leveled_up\nSection title for the number-of-skills leveled-up during a quiz or unit test.\nUsed in the following files:\nFile: /Task/SkillsListTaskCard/SkillsListTaskCardHeader.js"
      },
      "eot_summary_leveled_down": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474169:0crwdne6474169:0",
          "source": "Leveled down"
        },
        "comment": "id:eot_summary_leveled_down\nSection title for the number-of-skills leveled-down during a quiz or unit test.\nUsed in the following files:\nFile: /Task/SkillsListTaskCard/SkillsListTaskCardHeader.js"
      },
      "eot_summary_no_change": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474171:0crwdne6474171:0",
          "source": "No change"
        },
        "comment": "id:eot_summary_no_change\nSection title for the number-of-skills that did not change during a quiz or unit test.\nUsed in the following files:\nFile: /Task/SkillsListTaskCard/SkillsListTaskCardHeader.js"
      },
      "eot_summary_not_tested": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474173:0crwdne6474173:0",
          "source": "Not tested"
        },
        "comment": "id:eot_summary_not_tested\nSection title for the number-of-skills that were not tested in a unit test.\nUsed in the following files:\nFile: /Task/SkillsListTaskCard/SkillsListTaskCardHeader.js"
      },
      "eot_summary_overall": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474175:0crwdne6474175:0",
          "source": "Overall"
        },
        "comment": "id:eot_summary_overall\nSection title for summary information about X/Y correct and energy-points-earned in a quiz or unit test.\nUsed in the following files:\nFile: /Task/SkillsListTaskCard/SkillsListTaskCardHeader.js"
      },
      "eot_summary_not_tested_explanation": {
        "form": {
          "status": "approved",
          "translated": "crwdns6474177:0crwdne6474177:0",
          "source": "Some skills from the unit did not appear on this test. Re-take the test for the chance to level up on those skills."
        },
        "comment": "id:eot_summary_not_tested_explanation\nText in an alert that explains that some skills were not included in the unit test, and that the learner can repeat the unit test to try and have those skills covered.\nUsed in the following files:\nFile: /Task/SkillsListTaskCard/SkillsListTaskCardHeader.js"
      },
      "skill_level_changes": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388561:0crwdne6388561:0",
          "source": "Skill level changes"
        },
        "comment": "id:skill_level_changes\nSubtitle for skill level changes on the start of task card.\nUsed in the following files:\nFile: /Task/SkillsListTaskCard/index.js"
      },
      "course": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388569:0crwdne6388569:0",
          "source": "course"
        },
        "comment": "id:course\nPlaceholder in the following string if we do not have the course name: Take another Unit test to practice again or go to the %(course)s page to start work on the next unit."
      },
      "unit_possible_mastery_points": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388573:0%(num1)dcrwdnd6388573:0%(num2)dcrwdne6388573:0",
          "source": "%(num1)d/%(num2)d possible mastery points"
        },
        "comment": "id:unit_possible_mastery_points\nLabel for indicating how many mastery points (out of the total possible) have been earned for a unit, shown on the unit card on the course page.\nUsed in the following files:\nFile: /Course/Cards/UnitCard.js"
      },
      "unit_mastery_unavailable": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388575:0crwdne6388575:0",
          "source": "Mastery unavailable"
        },
        "comment": "id:unit_mastery_unavailable\nLabel for indicating that mastery is unavailable for a unit, shown on the unit card on the course page.\nUsed in the following files:\nFile: /Course/Cards/UnitCard.js"
      },
      "unit_mastery_unavailable_detail": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388577:0crwdne6388577:0",
          "source": "Unit mastery is not available for this unit, but you can still watch videos, practice, and take quizzes and tests."
        },
        "comment": "id:unit_mastery_unavailable_detail\nText that explains unit mastery is not available for a unit, shown on the unit card on the course page when the question-mark icon is clicked.\nUsed in the following files:\nFile: /Course/Cards/UnitCard.js"
      },
      "article": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388579:0crwdne6388579:0",
          "source": "Article"
        },
        "comment": "id:article\nThe text under a content item thumbnail indicating it is an article\nUsed in the following files:\nFile: /shared/components/ContentThumbnail.js"
      },
      "exercise": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388581:0crwdne6388581:0",
          "source": "Exercise"
        },
        "comment": "id:exercise\nThe text under a content item thumbnail indicating it is an exercise\nUsed in the following files:\nFile: /shared/components/ContentThumbnail.js"
      },
      "quiz": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388583:0crwdne6388583:0",
          "source": "Quiz"
        },
        "comment": "id:quiz\nThe text under a content item thumbnail indicating it is a quiz\nUsed in the following files:\nFile: /shared/components/ContentThumbnail.js"
      },
      "course_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388587:0crwdne6388587:0",
          "source": "Unable to load course. Check your connection and tap to try again."
        },
        "comment": "id:course_error\nError displayed when the data required to display a course screen could not be fetched.\nUsed in the following files:\nFile: /Course/streaming.js"
      },
      "topic_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388589:0crwdne6388589:0",
          "source": "Unable to load unit. Check your connection and tap to try again."
        },
        "comment": "id:topic_error\nError displayed when the data required to display a unit screen could not be fetched.\nUsed in the following files:\nFile: /Unit/index.js"
      },
      "video_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388591:0crwdne6388591:0",
          "source": "Unable to load video.\nCheck your connection\nand tap to try again."
        },
        "comment": "id:video_error\nError displayed when the data required to display a video screen could not be fetched.\nUsed in the following files:\nFile: /Video/streaming.js"
      },
      "unit_test_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388593:0crwdne6388593:0",
          "source": "Unable to load this unit test.\nCheck your connection\nand tap to try again."
        },
        "comment": "id:unit_test_error\nError displayed when the data required to display a unit test could not be fetched.\nUsed in the following files:\nFile: /Task/Quiz/index.js\nFile: /Task/UnitTest/index.js"
      },
      "course_challenge_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388597:0crwdne6388597:0",
          "source": "Unable to load this course challenge.\nCheck your connection\nand tap to try again."
        },
        "comment": "id:course_challenge_error\nError displayed when the data required to display a course challenge could not be fetched.\nUsed in the following files:\nFile: /Task/CourseChallenge/index.js"
      },
      "exercise_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399485:0crwdne6399485:0",
          "source": "Unable to load this exercise.\nCheck your connection\nand tap to try again."
        },
        "comment": "id:exercise_error\nError displayed when the data required to display a exercise could not be fetched.\nUsed in the following files:\nFile: /Task/Exercise/index.js"
      },
      "mastery_challenge_error": {
        "form": {
          "status": "approved",
          "translated": "crwdns6543256:0crwdne6543256:0",
          "source": "Unable to load this mastery challenge.\nCheck your connection\nand tap to try again."
        },
        "comment": "id:mastery_challenge_error\nError displayed when the data required to display a mastery challenge could not be fetched.\nUsed in the following files:\nFile: /Task/MasteryChallenge/index.js"
      },
      "due_tomorrow": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388605:0%(num)scrwdne6388605:0",
          "source": "Due tomorrow, %(num)s"
        },
        "comment": "id:due_tomorrow\nindicates the assignment is due tomorrow, including the time\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "due_today": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388607:0%(num)scrwdne6388607:0",
          "source": "Due today, %(num)s"
        },
        "comment": "id:due_today\nindicates the assignment is due today, including the time\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "due_date": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388609:0%(num1)scrwdnd6388609:0%(num2)scrwdne6388609:0",
          "source": "Due %(num1)s, %(num2)s"
        },
        "comment": "id:due_date\nindicates the assignment is due on a given date, including the time\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "late_due_today": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388611:0crwdne6388611:0",
          "source": "Late, due today"
        },
        "comment": "id:late_due_today\nindicates the assignment is late, and was due today\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "late_due_yesterday": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388613:0crwdne6388613:0",
          "source": "Late, due yesterday"
        },
        "comment": "id:late_due_yesterday\nindicates the assignment is late, and was due yesterday\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "late_due_date": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388615:0%(num)scrwdne6388615:0",
          "source": "Late, due %(num)s"
        },
        "comment": "id:late_due_date\nindicates the assignment is late, and was due on a given date\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "tomorrow": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388619:0%(num)scrwdne6388619:0",
          "source": "Tomorrow, %(num)s"
        },
        "comment": "id:tomorrow\nIndicates the assignment is due tomorrow, including the time.\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "today": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388621:0%(num)scrwdne6388621:0",
          "source": "Today, %(num)s"
        },
        "comment": "id:today\nIndicates the assignment is due today, including the time.\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "yesterday": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388623:0%(num)scrwdne6388623:0",
          "source": "Yesterday, %(num)s"
        },
        "comment": "id:yesterday\nIndicates the assignment was due yesterday.\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "completed_today": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388627:0%(num)scrwdne6388627:0",
          "source": "Completed today, %(num)s"
        },
        "comment": "id:completed_today\nindicates the assignment was completed today, including the time\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "completed_yesterday": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388629:0%(num)scrwdne6388629:0",
          "source": "Completed yesterday, %(num)s"
        },
        "comment": "id:completed_yesterday\nindicates the assignment was completed yesterday, including the time\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "completed_date": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388631:0%(num1)scrwdnd6388631:0%(num2)scrwdne6388631:0",
          "source": "Completed %(num1)s, %(num2)s"
        },
        "comment": "id:completed_date\nindicates the assignment was completed on a given date, including the time\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "not_started": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388633:0crwdne6388633:0",
          "source": "Not Started"
        },
        "comment": "id:not_started\nNot Started mastery level.\nUsed in the following files:\nFile: /shared/Mastery/utils.js"
      },
      "attempted": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388635:0crwdne6388635:0",
          "source": "Attempted"
        },
        "comment": "id:attempted\nAttempted mastery level.\nUsed in the following files:\nFile: /shared/Mastery/utils.js"
      },
      "familiar": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388637:0crwdne6388637:0",
          "source": "Familiar"
        },
        "comment": "id:familiar\nFamiliar mastery level.\nUsed in the following files:\nFile: /shared/Mastery/utils.js"
      },
      "proficient": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388639:0crwdne6388639:0",
          "source": "Proficient"
        },
        "comment": "id:proficient\nProficient mastery level.\nUsed in the following files:\nFile: /shared/Mastery/utils.js"
      },
      "mastered": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388641:0crwdne6388641:0",
          "source": "Mastered"
        },
        "comment": "id:mastered\nMastered mastery level.\nUsed in the following files:\nFile: /shared/Mastery/utils.js"
      },
      "done": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388675:0crwdne6388675:0",
          "source": "Done"
        },
        "comment": "id:done\nText for a done button\nUsed in the following files:\nFile: /BookmarksScreen/EditButton.js\nFile: /CoursesPicker/SelectCourses.js\nFile: /LoginInProgress/index.js\nFile: /SignUp/DatePickerOverlayIOS.js\nFile: /Task/SimpleTaskCard/__test__/utils.test.js\nFile: /Task/SimpleTaskCard/utils.js\nFile: /Task/SkillsListTaskCard/index.js\nFile: /navigators/Settings.js"
      },
      "whats_new_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388689:0crwdne6388689:0",
          "source": "What's New"
        },
        "comment": "id:whats_new_title\nTitle for screen that displays information about new features in the app.\nUsed in the following files:\nFile: /AppUpdateMessage/interactor.js"
      },
      "update_now": {
        "form": {
          "status": "approved",
          "translated": "crwdns6515095:0crwdne6515095:0",
          "source": "Update now"
        },
        "comment": "id:update_now\nTitle for button that will take the user to the app store to update the app\nUsed in the following files:\nFile: /AppUpdateMessage/PleaseUpdateView.js"
      },
      "must_update_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388697:0crwdne6388697:0",
          "source": "Update Required"
        },
        "comment": "id:must_update_title\nTitle to show when the app is out of date\nUsed in the following files:\nFile: /AppUpdateMessage/PleaseUpdateView.js"
      },
      "must_update_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388699:0crwdne6388699:0",
          "source": "This version of the app is no longer supported, and won't work properly.  Please update to the latest version of the app to continue."
        },
        "comment": "id:must_update_message\nMessage to show when the app is out of date\nUsed in the following files:\nFile: /AppUpdateMessage/PleaseUpdateView.js"
      },
      "update_recommended_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6515096:0crwdne6515096:0",
          "source": "Update available"
        },
        "comment": "id:update_recommended_title\nTitle to show when the app is out of date, but still supported\nUsed in the following files:\nFile: /AppUpdateMessage/PleaseUpdateView.js"
      },
      "update_recommended_message": {
        "form": {
          "status": "approved",
          "translated": "crwdns6515097:0crwdne6515097:0",
          "source": "Important updates are available for this app!\n\nFor the best experience, please update now."
        },
        "comment": "id:update_recommended_message\nMessage to show when the app is out of date, but still supported\nUsed in the following files:\nFile: /AppUpdateMessage/PleaseUpdateView.js"
      },
      "recommended_update_dismiss": {
        "form": {
          "status": "approved",
          "translated": "crwdns6515098:0crwdne6515098:0",
          "source": "No thanks, I’ll update later"
        },
        "comment": "id:recommended_update_dismiss\nTitle for button that dismisses the recommended update screen\nUsed in the following files:\nFile: /AppUpdateMessage/PleaseUpdateView.js"
      },
      "mastery_points": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388703:0crwdne6388703:0",
          "source": "Mastery Points"
        },
        "comment": "id:mastery_points\nlabel for the number of mastery points obtained so far in a unit\nUsed in the following files:\nFile: /Mastery/MasteryInfoBar.js"
      },
      "up_next_for_you": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388715:0crwdne6388715:0",
          "source": "Up next for you"
        },
        "comment": "id:up_next_for_you\nIndicates what you should work on next on the unit page\nUsed in the following files:\nFile: /shared/Mastery/UpNextLabel.js"
      },
      "out_of_100_points": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388717:0%(num)dcrwdne6388717:0",
          "source": "%(num)d/100 points"
        },
        "comment": "id:out_of_100_points\nIndicates the number of mastery points the user has earned for the given exercise\nUsed in the following files:\nFile: /Unit/PracticeItemCell.js"
      },
      "skill_summary": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388719:0crwdne6388719:0",
          "source": "Skill summary"
        },
        "comment": "id:skill_summary\nTitle for a list of skills that a learner can study\nUsed in the following files:\nFile: /Unit/UnitScreenLargeLayoutLeftHandList.js"
      },
      "course_summary": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388723:0crwdne6388723:0",
          "source": "Course summary"
        },
        "comment": "id:course_summary\nTitle for a list of units that a learner can study\nUsed in the following files:\nFile: /Course/UnitList/index.js"
      },
      "more": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388751:0crwdne6388751:0",
          "source": "more"
        },
        "comment": "id:more\nText for a button that reveals a video's full description\nUsed in the following files:\nFile: /Video/Details/DescriptionToggleButton.js\nFile: /wonderblocks-doctoral-candidates/OverflowButton.js"
      },
      "less": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388753:0crwdne6388753:0 ",
          "source": "less "
        },
        "comment": "id:less\nText for a button that hides a video's full description\nUsed in the following files:\nFile: /Video/Details/DescriptionToggleButton.js"
      },
      "bookmark": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388755:0crwdne6388755:0",
          "source": "Bookmark"
        },
        "comment": "id:bookmark\nText for a button that bookmarks a content item\nUsed in the following files:\nFile: /Video/Details/BookmarkButton.js"
      },
      "bookmark_a11y_add": {
        "form": {
          "status": "approved",
          "translated": "crwdns6513099:0crwdne6513099:0",
          "source": "Add Bookmark"
        },
        "comment": "id:bookmark_a11y_add\nAccessibility label that tapping this button will add a bookmark for this item.\nUsed in the following files:\nFile: /shared/components/BookmarkButton.js"
      },
      "bookmark_a11y_remove": {
        "form": {
          "status": "approved",
          "translated": "crwdns6513100:0crwdne6513100:0",
          "source": "Remove Bookmark"
        },
        "comment": "id:bookmark_a11y_remove\nAccessibility label that tapping this button will remove a bookmark.\nUsed in the following files:\nFile: /shared/components/BookmarkButton.js"
      },
      "share": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388757:0crwdne6388757:0",
          "source": "Share"
        },
        "comment": "id:share\nText for a button that allows the user to share a content item\nUsed in the following files:\nFile: /Video/Controls/TopControlsView.js\nFile: /Video/Details/AboutView.js"
      },
      "transcript": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388759:0crwdne6388759:0",
          "source": "Transcript"
        },
        "comment": "id:transcript\nText for a button that brings up a video's transcript\nUsed in the following files:\nFile: /Video/Details/AboutView.js\nFile: /Video/Transcript/index.js"
      },
      "up_next": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388761:0crwdne6388761:0",
          "source": "Up next"
        },
        "comment": "id:up_next\nHeading for the video screen section displaying related content\nUsed in the following files:\nFile: /Article/ArticleWebview.js\nFile: /Video/Details/UpNext/ContentItemCell.js\nFile: /Video/Details/UpNext/UpNextView.js"
      },
      "part_of_lesson": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388763:0crwdne6388763:0",
          "source": "Part of lesson"
        },
        "comment": "id:part_of_lesson\nDescription for a cell containing the name of a lesson\nUsed in the following files:\nFile: /Video/Details/UpNext/LessonCell.js"
      },
      "unable_to_load_transcript": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388765:0crwdne6388765:0",
          "source": "Unable to Load Transcript"
        },
        "comment": "id:unable_to_load_transcript\nShown if we were unable to load video subtitles because the user is offline.\nUsed in the following files:\nFile: /Video/video-utils.js"
      },
      "transcript_unavailable": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388767:0crwdne6388767:0",
          "source": "Transcript unavailable"
        },
        "comment": "id:transcript_unavailable\nShown if we were unable to load video subtitles\nUsed in the following files:\nFile: /Video/video-utils.js"
      },
      "trascript_failed_offline": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388769:0crwdne6388769:0",
          "source": "The transcript for this video is not available when offline. Connect to the internet to view the transcript."
        },
        "comment": "id:trascript_failed_offline\nBody for an alert indicating that a video's transcript is unavailable because a user is not connected to the internet.\nUsed in the following files:\nFile: /Video/video-utils.js"
      },
      "no_transcript_available": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388771:0crwdne6388771:0",
          "source": "There is no transcript available for this video at this time."
        },
        "comment": "id:no_transcript_available\nBody for an alert indicating that a video's transcript is not available.\nUsed in the following files:\nFile: /Video/video-utils.js"
      },
      "toggle_fullscreen": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388773:0crwdne6388773:0",
          "source": "Toggle fullscreen"
        },
        "comment": "id:toggle_fullscreen\nAccessibility label for the fullscreen toggle button.\nUsed in the following files:\nFile: /Video/Controls/BottomControlsView.js"
      },
      "toggle_picture_in_picture": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388775:0crwdne6388775:0",
          "source": "Toggle Picture in Picture"
        },
        "comment": "id:toggle_picture_in_picture\nAccessibility label for the picture in picture toggle button.\nUsed in the following files:\nFile: /Video/Controls/BottomControlsView.js"
      },
      "toggle_captions": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388777:0crwdne6388777:0",
          "source": "Toggle captions"
        },
        "comment": "id:toggle_captions\nAccessibility label for the caption toggle button.\nUsed in the following files:\nFile: /Video/Controls/BottomControlsView.js"
      },
      "rewind_ten": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388779:0crwdne6388779:0",
          "source": "Go back ten seconds"
        },
        "comment": "id:rewind_ten\nAccessibility label for the rewind ten second button.\nUsed in the following files:\nFile: /Video/Controls/MiddleControlsView.js"
      },
      "forward_ten": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388781:0crwdne6388781:0",
          "source": "Go forward ten seconds"
        },
        "comment": "id:forward_ten\nAccessibility label for the skip ten second button.\nUsed in the following files:\nFile: /Video/Controls/MiddleControlsView.js"
      },
      "play": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388783:0crwdne6388783:0",
          "source": "Play"
        },
        "comment": "id:play\nAccessibility label for the play button.\nUsed in the following files:\nFile: /Video/Controls/MiddleControlsView.js"
      },
      "pause": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388785:0crwdne6388785:0",
          "source": "Pause"
        },
        "comment": "id:pause\nAccessibility label for the pause button.\nUsed in the following files:\nFile: /Video/Controls/MiddleControlsView.js"
      },
      "change_speed": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388787:0%(num)scrwdne6388787:0",
          "source": "Change speed to %(num)s"
        },
        "comment": "id:change_speed\nAccessibility label for the button to change speed.\nUsed in the following files:\nFile: /Video/Controls/SpeedButton.js"
      },
      "toggle_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388789:0crwdne6388789:0",
          "source": "Toggle description"
        },
        "comment": "id:toggle_description\nAccessibility label for the description toggle button.\nUsed in the following files:\nFile: /Video/Details/DescriptionToggleButton.js"
      },
      "close_transcript": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388791:0crwdne6388791:0",
          "source": "Close transcript"
        },
        "comment": "id:close_transcript\nAccessibility label for the transcript close button.\nUsed in the following files:\nFile: /Video/Transcript/CloseButton.js"
      },
      "toggle_controls": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388793:0crwdne6388793:0",
          "source": "Toggle control visibility"
        },
        "comment": "id:toggle_controls\nAccessibility label for the control toggle area.\nUsed in the following files:\nFile: /Video/Controls/ControlsView.js"
      },
      "replay": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388795:0crwdne6388795:0",
          "source": "Play again"
        },
        "comment": "id:replay\nAccessibility label for the replay button.\nUsed in the following files:\nFile: /Video/Controls/MiddleControlsView.js"
      },
      "retry": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388797:0crwdne6388797:0",
          "source": "Retry"
        },
        "comment": "id:retry\nAccessibility label for the retry button.\nUsed in the following files:\nFile: /Task/index.js\nFile: /Video/Controls/MiddleControlsView.js\nFile: /redux/bookmarks/download/download-utils.js"
      },
      "keyboardShortcutFullscreen": {
        "form": {
          "status": "approved",
          "translated": "crwdns6864788:0crwdne6864788:0",
          "source": "Enter/Exit Fullscreen"
        },
        "comment": "id:keyboardShortcutFullscreen\nKeyboard shortcut description for enter/exit fullscreen."
      },
      "keyboardShortcutPlayPause": {
        "form": {
          "status": "approved",
          "translated": "crwdns6864776:0crwdne6864776:0",
          "source": "Play/Pause"
        },
        "comment": "id:keyboardShortcutPlayPause\nKeyboard shortcut description for toggling whether the video is playing or paused."
      },
      "keyboardShortcutCaptions": {
        "form": {
          "status": "approved",
          "translated": "crwdns6864778:0crwdne6864778:0",
          "source": "Toggle Captions"
        },
        "comment": "id:keyboardShortcutCaptions\nKeyboard shortcut description for toggling closed-captions."
      },
      "keyboardShortcutSeekForward": {
        "form": {
          "status": "approved",
          "translated": "crwdns6864780:0crwdne6864780:0",
          "source": "Seek Forward"
        },
        "comment": "id:keyboardShortcutSeekForward\nKeyboard shortcut description for skipping forward 10 seconds."
      },
      "keyboardShortcutSeekBackward": {
        "form": {
          "status": "approved",
          "translated": "crwdns6864782:0crwdne6864782:0",
          "source": "Seek Backward"
        },
        "comment": "id:keyboardShortcutSeekBackward\nKeyboard shortcut description for rewinding 10 seconds."
      },
      "keyboardShortcutIncreasePlaySpeed": {
        "form": {
          "status": "approved",
          "translated": "crwdns6864784:0crwdne6864784:0",
          "source": "Increase Speed"
        },
        "comment": "id:keyboardShortcutIncreasePlaySpeed\nKeyboard shortcut description for increasing the play speed."
      },
      "keyboardShortcutDecreasePlaySpeed": {
        "form": {
          "status": "approved",
          "translated": "crwdns6864786:0crwdne6864786:0",
          "source": "Decrease Speed"
        },
        "comment": "id:keyboardShortcutDecreasePlaySpeed\nKeyboard shortcut description for decreasing the play speed."
      },
      "info_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388799:0crwdne6388799:0",
          "source": "Info"
        },
        "comment": "id:info_accessibility_label\nAccessibility label for the info icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "add_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388801:0crwdne6388801:0",
          "source": "Add"
        },
        "comment": "id:add_accessibility_label\nAccessibility label for the 'add' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "caret_down_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388803:0crwdne6388803:0",
          "source": "Caret down"
        },
        "comment": "id:caret_down_accessibility_label\nAccessibility label for the 'caret_down' icon/icon button."
      },
      "caret_left_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388805:0crwdne6388805:0",
          "source": "Caret left"
        },
        "comment": "id:caret_left_accessibility_label\nAccessibility label for the 'caret_left' icon/icon button."
      },
      "caret_right_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388807:0crwdne6388807:0",
          "source": "Caret right"
        },
        "comment": "id:caret_right_accessibility_label\nAccessibility label for the 'caret_right' icon/icon button."
      },
      "caret_up_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388809:0crwdne6388809:0",
          "source": "Caret up"
        },
        "comment": "id:caret_up_accessibility_label\nAccessibility label for the 'caret_up' icon/icon button."
      },
      "check_small_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388811:0crwdne6388811:0",
          "source": "Checkmark"
        },
        "comment": "id:check_small_accessibility_label\nAccessibility label for the 'check_small' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "content_article_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388813:0crwdne6388813:0",
          "source": "Article"
        },
        "comment": "id:content_article_accessibility_label\nAccessibility label for the 'content_article' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js\nFile: /wonderblocks-rn/ItemAvatar/index.js"
      },
      "content_exercise_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388815:0crwdne6388815:0",
          "source": "Exercise"
        },
        "comment": "id:content_exercise_accessibility_label\nAccessibility label for the 'content_exercise' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js\nFile: /wonderblocks-rn/ItemAvatar/index.js"
      },
      "content_video_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388817:0crwdne6388817:0",
          "source": "Video"
        },
        "comment": "id:content_video_accessibility_label\nAccessibility label for the 'content_video' icon/icon button/thumbnail .\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js\nFile: /wonderblocks-rn/ItemAvatar/index.js"
      },
      "correct_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388819:0crwdne6388819:0",
          "source": "Correct"
        },
        "comment": "id:correct_accessibility_label\nAccessibility label for the 'correct' icon/icon button/thumbnail .\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "critical_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns7479843:0crwdne7479843:0",
          "source": "Critical"
        },
        "comment": "id:critical_accessibility_label\nAccessibility label for the 'critical' icon/icon button/thumbnail .\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "delete_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388821:0crwdne6388821:0",
          "source": "Delete"
        },
        "comment": "id:delete_accessibility_label\nAccessibility label for the 'delete' icon/icon button/thumbnail .\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "dismiss_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388823:0crwdne6388823:0",
          "source": "Dismiss"
        },
        "comment": "id:dismiss_accessibility_label\nAccessibility label for the 'dismiss' icon/icon button.\nUsed in the following files:\nFile: /Task/Exercise/Keypad/key-config.js\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "hint_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388825:0crwdne6388825:0",
          "source": "Hint"
        },
        "comment": "id:hint_accessibility_label\nAccessibility label for the 'hint' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "incorrect_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388827:0crwdne6388827:0",
          "source": "Incorrect"
        },
        "comment": "id:incorrect_accessibility_label\nAccessibility label for the 'incorrect' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "search_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388829:0crwdne6388829:0",
          "source": "Search"
        },
        "comment": "id:search_accessibility_label\nAccessibility label for the 'search' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "settings_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399487:0crwdne6399487:0",
          "source": "Settings"
        },
        "comment": "id:settings_accessibility_label\nAccessibility label for the 'settings' icon/icon button."
      },
      "sortable_arrow_down_small_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388831:0crwdne6388831:0",
          "source": "Sortable arrow down"
        },
        "comment": "id:sortable_arrow_down_small_accessibility_label\nAccessibility label for the 'sortable_arrow_down_small' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "sortable_arrow_up_small_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388833:0crwdne6388833:0",
          "source": "Sortable arrow up"
        },
        "comment": "id:sortable_arrow_up_small_accessibility_label\nAccessibility label for the 'sortable_arrow_up_small' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "success_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns7479845:0crwdne7479845:0",
          "source": "Success"
        },
        "comment": "id:success_accessibility_label\nAccessibility label for the 'success' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "zoom_in_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388835:0crwdne6388835:0",
          "source": "Zoom in"
        },
        "comment": "id:zoom_in_accessibility_label\nAccessibility label for the 'zoom_in' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "zoom_out_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388837:0crwdne6388837:0",
          "source": "Zoom out"
        },
        "comment": "id:zoom_out_accessibility_label\nAccessibility label for the 'zoom_out' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "scratchpad_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns7088221:0crwdne7088221:0",
          "source": "Scratchpad"
        },
        "comment": "id:scratchpad_accessibility_label\nAccessibility label for the 'scratchpad' icon/icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "content_lesson_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388839:0crwdne6388839:0",
          "source": "Lesson"
        },
        "comment": "id:content_lesson_accessibility_label\nAccessibility label for the /thumbnail \nUsed in the following files:\nFile: /wonderblocks-rn/ItemAvatar/index.js"
      },
      "warning_accessibility_label": {
        "form": {
          "status": "approved",
          "translated": "crwdns6399489:0crwdne6399489:0",
          "source": "Warning"
        },
        "comment": "id:warning_accessibility_label\nAccessibility label for the 'warning' icon / icon button.\nUsed in the following files:\nFile: /wonderblocks-rn/Icon/icon-assets.js"
      },
      "you_can_learn_anything": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388841:0crwdne6388841:0",
          "source": "You can learn anything"
        },
        "comment": "id:you_can_learn_anything\nLabel for App Store and Play Store screenshots. Please see existing English screenshots on the App Store.\nUsed in the following files:\nFile: /Home/Sections/CurriculumPicker/CurriculumPickerCard.js"
      },
      "master_skills_using_practice_questions": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388843:0crwdne6388843:0",
          "source": "Master skills using\npractice questions"
        },
        "comment": "id:master_skills_using_practice_questions\nLabel for App Store and Play Store screenshots. Please see existing English screenshots on the App Store."
      },
      "explore_our_library": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388845:0crwdne6388845:0",
          "source": "Explore our entire\nlibrary of videos"
        },
        "comment": "id:explore_our_library\nLabel for App Store and Play Store screenshots. Please see existing English screenshots on the App Store."
      },
      "keep_learning_even_offline": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388847:0crwdne6388847:0",
          "source": "Keep learning,\neven when you're offline"
        },
        "comment": "id:keep_learning_even_offline\nLabel for App Store and Play Store screenshots. Please see existing English screenshots on the App Store."
      },
      "celebrate_your_learning_journey": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388849:0crwdne6388849:0",
          "source": "Celebrate your\nlearning journey"
        },
        "comment": "id:celebrate_your_learning_journey\nLabel for App Store and Play Store screenshots. Please see existing English screenshots on the App Store."
      },
      "offline_article": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388851:0crwdne6388851:0",
          "source": "You're offline. This article contains elements that require an internet connection."
        },
        "comment": "id:offline_article\nOffline banner text for articles with elements that require connectivity."
      },
      "sound_effects": {
        "form": {
          "status": "approved",
          "translated": "crwdns6543217:0crwdne6543217:0",
          "source": "Sound effects"
        },
        "comment": "id:sound_effects\nCell title that navigates to sound-effects settings.\nUsed in the following files:\nFile: /Settings/utils.js"
      },
      "mastery_challenge_camel_case": {
        "form": {
          "status": "approved",
          "translated": "crwdns6515168:0crwdne6515168:0",
          "source": "Mastery Challenge"
        },
        "comment": "id:mastery_challenge_camel_case\nName of mastery challenge task type with both words capitalized.\nUsed in the following files:\nFile: /Course/Cards/MasteryChallengeCard.js"
      },
      "mastery_challenge_sentence_case": {
        "form": {
          "status": "approved",
          "translated": "crwdns6515169:0crwdne6515169:0",
          "source": "Mastery challenge"
        },
        "comment": "id:mastery_challenge_sentence_case\nName of mastery challenge task type with only the first word capitalized.\nUsed in the following files:\nFile: /Course/CourseScreen.js"
      },
      "resumable_mastery_challenge_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6515170:0%(time)scrwdne6515170:0",
          "source": "You have %(time)s left to finish this Mastery challenge."
        },
        "comment": "id:resumable_mastery_challenge_description\nTells the user how long they have until a mastery challenge expires.\nUsed in the following files:\nFile: /Course/Cards/MasteryChallengeCardDescription.js"
      },
      "inexact_resumable_mastery_challenge_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6543229:0%(time)scrwdne6543229:0",
          "source": "You only have %(time)s from when you started to finish this Mastery challenge!"
        },
        "comment": "id:inexact_resumable_mastery_challenge_description\nTells the user they have a limited amount of time before a mastery challenge expires.\nUsed in the following files:\nFile: /Course/Cards/MasteryChallengeCardDescription.js"
      },
      "time_amount": {
        "form": {
          "status": "approved",
          "translated": "crwdns6515171:0%(hours_or_minutes)scrwdnd6515171:0%(minutes_or_seconds)scrwdne6515171:0",
          "source": "%(hours_or_minutes)s and %(minutes_or_seconds)s"
        },
        "comment": "id:time_amount\nDescribes an amount of time, e.g. '23 hours and 34 minutes' or '23 minutes and 34 seconds'\nUsed in the following files:\nFile: /Course/Cards/MasteryChallengeCardDescription.js"
      },
      "get_started": {
        "form": {
          "status": "approved",
          "translated": "crwdns6515172:0crwdne6515172:0",
          "source": "Get started"
        },
        "comment": "id:get_started\nButton text for starting some action.\nUsed in the following files:\nFile: /Course/Cards/MasteryChallengeCard.js"
      },
      "resume": {
        "form": {
          "status": "approved",
          "translated": "crwdns6515173:0crwdne6515173:0",
          "source": "Resume"
        },
        "comment": "id:resume\nButton text for resuming some action.\nUsed in the following files:\nFile: /Course/Cards/MasteryChallengeCard.js"
      },
      "mastery_challenge_toast": {
        "form": {
          "status": "approved",
          "translated": "crwdns6543257:0crwdne6543257:0",
          "source": "Challenge complete! 💪 Keep learning to unlock the next one."
        },
        "comment": "id:mastery_challenge_toast\nText for a notification that appears after a user completes a mastery challenge\nUsed in the following files:\nFile: /Task/Exercise/state/index.js"
      },
      "mastery_challenges_learn_more": {
        "form": {
          "status": "approved",
          "translated": "crwdns6550126:0crwdne6550126:0",
          "source": "Learn more about Mastery challenges"
        },
        "comment": "id:mastery_challenges_learn_more\nLink to learn more about how mastery challenges work\nUsed in the following files:\nFile: /Task/MasteryChallenge/LearnMoreLink.js"
      },
      "learn_more": {
        "form": {
          "status": "approved",
          "translated": "crwdns6571330:0crwdne6571330:0",
          "source": "Learn more"
        },
        "comment": "id:learn_more\nText for a button that allows a user to learn more\nUsed in the following files:\nFile: /ManageCoaches/CoachListScene.js\nFile: /Task/MasteryChallenge/MasteryChallengeDescription.js"
      },
      "mastery_challenge_simple_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6571332:0crwdne6571332:0",
          "source": "Review skills you’ve already seen. Level up to Mastered faster."
        },
        "comment": "id:mastery_challenge_simple_description\nSimple description of mastery challenges\nUsed in the following files:\nFile: /Task/MasteryChallenge/MasteryChallengeDescription.js"
      },
      "language_header_text": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450923:0crwdne6450923:0",
          "source": "Language & region"
        },
        "comment": "id:language_header_text\nHeader for language picker screen.\nUsed in the following files:\nFile: /Settings/utils.js\nFile: /navigators/Settings.js"
      },
      "change_language_header": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450925:0crwdne6450925:0",
          "source": "How to change your language"
        },
        "comment": "id:change_language_header\nTitle for alert that comes up when someone tries to change their language on iOS.\nUsed in the following files:\nFile: /Curriculum/CurriculumScreen.js"
      },
      "change_language_text_ios13": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450927:0crwdne6450927:0",
          "source": "If you have multiple languages enabled in Settings, you can use different ones for different apps! Go to Settings > General > Language & Region, and add more languages - then come back to the Khan Academy app."
        },
        "comment": "id:change_language_text_ios13\nAlert message when someone tries to change their language on iOS 13 or later.\nUsed in the following files:\nFile: /Curriculum/CurriculumScreen.js"
      },
      "change_language_text": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450929:0crwdne6450929:0",
          "source": "To change the language for the Khan Academy app on iOS, you’ll need to change your phone’s language. Please open the Settings app, and go to General > Language & Region."
        },
        "comment": "id:change_language_text\nAlert message when someone tries to change their language on iOS 12 or earlier.\nUsed in the following files:\nFile: /Curriculum/CurriculumScreen.js"
      },
      "experimental_feature": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450931:0crwdne6450931:0",
          "source": "Experimental feature"
        },
        "comment": "id:experimental_feature\nAlert message header for content-switching to English.\nUsed in the following files:\nFile: /Curriculum/CurriculumScreen.js"
      },
      "experimental_feature_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450933:0crwdne6450933:0",
          "source": "This is an experimental feature — for the best experience, we recommend that you change your device’s language to English. Once iOS 13 comes out, this feature will be much better!"
        },
        "comment": "id:experimental_feature_description\nAlert message text for content-switching to English.\nUsed in the following files:\nFile: /Curriculum/CurriculumScreen.js"
      },
      "continue_str": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450935:0crwdne6450935:0",
          "source": "Continue"
        },
        "comment": "id:continue_str\nA continue button for an alert.\nUsed in the following files:\nFile: /Curriculum/CurriculumScreen.js\nFile: /shared/native/DeepLinkModule.js"
      },
      "language_header": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450937:0crwdne6450937:0",
          "source": "Language"
        },
        "comment": "id:language_header\nHeader for Language section on Language and Region page.\nUsed in the following files:\nFile: /Curriculum/CurriculumScreen.js\nFile: /navigators/Settings.js"
      },
      "curriculum_header": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450939:0crwdne6450939:0",
          "source": "Region"
        },
        "comment": "id:curriculum_header\nHeader for Region section on Language and Region page.\nUsed in the following files:\nFile: /Curriculum/CurriculumScreen.js"
      },
      "universal": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450941:0crwdne6450941:0",
          "source": "Universal"
        },
        "comment": "id:universal\nUsed as a subtitle under the default, international region.\nUsed in the following files:\nFile: /redux/language/index.js"
      },
      "language_default": {
        "form": {
          "status": "approved",
          "translated": "crwdns6450943:0crwdne6450943:0",
          "source": "default"
        },
        "comment": "id:language_default\nUsed to signify that a region is the default for a language--e.g. English (default)\nUsed in the following files:\nFile: /redux/language/index.js"
      },
      "help_and_feedback": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388987:0crwdne6388987:0",
          "source": "Help & feedback"
        },
        "comment": "id:help_and_feedback\nCell title that navigates to help & feedback\nUsed in the following files:\nFile: /Settings/utils.js"
      },
      "legal_footer": {
        "form": {
          "status": "approved",
          "translated": "crwdns6543218:0crwdne6543218:0",
          "source": "By signing in, you agree to our Terms of Service and Privacy Policy"
        },
        "comment": "id:legal_footer\nFooter text in Settings that says if you sign in you agree to our terms of service and privacy policy.\nUsed in the following files:\nFile: /Settings/SettingsFooter.js"
      },
      "manage_teachers": {
        "form": {
          "status": "approved",
          "translated": "crwdns6543219:0crwdne6543219:0",
          "source": "Manage teachers"
        },
        "comment": "id:manage_teachers\nTitle for cell linking to the manage-teachers screen.\nUsed in the following files:\nFile: /Settings/SettingsHeader.js\nFile: /Settings/__test__/utils.test.js"
      },
      "rate_the_app": {
        "form": {
          "status": "approved",
          "translated": "crwdns6543220:0crwdne6543220:0",
          "source": "Rate the app"
        },
        "comment": "id:rate_the_app\nTitle for cell that links out to the App Store to rate the app.\nUsed in the following files:\nFile: /Settings/utils.js"
      },
      "settings_explore_badges": {
        "form": {
          "status": "approved",
          "translated": "crwdns6543222:0crwdne6543222:0",
          "source": "Explore badges"
        },
        "comment": "id:settings_explore_badges\nTitle for a cell that links out to Khan Academy's website where the learner can browse their collection of badges.\nUsed in the following files:\nFile: /Settings/SettingsHeader.js\nFile: /Settings/__test__/utils.test.js"
      },
      "settings_view_progress": {
        "form": {
          "status": "approved",
          "translated": "crwdns6637202:0crwdne6637202:0",
          "source": "View progress report"
        },
        "comment": "id:settings_view_progress\nTitle for a cell that links out to Khan Academy's website where the learner can browse their progress report.\nUsed in the following files:\nFile: /Settings/SettingsHeader.js\nFile: /Settings/__test__/utils.test.js"
      },
      "licenses": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388995:0crwdne6388995:0",
          "source": "Licenses"
        },
        "comment": "id:licenses\nTitle for a cell in Settings that displays a list of the software-licen\nUsed in the following files:\nFile: /Settings/utils.js\nFile: /navigators/Settings.js"
      },
      "settings_terms_of_service": {
        "form": {
          "status": "approved",
          "translated": "crwdns6543223:0crwdne6543223:0",
          "source": "Terms of service"
        },
        "comment": "id:settings_terms_of_service\nCell title that links out to Khan Academy's terms-of-service page.\nUsed in the following files:\nFile: /Settings/utils.js"
      },
      "settings_privacy_policy": {
        "form": {
          "status": "approved",
          "translated": "crwdns6543224:0crwdne6543224:0",
          "source": "Privacy policy"
        },
        "comment": "id:settings_privacy_policy\nCell title that links out to Khan Academy's privacy-policy page.\nUsed in the following files:\nFile: /Settings/utils.js"
      },
      "settings_delete_account": {
        "form": {
          "status": "approved",
          "translated": "crwdns7119467:0crwdne7119467:0",
          "source": "Delete account"
        },
        "comment": "id:settings_delete_account\nCell title that links out to Khan Academy to delete your account.\nUsed in the following files:\nFile: /Settings/__test__/utils.test.js\nFile: /Settings/utils.js"
      },
      "settings_energy_points": {
        "form": {
          "status": "approved",
          "translated": "crwdns6548902:0%(num1)scrwdne6548902:0",
          "source": "%(num1)s energy points"
        },
        "comment": "id:settings_energy_points\nNumber of energy points that a learner has earned.\nUsed in the following files:\nFile: /Settings/SettingsHeader.js"
      },
      "settings_app_icon": {
        "form": {
          "status": "approved",
          "translated": "crwdns6853292:0crwdne6853292:0",
          "source": "App icon"
        },
        "comment": "id:settings_app_icon\nTitle for a button that allows the learner to select a different app icon.\nUsed in the following files:\nFile: /Settings/__test__/utils.test.js\nFile: /Settings/utils.js\nFile: /navigators/Settings.js"
      },
      "settings_about_the_team": {
        "form": {
          "status": "approved",
          "translated": "crwdns7088281:0crwdne7088281:0",
          "source": "About the team"
        },
        "comment": "id:settings_about_the_team\nTitle for a button that takes the user to Khan Academy's 'About the Team' page\nUsed in the following files:\nFile: /Settings/utils.js"
      },
      "app_icon_default": {
        "form": {
          "status": "approved",
          "translated": "crwdns6853294:0crwdne6853294:0",
          "source": "Default"
        },
        "comment": "id:app_icon_default\nTitle for the default app icon.\nUsed in the following files:\nFile: /Settings/AppIconPicker.js"
      },
      "app_icon_purple": {
        "form": {
          "status": "approved",
          "translated": "crwdns6853298:0crwdne6853298:0",
          "source": "Purple"
        },
        "comment": "id:app_icon_purple\nTitle for the purple app icon.\nUsed in the following files:\nFile: /Settings/AppIconPicker.js"
      },
      "app_icon_dark_blue": {
        "form": {
          "status": "approved",
          "translated": "crwdns6853306:0crwdne6853306:0",
          "source": "Dark blue"
        },
        "comment": "id:app_icon_dark_blue\nTitle for the navy app icon.\nUsed in the following files:\nFile: /Settings/AppIconPicker.js"
      },
      "app_icon_black": {
        "form": {
          "status": "approved",
          "translated": "crwdns6853312:0crwdne6853312:0",
          "source": "Black"
        },
        "comment": "id:app_icon_black\nTitle for the default app icon.\nUsed in the following files:\nFile: /Settings/AppIconPicker.js"
      },
      "app_icon_rainbow": {
        "form": {
          "status": "approved",
          "translated": "crwdns6853314:0crwdne6853314:0",
          "source": "Rainbow"
        },
        "comment": "id:app_icon_rainbow\nTitle for the default app icon.\nUsed in the following files:\nFile: /Settings/AppIconPicker.js"
      },
      "app_icon_darkest": {
        "form": {
          "status": "approved",
          "translated": "crwdns6853318:0crwdne6853318:0",
          "source": "Midnight"
        },
        "comment": "id:app_icon_darkest\nTitle for the default app icon.\nUsed in the following files:\nFile: /Settings/AppIconPicker.js"
      },
      "learner": {
        "form": {
          "status": "approved",
          "translated": "crwdns6906328:0crwdne6906328:0",
          "source": "Learner"
        },
        "comment": "id:learner\nThe default nickname for users who haven't set a nickname for themselves\nUsed in the following files:\nFile: /shared/User/queries.js"
      },
      "aboutUs": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388853:0crwdne6388853:0",
          "source": "About the Team"
        },
        "comment": "id:aboutUs\nText of a link that navigates to a screen, and title of that screen, with the team's pictures and bios.\nplatform: ios"
      },
      "assignmentNotAvailable": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388855:0crwdne6388855:0",
          "source": "This assignment isn't available in our mobile app. Want to view your assignments on the web?"
        },
        "comment": "id:assignmentNotAvailable\nAlert message explaining that the assignment isn't available in the app, but can be viewed on the web.\nplatform: ios"
      },
      "bookmarkAlertTitleExercise": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388857:0crwdne6388857:0",
          "source": "You added an exercise to Bookmarks!"
        },
        "comment": "id:bookmarkAlertTitleExercise\nAlert title explaining that an exercise has been bookmarked for the first time\nplatform: ios"
      },
      "closeOfflineBanner": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388859:0crwdne6388859:0",
          "source": "Close offline banner"
        },
        "comment": "id:closeOfflineBanner\nAccessibility label for button which closes offline banner\nplatform: ios"
      },
      "contentNotAvailableMessage": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388861:0crwdne6388861:0",
          "source": "Khan Academy cannot show the content because it is not available in the app."
        },
        "comment": "id:contentNotAvailableMessage\nError message if content is not available in the app.\nplatform: ios"
      },
      "contentNotAvailableTitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388863:0crwdne6388863:0",
          "source": "Cannot show content"
        },
        "comment": "id:contentNotAvailableTitle\nTitle for alert view when content cannot be loaded\nplatform: ios"
      },
      "couldNotLoadArticle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388865:0crwdne6388865:0",
          "source": "Could not load this article"
        },
        "comment": "id:couldNotLoadArticle\nDescription appearing in article loading failure UI\nplatform: ios"
      },
      "offlineBannerCompactWarningText": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388867:0crwdne6388867:0",
          "source": "Your progress will not be saved."
        },
        "comment": "id:offlineBannerCompactWarningText\nOffline Banner text for 'Content' level of navigation in horizontally compact environments\nplatform: ios"
      },
      "offlineBannerRegularWarningText": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388869:0crwdne6388869:0",
          "source": "When you reconnect to a network, we’ll be able to record your progress."
        },
        "comment": "id:offlineBannerRegularWarningText\nOffline Banner text for 'Content' level of navigation in horizontally regular environments\nplatform: ios"
      },
      "offlineBannerWarningText": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388871:0crwdne6388871:0",
          "source": "Go to Bookmarks for offline content."
        },
        "comment": "id:offlineBannerWarningText\nDefault text appearing on iPhone which appears when user goes offline.\nplatform: ios"
      },
      "openInSafariAlertTitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388873:0crwdne6388873:0",
          "source": "Open in Safari?"
        },
        "comment": "id:openInSafariAlertTitle\nAlert title asking if user wants to open content in Safari browser.\nplatform: ios"
      },
      "openInSafariButton": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388875:0crwdne6388875:0",
          "source": "Open in Safari"
        },
        "comment": "id:openInSafariButton\nAlert action to open a website in Safari.\nplatform: ios"
      },
      "openInSafariContentMessage": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388877:0crwdne6388877:0",
          "source": "This content isn't available in our mobile app. Would you like to view it on the web?"
        },
        "comment": "id:openInSafariContentMessage\nAlert message explaining that content isn't available in the app, but can be viewed on the web.\nplatform: ios"
      },
      "profileAccessibilityHint": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388879:0crwdne6388879:0",
          "source": "Displays your user profile, and has a button to open in-app settings."
        },
        "comment": "id:profileAccessibilityHint\nAccessibility hint to describe a button that, when tapped, displays your user profile\nplatform: ios"
      },
      "promptAcceptChargesButtonTitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388881:0crwdne6388881:0",
          "source": "Accept Charges"
        },
        "comment": "id:promptAcceptChargesButtonTitle\nButton for agreeing to accept charges when user tries to  use third-party resources on a zero-rated network\nplatform: ios"
      },
      "searchAccessibilityHint": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388883:0crwdne6388883:0",
          "source": "Search all of Khan Academy content"
        },
        "comment": "id:searchAccessibilityHint\nAccessibilty hint for the global search button\nplatform: ios"
      },
      "settingsBySigningInString": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388885:0crwdne6388885:0\n",
          "source": "By signing in, you agree to our\n"
        },
        "comment": "id:settingsBySigningInString\nString appearing in Settings which is followed by links to our Terms of Service and Privacy Policy.\nplatform: ios"
      },
      "settingsGeneralSectionHeaderLabel": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388887:0crwdne6388887:0",
          "source": "General"
        },
        "comment": "id:settingsGeneralSectionHeaderLabel\nSection header for the General section of the Settings UI\nplatform: ios"
      },
      "settingsHelpAndFeedbackCell": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388889:0crwdne6388889:0",
          "source": "Help & feedback"
        },
        "comment": "id:settingsHelpAndFeedbackCell\nTitle for the cell linking to the web help portal of Khan Academy, appearing in the settings UI\nplatform: ios"
      },
      "settingsManageCoaches": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388891:0crwdne6388891:0",
          "source": "Manage Teachers"
        },
        "comment": "id:settingsManageCoaches\nTitle for the cell linking to managing teachers\nplatform: ios"
      },
      "settingsPpLinkString": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388893:0crwdne6388893:0",
          "source": "Privacy Policy"
        },
        "comment": "id:settingsPpLinkString\nTitle/link going to our Privacy Policy page from the Settings UI\nplatform: ios"
      },
      "settingsTermsAndPrivacyFormatString": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388895:0%@crwdnd6388895:0%@crwdne6388895:0",
          "source": "%@ and %@"
        },
        "comment": "id:settingsTermsAndPrivacyFormatString\nFormat string into which the link-string strings (linking to our Terms of Service and Privacy Policy pages) are substituted.\nplatform: ios"
      },
      "settingsTosLinkString": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388897:0crwdne6388897:0",
          "source": "Terms of Service"
        },
        "comment": "id:settingsTosLinkString\nTitle/link going to our Terms of Service page from the Settings UI\nplatform: ios"
      },
      "signInAccessibilityHint": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388899:0crwdne6388899:0",
          "source": "Displays options for signing in and accessing app settings."
        },
        "comment": "id:signInAccessibilityHint\nAccessibility hint to describe a button that, when tapped, displays the user profile screen with options to sign-in and open in-app settings.\nplatform: ios"
      },
      "signOutArticleMessage": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388907:0crwdne6388907:0",
          "source": "Signing out will dismiss this article."
        },
        "comment": "id:signOutArticleMessage\nPrompt for signing out when an article is displayed\nplatform: ios"
      },
      "signOutExerciseMessage": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388909:0crwdne6388909:0",
          "source": "Signing out will dismiss this exercise."
        },
        "comment": "id:signOutExerciseMessage\nPrompt for signing out when a practice task is displayed\nplatform: ios"
      },
      "signOutVideoMessage": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388911:0crwdne6388911:0",
          "source": "Signing out will dismiss this video."
        },
        "comment": "id:signOutVideoMessage\nPrompt for signing out when a video is displayed\nplatform: ios"
      },
      "viewAllBookmarks": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388913:0crwdne6388913:0",
          "source": "View all Bookmarks"
        },
        "comment": "id:viewAllBookmarks\nAccessibilty hint for the button the pops up a list of all bookmarks\nplatform: ios"
      },
      "zeroRatingAlertMessage": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388915:0crwdne6388915:0",
          "source": "You can now use Khan Academy without using any of your data."
        },
        "comment": "id:zeroRatingAlertMessage\nText for an alert telling the user that they are now on a zero rated network\nplatform: ios"
      },
      "zeroRatingAlertTitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388917:0crwdne6388917:0",
          "source": "Enjoy Khan Academy for free!"
        },
        "comment": "id:zeroRatingAlertTitle\nHeading for an alert telling the user that they are now on a zero rated network\nplatform: ios"
      },
      "zeroRatingPageMessage": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388919:0crwdne6388919:0",
          "source": "The page you're about to visit is outside Khan Academy. Normal data rates apply."
        },
        "comment": "id:zeroRatingPageMessage\nBody for alert appearing when user tries to navigate to a third-party web page on a zero-rated network\nplatform: ios"
      },
      "zeroRatingPromptTitle": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388921:0crwdne6388921:0",
          "source": "Accept data charges?"
        },
        "comment": "id:zeroRatingPromptTitle\nTitle for alert appearing when user tries to use third-party resources on a zero-rated network\nplatform: ios"
      },
      "zeroRatingServiceMessage": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388923:0crwdne6388923:0",
          "source": "You are about to use a service outside of Khan Academy. Normal data rates apply."
        },
        "comment": "id:zeroRatingServiceMessage\nBody for alert appearing when user tries to use a third-party service (e.g. for login) on a zero-rated network\nplatform: ios"
      },
      "about_us": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388925:0crwdne6388925:0",
          "source": "About the Team"
        },
        "comment": "id:about_us\n\nplatform: android"
      },
      "action_add_bookmark": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388927:0crwdne6388927:0",
          "source": "Add to Bookmarks"
        },
        "comment": "id:action_add_bookmark\n\nplatform: android"
      },
      "app_name": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388929:0crwdne6388929:0",
          "source": "Khan Academy"
        },
        "comment": "id:app_name\n\nplatform: android"
      },
      "arithmetic": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388931:0crwdne6388931:0",
          "source": "arithmetic"
        },
        "comment": "id:arithmetic\n\nplatform: android"
      },
      "arts_and_humanities": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388933:0crwdne6388933:0",
          "source": "Arts and humanities"
        },
        "comment": "id:arts_and_humanities\n\nplatform: android"
      },
      "average": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388935:0crwdne6388935:0",
          "source": "average"
        },
        "comment": "id:average\n\nplatform: android"
      },
      "biology": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388937:0crwdne6388937:0",
          "source": "biology"
        },
        "comment": "id:biology\n\nplatform: android"
      },
      "by_logging_in": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388939:0crwdne6388939:0",
          "source": "By logging in, you agree to our"
        },
        "comment": "id:by_logging_in\n\nplatform: android"
      },
      "cancel_download": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388941:0crwdne6388941:0",
          "source": "Cancel download"
        },
        "comment": "id:cancel_download\n\nplatform: android"
      },
      "cannot_open_in_browser": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388943:0crwdne6388943:0",
          "source": "This device is unable to open the webpage."
        },
        "comment": "id:cannot_open_in_browser\n\nplatform: android"
      },
      "college_careers_more": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388945:0crwdne6388945:0",
          "source": "College, careers, and more"
        },
        "comment": "id:college_careers_more\n\nplatform: android"
      },
      "computing": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388947:0crwdne6388947:0",
          "source": "Computing"
        },
        "comment": "id:computing\n\nplatform: android"
      },
      "could_not_load_article": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388949:0crwdne6388949:0",
          "source": "Could not load this article"
        },
        "comment": "id:could_not_load_article\n\nplatform: android"
      },
      "could_not_load_video": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388951:0crwdne6388951:0",
          "source": "Could not load this video"
        },
        "comment": "id:could_not_load_video\n\nplatform: android"
      },
      "counting": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388953:0crwdne6388953:0",
          "source": "counting"
        },
        "comment": "id:counting\n\nplatform: android"
      },
      "decimals": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388955:0crwdne6388955:0",
          "source": "decimals"
        },
        "comment": "id:decimals\n\nplatform: android"
      },
      "differential_equations": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388959:0crwdne6388959:0",
          "source": "differential equations"
        },
        "comment": "id:differential_equations\n\nplatform: android"
      },
      "dismiss_offline_banner": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388961:0crwdne6388961:0",
          "source": "Dismiss offline banner"
        },
        "comment": "id:dismiss_offline_banner\nAction label to dismiss the offline banner\nplatform: android"
      },
      "download": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388963:0crwdne6388963:0",
          "source": "Download"
        },
        "comment": "id:download\n\nplatform: android"
      },
      "economics_and_finance": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388965:0crwdne6388965:0",
          "source": "Economics and finance"
        },
        "comment": "id:economics_and_finance\n\nplatform: android"
      },
      "equations": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388967:0crwdne6388967:0",
          "source": "equations"
        },
        "comment": "id:equations\n\nplatform: android"
      },
      "error_google_permission": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388971:0crwdne6388971:0",
          "source": "Access to contacts was denied. To login with Google, please tap login with Google again and allow Khan Academy to access your contacts."
        },
        "comment": "id:error_google_permission\n\nplatform: android"
      },
      "error_google_permission_forever": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388973:0crwdne6388973:0",
          "source": "Access to contacts was denied. To login with Google, please allow Khan Academy to access your contacts from the Settings app."
        },
        "comment": "id:error_google_permission_forever\n\nplatform: android"
      },
      "facebook": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388977:0crwdne6388977:0",
          "source": "Facebook"
        },
        "comment": "id:facebook\n\nplatform: android"
      },
      "fractions": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388979:0crwdne6388979:0",
          "source": "fractions"
        },
        "comment": "id:fractions\n\nplatform: android"
      },
      "functions": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388981:0crwdne6388981:0",
          "source": "functions"
        },
        "comment": "id:functions\n\nplatform: android"
      },
      "google": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388983:0crwdne6388983:0",
          "source": "Google"
        },
        "comment": "id:google\n\nplatform: android"
      },
      "header_general_settings": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388985:0crwdne6388985:0",
          "source": "General"
        },
        "comment": "id:header_general_settings\n\nplatform: android"
      },
      "language": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388989:0crwdne6388989:0",
          "source": "Language"
        },
        "comment": "id:language\n\nplatform: android"
      },
      "logarithms": {
        "form": {
          "status": "approved",
          "translated": "crwdns6388997:0crwdne6388997:0",
          "source": "logarithms"
        },
        "comment": "id:logarithms\n\nplatform: android"
      },
      "login_google_get_accounts_rationale": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389001:0crwdne6389001:0",
          "source": "Signing in with Google requires permission to access the contacts on this device."
        },
        "comment": "id:login_google_get_accounts_rationale\n\nplatform: android"
      },
      "manage": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389003:0crwdne6389003:0",
          "source": "Manage"
        },
        "comment": "id:manage\n\nplatform: android"
      },
      "math": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389005:0crwdne6389005:0",
          "source": "Math"
        },
        "comment": "id:math\n\nplatform: android"
      },
      "offline_with_bookmarks": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389007:0crwdne6389007:0",
          "source": "You\\'re offline. Go to Bookmarks for offline content."
        },
        "comment": "id:offline_with_bookmarks\n\nplatform: android"
      },
      "offline_without_bookmarks": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389009:0crwdne6389009:0",
          "source": "You\\'re offline."
        },
        "comment": "id:offline_without_bookmarks\n\nplatform: android"
      },
      "partner_content": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389013:0crwdne6389013:0",
          "source": "Partner content"
        },
        "comment": "id:partner_content\n\nplatform: android"
      },
      "philosophy": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389015:0crwdne6389015:0",
          "source": "philosophy"
        },
        "comment": "id:philosophy\n\nplatform: android"
      },
      "photosynthesis": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389017:0crwdne6389017:0",
          "source": "photosynthesis"
        },
        "comment": "id:photosynthesis\n\nplatform: android"
      },
      "privacy_policy": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389019:0crwdne6389019:0",
          "source": "Privacy Policy"
        },
        "comment": "id:privacy_policy\n\nplatform: android"
      },
      "probability": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389021:0crwdne6389021:0",
          "source": "probability"
        },
        "comment": "id:probability\n\nplatform: android"
      },
      "pythagorean_theorem": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389023:0crwdne6389023:0",
          "source": "pythagorean theorem"
        },
        "comment": "id:pythagorean_theorem\n\nplatform: android"
      },
      "rationale_continue": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389025:0crwdne6389025:0",
          "source": "Continue"
        },
        "comment": "id:rationale_continue\n\nplatform: android"
      },
      "ratios": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389027:0crwdne6389027:0",
          "source": "ratios"
        },
        "comment": "id:ratios\n\nplatform: android"
      },
      "science": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389029:0crwdne6389029:0",
          "source": "Science"
        },
        "comment": "id:science\n\nplatform: android"
      },
      "square_root": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389033:0crwdne6389033:0",
          "source": "square root"
        },
        "comment": "id:square_root\n\nplatform: android"
      },
      "statistics": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389035:0crwdne6389035:0",
          "source": "statistics"
        },
        "comment": "id:statistics\n\nplatform: android"
      },
      "tab_description_bookmarks": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389037:0crwdne6389037:0",
          "source": "Bookmarks tab"
        },
        "comment": "id:tab_description_bookmarks\nAction label to navigate to bookmarks screen\nplatform: android"
      },
      "tab_description_home": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389039:0crwdne6389039:0",
          "source": "Explore tab"
        },
        "comment": "id:tab_description_home\nAction label to navigate to explore screen\nplatform: android"
      },
      "tab_description_profile": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389041:0crwdne6389041:0",
          "source": "Profile tab"
        },
        "comment": "id:tab_description_profile\nAction label to navigate to profile screen\nplatform: android"
      },
      "tab_description_search": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389043:0crwdne6389043:0",
          "source": "Search tab"
        },
        "comment": "id:tab_description_search\nAction label to navigate to search screen\nplatform: android"
      },
      "terms_of_service": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389045:0crwdne6389045:0",
          "source": "Terms of Service"
        },
        "comment": "id:terms_of_service\n\nplatform: android"
      },
      "test_prep": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389047:0crwdne6389047:0",
          "source": "Test prep"
        },
        "comment": "id:test_prep\n\nplatform: android"
      },
      "title_activity_forgot_password": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389049:0crwdne6389049:0",
          "source": "Forgot password"
        },
        "comment": "id:title_activity_forgot_password\n\nplatform: android"
      },
      "title_language": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389051:0crwdne6389051:0",
          "source": "Language"
        },
        "comment": "id:title_language\n\nplatform: android"
      },
      "topic_icon_description_with_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389053:0%scrwdne6389053:0",
          "source": "Topic icon for <xliff:g xmlns:xliff=\"urn:oasis:names:tc:xliff:document:1.2\" id=\"topic_title\">%s</xliff:g>"
        },
        "comment": "id:topic_icon_description_with_title\nContent description for a topic icon\nplatform: android"
      },
      "tos_privacy_template": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389055:0%1$scrwdnd6389055:0%2$scrwdne6389055:0",
          "source": "<xliff:g xmlns:xliff=\"urn:oasis:names:tc:xliff:document:1.2\" id=\"terms_of_service\">%1$s</xliff:g> and <xliff:g xmlns:xliff=\"urn:oasis:names:tc:xliff:document:1.2\" id=\"privacy_policy\">%2$s</xliff:g>."
        },
        "comment": "id:tos_privacy_template\n\nplatform: android"
      },
      "transformations": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389057:0crwdne6389057:0",
          "source": "transformations"
        },
        "comment": "id:transformations\n\nplatform: android"
      },
      "unavailable_article": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389059:0crwdne6389059:0",
          "source": "This article isn\\'t available in our app."
        },
        "comment": "id:unavailable_article\n\nplatform: android"
      },
      "unavailable_exercise": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389063:0crwdne6389063:0",
          "source": "This exercise isn\\'t available in our app."
        },
        "comment": "id:unavailable_exercise\n\nplatform: android"
      },
      "unavailable_video": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389065:0crwdne6389065:0",
          "source": "This video isn\\'t available in our app."
        },
        "comment": "id:unavailable_video\n\nplatform: android"
      },
      "version": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389069:0%scrwdnd6389069:0%dcrwdne6389069:0",
          "source": "Khan Academy v<xliff:g xmlns:xliff=\"urn:oasis:names:tc:xliff:document:1.2\" id=\"version_name\">%s</xliff:g> (<xliff:g xmlns:xliff=\"urn:oasis:names:tc:xliff:document:1.2\" id=\"version_code\">%d</xliff:g>)"
        },
        "comment": "id:version\n\nplatform: android"
      },
      "zero_rating_external_website_warning_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389071:0crwdne6389071:0",
          "source": "You are about to go to an external website.  Regular data rates apply."
        },
        "comment": "id:zero_rating_external_website_warning_description\n\nplatform: android"
      },
      "zero_rating_login_warning_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389073:0crwdne6389073:0",
          "source": "You are about to use a third-party service to login.  Regular data rates apply."
        },
        "comment": "id:zero_rating_login_warning_description\n\nplatform: android"
      },
      "zero_rating_message_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389075:0crwdne6389075:0",
          "source": "You can now use Khan Academy without using any of your data."
        },
        "comment": "id:zero_rating_message_description\n\nplatform: android"
      },
      "zero_rating_message_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389077:0crwdne6389077:0",
          "source": "Enjoy Khan Academy for free!"
        },
        "comment": "id:zero_rating_message_title\n\nplatform: android"
      },
      "zero_rating_warning_title": {
        "form": {
          "status": "approved",
          "translated": "crwdns6389079:0crwdne6389079:0",
          "source": "Accept data charges?"
        },
        "comment": "id:zero_rating_warning_title\n\nplatform: android"
      },
      "app_store_description": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353229:0crwdne7353229:0",
          "source": "You can learn anything. For free.\n\nSpend an afternoon brushing up on statistics. Discover how the Krebs cycle works. Get a head start on next semester's geometry. Prepare for upcoming exams. Or, if you're feeling particularly adventurous, learn how fire-stick farming changes the landscape of Australia.\n\nWhether you're a student, teacher, homeschooler, principal, adult returning to the classroom after 20 years, or a friendly alien trying to get a leg up in earthly biology — Khan Academy's personalized learning library is available to you, for free.\n\n- Learn anything, for free: Thousands of interactive exercises, videos, and articles at your fingertips. Study math, science, economics, finance, grammar, history, government, politics, and much, much more.\n\n- Sharpen your skills: Practice exercises, quizzes, and tests with instant feedback and step-by-step hints. Follow along with what you're learning in school, or practice at your own pace.\n\n- Keep learning when you're offline: Bookmark and download your favorite content to watch videos without an internet connection.\n\n- Pick up where you left off: Tailored to your current learning level, our mastery system gives instant feedback and recommendations on exactly which skills and videos to try next. And, if you choose to create a free account, your learning syncs with http://khanacademy.org, so your progress is always up-to-date across all your devices. \n\nLearn using expert-created videos, interactive exercises, and in-depth articles in math (arithmetic, pre-algebra, algebra, geometry, trigonometry, statistics, calculus, differential equations, linear algebra), science (biology, chemistry, physics), economics (microeconomics, macroeconomics, finance and capital markets), humanities (art history, civics, finance, US history, US government and politics, world history), and more (including computer science principles)!\n\nAlready familiar with the Khan Academy website? Not all functionality is available in this app. Community discussions, computer programming content, test prep, parent tools, teacher tools, and district tools should all be accessed directly at http://khanacademy.org.\n\nKhan Academy is a 501(c)(3) nonprofit organization, with the mission of providing a free, world-class education for anyone, anywhere."
        },
        "comment": "id:app_store_description\nApp store description for the iOS and Android apps; check https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8 and https://play.google.com/store/apps/details?id=org.khanacademy.android&hl=en_US for context!"
      },
      "app_store_description_INDIA_ONLY": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353231:0crwdne7353231:0",
          "source": "Khan Academy is a free learning app for Class 1-12 students with videos, exercises and tests for math, science and more subjects. Our content is aligned to NCERT and CBSE syllabus and available in Hindi, English and many more regional languages.\n\nLearning app for building a strong conceptual understanding\n- Over 10,000 videos and practice exercises on math and science. All content mapped to NCERT and CBSE syllabus.\n- Master math (arithmetic, pre-algebra, algebra, geometry, trigonometry, statistics, calculus, linear algebra), science (biology, chemistry, physics), economics, and more.\n- Learn at your pace and build a strong foundation to do well in school, boards, CAT, GMAT, IIT-JEE and other exams.\n\nInteractive practice exercises and unit tests for exam preparation\n- Over 40,000 interactive practice exercises with instant feedback and step-by-step hints.\n- Prepare for your exams with quizzes and unit tests in math from classes 1-12 for NCERT and CBSE syllabus.\n- Get personalized recommendations on exercises to focus on and related videos to help you in exam preparation.\n\nKeep learning even when you’re offline\n- Bookmark your favourite content for easy access, and download it to keep learning even when you’re not connected to the internet.\n\nTeachers: Assign homework and practice on Khan Academy\n- Teachers can now assign homework aligned to NCERT and CBSE syllabus in the form of videos, articles, and exercises across a range of subjects and grades.\n- Homework can be assigned to an entire class or to specific students.\n- Students would be able to see and complete these assignments on the Khan Academy learning app.\n- Teachers can track progress and gather insights in real-time.\n- All of the above teacher functionalities can be accessed directly at www.khanacademy.org, not on the app.\n\nKey facts about Khan Academy\n- Our mission is to make free, world-class education available to millions of learners in India and around the world.\n- Khan Academy in India is a Section 8 registered nonprofit organization and is supported by Tata Trusts and CSF.\n- Today, Khan Academy is used by over 120 million learners in 190+ countries around the globe.\n- Our resources include 10,000+ videos and 50,000+ exercises in math, biology, chemistry, physics, history, economics, finance, grammar, preschool learning, and more aligned to NCERT and CBSE syllabus.\n- More than 200,00 teachers in India use Khan Academy to make their class more engaging with videos, to assign practice problems as homework, and to provide personalized attention to students using Khan Academy's learning app and coach dashboard.\n\nLearners and teachers can access all our content in English and Hindi on the app. For other languages, one can visit: \n- Hindi - hi.khanacademy.org\n- Gujarati - gu.khanacademy.org \n- Kannada - kn.khanacademy.org\n\nWe have also translated our Middle and High School content to Hinglish - bilingual Hindi and English - for those students who study at schools where the medium of instruction is English, but are more conversant with and comfortable understanding concepts in Hindi.\n\nHead over to www.khanacademy.org to learn more about us. Follow us on Facebook, Twitter and Instagram @khanacademy to get handy study-tips!"
        },
        "comment": "id:app_store_description_INDIA_ONLY\nThis is the App Store Description text for English-India and Hindi only. ***PLEASE DO NOT TRANSLATE THIS FOR ANY OTHER LANGUAGE!*** Thanks!"
      },
      "app_store_name": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353233:0crwdne7353233:0",
          "source": "Khan Academy: learn math, biology, chemistry, economics, art history and almost anything for free"
        },
        "comment": "id:app_store_name\nApp Store name for the iOS app; please leave 'Khan Academy' verbatim, translating just the text after the colon. Check https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8 for context!"
      },
      "app_store_name_INDIA_ONLY": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353235:0crwdne7353235:0",
          "source": "Khan Academy"
        },
        "comment": "id:app_store_name_INDIA_ONLY\nThis is the App Store Name for English-India and Hindi only. ***PLEASE DO NOT TRANSLATE THIS FOR ANY OTHER LANGUAGE!*** Thanks!"
      },
      "app_store_short_description_INDIA_ONLY": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353237:0crwdne7353237:0",
          "source": "Khan Academy"
        },
        "comment": "id:app_store_short_description_INDIA_ONLY\nThis is the App Store \"Short Description\" for English-India and Hindi only. ***PLEASE DO NOT TRANSLATE THIS FOR ANY OTHER LANGUAGE!*** Thanks!"
      },
      "app_store_keywords": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353239:0crwdne7353239:0",
          "source": "math,science,history,finance,practice,education,video,con,kahn"
        },
        "comment": "id:app_store_keywords\nApp Store keywords for the iOS app; these will not be visible to users anywhere, but will be used to match against users' searches on the app store (for example, a surprising number of people misspell the name of the company!)"
      },
      "app_store_release_notes_generic": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353241:0crwdne7353241:0",
          "source": "Bug fixes and performance improvements."
        },
        "comment": "id:app_store_release_notes_generic\nGeneric update notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8\nUsed in the following files:\nFile: /AppUpdateMessage/whats-new-message.js"
      },
      "introducing_gujarati": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353243:0crwdne7353243:0",
          "source": "Introducing support for Gujarati!"
        },
        "comment": "id:introducing_gujarati\nUpdate notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8"
      },
      "introducing_japanese": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353245:0crwdne7353245:0",
          "source": "Introducing support for Japanese!"
        },
        "comment": "id:introducing_japanese\nUpdate notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8"
      },
      "introducing_tamil": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353247:0crwdne7353247:0",
          "source": "Introducing support for Tamil!"
        },
        "comment": "id:introducing_tamil\nUpdate notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8"
      },
      "introducing_kannada": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353249:0crwdne7353249:0",
          "source": "Introducing support for Kannada!"
        },
        "comment": "id:introducing_kannada\nUpdate notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8"
      },
      "introducing_hindi": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353251:0crwdne7353251:0",
          "source": "Introducing support for Hindi!"
        },
        "comment": "id:introducing_hindi\nUpdate notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8"
      },
      "introducing_dutch": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353253:0crwdne7353253:0",
          "source": "Introducing support for Dutch!"
        },
        "comment": "id:introducing_dutch\nUpdate notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8"
      },
      "whats_new_chromebooks": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353255:0crwdne7353255:0",
          "source": "Improved support for Chromebooks."
        },
        "comment": "id:whats_new_chromebooks\nUpdate notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8\nUsed in the following files:\nFile: /AppUpdateMessage/whats-new-message.js"
      },
      "whats_new_scratchpad": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353257:0crwdne7353257:0",
          "source": "Improvements to the scratch pad that is available while practicing."
        },
        "comment": "id:whats_new_scratchpad\nUpdate notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8\nUsed in the following files:\nFile: /AppUpdateMessage/whats-new-message.js"
      },
      "whats_new_my_classes": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353259:0crwdne7353259:0",
          "source": "Our new My Classes feature organizes your assignments by class."
        },
        "comment": "id:whats_new_my_classes\nUpdate notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8\nUsed in the following files:\nFile: /AppUpdateMessage/whats-new-message.js"
      },
      "whats_new_rationales": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353261:0crwdne7353261:0",
          "source": "Many multiple choice questions now explain why an option is right or wrong."
        },
        "comment": "id:whats_new_rationales\nUpdate notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8\nUsed in the following files:\nFile: /AppUpdateMessage/whats-new-message.js"
      },
      "whats_new_apple_sign_in": {
        "form": {
          "status": "approved",
          "translated": "crwdns7353263:0crwdne7353263:0",
          "source": "The app now allows you to Sign in with Apple."
        },
        "comment": "id:whats_new_apple_sign_in\nUpdate notes for the \"What's New In This Version\" section of our App Store page. For context, check: https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8\nUsed in the following files:\nFile: /AppUpdateMessage/whats-new-message.js"
      }
    },
    "plural": {
      "late_due_n_days_ago": {
        "forms": [{
          "translated": "crwdns6388617:1%(num)scrwdne6388617:1",
          "source": "Late, due %(num)sd ago",
          "status": "approved"
        }, {
          "translated": "crwdns6388617:5%(num)scrwdne6388617:5",
          "source": "Late, due %(num)sd ago",
          "status": "approved"
        }],
        "comment": "id:late_due_n_days_ago\nIndicates the assignment is late and was due the given number of days (\"d\") ago. The \"d\" represents \"day\". So something like \"2d ago\"\nUsed in the following files:\nFile: /Assignments/date-utils.js"
      },
      "explore_assignments_see_n_due_later": {
        "forms": [{
          "translated": "crwdns6388067:1%(num)scrwdne6388067:1",
          "source": "See %(num)s due later",
          "status": "approved"
        }, {
          "translated": "crwdns6388067:5%(num)scrwdne6388067:5",
          "source": "See %(num)s due later",
          "status": "approved"
        }],
        "comment": "id:explore_assignments_see_n_due_later\nDisplayed on large layouts in the Assignments Card on the button that allows the learner to see all of their assignments\nUsed in the following files:\nFile: /ClassDetails/Cards/AssignmentsCard.js"
      },
      "unit_test_description": {
        "forms": [{
          "translated": "crwdns6388685:1%(topic_name)scrwdnd6388685:1%(num)scrwdne6388685:1",
          "source": "Test your understanding of %(topic_name)s with this %(num)s question.",
          "status": "approved"
        }, {
          "translated": "crwdns6388685:5%(topic_name)scrwdnd6388685:5%(num)scrwdne6388685:5",
          "source": "Test your understanding of %(topic_name)s with these %(num)s questions.",
          "status": "approved"
        }],
        "comment": "id:unit_test_description\nDescription of a multi-question unit test where num1 is the name of the unit covered by the test.\nUsed in the following files:\nFile: /Unit/Cells/UnitTestCell.js"
      },
      "large_layout_quiz_cell_title": {
        "forms": [{
          "translated": "crwdns7479847:1%(quiz_name)scrwdnd7479847:1%(num)scrwdne7479847:1",
          "source": "%(quiz_name)s: %(num)s question",
          "status": "approved"
        }, {
          "translated": "crwdns7479847:5%(quiz_name)scrwdnd7479847:5%(num)scrwdne7479847:5",
          "source": "%(quiz_name)s: %(num)s questions",
          "status": "approved"
        }],
        "comment": "id:large_layout_quiz_cell_title\nButton title for a quiz with a number of questions\nUsed in the following files:\nFile: /Unit/UnitScreenLargeLayoutLeftHandList.js"
      },
      "explore_assignments": {
        "forms": [{
          "translated": "crwdns6388043:1%(num)dcrwdne6388043:1",
          "source": "Assignment (%(num)d)",
          "status": "approved"
        }, {
          "translated": "crwdns6388043:5%(num)dcrwdne6388043:5",
          "source": "Assignments (%(num)d)",
          "status": "approved"
        }],
        "comment": "id:explore_assignments\nHeader for the Home Screen's Assignment Section (the section listing the user's assignments)\nUsed in the following files:\nFile: /ClassDetails/Cards/AssignmentsCard.js"
      },
      "explore_assignments_additional": {
        "forms": [{
          "translated": "crwdns7119469:1%(num)dcrwdne7119469:1",
          "source": "Assignment (%(num)d+)",
          "status": "approved"
        }, {
          "translated": "crwdns7119469:5%(num)dcrwdne7119469:5",
          "source": "Assignments (%(num)d+)",
          "status": "approved"
        }],
        "comment": "id:explore_assignments_additional\nHeader for the Home Screen's Assignment Section (the section listing the user's assignments) when there are additional assignments to load.\nUsed in the following files:\nFile: /ClassDetails/Cards/AssignmentsCard.js"
      },
      "quiz_shelf_description": {
        "forms": [{
          "translated": "crwdns6388413:1%(num)dcrwdne6388413:1",
          "source": "Level up on the above skills and collect up to %(num)d mastery point.",
          "status": "approved"
        }, {
          "translated": "crwdns6388413:5%(num)dcrwdne6388413:5",
          "source": "Level up on the above skills and collect up to %(num)d mastery points.",
          "status": "approved"
        }],
        "comment": "id:quiz_shelf_description\nPrompt to take a quiz when some covered skills are not proficient yet.\nUsed in the following files:\nFile: /Unit/Cells/QuizCell.js"
      },
      "quiz_shelf_description_retake": {
        "forms": [{
          "translated": "crwdns6388415:1%(num)dcrwdne6388415:1",
          "source": "Try taking the quiz again to level up on the above skills and collect up to %(num)d mastery point.",
          "status": "approved"
        }, {
          "translated": "crwdns6388415:5%(num)dcrwdne6388415:5",
          "source": "Try taking the quiz again to level up on the above skills and collect up to %(num)d mastery points.",
          "status": "approved"
        }],
        "comment": "id:quiz_shelf_description_retake\nPrompt to take a quiz when some covered skills are not proficient yet, and it’s been tried before.\nUsed in the following files:\nFile: /Unit/Cells/QuizCell.js"
      },
      "quiz_shelf_description_proficient": {
        "forms": [{
          "translated": "crwdns6388417:1%(num)dcrwdne6388417:1",
          "source": "You can’t level up or collect any more mastery points with this quiz. Take the Unit test to level up on all the skills and collect up to %(num)d mastery point.",
          "status": "approved"
        }, {
          "translated": "crwdns6388417:5%(num)dcrwdne6388417:5",
          "source": "You can’t level up or collect any more mastery points with this quiz. Take the Unit test to level up on all the skills and collect up to %(num)d mastery points.",
          "status": "approved"
        }],
        "comment": "id:quiz_shelf_description_proficient\nPrompt to take a quiz when all covered skills are proficient.\nUsed in the following files:\nFile: /Unit/Cells/QuizCell.js"
      },
      "unit_test_shelf_description_default": {
        "forms": [{
          "translated": "crwdns6388419:1%(num)dcrwdne6388419:1",
          "source": "Level up on all the skills in this unit and collect up to %(num)d mastery point!",
          "status": "approved"
        }, {
          "translated": "crwdns6388419:5%(num)dcrwdne6388419:5",
          "source": "Level up on all the skills in this unit and collect up to %(num)d mastery points!",
          "status": "approved"
        }],
        "comment": "id:unit_test_shelf_description_default\nPrompt to take a unit test.\nUsed in the following files:\nFile: /Unit/Cells/UnitTestCell.js"
      },
      "unit_test_shelf_description_retake": {
        "forms": [{
          "translated": "crwdns6388421:1%(num)dcrwdne6388421:1",
          "source": "Try taking the unit test again to level up on all the skills and collect up to %(num)d mastery point.",
          "status": "approved"
        }, {
          "translated": "crwdns6388421:5%(num)dcrwdne6388421:5",
          "source": "Try taking the unit test again to level up on all the skills and collect up to %(num)d mastery points.",
          "status": "approved"
        }],
        "comment": "id:unit_test_shelf_description_retake\nPrompt to retake a unit test in a unit that is not yet mastered.\nUsed in the following files:\nFile: /Unit/Cells/UnitTestCell.js"
      },
      "filter_with_count": {
        "forms": [{
          "translated": "crwdns6410379:1%(num)scrwdne6410379:1",
          "source": "Filter (%(num)s)",
          "status": "approved"
        }, {
          "translated": "crwdns6410379:5%(num)scrwdne6410379:5",
          "source": "Filters (%(num)s)",
          "status": "approved"
        }],
        "comment": "id:filter_with_count\nButton title to allow choosing search filters when one or more are applied.\nUsed in the following files:\nFile: /Explore/Explore.js"
      },
      "clear_filter": {
        "forms": [{
          "translated": "crwdns6389093:1crwdne6389093:1",
          "source": "Clear filter",
          "status": "approved"
        }, {
          "translated": "crwdns6389093:5%(num)scrwdne6389093:5",
          "source": "Clear %(num)s filters",
          "status": "approved"
        }],
        "comment": "id:clear_filter\nButton title for clearing search filters from search results.\nUsed in the following files:\nFile: /Explore/ClearFilterHeader.js"
      },
      "keep_it_up": {
        "forms": [{
          "translated": "crwdns6389101:1%(num)scrwdne6389101:1",
          "source": "Keep it up for %(num)s more.",
          "status": "approved"
        }, {
          "translated": "crwdns6389101:5%(num)scrwdne6389101:5",
          "source": "Keep it up for %(num)s more.",
          "status": "approved"
        }],
        "comment": "id:keep_it_up\nExercise feedback text when a user has answered a question correctly and has one or more questions left.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "questions_done": {
        "forms": [{
          "translated": "crwdns6389103:1%(num)scrwdne6389103:1",
          "source": "%(num)s question done, keep going!",
          "status": "approved"
        }, {
          "translated": "crwdns6389103:5%(num)scrwdne6389103:5",
          "source": "%(num)s questions done, keep going!",
          "status": "approved"
        }],
        "comment": "id:questions_done\nExercise feedback text when a user has answered one or more question.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "you_got_it_more": {
        "forms": [{
          "translated": "crwdns6389105:1%(num)scrwdne6389105:1",
          "source": "You got it. %(num)s more!",
          "status": "approved"
        }, {
          "translated": "crwdns6389105:5%(num)scrwdne6389105:5",
          "source": "You got it. %(num)s more!",
          "status": "approved"
        }],
        "comment": "id:you_got_it_more\nExercise feedback text when a user has answered a question correctly and has one more question left.\nUsed in the following files:\nFile: /Task/Exercise/ExerciseFeedback/utils.js"
      },
      "do_n_problems": {
        "forms": [{
          "translated": "crwdns6389107:1%(num)scrwdne6389107:1",
          "source": "Do %(num)s problem",
          "status": "approved"
        }, {
          "translated": "crwdns6389107:5%(num)scrwdne6389107:5",
          "source": "Do %(num)s problems",
          "status": "approved"
        }],
        "comment": "id:do_n_problems\nCompletion criteria when there are one or more problems in the exercise.\nUsed in the following files:\nFile: /Task/Exercise/state/completion-criteria-utils.js"
      },
      "n_course_mastery_goals": {
        "forms": [{
          "translated": "crwdns6821780:1%(num)scrwdne6821780:1",
          "source": "%(num)s Course Mastery goal",
          "status": "approved"
        }, {
          "translated": "crwdns6821780:5%(num)scrwdne6821780:5",
          "source": "%(num)s Course Mastery goals",
          "status": "approved"
        }],
        "comment": "id:n_course_mastery_goals\nSummary count of the number of Course Mastery goals.\nUsed in the following files:\nFile: /MyClasses/ui-utils.js"
      },
      "n_assignments": {
        "forms": [{
          "translated": "crwdns6821782:1%(num)scrwdne6821782:1",
          "source": "%(num)s assignment",
          "status": "approved"
        }, {
          "translated": "crwdns6821782:5%(num)scrwdne6821782:5",
          "source": "%(num)s assignments",
          "status": "approved"
        }],
        "comment": "id:n_assignments\nSummary count of the number of assignments.\nUsed in the following files:\nFile: /MyClasses/ui-utils.js"
      },
      "n_assignments_due_soon": {
        "forms": [{
          "translated": "crwdns6821784:1%(num)scrwdne6821784:1",
          "source": "%(num)s assignment due soon",
          "status": "approved"
        }, {
          "translated": "crwdns6821784:5%(num)scrwdne6821784:5",
          "source": "%(num)s assignments due soon",
          "status": "approved"
        }],
        "comment": "id:n_assignments_due_soon\nSummary count of the number of assignments due soon.\nUsed in the following files:\nFile: /MyClasses/ui-utils.js"
      },
      "n_assignments_overdue": {
        "forms": [{
          "translated": "crwdns6821786:1%(num)scrwdne6821786:1",
          "source": "%(num)s assignment overdue",
          "status": "approved"
        }, {
          "translated": "crwdns6821786:5%(num)scrwdne6821786:5",
          "source": "%(num)s assignments overdue",
          "status": "approved"
        }],
        "comment": "id:n_assignments_overdue\nSummary count of the number of assignments overdue.\nUsed in the following files:\nFile: /MyClasses/ui-utils.js"
      },
      "sot_question_count": {
        "forms": [{
          "translated": "crwdns6474181:1%(num)scrwdne6474181:1",
          "source": "%(num)s question",
          "status": "approved"
        }, {
          "translated": "crwdns6474181:5%(num)scrwdne6474181:5",
          "source": "%(num)s questions",
          "status": "approved"
        }],
        "comment": "id:sot_question_count\nText that shows the current number of questions in the upcoming task, including exercises, quizzes, and unit tests.\nUsed in the following files:\nFile: /Task/SimpleTaskCard/utils.js"
      },
      "eot_skills_count": {
        "forms": [{
          "translated": "crwdns6474185:1%(num)scrwdne6474185:1",
          "source": "%(num)s skill",
          "status": "approved"
        }, {
          "translated": "crwdns6474185:5%(num)scrwdne6474185:5",
          "source": "%(num)s skills",
          "status": "approved"
        }],
        "comment": "id:eot_skills_count\nLabel that explains that num1 skills were included in a quiz or test, eg \"4 skills\" or \"1 skill\".\nUsed in the following files:\nFile: /Task/SkillsListTaskCard/SkillsListTaskCardHeader.js"
      },
      "num_lessons": {
        "forms": [{
          "translated": "crwdns6410381:1%(num)scrwdne6410381:1",
          "source": "%(num)s lesson",
          "status": "approved"
        }, {
          "translated": "crwdns6410381:5%(num)scrwdne6410381:5",
          "source": "%(num)s lessons",
          "status": "approved"
        }],
        "comment": "id:num_lessons\nDescription of unit with child lessons\nUsed in the following files:\nFile: /BookmarksScreen/bookmark-utils.js"
      },
      "mastery_challenge_description": {
        "forms": [{
          "translated": "crwdns6515174:1%(num)scrwdne6515174:1",
          "source": "Strengthen skills you've already practiced in just %(num)s question.",
          "status": "approved"
        }, {
          "translated": "crwdns6515174:5%(num)scrwdne6515174:5",
          "source": "Strengthen skills you've already practiced in just %(num)s questions.",
          "status": "approved"
        }],
        "comment": "id:mastery_challenge_description\nDescribes what mastery challenge tasks are.\nUsed in the following files:\nFile: /Course/Cards/MasteryChallengeCardDescription.js"
      },
      "num_hours": {
        "forms": [{
          "translated": "crwdns6515175:1%(num)scrwdne6515175:1",
          "source": "%(num)s hour",
          "status": "approved"
        }, {
          "translated": "crwdns6515175:5%(num)scrwdne6515175:5",
          "source": "%(num)s hours",
          "status": "approved"
        }],
        "comment": "id:num_hours\nNumber of hours.\nUsed in the following files:\nFile: /Course/Cards/MasteryChallengeCardDescription.js"
      },
      "num_minutes": {
        "forms": [{
          "translated": "crwdns6515176:1%(num)scrwdne6515176:1",
          "source": "%(num)s minute",
          "status": "approved"
        }, {
          "translated": "crwdns6515176:5%(num)scrwdne6515176:5",
          "source": "%(num)s minutes",
          "status": "approved"
        }],
        "comment": "id:num_minutes\nNumber of minutes.\nUsed in the following files:\nFile: /Course/Cards/MasteryChallengeCardDescription.js"
      },
      "num_seconds": {
        "forms": [{
          "translated": "crwdns6515177:1%(num)scrwdne6515177:1",
          "source": "%(num)s second",
          "status": "approved"
        }, {
          "translated": "crwdns6515177:5%(num)scrwdne6515177:5",
          "source": "%(num)s seconds",
          "status": "approved"
        }],
        "comment": "id:num_seconds\nNumber of seconds.\nUsed in the following files:\nFile: /Course/Cards/MasteryChallengeCardDescription.js"
      },
      "tablet_quiz_cell_title": {
        "forms": [{
          "translated": "crwdns6388721:1%(quiz_name)scrwdnd6388721:1%(num)scrwdne6388721:1",
          "source": "%(quiz_name)s: %(num)s question",
          "status": "approved"
        }, {
          "translated": "crwdns6388721:5%(quiz_name)scrwdnd6388721:5%(num)scrwdne6388721:5",
          "source": "%(quiz_name)s: %(num)s questions",
          "status": "approved"
        }],
        "comment": "id:tablet_quiz_cell_title\nButton title for a quiz with a number of questions\nUsed in the following files:\nFile: /Unit/UnitScreenLargeLayoutLeftHandList.js"
      }
    }
  },
  "screenshotsByString": {
    "assignments_nav_title_kmap": ["ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__notLoaded", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loading", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedWithPromise", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedNoPromise", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedEmptyWithPromise", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedEmptyNoPromiseWaiting", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedEmptyNoPromiseNotWaiting", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__failedWithCache", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__failedWithNoCache"],
    "see_all": ["ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__notLoaded", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loading", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedWithPromise", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedNoPromise", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedEmptyWithPromise", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedEmptyNoPromiseWaiting", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedEmptyNoPromiseNotWaiting", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__failedWithCache", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__failedWithNoCache", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--notLoaded", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--notLoadedhasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loading", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadinghasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedWithPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedWithPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedNoPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedNoPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyWithPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyWithPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyNoPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyNoPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithCache", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithCachehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithNoCache", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithNoCachehasAdditionalAssignments"],
    "explore_loading_kmap": ["ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__notLoaded", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loading", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedEmptyWithPromise"],
    "assignment_kmap_completed": ["ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedWithPromise", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedNoPromise", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__failedWithCache"],
    "assignment_kmap_current_placement": ["ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedWithPromise", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedNoPromise", "ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__failedWithCache"],
    "assigned_goals_waiting_empty_title": ["ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedEmptyNoPromiseWaiting"],
    "assigned_goals_waiting_empty_subtitle": ["ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedEmptyNoPromiseWaiting"],
    "assignment_kmap_active_empty_title": ["ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedEmptyNoPromiseNotWaiting"],
    "assignment_kmap_active_empty_subtitle": ["ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__loadedEmptyNoPromiseNotWaiting"],
    "loading_state_wrapper_default_error_message": ["ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__failedWithNoCache", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithNoCache", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithNoCachehasAdditionalAssignments"],
    "explore_base_card_error_try_again": ["ClassDetails__Cards__AssignedKmapCard.fixture.js--Status__failedWithNoCache", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithNoCache", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithNoCachehasAdditionalAssignments"],
    "explore_loading_assignments": ["ClassDetails__Cards__AssignmentsCard.js.fixture.js--notLoaded", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--notLoadedhasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loading", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadinghasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyWithPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyWithPromisehasAdditionalAssignments"],
    "explore_assignments": ["ClassDetails__Cards__AssignmentsCard.js.fixture.js--notLoaded", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loading", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedWithPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedNoPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyWithPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyNoPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithCache", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithNoCache"],
    "explore_assignments_additional": ["ClassDetails__Cards__AssignmentsCard.js.fixture.js--notLoadedhasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadinghasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedWithPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedNoPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyWithPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyNoPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithCachehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithNoCachehasAdditionalAssignments"],
    "complete": ["ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedWithPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedWithPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedNoPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedNoPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithCache", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithCachehasAdditionalAssignments"],
    "best_score": ["ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedWithPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedWithPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedNoPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedNoPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithCache", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithCachehasAdditionalAssignments"],
    "due_date": ["ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedWithPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedWithPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedNoPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedNoPromisehasAdditionalAssignments", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithCache", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--failedWithCachehasAdditionalAssignments"],
    "explore_no_assignments_explore_title": ["ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyNoPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyNoPromisehasAdditionalAssignments"],
    "explore_no_assignments_explore_subtitle": ["ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyNoPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyNoPromisehasAdditionalAssignments"],
    "explore_assignments_see_n_due_later": ["ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyNoPromise", "ClassDetails__Cards__AssignmentsCard.js.fixture.js--loadedEmptyNoPromisehasAdditionalAssignments"],
    "article": ["Explore__ContentListItem.js.fixture.js--renders_a_an_Article_correctly"],
    "exercise": ["Explore__ContentListItem.js.fixture.js--renders_a_an_Exercise_correctly"],
    "explore_recent_lessons": ["Home__Sections__RecentLessons__RecentLessonsCard.fixture.js--loading", "Home__Sections__RecentLessons__RecentLessonsCard.fixture.js--empty", "Home__Sections__RecentLessons__RecentLessonsCard.fixture.js--one_missing"],
    "explore_loading_recent_lessons": ["Home__Sections__RecentLessons__RecentLessonsCard.fixture.js--loading"],
    "explore_no_recent_lessons": ["Home__Sections__RecentLessons__RecentLessonsCard.fixture.js--empty"],
    "add_a_teacher": ["ManageCoaches__TeacherList.js.fixture.js--loading", "ManageCoaches__TeacherList.js.fixture.js--loaded"],
    "manage_teachers_district_footer ": ["ManageCoaches__TeacherList.js.fixture.js--loaded"],
    "learn_more_sentence": ["ManageCoaches__TeacherList.js.fixture.js--loaded"],
    "good_work": ["Task__Exercise__ExerciseFeedback__Popover.js.fixture.js--normal", "Task__Exercise__ExerciseFeedback__Popover.js.fixture.js--all_questions_done", "Task__Exercise__ExerciseFeedback__Popover.js.fixture.js--for_answer_state__CorrectOnFirstTry"],
    "keep_it_up": ["Task__Exercise__ExerciseFeedback__Popover.js.fixture.js--normal", "Task__Exercise__ExerciseFeedback__Popover.js.fixture.js--for_answer_state__CorrectOnFirstTry"],
    "you_got_it_onward": ["Task__Exercise__ExerciseFeedback__Popover.js.fixture.js--all_questions_done"],
    "you_improved_your_answer": ["Task__Exercise__ExerciseFeedback__Popover.js.fixture.js--for_answer_state__CorrectEventually"],
    "you_got_it_persistence": ["Task__Exercise__ExerciseFeedback__Popover.js.fixture.js--for_answer_state__CorrectEventually"],
    "give_it_another_shot": ["Task__Exercise__ExerciseFeedback__Popover.js.fixture.js--for_answer_state__Incorrect"],
    "try_again": ["Task__Exercise__ExerciseFeedback__Popover.js.fixture.js--for_answer_state__Incorrect"],
    "almost_there": ["Task__Exercise__ExerciseFeedback__Popover.js.fixture.js--for_answer_state__CriteriaNotMet"]
  }
};
exports.default = _default;
},{}],"paDP":[function(require,module,exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// flow-next-uncovered-line
var rawData = require('./raw-data').default;

var _default = rawData;
exports.default = _default;
},{"./raw-data":"WOQ0"}],"FO+Z":[function(require,module,exports) {
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusClasses = exports.showStatus = exports.matchesFilter = exports.getStringStatuses = exports.checkNoneMatchFilter = void 0;

var _data = _interopRequireDefault(require("./data.js"));

/* eslint-disable camelcase */
var statusClasses = {
  crowdin_jipt_untranslated: 'untranslated',
  crowdin_jipt_translated: 'translated',
  crowdin_jipt_partially_translated: 'partially_translated',
  crowdin_jipt_approved: 'approved'
};
exports.statusClasses = statusClasses;

var getStringStatuses = function getStringStatuses(parentNode) {
  var stringStatuses = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = parentNode.querySelectorAll('.a-string')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var node = _step.value;
      var id = node.id;
      var status = 'untranslated';

      for (var _i = 0, _Object$keys = Object.keys(statusClasses); _i < _Object$keys.length; _i++) {
        var _key2 = _Object$keys[_i];
        var found = node.querySelector('.' + _key2);

        if (found) {
          status = statusClasses[_key2];
        }
      }

      stringStatuses[id] = status;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return stringStatuses;
};

exports.getStringStatuses = getStringStatuses;

var matchesFilter = function matchesFilter(status, filter) {
  switch (filter) {
    case 'All':
      return true;

    case 'Unapproved':
      return status === 'translated';

    case 'Untranslated':
      return status === 'untranslated' || status === 'partially_translated';
  }
};

exports.matchesFilter = matchesFilter;

var showStatus = function showStatus(_ref) {
  var untranslated = _ref.untranslated,
      partially_translated = _ref.partially_translated,
      translated = _ref.translated,
      approved = _ref.approved;
  var crowdinState = window.crowdinState; // flow-uncovered-line

  return "".concat(translated + approved, "/").concat(untranslated + partially_translated + translated + approved, " strings translated ").concat(crowdinState ? 'for ' + crowdinState.language.name : '');
};

exports.showStatus = showStatus;

var checkNoneMatchFilter = function checkNoneMatchFilter(state, filter) {
  for (var _i2 = 0, _Object$keys2 = Object.keys(_data.default.translations.singular); _i2 < _Object$keys2.length; _i2++) {
    var _key4 = _Object$keys2[_i2];

    if (matchesFilter(state.statuses[_key4], filter)) {
      return false;
    }
  }

  for (var _i3 = 0, _Object$keys3 = Object.keys(_data.default.translations.plural); _i3 < _Object$keys3.length; _i3++) {
    var _key6 = _Object$keys3[_i3];

    if (matchesFilter(state.statuses[_key6], filter)) {
      return false;
    }
  }

  return true;
};

exports.checkNoneMatchFilter = checkNoneMatchFilter;
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","./data.js":"paDP"}],"LOR1":[function(require,module,exports) {
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _data = _interopRequireDefault(require("./data.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var String = function String(_ref) {
  var id = _ref.id,
      source = _ref.source,
      translated = _ref.translated,
      onSelect = _ref.onSelect,
      hide = _ref.hide;
  return React.createElement("div", {
    className: "a-string",
    style: {
      display: hide ? 'none' : 'contents'
    },
    id: id
  }, React.createElement("div", {
    className: "source"
  }, source), React.createElement("div", {
    className: "dest",
    onMouseDown: function onMouseDown() {
      return onSelect();
    }
  }, React.createElement("div", {
    className: "jipt-string"
  }, translated), React.createElement("div", {
    className: "comment"
  }, _data.default.screenshotsByString[id] ? '📷 (has screenshots) ' : '', id)));
};

var _default = String;
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","@babel/runtime/helpers/typeof":"b9XL","react":"1n8/","./data.js":"paDP"}],"I3Wr":[function(require,module,exports) {
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _data = _interopRequireDefault(require("./data.js"));

var utils = _interopRequireWildcard(require("./utils"));

var _String = _interopRequireDefault(require("./String"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Images = function Images(_ref) {
  var id = _ref.id,
      onZoomIn = _ref.onZoomIn;

  if (!_data.default.screenshotsByString[id]) {
    return React.createElement("div", {
      style: {
        borderTop: '1px solid #ccc',
        backgroundColor: '#eee',
        padding: 16,
        paddingBottom: 50 + 16
      }
    }, "No screenshots found for the selected string.");
  }

  return React.createElement("div", {
    style: {
      padding: 8,
      paddingBottom: 50,
      borderTop: '1px solid #ccc',
      display: 'flex',
      maxHeight: 320,
      flexDirection: 'row',
      alignItems: 'center',
      overflowX: 'auto',
      backgroundColor: '#eee'
    }
  }, _data.default.screenshotsByString[id].map(function (src) {
    return React.createElement("img", {
      src: 'images/' + src + '.png',
      alt: "A screenshot where ".concat(id, " is used"),
      onClick: function onClick() {
        return onZoomIn(src);
      },
      style: {
        cursor: 'pointer',
        maxWidth: 300,
        marginRight: 24,
        maxHeight: 300
      }
    });
  }));
};

var ZoomedImage = function ZoomedImage(_ref2) {
  var src = _ref2.src,
      onClose = _ref2.onClose;
  return React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 10000,
      backgroundColor: 'rgba(0,0,0,0.7)',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    onClick: function onClick() {
      return onClose();
    }
  }, React.createElement("img", {
    src: 'images/' + src + '.png',
    alt: "A screenshot where the selected string is used",
    style: {
      backgroundColor: 'white'
    }
  }));
};

var FilterButton = function FilterButton(_ref3) {
  var title = _ref3.title,
      filter = _ref3.filter,
      current = _ref3.current,
      setFilter = _ref3.setFilter;
  return React.createElement("button", {
    onClick: function onClick() {
      return setFilter(filter);
    },
    disabled: current === filter,
    style: _objectSpread({
      border: 'none',
      backgroundColor: 'transparent',
      color: 'white'
    }, current === filter ? {
      // fontWeight: 'bold',
      textDecoration: 'underline'
    } : {
      cursor: 'pointer'
    })
  }, title);
};

var App = function App() {
  var _React$useState = React.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1];

  var _React$useState3 = React.useState('All'),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      filter = _React$useState4[0],
      setFilter = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      zoomedImage = _React$useState6[0],
      setZoomedImage = _React$useState6[1];

  var _React$useState7 = React.useState(null),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      state = _React$useState8[0],
      setState = _React$useState8[1];

  var parent = React.useRef(null); // Using this ref instead of having the useEffect depend on state because we don't
  // want to re-register the observer every time the state changes -- we just want the
  // observer function to be able to access the most recent state.

  var stateRef = React.useRef(state);
  stateRef.current = state;
  React.useEffect(function () {
    if (!parent.current) {
      // If we're not mounted, abort
      return;
    }

    var current = parent.current;
    /**
     * Ok, what's going on here? This is how we "communicate" with crowdin's
     * jipt magic.
     * We want to
     * 1) hide strings that have been translated, and
     * 2) show a summary in the header of how far things are
     * In order to do this, we need to get from crowdin information on what
     * has been translated.
     * Crowdin is monitoring the page to find the special jipt strings and
     * replaces them with the translated text, along with some helpful css
     * classes to indicate the translation status.
     * We use this MutationObserver to detect when crowdin has swapped in a
     * string, and then read the DOM to determine the translation statuses of
     * all the strings.
     */

    var observer = new MutationObserver(function () {
      var newStatus = {
        counts: {
          untranslated: current.querySelectorAll('.crowdin_jipt_untranslated').length,
          partially_translated: current.querySelectorAll('.crowdin_jipt_partially_translated').length,
          translated: current.querySelectorAll('.crowdin_jipt_translated').length,
          approved: current.querySelectorAll('.crowdin_jipt_approved').length
        },
        statuses: utils.getStringStatuses(current)
      }; // Expose this data in case we want to inspect it manually
      // You can do `copy(JSON.stringify(window.translationStatuses))` in the browser console to
      // get a dump that you can e.g. put into a file (with `pbpaste > some-file.json` in the cli).
      // flow-next-uncovered-line

      window.translationStatuses = newStatus.statuses; // Only setState if the new state is different (otherwise we could be
      // stuck in a refresh loop any time react updates).
      // flow-next-uncovered-line

      if (!(0, _deepEqual.default)(newStatus, stateRef.current)) {
        setState(newStatus);
      }
    });
    observer.observe(parent.current, {
      subtree: true,
      childList: true
    });
    return function () {
      return observer.disconnect();
    };
  }, []);
  return React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0,
      flexDirection: 'column',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'rgb(50, 68, 82)',
      color: 'white',
      padding: 16
    }
  }, React.createElement("div", null, state ? utils.showStatus(state.counts) : 'Not loaded'), React.createElement("div", {
    style: {
      flex: 1
    }
  }), 'Show: ', React.createElement("div", {
    style: {
      flexBasis: 8
    }
  }), React.createElement(FilterButton, {
    title: "All",
    filter: "All",
    current: filter,
    setFilter: setFilter
  }), React.createElement(FilterButton, {
    title: "Needs translation",
    filter: "Untranslated",
    current: filter,
    setFilter: setFilter
  }), React.createElement(FilterButton, {
    title: "Needs approval",
    filter: "Unapproved",
    current: filter,
    setFilter: setFilter
  })), React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    },
    ref: function ref(_ref4) {
      return parent.current = _ref4;
    }
  }, state && utils.checkNoneMatchFilter(state, filter) ? React.createElement("div", {
    style: {
      padding: 32,
      fontSize: 24
    }
  }, filter === 'Untranslated' ? 'Everything has been translated! Click "show all" to see all.' : filter === 'Unapproved' ? 'Everything that has been translated has been approved! Click "show all" to see all.' : 'No strings found for this language') : null, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  }, Object.keys(_data.default.translations.singular).map(function (key) {
    var config = _data.default.translations.singular[key]; // This should never happen, as the jipt translations are automatic

    if (config.form.status === 'untranslated') {
      // eslint-disable-next-line no-console
      console.warn("The string ".concat(key, " doesn't have a jipt translation!"));
      return;
    }

    return React.createElement(_String.default, {
      key: key,
      id: key,
      hide: state ? !utils.matchesFilter(state.statuses[key], filter) : false,
      source: config.form.source,
      translated: config.form.translated,
      onSelect: function onSelect() {
        return setSelected(key);
      }
    });
  }), Object.keys(_data.default.translations.plural).map(function (key) {
    var config = _data.default.translations.plural[key]; // This should never happen, as the jipt translations are automatic

    if (config.forms[0].status === 'untranslated') {
      // eslint-disable-next-line no-console
      console.warn("The string ".concat(key, " doesn't have a jipt translation!"));
      return;
    }

    return React.createElement(_String.default, {
      key: key,
      id: key,
      hide: state ? !utils.matchesFilter(state.statuses[key], filter) : false,
      source: config.forms[0].source,
      translated: config.forms[0].translated,
      onSelect: function onSelect() {
        return setSelected(key);
      }
    });
  }))), selected ? React.createElement(Images, {
    id: selected,
    onZoomIn: setZoomedImage
  }) : null, zoomedImage ? React.createElement(ZoomedImage, {
    onClose: function onClose() {
      return setZoomedImage(null);
    },
    src: zoomedImage
  }) : null);
};

var root = document.getElementById('root');

if (root) {
  (0, _reactDom.render)(React.createElement(App, null), root);
}
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","@babel/runtime/helpers/typeof":"b9XL","@babel/runtime/helpers/slicedToArray":"69HE","@babel/runtime/helpers/defineProperty":"IxO8","deep-equal":"koiw","react":"1n8/","react-dom":"NKHc","./data.js":"paDP","./utils":"FO+Z","./String":"LOR1"}]},{},["I3Wr"], null)
//# sourceMappingURL=/render.af721af9.js.map