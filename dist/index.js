"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require_interop_require_wildcard = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports2) {
    "use strict";
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = { __proto__: null };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
          else newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      if (cache) cache.set(obj, newObj);
      return newObj;
    }
    exports2._ = _interop_require_wildcard;
  }
});

// node_modules/react/cjs/react.production.js
var require_react_production = __commonJS({
  "node_modules/react/cjs/react.production.js"(exports2) {
    "use strict";
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
    var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
    var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
    var REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    };
    var assign = Object.assign;
    var emptyObject = {};
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    function ComponentDummy() {
    }
    ComponentDummy.prototype = Component.prototype;
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    var isArrayImpl = Array.isArray;
    function noop() {
    }
    var ReactSharedInternals = { H: null, A: null, T: null, S: null };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function ReactElement(type, key, props) {
      var refProp = props.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== refProp ? refProp : null,
        props
      };
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      return ReactElement(oldElement.type, newKey, oldElement.props);
    }
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    var userProvidedKeyEscapeRegex = /\/+/g;
    function getElementKey(element, index) {
      return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
            function(fulfilledValue) {
              "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            },
            function(error) {
              "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
            }
          )), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = false;
      if (null === children) invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(
                  invokeCallback(children._payload),
                  array,
                  escapedPrefix,
                  nameSoFar,
                  callback
                );
            }
        }
      if (invokeCallback)
        return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
          callback,
          escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
            userProvidedKeyEscapeRegex,
            "$&/"
          ) + "/") + invokeCallback
        )), array.push(callback)), 1;
      invokeCallback = 0;
      var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if (i = getIteratorFn(children), "function" === typeof i)
        for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function(moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 1, payload._result = moduleObject;
          },
          function(error) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 2, payload._result = error;
          }
        );
        -1 === payload._status && (payload._status = 0, payload._result = ctor);
      }
      if (1 === payload._status) return payload._result.default;
      throw payload._result;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    var Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function() {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports2.Activity = REACT_ACTIVITY_TYPE;
    exports2.Children = Children;
    exports2.Component = Component;
    exports2.Fragment = REACT_FRAGMENT_TYPE;
    exports2.Profiler = REACT_PROFILER_TYPE;
    exports2.PureComponent = PureComponent;
    exports2.StrictMode = REACT_STRICT_MODE_TYPE;
    exports2.Suspense = REACT_SUSPENSE_TYPE;
    exports2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports2.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(size) {
        return ReactSharedInternals.H.useMemoCache(size);
      }
    };
    exports2.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports2.cacheSignal = function() {
      return null;
    };
    exports2.cloneElement = function(element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " + element + "."
        );
      var props = assign({}, element.props), key = element.key;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        for (var childArray = Array(propName), i = 0; i < propName; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      return ReactElement(element.type, key, props);
    };
    exports2.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      return defaultValue;
    };
    exports2.createElement = function(type, config, children) {
      var propName, props = {}, key = null;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) props.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          void 0 === props[propName] && (props[propName] = childrenLength[propName]);
      return ReactElement(type, key, props);
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(render) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render };
    };
    exports2.isValidElement = isValidElement;
    exports2.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports2.memo = function(type, compare) {
      return {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: void 0 === compare ? null : compare
      };
    };
    exports2.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
      }
    };
    exports2.unstable_useCacheRefresh = function() {
      return ReactSharedInternals.H.useCacheRefresh();
    };
    exports2.use = function(usable) {
      return ReactSharedInternals.H.use(usable);
    };
    exports2.useActionState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useActionState(action, initialState, permalink);
    };
    exports2.useCallback = function(callback, deps) {
      return ReactSharedInternals.H.useCallback(callback, deps);
    };
    exports2.useContext = function(Context) {
      return ReactSharedInternals.H.useContext(Context);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useDeferredValue = function(value, initialValue) {
      return ReactSharedInternals.H.useDeferredValue(value, initialValue);
    };
    exports2.useEffect = function(create, deps) {
      return ReactSharedInternals.H.useEffect(create, deps);
    };
    exports2.useEffectEvent = function(callback) {
      return ReactSharedInternals.H.useEffectEvent(callback);
    };
    exports2.useId = function() {
      return ReactSharedInternals.H.useId();
    };
    exports2.useImperativeHandle = function(ref, create, deps) {
      return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
    };
    exports2.useInsertionEffect = function(create, deps) {
      return ReactSharedInternals.H.useInsertionEffect(create, deps);
    };
    exports2.useLayoutEffect = function(create, deps) {
      return ReactSharedInternals.H.useLayoutEffect(create, deps);
    };
    exports2.useMemo = function(create, deps) {
      return ReactSharedInternals.H.useMemo(create, deps);
    };
    exports2.useOptimistic = function(passthrough, reducer) {
      return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
    };
    exports2.useReducer = function(reducer, initialArg, init) {
      return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
    };
    exports2.useRef = function(initialValue) {
      return ReactSharedInternals.H.useRef(initialValue);
    };
    exports2.useState = function(initialState) {
      return ReactSharedInternals.H.useState(initialState);
    };
    exports2.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return ReactSharedInternals.H.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports2.useTransition = function() {
      return ReactSharedInternals.H.useTransition();
    };
    exports2.version = "19.2.8";
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports2, module2) {
    "use strict";
    "production" !== process.env.NODE_ENV && (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                null != _ioInfo && (_ioInfo.end = performance.now());
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now());
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            ioInfo.value = thenable;
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module2 && module2[requireString]).call(
              module2,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports2.Activity = REACT_ACTIVITY_TYPE;
      exports2.Children = fnName;
      exports2.Component = Component;
      exports2.Fragment = REACT_FRAGMENT_TYPE;
      exports2.Profiler = REACT_PROFILER_TYPE;
      exports2.PureComponent = PureComponent;
      exports2.StrictMode = REACT_STRICT_MODE_TYPE;
      exports2.Suspense = REACT_SUSPENSE_TYPE;
      exports2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports2.__COMPILER_RUNTIME = deprecatedAPIs;
      exports2.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports2.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports2.cacheSignal = function() {
        return null;
      };
      exports2.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports2.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports2.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports2.createElement = function(type, config, children) {
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i]);
        i = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          key,
          i,
          getOwner(),
          propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports2.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports2.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports2.isValidElement = isValidElement;
      exports2.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports2.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports2.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      };
      exports2.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports2.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports2.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports2.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports2.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports2.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports2.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports2.useEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create, deps);
      };
      exports2.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports2.useId = function() {
        return resolveDispatcher().useId();
      };
      exports2.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports2.useInsertionEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports2.useLayoutEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports2.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports2.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports2.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports2.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports2.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports2.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports2.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports2.version = "19.2.8";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_production();
    } else {
      module2.exports = require_react_development();
    }
  }
});

// node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require_interop_require_default = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports2) {
    "use strict";
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2._ = _interop_require_default;
  }
});

// node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js
var require_app_router_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js"(exports2) {
    "use strict";
    "use client";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      AppRouterContext: function() {
        return AppRouterContext;
      },
      GlobalLayoutRouterContext: function() {
        return GlobalLayoutRouterContext;
      },
      LayoutRouterContext: function() {
        return LayoutRouterContext;
      },
      MissingSlotContext: function() {
        return MissingSlotContext;
      },
      TemplateContext: function() {
        return TemplateContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(require_react());
    var AppRouterContext = _react.default.createContext(null);
    var LayoutRouterContext = _react.default.createContext(null);
    var GlobalLayoutRouterContext = _react.default.createContext(null);
    var TemplateContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      AppRouterContext.displayName = "AppRouterContext";
      LayoutRouterContext.displayName = "LayoutRouterContext";
      GlobalLayoutRouterContext.displayName = "GlobalLayoutRouterContext";
      TemplateContext.displayName = "TemplateContext";
    }
    var MissingSlotContext = _react.default.createContext(/* @__PURE__ */ new Set());
  }
});

// node_modules/next/dist/client/components/readonly-url-search-params.js
var require_readonly_url_search_params = __commonJS({
  "node_modules/next/dist/client/components/readonly-url-search-params.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "ReadonlyURLSearchParams", {
      enumerable: true,
      get: function() {
        return ReadonlyURLSearchParams;
      }
    });
    var ReadonlyURLSearchParamsError = class extends Error {
      constructor() {
        super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
      }
    };
    var ReadonlyURLSearchParams = class extends URLSearchParams {
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      append() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      delete() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      set() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      sort() {
        throw new ReadonlyURLSearchParamsError();
      }
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js
var require_hooks_client_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js"(exports2) {
    "use strict";
    "use client";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      NavigationPromisesContext: function() {
        return NavigationPromisesContext;
      },
      PathParamsContext: function() {
        return PathParamsContext;
      },
      PathnameContext: function() {
        return PathnameContext;
      },
      ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
      },
      SearchParamsContext: function() {
        return SearchParamsContext;
      },
      createDevToolsInstrumentedPromise: function() {
        return createDevToolsInstrumentedPromise;
      }
    });
    var _react = require_react();
    var _readonlyurlsearchparams = require_readonly_url_search_params();
    var SearchParamsContext = (0, _react.createContext)(null);
    var PathnameContext = (0, _react.createContext)(null);
    var PathParamsContext = (0, _react.createContext)(null);
    var NavigationPromisesContext = (0, _react.createContext)(null);
    function createDevToolsInstrumentedPromise(displayName, value) {
      const promise = Promise.resolve(value);
      promise.status = "fulfilled";
      promise.value = value;
      promise.displayName = `${displayName} (SSR)`;
      return promise;
    }
    if (process.env.NODE_ENV !== "production") {
      SearchParamsContext.displayName = "SearchParamsContext";
      PathnameContext.displayName = "PathnameContext";
      PathParamsContext.displayName = "PathParamsContext";
      NavigationPromisesContext.displayName = "NavigationPromisesContext";
    }
  }
});

// node_modules/next/dist/shared/lib/segment.js
var require_segment = __commonJS({
  "node_modules/next/dist/shared/lib/segment.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
      },
      NOT_FOUND_SEGMENT_KEY: function() {
        return NOT_FOUND_SEGMENT_KEY;
      },
      PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
      },
      addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
      },
      computeSelectedLayoutSegment: function() {
        return computeSelectedLayoutSegment;
      },
      getSegmentValue: function() {
        return getSegmentValue;
      },
      getSelectedLayoutSegmentPath: function() {
        return getSelectedLayoutSegmentPath;
      },
      isGroupSegment: function() {
        return isGroupSegment;
      },
      isParallelRouteSegment: function() {
        return isParallelRouteSegment;
      }
    });
    function getSegmentValue(segment) {
      return Array.isArray(segment) ? segment[1] : segment;
    }
    function isGroupSegment(segment) {
      return segment[0] === "(" && segment.endsWith(")");
    }
    function isParallelRouteSegment(segment) {
      return segment.startsWith("@") && segment !== "@children";
    }
    function addSearchParamsIfPageSegment(segment, searchParams) {
      const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
      if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== "{}" ? PAGE_SEGMENT_KEY + "?" + stringifiedQuery : PAGE_SEGMENT_KEY;
      }
      return segment;
    }
    function computeSelectedLayoutSegment(segments, parallelRouteKey) {
      if (!segments || segments.length === 0) {
        return null;
      }
      const rawSegment = parallelRouteKey === "children" ? segments[0] : segments[segments.length - 1];
      return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
    }
    function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
      let node;
      if (first) {
        node = tree[1][parallelRouteKey];
      } else {
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
      }
      if (!node) return segmentPath;
      const segment = node[0];
      let segmentValue = getSegmentValue(segment);
      if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
      }
      segmentPath.push(segmentValue);
      return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
    }
    var PAGE_SEGMENT_KEY = "__PAGE__";
    var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
    var NOT_FOUND_SEGMENT_KEY = "/_not-found";
  }
});

// node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js
var require_server_inserted_html_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js"(exports2) {
    "use strict";
    "use client";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      ServerInsertedHTMLContext: function() {
        return ServerInsertedHTMLContext;
      },
      useServerInsertedHTML: function() {
        return useServerInsertedHTML;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _react = /* @__PURE__ */ _interop_require_wildcard._(require_react());
    var ServerInsertedHTMLContext = /* @__PURE__ */ _react.default.createContext(null);
    function useServerInsertedHTML(callback) {
      const addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
      if (addInsertedServerHTMLCallback) {
        addInsertedServerHTMLCallback(callback);
      }
    }
  }
});

// node_modules/next/dist/client/components/unrecognized-action-error.js
var require_unrecognized_action_error = __commonJS({
  "node_modules/next/dist/client/components/unrecognized-action-error.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      UnrecognizedActionError: function() {
        return UnrecognizedActionError;
      },
      unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
      }
    });
    var UnrecognizedActionError = class extends Error {
      constructor(...args) {
        super(...args);
        this.name = "UnrecognizedActionError";
      }
    };
    function unstable_isUnrecognizedActionError(error) {
      return !!(error && typeof error === "object" && error instanceof UnrecognizedActionError);
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/redirect-status-code.js
var require_redirect_status_code = __commonJS({
  "node_modules/next/dist/client/components/redirect-status-code.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "RedirectStatusCode", {
      enumerable: true,
      get: function() {
        return RedirectStatusCode;
      }
    });
    var RedirectStatusCode = /* @__PURE__ */ (function(RedirectStatusCode2) {
      RedirectStatusCode2[RedirectStatusCode2["SeeOther"] = 303] = "SeeOther";
      RedirectStatusCode2[RedirectStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
      RedirectStatusCode2[RedirectStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
      return RedirectStatusCode2;
    })({});
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/redirect-error.js
var require_redirect_error = __commonJS({
  "node_modules/next/dist/client/components/redirect-error.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
      },
      isRedirectError: function() {
        return isRedirectError;
      }
    });
    var _redirectstatuscode = require_redirect_status_code();
    var REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
    function isRedirectError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
      }
      const digest = error.digest.split(";");
      const [errorCode, type] = digest;
      const destination = digest.slice(2, -2).join(";");
      const status = digest.at(-2);
      const statusCode = Number(status);
      return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/server/app-render/async-local-storage.js
var require_async_local_storage = __commonJS({
  "node_modules/next/dist/server/app-render/async-local-storage.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      bindSnapshot: function() {
        return bindSnapshot;
      },
      createAsyncLocalStorage: function() {
        return createAsyncLocalStorage;
      },
      createSnapshot: function() {
        return createSnapshot;
      }
    });
    var sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
      value: "E504",
      enumerable: false,
      configurable: true
    });
    var FakeAsyncLocalStorage = class {
      disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      getStore() {
        return void 0;
      }
      run() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      static bind(fn) {
        return fn;
      }
    };
    var maybeGlobalAsyncLocalStorage = typeof globalThis !== "undefined" && globalThis.AsyncLocalStorage;
    function createAsyncLocalStorage() {
      if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
      }
      return new FakeAsyncLocalStorage();
    }
    function bindSnapshot(fn) {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
      }
      return FakeAsyncLocalStorage.bind(fn);
    }
    function createSnapshot() {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
      }
      return function(fn, ...args) {
        return fn(...args);
      };
    }
  }
});

// node_modules/next/dist/server/app-render/action-async-storage-instance.js
var require_action_async_storage_instance = __commonJS({
  "node_modules/next/dist/server/app-render/action-async-storage-instance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "actionAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return actionAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var actionAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// node_modules/next/dist/server/app-render/action-async-storage.external.js
var require_action_async_storage_external = __commonJS({
  "node_modules/next/dist/server/app-render/action-async-storage.external.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "actionAsyncStorage", {
      enumerable: true,
      get: function() {
        return _actionasyncstorageinstance.actionAsyncStorageInstance;
      }
    });
    var _actionasyncstorageinstance = require_action_async_storage_instance();
  }
});

// node_modules/next/dist/client/components/redirect.js
var require_redirect = __commonJS({
  "node_modules/next/dist/client/components/redirect.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getRedirectError: function() {
        return getRedirectError;
      },
      getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
      },
      getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
      },
      getURLFromRedirectError: function() {
        return getURLFromRedirectError;
      },
      permanentRedirect: function() {
        return permanentRedirect;
      },
      redirect: function() {
        return redirect;
      }
    });
    var _redirectstatuscode = require_redirect_status_code();
    var _redirecterror = require_redirect_error();
    var actionAsyncStorage = typeof window === "undefined" ? require_action_async_storage_external().actionAsyncStorage : void 0;
    function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
      const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
      return error;
    }
    function redirect(url, type) {
      type ??= actionAsyncStorage?.getStore()?.isAction ? "push" : "replace";
      throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
    }
    function permanentRedirect(url, type = "replace") {
      throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
    }
    function getURLFromRedirectError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) return null;
      return error.digest.split(";").slice(2, -2).join(";");
    }
    function getRedirectTypeFromError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: false,
          configurable: true
        });
      }
      return error.digest.split(";", 2)[1];
    }
    function getRedirectStatusCodeFromError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: false,
          configurable: true
        });
      }
      return Number(error.digest.split(";").at(-2));
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js
var require_http_access_fallback = __commonJS({
  "node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
      },
      HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
      },
      getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
      },
      getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
      },
      isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
      }
    });
    var HTTPAccessErrorStatus = {
      NOT_FOUND: 404,
      FORBIDDEN: 403,
      UNAUTHORIZED: 401
    };
    var ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
    var HTTP_ERROR_FALLBACK_ERROR_CODE = "NEXT_HTTP_ERROR_FALLBACK";
    function isHTTPAccessFallbackError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
      }
      const [prefix, httpStatus] = error.digest.split(";");
      return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
    }
    function getAccessFallbackHTTPStatus(error) {
      const httpStatus = error.digest.split(";")[1];
      return Number(httpStatus);
    }
    function getAccessFallbackErrorTypeByStatus(status) {
      switch (status) {
        case 401:
          return "unauthorized";
        case 403:
          return "forbidden";
        case 404:
          return "not-found";
        default:
          return;
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/not-found.js
var require_not_found = __commonJS({
  "node_modules/next/dist/client/components/not-found.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "notFound", {
      enumerable: true,
      get: function() {
        return notFound2;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
    function notFound2() {
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1041",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/forbidden.js
var require_forbidden = __commonJS({
  "node_modules/next/dist/client/components/forbidden.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "forbidden", {
      enumerable: true,
      get: function() {
        return forbidden;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
    function forbidden() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
        throw Object.defineProperty(new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
          value: "E488",
          enumerable: false,
          configurable: true
        });
      }
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1019",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/unauthorized.js
var require_unauthorized = __commonJS({
  "node_modules/next/dist/client/components/unauthorized.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "unauthorized", {
      enumerable: true,
      get: function() {
        return unauthorized;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
    function unauthorized() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
        throw Object.defineProperty(new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
          value: "E411",
          enumerable: false,
          configurable: true
        });
      }
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1002",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/shared/lib/invariant-error.js
var require_invariant_error = __commonJS({
  "node_modules/next/dist/shared/lib/invariant-error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "InvariantError", {
      enumerable: true,
      get: function() {
        return InvariantError;
      }
    });
    var InvariantError = class extends Error {
      constructor(message, options) {
        super(`Invariant: ${message.endsWith(".") ? message : message + "."} This is a bug in Next.js.`, options);
        this.name = "InvariantError";
      }
    };
  }
});

// node_modules/next/dist/shared/lib/promise-with-resolvers.js
var require_promise_with_resolvers = __commonJS({
  "node_modules/next/dist/shared/lib/promise-with-resolvers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "createPromiseWithResolvers", {
      enumerable: true,
      get: function() {
        return createPromiseWithResolvers;
      }
    });
    function createPromiseWithResolvers() {
      let resolve;
      let reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return {
        resolve,
        reject,
        promise
      };
    }
  }
});

// node_modules/next/dist/server/app-render/staged-rendering.js
var require_staged_rendering = __commonJS({
  "node_modules/next/dist/server/app-render/staged-rendering.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      RenderStage: function() {
        return RenderStage;
      },
      StagedRenderingController: function() {
        return StagedRenderingController;
      }
    });
    var _invarianterror = require_invariant_error();
    var _promisewithresolvers = require_promise_with_resolvers();
    var RenderStage = /* @__PURE__ */ (function(RenderStage2) {
      RenderStage2[RenderStage2["Before"] = 1] = "Before";
      RenderStage2[RenderStage2["EarlyStatic"] = 2] = "EarlyStatic";
      RenderStage2[RenderStage2["Static"] = 3] = "Static";
      RenderStage2[RenderStage2["EarlyRuntime"] = 4] = "EarlyRuntime";
      RenderStage2[RenderStage2["Runtime"] = 5] = "Runtime";
      RenderStage2[RenderStage2["Dynamic"] = 6] = "Dynamic";
      RenderStage2[RenderStage2["Abandoned"] = 7] = "Abandoned";
      return RenderStage2;
    })({});
    var StagedRenderingController = class {
      constructor(abortSignal, abandonController, shouldTrackSyncIO) {
        this.abortSignal = abortSignal;
        this.abandonController = abandonController;
        this.shouldTrackSyncIO = shouldTrackSyncIO;
        this.currentStage = 1;
        this.syncInterruptReason = null;
        this.staticStageEndTime = Infinity;
        this.runtimeStageEndTime = Infinity;
        this.staticStageListeners = [];
        this.earlyRuntimeStageListeners = [];
        this.runtimeStageListeners = [];
        this.dynamicStageListeners = [];
        this.staticStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.earlyRuntimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        if (abortSignal) {
          abortSignal.addEventListener("abort", () => {
            const { reason } = abortSignal;
            this.staticStagePromise.promise.catch(ignoreReject);
            this.staticStagePromise.reject(reason);
            this.earlyRuntimeStagePromise.promise.catch(ignoreReject);
            this.earlyRuntimeStagePromise.reject(reason);
            this.runtimeStagePromise.promise.catch(ignoreReject);
            this.runtimeStagePromise.reject(reason);
            this.dynamicStagePromise.promise.catch(ignoreReject);
            this.dynamicStagePromise.reject(reason);
          }, {
            once: true
          });
        }
        if (abandonController) {
          abandonController.signal.addEventListener("abort", () => {
            this.abandonRender();
          }, {
            once: true
          });
        }
      }
      onStage(stage, callback) {
        if (this.currentStage >= stage) {
          callback();
        } else if (stage === 3) {
          this.staticStageListeners.push(callback);
        } else if (stage === 4) {
          this.earlyRuntimeStageListeners.push(callback);
        } else if (stage === 5) {
          this.runtimeStageListeners.push(callback);
        } else if (stage === 6) {
          this.dynamicStageListeners.push(callback);
        } else {
          throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
            value: "E881",
            enumerable: false,
            configurable: true
          });
        }
      }
      shouldTrackSyncInterrupt() {
        if (!this.shouldTrackSyncIO) {
          return false;
        }
        switch (this.currentStage) {
          case 1:
            return false;
          case 2:
          case 3:
            return true;
          case 4:
            return true;
          case 5:
            return false;
          case 6:
          case 7:
            return false;
          default:
            return false;
        }
      }
      syncInterruptCurrentStageWithReason(reason) {
        if (this.currentStage === 1) {
          return;
        }
        if (this.currentStage === 7) {
          return;
        }
        if (this.abandonController) {
          this.abandonController.abort();
          return;
        }
        if (this.abortSignal) {
          this.syncInterruptReason = reason;
          this.currentStage = 7;
          return;
        }
        switch (this.currentStage) {
          case 2:
          case 3:
          case 4: {
            this.syncInterruptReason = reason;
            this.advanceStage(6);
            return;
          }
          case 5: {
            return;
          }
          case 6:
          default:
        }
      }
      getSyncInterruptReason() {
        return this.syncInterruptReason;
      }
      getStaticStageEndTime() {
        return this.staticStageEndTime;
      }
      getRuntimeStageEndTime() {
        return this.runtimeStageEndTime;
      }
      abandonRender() {
        const { currentStage } = this;
        switch (currentStage) {
          case 2: {
            this.resolveStaticStage();
          }
          // intentional fallthrough
          case 3: {
            this.resolveEarlyRuntimeStage();
          }
          // intentional fallthrough
          case 4: {
            this.resolveRuntimeStage();
          }
          // intentional fallthrough
          case 5: {
            this.currentStage = 7;
            return;
          }
          case 6:
          case 1:
          case 7:
            break;
          default: {
            currentStage;
          }
        }
      }
      advanceStage(stage) {
        if (stage <= this.currentStage) {
          return;
        }
        let currentStage = this.currentStage;
        this.currentStage = stage;
        if (currentStage < 3 && stage >= 3) {
          this.resolveStaticStage();
        }
        if (currentStage < 4 && stage >= 4) {
          this.resolveEarlyRuntimeStage();
        }
        if (currentStage < 5 && stage >= 5) {
          this.staticStageEndTime = performance.now() + performance.timeOrigin;
          this.resolveRuntimeStage();
        }
        if (currentStage < 6 && stage >= 6) {
          this.runtimeStageEndTime = performance.now() + performance.timeOrigin;
          this.resolveDynamicStage();
          return;
        }
      }
      /** Fire the `onStage` listeners for the static stage and unblock any promises waiting for it. */
      resolveStaticStage() {
        const staticListeners = this.staticStageListeners;
        for (let i = 0; i < staticListeners.length; i++) {
          staticListeners[i]();
        }
        staticListeners.length = 0;
        this.staticStagePromise.resolve();
      }
      /** Fire the `onStage` listeners for the early runtime stage and unblock any promises waiting for it. */
      resolveEarlyRuntimeStage() {
        const earlyRuntimeListeners = this.earlyRuntimeStageListeners;
        for (let i = 0; i < earlyRuntimeListeners.length; i++) {
          earlyRuntimeListeners[i]();
        }
        earlyRuntimeListeners.length = 0;
        this.earlyRuntimeStagePromise.resolve();
      }
      /** Fire the `onStage` listeners for the runtime stage and unblock any promises waiting for it. */
      resolveRuntimeStage() {
        const runtimeListeners = this.runtimeStageListeners;
        for (let i = 0; i < runtimeListeners.length; i++) {
          runtimeListeners[i]();
        }
        runtimeListeners.length = 0;
        this.runtimeStagePromise.resolve();
      }
      /** Fire the `onStage` listeners for the dynamic stage and unblock any promises waiting for it. */
      resolveDynamicStage() {
        const dynamicListeners = this.dynamicStageListeners;
        for (let i = 0; i < dynamicListeners.length; i++) {
          dynamicListeners[i]();
        }
        dynamicListeners.length = 0;
        this.dynamicStagePromise.resolve();
      }
      getStagePromise(stage) {
        switch (stage) {
          case 3: {
            return this.staticStagePromise.promise;
          }
          case 4: {
            return this.earlyRuntimeStagePromise.promise;
          }
          case 5: {
            return this.runtimeStagePromise.promise;
          }
          case 6: {
            return this.dynamicStagePromise.promise;
          }
          default: {
            stage;
            throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
              value: "E881",
              enumerable: false,
              configurable: true
            });
          }
        }
      }
      waitForStage(stage) {
        return this.getStagePromise(stage);
      }
      delayUntilStage(stage, displayName, resolvedValue) {
        const ioTriggerPromise = this.getStagePromise(stage);
        const promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
        if (this.abortSignal) {
          promise.catch(ignoreReject);
        }
        return promise;
      }
    };
    function ignoreReject() {
    }
    function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
      const promise = new Promise((resolve, reject) => {
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
      });
      if (displayName !== void 0) {
        promise.displayName = displayName;
      }
      return promise;
    }
  }
});

// node_modules/next/dist/server/dynamic-rendering-utils.js
var require_dynamic_rendering_utils = __commonJS({
  "node_modules/next/dist/server/dynamic-rendering-utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
      },
      getRuntimeStage: function() {
        return getRuntimeStage;
      },
      isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
      },
      makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
      },
      makeHangingPromise: function() {
        return makeHangingPromise;
      }
    });
    var _stagedrendering = require_staged_rendering();
    function isHangingPromiseRejectionError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === HANGING_PROMISE_REJECTION;
    }
    var HANGING_PROMISE_REJECTION = "HANGING_PROMISE_REJECTION";
    var HangingPromiseRejectionError = class extends Error {
      constructor(route, expression) {
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
      }
    };
    var abortListenersBySignal = /* @__PURE__ */ new WeakMap();
    function makeHangingPromise(signal, route, expression) {
      if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
      } else {
        const hangingPromise = new Promise((_, reject) => {
          const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
          let currentListeners = abortListenersBySignal.get(signal);
          if (currentListeners) {
            currentListeners.push(boundRejection);
          } else {
            const listeners = [
              boundRejection
            ];
            abortListenersBySignal.set(signal, listeners);
            signal.addEventListener("abort", () => {
              for (let i = 0; i < listeners.length; i++) {
                listeners[i]();
              }
            }, {
              once: true
            });
          }
        });
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
      }
    }
    function ignoreReject() {
    }
    function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
      if (requestStore.stagedRendering) {
        return requestStore.stagedRendering.delayUntilStage(stage, void 0, underlying);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(underlying);
        }, 0);
      });
    }
    function getRuntimeStage(stagedRendering) {
      if (stagedRendering.currentStage === _stagedrendering.RenderStage.EarlyStatic || stagedRendering.currentStage === _stagedrendering.RenderStage.EarlyRuntime) {
        return _stagedrendering.RenderStage.EarlyRuntime;
      }
      return _stagedrendering.RenderStage.Runtime;
    }
    function delayUntilRuntimeStage(prerenderStore, result) {
      const { stagedRendering } = prerenderStore;
      if (!stagedRendering) {
        return result;
      }
      return stagedRendering.waitForStage(getRuntimeStage(stagedRendering)).then(() => result);
    }
  }
});

// node_modules/next/dist/server/lib/router-utils/is-postpone.js
var require_is_postpone = __commonJS({
  "node_modules/next/dist/server/lib/router-utils/is-postpone.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isPostpone", {
      enumerable: true,
      get: function() {
        return isPostpone;
      }
    });
    var REACT_POSTPONE_TYPE = /* @__PURE__ */ Symbol.for("react.postpone");
    function isPostpone(error) {
      return typeof error === "object" && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
    }
  }
});

// node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js
var require_bailout_to_csr = __commonJS({
  "node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      BailoutToCSRError: function() {
        return BailoutToCSRError;
      },
      isBailoutToCSRError: function() {
        return isBailoutToCSRError;
      }
    });
    var BAILOUT_TO_CSR = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
    var BailoutToCSRError = class extends Error {
      constructor(reason) {
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
      }
    };
    function isBailoutToCSRError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === BAILOUT_TO_CSR;
    }
  }
});

// node_modules/next/dist/client/components/is-next-router-error.js
var require_is_next_router_error = __commonJS({
  "node_modules/next/dist/client/components/is-next-router-error.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isNextRouterError", {
      enumerable: true,
      get: function() {
        return isNextRouterError;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var _redirecterror = require_redirect_error();
    function isNextRouterError(error) {
      return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/hooks-server-context.js
var require_hooks_server_context = __commonJS({
  "node_modules/next/dist/client/components/hooks-server-context.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      DynamicServerError: function() {
        return DynamicServerError;
      },
      isDynamicServerError: function() {
        return isDynamicServerError;
      }
    });
    var DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
    var DynamicServerError = class extends Error {
      constructor(description) {
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
      }
    };
    function isDynamicServerError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
        return false;
      }
      return err.digest === DYNAMIC_ERROR_CODE;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/static-generation-bailout.js
var require_static_generation_bailout = __commonJS({
  "node_modules/next/dist/client/components/static-generation-bailout.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      StaticGenBailoutError: function() {
        return StaticGenBailoutError;
      },
      isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
      }
    });
    var NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
    var StaticGenBailoutError = class extends Error {
      constructor(...args) {
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
      }
    };
    function isStaticGenBailoutError(error) {
      if (typeof error !== "object" || error === null || !("code" in error)) {
        return false;
      }
      return error.code === NEXT_STATIC_GEN_BAILOUT;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js
var require_work_unit_async_storage_instance = __commonJS({
  "node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "workUnitAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workUnitAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// node_modules/next/dist/client/components/app-router-headers.js
var require_app_router_headers = __commonJS({
  "node_modules/next/dist/client/components/app-router-headers.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      ACTION_HEADER: function() {
        return ACTION_HEADER;
      },
      FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
      },
      NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
      },
      NEXT_ACTION_REVALIDATED_HEADER: function() {
        return NEXT_ACTION_REVALIDATED_HEADER;
      },
      NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
      },
      NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
      },
      NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
      },
      NEXT_HTML_REQUEST_ID_HEADER: function() {
        return NEXT_HTML_REQUEST_ID_HEADER;
      },
      NEXT_INSTANT_PREFETCH_HEADER: function() {
        return NEXT_INSTANT_PREFETCH_HEADER;
      },
      NEXT_INSTANT_TEST_COOKIE: function() {
        return NEXT_INSTANT_TEST_COOKIE;
      },
      NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
      },
      NEXT_REQUEST_ID_HEADER: function() {
        return NEXT_REQUEST_ID_HEADER;
      },
      NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
      },
      NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
      },
      NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
      },
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
      },
      NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
      },
      NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
      },
      NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
      },
      NEXT_URL: function() {
        return NEXT_URL;
      },
      RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
      },
      RSC_HEADER: function() {
        return RSC_HEADER;
      }
    });
    var RSC_HEADER = "rsc";
    var ACTION_HEADER = "next-action";
    var NEXT_ROUTER_STATE_TREE_HEADER = "next-router-state-tree";
    var NEXT_ROUTER_PREFETCH_HEADER = "next-router-prefetch";
    var NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = "next-router-segment-prefetch";
    var NEXT_HMR_REFRESH_HEADER = "next-hmr-refresh";
    var NEXT_HMR_REFRESH_HASH_COOKIE = "__next_hmr_refresh_hash__";
    var NEXT_URL = "next-url";
    var RSC_CONTENT_TYPE_HEADER = "text/x-component";
    var NEXT_INSTANT_PREFETCH_HEADER = "next-instant-navigation-testing-prefetch";
    var NEXT_INSTANT_TEST_COOKIE = "next-instant-navigation-testing";
    var FLIGHT_HEADERS = [
      RSC_HEADER,
      NEXT_ROUTER_STATE_TREE_HEADER,
      NEXT_ROUTER_PREFETCH_HEADER,
      NEXT_HMR_REFRESH_HEADER,
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
    ];
    var NEXT_RSC_UNION_QUERY = "_rsc";
    var NEXT_ROUTER_STALE_TIME_HEADER = "x-nextjs-stale-time";
    var NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed";
    var NEXT_REWRITTEN_PATH_HEADER = "x-nextjs-rewritten-path";
    var NEXT_REWRITTEN_QUERY_HEADER = "x-nextjs-rewritten-query";
    var NEXT_IS_PRERENDER_HEADER = "x-nextjs-prerender";
    var NEXT_ACTION_NOT_FOUND_HEADER = "x-nextjs-action-not-found";
    var NEXT_REQUEST_ID_HEADER = "x-nextjs-request-id";
    var NEXT_HTML_REQUEST_ID_HEADER = "x-nextjs-html-request-id";
    var NEXT_ACTION_REVALIDATED_HEADER = "x-action-revalidated";
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/server/app-render/work-unit-async-storage.external.js
var require_work_unit_async_storage_external = __commonJS({
  "node_modules/next/dist/server/app-render/work-unit-async-storage.external.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getCacheSignal: function() {
        return getCacheSignal;
      },
      getDraftModeProviderForCacheScope: function() {
        return getDraftModeProviderForCacheScope;
      },
      getHmrRefreshHash: function() {
        return getHmrRefreshHash;
      },
      getPrerenderResumeDataCache: function() {
        return getPrerenderResumeDataCache;
      },
      getRenderResumeDataCache: function() {
        return getRenderResumeDataCache;
      },
      getServerComponentsHmrCache: function() {
        return getServerComponentsHmrCache;
      },
      getStagedRenderingController: function() {
        return getStagedRenderingController;
      },
      isHmrRefresh: function() {
        return isHmrRefresh;
      },
      isInEarlyRenderStage: function() {
        return isInEarlyRenderStage;
      },
      throwForMissingRequestStore: function() {
        return throwForMissingRequestStore;
      },
      throwInvariantForMissingStore: function() {
        return throwInvariantForMissingStore;
      },
      workUnitAsyncStorage: function() {
        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
      }
    });
    var _workunitasyncstorageinstance = require_work_unit_async_storage_instance();
    var _approuterheaders = require_app_router_headers();
    var _invarianterror = require_invariant_error();
    var _stagedrendering = require_staged_rendering();
    function isInEarlyRenderStage(requestStore) {
      const stagedRendering = requestStore.stagedRendering;
      if (stagedRendering) {
        return stagedRendering.currentStage === _stagedrendering.RenderStage.EarlyStatic || stagedRendering.currentStage === _stagedrendering.RenderStage.EarlyRuntime;
      }
      return false;
    }
    function throwForMissingRequestStore(callingExpression) {
      throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: false,
        configurable: true
      });
    }
    function throwInvariantForMissingStore() {
      throw Object.defineProperty(new _invarianterror.InvariantError("Expected workUnitAsyncStorage to have a store."), "__NEXT_ERROR_CODE", {
        value: "E696",
        enumerable: false,
        configurable: true
      });
    }
    function getPrerenderResumeDataCache(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-runtime":
        case "prerender-ppr":
          return workUnitStore.prerenderResumeDataCache;
        case "prerender-client":
        case "validation-client":
          return workUnitStore.prerenderResumeDataCache;
        case "request": {
          if (workUnitStore.prerenderResumeDataCache) {
            return workUnitStore.prerenderResumeDataCache;
          }
        }
        case "prerender-legacy":
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "generate-static-params":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getRenderResumeDataCache(workUnitStore) {
      switch (workUnitStore.type) {
        case "request":
        case "prerender":
        case "prerender-runtime":
        case "prerender-client":
        case "validation-client":
          if (workUnitStore.renderResumeDataCache) {
            return workUnitStore.renderResumeDataCache;
          }
        // fallthrough
        case "prerender-ppr":
          return workUnitStore.prerenderResumeDataCache ?? null;
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "prerender-legacy":
        case "generate-static-params":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getHmrRefreshHash(workUnitStore) {
      if (process.env.__NEXT_DEV_SERVER) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "prerender":
          case "prerender-runtime":
            return workUnitStore.hmrRefreshHash;
          case "request":
            var _workUnitStore_cookies_get;
            return (_workUnitStore_cookies_get = workUnitStore.cookies.get(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : _workUnitStore_cookies_get.value;
          case "prerender-client":
          case "validation-client":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function isHmrRefresh(workUnitStore) {
      if (process.env.__NEXT_DEV_SERVER) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "request":
            return workUnitStore.isHmrRefresh ?? false;
          case "prerender":
          case "prerender-client":
          case "validation-client":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      return false;
    }
    function getServerComponentsHmrCache(workUnitStore) {
      if (process.env.__NEXT_DEV_SERVER) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "request":
            return workUnitStore.serverComponentsHmrCache;
          case "prerender":
          case "prerender-client":
          case "validation-client":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
      if (workStore.isDraftMode) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "unstable-cache":
          case "prerender-runtime":
          case "request":
            return workUnitStore.draftMode;
          case "prerender":
          case "prerender-client":
          case "validation-client":
          case "prerender-ppr":
          case "prerender-legacy":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function getStagedRenderingController(workUnitStore) {
      switch (workUnitStore.type) {
        case "request":
        case "prerender-runtime":
          return workUnitStore.stagedRendering ?? null;
        case "prerender":
        case "prerender-client":
        case "validation-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "generate-static-params":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getCacheSignal(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-client":
        case "validation-client":
        case "prerender-runtime":
          return workUnitStore.cacheSignal;
        case "request": {
          if (workUnitStore.cacheSignal) {
            return workUnitStore.cacheSignal;
          }
        }
        case "prerender-ppr":
        case "prerender-legacy":
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "generate-static-params":
          return null;
        default:
          return workUnitStore;
      }
    }
  }
});

// node_modules/next/dist/server/app-render/work-async-storage-instance.js
var require_work_async_storage_instance = __commonJS({
  "node_modules/next/dist/server/app-render/work-async-storage-instance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "workAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// node_modules/next/dist/server/app-render/work-async-storage.external.js
var require_work_async_storage_external = __commonJS({
  "node_modules/next/dist/server/app-render/work-async-storage.external.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "workAsyncStorage", {
      enumerable: true,
      get: function() {
        return _workasyncstorageinstance.workAsyncStorageInstance;
      }
    });
    var _workasyncstorageinstance = require_work_async_storage_instance();
  }
});

// node_modules/next/dist/lib/framework/boundary-constants.js
var require_boundary_constants = __commonJS({
  "node_modules/next/dist/lib/framework/boundary-constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
      },
      OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
      },
      ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
      },
      VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
      }
    });
    var METADATA_BOUNDARY_NAME = "__next_metadata_boundary__";
    var VIEWPORT_BOUNDARY_NAME = "__next_viewport_boundary__";
    var OUTLET_BOUNDARY_NAME = "__next_outlet_boundary__";
    var ROOT_LAYOUT_BOUNDARY_NAME = "__next_root_layout_boundary__";
  }
});

// node_modules/next/dist/lib/scheduler.js
var require_scheduler = __commonJS({
  "node_modules/next/dist/lib/scheduler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      atLeastOneTask: function() {
        return atLeastOneTask;
      },
      scheduleImmediate: function() {
        return scheduleImmediate;
      },
      scheduleOnNextTick: function() {
        return scheduleOnNextTick;
      },
      waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
      }
    });
    var scheduleOnNextTick = (cb) => {
      Promise.resolve().then(() => {
        if (process.env.NEXT_RUNTIME === "edge") {
          setTimeout(cb, 0);
        } else {
          process.nextTick(cb);
        }
      });
    };
    var scheduleImmediate = (cb) => {
      if (process.env.NEXT_RUNTIME === "edge") {
        setTimeout(cb, 0);
      } else {
        setImmediate(cb);
      }
    };
    function atLeastOneTask() {
      return new Promise((resolve) => scheduleImmediate(resolve));
    }
    function waitAtLeastOneReactRenderTask() {
      if (process.env.NEXT_RUNTIME === "edge") {
        return new Promise((r) => setTimeout(r, 0));
      } else {
        return new Promise((r) => setImmediate(r));
      }
    }
  }
});

// node_modules/next/dist/server/app-render/instant-validation/boundary-constants.js
var require_boundary_constants2 = __commonJS({
  "node_modules/next/dist/server/app-render/instant-validation/boundary-constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "INSTANT_VALIDATION_BOUNDARY_NAME", {
      enumerable: true,
      get: function() {
        return INSTANT_VALIDATION_BOUNDARY_NAME;
      }
    });
    var INSTANT_VALIDATION_BOUNDARY_NAME = "__next_instant_validation_boundary__";
  }
});

// node_modules/next/dist/server/app-render/dynamic-rendering.js
var require_dynamic_rendering = __commonJS({
  "node_modules/next/dist/server/app-render/dynamic-rendering.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      DynamicHoleKind: function() {
        return DynamicHoleKind;
      },
      Postpone: function() {
        return Postpone;
      },
      PreludeState: function() {
        return PreludeState;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
      },
      abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
      },
      accessedDynamicData: function() {
        return accessedDynamicData;
      },
      annotateDynamicAccess: function() {
        return annotateDynamicAccess;
      },
      consumeDynamicAccess: function() {
        return consumeDynamicAccess;
      },
      createDynamicTrackingState: function() {
        return createDynamicTrackingState;
      },
      createDynamicValidationState: function() {
        return createDynamicValidationState;
      },
      createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
      },
      createInstantValidationState: function() {
        return createInstantValidationState;
      },
      createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
      },
      formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
      },
      getFirstDynamicReason: function() {
        return getFirstDynamicReason;
      },
      getNavigationDisallowedDynamicReasons: function() {
        return getNavigationDisallowedDynamicReasons;
      },
      getStaticShellDisallowedDynamicReasons: function() {
        return getStaticShellDisallowedDynamicReasons;
      },
      isDynamicPostpone: function() {
        return isDynamicPostpone;
      },
      isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
      },
      logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
      },
      markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
      },
      postponeWithTracking: function() {
        return postponeWithTracking;
      },
      throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
      },
      throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
      },
      trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
      },
      trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
      },
      trackDynamicHoleInNavigation: function() {
        return trackDynamicHoleInNavigation;
      },
      trackDynamicHoleInRuntimeShell: function() {
        return trackDynamicHoleInRuntimeShell;
      },
      trackDynamicHoleInStaticShell: function() {
        return trackDynamicHoleInStaticShell;
      },
      trackThrownErrorInNavigation: function() {
        return trackThrownErrorInNavigation;
      },
      useDynamicRouteParams: function() {
        return useDynamicRouteParams;
      },
      useDynamicSearchParams: function() {
        return useDynamicSearchParams;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    var _hooksservercontext = require_hooks_server_context();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _boundaryconstants = require_boundary_constants();
    var _scheduler = require_scheduler();
    var _bailouttocsr = require_bailout_to_csr();
    var _invarianterror = require_invariant_error();
    var _boundaryconstants1 = require_boundary_constants2();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var hasPostpone = typeof _react.default.unstable_postpone === "function";
    function createDynamicTrackingState(isDebugDynamicAccesses) {
      return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
      };
    }
    function createDynamicValidationState() {
      return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
      };
    }
    function getFirstDynamicReason(trackingState) {
      var _trackingState_dynamicAccesses_;
      return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
    }
    function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "cache":
          case "unstable-cache":
            return;
          case "private-cache":
            return;
          case "prerender-legacy":
          case "prerender-ppr":
          case "request":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      if (store.forceDynamic || store.forceStatic) return;
      if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E553",
          enumerable: false,
          configurable: true
        });
      }
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender-ppr":
            return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
          case "prerender-legacy":
            workUnitStore.revalidate = 0;
            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
              value: "E550",
              enumerable: false,
              configurable: true
            });
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
          case "request":
            if (process.env.NODE_ENV !== "production") {
              workUnitStore.usedDynamic = true;
            }
            break;
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
    }
    function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
      const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
      });
      prerenderStore.revalidate = 0;
      store.dynamicUsageDescription = expression;
      store.dynamicUsageStack = err.stack;
      throw err;
    }
    function trackDynamicDataInDynamicRender(workUnitStore) {
      switch (workUnitStore.type) {
        case "cache":
        case "unstable-cache":
          return;
        case "private-cache":
          return;
        case "prerender":
        case "prerender-runtime":
        case "prerender-legacy":
        case "prerender-ppr":
        case "prerender-client":
        case "validation-client":
        case "generate-static-params":
          break;
        case "request":
          if (process.env.NODE_ENV !== "production") {
            workUnitStore.usedDynamic = true;
          }
          break;
        default:
          workUnitStore;
      }
    }
    function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
      const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
      const error = createPrerenderInterruptedError(reason);
      prerenderStore.controller.abort(error);
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
      if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
          dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
      }
    }
    function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
      const prerenderSignal = prerenderStore.controller.signal;
      if (prerenderSignal.aborted === false) {
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
          if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
          }
        }
      }
      throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
    }
    function Postpone({ reason, route }) {
      const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      const dynamicTracking = prerenderStore && prerenderStore.type === "prerender-ppr" ? prerenderStore.dynamicTracking : null;
      postponeWithTracking(route, reason, dynamicTracking);
    }
    function postponeWithTracking(route, expression, dynamicTracking) {
      assertPostpone();
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
      _react.default.unstable_postpone(createPostponeReason(route, expression));
    }
    function createPostponeReason(route, expression) {
      return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    }
    function isDynamicPostpone(err) {
      if (typeof err === "object" && err !== null && typeof err.message === "string") {
        return isDynamicPostponeReason(err.message);
      }
      return false;
    }
    function isDynamicPostponeReason(reason) {
      return reason.includes("needs to bail out of prerendering at this point because it used") && reason.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
    }
    if (isDynamicPostponeReason(createPostponeReason("%%%", "^^^")) === false) {
      throw Object.defineProperty(new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
      });
    }
    var NEXT_PRERENDER_INTERRUPTED = "NEXT_PRERENDER_INTERRUPTED";
    function createPrerenderInterruptedError(message) {
      const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = NEXT_PRERENDER_INTERRUPTED;
      return error;
    }
    function isPrerenderInterruptedError(error) {
      return typeof error === "object" && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && "name" in error && "message" in error && error instanceof Error;
    }
    function accessedDynamicData(dynamicAccesses) {
      return dynamicAccesses.length > 0;
    }
    function consumeDynamicAccess(serverDynamic, clientDynamic) {
      serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
      return serverDynamic.dynamicAccesses;
    }
    function formatDynamicAPIAccesses(dynamicAccesses) {
      return dynamicAccesses.filter((access) => typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack }) => {
        stack = stack.split("\n").slice(4).filter((line) => {
          if (line.includes("node_modules/next/")) {
            return false;
          }
          if (line.includes(" (<anonymous>)")) {
            return false;
          }
          if (line.includes(" (node:")) {
            return false;
          }
          return true;
        }).join("\n");
        return `Dynamic API Usage Debug - ${expression}:
${stack}`;
      });
    }
    function assertPostpone() {
      if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
          value: "E224",
          enumerable: false,
          configurable: true
        });
      }
    }
    function createRenderInBrowserAbortSignal() {
      const controller = new AbortController();
      controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
      }));
      return controller.signal;
    }
    function createHangingInputAbortSignal(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-runtime":
          const controller = new AbortController();
          if (workUnitStore.cacheSignal) {
            workUnitStore.cacheSignal.inputReady().then(() => {
              controller.abort();
            });
          } else {
            if (
              // eslint-disable-next-line no-restricted-syntax -- We are discriminating between two different refined types and don't need an addition exhaustive switch here
              workUnitStore.type === "prerender-runtime" && workUnitStore.stagedRendering
            ) {
              const { stagedRendering } = workUnitStore;
              stagedRendering.waitForStage((0, _dynamicrenderingutils.getRuntimeStage)(stagedRendering)).then(() => (0, _scheduler.scheduleOnNextTick)(() => controller.abort()));
            } else {
              (0, _scheduler.scheduleOnNextTick)(() => controller.abort());
            }
          }
          return controller.signal;
        case "prerender-client":
        case "validation-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "generate-static-params":
          return void 0;
        default:
          workUnitStore;
      }
    }
    function annotateDynamicAccess(expression, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function useDynamicRouteParams(expression) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore && workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender-client":
          case "prerender": {
            const fallbackParams = workUnitStore.fallbackRouteParams;
            if (fallbackParams && fallbackParams.size > 0) {
              _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
            }
            break;
          }
          case "prerender-ppr": {
            const fallbackParams = workUnitStore.fallbackRouteParams;
            if (fallbackParams && fallbackParams.size > 0) {
              return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
            }
            break;
          }
          case "validation-client": {
            break;
          }
          case "prerender-runtime":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E771",
              enumerable: false,
              configurable: true
            });
          case "cache":
          case "private-cache":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E745",
              enumerable: false,
              configurable: true
            });
          case "generate-static-params":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called in \`generateStaticParams\`. Next.js should be preventing ${expression} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E1130",
              enumerable: false,
              configurable: true
            });
          case "prerender-legacy":
          case "request":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
    }
    function useDynamicSearchParams(expression) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (!workStore) {
        return;
      }
      if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
      }
      switch (workUnitStore.type) {
        case "validation-client":
          return;
        case "prerender-client": {
          _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
          break;
        }
        case "prerender-legacy":
        case "prerender-ppr": {
          if (workStore.forceStatic) {
            return;
          }
          throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
          });
        }
        case "prerender":
        case "prerender-runtime":
          throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E795",
            enumerable: false,
            configurable: true
          });
        case "cache":
        case "unstable-cache":
        case "private-cache":
          throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E745",
            enumerable: false,
            configurable: true
          });
        case "generate-static-params":
          throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called in \`generateStaticParams\`. Next.js should be preventing ${expression} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E1130",
            enumerable: false,
            configurable: true
          });
        case "request":
          return;
        default:
          workUnitStore;
      }
    }
    var hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
    var bodyAndImplicitTags = "body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6";
    var hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
    var hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
    var hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
    var hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
    var hasInstantValidationBoundaryRegex = new RegExp(`\\n\\s+at ${_boundaryconstants1.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`);
    function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
      if (hasOutletRegex.test(componentStack)) {
        return;
      } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
      } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
      } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
      } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        return;
      } else if (clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
      } else {
        const message = `Route "${workStore.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
          value: "E1079",
          enumerable: false,
          configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
      }
    }
    var DynamicHoleKind = /* @__PURE__ */ (function(DynamicHoleKind2) {
      DynamicHoleKind2[DynamicHoleKind2["Runtime"] = 1] = "Runtime";
      DynamicHoleKind2[DynamicHoleKind2["Dynamic"] = 2] = "Dynamic";
      return DynamicHoleKind2;
    })({});
    function createInstantValidationState(createInstantStack) {
      return {
        hasDynamicMetadata: false,
        hasAllowedClientDynamicAboveBoundary: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: [],
        validationPreventingErrors: [],
        thrownErrorsOutsideBoundary: [],
        createInstantStack
      };
    }
    function trackDynamicHoleInNavigation(workStore, componentStack, dynamicValidation, clientDynamic, kind, boundaryState) {
      if (hasOutletRegex.test(componentStack)) {
        return;
      }
      if (hasMetadataRegex.test(componentStack)) {
        const usageDescription2 = kind === 1 ? `Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments.` : `Uncached data or \`connection()\` was accessed inside \`generateMetadata\`.`;
        const message2 = `Route "${workStore.route}": ${usageDescription2} Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error2 = addErrorContext(Object.defineProperty(new Error(message2), "__NEXT_ERROR_CODE", {
          value: "E1076",
          enumerable: false,
          configurable: true
        }), componentStack, dynamicValidation.createInstantStack);
        dynamicValidation.dynamicMetadata = error2;
        return;
      }
      if (hasViewportRegex.test(componentStack)) {
        const usageDescription2 = kind === 1 ? `Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`.` : `Uncached data or \`connection()\` was accessed inside \`generateViewport\`.`;
        const message2 = `Route "${workStore.route}": ${usageDescription2} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error2 = addErrorContext(Object.defineProperty(new Error(message2), "__NEXT_ERROR_CODE", {
          value: "E1086",
          enumerable: false,
          configurable: true
        }), componentStack, dynamicValidation.createInstantStack);
        dynamicValidation.dynamicErrors.push(error2);
        return;
      }
      const boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
      if (!boundaryLocation) {
        if (boundaryState.expectedIds.size === boundaryState.renderedIds.size) {
          dynamicValidation.hasAllowedClientDynamicAboveBoundary = true;
          dynamicValidation.hasAllowedDynamic = true;
          return;
        } else {
          const message2 = `Route "${workStore.route}": Could not validate \`unstable_instant\` because a Client Component in a parent segment prevented the page from rendering.`;
          const error2 = addErrorContext(Object.defineProperty(new Error(message2), "__NEXT_ERROR_CODE", {
            value: "E1082",
            enumerable: false,
            configurable: true
          }), componentStack, dynamicValidation.createInstantStack);
          dynamicValidation.validationPreventingErrors.push(error2);
          return;
        }
      } else {
        const suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
          if (suspenseLocation.index < boundaryLocation.index) {
            dynamicValidation.hasAllowedDynamic = true;
            return;
          } else {
          }
        }
      }
      if (clientDynamic.syncDynamicErrorWithStack) {
        const syncError = clientDynamic.syncDynamicErrorWithStack;
        if (dynamicValidation.createInstantStack !== null && syncError.cause === void 0) {
          syncError.cause = dynamicValidation.createInstantStack();
        }
        dynamicValidation.dynamicErrors.push(syncError);
        return;
      }
      const usageDescription = kind === 1 ? `Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`.` : `Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`.`;
      const message = `Route "${workStore.route}": ${usageDescription} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
      const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E1078",
        enumerable: false,
        configurable: true
      }), componentStack, dynamicValidation.createInstantStack);
      dynamicValidation.dynamicErrors.push(error);
      return;
    }
    function trackThrownErrorInNavigation(workStore, dynamicValidation, thrownValue, componentStack) {
      const boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
      if (!boundaryLocation) {
        const error = addErrorContext(Object.defineProperty(new Error("An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.", {
          cause: thrownValue
        }), "__NEXT_ERROR_CODE", {
          value: "E1118",
          enumerable: false,
          configurable: true
        }), componentStack, null);
        dynamicValidation.thrownErrorsOutsideBoundary.push(error);
      } else {
        const suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
          if (suspenseLocation.index < boundaryLocation.index) {
            return;
          } else {
          }
        }
        const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because an error prevented the target segment from rendering.`;
        const error = addErrorContext(
          Object.defineProperty(new Error(message, {
            cause: thrownValue
          }), "__NEXT_ERROR_CODE", {
            value: "E1112",
            enumerable: false,
            configurable: true
          }),
          componentStack,
          null
          // TODO(instant-validation-build): conflicting use of cause
        );
        dynamicValidation.validationPreventingErrors.push(error);
      }
    }
    function trackDynamicHoleInRuntimeShell(workStore, componentStack, dynamicValidation, clientDynamic) {
      if (hasOutletRegex.test(componentStack)) {
        return;
      } else if (hasMetadataRegex.test(componentStack)) {
        const message2 = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error2 = addErrorContext(Object.defineProperty(new Error(message2), "__NEXT_ERROR_CODE", {
          value: "E1080",
          enumerable: false,
          configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicMetadata = error2;
        return;
      } else if (hasViewportRegex.test(componentStack)) {
        const message2 = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error2 = addErrorContext(Object.defineProperty(new Error(message2), "__NEXT_ERROR_CODE", {
          value: "E1077",
          enumerable: false,
          configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error2);
        return;
      } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
      } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        return;
      } else if (clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
      }
      const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
      const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E1084",
        enumerable: false,
        configurable: true
      }), componentStack, null);
      dynamicValidation.dynamicErrors.push(error);
      return;
    }
    function trackDynamicHoleInStaticShell(workStore, componentStack, dynamicValidation, clientDynamic) {
      if (hasOutletRegex.test(componentStack)) {
        return;
      } else if (hasMetadataRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
          value: "E1085",
          enumerable: false,
          configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicMetadata = error;
        return;
      } else if (hasViewportRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
          value: "E1081",
          enumerable: false,
          configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
      } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
      } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        return;
      } else if (clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
      } else {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
          value: "E1083",
          enumerable: false,
          configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
      }
    }
    function addErrorContext(error, componentStack, createInstantStack) {
      const ownerStack = process.env.NODE_ENV !== "production" && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
      if (createInstantStack !== null) {
        error.cause = createInstantStack();
      }
      error.stack = error.name + ": " + error.message + (ownerStack || componentStack);
      return error;
    }
    var PreludeState = /* @__PURE__ */ (function(PreludeState2) {
      PreludeState2[PreludeState2["Full"] = 0] = "Full";
      PreludeState2[PreludeState2["Empty"] = 1] = "Empty";
      PreludeState2[PreludeState2["Errored"] = 2] = "Errored";
      return PreludeState2;
    })({});
    function logDisallowedDynamicError(workStore, error) {
      console.error(error);
      if (process.env.NODE_ENV !== "development") {
        console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
      } else if (!process.env.__NEXT_DEV_SERVER) {
        console.error(`To debug the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
      }
    }
    function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
      if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
      }
      if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
          return;
        }
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          for (let i = 0; i < dynamicErrors.length; i++) {
            logDisallowedDynamicError(workStore, dynamicErrors[i]);
          }
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (dynamicValidation.hasDynamicViewport) {
          console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
          console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
      } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
          console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
      }
    }
    function getStaticShellDisallowedDynamicReasons(workStore, prelude, dynamicValidation, configAllowsBlocking) {
      if (configAllowsBlocking || dynamicValidation.hasSuspenseAboveBody) {
        return [];
      }
      if (prelude !== 0) {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          return dynamicErrors;
        }
        if (prelude === 1) {
          return [
            Object.defineProperty(new _invarianterror.InvariantError(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
              value: "E936",
              enumerable: false,
              configurable: true
            })
          ];
        }
      } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicErrors.length === 0 && dynamicValidation.dynamicMetadata) {
          return [
            dynamicValidation.dynamicMetadata
          ];
        }
      }
      return [];
    }
    function getNavigationDisallowedDynamicReasons(workStore, prelude, dynamicValidation, validationSampleTracking, boundaryState) {
      if (validationSampleTracking) {
        const { missingSampleErrors } = validationSampleTracking;
        if (missingSampleErrors.length > 0) {
          return missingSampleErrors;
        }
      }
      const { validationPreventingErrors } = dynamicValidation;
      if (validationPreventingErrors.length > 0) {
        return validationPreventingErrors;
      }
      if (boundaryState.renderedIds.size < boundaryState.expectedIds.size) {
        const { thrownErrorsOutsideBoundary, createInstantStack } = dynamicValidation;
        if (thrownErrorsOutsideBoundary.length === 0) {
          const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering for an unknown reason.`;
          const error = createInstantStack !== null ? createInstantStack() : new Error();
          error.name = "Error";
          error.message = message;
          return [
            error
          ];
        } else if (thrownErrorsOutsideBoundary.length === 1) {
          const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to the following error.`;
          const error = createInstantStack !== null ? createInstantStack() : new Error();
          error.name = "Error";
          error.message = message;
          return [
            error,
            thrownErrorsOutsideBoundary[0]
          ];
        } else {
          const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`;
          const error = createInstantStack !== null ? createInstantStack() : new Error();
          error.name = "Error";
          error.message = message;
          return [
            error,
            ...thrownErrorsOutsideBoundary
          ];
        }
      }
      if (prelude !== 0) {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          return dynamicErrors;
        }
        if (prelude === 1) {
          if (dynamicValidation.hasAllowedClientDynamicAboveBoundary) {
            return [];
          }
          return [
            Object.defineProperty(new _invarianterror.InvariantError(`Route "${workStore.route}" failed to render during instant validation and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
              value: "E1055",
              enumerable: false,
              configurable: true
            })
          ];
        }
      } else {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          return dynamicErrors;
        }
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicMetadata) {
          return [
            dynamicValidation.dynamicMetadata
          ];
        }
      }
      return [];
    }
  }
});

// node_modules/next/dist/client/components/unstable-rethrow.server.js
var require_unstable_rethrow_server = __commonJS({
  "node_modules/next/dist/client/components/unstable-rethrow.server.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _ispostpone = require_is_postpone();
    var _bailouttocsr = require_bailout_to_csr();
    var _isnextroutererror = require_is_next_router_error();
    var _dynamicrendering = require_dynamic_rendering();
    var _hooksservercontext = require_hooks_server_context();
    function unstable_rethrow(error) {
      if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
      }
      if (error instanceof Error && "cause" in error) {
        unstable_rethrow(error.cause);
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/unstable-rethrow.browser.js
var require_unstable_rethrow_browser = __commonJS({
  "node_modules/next/dist/client/components/unstable-rethrow.browser.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var _bailouttocsr = require_bailout_to_csr();
    var _isnextroutererror = require_is_next_router_error();
    function unstable_rethrow(error) {
      if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
        throw error;
      }
      if (error instanceof Error && "cause" in error) {
        unstable_rethrow(error.cause);
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/unstable-rethrow.js
var require_unstable_rethrow = __commonJS({
  "node_modules/next/dist/client/components/unstable-rethrow.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var unstable_rethrow = typeof window === "undefined" ? require_unstable_rethrow_server().unstable_rethrow : require_unstable_rethrow_browser().unstable_rethrow;
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/navigation.react-server.js
var require_navigation_react_server = __commonJS({
  "node_modules/next/dist/client/components/navigation.react-server.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return RedirectType;
      },
      forbidden: function() {
        return _forbidden.forbidden;
      },
      notFound: function() {
        return _notfound.notFound;
      },
      permanentRedirect: function() {
        return _redirect.permanentRedirect;
      },
      redirect: function() {
        return _redirect.redirect;
      },
      unauthorized: function() {
        return _unauthorized.unauthorized;
      },
      unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
      },
      unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
      }
    });
    var _readonlyurlsearchparams = require_readonly_url_search_params();
    var _redirect = require_redirect();
    var _notfound = require_not_found();
    var _forbidden = require_forbidden();
    var _unauthorized = require_unauthorized();
    var _unstablerethrow = require_unstable_rethrow();
    function unstable_isUnrecognizedActionError() {
      throw Object.defineProperty(new Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
      });
    }
    var RedirectType = {
      push: "push",
      replace: "replace"
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var require_cookies = __commonJS({
  "node_modules/next/dist/compiled/@edge-runtime/cookies/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      RequestCookies: () => RequestCookies,
      ResponseCookies: () => ResponseCookies,
      parseCookie: () => parseCookie,
      parseSetCookie: () => parseSetCookie,
      stringifyCookie: () => stringifyCookie
    });
    module2.exports = __toCommonJS2(src_exports);
    function stringifyCookie(c) {
      var _a;
      const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
      ].filter(Boolean);
      const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
      return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
    }
    function parseCookie(cookie) {
      const map = /* @__PURE__ */ new Map();
      for (const pair of cookie.split(/; */)) {
        if (!pair)
          continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
          map.set(pair, "true");
          continue;
        }
        const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];
        try {
          map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch {
        }
      }
      return map;
    }
    function parseSetCookie(setCookie) {
      if (!setCookie) {
        return void 0;
      }
      const [[name, value], ...attributes] = parseCookie(setCookie);
      const {
        domain,
        expires,
        httponly,
        maxage,
        path,
        samesite,
        secure,
        partitioned,
        priority
      } = Object.fromEntries(
        attributes.map(([key, value2]) => [
          key.toLowerCase().replace(/-/g, ""),
          value2
        ])
      );
      const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && { expires: new Date(expires) },
        ...httponly && { httpOnly: true },
        ...typeof maxage === "string" && { maxAge: Number(maxage) },
        path,
        ...samesite && { sameSite: parseSameSite(samesite) },
        ...secure && { secure: true },
        ...priority && { priority: parsePriority(priority) },
        ...partitioned && { partitioned: true }
      };
      return compact(cookie);
    }
    function compact(t) {
      const newT = {};
      for (const key in t) {
        if (t[key]) {
          newT[key] = t[key];
        }
      }
      return newT;
    }
    var SAME_SITE = ["strict", "lax", "none"];
    function parseSameSite(string) {
      string = string.toLowerCase();
      return SAME_SITE.includes(string) ? string : void 0;
    }
    var PRIORITY = ["low", "medium", "high"];
    function parsePriority(string) {
      string = string.toLowerCase();
      return PRIORITY.includes(string) ? string : void 0;
    }
    function splitCookiesString(cookiesString) {
      if (!cookiesString)
        return [];
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    var RequestCookies = class {
      constructor(requestHeaders) {
        this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
          const parsed = parseCookie(header);
          for (const [name, value] of parsed) {
            this._parsed.set(name, { name, value });
          }
        }
      }
      [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
      }
      /**
       * The amount of cookies received from the client
       */
      get size() {
        return this._parsed.size;
      }
      get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
      }
      getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
          return all.map(([_, value]) => value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n]) => n === name).map(([_, value]) => value);
      }
      has(name) {
        return this._parsed.has(name);
      }
      set(...args) {
        const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;
        const map = this._parsed;
        map.set(name, { name, value });
        this._headers.set(
          "cookie",
          Array.from(map).map(([_, value2]) => stringifyCookie(value2)).join("; ")
        );
        return this;
      }
      /**
       * Delete the cookies matching the passed name or names in the request.
       */
      delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
        this._headers.set(
          "cookie",
          Array.from(map).map(([_, value]) => stringifyCookie(value)).join("; ")
        );
        return result;
      }
      /**
       * Delete all the cookies in the cookies in the request.
       */
      clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
      }
      /**
       * Format the cookies in the request as a string for logging
       */
      [/* @__PURE__ */ Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join("; ");
      }
    };
    var ResponseCookies = class {
      constructor(responseHeaders) {
        this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings) {
          const parsed = parseSetCookie(cookieString);
          if (parsed)
            this._parsed.set(parsed.name, parsed);
        }
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
       */
      get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
       */
      getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
          return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c) => c.name === key);
      }
      has(name) {
        return this._parsed.has(name);
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
       */
      set(...args) {
        const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({ name, value, ...cookie }));
        replace(map, this._headers);
        return this;
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
       */
      delete(...args) {
        const [name, options] = typeof args[0] === "string" ? [args[0]] : [args[0].name, args[0]];
        return this.set({ ...options, name, value: "", expires: /* @__PURE__ */ new Date(0) });
      }
      [/* @__PURE__ */ Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()].map(stringifyCookie).join("; ");
      }
    };
    function replace(bag, headers) {
      headers.delete("set-cookie");
      for (const [, value] of bag) {
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
      }
    }
    function normalizeCookie(cookie = { name: "", value: "" }) {
      if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
      }
      if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
      }
      if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
      }
      return cookie;
    }
  }
});

// node_modules/next/dist/server/web/spec-extension/cookies.js
var require_cookies2 = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/cookies.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      RequestCookies: function() {
        return _cookies.RequestCookies;
      },
      ResponseCookies: function() {
        return _cookies.ResponseCookies;
      },
      stringifyCookie: function() {
        return _cookies.stringifyCookie;
      }
    });
    var _cookies = require_cookies();
  }
});

// node_modules/next/dist/server/web/spec-extension/adapters/reflect.js
var require_reflect = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/adapters/reflect.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "ReflectAdapter", {
      enumerable: true,
      get: function() {
        return ReflectAdapter;
      }
    });
    var ReflectAdapter = class {
      static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
          return value.bind(target);
        }
        return value;
      }
      static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
      }
      static has(target, prop) {
        return Reflect.has(target, prop);
      }
      static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
      }
    };
  }
});

// node_modules/next/dist/shared/lib/action-revalidation-kind.js
var require_action_revalidation_kind = __commonJS({
  "node_modules/next/dist/shared/lib/action-revalidation-kind.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      ActionDidNotRevalidate: function() {
        return ActionDidNotRevalidate;
      },
      ActionDidRevalidateDynamicOnly: function() {
        return ActionDidRevalidateDynamicOnly;
      },
      ActionDidRevalidateStaticAndDynamic: function() {
        return ActionDidRevalidateStaticAndDynamic;
      }
    });
    var ActionDidNotRevalidate = 0;
    var ActionDidRevalidateStaticAndDynamic = 1;
    var ActionDidRevalidateDynamicOnly = 2;
  }
});

// node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js
var require_request_cookies = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      MutableRequestCookiesAdapter: function() {
        return MutableRequestCookiesAdapter;
      },
      ReadonlyRequestCookiesError: function() {
        return ReadonlyRequestCookiesError;
      },
      RequestCookiesAdapter: function() {
        return RequestCookiesAdapter;
      },
      appendMutableCookies: function() {
        return appendMutableCookies;
      },
      areCookiesMutableInCurrentPhase: function() {
        return areCookiesMutableInCurrentPhase;
      },
      createCookiesWithMutableAccessCheck: function() {
        return createCookiesWithMutableAccessCheck;
      },
      getModifiedCookieValues: function() {
        return getModifiedCookieValues;
      },
      responseCookiesToRequestCookies: function() {
        return responseCookiesToRequestCookies;
      }
    });
    var _cookies = require_cookies2();
    var _reflect = require_reflect();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _actionrevalidationkind = require_action_revalidation_kind();
    var ReadonlyRequestCookiesError = class _ReadonlyRequestCookiesError extends Error {
      constructor() {
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
      }
      static callable() {
        throw new _ReadonlyRequestCookiesError();
      }
    };
    var RequestCookiesAdapter = class {
      static seal(cookies) {
        return new Proxy(cookies, {
          get(target, prop, receiver) {
            switch (prop) {
              case "clear":
              case "delete":
              case "set":
                return ReadonlyRequestCookiesError.callable;
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
      }
    };
    var SYMBOL_MODIFY_COOKIE_VALUES = /* @__PURE__ */ Symbol.for("next.mutated.cookies");
    function getModifiedCookieValues(cookies) {
      const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
      if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
      }
      return modified;
    }
    function appendMutableCookies(headers, mutableCookies) {
      const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
      if (modifiedCookieValues.length === 0) {
        return false;
      }
      const resCookies = new _cookies.ResponseCookies(headers);
      const returnedCookies = resCookies.getAll();
      for (const cookie of modifiedCookieValues) {
        resCookies.set(cookie);
      }
      for (const cookie of returnedCookies) {
        resCookies.set(cookie);
      }
      return true;
    }
    var MutableRequestCookiesAdapter = class {
      static wrap(cookies, onUpdateCookies) {
        const responseCookies = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()) {
          responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = /* @__PURE__ */ new Set();
        const updateResponseCookies = () => {
          const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
          if (workStore) {
            workStore.pathWasRevalidated = _actionrevalidationkind.ActionDidRevalidateStaticAndDynamic;
          }
          const allCookies = responseCookies.getAll();
          modifiedValues = allCookies.filter((c) => modifiedCookies.has(c.name));
          if (onUpdateCookies) {
            const serializedCookies = [];
            for (const cookie of modifiedValues) {
              const tempCookies = new _cookies.ResponseCookies(new Headers());
              tempCookies.set(cookie);
              serializedCookies.push(tempCookies.toString());
            }
            onUpdateCookies(serializedCookies);
          }
        };
        const wrappedCookies = new Proxy(responseCookies, {
          get(target, prop, receiver) {
            switch (prop) {
              // A special symbol to get the modified cookie values
              case SYMBOL_MODIFY_COOKIE_VALUES:
                return modifiedValues;
              // TODO: Throw error if trying to set a cookie after the response
              // headers have been set.
              case "delete":
                return function(...args) {
                  modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                  try {
                    target.delete(...args);
                    return wrappedCookies;
                  } finally {
                    updateResponseCookies();
                  }
                };
              case "set":
                return function(...args) {
                  modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                  try {
                    target.set(...args);
                    return wrappedCookies;
                  } finally {
                    updateResponseCookies();
                  }
                };
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
        return wrappedCookies;
      }
    };
    function createCookiesWithMutableAccessCheck(requestStore) {
      const wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get(target, prop, receiver) {
          switch (prop) {
            case "delete":
              return function(...args) {
                ensureCookiesAreStillMutable(requestStore, "cookies().delete");
                target.delete(...args);
                return wrappedCookies;
              };
            case "set":
              return function(...args) {
                ensureCookiesAreStillMutable(requestStore, "cookies().set");
                target.set(...args);
                return wrappedCookies;
              };
            default:
              return _reflect.ReflectAdapter.get(target, prop, receiver);
          }
        }
      });
      return wrappedCookies;
    }
    function areCookiesMutableInCurrentPhase(requestStore) {
      return requestStore.phase === "action";
    }
    function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
      if (!areCookiesMutableInCurrentPhase(requestStore)) {
        throw new ReadonlyRequestCookiesError();
      }
    }
    function responseCookiesToRequestCookies(responseCookies) {
      const requestCookies = new _cookies.RequestCookies(new Headers());
      for (const cookie of responseCookies.getAll()) {
        requestCookies.set(cookie);
      }
      return requestCookies;
    }
  }
});

// node_modules/next/dist/server/web/spec-extension/adapters/headers.js
var require_headers = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/adapters/headers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      HeadersAdapter: function() {
        return HeadersAdapter;
      },
      ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
      }
    });
    var _reflect = require_reflect();
    var ReadonlyHeadersError = class _ReadonlyHeadersError extends Error {
      constructor() {
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
      }
      static callable() {
        throw new _ReadonlyHeadersError();
      }
    };
    var HeadersAdapter = class _HeadersAdapter extends Headers {
      constructor(headers) {
        super();
        this.headers = new Proxy(headers, {
          get(target, prop, receiver) {
            if (typeof prop === "symbol") {
              return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined") return;
            return _reflect.ReflectAdapter.get(target, original, receiver);
          },
          set(target, prop, value, receiver) {
            if (typeof prop === "symbol") {
              return _reflect.ReflectAdapter.set(target, prop, value, receiver);
            }
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
          },
          has(target, prop) {
            if (typeof prop === "symbol") return _reflect.ReflectAdapter.has(target, prop);
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined") return false;
            return _reflect.ReflectAdapter.has(target, original);
          },
          deleteProperty(target, prop) {
            if (typeof prop === "symbol") return _reflect.ReflectAdapter.deleteProperty(target, prop);
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined") return true;
            return _reflect.ReflectAdapter.deleteProperty(target, original);
          }
        });
      }
      /**
      * Seals a Headers instance to prevent modification by throwing an error when
      * any mutating method is called.
      */
      static seal(headers) {
        return new Proxy(headers, {
          get(target, prop, receiver) {
            switch (prop) {
              case "append":
              case "delete":
              case "set":
                return ReadonlyHeadersError.callable;
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
      }
      /**
      * Merges a header value into a string. This stores multiple values as an
      * array, so we need to merge them into a string.
      *
      * @param value a header value
      * @returns a merged header value (a string)
      */
      merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
      }
      /**
      * Creates a Headers instance from a plain object or a Headers instance.
      *
      * @param headers a plain object or a Headers instance
      * @returns a headers instance
      */
      static from(headers) {
        if (headers instanceof Headers) return headers;
        return new _HeadersAdapter(headers);
      }
      append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
          this.headers[name] = [
            existing,
            value
          ];
        } else if (Array.isArray(existing)) {
          existing.push(value);
        } else {
          this.headers[name] = value;
        }
      }
      delete(name) {
        delete this.headers[name];
      }
      get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
      }
      has(name) {
        return typeof this.headers[name] !== "undefined";
      }
      set(name, value) {
        this.headers[name] = value;
      }
      forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()) {
          callbackfn.call(thisArg, value, name, this);
        }
      }
      *entries() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          const value = this.get(name);
          yield [
            name,
            value
          ];
        }
      }
      *keys() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          yield name;
        }
      }
      *values() {
        for (const key of Object.keys(this.headers)) {
          const value = this.get(key);
          yield value;
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
  }
});

// node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js
var require_ensure_leading_slash = __commonJS({
  "node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "ensureLeadingSlash", {
      enumerable: true,
      get: function() {
        return ensureLeadingSlash;
      }
    });
    function ensureLeadingSlash(path) {
      return path.startsWith("/") ? path : `/${path}`;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/app-paths.js
var require_app_paths = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/app-paths.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      compareAppPaths: function() {
        return compareAppPaths;
      },
      normalizeAppPath: function() {
        return normalizeAppPath;
      },
      normalizeRscURL: function() {
        return normalizeRscURL;
      }
    });
    var _ensureleadingslash = require_ensure_leading_slash();
    var _segment = require_segment();
    function normalizeAppPath(route) {
      return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments) => {
        if (!segment) {
          return pathname;
        }
        if ((0, _segment.isGroupSegment)(segment)) {
          return pathname;
        }
        if (segment[0] === "@") {
          return pathname;
        }
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
          return pathname;
        }
        return `${pathname}/${segment}`;
      }, ""));
    }
    function compareAppPaths(a, b) {
      const aHasSlot = a.includes("/@");
      const bHasSlot = b.includes("/@");
      if (aHasSlot && !bHasSlot) return -1;
      if (!aHasSlot && bHasSlot) return 1;
      return a.localeCompare(b);
    }
    function normalizeRscURL(url) {
      return url.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/interception-routes.js
var require_interception_routes = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/interception-routes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
      },
      extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
      },
      isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
      }
    });
    var _apppaths = require_app_paths();
    var INTERCEPTION_ROUTE_MARKERS = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function isInterceptionRouteAppPath(path) {
      return path.split("/").find((segment) => INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m))) !== void 0;
    }
    function extractInterceptionRouteInformation(path) {
      let interceptingRoute;
      let marker;
      let interceptedRoute;
      for (const segment of path.split("/")) {
        marker = INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
        if (marker) {
          ;
          [interceptingRoute, interceptedRoute] = path.split(marker, 2);
          break;
        }
      }
      if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
          value: "E269",
          enumerable: false,
          configurable: true
        });
      }
      interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute);
      switch (marker) {
        case "(.)":
          if (interceptingRoute === "/") {
            interceptedRoute = `/${interceptedRoute}`;
          } else {
            interceptedRoute = interceptingRoute + "/" + interceptedRoute;
          }
          break;
        case "(..)":
          if (interceptingRoute === "/") {
            throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
              value: "E207",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
          break;
        case "(...)":
          interceptedRoute = "/" + interceptedRoute;
          break;
        case "(..)(..)":
          const splitInterceptingRoute = interceptingRoute.split("/");
          if (splitInterceptingRoute.length <= 2) {
            throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
              value: "E486",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
          break;
        default:
          throw Object.defineProperty(new Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", {
            value: "E112",
            enumerable: false,
            configurable: true
          });
      }
      return {
        interceptingRoute,
        interceptedRoute
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/get-segment-param.js
var require_get_segment_param = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/get-segment-param.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getParamProperties: function() {
        return getParamProperties;
      },
      getSegmentParam: function() {
        return getSegmentParam;
      },
      isCatchAll: function() {
        return isCatchAll;
      }
    });
    var _interceptionroutes = require_interception_routes();
    function getSegmentParam(segment) {
      const interceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((marker) => segment.startsWith(marker));
      if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
      }
      if (segment.startsWith("[[...") && segment.endsWith("]]")) {
        return {
          // TODO-APP: Optional catchall does not currently work with parallel routes,
          // so for now aren't handling a potential interception marker.
          paramType: "optional-catchall",
          paramName: segment.slice(5, -2)
        };
      }
      if (segment.startsWith("[...") && segment.endsWith("]")) {
        return {
          paramType: interceptionMarker ? `catchall-intercepted-${interceptionMarker}` : "catchall",
          paramName: segment.slice(4, -1)
        };
      }
      if (segment.startsWith("[") && segment.endsWith("]")) {
        return {
          paramType: interceptionMarker ? `dynamic-intercepted-${interceptionMarker}` : "dynamic",
          paramName: segment.slice(1, -1)
        };
      }
      return null;
    }
    function isCatchAll(type) {
      return type === "catchall" || type === "catchall-intercepted-(..)(..)" || type === "catchall-intercepted-(.)" || type === "catchall-intercepted-(..)" || type === "catchall-intercepted-(...)" || type === "optional-catchall";
    }
    function getParamProperties(paramType) {
      let repeat = false;
      let optional = false;
      switch (paramType) {
        case "catchall":
        case "catchall-intercepted-(..)(..)":
        case "catchall-intercepted-(.)":
        case "catchall-intercepted-(..)":
        case "catchall-intercepted-(...)":
          repeat = true;
          break;
        case "optional-catchall":
          repeat = true;
          optional = true;
          break;
        case "dynamic":
        case "dynamic-intercepted-(..)(..)":
        case "dynamic-intercepted-(.)":
        case "dynamic-intercepted-(..)":
        case "dynamic-intercepted-(...)":
          break;
        default:
          paramType;
      }
      return {
        repeat,
        optional
      };
    }
  }
});

// node_modules/next/dist/shared/lib/utils.js
var require_utils = __commonJS({
  "node_modules/next/dist/shared/lib/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      DecodeError: function() {
        return DecodeError;
      },
      MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
      },
      MissingStaticPage: function() {
        return MissingStaticPage;
      },
      NormalizeError: function() {
        return NormalizeError;
      },
      PageNotFoundError: function() {
        return PageNotFoundError;
      },
      SP: function() {
        return SP;
      },
      ST: function() {
        return ST;
      },
      WEB_VITALS: function() {
        return WEB_VITALS;
      },
      execOnce: function() {
        return execOnce;
      },
      getDisplayName: function() {
        return getDisplayName;
      },
      getLocationOrigin: function() {
        return getLocationOrigin;
      },
      getURL: function() {
        return getURL;
      },
      isAbsoluteUrl: function() {
        return isAbsoluteUrl;
      },
      isResSent: function() {
        return isResSent;
      },
      loadGetInitialProps: function() {
        return loadGetInitialProps;
      },
      normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
      },
      stringifyError: function() {
        return stringifyError;
      }
    });
    var WEB_VITALS = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function execOnce(fn) {
      let used = false;
      let result;
      return (...args) => {
        if (!used) {
          used = true;
          result = fn(...args);
        }
        return result;
      };
    }
    var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
    function getLocationOrigin() {
      const { protocol, hostname, port } = window.location;
      return `${protocol}//${hostname}${port ? ":" + port : ""}`;
    }
    function getURL() {
      const { href } = window.location;
      const origin = getLocationOrigin();
      return href.substring(origin.length);
    }
    function getDisplayName(Component) {
      return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
    }
    function isResSent(res) {
      return res.finished || res.headersSent;
    }
    function normalizeRepeatedSlashes(url) {
      const urlParts = url.split("?");
      const urlNoQuery = urlParts[0];
      return urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? `?${urlParts.slice(1).join("?")}` : "");
    }
    async function loadGetInitialProps(App, ctx) {
      if (process.env.NODE_ENV !== "production") {
        if (App.prototype?.getInitialProps) {
          const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
          throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1035",
            enumerable: false,
            configurable: true
          });
        }
      }
      const res = ctx.res || ctx.ctx && ctx.ctx.res;
      if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
          return {
            pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
          };
        }
        return {};
      }
      const props = await App.getInitialProps(ctx);
      if (res && isResSent(res)) {
        return props;
      }
      if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
          value: "E1025",
          enumerable: false,
          configurable: true
        });
      }
      if (process.env.NODE_ENV !== "production") {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
          console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
      }
      return props;
    }
    var SP = typeof performance !== "undefined";
    var ST = SP && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((method) => typeof performance[method] === "function");
    var DecodeError = class extends Error {
    };
    var NormalizeError = class extends Error {
    };
    var PageNotFoundError = class extends Error {
      constructor(page) {
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = `Cannot find module for page: ${page}`;
      }
    };
    var MissingStaticPage = class extends Error {
      constructor(page, message) {
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
      }
    };
    var MiddlewareNotFoundError = class extends Error {
      constructor() {
        super();
        this.code = "ENOENT";
        this.message = `Cannot find the middleware module`;
      }
    };
    function stringifyError(error) {
      return JSON.stringify({
        message: error.message,
        stack: error.stack
      });
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/querystring.js
var require_querystring = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/querystring.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      assign: function() {
        return assign;
      },
      searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
      },
      urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
      }
    });
    function searchParamsToUrlQuery(searchParams) {
      const query = {};
      for (const [key, value] of searchParams.entries()) {
        const existing = query[key];
        if (typeof existing === "undefined") {
          query[key] = value;
        } else if (Array.isArray(existing)) {
          existing.push(value);
        } else {
          query[key] = [
            existing,
            value
          ];
        }
      }
      return query;
    }
    function stringifyUrlQueryParam(param) {
      if (typeof param === "string") {
        return param;
      }
      if (typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
      } else {
        return "";
      }
    }
    function urlQueryToSearchParams(query) {
      const searchParams = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (Array.isArray(value)) {
          for (const item of value) {
            searchParams.append(key, stringifyUrlQueryParam(item));
          }
        } else {
          searchParams.set(key, stringifyUrlQueryParam(value));
        }
      }
      return searchParams;
    }
    function assign(target, ...searchParamsList) {
      for (const searchParams of searchParamsList) {
        for (const key of searchParams.keys()) {
          target.delete(key);
        }
        for (const [key, value] of searchParams.entries()) {
          target.append(key, value);
        }
      }
      return target;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js
var require_parse_relative_url = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "parseRelativeUrl", {
      enumerable: true,
      get: function() {
        return parseRelativeUrl;
      }
    });
    var _utils = require_utils();
    var _querystring = require_querystring();
    function parseRelativeUrl(url, base, parseQuery = true) {
      const globalBase = new URL(typeof window === "undefined" ? "http://n" : (0, _utils.getLocationOrigin)());
      const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL(typeof window === "undefined" ? "http://n" : window.location.href) : globalBase;
      const { pathname, searchParams, search, hash, href, origin } = url.startsWith("/") ? (
        // See https://nodejs.org/api/http.html#messageurl
        // Not using `origin` to support other protocols
        new URL(`${resolvedBase.protocol}//${resolvedBase.host}${url}`)
      ) : new URL(url, resolvedBase);
      if (origin !== globalBase.origin) {
        throw Object.defineProperty(new Error(`invariant: invalid relative URL, router received ${url}`), "__NEXT_ERROR_CODE", {
          value: "E159",
          enumerable: false,
          configurable: true
        });
      }
      return {
        auth: null,
        host: null,
        hostname: null,
        pathname,
        port: null,
        protocol: null,
        query: parseQuery ? (0, _querystring.searchParamsToUrlQuery)(searchParams) : void 0,
        search,
        hash,
        href: href.slice(origin.length),
        // We don't know for relative URLs at this point since we set a custom, internal
        // base that isn't surfaced to users.
        slashes: null
      };
    }
  }
});

// node_modules/next/dist/server/app-render/instant-validation/instant-validation-error.js
var require_instant_validation_error = __commonJS({
  "node_modules/next/dist/server/app-render/instant-validation/instant-validation-error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      InstantValidationError: function() {
        return InstantValidationError;
      },
      isInstantValidationError: function() {
        return isInstantValidationError;
      }
    });
    var INSTANT_VALIDATION_ERROR_DIGEST = "INSTANT_VALIDATION_ERROR";
    function isInstantValidationError(err) {
      return !!(err && typeof err === "object" && err instanceof Error && err.digest === INSTANT_VALIDATION_ERROR_DIGEST);
    }
    var InstantValidationError = class extends Error {
      constructor(...args) {
        super(...args), this.digest = INSTANT_VALIDATION_ERROR_DIGEST;
      }
    };
  }
});

// node_modules/next/dist/shared/lib/utils/reflect-utils.js
var require_reflect_utils = __commonJS({
  "node_modules/next/dist/shared/lib/utils/reflect-utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
      },
      describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
      },
      wellKnownProperties: function() {
        return wellKnownProperties;
      }
    });
    var isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
    function describeStringPropertyAccess(target, prop) {
      if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
      }
      return `\`${target}[${JSON.stringify(prop)}]\``;
    }
    function describeHasCheckingStringProperty(target, prop) {
      const stringifiedProp = JSON.stringify(prop);
      return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
    }
    var wellKnownProperties = /* @__PURE__ */ new Set([
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toString",
      "valueOf",
      "toLocaleString",
      // Promise prototype
      "then",
      "catch",
      "finally",
      // React Promise extension
      "status",
      // 'value',
      // 'error',
      // React introspection
      "displayName",
      "_debugInfo",
      // Common tested properties
      "toJSON",
      "$$typeof",
      "__esModule",
      // Tested by flight when checking for iterables
      "@@iterator"
    ]);
  }
});

// node_modules/next/dist/server/app-render/instant-validation/instant-samples.js
var require_instant_samples = __commonJS({
  "node_modules/next/dist/server/app-render/instant-validation/instant-samples.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      assertRootParamInSamples: function() {
        return assertRootParamInSamples;
      },
      createCookiesFromSample: function() {
        return createCookiesFromSample;
      },
      createDraftModeForValidation: function() {
        return createDraftModeForValidation;
      },
      createExhaustiveParamsProxy: function() {
        return createExhaustiveParamsProxy;
      },
      createExhaustiveSearchParamsProxy: function() {
        return createExhaustiveSearchParamsProxy;
      },
      createExhaustiveURLSearchParamsProxy: function() {
        return createExhaustiveURLSearchParamsProxy;
      },
      createHeadersFromSample: function() {
        return createHeadersFromSample;
      },
      createRelativeURLFromSamples: function() {
        return createRelativeURLFromSamples;
      },
      createValidationSampleTracking: function() {
        return createValidationSampleTracking;
      },
      trackMissingSampleError: function() {
        return trackMissingSampleError;
      },
      trackMissingSampleErrorAndThrow: function() {
        return trackMissingSampleErrorAndThrow;
      }
    });
    var _cookies = require_cookies2();
    var _requestcookies = require_request_cookies();
    var _headers = require_headers();
    var _getsegmentparam = require_get_segment_param();
    var _parserelativeurl = require_parse_relative_url();
    var _invarianterror = require_invariant_error();
    var _instantvalidationerror = require_instant_validation_error();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _reflectutils = require_reflect_utils();
    function createValidationSampleTracking() {
      return {
        missingSampleErrors: []
      };
    }
    function getExpectedSampleTracking() {
      let validationSampleTracking = null;
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "request":
          case "validation-client":
            validationSampleTracking = workUnitStore.validationSampleTracking ?? null;
            break;
          case "cache":
          case "private-cache":
          case "unstable-cache":
          case "prerender-legacy":
          case "prerender-ppr":
          case "prerender-client":
          case "prerender":
          case "prerender-runtime":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      if (!validationSampleTracking) {
        throw Object.defineProperty(new _invarianterror.InvariantError("Expected to have a workUnitStore that provides validationSampleTracking"), "__NEXT_ERROR_CODE", {
          value: "E1110",
          enumerable: false,
          configurable: true
        });
      }
      return validationSampleTracking;
    }
    function trackMissingSampleError(error) {
      const validationSampleTracking = getExpectedSampleTracking();
      validationSampleTracking.missingSampleErrors.push(error);
    }
    function trackMissingSampleErrorAndThrow(error) {
      trackMissingSampleError(error);
      throw error;
    }
    function createCookiesFromSample(sampleCookies, route) {
      const declaredNames = /* @__PURE__ */ new Set();
      const cookies = new _cookies.RequestCookies(new Headers());
      if (sampleCookies) {
        for (const cookie of sampleCookies) {
          declaredNames.add(cookie.name);
          if (cookie.value !== null) {
            cookies.set(cookie.name, cookie.value);
          }
        }
      }
      const sealed = _requestcookies.RequestCookiesAdapter.seal(cookies);
      return new Proxy(sealed, {
        get(target, prop, receiver) {
          if (prop === "has") {
            const originalMethod = Reflect.get(target, prop, receiver);
            const wrappedMethod = function(name) {
              if (!declaredNames.has(name)) {
                trackMissingSampleErrorAndThrow(createMissingCookieSampleError(route, name));
              }
              return originalMethod.call(target, name);
            };
            return wrappedMethod;
          }
          if (prop === "get") {
            const originalMethod = Reflect.get(target, prop, receiver);
            const wrappedMethod = function(nameOrCookie) {
              let name;
              if (typeof nameOrCookie === "string") {
                name = nameOrCookie;
              } else if (nameOrCookie && typeof nameOrCookie === "object" && typeof nameOrCookie.name === "string") {
                name = nameOrCookie.name;
              } else {
                return originalMethod.call(target, nameOrCookie);
              }
              if (!declaredNames.has(name)) {
                trackMissingSampleErrorAndThrow(createMissingCookieSampleError(route, name));
              }
              return originalMethod.call(target, name);
            };
            return wrappedMethod;
          }
          return Reflect.get(target, prop, receiver);
        }
      });
    }
    function createMissingCookieSampleError(route, name) {
      return Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Route "${route}" accessed cookie "${name}" which is not defined in the \`samples\` of \`unstable_instant\`. Add it to the sample's \`cookies\` array, or \`{ name: "${name}", value: null }\` if it should be absent.`), "__NEXT_ERROR_CODE", {
        value: "E1115",
        enumerable: false,
        configurable: true
      });
    }
    function createHeadersFromSample(rawSampleHeaders, sampleCookies, route) {
      const sampleHeaders = rawSampleHeaders ? [
        ...rawSampleHeaders
      ] : [];
      if (sampleHeaders.find(([name]) => name.toLowerCase() === "cookie")) {
        throw Object.defineProperty(new _instantvalidationerror.InstantValidationError('Invalid sample: Defining cookies via a "cookie" header is not supported. Use `cookies: [{ name: ..., value: ... }]` instead.'), "__NEXT_ERROR_CODE", {
          value: "E1111",
          enumerable: false,
          configurable: true
        });
      }
      if (sampleCookies) {
        const cookieHeaderValue = sampleCookies.toString();
        sampleHeaders.push([
          "cookie",
          // if the `cookies` samples were empty, or they were all `null`, then we have no cookies,
          // and the header isn't present, but should remains readable, so we set it to null.
          cookieHeaderValue !== "" ? cookieHeaderValue : null
        ]);
      }
      const declaredNames = /* @__PURE__ */ new Set();
      const headersInit = {};
      for (const [name, value] of sampleHeaders) {
        declaredNames.add(name.toLowerCase());
        if (value !== null) {
          headersInit[name.toLowerCase()] = value;
        }
      }
      const sealed = _headers.HeadersAdapter.seal(_headers.HeadersAdapter.from(headersInit));
      return new Proxy(sealed, {
        get(target, prop, receiver) {
          if (prop === "get" || prop === "has") {
            const originalMethod = Reflect.get(target, prop, receiver);
            const patchedMethod = function(rawName) {
              const name = rawName.toLowerCase();
              if (!declaredNames.has(name)) {
                trackMissingSampleErrorAndThrow(Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Route "${route}" accessed header "${name}" which is not defined in the \`samples\` of \`unstable_instant\`. Add it to the sample's \`headers\` array, or \`["${name}", null]\` if it should be absent.`), "__NEXT_ERROR_CODE", {
                  value: "E1116",
                  enumerable: false,
                  configurable: true
                }));
              }
              return originalMethod.call(target, name);
            };
            return patchedMethod;
          }
          return Reflect.get(target, prop, receiver);
        }
      });
    }
    function createDraftModeForValidation() {
      return {
        get isEnabled() {
          return false;
        },
        enable() {
          throw Object.defineProperty(new Error("Draft mode cannot be enabled during build-time instant validation."), "__NEXT_ERROR_CODE", {
            value: "E1092",
            enumerable: false,
            configurable: true
          });
        },
        disable() {
          throw Object.defineProperty(new Error("Draft mode cannot be disabled during build-time instant validation."), "__NEXT_ERROR_CODE", {
            value: "E1094",
            enumerable: false,
            configurable: true
          });
        }
      };
    }
    function createExhaustiveParamsProxy(underlyingParams, declaredParamNames, route) {
      return new Proxy(underlyingParams, {
        get(target, prop, receiver) {
          if (typeof prop === "string" && !_reflectutils.wellKnownProperties.has(prop) && // Only error when accessing a param that is part of the route but wasn't provided.
          // accessing properties that aren't expected to be a valid param value is fine.
          prop in underlyingParams && !declaredParamNames.has(prop)) {
            trackMissingSampleErrorAndThrow(Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Route "${route}" accessed param "${prop}" which is not defined in the \`samples\` of \`unstable_instant\`. Add it to the sample's \`params\` object.`), "__NEXT_ERROR_CODE", {
              value: "E1095",
              enumerable: false,
              configurable: true
            }));
          }
          return Reflect.get(target, prop, receiver);
        }
      });
    }
    function createExhaustiveSearchParamsProxy(searchParams, declaredSearchParamNames, route) {
      return new Proxy(searchParams, {
        get(target, prop, receiver) {
          if (typeof prop === "string" && !_reflectutils.wellKnownProperties.has(prop) && !declaredSearchParamNames.has(prop)) {
            trackMissingSampleErrorAndThrow(createMissingSearchParamSampleError(route, prop));
          }
          return Reflect.get(target, prop, receiver);
        },
        has(target, prop) {
          if (typeof prop === "string" && !_reflectutils.wellKnownProperties.has(prop) && !declaredSearchParamNames.has(prop)) {
            trackMissingSampleErrorAndThrow(createMissingSearchParamSampleError(route, prop));
          }
          return Reflect.has(target, prop);
        }
      });
    }
    function createExhaustiveURLSearchParamsProxy(searchParams, declaredSearchParamNames, route) {
      return new Proxy(searchParams, {
        get(target, prop, receiver) {
          if (prop === "get" || prop === "getAll" || prop === "has") {
            const originalMathod = Reflect.get(target, prop, receiver);
            return (name) => {
              if (typeof name === "string" && !declaredSearchParamNames.has(name)) {
                trackMissingSampleErrorAndThrow(createMissingSearchParamSampleError(route, name));
              }
              return originalMathod.call(target, name);
            };
          }
          const value = Reflect.get(target, prop, receiver);
          if (typeof value === "function" && !Object.hasOwn(target, prop)) {
            return value.bind(target);
          }
          return value;
        }
      });
    }
    function createMissingSearchParamSampleError(route, name) {
      return Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Route "${route}" accessed searchParam "${name}" which is not defined in the \`samples\` of \`unstable_instant\`. Add it to the sample's \`searchParams\` object, or \`{ "${name}": null }\` if it should be absent.`), "__NEXT_ERROR_CODE", {
        value: "E1098",
        enumerable: false,
        configurable: true
      });
    }
    function createRelativeURLFromSamples(route, sampleParams, sampleSearchParams) {
      const pathname = createPathnameFromRouteAndSampleParams(route, sampleParams ?? {});
      let search = "";
      if (sampleSearchParams) {
        const qs = createURLSearchParamsFromSample(sampleSearchParams).toString();
        if (qs) {
          search = "?" + qs;
        }
      }
      return (0, _parserelativeurl.parseRelativeUrl)(pathname + search, void 0, true);
    }
    function createURLSearchParamsFromSample(sampleSearchParams) {
      const result = new URLSearchParams();
      if (sampleSearchParams) {
        for (const [key, value] of Object.entries(sampleSearchParams)) {
          if (value === null || value === void 0) continue;
          if (Array.isArray(value)) {
            for (const v of value) {
              result.append(key, v);
            }
          } else {
            result.set(key, value);
          }
        }
      }
      return result;
    }
    function createPathnameFromRouteAndSampleParams(route, params) {
      let interpolatedSegments = [];
      const rawSegments = route.split("/");
      for (const rawSegment of rawSegments) {
        const param = (0, _getsegmentparam.getSegmentParam)(rawSegment);
        if (param) {
          switch (param.paramType) {
            case "catchall":
            case "optional-catchall": {
              let paramValue = params[param.paramName];
              if (paramValue === void 0) {
                paramValue = [
                  rawSegment
                ];
              } else if (!Array.isArray(paramValue)) {
                throw Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Expected sample param value for segment '${rawSegment}' to be an array of strings, got ${typeof paramValue}`), "__NEXT_ERROR_CODE", {
                  value: "E1104",
                  enumerable: false,
                  configurable: true
                });
              }
              interpolatedSegments.push(...paramValue.map((v) => encodeURIComponent(v)));
              break;
            }
            case "dynamic": {
              let paramValue = params[param.paramName];
              if (paramValue === void 0) {
                paramValue = rawSegment;
              } else if (typeof paramValue !== "string") {
                throw Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Expected sample param value for segment '${rawSegment}' to be a string, got ${typeof paramValue}`), "__NEXT_ERROR_CODE", {
                  value: "E1108",
                  enumerable: false,
                  configurable: true
                });
              }
              interpolatedSegments.push(encodeURIComponent(paramValue));
              break;
            }
            case "catchall-intercepted-(..)(..)":
            case "catchall-intercepted-(.)":
            case "catchall-intercepted-(..)":
            case "catchall-intercepted-(...)":
            case "dynamic-intercepted-(..)(..)":
            case "dynamic-intercepted-(.)":
            case "dynamic-intercepted-(..)":
            case "dynamic-intercepted-(...)": {
              throw Object.defineProperty(new _invarianterror.InvariantError("Not implemented: Validation of interception routes"), "__NEXT_ERROR_CODE", {
                value: "E1106",
                enumerable: false,
                configurable: true
              });
            }
            default: {
              param.paramType;
            }
          }
        } else {
          interpolatedSegments.push(rawSegment);
        }
      }
      return interpolatedSegments.join("/");
    }
    function assertRootParamInSamples(workStore, sampleParams, paramName) {
      if (sampleParams && paramName in sampleParams) {
      } else {
        const route = workStore.route;
        trackMissingSampleErrorAndThrow(Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Route "${route}" accessed root param "${paramName}" which is not defined in the \`samples\` of \`unstable_instant\`. Add it to the sample's \`params\` object.`), "__NEXT_ERROR_CODE", {
          value: "E1114",
          enumerable: false,
          configurable: true
        }));
      }
    }
  }
});

// node_modules/next/dist/server/app-render/instant-validation/instant-samples-client.js
var require_instant_samples_client = __commonJS({
  "node_modules/next/dist/server/app-render/instant-validation/instant-samples-client.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      expectCompleteParamsInClientValidation: function() {
        return expectCompleteParamsInClientValidation;
      },
      instrumentParamsForClientValidation: function() {
        return instrumentParamsForClientValidation;
      },
      instrumentSearchParamsForClientValidation: function() {
        return instrumentSearchParamsForClientValidation;
      }
    });
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _instantsamples = require_instant_samples();
    var _instantvalidationerror = require_instant_validation_error();
    function instrumentParamsForClientValidation(underlyingParams) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore && workUnitStore) {
        switch (workUnitStore.type) {
          case "validation-client": {
            if (workUnitStore.validationSamples) {
              const declaredKeys = new Set(Object.keys(workUnitStore.validationSamples.params ?? {}));
              return (0, _instantsamples.createExhaustiveParamsProxy)(underlyingParams, declaredKeys, workStore.route);
            }
            break;
          }
          case "prerender-runtime":
          case "prerender-client":
          case "prerender-legacy":
          case "prerender-ppr":
          case "prerender":
          case "cache":
          case "request":
          case "private-cache":
          case "unstable-cache":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      return underlyingParams;
    }
    function expectCompleteParamsInClientValidation(expression) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore && workUnitStore) {
        switch (workUnitStore.type) {
          case "validation-client": {
            if (workUnitStore.validationSamples) {
              const fallbackParams = workUnitStore.fallbackRouteParams;
              if (fallbackParams && fallbackParams.size > 0) {
                const missingParams = Array.from(fallbackParams.keys());
                (0, _instantsamples.trackMissingSampleErrorAndThrow)(Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Route "${workStore.route}" called ${expression} but param${missingParams.length > 1 ? "s" : ""} ${missingParams.map((p) => `"${p}"`).join(", ")} ${missingParams.length > 1 ? "are" : "is"} not defined in the \`samples\` of \`unstable_instant\`. ${expression} requires all route params to be provided.`), "__NEXT_ERROR_CODE", {
                  value: "E1109",
                  enumerable: false,
                  configurable: true
                }));
              }
            }
            break;
          }
          case "prerender-runtime":
          case "prerender-client":
          case "prerender-legacy":
          case "prerender-ppr":
          case "prerender":
          case "cache":
          case "request":
          case "private-cache":
          case "unstable-cache":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
    }
    function instrumentSearchParamsForClientValidation(underlyingSearchParams) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore && workUnitStore) {
        switch (workUnitStore.type) {
          case "validation-client": {
            if (workUnitStore.validationSamples) {
              const declaredKeys = new Set(Object.keys(workUnitStore.validationSamples.searchParams ?? {}));
              return (0, _instantsamples.createExhaustiveURLSearchParamsProxy)(underlyingSearchParams, declaredKeys, workStore.route);
            }
            break;
          }
          case "prerender-runtime":
          case "prerender-client":
          case "prerender-legacy":
          case "prerender-ppr":
          case "prerender":
          case "cache":
          case "request":
          case "private-cache":
          case "unstable-cache":
          case "generate-static-params":
            break;
          default:
            workUnitStore;
        }
      }
      return underlyingSearchParams;
    }
  }
});

// node_modules/next/dist/client/components/navigation.js
var require_navigation = __commonJS({
  "node_modules/next/dist/client/components/navigation.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      // We need the same class that was used to instantiate the context value
      // Otherwise instanceof checks will fail in usercode
      ReadonlyURLSearchParams: function() {
        return _hooksclientcontextsharedruntime.ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return _navigationreactserver.RedirectType;
      },
      ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
      },
      forbidden: function() {
        return _navigationreactserver.forbidden;
      },
      notFound: function() {
        return _navigationreactserver.notFound;
      },
      permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
      },
      redirect: function() {
        return _navigationreactserver.redirect;
      },
      unauthorized: function() {
        return _navigationreactserver.unauthorized;
      },
      unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
      },
      unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
      },
      useParams: function() {
        return useParams;
      },
      usePathname: function() {
        return usePathname;
      },
      useRouter: function() {
        return useRouter;
      },
      useSearchParams: function() {
        return useSearchParams;
      },
      useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
      },
      useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
      },
      useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _react = /* @__PURE__ */ _interop_require_wildcard._(require_react());
    var _approutercontextsharedruntime = require_app_router_context_shared_runtime();
    var _hooksclientcontextsharedruntime = require_hooks_client_context_shared_runtime();
    var _segment = require_segment();
    var _serverinsertedhtmlsharedruntime = require_server_inserted_html_shared_runtime();
    var _unrecognizedactionerror = require_unrecognized_action_error();
    var _navigationreactserver = require_navigation_react_server();
    var useDynamicRouteParams = typeof window === "undefined" ? require_dynamic_rendering().useDynamicRouteParams : void 0;
    var useDynamicSearchParams = typeof window === "undefined" ? require_dynamic_rendering().useDynamicSearchParams : void 0;
    var { instrumentParamsForClientValidation, instrumentSearchParamsForClientValidation, expectCompleteParamsInClientValidation } = typeof window === "undefined" && process.env.__NEXT_CACHE_COMPONENTS ? require_instant_samples_client() : {};
    function useSearchParams() {
      useDynamicSearchParams?.("useSearchParams()");
      const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
      const readonlySearchParams = (0, _react.useMemo)(() => {
        if (!searchParams) {
          return null;
        }
        return new _hooksclientcontextsharedruntime.ReadonlyURLSearchParams(searchParams);
      }, [
        searchParams
      ]);
      if (typeof window === "undefined" && process.env.__NEXT_CACHE_COMPONENTS && readonlySearchParams) {
        return instrumentSearchParamsForClientValidation(readonlySearchParams);
      }
      if (process.env.NODE_ENV !== "production" && "use" in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
          return (0, _react.use)(navigationPromises.searchParams);
        }
      }
      return readonlySearchParams;
    }
    function usePathname() {
      useDynamicRouteParams?.("usePathname()");
      const pathname = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
      if (typeof window === "undefined" && process.env.__NEXT_CACHE_COMPONENTS && pathname) {
        expectCompleteParamsInClientValidation("usePathname()");
        return pathname;
      }
      if (process.env.NODE_ENV !== "production" && "use" in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
          return (0, _react.use)(navigationPromises.pathname);
        }
      }
      return pathname;
    }
    function useRouter() {
      const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
      if (router === null) {
        throw Object.defineProperty(new Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
          value: "E238",
          enumerable: false,
          configurable: true
        });
      }
      return router;
    }
    function useParams() {
      useDynamicRouteParams?.("useParams()");
      const params = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
      if (typeof window === "undefined" && process.env.__NEXT_CACHE_COMPONENTS && params) {
        return instrumentParamsForClientValidation(params);
      }
      if (process.env.NODE_ENV !== "production" && "use" in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
          return (0, _react.use)(navigationPromises.params);
        }
      }
      return params;
    }
    function useSelectedLayoutSegments(parallelRouteKey = "children") {
      useDynamicRouteParams?.("useSelectedLayoutSegments()");
      const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
      if (!context) return null;
      if (typeof window === "undefined" && process.env.__NEXT_CACHE_COMPONENTS && context) {
        expectCompleteParamsInClientValidation("useSelectedLayoutSegments()");
      }
      if (process.env.NODE_ENV !== "production" && "use" in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
          const promise = navigationPromises.selectedLayoutSegmentsPromises?.get(parallelRouteKey);
          if (promise) {
            return (0, _react.use)(promise);
          }
        }
      }
      return (0, _segment.getSelectedLayoutSegmentPath)(context.parentTree, parallelRouteKey);
    }
    function useSelectedLayoutSegment(parallelRouteKey = "children") {
      useDynamicRouteParams?.("useSelectedLayoutSegment()");
      const navigationPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
      const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
      if (typeof window === "undefined" && process.env.__NEXT_CACHE_COMPONENTS) {
        expectCompleteParamsInClientValidation("useSelectedLayoutSegment()");
      }
      if (process.env.NODE_ENV !== "production" && navigationPromises && "use" in _react.default) {
        const promise = navigationPromises.selectedLayoutSegmentPromises?.get(parallelRouteKey);
        if (promise) {
          return (0, _react.use)(promise);
        }
      }
      return (0, _segment.computeSelectedLayoutSegment)(selectedLayoutSegments, parallelRouteKey);
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/navigation.js
var require_navigation2 = __commonJS({
  "node_modules/next/navigation.js"(exports2, module2) {
    "use strict";
    module2.exports = require_navigation();
  }
});

// node_modules/react/cjs/react-jsx-runtime.production.js
var require_react_jsx_runtime_production = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.production.js"(exports2) {
    "use strict";
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      config = maybeKey.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
      };
    }
    exports2.Fragment = REACT_FRAGMENT_TYPE;
    exports2.jsx = jsxProd;
    exports2.jsxs = jsxProd;
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports2) {
    "use strict";
    "production" !== process.env.NODE_ENV && (function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k) {
            return "key" !== k;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children,
          maybeKey,
          getOwner(),
          debugStack,
          debugTask
        );
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      var React2 = require_react(), REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React2 = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React2.react_stack_bottom_frame.bind(
        React2,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports2.Fragment = REACT_FRAGMENT_TYPE;
      exports2.jsx = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports2.jsxs = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    })();
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_jsx_runtime_production();
    } else {
      module2.exports = require_react_jsx_runtime_development();
    }
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  OptiFlowGrpcSDK: () => OptiFlowGrpcSDK,
  RpcError: () => import_runtime_rpc19.RpcError,
  SeoScripts: () => SeoScripts,
  clearGlobalSeoCache: () => clearGlobalSeoCache,
  extractPublicUrl: () => extractPublicUrl,
  fetchRobotsTxt: () => fetchRobotsTxt,
  fetchSeoData: () => fetchSeoData,
  fetchSeoMetadata: () => fetchSeoMetadata,
  generateMetadata: () => generateMetadata,
  grpcSDK: () => grpcSDK,
  handleDynamicSitemap: () => handleDynamicSitemap,
  handleRobotsTxtRequest: () => handleRobotsTxtRequest,
  resolvePublicUrl: () => resolvePublicUrl
});
module.exports = __toCommonJS(index_exports);

// src/client.ts
var import_grpcweb_transport = require("@protobuf-ts/grpcweb-transport");
var import_runtime_rpc19 = require("@protobuf-ts/runtime-rpc");

// src/generated/Protos/auth.ts
var import_runtime_rpc = require("@protobuf-ts/runtime-rpc");
var import_runtime7 = require("@protobuf-ts/runtime");
var import_runtime8 = require("@protobuf-ts/runtime");
var import_runtime9 = require("@protobuf-ts/runtime");
var import_runtime10 = require("@protobuf-ts/runtime");

// src/generated/google/protobuf/timestamp.ts
var import_runtime = require("@protobuf-ts/runtime");
var import_runtime2 = require("@protobuf-ts/runtime");
var import_runtime3 = require("@protobuf-ts/runtime");
var import_runtime4 = require("@protobuf-ts/runtime");
var import_runtime5 = require("@protobuf-ts/runtime");
var import_runtime6 = require("@protobuf-ts/runtime");
var Timestamp$Type = class extends import_runtime6.MessageType {
  constructor() {
    super("google.protobuf.Timestamp", [
      {
        no: 1,
        name: "seconds",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 2,
        name: "nanos",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      }
    ]);
  }
  /**
   * Creates a new `Timestamp` for the current time.
   */
  now() {
    const msg = this.create();
    const ms = Date.now();
    msg.seconds = import_runtime5.PbLong.from(Math.floor(ms / 1e3)).toBigInt();
    msg.nanos = ms % 1e3 * 1e6;
    return msg;
  }
  /**
   * Converts a `Timestamp` to a JavaScript Date.
   */
  toDate(message) {
    return new Date(import_runtime5.PbLong.from(message.seconds).toNumber() * 1e3 + Math.ceil(message.nanos / 1e6));
  }
  /**
   * Converts a JavaScript Date to a `Timestamp`.
   */
  fromDate(date) {
    const msg = this.create();
    const ms = date.getTime();
    msg.seconds = import_runtime5.PbLong.from(Math.floor(ms / 1e3)).toBigInt();
    msg.nanos = (ms % 1e3 + (ms < 0 && ms % 1e3 !== 0 ? 1e3 : 0)) * 1e6;
    return msg;
  }
  /**
   * In JSON format, the `Timestamp` type is encoded as a string
   * in the RFC 3339 format.
   */
  internalJsonWrite(message, options) {
    let ms = import_runtime5.PbLong.from(message.seconds).toNumber() * 1e3;
    if (ms < Date.parse("0001-01-01T00:00:00Z") || ms > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
    if (message.nanos < 0)
      throw new Error("Unable to encode invalid Timestamp to JSON. Nanos must not be negative.");
    let z = "Z";
    if (message.nanos > 0) {
      let nanosStr = (message.nanos + 1e9).toString().substring(1);
      if (nanosStr.substring(3) === "000000")
        z = "." + nanosStr.substring(0, 3) + "Z";
      else if (nanosStr.substring(6) === "000")
        z = "." + nanosStr.substring(0, 6) + "Z";
      else
        z = "." + nanosStr + "Z";
    }
    return new Date(ms).toISOString().replace(".000Z", z);
  }
  /**
   * In JSON format, the `Timestamp` type is encoded as a string
   * in the RFC 3339 format.
   */
  internalJsonRead(json, options, target) {
    if (typeof json !== "string")
      throw new Error("Unable to parse Timestamp from JSON " + (0, import_runtime4.typeofJsonValue)(json) + ".");
    let matches = json.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!matches)
      throw new Error("Unable to parse Timestamp from JSON. Invalid format.");
    let ms = Date.parse(matches[1] + "-" + matches[2] + "-" + matches[3] + "T" + matches[4] + ":" + matches[5] + ":" + matches[6] + (matches[8] ? matches[8] : "Z"));
    if (Number.isNaN(ms))
      throw new Error("Unable to parse Timestamp from JSON. Invalid value.");
    if (ms < Date.parse("0001-01-01T00:00:00Z") || ms > Date.parse("9999-12-31T23:59:59Z"))
      throw new globalThis.Error("Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
    if (!target)
      target = this.create();
    target.seconds = import_runtime5.PbLong.from(ms / 1e3).toBigInt();
    target.nanos = 0;
    if (matches[7])
      target.nanos = parseInt("1" + matches[7] + "0".repeat(9 - matches[7].length)) - 1e9;
    return target;
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.seconds = 0n;
    message.nanos = 0;
    if (value !== void 0)
      (0, import_runtime3.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* int64 seconds */
        1:
          message.seconds = reader.int64().toBigInt();
          break;
        case /* int32 nanos */
        2:
          message.nanos = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.seconds !== 0n)
      writer.tag(1, import_runtime.WireType.Varint).int64(message.seconds);
    if (message.nanos !== 0)
      writer.tag(2, import_runtime.WireType.Varint).int32(message.nanos);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var Timestamp = new Timestamp$Type();

// src/generated/Protos/auth.ts
var LoginRequest$Type = class extends import_runtime10.MessageType {
  constructor() {
    super("auth.LoginRequest", [
      {
        no: 1,
        name: "email",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "password",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "is_firebase_auth",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 4,
        name: "firebase_user_json",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.email = "";
    message.password = "";
    message.isFirebaseAuth = false;
    message.firebaseUserJson = "";
    if (value !== void 0)
      (0, import_runtime9.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string email */
        1:
          message.email = reader.string();
          break;
        case /* string password */
        2:
          message.password = reader.string();
          break;
        case /* bool is_firebase_auth */
        3:
          message.isFirebaseAuth = reader.bool();
          break;
        case /* string firebase_user_json */
        4:
          message.firebaseUserJson = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime8.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.email !== "")
      writer.tag(1, import_runtime7.WireType.LengthDelimited).string(message.email);
    if (message.password !== "")
      writer.tag(2, import_runtime7.WireType.LengthDelimited).string(message.password);
    if (message.isFirebaseAuth !== false)
      writer.tag(3, import_runtime7.WireType.Varint).bool(message.isFirebaseAuth);
    if (message.firebaseUserJson !== "")
      writer.tag(4, import_runtime7.WireType.LengthDelimited).string(message.firebaseUserJson);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime8.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var LoginRequest = new LoginRequest$Type();
var LoginResponse$Type = class extends import_runtime10.MessageType {
  constructor() {
    super("auth.LoginResponse", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 3, name: "data", kind: "message", T: () => LoginData }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    if (value !== void 0)
      (0, import_runtime9.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* auth.LoginData data */
        3:
          message.data = LoginData.internalBinaryRead(reader, reader.uint32(), options, message.data);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime8.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime7.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime7.WireType.LengthDelimited).string(message.message);
    if (message.data)
      LoginData.internalBinaryWrite(message.data, writer.tag(3, import_runtime7.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime8.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var LoginResponse = new LoginResponse$Type();
var LoginData$Type = class extends import_runtime10.MessageType {
  constructor() {
    super("auth.LoginData", [
      {
        no: 1,
        name: "token",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 2, name: "user", kind: "message", T: () => UserAccount },
      {
        no: 3,
        name: "permissions",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "org_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.token = "";
    message.permissions = [];
    message.orgId = "";
    if (value !== void 0)
      (0, import_runtime9.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string token */
        1:
          message.token = reader.string();
          break;
        case /* auth.UserAccount user */
        2:
          message.user = UserAccount.internalBinaryRead(reader, reader.uint32(), options, message.user);
          break;
        case /* repeated string permissions */
        3:
          message.permissions.push(reader.string());
          break;
        case /* string org_id */
        4:
          message.orgId = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime8.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.token !== "")
      writer.tag(1, import_runtime7.WireType.LengthDelimited).string(message.token);
    if (message.user)
      UserAccount.internalBinaryWrite(message.user, writer.tag(2, import_runtime7.WireType.LengthDelimited).fork(), options).join();
    for (let i = 0; i < message.permissions.length; i++)
      writer.tag(3, import_runtime7.WireType.LengthDelimited).string(message.permissions[i]);
    if (message.orgId !== "")
      writer.tag(4, import_runtime7.WireType.LengthDelimited).string(message.orgId);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime8.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var LoginData = new LoginData$Type();
var UserAccount$Type = class extends import_runtime10.MessageType {
  constructor() {
    super("auth.UserAccount", [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "email",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "display_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "avatar_url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "phone_number",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "status",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 7, name: "created_at", kind: "message", T: () => Timestamp },
      { no: 8, name: "updated_at", kind: "message", T: () => Timestamp },
      { no: 9, name: "expired_at", kind: "message", T: () => Timestamp },
      {
        no: 10,
        name: "org_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 11,
        name: "created_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 12,
        name: "updated_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.id = "";
    message.email = "";
    message.displayName = "";
    message.avatarUrl = "";
    message.phoneNumber = "";
    message.status = "";
    message.orgId = "";
    message.createdBy = "";
    message.updatedBy = "";
    if (value !== void 0)
      (0, import_runtime9.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string id */
        1:
          message.id = reader.string();
          break;
        case /* string email */
        2:
          message.email = reader.string();
          break;
        case /* string display_name */
        3:
          message.displayName = reader.string();
          break;
        case /* string avatar_url */
        4:
          message.avatarUrl = reader.string();
          break;
        case /* string phone_number */
        5:
          message.phoneNumber = reader.string();
          break;
        case /* string status */
        6:
          message.status = reader.string();
          break;
        case /* google.protobuf.Timestamp created_at */
        7:
          message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
          break;
        case /* google.protobuf.Timestamp updated_at */
        8:
          message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
          break;
        case /* google.protobuf.Timestamp expired_at */
        9:
          message.expiredAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.expiredAt);
          break;
        case /* string org_id */
        10:
          message.orgId = reader.string();
          break;
        case /* string created_by */
        11:
          message.createdBy = reader.string();
          break;
        case /* string updated_by */
        12:
          message.updatedBy = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime8.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id !== "")
      writer.tag(1, import_runtime7.WireType.LengthDelimited).string(message.id);
    if (message.email !== "")
      writer.tag(2, import_runtime7.WireType.LengthDelimited).string(message.email);
    if (message.displayName !== "")
      writer.tag(3, import_runtime7.WireType.LengthDelimited).string(message.displayName);
    if (message.avatarUrl !== "")
      writer.tag(4, import_runtime7.WireType.LengthDelimited).string(message.avatarUrl);
    if (message.phoneNumber !== "")
      writer.tag(5, import_runtime7.WireType.LengthDelimited).string(message.phoneNumber);
    if (message.status !== "")
      writer.tag(6, import_runtime7.WireType.LengthDelimited).string(message.status);
    if (message.createdAt)
      Timestamp.internalBinaryWrite(message.createdAt, writer.tag(7, import_runtime7.WireType.LengthDelimited).fork(), options).join();
    if (message.updatedAt)
      Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(8, import_runtime7.WireType.LengthDelimited).fork(), options).join();
    if (message.expiredAt)
      Timestamp.internalBinaryWrite(message.expiredAt, writer.tag(9, import_runtime7.WireType.LengthDelimited).fork(), options).join();
    if (message.orgId !== "")
      writer.tag(10, import_runtime7.WireType.LengthDelimited).string(message.orgId);
    if (message.createdBy !== "")
      writer.tag(11, import_runtime7.WireType.LengthDelimited).string(message.createdBy);
    if (message.updatedBy !== "")
      writer.tag(12, import_runtime7.WireType.LengthDelimited).string(message.updatedBy);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime8.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var UserAccount = new UserAccount$Type();
var AuthService = new import_runtime_rpc.ServiceType("auth.AuthService", [
  { name: "Login", options: {}, I: LoginRequest, O: LoginResponse }
]);

// src/generated/Protos/auth.client.ts
var import_runtime_rpc2 = require("@protobuf-ts/runtime-rpc");
var AuthServiceClient = class {
  constructor(_transport) {
    this._transport = _transport;
  }
  _transport;
  typeName = AuthService.typeName;
  methods = AuthService.methods;
  options = AuthService.options;
  /**
   * @generated from protobuf rpc: Login
   */
  login(input, options) {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc2.stackIntercept)("unary", this._transport, method, opt, input);
  }
};

// src/generated/Protos/common.ts
var import_runtime11 = require("@protobuf-ts/runtime");
var import_runtime12 = require("@protobuf-ts/runtime");
var import_runtime13 = require("@protobuf-ts/runtime");
var import_runtime14 = require("@protobuf-ts/runtime");
var Empty$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.Empty", []);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var Empty = new Empty$Type();
var PageRequest$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.PageRequest", [
      {
        no: 1,
        name: "page",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 2,
        name: "page_size",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 3,
        name: "sort_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "descending",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.page = 0;
    message.pageSize = 0;
    message.sortBy = "";
    message.descending = false;
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* int32 page */
        1:
          message.page = reader.int32();
          break;
        case /* int32 page_size */
        2:
          message.pageSize = reader.int32();
          break;
        case /* string sort_by */
        3:
          message.sortBy = reader.string();
          break;
        case /* bool descending */
        4:
          message.descending = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.page !== 0)
      writer.tag(1, import_runtime11.WireType.Varint).int32(message.page);
    if (message.pageSize !== 0)
      writer.tag(2, import_runtime11.WireType.Varint).int32(message.pageSize);
    if (message.sortBy !== "")
      writer.tag(3, import_runtime11.WireType.LengthDelimited).string(message.sortBy);
    if (message.descending !== false)
      writer.tag(4, import_runtime11.WireType.Varint).bool(message.descending);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PageRequest = new PageRequest$Type();
var PageResponse$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.PageResponse", [
      {
        no: 1,
        name: "total_count",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 2,
        name: "page",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 3,
        name: "page_size",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 4,
        name: "total_pages",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.totalCount = 0;
    message.page = 0;
    message.pageSize = 0;
    message.totalPages = 0;
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* int32 total_count */
        1:
          message.totalCount = reader.int32();
          break;
        case /* int32 page */
        2:
          message.page = reader.int32();
          break;
        case /* int32 page_size */
        3:
          message.pageSize = reader.int32();
          break;
        case /* int32 total_pages */
        4:
          message.totalPages = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.totalCount !== 0)
      writer.tag(1, import_runtime11.WireType.Varint).int32(message.totalCount);
    if (message.page !== 0)
      writer.tag(2, import_runtime11.WireType.Varint).int32(message.page);
    if (message.pageSize !== 0)
      writer.tag(3, import_runtime11.WireType.Varint).int32(message.pageSize);
    if (message.totalPages !== 0)
      writer.tag(4, import_runtime11.WireType.Varint).int32(message.totalPages);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PageResponse = new PageResponse$Type();
var StringValue$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.StringValue", [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.value = "";
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string value */
        1:
          message.value = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.value !== "")
      writer.tag(1, import_runtime11.WireType.LengthDelimited).string(message.value);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var StringValue = new StringValue$Type();
var IdRequest$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.IdRequest", [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.id = "";
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string id */
        1:
          message.id = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id !== "")
      writer.tag(1, import_runtime11.WireType.LengthDelimited).string(message.id);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var IdRequest = new IdRequest$Type();
var OperationResult$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.OperationResult", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    message.id = "";
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* string id */
        3:
          message.id = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime11.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime11.WireType.LengthDelimited).string(message.message);
    if (message.id !== "")
      writer.tag(3, import_runtime11.WireType.LengthDelimited).string(message.id);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var OperationResult = new OperationResult$Type();
var CommonQuery$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.CommonQuery", [
      {
        no: 1,
        name: "page_number",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 2,
        name: "page_size",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      { no: 3, name: "criteria", kind: "message", repeat: 2, T: () => CommonCriteria },
      { no: 4, name: "sort", kind: "message", T: () => CommonSort },
      {
        no: 5,
        name: "operator",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.pageNumber = 0;
    message.pageSize = 0;
    message.criteria = [];
    message.operator = "";
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* int32 page_number */
        1:
          message.pageNumber = reader.int32();
          break;
        case /* int32 page_size */
        2:
          message.pageSize = reader.int32();
          break;
        case /* repeated common.CommonCriteria criteria */
        3:
          message.criteria.push(CommonCriteria.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* common.CommonSort sort */
        4:
          message.sort = CommonSort.internalBinaryRead(reader, reader.uint32(), options, message.sort);
          break;
        case /* string operator */
        5:
          message.operator = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.pageNumber !== 0)
      writer.tag(1, import_runtime11.WireType.Varint).int32(message.pageNumber);
    if (message.pageSize !== 0)
      writer.tag(2, import_runtime11.WireType.Varint).int32(message.pageSize);
    for (let i = 0; i < message.criteria.length; i++)
      CommonCriteria.internalBinaryWrite(message.criteria[i], writer.tag(3, import_runtime11.WireType.LengthDelimited).fork(), options).join();
    if (message.sort)
      CommonSort.internalBinaryWrite(message.sort, writer.tag(4, import_runtime11.WireType.LengthDelimited).fork(), options).join();
    if (message.operator !== "")
      writer.tag(5, import_runtime11.WireType.LengthDelimited).string(message.operator);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var CommonQuery = new CommonQuery$Type();
var CommonCriteria$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.CommonCriteria", [
      {
        no: 1,
        name: "field",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "value",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "type",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.field = "";
    message.value = "";
    message.type = "";
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string field */
        1:
          message.field = reader.string();
          break;
        case /* string value */
        2:
          message.value = reader.string();
          break;
        case /* string type */
        3:
          message.type = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.field !== "")
      writer.tag(1, import_runtime11.WireType.LengthDelimited).string(message.field);
    if (message.value !== "")
      writer.tag(2, import_runtime11.WireType.LengthDelimited).string(message.value);
    if (message.type !== "")
      writer.tag(3, import_runtime11.WireType.LengthDelimited).string(message.type);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var CommonCriteria = new CommonCriteria$Type();
var CommonSort$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.CommonSort", [
      {
        no: 1,
        name: "field",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "order",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.field = "";
    message.order = "";
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string field */
        1:
          message.field = reader.string();
          break;
        case /* string order */
        2:
          message.order = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.field !== "")
      writer.tag(1, import_runtime11.WireType.LengthDelimited).string(message.field);
    if (message.order !== "")
      writer.tag(2, import_runtime11.WireType.LengthDelimited).string(message.order);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var CommonSort = new CommonSort$Type();
var CommonDataSourceMeta$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.CommonDataSourceMeta", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "total",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 3,
        name: "page_number",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 4,
        name: "page_size",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 5,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.total = 0;
    message.pageNumber = 0;
    message.pageSize = 0;
    message.message = "";
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* int32 total */
        2:
          message.total = reader.int32();
          break;
        case /* int32 page_number */
        3:
          message.pageNumber = reader.int32();
          break;
        case /* int32 page_size */
        4:
          message.pageSize = reader.int32();
          break;
        case /* string message */
        5:
          message.message = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime11.WireType.Varint).bool(message.success);
    if (message.total !== 0)
      writer.tag(2, import_runtime11.WireType.Varint).int32(message.total);
    if (message.pageNumber !== 0)
      writer.tag(3, import_runtime11.WireType.Varint).int32(message.pageNumber);
    if (message.pageSize !== 0)
      writer.tag(4, import_runtime11.WireType.Varint).int32(message.pageSize);
    if (message.message !== "")
      writer.tag(5, import_runtime11.WireType.LengthDelimited).string(message.message);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var CommonDataSourceMeta = new CommonDataSourceMeta$Type();
var GetBySlugPagedRequest$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.GetBySlugPagedRequest", [
      {
        no: 1,
        name: "slug",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "page_number",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 3,
        name: "page_size",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.slug = "";
    message.pageNumber = 0;
    message.pageSize = 0;
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string slug */
        1:
          message.slug = reader.string();
          break;
        case /* int32 page_number */
        2:
          message.pageNumber = reader.int32();
          break;
        case /* int32 page_size */
        3:
          message.pageSize = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.slug !== "")
      writer.tag(1, import_runtime11.WireType.LengthDelimited).string(message.slug);
    if (message.pageNumber !== 0)
      writer.tag(2, import_runtime11.WireType.Varint).int32(message.pageNumber);
    if (message.pageSize !== 0)
      writer.tag(3, import_runtime11.WireType.Varint).int32(message.pageSize);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var GetBySlugPagedRequest = new GetBySlugPagedRequest$Type();
var GetBySlugRequest$Type = class extends import_runtime14.MessageType {
  constructor() {
    super("common.GetBySlugRequest", [
      {
        no: 1,
        name: "slug",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.slug = "";
    if (value !== void 0)
      (0, import_runtime13.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string slug */
        1:
          message.slug = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime12.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.slug !== "")
      writer.tag(1, import_runtime11.WireType.LengthDelimited).string(message.slug);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime12.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var GetBySlugRequest = new GetBySlugRequest$Type();

// src/generated/Protos/blog.ts
var import_runtime_rpc3 = require("@protobuf-ts/runtime-rpc");
var import_runtime15 = require("@protobuf-ts/runtime");
var import_runtime16 = require("@protobuf-ts/runtime");
var import_runtime17 = require("@protobuf-ts/runtime");
var import_runtime18 = require("@protobuf-ts/runtime");
var BlogResponse$Type = class extends import_runtime18.MessageType {
  constructor() {
    super("blog.BlogResponse", [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "title",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "slug",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "img_url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "short_description",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "content",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 7,
        name: "author",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 8, name: "created_at", kind: "message", T: () => Timestamp },
      { no: 9, name: "updated_at", kind: "message", T: () => Timestamp },
      {
        no: 10,
        name: "tags",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 11,
        name: "status",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 12, name: "published_at", kind: "message", T: () => Timestamp },
      {
        no: 13,
        name: "views",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 14,
        name: "image_alt",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 18,
        name: "blog_group_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 19,
        name: "type",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 20,
        name: "template",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 21,
        name: "org_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 22,
        name: "created_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 23,
        name: "updated_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 24, name: "extend_object", kind: "map", K: 9, V: {
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      } },
      {
        no: 25,
        name: "package_index",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.id = "";
    message.title = "";
    message.slug = "";
    message.imgUrl = "";
    message.shortDescription = "";
    message.content = "";
    message.author = "";
    message.tags = [];
    message.status = "";
    message.views = 0;
    message.imageAlt = "";
    message.blogGroupId = "";
    message.type = "";
    message.template = "";
    message.orgId = "";
    message.createdBy = "";
    message.updatedBy = "";
    message.extendObject = {};
    message.packageIndex = "";
    if (value !== void 0)
      (0, import_runtime17.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string id */
        1:
          message.id = reader.string();
          break;
        case /* string title */
        2:
          message.title = reader.string();
          break;
        case /* string slug */
        3:
          message.slug = reader.string();
          break;
        case /* string img_url */
        4:
          message.imgUrl = reader.string();
          break;
        case /* string short_description */
        5:
          message.shortDescription = reader.string();
          break;
        case /* string content */
        6:
          message.content = reader.string();
          break;
        case /* string author */
        7:
          message.author = reader.string();
          break;
        case /* google.protobuf.Timestamp created_at */
        8:
          message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
          break;
        case /* google.protobuf.Timestamp updated_at */
        9:
          message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
          break;
        case /* repeated string tags */
        10:
          message.tags.push(reader.string());
          break;
        case /* string status */
        11:
          message.status = reader.string();
          break;
        case /* google.protobuf.Timestamp published_at */
        12:
          message.publishedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.publishedAt);
          break;
        case /* int32 views */
        13:
          message.views = reader.int32();
          break;
        case /* string image_alt */
        14:
          message.imageAlt = reader.string();
          break;
        case /* string blog_group_id */
        18:
          message.blogGroupId = reader.string();
          break;
        case /* string type */
        19:
          message.type = reader.string();
          break;
        case /* string template */
        20:
          message.template = reader.string();
          break;
        case /* string org_id */
        21:
          message.orgId = reader.string();
          break;
        case /* string created_by */
        22:
          message.createdBy = reader.string();
          break;
        case /* string updated_by */
        23:
          message.updatedBy = reader.string();
          break;
        case /* map<string, string> extend_object */
        24:
          this.binaryReadMap24(message.extendObject, reader, options);
          break;
        case /* string package_index */
        25:
          message.packageIndex = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime16.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap24(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = reader.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for blog.BlogResponse.extend_object");
      }
    }
    map[key ?? ""] = val ?? "";
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id !== "")
      writer.tag(1, import_runtime15.WireType.LengthDelimited).string(message.id);
    if (message.title !== "")
      writer.tag(2, import_runtime15.WireType.LengthDelimited).string(message.title);
    if (message.slug !== "")
      writer.tag(3, import_runtime15.WireType.LengthDelimited).string(message.slug);
    if (message.imgUrl !== "")
      writer.tag(4, import_runtime15.WireType.LengthDelimited).string(message.imgUrl);
    if (message.shortDescription !== "")
      writer.tag(5, import_runtime15.WireType.LengthDelimited).string(message.shortDescription);
    if (message.content !== "")
      writer.tag(6, import_runtime15.WireType.LengthDelimited).string(message.content);
    if (message.author !== "")
      writer.tag(7, import_runtime15.WireType.LengthDelimited).string(message.author);
    if (message.createdAt)
      Timestamp.internalBinaryWrite(message.createdAt, writer.tag(8, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    if (message.updatedAt)
      Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(9, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    for (let i = 0; i < message.tags.length; i++)
      writer.tag(10, import_runtime15.WireType.LengthDelimited).string(message.tags[i]);
    if (message.status !== "")
      writer.tag(11, import_runtime15.WireType.LengthDelimited).string(message.status);
    if (message.publishedAt)
      Timestamp.internalBinaryWrite(message.publishedAt, writer.tag(12, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    if (message.views !== 0)
      writer.tag(13, import_runtime15.WireType.Varint).int32(message.views);
    if (message.imageAlt !== "")
      writer.tag(14, import_runtime15.WireType.LengthDelimited).string(message.imageAlt);
    if (message.blogGroupId !== "")
      writer.tag(18, import_runtime15.WireType.LengthDelimited).string(message.blogGroupId);
    if (message.type !== "")
      writer.tag(19, import_runtime15.WireType.LengthDelimited).string(message.type);
    if (message.template !== "")
      writer.tag(20, import_runtime15.WireType.LengthDelimited).string(message.template);
    if (message.orgId !== "")
      writer.tag(21, import_runtime15.WireType.LengthDelimited).string(message.orgId);
    if (message.createdBy !== "")
      writer.tag(22, import_runtime15.WireType.LengthDelimited).string(message.createdBy);
    if (message.updatedBy !== "")
      writer.tag(23, import_runtime15.WireType.LengthDelimited).string(message.updatedBy);
    for (let k of globalThis.Object.keys(message.extendObject))
      writer.tag(24, import_runtime15.WireType.LengthDelimited).fork().tag(1, import_runtime15.WireType.LengthDelimited).string(k).tag(2, import_runtime15.WireType.LengthDelimited).string(message.extendObject[k]).join();
    if (message.packageIndex !== "")
      writer.tag(25, import_runtime15.WireType.LengthDelimited).string(message.packageIndex);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime16.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var BlogResponse = new BlogResponse$Type();
var BlogGroupResponse$Type = class extends import_runtime18.MessageType {
  constructor() {
    super("blog.BlogGroupResponse", [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "description",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "content",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "status",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 7, name: "created_at", kind: "message", T: () => Timestamp },
      { no: 8, name: "updated_at", kind: "message", T: () => Timestamp },
      {
        no: 9,
        name: "org_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 10, name: "blogs", kind: "message", repeat: 2, T: () => BlogResponse },
      {
        no: 11,
        name: "created_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 12,
        name: "updated_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 13, name: "extend_object", kind: "map", K: 9, V: {
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      } },
      {
        no: 14,
        name: "blog_ids",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 15,
        name: "group_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 16,
        name: "operator",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 17, name: "criteria", kind: "message", repeat: 2, T: () => CommonCriteria },
      {
        no: 18,
        name: "package_index",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.id = "";
    message.name = "";
    message.url = "";
    message.description = "";
    message.content = "";
    message.status = "";
    message.orgId = "";
    message.blogs = [];
    message.createdBy = "";
    message.updatedBy = "";
    message.extendObject = {};
    message.blogIds = [];
    message.groupBy = "";
    message.operator = "";
    message.criteria = [];
    message.packageIndex = "";
    if (value !== void 0)
      (0, import_runtime17.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string id */
        1:
          message.id = reader.string();
          break;
        case /* string name */
        2:
          message.name = reader.string();
          break;
        case /* string url */
        3:
          message.url = reader.string();
          break;
        case /* string description */
        4:
          message.description = reader.string();
          break;
        case /* string content */
        5:
          message.content = reader.string();
          break;
        case /* string status */
        6:
          message.status = reader.string();
          break;
        case /* google.protobuf.Timestamp created_at */
        7:
          message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
          break;
        case /* google.protobuf.Timestamp updated_at */
        8:
          message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
          break;
        case /* string org_id */
        9:
          message.orgId = reader.string();
          break;
        case /* repeated blog.BlogResponse blogs */
        10:
          message.blogs.push(BlogResponse.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* string created_by */
        11:
          message.createdBy = reader.string();
          break;
        case /* string updated_by */
        12:
          message.updatedBy = reader.string();
          break;
        case /* map<string, string> extend_object */
        13:
          this.binaryReadMap13(message.extendObject, reader, options);
          break;
        case /* repeated string blog_ids */
        14:
          message.blogIds.push(reader.string());
          break;
        case /* string group_by */
        15:
          message.groupBy = reader.string();
          break;
        case /* string operator */
        16:
          message.operator = reader.string();
          break;
        case /* repeated common.CommonCriteria criteria */
        17:
          message.criteria.push(CommonCriteria.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* string package_index */
        18:
          message.packageIndex = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime16.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap13(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = reader.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for blog.BlogGroupResponse.extend_object");
      }
    }
    map[key ?? ""] = val ?? "";
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id !== "")
      writer.tag(1, import_runtime15.WireType.LengthDelimited).string(message.id);
    if (message.name !== "")
      writer.tag(2, import_runtime15.WireType.LengthDelimited).string(message.name);
    if (message.url !== "")
      writer.tag(3, import_runtime15.WireType.LengthDelimited).string(message.url);
    if (message.description !== "")
      writer.tag(4, import_runtime15.WireType.LengthDelimited).string(message.description);
    if (message.content !== "")
      writer.tag(5, import_runtime15.WireType.LengthDelimited).string(message.content);
    if (message.status !== "")
      writer.tag(6, import_runtime15.WireType.LengthDelimited).string(message.status);
    if (message.createdAt)
      Timestamp.internalBinaryWrite(message.createdAt, writer.tag(7, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    if (message.updatedAt)
      Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(8, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    if (message.orgId !== "")
      writer.tag(9, import_runtime15.WireType.LengthDelimited).string(message.orgId);
    for (let i = 0; i < message.blogs.length; i++)
      BlogResponse.internalBinaryWrite(message.blogs[i], writer.tag(10, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    if (message.createdBy !== "")
      writer.tag(11, import_runtime15.WireType.LengthDelimited).string(message.createdBy);
    if (message.updatedBy !== "")
      writer.tag(12, import_runtime15.WireType.LengthDelimited).string(message.updatedBy);
    for (let k of globalThis.Object.keys(message.extendObject))
      writer.tag(13, import_runtime15.WireType.LengthDelimited).fork().tag(1, import_runtime15.WireType.LengthDelimited).string(k).tag(2, import_runtime15.WireType.LengthDelimited).string(message.extendObject[k]).join();
    for (let i = 0; i < message.blogIds.length; i++)
      writer.tag(14, import_runtime15.WireType.LengthDelimited).string(message.blogIds[i]);
    if (message.groupBy !== "")
      writer.tag(15, import_runtime15.WireType.LengthDelimited).string(message.groupBy);
    if (message.operator !== "")
      writer.tag(16, import_runtime15.WireType.LengthDelimited).string(message.operator);
    for (let i = 0; i < message.criteria.length; i++)
      CommonCriteria.internalBinaryWrite(message.criteria[i], writer.tag(17, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    if (message.packageIndex !== "")
      writer.tag(18, import_runtime15.WireType.LengthDelimited).string(message.packageIndex);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime16.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var BlogGroupResponse = new BlogGroupResponse$Type();
var BlogDataSourceResponse$Type = class extends import_runtime18.MessageType {
  constructor() {
    super("blog.BlogDataSourceResponse", [
      { no: 1, name: "meta", kind: "message", T: () => CommonDataSourceMeta },
      { no: 2, name: "data", kind: "message", repeat: 2, T: () => BlogResponse }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.data = [];
    if (value !== void 0)
      (0, import_runtime17.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* common.CommonDataSourceMeta meta */
        1:
          message.meta = CommonDataSourceMeta.internalBinaryRead(reader, reader.uint32(), options, message.meta);
          break;
        case /* repeated blog.BlogResponse data */
        2:
          message.data.push(BlogResponse.internalBinaryRead(reader, reader.uint32(), options));
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime16.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.meta)
      CommonDataSourceMeta.internalBinaryWrite(message.meta, writer.tag(1, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    for (let i = 0; i < message.data.length; i++)
      BlogResponse.internalBinaryWrite(message.data[i], writer.tag(2, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime16.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var BlogDataSourceResponse = new BlogDataSourceResponse$Type();
var BlogGroupDataSourceResponse$Type = class extends import_runtime18.MessageType {
  constructor() {
    super("blog.BlogGroupDataSourceResponse", [
      { no: 1, name: "meta", kind: "message", T: () => CommonDataSourceMeta },
      { no: 2, name: "data", kind: "message", repeat: 2, T: () => BlogGroupResponse }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.data = [];
    if (value !== void 0)
      (0, import_runtime17.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* common.CommonDataSourceMeta meta */
        1:
          message.meta = CommonDataSourceMeta.internalBinaryRead(reader, reader.uint32(), options, message.meta);
          break;
        case /* repeated blog.BlogGroupResponse data */
        2:
          message.data.push(BlogGroupResponse.internalBinaryRead(reader, reader.uint32(), options));
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime16.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.meta)
      CommonDataSourceMeta.internalBinaryWrite(message.meta, writer.tag(1, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    for (let i = 0; i < message.data.length; i++)
      BlogGroupResponse.internalBinaryWrite(message.data[i], writer.tag(2, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime16.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var BlogGroupDataSourceResponse = new BlogGroupDataSourceResponse$Type();
var BlogResponseWrapped$Type = class extends import_runtime18.MessageType {
  constructor() {
    super("blog.BlogResponseWrapped", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 3, name: "data", kind: "message", T: () => BlogResponse }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    if (value !== void 0)
      (0, import_runtime17.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* blog.BlogResponse data */
        3:
          message.data = BlogResponse.internalBinaryRead(reader, reader.uint32(), options, message.data);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime16.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime15.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime15.WireType.LengthDelimited).string(message.message);
    if (message.data)
      BlogResponse.internalBinaryWrite(message.data, writer.tag(3, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime16.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var BlogResponseWrapped = new BlogResponseWrapped$Type();
var BlogGroupResponseWrapped$Type = class extends import_runtime18.MessageType {
  constructor() {
    super("blog.BlogGroupResponseWrapped", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 3, name: "data", kind: "message", T: () => BlogGroupResponse }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    if (value !== void 0)
      (0, import_runtime17.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* blog.BlogGroupResponse data */
        3:
          message.data = BlogGroupResponse.internalBinaryRead(reader, reader.uint32(), options, message.data);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime16.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime15.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime15.WireType.LengthDelimited).string(message.message);
    if (message.data)
      BlogGroupResponse.internalBinaryWrite(message.data, writer.tag(3, import_runtime15.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime16.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var BlogGroupResponseWrapped = new BlogGroupResponseWrapped$Type();
var BlogService = new import_runtime_rpc3.ServiceType("blog.BlogService", [
  { name: "GetBlogsByQuery", options: {}, I: CommonQuery, O: BlogDataSourceResponse },
  { name: "GetBlogDetail", options: {}, I: GetBySlugRequest, O: BlogResponseWrapped },
  { name: "GetBlogsByBlogGroupSlug", options: {}, I: GetBySlugPagedRequest, O: BlogDataSourceResponse },
  { name: "GetBlogGroupsByQuery", options: {}, I: CommonQuery, O: BlogGroupDataSourceResponse },
  { name: "GetBlogGroupsBySlug", options: {}, I: GetBySlugRequest, O: BlogGroupResponseWrapped }
]);

// src/generated/Protos/blog.client.ts
var import_runtime_rpc4 = require("@protobuf-ts/runtime-rpc");
var BlogServiceClient = class {
  constructor(_transport) {
    this._transport = _transport;
  }
  _transport;
  typeName = BlogService.typeName;
  methods = BlogService.methods;
  options = BlogService.options;
  /**
   * @generated from protobuf rpc: GetBlogsByQuery
   */
  getBlogsByQuery(input, options) {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc4.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetBlogDetail
   */
  getBlogDetail(input, options) {
    const method = this.methods[1], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc4.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetBlogsByBlogGroupSlug
   */
  getBlogsByBlogGroupSlug(input, options) {
    const method = this.methods[2], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc4.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetBlogGroupsByQuery
   */
  getBlogGroupsByQuery(input, options) {
    const method = this.methods[3], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc4.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetBlogGroupsBySlug
   */
  getBlogGroupsBySlug(input, options) {
    const method = this.methods[4], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc4.stackIntercept)("unary", this._transport, method, opt, input);
  }
};

// src/generated/Protos/comment.ts
var import_runtime_rpc5 = require("@protobuf-ts/runtime-rpc");
var import_runtime19 = require("@protobuf-ts/runtime");
var import_runtime20 = require("@protobuf-ts/runtime");
var import_runtime21 = require("@protobuf-ts/runtime");
var import_runtime22 = require("@protobuf-ts/runtime");
var CreateCommentRequest$Type = class extends import_runtime22.MessageType {
  constructor() {
    super("comment.CreateCommentRequest", [
      {
        no: 1,
        name: "ref_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "ref_type",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "content",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.refId = "";
    message.refType = "";
    message.content = "";
    if (value !== void 0)
      (0, import_runtime21.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string ref_id */
        1:
          message.refId = reader.string();
          break;
        case /* string ref_type */
        2:
          message.refType = reader.string();
          break;
        case /* string content */
        3:
          message.content = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime20.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.refId !== "")
      writer.tag(1, import_runtime19.WireType.LengthDelimited).string(message.refId);
    if (message.refType !== "")
      writer.tag(2, import_runtime19.WireType.LengthDelimited).string(message.refType);
    if (message.content !== "")
      writer.tag(3, import_runtime19.WireType.LengthDelimited).string(message.content);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime20.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var CreateCommentRequest = new CreateCommentRequest$Type();
var CreateCommentResponse$Type = class extends import_runtime22.MessageType {
  constructor() {
    super("comment.CreateCommentResponse", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 3, name: "data", kind: "message", T: () => CommentData }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    if (value !== void 0)
      (0, import_runtime21.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* comment.CommentData data */
        3:
          message.data = CommentData.internalBinaryRead(reader, reader.uint32(), options, message.data);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime20.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime19.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime19.WireType.LengthDelimited).string(message.message);
    if (message.data)
      CommentData.internalBinaryWrite(message.data, writer.tag(3, import_runtime19.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime20.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var CreateCommentResponse = new CreateCommentResponse$Type();
var GetCommentsByRefRequest$Type = class extends import_runtime22.MessageType {
  constructor() {
    super("comment.GetCommentsByRefRequest", [
      {
        no: 1,
        name: "ref_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "ref_type",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "page_number",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 4,
        name: "page_size",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.refId = "";
    message.refType = "";
    message.pageNumber = 0;
    message.pageSize = 0;
    if (value !== void 0)
      (0, import_runtime21.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string ref_id */
        1:
          message.refId = reader.string();
          break;
        case /* string ref_type */
        2:
          message.refType = reader.string();
          break;
        case /* int32 page_number */
        3:
          message.pageNumber = reader.int32();
          break;
        case /* int32 page_size */
        4:
          message.pageSize = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime20.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.refId !== "")
      writer.tag(1, import_runtime19.WireType.LengthDelimited).string(message.refId);
    if (message.refType !== "")
      writer.tag(2, import_runtime19.WireType.LengthDelimited).string(message.refType);
    if (message.pageNumber !== 0)
      writer.tag(3, import_runtime19.WireType.Varint).int32(message.pageNumber);
    if (message.pageSize !== 0)
      writer.tag(4, import_runtime19.WireType.Varint).int32(message.pageSize);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime20.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var GetCommentsByRefRequest = new GetCommentsByRefRequest$Type();
var GetCommentsByRefResponse$Type = class extends import_runtime22.MessageType {
  constructor() {
    super("comment.GetCommentsByRefResponse", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 3, name: "data", kind: "message", repeat: 2, T: () => CommentData }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    message.data = [];
    if (value !== void 0)
      (0, import_runtime21.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* repeated comment.CommentData data */
        3:
          message.data.push(CommentData.internalBinaryRead(reader, reader.uint32(), options));
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime20.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime19.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime19.WireType.LengthDelimited).string(message.message);
    for (let i = 0; i < message.data.length; i++)
      CommentData.internalBinaryWrite(message.data[i], writer.tag(3, import_runtime19.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime20.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var GetCommentsByRefResponse = new GetCommentsByRefResponse$Type();
var CommentData$Type = class extends import_runtime22.MessageType {
  constructor() {
    super("comment.CommentData", [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "ref_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "ref_type",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "user_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "user_display_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "user_avatar_url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 7,
        name: "content",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 8,
        name: "status",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 9, name: "created_at", kind: "message", T: () => Timestamp },
      {
        no: 10,
        name: "rejection_reason",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 11, name: "updated_at", kind: "message", T: () => Timestamp },
      {
        no: 12,
        name: "org_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 13,
        name: "created_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 14,
        name: "updated_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.id = "";
    message.refId = "";
    message.refType = "";
    message.userId = "";
    message.userDisplayName = "";
    message.userAvatarUrl = "";
    message.content = "";
    message.status = "";
    message.rejectionReason = "";
    message.orgId = "";
    message.createdBy = "";
    message.updatedBy = "";
    if (value !== void 0)
      (0, import_runtime21.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string id */
        1:
          message.id = reader.string();
          break;
        case /* string ref_id */
        2:
          message.refId = reader.string();
          break;
        case /* string ref_type */
        3:
          message.refType = reader.string();
          break;
        case /* string user_id */
        4:
          message.userId = reader.string();
          break;
        case /* string user_display_name */
        5:
          message.userDisplayName = reader.string();
          break;
        case /* string user_avatar_url */
        6:
          message.userAvatarUrl = reader.string();
          break;
        case /* string content */
        7:
          message.content = reader.string();
          break;
        case /* string status */
        8:
          message.status = reader.string();
          break;
        case /* google.protobuf.Timestamp created_at */
        9:
          message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
          break;
        case /* string rejection_reason */
        10:
          message.rejectionReason = reader.string();
          break;
        case /* google.protobuf.Timestamp updated_at */
        11:
          message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
          break;
        case /* string org_id */
        12:
          message.orgId = reader.string();
          break;
        case /* string created_by */
        13:
          message.createdBy = reader.string();
          break;
        case /* string updated_by */
        14:
          message.updatedBy = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime20.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id !== "")
      writer.tag(1, import_runtime19.WireType.LengthDelimited).string(message.id);
    if (message.refId !== "")
      writer.tag(2, import_runtime19.WireType.LengthDelimited).string(message.refId);
    if (message.refType !== "")
      writer.tag(3, import_runtime19.WireType.LengthDelimited).string(message.refType);
    if (message.userId !== "")
      writer.tag(4, import_runtime19.WireType.LengthDelimited).string(message.userId);
    if (message.userDisplayName !== "")
      writer.tag(5, import_runtime19.WireType.LengthDelimited).string(message.userDisplayName);
    if (message.userAvatarUrl !== "")
      writer.tag(6, import_runtime19.WireType.LengthDelimited).string(message.userAvatarUrl);
    if (message.content !== "")
      writer.tag(7, import_runtime19.WireType.LengthDelimited).string(message.content);
    if (message.status !== "")
      writer.tag(8, import_runtime19.WireType.LengthDelimited).string(message.status);
    if (message.createdAt)
      Timestamp.internalBinaryWrite(message.createdAt, writer.tag(9, import_runtime19.WireType.LengthDelimited).fork(), options).join();
    if (message.rejectionReason !== "")
      writer.tag(10, import_runtime19.WireType.LengthDelimited).string(message.rejectionReason);
    if (message.updatedAt)
      Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(11, import_runtime19.WireType.LengthDelimited).fork(), options).join();
    if (message.orgId !== "")
      writer.tag(12, import_runtime19.WireType.LengthDelimited).string(message.orgId);
    if (message.createdBy !== "")
      writer.tag(13, import_runtime19.WireType.LengthDelimited).string(message.createdBy);
    if (message.updatedBy !== "")
      writer.tag(14, import_runtime19.WireType.LengthDelimited).string(message.updatedBy);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime20.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var CommentData = new CommentData$Type();
var CommentService = new import_runtime_rpc5.ServiceType("comment.CommentService", [
  { name: "CreateComment", options: {}, I: CreateCommentRequest, O: CreateCommentResponse },
  { name: "GetCommentsByRef", options: {}, I: GetCommentsByRefRequest, O: GetCommentsByRefResponse }
]);

// src/generated/Protos/comment.client.ts
var import_runtime_rpc6 = require("@protobuf-ts/runtime-rpc");
var CommentServiceClient = class {
  constructor(_transport) {
    this._transport = _transport;
  }
  _transport;
  typeName = CommentService.typeName;
  methods = CommentService.methods;
  options = CommentService.options;
  /**
   * @generated from protobuf rpc: CreateComment
   */
  createComment(input, options) {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc6.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetCommentsByRef
   */
  getCommentsByRef(input, options) {
    const method = this.methods[1], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc6.stackIntercept)("unary", this._transport, method, opt, input);
  }
};

// src/generated/Protos/order.ts
var import_runtime_rpc7 = require("@protobuf-ts/runtime-rpc");
var import_runtime23 = require("@protobuf-ts/runtime");
var import_runtime24 = require("@protobuf-ts/runtime");
var import_runtime25 = require("@protobuf-ts/runtime");
var import_runtime26 = require("@protobuf-ts/runtime");
var PlaceOrderRequest$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.PlaceOrderRequest", [
      {
        no: 1,
        name: "customer_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "email",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "phone",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "shipping_address",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "payment_method",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "note",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 7,
        name: "session_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 10, name: "items", kind: "message", repeat: 2, T: () => OrderItemInput },
      {
        no: 11,
        name: "voucher_code",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 12,
        name: "shipping_fee",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 13,
        name: "shipping_carrier_pref",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.customerName = "";
    message.email = "";
    message.phone = "";
    message.shippingAddress = "";
    message.paymentMethod = "";
    message.note = "";
    message.sessionId = "";
    message.items = [];
    message.voucherCode = "";
    message.shippingFee = 0;
    message.shippingCarrierPref = "";
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string customer_name */
        1:
          message.customerName = reader.string();
          break;
        case /* string email */
        2:
          message.email = reader.string();
          break;
        case /* string phone */
        3:
          message.phone = reader.string();
          break;
        case /* string shipping_address */
        4:
          message.shippingAddress = reader.string();
          break;
        case /* string payment_method */
        5:
          message.paymentMethod = reader.string();
          break;
        case /* string note */
        6:
          message.note = reader.string();
          break;
        case /* string session_id */
        7:
          message.sessionId = reader.string();
          break;
        case /* repeated order.OrderItemInput items */
        10:
          message.items.push(OrderItemInput.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* string voucher_code */
        11:
          message.voucherCode = reader.string();
          break;
        case /* double shipping_fee */
        12:
          message.shippingFee = reader.double();
          break;
        case /* string shipping_carrier_pref */
        13:
          message.shippingCarrierPref = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.customerName !== "")
      writer.tag(1, import_runtime23.WireType.LengthDelimited).string(message.customerName);
    if (message.email !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.email);
    if (message.phone !== "")
      writer.tag(3, import_runtime23.WireType.LengthDelimited).string(message.phone);
    if (message.shippingAddress !== "")
      writer.tag(4, import_runtime23.WireType.LengthDelimited).string(message.shippingAddress);
    if (message.paymentMethod !== "")
      writer.tag(5, import_runtime23.WireType.LengthDelimited).string(message.paymentMethod);
    if (message.note !== "")
      writer.tag(6, import_runtime23.WireType.LengthDelimited).string(message.note);
    if (message.sessionId !== "")
      writer.tag(7, import_runtime23.WireType.LengthDelimited).string(message.sessionId);
    for (let i = 0; i < message.items.length; i++)
      OrderItemInput.internalBinaryWrite(message.items[i], writer.tag(10, import_runtime23.WireType.LengthDelimited).fork(), options).join();
    if (message.voucherCode !== "")
      writer.tag(11, import_runtime23.WireType.LengthDelimited).string(message.voucherCode);
    if (message.shippingFee !== 0)
      writer.tag(12, import_runtime23.WireType.Bit64).double(message.shippingFee);
    if (message.shippingCarrierPref !== "")
      writer.tag(13, import_runtime23.WireType.LengthDelimited).string(message.shippingCarrierPref);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PlaceOrderRequest = new PlaceOrderRequest$Type();
var OrderItemInput$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.OrderItemInput", [
      {
        no: 1,
        name: "product_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "variant_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "qty",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.productId = "";
    message.variantId = "";
    message.qty = 0;
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string product_id */
        1:
          message.productId = reader.string();
          break;
        case /* string variant_id */
        2:
          message.variantId = reader.string();
          break;
        case /* int32 qty */
        3:
          message.qty = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.productId !== "")
      writer.tag(1, import_runtime23.WireType.LengthDelimited).string(message.productId);
    if (message.variantId !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.variantId);
    if (message.qty !== 0)
      writer.tag(3, import_runtime23.WireType.Varint).int32(message.qty);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var OrderItemInput = new OrderItemInput$Type();
var GetOrdersResponse$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.GetOrdersResponse", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "total",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      { no: 4, name: "data", kind: "message", repeat: 2, T: () => OrderResponse }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    message.total = 0;
    message.data = [];
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* int32 total */
        3:
          message.total = reader.int32();
          break;
        case /* repeated order.OrderResponse data */
        4:
          message.data.push(OrderResponse.internalBinaryRead(reader, reader.uint32(), options));
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime23.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.message);
    if (message.total !== 0)
      writer.tag(3, import_runtime23.WireType.Varint).int32(message.total);
    for (let i = 0; i < message.data.length; i++)
      OrderResponse.internalBinaryWrite(message.data[i], writer.tag(4, import_runtime23.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var GetOrdersResponse = new GetOrdersResponse$Type();
var OrderResponse$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.OrderResponse", [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "order_code",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "customer_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "email",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "phone",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "status",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 7,
        name: "payment_status",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 8,
        name: "total_amount",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 9,
        name: "created_at",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 10,
        name: "shipping_address",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 11,
        name: "shipping_carrier",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 12,
        name: "tracking_code",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 13,
        name: "estimated_delivery_from",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 14,
        name: "estimated_delivery_to",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 15,
        name: "shipped_at",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 16,
        name: "delivered_at",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 17,
        name: "shop_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 18,
        name: "payment_method_label",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 19,
        name: "payment_method_logo",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 20,
        name: "shipping_fee",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 21,
        name: "discount_amount",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 22,
        name: "original_total_amount",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 23,
        name: "paid_at",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 24,
        name: "shop_logo_url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 25,
        name: "status_label",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 26,
        name: "status_emoji",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 27,
        name: "shop_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 28,
        name: "expected_delivery_date",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 29,
        name: "payment_method",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 30,
        name: "note",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 31,
        name: "voucher_code",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 32,
        name: "cancel_reason",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 33,
        name: "cancelled_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 34,
        name: "cancelled_at",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 35,
        name: "tracking_url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 36,
        name: "tax_amount",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.id = "";
    message.orderCode = "";
    message.customerName = "";
    message.email = "";
    message.phone = "";
    message.status = "";
    message.paymentStatus = "";
    message.totalAmount = 0;
    message.createdAt = 0n;
    message.shippingAddress = "";
    message.shippingCarrier = "";
    message.trackingCode = "";
    message.estimatedDeliveryFrom = 0n;
    message.estimatedDeliveryTo = 0n;
    message.shippedAt = 0n;
    message.deliveredAt = 0n;
    message.shopName = "";
    message.paymentMethodLabel = "";
    message.paymentMethodLogo = "";
    message.shippingFee = 0;
    message.discountAmount = 0;
    message.originalTotalAmount = 0;
    message.paidAt = 0n;
    message.shopLogoUrl = "";
    message.statusLabel = "";
    message.statusEmoji = "";
    message.shopId = "";
    message.expectedDeliveryDate = 0n;
    message.paymentMethod = "";
    message.note = "";
    message.voucherCode = "";
    message.cancelReason = "";
    message.cancelledBy = "";
    message.cancelledAt = 0n;
    message.trackingUrl = "";
    message.taxAmount = 0;
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string id */
        1:
          message.id = reader.string();
          break;
        case /* string order_code */
        2:
          message.orderCode = reader.string();
          break;
        case /* string customer_name */
        3:
          message.customerName = reader.string();
          break;
        case /* string email */
        4:
          message.email = reader.string();
          break;
        case /* string phone */
        5:
          message.phone = reader.string();
          break;
        case /* string status */
        6:
          message.status = reader.string();
          break;
        case /* string payment_status */
        7:
          message.paymentStatus = reader.string();
          break;
        case /* double total_amount */
        8:
          message.totalAmount = reader.double();
          break;
        case /* int64 created_at */
        9:
          message.createdAt = reader.int64().toBigInt();
          break;
        case /* string shipping_address */
        10:
          message.shippingAddress = reader.string();
          break;
        case /* string shipping_carrier */
        11:
          message.shippingCarrier = reader.string();
          break;
        case /* string tracking_code */
        12:
          message.trackingCode = reader.string();
          break;
        case /* int64 estimated_delivery_from */
        13:
          message.estimatedDeliveryFrom = reader.int64().toBigInt();
          break;
        case /* int64 estimated_delivery_to */
        14:
          message.estimatedDeliveryTo = reader.int64().toBigInt();
          break;
        case /* int64 shipped_at */
        15:
          message.shippedAt = reader.int64().toBigInt();
          break;
        case /* int64 delivered_at */
        16:
          message.deliveredAt = reader.int64().toBigInt();
          break;
        case /* string shop_name */
        17:
          message.shopName = reader.string();
          break;
        case /* string payment_method_label */
        18:
          message.paymentMethodLabel = reader.string();
          break;
        case /* string payment_method_logo */
        19:
          message.paymentMethodLogo = reader.string();
          break;
        case /* double shipping_fee */
        20:
          message.shippingFee = reader.double();
          break;
        case /* double discount_amount */
        21:
          message.discountAmount = reader.double();
          break;
        case /* double original_total_amount */
        22:
          message.originalTotalAmount = reader.double();
          break;
        case /* int64 paid_at */
        23:
          message.paidAt = reader.int64().toBigInt();
          break;
        case /* string shop_logo_url */
        24:
          message.shopLogoUrl = reader.string();
          break;
        case /* string status_label */
        25:
          message.statusLabel = reader.string();
          break;
        case /* string status_emoji */
        26:
          message.statusEmoji = reader.string();
          break;
        case /* string shop_id */
        27:
          message.shopId = reader.string();
          break;
        case /* int64 expected_delivery_date */
        28:
          message.expectedDeliveryDate = reader.int64().toBigInt();
          break;
        case /* string payment_method */
        29:
          message.paymentMethod = reader.string();
          break;
        case /* string note */
        30:
          message.note = reader.string();
          break;
        case /* string voucher_code */
        31:
          message.voucherCode = reader.string();
          break;
        case /* string cancel_reason */
        32:
          message.cancelReason = reader.string();
          break;
        case /* string cancelled_by */
        33:
          message.cancelledBy = reader.string();
          break;
        case /* int64 cancelled_at */
        34:
          message.cancelledAt = reader.int64().toBigInt();
          break;
        case /* string tracking_url */
        35:
          message.trackingUrl = reader.string();
          break;
        case /* double tax_amount */
        36:
          message.taxAmount = reader.double();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id !== "")
      writer.tag(1, import_runtime23.WireType.LengthDelimited).string(message.id);
    if (message.orderCode !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.orderCode);
    if (message.customerName !== "")
      writer.tag(3, import_runtime23.WireType.LengthDelimited).string(message.customerName);
    if (message.email !== "")
      writer.tag(4, import_runtime23.WireType.LengthDelimited).string(message.email);
    if (message.phone !== "")
      writer.tag(5, import_runtime23.WireType.LengthDelimited).string(message.phone);
    if (message.status !== "")
      writer.tag(6, import_runtime23.WireType.LengthDelimited).string(message.status);
    if (message.paymentStatus !== "")
      writer.tag(7, import_runtime23.WireType.LengthDelimited).string(message.paymentStatus);
    if (message.totalAmount !== 0)
      writer.tag(8, import_runtime23.WireType.Bit64).double(message.totalAmount);
    if (message.createdAt !== 0n)
      writer.tag(9, import_runtime23.WireType.Varint).int64(message.createdAt);
    if (message.shippingAddress !== "")
      writer.tag(10, import_runtime23.WireType.LengthDelimited).string(message.shippingAddress);
    if (message.shippingCarrier !== "")
      writer.tag(11, import_runtime23.WireType.LengthDelimited).string(message.shippingCarrier);
    if (message.trackingCode !== "")
      writer.tag(12, import_runtime23.WireType.LengthDelimited).string(message.trackingCode);
    if (message.estimatedDeliveryFrom !== 0n)
      writer.tag(13, import_runtime23.WireType.Varint).int64(message.estimatedDeliveryFrom);
    if (message.estimatedDeliveryTo !== 0n)
      writer.tag(14, import_runtime23.WireType.Varint).int64(message.estimatedDeliveryTo);
    if (message.shippedAt !== 0n)
      writer.tag(15, import_runtime23.WireType.Varint).int64(message.shippedAt);
    if (message.deliveredAt !== 0n)
      writer.tag(16, import_runtime23.WireType.Varint).int64(message.deliveredAt);
    if (message.shopName !== "")
      writer.tag(17, import_runtime23.WireType.LengthDelimited).string(message.shopName);
    if (message.paymentMethodLabel !== "")
      writer.tag(18, import_runtime23.WireType.LengthDelimited).string(message.paymentMethodLabel);
    if (message.paymentMethodLogo !== "")
      writer.tag(19, import_runtime23.WireType.LengthDelimited).string(message.paymentMethodLogo);
    if (message.shippingFee !== 0)
      writer.tag(20, import_runtime23.WireType.Bit64).double(message.shippingFee);
    if (message.discountAmount !== 0)
      writer.tag(21, import_runtime23.WireType.Bit64).double(message.discountAmount);
    if (message.originalTotalAmount !== 0)
      writer.tag(22, import_runtime23.WireType.Bit64).double(message.originalTotalAmount);
    if (message.paidAt !== 0n)
      writer.tag(23, import_runtime23.WireType.Varint).int64(message.paidAt);
    if (message.shopLogoUrl !== "")
      writer.tag(24, import_runtime23.WireType.LengthDelimited).string(message.shopLogoUrl);
    if (message.statusLabel !== "")
      writer.tag(25, import_runtime23.WireType.LengthDelimited).string(message.statusLabel);
    if (message.statusEmoji !== "")
      writer.tag(26, import_runtime23.WireType.LengthDelimited).string(message.statusEmoji);
    if (message.shopId !== "")
      writer.tag(27, import_runtime23.WireType.LengthDelimited).string(message.shopId);
    if (message.expectedDeliveryDate !== 0n)
      writer.tag(28, import_runtime23.WireType.Varint).int64(message.expectedDeliveryDate);
    if (message.paymentMethod !== "")
      writer.tag(29, import_runtime23.WireType.LengthDelimited).string(message.paymentMethod);
    if (message.note !== "")
      writer.tag(30, import_runtime23.WireType.LengthDelimited).string(message.note);
    if (message.voucherCode !== "")
      writer.tag(31, import_runtime23.WireType.LengthDelimited).string(message.voucherCode);
    if (message.cancelReason !== "")
      writer.tag(32, import_runtime23.WireType.LengthDelimited).string(message.cancelReason);
    if (message.cancelledBy !== "")
      writer.tag(33, import_runtime23.WireType.LengthDelimited).string(message.cancelledBy);
    if (message.cancelledAt !== 0n)
      writer.tag(34, import_runtime23.WireType.Varint).int64(message.cancelledAt);
    if (message.trackingUrl !== "")
      writer.tag(35, import_runtime23.WireType.LengthDelimited).string(message.trackingUrl);
    if (message.taxAmount !== 0)
      writer.tag(36, import_runtime23.WireType.Bit64).double(message.taxAmount);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var OrderResponse = new OrderResponse$Type();
var CancelOrderRequest$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.CancelOrderRequest", [
      {
        no: 1,
        name: "order_code",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "reason",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "session_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.orderCode = "";
    message.reason = "";
    message.sessionId = "";
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string order_code */
        1:
          message.orderCode = reader.string();
          break;
        case /* string reason */
        2:
          message.reason = reader.string();
          break;
        case /* string session_id */
        3:
          message.sessionId = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.orderCode !== "")
      writer.tag(1, import_runtime23.WireType.LengthDelimited).string(message.orderCode);
    if (message.reason !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.reason);
    if (message.sessionId !== "")
      writer.tag(3, import_runtime23.WireType.LengthDelimited).string(message.sessionId);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var CancelOrderRequest = new CancelOrderRequest$Type();
var GetOrderRequest$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.GetOrderRequest", [
      {
        no: 1,
        name: "slug",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "session_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.slug = "";
    message.sessionId = "";
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string slug */
        1:
          message.slug = reader.string();
          break;
        case /* string session_id */
        2:
          message.sessionId = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.slug !== "")
      writer.tag(1, import_runtime23.WireType.LengthDelimited).string(message.slug);
    if (message.sessionId !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.sessionId);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var GetOrderRequest = new GetOrderRequest$Type();
var GetOrderTrackingResponse$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.GetOrderTrackingResponse", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "tracking_code",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "carrier",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "carrier_url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "estimated_from",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 6,
        name: "estimated_to",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      { no: 7, name: "events", kind: "message", repeat: 2, T: () => TrackingEvent },
      {
        no: 8,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.trackingCode = "";
    message.carrier = "";
    message.carrierUrl = "";
    message.estimatedFrom = 0n;
    message.estimatedTo = 0n;
    message.events = [];
    message.message = "";
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string tracking_code */
        2:
          message.trackingCode = reader.string();
          break;
        case /* string carrier */
        3:
          message.carrier = reader.string();
          break;
        case /* string carrier_url */
        4:
          message.carrierUrl = reader.string();
          break;
        case /* int64 estimated_from */
        5:
          message.estimatedFrom = reader.int64().toBigInt();
          break;
        case /* int64 estimated_to */
        6:
          message.estimatedTo = reader.int64().toBigInt();
          break;
        case /* repeated order.TrackingEvent events */
        7:
          message.events.push(TrackingEvent.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* string message */
        8:
          message.message = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime23.WireType.Varint).bool(message.success);
    if (message.trackingCode !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.trackingCode);
    if (message.carrier !== "")
      writer.tag(3, import_runtime23.WireType.LengthDelimited).string(message.carrier);
    if (message.carrierUrl !== "")
      writer.tag(4, import_runtime23.WireType.LengthDelimited).string(message.carrierUrl);
    if (message.estimatedFrom !== 0n)
      writer.tag(5, import_runtime23.WireType.Varint).int64(message.estimatedFrom);
    if (message.estimatedTo !== 0n)
      writer.tag(6, import_runtime23.WireType.Varint).int64(message.estimatedTo);
    for (let i = 0; i < message.events.length; i++)
      TrackingEvent.internalBinaryWrite(message.events[i], writer.tag(7, import_runtime23.WireType.LengthDelimited).fork(), options).join();
    if (message.message !== "")
      writer.tag(8, import_runtime23.WireType.LengthDelimited).string(message.message);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var GetOrderTrackingResponse = new GetOrderTrackingResponse$Type();
var TrackingEvent$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.TrackingEvent", [
      {
        no: 1,
        name: "event_time",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 2,
        name: "location",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "description",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "status",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "is_current",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.eventTime = 0n;
    message.location = "";
    message.description = "";
    message.status = "";
    message.isCurrent = false;
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* int64 event_time */
        1:
          message.eventTime = reader.int64().toBigInt();
          break;
        case /* string location */
        2:
          message.location = reader.string();
          break;
        case /* string description */
        3:
          message.description = reader.string();
          break;
        case /* string status */
        4:
          message.status = reader.string();
          break;
        case /* bool is_current */
        5:
          message.isCurrent = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.eventTime !== 0n)
      writer.tag(1, import_runtime23.WireType.Varint).int64(message.eventTime);
    if (message.location !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.location);
    if (message.description !== "")
      writer.tag(3, import_runtime23.WireType.LengthDelimited).string(message.description);
    if (message.status !== "")
      writer.tag(4, import_runtime23.WireType.LengthDelimited).string(message.status);
    if (message.isCurrent !== false)
      writer.tag(5, import_runtime23.WireType.Varint).bool(message.isCurrent);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var TrackingEvent = new TrackingEvent$Type();
var OrderDetailResponse$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.OrderDetailResponse", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 3, name: "order", kind: "message", T: () => OrderResponse },
      { no: 4, name: "items", kind: "message", repeat: 2, T: () => OrderItemResponse }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    message.items = [];
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* order.OrderResponse order */
        3:
          message.order = OrderResponse.internalBinaryRead(reader, reader.uint32(), options, message.order);
          break;
        case /* repeated order.OrderItemResponse items */
        4:
          message.items.push(OrderItemResponse.internalBinaryRead(reader, reader.uint32(), options));
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime23.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.message);
    if (message.order)
      OrderResponse.internalBinaryWrite(message.order, writer.tag(3, import_runtime23.WireType.LengthDelimited).fork(), options).join();
    for (let i = 0; i < message.items.length; i++)
      OrderItemResponse.internalBinaryWrite(message.items[i], writer.tag(4, import_runtime23.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var OrderDetailResponse = new OrderDetailResponse$Type();
var OrderItemResponse$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.OrderItemResponse", [
      {
        no: 1,
        name: "product_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "variant_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "price",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 4,
        name: "qty",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 5,
        name: "image_url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "sub_total",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.productName = "";
    message.variantName = "";
    message.price = 0;
    message.qty = 0;
    message.imageUrl = "";
    message.subTotal = 0;
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string product_name */
        1:
          message.productName = reader.string();
          break;
        case /* string variant_name */
        2:
          message.variantName = reader.string();
          break;
        case /* double price */
        3:
          message.price = reader.double();
          break;
        case /* int32 qty */
        4:
          message.qty = reader.int32();
          break;
        case /* string image_url */
        5:
          message.imageUrl = reader.string();
          break;
        case /* double sub_total */
        6:
          message.subTotal = reader.double();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.productName !== "")
      writer.tag(1, import_runtime23.WireType.LengthDelimited).string(message.productName);
    if (message.variantName !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.variantName);
    if (message.price !== 0)
      writer.tag(3, import_runtime23.WireType.Bit64).double(message.price);
    if (message.qty !== 0)
      writer.tag(4, import_runtime23.WireType.Varint).int32(message.qty);
    if (message.imageUrl !== "")
      writer.tag(5, import_runtime23.WireType.LengthDelimited).string(message.imageUrl);
    if (message.subTotal !== 0)
      writer.tag(6, import_runtime23.WireType.Bit64).double(message.subTotal);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var OrderItemResponse = new OrderItemResponse$Type();
var RequestRefundRequest$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.RequestRefundRequest", [
      {
        no: 1,
        name: "order_code",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "reason",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "refund_type",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "amount",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 5,
        name: "evidence_urls",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "session_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.orderCode = "";
    message.reason = "";
    message.refundType = "";
    message.amount = 0;
    message.evidenceUrls = [];
    message.sessionId = "";
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string order_code */
        1:
          message.orderCode = reader.string();
          break;
        case /* string reason */
        2:
          message.reason = reader.string();
          break;
        case /* string refund_type */
        3:
          message.refundType = reader.string();
          break;
        case /* double amount */
        4:
          message.amount = reader.double();
          break;
        case /* repeated string evidence_urls */
        5:
          message.evidenceUrls.push(reader.string());
          break;
        case /* string session_id */
        6:
          message.sessionId = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.orderCode !== "")
      writer.tag(1, import_runtime23.WireType.LengthDelimited).string(message.orderCode);
    if (message.reason !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.reason);
    if (message.refundType !== "")
      writer.tag(3, import_runtime23.WireType.LengthDelimited).string(message.refundType);
    if (message.amount !== 0)
      writer.tag(4, import_runtime23.WireType.Bit64).double(message.amount);
    for (let i = 0; i < message.evidenceUrls.length; i++)
      writer.tag(5, import_runtime23.WireType.LengthDelimited).string(message.evidenceUrls[i]);
    if (message.sessionId !== "")
      writer.tag(6, import_runtime23.WireType.LengthDelimited).string(message.sessionId);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var RequestRefundRequest = new RequestRefundRequest$Type();
var SubmitReviewRequest$Type = class extends import_runtime26.MessageType {
  constructor() {
    super("order.SubmitReviewRequest", [
      {
        no: 1,
        name: "order_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "order_item_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "rating",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 4,
        name: "comment",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "media_urls",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "is_anonymous",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 7,
        name: "session_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.orderId = "";
    message.orderItemId = "";
    message.rating = 0;
    message.comment = "";
    message.mediaUrls = [];
    message.isAnonymous = false;
    message.sessionId = "";
    if (value !== void 0)
      (0, import_runtime25.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string order_id */
        1:
          message.orderId = reader.string();
          break;
        case /* string order_item_id */
        2:
          message.orderItemId = reader.string();
          break;
        case /* int32 rating */
        3:
          message.rating = reader.int32();
          break;
        case /* string comment */
        4:
          message.comment = reader.string();
          break;
        case /* repeated string media_urls */
        5:
          message.mediaUrls.push(reader.string());
          break;
        case /* bool is_anonymous */
        6:
          message.isAnonymous = reader.bool();
          break;
        case /* string session_id */
        7:
          message.sessionId = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime24.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.orderId !== "")
      writer.tag(1, import_runtime23.WireType.LengthDelimited).string(message.orderId);
    if (message.orderItemId !== "")
      writer.tag(2, import_runtime23.WireType.LengthDelimited).string(message.orderItemId);
    if (message.rating !== 0)
      writer.tag(3, import_runtime23.WireType.Varint).int32(message.rating);
    if (message.comment !== "")
      writer.tag(4, import_runtime23.WireType.LengthDelimited).string(message.comment);
    for (let i = 0; i < message.mediaUrls.length; i++)
      writer.tag(5, import_runtime23.WireType.LengthDelimited).string(message.mediaUrls[i]);
    if (message.isAnonymous !== false)
      writer.tag(6, import_runtime23.WireType.Varint).bool(message.isAnonymous);
    if (message.sessionId !== "")
      writer.tag(7, import_runtime23.WireType.LengthDelimited).string(message.sessionId);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime24.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SubmitReviewRequest = new SubmitReviewRequest$Type();
var OrderService = new import_runtime_rpc7.ServiceType("order.OrderService", [
  { name: "PlaceOrder", options: {}, I: PlaceOrderRequest, O: OperationResult },
  { name: "GetMyOrders", options: {}, I: CommonQuery, O: GetOrdersResponse },
  { name: "GetOrderDetail", options: {}, I: GetOrderRequest, O: OrderDetailResponse },
  { name: "CancelOrder", options: {}, I: CancelOrderRequest, O: OperationResult },
  { name: "GetOrderTracking", options: {}, I: GetOrderRequest, O: GetOrderTrackingResponse },
  { name: "RequestRefund", options: {}, I: RequestRefundRequest, O: OperationResult },
  { name: "SubmitReview", options: {}, I: SubmitReviewRequest, O: OperationResult }
]);

// src/generated/Protos/order.client.ts
var import_runtime_rpc8 = require("@protobuf-ts/runtime-rpc");
var OrderServiceClient = class {
  constructor(_transport) {
    this._transport = _transport;
  }
  _transport;
  typeName = OrderService.typeName;
  methods = OrderService.methods;
  options = OrderService.options;
  /**
   * @generated from protobuf rpc: PlaceOrder
   */
  placeOrder(input, options) {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc8.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetMyOrders
   */
  getMyOrders(input, options) {
    const method = this.methods[1], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc8.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetOrderDetail
   */
  getOrderDetail(input, options) {
    const method = this.methods[2], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc8.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: CancelOrder
   */
  cancelOrder(input, options) {
    const method = this.methods[3], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc8.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetOrderTracking
   */
  getOrderTracking(input, options) {
    const method = this.methods[4], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc8.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: RequestRefund
   */
  requestRefund(input, options) {
    const method = this.methods[5], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc8.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: SubmitReview
   */
  submitReview(input, options) {
    const method = this.methods[6], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc8.stackIntercept)("unary", this._transport, method, opt, input);
  }
};

// src/generated/Protos/page_view.ts
var import_runtime_rpc9 = require("@protobuf-ts/runtime-rpc");
var import_runtime27 = require("@protobuf-ts/runtime");
var import_runtime28 = require("@protobuf-ts/runtime");
var import_runtime29 = require("@protobuf-ts/runtime");
var import_runtime30 = require("@protobuf-ts/runtime");
var GetPageViewRequest$Type = class extends import_runtime30.MessageType {
  constructor() {
    super("page_view.GetPageViewRequest", [
      {
        no: 1,
        name: "ref",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.ref = "";
    if (value !== void 0)
      (0, import_runtime29.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string ref */
        1:
          message.ref = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime28.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.ref !== "")
      writer.tag(1, import_runtime27.WireType.LengthDelimited).string(message.ref);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime28.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var GetPageViewRequest = new GetPageViewRequest$Type();
var PageViewResponse$Type = class extends import_runtime30.MessageType {
  constructor() {
    super("page_view.PageViewResponse", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 3, name: "data", kind: "message", T: () => PageViewData }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    if (value !== void 0)
      (0, import_runtime29.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* page_view.PageViewData data */
        3:
          message.data = PageViewData.internalBinaryRead(reader, reader.uint32(), options, message.data);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime28.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime27.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime27.WireType.LengthDelimited).string(message.message);
    if (message.data)
      PageViewData.internalBinaryWrite(message.data, writer.tag(3, import_runtime27.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime28.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PageViewResponse = new PageViewResponse$Type();
var PageViewData$Type = class extends import_runtime30.MessageType {
  constructor() {
    super("page_view.PageViewData", [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "ref_id",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "ref_slug",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "config",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.id = "";
    message.refId = [];
    message.refSlug = [];
    message.config = "";
    if (value !== void 0)
      (0, import_runtime29.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string id */
        1:
          message.id = reader.string();
          break;
        case /* repeated string ref_id */
        2:
          message.refId.push(reader.string());
          break;
        case /* repeated string ref_slug */
        3:
          message.refSlug.push(reader.string());
          break;
        case /* string config */
        4:
          message.config = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime28.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id !== "")
      writer.tag(1, import_runtime27.WireType.LengthDelimited).string(message.id);
    for (let i = 0; i < message.refId.length; i++)
      writer.tag(2, import_runtime27.WireType.LengthDelimited).string(message.refId[i]);
    for (let i = 0; i < message.refSlug.length; i++)
      writer.tag(3, import_runtime27.WireType.LengthDelimited).string(message.refSlug[i]);
    if (message.config !== "")
      writer.tag(4, import_runtime27.WireType.LengthDelimited).string(message.config);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime28.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PageViewData = new PageViewData$Type();
var PageViewService = new import_runtime_rpc9.ServiceType("page_view.PageViewService", [
  { name: "GetPageView", options: {}, I: GetPageViewRequest, O: PageViewResponse }
]);

// src/generated/Protos/page_view.client.ts
var import_runtime_rpc10 = require("@protobuf-ts/runtime-rpc");
var PageViewServiceClient = class {
  constructor(_transport) {
    this._transport = _transport;
  }
  _transport;
  typeName = PageViewService.typeName;
  methods = PageViewService.methods;
  options = PageViewService.options;
  /**
   * @generated from protobuf rpc: GetPageView
   */
  getPageView(input, options) {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc10.stackIntercept)("unary", this._transport, method, opt, input);
  }
};

// src/generated/Protos/product.ts
var import_runtime_rpc11 = require("@protobuf-ts/runtime-rpc");
var import_runtime31 = require("@protobuf-ts/runtime");
var import_runtime32 = require("@protobuf-ts/runtime");
var import_runtime33 = require("@protobuf-ts/runtime");
var import_runtime34 = require("@protobuf-ts/runtime");
var ProductResponseWrapped$Type = class extends import_runtime34.MessageType {
  constructor() {
    super("product.ProductResponseWrapped", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 3, name: "data", kind: "message", T: () => ProductResponse }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    if (value !== void 0)
      (0, import_runtime33.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* product.ProductResponse data */
        3:
          message.data = ProductResponse.internalBinaryRead(reader, reader.uint32(), options, message.data);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime32.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime31.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime31.WireType.LengthDelimited).string(message.message);
    if (message.data)
      ProductResponse.internalBinaryWrite(message.data, writer.tag(3, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime32.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var ProductResponseWrapped = new ProductResponseWrapped$Type();
var ProductDataSourceResponse$Type = class extends import_runtime34.MessageType {
  constructor() {
    super("product.ProductDataSourceResponse", [
      { no: 1, name: "meta", kind: "message", T: () => CommonDataSourceMeta },
      { no: 2, name: "data", kind: "message", repeat: 2, T: () => ProductResponse }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.data = [];
    if (value !== void 0)
      (0, import_runtime33.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* common.CommonDataSourceMeta meta */
        1:
          message.meta = CommonDataSourceMeta.internalBinaryRead(reader, reader.uint32(), options, message.meta);
          break;
        case /* repeated product.ProductResponse data */
        2:
          message.data.push(ProductResponse.internalBinaryRead(reader, reader.uint32(), options));
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime32.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.meta)
      CommonDataSourceMeta.internalBinaryWrite(message.meta, writer.tag(1, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    for (let i = 0; i < message.data.length; i++)
      ProductResponse.internalBinaryWrite(message.data[i], writer.tag(2, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime32.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var ProductDataSourceResponse = new ProductDataSourceResponse$Type();
var ProductGroupResponseWrapped$Type = class extends import_runtime34.MessageType {
  constructor() {
    super("product.ProductGroupResponseWrapped", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 3, name: "data", kind: "message", T: () => ProductGroupResponse }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    if (value !== void 0)
      (0, import_runtime33.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* product.ProductGroupResponse data */
        3:
          message.data = ProductGroupResponse.internalBinaryRead(reader, reader.uint32(), options, message.data);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime32.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime31.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime31.WireType.LengthDelimited).string(message.message);
    if (message.data)
      ProductGroupResponse.internalBinaryWrite(message.data, writer.tag(3, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime32.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var ProductGroupResponseWrapped = new ProductGroupResponseWrapped$Type();
var ProductGroupDataSourceResponse$Type = class extends import_runtime34.MessageType {
  constructor() {
    super("product.ProductGroupDataSourceResponse", [
      { no: 1, name: "meta", kind: "message", T: () => CommonDataSourceMeta },
      { no: 2, name: "data", kind: "message", repeat: 2, T: () => ProductGroupResponse }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.data = [];
    if (value !== void 0)
      (0, import_runtime33.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* common.CommonDataSourceMeta meta */
        1:
          message.meta = CommonDataSourceMeta.internalBinaryRead(reader, reader.uint32(), options, message.meta);
          break;
        case /* repeated product.ProductGroupResponse data */
        2:
          message.data.push(ProductGroupResponse.internalBinaryRead(reader, reader.uint32(), options));
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime32.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.meta)
      CommonDataSourceMeta.internalBinaryWrite(message.meta, writer.tag(1, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    for (let i = 0; i < message.data.length; i++)
      ProductGroupResponse.internalBinaryWrite(message.data[i], writer.tag(2, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime32.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var ProductGroupDataSourceResponse = new ProductGroupDataSourceResponse$Type();
var ProductVariantResponse$Type = class extends import_runtime34.MessageType {
  constructor() {
    super("product.ProductVariantResponse", [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "sku",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "barcode",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "price",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 5,
        name: "compare_price",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 6,
        name: "stock",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 7,
        name: "attributes_name1",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 8,
        name: "attributes_value1",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 9,
        name: "attributes_name2",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 10,
        name: "attributes_value2",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 11,
        name: "attributes_name3",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 12,
        name: "attributes_value3",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 13,
        name: "image",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 14,
        name: "product_sku",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 15,
        name: "product_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 16,
        name: "variant_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.id = "";
    message.sku = "";
    message.barcode = "";
    message.price = 0;
    message.comparePrice = 0;
    message.stock = 0;
    message.attributesName1 = "";
    message.attributesValue1 = "";
    message.attributesName2 = "";
    message.attributesValue2 = "";
    message.attributesName3 = "";
    message.attributesValue3 = "";
    message.image = "";
    message.productSku = "";
    message.productId = "";
    message.variantName = "";
    if (value !== void 0)
      (0, import_runtime33.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string id */
        1:
          message.id = reader.string();
          break;
        case /* string sku */
        2:
          message.sku = reader.string();
          break;
        case /* string barcode */
        3:
          message.barcode = reader.string();
          break;
        case /* double price */
        4:
          message.price = reader.double();
          break;
        case /* double compare_price */
        5:
          message.comparePrice = reader.double();
          break;
        case /* int32 stock */
        6:
          message.stock = reader.int32();
          break;
        case /* string attributes_name1 */
        7:
          message.attributesName1 = reader.string();
          break;
        case /* string attributes_value1 */
        8:
          message.attributesValue1 = reader.string();
          break;
        case /* string attributes_name2 */
        9:
          message.attributesName2 = reader.string();
          break;
        case /* string attributes_value2 */
        10:
          message.attributesValue2 = reader.string();
          break;
        case /* string attributes_name3 */
        11:
          message.attributesName3 = reader.string();
          break;
        case /* string attributes_value3 */
        12:
          message.attributesValue3 = reader.string();
          break;
        case /* string image */
        13:
          message.image = reader.string();
          break;
        case /* string product_sku */
        14:
          message.productSku = reader.string();
          break;
        case /* string product_id */
        15:
          message.productId = reader.string();
          break;
        case /* string variant_name */
        16:
          message.variantName = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime32.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id !== "")
      writer.tag(1, import_runtime31.WireType.LengthDelimited).string(message.id);
    if (message.sku !== "")
      writer.tag(2, import_runtime31.WireType.LengthDelimited).string(message.sku);
    if (message.barcode !== "")
      writer.tag(3, import_runtime31.WireType.LengthDelimited).string(message.barcode);
    if (message.price !== 0)
      writer.tag(4, import_runtime31.WireType.Bit64).double(message.price);
    if (message.comparePrice !== 0)
      writer.tag(5, import_runtime31.WireType.Bit64).double(message.comparePrice);
    if (message.stock !== 0)
      writer.tag(6, import_runtime31.WireType.Varint).int32(message.stock);
    if (message.attributesName1 !== "")
      writer.tag(7, import_runtime31.WireType.LengthDelimited).string(message.attributesName1);
    if (message.attributesValue1 !== "")
      writer.tag(8, import_runtime31.WireType.LengthDelimited).string(message.attributesValue1);
    if (message.attributesName2 !== "")
      writer.tag(9, import_runtime31.WireType.LengthDelimited).string(message.attributesName2);
    if (message.attributesValue2 !== "")
      writer.tag(10, import_runtime31.WireType.LengthDelimited).string(message.attributesValue2);
    if (message.attributesName3 !== "")
      writer.tag(11, import_runtime31.WireType.LengthDelimited).string(message.attributesName3);
    if (message.attributesValue3 !== "")
      writer.tag(12, import_runtime31.WireType.LengthDelimited).string(message.attributesValue3);
    if (message.image !== "")
      writer.tag(13, import_runtime31.WireType.LengthDelimited).string(message.image);
    if (message.productSku !== "")
      writer.tag(14, import_runtime31.WireType.LengthDelimited).string(message.productSku);
    if (message.productId !== "")
      writer.tag(15, import_runtime31.WireType.LengthDelimited).string(message.productId);
    if (message.variantName !== "")
      writer.tag(16, import_runtime31.WireType.LengthDelimited).string(message.variantName);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime32.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var ProductVariantResponse = new ProductVariantResponse$Type();
var ProductVariantConfigResponse$Type = class extends import_runtime34.MessageType {
  constructor() {
    super("product.ProductVariantConfigResponse", [
      {
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "values",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.name = "";
    message.values = [];
    if (value !== void 0)
      (0, import_runtime33.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string name */
        1:
          message.name = reader.string();
          break;
        case /* repeated string values */
        2:
          message.values.push(reader.string());
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime32.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.name !== "")
      writer.tag(1, import_runtime31.WireType.LengthDelimited).string(message.name);
    for (let i = 0; i < message.values.length; i++)
      writer.tag(2, import_runtime31.WireType.LengthDelimited).string(message.values[i]);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime32.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var ProductVariantConfigResponse = new ProductVariantConfigResponse$Type();
var ProductResponse$Type = class extends import_runtime34.MessageType {
  constructor() {
    super("product.ProductResponse", [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "description",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "price",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 5,
        name: "stock",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 6,
        name: "category_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 7,
        name: "category_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 8,
        name: "is_active",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      { no: 9, name: "created_at", kind: "message", T: () => Timestamp },
      { no: 10, name: "updated_at", kind: "message", T: () => Timestamp },
      {
        no: 11,
        name: "img_url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 12,
        name: "slug",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 13,
        name: "image_urls",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 14,
        name: "sku",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 15,
        name: "barcode",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 16,
        name: "classify",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 17,
        name: "compare_price",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 18,
        name: "weight",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      },
      {
        no: 19,
        name: "tax_included",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 20,
        name: "track_inventory",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 21,
        name: "brand",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 22,
        name: "product_spec",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 26, name: "variants", kind: "message", repeat: 2, T: () => ProductVariantResponse },
      { no: 27, name: "variant_config", kind: "message", repeat: 2, T: () => ProductVariantConfigResponse },
      {
        no: 28,
        name: "org_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 29,
        name: "created_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 30,
        name: "updated_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 31, name: "extend_object", kind: "map", K: 9, V: {
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.id = "";
    message.name = "";
    message.description = "";
    message.price = 0;
    message.stock = 0;
    message.categoryId = "";
    message.categoryName = "";
    message.isActive = false;
    message.imgUrl = "";
    message.slug = "";
    message.imageUrls = [];
    message.sku = "";
    message.barcode = "";
    message.classify = "";
    message.comparePrice = 0;
    message.weight = 0;
    message.taxIncluded = false;
    message.trackInventory = false;
    message.brand = "";
    message.productSpec = "";
    message.variants = [];
    message.variantConfig = [];
    message.orgId = "";
    message.createdBy = "";
    message.updatedBy = "";
    message.extendObject = {};
    if (value !== void 0)
      (0, import_runtime33.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string id */
        1:
          message.id = reader.string();
          break;
        case /* string name */
        2:
          message.name = reader.string();
          break;
        case /* string description */
        3:
          message.description = reader.string();
          break;
        case /* double price */
        4:
          message.price = reader.double();
          break;
        case /* int32 stock */
        5:
          message.stock = reader.int32();
          break;
        case /* string category_id */
        6:
          message.categoryId = reader.string();
          break;
        case /* string category_name */
        7:
          message.categoryName = reader.string();
          break;
        case /* bool is_active */
        8:
          message.isActive = reader.bool();
          break;
        case /* google.protobuf.Timestamp created_at */
        9:
          message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
          break;
        case /* google.protobuf.Timestamp updated_at */
        10:
          message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
          break;
        case /* string img_url */
        11:
          message.imgUrl = reader.string();
          break;
        case /* string slug */
        12:
          message.slug = reader.string();
          break;
        case /* repeated string image_urls */
        13:
          message.imageUrls.push(reader.string());
          break;
        case /* string sku */
        14:
          message.sku = reader.string();
          break;
        case /* string barcode */
        15:
          message.barcode = reader.string();
          break;
        case /* string classify */
        16:
          message.classify = reader.string();
          break;
        case /* double compare_price */
        17:
          message.comparePrice = reader.double();
          break;
        case /* double weight */
        18:
          message.weight = reader.double();
          break;
        case /* bool tax_included */
        19:
          message.taxIncluded = reader.bool();
          break;
        case /* bool track_inventory */
        20:
          message.trackInventory = reader.bool();
          break;
        case /* string brand */
        21:
          message.brand = reader.string();
          break;
        case /* string product_spec */
        22:
          message.productSpec = reader.string();
          break;
        case /* repeated product.ProductVariantResponse variants */
        26:
          message.variants.push(ProductVariantResponse.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* repeated product.ProductVariantConfigResponse variant_config */
        27:
          message.variantConfig.push(ProductVariantConfigResponse.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* string org_id */
        28:
          message.orgId = reader.string();
          break;
        case /* string created_by */
        29:
          message.createdBy = reader.string();
          break;
        case /* string updated_by */
        30:
          message.updatedBy = reader.string();
          break;
        case /* map<string, string> extend_object */
        31:
          this.binaryReadMap31(message.extendObject, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime32.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap31(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = reader.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for product.ProductResponse.extend_object");
      }
    }
    map[key ?? ""] = val ?? "";
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id !== "")
      writer.tag(1, import_runtime31.WireType.LengthDelimited).string(message.id);
    if (message.name !== "")
      writer.tag(2, import_runtime31.WireType.LengthDelimited).string(message.name);
    if (message.description !== "")
      writer.tag(3, import_runtime31.WireType.LengthDelimited).string(message.description);
    if (message.price !== 0)
      writer.tag(4, import_runtime31.WireType.Bit64).double(message.price);
    if (message.stock !== 0)
      writer.tag(5, import_runtime31.WireType.Varint).int32(message.stock);
    if (message.categoryId !== "")
      writer.tag(6, import_runtime31.WireType.LengthDelimited).string(message.categoryId);
    if (message.categoryName !== "")
      writer.tag(7, import_runtime31.WireType.LengthDelimited).string(message.categoryName);
    if (message.isActive !== false)
      writer.tag(8, import_runtime31.WireType.Varint).bool(message.isActive);
    if (message.createdAt)
      Timestamp.internalBinaryWrite(message.createdAt, writer.tag(9, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    if (message.updatedAt)
      Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(10, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    if (message.imgUrl !== "")
      writer.tag(11, import_runtime31.WireType.LengthDelimited).string(message.imgUrl);
    if (message.slug !== "")
      writer.tag(12, import_runtime31.WireType.LengthDelimited).string(message.slug);
    for (let i = 0; i < message.imageUrls.length; i++)
      writer.tag(13, import_runtime31.WireType.LengthDelimited).string(message.imageUrls[i]);
    if (message.sku !== "")
      writer.tag(14, import_runtime31.WireType.LengthDelimited).string(message.sku);
    if (message.barcode !== "")
      writer.tag(15, import_runtime31.WireType.LengthDelimited).string(message.barcode);
    if (message.classify !== "")
      writer.tag(16, import_runtime31.WireType.LengthDelimited).string(message.classify);
    if (message.comparePrice !== 0)
      writer.tag(17, import_runtime31.WireType.Bit64).double(message.comparePrice);
    if (message.weight !== 0)
      writer.tag(18, import_runtime31.WireType.Bit64).double(message.weight);
    if (message.taxIncluded !== false)
      writer.tag(19, import_runtime31.WireType.Varint).bool(message.taxIncluded);
    if (message.trackInventory !== false)
      writer.tag(20, import_runtime31.WireType.Varint).bool(message.trackInventory);
    if (message.brand !== "")
      writer.tag(21, import_runtime31.WireType.LengthDelimited).string(message.brand);
    if (message.productSpec !== "")
      writer.tag(22, import_runtime31.WireType.LengthDelimited).string(message.productSpec);
    for (let i = 0; i < message.variants.length; i++)
      ProductVariantResponse.internalBinaryWrite(message.variants[i], writer.tag(26, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    for (let i = 0; i < message.variantConfig.length; i++)
      ProductVariantConfigResponse.internalBinaryWrite(message.variantConfig[i], writer.tag(27, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    if (message.orgId !== "")
      writer.tag(28, import_runtime31.WireType.LengthDelimited).string(message.orgId);
    if (message.createdBy !== "")
      writer.tag(29, import_runtime31.WireType.LengthDelimited).string(message.createdBy);
    if (message.updatedBy !== "")
      writer.tag(30, import_runtime31.WireType.LengthDelimited).string(message.updatedBy);
    for (let k of globalThis.Object.keys(message.extendObject))
      writer.tag(31, import_runtime31.WireType.LengthDelimited).fork().tag(1, import_runtime31.WireType.LengthDelimited).string(k).tag(2, import_runtime31.WireType.LengthDelimited).string(message.extendObject[k]).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime32.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var ProductResponse = new ProductResponse$Type();
var ProductGroupResponse$Type = class extends import_runtime34.MessageType {
  constructor() {
    super("product.ProductGroupResponse", [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "slug",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "description",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "image",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "group_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 7,
        name: "operator",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 8,
        name: "status",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 9,
        name: "product_ids",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 10, name: "products", kind: "message", repeat: 2, T: () => ProductResponse },
      { no: 11, name: "created_at", kind: "message", T: () => Timestamp },
      { no: 12, name: "updated_at", kind: "message", T: () => Timestamp },
      {
        no: 13,
        name: "org_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 14,
        name: "created_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 15,
        name: "updated_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 16, name: "extend_object", kind: "map", K: 9, V: {
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.id = "";
    message.name = "";
    message.slug = "";
    message.description = "";
    message.image = "";
    message.groupBy = "";
    message.operator = "";
    message.status = "";
    message.productIds = [];
    message.products = [];
    message.orgId = "";
    message.createdBy = "";
    message.updatedBy = "";
    message.extendObject = {};
    if (value !== void 0)
      (0, import_runtime33.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string id */
        1:
          message.id = reader.string();
          break;
        case /* string name */
        2:
          message.name = reader.string();
          break;
        case /* string slug */
        3:
          message.slug = reader.string();
          break;
        case /* string description */
        4:
          message.description = reader.string();
          break;
        case /* string image */
        5:
          message.image = reader.string();
          break;
        case /* string group_by */
        6:
          message.groupBy = reader.string();
          break;
        case /* string operator */
        7:
          message.operator = reader.string();
          break;
        case /* string status */
        8:
          message.status = reader.string();
          break;
        case /* repeated string product_ids */
        9:
          message.productIds.push(reader.string());
          break;
        case /* repeated product.ProductResponse products */
        10:
          message.products.push(ProductResponse.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* google.protobuf.Timestamp created_at */
        11:
          message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
          break;
        case /* google.protobuf.Timestamp updated_at */
        12:
          message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
          break;
        case /* string org_id */
        13:
          message.orgId = reader.string();
          break;
        case /* string created_by */
        14:
          message.createdBy = reader.string();
          break;
        case /* string updated_by */
        15:
          message.updatedBy = reader.string();
          break;
        case /* map<string, string> extend_object */
        16:
          this.binaryReadMap16(message.extendObject, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime32.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap16(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = reader.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for product.ProductGroupResponse.extend_object");
      }
    }
    map[key ?? ""] = val ?? "";
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id !== "")
      writer.tag(1, import_runtime31.WireType.LengthDelimited).string(message.id);
    if (message.name !== "")
      writer.tag(2, import_runtime31.WireType.LengthDelimited).string(message.name);
    if (message.slug !== "")
      writer.tag(3, import_runtime31.WireType.LengthDelimited).string(message.slug);
    if (message.description !== "")
      writer.tag(4, import_runtime31.WireType.LengthDelimited).string(message.description);
    if (message.image !== "")
      writer.tag(5, import_runtime31.WireType.LengthDelimited).string(message.image);
    if (message.groupBy !== "")
      writer.tag(6, import_runtime31.WireType.LengthDelimited).string(message.groupBy);
    if (message.operator !== "")
      writer.tag(7, import_runtime31.WireType.LengthDelimited).string(message.operator);
    if (message.status !== "")
      writer.tag(8, import_runtime31.WireType.LengthDelimited).string(message.status);
    for (let i = 0; i < message.productIds.length; i++)
      writer.tag(9, import_runtime31.WireType.LengthDelimited).string(message.productIds[i]);
    for (let i = 0; i < message.products.length; i++)
      ProductResponse.internalBinaryWrite(message.products[i], writer.tag(10, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    if (message.createdAt)
      Timestamp.internalBinaryWrite(message.createdAt, writer.tag(11, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    if (message.updatedAt)
      Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(12, import_runtime31.WireType.LengthDelimited).fork(), options).join();
    if (message.orgId !== "")
      writer.tag(13, import_runtime31.WireType.LengthDelimited).string(message.orgId);
    if (message.createdBy !== "")
      writer.tag(14, import_runtime31.WireType.LengthDelimited).string(message.createdBy);
    if (message.updatedBy !== "")
      writer.tag(15, import_runtime31.WireType.LengthDelimited).string(message.updatedBy);
    for (let k of globalThis.Object.keys(message.extendObject))
      writer.tag(16, import_runtime31.WireType.LengthDelimited).fork().tag(1, import_runtime31.WireType.LengthDelimited).string(k).tag(2, import_runtime31.WireType.LengthDelimited).string(message.extendObject[k]).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime32.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var ProductGroupResponse = new ProductGroupResponse$Type();
var ProductService = new import_runtime_rpc11.ServiceType("product.ProductService", [
  { name: "GetProductsByQuery", options: {}, I: CommonQuery, O: ProductDataSourceResponse },
  { name: "GetProductDetail", options: {}, I: GetBySlugRequest, O: ProductResponseWrapped },
  { name: "GetProductsByProductGroupSlug", options: {}, I: GetBySlugPagedRequest, O: ProductDataSourceResponse },
  { name: "GetProductGroupsBySlug", options: {}, I: GetBySlugRequest, O: ProductGroupResponseWrapped },
  { name: "GetProductGroupsByQuery", options: {}, I: CommonQuery, O: ProductGroupDataSourceResponse }
]);

// src/generated/Protos/product.client.ts
var import_runtime_rpc12 = require("@protobuf-ts/runtime-rpc");
var ProductServiceClient = class {
  constructor(_transport) {
    this._transport = _transport;
  }
  _transport;
  typeName = ProductService.typeName;
  methods = ProductService.methods;
  options = ProductService.options;
  /**
   * @generated from protobuf rpc: GetProductsByQuery
   */
  getProductsByQuery(input, options) {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc12.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetProductDetail
   */
  getProductDetail(input, options) {
    const method = this.methods[1], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc12.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetProductsByProductGroupSlug
   */
  getProductsByProductGroupSlug(input, options) {
    const method = this.methods[2], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc12.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetProductGroupsBySlug
   */
  getProductGroupsBySlug(input, options) {
    const method = this.methods[3], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc12.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: GetProductGroupsByQuery
   */
  getProductGroupsByQuery(input, options) {
    const method = this.methods[4], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc12.stackIntercept)("unary", this._transport, method, opt, input);
  }
};

// src/generated/Protos/seo.ts
var import_runtime_rpc13 = require("@protobuf-ts/runtime-rpc");
var import_runtime35 = require("@protobuf-ts/runtime");
var import_runtime36 = require("@protobuf-ts/runtime");
var import_runtime37 = require("@protobuf-ts/runtime");
var import_runtime38 = require("@protobuf-ts/runtime");
var GetMetaByUrlRequest$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.GetMetaByUrlRequest", [
      {
        no: 1,
        name: "url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.url = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string url */
        1:
          message.url = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.url !== "")
      writer.tag(1, import_runtime35.WireType.LengthDelimited).string(message.url);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var GetMetaByUrlRequest = new GetMetaByUrlRequest$Type();
var GetSitemapDataRequest$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.GetSitemapDataRequest", [
      {
        no: 1,
        name: "url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.url = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string url */
        1:
          message.url = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.url !== "")
      writer.tag(1, import_runtime35.WireType.LengthDelimited).string(message.url);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var GetSitemapDataRequest = new GetSitemapDataRequest$Type();
var SeoGlobalConfigResponse$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SeoGlobalConfigResponse", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 3, name: "data", kind: "message", T: () => SeoGlobalConfigData }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* seo.SeoGlobalConfigData data */
        3:
          message.data = SeoGlobalConfigData.internalBinaryRead(reader, reader.uint32(), options, message.data);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime35.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime35.WireType.LengthDelimited).string(message.message);
    if (message.data)
      SeoGlobalConfigData.internalBinaryWrite(message.data, writer.tag(3, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SeoGlobalConfigResponse = new SeoGlobalConfigResponse$Type();
var SeoPageConfigResponse$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SeoPageConfigResponse", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 3, name: "data", kind: "message", T: () => SeoPageConfigData }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* seo.SeoPageConfigData data */
        3:
          message.data = SeoPageConfigData.internalBinaryRead(reader, reader.uint32(), options, message.data);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime35.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime35.WireType.LengthDelimited).string(message.message);
    if (message.data)
      SeoPageConfigData.internalBinaryWrite(message.data, writer.tag(3, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SeoPageConfigResponse = new SeoPageConfigResponse$Type();
var SitemapDataResponse$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SitemapDataResponse", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "xml_content",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    message.xmlContent = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* string xml_content */
        3:
          message.xmlContent = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime35.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime35.WireType.LengthDelimited).string(message.message);
    if (message.xmlContent !== "")
      writer.tag(3, import_runtime35.WireType.LengthDelimited).string(message.xmlContent);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SitemapDataResponse = new SitemapDataResponse$Type();
var SeoGlobalConfigData$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SeoGlobalConfigData", [
      {
        no: 1,
        name: "default_title",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "title_template",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "default_description",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "default_image",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "robots_txt_content",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "google_site_verification_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 7, name: "social_links", kind: "map", K: 9, V: {
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      } },
      { no: 8, name: "scripts", kind: "message", T: () => SeoScriptsData },
      {
        no: 9,
        name: "schema_markup",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 10,
        name: "locale",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 11,
        name: "site_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 12,
        name: "domain",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 13,
        name: "org_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 14,
        name: "description",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 15, name: "address", kind: "message", T: () => SeoAddressData },
      {
        no: 16,
        name: "founder",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 17,
        name: "number_of_employees",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 18,
        name: "brand_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 19,
        name: "geo_latitude",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 20,
        name: "geo_longitude",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 21,
        name: "google_maps_url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 22, name: "contact_points", kind: "message", repeat: 2, T: () => SeoContactPointData },
      { no: 23, name: "logo", kind: "message", T: () => SeoLogoData },
      { no: 24, name: "open_graph", kind: "message", T: () => SeoOpenGraphData },
      { no: 25, name: "created_at", kind: "message", T: () => Timestamp },
      { no: 26, name: "updated_at", kind: "message", T: () => Timestamp },
      {
        no: 27,
        name: "created_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 28,
        name: "updated_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 29,
        name: "theme",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 30,
        name: "layout",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.defaultTitle = "";
    message.titleTemplate = "";
    message.defaultDescription = "";
    message.defaultImage = "";
    message.robotsTxtContent = "";
    message.googleSiteVerificationId = "";
    message.socialLinks = {};
    message.schemaMarkup = "";
    message.locale = "";
    message.siteName = "";
    message.domain = "";
    message.orgId = "";
    message.description = "";
    message.founder = "";
    message.numberOfEmployees = "";
    message.brandName = "";
    message.geoLatitude = "";
    message.geoLongitude = "";
    message.googleMapsUrl = "";
    message.contactPoints = [];
    message.createdBy = "";
    message.updatedBy = "";
    message.theme = "";
    message.layout = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string default_title */
        1:
          message.defaultTitle = reader.string();
          break;
        case /* string title_template */
        2:
          message.titleTemplate = reader.string();
          break;
        case /* string default_description */
        3:
          message.defaultDescription = reader.string();
          break;
        case /* string default_image */
        4:
          message.defaultImage = reader.string();
          break;
        case /* string robots_txt_content */
        5:
          message.robotsTxtContent = reader.string();
          break;
        case /* string google_site_verification_id */
        6:
          message.googleSiteVerificationId = reader.string();
          break;
        case /* map<string, string> social_links */
        7:
          this.binaryReadMap7(message.socialLinks, reader, options);
          break;
        case /* seo.SeoScriptsData scripts */
        8:
          message.scripts = SeoScriptsData.internalBinaryRead(reader, reader.uint32(), options, message.scripts);
          break;
        case /* string schema_markup */
        9:
          message.schemaMarkup = reader.string();
          break;
        case /* string locale */
        10:
          message.locale = reader.string();
          break;
        case /* string site_name */
        11:
          message.siteName = reader.string();
          break;
        case /* string domain */
        12:
          message.domain = reader.string();
          break;
        case /* string org_id */
        13:
          message.orgId = reader.string();
          break;
        case /* string description */
        14:
          message.description = reader.string();
          break;
        case /* seo.SeoAddressData address */
        15:
          message.address = SeoAddressData.internalBinaryRead(reader, reader.uint32(), options, message.address);
          break;
        case /* string founder */
        16:
          message.founder = reader.string();
          break;
        case /* string number_of_employees */
        17:
          message.numberOfEmployees = reader.string();
          break;
        case /* string brand_name */
        18:
          message.brandName = reader.string();
          break;
        case /* string geo_latitude */
        19:
          message.geoLatitude = reader.string();
          break;
        case /* string geo_longitude */
        20:
          message.geoLongitude = reader.string();
          break;
        case /* string google_maps_url */
        21:
          message.googleMapsUrl = reader.string();
          break;
        case /* repeated seo.SeoContactPointData contact_points */
        22:
          message.contactPoints.push(SeoContactPointData.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* seo.SeoLogoData logo */
        23:
          message.logo = SeoLogoData.internalBinaryRead(reader, reader.uint32(), options, message.logo);
          break;
        case /* seo.SeoOpenGraphData open_graph */
        24:
          message.openGraph = SeoOpenGraphData.internalBinaryRead(reader, reader.uint32(), options, message.openGraph);
          break;
        case /* google.protobuf.Timestamp created_at */
        25:
          message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
          break;
        case /* google.protobuf.Timestamp updated_at */
        26:
          message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
          break;
        case /* string created_by */
        27:
          message.createdBy = reader.string();
          break;
        case /* string updated_by */
        28:
          message.updatedBy = reader.string();
          break;
        case /* string theme */
        29:
          message.theme = reader.string();
          break;
        case /* string layout */
        30:
          message.layout = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap7(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = reader.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for seo.SeoGlobalConfigData.social_links");
      }
    }
    map[key ?? ""] = val ?? "";
  }
  internalBinaryWrite(message, writer, options) {
    if (message.defaultTitle !== "")
      writer.tag(1, import_runtime35.WireType.LengthDelimited).string(message.defaultTitle);
    if (message.titleTemplate !== "")
      writer.tag(2, import_runtime35.WireType.LengthDelimited).string(message.titleTemplate);
    if (message.defaultDescription !== "")
      writer.tag(3, import_runtime35.WireType.LengthDelimited).string(message.defaultDescription);
    if (message.defaultImage !== "")
      writer.tag(4, import_runtime35.WireType.LengthDelimited).string(message.defaultImage);
    if (message.robotsTxtContent !== "")
      writer.tag(5, import_runtime35.WireType.LengthDelimited).string(message.robotsTxtContent);
    if (message.googleSiteVerificationId !== "")
      writer.tag(6, import_runtime35.WireType.LengthDelimited).string(message.googleSiteVerificationId);
    for (let k of globalThis.Object.keys(message.socialLinks))
      writer.tag(7, import_runtime35.WireType.LengthDelimited).fork().tag(1, import_runtime35.WireType.LengthDelimited).string(k).tag(2, import_runtime35.WireType.LengthDelimited).string(message.socialLinks[k]).join();
    if (message.scripts)
      SeoScriptsData.internalBinaryWrite(message.scripts, writer.tag(8, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.schemaMarkup !== "")
      writer.tag(9, import_runtime35.WireType.LengthDelimited).string(message.schemaMarkup);
    if (message.locale !== "")
      writer.tag(10, import_runtime35.WireType.LengthDelimited).string(message.locale);
    if (message.siteName !== "")
      writer.tag(11, import_runtime35.WireType.LengthDelimited).string(message.siteName);
    if (message.domain !== "")
      writer.tag(12, import_runtime35.WireType.LengthDelimited).string(message.domain);
    if (message.orgId !== "")
      writer.tag(13, import_runtime35.WireType.LengthDelimited).string(message.orgId);
    if (message.description !== "")
      writer.tag(14, import_runtime35.WireType.LengthDelimited).string(message.description);
    if (message.address)
      SeoAddressData.internalBinaryWrite(message.address, writer.tag(15, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.founder !== "")
      writer.tag(16, import_runtime35.WireType.LengthDelimited).string(message.founder);
    if (message.numberOfEmployees !== "")
      writer.tag(17, import_runtime35.WireType.LengthDelimited).string(message.numberOfEmployees);
    if (message.brandName !== "")
      writer.tag(18, import_runtime35.WireType.LengthDelimited).string(message.brandName);
    if (message.geoLatitude !== "")
      writer.tag(19, import_runtime35.WireType.LengthDelimited).string(message.geoLatitude);
    if (message.geoLongitude !== "")
      writer.tag(20, import_runtime35.WireType.LengthDelimited).string(message.geoLongitude);
    if (message.googleMapsUrl !== "")
      writer.tag(21, import_runtime35.WireType.LengthDelimited).string(message.googleMapsUrl);
    for (let i = 0; i < message.contactPoints.length; i++)
      SeoContactPointData.internalBinaryWrite(message.contactPoints[i], writer.tag(22, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.logo)
      SeoLogoData.internalBinaryWrite(message.logo, writer.tag(23, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.openGraph)
      SeoOpenGraphData.internalBinaryWrite(message.openGraph, writer.tag(24, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.createdAt)
      Timestamp.internalBinaryWrite(message.createdAt, writer.tag(25, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.updatedAt)
      Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(26, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.createdBy !== "")
      writer.tag(27, import_runtime35.WireType.LengthDelimited).string(message.createdBy);
    if (message.updatedBy !== "")
      writer.tag(28, import_runtime35.WireType.LengthDelimited).string(message.updatedBy);
    if (message.theme !== "")
      writer.tag(29, import_runtime35.WireType.LengthDelimited).string(message.theme);
    if (message.layout !== "")
      writer.tag(30, import_runtime35.WireType.LengthDelimited).string(message.layout);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SeoGlobalConfigData = new SeoGlobalConfigData$Type();
var SeoScriptsData$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SeoScriptsData", [
      {
        no: 1,
        name: "header",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "body_start",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "body_end",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.header = "";
    message.bodyStart = "";
    message.bodyEnd = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string header */
        1:
          message.header = reader.string();
          break;
        case /* string body_start */
        2:
          message.bodyStart = reader.string();
          break;
        case /* string body_end */
        3:
          message.bodyEnd = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.header !== "")
      writer.tag(1, import_runtime35.WireType.LengthDelimited).string(message.header);
    if (message.bodyStart !== "")
      writer.tag(2, import_runtime35.WireType.LengthDelimited).string(message.bodyStart);
    if (message.bodyEnd !== "")
      writer.tag(3, import_runtime35.WireType.LengthDelimited).string(message.bodyEnd);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SeoScriptsData = new SeoScriptsData$Type();
var SeoPageConfigData$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SeoPageConfigData", [
      {
        no: 1,
        name: "route",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "title",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "description",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "canonical_url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "schema_markup",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "is_amp_enabled",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      { no: 7, name: "robots", kind: "message", T: () => SeoRobotsMetaData },
      { no: 8, name: "open_graph", kind: "message", T: () => SeoOpenGraphData },
      { no: 9, name: "sitemap", kind: "message", T: () => SeoSitemapConfigData },
      {
        no: 10,
        name: "entity_type",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 11,
        name: "entity_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 12,
        name: "org_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 13, name: "created_at", kind: "message", T: () => Timestamp },
      { no: 14, name: "updated_at", kind: "message", T: () => Timestamp },
      {
        no: 15,
        name: "created_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 16,
        name: "updated_by",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 17,
        name: "keyword_list",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.route = "";
    message.title = "";
    message.description = "";
    message.canonicalUrl = "";
    message.schemaMarkup = "";
    message.isAmpEnabled = false;
    message.entityType = "";
    message.entityId = "";
    message.orgId = "";
    message.createdBy = "";
    message.updatedBy = "";
    message.keywordList = [];
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string route */
        1:
          message.route = reader.string();
          break;
        case /* string title */
        2:
          message.title = reader.string();
          break;
        case /* string description */
        3:
          message.description = reader.string();
          break;
        case /* string canonical_url */
        4:
          message.canonicalUrl = reader.string();
          break;
        case /* string schema_markup */
        5:
          message.schemaMarkup = reader.string();
          break;
        case /* bool is_amp_enabled */
        6:
          message.isAmpEnabled = reader.bool();
          break;
        case /* seo.SeoRobotsMetaData robots */
        7:
          message.robots = SeoRobotsMetaData.internalBinaryRead(reader, reader.uint32(), options, message.robots);
          break;
        case /* seo.SeoOpenGraphData open_graph */
        8:
          message.openGraph = SeoOpenGraphData.internalBinaryRead(reader, reader.uint32(), options, message.openGraph);
          break;
        case /* seo.SeoSitemapConfigData sitemap */
        9:
          message.sitemap = SeoSitemapConfigData.internalBinaryRead(reader, reader.uint32(), options, message.sitemap);
          break;
        case /* string entity_type */
        10:
          message.entityType = reader.string();
          break;
        case /* string entity_id */
        11:
          message.entityId = reader.string();
          break;
        case /* string org_id */
        12:
          message.orgId = reader.string();
          break;
        case /* google.protobuf.Timestamp created_at */
        13:
          message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
          break;
        case /* google.protobuf.Timestamp updated_at */
        14:
          message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
          break;
        case /* string created_by */
        15:
          message.createdBy = reader.string();
          break;
        case /* string updated_by */
        16:
          message.updatedBy = reader.string();
          break;
        case /* repeated string keyword_list */
        17:
          message.keywordList.push(reader.string());
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.route !== "")
      writer.tag(1, import_runtime35.WireType.LengthDelimited).string(message.route);
    if (message.title !== "")
      writer.tag(2, import_runtime35.WireType.LengthDelimited).string(message.title);
    if (message.description !== "")
      writer.tag(3, import_runtime35.WireType.LengthDelimited).string(message.description);
    if (message.canonicalUrl !== "")
      writer.tag(4, import_runtime35.WireType.LengthDelimited).string(message.canonicalUrl);
    if (message.schemaMarkup !== "")
      writer.tag(5, import_runtime35.WireType.LengthDelimited).string(message.schemaMarkup);
    if (message.isAmpEnabled !== false)
      writer.tag(6, import_runtime35.WireType.Varint).bool(message.isAmpEnabled);
    if (message.robots)
      SeoRobotsMetaData.internalBinaryWrite(message.robots, writer.tag(7, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.openGraph)
      SeoOpenGraphData.internalBinaryWrite(message.openGraph, writer.tag(8, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.sitemap)
      SeoSitemapConfigData.internalBinaryWrite(message.sitemap, writer.tag(9, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.entityType !== "")
      writer.tag(10, import_runtime35.WireType.LengthDelimited).string(message.entityType);
    if (message.entityId !== "")
      writer.tag(11, import_runtime35.WireType.LengthDelimited).string(message.entityId);
    if (message.orgId !== "")
      writer.tag(12, import_runtime35.WireType.LengthDelimited).string(message.orgId);
    if (message.createdAt)
      Timestamp.internalBinaryWrite(message.createdAt, writer.tag(13, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.updatedAt)
      Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(14, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    if (message.createdBy !== "")
      writer.tag(15, import_runtime35.WireType.LengthDelimited).string(message.createdBy);
    if (message.updatedBy !== "")
      writer.tag(16, import_runtime35.WireType.LengthDelimited).string(message.updatedBy);
    for (let i = 0; i < message.keywordList.length; i++)
      writer.tag(17, import_runtime35.WireType.LengthDelimited).string(message.keywordList[i]);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SeoPageConfigData = new SeoPageConfigData$Type();
var SeoRobotsMetaData$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SeoRobotsMetaData", [
      {
        no: 1,
        name: "index",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "follow",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 3,
        name: "max_snippet",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 4,
        name: "max_image_preview",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "max_video_preview",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.index = false;
    message.follow = false;
    message.maxSnippet = 0;
    message.maxImagePreview = "";
    message.maxVideoPreview = 0;
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool index */
        1:
          message.index = reader.bool();
          break;
        case /* bool follow */
        2:
          message.follow = reader.bool();
          break;
        case /* int32 max_snippet */
        3:
          message.maxSnippet = reader.int32();
          break;
        case /* string max_image_preview */
        4:
          message.maxImagePreview = reader.string();
          break;
        case /* int32 max_video_preview */
        5:
          message.maxVideoPreview = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.index !== false)
      writer.tag(1, import_runtime35.WireType.Varint).bool(message.index);
    if (message.follow !== false)
      writer.tag(2, import_runtime35.WireType.Varint).bool(message.follow);
    if (message.maxSnippet !== 0)
      writer.tag(3, import_runtime35.WireType.Varint).int32(message.maxSnippet);
    if (message.maxImagePreview !== "")
      writer.tag(4, import_runtime35.WireType.LengthDelimited).string(message.maxImagePreview);
    if (message.maxVideoPreview !== 0)
      writer.tag(5, import_runtime35.WireType.Varint).int32(message.maxVideoPreview);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SeoRobotsMetaData = new SeoRobotsMetaData$Type();
var SeoOpenGraphData$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SeoOpenGraphData", [
      {
        no: 1,
        name: "title",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "description",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "image",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "type",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "locale",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "site_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 7,
        name: "url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 8, name: "updated_time", kind: "message", T: () => Timestamp }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.title = "";
    message.description = "";
    message.image = "";
    message.type = "";
    message.locale = "";
    message.siteName = "";
    message.url = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string title */
        1:
          message.title = reader.string();
          break;
        case /* string description */
        2:
          message.description = reader.string();
          break;
        case /* string image */
        3:
          message.image = reader.string();
          break;
        case /* string type */
        4:
          message.type = reader.string();
          break;
        case /* string locale */
        5:
          message.locale = reader.string();
          break;
        case /* string site_name */
        6:
          message.siteName = reader.string();
          break;
        case /* string url */
        7:
          message.url = reader.string();
          break;
        case /* google.protobuf.Timestamp updated_time */
        8:
          message.updatedTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedTime);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.title !== "")
      writer.tag(1, import_runtime35.WireType.LengthDelimited).string(message.title);
    if (message.description !== "")
      writer.tag(2, import_runtime35.WireType.LengthDelimited).string(message.description);
    if (message.image !== "")
      writer.tag(3, import_runtime35.WireType.LengthDelimited).string(message.image);
    if (message.type !== "")
      writer.tag(4, import_runtime35.WireType.LengthDelimited).string(message.type);
    if (message.locale !== "")
      writer.tag(5, import_runtime35.WireType.LengthDelimited).string(message.locale);
    if (message.siteName !== "")
      writer.tag(6, import_runtime35.WireType.LengthDelimited).string(message.siteName);
    if (message.url !== "")
      writer.tag(7, import_runtime35.WireType.LengthDelimited).string(message.url);
    if (message.updatedTime)
      Timestamp.internalBinaryWrite(message.updatedTime, writer.tag(8, import_runtime35.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SeoOpenGraphData = new SeoOpenGraphData$Type();
var SeoSitemapConfigData$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SeoSitemapConfigData", [
      {
        no: 1,
        name: "include",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 3,
        name: "change_freq",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.include = false;
    message.changeFreq = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool include */
        1:
          message.include = reader.bool();
          break;
        case /* string change_freq */
        3:
          message.changeFreq = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.include !== false)
      writer.tag(1, import_runtime35.WireType.Varint).bool(message.include);
    if (message.changeFreq !== "")
      writer.tag(3, import_runtime35.WireType.LengthDelimited).string(message.changeFreq);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SeoSitemapConfigData = new SeoSitemapConfigData$Type();
var SeoAddressData$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SeoAddressData", [
      {
        no: 1,
        name: "street_address",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "address_region",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "postal_code",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "address_country",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.streetAddress = "";
    message.addressRegion = "";
    message.postalCode = "";
    message.addressCountry = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string street_address */
        1:
          message.streetAddress = reader.string();
          break;
        case /* string address_region */
        2:
          message.addressRegion = reader.string();
          break;
        case /* string postal_code */
        3:
          message.postalCode = reader.string();
          break;
        case /* string address_country */
        4:
          message.addressCountry = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.streetAddress !== "")
      writer.tag(1, import_runtime35.WireType.LengthDelimited).string(message.streetAddress);
    if (message.addressRegion !== "")
      writer.tag(2, import_runtime35.WireType.LengthDelimited).string(message.addressRegion);
    if (message.postalCode !== "")
      writer.tag(3, import_runtime35.WireType.LengthDelimited).string(message.postalCode);
    if (message.addressCountry !== "")
      writer.tag(4, import_runtime35.WireType.LengthDelimited).string(message.addressCountry);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SeoAddressData = new SeoAddressData$Type();
var SeoContactPointData$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SeoContactPointData", [
      {
        no: 1,
        name: "telephone",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "contact_type",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "email",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "area_served",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.telephone = "";
    message.contactType = "";
    message.email = "";
    message.areaServed = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string telephone */
        1:
          message.telephone = reader.string();
          break;
        case /* string contact_type */
        2:
          message.contactType = reader.string();
          break;
        case /* string email */
        3:
          message.email = reader.string();
          break;
        case /* string area_served */
        4:
          message.areaServed = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.telephone !== "")
      writer.tag(1, import_runtime35.WireType.LengthDelimited).string(message.telephone);
    if (message.contactType !== "")
      writer.tag(2, import_runtime35.WireType.LengthDelimited).string(message.contactType);
    if (message.email !== "")
      writer.tag(3, import_runtime35.WireType.LengthDelimited).string(message.email);
    if (message.areaServed !== "")
      writer.tag(4, import_runtime35.WireType.LengthDelimited).string(message.areaServed);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SeoContactPointData = new SeoContactPointData$Type();
var SeoLogoData$Type = class extends import_runtime38.MessageType {
  constructor() {
    super("seo.SeoLogoData", [
      {
        no: 1,
        name: "url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "caption",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "width",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "height",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.url = "";
    message.caption = "";
    message.width = "";
    message.height = "";
    if (value !== void 0)
      (0, import_runtime37.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string url */
        1:
          message.url = reader.string();
          break;
        case /* string caption */
        2:
          message.caption = reader.string();
          break;
        case /* string width */
        3:
          message.width = reader.string();
          break;
        case /* string height */
        4:
          message.height = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime36.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.url !== "")
      writer.tag(1, import_runtime35.WireType.LengthDelimited).string(message.url);
    if (message.caption !== "")
      writer.tag(2, import_runtime35.WireType.LengthDelimited).string(message.caption);
    if (message.width !== "")
      writer.tag(3, import_runtime35.WireType.LengthDelimited).string(message.width);
    if (message.height !== "")
      writer.tag(4, import_runtime35.WireType.LengthDelimited).string(message.height);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime36.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SeoLogoData = new SeoLogoData$Type();
var SeoService = new import_runtime_rpc13.ServiceType("seo.SeoService", [
  { name: "GetGlobalConfig", options: {}, I: Empty, O: SeoGlobalConfigResponse },
  { name: "GetMetaByUrl", options: {}, I: GetMetaByUrlRequest, O: SeoPageConfigResponse },
  { name: "GetSitemapData", options: {}, I: GetSitemapDataRequest, O: SitemapDataResponse }
]);

// src/generated/Protos/seo.client.ts
var import_runtime_rpc14 = require("@protobuf-ts/runtime-rpc");
var SeoServiceClient = class {
  constructor(_transport) {
    this._transport = _transport;
  }
  _transport;
  typeName = SeoService.typeName;
  methods = SeoService.methods;
  options = SeoService.options;
  /**
   * Global Config
   *
   * @generated from protobuf rpc: GetGlobalConfig
   */
  getGlobalConfig(input, options) {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc14.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * Page Config (merged)
   *
   * @generated from protobuf rpc: GetMetaByUrl
   */
  getMetaByUrl(input, options) {
    const method = this.methods[1], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc14.stackIntercept)("unary", this._transport, method, opt, input);
  }
  /**
   * Sitemap Data
   *
   * @generated from protobuf rpc: GetSitemapData
   */
  getSitemapData(input, options) {
    const method = this.methods[2], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc14.stackIntercept)("unary", this._transport, method, opt, input);
  }
};

// src/generated/Protos/tracking.ts
var import_runtime_rpc15 = require("@protobuf-ts/runtime-rpc");
var import_runtime39 = require("@protobuf-ts/runtime");
var import_runtime40 = require("@protobuf-ts/runtime");
var import_runtime41 = require("@protobuf-ts/runtime");
var import_runtime42 = require("@protobuf-ts/runtime");
var UserEventRequest$Type = class extends import_runtime42.MessageType {
  constructor() {
    super("tracking.UserEventRequest", [
      {
        no: 1,
        name: "url",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "action",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "element_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "session_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "user_agent",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "ip_address",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 7,
        name: "referrer",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 8,
        name: "metadata_json",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.url = "";
    message.action = "";
    message.elementId = "";
    message.sessionId = "";
    message.userAgent = "";
    message.ipAddress = "";
    message.referrer = "";
    message.metadataJson = "";
    if (value !== void 0)
      (0, import_runtime41.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string url */
        1:
          message.url = reader.string();
          break;
        case /* string action */
        2:
          message.action = reader.string();
          break;
        case /* string element_id */
        3:
          message.elementId = reader.string();
          break;
        case /* string session_id */
        4:
          message.sessionId = reader.string();
          break;
        case /* string user_agent */
        5:
          message.userAgent = reader.string();
          break;
        case /* string ip_address */
        6:
          message.ipAddress = reader.string();
          break;
        case /* string referrer */
        7:
          message.referrer = reader.string();
          break;
        case /* string metadata_json */
        8:
          message.metadataJson = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime40.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.url !== "")
      writer.tag(1, import_runtime39.WireType.LengthDelimited).string(message.url);
    if (message.action !== "")
      writer.tag(2, import_runtime39.WireType.LengthDelimited).string(message.action);
    if (message.elementId !== "")
      writer.tag(3, import_runtime39.WireType.LengthDelimited).string(message.elementId);
    if (message.sessionId !== "")
      writer.tag(4, import_runtime39.WireType.LengthDelimited).string(message.sessionId);
    if (message.userAgent !== "")
      writer.tag(5, import_runtime39.WireType.LengthDelimited).string(message.userAgent);
    if (message.ipAddress !== "")
      writer.tag(6, import_runtime39.WireType.LengthDelimited).string(message.ipAddress);
    if (message.referrer !== "")
      writer.tag(7, import_runtime39.WireType.LengthDelimited).string(message.referrer);
    if (message.metadataJson !== "")
      writer.tag(8, import_runtime39.WireType.LengthDelimited).string(message.metadataJson);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime40.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var UserEventRequest = new UserEventRequest$Type();
var TrackingService = new import_runtime_rpc15.ServiceType("tracking.TrackingService", [
  { name: "IngestEvent", options: {}, I: UserEventRequest, O: OperationResult }
]);

// src/generated/Protos/tracking.client.ts
var import_runtime_rpc16 = require("@protobuf-ts/runtime-rpc");
var TrackingServiceClient = class {
  constructor(_transport) {
    this._transport = _transport;
  }
  _transport;
  typeName = TrackingService.typeName;
  methods = TrackingService.methods;
  options = TrackingService.options;
  /**
   * @generated from protobuf rpc: IngestEvent
   */
  ingestEvent(input, options) {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc16.stackIntercept)("unary", this._transport, method, opt, input);
  }
};

// src/generated/Protos/user_submit.ts
var import_runtime_rpc17 = require("@protobuf-ts/runtime-rpc");
var import_runtime43 = require("@protobuf-ts/runtime");
var import_runtime44 = require("@protobuf-ts/runtime");
var import_runtime45 = require("@protobuf-ts/runtime");
var import_runtime46 = require("@protobuf-ts/runtime");
var SubmitRequest$Type = class extends import_runtime46.MessageType {
  constructor() {
    super("user_submit.SubmitRequest", [
      {
        no: 1,
        name: "full_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "phone_number",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "email",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "topic",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "content",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.fullName = "";
    message.phoneNumber = "";
    message.email = "";
    message.topic = "";
    message.content = "";
    if (value !== void 0)
      (0, import_runtime45.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string full_name */
        1:
          message.fullName = reader.string();
          break;
        case /* string phone_number */
        2:
          message.phoneNumber = reader.string();
          break;
        case /* string email */
        3:
          message.email = reader.string();
          break;
        case /* string topic */
        4:
          message.topic = reader.string();
          break;
        case /* string content */
        5:
          message.content = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime44.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.fullName !== "")
      writer.tag(1, import_runtime43.WireType.LengthDelimited).string(message.fullName);
    if (message.phoneNumber !== "")
      writer.tag(2, import_runtime43.WireType.LengthDelimited).string(message.phoneNumber);
    if (message.email !== "")
      writer.tag(3, import_runtime43.WireType.LengthDelimited).string(message.email);
    if (message.topic !== "")
      writer.tag(4, import_runtime43.WireType.LengthDelimited).string(message.topic);
    if (message.content !== "")
      writer.tag(5, import_runtime43.WireType.LengthDelimited).string(message.content);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime44.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SubmitRequest = new SubmitRequest$Type();
var SubmitResponse$Type = class extends import_runtime46.MessageType {
  constructor() {
    super("user_submit.SubmitResponse", [
      {
        no: 1,
        name: "success",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "message",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.success = false;
    message.message = "";
    message.id = "";
    if (value !== void 0)
      (0, import_runtime45.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */
        1:
          message.success = reader.bool();
          break;
        case /* string message */
        2:
          message.message = reader.string();
          break;
        case /* string id */
        3:
          message.id = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime44.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.success !== false)
      writer.tag(1, import_runtime43.WireType.Varint).bool(message.success);
    if (message.message !== "")
      writer.tag(2, import_runtime43.WireType.LengthDelimited).string(message.message);
    if (message.id !== "")
      writer.tag(3, import_runtime43.WireType.LengthDelimited).string(message.id);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime44.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var SubmitResponse = new SubmitResponse$Type();
var UserSubmitService = new import_runtime_rpc17.ServiceType("user_submit.UserSubmitService", [
  { name: "Submit", options: {}, I: SubmitRequest, O: SubmitResponse }
]);

// src/generated/Protos/user_submit.client.ts
var import_runtime_rpc18 = require("@protobuf-ts/runtime-rpc");
var UserSubmitServiceClient = class {
  constructor(_transport) {
    this._transport = _transport;
  }
  _transport;
  typeName = UserSubmitService.typeName;
  methods = UserSubmitService.methods;
  options = UserSubmitService.options;
  /**
   * @generated from protobuf rpc: Submit
   */
  submit(input, options) {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return (0, import_runtime_rpc18.stackIntercept)("unary", this._transport, method, opt, input);
  }
};

// src/generated/wrapped-clients.ts
var WrappedAuthServiceClient = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async login(input, options) {
    return this.client.login(input, options).response;
  }
};
var WrappedBlogServiceClient = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async getBlogsByQuery(input, options) {
    return this.client.getBlogsByQuery(input, options).response;
  }
  async getBlogDetail(input, options) {
    return this.client.getBlogDetail(input, options).response;
  }
  async getBlogsByBlogGroupSlug(input, options) {
    return this.client.getBlogsByBlogGroupSlug(input, options).response;
  }
  async getBlogGroupsByQuery(input, options) {
    return this.client.getBlogGroupsByQuery(input, options).response;
  }
  async getBlogGroupsBySlug(input, options) {
    return this.client.getBlogGroupsBySlug(input, options).response;
  }
  async getByQuery(input, options) {
    return this.getBlogsByQuery(input, options);
  }
  async getBySlug(input, options) {
    return this.getBlogDetail(input, options);
  }
};
var WrappedCommentServiceClient = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async createComment(input, options) {
    return this.client.createComment(input, options).response;
  }
  async getCommentsByRef(input, options) {
    return this.client.getCommentsByRef(input, options).response;
  }
};
var WrappedOrderServiceClient = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async placeOrder(input, options) {
    return this.client.placeOrder(input, options).response;
  }
  async getMyOrders(input, options) {
    return this.client.getMyOrders(input, options).response;
  }
  async getOrderDetail(input, options) {
    return this.client.getOrderDetail(input, options).response;
  }
  async cancelOrder(input, options) {
    return this.client.cancelOrder(input, options).response;
  }
  async getOrderTracking(input, options) {
    return this.client.getOrderTracking(input, options).response;
  }
  async requestRefund(input, options) {
    return this.client.requestRefund(input, options).response;
  }
  async submitReview(input, options) {
    return this.client.submitReview(input, options).response;
  }
};
var WrappedPageViewServiceClient = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async getPageView(input, options) {
    return this.client.getPageView(input, options).response;
  }
};
var WrappedProductServiceClient = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async getProductsByQuery(input, options) {
    return this.client.getProductsByQuery(input, options).response;
  }
  async getProductDetail(input, options) {
    return this.client.getProductDetail(input, options).response;
  }
  async getProductsByProductGroupSlug(input, options) {
    return this.client.getProductsByProductGroupSlug(input, options).response;
  }
  async getProductGroupsBySlug(input, options) {
    return this.client.getProductGroupsBySlug(input, options).response;
  }
  async getProductGroupsByQuery(input, options) {
    return this.client.getProductGroupsByQuery(input, options).response;
  }
  async getByQuery(input, options) {
    return this.getProductsByQuery(input, options);
  }
  async getBySlug(input, options) {
    return this.getProductDetail(input, options);
  }
};
var WrappedSeoServiceClient = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async getGlobalConfig(input, options) {
    return this.client.getGlobalConfig(input, options).response;
  }
  async getMetaByUrl(input, options) {
    return this.client.getMetaByUrl(input, options).response;
  }
  async getSitemapData(input, options) {
    return this.client.getSitemapData(input, options).response;
  }
};
var WrappedTrackingServiceClient = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async ingestEvent(input, options) {
    return this.client.ingestEvent(input, options).response;
  }
};
var WrappedUserSubmitServiceClient = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async submit(input, options) {
    return this.client.submit(input, options).response;
  }
};

// src/client.ts
var DEFAULT_PUBLIC_KEY = typeof process !== "undefined" && process.env.OPTIFLOW_PUBLIC_KEY || `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnYmTJKkxl/Yg3gA6SQ91foY5CB50LDXcYrq6Ukx8obTuSuH0RAcg/oSem+gT5G1aakdQqtCkYXSHS9wS8kLK3O4AXFCONED4I8tJ8GKRcxFvytxHTIMmqqa+gw+pbPpmV4Zr+KjLHZsLse0jFIJ+gZ2hR3CrAeJ8Au+3uKySNNZ0F2laJAPso9p/80d4nKhf6N/t3/AU2LirnvWyADQeoaXVRQAv3LVpe6IG+bgijg6Cu4rA1kOUxFSj7nD6n1+QZqS7Fu2WdwFd7DbAr1RQKzpxqwF2p7LTifDUUGLrGF45oslxytwbHyEc36eRx1g9mQIdipkIa1KXdjf51sE2jwIDAQAB
-----END PUBLIC KEY-----`;
var DEFAULT_USER_NAME = typeof process !== "undefined" && process.env.OPTIFLOW_USER_NAME || "local_dev@optiflow.vn";
var DEFAULT_USER_ID = typeof process !== "undefined" && process.env.OPTIFLOW_USER_ID || "DEV-LOCAL-001";
var DEFAULT_DISPLAY_NAME = typeof process !== "undefined" && process.env.OPTIFLOW_DISPLAY_NAME || "Local Developer";
var DEFAULT_USER_AGENT = typeof process !== "undefined" && process.env.OPTIFLOW_USER_AGENT || "QA-Bot";
var cachedChecksum = null;
function getNodeCrypto() {
  if (typeof window !== "undefined") {
    return null;
  }
  try {
    const req = typeof eval !== "undefined" ? eval("require") : null;
    if (typeof req === "function") {
      return req("crypto");
    }
  } catch {
  }
  return null;
}
function generateChecksum(publicKey = DEFAULT_PUBLIC_KEY, values = "web:optiflow_svc") {
  if (cachedChecksum && publicKey === DEFAULT_PUBLIC_KEY && values === "web:optiflow_svc") {
    return cachedChecksum;
  }
  try {
    const nodeCrypto = getNodeCrypto();
    if (!nodeCrypto || typeof nodeCrypto.publicEncrypt !== "function") {
      return "";
    }
    const md5Hash = nodeCrypto.createHash("md5").update(values).digest("hex");
    const padding = "xxxxx";
    const rawPayload = padding + md5Hash + padding;
    const encryptedBuffer = nodeCrypto.publicEncrypt(
      {
        key: publicKey,
        padding: nodeCrypto.constants.RSA_PKCS1_PADDING
      },
      Buffer.from(rawPayload)
    );
    const result = encryptedBuffer.toString("base64");
    if (publicKey === DEFAULT_PUBLIC_KEY && values === "web:optiflow_svc") {
      cachedChecksum = result;
    }
    return result;
  } catch (error) {
    console.error("[gRPC Client] Checksum generation failed:", error);
    return "";
  }
}
var OptiFlowGrpcSDK = class {
  transport;
  config;
  token = null;
  tokenGetter;
  // Fully statically-typed API service clients
  auth;
  blog;
  comment;
  order;
  pageView;
  product;
  seo;
  tracking;
  userSubmit;
  constructor(config) {
    this.config = config;
    const baseUrl = config.baseUrl || "https://grpc.optiflow.vn";
    const isDebug = config.debug !== false;
    if (typeof config.token === "function") {
      this.tokenGetter = config.token;
    } else if (typeof config.token === "string") {
      this.token = config.token;
    }
    const self = this;
    this.transport = new import_grpcweb_transport.GrpcWebFetchTransport({
      baseUrl,
      interceptors: [
        {
          interceptUnary(next, method, input, options) {
            const isBrowser = typeof window !== "undefined";
            const callPromise = (async () => {
              const meta = await self.getRequestMetadataAsync(
                options.meta
              );
              options.meta = meta;
              if (isDebug) {
                if (isBrowser) {
                  console.groupCollapsed(
                    `%c[gRPC REQ] ${method.service.typeName}/${method.name}`,
                    "color: #2563eb; font-weight: bold; padding: 2px 4px; border-radius: 3px; background: #dbeafe;"
                  );
                  console.log("Payload:", input);
                  console.log("Headers/Metadata:", options.meta);
                  console.groupEnd();
                } else {
                  console.log(
                    `[gRPC REQ] ${method.service.typeName}/${method.name}`,
                    input
                  );
                }
              }
              const call = next(method, input, options);
              call.response.then(
                (res) => {
                  if (isDebug) {
                    if (isBrowser) {
                      console.groupCollapsed(
                        `%c[gRPC RES] ${method.service.typeName}/${method.name}`,
                        "color: #16a34a; font-weight: bold; padding: 2px 4px; border-radius: 3px; background: #dcfce7;"
                      );
                      console.log("Response:", res);
                      console.groupEnd();
                    } else {
                      console.log(
                        `[gRPC RES] ${method.service.typeName}/${method.name}`,
                        res
                      );
                    }
                  }
                },
                (err) => {
                  if (isDebug) {
                    const isHalted = err instanceof import_runtime_rpc19.RpcError && (err.message.toLowerCase().includes("halted") || err.code === "UNAVAILABLE" || err.meta && Object.values(err.meta).some(
                      (val) => typeof val === "string" && val.toLowerCase().includes("halted")
                    ));
                    if (isBrowser) {
                      console.group(
                        `%c[gRPC ERR] ${method.service.typeName}/${method.name}`,
                        "color: #dc2626; font-weight: bold; padding: 2px 4px; border-radius: 3px; background: #fee2e2;"
                      );
                      if (err instanceof import_runtime_rpc19.RpcError) {
                        console.error("Error Code:", err.code);
                        console.error("Error Message:", err.message);
                        console.error("Metadata:", err.meta);
                      } else {
                        console.error(err);
                      }
                      console.groupEnd();
                    } else {
                      if (err instanceof import_runtime_rpc19.RpcError) {
                        if (isHalted) {
                          console.error(
                            `\u{1F534} [gRPC HALTED ERROR] ${method.service.typeName}/${method.name}
Code: ${err.code}
Message: ${err.message}
Meta:`,
                            err.meta
                          );
                        } else {
                          console.error(
                            `[gRPC ERR] ${method.service.typeName}/${method.name}`,
                            {
                              code: err.code,
                              message: err.message,
                              meta: err.meta
                            }
                          );
                        }
                      } else {
                        console.error(
                          `[gRPC ERR] ${method.service.typeName}/${method.name}`,
                          err
                        );
                      }
                    }
                  }
                }
              );
              return call;
            })();
            const headersPromise = callPromise.then((call) => call.headers);
            const responsePromise = callPromise.then((call) => call.response);
            const statusPromise = callPromise.then((call) => call.status);
            const trailersPromise = callPromise.then((call) => call.trailers);
            return new import_runtime_rpc19.UnaryCall(
              method,
              options.meta || {},
              input,
              headersPromise,
              responsePromise,
              statusPromise,
              trailersPromise
            );
          }
        }
      ],
      fetch: (input, init) => fetch(input, {
        ...init,
        cache: "no-store"
      })
    });
    this.auth = new WrappedAuthServiceClient(
      new AuthServiceClient(this.transport)
    );
    this.blog = new WrappedBlogServiceClient(
      new BlogServiceClient(this.transport)
    );
    this.comment = new WrappedCommentServiceClient(
      new CommentServiceClient(this.transport)
    );
    this.order = new WrappedOrderServiceClient(
      new OrderServiceClient(this.transport)
    );
    this.pageView = new WrappedPageViewServiceClient(
      new PageViewServiceClient(this.transport)
    );
    this.product = new WrappedProductServiceClient(
      new ProductServiceClient(this.transport)
    );
    this.seo = new WrappedSeoServiceClient(
      new SeoServiceClient(this.transport)
    );
    this.tracking = new WrappedTrackingServiceClient(
      new TrackingServiceClient(this.transport)
    );
    this.userSubmit = new WrappedUserSubmitServiceClient(
      new UserSubmitServiceClient(this.transport)
    );
  }
  /**
   * Set authentication token dynamically on the fly
   */
  setToken(token) {
    this.token = token;
  }
  /**
   * Clear the active authentication token
   */
  clearToken() {
    this.token = null;
  }
  /**
   * Check whether an authentication token is currently available.
   * Returns true if a static token is set or a tokenGetter returns a truthy value.
   */
  hasToken() {
    if (this.tokenGetter) {
      const res = this.tokenGetter();
      if (res && typeof res.then === "function") {
        return res.then((val) => !!val);
      }
      return !!res;
    }
    return this.token !== null;
  }
  /**
   * Returns the header/metadata configuration object generated for API requests (synchronously).
   * Maps to lines 134-143 configuration logic.
   */
  getRequestMetadata(extraMeta) {
    const publicKey = this.config.publicKey || DEFAULT_PUBLIC_KEY;
    const meta = {
      checksum: generateChecksum(publicKey),
      "x-org": this.config.orgId,
      "x-requested-at": Date.now().toString(),
      "x-user-name": this.config.userName || DEFAULT_USER_NAME,
      "x-userId": this.config.userId || DEFAULT_USER_ID,
      "x-display-name": this.config.displayName || DEFAULT_DISPLAY_NAME,
      "user-agent": this.config.userAgent || DEFAULT_USER_AGENT,
      ...extraMeta
    };
    if (!meta.authorization && !meta.Authorization) {
      let activeToken = this.token;
      if (this.tokenGetter) {
        const res = this.tokenGetter();
        if (typeof res === "string") {
          activeToken = res;
        } else if (res === null || res === void 0) {
          activeToken = null;
        }
      }
      if (activeToken) {
        meta.authorization = `Bearer ${activeToken}`;
      }
    }
    return meta;
  }
  /**
   * Returns the header/metadata configuration object asynchronously, resolving tokenGetter if it returns a Promise.
   */
  async getRequestMetadataAsync(extraMeta) {
    const meta = this.getRequestMetadata(extraMeta);
    if (!meta.authorization && !meta.Authorization && this.tokenGetter) {
      const res = await this.tokenGetter();
      if (typeof res === "string" && res) {
        meta.authorization = `Bearer ${res}`;
      }
    }
    return meta;
  }
};
var grpcSDK = (config) => new OptiFlowGrpcSDK(config);

// src/seo/generateMetadata.ts
function buildUrl(baseUrl, path) {
  if (!baseUrl) return path || "";
  if (!path) return baseUrl;
  const cleanBase = baseUrl.replace(/\/+$/, "");
  const cleanPath = path.replace(/^\/+/, "");
  return cleanPath ? `${cleanBase}/${cleanPath}` : cleanBase;
}
function extractTwitterHandle(global) {
  if (!global?.socialLinks) return void 0;
  const links = global.socialLinks;
  const twitterVal = links["twitter"] || links["twitter:site"] || links["twitter:creator"] || links["X"] || links["x"];
  if (!twitterVal) return void 0;
  if (twitterVal.startsWith("@")) return twitterVal;
  try {
    const url = new URL(twitterVal);
    const handle = url.pathname.replace(/^\/+/, "").split("/")[0];
    return handle ? `@${handle}` : void 0;
  } catch {
    return twitterVal.includes("/") ? void 0 : `@${twitterVal}`;
  }
}
function generateMetadata(input) {
  if (!input) return {};
  const global = input.global && "data" in input.global && input.global.data ? input.global.data : input.global;
  const page = input.page && "data" in input.page && input.page.data ? input.page.data : input.page;
  const googleVerification = global?.googleSiteVerificationId ? { google: global.googleSiteVerificationId } : void 0;
  const twitterHandle = extractTwitterHandle(global);
  const logoUrl = global?.logo?.url || global?.defaultImage || global?.openGraph?.image;
  const icons = logoUrl ? {
    icon: logoUrl,
    apple: logoUrl
  } : void 0;
  if (page) {
    const pageUrl = page?.openGraph?.url || buildUrl(page?.canonicalUrl || global?.domain, page?.route);
    const ogImage = page?.openGraph?.image || global?.defaultImage || global?.openGraph?.image || "";
    const title = page?.title || global?.defaultTitle || "";
    const description = page?.description || global?.defaultDescription || global?.description || "";
    const ogTitle = page?.openGraph?.title || title;
    const ogDescription = page?.openGraph?.description || description;
    const siteName = page?.openGraph?.siteName || global?.siteName || global?.brandName || "";
    const locale = page?.openGraph?.locale || global?.locale || "vi_VN";
    let ogType = "website";
    if (page?.openGraph?.type === "article" || page?.entityType === "article" || page?.entityType === "blog") {
      ogType = "article";
    } else if (page?.openGraph?.type) {
      ogType = page.openGraph.type;
    }
    const alternateLangs = page?.alternateLanguages;
    return {
      title,
      description,
      keywords: page?.keywordList || page?.seoKeywordList || [],
      icons,
      verification: googleVerification,
      alternates: {
        canonical: page?.canonicalUrl || pageUrl,
        languages: alternateLangs
      },
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: pageUrl,
        siteName,
        locale,
        type: ogType,
        images: ogImage ? {
          width: 1200,
          height: 630,
          alt: title,
          url: ogImage,
          type: "image/jpeg"
        } : void 0,
        phoneNumbers: "",
        emails: "",
        countryName: "Vi\u1EC7t Nam"
      },
      twitter: {
        card: "summary_large_image",
        site: twitterHandle,
        creator: twitterHandle,
        title: ogTitle,
        description: ogDescription,
        images: ogImage ? [ogImage] : []
      },
      robots: {
        index: page?.robots?.index ?? true,
        follow: page?.robots?.follow ?? true,
        "max-image-preview": page?.robots?.maxImagePreview || "large",
        "max-snippet": page?.robots?.maxSnippet ?? -1,
        "max-video-preview": page?.robots?.maxVideoPreview ?? -1
      }
    };
  }
  if (global) {
    const defaultTitle = global?.defaultTitle || "";
    const description = global?.description || global?.defaultDescription || "";
    const ogTitle = global?.openGraph?.title || defaultTitle;
    const ogDescription = global?.openGraph?.description || description;
    const ogImage = global?.openGraph?.image || global?.defaultImage || "";
    return {
      title: {
        default: defaultTitle,
        template: global?.titleTemplate || "%s"
      },
      description,
      keywords: [],
      icons,
      verification: googleVerification,
      alternates: {
        canonical: global?.domain || ""
      },
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        locale: global?.openGraph?.locale || global?.locale || "vi_VN",
        type: global?.openGraph?.type || "website",
        url: global?.openGraph?.url || global?.domain || "",
        siteName: global?.openGraph?.siteName || global?.siteName || global?.brandName || "",
        images: ogImage ? {
          width: 1200,
          height: 630,
          alt: defaultTitle,
          url: ogImage,
          type: "image/jpeg"
        } : void 0,
        phoneNumbers: "",
        emails: "",
        countryName: "Vi\u1EC7t Nam"
      },
      twitter: {
        card: "summary_large_image",
        site: twitterHandle,
        creator: twitterHandle,
        title: ogTitle,
        description: ogDescription,
        images: ogImage ? [ogImage] : []
      }
    };
  }
  return {};
}

// src/seo/seoHelper.ts
var cachedGlobalData = void 0;
var globalDataCacheTimestamp = 0;
var GLOBAL_SEO_CACHE_TTL = 10 * 60 * 1e3;
function clearGlobalSeoCache() {
  cachedGlobalData = void 0;
  globalDataCacheTimestamp = 0;
}
async function fetchSeoMetadata(options = {}) {
  const result = await fetchSeoData(options);
  return result.metadata;
}
async function fetchSeoData(options = {}) {
  let globalData = options.global && "data" in options.global && options.global.data ? options.global.data : options.global;
  let pageData = options.page && "data" in options.page && options.page.data ? options.page.data : options.page;
  const { sdk, url, fallbackTitle } = options;
  const seoClient = options.seoClient || sdk?.seo;
  if (seoClient) {
    const promises = [];
    if (!globalData) {
      const isCacheValid = cachedGlobalData && Date.now() - globalDataCacheTimestamp < GLOBAL_SEO_CACHE_TTL;
      if (isCacheValid) {
        globalData = cachedGlobalData;
      } else {
        promises.push(
          seoClient.getGlobalConfig({}).then((res) => {
            if (res?.success && res.data) {
              globalData = res.data;
              cachedGlobalData = res.data;
              globalDataCacheTimestamp = Date.now();
            }
          }).catch((err) => {
            console.warn(
              "[OptiFlow SDK] GetGlobalConfig SEO failed safely:",
              err
            );
            if (cachedGlobalData) {
              globalData = cachedGlobalData;
            }
          })
        );
      }
    }
    if (url && !pageData) {
      promises.push(
        seoClient.getMetaByUrl({ url }).then((res) => {
          if (res?.success && res.data) {
            pageData = res.data;
          }
        }).catch((err) => {
          console.warn(
            `[OptiFlow SDK] GetMetaByUrl SEO failed safely for URL (${url}):`,
            err
          );
        })
      );
    }
    if (promises.length > 0) {
      await Promise.allSettled(promises);
    }
  }
  let metadata = generateMetadata({
    global: globalData,
    page: pageData
  });
  if ((!metadata || Object.keys(metadata).length === 0) && fallbackTitle) {
    metadata = {
      title: fallbackTitle
    };
  }
  return {
    global: globalData,
    page: pageData,
    metadata
  };
}
function isLocalHost(host) {
  return host.includes("0.0.0.0") || host.includes("127.0.0.1") || host.includes("localhost");
}
function cleanDomainUrl(domain) {
  let cleaned = domain.trim();
  if (!cleaned) return "";
  if (!cleaned.startsWith("http://") && !cleaned.startsWith("https://")) {
    cleaned = `https://${cleaned}`;
  }
  return cleaned.replace(/\/+$/, "");
}
function resolvePublicUrl(urlOption, request, domainOption) {
  let envDomain = domainOption || typeof process !== "undefined" && (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL) || "";
  envDomain = cleanDomainUrl(envDomain);
  let targetUrl = urlOption || "";
  if (!targetUrl && request) {
    try {
      const headers = request.headers;
      const rawForwardedHost = headers.get("x-forwarded-host") || headers.get("host") || "";
      const forwardedHost = rawForwardedHost.split(",")[0].trim();
      const rawForwardedProto = headers.get("x-forwarded-proto") || "https";
      const forwardedProto = rawForwardedProto.split(",")[0].trim();
      const parsedUrl = new URL(request.url);
      if (forwardedHost && !isLocalHost(forwardedHost)) {
        targetUrl = `${forwardedProto}://${forwardedHost}${parsedUrl.pathname}${parsedUrl.search}`;
      } else if (envDomain) {
        targetUrl = `${envDomain}${parsedUrl.pathname}${parsedUrl.search}`;
      } else {
        targetUrl = request.url;
      }
    } catch {
      targetUrl = request.url || "";
    }
  }
  if (targetUrl) {
    try {
      const parsed = new URL(targetUrl);
      if (isLocalHost(parsed.host) && envDomain) {
        targetUrl = `${envDomain}${parsed.pathname}${parsed.search}`;
      }
    } catch {
    }
  }
  let originDomain = envDomain;
  if (targetUrl) {
    try {
      const parsed = new URL(targetUrl);
      if (!isLocalHost(parsed.host)) {
        originDomain = parsed.origin;
      }
    } catch {
    }
  }
  return { targetUrl, originDomain };
}
async function fetchRobotsTxt(options = {}) {
  let globalData = options.global && "data" in options.global && options.global.data ? options.global.data : options.global;
  const { sdk, request } = options;
  const seoClient = options.seoClient || sdk?.seo;
  let { originDomain } = resolvePublicUrl(
    void 0,
    request,
    options.domain || globalData?.domain
  );
  if (!globalData && seoClient) {
    try {
      const res = await seoClient.getGlobalConfig({});
      if (res?.success && res.data) {
        globalData = res.data;
        if (!originDomain && res.data.domain) {
          originDomain = cleanDomainUrl(res.data.domain);
        }
      }
    } catch (err) {
      console.warn(
        "[OptiFlow SDK] GetGlobalConfig for Robots.txt failed safely:",
        err
      );
    }
  }
  let content = globalData?.robotsTxtContent;
  if (!content) {
    const domain = cleanDomainUrl(globalData?.domain || originDomain);
    const sitemapLine = domain ? `
Sitemap: ${domain}/sitemap.xml
` : "";
    content = `User-agent: *
Allow: /${sitemapLine}`;
  } else if (originDomain && !isLocalHost(originDomain)) {
    content = content.replace(
      /https?:\/\/(?:0\.0\.0\.0|127\.0\.0\.1|localhost)(?::\d+)?/g,
      originDomain
    );
  }
  return content;
}
async function handleRobotsTxtRequest(optionsOrRequest, extraOptions) {
  let options = {};
  if (optionsOrRequest instanceof Request) {
    options = { request: optionsOrRequest, ...extraOptions };
  } else if (optionsOrRequest && typeof optionsOrRequest.url === "string" && !optionsOrRequest.sdk && !optionsOrRequest.seoClient && !optionsOrRequest.request) {
    options = { request: optionsOrRequest, ...extraOptions };
  } else if (optionsOrRequest) {
    options = { ...optionsOrRequest, ...extraOptions };
  }
  const robotsContent = await fetchRobotsTxt(options);
  return new Response(robotsContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400"
    }
  });
}

// src/seo/sitemap-helper.ts
var import_navigation = __toESM(require_navigation2());
function extractPublicUrl(request, overrideDomain) {
  if (overrideDomain) {
    const cleanDomain = overrideDomain.replace(/\/+$/, "");
    const parsedUrl = new URL(request.url);
    return `${cleanDomain}${parsedUrl.pathname}${parsedUrl.search}`;
  }
  const headers = request.headers;
  const host = headers.get("x-forwarded-host") || headers.get("host") || "";
  const proto = headers.get("x-forwarded-proto") || "https";
  if (host && !host.includes("localhost") && !host.includes("127.0.0.1") && !host.includes("0.0.0.0")) {
    const parsed = new URL(request.url);
    return `${proto}://${host.split(",")[0].trim()}${parsed.pathname}${parsed.search}`;
  }
  return request.url;
}
async function handleDynamicSitemap({
  request,
  params,
  fetcher,
  cacheControl = "public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400",
  domain
}) {
  if (params) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;
    const url = new URL(request.url);
    if (slug && !slug.endsWith(".xml") && !url.pathname.endsWith(".xml")) {
      (0, import_navigation.notFound)();
    }
  }
  const targetUrl = extractPublicUrl(request, domain);
  try {
    const res = await fetcher({ url: targetUrl });
    if (!res?.xmlContent) {
      return new Response("Sitemap Not Found", { status: 404 });
    }
    return new Response(res.xmlContent, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": cacheControl
      }
    });
  } catch (error) {
    console.error("[SEO Sitemap Error] Failed to fetch sitemap:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// src/seo/SeoScripts.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function buildDefaultSchema(global) {
  if (!global) return void 0;
  const name = global.siteName || global.brandName || global.defaultTitle;
  if (!name && !global.domain) return void 0;
  const schema = {
    "@context": "https://schema.org",
    "@type": global.address?.streetAddress || global.geoLatitude ? "LocalBusiness" : "Organization",
    name: name || "Organization",
    url: global.domain || void 0,
    logo: global.logo?.url || global.defaultImage || void 0,
    description: global.description || global.defaultDescription || void 0
  };
  if (global.address && (global.address.streetAddress || global.address.addressCountry)) {
    schema["address"] = {
      "@type": "PostalAddress",
      streetAddress: global.address.streetAddress || void 0,
      addressRegion: global.address.addressRegion || void 0,
      postalCode: global.address.postalCode || void 0,
      addressCountry: global.address.addressCountry || void 0
    };
  }
  if (global.geoLatitude && global.geoLongitude) {
    schema["geo"] = {
      "@type": "GeoCoordinates",
      latitude: global.geoLatitude,
      longitude: global.geoLongitude
    };
  }
  if (global.contactPoints && global.contactPoints.length > 0) {
    schema["contactPoint"] = global.contactPoints.map((cp) => ({
      "@type": "ContactPoint",
      telephone: cp.telephone || void 0,
      contactType: cp.contactType || void 0,
      email: cp.email || void 0,
      areaServed: cp.areaServed || void 0
    }));
  }
  if (global.socialLinks) {
    const sameAs = Object.values(global.socialLinks).filter(
      (url) => typeof url === "string" && url.startsWith("http")
    );
    if (sameAs.length > 0) {
      schema["sameAs"] = sameAs;
    }
  }
  return schema;
}
function SeoScripts(props) {
  const global = props.global && "data" in props.global && props.global.data ? props.global.data : props.global;
  const page = props.page && "data" in props.page && props.page.data ? props.page.data : props.page;
  const scripts = props.scripts || global?.scripts;
  const rawSchema = props.schemaMarkup || page?.schemaMarkup || global?.schemaMarkup;
  let schemaHtml;
  if (rawSchema) {
    schemaHtml = typeof rawSchema === "string" ? rawSchema : JSON.stringify(rawSchema);
  } else {
    const autoSchema = buildDefaultSchema(global);
    if (autoSchema) {
      schemaHtml = JSON.stringify(autoSchema);
    }
  }
  if (!scripts && !schemaHtml) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.default.Fragment, { children: [
    schemaHtml && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: schemaHtml }
      }
    ),
    scripts?.header && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: { display: "none" },
        dangerouslySetInnerHTML: { __html: scripts.header }
      }
    ),
    scripts?.bodyStart && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: { display: "none" },
        dangerouslySetInnerHTML: { __html: scripts.bodyStart }
      }
    ),
    scripts?.bodyEnd && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: { display: "none" },
        dangerouslySetInnerHTML: { __html: scripts.bodyEnd }
      }
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OptiFlowGrpcSDK,
  RpcError,
  SeoScripts,
  clearGlobalSeoCache,
  extractPublicUrl,
  fetchRobotsTxt,
  fetchSeoData,
  fetchSeoMetadata,
  generateMetadata,
  grpcSDK,
  handleDynamicSitemap,
  handleRobotsTxtRequest,
  resolvePublicUrl
});
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map