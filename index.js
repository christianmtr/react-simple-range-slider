"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 7);
}([function (e, t, n) {
  e.exports = n(4)();
}, function (e, t) {
  e.exports = require("react");
}, function (e, t, n) {
  var r;
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

  !function () {
    "use strict";

    var n = {}.hasOwnProperty;

    function o() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        var r = arguments[t];

        if (r) {
          var i = _typeof(r);

          if ("string" === i || "number" === i) e.push(r);else if (Array.isArray(r) && r.length) {
            var a = o.apply(null, r);
            a && e.push(a);
          } else if ("object" === i) for (var s in r) {
            n.call(r, s) && r[s] && e.push(s);
          }
        }
      }

      return e.join(" ");
    }

    e.exports ? (o["default"] = o, e.exports = o) : void 0 === (r = function () {
      return o;
    }.apply(t, [])) || (e.exports = r);
  }();
}, function (e, t, n) {
  "use strict";

  (function (e) {
    var n = function () {
      if ("undefined" != typeof Map) return Map;

      function e(e, t) {
        var n = -1;
        return e.some(function (e, r) {
          return e[0] === t && (n = r, !0);
        }), n;
      }

      return function () {
        function t() {
          this.__entries__ = [];
        }

        return Object.defineProperty(t.prototype, "size", {
          get: function get() {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.get = function (t) {
          var n = e(this.__entries__, t),
              r = this.__entries__[n];
          return r && r[1];
        }, t.prototype.set = function (t, n) {
          var r = e(this.__entries__, t);
          ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n]);
        }, t.prototype["delete"] = function (t) {
          var n = this.__entries__,
              r = e(n, t);
          ~r && n.splice(r, 1);
        }, t.prototype.has = function (t) {
          return !!~e(this.__entries__, t);
        }, t.prototype.clear = function () {
          this.__entries__.splice(0);
        }, t.prototype.forEach = function (e, t) {
          void 0 === t && (t = null);

          for (var n = 0, r = this.__entries__; n < r.length; n++) {
            var o = r[n];
            e.call(t, o[1], o[0]);
          }
        }, t;
      }();
    }(),
        r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
        o = void 0 !== e && e.Math === Math ? e : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
        i = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function (e) {
      return setTimeout(function () {
        return e(Date.now());
      }, 1e3 / 60);
    },
        a = 2;

    var s = 20,
        c = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        u = "undefined" != typeof MutationObserver,
        l = function () {
      function e() {
        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (e, t) {
          var n = !1,
              r = !1,
              o = 0;

          function s() {
            n && (n = !1, e()), r && u();
          }

          function c() {
            i(s);
          }

          function u() {
            var e = Date.now();

            if (n) {
              if (e - o < a) return;
              r = !0;
            } else n = !0, r = !1, setTimeout(c, t);

            o = e;
          }

          return u;
        }(this.refresh.bind(this), s);
      }

      return e.prototype.addObserver = function (e) {
        ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
      }, e.prototype.removeObserver = function (e) {
        var t = this.observers_,
            n = t.indexOf(e);
        ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
      }, e.prototype.refresh = function () {
        this.updateObservers_() && this.refresh();
      }, e.prototype.updateObservers_ = function () {
        var e = this.observers_.filter(function (e) {
          return e.gatherActive(), e.hasActive();
        });
        return e.forEach(function (e) {
          return e.broadcastActive();
        }), e.length > 0;
      }, e.prototype.connect_ = function () {
        r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), u ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
      }, e.prototype.disconnect_ = function () {
        r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
      }, e.prototype.onTransitionEnd_ = function (e) {
        var t = e.propertyName,
            n = void 0 === t ? "" : t;
        c.some(function (e) {
          return !!~n.indexOf(e);
        }) && this.refresh();
      }, e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }, e.instance_ = null, e;
    }(),
        h = function h(e, t) {
      for (var n = 0, r = Object.keys(t); n < r.length; n++) {
        var o = r[n];
        Object.defineProperty(e, o, {
          value: t[o],
          enumerable: !1,
          writable: !1,
          configurable: !0
        });
      }

      return e;
    },
        f = function f(e) {
      return e && e.ownerDocument && e.ownerDocument.defaultView || o;
    },
        d = _(0, 0, 0, 0);

    function p(e) {
      return parseFloat(e) || 0;
    }

    function v(e) {
      for (var t = [], n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }

      return t.reduce(function (t, n) {
        return t + p(e["border-" + n + "-width"]);
      }, 0);
    }

    function b(e) {
      var t = e.clientWidth,
          n = e.clientHeight;
      if (!t && !n) return d;

      var r = f(e).getComputedStyle(e),
          o = function (e) {
        for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
          var o = r[n],
              i = e["padding-" + o];
          t[o] = p(i);
        }

        return t;
      }(r),
          i = o.left + o.right,
          a = o.top + o.bottom,
          s = p(r.width),
          c = p(r.height);

      if ("border-box" === r.boxSizing && (Math.round(s + i) !== t && (s -= v(r, "left", "right") + i), Math.round(c + a) !== n && (c -= v(r, "top", "bottom") + a)), !function (e) {
        return e === f(e).document.documentElement;
      }(e)) {
        var u = Math.round(s + i) - t,
            l = Math.round(c + a) - n;
        1 !== Math.abs(u) && (s -= u), 1 !== Math.abs(l) && (c -= l);
      }

      return _(o.left, o.top, s, c);
    }

    var m = "undefined" != typeof SVGGraphicsElement ? function (e) {
      return e instanceof f(e).SVGGraphicsElement;
    } : function (e) {
      return e instanceof f(e).SVGElement && "function" == typeof e.getBBox;
    };

    function y(e) {
      return r ? m(e) ? function (e) {
        var t = e.getBBox();
        return _(0, 0, t.width, t.height);
      }(e) : b(e) : d;
    }

    function _(e, t, n, r) {
      return {
        x: e,
        y: t,
        width: n,
        height: r
      };
    }

    var g = function () {
      function e(e) {
        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = _(0, 0, 0, 0), this.target = e;
      }

      return e.prototype.isActive = function () {
        var e = y(this.target);
        return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
      }, e.prototype.broadcastRect = function () {
        var e = this.contentRect_;
        return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
      }, e;
    }(),
        w = function () {
      return function (e, t) {
        var n,
            r,
            o,
            i,
            a,
            s,
            c,
            u = (r = (n = t).x, o = n.y, i = n.width, a = n.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(s.prototype), h(c, {
          x: r,
          y: o,
          width: i,
          height: a,
          top: o,
          right: r + i,
          bottom: a + o,
          left: r
        }), c);
        h(this, {
          target: e,
          contentRect: u
        });
      };
    }(),
        E = function () {
      function e(e, t, r) {
        if (this.activeObservations_ = [], this.observations_ = new n(), "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
        this.callback_ = e, this.controller_ = t, this.callbackCtx_ = r;
      }

      return e.prototype.observe = function (e) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");

        if ("undefined" != typeof Element && Element instanceof Object) {
          if (!(e instanceof f(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) || (t.set(e, new g(e)), this.controller_.addObserver(this), this.controller_.refresh());
        }
      }, e.prototype.unobserve = function (e) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");

        if ("undefined" != typeof Element && Element instanceof Object) {
          if (!(e instanceof f(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) && (t["delete"](e), t.size || this.controller_.removeObserver(this));
        }
      }, e.prototype.disconnect = function () {
        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
      }, e.prototype.gatherActive = function () {
        var e = this;
        this.clearActive(), this.observations_.forEach(function (t) {
          t.isActive() && e.activeObservations_.push(t);
        });
      }, e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var e = this.callbackCtx_,
              t = this.activeObservations_.map(function (e) {
            return new w(e.target, e.broadcastRect());
          });
          this.callback_.call(e, t, e), this.clearActive();
        }
      }, e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }, e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }, e;
    }(),
        O = "undefined" != typeof WeakMap ? new WeakMap() : new n(),
        x = function () {
      return function e(t) {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var n = l.getInstance(),
            r = new E(t, n, this);
        O.set(this, r);
      };
    }();

    ["observe", "unobserve", "disconnect"].forEach(function (e) {
      x.prototype[e] = function () {
        var t;
        return (t = O.get(this))[e].apply(t, arguments);
      };
    });
    var M = void 0 !== o.ResizeObserver ? o.ResizeObserver : x;
    t.a = M;
  }).call(this, n(6));
}, function (e, t, n) {
  "use strict";

  var r = n(5);

  function o() {}

  function i() {}

  i.resetWarningCache = o, e.exports = function () {
    function e(e, t, n, o, i, a) {
      if (a !== r) {
        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw s.name = "Invariant Violation", s;
      }
    }

    function t() {
      return e;
    }

    e.isRequired = e;
    var n = {
      array: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: i,
      resetWarningCache: o
    };
    return n.PropTypes = n, n;
  };
}, function (e, t, n) {
  "use strict";

  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, function (e, t) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  e.exports = n;
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(2),
      o = n.n(r),
      i = n(1),
      a = n.n(i),
      s = n(0),
      c = n.n(s),
      u = n(3);

  function l(e) {
    return e.charAt(0).toUpperCase() + e.substr(1);
  }

  function h(e, t, n) {
    return Math.min(Math.max(e, t), n);
  }

  function f(e) {
    return (f = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }

  function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  function p(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  function v(e, t) {
    return !t || "object" !== f(t) && "function" != typeof t ? function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }(e) : t;
  }

  function b(e) {
    return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function m(e, t) {
    return (m = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  var y = {
    orientation: {
      horizontal: {
        dimension: "width",
        direction: "left",
        reverseDirection: "right",
        coordinate: "x"
      },
      vertical: {
        dimension: "height",
        direction: "top",
        reverseDirection: "bottom",
        coordinate: "y"
      }
    }
  },
      _ = function (e) {
    function t(e, n) {
      var r;
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), (r = v(this, b(t).call(this, e, n))).handleFormat = function (e) {
        var t = r.props.format;
        return t ? t(e) : e;
      }, r.handleUpdate = function () {
        if (r.slider) {
          var e = r.props.orientation,
              t = l(y.orientation[e].dimension),
              n = r.slider["offset".concat(t)],
              o = r.handle["offset".concat(t)];
          r.setState({
            limit: n - o,
            grab: o / 2
          });
        }
      }, r.handleStart = function (e) {
        var t = r.props.onChangeStart;
        document.addEventListener("mousemove", r.handleDrag), document.addEventListener("mouseup", r.handleEnd), r.setState({
          active: !0
        }, function () {
          t && t(e);
        });
      }, r.handleDrag = function (e) {
        e.stopPropagation();
        var t = r.props.onChange,
            n = e.target,
            o = n.className,
            i = n.classList,
            a = n.dataset;

        if (t && "rangeslider__labels" !== o) {
          var s = r.position(e);
          i && i.contains("rangeslider__label-item") && a.value && (s = parseFloat(a.value)), t && t(s, e);
        }
      }, r.handleEnd = function (e) {
        var t = r.props.onChangeComplete;
        r.setState({
          active: !1
        }, function () {
          t && t(e);
        }), document.removeEventListener("mousemove", r.handleDrag), document.removeEventListener("mouseup", r.handleEnd);
      }, r.handleKeyDown = function (e) {
        e.preventDefault();
        var t,
            n = e.keyCode,
            o = r.props,
            i = o.value,
            a = o.min,
            s = o.max,
            c = o.step,
            u = o.onChange;

        switch (n) {
          case 38:
          case 39:
            t = i + c > s ? s : i + c, u && u(t, e);
            break;

          case 37:
          case 40:
            t = i - c < a ? a : i - c, u && u(t, e);
        }
      }, r.getPositionFromValue = function (e) {
        var t = r.state.limit,
            n = r.props,
            o = n.min,
            i = (e - o) / (n.max - o);
        return Math.round(i * t);
      }, r.getValueFromPosition = function (e) {
        var t = r.state.limit,
            n = r.props,
            o = n.orientation,
            i = n.min,
            a = n.max,
            s = n.step,
            c = h(e, 0, t) / (t || 1),
            u = s * Math.round(c * (a - i) / s);
        return h("horizontal" === o ? u + i : a - u, i, a);
      }, r.position = function (e) {
        var t = r.state.grab,
            n = r.props,
            o = n.orientation,
            i = n.reverse,
            a = r.slider,
            s = y.orientation[o].coordinate,
            c = i ? y.orientation[o].reverseDirection : y.orientation[o].direction,
            u = "client".concat(l(s)),
            h = e.touches ? e.touches[0][u] : e[u],
            f = a.getBoundingClientRect()[c],
            d = i ? f - h - t : h - f - t;
        return r.getValueFromPosition(d);
      }, r.coordinates = function (e) {
        var t = r.state,
            n = t.limit,
            o = t.grab,
            i = r.props.orientation,
            a = r.getValueFromPosition(e),
            s = r.getPositionFromValue(a),
            c = "horizontal" === i ? s + o : s;
        return {
          fill: "horizontal" === i ? c : n - c,
          handle: c,
          label: c
        };
      }, r.renderLabels = function (e) {
        return a.a.createElement("ul", {
          ref: function ref(e) {
            r.labels = e;
          },
          className: o()("rangeslider__labels")
        }, e);
      }, r.state = {
        active: !1,
        limit: 0,
        grab: 0
      }, r;
    }

    var n, r, s;
    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && m(e, t);
    }(t, i["Component"]), n = t, (r = [{
      key: "componentDidMount",
      value: function value() {
        this.handleUpdate(), new u.a(this.handleUpdate).observe(this.slider);
      }
    }, {
      key: "render",
      value: function value() {
        var e = this,
            t = this.props,
            n = t.value,
            r = t.orientation,
            i = t.className,
            s = t.tooltip,
            c = t.tooltip4ever,
            u = t.reverse,
            l = t.labels,
            h = t.min,
            f = t.max,
            p = t.handleLabel,
            v = this.state.active,
            b = y.orientation[r].dimension,
            m = u ? y.orientation[r].reverseDirection : y.orientation[r].direction,
            _ = this.getPositionFromValue(n),
            g = this.coordinates(_),
            w = d({}, b, "".concat(g.fill, "px")),
            E = d({}, m, "".concat(g.handle, "px")),
            O = s && v || c && v,
            x = [],
            M = Object.keys(l);

        if (M.length > 0) {
          M = M.sort(function (e, t) {
            return u ? e - t : t - e;
          });
          var T = !0,
              S = !1,
              j = void 0;

          try {
            for (var D, P = M[Symbol.iterator](); !(T = (D = P.next()).done); T = !0) {
              var A = D.value,
                  C = this.getPositionFromValue(A),
                  k = this.coordinates(C),
                  L = d({}, m, "".concat(k.label, "px"));
              x.push(a.a.createElement("li", {
                key: A,
                className: o()("rangeslider__label-item"),
                "data-value": A,
                onMouseDown: this.handleDrag,
                onTouchStart: this.handleStart,
                onTouchEnd: this.handleEnd,
                style: L
              }, this.props.labels[A]));
            }
          } catch (e) {
            S = !0, j = e;
          } finally {
            try {
              T || null == P["return"] || P["return"]();
            } finally {
              if (S) throw j;
            }
          }
        }

        return a.a.createElement("div", {
          ref: function ref(t) {
            e.slider = t;
          },
          className: o()("rangeslider", "rangeslider-".concat(r), {
            "rangeslider-reverse": u
          }, i),
          onMouseDown: this.handleDrag,
          onMouseUp: this.handleEnd,
          onTouchStart: this.handleStart,
          onTouchEnd: this.handleEnd,
          "aria-valuemin": h,
          "aria-valuemax": f,
          "aria-valuenow": n,
          "aria-orientation": r
        }, a.a.createElement("div", {
          className: "rangeslider__fill",
          style: w
        }), a.a.createElement("div", {
          ref: function ref(t) {
            e.handle = t;
          },
          className: "rangeslider__handle",
          onMouseDown: this.handleStart,
          onTouchMove: this.handleDrag,
          onTouchEnd: this.handleEnd,
          onKeyDown: this.handleKeyDown,
          style: E,
          tabIndex: 0
        }, O ? a.a.createElement("div", {
          ref: function ref(t) {
            e.tooltip = t;
          },
          className: "rangeslider__handle-tooltip"
        }, a.a.createElement("span", null, this.handleFormat(n))) : null, a.a.createElement("div", {
          className: "rangeslider__handle-label"
        }, p)), l ? this.renderLabels(x) : null);
      }
    }]) && p(n.prototype, r), s && p(n, s), t;
  }();

  _.propTypes = {
    min: c.a.number,
    max: c.a.number,
    step: c.a.number,
    value: c.a.number,
    orientation: c.a.string,
    tooltip: c.a.bool,
    tooltip4ever: c.a.bool,
    reverse: c.a.bool,
    labels: c.a.object,
    handleLabel: c.a.string,
    format: c.a.func,
    onChangeStart: c.a.func,
    onChange: c.a.func,
    onChangeComplete: c.a.func
  }, _.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    value: 0,
    orientation: "horizontal",
    tooltip: !0,
    reverse: !1,
    labels: {},
    handleLabel: "",
    tooltip4ever: !1
  };
  var g = _;
  t["default"] = g;
}]);
