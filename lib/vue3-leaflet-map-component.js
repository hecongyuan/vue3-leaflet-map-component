import { defineComponent as _e, onMounted as pe, provide as br, openBlock as To, createElementBlock as bo, renderSlot as Mo, ref as Gt, onActivated as Ge, inject as zt, watch as So, createElementVNode as Mr } from "vue";
var Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Eo(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Di = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(s, a) {
  (function(r, u) {
    u(a);
  })(Sr, function(r) {
    var u = "1.9.4";
    function l(t) {
      var e, i, n, o;
      for (i = 1, n = arguments.length; i < n; i++) {
        o = arguments[i];
        for (e in o)
          t[e] = o[e];
      }
      return t;
    }
    var d = Object.create || function() {
      function t() {
      }
      return function(e) {
        return t.prototype = e, new t();
      };
    }();
    function f(t, e) {
      var i = Array.prototype.slice;
      if (t.bind)
        return t.bind.apply(t, i.call(arguments, 1));
      var n = i.call(arguments, 2);
      return function() {
        return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
      };
    }
    var g = 0;
    function w(t) {
      return "_leaflet_id" in t || (t._leaflet_id = ++g), t._leaflet_id;
    }
    function b(t, e, i) {
      var n, o, h, c;
      return c = function() {
        n = !1, o && (h.apply(i, o), o = !1);
      }, h = function() {
        n ? o = arguments : (t.apply(i, arguments), setTimeout(c, e), n = !0);
      }, h;
    }
    function x(t, e, i) {
      var n = e[1], o = e[0], h = n - o;
      return t === n && i ? t : ((t - o) % h + h) % h + o;
    }
    function v() {
      return !1;
    }
    function N(t, e) {
      if (e === !1)
        return t;
      var i = Math.pow(10, e === void 0 ? 6 : e);
      return Math.round(t * i) / i;
    }
    function Q(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }
    function S(t) {
      return Q(t).split(/\s+/);
    }
    function P(t, e) {
      Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? d(t.options) : {});
      for (var i in e)
        t.options[i] = e[i];
      return t.options;
    }
    function j(t, e, i) {
      var n = [];
      for (var o in t)
        n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
      return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
    }
    var X = /\{ *([\w_ -]+) *\}/g;
    function ft(t, e) {
      return t.replace(X, function(i, n) {
        var o = e[n];
        if (o === void 0)
          throw new Error("No value provided for variable " + i);
        return typeof o == "function" && (o = o(e)), o;
      });
    }
    var q = Array.isArray || function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
    function $t(t, e) {
      for (var i = 0; i < t.length; i++)
        if (t[i] === e)
          return i;
      return -1;
    }
    var ve = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function Qe(t) {
      return window["webkit" + t] || window["moz" + t] || window["ms" + t];
    }
    var Xi = 0;
    function Yi(t) {
      var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - Xi));
      return Xi = e + i, window.setTimeout(t, i);
    }
    var ti = window.requestAnimationFrame || Qe("RequestAnimationFrame") || Yi, Qi = window.cancelAnimationFrame || Qe("CancelAnimationFrame") || Qe("CancelRequestAnimationFrame") || function(t) {
      window.clearTimeout(t);
    };
    function it(t, e, i) {
      if (i && ti === Yi)
        t.call(e);
      else
        return ti.call(window, f(t, e));
    }
    function at(t) {
      t && Qi.call(window, t);
    }
    var Qo = {
      __proto__: null,
      extend: l,
      create: d,
      bind: f,
      get lastId() {
        return g;
      },
      stamp: w,
      throttle: b,
      wrapNum: x,
      falseFn: v,
      formatNum: N,
      trim: Q,
      splitWords: S,
      setOptions: P,
      getParamString: j,
      template: ft,
      isArray: q,
      indexOf: $t,
      emptyImageUrl: ve,
      requestFn: ti,
      cancelFn: Qi,
      requestAnimFrame: it,
      cancelAnimFrame: at
    };
    function xt() {
    }
    xt.extend = function(t) {
      var e = function() {
        P(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, i = e.__super__ = this.prototype, n = d(i);
      n.constructor = e, e.prototype = n;
      for (var o in this)
        Object.prototype.hasOwnProperty.call(this, o) && o !== "prototype" && o !== "__super__" && (e[o] = this[o]);
      return t.statics && l(e, t.statics), t.includes && (ts(t.includes), l.apply(null, [n].concat(t.includes))), l(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? d(i.options) : {}, l(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
        if (!this._initHooksCalled) {
          i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var h = 0, c = n._initHooks.length; h < c; h++)
            n._initHooks[h].call(this);
        }
      }, e;
    }, xt.include = function(t) {
      var e = this.prototype.options;
      return l(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
    }, xt.mergeOptions = function(t) {
      return l(this.prototype.options, t), this;
    }, xt.addInitHook = function(t) {
      var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
        this[t].apply(this, e);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
    };
    function ts(t) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        t = q(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
    var rt = {
      /* @method on(type: String, fn: Function, context?: Object): this
       * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
       *
       * @alternative
       * @method on(eventMap: Object): this
       * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
       */
      on: function(t, e, i) {
        if (typeof t == "object")
          for (var n in t)
            this._on(n, t[n], e);
        else {
          t = S(t);
          for (var o = 0, h = t.length; o < h; o++)
            this._on(t[o], e, i);
        }
        return this;
      },
      /* @method off(type: String, fn?: Function, context?: Object): this
       * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
       *
       * @alternative
       * @method off(eventMap: Object): this
       * Removes a set of type/listener pairs.
       *
       * @alternative
       * @method off: this
       * Removes all listeners to all events on the object. This includes implicitly attached events.
       */
      off: function(t, e, i) {
        if (!arguments.length)
          delete this._events;
        else if (typeof t == "object")
          for (var n in t)
            this._off(n, t[n], e);
        else {
          t = S(t);
          for (var o = arguments.length === 1, h = 0, c = t.length; h < c; h++)
            o ? this._off(t[h]) : this._off(t[h], e, i);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(t, e, i, n) {
        if (typeof e != "function") {
          console.warn("wrong listener type: " + typeof e);
          return;
        }
        if (this._listens(t, e, i) === !1) {
          i === this && (i = void 0);
          var o = { fn: e, ctx: i };
          n && (o.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(o);
        }
      },
      _off: function(t, e, i) {
        var n, o, h;
        if (this._events && (n = this._events[t], !!n)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (o = 0, h = n.length; o < h; o++)
                n[o].fn = v;
            delete this._events[t];
            return;
          }
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          var c = this._listens(t, e, i);
          if (c !== !1) {
            var _ = n[c];
            this._firingCount && (_.fn = v, this._events[t] = n = n.slice()), n.splice(c, 1);
          }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide a data
      // object — the first argument of the listener function will contain its
      // properties. The event can optionally be propagated to event parents.
      fire: function(t, e, i) {
        if (!this.listens(t, i))
          return this;
        var n = l({}, e, {
          type: t,
          target: this,
          sourceTarget: e && e.sourceTarget || this
        });
        if (this._events) {
          var o = this._events[t];
          if (o) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var h = 0, c = o.length; h < c; h++) {
              var _ = o[h], p = _.fn;
              _.once && this.off(t, p, _.ctx), p.call(_.ctx || this, n);
            }
            this._firingCount--;
          }
        }
        return i && this._propagateEvent(n), this;
      },
      // @method listens(type: String, propagate?: Boolean): Boolean
      // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
      listens: function(t, e, i, n) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var o = e;
        typeof e != "function" && (n = !!e, o = void 0, i = void 0);
        var h = this._events && this._events[t];
        if (h && h.length && this._listens(t, o, i) !== !1)
          return !0;
        if (n) {
          for (var c in this._eventParents)
            if (this._eventParents[c].listens(t, e, i, n))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(t, e, i) {
        if (!this._events)
          return !1;
        var n = this._events[t] || [];
        if (!e)
          return !!n.length;
        i === this && (i = void 0);
        for (var o = 0, h = n.length; o < h; o++)
          if (n[o].fn === e && n[o].ctx === i)
            return o;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(t, e, i) {
        if (typeof t == "object")
          for (var n in t)
            this._on(n, t[n], e, !0);
        else {
          t = S(t);
          for (var o = 0, h = t.length; o < h; o++)
            this._on(t[o], e, i, !0);
        }
        return this;
      },
      // @method addEventParent(obj: Evented): this
      // Adds an event parent - an `Evented` that will receive propagated events
      addEventParent: function(t) {
        return this._eventParents = this._eventParents || {}, this._eventParents[w(t)] = t, this;
      },
      // @method removeEventParent(obj: Evented): this
      // Removes an event parent, so it will stop receiving propagated events
      removeEventParent: function(t) {
        return this._eventParents && delete this._eventParents[w(t)], this;
      },
      _propagateEvent: function(t) {
        for (var e in this._eventParents)
          this._eventParents[e].fire(t.type, l({
            layer: t.target,
            propagatedFrom: t.target
          }, t), !0);
      }
    };
    rt.addEventListener = rt.on, rt.removeEventListener = rt.clearAllEventListeners = rt.off, rt.addOneTimeEventListener = rt.once, rt.fireEvent = rt.fire, rt.hasEventListeners = rt.listens;
    var Xt = xt.extend(rt);
    function O(t, e, i) {
      this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
    }
    var tn = Math.trunc || function(t) {
      return t > 0 ? Math.floor(t) : Math.ceil(t);
    };
    O.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new O(this.x, this.y);
      },
      // @method add(otherPoint: Point): Point
      // Returns the result of addition of the current and the given points.
      add: function(t) {
        return this.clone()._add(C(t));
      },
      _add: function(t) {
        return this.x += t.x, this.y += t.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(t) {
        return this.clone()._subtract(C(t));
      },
      _subtract: function(t) {
        return this.x -= t.x, this.y -= t.y, this;
      },
      // @method divideBy(num: Number): Point
      // Returns the result of division of the current point by the given number.
      divideBy: function(t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function(t) {
        return this.x /= t, this.y /= t, this;
      },
      // @method multiplyBy(num: Number): Point
      // Returns the result of multiplication of the current point by the given number.
      multiplyBy: function(t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function(t) {
        return this.x *= t, this.y *= t, this;
      },
      // @method scaleBy(scale: Point): Point
      // Multiply each coordinate of the current point by each coordinate of
      // `scale`. In linear algebra terms, multiply the point by the
      // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
      // defined by `scale`.
      scaleBy: function(t) {
        return new O(this.x * t.x, this.y * t.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(t) {
        return new O(this.x / t.x, this.y / t.y);
      },
      // @method round(): Point
      // Returns a copy of the current point with rounded coordinates.
      round: function() {
        return this.clone()._round();
      },
      _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      },
      // @method floor(): Point
      // Returns a copy of the current point with floored coordinates (rounded down).
      floor: function() {
        return this.clone()._floor();
      },
      _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      },
      // @method ceil(): Point
      // Returns a copy of the current point with ceiled coordinates (rounded up).
      ceil: function() {
        return this.clone()._ceil();
      },
      _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      },
      // @method trunc(): Point
      // Returns a copy of the current point with truncated coordinates (rounded towards zero).
      trunc: function() {
        return this.clone()._trunc();
      },
      _trunc: function() {
        return this.x = tn(this.x), this.y = tn(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(t) {
        t = C(t);
        var e = t.x - this.x, i = t.y - this.y;
        return Math.sqrt(e * e + i * i);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(t) {
        return t = C(t), t.x === this.x && t.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(t) {
        return t = C(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + N(this.x) + ", " + N(this.y) + ")";
      }
    };
    function C(t, e, i) {
      return t instanceof O ? t : q(t) ? new O(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new O(t.x, t.y) : new O(t, e, i);
    }
    function H(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
          this.extend(i[n]);
    }
    H.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e, i;
        if (!t)
          return this;
        if (t instanceof O || typeof t[0] == "number" || "x" in t)
          e = i = C(t);
        else if (t = nt(t), e = t.min, i = t.max, !e || !i)
          return this;
        return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(t) {
        return C(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return C(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return C(this.max.x, this.min.y);
      },
      // @method getTopLeft(): Point
      // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
      getTopLeft: function() {
        return this.min;
      },
      // @method getBottomRight(): Point
      // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
      getBottomRight: function() {
        return this.max;
      },
      // @method getSize(): Point
      // Returns the size of the given bounds
      getSize: function() {
        return this.max.subtract(this.min);
      },
      // @method contains(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains(point: Point): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        var e, i;
        return typeof t[0] == "number" || t instanceof O ? t = C(t) : t = nt(t), t instanceof H ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(t) {
        t = nt(t);
        var e = this.min, i = this.max, n = t.min, o = t.max, h = o.x >= e.x && n.x <= i.x, c = o.y >= e.y && n.y <= i.y;
        return h && c;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(t) {
        t = nt(t);
        var e = this.min, i = this.max, n = t.min, o = t.max, h = o.x > e.x && n.x < i.x, c = o.y > e.y && n.y < i.y;
        return h && c;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this.min && this.max);
      },
      // @method pad(bufferRatio: Number): Bounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this.min, i = this.max, n = Math.abs(e.x - i.x) * t, o = Math.abs(e.y - i.y) * t;
        return nt(
          C(e.x - n, e.y - o),
          C(i.x + n, i.y + o)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(t) {
        return t ? (t = nt(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
      }
    };
    function nt(t, e) {
      return !t || t instanceof H ? t : new H(t, e);
    }
    function ot(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
          this.extend(i[n]);
    }
    ot.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e = this._southWest, i = this._northEast, n, o;
        if (t instanceof D)
          n = t, o = t;
        else if (t instanceof ot) {
          if (n = t._southWest, o = t._northEast, !n || !o)
            return this;
        } else
          return t ? this.extend(B(t) || V(t)) : this;
        return !e && !i ? (this._southWest = new D(n.lat, n.lng), this._northEast = new D(o.lat, o.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(o.lat, i.lat), i.lng = Math.max(o.lng, i.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, o = Math.abs(e.lng - i.lng) * t;
        return new ot(
          new D(e.lat - n, e.lng - o),
          new D(i.lat + n, i.lng + o)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new D(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      // @method getSouthWest(): LatLng
      // Returns the south-west point of the bounds.
      getSouthWest: function() {
        return this._southWest;
      },
      // @method getNorthEast(): LatLng
      // Returns the north-east point of the bounds.
      getNorthEast: function() {
        return this._northEast;
      },
      // @method getNorthWest(): LatLng
      // Returns the north-west point of the bounds.
      getNorthWest: function() {
        return new D(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new D(this.getSouth(), this.getEast());
      },
      // @method getWest(): Number
      // Returns the west longitude of the bounds
      getWest: function() {
        return this._southWest.lng;
      },
      // @method getSouth(): Number
      // Returns the south latitude of the bounds
      getSouth: function() {
        return this._southWest.lat;
      },
      // @method getEast(): Number
      // Returns the east longitude of the bounds
      getEast: function() {
        return this._northEast.lng;
      },
      // @method getNorth(): Number
      // Returns the north latitude of the bounds
      getNorth: function() {
        return this._northEast.lat;
      },
      // @method contains(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains (latlng: LatLng): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        typeof t[0] == "number" || t instanceof D || "lat" in t ? t = B(t) : t = V(t);
        var e = this._southWest, i = this._northEast, n, o;
        return t instanceof ot ? (n = t.getSouthWest(), o = t.getNorthEast()) : n = o = t, n.lat >= e.lat && o.lat <= i.lat && n.lng >= e.lng && o.lng <= i.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(t) {
        t = V(t);
        var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), h = o.lat >= e.lat && n.lat <= i.lat, c = o.lng >= e.lng && n.lng <= i.lng;
        return h && c;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(t) {
        t = V(t);
        var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), h = o.lat > e.lat && n.lat < i.lat, c = o.lng > e.lng && n.lng < i.lng;
        return h && c;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        return t ? (t = V(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function V(t, e) {
      return t instanceof ot ? t : new ot(t, e);
    }
    function D(t, e, i) {
      if (isNaN(t) || isNaN(e))
        throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
      this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i);
    }
    D.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        if (!t)
          return !1;
        t = B(t);
        var i = Math.max(
          Math.abs(this.lat - t.lat),
          Math.abs(this.lng - t.lng)
        );
        return i <= (e === void 0 ? 1e-9 : e);
      },
      // @method toString(): String
      // Returns a string representation of the point (for debugging purposes).
      toString: function(t) {
        return "LatLng(" + N(this.lat, t) + ", " + N(this.lng, t) + ")";
      },
      // @method distanceTo(otherLatLng: LatLng): Number
      // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
      distanceTo: function(t) {
        return Et.distance(this, B(t));
      },
      // @method wrap(): LatLng
      // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
      wrap: function() {
        return Et.wrapLatLng(this);
      },
      // @method toBounds(sizeInMeters: Number): LatLngBounds
      // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
      toBounds: function(t) {
        var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
        return V(
          [this.lat - e, this.lng - i],
          [this.lat + e, this.lng + i]
        );
      },
      clone: function() {
        return new D(this.lat, this.lng, this.alt);
      }
    };
    function B(t, e, i) {
      return t instanceof D ? t : q(t) && typeof t[0] != "object" ? t.length === 3 ? new D(t[0], t[1], t[2]) : t.length === 2 ? new D(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new D(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new D(t, e, i);
    }
    var Pt = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(t, e) {
        var i = this.projection.project(t), n = this.scale(e);
        return this.transformation._transform(i, n);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(t, e) {
        var i = this.scale(e), n = this.transformation.untransform(t, i);
        return this.projection.unproject(n);
      },
      // @method project(latlng: LatLng): Point
      // Projects geographical coordinates into coordinates in units accepted for
      // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
      project: function(t) {
        return this.projection.project(t);
      },
      // @method unproject(point: Point): LatLng
      // Given a projected coordinate returns the corresponding LatLng.
      // The inverse of `project`.
      unproject: function(t) {
        return this.projection.unproject(t);
      },
      // @method scale(zoom: Number): Number
      // Returns the scale used when transforming projected coordinates into
      // pixel coordinates for a particular zoom. For example, it returns
      // `256 * 2^zoom` for Mercator-based CRS.
      scale: function(t) {
        return 256 * Math.pow(2, t);
      },
      // @method zoom(scale: Number): Number
      // Inverse of `scale()`, returns the zoom level corresponding to a scale
      // factor of `scale`.
      zoom: function(t) {
        return Math.log(t / 256) / Math.LN2;
      },
      // @method getProjectedBounds(zoom: Number): Bounds
      // Returns the projection's bounds scaled and transformed for the provided `zoom`.
      getProjectedBounds: function(t) {
        if (this.infinite)
          return null;
        var e = this.projection.bounds, i = this.scale(t), n = this.transformation.transform(e.min, i), o = this.transformation.transform(e.max, i);
        return new H(n, o);
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates.
      // @property code: String
      // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
      //
      // @property wrapLng: Number[]
      // An array of two numbers defining whether the longitude (horizontal) coordinate
      // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
      // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
      //
      // @property wrapLat: Number[]
      // Like `wrapLng`, but for the latitude (vertical) axis.
      // wrapLng: [min, max],
      // wrapLat: [min, max],
      // @property infinite: Boolean
      // If true, the coordinate space will be unbounded (infinite in both axes)
      infinite: !1,
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where lat and lng has been wrapped according to the
      // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
      wrapLatLng: function(t) {
        var e = this.wrapLng ? x(t.lng, this.wrapLng, !0) : t.lng, i = this.wrapLat ? x(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
        return new D(i, e, n);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(t) {
        var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat, o = e.lng - i.lng;
        if (n === 0 && o === 0)
          return t;
        var h = t.getSouthWest(), c = t.getNorthEast(), _ = new D(h.lat - n, h.lng - o), p = new D(c.lat - n, c.lng - o);
        return new ot(_, p);
      }
    }, Et = l({}, Pt, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see https://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(t, e) {
        var i = Math.PI / 180, n = t.lat * i, o = e.lat * i, h = Math.sin((e.lat - t.lat) * i / 2), c = Math.sin((e.lng - t.lng) * i / 2), _ = h * h + Math.cos(n) * Math.cos(o) * c * c, p = 2 * Math.atan2(Math.sqrt(_), Math.sqrt(1 - _));
        return this.R * p;
      }
    }), en = 6378137, ei = {
      R: en,
      MAX_LATITUDE: 85.0511287798,
      project: function(t) {
        var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), o = Math.sin(n * e);
        return new O(
          this.R * t.lng * e,
          this.R * Math.log((1 + o) / (1 - o)) / 2
        );
      },
      unproject: function(t) {
        var e = 180 / Math.PI;
        return new D(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
          t.x * e / this.R
        );
      },
      bounds: function() {
        var t = en * Math.PI;
        return new H([-t, -t], [t, t]);
      }()
    };
    function ii(t, e, i, n) {
      if (q(t)) {
        this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
        return;
      }
      this._a = t, this._b = e, this._c = i, this._d = n;
    }
    ii.prototype = {
      // @method transform(point: Point, scale?: Number): Point
      // Returns a transformed point, optionally multiplied by the given scale.
      // Only accepts actual `L.Point` instances, not arrays.
      transform: function(t, e) {
        return this._transform(t.clone(), e);
      },
      // destructive transform (faster)
      _transform: function(t, e) {
        return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
      },
      // @method untransform(point: Point, scale?: Number): Point
      // Returns the reverse transformation of the given point, optionally divided
      // by the given scale. Only accepts actual `L.Point` instances, not arrays.
      untransform: function(t, e) {
        return e = e || 1, new O(
          (t.x / e - this._b) / this._a,
          (t.y / e - this._d) / this._c
        );
      }
    };
    function Yt(t, e, i, n) {
      return new ii(t, e, i, n);
    }
    var ni = l({}, Et, {
      code: "EPSG:3857",
      projection: ei,
      transformation: function() {
        var t = 0.5 / (Math.PI * ei.R);
        return Yt(t, 0.5, -t, 0.5);
      }()
    }), es = l({}, ni, {
      code: "EPSG:900913"
    });
    function nn(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function on(t, e) {
      var i = "", n, o, h, c, _, p;
      for (n = 0, h = t.length; n < h; n++) {
        for (_ = t[n], o = 0, c = _.length; o < c; o++)
          p = _[o], i += (o ? "L" : "M") + p.x + " " + p.y;
        i += e ? M.svg ? "z" : "x" : "";
      }
      return i || "M0 0";
    }
    var oi = document.documentElement.style, ye = "ActiveXObject" in window, is = ye && !document.addEventListener, sn = "msLaunchUri" in navigator && !("documentMode" in document), si = pt("webkit"), rn = pt("android"), an = pt("android 2") || pt("android 3"), ns = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), os = rn && pt("Google") && ns < 537 && !("AudioNode" in window), ri = !!window.opera, hn = !sn && pt("chrome"), un = pt("gecko") && !si && !ri && !ye, ss = !hn && pt("safari"), ln = pt("phantom"), cn = "OTransition" in oi, rs = navigator.platform.indexOf("Win") === 0, fn = ye && "transition" in oi, ai = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !an, dn = "MozPerspective" in oi, as = !window.L_DISABLE_3D && (fn || ai || dn) && !cn && !ln, Qt = typeof orientation < "u" || pt("mobile"), hs = Qt && si, us = Qt && ai, _n = !window.PointerEvent && window.MSPointerEvent, pn = !!(window.PointerEvent || _n), mn = "ontouchstart" in window || !!window.TouchEvent, ls = !window.L_NO_TOUCH && (mn || pn), cs = Qt && ri, fs = Qt && un, ds = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, _s = function() {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function() {
            t = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", v, e), window.removeEventListener("testPassiveEventSupport", v, e);
      } catch {
      }
      return t;
    }(), ps = function() {
      return !!document.createElement("canvas").getContext;
    }(), hi = !!(document.createElementNS && nn("svg").createSVGRect), ms = !!hi && function() {
      var t = document.createElement("div");
      return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), gs = !hi && function() {
      try {
        var t = document.createElement("div");
        t.innerHTML = '<v:shape adj="1"/>';
        var e = t.firstChild;
        return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
      } catch {
        return !1;
      }
    }(), vs = navigator.platform.indexOf("Mac") === 0, ys = navigator.platform.indexOf("Linux") === 0;
    function pt(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var M = {
      ie: ye,
      ielt9: is,
      edge: sn,
      webkit: si,
      android: rn,
      android23: an,
      androidStock: os,
      opera: ri,
      chrome: hn,
      gecko: un,
      safari: ss,
      phantom: ln,
      opera12: cn,
      win: rs,
      ie3d: fn,
      webkit3d: ai,
      gecko3d: dn,
      any3d: as,
      mobile: Qt,
      mobileWebkit: hs,
      mobileWebkit3d: us,
      msPointer: _n,
      pointer: pn,
      touch: ls,
      touchNative: mn,
      mobileOpera: cs,
      mobileGecko: fs,
      retina: ds,
      passiveEvents: _s,
      canvas: ps,
      svg: hi,
      vml: gs,
      inlineSvg: ms,
      mac: vs,
      linux: ys
    }, gn = M.msPointer ? "MSPointerDown" : "pointerdown", vn = M.msPointer ? "MSPointerMove" : "pointermove", yn = M.msPointer ? "MSPointerUp" : "pointerup", wn = M.msPointer ? "MSPointerCancel" : "pointercancel", ui = {
      touchstart: gn,
      touchmove: vn,
      touchend: yn,
      touchcancel: wn
    }, xn = {
      touchstart: bs,
      touchmove: we,
      touchend: we,
      touchcancel: we
    }, Nt = {}, Pn = !1;
    function ws(t, e, i) {
      return e === "touchstart" && Ts(), xn[e] ? (i = xn[e].bind(this, i), t.addEventListener(ui[e], i, !1), i) : (console.warn("wrong event specified:", e), v);
    }
    function xs(t, e, i) {
      if (!ui[e]) {
        console.warn("wrong event specified:", e);
        return;
      }
      t.removeEventListener(ui[e], i, !1);
    }
    function Ps(t) {
      Nt[t.pointerId] = t;
    }
    function Ls(t) {
      Nt[t.pointerId] && (Nt[t.pointerId] = t);
    }
    function Ln(t) {
      delete Nt[t.pointerId];
    }
    function Ts() {
      Pn || (document.addEventListener(gn, Ps, !0), document.addEventListener(vn, Ls, !0), document.addEventListener(yn, Ln, !0), document.addEventListener(wn, Ln, !0), Pn = !0);
    }
    function we(t, e) {
      if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
        e.touches = [];
        for (var i in Nt)
          e.touches.push(Nt[i]);
        e.changedTouches = [e], t(e);
      }
    }
    function bs(t, e) {
      e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && Y(e), we(t, e);
    }
    function Ms(t) {
      var e = {}, i, n;
      for (n in t)
        i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
      return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
    }
    var Ss = 200;
    function Es(t, e) {
      t.addEventListener("dblclick", e);
      var i = 0, n;
      function o(h) {
        if (h.detail !== 1) {
          n = h.detail;
          return;
        }
        if (!(h.pointerType === "mouse" || h.sourceCapabilities && !h.sourceCapabilities.firesTouchEvents)) {
          var c = En(h);
          if (!(c.some(function(p) {
            return p instanceof HTMLLabelElement && p.attributes.for;
          }) && !c.some(function(p) {
            return p instanceof HTMLInputElement || p instanceof HTMLSelectElement;
          }))) {
            var _ = Date.now();
            _ - i <= Ss ? (n++, n === 2 && e(Ms(h))) : n = 1, i = _;
          }
        }
      }
      return t.addEventListener("click", o), {
        dblclick: e,
        simDblclick: o
      };
    }
    function Cs(t, e) {
      t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
    }
    var li = Le(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), te = Le(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), Tn = te === "webkitTransition" || te === "OTransition" ? te + "End" : "transitionend";
    function bn(t) {
      return typeof t == "string" ? document.getElementById(t) : t;
    }
    function ee(t, e) {
      var i = t.style[e] || t.currentStyle && t.currentStyle[e];
      if ((!i || i === "auto") && document.defaultView) {
        var n = document.defaultView.getComputedStyle(t, null);
        i = n ? n[e] : null;
      }
      return i === "auto" ? null : i;
    }
    function Z(t, e, i) {
      var n = document.createElement(t);
      return n.className = e || "", i && i.appendChild(n), n;
    }
    function U(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function xe(t) {
      for (; t.firstChild; )
        t.removeChild(t.firstChild);
    }
    function Dt(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function Ft(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function ci(t, e) {
      if (t.classList !== void 0)
        return t.classList.contains(e);
      var i = Pe(t);
      return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
    }
    function z(t, e) {
      if (t.classList !== void 0)
        for (var i = S(e), n = 0, o = i.length; n < o; n++)
          t.classList.add(i[n]);
      else if (!ci(t, e)) {
        var h = Pe(t);
        fi(t, (h ? h + " " : "") + e);
      }
    }
    function W(t, e) {
      t.classList !== void 0 ? t.classList.remove(e) : fi(t, Q((" " + Pe(t) + " ").replace(" " + e + " ", " ")));
    }
    function fi(t, e) {
      t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
    }
    function Pe(t) {
      return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
    }
    function ht(t, e) {
      "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && Os(t, e);
    }
    function Os(t, e) {
      var i = !1, n = "DXImageTransform.Microsoft.Alpha";
      try {
        i = t.filters.item(n);
      } catch {
        if (e === 1)
          return;
      }
      e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
    }
    function Le(t) {
      for (var e = document.documentElement.style, i = 0; i < t.length; i++)
        if (t[i] in e)
          return t[i];
      return !1;
    }
    function At(t, e, i) {
      var n = e || new O(0, 0);
      t.style[li] = (M.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
    }
    function G(t, e) {
      t._leaflet_pos = e, M.any3d ? At(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
    }
    function Bt(t) {
      return t._leaflet_pos || new O(0, 0);
    }
    var ie, ne, di;
    if ("onselectstart" in document)
      ie = function() {
        k(window, "selectstart", Y);
      }, ne = function() {
        F(window, "selectstart", Y);
      };
    else {
      var oe = Le(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      ie = function() {
        if (oe) {
          var t = document.documentElement.style;
          di = t[oe], t[oe] = "none";
        }
      }, ne = function() {
        oe && (document.documentElement.style[oe] = di, di = void 0);
      };
    }
    function _i() {
      k(window, "dragstart", Y);
    }
    function pi() {
      F(window, "dragstart", Y);
    }
    var Te, mi;
    function gi(t) {
      for (; t.tabIndex === -1; )
        t = t.parentNode;
      t.style && (be(), Te = t, mi = t.style.outlineStyle, t.style.outlineStyle = "none", k(window, "keydown", be));
    }
    function be() {
      Te && (Te.style.outlineStyle = mi, Te = void 0, mi = void 0, F(window, "keydown", be));
    }
    function Mn(t) {
      do
        t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function vi(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e
      };
    }
    var ks = {
      __proto__: null,
      TRANSFORM: li,
      TRANSITION: te,
      TRANSITION_END: Tn,
      get: bn,
      getStyle: ee,
      create: Z,
      remove: U,
      empty: xe,
      toFront: Dt,
      toBack: Ft,
      hasClass: ci,
      addClass: z,
      removeClass: W,
      setClass: fi,
      getClass: Pe,
      setOpacity: ht,
      testProp: Le,
      setTransform: At,
      setPosition: G,
      getPosition: Bt,
      get disableTextSelection() {
        return ie;
      },
      get enableTextSelection() {
        return ne;
      },
      disableImageDrag: _i,
      enableImageDrag: pi,
      preventOutline: gi,
      restoreOutline: be,
      getSizedParentNode: Mn,
      getScale: vi
    };
    function k(t, e, i, n) {
      if (e && typeof e == "object")
        for (var o in e)
          wi(t, o, e[o], i);
      else {
        e = S(e);
        for (var h = 0, c = e.length; h < c; h++)
          wi(t, e[h], i, n);
      }
      return this;
    }
    var mt = "_leaflet_events";
    function F(t, e, i, n) {
      if (arguments.length === 1)
        Sn(t), delete t[mt];
      else if (e && typeof e == "object")
        for (var o in e)
          xi(t, o, e[o], i);
      else if (e = S(e), arguments.length === 2)
        Sn(t, function(_) {
          return $t(e, _) !== -1;
        });
      else
        for (var h = 0, c = e.length; h < c; h++)
          xi(t, e[h], i, n);
      return this;
    }
    function Sn(t, e) {
      for (var i in t[mt]) {
        var n = i.split(/\d/)[0];
        (!e || e(n)) && xi(t, n, null, null, i);
      }
    }
    var yi = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function wi(t, e, i, n) {
      var o = e + w(i) + (n ? "_" + w(n) : "");
      if (t[mt] && t[mt][o])
        return this;
      var h = function(_) {
        return i.call(n || t, _ || window.event);
      }, c = h;
      !M.touchNative && M.pointer && e.indexOf("touch") === 0 ? h = ws(t, e, h) : M.touch && e === "dblclick" ? h = Es(t, h) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(yi[e] || e, h, M.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (h = function(_) {
        _ = _ || window.event, Li(t, _) && c(_);
      }, t.addEventListener(yi[e], h, !1)) : t.addEventListener(e, c, !1) : t.attachEvent("on" + e, h), t[mt] = t[mt] || {}, t[mt][o] = h;
    }
    function xi(t, e, i, n, o) {
      o = o || e + w(i) + (n ? "_" + w(n) : "");
      var h = t[mt] && t[mt][o];
      if (!h)
        return this;
      !M.touchNative && M.pointer && e.indexOf("touch") === 0 ? xs(t, e, h) : M.touch && e === "dblclick" ? Cs(t, h) : "removeEventListener" in t ? t.removeEventListener(yi[e] || e, h, !1) : t.detachEvent("on" + e, h), t[mt][o] = null;
    }
    function Rt(t) {
      return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
    }
    function Pi(t) {
      return wi(t, "wheel", Rt), this;
    }
    function se(t) {
      return k(t, "mousedown touchstart dblclick contextmenu", Rt), t._leaflet_disable_click = !0, this;
    }
    function Y(t) {
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
    }
    function It(t) {
      return Y(t), Rt(t), this;
    }
    function En(t) {
      if (t.composedPath)
        return t.composedPath();
      for (var e = [], i = t.target; i; )
        e.push(i), i = i.parentNode;
      return e;
    }
    function Cn(t, e) {
      if (!e)
        return new O(t.clientX, t.clientY);
      var i = vi(e), n = i.boundingClientRect;
      return new O(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (t.clientX - n.left) / i.x - e.clientLeft,
        (t.clientY - n.top) / i.y - e.clientTop
      );
    }
    var zs = M.linux && M.chrome ? window.devicePixelRatio : M.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function On(t) {
      return M.edge ? t.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        t.deltaY && t.deltaMode === 0 ? -t.deltaY / zs : (
          // Pixels
          t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
            // Lines
            t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
              // Pages
              t.deltaX || t.deltaZ ? 0 : (
                // Skip horizontal/depth wheel events
                t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
                  // Legacy IE pixels
                  t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                    // Legacy Moz lines
                    t.detail ? t.detail / -32765 * 60 : (
                      // Legacy Moz pages
                      0
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    function Li(t, e) {
      var i = e.relatedTarget;
      if (!i)
        return !0;
      try {
        for (; i && i !== t; )
          i = i.parentNode;
      } catch {
        return !1;
      }
      return i !== t;
    }
    var As = {
      __proto__: null,
      on: k,
      off: F,
      stopPropagation: Rt,
      disableScrollPropagation: Pi,
      disableClickPropagation: se,
      preventDefault: Y,
      stop: It,
      getPropagationPath: En,
      getMousePosition: Cn,
      getWheelDelta: On,
      isExternalTarget: Li,
      addListener: k,
      removeListener: F
    }, kn = Xt.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(t, e, i, n) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = Bt(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = it(this._animate, this), this._step();
      },
      _step: function(t) {
        var e = +/* @__PURE__ */ new Date() - this._startTime, i = this._duration * 1e3;
        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(t, e) {
        var i = this._startPos.add(this._offset.multiplyBy(t));
        e && i._round(), G(this._el, i), this.fire("step");
      },
      _complete: function() {
        at(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }), R = Xt.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: ni,
        // @option center: LatLng = undefined
        // Initial geographic center of the map
        center: void 0,
        // @option zoom: Number = undefined
        // Initial map zoom level
        zoom: void 0,
        // @option minZoom: Number = *
        // Minimum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the lowest of their `minZoom` options will be used instead.
        minZoom: void 0,
        // @option maxZoom: Number = *
        // Maximum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the highest of their `maxZoom` options will be used instead.
        maxZoom: void 0,
        // @option layers: Layer[] = []
        // Array of layers that will be added to the map initially
        layers: [],
        // @option maxBounds: LatLngBounds = null
        // When this option is set, the map restricts the view to the given
        // geographical bounds, bouncing the user back if the user tries to pan
        // outside the view. To set the restriction dynamically, use
        // [`setMaxBounds`](#map-setmaxbounds) method.
        maxBounds: void 0,
        // @option renderer: Renderer = *
        // The default method for drawing vector layers on the map. `L.SVG`
        // or `L.Canvas` by default depending on browser support.
        renderer: void 0,
        // @section Animation Options
        // @option zoomAnimation: Boolean = true
        // Whether the map zoom animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        zoomAnimation: !0,
        // @option zoomAnimationThreshold: Number = 4
        // Won't animate zoom if the zoom difference exceeds this value.
        zoomAnimationThreshold: 4,
        // @option fadeAnimation: Boolean = true
        // Whether the tile fade animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        fadeAnimation: !0,
        // @option markerZoomAnimation: Boolean = true
        // Whether markers animate their zoom with the zoom animation, if disabled
        // they will disappear for the length of the animation. By default it's
        // enabled in all browsers that support CSS3 Transitions except Android.
        markerZoomAnimation: !0,
        // @option transform3DLimit: Number = 2^23
        // Defines the maximum size of a CSS translation transform. The default
        // value should not be changed unless a web browser positions layers in
        // the wrong place after doing a large `panBy`.
        transform3DLimit: 8388608,
        // Precision limit of a 32-bit float
        // @section Interaction Options
        // @option zoomSnap: Number = 1
        // Forces the map's zoom level to always be a multiple of this, particularly
        // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
        // By default, the zoom level snaps to the nearest integer; lower values
        // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
        // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
        zoomSnap: 1,
        // @option zoomDelta: Number = 1
        // Controls how much the map's zoom level will change after a
        // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
        // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
        // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
        zoomDelta: 1,
        // @option trackResize: Boolean = true
        // Whether the map automatically handles browser window resize to update itself.
        trackResize: !0
      },
      initialize: function(t, e) {
        e = P(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = f(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(B(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = te && M.any3d && !M.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), k(this._proxy, Tn, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(t, e, i) {
        if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(B(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
          i.animate !== void 0 && (i.zoom = l({ animate: i.animate }, i.zoom), i.pan = l({ animate: i.animate, duration: i.duration }, i.pan));
          var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
          if (n)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(t, e) {
        return t = t || (M.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(t, e) {
        return t = t || (M.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(t, e, i) {
        var n = this.getZoomScale(e), o = this.getSize().divideBy(2), h = t instanceof O ? t : this.latLngToContainerPoint(t), c = h.subtract(o).multiplyBy(1 - 1 / n), _ = this.containerPointToLatLng(o.add(c));
        return this.setView(_, e, { zoom: i });
      },
      _getBoundsCenterZoom: function(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : V(t);
        var i = C(e.paddingTopLeft || e.padding || [0, 0]), n = C(e.paddingBottomRight || e.padding || [0, 0]), o = this.getBoundsZoom(t, !1, i.add(n));
        if (o = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, o) : o, o === 1 / 0)
          return {
            center: t.getCenter(),
            zoom: o
          };
        var h = n.subtract(i).divideBy(2), c = this.project(t.getSouthWest(), o), _ = this.project(t.getNorthEast(), o), p = this.unproject(c.add(_).divideBy(2).add(h), o);
        return {
          center: p,
          zoom: o
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(t, e) {
        if (t = V(t), !t.isValid())
          throw new Error("Bounds are not valid.");
        var i = this._getBoundsCenterZoom(t, e);
        return this.setView(i.center, i.zoom, e);
      },
      // @method fitWorld(options?: fitBounds options): this
      // Sets a map view that mostly contains the whole world with the maximum
      // zoom level possible.
      fitWorld: function(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      },
      // @method panTo(latlng: LatLng, options?: Pan options): this
      // Pans the map to a given center.
      panTo: function(t, e) {
        return this.setView(t, this._zoom, { pan: e });
      },
      // @method panBy(offset: Point, options?: Pan options): this
      // Pans the map by a given number of pixels (animated).
      panBy: function(t, e) {
        if (t = C(t).round(), e = e || {}, !t.x && !t.y)
          return this.fire("moveend");
        if (e.animate !== !0 && !this.getSize().contains(t))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new kn(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
          z(this._mapPane, "leaflet-pan-anim");
          var i = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
        } else
          this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(t, e, i) {
        if (i = i || {}, i.animate === !1 || !M.any3d)
          return this.setView(t, e, i);
        this._stop();
        var n = this.project(this.getCenter()), o = this.project(t), h = this.getSize(), c = this._zoom;
        t = B(t), e = e === void 0 ? c : e;
        var _ = Math.max(h.x, h.y), p = _ * this.getZoomScale(c, e), y = o.distanceTo(n) || 1, T = 1.42, E = T * T;
        function A(K) {
          var Ze = K ? -1 : 1, xr = K ? p : _, Pr = p * p - _ * _ + Ze * E * E * y * y, Lr = 2 * xr * E * y, Bi = Pr / Lr, co = Math.sqrt(Bi * Bi + 1) - Bi, Tr = co < 1e-9 ? -18 : Math.log(co);
          return Tr;
        }
        function et(K) {
          return (Math.exp(K) - Math.exp(-K)) / 2;
        }
        function $(K) {
          return (Math.exp(K) + Math.exp(-K)) / 2;
        }
        function lt(K) {
          return et(K) / $(K);
        }
        var st = A(0);
        function Vt(K) {
          return _ * ($(st) / $(st + T * K));
        }
        function gr(K) {
          return _ * ($(st) * lt(st + T * K) - et(st)) / E;
        }
        function vr(K) {
          return 1 - Math.pow(1 - K, 1.5);
        }
        var yr = Date.now(), uo = (A(1) - st) / T, wr = i.duration ? 1e3 * i.duration : 1e3 * uo * 0.8;
        function lo() {
          var K = (Date.now() - yr) / wr, Ze = vr(K) * uo;
          K <= 1 ? (this._flyToFrame = it(lo, this), this._move(
            this.unproject(n.add(o.subtract(n).multiplyBy(gr(Ze) / y)), c),
            this.getScaleZoom(_ / Vt(Ze), c),
            { flyTo: !0 }
          )) : this._move(t, e)._moveEnd(!0);
        }
        return this._moveStart(!0, i.noMoveStart), lo.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(t, e) {
        var i = this._getBoundsCenterZoom(t, e);
        return this.flyTo(i.center, i.zoom, e);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(t) {
        return t = V(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      // @method setMinZoom(zoom: Number): this
      // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
      setMinZoom: function(t) {
        var e = this.options.minZoom;
        return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
      },
      // @method setMaxZoom(zoom: Number): this
      // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
      setMaxZoom: function(t) {
        var e = this.options.maxZoom;
        return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
      },
      // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
      // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
      panInsideBounds: function(t, e) {
        this._enforcingBounds = !0;
        var i = this.getCenter(), n = this._limitCenter(i, this._zoom, V(t));
        return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(t, e) {
        e = e || {};
        var i = C(e.paddingTopLeft || e.padding || [0, 0]), n = C(e.paddingBottomRight || e.padding || [0, 0]), o = this.project(this.getCenter()), h = this.project(t), c = this.getPixelBounds(), _ = nt([c.min.add(i), c.max.subtract(n)]), p = _.getSize();
        if (!_.contains(h)) {
          this._enforcingBounds = !0;
          var y = h.subtract(_.getCenter()), T = _.extend(h).getSize().subtract(p);
          o.x += y.x < 0 ? -T.x : T.x, o.y += y.y < 0 ? -T.y : T.y, this.panTo(this.unproject(o), e), this._enforcingBounds = !1;
        }
        return this;
      },
      // @method invalidateSize(options: Zoom/pan options): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default. If `options.pan` is `false`, panning will not occur.
      // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
      // that it doesn't happen often even if the method is called many
      // times in a row.
      // @alternative
      // @method invalidateSize(animate: Boolean): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default.
      invalidateSize: function(t) {
        if (!this._loaded)
          return this;
        t = l({
          animate: !1,
          pan: !0
        }, t === !0 ? { animate: !0 } : t);
        var e = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var i = this.getSize(), n = e.divideBy(2).round(), o = i.divideBy(2).round(), h = n.subtract(o);
        return !h.x && !h.y ? this : (t.animate && t.pan ? this.panBy(h) : (t.pan && this._rawPanBy(h), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(f(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: e,
          newSize: i
        }));
      },
      // @section Methods for modifying map state
      // @method stop(): this
      // Stops the currently running `panTo` or `flyTo` animation, if any.
      stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      // @section Geolocation methods
      // @method locate(options?: Locate options): this
      // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
      // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
      // and optionally sets the map view to the user's location with respect to
      // detection accuracy (or to the world view if geolocation failed).
      // Note that, if your page doesn't use HTTPS, this method will fail in
      // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
      // See `Locate options` for more details.
      locate: function(t) {
        if (t = this._locateOptions = l({
          timeout: 1e4,
          watch: !1
          // setView: false
          // maxZoom: <Number>
          // maximumAge: 0
          // enableHighAccuracy: false
        }, t), !("geolocation" in navigator))
          return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }), this;
        var e = f(this._handleGeolocationResponse, this), i = f(this._handleGeolocationError, this);
        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
      },
      // @method stopLocate(): this
      // Stops watching location previously initiated by `map.locate({watch: true})`
      // and aborts resetting the map view if map.locate was called with
      // `{setView: true}`.
      stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function(t) {
        if (this._container._leaflet_id) {
          var e = t.code, i = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: e,
            message: "Geolocation error: " + i + "."
          });
        }
      },
      _handleGeolocationResponse: function(t) {
        if (this._container._leaflet_id) {
          var e = t.coords.latitude, i = t.coords.longitude, n = new D(e, i), o = n.toBounds(t.coords.accuracy * 2), h = this._locateOptions;
          if (h.setView) {
            var c = this.getBoundsZoom(o);
            this.setView(n, h.maxZoom ? Math.min(c, h.maxZoom) : c);
          }
          var _ = {
            latlng: n,
            bounds: o,
            timestamp: t.timestamp
          };
          for (var p in t.coords)
            typeof t.coords[p] == "number" && (_[p] = t.coords[p]);
          this.fire("locationfound", _);
        }
      },
      // TODO Appropriate docs section?
      // @section Other Methods
      // @method addHandler(name: String, HandlerClass: Function): this
      // Adds a new `Handler` to the map, given its name and constructor function.
      addHandler: function(t, e) {
        if (!e)
          return this;
        var i = this[t] = new e(this);
        return this._handlers.push(i), this.options[t] && i.enable(), this;
      },
      // @method remove(): this
      // Destroys the map and clears all related event listeners.
      remove: function() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), U(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (at(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var t;
        for (t in this._layers)
          this._layers[t].remove();
        for (t in this._panes)
          U(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(t, e) {
        var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = Z("div", i, e || this._mapPane);
        return t && (this._panes[t] = n), n;
      },
      // @section Methods for Getting Map State
      // @method getCenter(): LatLng
      // Returns the geographical center of the map view
      getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      // @method getZoom(): Number
      // Returns the current zoom level of the map view
      getZoom: function() {
        return this._zoom;
      },
      // @method getBounds(): LatLngBounds
      // Returns the geographical bounds visible in the current map view
      getBounds: function() {
        var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), i = this.unproject(t.getTopRight());
        return new ot(e, i);
      },
      // @method getMinZoom(): Number
      // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
      getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      // @method getMaxZoom(): Number
      // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
      getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
      // Returns the maximum zoom level on which the given bounds fit to the map
      // view in its entirety. If `inside` (optional) is set to `true`, the method
      // instead returns the minimum zoom level on which the map view fits into
      // the given bounds in its entirety.
      getBoundsZoom: function(t, e, i) {
        t = V(t), i = C(i || [0, 0]);
        var n = this.getZoom() || 0, o = this.getMinZoom(), h = this.getMaxZoom(), c = t.getNorthWest(), _ = t.getSouthEast(), p = this.getSize().subtract(i), y = nt(this.project(_, n), this.project(c, n)).getSize(), T = M.any3d ? this.options.zoomSnap : 1, E = p.x / y.x, A = p.y / y.y, et = e ? Math.max(E, A) : Math.min(E, A);
        return n = this.getScaleZoom(et, n), T && (n = Math.round(n / (T / 100)) * (T / 100), n = e ? Math.ceil(n / T) * T : Math.floor(n / T) * T), Math.max(o, Math.min(h, n));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new O(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(t, e) {
        var i = this._getTopLeftPoint(t, e);
        return new H(i, i.add(this.getSize()));
      },
      // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
      // the map pane? "left point of the map layer" can be confusing, specially
      // since there can be negative offsets.
      // @method getPixelOrigin(): Point
      // Returns the projected pixel coordinates of the top left point of
      // the map layer (useful in custom layer and overlay implementations).
      getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      // @method getPixelWorldBounds(zoom?: Number): Bounds
      // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
      // If `zoom` is omitted, the map's current zoom level is used.
      getPixelWorldBounds: function(t) {
        return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
      },
      // @section Other Methods
      // @method getPane(pane: String|HTMLElement): HTMLElement
      // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
      getPane: function(t) {
        return typeof t == "string" ? this._panes[t] : t;
      },
      // @method getPanes(): Object
      // Returns a plain object containing the names of all [panes](#map-pane) as keys and
      // the panes as values.
      getPanes: function() {
        return this._panes;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the map.
      getContainer: function() {
        return this._container;
      },
      // @section Conversion Methods
      // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
      // Returns the scale factor to be applied to a map transition from zoom level
      // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
      getZoomScale: function(t, e) {
        var i = this.options.crs;
        return e = e === void 0 ? this._zoom : e, i.scale(t) / i.scale(e);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(t, e) {
        var i = this.options.crs;
        e = e === void 0 ? this._zoom : e;
        var n = i.zoom(t * i.scale(e));
        return isNaN(n) ? 1 / 0 : n;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(B(t), e);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(C(t), e);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(t) {
        var e = C(t).add(this.getPixelOrigin());
        return this.unproject(e);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(t) {
        var e = this.project(B(t))._round();
        return e._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(B(t));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(V(t));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(t, e) {
        return this.options.crs.distance(B(t), B(e));
      },
      // @method containerPointToLayerPoint(point: Point): Point
      // Given a pixel coordinate relative to the map container, returns the corresponding
      // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
      containerPointToLayerPoint: function(t) {
        return C(t).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(t) {
        return C(t).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(t) {
        var e = this.containerPointToLayerPoint(C(t));
        return this.layerPointToLatLng(e);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(B(t)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(t) {
        return Cn(t, this._container);
      },
      // @method mouseEventToLayerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to
      // the [origin pixel](#map-getpixelorigin) where the event took place.
      mouseEventToLayerPoint: function(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      },
      // @method mouseEventToLatLng(ev: MouseEvent): LatLng
      // Given a MouseEvent object, returns geographical coordinate where the
      // event took place.
      mouseEventToLatLng: function(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      // map initialization methods
      _initContainer: function(t) {
        var e = this._container = bn(t);
        if (e) {
          if (e._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else
          throw new Error("Map container not found.");
        k(e, "scroll", this._onScroll, this), this._containerId = w(e);
      },
      _initLayout: function() {
        var t = this._container;
        this._fadeAnimated = this.options.fadeAnimation && M.any3d, z(t, "leaflet-container" + (M.touch ? " leaflet-touch" : "") + (M.retina ? " leaflet-retina" : "") + (M.ielt9 ? " leaflet-oldie" : "") + (M.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var e = ee(t, "position");
        e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), G(this._mapPane, new O(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (z(t.markerPane, "leaflet-zoom-hide"), z(t.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(t, e, i) {
        G(this._mapPane, new O(0, 0));
        var n = !this._loaded;
        this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
        var o = this._zoom !== e;
        this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
      },
      _moveStart: function(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      },
      _move: function(t, e, i, n) {
        e === void 0 && (e = this._zoom);
        var o = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
      },
      _moveEnd: function(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return at(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(t) {
        G(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function() {
        if (!this._loaded)
          throw new Error("Set map center and zoom first.");
      },
      // DOM event handling
      // @section Interaction events
      _initEvents: function(t) {
        this._targets = {}, this._targets[w(this._container)] = this;
        var e = t ? F : k;
        e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), M.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        at(this._resizeRequest), this._resizeRequest = it(
          function() {
            this.invalidateSize({ debounceMoveend: !0 });
          },
          this
        );
      },
      _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function(t, e) {
        for (var i = [], n, o = e === "mouseout" || e === "mouseover", h = t.target || t.srcElement, c = !1; h; ) {
          if (n = this._targets[w(h)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
            c = !0;
            break;
          }
          if (n && n.listens(e, !0) && (o && !Li(h, t) || (i.push(n), o)) || h === this._container)
            break;
          h = h.parentNode;
        }
        return !i.length && !c && !o && this.listens(e, !0) && (i = [this]), i;
      },
      _isClickDisabled: function(t) {
        for (; t && t !== this._container; ) {
          if (t._leaflet_disable_click)
            return !0;
          t = t.parentNode;
        }
      },
      _handleDOMEvent: function(t) {
        var e = t.target || t.srcElement;
        if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
          var i = t.type;
          i === "mousedown" && gi(e), this._fireDOMEvent(t, i);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(t, e, i) {
        if (t.type === "click") {
          var n = l({}, t);
          n.type = "preclick", this._fireDOMEvent(n, n.type, i);
        }
        var o = this._findEventTargets(t, e);
        if (i) {
          for (var h = [], c = 0; c < i.length; c++)
            i[c].listens(e, !0) && h.push(i[c]);
          o = h.concat(o);
        }
        if (o.length) {
          e === "contextmenu" && Y(t);
          var _ = o[0], p = {
            originalEvent: t
          };
          if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
            var y = _.getLatLng && (!_._radius || _._radius <= 10);
            p.containerPoint = y ? this.latLngToContainerPoint(_.getLatLng()) : this.mouseEventToContainerPoint(t), p.layerPoint = this.containerPointToLayerPoint(p.containerPoint), p.latlng = y ? _.getLatLng() : this.layerPointToLatLng(p.layerPoint);
          }
          for (c = 0; c < o.length; c++)
            if (o[c].fire(e, p, !0), p.originalEvent._stopped || o[c].options.bubblingMouseEvents === !1 && $t(this._mouseEvents, e) !== -1)
              return;
        }
      },
      _draggableMoved: function(t) {
        return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var t = 0, e = this._handlers.length; t < e; t++)
          this._handlers[t].disable();
      },
      // @section Other Methods
      // @method whenReady(fn: Function, context?: Object): this
      // Runs the given function `fn` when the map gets initialized with
      // a view (center and zoom) and at least one layer, or immediately
      // if it's already initialized, optionally passing a function context.
      whenReady: function(t, e) {
        return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
      },
      // private methods for getting map state
      _getMapPanePos: function() {
        return Bt(this._mapPane) || new O(0, 0);
      },
      _moved: function() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function(t, e) {
        var i = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
        return i.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(t, e) {
        var i = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return this.project(t, e)._subtract(n);
      },
      _latLngBoundsToNewLayerBounds: function(t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return nt([
          this.project(t.getSouthWest(), e)._subtract(n),
          this.project(t.getNorthWest(), e)._subtract(n),
          this.project(t.getSouthEast(), e)._subtract(n),
          this.project(t.getNorthEast(), e)._subtract(n)
        ]);
      },
      // layer point of the current center
      _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      // offset of the specified place to the current center in pixels
      _getCenterOffset: function(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      // adjust center for view to get inside bounds
      _limitCenter: function(t, e, i) {
        if (!i)
          return t;
        var n = this.project(t, e), o = this.getSize().divideBy(2), h = new H(n.subtract(o), n.add(o)), c = this._getBoundsOffset(h, i, e);
        return Math.abs(c.x) <= 1 && Math.abs(c.y) <= 1 ? t : this.unproject(n.add(c), e);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(t, e) {
        if (!e)
          return t;
        var i = this.getPixelBounds(), n = new H(i.min.add(t), i.max.add(t));
        return t.add(this._getBoundsOffset(n, e));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(t, e, i) {
        var n = nt(
          this.project(e.getNorthEast(), i),
          this.project(e.getSouthWest(), i)
        ), o = n.min.subtract(t.min), h = n.max.subtract(t.max), c = this._rebound(o.x, -h.x), _ = this._rebound(o.y, -h.y);
        return new O(c, _);
      },
      _rebound: function(t, e) {
        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function(t) {
        var e = this.getMinZoom(), i = this.getMaxZoom(), n = M.any3d ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        W(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(t, e) {
        var i = this._getCenterOffset(t)._trunc();
        return (e && e.animate) !== !0 && !this.getSize().contains(i) ? !1 : (this.panBy(i, e), !0);
      },
      _createAnimProxy: function() {
        var t = this._proxy = Z("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
          var i = li, n = this._proxy.style[i];
          At(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        U(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var t = this.getCenter(), e = this.getZoom();
        At(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
      },
      _catchTransitionEnd: function(t) {
        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(t, e, i) {
        if (this._animatingZoom)
          return !0;
        if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var n = this.getZoomScale(e), o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return i.animate !== !0 && !this.getSize().contains(o) ? !1 : (it(function() {
          this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
        }, this), !0);
      },
      _animateZoom: function(t, e, i, n) {
        this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, z(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: t,
          zoom: e,
          noUpdate: n
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(f(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && W(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function Bs(t, e) {
      return new R(t, e);
    }
    var dt = xt.extend({
      // @section
      // @aka Control Options
      options: {
        // @option position: String = 'topright'
        // The position of the control (one of the map corners). Possible values are `'topleft'`,
        // `'topright'`, `'bottomleft'` or `'bottomright'`
        position: "topright"
      },
      initialize: function(t) {
        P(this, t);
      },
      /* @section
       * Classes extending L.Control will inherit the following methods:
       *
       * @method getPosition: string
       * Returns the position of the control.
       */
      getPosition: function() {
        return this.options.position;
      },
      // @method setPosition(position: string): this
      // Sets the position of the control.
      setPosition: function(t) {
        var e = this._map;
        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTMLElement that contains the control.
      getContainer: function() {
        return this._container;
      },
      // @method addTo(map: Map): this
      // Adds the control to the given map.
      addTo: function(t) {
        this.remove(), this._map = t;
        var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
        return z(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (U(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(t) {
        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
      }
    }), re = function(t) {
      return new dt(t);
    };
    R.include({
      // @method addControl(control: Control): this
      // Adds the given control to the map
      addControl: function(t) {
        return t.addTo(this), this;
      },
      // @method removeControl(control: Control): this
      // Removes the given control from the map
      removeControl: function(t) {
        return t.remove(), this;
      },
      _initControlPos: function() {
        var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = Z("div", e + "control-container", this._container);
        function n(o, h) {
          var c = e + o + " " + e + h;
          t[o + h] = Z("div", c, i);
        }
        n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
      },
      _clearControlPos: function() {
        for (var t in this._controlCorners)
          U(this._controlCorners[t]);
        U(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var zn = dt.extend({
      // @section
      // @aka Control.Layers options
      options: {
        // @option collapsed: Boolean = true
        // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
        collapsed: !0,
        position: "topright",
        // @option autoZIndex: Boolean = true
        // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
        autoZIndex: !0,
        // @option hideSingleBase: Boolean = false
        // If `true`, the base layers in the control will be hidden when there is only one.
        hideSingleBase: !1,
        // @option sortLayers: Boolean = false
        // Whether to sort the layers. When `false`, layers will keep the order
        // in which they were added to the control.
        sortLayers: !1,
        // @option sortFunction: Function = *
        // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
        // that will be used for sorting the layers, when `sortLayers` is `true`.
        // The function receives both the `L.Layer` instances and their names, as in
        // `sortFunction(layerA, layerB, nameA, nameB)`.
        // By default, it sorts layers alphabetically by their name.
        sortFunction: function(t, e, i, n) {
          return i < n ? -1 : n < i ? 1 : 0;
        }
      },
      initialize: function(t, e, i) {
        P(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var n in t)
          this._addLayer(t[n], n);
        for (n in e)
          this._addLayer(e[n], n, !0);
      },
      onAdd: function(t) {
        this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(t) {
        return dt.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      // @method addBaseLayer(layer: Layer, name: String): this
      // Adds a base layer (radio button entry) with the given name to the control.
      addBaseLayer: function(t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      },
      // @method addOverlay(layer: Layer, name: String): this
      // Adds an overlay (checkbox entry) with the given name to the control.
      addOverlay: function(t, e) {
        return this._addLayer(t, e, !0), this._map ? this._update() : this;
      },
      // @method removeLayer(layer: Layer): this
      // Remove the given layer from the control.
      removeLayer: function(t) {
        t.off("add remove", this._onLayerChange, this);
        var e = this._getLayer(w(t));
        return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
      },
      // @method expand(): this
      // Expand the control container if collapsed.
      expand: function() {
        z(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (z(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : W(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return W(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var t = "leaflet-control-layers", e = this._container = Z("div", t), i = this.options.collapsed;
        e.setAttribute("aria-haspopup", !0), se(e), Pi(e);
        var n = this._section = Z("section", t + "-list");
        i && (this._map.on("click", this.collapse, this), k(e, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var o = this._layersLink = Z("a", t + "-toggle", e);
        o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), k(o, {
          keydown: function(h) {
            h.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(h) {
            Y(h), this._expandSafely();
          }
        }, this), i || this.expand(), this._baseLayersList = Z("div", t + "-base", n), this._separator = Z("div", t + "-separator", n), this._overlaysList = Z("div", t + "-overlays", n), e.appendChild(n);
      },
      _getLayer: function(t) {
        for (var e = 0; e < this._layers.length; e++)
          if (this._layers[e] && w(this._layers[e].layer) === t)
            return this._layers[e];
      },
      _addLayer: function(t, e, i) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: t,
          name: e,
          overlay: i
        }), this.options.sortLayers && this._layers.sort(f(function(n, o) {
          return this.options.sortFunction(n.layer, o.layer, n.name, o.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        xe(this._baseLayersList), xe(this._overlaysList), this._layerControlInputs = [];
        var t, e, i, n, o = 0;
        for (i = 0; i < this._layers.length; i++)
          n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
        return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
      },
      _onLayerChange: function(t) {
        this._handlingClick || this._update();
        var e = this._getLayer(w(t.target)), i = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
        i && this._map.fire(i, e);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(t, e) {
        var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", n = document.createElement("div");
        return n.innerHTML = i, n.firstChild;
      },
      _addItem: function(t) {
        var e = document.createElement("label"), i = this._map.hasLayer(t.layer), n;
        t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + w(this), i), this._layerControlInputs.push(n), n.layerId = w(t.layer), k(n, "click", this._onInputClick, this);
        var o = document.createElement("span");
        o.innerHTML = " " + t.name;
        var h = document.createElement("span");
        e.appendChild(h), h.appendChild(n), h.appendChild(o);
        var c = t.overlay ? this._overlaysList : this._baseLayersList;
        return c.appendChild(e), this._checkDisabledLayers(), e;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var t = this._layerControlInputs, e, i, n = [], o = [];
          this._handlingClick = !0;
          for (var h = t.length - 1; h >= 0; h--)
            e = t[h], i = this._getLayer(e.layerId).layer, e.checked ? n.push(i) : e.checked || o.push(i);
          for (h = 0; h < o.length; h++)
            this._map.hasLayer(o[h]) && this._map.removeLayer(o[h]);
          for (h = 0; h < n.length; h++)
            this._map.hasLayer(n[h]) || this._map.addLayer(n[h]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var t = this._layerControlInputs, e, i, n = this._map.getZoom(), o = t.length - 1; o >= 0; o--)
          e = t[o], i = this._getLayer(e.layerId).layer, e.disabled = i.options.minZoom !== void 0 && n < i.options.minZoom || i.options.maxZoom !== void 0 && n > i.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var t = this._section;
        this._preventClick = !0, k(t, "click", Y), this.expand();
        var e = this;
        setTimeout(function() {
          F(t, "click", Y), e._preventClick = !1;
        });
      }
    }), Rs = function(t, e, i) {
      return new zn(t, e, i);
    }, Ti = dt.extend({
      // @section
      // @aka Control.Zoom options
      options: {
        position: "topleft",
        // @option zoomInText: String = '<span aria-hidden="true">+</span>'
        // The text set on the 'zoom in' button.
        zoomInText: '<span aria-hidden="true">+</span>',
        // @option zoomInTitle: String = 'Zoom in'
        // The title set on the 'zoom in' button.
        zoomInTitle: "Zoom in",
        // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
        // The text set on the 'zoom out' button.
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        // @option zoomOutTitle: String = 'Zoom out'
        // The title set on the 'zoom out' button.
        zoomOutTitle: "Zoom out"
      },
      onAdd: function(t) {
        var e = "leaflet-control-zoom", i = Z("div", e + " leaflet-bar"), n = this.options;
        return this._zoomInButton = this._createButton(
          n.zoomInText,
          n.zoomInTitle,
          e + "-in",
          i,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          n.zoomOutText,
          n.zoomOutTitle,
          e + "-out",
          i,
          this._zoomOut
        ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
      },
      onRemove: function(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function(t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function(t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function(t, e, i, n, o) {
        var h = Z("a", i, n);
        return h.innerHTML = t, h.href = "#", h.title = e, h.setAttribute("role", "button"), h.setAttribute("aria-label", e), se(h), k(h, "click", It), k(h, "click", o, this), k(h, "click", this._refocusOnMap, this), h;
      },
      _updateDisabled: function() {
        var t = this._map, e = "leaflet-disabled";
        W(this._zoomInButton, e), W(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (z(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (z(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    R.mergeOptions({
      zoomControl: !0
    }), R.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new Ti(), this.addControl(this.zoomControl));
    });
    var Is = function(t) {
      return new Ti(t);
    }, An = dt.extend({
      // @section
      // @aka Control.Scale options
      options: {
        position: "bottomleft",
        // @option maxWidth: Number = 100
        // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
        maxWidth: 100,
        // @option metric: Boolean = True
        // Whether to show the metric scale line (m/km).
        metric: !0,
        // @option imperial: Boolean = True
        // Whether to show the imperial scale line (mi/ft).
        imperial: !0
        // @option updateWhenIdle: Boolean = false
        // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
      },
      onAdd: function(t) {
        var e = "leaflet-control-scale", i = Z("div", e), n = this.options;
        return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
      },
      onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(t, e, i) {
        t.metric && (this._mScale = Z("div", e, i)), t.imperial && (this._iScale = Z("div", e, i));
      },
      _update: function() {
        var t = this._map, e = t.getSize().y / 2, i = t.distance(
          t.containerPointToLatLng([0, e]),
          t.containerPointToLatLng([this.options.maxWidth, e])
        );
        this._updateScales(i);
      },
      _updateScales: function(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function(t) {
        var e = this._getRoundNum(t), i = e < 1e3 ? e + " m" : e / 1e3 + " km";
        this._updateScale(this._mScale, i, e / t);
      },
      _updateImperial: function(t) {
        var e = t * 3.2808399, i, n, o;
        e > 5280 ? (i = e / 5280, n = this._getRoundNum(i), this._updateScale(this._iScale, n + " mi", n / i)) : (o = this._getRoundNum(e), this._updateScale(this._iScale, o + " ft", o / e));
      },
      _updateScale: function(t, e, i) {
        t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
      },
      _getRoundNum: function(t) {
        var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
        return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
      }
    }), Zs = function(t) {
      return new An(t);
    }, Ns = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', bi = dt.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (M.inlineSvg ? Ns + " " : "") + "Leaflet</a>"
      },
      initialize: function(t) {
        P(this, t), this._attributions = {};
      },
      onAdd: function(t) {
        t.attributionControl = this, this._container = Z("div", "leaflet-control-attribution"), se(this._container);
        for (var e in t._layers)
          t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function(t) {
        t.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function(t) {
        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
          this.removeAttribution(t.layer.getAttribution());
        }, this));
      },
      // @method setPrefix(prefix: String|false): this
      // The HTML text shown before the attributions. Pass `false` to disable.
      setPrefix: function(t) {
        return this.options.prefix = t, this._update(), this;
      },
      // @method addAttribution(text: String): this
      // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
      addAttribution: function(t) {
        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
      },
      // @method removeAttribution(text: String): this
      // Removes an attribution text.
      removeAttribution: function(t) {
        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
      },
      _update: function() {
        if (this._map) {
          var t = [];
          for (var e in this._attributions)
            this._attributions[e] && t.push(e);
          var i = [];
          this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    R.mergeOptions({
      attributionControl: !0
    }), R.addInitHook(function() {
      this.options.attributionControl && new bi().addTo(this);
    });
    var Ds = function(t) {
      return new bi(t);
    };
    dt.Layers = zn, dt.Zoom = Ti, dt.Scale = An, dt.Attribution = bi, re.layers = Rs, re.zoom = Is, re.scale = Zs, re.attribution = Ds;
    var gt = xt.extend({
      initialize: function(t) {
        this._map = t;
      },
      // @method enable(): this
      // Enables the handler
      enable: function() {
        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
      },
      // @method disable(): this
      // Disables the handler
      disable: function() {
        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
      },
      // @method enabled(): Boolean
      // Returns `true` if the handler is enabled
      enabled: function() {
        return !!this._enabled;
      }
      // @section Extension methods
      // Classes inheriting from `Handler` must implement the two following methods:
      // @method addHooks()
      // Called when the handler is enabled, should add event hooks.
      // @method removeHooks()
      // Called when the handler is disabled, should remove the event hooks added previously.
    });
    gt.addTo = function(t, e) {
      return t.addHandler(e, this), this;
    };
    var Fs = { Events: rt }, Bn = M.touch ? "touchstart mousedown" : "mousedown", Ct = Xt.extend({
      options: {
        // @section
        // @aka Draggable options
        // @option clickTolerance: Number = 3
        // The max number of pixels a user can shift the mouse pointer during a click
        // for it to be considered a valid click (as opposed to a mouse drag).
        clickTolerance: 3
      },
      // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
      // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
      initialize: function(t, e, i, n) {
        P(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (k(this._dragStartTarget, Bn, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (Ct._dragging === this && this.finishDrag(!0), F(this._dragStartTarget, Bn, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(t) {
        if (this._enabled && (this._moved = !1, !ci(this._element, "leaflet-zoom-anim"))) {
          if (t.touches && t.touches.length !== 1) {
            Ct._dragging === this && this.finishDrag();
            return;
          }
          if (!(Ct._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (Ct._dragging = this, this._preventOutline && gi(this._element), _i(), ie(), !this._moving)) {
            this.fire("down");
            var e = t.touches ? t.touches[0] : t, i = Mn(this._element);
            this._startPoint = new O(e.clientX, e.clientY), this._startPos = Bt(this._element), this._parentScale = vi(i);
            var n = t.type === "mousedown";
            k(document, n ? "mousemove" : "touchmove", this._onMove, this), k(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(t) {
        if (this._enabled) {
          if (t.touches && t.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new O(e.clientX, e.clientY)._subtract(this._startPoint);
          !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, Y(t), this._moved || (this.fire("dragstart"), this._moved = !0, z(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), z(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t), G(this._element, this._newPos), this.fire("drag", t);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(t) {
        W(document.body, "leaflet-dragging"), this._lastTarget && (W(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), F(document, "mousemove touchmove", this._onMove, this), F(document, "mouseup touchend touchcancel", this._onUp, this), pi(), ne();
        var e = this._moved && this._moving;
        this._moving = !1, Ct._dragging = !1, e && this.fire("dragend", {
          noInertia: t,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function Rn(t, e, i) {
      var n, o = [1, 4, 2, 8], h, c, _, p, y, T, E, A;
      for (h = 0, T = t.length; h < T; h++)
        t[h]._code = Zt(t[h], e);
      for (_ = 0; _ < 4; _++) {
        for (E = o[_], n = [], h = 0, T = t.length, c = T - 1; h < T; c = h++)
          p = t[h], y = t[c], p._code & E ? y._code & E || (A = Me(y, p, E, e, i), A._code = Zt(A, e), n.push(A)) : (y._code & E && (A = Me(y, p, E, e, i), A._code = Zt(A, e), n.push(A)), n.push(p));
        t = n;
      }
      return t;
    }
    function In(t, e) {
      var i, n, o, h, c, _, p, y, T;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      ut(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var E = B([0, 0]), A = V(t), et = A.getNorthWest().distanceTo(A.getSouthWest()) * A.getNorthEast().distanceTo(A.getNorthWest());
      et < 1700 && (E = Mi(t));
      var $ = t.length, lt = [];
      for (i = 0; i < $; i++) {
        var st = B(t[i]);
        lt.push(e.project(B([st.lat - E.lat, st.lng - E.lng])));
      }
      for (_ = p = y = 0, i = 0, n = $ - 1; i < $; n = i++)
        o = lt[i], h = lt[n], c = o.y * h.x - h.y * o.x, p += (o.x + h.x) * c, y += (o.y + h.y) * c, _ += c * 3;
      _ === 0 ? T = lt[0] : T = [p / _, y / _];
      var Vt = e.unproject(C(T));
      return B([Vt.lat + E.lat, Vt.lng + E.lng]);
    }
    function Mi(t) {
      for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
        var h = B(t[o]);
        e += h.lat, i += h.lng, n++;
      }
      return B([e / n, i / n]);
    }
    var Hs = {
      __proto__: null,
      clipPolygon: Rn,
      polygonCenter: In,
      centroid: Mi
    };
    function Zn(t, e) {
      if (!e || !t.length)
        return t.slice();
      var i = e * e;
      return t = js(t, i), t = Ws(t, i), t;
    }
    function Nn(t, e, i) {
      return Math.sqrt(ae(t, e, i, !0));
    }
    function Us(t, e, i) {
      return ae(t, e, i);
    }
    function Ws(t, e) {
      var i = t.length, n = typeof Uint8Array != void 0 + "" ? Uint8Array : Array, o = new n(i);
      o[0] = o[i - 1] = 1, Si(t, o, e, 0, i - 1);
      var h, c = [];
      for (h = 0; h < i; h++)
        o[h] && c.push(t[h]);
      return c;
    }
    function Si(t, e, i, n, o) {
      var h = 0, c, _, p;
      for (_ = n + 1; _ <= o - 1; _++)
        p = ae(t[_], t[n], t[o], !0), p > h && (c = _, h = p);
      h > i && (e[c] = 1, Si(t, e, i, n, c), Si(t, e, i, c, o));
    }
    function js(t, e) {
      for (var i = [t[0]], n = 1, o = 0, h = t.length; n < h; n++)
        qs(t[n], t[o]) > e && (i.push(t[n]), o = n);
      return o < h - 1 && i.push(t[h - 1]), i;
    }
    var Dn;
    function Fn(t, e, i, n, o) {
      var h = n ? Dn : Zt(t, i), c = Zt(e, i), _, p, y;
      for (Dn = c; ; ) {
        if (!(h | c))
          return [t, e];
        if (h & c)
          return !1;
        _ = h || c, p = Me(t, e, _, i, o), y = Zt(p, i), _ === h ? (t = p, h = y) : (e = p, c = y);
      }
    }
    function Me(t, e, i, n, o) {
      var h = e.x - t.x, c = e.y - t.y, _ = n.min, p = n.max, y, T;
      return i & 8 ? (y = t.x + h * (p.y - t.y) / c, T = p.y) : i & 4 ? (y = t.x + h * (_.y - t.y) / c, T = _.y) : i & 2 ? (y = p.x, T = t.y + c * (p.x - t.x) / h) : i & 1 && (y = _.x, T = t.y + c * (_.x - t.x) / h), new O(y, T, o);
    }
    function Zt(t, e) {
      var i = 0;
      return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
    }
    function qs(t, e) {
      var i = e.x - t.x, n = e.y - t.y;
      return i * i + n * n;
    }
    function ae(t, e, i, n) {
      var o = e.x, h = e.y, c = i.x - o, _ = i.y - h, p = c * c + _ * _, y;
      return p > 0 && (y = ((t.x - o) * c + (t.y - h) * _) / p, y > 1 ? (o = i.x, h = i.y) : y > 0 && (o += c * y, h += _ * y)), c = t.x - o, _ = t.y - h, n ? c * c + _ * _ : new O(o, h);
    }
    function ut(t) {
      return !q(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
    }
    function Hn(t) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ut(t);
    }
    function Un(t, e) {
      var i, n, o, h, c, _, p, y;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      ut(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var T = B([0, 0]), E = V(t), A = E.getNorthWest().distanceTo(E.getSouthWest()) * E.getNorthEast().distanceTo(E.getNorthWest());
      A < 1700 && (T = Mi(t));
      var et = t.length, $ = [];
      for (i = 0; i < et; i++) {
        var lt = B(t[i]);
        $.push(e.project(B([lt.lat - T.lat, lt.lng - T.lng])));
      }
      for (i = 0, n = 0; i < et - 1; i++)
        n += $[i].distanceTo($[i + 1]) / 2;
      if (n === 0)
        y = $[0];
      else
        for (i = 0, h = 0; i < et - 1; i++)
          if (c = $[i], _ = $[i + 1], o = c.distanceTo(_), h += o, h > n) {
            p = (h - n) / o, y = [
              _.x - p * (_.x - c.x),
              _.y - p * (_.y - c.y)
            ];
            break;
          }
      var st = e.unproject(C(y));
      return B([st.lat + T.lat, st.lng + T.lng]);
    }
    var Vs = {
      __proto__: null,
      simplify: Zn,
      pointToSegmentDistance: Nn,
      closestPointOnSegment: Us,
      clipSegment: Fn,
      _getEdgeIntersection: Me,
      _getBitCode: Zt,
      _sqClosestPointOnSegment: ae,
      isFlat: ut,
      _flat: Hn,
      polylineCenter: Un
    }, Ei = {
      project: function(t) {
        return new O(t.lng, t.lat);
      },
      unproject: function(t) {
        return new D(t.y, t.x);
      },
      bounds: new H([-180, -90], [180, 90])
    }, Ci = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new H([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(t) {
        var e = Math.PI / 180, i = this.R, n = t.lat * e, o = this.R_MINOR / i, h = Math.sqrt(1 - o * o), c = h * Math.sin(n), _ = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - c) / (1 + c), h / 2);
        return n = -i * Math.log(Math.max(_, 1e-10)), new O(t.lng * e * i, n);
      },
      unproject: function(t) {
        for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, o = Math.sqrt(1 - n * n), h = Math.exp(-t.y / i), c = Math.PI / 2 - 2 * Math.atan(h), _ = 0, p = 0.1, y; _ < 15 && Math.abs(p) > 1e-7; _++)
          y = o * Math.sin(c), y = Math.pow((1 - y) / (1 + y), o / 2), p = Math.PI / 2 - 2 * Math.atan(h * y) - c, c += p;
        return new D(c * e, t.x * e / i);
      }
    }, Gs = {
      __proto__: null,
      LonLat: Ei,
      Mercator: Ci,
      SphericalMercator: ei
    }, Ks = l({}, Et, {
      code: "EPSG:3395",
      projection: Ci,
      transformation: function() {
        var t = 0.5 / (Math.PI * Ci.R);
        return Yt(t, 0.5, -t, 0.5);
      }()
    }), Wn = l({}, Et, {
      code: "EPSG:4326",
      projection: Ei,
      transformation: Yt(1 / 180, 1, -1 / 180, 0.5)
    }), Js = l({}, Pt, {
      projection: Ei,
      transformation: Yt(1, 0, -1, 0),
      scale: function(t) {
        return Math.pow(2, t);
      },
      zoom: function(t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function(t, e) {
        var i = e.lng - t.lng, n = e.lat - t.lat;
        return Math.sqrt(i * i + n * n);
      },
      infinite: !0
    });
    Pt.Earth = Et, Pt.EPSG3395 = Ks, Pt.EPSG3857 = ni, Pt.EPSG900913 = es, Pt.EPSG4326 = Wn, Pt.Simple = Js;
    var _t = Xt.extend({
      // Classes extending `L.Layer` will inherit the following options:
      options: {
        // @option pane: String = 'overlayPane'
        // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
        pane: "overlayPane",
        // @option attribution: String = null
        // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
        attribution: null,
        bubblingMouseEvents: !0
      },
      /* @section
       * Classes extending `L.Layer` will inherit the following methods:
       *
       * @method addTo(map: Map|LayerGroup): this
       * Adds the layer to the given map or layer group.
       */
      addTo: function(t) {
        return t.addLayer(this), this;
      },
      // @method remove: this
      // Removes the layer from the map it is currently active on.
      remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      // @method removeFrom(map: Map): this
      // Removes the layer from the given map
      //
      // @alternative
      // @method removeFrom(group: LayerGroup): this
      // Removes the layer from the given `LayerGroup`
      removeFrom: function(t) {
        return t && t.removeLayer(this), this;
      },
      // @method getPane(name? : String): HTMLElement
      // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
      getPane: function(t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function(t) {
        return this._map._targets[w(t)] = this, this;
      },
      removeInteractiveTarget: function(t) {
        return delete this._map._targets[w(t)], this;
      },
      // @method getAttribution: String
      // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
      getAttribution: function() {
        return this.options.attribution;
      },
      _layerAdd: function(t) {
        var e = t.target;
        if (e.hasLayer(this)) {
          if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
            var i = this.getEvents();
            e.on(i, this), this.once("remove", function() {
              e.off(i, this);
            }, this);
          }
          this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
        }
      }
    });
    R.include({
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the map
      addLayer: function(t) {
        if (!t._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var e = w(t);
        return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the map.
      removeLayer: function(t) {
        var e = w(t);
        return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the map
      hasLayer: function(t) {
        return w(t) in this._layers;
      },
      /* @method eachLayer(fn: Function, context?: Object): this
       * Iterates over the layers of the map, optionally specifying context of the iterator function.
       * ```
       * map.eachLayer(function(layer){
       *     layer.bindPopup('Hello');
       * });
       * ```
       */
      eachLayer: function(t, e) {
        for (var i in this._layers)
          t.call(e, this._layers[i]);
        return this;
      },
      _addLayers: function(t) {
        t = t ? q(t) ? t : [t] : [];
        for (var e = 0, i = t.length; e < i; e++)
          this.addLayer(t[e]);
      },
      _addZoomLimit: function(t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[w(t)] = t, this._updateZoomLevels());
      },
      _removeZoomLimit: function(t) {
        var e = w(t);
        this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var t = 1 / 0, e = -1 / 0, i = this._getZoomSpan();
        for (var n in this._zoomBoundLayers) {
          var o = this._zoomBoundLayers[n].options;
          t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom), e = o.maxZoom === void 0 ? e : Math.max(e, o.maxZoom);
        }
        this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var Ht = _t.extend({
      initialize: function(t, e) {
        P(this, e), this._layers = {};
        var i, n;
        if (t)
          for (i = 0, n = t.length; i < n; i++)
            this.addLayer(t[i]);
      },
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the group.
      addLayer: function(t) {
        var e = this.getLayerId(t);
        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the group.
      // @alternative
      // @method removeLayer(id: Number): this
      // Removes the layer with the given internal ID from the group.
      removeLayer: function(t) {
        var e = t in this._layers ? t : this.getLayerId(t);
        return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the group.
      // @alternative
      // @method hasLayer(id: Number): Boolean
      // Returns `true` if the given internal ID is currently added to the group.
      hasLayer: function(t) {
        var e = typeof t == "number" ? t : this.getLayerId(t);
        return e in this._layers;
      },
      // @method clearLayers(): this
      // Removes all the layers from the group.
      clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      },
      // @method invoke(methodName: String, …): this
      // Calls `methodName` on every layer contained in this group, passing any
      // additional parameters. Has no effect if the layers contained do not
      // implement `methodName`.
      invoke: function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i, n;
        for (i in this._layers)
          n = this._layers[i], n[t] && n[t].apply(n, e);
        return this;
      },
      onAdd: function(t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function(t) {
        this.eachLayer(t.removeLayer, t);
      },
      // @method eachLayer(fn: Function, context?: Object): this
      // Iterates over the layers of the group, optionally specifying context of the iterator function.
      // ```js
      // group.eachLayer(function (layer) {
      // 	layer.bindPopup('Hello');
      // });
      // ```
      eachLayer: function(t, e) {
        for (var i in this._layers)
          t.call(e, this._layers[i]);
        return this;
      },
      // @method getLayer(id: Number): Layer
      // Returns the layer with the given internal ID.
      getLayer: function(t) {
        return this._layers[t];
      },
      // @method getLayers(): Layer[]
      // Returns an array of all the layers added to the group.
      getLayers: function() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      // @method setZIndex(zIndex: Number): this
      // Calls `setZIndex` on every layer contained in this group, passing the z-index.
      setZIndex: function(t) {
        return this.invoke("setZIndex", t);
      },
      // @method getLayerId(layer: Layer): Number
      // Returns the internal ID for a layer
      getLayerId: function(t) {
        return w(t);
      }
    }), $s = function(t, e) {
      return new Ht(t, e);
    }, Lt = Ht.extend({
      addLayer: function(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), Ht.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
      },
      removeLayer: function(t) {
        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ht.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
      },
      // @method setStyle(style: Path options): this
      // Sets the given path options to each layer of the group that has a `setStyle` method.
      setStyle: function(t) {
        return this.invoke("setStyle", t);
      },
      // @method bringToFront(): this
      // Brings the layer group to the top of all other layers
      bringToFront: function() {
        return this.invoke("bringToFront");
      },
      // @method bringToBack(): this
      // Brings the layer group to the back of all other layers
      bringToBack: function() {
        return this.invoke("bringToBack");
      },
      // @method getBounds(): LatLngBounds
      // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
      getBounds: function() {
        var t = new ot();
        for (var e in this._layers) {
          var i = this._layers[e];
          t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
        }
        return t;
      }
    }), Xs = function(t, e) {
      return new Lt(t, e);
    }, Ut = xt.extend({
      /* @section
       * @aka Icon options
       *
       * @option iconUrl: String = null
       * **(required)** The URL to the icon image (absolute or relative to your script path).
       *
       * @option iconRetinaUrl: String = null
       * The URL to a retina sized version of the icon image (absolute or relative to your
       * script path). Used for Retina screen devices.
       *
       * @option iconSize: Point = null
       * Size of the icon image in pixels.
       *
       * @option iconAnchor: Point = null
       * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
       * will be aligned so that this point is at the marker's geographical location. Centered
       * by default if size is specified, also can be set in CSS with negative margins.
       *
       * @option popupAnchor: Point = [0, 0]
       * The coordinates of the point from which popups will "open", relative to the icon anchor.
       *
       * @option tooltipAnchor: Point = [0, 0]
       * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
       *
       * @option shadowUrl: String = null
       * The URL to the icon shadow image. If not specified, no shadow image will be created.
       *
       * @option shadowRetinaUrl: String = null
       *
       * @option shadowSize: Point = null
       * Size of the shadow image in pixels.
       *
       * @option shadowAnchor: Point = null
       * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
       * as iconAnchor if not specified).
       *
       * @option className: String = ''
       * A custom class name to assign to both icon and shadow images. Empty by default.
       */
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1
      },
      initialize: function(t) {
        P(this, t);
      },
      // @method createIcon(oldIcon?: HTMLElement): HTMLElement
      // Called internally when the icon has to be shown, returns a `<img>` HTML element
      // styled according to the options.
      createIcon: function(t) {
        return this._createIcon("icon", t);
      },
      // @method createShadow(oldIcon?: HTMLElement): HTMLElement
      // As `createIcon`, but for the shadow beneath it.
      createShadow: function(t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function(t, e) {
        var i = this._getIconUrl(t);
        if (!i) {
          if (t === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var n = this._createImg(i, e && e.tagName === "IMG" ? e : null);
        return this._setIconStyles(n, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), n;
      },
      _setIconStyles: function(t, e) {
        var i = this.options, n = i[e + "Size"];
        typeof n == "number" && (n = [n, n]);
        var o = C(n), h = C(e === "shadow" && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (i.className || ""), h && (t.style.marginLeft = -h.x + "px", t.style.marginTop = -h.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
      },
      _createImg: function(t, e) {
        return e = e || document.createElement("img"), e.src = t, e;
      },
      _getIconUrl: function(t) {
        return M.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      }
    });
    function Ys(t) {
      return new Ut(t);
    }
    var he = Ut.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function(t) {
        return typeof he.imagePath != "string" && (he.imagePath = this._detectIconPath()), (this.options.imagePath || he.imagePath) + Ut.prototype._getIconUrl.call(this, t);
      },
      _stripUrl: function(t) {
        var e = function(i, n, o) {
          var h = n.exec(i);
          return h && h[o];
        };
        return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var t = Z("div", "leaflet-default-icon-path", document.body), e = ee(t, "background-image") || ee(t, "backgroundImage");
        if (document.body.removeChild(t), e = this._stripUrl(e), e)
          return e;
        var i = document.querySelector('link[href$="leaflet.css"]');
        return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
      }
    }), jn = gt.extend({
      initialize: function(t) {
        this._marker = t;
      },
      addHooks: function() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new Ct(t, t, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), z(t, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && W(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(t) {
        var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, o = this._marker.options.autoPanPadding, h = Bt(e._icon), c = i.getPixelBounds(), _ = i.getPixelOrigin(), p = nt(
          c.min._subtract(_).add(o),
          c.max._subtract(_).subtract(o)
        );
        if (!p.contains(h)) {
          var y = C(
            (Math.max(p.max.x, h.x) - p.max.x) / (c.max.x - p.max.x) - (Math.min(p.min.x, h.x) - p.min.x) / (c.min.x - p.min.x),
            (Math.max(p.max.y, h.y) - p.max.y) / (c.max.y - p.max.y) - (Math.min(p.min.y, h.y) - p.min.y) / (c.min.y - p.min.y)
          ).multiplyBy(n);
          i.panBy(y, { animate: !1 }), this._draggable._newPos._add(y), this._draggable._startPos._add(y), G(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = it(this._adjustPan.bind(this, t));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(t) {
        this._marker.options.autoPan && (at(this._panRequest), this._panRequest = it(this._adjustPan.bind(this, t)));
      },
      _onDrag: function(t) {
        var e = this._marker, i = e._shadow, n = Bt(e._icon), o = e._map.layerPointToLatLng(n);
        i && G(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function(t) {
        at(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      }
    }), Se = _t.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new he(),
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option keyboard: Boolean = true
        // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
        keyboard: !0,
        // @option title: String = ''
        // Text for the browser tooltip that appear on marker hover (no tooltip by default).
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        title: "",
        // @option alt: String = 'Marker'
        // Text for the `alt` attribute of the icon image.
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        alt: "Marker",
        // @option zIndexOffset: Number = 0
        // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
        zIndexOffset: 0,
        // @option opacity: Number = 1.0
        // The opacity of the marker.
        opacity: 1,
        // @option riseOnHover: Boolean = false
        // If `true`, the marker will get on top of others when you hover the mouse over it.
        riseOnHover: !1,
        // @option riseOffset: Number = 250
        // The z-index offset used for the `riseOnHover` feature.
        riseOffset: 250,
        // @option pane: String = 'markerPane'
        // `Map pane` where the markers icon will be added.
        pane: "markerPane",
        // @option shadowPane: String = 'shadowPane'
        // `Map pane` where the markers shadow will be added.
        shadowPane: "shadowPane",
        // @option bubblingMouseEvents: Boolean = false
        // When `true`, a mouse event on this marker will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !1,
        // @option autoPanOnFocus: Boolean = true
        // When `true`, the map will pan whenever the marker is focused (via
        // e.g. pressing `tab` on the keyboard) to ensure the marker is
        // visible within the map's bounds
        autoPanOnFocus: !0,
        // @section Draggable marker options
        // @option draggable: Boolean = false
        // Whether the marker is draggable with mouse/touch or not.
        draggable: !1,
        // @option autoPan: Boolean = false
        // Whether to pan the map when dragging this marker near its edge or not.
        autoPan: !1,
        // @option autoPanPadding: Point = Point(50, 50)
        // Distance (in pixels to the left/right and to the top/bottom) of the
        // map edge to start panning the map.
        autoPanPadding: [50, 50],
        // @option autoPanSpeed: Number = 10
        // Number of pixels the map should pan by.
        autoPanSpeed: 10
      },
      /* @section
       *
       * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
       */
      initialize: function(t, e) {
        P(this, e), this._latlng = B(t);
      },
      onAdd: function(t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function(t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      // @method getLatLng: LatLng
      // Returns the current geographical position of the marker.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Changes the marker position to the given point.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = B(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method setZIndexOffset(offset: Number): this
      // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
      setZIndexOffset: function(t) {
        return this.options.zIndexOffset = t, this.update();
      },
      // @method getIcon: Icon
      // Returns the current icon used by the marker
      getIcon: function() {
        return this.options.icon;
      },
      // @method setIcon(icon: Icon): this
      // Changes the marker icon.
      setIcon: function(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function() {
        return this._icon;
      },
      update: function() {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function() {
        var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i = t.icon.createIcon(this._icon), n = !1;
        i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), z(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && k(i, "focus", this._panOnFocus, this);
        var o = t.icon.createShadow(this._shadow), h = !1;
        o !== this._shadow && (this._removeShadow(), h = !0), o && (z(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && h && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && F(this._icon, "focus", this._panOnFocus, this), U(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && U(this._shadow), this._shadow = null;
      },
      _setPos: function(t) {
        this._icon && G(this._icon, t), this._shadow && G(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(e);
      },
      _initInteraction: function() {
        if (this.options.interactive && (z(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), jn)) {
          var t = this.options.draggable;
          this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new jn(this), t && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var t = this.options.opacity;
        this._icon && ht(this._icon, t), this._shadow && ht(this._shadow, t);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _panOnFocus: function() {
        var t = this._map;
        if (t) {
          var e = this.options.icon.options, i = e.iconSize ? C(e.iconSize) : C(0, 0), n = e.iconAnchor ? C(e.iconAnchor) : C(0, 0);
          t.panInside(this._latlng, {
            paddingTopLeft: n,
            paddingBottomRight: i.subtract(n)
          });
        }
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
    function Qs(t, e) {
      return new Se(t, e);
    }
    var Ot = _t.extend({
      // @section
      // @aka Path options
      options: {
        // @option stroke: Boolean = true
        // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
        stroke: !0,
        // @option color: String = '#3388ff'
        // Stroke color
        color: "#3388ff",
        // @option weight: Number = 3
        // Stroke width in pixels
        weight: 3,
        // @option opacity: Number = 1.0
        // Stroke opacity
        opacity: 1,
        // @option lineCap: String= 'round'
        // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
        lineCap: "round",
        // @option lineJoin: String = 'round'
        // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
        lineJoin: "round",
        // @option dashArray: String = null
        // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashArray: null,
        // @option dashOffset: String = null
        // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashOffset: null,
        // @option fill: Boolean = depends
        // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
        fill: !1,
        // @option fillColor: String = *
        // Fill color. Defaults to the value of the [`color`](#path-color) option
        fillColor: null,
        // @option fillOpacity: Number = 0.2
        // Fill opacity.
        fillOpacity: 0.2,
        // @option fillRule: String = 'evenodd'
        // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
        fillRule: "evenodd",
        // className: '',
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option bubblingMouseEvents: Boolean = true
        // When `true`, a mouse event on this path will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !0
      },
      beforeAdd: function(t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function() {
        this._renderer._removePath(this);
      },
      // @method redraw(): this
      // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
      redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      },
      // @method setStyle(style: Path options): this
      // Changes the appearance of a Path based on the options in the `Path options` object.
      setStyle: function(t) {
        return P(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all path layers.
      bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all path layers.
      bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function() {
        return this._path;
      },
      _reset: function() {
        this._project(), this._update();
      },
      _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }), Ee = Ot.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(t, e) {
        P(this, e), this._latlng = B(t), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = B(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method getLatLng(): LatLng
      // Returns the current geographical position of the circle marker
      getLatLng: function() {
        return this._latlng;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle marker. Units are in pixels.
      setRadius: function(t) {
        return this.options.radius = this._radius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of the circle
      getRadius: function() {
        return this._radius;
      },
      setStyle: function(t) {
        var e = t && t.radius || this._radius;
        return Ot.prototype.setStyle.call(this, t), this.setRadius(e), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
        this._pxBounds = new H(this._point.subtract(n), this._point.add(n));
      },
      _update: function() {
        this._map && this._updatePath();
      },
      _updatePath: function() {
        this._renderer._updateCircle(this);
      },
      _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
    function tr(t, e) {
      return new Ee(t, e);
    }
    var Oi = Ee.extend({
      initialize: function(t, e, i) {
        if (typeof e == "number" && (e = l({}, i, { radius: e })), P(this, e), this._latlng = B(t), isNaN(this.options.radius))
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle. Units are in meters.
      setRadius: function(t) {
        return this._mRadius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of a circle. Units are in meters.
      getRadius: function() {
        return this._mRadius;
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        var t = [this._radius, this._radiusY || this._radius];
        return new ot(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: Ot.prototype.setStyle,
      _project: function() {
        var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
        if (n.distance === Et.distance) {
          var o = Math.PI / 180, h = this._mRadius / Et.R / o, c = i.project([e + h, t]), _ = i.project([e - h, t]), p = c.add(_).divideBy(2), y = i.unproject(p).lat, T = Math.acos((Math.cos(h * o) - Math.sin(e * o) * Math.sin(y * o)) / (Math.cos(e * o) * Math.cos(y * o))) / o;
          (isNaN(T) || T === 0) && (T = h / Math.cos(Math.PI / 180 * e)), this._point = p.subtract(i.getPixelOrigin()), this._radius = isNaN(T) ? 0 : p.x - i.project([y, t - T]).x, this._radiusY = p.y - c.y;
        } else {
          var E = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(E).x;
        }
        this._updateBounds();
      }
    });
    function er(t, e, i) {
      return new Oi(t, e, i);
    }
    var Tt = Ot.extend({
      // @section
      // @aka Polyline options
      options: {
        // @option smoothFactor: Number = 1.0
        // How much to simplify the polyline on each zoom level. More means
        // better performance and smoother look, and less means more accurate representation.
        smoothFactor: 1,
        // @option noClip: Boolean = false
        // Disable polyline clipping.
        noClip: !1
      },
      initialize: function(t, e) {
        P(this, e), this._setLatLngs(t);
      },
      // @method getLatLngs(): LatLng[]
      // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
      getLatLngs: function() {
        return this._latlngs;
      },
      // @method setLatLngs(latlngs: LatLng[]): this
      // Replaces all the points in the polyline with the given array of geographical points.
      setLatLngs: function(t) {
        return this._setLatLngs(t), this.redraw();
      },
      // @method isEmpty(): Boolean
      // Returns `true` if the Polyline has no LatLngs.
      isEmpty: function() {
        return !this._latlngs.length;
      },
      // @method closestLayerPoint(p: Point): Point
      // Returns the point closest to `p` on the Polyline.
      closestLayerPoint: function(t) {
        for (var e = 1 / 0, i = null, n = ae, o, h, c = 0, _ = this._parts.length; c < _; c++)
          for (var p = this._parts[c], y = 1, T = p.length; y < T; y++) {
            o = p[y - 1], h = p[y];
            var E = n(t, o, h, !0);
            E < e && (e = E, i = n(t, o, h));
          }
        return i && (i.distance = Math.sqrt(e)), i;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Un(this._defaultShape(), this._map.options.crs);
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        return this._bounds;
      },
      // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
      // Adds a given point to the polyline. By default, adds to the first ring of
      // the polyline in case of a multi-polyline, but can be overridden by passing
      // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
      addLatLng: function(t, e) {
        return e = e || this._defaultShape(), t = B(t), e.push(t), this._bounds.extend(t), this.redraw();
      },
      _setLatLngs: function(t) {
        this._bounds = new ot(), this._latlngs = this._convertLatLngs(t);
      },
      _defaultShape: function() {
        return ut(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(t) {
        for (var e = [], i = ut(t), n = 0, o = t.length; n < o; n++)
          i ? (e[n] = B(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
        return e;
      },
      _project: function() {
        var t = new H();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
      },
      _updateBounds: function() {
        var t = this._clickTolerance(), e = new O(t, t);
        this._rawPxBounds && (this._pxBounds = new H([
          this._rawPxBounds.min.subtract(e),
          this._rawPxBounds.max.add(e)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(t, e, i) {
        var n = t[0] instanceof D, o = t.length, h, c;
        if (n) {
          for (c = [], h = 0; h < o; h++)
            c[h] = this._map.latLngToLayerPoint(t[h]), i.extend(c[h]);
          e.push(c);
        } else
          for (h = 0; h < o; h++)
            this._projectLatlngs(t[h], e, i);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var t = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts, i, n, o, h, c, _, p;
          for (i = 0, o = 0, h = this._rings.length; i < h; i++)
            for (p = this._rings[i], n = 0, c = p.length; n < c - 1; n++)
              _ = Fn(p[n], p[n + 1], t, n, !0), _ && (e[o] = e[o] || [], e[o].push(_[0]), (_[1] !== p[n + 1] || n === c - 2) && (e[o].push(_[1]), o++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
          t[i] = Zn(t[i], e);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t, e) {
        var i, n, o, h, c, _, p = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (i = 0, h = this._parts.length; i < h; i++)
          for (_ = this._parts[i], n = 0, c = _.length, o = c - 1; n < c; o = n++)
            if (!(!e && n === 0) && Nn(t, _[o], _[n]) <= p)
              return !0;
        return !1;
      }
    });
    function ir(t, e) {
      return new Tt(t, e);
    }
    Tt._flat = Hn;
    var Wt = Tt.extend({
      options: {
        fill: !0
      },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return In(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(t) {
        var e = Tt.prototype._convertLatLngs.call(this, t), i = e.length;
        return i >= 2 && e[0] instanceof D && e[0].equals(e[i - 1]) && e.pop(), e;
      },
      _setLatLngs: function(t) {
        Tt.prototype._setLatLngs.call(this, t), ut(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return ut(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var t = this._renderer._bounds, e = this.options.weight, i = new O(e, e);
        if (t = new H(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var n = 0, o = this._rings.length, h; n < o; n++)
            h = Rn(this._rings[n], t, !0), h.length && this._parts.push(h);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        var e = !1, i, n, o, h, c, _, p, y;
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (h = 0, p = this._parts.length; h < p; h++)
          for (i = this._parts[h], c = 0, y = i.length, _ = y - 1; c < y; _ = c++)
            n = i[c], o = i[_], n.y > t.y != o.y > t.y && t.x < (o.x - n.x) * (t.y - n.y) / (o.y - n.y) + n.x && (e = !e);
        return e || Tt.prototype._containsPoint.call(this, t, !0);
      }
    });
    function nr(t, e) {
      return new Wt(t, e);
    }
    var bt = Lt.extend({
      /* @section
       * @aka GeoJSON options
       *
       * @option pointToLayer: Function = *
       * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
       * called when data is added, passing the GeoJSON point feature and its `LatLng`.
       * The default is to spawn a default `Marker`:
       * ```js
       * function(geoJsonPoint, latlng) {
       * 	return L.marker(latlng);
       * }
       * ```
       *
       * @option style: Function = *
       * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
       * called internally when data is added.
       * The default value is to not override any defaults:
       * ```js
       * function (geoJsonFeature) {
       * 	return {}
       * }
       * ```
       *
       * @option onEachFeature: Function = *
       * A `Function` that will be called once for each created `Feature`, after it has
       * been created and styled. Useful for attaching events and popups to features.
       * The default is to do nothing with the newly created layers:
       * ```js
       * function (feature, layer) {}
       * ```
       *
       * @option filter: Function = *
       * A `Function` that will be used to decide whether to include a feature or not.
       * The default is to include all features:
       * ```js
       * function (geoJsonFeature) {
       * 	return true;
       * }
       * ```
       * Note: dynamically changing the `filter` option will have effect only on newly
       * added data. It will _not_ re-evaluate already included features.
       *
       * @option coordsToLatLng: Function = *
       * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
       * The default is the `coordsToLatLng` static method.
       *
       * @option markersInheritOptions: Boolean = false
       * Whether default Markers for "Point" type Features inherit from group options.
       */
      initialize: function(t, e) {
        P(this, e), this._layers = {}, t && this.addData(t);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(t) {
        var e = q(t) ? t : t.features, i, n, o;
        if (e) {
          for (i = 0, n = e.length; i < n; i++)
            o = e[i], (o.geometries || o.geometry || o.features || o.coordinates) && this.addData(o);
          return this;
        }
        var h = this.options;
        if (h.filter && !h.filter(t))
          return this;
        var c = Ce(t, h);
        return c ? (c.feature = ze(t), c.defaultOptions = c.options, this.resetStyle(c), h.onEachFeature && h.onEachFeature(t, c), this.addLayer(c)) : this;
      },
      // @method resetStyle( <Path> layer? ): this
      // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
      // If `layer` is omitted, the style of all features in the current layer is reset.
      resetStyle: function(t) {
        return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = l({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
      },
      // @method setStyle( <Function> style ): this
      // Changes styles of GeoJSON vector layers with the given style function.
      setStyle: function(t) {
        return this.eachLayer(function(e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function(t, e) {
        t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
      }
    });
    function Ce(t, e) {
      var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, o = [], h = e && e.pointToLayer, c = e && e.coordsToLatLng || ki, _, p, y, T;
      if (!n && !i)
        return null;
      switch (i.type) {
        case "Point":
          return _ = c(n), qn(h, t, _, e);
        case "MultiPoint":
          for (y = 0, T = n.length; y < T; y++)
            _ = c(n[y]), o.push(qn(h, t, _, e));
          return new Lt(o);
        case "LineString":
        case "MultiLineString":
          return p = Oe(n, i.type === "LineString" ? 0 : 1, c), new Tt(p, e);
        case "Polygon":
        case "MultiPolygon":
          return p = Oe(n, i.type === "Polygon" ? 1 : 2, c), new Wt(p, e);
        case "GeometryCollection":
          for (y = 0, T = i.geometries.length; y < T; y++) {
            var E = Ce({
              geometry: i.geometries[y],
              type: "Feature",
              properties: t.properties
            }, e);
            E && o.push(E);
          }
          return new Lt(o);
        case "FeatureCollection":
          for (y = 0, T = i.features.length; y < T; y++) {
            var A = Ce(i.features[y], e);
            A && o.push(A);
          }
          return new Lt(o);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function qn(t, e, i, n) {
      return t ? t(e, i) : new Se(i, n && n.markersInheritOptions && n);
    }
    function ki(t) {
      return new D(t[1], t[0], t[2]);
    }
    function Oe(t, e, i) {
      for (var n = [], o = 0, h = t.length, c; o < h; o++)
        c = e ? Oe(t[o], e - 1, i) : (i || ki)(t[o]), n.push(c);
      return n;
    }
    function zi(t, e) {
      return t = B(t), t.alt !== void 0 ? [N(t.lng, e), N(t.lat, e), N(t.alt, e)] : [N(t.lng, e), N(t.lat, e)];
    }
    function ke(t, e, i, n) {
      for (var o = [], h = 0, c = t.length; h < c; h++)
        o.push(e ? ke(t[h], ut(t[h]) ? 0 : e - 1, i, n) : zi(t[h], n));
      return !e && i && o.length > 0 && o.push(o[0].slice()), o;
    }
    function jt(t, e) {
      return t.feature ? l({}, t.feature, { geometry: e }) : ze(e);
    }
    function ze(t) {
      return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
        type: "Feature",
        properties: {},
        geometry: t
      };
    }
    var Ai = {
      toGeoJSON: function(t) {
        return jt(this, {
          type: "Point",
          coordinates: zi(this.getLatLng(), t)
        });
      }
    };
    Se.include(Ai), Oi.include(Ai), Ee.include(Ai), Tt.include({
      toGeoJSON: function(t) {
        var e = !ut(this._latlngs), i = ke(this._latlngs, e ? 1 : 0, !1, t);
        return jt(this, {
          type: (e ? "Multi" : "") + "LineString",
          coordinates: i
        });
      }
    }), Wt.include({
      toGeoJSON: function(t) {
        var e = !ut(this._latlngs), i = e && !ut(this._latlngs[0]), n = ke(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
        return e || (n = [n]), jt(this, {
          type: (i ? "Multi" : "") + "Polygon",
          coordinates: n
        });
      }
    }), Ht.include({
      toMultiPoint: function(t) {
        var e = [];
        return this.eachLayer(function(i) {
          e.push(i.toGeoJSON(t).geometry.coordinates);
        }), jt(this, {
          type: "MultiPoint",
          coordinates: e
        });
      },
      // @method toGeoJSON(precision?: Number|false): Object
      // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
      // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(t) {
        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (e === "MultiPoint")
          return this.toMultiPoint(t);
        var i = e === "GeometryCollection", n = [];
        return this.eachLayer(function(o) {
          if (o.toGeoJSON) {
            var h = o.toGeoJSON(t);
            if (i)
              n.push(h.geometry);
            else {
              var c = ze(h);
              c.type === "FeatureCollection" ? n.push.apply(n, c.features) : n.push(c);
            }
          }
        }), i ? jt(this, {
          geometries: n,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: n
        };
      }
    });
    function Vn(t, e) {
      return new bt(t, e);
    }
    var or = Vn, Ae = _t.extend({
      // @section
      // @aka ImageOverlay options
      options: {
        // @option opacity: Number = 1.0
        // The opacity of the image overlay.
        opacity: 1,
        // @option alt: String = ''
        // Text for the `alt` attribute of the image (useful for accessibility).
        alt: "",
        // @option interactive: Boolean = false
        // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
        interactive: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the image.
        // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option errorOverlayUrl: String = ''
        // URL to the overlay image to show in place of the overlay that failed to load.
        errorOverlayUrl: "",
        // @option zIndex: Number = 1
        // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
        zIndex: 1,
        // @option className: String = ''
        // A custom class name to assign to the image. Empty by default.
        className: ""
      },
      initialize: function(t, e, i) {
        this._url = t, this._bounds = V(e), P(this, i);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (z(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        U(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      // @method setOpacity(opacity: Number): this
      // Sets the opacity of the overlay.
      setOpacity: function(t) {
        return this.options.opacity = t, this._image && this._updateOpacity(), this;
      },
      setStyle: function(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all overlays.
      bringToFront: function() {
        return this._map && Dt(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && Ft(this._image), this;
      },
      // @method setUrl(url: String): this
      // Changes the URL of the image.
      setUrl: function(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      },
      // @method setBounds(bounds: LatLngBounds): this
      // Update the bounds that this ImageOverlay covers
      setBounds: function(t) {
        return this._bounds = V(t), this._map && this._reset(), this;
      },
      getEvents: function() {
        var t = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method setZIndex(value: Number): this
      // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method getBounds(): LatLngBounds
      // Get the bounds that this ImageOverlay covers
      getBounds: function() {
        return this._bounds;
      },
      // @method getElement(): HTMLElement
      // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
      // used by this overlay.
      getElement: function() {
        return this._image;
      },
      _initImage: function() {
        var t = this._url.tagName === "IMG", e = this._image = t ? this._url : Z("img");
        if (z(e, "leaflet-image-layer"), this._zoomAnimated && z(e, "leaflet-zoom-animated"), this.options.className && z(e, this.options.className), e.onselectstart = v, e.onmousemove = v, e.onload = f(this.fire, this, "load"), e.onerror = f(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
          this._url = e.src;
          return;
        }
        e.src = this._url, e.alt = this.options.alt;
      },
      _animateZoom: function(t) {
        var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        At(this._image, i, e);
      },
      _reset: function() {
        var t = this._image, e = new H(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), i = e.getSize();
        G(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
      },
      _updateOpacity: function() {
        ht(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      },
      // @method getCenter(): LatLng
      // Returns the center of the ImageOverlay.
      getCenter: function() {
        return this._bounds.getCenter();
      }
    }), sr = function(t, e, i) {
      return new Ae(t, e, i);
    }, Gn = Ae.extend({
      // @section
      // @aka VideoOverlay options
      options: {
        // @option autoplay: Boolean = true
        // Whether the video starts playing automatically when loaded.
        // On some browsers autoplay will only work with `muted: true`
        autoplay: !0,
        // @option loop: Boolean = true
        // Whether the video will loop back to the beginning when played.
        loop: !0,
        // @option keepAspectRatio: Boolean = true
        // Whether the video will save aspect ratio after the projection.
        // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
        keepAspectRatio: !0,
        // @option muted: Boolean = false
        // Whether the video starts on mute when loaded.
        muted: !1,
        // @option playsInline: Boolean = true
        // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
        playsInline: !0
      },
      _initImage: function() {
        var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : Z("video");
        if (z(e, "leaflet-image-layer"), this._zoomAnimated && z(e, "leaflet-zoom-animated"), this.options.className && z(e, this.options.className), e.onselectstart = v, e.onmousemove = v, e.onloadeddata = f(this.fire, this, "load"), t) {
          for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++)
            n.push(i[o].src);
          this._url = i.length > 0 ? n : [e.src];
          return;
        }
        q(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
        for (var h = 0; h < this._url.length; h++) {
          var c = Z("source");
          c.src = this._url[h], e.appendChild(c);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function rr(t, e, i) {
      return new Gn(t, e, i);
    }
    var Kn = Ae.extend({
      _initImage: function() {
        var t = this._image = this._url;
        z(t, "leaflet-image-layer"), this._zoomAnimated && z(t, "leaflet-zoom-animated"), this.options.className && z(t, this.options.className), t.onselectstart = v, t.onmousemove = v;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function ar(t, e, i) {
      return new Kn(t, e, i);
    }
    var vt = _t.extend({
      // @section
      // @aka DivOverlay options
      options: {
        // @option interactive: Boolean = false
        // If true, the popup/tooltip will listen to the mouse events.
        interactive: !1,
        // @option offset: Point = Point(0, 0)
        // The offset of the overlay position.
        offset: [0, 0],
        // @option className: String = ''
        // A custom CSS class name to assign to the overlay.
        className: "",
        // @option pane: String = undefined
        // `Map pane` where the overlay will be added.
        pane: void 0,
        // @option content: String|HTMLElement|Function = ''
        // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
        // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
        content: ""
      },
      initialize: function(t, e) {
        t && (t instanceof D || q(t)) ? (this._latlng = B(t), P(this, e)) : (P(this, t), this._source = e), this.options.content && (this._content = this.options.content);
      },
      // @method openOn(map: Map): this
      // Adds the overlay to the map.
      // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
      },
      // @method close(): this
      // Closes the overlay.
      // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
      // and `layer.closePopup()`/`.closeTooltip()`.
      close: function() {
        return this._map && this._map.removeLayer(this), this;
      },
      // @method toggle(layer?: Layer): this
      // Opens or closes the overlay bound to layer depending on its current state.
      // Argument may be omitted only for overlay bound to layer.
      // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
      toggle: function(t) {
        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
      },
      onAdd: function(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && ht(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && ht(this._container, 1), this.bringToFront(), this.options.interactive && (z(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(t) {
        t._fadeAnimated ? (ht(this._container, 0), this._removeTimeout = setTimeout(f(U, void 0, this._container), 200)) : U(this._container), this.options.interactive && (W(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      // @namespace DivOverlay
      // @method getLatLng: LatLng
      // Returns the geographical point of the overlay.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Sets the geographical point where the overlay will open.
      setLatLng: function(t) {
        return this._latlng = B(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      // @method getContent: String|HTMLElement
      // Returns the content of the overlay.
      getContent: function() {
        return this._content;
      },
      // @method setContent(htmlContent: String|HTMLElement|Function): this
      // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
      // The function should return a `String` or `HTMLElement` to be used in the overlay.
      setContent: function(t) {
        return this._content = t, this.update(), this;
      },
      // @method getElement: String|HTMLElement
      // Returns the HTML container of the overlay.
      getElement: function() {
        return this._container;
      },
      // @method update: null
      // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
      update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function() {
        var t = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method isOpen: Boolean
      // Returns `true` when the overlay is visible on the map.
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      // @method bringToFront: this
      // Brings this overlay in front of other overlays (in the same map pane).
      bringToFront: function() {
        return this._map && Dt(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && Ft(this._container), this;
      },
      // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
      _prepareOpen: function(t) {
        var e = this._source;
        if (!e._map)
          return !1;
        if (e instanceof Lt) {
          e = null;
          var i = this._source._layers;
          for (var n in i)
            if (i[n]._map) {
              e = i[n];
              break;
            }
          if (!e)
            return !1;
          this._source = e;
        }
        if (!t)
          if (e.getCenter)
            t = e.getCenter();
          else if (e.getLatLng)
            t = e.getLatLng();
          else if (e.getBounds)
            t = e.getBounds().getCenter();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof e == "string")
            t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); )
              t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng), e = C(this.options.offset), i = this._getAnchor();
          this._zoomAnimated ? G(this._container, t.add(i)) : e = e.add(t).add(i);
          var n = this._containerBottom = -e.y, o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
          this._container.style.bottom = n + "px", this._container.style.left = o + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    R.include({
      _initOverlay: function(t, e, i, n) {
        var o = e;
        return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
      }
    }), _t.include({
      _initOverlay: function(t, e, i, n) {
        var o = i;
        return o instanceof t ? (P(o, n), o._source = this) : (o = e && !n ? e : new t(n, this), o.setContent(i)), o;
      }
    });
    var Be = vt.extend({
      // @section
      // @aka Popup options
      options: {
        // @option pane: String = 'popupPane'
        // `Map pane` where the popup will be added.
        pane: "popupPane",
        // @option offset: Point = Point(0, 7)
        // The offset of the popup position.
        offset: [0, 7],
        // @option maxWidth: Number = 300
        // Max width of the popup, in pixels.
        maxWidth: 300,
        // @option minWidth: Number = 50
        // Min width of the popup, in pixels.
        minWidth: 50,
        // @option maxHeight: Number = null
        // If set, creates a scrollable container of the given height
        // inside a popup if its content exceeds it.
        // The scrollable container can be styled using the
        // `leaflet-popup-scrolled` CSS class selector.
        maxHeight: null,
        // @option autoPan: Boolean = true
        // Set it to `false` if you don't want the map to do panning animation
        // to fit the opened popup.
        autoPan: !0,
        // @option autoPanPaddingTopLeft: Point = null
        // The margin between the popup and the top left corner of the map
        // view after autopanning was performed.
        autoPanPaddingTopLeft: null,
        // @option autoPanPaddingBottomRight: Point = null
        // The margin between the popup and the bottom right corner of the map
        // view after autopanning was performed.
        autoPanPaddingBottomRight: null,
        // @option autoPanPadding: Point = Point(5, 5)
        // Equivalent of setting both top left and bottom right autopan padding to the same value.
        autoPanPadding: [5, 5],
        // @option keepInView: Boolean = false
        // Set it to `true` if you want to prevent users from panning the popup
        // off of the screen while it is open.
        keepInView: !1,
        // @option closeButton: Boolean = true
        // Controls the presence of a close button in the popup.
        closeButton: !0,
        // @option autoClose: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the popup closing when another popup is opened.
        autoClose: !0,
        // @option closeOnEscapeKey: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the ESC key for closing of the popup.
        closeOnEscapeKey: !0,
        // @option closeOnClick: Boolean = *
        // Set it if you want to override the default behavior of the popup closing when user clicks
        // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
        // @option className: String = ''
        // A custom CSS class name to assign to the popup.
        className: ""
      },
      // @namespace Popup
      // @method openOn(map: Map): this
      // Alternative to `map.openPopup(popup)`.
      // Adds the popup to the map and closes the previous one.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, vt.prototype.openOn.call(this, t);
      },
      onAdd: function(t) {
        vt.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Ot || this._source.on("preclick", Rt));
      },
      onRemove: function(t) {
        vt.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Ot || this._source.off("preclick", Rt));
      },
      getEvents: function() {
        var t = vt.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _initLayout: function() {
        var t = "leaflet-popup", e = this._container = Z(
          "div",
          t + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), i = this._wrapper = Z("div", t + "-content-wrapper", e);
        if (this._contentNode = Z("div", t + "-content", i), se(e), Pi(this._contentNode), k(e, "contextmenu", Rt), this._tipContainer = Z("div", t + "-tip-container", e), this._tip = Z("div", t + "-tip", this._tipContainer), this.options.closeButton) {
          var n = this._closeButton = Z("a", t + "-close-button", e);
          n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', k(n, "click", function(o) {
            Y(o), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var t = this._contentNode, e = t.style;
        e.width = "", e.whiteSpace = "nowrap";
        var i = t.offsetWidth;
        i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
        var n = t.offsetHeight, o = this.options.maxHeight, h = "leaflet-popup-scrolled";
        o && n > o ? (e.height = o + "px", z(t, h)) : W(t, h), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
        G(this._container, e.add(i));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var t = this._map, e = parseInt(ee(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, o = new O(this._containerLeft, -i - this._containerBottom);
          o._add(Bt(this._container));
          var h = t.layerPointToContainerPoint(o), c = C(this.options.autoPanPadding), _ = C(this.options.autoPanPaddingTopLeft || c), p = C(this.options.autoPanPaddingBottomRight || c), y = t.getSize(), T = 0, E = 0;
          h.x + n + p.x > y.x && (T = h.x + n - y.x + p.x), h.x - T - _.x < 0 && (T = h.x - _.x), h.y + i + p.y > y.y && (E = h.y + i - y.y + p.y), h.y - E - _.y < 0 && (E = h.y - _.y), (T || E) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([T, E]));
        }
      },
      _getAnchor: function() {
        return C(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), hr = function(t, e) {
      return new Be(t, e);
    };
    R.mergeOptions({
      closePopupOnClick: !0
    }), R.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(t, e, i) {
        return this._initOverlay(Be, t, e, i).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(t) {
        return t = arguments.length ? t : this._popup, t && t.close(), this;
      }
    }), _t.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(t, e) {
        return this._popup = this._initOverlay(Be, this._popup, t, e), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      // @method unbindPopup(): this
      // Removes the popup previously bound with `bindPopup`.
      unbindPopup: function() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      // @method openPopup(latlng?: LatLng): this
      // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
      openPopup: function(t) {
        return this._popup && (this instanceof Lt || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
      },
      // @method closePopup(): this
      // Closes the popup bound to this layer if it is open.
      closePopup: function() {
        return this._popup && this._popup.close(), this;
      },
      // @method togglePopup(): this
      // Opens or closes the popup bound to this layer depending on its current state.
      togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      },
      // @method isPopupOpen(): boolean
      // Returns `true` if the popup bound to this layer is currently open.
      isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : !1;
      },
      // @method setPopupContent(content: String|HTMLElement|Popup): this
      // Sets the content of the popup bound to this layer.
      setPopupContent: function(t) {
        return this._popup && this._popup.setContent(t), this;
      },
      // @method getPopup(): Popup
      // Returns the popup bound to this layer.
      getPopup: function() {
        return this._popup;
      },
      _openPopup: function(t) {
        if (!(!this._popup || !this._map)) {
          It(t);
          var e = t.layer || t.target;
          if (this._popup._source === e && !(e instanceof Ot)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
            return;
          }
          this._popup._source = e, this.openPopup(t.latlng);
        }
      },
      _movePopup: function(t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function(t) {
        t.originalEvent.keyCode === 13 && this._openPopup(t);
      }
    });
    var Re = vt.extend({
      // @section
      // @aka Tooltip options
      options: {
        // @option pane: String = 'tooltipPane'
        // `Map pane` where the tooltip will be added.
        pane: "tooltipPane",
        // @option offset: Point = Point(0, 0)
        // Optional offset of the tooltip position.
        offset: [0, 0],
        // @option direction: String = 'auto'
        // Direction where to open the tooltip. Possible values are: `right`, `left`,
        // `top`, `bottom`, `center`, `auto`.
        // `auto` will dynamically switch between `right` and `left` according to the tooltip
        // position on the map.
        direction: "auto",
        // @option permanent: Boolean = false
        // Whether to open the tooltip permanently or only on mouseover.
        permanent: !1,
        // @option sticky: Boolean = false
        // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
        sticky: !1,
        // @option opacity: Number = 0.9
        // Tooltip container opacity.
        opacity: 0.9
      },
      onAdd: function(t) {
        vt.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(t) {
        vt.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var t = vt.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      },
      _initLayout: function() {
        var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = Z("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + w(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(t) {
        var e, i, n = this._map, o = this._container, h = n.latLngToContainerPoint(n.getCenter()), c = n.layerPointToContainerPoint(t), _ = this.options.direction, p = o.offsetWidth, y = o.offsetHeight, T = C(this.options.offset), E = this._getAnchor();
        _ === "top" ? (e = p / 2, i = y) : _ === "bottom" ? (e = p / 2, i = 0) : _ === "center" ? (e = p / 2, i = y / 2) : _ === "right" ? (e = 0, i = y / 2) : _ === "left" ? (e = p, i = y / 2) : c.x < h.x ? (_ = "right", e = 0, i = y / 2) : (_ = "left", e = p + (T.x + E.x) * 2, i = y / 2), t = t.subtract(C(e, i, !0)).add(T).add(E), W(o, "leaflet-tooltip-right"), W(o, "leaflet-tooltip-left"), W(o, "leaflet-tooltip-top"), W(o, "leaflet-tooltip-bottom"), z(o, "leaflet-tooltip-" + _), G(o, t);
      },
      _updatePosition: function() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function(t) {
        this.options.opacity = t, this._container && ht(this._container, t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(e);
      },
      _getAnchor: function() {
        return C(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), ur = function(t, e) {
      return new Re(t, e);
    };
    R.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(t, e, i) {
        return this._initOverlay(Re, t, e, i).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(t) {
        return t.close(), this;
      }
    }), _t.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(t, e) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Re, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(t) {
        if (!(!t && this._tooltipHandlersAdded)) {
          var e = t ? "off" : "on", i = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(t) {
        return this._tooltip && (this instanceof Lt || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      // @method closeTooltip(): this
      // Closes the tooltip bound to this layer if it is open.
      closeTooltip: function() {
        if (this._tooltip)
          return this._tooltip.close();
      },
      // @method toggleTooltip(): this
      // Opens or closes the tooltip bound to this layer depending on its current state.
      toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      // @method isTooltipOpen(): boolean
      // Returns `true` if the tooltip bound to this layer is currently open.
      isTooltipOpen: function() {
        return this._tooltip.isOpen();
      },
      // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
      // Sets the content of the tooltip bound to this layer.
      setTooltipContent: function(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      // @method getTooltip(): Tooltip
      // Returns the tooltip bound to this layer.
      getTooltip: function() {
        return this._tooltip;
      },
      _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && (k(e, "focus", function() {
          this._tooltip._source = t, this.openTooltip();
        }, this), k(e, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && e.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(t) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = !0;
            var e = this;
            this._map.once("moveend", function() {
              e._openOnceFlag = !1, e._openTooltip(t);
            });
            return;
          }
          this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
        }
      },
      _moveTooltip: function(t) {
        var e = t.latlng, i, n;
        this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(i), e = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(e);
      }
    });
    var Jn = Ut.extend({
      options: {
        // @section
        // @aka DivIcon options
        iconSize: [12, 12],
        // also can be set through CSS
        // iconAnchor: (Point),
        // popupAnchor: (Point),
        // @option html: String|HTMLElement = ''
        // Custom HTML code to put inside the div element, empty by default. Alternatively,
        // an instance of `HTMLElement`.
        html: !1,
        // @option bgPos: Point = [0, 0]
        // Optional relative position of the background, in pixels
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function(t) {
        var e = t && t.tagName === "DIV" ? t : document.createElement("div"), i = this.options;
        if (i.html instanceof Element ? (xe(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
          var n = C(i.bgPos);
          e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
        }
        return this._setIconStyles(e, "icon"), e;
      },
      createShadow: function() {
        return null;
      }
    });
    function lr(t) {
      return new Jn(t);
    }
    Ut.Default = he;
    var ue = _t.extend({
      // @section
      // @aka GridLayer options
      options: {
        // @option tileSize: Number|Point = 256
        // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
        tileSize: 256,
        // @option opacity: Number = 1.0
        // Opacity of the tiles. Can be used in the `createTile()` function.
        opacity: 1,
        // @option updateWhenIdle: Boolean = (depends)
        // Load new tiles only when panning ends.
        // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
        // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
        // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
        updateWhenIdle: M.mobile,
        // @option updateWhenZooming: Boolean = true
        // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
        updateWhenZooming: !0,
        // @option updateInterval: Number = 200
        // Tiles will not update more than once every `updateInterval` milliseconds when panning.
        updateInterval: 200,
        // @option zIndex: Number = 1
        // The explicit zIndex of the tile layer.
        zIndex: 1,
        // @option bounds: LatLngBounds = undefined
        // If set, tiles will only be loaded inside the set `LatLngBounds`.
        bounds: null,
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = undefined
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: void 0,
        // @option maxNativeZoom: Number = undefined
        // Maximum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
        // from `maxNativeZoom` level and auto-scaled.
        maxNativeZoom: void 0,
        // @option minNativeZoom: Number = undefined
        // Minimum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
        // from `minNativeZoom` level and auto-scaled.
        minNativeZoom: void 0,
        // @option noWrap: Boolean = false
        // Whether the layer is wrapped around the antimeridian. If `true`, the
        // GridLayer will only be displayed once at low zoom levels. Has no
        // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
        // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
        // tiles outside the CRS limits.
        noWrap: !1,
        // @option pane: String = 'tilePane'
        // `Map pane` where the grid layer will be added.
        pane: "tilePane",
        // @option className: String = ''
        // A custom class name to assign to the tile layer. Empty by default.
        className: "",
        // @option keepBuffer: Number = 2
        // When panning the map, keep this many rows and columns of tiles before unloading them.
        keepBuffer: 2
      },
      initialize: function(t) {
        P(this, t);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(t) {
        t._addZoomLimit(this);
      },
      onRemove: function(t) {
        this._removeAllTiles(), U(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (Dt(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (Ft(this._container), this._setAutoZIndex(Math.min)), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the tiles for this layer.
      getContainer: function() {
        return this._container;
      },
      // @method setOpacity(opacity: Number): this
      // Changes the [opacity](#gridlayer-opacity) of the grid layer.
      setOpacity: function(t) {
        return this.options.opacity = t, this._updateOpacity(), this;
      },
      // @method setZIndex(zIndex: Number): this
      // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method isLoading: Boolean
      // Returns `true` if any tile in the grid layer has not finished loading.
      isLoading: function() {
        return this._loading;
      },
      // @method redraw: this
      // Causes the layer to clear all the tiles and request them again.
      redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function() {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = b(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @section Extension methods
      // Layers extending `GridLayer` shall reimplement the following method.
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, must be overridden by classes extending `GridLayer`.
      // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
      // is specified, it must be called when the tile has finished loading and drawing.
      createTile: function() {
        return document.createElement("div");
      },
      // @section
      // @method getTileSize: Point
      // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
      getTileSize: function() {
        var t = this.options.tileSize;
        return t instanceof O ? t : new O(t, t);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(t) {
        for (var e = this.getPane().children, i = -t(-1 / 0, 1 / 0), n = 0, o = e.length, h; n < o; n++)
          h = e[n].style.zIndex, e[n] !== this._container && h && (i = t(i, +h));
        isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !M.ielt9) {
          ht(this._container, this.options.opacity);
          var t = +/* @__PURE__ */ new Date(), e = !1, i = !1;
          for (var n in this._tiles) {
            var o = this._tiles[n];
            if (!(!o.current || !o.loaded)) {
              var h = Math.min(1, (t - o.loaded) / 200);
              ht(o.el, h), h < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0);
            }
          }
          i && !this._noPrune && this._pruneTiles(), e && (at(this._fadeFrame), this._fadeFrame = it(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: v,
      _initContainer: function() {
        this._container || (this._container = Z("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var t = this._tileZoom, e = this.options.maxZoom;
        if (t !== void 0) {
          for (var i in this._levels)
            i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (U(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
          var n = this._levels[t], o = this._map;
          return n || (n = this._levels[t] = {}, n.el = Z("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), v(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
        }
      },
      _onUpdateLevel: v,
      _onRemoveLevel: v,
      _onCreateLevel: v,
      _pruneTiles: function() {
        if (this._map) {
          var t, e, i = this._map.getZoom();
          if (i > this.options.maxZoom || i < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles)
            e = this._tiles[t], e.retain = e.current;
          for (t in this._tiles)
            if (e = this._tiles[t], e.current && !e.active) {
              var n = e.coords;
              this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
            }
          for (t in this._tiles)
            this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function(t) {
        for (var e in this._tiles)
          this._tiles[e].coords.z === t && this._removeTile(e);
      },
      _removeAllTiles: function() {
        for (var t in this._tiles)
          this._removeTile(t);
      },
      _invalidateAll: function() {
        for (var t in this._levels)
          U(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(t, e, i, n) {
        var o = Math.floor(t / 2), h = Math.floor(e / 2), c = i - 1, _ = new O(+o, +h);
        _.z = +c;
        var p = this._tileCoordsToKey(_), y = this._tiles[p];
        return y && y.active ? (y.retain = !0, !0) : (y && y.loaded && (y.retain = !0), c > n ? this._retainParent(o, h, c, n) : !1);
      },
      _retainChildren: function(t, e, i, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var h = 2 * e; h < 2 * e + 2; h++) {
            var c = new O(o, h);
            c.z = i + 1;
            var _ = this._tileCoordsToKey(c), p = this._tiles[_];
            if (p && p.active) {
              p.retain = !0;
              continue;
            } else
              p && p.loaded && (p.retain = !0);
            i + 1 < n && this._retainChildren(o, h, i + 1, n);
          }
      },
      _resetView: function(t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      },
      _animateZoom: function(t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function(t) {
        var e = this.options;
        return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
      },
      _setView: function(t, e, i, n) {
        var o = Math.round(e);
        this.options.maxZoom !== void 0 && o > this.options.maxZoom || this.options.minZoom !== void 0 && o < this.options.minZoom ? o = void 0 : o = this._clampZoom(o);
        var h = this.options.updateWhenZooming && o !== this._tileZoom;
        (!n || h) && (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), o !== void 0 && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function(t, e) {
        for (var i in this._levels)
          this._setZoomTransform(this._levels[i], t, e);
      },
      _setZoomTransform: function(t, e, i) {
        var n = this._map.getZoomScale(i, t.zoom), o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
        M.any3d ? At(t.el, o, n) : G(t.el, o);
      },
      _resetGrid: function() {
        var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom, o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [
          Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
          Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)
        ], this._wrapY = e.wrapLat && !this.options.noWrap && [
          Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
          Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(t) {
        var e = this._map, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), n = e.getZoomScale(i, this._tileZoom), o = e.project(t, this._tileZoom).floor(), h = e.getSize().divideBy(n * 2);
        return new H(o.subtract(h), o.add(h));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(t) {
        var e = this._map;
        if (e) {
          var i = this._clampZoom(e.getZoom());
          if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
            var n = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(n), h = o.getCenter(), c = [], _ = this.options.keepBuffer, p = new H(
              o.getBottomLeft().subtract([_, -_]),
              o.getTopRight().add([_, -_])
            );
            if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var y in this._tiles) {
              var T = this._tiles[y].coords;
              (T.z !== this._tileZoom || !p.contains(new O(T.x, T.y))) && (this._tiles[y].current = !1);
            }
            if (Math.abs(i - this._tileZoom) > 1) {
              this._setView(t, i);
              return;
            }
            for (var E = o.min.y; E <= o.max.y; E++)
              for (var A = o.min.x; A <= o.max.x; A++) {
                var et = new O(A, E);
                if (et.z = this._tileZoom, !!this._isValidTile(et)) {
                  var $ = this._tiles[this._tileCoordsToKey(et)];
                  $ ? $.current = !0 : c.push(et);
                }
              }
            if (c.sort(function(st, Vt) {
              return st.distanceTo(h) - Vt.distanceTo(h);
            }), c.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var lt = document.createDocumentFragment();
              for (A = 0; A < c.length; A++)
                this._addTile(c[A], lt);
              this._level.el.appendChild(lt);
            }
          }
        }
      },
      _isValidTile: function(t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var i = this._globalTileRange;
          if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
            return !1;
        }
        if (!this.options.bounds)
          return !0;
        var n = this._tileCoordsToBounds(t);
        return V(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function(t) {
        var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), o = n.add(i), h = e.unproject(n, t.z), c = e.unproject(o, t.z);
        return [h, c];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(t) {
        var e = this._tileCoordsToNwSe(t), i = new ot(e[0], e[1]);
        return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(t) {
        var e = t.split(":"), i = new O(+e[0], +e[1]);
        return i.z = +e[2], i;
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        e && (U(e.el), delete this._tiles[t], this.fire("tileunload", {
          tile: e.el,
          coords: this._keyToTileCoords(t)
        }));
      },
      _initTile: function(t) {
        z(t, "leaflet-tile");
        var e = this.getTileSize();
        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = v, t.onmousemove = v, M.ielt9 && this.options.opacity < 1 && ht(t, this.options.opacity);
      },
      _addTile: function(t, e) {
        var i = this._getTilePos(t), n = this._tileCoordsToKey(t), o = this.createTile(this._wrapCoords(t), f(this._tileReady, this, t));
        this._initTile(o), this.createTile.length < 2 && it(f(this._tileReady, this, t, null, o)), G(o, i), this._tiles[n] = {
          el: o,
          coords: t,
          current: !0
        }, e.appendChild(o), this.fire("tileloadstart", {
          tile: o,
          coords: t
        });
      },
      _tileReady: function(t, e, i) {
        e && this.fire("tileerror", {
          error: e,
          tile: i,
          coords: t
        });
        var n = this._tileCoordsToKey(t);
        i = this._tiles[n], i && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (ht(i.el, 0), at(this._fadeFrame), this._fadeFrame = it(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (z(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: i.el,
          coords: t
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), M.ielt9 || !this._map._fadeAnimated ? it(this._pruneTiles, this) : setTimeout(f(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(t) {
        var e = new O(
          this._wrapX ? x(t.x, this._wrapX) : t.x,
          this._wrapY ? x(t.y, this._wrapY) : t.y
        );
        return e.z = t.z, e;
      },
      _pxBoundsToTileRange: function(t) {
        var e = this.getTileSize();
        return new H(
          t.min.unscaleBy(e).floor(),
          t.max.unscaleBy(e).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function() {
        for (var t in this._tiles)
          if (!this._tiles[t].loaded)
            return !1;
        return !0;
      }
    });
    function cr(t) {
      return new ue(t);
    }
    var qt = ue.extend({
      // @section
      // @aka TileLayer options
      options: {
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = 18
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: 18,
        // @option subdomains: String|String[] = 'abc'
        // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
        subdomains: "abc",
        // @option errorTileUrl: String = ''
        // URL to the tile image to show in place of the tile that failed to load.
        errorTileUrl: "",
        // @option zoomOffset: Number = 0
        // The zoom number used in tile URLs will be offset with this value.
        zoomOffset: 0,
        // @option tms: Boolean = false
        // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
        tms: !1,
        // @option zoomReverse: Boolean = false
        // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
        zoomReverse: !1,
        // @option detectRetina: Boolean = false
        // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
        detectRetina: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option referrerPolicy: Boolean|String = false
        // Whether the referrerPolicy attribute will be added to the tiles.
        // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
        // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
        // (e.g. to validate an API token).
        // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
        referrerPolicy: !1
      },
      initialize: function(t, e) {
        this._url = t, e = P(this, e), e.detectRetina && M.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      // @method setUrl(url: String, noRedraw?: Boolean): this
      // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
      // If the URL does not change, the layer will not be redrawn unless
      // the noRedraw parameter is set to false.
      setUrl: function(t, e) {
        return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
      },
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
      // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
      // callback is called when the tile has been loaded.
      createTile: function(t, e) {
        var i = document.createElement("img");
        return k(i, "load", f(this._tileOnLoad, this, e, i)), k(i, "error", f(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(t) {
        var e = {
          r: M.retina ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var i = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = i), e["-y"] = i;
        }
        return ft(this._url, l(e, this.options));
      },
      _tileOnLoad: function(t, e) {
        M.ielt9 ? setTimeout(f(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function(t, e, i) {
        var n = this.options.errorTileUrl;
        n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
      },
      _onTileRemove: function(t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var t = this._tileZoom, e = this.options.maxZoom, i = this.options.zoomReverse, n = this.options.zoomOffset;
        return i && (t = e - t), t + n;
      },
      _getSubdomain: function(t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      // stops loading all tiles in the background layer
      _abortLoading: function() {
        var t, e;
        for (t in this._tiles)
          if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = v, e.onerror = v, !e.complete)) {
            e.src = ve;
            var i = this._tiles[t].coords;
            U(e), delete this._tiles[t], this.fire("tileabort", {
              tile: e,
              coords: i
            });
          }
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        if (e)
          return e.el.setAttribute("src", ve), ue.prototype._removeTile.call(this, t);
      },
      _tileReady: function(t, e, i) {
        if (!(!this._map || i && i.getAttribute("src") === ve))
          return ue.prototype._tileReady.call(this, t, e, i);
      }
    });
    function $n(t, e) {
      return new qt(t, e);
    }
    var Xn = qt.extend({
      // @section
      // @aka TileLayer.WMS options
      // If any custom options not documented here are used, they will be sent to the
      // WMS server as extra parameters in each request URL. This can be useful for
      // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        // @option layers: String = ''
        // **(required)** Comma-separated list of WMS layers to show.
        layers: "",
        // @option styles: String = ''
        // Comma-separated list of WMS styles.
        styles: "",
        // @option format: String = 'image/jpeg'
        // WMS image format (use `'image/png'` for layers with transparency).
        format: "image/jpeg",
        // @option transparent: Boolean = false
        // If `true`, the WMS service will return images with transparency.
        transparent: !1,
        // @option version: String = '1.1.1'
        // Version of the WMS service to use
        version: "1.1.1"
      },
      options: {
        // @option crs: CRS = null
        // Coordinate Reference System to use for the WMS requests, defaults to
        // map CRS. Don't change this if you're not sure what it means.
        crs: null,
        // @option uppercase: Boolean = false
        // If `true`, WMS request parameter keys will be uppercase.
        uppercase: !1
      },
      initialize: function(t, e) {
        this._url = t;
        var i = l({}, this.defaultWmsParams);
        for (var n in e)
          n in this.options || (i[n] = e[n]);
        e = P(this, e);
        var o = e.detectRetina && M.retina ? 2 : 1, h = this.getTileSize();
        i.width = h.x * o, i.height = h.y * o, this.wmsParams = i;
      },
      onAdd: function(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[e] = this._crs.code, qt.prototype.onAdd.call(this, t);
      },
      getTileUrl: function(t) {
        var e = this._tileCoordsToNwSe(t), i = this._crs, n = nt(i.project(e[0]), i.project(e[1])), o = n.min, h = n.max, c = (this._wmsVersion >= 1.3 && this._crs === Wn ? [o.y, o.x, h.y, h.x] : [o.x, o.y, h.x, h.y]).join(","), _ = qt.prototype.getTileUrl.call(this, t);
        return _ + j(this.wmsParams, _, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + c;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(t, e) {
        return l(this.wmsParams, t), e || this.redraw(), this;
      }
    });
    function fr(t, e) {
      return new Xn(t, e);
    }
    qt.WMS = Xn, $n.wms = fr;
    var Mt = _t.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(t) {
        P(this, t), w(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), z(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function() {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function(t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function(t, e) {
        var i = this._map.getZoomScale(e, this._zoom), n = this._map.getSize().multiplyBy(0.5 + this.options.padding), o = this._map.project(this._center, e), h = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
        M.any3d ? At(this._container, h, i) : G(this._container, h);
      },
      _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var t in this._layers)
          this._layers[t]._reset();
      },
      _onZoomEnd: function() {
        for (var t in this._layers)
          this._layers[t]._project();
      },
      _updatePaths: function() {
        for (var t in this._layers)
          this._layers[t]._update();
      },
      _update: function() {
        var t = this.options.padding, e = this._map.getSize(), i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        this._bounds = new H(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), Yn = Mt.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var t = Mt.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        Mt.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var t = this._container = document.createElement("canvas");
        k(t, "mousemove", this._onMouseMove, this), k(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), k(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
      },
      _destroyContainer: function() {
        at(this._redrawRequest), delete this._ctx, U(this._container), F(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var t;
          this._redrawBounds = null;
          for (var e in this._layers)
            t = this._layers[e], t._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Mt.prototype._update.call(this);
          var t = this._bounds, e = this._container, i = t.getSize(), n = M.retina ? 2 : 1;
          G(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", M.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
        }
      },
      _reset: function() {
        Mt.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(t) {
        this._updateDashArray(t), this._layers[w(t)] = t;
        var e = t._order = {
          layer: t,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(t) {
        this._requestRedraw(t);
      },
      _removePath: function(t) {
        var e = t._order, i = e.next, n = e.prev;
        i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[w(t)], this._requestRedraw(t);
      },
      _updatePath: function(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      },
      _updateStyle: function(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function(t) {
        if (typeof t.options.dashArray == "string") {
          var e = t.options.dashArray.split(/[, ]+/), i = [], n, o;
          for (o = 0; o < e.length; o++) {
            if (n = Number(e[o]), isNaN(n))
              return;
            i.push(n);
          }
          t.options._dashArray = i;
        } else
          t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || it(this._redraw, this));
      },
      _extendRedrawBounds: function(t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new H(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var t = this._redrawBounds;
        if (t) {
          var e = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var t, e = this._redrawBounds;
        if (this._ctx.save(), e) {
          var i = e.getSize();
          this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next)
          t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(t, e) {
        if (this._drawing) {
          var i, n, o, h, c = t._parts, _ = c.length, p = this._ctx;
          if (_) {
            for (p.beginPath(), i = 0; i < _; i++) {
              for (n = 0, o = c[i].length; n < o; n++)
                h = c[i][n], p[n ? "lineTo" : "moveTo"](h.x, h.y);
              e && p.closePath();
            }
            this._fillStroke(p, t);
          }
        }
      },
      _updateCircle: function(t) {
        if (!(!this._drawing || t._empty())) {
          var e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
          o !== 1 && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, Math.PI * 2, !1), o !== 1 && i.restore(), this._fillStroke(i, t);
        }
      },
      _fillStroke: function(t, e) {
        var i = e.options;
        i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && i.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(t) {
        for (var e = this._map.mouseEventToLayerPoint(t), i, n, o = this._drawFirst; o; o = o.next)
          i = o.layer, i.options.interactive && i._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(i)) && (n = i);
        this._fireEvent(n ? [n] : !1, t);
      },
      _onMouseMove: function(t) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e);
        }
      },
      _handleMouseOut: function(t) {
        var e = this._hoveredLayer;
        e && (W(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var i, n, o = this._drawFirst; o; o = o.next)
            i = o.layer, i.options.interactive && i._containsPoint(e) && (n = i);
          n !== this._hoveredLayer && (this._handleMouseOut(t), n && (z(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(f(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(t, e, i) {
        this._map._fireDOMEvent(e, i || e.type, t);
      },
      _bringToFront: function(t) {
        var e = t._order;
        if (e) {
          var i = e.next, n = e.prev;
          if (i)
            i.prev = n;
          else
            return;
          n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
        }
      },
      _bringToBack: function(t) {
        var e = t._order;
        if (e) {
          var i = e.next, n = e.prev;
          if (n)
            n.next = i;
          else
            return;
          i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
        }
      }
    });
    function Qn(t) {
      return M.canvas ? new Yn(t) : null;
    }
    var le = function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
          return document.createElement("<lvml:" + t + ' class="lvml">');
        };
      } catch {
      }
      return function(t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(), dr = {
      _initContainer: function() {
        this._container = Z("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (Mt.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(t) {
        var e = t._container = le("shape");
        z(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = le("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[w(t)] = t;
      },
      _addPath: function(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function(t) {
        var e = t._container;
        U(e), t.removeInteractiveTarget(e), delete this._layers[w(t)];
      },
      _updateStyle: function(t) {
        var e = t._stroke, i = t._fill, n = t.options, o = t._container;
        o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = le("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = q(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = le("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null);
      },
      _updateCircle: function(t) {
        var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
      },
      _setPath: function(t, e) {
        t._path.v = e;
      },
      _bringToFront: function(t) {
        Dt(t._container);
      },
      _bringToBack: function(t) {
        Ft(t._container);
      }
    }, Ie = M.vml ? le : nn, ce = Mt.extend({
      _initContainer: function() {
        this._container = Ie("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Ie("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        U(this._container), F(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Mt.prototype._update.call(this);
          var t = this._bounds, e = t.getSize(), i = this._container;
          (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), G(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(t) {
        var e = t._path = Ie("path");
        t.options.className && z(e, t.options.className), t.options.interactive && z(e, "leaflet-interactive"), this._updateStyle(t), this._layers[w(t)] = t;
      },
      _addPath: function(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      },
      _removePath: function(t) {
        U(t._path), t.removeInteractiveTarget(t._path), delete this._layers[w(t)];
      },
      _updatePath: function(t) {
        t._project(), t._update();
      },
      _updateStyle: function(t) {
        var e = t._path, i = t.options;
        e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      },
      _updatePoly: function(t, e) {
        this._setPath(t, on(t._parts, e));
      },
      _updateCircle: function(t) {
        var e = t._point, i = Math.max(Math.round(t._radius), 1), n = Math.max(Math.round(t._radiusY), 1) || i, o = "a" + i + "," + n + " 0 1,0 ", h = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + i * 2 + ",0 " + o + -i * 2 + ",0 ";
        this._setPath(t, h);
      },
      _setPath: function(t, e) {
        t._path.setAttribute("d", e);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(t) {
        Dt(t._path);
      },
      _bringToBack: function(t) {
        Ft(t._path);
      }
    });
    M.vml && ce.include(dr);
    function to(t) {
      return M.svg || M.vml ? new ce(t) : null;
    }
    R.include({
      // @namespace Map; @method getRenderer(layer: Path): Renderer
      // Returns the instance of `Renderer` that should be used to render the given
      // `Path`. It will ensure that the `renderer` options of the map and paths
      // are respected, and that the renderers do exist on the map.
      getRenderer: function(t) {
        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
        return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
      },
      _getPaneRenderer: function(t) {
        if (t === "overlayPane" || t === void 0)
          return !1;
        var e = this._paneRenderers[t];
        return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
      },
      _createRenderer: function(t) {
        return this.options.preferCanvas && Qn(t) || to(t);
      }
    });
    var eo = Wt.extend({
      initialize: function(t, e) {
        Wt.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function(t) {
        return t = V(t), [
          t.getSouthWest(),
          t.getNorthWest(),
          t.getNorthEast(),
          t.getSouthEast()
        ];
      }
    });
    function _r(t, e) {
      return new eo(t, e);
    }
    ce.create = Ie, ce.pointsToPath = on, bt.geometryToLayer = Ce, bt.coordsToLatLng = ki, bt.coordsToLatLngs = Oe, bt.latLngToCoords = zi, bt.latLngsToCoords = ke, bt.getFeature = jt, bt.asFeature = ze, R.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var io = gt.extend({
      initialize: function(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      },
      addHooks: function() {
        k(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        F(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        U(this._pane), delete this._pane;
      },
      _resetState: function() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function(t) {
        if (!t.shiftKey || t.which !== 1 && t.button !== 1)
          return !1;
        this._clearDeferredResetState(), this._resetState(), ie(), _i(), this._startPoint = this._map.mouseEventToContainerPoint(t), k(document, {
          contextmenu: It,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(t) {
        this._moved || (this._moved = !0, this._box = Z("div", "leaflet-zoom-box", this._container), z(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var e = new H(this._point, this._startPoint), i = e.getSize();
        G(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
      },
      _finish: function() {
        this._moved && (U(this._box), W(this._container, "leaflet-crosshair")), ne(), pi(), F(document, {
          contextmenu: It,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(t) {
        if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(f(this._resetState, this), 0);
          var e = new ot(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
        }
      },
      _onKeyDown: function(t) {
        t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    R.addInitHook("addHandler", "boxZoom", io), R.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var no = gt.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(t) {
        var e = this._map, i = e.getZoom(), n = e.options.zoomDelta, o = t.originalEvent.shiftKey ? i - n : i + n;
        e.options.doubleClickZoom === "center" ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
      }
    });
    R.addInitHook("addHandler", "doubleClickZoom", no), R.mergeOptions({
      // @option dragging: Boolean = true
      // Whether the map is draggable with mouse/touch or not.
      dragging: !0,
      // @section Panning Inertia Options
      // @option inertia: Boolean = *
      // If enabled, panning of the map will have an inertia effect where
      // the map builds momentum while dragging and continues moving in
      // the same direction for some time. Feels especially nice on touch
      // devices. Enabled by default.
      inertia: !0,
      // @option inertiaDeceleration: Number = 3000
      // The rate with which the inertial movement slows down, in pixels/second².
      inertiaDeceleration: 3400,
      // px/s^2
      // @option inertiaMaxSpeed: Number = Infinity
      // Max speed of the inertial movement, in pixels/second.
      inertiaMaxSpeed: 1 / 0,
      // px/s
      // @option easeLinearity: Number = 0.2
      easeLinearity: 0.2,
      // TODO refactor, move to CRS
      // @option worldCopyJump: Boolean = false
      // With this option enabled, the map tracks when you pan to another "copy"
      // of the world and seamlessly jumps to the original one so that all overlays
      // like markers and vector layers are still visible.
      worldCopyJump: !1,
      // @option maxBoundsViscosity: Number = 0.0
      // If `maxBounds` is set, this option will control how solid the bounds
      // are when dragging the map around. The default value of `0.0` allows the
      // user to drag outside the bounds at normal speed, higher values will
      // slow down map dragging outside bounds, and `1.0` makes the bounds fully
      // solid, preventing the user from dragging outside the bounds.
      maxBoundsViscosity: 0
    });
    var oo = gt.extend({
      addHooks: function() {
        if (!this._draggable) {
          var t = this._map;
          this._draggable = new Ct(t._mapPane, t._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
        }
        z(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        W(this._map._container, "leaflet-grab"), W(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      moving: function() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function() {
        var t = this._map;
        if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var e = V(this._map.options.maxBounds);
          this._offsetLimit = nt(
            this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
            this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
          ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else
          this._offsetLimit = null;
        t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(t) {
        if (this._map.options.inertia) {
          var e = this._lastTime = +/* @__PURE__ */ new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(i), this._times.push(e), this._prunePositions(e);
        }
        this._map.fire("move", t).fire("drag", t);
      },
      _prunePositions: function(t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
          t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
        }
      },
      _onPreDragWrap: function() {
        var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, o = (n - e + i) % t + e - i, h = (n + e + i) % t - e - i, c = Math.abs(o + i) < Math.abs(h + i) ? o : h;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = c;
      },
      _onDragEnd: function(t) {
        var e = this._map, i = e.options, n = !i.inertia || t.noInertia || this._times.length < 2;
        if (e.fire("dragend", t), n)
          e.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var o = this._lastPos.subtract(this._positions[0]), h = (this._lastTime - this._times[0]) / 1e3, c = i.easeLinearity, _ = o.multiplyBy(c / h), p = _.distanceTo([0, 0]), y = Math.min(i.inertiaMaxSpeed, p), T = _.multiplyBy(y / p), E = y / (i.inertiaDeceleration * c), A = T.multiplyBy(-E / 2).round();
          !A.x && !A.y ? e.fire("moveend") : (A = e._limitOffset(A, e.options.maxBounds), it(function() {
            e.panBy(A, {
              duration: E,
              easeLinearity: c,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    R.addInitHook("addHandler", "dragging", oo), R.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var so = gt.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function(t) {
        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function() {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"), k(t, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function() {
        this._removeHooks(), F(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function() {
        if (!this._focused) {
          var t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, n = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(n, i);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(t) {
        var e = this._panKeys = {}, i = this.keyCodes, n, o;
        for (n = 0, o = i.left.length; n < o; n++)
          e[i.left[n]] = [-1 * t, 0];
        for (n = 0, o = i.right.length; n < o; n++)
          e[i.right[n]] = [t, 0];
        for (n = 0, o = i.down.length; n < o; n++)
          e[i.down[n]] = [0, t];
        for (n = 0, o = i.up.length; n < o; n++)
          e[i.up[n]] = [0, -1 * t];
      },
      _setZoomDelta: function(t) {
        var e = this._zoomKeys = {}, i = this.keyCodes, n, o;
        for (n = 0, o = i.zoomIn.length; n < o; n++)
          e[i.zoomIn[n]] = t;
        for (n = 0, o = i.zoomOut.length; n < o; n++)
          e[i.zoomOut[n]] = -t;
      },
      _addHooks: function() {
        k(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        F(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode, i = this._map, n;
          if (e in this._panKeys) {
            if (!i._panAnim || !i._panAnim._inProgress)
              if (n = this._panKeys[e], t.shiftKey && (n = C(n).multiplyBy(3)), i.options.maxBounds && (n = i._limitOffset(C(n), i.options.maxBounds)), i.options.worldCopyJump) {
                var o = i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));
                i.panTo(o);
              } else
                i.panBy(n);
          } else if (e in this._zoomKeys)
            i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey)
            i.closePopup();
          else
            return;
          It(t);
        }
      }
    });
    R.addInitHook("addHandler", "keyboard", so), R.mergeOptions({
      // @section Mouse wheel options
      // @option scrollWheelZoom: Boolean|String = true
      // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
      // it will zoom to the center of the view regardless of where the mouse was.
      scrollWheelZoom: !0,
      // @option wheelDebounceTime: Number = 40
      // Limits the rate at which a wheel can fire (in milliseconds). By default
      // user can't zoom via wheel more often than once per 40 ms.
      wheelDebounceTime: 40,
      // @option wheelPxPerZoomLevel: Number = 60
      // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
      // mean a change of one full zoom level. Smaller values will make wheel-zooming
      // faster (and vice versa).
      wheelPxPerZoomLevel: 60
    });
    var ro = gt.extend({
      addHooks: function() {
        k(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        F(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(t) {
        var e = On(t), i = this._map.options.wheelDebounceTime;
        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var n = Math.max(i - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(f(this._performZoom, this), n), It(t);
      },
      _performZoom: function() {
        var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
        t._stop();
        var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, h = i ? Math.ceil(o / i) * i : o, c = t._limitZoom(e + (this._delta > 0 ? h : -h)) - e;
        this._delta = 0, this._startTime = null, c && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + c) : t.setZoomAround(this._lastMousePos, e + c));
      }
    });
    R.addInitHook("addHandler", "scrollWheelZoom", ro);
    var pr = 600;
    R.mergeOptions({
      // @section Touch interaction options
      // @option tapHold: Boolean
      // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
      tapHold: M.touchNative && M.safari && M.mobile,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var ao = gt.extend({
      addHooks: function() {
        k(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        F(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(t) {
        if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
          var e = t.touches[0];
          this._startPos = this._newPos = new O(e.clientX, e.clientY), this._holdTimeout = setTimeout(f(function() {
            this._cancel(), this._isTapValid() && (k(document, "touchend", Y), k(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
          }, this), pr), k(document, "touchend touchcancel contextmenu", this._cancel, this), k(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        F(document, "touchend", Y), F(document, "touchend touchcancel", t);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), F(document, "touchend touchcancel contextmenu", this._cancel, this), F(document, "touchmove", this._onMove, this);
      },
      _onMove: function(t) {
        var e = t.touches[0];
        this._newPos = new O(e.clientX, e.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(t, e) {
        var i = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          // detail: 1,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY
          // button: 2,
          // buttons: 2
        });
        i._simulated = !0, e.target.dispatchEvent(i);
      }
    });
    R.addInitHook("addHandler", "tapHold", ao), R.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers.
      touchZoom: M.touch,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var ho = gt.extend({
      addHooks: function() {
        z(this._map._container, "leaflet-touch-zoom"), k(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        W(this._map._container, "leaflet-touch-zoom"), F(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(t) {
        var e = this._map;
        if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
          var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
          this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), k(document, "touchmove", this._onTouchMove, this), k(document, "touchend touchcancel", this._onTouchEnd, this), Y(t);
        }
      },
      _onTouchMove: function(t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map, i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]), o = i.distanceTo(n) / this._startDist;
          if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && o > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
            if (this._center = this._startLatLng, o === 1)
              return;
          } else {
            var h = i._add(n)._divideBy(2)._subtract(this._centerPoint);
            if (o === 1 && h.x === 0 && h.y === 0)
              return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(h), this._zoom);
          }
          this._moved || (e._moveStart(!0, !1), this._moved = !0), at(this._animRequest);
          var c = f(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = it(c, this, !0), Y(t);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, at(this._animRequest), F(document, "touchmove", this._onTouchMove, this), F(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    R.addInitHook("addHandler", "touchZoom", ho), R.BoxZoom = io, R.DoubleClickZoom = no, R.Drag = oo, R.Keyboard = so, R.ScrollWheelZoom = ro, R.TapHold = ao, R.TouchZoom = ho, r.Bounds = H, r.Browser = M, r.CRS = Pt, r.Canvas = Yn, r.Circle = Oi, r.CircleMarker = Ee, r.Class = xt, r.Control = dt, r.DivIcon = Jn, r.DivOverlay = vt, r.DomEvent = As, r.DomUtil = ks, r.Draggable = Ct, r.Evented = Xt, r.FeatureGroup = Lt, r.GeoJSON = bt, r.GridLayer = ue, r.Handler = gt, r.Icon = Ut, r.ImageOverlay = Ae, r.LatLng = D, r.LatLngBounds = ot, r.Layer = _t, r.LayerGroup = Ht, r.LineUtil = Vs, r.Map = R, r.Marker = Se, r.Mixin = Fs, r.Path = Ot, r.Point = O, r.PolyUtil = Hs, r.Polygon = Wt, r.Polyline = Tt, r.Popup = Be, r.PosAnimation = kn, r.Projection = Gs, r.Rectangle = eo, r.Renderer = Mt, r.SVG = ce, r.SVGOverlay = Kn, r.TileLayer = qt, r.Tooltip = Re, r.Transformation = ii, r.Util = Qo, r.VideoOverlay = Gn, r.bind = f, r.bounds = nt, r.canvas = Qn, r.circle = er, r.circleMarker = tr, r.control = re, r.divIcon = lr, r.extend = l, r.featureGroup = Xs, r.geoJSON = Vn, r.geoJson = or, r.gridLayer = cr, r.icon = Ys, r.imageOverlay = sr, r.latLng = B, r.latLngBounds = V, r.layerGroup = $s, r.map = Bs, r.marker = Qs, r.point = C, r.polygon = nr, r.polyline = ir, r.popup = hr, r.rectangle = _r, r.setOptions = P, r.stamp = w, r.svg = to, r.svgOverlay = ar, r.tileLayer = $n, r.tooltip = ur, r.transformation = Yt, r.version = u, r.videoOverlay = rr;
    var mr = window.L;
    r.noConflict = function() {
      return window.L = mr, this;
    }, window.L = r;
  });
})(Di, Di.exports);
var Co = Di.exports;
const tt = /* @__PURE__ */ Eo(Co);
var Oo = { exports: {} };
(function(s, a) {
  (function(r, u) {
    s.exports = r(Co), typeof u < "u" && u.L && (u.L.Control.MiniMap = r(L), u.L.control.minimap = function(l, d) {
      return new u.L.Control.MiniMap(l, d);
    });
  })(function(r) {
    var u = r.Control.extend({ includes: r.Evented ? r.Evented.prototype : r.Mixin.Events, options: { position: "bottomright", toggleDisplay: !1, zoomLevelOffset: -5, zoomLevelFixed: !1, centerFixed: !1, zoomAnimation: !1, autoToggleDisplay: !1, minimized: !1, width: 150, height: 150, collapsedWidth: 19, collapsedHeight: 19, aimingRectOptions: { color: "#ff7800", weight: 1, clickable: !1 }, shadowRectOptions: { color: "#000000", weight: 1, clickable: !1, opacity: 0, fillOpacity: 0 }, strings: { hideText: "Hide MiniMap", showText: "Show MiniMap" }, mapOptions: {} }, initialize: function(l, d) {
      r.Util.setOptions(this, d), this.options.aimingRectOptions.clickable = !1, this.options.shadowRectOptions.clickable = !1, this._layer = l;
    }, onAdd: function(l) {
      this._mainMap = l, this._container = r.DomUtil.create("div", "leaflet-control-minimap"), this._container.style.width = this.options.width + "px", this._container.style.height = this.options.height + "px", r.DomEvent.disableClickPropagation(this._container), r.DomEvent.on(this._container, "mousewheel", r.DomEvent.stopPropagation);
      var d = { attributionControl: !1, dragging: !this.options.centerFixed, zoomControl: !1, zoomAnimation: this.options.zoomAnimation, autoToggleDisplay: this.options.autoToggleDisplay, touchZoom: this.options.centerFixed ? "center" : !this._isZoomLevelFixed(), scrollWheelZoom: this.options.centerFixed ? "center" : !this._isZoomLevelFixed(), doubleClickZoom: this.options.centerFixed ? "center" : !this._isZoomLevelFixed(), boxZoom: !this._isZoomLevelFixed(), crs: l.options.crs };
      return d = r.Util.extend(this.options.mapOptions, d), this._miniMap = new r.Map(this._container, d), this._miniMap.addLayer(this._layer), this._mainMapMoving = !1, this._miniMapMoving = !1, this._userToggledDisplay = !1, this._minimized = !1, this.options.toggleDisplay && this._addToggleButton(), this._miniMap.whenReady(r.Util.bind(function() {
        this._aimingRect = r.rectangle(this._mainMap.getBounds(), this.options.aimingRectOptions).addTo(this._miniMap), this._shadowRect = r.rectangle(this._mainMap.getBounds(), this.options.shadowRectOptions).addTo(this._miniMap), this._mainMap.on("moveend", this._onMainMapMoved, this), this._mainMap.on("move", this._onMainMapMoving, this), this._miniMap.on("movestart", this._onMiniMapMoveStarted, this), this._miniMap.on("move", this._onMiniMapMoving, this), this._miniMap.on("moveend", this._onMiniMapMoved, this);
      }, this)), this._container;
    }, addTo: function(l) {
      r.Control.prototype.addTo.call(this, l);
      var d = this.options.centerFixed || this._mainMap.getCenter();
      return this._miniMap.setView(d, this._decideZoom(!0)), this._setDisplay(this.options.minimized), this;
    }, onRemove: function(l) {
      this._mainMap.off("moveend", this._onMainMapMoved, this), this._mainMap.off("move", this._onMainMapMoving, this), this._miniMap.off("moveend", this._onMiniMapMoved, this), this._miniMap.removeLayer(this._layer);
    }, changeLayer: function(l) {
      this._miniMap.removeLayer(this._layer), this._layer = l, this._miniMap.addLayer(this._layer);
    }, _addToggleButton: function() {
      this._toggleDisplayButton = this.options.toggleDisplay ? this._createButton("", this._toggleButtonInitialTitleText(), "leaflet-control-minimap-toggle-display leaflet-control-minimap-toggle-display-" + this.options.position, this._container, this._toggleDisplayButtonClicked, this) : void 0, this._toggleDisplayButton.style.width = this.options.collapsedWidth + "px", this._toggleDisplayButton.style.height = this.options.collapsedHeight + "px";
    }, _toggleButtonInitialTitleText: function() {
      return this.options.minimized ? this.options.strings.showText : this.options.strings.hideText;
    }, _createButton: function(l, d, f, g, w, b) {
      var x = r.DomUtil.create("a", f, g);
      x.innerHTML = l, x.href = "#", x.title = d;
      var v = r.DomEvent.stopPropagation;
      return r.DomEvent.on(x, "click", v).on(x, "mousedown", v).on(x, "dblclick", v).on(x, "click", r.DomEvent.preventDefault).on(x, "click", w, b), x;
    }, _toggleDisplayButtonClicked: function() {
      this._userToggledDisplay = !0, this._minimized ? this._restore() : this._minimize();
    }, _setDisplay: function(l) {
      l !== this._minimized && (this._minimized ? this._restore() : this._minimize());
    }, _minimize: function() {
      this.options.toggleDisplay ? (this._container.style.width = this.options.collapsedWidth + "px", this._container.style.height = this.options.collapsedHeight + "px", this._toggleDisplayButton.className += " minimized-" + this.options.position, this._toggleDisplayButton.title = this.options.strings.showText) : this._container.style.display = "none", this._minimized = !0, this._onToggle();
    }, _restore: function() {
      this.options.toggleDisplay ? (this._container.style.width = this.options.width + "px", this._container.style.height = this.options.height + "px", this._toggleDisplayButton.className = this._toggleDisplayButton.className.replace("minimized-" + this.options.position, ""), this._toggleDisplayButton.title = this.options.strings.hideText) : this._container.style.display = "block", this._minimized = !1, this._onToggle();
    }, _onMainMapMoved: function(l) {
      if (this._miniMapMoving)
        this._miniMapMoving = !1;
      else {
        var d = this.options.centerFixed || this._mainMap.getCenter();
        this._mainMapMoving = !0, this._miniMap.setView(d, this._decideZoom(!0)), this._setDisplay(this._decideMinimized());
      }
      this._aimingRect.setBounds(this._mainMap.getBounds());
    }, _onMainMapMoving: function(l) {
      this._aimingRect.setBounds(this._mainMap.getBounds());
    }, _onMiniMapMoveStarted: function(l) {
      if (!this.options.centerFixed) {
        var d = this._aimingRect.getBounds(), f = this._miniMap.latLngToContainerPoint(d.getSouthWest()), g = this._miniMap.latLngToContainerPoint(d.getNorthEast());
        this._lastAimingRectPosition = { sw: f, ne: g };
      }
    }, _onMiniMapMoving: function(l) {
      this.options.centerFixed || !this._mainMapMoving && this._lastAimingRectPosition && (this._shadowRect.setBounds(new r.LatLngBounds(this._miniMap.containerPointToLatLng(this._lastAimingRectPosition.sw), this._miniMap.containerPointToLatLng(this._lastAimingRectPosition.ne))), this._shadowRect.setStyle({ opacity: 1, fillOpacity: 0.3 }));
    }, _onMiniMapMoved: function(l) {
      this._mainMapMoving ? this._mainMapMoving = !1 : (this._miniMapMoving = !0, this._mainMap.setView(this._miniMap.getCenter(), this._decideZoom(!1)), this._shadowRect.setStyle({ opacity: 0, fillOpacity: 0 }));
    }, _isZoomLevelFixed: function() {
      var l = this.options.zoomLevelFixed;
      return this._isDefined(l) && this._isInteger(l);
    }, _decideZoom: function(l) {
      if (this._isZoomLevelFixed())
        return l ? this.options.zoomLevelFixed : this._mainMap.getZoom();
      if (l)
        return this._mainMap.getZoom() + this.options.zoomLevelOffset;
      var d = this._miniMap.getZoom() - this._mainMap.getZoom(), f = this._miniMap.getZoom() - this.options.zoomLevelOffset, g;
      return d > this.options.zoomLevelOffset && this._mainMap.getZoom() < this._miniMap.getMinZoom() - this.options.zoomLevelOffset ? this._miniMap.getZoom() > this._lastMiniMapZoom ? (g = this._mainMap.getZoom() + 1, this._miniMap.setZoom(this._miniMap.getZoom() - 1)) : g = this._mainMap.getZoom() : g = f, this._lastMiniMapZoom = this._miniMap.getZoom(), g;
    }, _decideMinimized: function() {
      return this._userToggledDisplay ? this._minimized : this.options.autoToggleDisplay ? !!this._mainMap.getBounds().contains(this._miniMap.getBounds()) : this._minimized;
    }, _isInteger: function(l) {
      return typeof l == "number";
    }, _isDefined: function(l) {
      return typeof l < "u";
    }, _onToggle: function() {
      r.Util.requestAnimFrame(function() {
        r.DomEvent.on(this._container, "transitionend", this._fireToggleEvents, this), r.Browser.any3d || r.Util.requestAnimFrame(this._fireToggleEvents, this);
      }, this);
    }, _fireToggleEvents: function() {
      r.DomEvent.off(this._container, "transitionend", this._fireToggleEvents, this);
      var l = { minimized: this._minimized };
      this.fire(this._minimized ? "minimize" : "restore", l), this.fire("toggle", l);
    } });
    return r.Map.mergeOptions({ miniMapControl: !1 }), r.Map.addInitHook(function() {
      this.options.miniMapControl && (this.miniMapControl = new u().addTo(this));
    }), u;
  }, window);
})(Oo);
var Er = Oo.exports;
const Cr = /* @__PURE__ */ Eo(Er);
const Or = {
  id: "lsMapContainer",
  class: "w-full h-full !z-8"
}, kr = /* @__PURE__ */ _e({
  __name: "ls-map",
  props: {
    tk: { default: "e6c84be5b26569906eebbe47559d15b0" },
    layers: { default: [
      "https://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={tk}",
      "https://t0.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={tk}"
    ] },
    showMiniMap: { type: Boolean, default: !0 },
    miniMapOptions: { default: {
      toggleDisplay: !0,
      zoomAnimation: !0,
      hideText: "hideText",
      showText: "showText"
    } },
    showScale: { type: Boolean, default: !0 },
    options: { default: {} },
    copyRight: {}
  },
  emits: ["ready", "click"],
  setup(s, { expose: a, emit: r }) {
    const u = s, l = r;
    pe(() => {
      f();
    });
    let d;
    const f = () => {
      const g = u.layers.map((b) => tt.tileLayer(b, { tk: u.tk })), w = tt.layerGroup(g);
      if (d = tt.map(
        "lsMapContainer",
        Object.assign(
          {
            center: [28.39864879699246, 105.51818847656251],
            //初始地图中心
            zoom: 9,
            //初始缩放等级
            // maxZoom: 18, //最大缩放等级
            // minZoom: 9, //最小缩放等级
            zoomControl: !1,
            copyRight: "&copy; hecongyuan"
          },
          { ...u.options, layers: [w] }
        )
      ), d.on("click", (b) => {
        l("click", b);
      }), u.showScale && tt.control.scale().addTo(d), u.showMiniMap) {
        const b = u.layers.map(
          (v) => tt.tileLayer(v, { tk: u.tk })
        ), x = tt.layerGroup(b);
        new Cr(x, u.miniMapOptions).addTo(d), tt.control.zoom({ position: "bottomright" }).addTo(d);
      }
      tt.tileLayer("", {
        maxZoom: 19,
        attribution: u.copyRight
      }).addTo(d), br("lsMapContainer", d), l("ready", d);
    };
    return a({
      lsMapContainer: d
    }), (g, w) => (To(), bo("div", Or, [
      Mo(g.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const ko = (s, a) => {
  const r = s.__vccOpts || s;
  for (const [u, l] of a)
    r[u] = l;
  return r;
}, Ne = /* @__PURE__ */ ko(kr, [["__scopeId", "data-v-42b31997"]]);
Ne.install = (s) => {
  s.component(Ne.__name, Ne);
};
const zr = /* @__PURE__ */ _e({
  __name: "ls-map-divmarker",
  props: {
    target: { default: {} },
    number: { default: 0 },
    position: {}
  },
  emits: ["mouseout", "mouseover", "click"],
  setup(s, { emit: a }) {
    let r = null;
    const u = s, l = a, d = Gt(1);
    Ge(() => {
      for (r = zt("lsMapContainer"); r && d.value; ) {
        u.position[0] && u.position[1] && u.number && f(), d.value = 0;
        break;
      }
    }), pe(() => {
      for (r = zt("lsMapContainer"); r && d.value && u.number; ) {
        u.position[0] && u.position[1] && f(), d.value = 0;
        break;
      }
    });
    const f = () => {
      let g = tt.divIcon({
        className: "redMessage-Icon",
        html: `<div class='redMessage-Icon-Item'>${u.number}</div>`,
        iconAnchor: [-5, 45]
      }), w = tt.marker(u.position, {
        icon: g
      }).addTo(r);
      w.on("mouseout", (b) => {
        l("mouseout", u.target);
      }), w.on("mouseover", (b) => {
        l("mouseover", u.target);
      }), w.on("click", (b) => {
        l("click", u.target);
      });
    };
    return () => {
    };
  }
});
const De = /* @__PURE__ */ ko(zr, [["__scopeId", "data-v-6de64478"]]);
De.install = (s) => {
  s.component(De.__name, De);
};
function zo(s, a) {
  return function() {
    return s.apply(a, arguments);
  };
}
const { toString: Ar } = Object.prototype, { getPrototypeOf: qi } = Object, Ke = ((s) => (a) => {
  const r = Ar.call(a);
  return s[r] || (s[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), wt = (s) => (s = s.toLowerCase(), (a) => Ke(a) === s), Je = (s) => (a) => typeof a === s, { isArray: Jt } = Array, de = Je("undefined");
function Br(s) {
  return s !== null && !de(s) && s.constructor !== null && !de(s.constructor) && ct(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const Ao = wt("ArrayBuffer");
function Rr(s) {
  let a;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(s) : a = s && s.buffer && Ao(s.buffer), a;
}
const Ir = Je("string"), ct = Je("function"), Bo = Je("number"), $e = (s) => s !== null && typeof s == "object", Zr = (s) => s === !0 || s === !1, Fe = (s) => {
  if (Ke(s) !== "object")
    return !1;
  const a = qi(s);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, Nr = wt("Date"), Dr = wt("File"), Fr = wt("Blob"), Hr = wt("FileList"), Ur = (s) => $e(s) && ct(s.pipe), Wr = (s) => {
  let a;
  return s && (typeof FormData == "function" && s instanceof FormData || ct(s.append) && ((a = Ke(s)) === "formdata" || // detect form-data instance
  a === "object" && ct(s.toString) && s.toString() === "[object FormData]"));
}, jr = wt("URLSearchParams"), qr = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function me(s, a, { allOwnKeys: r = !1 } = {}) {
  if (s === null || typeof s > "u")
    return;
  let u, l;
  if (typeof s != "object" && (s = [s]), Jt(s))
    for (u = 0, l = s.length; u < l; u++)
      a.call(null, s[u], u, s);
  else {
    const d = r ? Object.getOwnPropertyNames(s) : Object.keys(s), f = d.length;
    let g;
    for (u = 0; u < f; u++)
      g = d[u], a.call(null, s[g], g, s);
  }
}
function Ro(s, a) {
  a = a.toLowerCase();
  const r = Object.keys(s);
  let u = r.length, l;
  for (; u-- > 0; )
    if (l = r[u], a === l.toLowerCase())
      return l;
  return null;
}
const Io = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Zo = (s) => !de(s) && s !== Io;
function Fi() {
  const { caseless: s } = Zo(this) && this || {}, a = {}, r = (u, l) => {
    const d = s && Ro(a, l) || l;
    Fe(a[d]) && Fe(u) ? a[d] = Fi(a[d], u) : Fe(u) ? a[d] = Fi({}, u) : Jt(u) ? a[d] = u.slice() : a[d] = u;
  };
  for (let u = 0, l = arguments.length; u < l; u++)
    arguments[u] && me(arguments[u], r);
  return a;
}
const Vr = (s, a, r, { allOwnKeys: u } = {}) => (me(a, (l, d) => {
  r && ct(l) ? s[d] = zo(l, r) : s[d] = l;
}, { allOwnKeys: u }), s), Gr = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), Kr = (s, a, r, u) => {
  s.prototype = Object.create(a.prototype, u), s.prototype.constructor = s, Object.defineProperty(s, "super", {
    value: a.prototype
  }), r && Object.assign(s.prototype, r);
}, Jr = (s, a, r, u) => {
  let l, d, f;
  const g = {};
  if (a = a || {}, s == null)
    return a;
  do {
    for (l = Object.getOwnPropertyNames(s), d = l.length; d-- > 0; )
      f = l[d], (!u || u(f, s, a)) && !g[f] && (a[f] = s[f], g[f] = !0);
    s = r !== !1 && qi(s);
  } while (s && (!r || r(s, a)) && s !== Object.prototype);
  return a;
}, $r = (s, a, r) => {
  s = String(s), (r === void 0 || r > s.length) && (r = s.length), r -= a.length;
  const u = s.indexOf(a, r);
  return u !== -1 && u === r;
}, Xr = (s) => {
  if (!s)
    return null;
  if (Jt(s))
    return s;
  let a = s.length;
  if (!Bo(a))
    return null;
  const r = new Array(a);
  for (; a-- > 0; )
    r[a] = s[a];
  return r;
}, Yr = ((s) => (a) => s && a instanceof s)(typeof Uint8Array < "u" && qi(Uint8Array)), Qr = (s, a) => {
  const u = (s && s[Symbol.iterator]).call(s);
  let l;
  for (; (l = u.next()) && !l.done; ) {
    const d = l.value;
    a.call(s, d[0], d[1]);
  }
}, ta = (s, a) => {
  let r;
  const u = [];
  for (; (r = s.exec(a)) !== null; )
    u.push(r);
  return u;
}, ea = wt("HTMLFormElement"), ia = (s) => s.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, u, l) {
    return u.toUpperCase() + l;
  }
), fo = (({ hasOwnProperty: s }) => (a, r) => s.call(a, r))(Object.prototype), na = wt("RegExp"), No = (s, a) => {
  const r = Object.getOwnPropertyDescriptors(s), u = {};
  me(r, (l, d) => {
    let f;
    (f = a(l, d, s)) !== !1 && (u[d] = f || l);
  }), Object.defineProperties(s, u);
}, oa = (s) => {
  No(s, (a, r) => {
    if (ct(s) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const u = s[r];
    if (ct(u)) {
      if (a.enumerable = !1, "writable" in a) {
        a.writable = !1;
        return;
      }
      a.set || (a.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, sa = (s, a) => {
  const r = {}, u = (l) => {
    l.forEach((d) => {
      r[d] = !0;
    });
  };
  return Jt(s) ? u(s) : u(String(s).split(a)), r;
}, ra = () => {
}, aa = (s, a) => (s = +s, Number.isFinite(s) ? s : a), Ri = "abcdefghijklmnopqrstuvwxyz", _o = "0123456789", Do = {
  DIGIT: _o,
  ALPHA: Ri,
  ALPHA_DIGIT: Ri + Ri.toUpperCase() + _o
}, ha = (s = 16, a = Do.ALPHA_DIGIT) => {
  let r = "";
  const { length: u } = a;
  for (; s--; )
    r += a[Math.random() * u | 0];
  return r;
};
function ua(s) {
  return !!(s && ct(s.append) && s[Symbol.toStringTag] === "FormData" && s[Symbol.iterator]);
}
const la = (s) => {
  const a = new Array(10), r = (u, l) => {
    if ($e(u)) {
      if (a.indexOf(u) >= 0)
        return;
      if (!("toJSON" in u)) {
        a[l] = u;
        const d = Jt(u) ? [] : {};
        return me(u, (f, g) => {
          const w = r(f, l + 1);
          !de(w) && (d[g] = w);
        }), a[l] = void 0, d;
      }
    }
    return u;
  };
  return r(s, 0);
}, ca = wt("AsyncFunction"), fa = (s) => s && ($e(s) || ct(s)) && ct(s.then) && ct(s.catch), m = {
  isArray: Jt,
  isArrayBuffer: Ao,
  isBuffer: Br,
  isFormData: Wr,
  isArrayBufferView: Rr,
  isString: Ir,
  isNumber: Bo,
  isBoolean: Zr,
  isObject: $e,
  isPlainObject: Fe,
  isUndefined: de,
  isDate: Nr,
  isFile: Dr,
  isBlob: Fr,
  isRegExp: na,
  isFunction: ct,
  isStream: Ur,
  isURLSearchParams: jr,
  isTypedArray: Yr,
  isFileList: Hr,
  forEach: me,
  merge: Fi,
  extend: Vr,
  trim: qr,
  stripBOM: Gr,
  inherits: Kr,
  toFlatObject: Jr,
  kindOf: Ke,
  kindOfTest: wt,
  endsWith: $r,
  toArray: Xr,
  forEachEntry: Qr,
  matchAll: ta,
  isHTMLForm: ea,
  hasOwnProperty: fo,
  hasOwnProp: fo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: No,
  freezeMethods: oa,
  toObjectSet: sa,
  toCamelCase: ia,
  noop: ra,
  toFiniteNumber: aa,
  findKey: Ro,
  global: Io,
  isContextDefined: Zo,
  ALPHABET: Do,
  generateString: ha,
  isSpecCompliantForm: ua,
  toJSONObject: la,
  isAsyncFn: ca,
  isThenable: fa
};
function I(s, a, r, u, l) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = s, this.name = "AxiosError", a && (this.code = a), r && (this.config = r), u && (this.request = u), l && (this.response = l);
}
m.inherits(I, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: m.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Fo = I.prototype, Ho = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((s) => {
  Ho[s] = { value: s };
});
Object.defineProperties(I, Ho);
Object.defineProperty(Fo, "isAxiosError", { value: !0 });
I.from = (s, a, r, u, l, d) => {
  const f = Object.create(Fo);
  return m.toFlatObject(s, f, function(w) {
    return w !== Error.prototype;
  }, (g) => g !== "isAxiosError"), I.call(f, s.message, a, r, u, l), f.cause = s, f.name = s.name, d && Object.assign(f, d), f;
};
const da = null;
function Hi(s) {
  return m.isPlainObject(s) || m.isArray(s);
}
function Uo(s) {
  return m.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function po(s, a, r) {
  return s ? s.concat(a).map(function(l, d) {
    return l = Uo(l), !r && d ? "[" + l + "]" : l;
  }).join(r ? "." : "") : a;
}
function _a(s) {
  return m.isArray(s) && !s.some(Hi);
}
const pa = m.toFlatObject(m, {}, null, function(a) {
  return /^is[A-Z]/.test(a);
});
function Xe(s, a, r) {
  if (!m.isObject(s))
    throw new TypeError("target must be an object");
  a = a || new FormData(), r = m.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, j) {
    return !m.isUndefined(j[P]);
  });
  const u = r.metaTokens, l = r.visitor || x, d = r.dots, f = r.indexes, w = (r.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(a);
  if (!m.isFunction(l))
    throw new TypeError("visitor must be a function");
  function b(S) {
    if (S === null)
      return "";
    if (m.isDate(S))
      return S.toISOString();
    if (!w && m.isBlob(S))
      throw new I("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(S) || m.isTypedArray(S) ? w && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function x(S, P, j) {
    let X = S;
    if (S && !j && typeof S == "object") {
      if (m.endsWith(P, "{}"))
        P = u ? P : P.slice(0, -2), S = JSON.stringify(S);
      else if (m.isArray(S) && _a(S) || (m.isFileList(S) || m.endsWith(P, "[]")) && (X = m.toArray(S)))
        return P = Uo(P), X.forEach(function(q, $t) {
          !(m.isUndefined(q) || q === null) && a.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? po([P], $t, d) : f === null ? P : P + "[]",
            b(q)
          );
        }), !1;
    }
    return Hi(S) ? !0 : (a.append(po(j, P, d), b(S)), !1);
  }
  const v = [], N = Object.assign(pa, {
    defaultVisitor: x,
    convertValue: b,
    isVisitable: Hi
  });
  function Q(S, P) {
    if (!m.isUndefined(S)) {
      if (v.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + P.join("."));
      v.push(S), m.forEach(S, function(X, ft) {
        (!(m.isUndefined(X) || X === null) && l.call(
          a,
          X,
          m.isString(ft) ? ft.trim() : ft,
          P,
          N
        )) === !0 && Q(X, P ? P.concat(ft) : [ft]);
      }), v.pop();
    }
  }
  if (!m.isObject(s))
    throw new TypeError("data must be an object");
  return Q(s), a;
}
function mo(s) {
  const a = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g, function(u) {
    return a[u];
  });
}
function Vi(s, a) {
  this._pairs = [], s && Xe(s, this, a);
}
const Wo = Vi.prototype;
Wo.append = function(a, r) {
  this._pairs.push([a, r]);
};
Wo.toString = function(a) {
  const r = a ? function(u) {
    return a.call(this, u, mo);
  } : mo;
  return this._pairs.map(function(l) {
    return r(l[0]) + "=" + r(l[1]);
  }, "").join("&");
};
function ma(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function jo(s, a, r) {
  if (!a)
    return s;
  const u = r && r.encode || ma, l = r && r.serialize;
  let d;
  if (l ? d = l(a, r) : d = m.isURLSearchParams(a) ? a.toString() : new Vi(a, r).toString(u), d) {
    const f = s.indexOf("#");
    f !== -1 && (s = s.slice(0, f)), s += (s.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return s;
}
class ga {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(a, r, u) {
    return this.handlers.push({
      fulfilled: a,
      rejected: r,
      synchronous: u ? u.synchronous : !1,
      runWhen: u ? u.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(a) {
    this.handlers[a] && (this.handlers[a] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(a) {
    m.forEach(this.handlers, function(u) {
      u !== null && a(u);
    });
  }
}
const go = ga, qo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, va = typeof URLSearchParams < "u" ? URLSearchParams : Vi, ya = typeof FormData < "u" ? FormData : null, wa = typeof Blob < "u" ? Blob : null, xa = {
  isBrowser: !0,
  classes: {
    URLSearchParams: va,
    FormData: ya,
    Blob: wa
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Vo = typeof window < "u" && typeof document < "u", Pa = ((s) => Vo && ["ReactNative", "NativeScript", "NS"].indexOf(s) < 0)(typeof navigator < "u" && navigator.product), La = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Vo,
  hasStandardBrowserEnv: Pa,
  hasStandardBrowserWebWorkerEnv: La
}, Symbol.toStringTag, { value: "Module" })), yt = {
  ...Ta,
  ...xa
};
function ba(s, a) {
  return Xe(s, new yt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, u, l, d) {
      return yt.isNode && m.isBuffer(r) ? (this.append(u, r.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    }
  }, a));
}
function Ma(s) {
  return m.matchAll(/\w+|\[(\w*)]/g, s).map((a) => a[0] === "[]" ? "" : a[1] || a[0]);
}
function Sa(s) {
  const a = {}, r = Object.keys(s);
  let u;
  const l = r.length;
  let d;
  for (u = 0; u < l; u++)
    d = r[u], a[d] = s[d];
  return a;
}
function Go(s) {
  function a(r, u, l, d) {
    let f = r[d++];
    const g = Number.isFinite(+f), w = d >= r.length;
    return f = !f && m.isArray(l) ? l.length : f, w ? (m.hasOwnProp(l, f) ? l[f] = [l[f], u] : l[f] = u, !g) : ((!l[f] || !m.isObject(l[f])) && (l[f] = []), a(r, u, l[f], d) && m.isArray(l[f]) && (l[f] = Sa(l[f])), !g);
  }
  if (m.isFormData(s) && m.isFunction(s.entries)) {
    const r = {};
    return m.forEachEntry(s, (u, l) => {
      a(Ma(u), l, r, 0);
    }), r;
  }
  return null;
}
function Ea(s, a, r) {
  if (m.isString(s))
    try {
      return (a || JSON.parse)(s), m.trim(s);
    } catch (u) {
      if (u.name !== "SyntaxError")
        throw u;
    }
  return (r || JSON.stringify)(s);
}
const Gi = {
  transitional: qo,
  adapter: ["xhr", "http"],
  transformRequest: [function(a, r) {
    const u = r.getContentType() || "", l = u.indexOf("application/json") > -1, d = m.isObject(a);
    if (d && m.isHTMLForm(a) && (a = new FormData(a)), m.isFormData(a))
      return l && l ? JSON.stringify(Go(a)) : a;
    if (m.isArrayBuffer(a) || m.isBuffer(a) || m.isStream(a) || m.isFile(a) || m.isBlob(a))
      return a;
    if (m.isArrayBufferView(a))
      return a.buffer;
    if (m.isURLSearchParams(a))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), a.toString();
    let g;
    if (d) {
      if (u.indexOf("application/x-www-form-urlencoded") > -1)
        return ba(a, this.formSerializer).toString();
      if ((g = m.isFileList(a)) || u.indexOf("multipart/form-data") > -1) {
        const w = this.env && this.env.FormData;
        return Xe(
          g ? { "files[]": a } : a,
          w && new w(),
          this.formSerializer
        );
      }
    }
    return d || l ? (r.setContentType("application/json", !1), Ea(a)) : a;
  }],
  transformResponse: [function(a) {
    const r = this.transitional || Gi.transitional, u = r && r.forcedJSONParsing, l = this.responseType === "json";
    if (a && m.isString(a) && (u && !this.responseType || l)) {
      const f = !(r && r.silentJSONParsing) && l;
      try {
        return JSON.parse(a);
      } catch (g) {
        if (f)
          throw g.name === "SyntaxError" ? I.from(g, I.ERR_BAD_RESPONSE, this, null, this.response) : g;
      }
    }
    return a;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: yt.classes.FormData,
    Blob: yt.classes.Blob
  },
  validateStatus: function(a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (s) => {
  Gi.headers[s] = {};
});
const Ki = Gi, Ca = m.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Oa = (s) => {
  const a = {};
  let r, u, l;
  return s && s.split(`
`).forEach(function(f) {
    l = f.indexOf(":"), r = f.substring(0, l).trim().toLowerCase(), u = f.substring(l + 1).trim(), !(!r || a[r] && Ca[r]) && (r === "set-cookie" ? a[r] ? a[r].push(u) : a[r] = [u] : a[r] = a[r] ? a[r] + ", " + u : u);
  }), a;
}, vo = Symbol("internals");
function fe(s) {
  return s && String(s).trim().toLowerCase();
}
function He(s) {
  return s === !1 || s == null ? s : m.isArray(s) ? s.map(He) : String(s);
}
function ka(s) {
  const a = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; u = r.exec(s); )
    a[u[1]] = u[2];
  return a;
}
const za = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
function Ii(s, a, r, u, l) {
  if (m.isFunction(u))
    return u.call(this, a, r);
  if (l && (a = r), !!m.isString(a)) {
    if (m.isString(u))
      return a.indexOf(u) !== -1;
    if (m.isRegExp(u))
      return u.test(a);
  }
}
function Aa(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (a, r, u) => r.toUpperCase() + u);
}
function Ba(s, a) {
  const r = m.toCamelCase(" " + a);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(s, u + r, {
      value: function(l, d, f) {
        return this[u].call(this, a, l, d, f);
      },
      configurable: !0
    });
  });
}
class Ye {
  constructor(a) {
    a && this.set(a);
  }
  set(a, r, u) {
    const l = this;
    function d(g, w, b) {
      const x = fe(w);
      if (!x)
        throw new Error("header name must be a non-empty string");
      const v = m.findKey(l, x);
      (!v || l[v] === void 0 || b === !0 || b === void 0 && l[v] !== !1) && (l[v || w] = He(g));
    }
    const f = (g, w) => m.forEach(g, (b, x) => d(b, x, w));
    return m.isPlainObject(a) || a instanceof this.constructor ? f(a, r) : m.isString(a) && (a = a.trim()) && !za(a) ? f(Oa(a), r) : a != null && d(r, a, u), this;
  }
  get(a, r) {
    if (a = fe(a), a) {
      const u = m.findKey(this, a);
      if (u) {
        const l = this[u];
        if (!r)
          return l;
        if (r === !0)
          return ka(l);
        if (m.isFunction(r))
          return r.call(this, l, u);
        if (m.isRegExp(r))
          return r.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(a, r) {
    if (a = fe(a), a) {
      const u = m.findKey(this, a);
      return !!(u && this[u] !== void 0 && (!r || Ii(this, this[u], u, r)));
    }
    return !1;
  }
  delete(a, r) {
    const u = this;
    let l = !1;
    function d(f) {
      if (f = fe(f), f) {
        const g = m.findKey(u, f);
        g && (!r || Ii(u, u[g], g, r)) && (delete u[g], l = !0);
      }
    }
    return m.isArray(a) ? a.forEach(d) : d(a), l;
  }
  clear(a) {
    const r = Object.keys(this);
    let u = r.length, l = !1;
    for (; u--; ) {
      const d = r[u];
      (!a || Ii(this, this[d], d, a, !0)) && (delete this[d], l = !0);
    }
    return l;
  }
  normalize(a) {
    const r = this, u = {};
    return m.forEach(this, (l, d) => {
      const f = m.findKey(u, d);
      if (f) {
        r[f] = He(l), delete r[d];
        return;
      }
      const g = a ? Aa(d) : String(d).trim();
      g !== d && delete r[d], r[g] = He(l), u[g] = !0;
    }), this;
  }
  concat(...a) {
    return this.constructor.concat(this, ...a);
  }
  toJSON(a) {
    const r = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (u, l) => {
      u != null && u !== !1 && (r[l] = a && m.isArray(u) ? u.join(", ") : u);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([a, r]) => a + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(a) {
    return a instanceof this ? a : new this(a);
  }
  static concat(a, ...r) {
    const u = new this(a);
    return r.forEach((l) => u.set(l)), u;
  }
  static accessor(a) {
    const u = (this[vo] = this[vo] = {
      accessors: {}
    }).accessors, l = this.prototype;
    function d(f) {
      const g = fe(f);
      u[g] || (Ba(l, f), u[g] = !0);
    }
    return m.isArray(a) ? a.forEach(d) : d(a), this;
  }
}
Ye.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.reduceDescriptors(Ye.prototype, ({ value: s }, a) => {
  let r = a[0].toUpperCase() + a.slice(1);
  return {
    get: () => s,
    set(u) {
      this[r] = u;
    }
  };
});
m.freezeMethods(Ye);
const St = Ye;
function Zi(s, a) {
  const r = this || Ki, u = a || r, l = St.from(u.headers);
  let d = u.data;
  return m.forEach(s, function(g) {
    d = g.call(r, d, l.normalize(), a ? a.status : void 0);
  }), l.normalize(), d;
}
function Ko(s) {
  return !!(s && s.__CANCEL__);
}
function ge(s, a, r) {
  I.call(this, s ?? "canceled", I.ERR_CANCELED, a, r), this.name = "CanceledError";
}
m.inherits(ge, I, {
  __CANCEL__: !0
});
function Ra(s, a, r) {
  const u = r.config.validateStatus;
  !r.status || !u || u(r.status) ? s(r) : a(new I(
    "Request failed with status code " + r.status,
    [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Ia = yt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(s, a, r, u, l, d) {
      const f = [s + "=" + encodeURIComponent(a)];
      m.isNumber(r) && f.push("expires=" + new Date(r).toGMTString()), m.isString(u) && f.push("path=" + u), m.isString(l) && f.push("domain=" + l), d === !0 && f.push("secure"), document.cookie = f.join("; ");
    },
    read(s) {
      const a = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
      return a ? decodeURIComponent(a[3]) : null;
    },
    remove(s) {
      this.write(s, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Za(s) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function Na(s, a) {
  return a ? s.replace(/\/+$/, "") + "/" + a.replace(/^\/+/, "") : s;
}
function Jo(s, a) {
  return s && !Za(a) ? Na(s, a) : a;
}
const Da = yt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const a = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let u;
    function l(d) {
      let f = d;
      return a && (r.setAttribute("href", f), f = r.href), r.setAttribute("href", f), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return u = l(window.location.href), function(f) {
      const g = m.isString(f) ? l(f) : f;
      return g.protocol === u.protocol && g.host === u.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Fa(s) {
  const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return a && a[1] || "";
}
function Ha(s, a) {
  s = s || 10;
  const r = new Array(s), u = new Array(s);
  let l = 0, d = 0, f;
  return a = a !== void 0 ? a : 1e3, function(w) {
    const b = Date.now(), x = u[d];
    f || (f = b), r[l] = w, u[l] = b;
    let v = d, N = 0;
    for (; v !== l; )
      N += r[v++], v = v % s;
    if (l = (l + 1) % s, l === d && (d = (d + 1) % s), b - f < a)
      return;
    const Q = x && b - x;
    return Q ? Math.round(N * 1e3 / Q) : void 0;
  };
}
function yo(s, a) {
  let r = 0;
  const u = Ha(50, 250);
  return (l) => {
    const d = l.loaded, f = l.lengthComputable ? l.total : void 0, g = d - r, w = u(g), b = d <= f;
    r = d;
    const x = {
      loaded: d,
      total: f,
      progress: f ? d / f : void 0,
      bytes: g,
      rate: w || void 0,
      estimated: w && f && b ? (f - d) / w : void 0,
      event: l
    };
    x[a ? "download" : "upload"] = !0, s(x);
  };
}
const Ua = typeof XMLHttpRequest < "u", Wa = Ua && function(s) {
  return new Promise(function(r, u) {
    let l = s.data;
    const d = St.from(s.headers).normalize();
    let { responseType: f, withXSRFToken: g } = s, w;
    function b() {
      s.cancelToken && s.cancelToken.unsubscribe(w), s.signal && s.signal.removeEventListener("abort", w);
    }
    let x;
    if (m.isFormData(l)) {
      if (yt.hasStandardBrowserEnv || yt.hasStandardBrowserWebWorkerEnv)
        d.setContentType(!1);
      else if ((x = d.getContentType()) !== !1) {
        const [P, ...j] = x ? x.split(";").map((X) => X.trim()).filter(Boolean) : [];
        d.setContentType([P || "multipart/form-data", ...j].join("; "));
      }
    }
    let v = new XMLHttpRequest();
    if (s.auth) {
      const P = s.auth.username || "", j = s.auth.password ? unescape(encodeURIComponent(s.auth.password)) : "";
      d.set("Authorization", "Basic " + btoa(P + ":" + j));
    }
    const N = Jo(s.baseURL, s.url);
    v.open(s.method.toUpperCase(), jo(N, s.params, s.paramsSerializer), !0), v.timeout = s.timeout;
    function Q() {
      if (!v)
        return;
      const P = St.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), X = {
        data: !f || f === "text" || f === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: P,
        config: s,
        request: v
      };
      Ra(function(q) {
        r(q), b();
      }, function(q) {
        u(q), b();
      }, X), v = null;
    }
    if ("onloadend" in v ? v.onloadend = Q : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(Q);
    }, v.onabort = function() {
      v && (u(new I("Request aborted", I.ECONNABORTED, s, v)), v = null);
    }, v.onerror = function() {
      u(new I("Network Error", I.ERR_NETWORK, s, v)), v = null;
    }, v.ontimeout = function() {
      let j = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const X = s.transitional || qo;
      s.timeoutErrorMessage && (j = s.timeoutErrorMessage), u(new I(
        j,
        X.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
        s,
        v
      )), v = null;
    }, yt.hasStandardBrowserEnv && (g && m.isFunction(g) && (g = g(s)), g || g !== !1 && Da(N))) {
      const P = s.xsrfHeaderName && s.xsrfCookieName && Ia.read(s.xsrfCookieName);
      P && d.set(s.xsrfHeaderName, P);
    }
    l === void 0 && d.setContentType(null), "setRequestHeader" in v && m.forEach(d.toJSON(), function(j, X) {
      v.setRequestHeader(X, j);
    }), m.isUndefined(s.withCredentials) || (v.withCredentials = !!s.withCredentials), f && f !== "json" && (v.responseType = s.responseType), typeof s.onDownloadProgress == "function" && v.addEventListener("progress", yo(s.onDownloadProgress, !0)), typeof s.onUploadProgress == "function" && v.upload && v.upload.addEventListener("progress", yo(s.onUploadProgress)), (s.cancelToken || s.signal) && (w = (P) => {
      v && (u(!P || P.type ? new ge(null, s, v) : P), v.abort(), v = null);
    }, s.cancelToken && s.cancelToken.subscribe(w), s.signal && (s.signal.aborted ? w() : s.signal.addEventListener("abort", w)));
    const S = Fa(N);
    if (S && yt.protocols.indexOf(S) === -1) {
      u(new I("Unsupported protocol " + S + ":", I.ERR_BAD_REQUEST, s));
      return;
    }
    v.send(l || null);
  });
}, Ui = {
  http: da,
  xhr: Wa
};
m.forEach(Ui, (s, a) => {
  if (s) {
    try {
      Object.defineProperty(s, "name", { value: a });
    } catch {
    }
    Object.defineProperty(s, "adapterName", { value: a });
  }
});
const wo = (s) => `- ${s}`, ja = (s) => m.isFunction(s) || s === null || s === !1, $o = {
  getAdapter: (s) => {
    s = m.isArray(s) ? s : [s];
    const { length: a } = s;
    let r, u;
    const l = {};
    for (let d = 0; d < a; d++) {
      r = s[d];
      let f;
      if (u = r, !ja(r) && (u = Ui[(f = String(r)).toLowerCase()], u === void 0))
        throw new I(`Unknown adapter '${f}'`);
      if (u)
        break;
      l[f || "#" + d] = u;
    }
    if (!u) {
      const d = Object.entries(l).map(
        ([g, w]) => `adapter ${g} ` + (w === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let f = a ? d.length > 1 ? `since :
` + d.map(wo).join(`
`) : " " + wo(d[0]) : "as no adapter specified";
      throw new I(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return u;
  },
  adapters: Ui
};
function Ni(s) {
  if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
    throw new ge(null, s);
}
function xo(s) {
  return Ni(s), s.headers = St.from(s.headers), s.data = Zi.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), $o.getAdapter(s.adapter || Ki.adapter)(s).then(function(u) {
    return Ni(s), u.data = Zi.call(
      s,
      s.transformResponse,
      u
    ), u.headers = St.from(u.headers), u;
  }, function(u) {
    return Ko(u) || (Ni(s), u && u.response && (u.response.data = Zi.call(
      s,
      s.transformResponse,
      u.response
    ), u.response.headers = St.from(u.response.headers))), Promise.reject(u);
  });
}
const Po = (s) => s instanceof St ? s.toJSON() : s;
function Kt(s, a) {
  a = a || {};
  const r = {};
  function u(b, x, v) {
    return m.isPlainObject(b) && m.isPlainObject(x) ? m.merge.call({ caseless: v }, b, x) : m.isPlainObject(x) ? m.merge({}, x) : m.isArray(x) ? x.slice() : x;
  }
  function l(b, x, v) {
    if (m.isUndefined(x)) {
      if (!m.isUndefined(b))
        return u(void 0, b, v);
    } else
      return u(b, x, v);
  }
  function d(b, x) {
    if (!m.isUndefined(x))
      return u(void 0, x);
  }
  function f(b, x) {
    if (m.isUndefined(x)) {
      if (!m.isUndefined(b))
        return u(void 0, b);
    } else
      return u(void 0, x);
  }
  function g(b, x, v) {
    if (v in a)
      return u(b, x);
    if (v in s)
      return u(void 0, b);
  }
  const w = {
    url: d,
    method: d,
    data: d,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: g,
    headers: (b, x) => l(Po(b), Po(x), !0)
  };
  return m.forEach(Object.keys(Object.assign({}, s, a)), function(x) {
    const v = w[x] || l, N = v(s[x], a[x], x);
    m.isUndefined(N) && v !== g || (r[x] = N);
  }), r;
}
const Xo = "1.6.2", Ji = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, a) => {
  Ji[s] = function(u) {
    return typeof u === s || "a" + (a < 1 ? "n " : " ") + s;
  };
});
const Lo = {};
Ji.transitional = function(a, r, u) {
  function l(d, f) {
    return "[Axios v" + Xo + "] Transitional option '" + d + "'" + f + (u ? ". " + u : "");
  }
  return (d, f, g) => {
    if (a === !1)
      throw new I(
        l(f, " has been removed" + (r ? " in " + r : "")),
        I.ERR_DEPRECATED
      );
    return r && !Lo[f] && (Lo[f] = !0, console.warn(
      l(
        f,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), a ? a(d, f, g) : !0;
  };
};
function qa(s, a, r) {
  if (typeof s != "object")
    throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(s);
  let l = u.length;
  for (; l-- > 0; ) {
    const d = u[l], f = a[d];
    if (f) {
      const g = s[d], w = g === void 0 || f(g, d, s);
      if (w !== !0)
        throw new I("option " + d + " must be " + w, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new I("Unknown option " + d, I.ERR_BAD_OPTION);
  }
}
const Wi = {
  assertOptions: qa,
  validators: Ji
}, kt = Wi.validators;
class Ve {
  constructor(a) {
    this.defaults = a, this.interceptors = {
      request: new go(),
      response: new go()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(a, r) {
    typeof a == "string" ? (r = r || {}, r.url = a) : r = a || {}, r = Kt(this.defaults, r);
    const { transitional: u, paramsSerializer: l, headers: d } = r;
    u !== void 0 && Wi.assertOptions(u, {
      silentJSONParsing: kt.transitional(kt.boolean),
      forcedJSONParsing: kt.transitional(kt.boolean),
      clarifyTimeoutError: kt.transitional(kt.boolean)
    }, !1), l != null && (m.isFunction(l) ? r.paramsSerializer = {
      serialize: l
    } : Wi.assertOptions(l, {
      encode: kt.function,
      serialize: kt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let f = d && m.merge(
      d.common,
      d[r.method]
    );
    d && m.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (S) => {
        delete d[S];
      }
    ), r.headers = St.concat(f, d);
    const g = [];
    let w = !0;
    this.interceptors.request.forEach(function(P) {
      typeof P.runWhen == "function" && P.runWhen(r) === !1 || (w = w && P.synchronous, g.unshift(P.fulfilled, P.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(P) {
      b.push(P.fulfilled, P.rejected);
    });
    let x, v = 0, N;
    if (!w) {
      const S = [xo.bind(this), void 0];
      for (S.unshift.apply(S, g), S.push.apply(S, b), N = S.length, x = Promise.resolve(r); v < N; )
        x = x.then(S[v++], S[v++]);
      return x;
    }
    N = g.length;
    let Q = r;
    for (v = 0; v < N; ) {
      const S = g[v++], P = g[v++];
      try {
        Q = S(Q);
      } catch (j) {
        P.call(this, j);
        break;
      }
    }
    try {
      x = xo.call(this, Q);
    } catch (S) {
      return Promise.reject(S);
    }
    for (v = 0, N = b.length; v < N; )
      x = x.then(b[v++], b[v++]);
    return x;
  }
  getUri(a) {
    a = Kt(this.defaults, a);
    const r = Jo(a.baseURL, a.url);
    return jo(r, a.params, a.paramsSerializer);
  }
}
m.forEach(["delete", "get", "head", "options"], function(a) {
  Ve.prototype[a] = function(r, u) {
    return this.request(Kt(u || {}, {
      method: a,
      url: r,
      data: (u || {}).data
    }));
  };
});
m.forEach(["post", "put", "patch"], function(a) {
  function r(u) {
    return function(d, f, g) {
      return this.request(Kt(g || {}, {
        method: a,
        headers: u ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: f
      }));
    };
  }
  Ve.prototype[a] = r(), Ve.prototype[a + "Form"] = r(!0);
});
const Ue = Ve;
class $i {
  constructor(a) {
    if (typeof a != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(d) {
      r = d;
    });
    const u = this;
    this.promise.then((l) => {
      if (!u._listeners)
        return;
      let d = u._listeners.length;
      for (; d-- > 0; )
        u._listeners[d](l);
      u._listeners = null;
    }), this.promise.then = (l) => {
      let d;
      const f = new Promise((g) => {
        u.subscribe(g), d = g;
      }).then(l);
      return f.cancel = function() {
        u.unsubscribe(d);
      }, f;
    }, a(function(d, f, g) {
      u.reason || (u.reason = new ge(d, f, g), r(u.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(a) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(a);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let a;
    return {
      token: new $i(function(l) {
        a = l;
      }),
      cancel: a
    };
  }
}
const Va = $i;
function Ga(s) {
  return function(r) {
    return s.apply(null, r);
  };
}
function Ka(s) {
  return m.isObject(s) && s.isAxiosError === !0;
}
const ji = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ji).forEach(([s, a]) => {
  ji[a] = s;
});
const Ja = ji;
function Yo(s) {
  const a = new Ue(s), r = zo(Ue.prototype.request, a);
  return m.extend(r, Ue.prototype, a, { allOwnKeys: !0 }), m.extend(r, a, null, { allOwnKeys: !0 }), r.create = function(l) {
    return Yo(Kt(s, l));
  }, r;
}
const J = Yo(Ki);
J.Axios = Ue;
J.CanceledError = ge;
J.CancelToken = Va;
J.isCancel = Ko;
J.VERSION = Xo;
J.toFormData = Xe;
J.AxiosError = I;
J.Cancel = J.CanceledError;
J.all = function(a) {
  return Promise.all(a);
};
J.spread = Ga;
J.isAxiosError = Ka;
J.mergeConfig = Kt;
J.AxiosHeaders = St;
J.formToJSON = (s) => Go(m.isHTMLForm(s) ? new FormData(s) : s);
J.getAdapter = $o.getAdapter;
J.HttpStatusCode = Ja;
J.default = J;
const $a = J, We = /* @__PURE__ */ _e({
  __name: "ls-map-geo",
  setup(s) {
    let a = null;
    const r = Gt(1);
    Ge(() => {
      for (a = zt("lsMapContainer"); a && r.value; ) {
        l(), r.value = 0;
        break;
      }
    }), pe(() => {
      for (a = zt("lsMapContainer"); a && r.value; ) {
        l(), r.value = 0;
        break;
      }
    });
    const u = () => {
      for (var d = "0123456789ABCDEF", f = "#", g = 0; g < 6; g++)
        f += d[Math.floor(Math.random() * 16)];
      return f;
    }, l = () => {
      $a.get("/geoJson/510500.json").then(({ data: d }) => {
        tt.geoJSON(d, {
          style: (f) => {
            const g = `<div>${f.properties.name}</div>`, w = tt.divIcon({
              html: "<div style='color:#032E59;font-size:14px;font-weight:800'>" + g + "</div>",
              className: "",
              iconSize: 50
            });
            return tt.marker(
              [f.properties.centroid[1], f.properties.centroid[0]],
              {
                icon: w
              }
            ).addTo(a), {
              radius: 8,
              fillColor: u(),
              color: "blue",
              width: "10px",
              weight: 1,
              opacity: 0.2,
              fillOpacity: 0.2
            };
          }
        }).addTo(a);
      });
    };
    return () => {
    };
  }
});
We.install = (s) => {
  s.component(We.__name, We);
};
const je = /* @__PURE__ */ _e({
  __name: "ls-map-marker",
  props: {
    target: { default: {} },
    iconType: { default: "camera" },
    position: { default: [0, 0] }
  },
  emits: ["mouseout", "mouseover", "click"],
  setup(s, { emit: a }) {
    let r = null;
    const u = {
      camera: "/image/map/camera.png",
      cameraGray: "/image/map/cameraGray.png",
      cameraRed: "/image/map/cameraRed.png",
      cameraSnow: "/image/map/cameraSnow.png",
      currentCamera: "/image/map/currentCamera.gif"
    }, l = s, d = a, f = Gt(1);
    Ge(() => {
      for (r = zt("lsMapContainer"); r && f.value; ) {
        l.position[0] && l.position[1] && w(), f.value = 0;
        break;
      }
    }), pe(() => {
      for (r = zt("lsMapContainer"); r && f.value; )
        l.position[0] && l.position[1] && w(), f.value = 0;
    });
    let g;
    const w = () => {
      let b = tt.icon({
        iconUrl: u[`${l.iconType}`],
        iconSize: l.iconType == "currentCamera" ? [46, 46] : [29, 46]
      });
      g = tt.marker(l.position, {
        icon: b
      }).addTo(r), g.on("mouseout", (x) => {
        d("mouseout", l.target);
      }), g.on("mouseover", (x) => {
        d("mouseover", l.target);
      }), g.on("click", (x) => {
        d("click", l.target);
      });
    };
    return So(
      l,
      () => {
        console.log("909"), g && g.setLatLng(l.position);
      },
      { deep: !0 }
    ), () => {
    };
  }
});
je.install = (s) => {
  s.component(je.__name, je);
};
function Xa(s) {
  return { all: s = s || /* @__PURE__ */ new Map(), on: function(a, r) {
    var u = s.get(a);
    u ? u.push(r) : s.set(a, [r]);
  }, off: function(a, r) {
    var u = s.get(a);
    u && (r ? u.splice(u.indexOf(r) >>> 0, 1) : s.set(a, []));
  }, emit: function(a, r) {
    var u = s.get(a);
    u && u.slice().map(function(l) {
      l(r);
    }), (u = s.get("*")) && u.slice().map(function(l) {
      l(a, r);
    });
  } };
}
const Ya = Xa(), qe = /* @__PURE__ */ _e({
  __name: "ls-map-popup",
  props: {
    position: { default: [] },
    target: { default: {} },
    options: { default: {
      minWidth: "30vw",
      closeButton: !1,
      closeOnClick: !1,
      className: "!m-0"
    } },
    isShow: { type: Boolean, default: !0 }
  },
  emits: ["close", "click"],
  setup(s, { expose: a, emit: r }) {
    let u = null;
    const l = Gt(null), d = r, f = s, g = Gt(1);
    Ge(() => {
      for (u = zt("lsMapContainer"); u && g.value && f.isShow; ) {
        console.log("popup inject onMounted", u), f.position[0] && f.position[1] && b(), g.value = 0;
        break;
      }
    }), pe(() => {
      for (u = zt("lsMapContainer"); u && g.value && f.isShow; ) {
        f.position[0] && f.position[1] && b(), g.value = 0;
        break;
      }
    });
    let w = Gt(null);
    const b = () => {
      w.value = tt.popup(f.options).setLatLng([f.position[0], f.position[1]]).setContent(l.value).openOn(u), u.setView([f.position[0], f.position[1]]);
    }, x = () => {
      w.value.close(), d.click, d.close, Ya.emit("close");
    };
    return So(f, (v) => {
      b();
    }), a({
      popup: w
    }), (v, N) => (To(), bo("div", {
      ref_key: "slotRef",
      ref: l
    }, [
      Mr("div", {
        class: "absolute text-white text-right w-full cursor-pointer p-2 z-999",
        onClick: x
      }, " X "),
      Mo(v.$slots, "default", {
        data: f.target
      })
    ], 512));
  }
});
qe.install = (s) => {
  s.component(qe.__name, qe);
};
const Qa = [Ne, De, We, je, qe], th = (s) => {
  Qa.forEach((a) => {
    s.component(a.__name, a);
  });
}, ih = {
  install: th
};
export {
  Ne as LsMap,
  De as LsMapDivMarker,
  We as LsMapGeo,
  je as LsMapMarker,
  qe as LsMapPopup,
  ih as default
};
