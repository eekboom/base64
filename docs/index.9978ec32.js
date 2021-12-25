// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gT4u9":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "e91ee9189978ec32";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ipvmp":[function(require,module,exports) {
var _jsxRuntime = require("preact/jsx-runtime");
var _preact = require("preact");
var _app = require("./App");
_preact.render(/*#__PURE__*/ _jsxRuntime.jsx(_app.App, {
    __source: {
        fileName: "src/index.tsx",
        lineNumber: 4,
        columnNumber: 8
    },
    __self: undefined
}), document.body);

},{"preact/jsx-runtime":"fr9w2","preact":"2ETNS","./App":"eKGy4"}],"fr9w2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Fragment", ()=>_preact.Fragment
);
parcelHelpers.export(exports, "jsx", ()=>e1
);
parcelHelpers.export(exports, "jsxs", ()=>e1
);
parcelHelpers.export(exports, "jsxDEV", ()=>e1
);
var _preact = require("preact");
var o = 0;
function e1(_, e, n, t, f) {
    var l, s, u = {
    };
    for(s in e)"ref" == s ? l = e[s] : u[s] = e[s];
    var a = {
        type: _,
        props: u,
        key: n,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --o,
        __source: t,
        __self: f
    };
    if ("function" == typeof _ && (l = _.defaultProps)) for(s in l)void 0 === u[s] && (u[s] = l[s]);
    return _preact.options.vnode && _preact.options.vnode(a), a;
}

},{"preact":"2ETNS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2ETNS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>S
);
parcelHelpers.export(exports, "hydrate", ()=>q
);
parcelHelpers.export(exports, "createElement", ()=>v1
);
parcelHelpers.export(exports, "h", ()=>v1
);
parcelHelpers.export(exports, "Fragment", ()=>d1
);
parcelHelpers.export(exports, "createRef", ()=>p1
);
parcelHelpers.export(exports, "isValidElement", ()=>i1
);
parcelHelpers.export(exports, "Component", ()=>_1
);
parcelHelpers.export(exports, "cloneElement", ()=>B
);
parcelHelpers.export(exports, "createContext", ()=>D
);
parcelHelpers.export(exports, "toChildArray", ()=>A1
);
parcelHelpers.export(exports, "options", ()=>l1
);
var n1, l1, u1, i1, t1, r1, o1, f1, e1 = {
}, c1 = [], s1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a1(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function h1(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
}
function v1(l, u, i) {
    var t, r, o, f = {
    };
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n1.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for(o in l.defaultProps)void 0 === f[o] && (f[o] = l.defaultProps[o]);
    return y1(l, f, t, r, null);
}
function y1(n, i, t, r, o) {
    var f = {
        type: n,
        props: i,
        key: t,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++u1 : o
    };
    return null == o && null != l1.vnode && l1.vnode(f), f;
}
function p1() {
    return {
        current: null
    };
}
function d1(n) {
    return n.children;
}
function _1(n, l) {
    this.props = n, this.context = l;
}
function k1(n, l) {
    if (null == l) return n.__ ? k1(n.__, n.__.__k.indexOf(n) + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? k1(n) : null;
}
function b1(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return b1(n);
    }
}
function m1(n) {
    (!n.__d && (n.__d = !0) && t1.push(n) && !g1.__r++ || o1 !== l1.debounceRendering) && ((o1 = l1.debounceRendering) || r1)(g1);
}
function g1() {
    for(var n2; g1.__r = t1.length;)n2 = t1.sort(function(n, l) {
        return n.__v.__b - l.__v.__b;
    }), t1 = [], n2.some(function(n) {
        var l, u, i, t, r, o;
        n.__d && (r = (t = (l = n).__v).__e, (o = l.__P) && (u = [], (i = a1({
        }, t)).__v = t.__v + 1, j(o, t, i, l.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [
            r
        ] : null, u, null == r ? k1(t) : r, t.__h), z(u, t), t.__e != r && b1(t)));
    });
}
function w1(n, l, u, i, t, r, o, f, s, a) {
    var h, v, p, _, b, m, g, w = i && i.__k || c1, A = w.length;
    for(u.__k = [], h = 0; h < l.length; h++)if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y1(null, _, null, null, _) : Array.isArray(_) ? y1(d1, {
        children: _
    }, null, null, null) : _.__b > 0 ? y1(_.type, _.props, _.key, null, _.__v) : _)) {
        if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0;
        else for(v = 0; v < A; v++){
            if ((p = w[v]) && _.key == p.key && _.type === p.type) {
                w[v] = void 0;
                break;
            }
            p = null;
        }
        j(n, _, p = p || e1, t, r, o, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x1(_, s, n) : s = P1(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k1(p));
    }
    for(u.__e = m, h = A; h--;)null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k1(i, h + 1)), N(w[h], w[h]));
    if (g) for(h = 0; h < g.length; h++)M(g[h], g[++h], g[++h]);
}
function x1(n, l, u) {
    for(var i, t = n.__k, r = 0; t && r < t.length; r++)(i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? x1(i, l, u) : P1(u, i, i, t, i.__e, l));
    return l;
}
function A1(n3, l) {
    return l = l || [], null == n3 || "boolean" == typeof n3 || (Array.isArray(n3) ? n3.some(function(n) {
        A1(n, l);
    }) : l.push(n3)), l;
}
function P1(n, l, u, i, t, r) {
    var o, f, e;
    if (void 0 !== l.__d) o = l.__d, l.__d = void 0;
    else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;
    else {
        for(f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2)if (f == t) break n;
        n.insertBefore(t, r), o = r;
    }
    return void 0 !== o ? o : t.nextSibling;
}
function C(n, l, u, i, t) {
    var r;
    for(r in u)"children" === r || "key" === r || r in l || H(n, r, null, u[r], i);
    for(r in l)t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || H(n, r, l[r], u[r], i);
}
function $(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s1.test(l) ? u : u + "px";
}
function H(n, l, u, i, t) {
    var r;
    n: if ("style" === l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof i && (n.style.cssText = i = ""), i) for(l in i)u && l in u || $(n.style, l, "");
            if (u) for(l in u)i && u[l] === i[l] || $(n.style, l, u[l]);
        }
    } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {
    }), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? T : I, r) : n.removeEventListener(l, r ? T : I, r);
    else if ("dangerouslySetInnerHTML" !== l) {
        if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n4) {
        }
        "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
    }
}
function I(n) {
    this.l[n.type + !1](l1.event ? l1.event(n) : n);
}
function T(n) {
    this.l[n.type + !0](l1.event ? l1.event(n) : n);
}
function j(n5, u, i, t, r, o, f, e, c) {
    var s, h, v, y, p, k, b, m, g, x, A, P = u.type;
    if (void 0 !== u.constructor) return null;
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [
        e
    ]), (s = l1.__b) && s(u);
    try {
        n: if ("function" == typeof P) {
            if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new _1(m, x), h.constructor = P, h.render = O), g && g.sub(h), h.props = m, h.state || (h.state = {
            }), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a1({
            }, h.__s)), a1(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, p = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
                if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === i.__v) {
                    h.props = m, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function(n) {
                        n && (n.__ = u);
                    }), h.__h.length && f.push(h);
                    break n;
                }
                null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function() {
                    h.componentDidUpdate(y, p, k);
                });
            }
            h.context = x, h.props = m, h.state = h.__s, (s = l1.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n5, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a1(a1({
            }, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d1 && null == s.key ? s.props.children : s, w1(n5, Array.isArray(A) ? A : [
                A
            ], u, i, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
        } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, r, o, f, c);
        (s = l1.diffed) && s(u);
    } catch (n) {
        u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l1.__e(n, u, i);
    }
}
function z(n6, u2) {
    l1.__c && l1.__c(u2, n6), n6.some(function(u) {
        try {
            n6 = u.__h, u.__h = [], n6.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l1.__e(n, u.__v);
        }
    });
}
function L(l, u, i, t, r, o, f, c) {
    var s, a, v, y = i.props, p = u.props, d = u.type, _ = 0;
    if ("svg" === d && (r = !0), null != o) {
        for(; _ < o.length; _++)if ((s = o[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
            l = s, o[_] = null;
            break;
        }
    }
    if (null == l) {
        if (null === d) return document.createTextNode(p);
        l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, c = !1;
    }
    if (null === d) y === p || c && l.data === p || (l.data = p);
    else {
        if (o = o && n1.call(l.childNodes), a = (y = i.props || e1).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
            if (null != o) for(y = {
            }, _ = 0; _ < l.attributes.length; _++)y[l.attributes[_].name] = l.attributes[_].value;
            (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
        }
        if (C(l, p, y, r, c), v) u.__k = [];
        else if (_ = u.props.children, w1(l, Array.isArray(_) ? _ : [
            _
        ], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && k1(i, 0), c), null != o) for(_ = o.length; _--;)null != o[_] && h1(o[_]);
        c || ("value" in p && void 0 !== (_ = p.value) && (_ !== y.value || _ !== l.value || "progress" === d && !_) && H(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H(l, "checked", _, y.checked, !1));
    }
    return l;
}
function M(n, u, i) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n7) {
        l1.__e(n7, i);
    }
}
function N(n, u, i) {
    var t, r;
    if (l1.unmount && l1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
        if (t.componentWillUnmount) try {
            t.componentWillUnmount();
        } catch (n) {
            l1.__e(n, u);
        }
        t.base = t.__P = null;
    }
    if (t = n.__k) for(r = 0; r < t.length; r++)t[r] && N(t[r], u, "function" != typeof n.type);
    i || null == n.__e || h1(n.__e), n.__e = n.__d = void 0;
}
function O(n, l, u) {
    return this.constructor(n, u);
}
function S(u, i, t) {
    var r, o, f;
    l1.__ && l1.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j(i, u = (!r && t || i).__k = v1(d1, null, [
        u
    ]), o || e1, e1, void 0 !== i.ownerSVGElement, !r && t ? [
        t
    ] : o ? null : i.firstChild ? n1.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), z(f, u);
}
function q(n, l) {
    S(n, l, q);
}
function B(l, u, i) {
    var t, r, o, f = a1({
    }, l.props);
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n1.call(arguments, 2) : i), y1(l.type, f, t || l.key, r || l.ref, null);
}
function D(n8, l2) {
    var u3 = {
        __c: l2 = "__cC" + f1++,
        __: n8,
        Consumer: function(n, l) {
            return n.children(l);
        },
        Provider: function(n9) {
            var u, i;
            return this.getChildContext || (u = [], (i = {
            })[l2] = this, this.getChildContext = function() {
                return i;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && u.some(m1);
            }, this.sub = function(n) {
                u.push(n);
                var l = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    u.splice(u.indexOf(n), 1), l && l.call(n);
                };
            }), n9.children;
        }
    };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
}
n1 = c1.slice, l1 = {
    __e: function(n, l) {
        for(var u, i, t; l = l.__;)if ((u = l.__c) && !u.__) try {
            if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
        } catch (l3) {
            n = l3;
        }
        throw n;
    }
}, u1 = 0, i1 = function(n) {
    return null != n && void 0 === n.constructor;
}, _1.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a1({
    }, this.state), "function" == typeof n && (n = n(a1({
    }, u), this.props)), n && a1(u, n), null != n && this.__v && (l && this.__h.push(l), m1(this));
}, _1.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), m1(this));
}, _1.prototype.render = d1, t1 = [], r1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g1.__r = 0, f1 = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eKGy4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App
);
var _jsxRuntime = require("preact/jsx-runtime");
var _base64 = require("./Base64");
var _base64Default = parcelHelpers.interopDefault(_base64);
const App = ()=>{
    return(/*#__PURE__*/ _jsxRuntime.jsxs("div", {
        __source: {
            fileName: "src/App.tsx",
            lineNumber: 5,
            columnNumber: 9
        },
        __self: undefined,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsx("h1", {
                __source: {
                    fileName: "src/App.tsx",
                    lineNumber: 6,
                    columnNumber: 13
                },
                __self: undefined,
                children: "Base64 Encoder"
            }),
            /*#__PURE__*/ _jsxRuntime.jsx(_base64Default.default, {
                __source: {
                    fileName: "src/App.tsx",
                    lineNumber: 7,
                    columnNumber: 13
                },
                __self: undefined
            })
        ]
    }));
};

},{"preact/jsx-runtime":"fr9w2","./Base64":"4PF66","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4PF66":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _compat = require("preact/compat");
function Base64(props) {
    const [myValue, setMyValue] = _compat.useState("");
    const handleChange = (event)=>{
        setMyValue(event.target.value);
    };
    const base64Encode = (text)=>{
        try {
            return btoa(text);
        } catch (e) {
            // TODO add encoding, see for example https://github.com/ashtuchkin/iconv-lite
            return "< String contains characters outside of ISO-8859-1 >";
        }
    };
    return(/*#__PURE__*/ _jsxRuntime.jsxs(_jsxRuntime.Fragment, {
        children: [
            /*#__PURE__*/ _jsxRuntime.jsx("textarea", {
                value: myValue,
                onChange: handleChange,
                cols: 60,
                __source: {
                    fileName: "src/Base64.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                },
                __self: this
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("div", {
                __source: {
                    fileName: "src/Base64.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                },
                __self: this,
                children: "Base 64:"
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("div", {
                id: "base64-output",
                __source: {
                    fileName: "src/Base64.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                },
                __self: this,
                children: base64Encode(myValue)
            })
        ]
    }));
}
exports.default = Base64;

},{"preact/jsx-runtime":"fr9w2","preact/compat":"6WFzs","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6WFzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>_preact.createElement
);
parcelHelpers.export(exports, "createContext", ()=>_preact.createContext
);
parcelHelpers.export(exports, "createRef", ()=>_preact.createRef
);
parcelHelpers.export(exports, "Fragment", ()=>_preact.Fragment
);
parcelHelpers.export(exports, "Component", ()=>_preact.Component
);
parcelHelpers.export(exports, "version", ()=>nn
);
parcelHelpers.export(exports, "Children", ()=>k
);
parcelHelpers.export(exports, "render", ()=>B
);
parcelHelpers.export(exports, "hydrate", ()=>$
);
parcelHelpers.export(exports, "unmountComponentAtNode", ()=>un
);
parcelHelpers.export(exports, "createPortal", ()=>W
);
parcelHelpers.export(exports, "createFactory", ()=>tn
);
parcelHelpers.export(exports, "cloneElement", ()=>rn
);
parcelHelpers.export(exports, "isValidElement", ()=>en
);
parcelHelpers.export(exports, "findDOMNode", ()=>on
);
parcelHelpers.export(exports, "PureComponent", ()=>E
);
parcelHelpers.export(exports, "memo", ()=>g
);
parcelHelpers.export(exports, "forwardRef", ()=>x
);
parcelHelpers.export(exports, "flushSync", ()=>cn
);
parcelHelpers.export(exports, "unstable_batchedUpdates", ()=>ln
);
parcelHelpers.export(exports, "StrictMode", ()=>fn
);
parcelHelpers.export(exports, "Suspense", ()=>L
);
parcelHelpers.export(exports, "SuspenseList", ()=>M
);
parcelHelpers.export(exports, "lazy", ()=>F
);
parcelHelpers.export(exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", ()=>X
);
var _hooks = require("preact/hooks");
var _preact = require("preact");
parcelHelpers.exportAll(_hooks, exports);
function S(n, t) {
    for(var e in t)n[e] = t[e];
    return n;
}
function C(n, t) {
    for(var e in n)if ("__source" !== e && !(e in t)) return !0;
    for(var r in t)if ("__source" !== r && n[r] !== t[r]) return !0;
    return !1;
}
function E(n) {
    this.props = n;
}
function g(n1, t1) {
    function e1(n) {
        var e = this.props.ref, r = e == n.ref;
        return !r && e && (e.call ? e(null) : e.current = null), t1 ? !t1(this.props, n) || !r : C(this.props, n);
    }
    function r1(t) {
        return this.shouldComponentUpdate = e1, _preact.createElement(n1, t);
    }
    return r1.displayName = "Memo(" + (n1.displayName || n1.name) + ")", r1.prototype.isReactComponent = !0, r1.__f = !0, r1;
}
(E.prototype = new _preact.Component).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function(n, t) {
    return C(this.props, n) || C(this.state, t);
};
var w = _preact.options.__b;
_preact.options.__b = function(n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), w && w(n);
};
var R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function x(n) {
    function t2(t, e) {
        var r = S({
        }, t);
        return delete r.ref, n(r, (e = t.ref || e) && ("object" != typeof e || "current" in e) ? e : null);
    }
    return t2.$$typeof = R, t2.render = t2, t2.prototype.isReactComponent = t2.__f = !0, t2.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t2;
}
var N = function(n, t) {
    return null == n ? null : _preact.toChildArray(_preact.toChildArray(n).map(t));
}, k = {
    map: N,
    forEach: N,
    count: function(n) {
        return n ? _preact.toChildArray(n).length : 0;
    },
    only: function(n) {
        var t = _preact.toChildArray(n);
        if (1 !== t.length) throw "Children.only";
        return t[0];
    },
    toArray: _preact.toChildArray
}, A = _preact.options.__e;
_preact.options.__e = function(n, t, e) {
    if (n.then) {
        for(var r, u = t; u = u.__;)if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
    }
    A(n, t, e);
};
var O = _preact.options.unmount;
function L() {
    this.__u = 0, this.t = null, this.__b = null;
}
function U(n) {
    var t = n.__.__c;
    return t && t.__e && t.__e(n);
}
function F(n2) {
    var t, e, r;
    function u1(u) {
        if (t || (t = n2()).then(function(n) {
            e = n.default || n;
        }, function(n) {
            r = n;
        }), r) throw r;
        if (!e) throw t;
        return _preact.createElement(e, u);
    }
    return u1.displayName = "Lazy", u1.__f = !0, u1;
}
function M() {
    this.u = null, this.o = null;
}
_preact.options.unmount = function(n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), O && O(n);
}, (L.prototype = new _preact.Component).__c = function(n3, t3) {
    var e2 = t3.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(e2);
    var u = U(r2.__v), o = !1, i = function() {
        o || (o = !0, e2.__R = null, u ? u(l) : l());
    };
    e2.__R = i;
    var l = function() {
        if (!--r2.__u) {
            if (r2.state.__e) {
                var n4 = r2.state.__e;
                r2.__v.__k[0] = (function n(t5, e, r) {
                    return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t) {
                        return n(t, e, r);
                    }), t5.__c && t5.__c.__P === e && (t5.__e && r.insertBefore(t5.__e, t5.__d), t5.__c.__e = !0, t5.__c.__P = r)), t5;
                })(n4, n4.__c.__P, n4.__c.__O);
            }
            var t4;
            for(r2.setState({
                __e: r2.__b = null
            }); t4 = r2.t.pop();)t4.forceUpdate();
        }
    }, c = !0 === t3.__h;
    (r2.__u++) || c || r2.setState({
        __e: r2.__b = r2.__v.__k[0]
    }), n3.then(i, i);
}, L.prototype.componentWillUnmount = function() {
    this.t = [];
}, L.prototype.render = function(n5, t6) {
    if (this.__b) {
        if (this.__v.__k) {
            var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
            this.__v.__k[0] = (function n6(t7, e, r) {
                return t7 && (t7.__c && t7.__c.__H && (t7.__c.__H.__.forEach(function(n) {
                    "function" == typeof n.__c && n.__c();
                }), t7.__c.__H = null), null != (t7 = S({
                }, t7)).__c && (t7.__c.__P === r && (t7.__c.__P = e), t7.__c = null), t7.__k = t7.__k && t7.__k.map(function(t) {
                    return n6(t, e, r);
                })), t7;
            })(this.__b, e3, r3.__O = r3.__P);
        }
        this.__b = null;
    }
    var u = t6.__e && _preact.createElement(_preact.Fragment, null, n5.fallback);
    return u && (u.__h = null), [
        _preact.createElement(_preact.Fragment, null, t6.__e ? null : n5.children),
        u
    ];
};
var T = function(n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for(e = n.u; e;){
        for(; e.length > 3;)e.pop()();
        if (e[1] < e[0]) break;
        n.u = e = e[2];
    }
};
function D(n) {
    return this.getChildContext = function() {
        return n.context;
    }, n.children;
}
function I(n7) {
    var t = this, e = n7.i;
    t.componentWillUnmount = function() {
        _preact.render(null, t.l), t.l = null, t.i = null;
    }, t.i && t.i !== e && t.componentWillUnmount(), n7.__v ? (t.l || (t.i = e, t.l = {
        nodeType: 1,
        parentNode: e,
        childNodes: [],
        appendChild: function(n) {
            this.childNodes.push(n), t.i.appendChild(n);
        },
        insertBefore: function(n, e) {
            this.childNodes.push(n), t.i.appendChild(n);
        },
        removeChild: function(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
        }
    }), _preact.render(_preact.createElement(D, {
        context: t.context
    }, n7.__v), t.l)) : t.l && t.componentWillUnmount();
}
function W(n, t) {
    return _preact.createElement(I, {
        __v: n,
        i: t
    });
}
(M.prototype = new _preact.Component).__e = function(n) {
    var t = this, e = U(t.__v), r = t.o.get(n);
    return r[0]++, function(u) {
        var o = function() {
            t.props.revealOrder ? (r.push(u), T(t, n, r)) : u();
        };
        e ? e(o) : o();
    };
}, M.prototype.render = function(n) {
    this.u = null, this.o = new Map;
    var t = _preact.toChildArray(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for(var e = t.length; e--;)this.o.set(t[e], this.u = [
        1,
        0,
        this.u
    ]);
    return n.children;
}, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function() {
    var n = this;
    this.o.forEach(function(t, e) {
        T(n, e, t);
    });
};
var j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, V = "undefined" != typeof document, z = function(n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
};
function B(n, t, e) {
    return null == t.__k && (t.textContent = ""), _preact.render(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function $(n, t, e) {
    return _preact.hydrate(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
_preact.Component.prototype.isReactComponent = {
}, [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate"
].forEach(function(n) {
    Object.defineProperty(_preact.Component.prototype, n, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + n];
        },
        set: function(t) {
            Object.defineProperty(this, n, {
                configurable: !0,
                writable: !0,
                value: t
            });
        }
    });
});
var H = _preact.options.event;
function Z() {
}
function Y() {
    return this.cancelBubble;
}
function q() {
    return this.defaultPrevented;
}
_preact.options.event = function(n) {
    return H && (n = H(n)), n.persist = Z, n.isPropagationStopped = Y, n.isDefaultPrevented = q, n.nativeEvent = n;
};
var G, J = {
    configurable: !0,
    get: function() {
        return this.class;
    }
}, K = _preact.options.vnode;
_preact.options.vnode = function(n8) {
    var t = n8.type, e = n8.props, r = e;
    if ("string" == typeof t) {
        var u = -1 === t.indexOf("-");
        for(var o in r = {
        }, e){
            var i = e[o];
            V && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !z(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : u && P.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = _preact.toChildArray(e.children).forEach(function(n) {
            n.props.selected = -1 != r.value.indexOf(n.props.value);
        })), "select" == t && null != r.defaultValue && (r.value = _preact.toChildArray(e.children).forEach(function(n) {
            n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
        })), n8.props = r, e.class != e.className && (J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", J));
    }
    n8.$$typeof = j, K && K(n8);
};
var Q = _preact.options.__r;
_preact.options.__r = function(n) {
    Q && Q(n), G = n.__c;
};
var X = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(n) {
                return G.__n[n.__c].props.value;
            }
        }
    }
}, nn = "17.0.2";
function tn(n) {
    return _preact.createElement.bind(null, n);
}
function en(n) {
    return !!n && n.$$typeof === j;
}
function rn(n) {
    return en(n) ? _preact.cloneElement.apply(null, arguments) : n;
}
function un(n) {
    return !!n.__k && (_preact.render(null, n), !0);
}
function on(n) {
    return n && (n.base || 1 === n.nodeType && n) || null;
}
var ln = function(n, t) {
    return n(t);
}, cn = function(n, t) {
    return n(t);
}, fn = _preact.Fragment;
exports.default = {
    useState: _hooks.useState,
    useReducer: _hooks.useReducer,
    useEffect: _hooks.useEffect,
    useLayoutEffect: _hooks.useLayoutEffect,
    useRef: _hooks.useRef,
    useImperativeHandle: _hooks.useImperativeHandle,
    useMemo: _hooks.useMemo,
    useCallback: _hooks.useCallback,
    useContext: _hooks.useContext,
    useDebugValue: _hooks.useDebugValue,
    version: "17.0.2",
    Children: k,
    render: B,
    hydrate: $,
    unmountComponentAtNode: un,
    createPortal: W,
    createElement: _preact.createElement,
    createContext: _preact.createContext,
    createFactory: tn,
    cloneElement: rn,
    createRef: _preact.createRef,
    Fragment: _preact.Fragment,
    isValidElement: en,
    findDOMNode: on,
    Component: _preact.Component,
    PureComponent: E,
    memo: g,
    forwardRef: x,
    flushSync: cn,
    unstable_batchedUpdates: ln,
    StrictMode: _preact.Fragment,
    Suspense: L,
    SuspenseList: M,
    lazy: F,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X
};

},{"preact/hooks":"geNGJ","preact":"2ETNS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"geNGJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useState", ()=>l
);
parcelHelpers.export(exports, "useReducer", ()=>p
);
parcelHelpers.export(exports, "useEffect", ()=>y
);
parcelHelpers.export(exports, "useLayoutEffect", ()=>h
);
parcelHelpers.export(exports, "useRef", ()=>s
);
parcelHelpers.export(exports, "useImperativeHandle", ()=>_
);
parcelHelpers.export(exports, "useMemo", ()=>d
);
parcelHelpers.export(exports, "useCallback", ()=>A
);
parcelHelpers.export(exports, "useContext", ()=>F
);
parcelHelpers.export(exports, "useDebugValue", ()=>T
);
parcelHelpers.export(exports, "useErrorBoundary", ()=>q
);
var _preact = require("preact");
var t1, u1, r1, o1 = 0, i1 = [], c = _preact.options.__b, f = _preact.options.__r, e = _preact.options.diffed, a = _preact.options.__c, v = _preact.options.unmount;
function m(t, r) {
    _preact.options.__h && _preact.options.__h(u1, t, o1 || r), o1 = 0;
    var i = u1.__H || (u1.__H = {
        __: [],
        __h: []
    });
    return t >= i.__.length && i.__.push({
    }), i.__[t];
}
function l(n) {
    return o1 = 1, p(w, n);
}
function p(n1, r, o) {
    var i = m(t1++, 2);
    return i.t = n1, i.__c || (i.__ = [
        o ? o(r) : w(void 0, r),
        function(n) {
            var t = i.t(i.__[0], n);
            i.__[0] !== t && (i.__ = [
                t,
                i.__[1]
            ], i.__c.setState({
            }));
        }
    ], i.__c = u1), i.__;
}
function y(r, o) {
    var i = m(t1++, 3);
    !_preact.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u1.__H.__h.push(i));
}
function h(r, o) {
    var i = m(t1++, 4);
    !_preact.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u1.__h.push(i));
}
function s(n) {
    return o1 = 5, d(function() {
        return {
            current: n
        };
    }, []);
}
function _(n, t, u) {
    o1 = 6, h(function() {
        "function" == typeof n ? n(t()) : n && (n.current = t());
    }, null == u ? u : u.concat(n));
}
function d(n, u) {
    var r = m(t1++, 7);
    return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}
function A(n, t) {
    return o1 = 8, d(function() {
        return n;
    }, t);
}
function F(n) {
    var r = u1.context[n.__c], o = m(t1++, 9);
    return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u1)), r.props.value) : n.__;
}
function T(t, u) {
    _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}
function q(n2) {
    var r = m(t1++, 10), o = l();
    return r.__ = n2, u1.componentDidCatch || (u1.componentDidCatch = function(n) {
        r.__ && r.__(n), o[1](n);
    }), [
        o[0],
        function() {
            o[1](void 0);
        }
    ];
}
function x() {
    var t2;
    for(i1.sort(function(n, t) {
        return n.__v.__b - t.__v.__b;
    }); t2 = i1.pop();)if (t2.__P) try {
        t2.__H.__h.forEach(g), t2.__H.__h.forEach(j), t2.__H.__h = [];
    } catch (u) {
        t2.__H.__h = [], _preact.options.__e(u, t2.__v);
    }
}
_preact.options.__b = function(n) {
    u1 = null, c && c(n);
}, _preact.options.__r = function(n) {
    f && f(n), t1 = 0;
    var r = (u1 = n.__c).__H;
    r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []);
}, _preact.options.diffed = function(t3) {
    e && e(t3);
    var o = t3.__c;
    o && o.__H && o.__H.__h.length && (1 !== i1.push(o) && r1 === _preact.options.requestAnimationFrame || ((r1 = _preact.options.requestAnimationFrame) || function(n) {
        var t, u = function() {
            clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
        }, r = setTimeout(u, 100);
        b && (t = requestAnimationFrame(u));
    })(x)), u1 = null;
}, _preact.options.__c = function(t4, u) {
    u.some(function(t) {
        try {
            t.__h.forEach(g), t.__h = t.__h.filter(function(n) {
                return !n.__ || j(n);
            });
        } catch (r) {
            u.some(function(n) {
                n.__h && (n.__h = []);
            }), u = [], _preact.options.__e(r, t.__v);
        }
    }), a && a(t4, u);
}, _preact.options.unmount = function(t) {
    v && v(t);
    var u, r = t.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            g(n);
        } catch (n3) {
            u = n3;
        }
    }), u && _preact.options.__e(u, r.__v));
};
var b = "function" == typeof requestAnimationFrame;
function g(n) {
    var t = u1, r = n.__c;
    "function" == typeof r && (n.__c = void 0, r()), u1 = t;
}
function j(n) {
    var t = u1;
    n.__c = n.__(), u1 = t;
}
function k(n, t5) {
    return !n || n.length !== t5.length || t5.some(function(t, u) {
        return t !== n[u];
    });
}
function w(n, t) {
    return "function" == typeof t ? t(n) : t;
}

},{"preact":"2ETNS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["gT4u9","ipvmp"], "ipvmp", "parcelRequireb670")

//# sourceMappingURL=index.9978ec32.js.map
