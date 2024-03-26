import { watch as sA, computed as _, defineComponent as Q, openBlock as L, createElementBlock as b, createElementVNode as i, createBlock as $, resolveDynamicComponent as tg, normalizeClass as CA, withCtx as y, renderSlot as ZC, resolveComponent as vA, createVNode as l, createTextVNode as DA, toDisplayString as s, ref as W, createCommentVNode as H, pushScopeId as iA, popScopeId as cA, createStaticVNode as ZI, unref as z, inject as PC, Fragment as O, renderList as AA, withDirectives as $A, reactive as xA, nextTick as eg, normalizeStyle as NC, Transition as kw, vModelText as UI, vShow as lg, provide as sC, KeepAlive as tI } from "vue";
import { ClickOutside as eI, ElMessage as zA } from "element-plus";
var Lg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yw(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
function lI(C) {
  if (C.__esModule)
    return C;
  var A = C.default;
  if (typeof A == "function") {
    var w = function M() {
      return this instanceof M ? Reflect.construct(A, arguments, this.constructor) : A.apply(this, arguments);
    };
    w.prototype = A.prototype;
  } else
    w = {};
  return Object.defineProperty(w, "__esModule", { value: !0 }), Object.keys(C).forEach(function(M) {
    var g = Object.getOwnPropertyDescriptor(C, M);
    Object.defineProperty(w, M, g.get ? g : {
      enumerable: !0,
      get: function() {
        return C[M];
      }
    });
  }), w;
}
var Jw = Error, Ow = EvalError, qw = RangeError, _w = ReferenceError, Iw = SyntaxError, AC = TypeError, $w = URIError, LI = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var A = {}, w = Symbol("test"), M = Object(w);
  if (typeof w == "string" || Object.prototype.toString.call(w) !== "[object Symbol]" || Object.prototype.toString.call(M) !== "[object Symbol]")
    return !1;
  var g = 42;
  A[w] = g;
  for (w in A)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(A).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(A).length !== 0)
    return !1;
  var I = Object.getOwnPropertySymbols(A);
  if (I.length !== 1 || I[0] !== w || !Object.prototype.propertyIsEnumerable.call(A, w))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var D = Object.getOwnPropertyDescriptor(A, w);
    if (D.value !== g || D.enumerable !== !0)
      return !1;
  }
  return !0;
}, zM = typeof Symbol < "u" && Symbol, KI = LI, Dw = function() {
  return typeof zM != "function" || typeof Symbol != "function" || typeof zM("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : KI();
}, RM = {
  foo: {}
}, zI = Object, vw = function() {
  return { __proto__: RM }.foo === RM.foo && !({ __proto__: null } instanceof zI);
}, RI = "Function.prototype.bind called on incompatible ", fI = Object.prototype.toString, FI = Math.max, aI = "[object Function]", fM = function(A, w) {
  for (var M = [], g = 0; g < A.length; g += 1)
    M[g] = A[g];
  for (var I = 0; I < w.length; I += 1)
    M[I + A.length] = w[I];
  return M;
}, bI = function(A, w) {
  for (var M = [], g = w || 0, I = 0; g < A.length; g += 1, I += 1)
    M[I] = A[g];
  return M;
}, NI = function(C, A) {
  for (var w = "", M = 0; M < C.length; M += 1)
    w += C[M], M + 1 < C.length && (w += A);
  return w;
}, rI = function(A) {
  var w = this;
  if (typeof w != "function" || fI.apply(w) !== aI)
    throw new TypeError(RI + w);
  for (var M = bI(arguments, 1), g, I = function() {
    if (this instanceof g) {
      var c = w.apply(
        this,
        fM(M, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return w.apply(
      A,
      fM(M, arguments)
    );
  }, D = FI(0, w.length - M.length), v = [], o = 0; o < D; o++)
    v[o] = "$" + o;
  if (g = Function("binder", "return function (" + NI(v, ",") + "){ return binder.apply(this,arguments); }")(I), w.prototype) {
    var n = function() {
    };
    n.prototype = w.prototype, g.prototype = new n(), n.prototype = null;
  }
  return g;
}, PI = rI, TC = Function.prototype.bind || PI, TI = Function.prototype.call, BI = Object.prototype.hasOwnProperty, GI = TC, AM = GI.call(TI, BI), k, jI = Jw, dI = Ow, uI = qw, xI = _w, UC = Iw, nC = AC, mI = $w, Kg = Function, nw = function(C) {
  try {
    return Kg('"use strict"; return (' + C + ").constructor;")();
  } catch {
  }
}, WA = Object.getOwnPropertyDescriptor;
if (WA)
  try {
    WA({}, "");
  } catch {
    WA = null;
  }
var iw = function() {
  throw new nC();
}, sI = WA ? function() {
  try {
    return arguments.callee, iw;
  } catch {
    try {
      return WA(arguments, "callee").get;
    } catch {
      return iw;
    }
  }
}() : iw, wC = Dw(), yI = vw(), tA = Object.getPrototypeOf || (yI ? function(C) {
  return C.__proto__;
} : null), DC = {}, QI = typeof Uint8Array > "u" || !tA ? k : tA(Uint8Array), hA = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? k : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? k : ArrayBuffer,
  "%ArrayIteratorPrototype%": wC && tA ? tA([][Symbol.iterator]()) : k,
  "%AsyncFromSyncIteratorPrototype%": k,
  "%AsyncFunction%": DC,
  "%AsyncGenerator%": DC,
  "%AsyncGeneratorFunction%": DC,
  "%AsyncIteratorPrototype%": DC,
  "%Atomics%": typeof Atomics > "u" ? k : Atomics,
  "%BigInt%": typeof BigInt > "u" ? k : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? k : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? k : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? k : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": jI,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": dI,
  "%Float32Array%": typeof Float32Array > "u" ? k : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? k : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? k : FinalizationRegistry,
  "%Function%": Kg,
  "%GeneratorFunction%": DC,
  "%Int8Array%": typeof Int8Array > "u" ? k : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? k : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? k : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": wC && tA ? tA(tA([][Symbol.iterator]())) : k,
  "%JSON%": typeof JSON == "object" ? JSON : k,
  "%Map%": typeof Map > "u" ? k : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !wC || !tA ? k : tA((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? k : Promise,
  "%Proxy%": typeof Proxy > "u" ? k : Proxy,
  "%RangeError%": uI,
  "%ReferenceError%": xI,
  "%Reflect%": typeof Reflect > "u" ? k : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? k : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !wC || !tA ? k : tA((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? k : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": wC && tA ? tA(""[Symbol.iterator]()) : k,
  "%Symbol%": wC ? Symbol : k,
  "%SyntaxError%": UC,
  "%ThrowTypeError%": sI,
  "%TypedArray%": QI,
  "%TypeError%": nC,
  "%Uint8Array%": typeof Uint8Array > "u" ? k : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? k : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? k : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? k : Uint32Array,
  "%URIError%": mI,
  "%WeakMap%": typeof WeakMap > "u" ? k : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? k : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? k : WeakSet
};
if (tA)
  try {
    null.error;
  } catch (C) {
    var pI = tA(tA(C));
    hA["%Error.prototype%"] = pI;
  }
var EI = function C(A) {
  var w;
  if (A === "%AsyncFunction%")
    w = nw("async function () {}");
  else if (A === "%GeneratorFunction%")
    w = nw("function* () {}");
  else if (A === "%AsyncGeneratorFunction%")
    w = nw("async function* () {}");
  else if (A === "%AsyncGenerator%") {
    var M = C("%AsyncGeneratorFunction%");
    M && (w = M.prototype);
  } else if (A === "%AsyncIteratorPrototype%") {
    var g = C("%AsyncGenerator%");
    g && tA && (w = tA(g.prototype));
  }
  return hA[A] = w, w;
}, FM = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, BC = TC, YC = AM, VI = BC.call(Function.call, Array.prototype.concat), HI = BC.call(Function.apply, Array.prototype.splice), aM = BC.call(Function.call, String.prototype.replace), JC = BC.call(Function.call, String.prototype.slice), SI = BC.call(Function.call, RegExp.prototype.exec), XI = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, WI = /\\(\\)?/g, hI = function(A) {
  var w = JC(A, 0, 1), M = JC(A, -1);
  if (w === "%" && M !== "%")
    throw new UC("invalid intrinsic syntax, expected closing `%`");
  if (M === "%" && w !== "%")
    throw new UC("invalid intrinsic syntax, expected opening `%`");
  var g = [];
  return aM(A, XI, function(I, D, v, o) {
    g[g.length] = v ? aM(o, WI, "$1") : D || I;
  }), g;
}, kI = function(A, w) {
  var M = A, g;
  if (YC(FM, M) && (g = FM[M], M = "%" + g[0] + "%"), YC(hA, M)) {
    var I = hA[M];
    if (I === DC && (I = EI(M)), typeof I > "u" && !w)
      throw new nC("intrinsic " + A + " exists, but is not available. Please file an issue!");
    return {
      alias: g,
      name: M,
      value: I
    };
  }
  throw new UC("intrinsic " + A + " does not exist!");
}, CM = function(A, w) {
  if (typeof A != "string" || A.length === 0)
    throw new nC("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof w != "boolean")
    throw new nC('"allowMissing" argument must be a boolean');
  if (SI(/^%?[^%]*%?$/, A) === null)
    throw new UC("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var M = hI(A), g = M.length > 0 ? M[0] : "", I = kI("%" + g + "%", w), D = I.name, v = I.value, o = !1, n = I.alias;
  n && (g = n[0], HI(M, VI([0, 1], n)));
  for (var c = 1, t = !0; c < M.length; c += 1) {
    var Z = M[c], U = JC(Z, 0, 1), P = JC(Z, -1);
    if ((U === '"' || U === "'" || U === "`" || P === '"' || P === "'" || P === "`") && U !== P)
      throw new UC("property names with quotes must have matching quotes");
    if ((Z === "constructor" || !t) && (o = !0), g += "." + Z, D = "%" + g + "%", YC(hA, D))
      v = hA[D];
    else if (v != null) {
      if (!(Z in v)) {
        if (!w)
          throw new nC("base intrinsic for " + A + " exists, but the property is not available.");
        return;
      }
      if (WA && c + 1 >= M.length) {
        var R = WA(v, Z);
        t = !!R, t && "get" in R && !("originalValue" in R.get) ? v = R.get : v = v[Z];
      } else
        t = YC(v, Z), v = v[Z];
      t && !o && (hA[D] = v);
    }
  }
  return v;
}, zg = { exports: {} }, Y, YI = Jw, JI = Ow, OI = qw, qI = _w, tC = Iw, iC = AC, _I = $w, Rg = Function, cw = function(C) {
  try {
    return Rg('"use strict"; return (' + C + ").constructor;")();
  } catch {
  }
}, kA = Object.getOwnPropertyDescriptor;
if (kA)
  try {
    kA({}, "");
  } catch {
    kA = null;
  }
var Zw = function() {
  throw new iC();
}, $I = kA ? function() {
  try {
    return arguments.callee, Zw;
  } catch {
    try {
      return kA(arguments, "callee").get;
    } catch {
      return Zw;
    }
  }
}() : Zw, MC = Dw(), AD = vw(), eA = Object.getPrototypeOf || (AD ? function(C) {
  return C.__proto__;
} : null), vC = {}, CD = typeof Uint8Array > "u" || !eA ? Y : eA(Uint8Array), YA = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? Y : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Y : ArrayBuffer,
  "%ArrayIteratorPrototype%": MC && eA ? eA([][Symbol.iterator]()) : Y,
  "%AsyncFromSyncIteratorPrototype%": Y,
  "%AsyncFunction%": vC,
  "%AsyncGenerator%": vC,
  "%AsyncGeneratorFunction%": vC,
  "%AsyncIteratorPrototype%": vC,
  "%Atomics%": typeof Atomics > "u" ? Y : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Y : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Y : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Y : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Y : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": YI,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": JI,
  "%Float32Array%": typeof Float32Array > "u" ? Y : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Y : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Y : FinalizationRegistry,
  "%Function%": Rg,
  "%GeneratorFunction%": vC,
  "%Int8Array%": typeof Int8Array > "u" ? Y : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Y : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Y : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": MC && eA ? eA(eA([][Symbol.iterator]())) : Y,
  "%JSON%": typeof JSON == "object" ? JSON : Y,
  "%Map%": typeof Map > "u" ? Y : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !MC || !eA ? Y : eA((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Y : Promise,
  "%Proxy%": typeof Proxy > "u" ? Y : Proxy,
  "%RangeError%": OI,
  "%ReferenceError%": qI,
  "%Reflect%": typeof Reflect > "u" ? Y : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Y : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !MC || !eA ? Y : eA((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Y : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": MC && eA ? eA(""[Symbol.iterator]()) : Y,
  "%Symbol%": MC ? Symbol : Y,
  "%SyntaxError%": tC,
  "%ThrowTypeError%": $I,
  "%TypedArray%": CD,
  "%TypeError%": iC,
  "%Uint8Array%": typeof Uint8Array > "u" ? Y : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Y : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Y : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Y : Uint32Array,
  "%URIError%": _I,
  "%WeakMap%": typeof WeakMap > "u" ? Y : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Y : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Y : WeakSet
};
if (eA)
  try {
    null.error;
  } catch (C) {
    var wD = eA(eA(C));
    YA["%Error.prototype%"] = wD;
  }
var MD = function C(A) {
  var w;
  if (A === "%AsyncFunction%")
    w = cw("async function () {}");
  else if (A === "%GeneratorFunction%")
    w = cw("function* () {}");
  else if (A === "%AsyncGeneratorFunction%")
    w = cw("async function* () {}");
  else if (A === "%AsyncGenerator%") {
    var M = C("%AsyncGeneratorFunction%");
    M && (w = M.prototype);
  } else if (A === "%AsyncIteratorPrototype%") {
    var g = C("%AsyncGenerator%");
    g && eA && (w = eA(g.prototype));
  }
  return YA[A] = w, w;
}, bM = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, GC = TC, OC = AM, gD = GC.call(Function.call, Array.prototype.concat), ID = GC.call(Function.apply, Array.prototype.splice), NM = GC.call(Function.call, String.prototype.replace), qC = GC.call(Function.call, String.prototype.slice), DD = GC.call(Function.call, RegExp.prototype.exec), vD = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, oD = /\\(\\)?/g, nD = function(A) {
  var w = qC(A, 0, 1), M = qC(A, -1);
  if (w === "%" && M !== "%")
    throw new tC("invalid intrinsic syntax, expected closing `%`");
  if (M === "%" && w !== "%")
    throw new tC("invalid intrinsic syntax, expected opening `%`");
  var g = [];
  return NM(A, vD, function(I, D, v, o) {
    g[g.length] = v ? NM(o, oD, "$1") : D || I;
  }), g;
}, iD = function(A, w) {
  var M = A, g;
  if (OC(bM, M) && (g = bM[M], M = "%" + g[0] + "%"), OC(YA, M)) {
    var I = YA[M];
    if (I === vC && (I = MD(M)), typeof I > "u" && !w)
      throw new iC("intrinsic " + A + " exists, but is not available. Please file an issue!");
    return {
      alias: g,
      name: M,
      value: I
    };
  }
  throw new tC("intrinsic " + A + " does not exist!");
}, cD = function(A, w) {
  if (typeof A != "string" || A.length === 0)
    throw new iC("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof w != "boolean")
    throw new iC('"allowMissing" argument must be a boolean');
  if (DD(/^%?[^%]*%?$/, A) === null)
    throw new tC("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var M = nD(A), g = M.length > 0 ? M[0] : "", I = iD("%" + g + "%", w), D = I.name, v = I.value, o = !1, n = I.alias;
  n && (g = n[0], ID(M, gD([0, 1], n)));
  for (var c = 1, t = !0; c < M.length; c += 1) {
    var Z = M[c], U = qC(Z, 0, 1), P = qC(Z, -1);
    if ((U === '"' || U === "'" || U === "`" || P === '"' || P === "'" || P === "`") && U !== P)
      throw new tC("property names with quotes must have matching quotes");
    if ((Z === "constructor" || !t) && (o = !0), g += "." + Z, D = "%" + g + "%", OC(YA, D))
      v = YA[D];
    else if (v != null) {
      if (!(Z in v)) {
        if (!w)
          throw new iC("base intrinsic for " + A + " exists, but the property is not available.");
        return;
      }
      if (kA && c + 1 >= M.length) {
        var R = kA(v, Z);
        t = !!R, t && "get" in R && !("originalValue" in R.get) ? v = R.get : v = v[Z];
      } else
        t = OC(v, Z), v = v[Z];
      t && !o && (YA[D] = v);
    }
  }
  return v;
}, Uw, rM;
function ZD() {
  if (rM)
    return Uw;
  rM = 1;
  var C, A = Jw, w = Ow, M = qw, g = _w, I = Iw, D = AC, v = $w, o = Function, n = function(S) {
    try {
      return o('"use strict"; return (' + S + ").constructor;")();
    } catch {
    }
  }, c = Object.getOwnPropertyDescriptor;
  if (c)
    try {
      c({}, "");
    } catch {
      c = null;
    }
  var t = function() {
    throw new D();
  }, Z = c ? function() {
    try {
      return arguments.callee, t;
    } catch {
      try {
        return c(arguments, "callee").get;
      } catch {
        return t;
      }
    }
  }() : t, U = Dw(), P = vw(), R = Object.getPrototypeOf || (P ? function(S) {
    return S.__proto__;
  } : null), T = {}, a = typeof Uint8Array > "u" || !R ? C : R(Uint8Array), d = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? C : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? C : ArrayBuffer,
    "%ArrayIteratorPrototype%": U && R ? R([][Symbol.iterator]()) : C,
    "%AsyncFromSyncIteratorPrototype%": C,
    "%AsyncFunction%": T,
    "%AsyncGenerator%": T,
    "%AsyncGeneratorFunction%": T,
    "%AsyncIteratorPrototype%": T,
    "%Atomics%": typeof Atomics > "u" ? C : Atomics,
    "%BigInt%": typeof BigInt > "u" ? C : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? C : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? C : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? C : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": A,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": w,
    "%Float32Array%": typeof Float32Array > "u" ? C : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? C : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? C : FinalizationRegistry,
    "%Function%": o,
    "%GeneratorFunction%": T,
    "%Int8Array%": typeof Int8Array > "u" ? C : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? C : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? C : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": U && R ? R(R([][Symbol.iterator]())) : C,
    "%JSON%": typeof JSON == "object" ? JSON : C,
    "%Map%": typeof Map > "u" ? C : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !U || !R ? C : R((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? C : Promise,
    "%Proxy%": typeof Proxy > "u" ? C : Proxy,
    "%RangeError%": M,
    "%ReferenceError%": g,
    "%Reflect%": typeof Reflect > "u" ? C : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? C : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !U || !R ? C : R((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? C : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": U && R ? R(""[Symbol.iterator]()) : C,
    "%Symbol%": U ? Symbol : C,
    "%SyntaxError%": I,
    "%ThrowTypeError%": Z,
    "%TypedArray%": a,
    "%TypeError%": D,
    "%Uint8Array%": typeof Uint8Array > "u" ? C : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? C : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? C : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? C : Uint32Array,
    "%URIError%": v,
    "%WeakMap%": typeof WeakMap > "u" ? C : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? C : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? C : WeakSet
  };
  if (R)
    try {
      null.error;
    } catch (S) {
      var B = R(R(S));
      d["%Error.prototype%"] = B;
    }
  var G = function S(X) {
    var q;
    if (X === "%AsyncFunction%")
      q = n("async function () {}");
    else if (X === "%GeneratorFunction%")
      q = n("function* () {}");
    else if (X === "%AsyncGeneratorFunction%")
      q = n("async function* () {}");
    else if (X === "%AsyncGenerator%") {
      var h = S("%AsyncGeneratorFunction%");
      h && (q = h.prototype);
    } else if (X === "%AsyncIteratorPrototype%") {
      var wA = S("%AsyncGenerator%");
      wA && R && (q = R(wA.prototype));
    }
    return d[X] = q, q;
  }, u = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, e = TC, K = AM, f = e.call(Function.call, Array.prototype.concat), F = e.call(Function.apply, Array.prototype.splice), N = e.call(Function.call, String.prototype.replace), x = e.call(Function.call, String.prototype.slice), m = e.call(Function.call, RegExp.prototype.exec), p = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, E = /\\(\\)?/g, r = function(X) {
    var q = x(X, 0, 1), h = x(X, -1);
    if (q === "%" && h !== "%")
      throw new I("invalid intrinsic syntax, expected closing `%`");
    if (h === "%" && q !== "%")
      throw new I("invalid intrinsic syntax, expected opening `%`");
    var wA = [];
    return N(X, p, function(ZA, aA, UA, jA) {
      wA[wA.length] = UA ? N(jA, E, "$1") : aA || ZA;
    }), wA;
  }, j = function(X, q) {
    var h = X, wA;
    if (K(u, h) && (wA = u[h], h = "%" + wA[0] + "%"), K(d, h)) {
      var ZA = d[h];
      if (ZA === T && (ZA = G(h)), typeof ZA > "u" && !q)
        throw new D("intrinsic " + X + " exists, but is not available. Please file an issue!");
      return {
        alias: wA,
        name: h,
        value: ZA
      };
    }
    throw new I("intrinsic " + X + " does not exist!");
  };
  return Uw = function(X, q) {
    if (typeof X != "string" || X.length === 0)
      throw new D("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof q != "boolean")
      throw new D('"allowMissing" argument must be a boolean');
    if (m(/^%?[^%]*%?$/, X) === null)
      throw new I("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var h = r(X), wA = h.length > 0 ? h[0] : "", ZA = j("%" + wA + "%", q), aA = ZA.name, UA = ZA.value, jA = !1, CC = ZA.alias;
    CC && (wA = CC[0], F(h, f([0, 1], CC)));
    for (var QA = 1, dA = !0; QA < h.length; QA += 1) {
      var bA = h[QA], uC = x(bA, 0, 1), xC = x(bA, -1);
      if ((uC === '"' || uC === "'" || uC === "`" || xC === '"' || xC === "'" || xC === "`") && uC !== xC)
        throw new I("property names with quotes must have matching quotes");
      if ((bA === "constructor" || !dA) && (jA = !0), wA += "." + bA, aA = "%" + wA + "%", K(d, aA))
        UA = d[aA];
      else if (UA != null) {
        if (!(bA in UA)) {
          if (!q)
            throw new D("base intrinsic for " + X + " exists, but the property is not available.");
          return;
        }
        if (c && QA + 1 >= h.length) {
          var mC = c(UA, bA);
          dA = !!mC, dA && "get" in mC && !("originalValue" in mC.get) ? UA = mC.get : UA = UA[bA];
        } else
          dA = K(UA, bA), UA = UA[bA];
        dA && !jA && (d[aA] = UA);
      }
    }
    return UA;
  }, Uw;
}
var tw, PM;
function wM() {
  if (PM)
    return tw;
  PM = 1;
  var C = ZD(), A = C("%Object.defineProperty%", !0) || !1;
  if (A)
    try {
      A({}, "a", { value: 1 });
    } catch {
      A = !1;
    }
  return tw = A, tw;
}
var UD = "Function.prototype.bind called on incompatible ", ew = Array.prototype.slice, tD = Object.prototype.toString, eD = "[object Function]", lD = function(A) {
  var w = this;
  if (typeof w != "function" || tD.call(w) !== eD)
    throw new TypeError(UD + w);
  for (var M = ew.call(arguments, 1), g, I = function() {
    if (this instanceof g) {
      var c = w.apply(
        this,
        M.concat(ew.call(arguments))
      );
      return Object(c) === c ? c : this;
    } else
      return w.apply(
        A,
        M.concat(ew.call(arguments))
      );
  }, D = Math.max(0, w.length - M.length), v = [], o = 0; o < D; o++)
    v.push("$" + o);
  if (g = Function("binder", "return function (" + v.join(",") + "){ return binder.apply(this,arguments); }")(I), w.prototype) {
    var n = function() {
    };
    n.prototype = w.prototype, g.prototype = new n(), n.prototype = null;
  }
  return g;
}, LD = lD, KD = Function.prototype.bind || LD, zD = "Function.prototype.bind called on incompatible ", lw = Array.prototype.slice, RD = Object.prototype.toString, fD = "[object Function]", FD = function(A) {
  var w = this;
  if (typeof w != "function" || RD.call(w) !== fD)
    throw new TypeError(zD + w);
  for (var M = lw.call(arguments, 1), g, I = function() {
    if (this instanceof g) {
      var c = w.apply(
        this,
        M.concat(lw.call(arguments))
      );
      return Object(c) === c ? c : this;
    } else
      return w.apply(
        A,
        M.concat(lw.call(arguments))
      );
  }, D = Math.max(0, w.length - M.length), v = [], o = 0; o < D; o++)
    v.push("$" + o);
  if (g = Function("binder", "return function (" + v.join(",") + "){ return binder.apply(this,arguments); }")(I), w.prototype) {
    var n = function() {
    };
    n.prototype = w.prototype, g.prototype = new n(), n.prototype = null;
  }
  return g;
}, aD = FD, bD = Function.prototype.bind || aD, ND = bD, rD = ND.call(Function.call, Object.prototype.hasOwnProperty), J, eC = SyntaxError, fg = Function, cC = TypeError, Lw = function(C) {
  try {
    return fg('"use strict"; return (' + C + ").constructor;")();
  } catch {
  }
}, JA = Object.getOwnPropertyDescriptor;
if (JA)
  try {
    JA({}, "");
  } catch {
    JA = null;
  }
var Kw = function() {
  throw new cC();
}, PD = JA ? function() {
  try {
    return arguments.callee, Kw;
  } catch {
    try {
      return JA(arguments, "callee").get;
    } catch {
      return Kw;
    }
  }
}() : Kw, gC = Dw(), TD = vw(), lA = Object.getPrototypeOf || (TD ? function(C) {
  return C.__proto__;
} : null), oC = {}, BD = typeof Uint8Array > "u" || !lA ? J : lA(Uint8Array), OA = {
  "%AggregateError%": typeof AggregateError > "u" ? J : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? J : ArrayBuffer,
  "%ArrayIteratorPrototype%": gC && lA ? lA([][Symbol.iterator]()) : J,
  "%AsyncFromSyncIteratorPrototype%": J,
  "%AsyncFunction%": oC,
  "%AsyncGenerator%": oC,
  "%AsyncGeneratorFunction%": oC,
  "%AsyncIteratorPrototype%": oC,
  "%Atomics%": typeof Atomics > "u" ? J : Atomics,
  "%BigInt%": typeof BigInt > "u" ? J : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? J : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? J : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? J : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? J : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? J : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? J : FinalizationRegistry,
  "%Function%": fg,
  "%GeneratorFunction%": oC,
  "%Int8Array%": typeof Int8Array > "u" ? J : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? J : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? J : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": gC && lA ? lA(lA([][Symbol.iterator]())) : J,
  "%JSON%": typeof JSON == "object" ? JSON : J,
  "%Map%": typeof Map > "u" ? J : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !gC || !lA ? J : lA((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? J : Promise,
  "%Proxy%": typeof Proxy > "u" ? J : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? J : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? J : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !gC || !lA ? J : lA((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? J : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": gC && lA ? lA(""[Symbol.iterator]()) : J,
  "%Symbol%": gC ? Symbol : J,
  "%SyntaxError%": eC,
  "%ThrowTypeError%": PD,
  "%TypedArray%": BD,
  "%TypeError%": cC,
  "%Uint8Array%": typeof Uint8Array > "u" ? J : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? J : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? J : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? J : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? J : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? J : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? J : WeakSet
};
if (lA)
  try {
    null.error;
  } catch (C) {
    var GD = lA(lA(C));
    OA["%Error.prototype%"] = GD;
  }
var jD = function C(A) {
  var w;
  if (A === "%AsyncFunction%")
    w = Lw("async function () {}");
  else if (A === "%GeneratorFunction%")
    w = Lw("function* () {}");
  else if (A === "%AsyncGeneratorFunction%")
    w = Lw("async function* () {}");
  else if (A === "%AsyncGenerator%") {
    var M = C("%AsyncGeneratorFunction%");
    M && (w = M.prototype);
  } else if (A === "%AsyncIteratorPrototype%") {
    var g = C("%AsyncGenerator%");
    g && lA && (w = lA(g.prototype));
  }
  return OA[A] = w, w;
}, TM = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, jC = KD, _C = rD, dD = jC.call(Function.call, Array.prototype.concat), uD = jC.call(Function.apply, Array.prototype.splice), BM = jC.call(Function.call, String.prototype.replace), $C = jC.call(Function.call, String.prototype.slice), xD = jC.call(Function.call, RegExp.prototype.exec), mD = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, sD = /\\(\\)?/g, yD = function(A) {
  var w = $C(A, 0, 1), M = $C(A, -1);
  if (w === "%" && M !== "%")
    throw new eC("invalid intrinsic syntax, expected closing `%`");
  if (M === "%" && w !== "%")
    throw new eC("invalid intrinsic syntax, expected opening `%`");
  var g = [];
  return BM(A, mD, function(I, D, v, o) {
    g[g.length] = v ? BM(o, sD, "$1") : D || I;
  }), g;
}, QD = function(A, w) {
  var M = A, g;
  if (_C(TM, M) && (g = TM[M], M = "%" + g[0] + "%"), _C(OA, M)) {
    var I = OA[M];
    if (I === oC && (I = jD(M)), typeof I > "u" && !w)
      throw new cC("intrinsic " + A + " exists, but is not available. Please file an issue!");
    return {
      alias: g,
      name: M,
      value: I
    };
  }
  throw new eC("intrinsic " + A + " does not exist!");
}, pD = function(A, w) {
  if (typeof A != "string" || A.length === 0)
    throw new cC("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof w != "boolean")
    throw new cC('"allowMissing" argument must be a boolean');
  if (xD(/^%?[^%]*%?$/, A) === null)
    throw new eC("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var M = yD(A), g = M.length > 0 ? M[0] : "", I = QD("%" + g + "%", w), D = I.name, v = I.value, o = !1, n = I.alias;
  n && (g = n[0], uD(M, dD([0, 1], n)));
  for (var c = 1, t = !0; c < M.length; c += 1) {
    var Z = M[c], U = $C(Z, 0, 1), P = $C(Z, -1);
    if ((U === '"' || U === "'" || U === "`" || P === '"' || P === "'" || P === "`") && U !== P)
      throw new eC("property names with quotes must have matching quotes");
    if ((Z === "constructor" || !t) && (o = !0), g += "." + Z, D = "%" + g + "%", _C(OA, D))
      v = OA[D];
    else if (v != null) {
      if (!(Z in v)) {
        if (!w)
          throw new cC("base intrinsic for " + A + " exists, but the property is not available.");
        return;
      }
      if (JA && c + 1 >= M.length) {
        var R = JA(v, Z);
        t = !!R, t && "get" in R && !("originalValue" in R.get) ? v = R.get : v = v[Z];
      } else
        t = _C(v, Z), v = v[Z];
      t && !o && (OA[D] = v);
    }
  }
  return v;
}, ED = pD, hC = ED("%Object.getOwnPropertyDescriptor%", !0);
if (hC)
  try {
    hC([], "length");
  } catch {
    hC = null;
  }
var Fg = hC, GM = wM(), VD = Iw, IC = AC, jM = Fg, HD = function(A, w, M) {
  if (!A || typeof A != "object" && typeof A != "function")
    throw new IC("`obj` must be an object or a function`");
  if (typeof w != "string" && typeof w != "symbol")
    throw new IC("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new IC("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new IC("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new IC("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new IC("`loose`, if provided, must be a boolean");
  var g = arguments.length > 3 ? arguments[3] : null, I = arguments.length > 4 ? arguments[4] : null, D = arguments.length > 5 ? arguments[5] : null, v = arguments.length > 6 ? arguments[6] : !1, o = !!jM && jM(A, w);
  if (GM)
    GM(A, w, {
      configurable: D === null && o ? o.configurable : !D,
      enumerable: g === null && o ? o.enumerable : !g,
      value: M,
      writable: I === null && o ? o.writable : !I
    });
  else if (v || !g && !I && !D)
    A[w] = M;
  else
    throw new VD("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, uw = wM(), ag = function() {
  return !!uw;
};
ag.hasArrayLengthDefineBug = function() {
  if (!uw)
    return null;
  try {
    return uw([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var SD = ag, XD = cD, dM = HD, WD = SD(), uM = Fg, xM = AC, hD = XD("%Math.floor%"), kD = function(A, w) {
  if (typeof A != "function")
    throw new xM("`fn` is not a function");
  if (typeof w != "number" || w < 0 || w > 4294967295 || hD(w) !== w)
    throw new xM("`length` must be a positive 32-bit integer");
  var M = arguments.length > 2 && !!arguments[2], g = !0, I = !0;
  if ("length" in A && uM) {
    var D = uM(A, "length");
    D && !D.configurable && (g = !1), D && !D.writable && (I = !1);
  }
  return (g || I || !M) && (WD ? dM(
    /** @type {Parameters<define>[0]} */
    A,
    "length",
    w,
    !0,
    !0
  ) : dM(
    /** @type {Parameters<define>[0]} */
    A,
    "length",
    w
  )), A;
};
(function(C) {
  var A = TC, w = CM, M = kD, g = AC, I = w("%Function.prototype.apply%"), D = w("%Function.prototype.call%"), v = w("%Reflect.apply%", !0) || A.call(D, I), o = wM(), n = w("%Math.max%");
  C.exports = function(Z) {
    if (typeof Z != "function")
      throw new g("a function is required");
    var U = v(A, D, arguments);
    return M(
      U,
      1 + n(0, Z.length - (arguments.length - 1)),
      !0
    );
  };
  var c = function() {
    return v(A, I, arguments);
  };
  o ? o(C.exports, "apply", { value: c }) : C.exports.apply = c;
})(zg);
var YD = zg.exports, bg = CM, Ng = YD, JD = Ng(bg("String.prototype.indexOf")), OD = function(A, w) {
  var M = bg(A, !!w);
  return typeof M == "function" && JD(A, ".prototype.") > -1 ? Ng(M) : M;
};
const qD = {}, _D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qD
}, Symbol.toStringTag, { value: "Module" })), $D = /* @__PURE__ */ lI(_D);
var MM = typeof Map == "function" && Map.prototype, zw = Object.getOwnPropertyDescriptor && MM ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Aw = MM && zw && typeof zw.get == "function" ? zw.get : null, mM = MM && Map.prototype.forEach, gM = typeof Set == "function" && Set.prototype, Rw = Object.getOwnPropertyDescriptor && gM ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Cw = gM && Rw && typeof Rw.get == "function" ? Rw.get : null, sM = gM && Set.prototype.forEach, Av = typeof WeakMap == "function" && WeakMap.prototype, FC = Av ? WeakMap.prototype.has : null, Cv = typeof WeakSet == "function" && WeakSet.prototype, aC = Cv ? WeakSet.prototype.has : null, wv = typeof WeakRef == "function" && WeakRef.prototype, yM = wv ? WeakRef.prototype.deref : null, Mv = Boolean.prototype.valueOf, gv = Object.prototype.toString, Iv = Function.prototype.toString, Dv = String.prototype.match, IM = String.prototype.slice, mA = String.prototype.replace, vv = String.prototype.toUpperCase, QM = String.prototype.toLowerCase, rg = RegExp.prototype.test, pM = Array.prototype.concat, PA = Array.prototype.join, ov = Array.prototype.slice, EM = Math.floor, xw = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, fw = Object.getOwnPropertySymbols, mw = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, lC = typeof Symbol == "function" && typeof Symbol.iterator == "object", KA = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === lC || !0) ? Symbol.toStringTag : null, Pg = Object.prototype.propertyIsEnumerable, VM = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(C) {
  return C.__proto__;
} : null);
function HM(C, A) {
  if (C === 1 / 0 || C === -1 / 0 || C !== C || C && C > -1e3 && C < 1e3 || rg.call(/e/, A))
    return A;
  var w = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof C == "number") {
    var M = C < 0 ? -EM(-C) : EM(C);
    if (M !== C) {
      var g = String(M), I = IM.call(A, g.length + 1);
      return mA.call(g, w, "$&_") + "." + mA.call(mA.call(I, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return mA.call(A, w, "$&_");
}
var sw = $D, SM = sw.custom, XM = Bg(SM) ? SM : null, nv = function C(A, w, M, g) {
  var I = w || {};
  if (uA(I, "quoteStyle") && I.quoteStyle !== "single" && I.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (uA(I, "maxStringLength") && (typeof I.maxStringLength == "number" ? I.maxStringLength < 0 && I.maxStringLength !== 1 / 0 : I.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var D = uA(I, "customInspect") ? I.customInspect : !0;
  if (typeof D != "boolean" && D !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (uA(I, "indent") && I.indent !== null && I.indent !== "	" && !(parseInt(I.indent, 10) === I.indent && I.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (uA(I, "numericSeparator") && typeof I.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var v = I.numericSeparator;
  if (typeof A > "u")
    return "undefined";
  if (A === null)
    return "null";
  if (typeof A == "boolean")
    return A ? "true" : "false";
  if (typeof A == "string")
    return jg(A, I);
  if (typeof A == "number") {
    if (A === 0)
      return 1 / 0 / A > 0 ? "0" : "-0";
    var o = String(A);
    return v ? HM(A, o) : o;
  }
  if (typeof A == "bigint") {
    var n = String(A) + "n";
    return v ? HM(A, n) : n;
  }
  var c = typeof I.depth > "u" ? 5 : I.depth;
  if (typeof M > "u" && (M = 0), M >= c && c > 0 && typeof A == "object")
    return yw(A) ? "[Array]" : "[Object]";
  var t = Pv(I, M);
  if (typeof g > "u")
    g = [];
  else if (Gg(g, A) >= 0)
    return "[Circular]";
  function Z(p, E, r) {
    if (E && (g = ov.call(g), g.push(E)), r) {
      var j = {
        depth: I.depth
      };
      return uA(I, "quoteStyle") && (j.quoteStyle = I.quoteStyle), C(p, j, M + 1, g);
    }
    return C(p, I, M + 1, g);
  }
  if (typeof A == "function" && !WM(A)) {
    var U = Kv(A), P = yC(A, Z);
    return "[Function" + (U ? ": " + U : " (anonymous)") + "]" + (P.length > 0 ? " { " + PA.call(P, ", ") + " }" : "");
  }
  if (Bg(A)) {
    var R = lC ? mA.call(String(A), /^(Symbol\(.*\))_[^)]*$/, "$1") : mw.call(A);
    return typeof A == "object" && !lC ? zC(R) : R;
  }
  if (bv(A)) {
    for (var T = "<" + QM.call(String(A.nodeName)), a = A.attributes || [], d = 0; d < a.length; d++)
      T += " " + a[d].name + "=" + Tg(iv(a[d].value), "double", I);
    return T += ">", A.childNodes && A.childNodes.length && (T += "..."), T += "</" + QM.call(String(A.nodeName)) + ">", T;
  }
  if (yw(A)) {
    if (A.length === 0)
      return "[]";
    var B = yC(A, Z);
    return t && !rv(B) ? "[" + Qw(B, t) + "]" : "[ " + PA.call(B, ", ") + " ]";
  }
  if (Zv(A)) {
    var G = yC(A, Z);
    return !("cause" in Error.prototype) && "cause" in A && !Pg.call(A, "cause") ? "{ [" + String(A) + "] " + PA.call(pM.call("[cause]: " + Z(A.cause), G), ", ") + " }" : G.length === 0 ? "[" + String(A) + "]" : "{ [" + String(A) + "] " + PA.call(G, ", ") + " }";
  }
  if (typeof A == "object" && D) {
    if (XM && typeof A[XM] == "function" && sw)
      return sw(A, { depth: c - M });
    if (D !== "symbol" && typeof A.inspect == "function")
      return A.inspect();
  }
  if (zv(A)) {
    var u = [];
    return mM && mM.call(A, function(p, E) {
      u.push(Z(E, A, !0) + " => " + Z(p, A));
    }), hM("Map", Aw.call(A), u, t);
  }
  if (Fv(A)) {
    var e = [];
    return sM && sM.call(A, function(p) {
      e.push(Z(p, A));
    }), hM("Set", Cw.call(A), e, t);
  }
  if (Rv(A))
    return Fw("WeakMap");
  if (av(A))
    return Fw("WeakSet");
  if (fv(A))
    return Fw("WeakRef");
  if (tv(A))
    return zC(Z(Number(A)));
  if (lv(A))
    return zC(Z(xw.call(A)));
  if (ev(A))
    return zC(Mv.call(A));
  if (Uv(A))
    return zC(Z(String(A)));
  if (typeof window < "u" && A === window)
    return "{ [object Window] }";
  if (A === Lg)
    return "{ [object globalThis] }";
  if (!cv(A) && !WM(A)) {
    var K = yC(A, Z), f = VM ? VM(A) === Object.prototype : A instanceof Object || A.constructor === Object, F = A instanceof Object ? "" : "null prototype", N = !f && KA && Object(A) === A && KA in A ? IM.call(yA(A), 8, -1) : F ? "Object" : "", x = f || typeof A.constructor != "function" ? "" : A.constructor.name ? A.constructor.name + " " : "", m = x + (N || F ? "[" + PA.call(pM.call([], N || [], F || []), ": ") + "] " : "");
    return K.length === 0 ? m + "{}" : t ? m + "{" + Qw(K, t) + "}" : m + "{ " + PA.call(K, ", ") + " }";
  }
  return String(A);
};
function Tg(C, A, w) {
  var M = (w.quoteStyle || A) === "double" ? '"' : "'";
  return M + C + M;
}
function iv(C) {
  return mA.call(String(C), /"/g, "&quot;");
}
function yw(C) {
  return yA(C) === "[object Array]" && (!KA || !(typeof C == "object" && KA in C));
}
function cv(C) {
  return yA(C) === "[object Date]" && (!KA || !(typeof C == "object" && KA in C));
}
function WM(C) {
  return yA(C) === "[object RegExp]" && (!KA || !(typeof C == "object" && KA in C));
}
function Zv(C) {
  return yA(C) === "[object Error]" && (!KA || !(typeof C == "object" && KA in C));
}
function Uv(C) {
  return yA(C) === "[object String]" && (!KA || !(typeof C == "object" && KA in C));
}
function tv(C) {
  return yA(C) === "[object Number]" && (!KA || !(typeof C == "object" && KA in C));
}
function ev(C) {
  return yA(C) === "[object Boolean]" && (!KA || !(typeof C == "object" && KA in C));
}
function Bg(C) {
  if (lC)
    return C && typeof C == "object" && C instanceof Symbol;
  if (typeof C == "symbol")
    return !0;
  if (!C || typeof C != "object" || !mw)
    return !1;
  try {
    return mw.call(C), !0;
  } catch {
  }
  return !1;
}
function lv(C) {
  if (!C || typeof C != "object" || !xw)
    return !1;
  try {
    return xw.call(C), !0;
  } catch {
  }
  return !1;
}
var Lv = Object.prototype.hasOwnProperty || function(C) {
  return C in this;
};
function uA(C, A) {
  return Lv.call(C, A);
}
function yA(C) {
  return gv.call(C);
}
function Kv(C) {
  if (C.name)
    return C.name;
  var A = Dv.call(Iv.call(C), /^function\s*([\w$]+)/);
  return A ? A[1] : null;
}
function Gg(C, A) {
  if (C.indexOf)
    return C.indexOf(A);
  for (var w = 0, M = C.length; w < M; w++)
    if (C[w] === A)
      return w;
  return -1;
}
function zv(C) {
  if (!Aw || !C || typeof C != "object")
    return !1;
  try {
    Aw.call(C);
    try {
      Cw.call(C);
    } catch {
      return !0;
    }
    return C instanceof Map;
  } catch {
  }
  return !1;
}
function Rv(C) {
  if (!FC || !C || typeof C != "object")
    return !1;
  try {
    FC.call(C, FC);
    try {
      aC.call(C, aC);
    } catch {
      return !0;
    }
    return C instanceof WeakMap;
  } catch {
  }
  return !1;
}
function fv(C) {
  if (!yM || !C || typeof C != "object")
    return !1;
  try {
    return yM.call(C), !0;
  } catch {
  }
  return !1;
}
function Fv(C) {
  if (!Cw || !C || typeof C != "object")
    return !1;
  try {
    Cw.call(C);
    try {
      Aw.call(C);
    } catch {
      return !0;
    }
    return C instanceof Set;
  } catch {
  }
  return !1;
}
function av(C) {
  if (!aC || !C || typeof C != "object")
    return !1;
  try {
    aC.call(C, aC);
    try {
      FC.call(C, FC);
    } catch {
      return !0;
    }
    return C instanceof WeakSet;
  } catch {
  }
  return !1;
}
function bv(C) {
  return !C || typeof C != "object" ? !1 : typeof HTMLElement < "u" && C instanceof HTMLElement ? !0 : typeof C.nodeName == "string" && typeof C.getAttribute == "function";
}
function jg(C, A) {
  if (C.length > A.maxStringLength) {
    var w = C.length - A.maxStringLength, M = "... " + w + " more character" + (w > 1 ? "s" : "");
    return jg(IM.call(C, 0, A.maxStringLength), A) + M;
  }
  var g = mA.call(mA.call(C, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Nv);
  return Tg(g, "single", A);
}
function Nv(C) {
  var A = C.charCodeAt(0), w = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[A];
  return w ? "\\" + w : "\\x" + (A < 16 ? "0" : "") + vv.call(A.toString(16));
}
function zC(C) {
  return "Object(" + C + ")";
}
function Fw(C) {
  return C + " { ? }";
}
function hM(C, A, w, M) {
  var g = M ? Qw(w, M) : PA.call(w, ", ");
  return C + " (" + A + ") {" + g + "}";
}
function rv(C) {
  for (var A = 0; A < C.length; A++)
    if (Gg(C[A], `
`) >= 0)
      return !1;
  return !0;
}
function Pv(C, A) {
  var w;
  if (C.indent === "	")
    w = "	";
  else if (typeof C.indent == "number" && C.indent > 0)
    w = PA.call(Array(C.indent + 1), " ");
  else
    return null;
  return {
    base: w,
    prev: PA.call(Array(A + 1), w)
  };
}
function Qw(C, A) {
  if (C.length === 0)
    return "";
  var w = `
` + A.prev + A.base;
  return w + PA.call(C, "," + w) + `
` + A.prev;
}
function yC(C, A) {
  var w = yw(C), M = [];
  if (w) {
    M.length = C.length;
    for (var g = 0; g < C.length; g++)
      M[g] = uA(C, g) ? A(C[g], C) : "";
  }
  var I = typeof fw == "function" ? fw(C) : [], D;
  if (lC) {
    D = {};
    for (var v = 0; v < I.length; v++)
      D["$" + I[v]] = I[v];
  }
  for (var o in C)
    uA(C, o) && (w && String(Number(o)) === o && o < C.length || lC && D["$" + o] instanceof Symbol || (rg.call(/[^\w$]/, o) ? M.push(A(o, C) + ": " + A(C[o], C)) : M.push(o + ": " + A(C[o], C))));
  if (typeof fw == "function")
    for (var n = 0; n < I.length; n++)
      Pg.call(C, I[n]) && M.push("[" + A(I[n]) + "]: " + A(C[I[n]], C));
  return M;
}
var dg = CM, KC = OD, Tv = nv, Bv = AC, QC = dg("%WeakMap%", !0), pC = dg("%Map%", !0), Gv = KC("WeakMap.prototype.get", !0), jv = KC("WeakMap.prototype.set", !0), dv = KC("WeakMap.prototype.has", !0), uv = KC("Map.prototype.get", !0), xv = KC("Map.prototype.set", !0), mv = KC("Map.prototype.has", !0), DM = function(C, A) {
  for (var w = C, M; (M = w.next) !== null; w = M)
    if (M.key === A)
      return w.next = M.next, M.next = /** @type {NonNullable<typeof list.next>} */
      C.next, C.next = M, M;
}, sv = function(C, A) {
  var w = DM(C, A);
  return w && w.value;
}, yv = function(C, A, w) {
  var M = DM(C, A);
  M ? M.value = w : C.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: A,
    next: C.next,
    value: w
  };
}, Qv = function(C, A) {
  return !!DM(C, A);
}, pv = function() {
  var A, w, M, g = {
    assert: function(I) {
      if (!g.has(I))
        throw new Bv("Side channel does not contain " + Tv(I));
    },
    get: function(I) {
      if (QC && I && (typeof I == "object" || typeof I == "function")) {
        if (A)
          return Gv(A, I);
      } else if (pC) {
        if (w)
          return uv(w, I);
      } else if (M)
        return sv(M, I);
    },
    has: function(I) {
      if (QC && I && (typeof I == "object" || typeof I == "function")) {
        if (A)
          return dv(A, I);
      } else if (pC) {
        if (w)
          return mv(w, I);
      } else if (M)
        return Qv(M, I);
      return !1;
    },
    set: function(I, D) {
      QC && I && (typeof I == "object" || typeof I == "function") ? (A || (A = new QC()), jv(A, I, D)) : pC ? (w || (w = new pC()), xv(w, I, D)) : (M || (M = { key: {}, next: null }), yv(M, I, D));
    }
  };
  return g;
}, Ev = String.prototype.replace, Vv = /%20/g, aw = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, vM = {
  default: aw.RFC3986,
  formatters: {
    RFC1738: function(C) {
      return Ev.call(C, Vv, "+");
    },
    RFC3986: function(C) {
      return String(C);
    }
  },
  RFC1738: aw.RFC1738,
  RFC3986: aw.RFC3986
}, Hv = vM, bw = Object.prototype.hasOwnProperty, XA = Array.isArray, NA = function() {
  for (var C = [], A = 0; A < 256; ++A)
    C.push("%" + ((A < 16 ? "0" : "") + A.toString(16)).toUpperCase());
  return C;
}(), Sv = function(A) {
  for (; A.length > 1; ) {
    var w = A.pop(), M = w.obj[w.prop];
    if (XA(M)) {
      for (var g = [], I = 0; I < M.length; ++I)
        typeof M[I] < "u" && g.push(M[I]);
      w.obj[w.prop] = g;
    }
  }
}, ug = function(A, w) {
  for (var M = w && w.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, g = 0; g < A.length; ++g)
    typeof A[g] < "u" && (M[g] = A[g]);
  return M;
}, Xv = function C(A, w, M) {
  if (!w)
    return A;
  if (typeof w != "object") {
    if (XA(A))
      A.push(w);
    else if (A && typeof A == "object")
      (M && (M.plainObjects || M.allowPrototypes) || !bw.call(Object.prototype, w)) && (A[w] = !0);
    else
      return [A, w];
    return A;
  }
  if (!A || typeof A != "object")
    return [A].concat(w);
  var g = A;
  return XA(A) && !XA(w) && (g = ug(A, M)), XA(A) && XA(w) ? (w.forEach(function(I, D) {
    if (bw.call(A, D)) {
      var v = A[D];
      v && typeof v == "object" && I && typeof I == "object" ? A[D] = C(v, I, M) : A.push(I);
    } else
      A[D] = I;
  }), A) : Object.keys(w).reduce(function(I, D) {
    var v = w[D];
    return bw.call(I, D) ? I[D] = C(I[D], v, M) : I[D] = v, I;
  }, g);
}, Wv = function(A, w) {
  return Object.keys(w).reduce(function(M, g) {
    return M[g] = w[g], M;
  }, A);
}, hv = function(C, A, w) {
  var M = C.replace(/\+/g, " ");
  if (w === "iso-8859-1")
    return M.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(M);
  } catch {
    return M;
  }
}, kv = function(A, w, M, g, I) {
  if (A.length === 0)
    return A;
  var D = A;
  if (typeof A == "symbol" ? D = Symbol.prototype.toString.call(A) : typeof A != "string" && (D = String(A)), M === "iso-8859-1")
    return escape(D).replace(/%u[0-9a-f]{4}/gi, function(c) {
      return "%26%23" + parseInt(c.slice(2), 16) + "%3B";
    });
  for (var v = "", o = 0; o < D.length; ++o) {
    var n = D.charCodeAt(o);
    if (n === 45 || n === 46 || n === 95 || n === 126 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122 || I === Hv.RFC1738 && (n === 40 || n === 41)) {
      v += D.charAt(o);
      continue;
    }
    if (n < 128) {
      v = v + NA[n];
      continue;
    }
    if (n < 2048) {
      v = v + (NA[192 | n >> 6] + NA[128 | n & 63]);
      continue;
    }
    if (n < 55296 || n >= 57344) {
      v = v + (NA[224 | n >> 12] + NA[128 | n >> 6 & 63] + NA[128 | n & 63]);
      continue;
    }
    o += 1, n = 65536 + ((n & 1023) << 10 | D.charCodeAt(o) & 1023), v += NA[240 | n >> 18] + NA[128 | n >> 12 & 63] + NA[128 | n >> 6 & 63] + NA[128 | n & 63];
  }
  return v;
}, Yv = function(A) {
  for (var w = [{ obj: { o: A }, prop: "o" }], M = [], g = 0; g < w.length; ++g)
    for (var I = w[g], D = I.obj[I.prop], v = Object.keys(D), o = 0; o < v.length; ++o) {
      var n = v[o], c = D[n];
      typeof c == "object" && c !== null && M.indexOf(c) === -1 && (w.push({ obj: D, prop: n }), M.push(c));
    }
  return Sv(w), A;
}, Jv = function(A) {
  return Object.prototype.toString.call(A) === "[object RegExp]";
}, Ov = function(A) {
  return !A || typeof A != "object" ? !1 : !!(A.constructor && A.constructor.isBuffer && A.constructor.isBuffer(A));
}, qv = function(A, w) {
  return [].concat(A, w);
}, _v = function(A, w) {
  if (XA(A)) {
    for (var M = [], g = 0; g < A.length; g += 1)
      M.push(w(A[g]));
    return M;
  }
  return w(A);
}, xg = {
  arrayToObject: ug,
  assign: Wv,
  combine: qv,
  compact: Yv,
  decode: hv,
  encode: kv,
  isBuffer: Ov,
  isRegExp: Jv,
  maybeMap: _v,
  merge: Xv
}, mg = pv, kC = xg, bC = vM, $v = Object.prototype.hasOwnProperty, sg = {
  brackets: function(A) {
    return A + "[]";
  },
  comma: "comma",
  indices: function(A, w) {
    return A + "[" + w + "]";
  },
  repeat: function(A) {
    return A;
  }
}, rA = Array.isArray, Ao = Array.prototype.push, yg = function(C, A) {
  Ao.apply(C, rA(A) ? A : [A]);
}, Co = Date.prototype.toISOString, kM = bC.default, oA = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: kC.encode,
  encodeValuesOnly: !1,
  format: kM,
  formatter: bC.formatters[kM],
  // deprecated
  indices: !1,
  serializeDate: function(A) {
    return Co.call(A);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, wo = function(A) {
  return typeof A == "string" || typeof A == "number" || typeof A == "boolean" || typeof A == "symbol" || typeof A == "bigint";
}, Nw = {}, Mo = function C(A, w, M, g, I, D, v, o, n, c, t, Z, U, P, R, T, a, d) {
  for (var B = A, G = d, u = 0, e = !1; (G = G.get(Nw)) !== void 0 && !e; ) {
    var K = G.get(A);
    if (u += 1, typeof K < "u") {
      if (K === u)
        throw new RangeError("Cyclic object value");
      e = !0;
    }
    typeof G.get(Nw) > "u" && (u = 0);
  }
  if (typeof c == "function" ? B = c(w, B) : B instanceof Date ? B = U(B) : M === "comma" && rA(B) && (B = kC.maybeMap(B, function(h) {
    return h instanceof Date ? U(h) : h;
  })), B === null) {
    if (D)
      return n && !T ? n(w, oA.encoder, a, "key", P) : w;
    B = "";
  }
  if (wo(B) || kC.isBuffer(B)) {
    if (n) {
      var f = T ? w : n(w, oA.encoder, a, "key", P);
      return [R(f) + "=" + R(n(B, oA.encoder, a, "value", P))];
    }
    return [R(w) + "=" + R(String(B))];
  }
  var F = [];
  if (typeof B > "u")
    return F;
  var N;
  if (M === "comma" && rA(B))
    T && n && (B = kC.maybeMap(B, n)), N = [{ value: B.length > 0 ? B.join(",") || null : void 0 }];
  else if (rA(c))
    N = c;
  else {
    var x = Object.keys(B);
    N = t ? x.sort(t) : x;
  }
  var m = o ? w.replace(/\./g, "%2E") : w, p = g && rA(B) && B.length === 1 ? m + "[]" : m;
  if (I && rA(B) && B.length === 0)
    return p + "[]";
  for (var E = 0; E < N.length; ++E) {
    var r = N[E], j = typeof r == "object" && typeof r.value < "u" ? r.value : B[r];
    if (!(v && j === null)) {
      var S = Z && o ? r.replace(/\./g, "%2E") : r, X = rA(B) ? typeof M == "function" ? M(p, S) : p : p + (Z ? "." + S : "[" + S + "]");
      d.set(A, u);
      var q = mg();
      q.set(Nw, d), yg(F, C(
        j,
        X,
        M,
        g,
        I,
        D,
        v,
        o,
        M === "comma" && T && rA(B) ? null : n,
        c,
        t,
        Z,
        U,
        P,
        R,
        T,
        a,
        q
      ));
    }
  }
  return F;
}, go = function(A) {
  if (!A)
    return oA;
  if (typeof A.allowEmptyArrays < "u" && typeof A.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof A.encodeDotInKeys < "u" && typeof A.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (A.encoder !== null && typeof A.encoder < "u" && typeof A.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var w = A.charset || oA.charset;
  if (typeof A.charset < "u" && A.charset !== "utf-8" && A.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var M = bC.default;
  if (typeof A.format < "u") {
    if (!$v.call(bC.formatters, A.format))
      throw new TypeError("Unknown format option provided.");
    M = A.format;
  }
  var g = bC.formatters[M], I = oA.filter;
  (typeof A.filter == "function" || rA(A.filter)) && (I = A.filter);
  var D;
  if (A.arrayFormat in sg ? D = A.arrayFormat : "indices" in A ? D = A.indices ? "indices" : "repeat" : D = oA.arrayFormat, "commaRoundTrip" in A && typeof A.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var v = typeof A.allowDots > "u" ? A.encodeDotInKeys === !0 ? !0 : oA.allowDots : !!A.allowDots;
  return {
    addQueryPrefix: typeof A.addQueryPrefix == "boolean" ? A.addQueryPrefix : oA.addQueryPrefix,
    allowDots: v,
    allowEmptyArrays: typeof A.allowEmptyArrays == "boolean" ? !!A.allowEmptyArrays : oA.allowEmptyArrays,
    arrayFormat: D,
    charset: w,
    charsetSentinel: typeof A.charsetSentinel == "boolean" ? A.charsetSentinel : oA.charsetSentinel,
    commaRoundTrip: A.commaRoundTrip,
    delimiter: typeof A.delimiter > "u" ? oA.delimiter : A.delimiter,
    encode: typeof A.encode == "boolean" ? A.encode : oA.encode,
    encodeDotInKeys: typeof A.encodeDotInKeys == "boolean" ? A.encodeDotInKeys : oA.encodeDotInKeys,
    encoder: typeof A.encoder == "function" ? A.encoder : oA.encoder,
    encodeValuesOnly: typeof A.encodeValuesOnly == "boolean" ? A.encodeValuesOnly : oA.encodeValuesOnly,
    filter: I,
    format: M,
    formatter: g,
    serializeDate: typeof A.serializeDate == "function" ? A.serializeDate : oA.serializeDate,
    skipNulls: typeof A.skipNulls == "boolean" ? A.skipNulls : oA.skipNulls,
    sort: typeof A.sort == "function" ? A.sort : null,
    strictNullHandling: typeof A.strictNullHandling == "boolean" ? A.strictNullHandling : oA.strictNullHandling
  };
}, Io = function(C, A) {
  var w = C, M = go(A), g, I;
  typeof M.filter == "function" ? (I = M.filter, w = I("", w)) : rA(M.filter) && (I = M.filter, g = I);
  var D = [];
  if (typeof w != "object" || w === null)
    return "";
  var v = sg[M.arrayFormat], o = v === "comma" && M.commaRoundTrip;
  g || (g = Object.keys(w)), M.sort && g.sort(M.sort);
  for (var n = mg(), c = 0; c < g.length; ++c) {
    var t = g[c];
    M.skipNulls && w[t] === null || yg(D, Mo(
      w[t],
      t,
      v,
      o,
      M.allowEmptyArrays,
      M.strictNullHandling,
      M.skipNulls,
      M.encodeDotInKeys,
      M.encode ? M.encoder : null,
      M.filter,
      M.sort,
      M.allowDots,
      M.serializeDate,
      M.format,
      M.formatter,
      M.encodeValuesOnly,
      M.charset,
      n
    ));
  }
  var Z = D.join(M.delimiter), U = M.addQueryPrefix === !0 ? "?" : "";
  return M.charsetSentinel && (M.charset === "iso-8859-1" ? U += "utf8=%26%2310003%3B&" : U += "utf8=%E2%9C%93&"), Z.length > 0 ? U + Z : "";
}, LC = xg, pw = Object.prototype.hasOwnProperty, Do = Array.isArray, IA = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !0,
  decoder: LC.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, vo = function(C) {
  return C.replace(/&#(\d+);/g, function(A, w) {
    return String.fromCharCode(parseInt(w, 10));
  });
}, Qg = function(C, A) {
  return C && typeof C == "string" && A.comma && C.indexOf(",") > -1 ? C.split(",") : C;
}, oo = "utf8=%26%2310003%3B", no = "utf8=%E2%9C%93", io = function(A, w) {
  var M = { __proto__: null }, g = w.ignoreQueryPrefix ? A.replace(/^\?/, "") : A, I = w.parameterLimit === 1 / 0 ? void 0 : w.parameterLimit, D = g.split(w.delimiter, I), v = -1, o, n = w.charset;
  if (w.charsetSentinel)
    for (o = 0; o < D.length; ++o)
      D[o].indexOf("utf8=") === 0 && (D[o] === no ? n = "utf-8" : D[o] === oo && (n = "iso-8859-1"), v = o, o = D.length);
  for (o = 0; o < D.length; ++o)
    if (o !== v) {
      var c = D[o], t = c.indexOf("]="), Z = t === -1 ? c.indexOf("=") : t + 1, U, P;
      Z === -1 ? (U = w.decoder(c, IA.decoder, n, "key"), P = w.strictNullHandling ? null : "") : (U = w.decoder(c.slice(0, Z), IA.decoder, n, "key"), P = LC.maybeMap(
        Qg(c.slice(Z + 1), w),
        function(T) {
          return w.decoder(T, IA.decoder, n, "value");
        }
      )), P && w.interpretNumericEntities && n === "iso-8859-1" && (P = vo(P)), c.indexOf("[]=") > -1 && (P = Do(P) ? [P] : P);
      var R = pw.call(M, U);
      R && w.duplicates === "combine" ? M[U] = LC.combine(M[U], P) : (!R || w.duplicates === "last") && (M[U] = P);
    }
  return M;
}, co = function(C, A, w, M) {
  for (var g = M ? A : Qg(A, w), I = C.length - 1; I >= 0; --I) {
    var D, v = C[I];
    if (v === "[]" && w.parseArrays)
      D = w.allowEmptyArrays && g === "" ? [] : [].concat(g);
    else {
      D = w.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var o = v.charAt(0) === "[" && v.charAt(v.length - 1) === "]" ? v.slice(1, -1) : v, n = w.decodeDotInKeys ? o.replace(/%2E/g, ".") : o, c = parseInt(n, 10);
      !w.parseArrays && n === "" ? D = { 0: g } : !isNaN(c) && v !== n && String(c) === n && c >= 0 && w.parseArrays && c <= w.arrayLimit ? (D = [], D[c] = g) : n !== "__proto__" && (D[n] = g);
    }
    g = D;
  }
  return g;
}, Zo = function(A, w, M, g) {
  if (A) {
    var I = M.allowDots ? A.replace(/\.([^.[]+)/g, "[$1]") : A, D = /(\[[^[\]]*])/, v = /(\[[^[\]]*])/g, o = M.depth > 0 && D.exec(I), n = o ? I.slice(0, o.index) : I, c = [];
    if (n) {
      if (!M.plainObjects && pw.call(Object.prototype, n) && !M.allowPrototypes)
        return;
      c.push(n);
    }
    for (var t = 0; M.depth > 0 && (o = v.exec(I)) !== null && t < M.depth; ) {
      if (t += 1, !M.plainObjects && pw.call(Object.prototype, o[1].slice(1, -1)) && !M.allowPrototypes)
        return;
      c.push(o[1]);
    }
    return o && c.push("[" + I.slice(o.index) + "]"), co(c, w, M, g);
  }
}, Uo = function(A) {
  if (!A)
    return IA;
  if (typeof A.allowEmptyArrays < "u" && typeof A.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof A.decodeDotInKeys < "u" && typeof A.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (A.decoder !== null && typeof A.decoder < "u" && typeof A.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof A.charset < "u" && A.charset !== "utf-8" && A.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var w = typeof A.charset > "u" ? IA.charset : A.charset, M = typeof A.duplicates > "u" ? IA.duplicates : A.duplicates;
  if (M !== "combine" && M !== "first" && M !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var g = typeof A.allowDots > "u" ? A.decodeDotInKeys === !0 ? !0 : IA.allowDots : !!A.allowDots;
  return {
    allowDots: g,
    allowEmptyArrays: typeof A.allowEmptyArrays == "boolean" ? !!A.allowEmptyArrays : IA.allowEmptyArrays,
    allowPrototypes: typeof A.allowPrototypes == "boolean" ? A.allowPrototypes : IA.allowPrototypes,
    allowSparse: typeof A.allowSparse == "boolean" ? A.allowSparse : IA.allowSparse,
    arrayLimit: typeof A.arrayLimit == "number" ? A.arrayLimit : IA.arrayLimit,
    charset: w,
    charsetSentinel: typeof A.charsetSentinel == "boolean" ? A.charsetSentinel : IA.charsetSentinel,
    comma: typeof A.comma == "boolean" ? A.comma : IA.comma,
    decodeDotInKeys: typeof A.decodeDotInKeys == "boolean" ? A.decodeDotInKeys : IA.decodeDotInKeys,
    decoder: typeof A.decoder == "function" ? A.decoder : IA.decoder,
    delimiter: typeof A.delimiter == "string" || LC.isRegExp(A.delimiter) ? A.delimiter : IA.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof A.depth == "number" || A.depth === !1 ? +A.depth : IA.depth,
    duplicates: M,
    ignoreQueryPrefix: A.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof A.interpretNumericEntities == "boolean" ? A.interpretNumericEntities : IA.interpretNumericEntities,
    parameterLimit: typeof A.parameterLimit == "number" ? A.parameterLimit : IA.parameterLimit,
    parseArrays: A.parseArrays !== !1,
    plainObjects: typeof A.plainObjects == "boolean" ? A.plainObjects : IA.plainObjects,
    strictNullHandling: typeof A.strictNullHandling == "boolean" ? A.strictNullHandling : IA.strictNullHandling
  };
}, to = function(C, A) {
  var w = Uo(A);
  if (C === "" || C === null || typeof C > "u")
    return w.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var M = typeof C == "string" ? io(C, w) : C, g = w.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, I = Object.keys(M), D = 0; D < I.length; ++D) {
    var v = I[D], o = Zo(v, M[v], w, typeof C == "string");
    g = LC.merge(g, o, w);
  }
  return w.allowSparse === !0 ? g : LC.compact(g);
}, eo = Io, lo = to, Lo = vM, Ko = {
  formats: Lo,
  parse: lo,
  stringify: eo
};
const zo = /* @__PURE__ */ Yw(Ko), oM = [
  {
    name: "徒手格斗",
    skill: "格斗(斗殴)",
    dam: "1D3+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "弓箭",
    skill: "射击(弓弩)",
    dam: "1D6+半DB",
    tho: 0,
    range: "30",
    round: "1",
    num: "1",
    price: "7/75",
    err: "97",
    time: "1920s，现代"
  },
  {
    name: "黄铜指虎",
    skill: "格斗(斗殴)",
    dam: "1D3+1+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "1/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "长鞭",
    skill: "格斗(鞭)",
    dam: "1D3+半DB",
    tho: 0,
    range: "3",
    round: "1",
    num: "",
    price: "5/50",
    err: "97",
    time: "1920s"
  },
  {
    name: "燃烧的火把",
    skill: "格斗(斗殴)",
    dam: "1D6+燃烧",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "0.05/0.5",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "链锯",
    skill: "格斗(链锯)",
    dam: "2D8",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "-/300",
    err: "95",
    time: "现代"
  },
  {
    name: "包革金属棒(大头棍、护身棒)",
    skill: "格斗(斗殴)",
    dam: "1D8+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "2/15",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "大棒(棒球棒、拨火棍)",
    skill: "格斗(斗殴)",
    dam: "1D8+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "3/35",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "小型棍棒(警棍)",
    skill: "格斗(斗殴)",
    dam: "1D6+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "3/35",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "弩",
    skill: "射击(弓弩)",
    dam: "1D8+2",
    tho: 1,
    range: "50",
    round: "1/2",
    num: "1",
    price: "10/100",
    err: "96",
    time: "1920s，现代"
  },
  {
    name: "绞索",
    skill: "格斗(绞索)",
    dam: "1D6+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "0.5/3",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "手斧/手镰",
    skill: "格斗(斧)",
    dam: "1D6+1+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "3/9",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "大型刀(甘蔗刀等)",
    skill: "格斗(斗殴)",
    dam: "1D8+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "4/50",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "中型刀(切肉餐刀等)",
    skill: "格斗(斗殴)",
    dam: "1D4+2+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "2/15",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "小型刀(弹簧折叠刀等)",
    skill: "格斗(斗殴)",
    dam: "1D4+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "2/6",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "220V通电导线",
    skill: "格斗(斗殴)",
    dam: "2D8+晕",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "",
    err: "95",
    time: "现代"
  },
  {
    name: "催泪喷雾",
    skill: "格斗(斗殴)",
    dam: "晕",
    tho: 0,
    range: "2",
    round: "1",
    num: "25",
    price: "-/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "双节棍",
    skill: "格斗(链枷)",
    dam: "1D8+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "1/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "投石",
    skill: "投掷",
    dam: "1D4+半DB",
    tho: 0,
    range: "STR/5m",
    round: "1",
    num: "",
    price: "",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "手里剑",
    skill: "投掷",
    dam: "1D3+半DB",
    tho: 1,
    range: "STR/5m",
    round: "2",
    num: "1",
    price: "0.5/3",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "矛、骑士长枪",
    skill: "格斗(矛)",
    dam: "1D8+1",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "25/150",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "投矛",
    skill: "投掷",
    dam: "1D8+半DB",
    tho: 1,
    range: "STR/5m",
    round: "1",
    num: "",
    price: "42760",
    err: "",
    time: "稀有"
  },
  {
    name: "大型剑(马刀)",
    skill: "格斗(刀剑)",
    dam: "1D8+1+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "30/75",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "中型剑(佩剑、重剑)",
    skill: "格斗(刀剑)",
    dam: "1D6+1+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "15/100",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "轻型剑(花剑、剑杖)",
    skill: "格斗(刀剑)",
    dam: "1D6+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "25/100",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "电棍",
    skill: "格斗(斗殴)",
    dam: "1D3+晕",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "-/200",
    err: "97",
    time: "现代"
  },
  {
    name: "电击枪",
    skill: "射击(手枪)",
    dam: "1D3+晕",
    tho: 0,
    range: "5",
    round: "1",
    num: "3",
    price: "-/400",
    err: "95",
    time: "现代"
  },
  {
    name: "战斗回力镖",
    skill: "投掷",
    dam: "1D8+半DB",
    tho: 0,
    range: "STR/5m",
    round: "1",
    num: "",
    price: "2/4",
    err: "",
    time: "稀有"
  },
  {
    name: "伐木斧",
    skill: "格斗(斧)",
    dam: "1D8+2+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "5/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "燧发手枪",
    skill: "射击(手枪)",
    dam: "1D6+1",
    tho: 1,
    range: "10",
    round: "1/4",
    num: "1",
    price: "30/300",
    err: "95",
    time: "稀有"
  },
  {
    name: ".22(5.6mm)小型自动手枪",
    skill: "射击(手枪)",
    dam: "1D6",
    tho: 1,
    range: "10",
    round: "1(3)",
    num: "6",
    price: "25/190",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".25(6.35mm)短口手枪(单管)",
    skill: "射击(手枪)",
    dam: "1D6",
    tho: 1,
    range: "3",
    round: "1",
    num: "1",
    price: "12/55",
    err: "100",
    time: "1920s"
  },
  {
    name: ".32(7.65mm)左轮",
    skill: "射击(手枪)",
    dam: "1D8",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "15/200",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".32(7.65mm)自动手枪",
    skill: "射击(手枪)",
    dam: "1D8",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "20/350",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: ".357马格南左轮",
    skill: "射击(手枪)",
    dam: "1D8+1D4",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "425",
    err: "100",
    time: "现代"
  },
  {
    name: ".38(9mm)左轮",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "25/200",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".38(9mm)自动手枪",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "30/375",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "贝瑞塔M9",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "15",
    price: "-/500",
    err: "98",
    time: "现代"
  },
  {
    name: "9mm格洛克17",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "17",
    price: "-/500",
    err: "98",
    time: "现代"
  },
  {
    name: "9mm鲁格P08",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "75/600",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: ".41(10.4mm)左轮",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "30/-",
    err: "100",
    time: "1920s稀有"
  },
  {
    name: ".44(11.2mm)马格南左轮",
    skill: "射击(手枪)",
    dam: "1D10+1D4+2",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "-/475",
    err: "100",
    time: "现代"
  },
  {
    name: ".45(11.43mm)左轮",
    skill: "射击(手枪)",
    dam: "1D10+2",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "30/300",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".45(11.43mm)自动手枪",
    skill: "射击(手枪)",
    dam: "1D10+2",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "7",
    price: "40/375",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "IMI 沙漠之鹰",
    skill: "射击(手枪)",
    dam: "1D10+1D6+3",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "7",
    price: "-/650",
    err: "94",
    time: "现代"
  },
  {
    name: ".58 (14.7mm)1855年式春田步枪",
    skill: "射击(步/霰)",
    dam: "1D10+4",
    tho: 1,
    range: "60",
    round: "1/4",
    num: "1",
    price: "25/350",
    err: "95",
    time: "稀有"
  },
  {
    name: ".22 (5.6mm)栓式枪机步枪",
    skill: "射击(步/霰)",
    dam: "1D6+1",
    tho: 1,
    range: "30",
    round: "1",
    num: "6",
    price: "13/70",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: ".30 (7.62mm)杠杆式枪机步枪",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "50",
    round: "1",
    num: "6",
    price: "19/150",
    err: "98",
    time: "1920s，现代"
  },
  {
    name: ".45 (11.43mm)马蒂尼-亨利步枪",
    skill: "射击(步/霰)",
    dam: "1D8+1D6+3",
    tho: 1,
    range: "80",
    round: "1/3",
    num: "1",
    price: "20/200",
    err: "100",
    time: "1920s"
  },
  {
    name: "莫兰上校的气动步枪③",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "20",
    round: "1/3",
    num: "1",
    price: "200/-",
    err: "88",
    time: "1920s"
  },
  {
    name: "加兰德M1、M2步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "8",
    price: "-/400",
    err: "100",
    time: "二战及以后"
  },
  {
    name: "SKS半自动步枪(56半)",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "90",
    round: "1(2)",
    num: "10",
    price: "-/500",
    err: "97",
    time: "现代"
  },
  {
    name: ".303(7.7mm)李-恩菲尔德",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "50/300",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".30-06(7.62mm)手动枪机步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "75/175",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".30-06(7.62mm)半自动步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "-/275",
    err: "100",
    time: "现代"
  },
  {
    name: ".444(11.28mm)马林步枪",
    skill: "射击(步/霰)",
    dam: "2D8+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "-/400",
    err: "98",
    time: "现代"
  },
  {
    name: "猎象枪(双管)",
    skill: "射击(步/霰)",
    dam: "3D6+4",
    tho: 1,
    range: "100",
    round: "1或2",
    num: "2",
    price: "400/1000",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "AK-47或AKM",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "100",
    round: "1(2)或全自动",
    num: "30",
    price: "200",
    err: "100",
    time: "现代"
  },
  {
    name: "AK-74",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "110",
    round: "1(2)或全自动",
    num: "30",
    price: "1000",
    err: "97",
    time: "现代"
  },
  {
    name: "M1918式勃朗宁自动步枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "90",
    round: "1(2)或全自动",
    num: "20",
    price: "800/1500",
    err: "100",
    time: "1920s"
  },
  {
    name: "FN FAL 突击步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1-3发点射",
    num: "20",
    price: "1500",
    err: "97",
    time: "现代"
  },
  {
    name: "加利尔突击步枪",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1(2)或全自动",
    num: "20",
    price: "2000",
    err: "98",
    time: "现代"
  },
  {
    name: "M16A2",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1-3发点射",
    num: "30",
    price: "",
    err: "97",
    time: "现代"
  },
  {
    name: "M4",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "90",
    round: "1或3发点射",
    num: "30",
    price: "",
    err: "97",
    time: "现代"
  },
  {
    name: "斯泰尔AUG",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1(2)或全自动",
    num: "30",
    price: "1100",
    err: "99",
    time: "现代"
  },
  {
    name: "贝雷塔AR70/90",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1或全自动",
    num: "30",
    price: "2800",
    err: "99",
    time: "现代"
  },
  {
    name: "20号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "2D6/1D6/1D3",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "35/稀",
    err: "100",
    time: "1920s"
  },
  {
    name: "16号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "2D6+2/1D6+1/1D4",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "40/稀",
    err: "100",
    time: "1920s"
  },
  {
    name: "12号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "40/200",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "12号霰弹枪(手压式)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1",
    num: "5",
    price: "45/100",
    err: "100",
    time: "现代"
  },
  {
    name: "12号霰弹枪(半自动)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1(2)",
    num: "5",
    price: "45/100",
    err: "100",
    time: "现代"
  },
  {
    name: "12号霰弹枪(双管,锯短)",
    skill: "射击(步/霰)",
    dam: "4D6/1D6",
    tho: 0,
    range: "5/10",
    round: "1或2",
    num: "2",
    price: "",
    err: "100",
    time: "1920s"
  },
  {
    name: "10号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "4D6+2/2D6+1/1D4",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "稀",
    err: "100",
    time: "1920s稀有"
  },
  {
    name: "12号贝里尼M3(折叠式枪托)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1(2)",
    num: "7",
    price: "-/895",
    err: "100",
    time: "现代"
  },
  {
    name: "12号SPAS (折叠式枪托)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1",
    num: "8",
    price: "-/600",
    err: "98",
    time: "现代"
  },
  {
    name: "MP18I/M现代28II",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "20",
    round: "1(2)或全自动",
    num: "20/30/32",
    price: "1000/20000",
    err: "96",
    time: "1920s"
  },
  {
    name: "MP5",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "20",
    round: "1(2)或全自动",
    num: "15/30",
    price: "",
    err: "97",
    time: "现代"
  },
  {
    name: "MAC-11",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)或全自动",
    num: "32",
    price: "-/750",
    err: "96",
    time: "现代"
  },
  {
    name: "蝎式",
    skill: "射击(冲锋枪)",
    dam: "1D8",
    tho: 1,
    range: "15",
    round: "1(3)或全自动",
    num: "20",
    price: "",
    err: "96",
    time: "现代"
  },
  {
    name: "汤普森",
    skill: "射击(冲锋枪)",
    dam: "1D10+2",
    tho: 1,
    range: "20",
    round: "1或全自动",
    num: "20/30/50",
    price: "200+/1600",
    err: "96",
    time: "1920s"
  },
  {
    name: "乌兹",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "20",
    round: "1(2)或全自动",
    num: "32",
    price: "-/1000",
    err: "98",
    time: "现代"
  },
  {
    name: "巴雷特M82",
    skill: "射击(步/霰)",
    dam: "2D10+1D8+6",
    tho: 1,
    range: "250",
    round: "1",
    num: "11",
    price: "3000",
    err: "96",
    time: "现代"
  },
  {
    name: "PTRD-41反坦克步枪",
    skill: "射击(步/霰)",
    dam: "2D10+1D10+8",
    tho: 1,
    range: "230",
    round: "1",
    num: "5",
    price: "1500",
    err: "94",
    time: "现代"
  },
  {
    name: "1882年式加特林",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "100",
    round: "全自动",
    num: "200",
    price: "2000/14000",
    err: "96",
    time: "1920s稀有"
  },
  {
    name: "勃朗宁M1917A1(7.62mm)",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "150",
    round: "全自动",
    num: "250",
    price: "3000/3万",
    err: "96",
    time: "1920s"
  },
  {
    name: "布伦轻机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1或全自动",
    num: "30/100",
    price: "3000/5万",
    err: "96",
    time: "1920s"
  },
  {
    name: "路易斯Ⅰ型机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "全自动",
    num: "27/97",
    price: "3000/2万",
    err: "96",
    time: "1920s"
  },
  {
    name: "GE M134式7.62mm速射机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "200",
    round: "全自动",
    num: "4000",
    price: "",
    err: "98",
    time: "现代"
  },
  {
    name: "FN 米尼米，弹夹/弹带",
    skill: "射击(机枪)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "全自动",
    num: "30/200",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "维克斯.303机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "全自动",
    num: "250",
    price: "",
    err: "99",
    time: "1920s"
  },
  {
    name: "莫洛托夫鸡尾酒",
    skill: "投掷",
    dam: "2D6 烧",
    tho: 1,
    range: "STRft",
    round: "1/2",
    num: "一次性",
    price: "",
    err: "95",
    time: "1920s，现代"
  },
  {
    name: "信号枪(信号弹枪)",
    skill: "射击(手枪)",
    dam: "1D10+1D3 烧",
    tho: 1,
    range: "10",
    round: "1/2",
    num: "1",
    price: "15/75",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "M79式40mm榴弹发射器",
    skill: "射击(重武器)",
    dam: "3D10/2码",
    tho: 1,
    range: "20",
    round: "1/3",
    num: "1",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "炸药棒",
    skill: "投掷",
    dam: "4D10/3码",
    tho: 1,
    range: "STRft",
    round: "1/2",
    num: "一次性",
    price: "2/5",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "雷管",
    skill: "电气维修",
    dam: "2D10/1码",
    tho: 1,
    range: "",
    round: "",
    num: "一次性",
    price: "20/整盒",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "爆破筒",
    skill: "爆破",
    dam: "1D10/3码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "　",
    err: "95",
    time: "1920s，现代"
  },
  {
    name: "塑胶炸弹(C-4)，4盎司",
    skill: "爆破",
    dam: "6D10/3码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "手榴弹",
    skill: "投掷",
    dam: "4D10/3码",
    tho: 1,
    range: "STRft",
    round: "1/2",
    num: "一次性",
    price: "",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "81mm迫击炮",
    skill: "炮术",
    dam: "6D10/6码",
    tho: 1,
    range: "500",
    round: "1",
    num: "独立装弹",
    price: "",
    err: "100",
    time: "现代"
  },
  {
    name: "75mm野战火炮",
    skill: "炮术",
    dam: "10D10/2码",
    tho: 1,
    range: "500",
    round: "1/4",
    num: "独立装弹",
    price: "1500/-",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "120mm坦克主炮",
    skill: "炮术",
    dam: "10D10/2码",
    tho: 1,
    range: "2000",
    round: "1",
    num: "独立装弹",
    price: "",
    err: "100",
    time: "现代"
  },
  {
    name: "5英寸(127mm)舰炮",
    skill: "炮术",
    dam: "15D10/4码",
    tho: 1,
    range: "3000",
    round: "1",
    num: "自动上弹",
    price: "",
    err: "98",
    time: "1920s，现代"
  },
  {
    name: "反步兵地雷",
    skill: "爆破",
    dam: "4D10/5码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "阔剑地雷",
    skill: "爆破",
    dam: "6D6/20码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "火焰喷射器",
    skill: "射击(喷射器)",
    dam: "2D6+烧",
    tho: 1,
    range: "25",
    round: "1",
    num: "至少10",
    price: "",
    err: "93",
    time: "1920s，现代"
  },
  {
    name: "M72式单发轻型反坦克炮",
    skill: "射击(重武器)",
    dam: "8D10/1码",
    tho: 1,
    range: "150",
    round: "1",
    num: "1",
    price: "",
    err: "98",
    time: "现代"
  }
], pg = {
  // 常规
  cg: [
    "徒手格斗",
    "弓箭",
    "黄铜指虎",
    "长鞭",
    "燃烧的火把",
    "链锯",
    "包革金属棒(大头棍、护身棒)",
    "大棒(棒球棒、拨火棍)",
    "小型棍棒(警棍)",
    "弩",
    "绞索",
    "手斧/手镰",
    "大型刀(甘蔗刀等)",
    "中型刀(切肉餐刀等)",
    "小型刀(弹簧折叠刀等)",
    "220V通电导线",
    "催泪喷雾",
    "双节棍",
    "投石",
    "手里剑",
    "矛、骑士长枪",
    "投矛",
    "大型剑(马刀)",
    "中型剑(佩剑、重剑)",
    "轻型剑(花剑、剑杖)",
    "电棍",
    "电击枪",
    "战斗回力镖",
    "伐木斧"
  ],
  // 手枪
  sq: [
    "燧发手枪",
    ".22(5.6mm)小型自动手枪",
    ".25(6.35mm)短口手枪(单管)",
    ".32(7.65mm)左轮",
    ".32(7.65mm)自动手枪",
    ".357马格南左轮",
    ".38(9mm)左轮",
    ".38(9mm)自动手枪",
    "贝瑞塔M9",
    "9mm格洛克17",
    "9mm鲁格P08",
    ".41(10.4mm)左轮",
    ".44(11.2mm)马格南左轮",
    ".45(11.43mm)左轮",
    ".45(11.43mm)自动手枪",
    "IMI 沙漠之鹰"
  ],
  // 半自动步枪
  bbq: [
    ".58 (14.7mm)1855年式春田步枪",
    ".22 (5.6mm)栓式枪机步枪",
    ".30 (7.62mm)杠杆式枪机步枪",
    ".45 (11.43mm)马蒂尼-亨利步枪",
    "莫兰上校的气动步枪③",
    "加兰德M1、M2步枪",
    "SKS半自动步枪(56半)",
    ".303(7.7mm)李-恩菲尔德",
    ".30-06(7.62mm)手动枪机步枪",
    ".30-06(7.62mm)半自动步枪",
    ".444(11.28mm)马林步枪",
    "猎象枪(双管)"
  ],
  // 全自动步枪
  tsq: [
    "AK-47或AKM",
    "AK-74",
    "FN FAL 突击步枪",
    "加利尔突击步枪",
    "M16A2",
    "M4",
    "斯泰尔AUG",
    "贝雷塔AR70/90"
  ],
  // 霰弹枪
  xdq: [
    "20号霰弹枪(双管)",
    "16号霰弹枪(双管)",
    "12号霰弹枪(双管)",
    "12号霰弹枪(手压式)",
    "12号霰弹枪(半自动)",
    "12号霰弹枪(双管,锯短)",
    "10号霰弹枪(双管)",
    "12号贝里尼M3(折叠式枪托)",
    "12号SPAS (折叠式枪托)"
  ],
  // 冲锋枪
  cfq: ["MP18I/M现代28II", "MP5", "MAC-11", "蝎式", "汤普森", "乌兹"],
  // 狙击步枪
  jjbq: ["巴雷特M82", "PTRD-41反坦克步枪"],
  // 机枪
  jq: [
    "1882年式加特林",
    "M1918式勃朗宁自动步枪",
    "勃朗宁M1917A1(7.62mm)",
    "布伦轻机枪",
    "路易斯Ⅰ型机枪",
    "GE M134式7.62mm速射机枪",
    "FN 米尼米，弹夹/弹带",
    "维克斯.303机枪"
  ],
  // 其它
  qt: [
    "莫洛托夫鸡尾酒",
    "信号枪(信号弹枪)",
    "M79式40mm榴弹发射器",
    "炸药棒",
    "雷管",
    "爆破筒",
    "塑胶炸弹(C-4)，4盎司",
    "手榴弹",
    "81mm迫击炮",
    "75mm野战火炮",
    "120mm坦克主炮",
    "5英寸(127mm)舰炮",
    "反步兵地雷",
    "阔剑地雷",
    "火焰喷射器",
    "M72式单发轻型反坦克炮"
  ]
}, Eg = [
  ["cg", "常规"],
  ["sq", "手枪"],
  ["bbq", "半自动步枪"],
  ["tsq", "全自动步枪"],
  ["xdq", "霰弹枪"],
  ["cfq", "冲锋枪"],
  ["jjbq", "狙击步枪"],
  ["jq", "机枪"],
  ["qt", "其它"]
];
function Ew(C) {
  return {
    name: "",
    skill: "",
    dam: "",
    tho: 0,
    range: "",
    round: "",
    num: "",
    err: "",
    ...C
  };
}
function YM(C) {
  return {
    name: "",
    playerName: "",
    time: "",
    job: "",
    age: "",
    gender: "",
    location: "",
    hometown: "",
    attributes: {},
    battleAttributes: {},
    pointValues: {
      pro: "",
      interest: ""
    },
    proSkills: [],
    skillPoints: [],
    weapons: [Ew(oM[0])],
    stories: {
      app: "",
      belief: "",
      IPerson: "",
      IPlace: "",
      IItem: "",
      trait: "",
      scar: "",
      mad: "",
      desc: ""
    },
    // assets
    assets: {
      cash: "",
      consumption: "",
      assets: "",
      items: "",
      magicItems: "",
      magics: "",
      touches: ""
    },
    experiencedModules: "",
    friends: "",
    ...C
  };
}
function Ro(C) {
  sA(
    () => C.value.attributes,
    () => {
      let A = "", w = "";
      const { con: M, siz: g, pow: I } = C.value.attributes || {};
      M && g && (A = `${Math.floor((M + g) / 10)}`), I && (w = `${I / 5}`), C.value.deriveAttributes = {
        sanity: {
          start: `${I || ""}`
        },
        hp: {
          start: A
        },
        mp: {
          start: w
        }
      };
    },
    { deep: !0 }
  );
}
const fo = [
  {
    name: "会计师",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: ["会计", "法律", "图书馆使用", "聆听", "说服", "侦查"]
  },
  {
    name: "杂技演员",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 20],
    skills: ["攀爬", "闪避", "投掷", "跳跃", "侦查", "游泳"]
  },
  {
    name: "戏剧演员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 40],
    skills: [
      { 技艺: "" },
      "乔装",
      { 格斗: "" },
      "历史",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "电影演员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [20, 90],
    skills: [
      { 技艺: "" },
      "乔装",
      "汽车驾驶",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "中介调查员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 45],
    skills: [
      { 格斗: "斗殴" },
      { 射击: "" },
      "法律",
      "图书馆使用",
      "心理学",
      "潜行",
      "追踪",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "精神病医生(古典)",
    point: [[["edu", 4]]],
    wealth: [10, 60],
    skills: [
      "法律",
      "聆听",
      "医学",
      { 外语: "" },
      "精神分析",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" }
    ]
  },
  {
    name: "动物训练师",
    point: [
      [["edu", 2]],
      [
        ["app", 2],
        ["pow", 2]
      ]
    ],
    wealth: [10, 40],
    skills: [
      "跳跃",
      "聆听",
      "博物学",
      "心理学",
      { 科学: "动物学" },
      "潜行",
      "追踪"
    ]
  },
  {
    name: "文物学家(原作向)",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: [
      "估价",
      { 技艺: "" },
      "历史",
      "图书馆使用",
      { 外语: "" },
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "古董商",
    point: [[["edu", 4]]],
    wealth: [30, 50],
    skills: [
      "会计",
      "估价",
      "汽车驾驶",
      "历史",
      "图书馆使用",
      "导航",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "考古学家(原作向)",
    point: [[["edu", 4]]],
    wealth: [10, 40],
    skills: [
      "估价",
      "考古学",
      "历史",
      { 外语: "" },
      "图书馆使用",
      "侦查",
      "机械维修",
      ["导航", { 科学: "" }]
    ]
  },
  {
    name: "建筑师",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: [
      "会计",
      { 技艺: "" },
      "法律",
      { 母语: "" },
      "说服",
      "心理学",
      { 科学: "数学" },
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "艺术家",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["pow", 2]
      ]
    ],
    wealth: [9, 50],
    skills: [
      { 技艺: "" },
      { 外语: "" },
      "心理学",
      "侦查",
      ["历史", "博物学"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "精神病院护工",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [8, 20],
    skills: [
      "闪避",
      { 格斗: "斗殴" },
      "急救",
      "聆听",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "运动员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 70],
    skills: [
      "攀爬",
      "跳跃",
      { 格斗: "斗殴" },
      "骑术",
      "游泳",
      "投掷",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "作家(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "文学" },
      "历史",
      { 外语: "" },
      { 母语: "" },
      "心理学",
      "图书馆使用",
      ["博物学", "神秘学"]
    ]
  },
  {
    name: "酒保",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [8, 25],
    skills: [
      "会计",
      { 格斗: "斗殴" },
      "聆听",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "猎人",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 50],
    skills: [
      { 射击: "" },
      "博物学",
      "导航",
      { 科学: "动物学" },
      "潜行",
      "追踪",
      ["聆听", "侦查"],
      [{ 外语: "" }, { 生存: "" }]
    ]
  },
  {
    name: "书商",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "会计",
      "估价",
      "汽车驾驶",
      "历史",
      "图书馆使用",
      { 母语: "" },
      { 外语: "" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "赏金猎人",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "汽车驾驶",
      "法律",
      "心理学",
      "追踪",
      "潜行",
      ["电气维修", "电子学Ω"],
      [{ 格斗: "" }, { 射击: "" }],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "拳击手、摔跤手",
    point: [[["edu", 2]], [["str", 2]]],
    wealth: [9, 60],
    skills: ["闪避", { 格斗: "斗殴" }, "恐吓", "跳跃", "心理学", "侦查"]
  },
  {
    name: "管家、佣人",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      { "技艺(生活类，如烹饪、裁缝、理发)": "" },
      "急救",
      "聆听",
      { 外语: "" },
      "心理学",
      "侦查",
      ["会计", "估价"]
    ]
  },
  {
    name: "神职人员",
    point: [[["edu", 4]]],
    wealth: [9, 60],
    skills: [
      "会计",
      "历史",
      "图书馆使用",
      "聆听",
      { 外语: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "程序员",
    point: [[["edu", 4]]],
    wealth: [10, 70],
    skills: [
      "计算机使用Ω",
      "电气维修",
      "电子学Ω",
      "图书馆使用",
      { 科学: "" },
      "侦查"
    ]
  },
  {
    name: "黑客",
    point: [[["edu", 4]]],
    wealth: [10, 70],
    skills: [
      "计算机使用Ω",
      "电气维修",
      "电子学Ω",
      "图书馆使用",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "牛仔",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "闪避",
      "跳跃",
      "骑术",
      { 生存: "" },
      "投掷",
      "追踪",
      [{ 格斗: "" }, { 射击: "" }],
      ["急救", "博物学"]
    ]
  },
  {
    name: "工匠",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [10, 40],
    skills: ["会计", { 技艺: "" }, { 技艺: "" }, "机械维修", "博物学", "侦查"]
  },
  {
    name: "刺客",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [30, 60],
    skills: [
      "乔装",
      "电气维修",
      { 格斗: "" },
      { 射击: "" },
      "锁匠",
      "机械维修",
      "潜行",
      "心理学"
    ]
  },
  {
    name: "银行劫匪",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [5, 75],
    skills: [
      "汽车驾驶",
      { 格斗: "" },
      { 射击: "" },
      "恐吓",
      "锁匠",
      "操作重型机械",
      ["电气维修", "机械维修"]
    ]
  },
  {
    name: "打手、暴徒",
    point: [[["edu", 2]], [["str", 2]]],
    wealth: [5, 30],
    skills: [
      "汽车驾驶",
      { 格斗: "" },
      { 射击: "" },
      "心理学",
      "潜行",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "窃贼",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [5, 40],
    skills: [
      "估价",
      "攀爬",
      "聆听",
      "锁匠",
      "妙手",
      "潜行",
      "侦查",
      ["电气维修", "机械维修"]
    ]
  },
  {
    name: "欺诈师",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [10, 65],
    skills: [
      "估价",
      { 技艺: "表演" },
      "聆听",
      "心理学",
      "妙手",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      ["法律", { 外语: "" }]
    ]
  },
  {
    name: "独行罪犯",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [5, 65],
    skills: [
      "估价",
      "潜行",
      "心理学",
      "侦查",
      [{ 技艺: "表演" }, "乔装"],
      [{ 格斗: "" }, { 射击: "" }],
      ["锁匠", "机械维修"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "女飞贼(古典)",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [10, 80],
    skills: [
      { 技艺: "" },
      "汽车驾驶",
      "聆听",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      [{ 格斗: "斗殴" }, { 射击: "" }]
    ]
  },
  {
    name: "赃物贩子",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [20, 40],
    skills: [
      "会计",
      "估价",
      { 技艺: "伪造" },
      "历史",
      "图书馆使用",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "赝造者",
    point: [[["edu", 4]]],
    wealth: [20, 60],
    skills: [
      "会计",
      "估价",
      { 技艺: "伪造" },
      "历史",
      "图书馆使用",
      "侦查",
      "妙手"
    ]
  },
  {
    name: "走私者",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [20, 60],
    skills: [
      { 射击: "" },
      "聆听",
      "导航",
      "心理学",
      "妙手",
      "侦查",
      ["汽车驾驶", { 驾驶: "飞行器" }, { 驾驶: "船" }],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "混混",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [3, 10],
    skills: [
      "攀爬",
      { 格斗: "" },
      { 射击: "" },
      "跳跃",
      "妙手",
      "潜行",
      "投掷",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "教团首领",
    point: [[["edu", 4]]],
    wealth: [30, 60],
    skills: [
      "会计",
      "神秘学",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "除魅师(现代)",
    point: [[["edu", 4]]],
    wealth: [20, 50],
    skills: [
      "汽车驾驶",
      "历史",
      "神秘学",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      [{ 格斗: "斗殴" }, { 射击: "" }]
    ]
  },
  {
    name: "设计师",
    point: [[["edu", 4]]],
    wealth: [20, 60],
    skills: [
      "会计",
      { 技艺: "摄影" },
      { 技艺: "" },
      "机械维修",
      "心理学",
      "侦查",
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "业余艺术爱好者(原作向)",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [50, 99],
    skills: [
      { 技艺: "" },
      { 射击: "" },
      { 外语: "" },
      "骑术",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "潜水员",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 30],
    skills: [
      "潜水",
      "急救",
      "机械维修",
      { 驾驶: "船" },
      { 科学: "生物学" },
      "侦查",
      "游泳"
    ]
  },
  {
    name: "医生(原作向)",
    point: [[["edu", 4]]],
    wealth: [30, 80],
    skills: [
      "急救",
      "医学",
      { 外语: "拉丁语" },
      "心理学",
      { 科学: "生物学" },
      { 科学: "制药" }
    ]
  },
  {
    name: "流浪者",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2],
        ["str", 2]
      ]
    ],
    wealth: [0, 5],
    skills: [
      "攀爬",
      "跳跃",
      "聆听",
      "导航",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "私人司机",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [10, 40],
    skills: [
      "汽车驾驶",
      "聆听",
      "机械维修",
      "导航",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "司机",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "会计",
      "汽车驾驶",
      "聆听",
      "机械维修",
      "导航",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "出租车司机",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 30],
    skills: [
      "会计",
      "汽车驾驶",
      "电气维修",
      "话术",
      "机械维修",
      "导航",
      "侦查"
    ]
  },
  {
    name: "编辑",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      "会计",
      "历史",
      { 母语: "" },
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "政府官员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [50, 90],
    skills: [
      "取悦",
      "历史",
      "恐吓",
      "话术",
      "聆听",
      { 母语: "" },
      "说服",
      "心理学"
    ]
  },
  {
    name: "工程师",
    point: [[["edu", 4]]],
    wealth: [30, 60],
    skills: [
      { 技艺: "技术制图" },
      "电气维修",
      "图书馆使用",
      "机械维修",
      "操作重型机械",
      { 科学: "工程学" },
      { 科学: "物理" }
    ]
  },
  {
    name: "艺人",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 70],
    skills: [
      { "技艺(表演类，如表演、演唱、喜剧等)": "" },
      "乔装",
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "探险家(古典)",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2],
        ["str", 2]
      ]
    ],
    wealth: [55, 80],
    skills: [
      { 射击: "" },
      "历史",
      "跳跃",
      "博物学",
      "导航",
      { 外语: "" },
      { 生存: "" },
      ["攀爬", "游泳"]
    ]
  },
  {
    name: "农民",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 技艺: "耕作" },
      ["汽车驾驶", { 驾驶: "马车" }],
      "机械维修",
      "博物学",
      "操作重型机械",
      "追踪",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "司法人员",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "汽车驾驶",
      { 格斗: "斗殴" },
      { 射击: "" },
      "法律",
      "说服",
      "潜行",
      "侦查"
    ]
  },
  {
    name: "消防员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "攀爬",
      "闪避",
      "汽车驾驶",
      "急救",
      "跳跃",
      "机械维修",
      "操作重型机械",
      "投掷"
    ]
  },
  {
    name: "驻外记者",
    point: [[["edu", 4]]],
    wealth: [10, 40],
    skills: [
      "历史",
      { 外语: "" },
      { 母语: "" },
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "法医",
    point: [[["edu", 4]]],
    wealth: [40, 60],
    skills: [
      { 外语: "" },
      "图书馆使用",
      "医学",
      "说服",
      { 科学: "生物学" },
      { 科学: "鉴证" },
      { 科学: "制药" },
      "侦查"
    ]
  },
  {
    name: "赌徒",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [8, 50],
    skills: [
      "会计",
      { 技艺: "表演" },
      "聆听",
      "心理学",
      "妙手",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "黑帮老大",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [60, 95],
    skills: [
      { 格斗: "" },
      { 射击: "" },
      "法律",
      "聆听",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "黑帮马仔",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "汽车驾驶",
      { 格斗: "" },
      { 射击: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "绅士/淑女",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [40, 90],
    skills: [
      { 技艺: "" },
      { 射击: "步/霰" },
      "历史",
      { 外语: "" },
      "导航",
      "骑术",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "游民",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [0, 5],
    skills: [
      { 技艺: "" },
      "攀爬",
      "跳跃",
      "聆听",
      "导航",
      "潜行",
      ["锁匠", "妙手"]
    ]
  },
  {
    name: "勤杂护工",
    point: [[["edu", 2]], [["str", 2]]],
    wealth: [6, 15],
    skills: [
      "电气维修",
      { 格斗: "斗殴" },
      "急救",
      "聆听",
      "机械维修",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "调查记者(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      [{ 技艺: "艺术" }, { 技艺: "摄影" }],
      "历史",
      "图书馆使用",
      { 母语: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "通讯记者(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "表演" },
      "历史",
      "聆听",
      { 母语: "" },
      "心理学",
      "潜行",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "法官",
    point: [[["edu", 4]]],
    wealth: [50, 80],
    skills: [
      "历史",
      "恐吓",
      "法律",
      "图书馆使用",
      "聆听",
      { 母语: "" },
      "说服",
      "心理学"
    ]
  },
  {
    name: "实验室助理",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      "电气维修",
      { 外语: "" },
      { 科学: "化学" },
      { 科学: "" },
      { 科学: "" },
      "侦查",
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "伐木工",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "攀爬",
      "闪避",
      { 格斗: "链锯" },
      "急救",
      "跳跃",
      "机械维修",
      "投掷",
      ["博物学", { 科学: "生物学" }, { 科学: "植物学" }]
    ]
  },
  {
    name: "矿工",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "攀爬",
      { 科学: "地质学" },
      "跳跃",
      "机械维修",
      "操作重型机械",
      "潜行",
      "侦查"
    ]
  },
  {
    name: "律师",
    point: [[["edu", 4]]],
    wealth: [30, 80],
    skills: [
      "会计",
      "法律",
      "图书馆使用",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "图书馆管理员(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 35],
    skills: ["会计", "图书馆使用", { 外语: "" }, { 母语: "" }]
  },
  {
    name: "技工",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      { "技艺(木工、焊接、管道工等)": "" },
      "攀爬",
      "汽车驾驶",
      "电气维修",
      "机械维修",
      "操作重型机械"
    ]
  },
  {
    name: "军官",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 70],
    skills: [
      "会计",
      { 射击: "" },
      "导航",
      "急救",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "传教士",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [0, 30],
    skills: [
      { 技艺: "" },
      "急救",
      "机械维修",
      "医学",
      "博物学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "登山家",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [30, 60],
    skills: [
      "攀爬",
      "急救",
      "跳跃",
      "聆听",
      "导航",
      { 外语: "" },
      { 生存: "高山/冰山" },
      "追踪"
    ]
  },
  {
    name: "博物馆管理员",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      "会计",
      "估价",
      "考古学",
      "历史",
      "图书馆使用",
      "神秘学",
      { 外语: "" },
      "侦查"
    ]
  },
  {
    name: "音乐家",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["pow", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 技艺: "音乐" },
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "护士",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      "急救",
      "聆听",
      "医学",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" },
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "神秘学家",
    point: [[["edu", 4]]],
    wealth: [9, 65],
    skills: [
      "人类学",
      "历史",
      "图书馆使用",
      "神秘学",
      { 外语: "" },
      { 科学: "天文学" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "旅行家",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [5, 20],
    skills: [
      { 射击: "" },
      "急救",
      "聆听",
      "博物学",
      "导航",
      "侦查",
      { 生存: "" },
      "追踪"
    ]
  },
  {
    name: "药剂师",
    point: [[["edu", 4]]],
    wealth: [35, 75],
    skills: [
      "会计",
      "急救",
      { 外语: "拉丁语" },
      "图书馆使用",
      "心理学",
      { 科学: "化学" },
      { 科学: "制药" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "摄影师",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "摄影" },
      "心理学",
      { 科学: "化学" },
      "潜行",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "摄影记者",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      { 技艺: "摄影" },
      "攀爬",
      { 外语: "" },
      "心理学",
      { 科学: "化学" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "飞行员",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [20, 70],
    skills: [
      "电气维修",
      "机械维修",
      "导航",
      "操作重型机械",
      { 驾驶: "飞行器" },
      { 科学: "天文学" }
    ]
  },
  {
    name: "特技飞行员(古典)",
    point: [[["edu", 4]]],
    wealth: [30, 60],
    skills: [
      "会计",
      "电气维修",
      "聆听",
      "机械维修",
      "导航",
      { 驾驶: "飞行器" },
      "侦查"
    ]
  },
  {
    name: "警探(原作向)",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 50],
    skills: [
      { 射击: "" },
      "法律",
      "聆听",
      "心理学",
      "侦查",
      [{ 技艺: "表演" }, "乔装"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "巡警(原作向)",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 格斗: "斗殴" },
      { 射击: "" },
      "急救",
      "法律",
      "心理学",
      "侦查",
      ["汽车驾驶", "骑术"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "私家侦探",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 技艺: "摄影" },
      "乔装",
      "法律",
      "图书馆使用",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      [{ 格斗: "" }, { 射击: "" }, "锁匠", "计算机使用Ω"]
    ]
  },
  {
    name: "教授(原作向)",
    point: [[["edu", 4]]],
    wealth: [20, 70],
    skills: ["图书馆使用", { 外语: "" }, { 母语: "" }, "心理学"]
  },
  {
    name: "淘金客",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [0, 10],
    skills: [
      "攀爬",
      "急救",
      "历史",
      "机械维修",
      "导航",
      { 科学: "地质学" },
      "侦查"
    ]
  },
  {
    name: "性工作者",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [5, 50],
    skills: [
      { 技艺: "" },
      "闪避",
      "心理学",
      "妙手",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "精神病学家",
    point: [[["edu", 4]]],
    wealth: [30, 80],
    skills: [
      { 外语: "" },
      "聆听",
      "医学",
      "说服",
      "精神分析",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" }
    ]
  },
  {
    name: "心理学家",
    point: [[["edu", 4]]],
    wealth: [10, 40],
    skills: ["会计", "图书馆使用", "聆听", "说服", "精神分析", "心理学"]
  },
  {
    name: "研究员",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      "历史",
      "图书馆使用",
      { 外语: "" },
      "侦查",
      { 科学: "" },
      { 科学: "" },
      { 科学: "" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "海军",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 格斗: "" },
      { 射击: "" },
      "急救",
      "导航",
      { 驾驶: "船" },
      { 生存: "海上" },
      "游泳",
      ["电气维修", "机械维修"]
    ]
  },
  {
    name: "渔民",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "急救",
      "机械维修",
      "博物学",
      "导航",
      { 驾驶: "船" },
      "侦查",
      "游泳",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "推销员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 40],
    skills: [
      "会计",
      "汽车驾驶",
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      ["潜行", "妙手"]
    ]
  },
  {
    name: "科学家",
    point: [[["edu", 4]]],
    wealth: [9, 50],
    skills: [
      { 科学: "" },
      { 科学: "" },
      { 科学: "" },
      { 外语: "" },
      { 母语: "" },
      "侦查",
      ["计算机使用Ω", "图书馆使用"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "秘书",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "会计",
      [{ 技艺: "打字" }, { 技艺: "速记" }],
      { 母语: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "店老板",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [20, 40],
    skills: [
      "会计",
      "电气维修",
      "聆听",
      "机械维修",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "士兵",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "闪避",
      { 格斗: "" },
      { 射击: "" },
      "潜行",
      { 生存: "" },
      "急救",
      ["攀爬", "游泳"],
      ["机械维修", { 外语: "" }]
    ]
  },
  {
    name: "间谍",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [20, 60],
    skills: [
      { 射击: "" },
      "聆听",
      { 外语: "" },
      "心理学",
      "妙手",
      "潜行",
      [{ 技艺: "表演" }, "乔装"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "学生/实习生",
    point: [[["edu", 4]]],
    wealth: [5, 10],
    skills: ["图书馆使用", "聆听", [{ 母语: "" }, { 外语: "" }]]
  },
  {
    name: "替身演员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [10, 50],
    skills: [
      "攀爬",
      "闪避",
      { 格斗: "" },
      "急救",
      "跳跃",
      "游泳",
      ["电气维修", "机械维修"],
      ["潜水", "汽车驾驶", { 驾驶: "" }, "骑术"]
    ]
  },
  {
    name: "部落成员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [0, 15],
    skills: [
      "攀爬",
      "聆听",
      "博物学",
      "神秘学",
      "侦查",
      "游泳",
      { 生存: "" },
      [{ 格斗: "" }, "投掷"]
    ]
  },
  {
    name: "殡葬师",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "会计",
      "汽车驾驶",
      "历史",
      "神秘学",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "工会活动家",
    point: [[["edu", 4]]],
    wealth: [5, 50],
    skills: [
      "会计",
      { 格斗: "斗殴" },
      "法律",
      "聆听",
      "操作重型机械",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "服务生",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "会计",
      { 技艺: "" },
      "闪避",
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "职员/主管",
    point: [[["edu", 4]]],
    wealth: [9, 20],
    skills: [
      "会计",
      "法律",
      "聆听",
      [{ 母语: "" }, { 外语: "" }],
      ["图书馆使用", "计算机使用Ω"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "中高层管理人员",
    point: [[["edu", 4]]],
    wealth: [20, 80],
    skills: [
      "会计",
      { 外语: "" },
      "法律",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "狂热者",
    point: [
      [["edu", 2]],
      [
        ["pow", 2],
        ["app", 2]
      ]
    ],
    wealth: [0, 30],
    skills: [
      "历史",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "饲养员",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      "驯兽",
      "会计",
      "闪避",
      "急救",
      "博物学",
      "医学",
      { 科学: "制药" },
      { 科学: "动物学" }
    ]
  }
], Fo = [
  [
    ["文艺工作", "wenyigongzuo"],
    [
      ["作家(原作向)", "zuojia"],
      ["编辑", "bianji"],
      ["设计师", "shejishi"],
      ["音乐家", "yinyuejia"],
      ["电影演员", "dianyingyanyuan"],
      ["戏剧演员", "xijuyanyuan"],
      ["替身演员", "tishenyanyuan"],
      ["杂技演员", "zajiyanyuan"],
      ["摄影师", "sheyingshi"],
      ["摄影记者", "sheyingjizhe"],
      ["艺人", "yiren"],
      ["业余艺术爱好者(原作向)", "yeyuyishuaihaozhe"]
    ]
  ],
  [
    ["工农商", "gongnongshang"],
    [
      ["工程师", "gongchengshi"],
      ["建筑师", "jianzhushi"],
      ["伐木工", "famugong"],
      ["工匠", "gongjiang"],
      ["技工", "jigong"],
      ["矿工", "kuanggong"],
      ["农民", "nongmin"],
      ["渔民", "yumin"],
      ["猎人", "lieren"],
      ["牛仔", "niuzai"],
      ["书商", "shushang"],
      ["古董商", "gudongshang"],
      ["店老板", "dianlaoban"]
    ]
  ],
  [
    ["职工", "zhigong"],
    [
      ["会计师", "kuaijishi"],
      ["中介调查员", "zhongjiediaochayuan"],
      ["职员/主管", "zhiyuanzhuguan"],
      ["中高层管理人员", "zhonggaocengguanlirenyuan"],
      ["秘书", "mishu"],
      ["推销员", "tuixiaoyuan"],
      ["图书馆管理员(原作向)", "tushuguanguanliyuanyuanzuoxiang"],
      ["博物馆管理员", "bowuguanguanliyuan"],
      ["律师", "lvshi"],
      ["程序员", "chengxuyuan"],
      ["司机", "siji"],
      ["私人司机", "sirensiji"],
      ["出租车司机", "chuzuchesiji"]
    ]
  ],
  [
    ["学者", "xuezhe"],
    [
      ["文物学家(原作向)", "wenwuxuejiayuanzuoxiang"],
      ["考古学家(原作向)", "kaoguxuejiayuanzuoxiang"],
      ["教授(原作向)", "jiaoshouyuanzuoxiang"],
      ["科学家", "kexuejia"],
      ["研究员", "yanjiuyuan"],
      ["实验室助理", "shiyanshizhuli"],
      ["学生/实习生", "xueshengshixisheng"],
      ["艺术家", "yishujia"]
    ]
  ],
  [
    ["医疗系统", "yiliaoxitong"],
    [
      ["医生(原作向)", "yishengyuanzuoxiang"],
      ["护士", "hushi"],
      ["法医", "fayi"],
      ["心理学家", "xinlixuejia"],
      ["精神病学家", "jingshenbingxuejia"],
      ["精神病医生(古典)", "jingshenbingyishenggudian"],
      ["精神病院护工", "jingshenbingyuanhugong"],
      ["药剂师", "yaojishi"]
    ]
  ],
  [
    ["运动/探险", "yundongtanxian"],
    [
      ["运动员", "yundongyuan"],
      ["拳击手、摔跤手", "shuaijiaoshouquanjishou"],
      ["潜水员", "qianshuiyuan"],
      ["调查记者(原作向)", "diaochajizheyuanzuoxiang"],
      ["通讯记者(原作向)", "tongxunjizheyuanzuoxiang"],
      ["驻外记者", "zhuwaijizhe"],
      ["登山家", "dengshanjia"],
      ["旅行家", "lvxingjia"],
      ["探险家(古典)", "tanxianjiagudian"],
      ["飞行员", "feixingyuan"],
      ["特技飞行员(古典)", "tejifeixingyuangudian"]
    ]
  ],
  [
    ["服务业", "fuwuye"],
    [
      ["酒保", "jiubao"],
      ["服务生", "fuwusheng"],
      ["管家、佣人", "guanjiayongren"],
      ["勤杂护工", "qinzahugong"],
      ["殡葬师", "binzangshi"],
      ["饲养员", "siyangyuan"],
      ["动物训练师", "dongwuxunlianshi"]
    ]
  ],
  [
    ["宗教相关", "zongjiaoxiangguan"],
    [
      ["神秘学家", "shenmixuejia"],
      ["神职人员", "shenzhirenyuan"],
      ["教团首领", "jiaotuanshouling"],
      ["传教士", "chuanjiaoshi"],
      ["除魅师(现代)", "chumeishixiandai"],
      ["狂热者", "kuangrezhe"],
      ["部落成员", "buluochengyuan"]
    ]
  ],
  [
    ["灰色/无职", "huisewuzhi"],
    [
      ["私家侦探", "sijiazhentan"],
      ["黑客", "heike"],
      ["黑帮老大", "heibanglaoda"],
      ["黑帮马仔", "heibangmazai"],
      ["性工作者", "xinggongzuozhe"],
      ["赏金猎人", "shangjinlieren"],
      ["赌徒", "dutu"],
      ["游民", "youmin"],
      ["流浪者", "liulangzhe"],
      ["淘金客", "taojinke"],
      ["绅士/淑女", "shenshishunv"]
    ]
  ],
  [
    ["罪犯", "zuifan"],
    [
      ["刺客", "cike"],
      ["银行劫匪", "yinhangjiefei"],
      ["打手、暴徒", "dashoubaotu"],
      ["窃贼", "qiezei"],
      ["欺诈师", "qizhashi"],
      ["独行罪犯", "duxingzuifan"],
      ["女飞贼(古典)", "nvfeizeigudian"],
      ["赃物贩子", "zangwufanzi"],
      ["赝造者", "yanzaozhe"],
      ["走私者", "zousizhe"],
      ["混混", "hunhun"]
    ]
  ],
  [
    ["军警政", "junjingzheng"],
    [
      ["军官", "junguan"],
      ["海军", "haijun"],
      ["间谍", "jiandie"],
      ["士兵", "shibing"],
      ["警探(原作向)", "jingtanyuanzuoxiang"],
      ["巡警(原作向)", "xunjingyuanzuoxiang"],
      ["消防员", "xiaofangyuan"],
      ["法官", "faguan"],
      ["司法人员", "sifarenyuan"],
      ["政府官员", "zhengfuguanyuan"],
      ["工会活动家", "gonghuihuodongjia"]
    ]
  ]
], Vw = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六"
}, ao = {
  str: "力量",
  dex: "敏捷",
  con: "体质",
  app: "外貌",
  pow: "意志",
  siz: "体型",
  edu: "教育",
  int: "智力"
};
function bo(C, A) {
  const w = /* @__PURE__ */ new Map();
  C.forEach((g) => {
    w.set(g.name, g);
  });
  const M = A.map((g) => {
    const [I, D] = g[0], v = g[1].map(([o, n]) => ({
      name: o,
      pinyin: n
    }));
    return {
      name: I,
      pinyin: D,
      jobs: v
    };
  });
  return {
    jobs: w,
    jobGroups: M
  };
}
const dC = bo(fo, Fo);
function Vg(C, A) {
  const w = {
    text: "",
    point: 0
  }, M = dC.jobs.get(C || "");
  if (!M)
    return w;
  const g = [];
  return M.point.forEach((I) => {
    const D = [], v = [];
    I.forEach(([n, c]) => {
      D.push(`${ao[n]}×${c}`), A && v.push((A[n] || 0) * c);
    });
    let o = D.join(" 或 ");
    D.length > 1 && (o = `(${o})`), g.push(o), w.point += Math.max(...v);
  }), w.text = g.join(" + "), w;
}
function No(C) {
  return {
    wealth: [-1, -1],
    text: "",
    multiSkills: [],
    multiSkillTexts: [],
    ...C
  };
}
function Hg(C) {
  const { jobs: A } = dC, w = No(), M = A.get(C), g = /* @__PURE__ */ new Map();
  if (!M)
    return w;
  w.wealth = [...M.wealth], M.skills.forEach((D) => {
    if (typeof D == "string")
      g.set(D, 0);
    else if (Array.isArray(D))
      w.multiSkills.push(
        D.map((v) => {
          if (typeof v == "string")
            return v;
          const [o, n] = Object.entries(v)[0];
          return { name: o, childName: n };
        })
      );
    else {
      const [v, o] = Object.entries(D)[0];
      let n = v;
      const c = v.includes("(");
      c && (n = n.split("(")[0]);
      let t = n;
      o && (t = `${n}(${o})`), c && (t = v), g.set(
        t,
        c || o ? 0 : (g.get(t) || 0) + 1
      );
    }
  });
  const I = 8 - M.skills.length;
  return w.text = [
    ...g.entries(),
    ...I ? [["其他个人或时代特长", I]] : []
  ].map(
    ([D, v]) => `${D}${v ? `(任${Vw[`${v}`]})` : ""}`
  ).join("、"), w.multiSkillTexts = ro(w), w;
}
function ro(C) {
  const A = [];
  return C.multiSkills.forEach((M) => {
    const g = A.findIndex(([I]) => I.every((v, o) => {
      const n = M[o];
      return typeof v == "string" ? v === n : typeof n == "string" ? !1 : v.name === n.name && v.childName === n.childName;
    }));
    g === -1 ? A.push([M, 1, Vw[`${M.length}`]]) : A[g][1] += 1;
  }), A.map((M) => {
    const I = M[0].map((D) => {
      let v = D;
      return typeof D != "string" && (v = `${D.name}:${D.childName || "任一"}`, D.name === "母语" && (v = "母语")), v;
    });
    return `${M[2]}选${Vw[`${M[1]}`]}(${I})`;
  });
}
const nM = [
  {
    name: "信用评级",
    init: 0,
    intro: "衡量了调查员表现出来的富裕程度以及经济上的自信度。如果调查员尝试用他的经济地位来达成某个目标，那么也许使用信用评级技能会比较合适。信用评级可以被用来取代外貌APP来评估第一印象。（请将技能提升至调查员职业信用范围之内）"
  },
  {
    name: "克苏鲁神话",
    init: 0,
    intro: "“我认为，人的思维缺乏将已知事物联系起来的能力，这是世上最仁慈的事了。人类居住在幽暗的海洋中一个名为无知的小岛上，这海洋浩淼无垠、蕴藏无穷秘密，但我们并不应该航行过远，探究太深。”——H·P·爱手艺"
  },
  {
    name: "侦查",
    init: 25,
    intro: "这技能允许使用者发现密门或者秘密隔间，注意到隐藏的闯入者，发现并不明显的线索，发现重新涂过漆的汽车，意识到埋伏，注意到鼓出的口袋，或者任何类似的事情。对于调查员来说，这是一个很重要的技能。"
  },
  {
    name: "聆听",
    init: 20,
    intro: "衡量一名调查员理解声音的能力，包括偶然听到的对话，一扇关着的门后的轻声嘀咕，以及咖啡厅里的私语。KP可以用这来决定一场即将发生的遭遇的形式。甚至此外，一个较高的聆听技能可以指一名角色有着高度的泛察觉能力"
  },
  {
    name: "取悦",
    init: 15,
    intro: "取悦允许通过许多形式来使用，包括肉体魅力、诱惑、奉承或是单纯的人格魅力。取悦可能可以被用于迫使某人进行特定的行动。取悦或是心理学技能可以用于对抗取悦技能。取悦技能可以被用于讨价还价。"
  },
  {
    name: "话术",
    init: 5,
    intro: "话术特别限定于言语上的哄骗，欺骗以及误导。这技能的对立技能为心理学或者话术。经过一段时间的相信期后，对方会意识到自己被欺骗了，话术的效果总是暂时性的。也可用于砍价。"
  },
  {
    name: "恐吓",
    init: 15,
    intro: "恐吓可以以许多形式使用，包括武力威慑，心理操控，以及威胁。这通常被用来使某人害怕，并迫使其进行某种特定的行为。恐吓的对抗技能为恐吓或者心理学。同样也能拿来砍价。"
  },
  {
    name: "说服",
    init: 10,
    intro: "使用说服来通过一场论述、争辩以及讨论让目标相信一个确切的想法，概念，或者信仰。说服并不一定需要涉及真实的内容。成功的说服技能的运用将花费不少的时间：至少半小时。另外说服还可以被用于讨价还价。"
  },
  {
    name: "心理学",
    init: 10,
    intro: "对所有人来说都很通用的察觉方面的技能，允许使用者研究个人并且形成对于其他某人动机和人格的了解。在玩家的支持下，KP可能会选择进行一个心理学技能检定的暗骰，仅仅对使用这个技能的玩家声明获得的信息，真或假。"
  },
  {
    name: "母语",
    init: 0,
    initPlaceholder: "教育",
    intro: "当选择这项技能时，必须明确一门具体的语言并且写在技能的后面。在婴儿期或者童年早期，大多数人使用一门语言。",
    group: {
      show: [""],
      skills: [
        { name: "汉语" },
        { name: "英语" },
        { name: "日语" },
        { name: "法语" },
        { name: "俄语" },
        { name: "德语" },
        { name: "韩语" },
        { name: "粤语" },
        { name: "拉丁语" },
        { name: "荷兰语" },
        { name: "挪威语" },
        { name: "丹麦语" },
        { name: "印度语" },
        { name: "西班牙语" },
        { name: "葡萄牙语" },
        { name: "阿拉伯语" }
      ]
    }
  },
  {
    name: "外语",
    init: 1,
    intro: "当选择这项技能时，必须明确一个具体的语言并且写在技能后面。一个人可以了解任何数量的语言。这技能代表使用者可以了解，说，读以及写一门不是他母语的语言的可能性。",
    group: {
      show: ["", ""],
      skills: [
        { name: "汉语" },
        { name: "英语" },
        { name: "日语" },
        { name: "法语" },
        { name: "俄语" },
        { name: "德语" },
        { name: "韩语" },
        { name: "粤语" },
        { name: "拉丁语" },
        { name: "荷兰语" },
        { name: "挪威语" },
        { name: "丹麦语" },
        { name: "印度语" },
        { name: "西班牙语" },
        { name: "葡萄牙语" },
        { name: "阿拉伯语" }
      ]
    }
  },
  {
    name: "估价",
    init: 5,
    intro: "用来估计某种物品的价值，包括质量，使用的材料以及工艺。相关的，调查员可以准确地辨认出物品的年龄，评估它的历史关联性以及发现赝品。"
  },
  {
    name: "乔装",
    init: 5,
    intro: "使用在当调查员想要演出自己外的其它人时。使用者改变了态度，习惯，以及/或声音来进行一个乔装，以另一个人或者另一类人的形象出现。戏剧化妆品可能会有所帮助，还有伪造的身份证件。"
  },
  {
    name: "潜行",
    init: 20,
    intro: "安静地移动或躲藏的技巧，不惊扰那些可能在听或看的人们。与这项技能相关的能力意味着角色能够安静地移动或在伪装技巧上有所长。潜行也同样意味着角色可以长时间维持一定程度的谨慎冷静来使自己保持静止和隐秘。"
  },
  {
    name: "追踪",
    init: 10,
    intro: "使调查员可以凭借追踪技能来通过土壤上的脚印，或是物体通过植被时留下的印记来追踪别人，或者是交通工具以及地球上的动物。时间的经过，雨，以及土地的种类都可能会影响追踪的难度等级。"
  },
  {
    name: "读唇",
    init: 1,
    intro: "非常规技能，这个技能允许好奇的探索者不需要听到说话者的声音，就能知道他们的对话内容。必须保持视线，如果只看到一个说话者的嘴唇，对话的另外一半就听不到。读唇也可以用于与另一个人进行安静沟通（如果两人都有此技能），允许相对复杂的语意传达。"
  },
  {
    name: "人类学",
    init: 1,
    intro: "使调查员能够通过观察来辨认和理解一个人的生活方式。如过持续观察一个其他的文化一段时间，那么他可以对文化方式以及道德习惯进行简单的预测。结合心理学可以预测目标行为和信仰。"
  },
  {
    name: "图书馆使用",
    init: 20,
    intro: "图书馆使用使一名调查员能在图书馆找到一些信息，例如特定的一本书，新闻，文件或资料库，但是需要数小时的连续调查。这个技能可以定位寻找一件隐藏案例或一本稀有书籍，但是首先需要获得阅读的许可。"
  },
  {
    name: "生存",
    init: 5,
    intro: "提供专业的如何在极端环境下生存的知识和技巧。内容包括狩猎的知识，搭建住所，可能遇到的危险的知识（例如如何避开有毒性的植物）等等，取决于所处的环境。你可以花费技能点来获得任何的专业化技能。",
    group: {
      show: ["", "", ""],
      skills: [
        {
          name: "沙漠",
          init: 5
        },
        {
          name: "森林",
          init: 5
        },
        {
          name: "荒岛",
          init: 5
        },
        {
          name: "高山",
          init: 5
        },
        {
          name: "海上",
          init: 5
        }
      ]
    }
  },
  {
    name: "攀爬",
    init: 20,
    intro: "这技能允许一名角色借助或者不借助绳索或者登山工具进行爬树、墙以及其他垂直表面。这技能也同样包括用绳索下降。许多因素将会影响难度等级。"
  },
  {
    name: "跳跃",
    init: 20,
    intro: "如果成功，调查员可以在垂直方向上跳起或跳下，或者从一个站立点或起步点水平向外跳。当从高处跌落时，一次成功的跳跃鉴定可以将跌落伤害减半。"
  },
  {
    name: "游泳",
    init: 20,
    intro: "有能力在水或者其他液体中漂浮以及移动。只有在遭遇危险时需要进行游泳技能检定，或当KP认为合适的时候。当游泳的孤注一骰失败时，可能会导致生命值损失。也可能导致人物顺着水流向下冲走，被水半淹或完全淹没。"
  },
  {
    name: "潜水",
    init: 1,
    intro: "非常规技能，使用者接受过在深海游泳的使用以及维持潜水设备的训练，水下导航，合适的下潜配重，以及应对紧急情况的方法。"
  },
  {
    name: "技艺",
    init: 5,
    intro: "该技能可能能使你制作/修理一样东西，或者制造一个复制品/赝品。对一个物品进行一次成功的鉴定可能可以提供关于该物品的相关信息",
    group: {
      show: ["", "", ""],
      skills: [
        {
          name: "表演",
          init: 5
        },
        {
          name: "音乐",
          init: 5
        },
        {
          name: "绘画",
          init: 5
        },
        {
          name: "艺术",
          init: 5
        },
        {
          name: "摄影",
          init: 5
        },
        {
          name: "写作",
          init: 5
        },
        {
          name: "书法",
          init: 5
        },
        {
          name: "打字",
          init: 5
        },
        {
          name: "速记",
          init: 5
        },
        {
          name: "伪造",
          init: 5
        },
        {
          name: "烹饪",
          init: 5
        },
        {
          name: "裁缝",
          init: 5
        },
        {
          name: "理发",
          init: 5
        },
        {
          name: "技术制图",
          init: 5
        },
        {
          name: "耕作",
          init: 5
        },
        {
          name: "木工",
          init: 5
        },
        {
          name: "铁匠",
          init: 5
        },
        {
          name: "焊接",
          init: 5
        },
        {
          name: "管道工",
          init: 5
        }
      ]
    }
  },
  {
    name: "妙手",
    init: 10,
    intro: "允许对物体进行视觉上的遮住，藏匿，或者掩盖，也许通过残害，衣服或者其他的干涉或促成错觉的材料。任何种类的巨大物件应当增加藏匿的难度。妙手包括偷窃，卡牌魔术，以及秘密使用手机。"
  },
  {
    name: "锁匠",
    init: 1,
    intro: "锁匠技能可以打开车门，热线自动装置，用铁撬撬开窗子，解决中国机关箱，以及穿过常规的商用警报系统。使用者可能会修锁，制作钥匙，或者在其他工具的帮助下打开锁。特别困难的锁可能会需要一个更高的难度等级。"
  },
  {
    name: "电气维修",
    init: 10,
    intro: "使调查员能够修理或者改装电气设备。在现代，这技能对现代电子器件几乎做不到什么。为了维修电气设备，可能需要特殊的部件或者工具。也可用于现代的爆破作业。"
  },
  {
    name: "机械维修",
    init: 10,
    intro: "这技能允许调查员修理破损的机器或制造一个新的。基础的木工手艺，管道项目，制作物品也同样可以。这技能可以用来打开普通的锁，但更加专业的就不能。机械维修通常与电气维修相伴，修理一个复杂的设备往往两者皆需。"
  },
  {
    name: "导航",
    init: 10,
    intro: "允许使用者认清自己的路。有着更高技能的人将熟悉各种定位装置。一名角色可以用这技能来测量并对某区域进行绘图（制图学），使用工具可以降低甚至取消难度等级。若角色对某区域十分熟悉，那么在检定上可以得到奖励。"
  },
  {
    name: "骑术",
    init: 5,
    intro: "这技能被用于驾驭马，驴子或者骡子，以及获得对这些骑乘动物的基础照料知识，如何在疾驰中或困难地形上操纵坐骑。当坐骑意外地抬起身子或失足时，骑手保持自己在坐骑上不摔落的几率等同于他的骑术技能。"
  },
  {
    name: "操作重型机械",
    init: 1,
    intro: "当驾驶以及操纵一辆坦克，挖土机或者其他巨型建造机械时需要这个技能。对于种类非常不同的机械，KP可以决定难度等级。"
  },
  {
    name: "汽车驾驶",
    init: 20,
    intro: "任何有着这技能的人都可以驾驶一辆汽车或者轻型卡车，进行常规的移动，并且处理机动车的一般毛病。如果调查员想要甩掉一名追踪者或者追踪某人，则需要一个汽车驾驶检定。"
  },
  {
    name: "驾驶",
    init: 1,
    intro: "这是操控飞行器或船只或其他的技能，汽车驾驶在上面。驾驶（飞行器）：了解并能够日益掌握一类飞行器。着陆时，就算在最佳的状况，也必须进行驾驶掷骰。失败的结果视情况而定。驾驶（船）：了解小型马达船和帆船在风中、暴风雨中、海潮中的各种行为，并可以从波浪与风的表现中读出暗礁及迫近的暴风雨。在风中，新水手连停艘小船都是困难的。",
    group: {
      show: [""],
      skills: [
        {
          name: "船",
          init: 1
        },
        {
          name: "马车",
          init: 1
        },
        {
          name: "飞行器",
          init: 1
        }
      ]
    }
  },
  {
    name: "驯兽",
    init: 5,
    intro: "非常规技能，用于命令、训练驯服动物进行简单任务的技能。这技能最常用在狗身上，但也不排除鸟、猫、猴子，或是其他（由KP判定）。"
  },
  {
    name: "计算机使用Ω",
    init: 5,
    intro: "这技能允许调查员用各种不同的电脑语言进行编程；恢复或者分析隐藏的数据；解除被加了保护的系统；探索一个复杂的网络；或者发现别人的骇入、后门程序、病毒。对电脑系统的特殊操作可能会需要这个检定。仅在现代可用。"
  },
  {
    name: "格斗",
    init: 0,
    intro: "格斗技能指的是一名角色在近距离战斗上的技能。你可以花费一定的点数来获得任何的专业化技能。",
    group: {
      show: ["斗殴", "", ""],
      skills: [
        {
          name: "斗殴",
          init: 25
        },
        {
          name: "刀剑",
          init: 20
        },
        {
          name: "矛",
          init: 20
        },
        {
          name: "斧",
          init: 15
        },
        {
          name: "绞索",
          init: 15
        },
        {
          name: "链锯",
          init: 10
        },
        {
          name: "链枷",
          init: 10
        },
        {
          name: "鞭",
          init: 5
        }
      ]
    }
  },
  {
    init: 0,
    intro: "包括了各种形式的火器，也包括了弓箭和弩。",
    name: "射击",
    group: {
      show: ["手枪", "步/霰", ""],
      skills: [
        {
          name: "手枪",
          init: 20
        },
        {
          name: "步/霰",
          init: 25
        },
        {
          name: "冲锋枪",
          init: 15
        },
        {
          name: "弓弩",
          init: 15
        },
        {
          name: "机枪",
          init: 10
        },
        {
          name: "重武器",
          init: 10
        }
      ]
    }
  },
  {
    name: "闪避",
    init: 0,
    initPlaceholder: "1/2敏捷",
    intro: "允许调查员本能地闪避攻击，投掷过来的投射物以及诸如此类的。闪避可以通过经验来提升，就像其他的技能一样。如果一次攻击可以被看见，调查员可以尝试闪避开它。无法躲避子弹。"
  },
  {
    name: "投掷",
    init: 20,
    intro: "当需要用物体击中目标或者用物件的正确部分击中目标（例如小刀或者短柄小斧的刃）时，使用投掷技能。一件有着合理平衡构架的可以藏于手中大小的物品可以被投掷至多等同于STR码的距离。"
  },
  {
    name: "爆破",
    init: 1,
    intro: "非常规技能，调查员可以使用此技能安全的设置/拆除爆破装置。给予足够的时间和资源，调查员可以装设炸药来摧毁一幢建筑，清除一个被堵住的隧道，以及赋予炸药不同用处。"
  },
  {
    name: "炮术",
    init: 1,
    intro: "非常规技能，这技能呈现出对一些形式的军事训练和经历。使用者具有在战争中操作战地武器的经验。这些武器通常过于巨大以至于无法单人进行操作，并且个人无法再没有工作队支援的情况下使用这武器，或者应当提高难度等级。"
  },
  {
    name: "急救",
    init: 30,
    intro: "使用者有能力可以提供紧急的医疗处理，唤醒昏迷者。急救不能用于治疗疾病，但是只有急救技能可以拯救一名濒死角色的生命。急救可以由多人共同实施，只需一人成功即可。"
  },
  {
    name: "医学",
    init: 1,
    intro: "使用者可以诊断并治疗事故创伤，疾病，毒药。提供相关药品的信息。用本技能进行治疗最少要花费1小时，可在造成了伤害后的任何时间进行，但若未在当天进行难度将会上升。成功的医学技能可唤醒一名昏迷的角色。"
  },
  {
    name: "精神分析",
    init: 1,
    intro: "这技能指广泛的情感上的治疗。精神分析可以恢复一名调查员的理智。单独的精神分析并不能加速不定时疯狂的恢复，但允许一名角色处理他人短期内的恐惧症状。心理治疗专家的治疗可以在不定式疯狂期间内回复理智。"
  },
  {
    name: "催眠",
    init: 1,
    intro: "非常规技能，调查员可以在一名自愿并经历过高度暗示、放松的目标身上引出出神似的状态，并且可能回忆起忘却的记忆。对那些遭受了精神创伤的人，这技能可以当做催眠疗法来使用，减轻一名病人的恐惧或者躁狂。"
  },
  {
    name: "会计",
    init: 5,
    intro: "使调查员理解会计工作的流程。通过检查账簿，调查员可以了解过去的资金的得与失，以及这些资金流通渠道。也能发现做假账的员工，对资金的偷偷挪用，对行贿或者敲诈的款项支付，以及经济状况是否比表面陈述的更好或者更差。"
  },
  {
    name: "法律",
    init: 5,
    intro: "代表你对法律、早期事件、法庭辩术或法院程序的了解。一个法律专家可能会获得奖励以及事务所，但这可能需要几年的申请和一个较高的信用评级。在国外时，技能的难度等级相应上升，除非该角色花费时间学习该国的法律。"
  },
  {
    name: "历史",
    init: 5,
    intro: "让一名调查员能够记住一个国家，城市，区域或者个人及其相关的重要情报。一个成功的检定可以用来帮助辨认先祖所熟悉的工具，科技，或者想法，但是对当下的所知甚少。"
  },
  {
    name: "考古学",
    init: 1,
    intro: "允许辨别以及鉴定一件古董，以及用来发现赝品。使调查员获得建立以及开掘一个挖掘遗址的专业知识。推断留下遗址的生物的目的和生活方式。人类学可能对此会有所帮助。考古学还有助于辨认已消失的人类语言的书面形式。"
  },
  {
    name: "博物学",
    init: 10,
    intro: "指对于自然环境中的植物和动物生命的研究。它可以对物种，栖息地进行辨认，并能辨认踪迹、足迹和叫声，也允许对什么事物可能对某种特定物种来说很重要进行猜测。自然学可能准确也可能不准确。"
  },
  {
    name: "神秘学",
    init: 5,
    intro: "使用者可以识别神秘学道具，用语和概念，以及民间传统，并且可以辨认魔法书以及神秘学记号。理解特定的书籍可能可以增加神秘学技能的百分比。这技能不能运用于与克苏鲁神话相关的咒术，书本，以及魔法。"
  },
  {
    name: "电子学Ω",
    init: 1,
    intro: "用来发现并对电子设备的故障进行维修。允许制作简单的电子设备。这是个现代技能—在1920年代则是使用物理学以及电气维修来应对电子设备。仅在现代可用。"
  },
  {
    name: "科学",
    init: 1,
    intro: "科学专业上的理论和实践的能力，拥有这个技能的人接受过一定程度的正式的教育或者训练。对于知识的理解和认识受到时代的限制。你可以花费点数来获得任何你想要的专业技能，每个专业化技能包括了一门专门的学科。",
    group: {
      show: ["", "", ""],
      skills: [
        {
          name: "数学",
          init: 10
        },
        {
          name: "物理",
          init: 1
        },
        {
          name: "化学",
          init: 1
        },
        {
          name: "药学",
          init: 1
        },
        {
          name: "地质学",
          init: 1
        },
        {
          name: "生物学",
          init: 1
        },
        {
          name: "动物学",
          init: 1
        },
        {
          name: "植物学",
          init: 1
        },
        {
          name: "天文学",
          init: 1
        },
        {
          name: "密码学",
          init: 1
        },
        {
          name: "气象学",
          init: 1
        },
        {
          name: "工程学",
          init: 1
        },
        {
          name: "鉴证",
          init: 1
        },
        {
          name: "制药",
          init: 1
        }
      ]
    }
  },
  {
    init: 0,
    intro: "自定义技能",
    name: "",
    group: {
      show: ["", "", ""],
      skills: []
    }
  }
], JM = {
  信用评级: ["信用", "信誉"],
  克苏鲁神话: ["克苏鲁"],
  取悦: ["魅惑"],
  汽车驾驶: ["汽车", "驾驶"],
  图书馆使用: ["图书馆"],
  计算机使用Ω: ["计算机", "电脑"],
  "步/霰": ["步枪", "霰弹枪"],
  锁匠: ["开锁", "撬锁"],
  博物学: ["自然学"],
  导航: ["领航"],
  操作重型机械: ["重型机械", "重型操作", "重型"]
};
function Po(C, A) {
  OM(A);
  const { jobs: w } = dC, M = _(() => Hg(C.value.job));
  return sA(
    () => C.value.job,
    () => {
      const g = w.get(C.value.job);
      if (!g)
        return;
      A.jobSkills = [...g.skills], OM(A), C.value.proSkills = [];
      const I = {};
      g.skills.forEach((D) => {
        if (typeof D == "string")
          C.value.proSkills.push(D);
        else if (!Array.isArray(D)) {
          const [v, o] = Object.entries(D)[0];
          let n = v;
          v.includes("(") && (n = n.split("(")[0]);
          const t = A.showingChildSkills.get(n);
          if (!t)
            return;
          let Z = -1;
          if (o)
            Z = t.findIndex((U) => U === o), Z === -1 && (Z = t.findIndex((U) => !U), t[Z] = o);
          else {
            const U = I[n] || 0;
            let P = U;
            Z = t.findIndex((R) => R ? !1 : P-- === 0), I[n] = U + 1;
          }
          if (Z === -1)
            return;
          C.value.proSkills.push([n, o, Z]);
        }
      }), delete A.jobSkills;
    }
  ), M;
}
function OM(C) {
  nM.forEach((A) => {
    A.group && C.showingChildSkills.set(A.name, [...A.group.show]);
  });
}
var iM = { exports: {} };
iM.exports;
(function(C) {
  var A = function() {
    var w = String.fromCharCode, M = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", I = {};
    function D(o, n) {
      if (!I[o]) {
        I[o] = {};
        for (var c = 0; c < o.length; c++)
          I[o][o.charAt(c)] = c;
      }
      return I[o][n];
    }
    var v = {
      compressToBase64: function(o) {
        if (o == null)
          return "";
        var n = v._compress(o, 6, function(c) {
          return M.charAt(c);
        });
        switch (n.length % 4) {
          default:
          case 0:
            return n;
          case 1:
            return n + "===";
          case 2:
            return n + "==";
          case 3:
            return n + "=";
        }
      },
      decompressFromBase64: function(o) {
        return o == null ? "" : o == "" ? null : v._decompress(o.length, 32, function(n) {
          return D(M, o.charAt(n));
        });
      },
      compressToUTF16: function(o) {
        return o == null ? "" : v._compress(o, 15, function(n) {
          return w(n + 32);
        }) + " ";
      },
      decompressFromUTF16: function(o) {
        return o == null ? "" : o == "" ? null : v._decompress(o.length, 16384, function(n) {
          return o.charCodeAt(n) - 32;
        });
      },
      //compress into uint8array (UCS-2 big endian format)
      compressToUint8Array: function(o) {
        for (var n = v.compress(o), c = new Uint8Array(n.length * 2), t = 0, Z = n.length; t < Z; t++) {
          var U = n.charCodeAt(t);
          c[t * 2] = U >>> 8, c[t * 2 + 1] = U % 256;
        }
        return c;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(o) {
        if (o == null)
          return v.decompress(o);
        for (var n = new Array(o.length / 2), c = 0, t = n.length; c < t; c++)
          n[c] = o[c * 2] * 256 + o[c * 2 + 1];
        var Z = [];
        return n.forEach(function(U) {
          Z.push(w(U));
        }), v.decompress(Z.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(o) {
        return o == null ? "" : v._compress(o, 6, function(n) {
          return g.charAt(n);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(o) {
        return o == null ? "" : o == "" ? null : (o = o.replace(/ /g, "+"), v._decompress(o.length, 32, function(n) {
          return D(g, o.charAt(n));
        }));
      },
      compress: function(o) {
        return v._compress(o, 16, function(n) {
          return w(n);
        });
      },
      _compress: function(o, n, c) {
        if (o == null)
          return "";
        var t, Z, U = {}, P = {}, R = "", T = "", a = "", d = 2, B = 3, G = 2, u = [], e = 0, K = 0, f;
        for (f = 0; f < o.length; f += 1)
          if (R = o.charAt(f), Object.prototype.hasOwnProperty.call(U, R) || (U[R] = B++, P[R] = !0), T = a + R, Object.prototype.hasOwnProperty.call(U, T))
            a = T;
          else {
            if (Object.prototype.hasOwnProperty.call(P, a)) {
              if (a.charCodeAt(0) < 256) {
                for (t = 0; t < G; t++)
                  e = e << 1, K == n - 1 ? (K = 0, u.push(c(e)), e = 0) : K++;
                for (Z = a.charCodeAt(0), t = 0; t < 8; t++)
                  e = e << 1 | Z & 1, K == n - 1 ? (K = 0, u.push(c(e)), e = 0) : K++, Z = Z >> 1;
              } else {
                for (Z = 1, t = 0; t < G; t++)
                  e = e << 1 | Z, K == n - 1 ? (K = 0, u.push(c(e)), e = 0) : K++, Z = 0;
                for (Z = a.charCodeAt(0), t = 0; t < 16; t++)
                  e = e << 1 | Z & 1, K == n - 1 ? (K = 0, u.push(c(e)), e = 0) : K++, Z = Z >> 1;
              }
              d--, d == 0 && (d = Math.pow(2, G), G++), delete P[a];
            } else
              for (Z = U[a], t = 0; t < G; t++)
                e = e << 1 | Z & 1, K == n - 1 ? (K = 0, u.push(c(e)), e = 0) : K++, Z = Z >> 1;
            d--, d == 0 && (d = Math.pow(2, G), G++), U[T] = B++, a = String(R);
          }
        if (a !== "") {
          if (Object.prototype.hasOwnProperty.call(P, a)) {
            if (a.charCodeAt(0) < 256) {
              for (t = 0; t < G; t++)
                e = e << 1, K == n - 1 ? (K = 0, u.push(c(e)), e = 0) : K++;
              for (Z = a.charCodeAt(0), t = 0; t < 8; t++)
                e = e << 1 | Z & 1, K == n - 1 ? (K = 0, u.push(c(e)), e = 0) : K++, Z = Z >> 1;
            } else {
              for (Z = 1, t = 0; t < G; t++)
                e = e << 1 | Z, K == n - 1 ? (K = 0, u.push(c(e)), e = 0) : K++, Z = 0;
              for (Z = a.charCodeAt(0), t = 0; t < 16; t++)
                e = e << 1 | Z & 1, K == n - 1 ? (K = 0, u.push(c(e)), e = 0) : K++, Z = Z >> 1;
            }
            d--, d == 0 && (d = Math.pow(2, G), G++), delete P[a];
          } else
            for (Z = U[a], t = 0; t < G; t++)
              e = e << 1 | Z & 1, K == n - 1 ? (K = 0, u.push(c(e)), e = 0) : K++, Z = Z >> 1;
          d--, d == 0 && (d = Math.pow(2, G), G++);
        }
        for (Z = 2, t = 0; t < G; t++)
          e = e << 1 | Z & 1, K == n - 1 ? (K = 0, u.push(c(e)), e = 0) : K++, Z = Z >> 1;
        for (; ; )
          if (e = e << 1, K == n - 1) {
            u.push(c(e));
            break;
          } else
            K++;
        return u.join("");
      },
      decompress: function(o) {
        return o == null ? "" : o == "" ? null : v._decompress(o.length, 32768, function(n) {
          return o.charCodeAt(n);
        });
      },
      _decompress: function(o, n, c) {
        var t = [], Z = 4, U = 4, P = 3, R = "", T = [], a, d, B, G, u, e, K, f = { val: c(0), position: n, index: 1 };
        for (a = 0; a < 3; a += 1)
          t[a] = a;
        for (B = 0, u = Math.pow(2, 2), e = 1; e != u; )
          G = f.val & f.position, f.position >>= 1, f.position == 0 && (f.position = n, f.val = c(f.index++)), B |= (G > 0 ? 1 : 0) * e, e <<= 1;
        switch (B) {
          case 0:
            for (B = 0, u = Math.pow(2, 8), e = 1; e != u; )
              G = f.val & f.position, f.position >>= 1, f.position == 0 && (f.position = n, f.val = c(f.index++)), B |= (G > 0 ? 1 : 0) * e, e <<= 1;
            K = w(B);
            break;
          case 1:
            for (B = 0, u = Math.pow(2, 16), e = 1; e != u; )
              G = f.val & f.position, f.position >>= 1, f.position == 0 && (f.position = n, f.val = c(f.index++)), B |= (G > 0 ? 1 : 0) * e, e <<= 1;
            K = w(B);
            break;
          case 2:
            return "";
        }
        for (t[3] = K, d = K, T.push(K); ; ) {
          if (f.index > o)
            return "";
          for (B = 0, u = Math.pow(2, P), e = 1; e != u; )
            G = f.val & f.position, f.position >>= 1, f.position == 0 && (f.position = n, f.val = c(f.index++)), B |= (G > 0 ? 1 : 0) * e, e <<= 1;
          switch (K = B) {
            case 0:
              for (B = 0, u = Math.pow(2, 8), e = 1; e != u; )
                G = f.val & f.position, f.position >>= 1, f.position == 0 && (f.position = n, f.val = c(f.index++)), B |= (G > 0 ? 1 : 0) * e, e <<= 1;
              t[U++] = w(B), K = U - 1, Z--;
              break;
            case 1:
              for (B = 0, u = Math.pow(2, 16), e = 1; e != u; )
                G = f.val & f.position, f.position >>= 1, f.position == 0 && (f.position = n, f.val = c(f.index++)), B |= (G > 0 ? 1 : 0) * e, e <<= 1;
              t[U++] = w(B), K = U - 1, Z--;
              break;
            case 2:
              return T.join("");
          }
          if (Z == 0 && (Z = Math.pow(2, P), P++), t[K])
            R = t[K];
          else if (K === U)
            R = d + d.charAt(0);
          else
            return null;
          T.push(R), t[U++] = d + R.charAt(0), Z--, d = R, Z == 0 && (Z = Math.pow(2, P), P++);
        }
      }
    };
    return v;
  }();
  C != null ? C.exports = A : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return A;
  });
})(iM);
var To = iM.exports;
const qM = /* @__PURE__ */ Yw(To);
var Bo = function() {
  var C = document.getSelection();
  if (!C.rangeCount)
    return function() {
    };
  for (var A = document.activeElement, w = [], M = 0; M < C.rangeCount; M++)
    w.push(C.getRangeAt(M));
  switch (A.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      A.blur();
      break;
    default:
      A = null;
      break;
  }
  return C.removeAllRanges(), function() {
    C.type === "Caret" && C.removeAllRanges(), C.rangeCount || w.forEach(function(g) {
      C.addRange(g);
    }), A && A.focus();
  };
}, Go = Bo, _M = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, jo = "Copy to clipboard: #{key}, Enter";
function uo(C) {
  var A = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return C.replace(/#{\s*key\s*}/g, A);
}
function xo(C, A) {
  var w, M, g, I, D, v, o = !1;
  A || (A = {}), w = A.debug || !1;
  try {
    g = Go(), I = document.createRange(), D = document.getSelection(), v = document.createElement("span"), v.textContent = C, v.ariaHidden = "true", v.style.all = "unset", v.style.position = "fixed", v.style.top = 0, v.style.clip = "rect(0, 0, 0, 0)", v.style.whiteSpace = "pre", v.style.webkitUserSelect = "text", v.style.MozUserSelect = "text", v.style.msUserSelect = "text", v.style.userSelect = "text", v.addEventListener("copy", function(c) {
      if (c.stopPropagation(), A.format)
        if (c.preventDefault(), typeof c.clipboardData > "u") {
          w && console.warn("unable to use e.clipboardData"), w && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var t = _M[A.format] || _M.default;
          window.clipboardData.setData(t, C);
        } else
          c.clipboardData.clearData(), c.clipboardData.setData(A.format, C);
      A.onCopy && (c.preventDefault(), A.onCopy(c.clipboardData));
    }), document.body.appendChild(v), I.selectNodeContents(v), D.addRange(I);
    var n = document.execCommand("copy");
    if (!n)
      throw new Error("copy command was unsuccessful");
    o = !0;
  } catch (c) {
    w && console.error("unable to copy using execCommand: ", c), w && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(A.format || "text", C), A.onCopy && A.onCopy(window.clipboardData), o = !0;
    } catch (t) {
      w && console.error("unable to copy using clipboardData: ", t), w && console.error("falling back to prompt"), M = uo("message" in A ? A.message : jo), window.prompt(M, C);
    }
  } finally {
    D && (typeof D.removeRange == "function" ? D.removeRange(I) : D.removeAllRanges()), v && document.body.removeChild(v), g();
  }
  return o;
}
var mo = xo;
const Sg = /* @__PURE__ */ Yw(mo);
/*! Element Plus Icons Vue v2.3.1 */
var so = /* @__PURE__ */ Q({
  name: "Bicycle",
  __name: "bicycle",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384"
      }),
      i("path", {
        fill: "currentColor",
        d: "M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32"
      }),
      i("path", {
        fill: "currentColor",
        d: "M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384"
      }),
      i("path", {
        fill: "currentColor",
        d: "M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384z"
      }),
      i("path", {
        fill: "currentColor",
        d: "m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"
      })
    ]));
  }
}), yo = so, Qo = /* @__PURE__ */ Q({
  name: "Brush",
  __name: "brush",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
      })
    ]));
  }
}), po = Qo, Eo = /* @__PURE__ */ Q({
  name: "CloseBold",
  __name: "close-bold",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), Vo = Eo, Ho = /* @__PURE__ */ Q({
  name: "Dessert",
  __name: "dessert",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416m287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48m339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736M384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64"
      })
    ]));
  }
}), So = Ho, Xo = /* @__PURE__ */ Q({
  name: "DocumentCopy",
  __name: "document-copy",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M128 320v576h576V320zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32M960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32M256 672h320v64H256zm0-192h320v64H256z"
      })
    ]));
  }
}), Wo = Xo, ho = /* @__PURE__ */ Q({
  name: "Download",
  __name: "download",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"
      })
    ]));
  }
}), ko = ho, Yo = /* @__PURE__ */ Q({
  name: "IceCream",
  __name: "ice-cream",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56"
      })
    ]));
  }
}), Jo = Yo, Oo = /* @__PURE__ */ Q({
  name: "KnifeFork",
  __name: "knife-fork",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56m384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288z"
      })
    ]));
  }
}), qo = Oo, _o = /* @__PURE__ */ Q({
  name: "More",
  __name: "more",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
      })
    ]));
  }
}), $o = _o, An = /* @__PURE__ */ Q({
  name: "Mug",
  __name: "mug",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64m64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32z"
      })
    ]));
  }
}), Cn = An, wn = /* @__PURE__ */ Q({
  name: "Reading",
  __name: "reading",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
      }),
      i("path", {
        fill: "currentColor",
        d: "M480 192h64v704h-64z"
      })
    ]));
  }
}), Mn = wn, gn = /* @__PURE__ */ Q({
  name: "Refresh",
  __name: "refresh",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Xg = gn, In = /* @__PURE__ */ Q({
  name: "Scissor",
  __name: "scissor",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248"
      })
    ]));
  }
}), Dn = In, vn = /* @__PURE__ */ Q({
  name: "Select",
  __name: "select",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), on = vn, nn = /* @__PURE__ */ Q({
  name: "Upload",
  __name: "upload",
  setup(C) {
    return (A, w) => (L(), b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z"
      })
    ]));
  }
}), Wg = nn;
const cn = /* @__PURE__ */ Q({
  __name: "ActionButton",
  props: {
    fullWidth: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "button" }
  },
  emits: ["click"],
  setup(C) {
    return (A, w) => (L(), $(tg(A.tag), {
      class: CA(["action-button", {
        "action-button-full-width": A.fullWidth
      }]),
      onClick: w[0] || (w[0] = (M) => A.$emit("click", M)),
      disabled: A.disabled
    }, {
      default: y(() => [
        ZC(A.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "disabled"]));
  }
}), V = (C, A) => {
  const w = C.__vccOpts || C;
  for (const [M, g] of A)
    w[M] = g;
  return w;
}, Hw = /* @__PURE__ */ V(cn, [["__scopeId", "data-v-61670b32"]]), Zn = /* @__PURE__ */ Q({
  __name: "ControlButton",
  props: {
    label: {},
    icon: {}
  },
  emits: ["click"],
  setup(C) {
    return (A, w) => {
      const M = vA("el-icon");
      return L(), $(Hw, {
        class: "control-button",
        onClick: w[0] || (w[0] = (g) => A.$emit("click", g))
      }, {
        default: y(() => [
          l(M, { size: "0.9em" }, {
            default: y(() => [
              (L(), $(tg(A.icon)))
            ]),
            _: 1
          }),
          DA(" " + s(A.label), 1)
        ]),
        _: 1
      });
    };
  }
}), FA = /* @__PURE__ */ V(Zn, [["__scopeId", "data-v-ee2a6ea2"]]), qA = /* @__PURE__ */ Q({
  __name: "ControlDialog",
  props: {
    title: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(C) {
    return (A, w) => {
      const M = vA("el-dialog");
      return L(), $(M, {
        class: "coc-card-control-dialog",
        "append-to-body": "",
        "align-center": "",
        title: A.$props.title,
        modelValue: A.$props.modelValue,
        "onUpdate:modelValue": w[0] || (w[0] = (g) => A.$emit("update:modelValue", g))
      }, {
        default: y(() => [
          ZC(A.$slots, "default")
        ]),
        _: 3
      }, 8, ["title", "modelValue"]);
    };
  }
});
function hg(C, A) {
  const w = document.createElement("a");
  w.href = C, w.download = A, w.click();
}
function Un(C) {
  return new Promise((A) => {
    const w = document.createElement("img");
    w.onload = () => {
      w.remove(), A({
        width: w.width,
        height: w.height
      });
    }, w.src = C;
  });
}
function tn(C, A = "image") {
  hg(C, A);
}
const en = { class: "downloader-item" }, ln = { class: "downloader-item-preview" }, Ln = ["src"], Kn = {
  key: 1,
  class: "downloader-item-file"
}, zn = { key: 2 }, Rn = { class: "downloader-item-info" }, fn = { class: "downloader-item-title" }, Fn = { class: "preview-full-image-container" }, an = ["src"], bn = /* @__PURE__ */ Q({
  __name: "DownloaderItem",
  props: {
    title: {},
    previewImage: {},
    refreshable: { type: Boolean },
    download: {}
  },
  emits: ["refresh"],
  setup(C) {
    const A = C, w = W(!1), M = _(() => {
      if (!A.download)
        return "";
      const { name: D, type: v } = A.download;
      return `${D}${A.title}.${v}`;
    });
    function g() {
      if (!A.download)
        return;
      const { url: D } = A.download;
      tn(D, M.value);
    }
    function I() {
      w.value = !0;
    }
    return (D, v) => {
      var o;
      return L(), b("div", en, [
        i("div", ln, [
          D.previewImage ? (L(), b("img", {
            key: 0,
            class: "downloader-item-image",
            src: D.previewImage,
            onClick: I
          }, null, 8, Ln)) : ((o = D.download) == null ? void 0 : o.type) === "txt" ? (L(), b("div", Kn, s(M.value), 1)) : (L(), b("div", zn, "预览图加载失败，这不应该，请尝试刷新"))
        ]),
        i("div", Rn, [
          i("div", fn, s(D.title), 1),
          i("div", {
            class: "downloader-item-button",
            onClick: g
          }, " 下载 "),
          D.refreshable ? (L(), b("div", {
            key: 0,
            class: "downloader-item-button",
            onClick: v[0] || (v[0] = (n) => D.$emit("refresh"))
          }, " 重新生成 ")) : H("", !0)
        ]),
        l(qA, {
          modelValue: w.value,
          "onUpdate:modelValue": v[1] || (v[1] = (n) => w.value = n),
          title: "预览大图"
        }, {
          default: y(() => [
            i("div", Fn, [
              D.previewImage ? (L(), b("img", {
                key: 0,
                class: "preview-full-image",
                src: D.previewImage
              }, null, 8, an)) : H("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), rw = /* @__PURE__ */ V(bn, [["__scopeId", "data-v-76bceb39"]]), Nn = {}, kg = (C) => (iA("data-v-92aad31b"), C = C(), cA(), C), rn = { class: "issue-row" }, Pn = /* @__PURE__ */ kg(() => /* @__PURE__ */ i("img", {
  class: "issue-icon",
  src: "https://github.githubassets.com/favicons/favicon-dark.png"
}, null, -1)), Tn = /* @__PURE__ */ kg(() => /* @__PURE__ */ i("a", {
  class: "issue-link",
  href: "https://github.com/masquevil/trpg-saikou#商业使用",
  target: "_blank"
}, " 交流 反馈 商业合作：Github ", -1)), Bn = [
  Pn,
  Tn
];
function Gn(C, A) {
  return L(), b("div", rn, Bn);
}
const jn = /* @__PURE__ */ V(Nn, [["render", Gn], ["__scopeId", "data-v-92aad31b"]]), dn = /* @__PURE__ */ ZI('<div class="guide-group-title" data-v-beb7feb9>基本说明：</div><ol class="guide-ol" data-v-beb7feb9><li data-v-beb7feb9>COC 7版人物卡，也是在线车卡工具。</li><li data-v-beb7feb9> 可以生成 A4 纸大小的正反面两张图。也可以直接生成空白卡，打印后手写。 </li><li data-v-beb7feb9>除了生成图片外，也可以直接打印（Ctrl + P）</li><li data-v-beb7feb9>推荐 PC 端使用，移动端存在性能问题。</li><li data-v-beb7feb9>提供了预设的 1000+ 头像，也可以自定义。</li></ol><div class="guide-group-title" data-v-beb7feb9>以下为目前已有的功能介绍：</div><ol class="guide-ol" data-v-beb7feb9><li data-v-beb7feb9> 花式加点：在属性栏中。可以选择“枫笛式”、“天命式”、“购点式”多种方式加点。 </li><li data-v-beb7feb9>天命一：随机生成一组属性。</li><li data-v-beb7feb9>翻面：正面为调查员属性，背面为调查员故事。</li><li data-v-beb7feb9> 保存：生成 A4 纸大小的正反面两张图，可以手动保存。 还有当前人物卡全部数据的 txt，可以通过“导入”再次使用。 </li><li data-v-beb7feb9> 快速年龄修正：根据你的年龄自动进行教育成长判定，同时按照规则随机调整基础属性。 </li><li data-v-beb7feb9>重置人物卡：清空当前填写的全部内容。</li><li data-v-beb7feb9><div data-v-beb7feb9>导入/导出数据：</div><ol class="guide-ol" data-v-beb7feb9><li data-v-beb7feb9>导出：将当前所填写的全部内容压缩后以文本形式储存到本地。</li><li data-v-beb7feb9>导入：将数据导入回来继续修改。</li></ol></li><li data-v-beb7feb9>开启灌铅模式：每次天命一会选取天命五中最高的一次结果。</li><li data-v-beb7feb9>骰娘相关：方便网团录卡，提供对应指令。</li><li data-v-beb7feb9> 下载空白卡 PDF：方便面团打印使用和开店使用。以后也许会加上直接生成 PDF 的功能。 </li><li data-v-beb7feb9> 切换成功率模式：在 “全面模式”（显示所有技能的“普通|困难|极难”成功率）和 “极简模式”（仅显示加过的技能的总成功率）两种模式之间切换。 </li><li data-v-beb7feb9> 职业列表：展示所有预设职业，可以快速选择职业。可以看到每个职业根据当前属性计算出的职业点数。 </li><li data-v-beb7feb9> 武器列表：展示所有预设武器，可以快速选择武器。点击“使用”后，再点击数字将这个武器填到对应的位置。 </li></ol><div class="guide-group-title" data-v-beb7feb9>其它说明：</div><ol class="guide-ol" data-v-beb7feb9><li data-v-beb7feb9>支持 iOS 设备的“添加到主屏幕”功能。</li></ol>', 6), un = /* @__PURE__ */ Q({
  __name: "GuidePaneContent",
  setup(C) {
    return (A, w) => (L(), b("div", null, [
      dn,
      l(jn)
    ]));
  }
}), xn = /* @__PURE__ */ V(un, [["__scopeId", "data-v-beb7feb9"]]), mn = "data:image/jpeg;base64,/9j/4QDKRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAA6ugAwAEAAAAAQAABa+kBgADAAAAAQAAAAAAAAAAAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYYXBwbAQAAABtbnRyUkdCIFhZWiAH5gABAAEAAAAAAABhY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGzs/aOOOIVHw220vU962hgvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAADBjcHJ0AAABLAAAAFB3dHB0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAACBjaGFkAAAB7AAAACxiVFJDAAABzAAAACBnVFJDAAABzAAAACBtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABQAAAAcAEQAaQBzAHAAbABhAHkAIABQADNtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADQAAAAcAEMAbwBwAHkAcgBpAGcAaAB0ACAAQQBwAHAAbABlACAASQBuAGMALgAsACAAMgAwADIAMlhZWiAAAAAAAAD21QABAAAAANMsWFlaIAAAAAAAAIPfAAA9v////7tYWVogAAAAAAAASr8AALE3AAAKuVhZWiAAAAAAAAAoOAAAEQsAAMi5cGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltzZjMyAAAAAAABDEIAAAXe///zJgAAB5MAAP2Q///7ov///aMAAAPcAADAbv/bAIQAAQEBAQEBAgEBAgMCAgIDBAMDAwMEBQQEBAQEBQYFBQUFBQUGBgYGBgYGBgcHBwcHBwgICAgICQkJCQkJCQkJCQEBAQECAgIEAgIECQYFBgkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ/90ABAA2/8AAEQgDWwNbAwEiAAIRAQMRAf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCxAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6AQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgsRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/jHooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0P4x6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoqSOKSZ/KhUs3ooz/AC+lXP7J1QdbaUY/2Dx+n+fwoAz6K0P7J1Tp9ml/74P+H5VPoega74m1m28N+G7KfUNRvJBDb2ttG0s0sh6JHGgLMx7ADNAGRRXpXxZ+DnxT+BHjGT4e/GTQbzw1rcMEFy9lfxGGZYriMSxsVPTKEcdVOVOCCB618L/2J/2rPjb8ItQ+Onwg8C6p4l8M6XdvY3N1psQuHSeONJXUW8ZM7BEdCzLGVXIyRQB8t0UVfGlamRuF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oooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/1f4x6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9b+MeiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/X/jHooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0P4x6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9H+MeiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKTIHXjp1469KWgAooooAKKKKACiiigAooooAKKKKACiiigD/9L+MeiiigAooooAKKKKACiiigAooooAKKKKACv6s/8AiD9/4KWf9Dx8Mv8AwZaz/wDKav5TK/3MKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP84L/iD9/4KWf9Dx8Mv/BlrP8A8pqP+IP3/gpZ/wBDx8Mv/BlrP/ymr/R9ooA/zgv+IP3/AIKWf9Dx8Mv/AAZaz/8AKaj/AIg/f+Cln/Q8fDL/AMGWs/8Aymr/AEfaKAP8dL/go/8A8E4Pjl/wS8+OOlfAL4+6roer6xq2hQeIIJvD89zPbLbXF1dWqqzXVtaOJRJayFgIyu1lIbJIH5+V/Vl/weA/8pK/A/8A2TLTf/TzrNfym0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/9P+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/zgf+DwH/lJX4H/AOyZab/6edZr+U2v6sv+DwH/AJSV+B/+yZab/wCnnWa/lNoAKKKKACiiigAooooAKKKKACiiigAooooA/9T+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAKaGU9KdX+eZ/wAHnvxj+Lvwy/ac+C+n/DnxTq/h+C58L37zR6bfT2iSML0KGdYXQEgcZNAH+hnRX+ER/wANWftTYz/wsnxTx/1Gb3/49Tf+Gr/2pP8AopPin/wc33/x6gD/AHeaK/whv+Gr/wBqT/opPin/AMHN9/8AHqP+Gr/2pP8AopPin/wc33/x6gD/AHeaK/whv+Gr/wBqT/opPin/AMHN9/8AHqP+Gr/2pP8AopPin/wc33/x6gD/AHeaK/whv+Gr/wBqT/opPin/AMHN9/8AHqP+Gr/2pP8AopPin/wc33/x6gD/AHeaZ5icc9elf4Rf/DVn7U2M/wDCyfFP/g5vv/j1ftJ/wbx/tGftAeM/+Cy/wM8M+L/HXiHVdOu9UvlntLvU7ueCRV0q8YB45JWUgMoPI7UAf66dMLqOtPr/AChP+DnX9oP48+Bf+C0vxY8NeB/G+v6NpltbeHfKs7HUbq2gTdodiz7Y4pFVdzkk4HJJzzQB/q90V/hEj9qz9qY9PiR4p/8ABze//HqZ/wANX/tSf9FJ8U/+Dm+/+PUAf7u29OBnr0pd69K/C7/g218UeKfHH/BF/wCDfijxnqd1rGo3UWsGW7vZpJ55Nus3qrvkkZmbaqhRk8AAdK81/wCDo/xj4v8AAP8AwRo+IXibwLqt3oupRapoCx3VjPJbTqr6rbKwWSJlYAqSpweV4oA/odpu4V/hEf8ADV/7Un/RSfFP/g5vv/j1f7Bn/BCrX/EHiz/gkR8A/EPiq+uNTv7vwxFJPdXUjTSyt5snzO7lmY8YyTmgD9baKQkDrS0AM3r+XFPr/GV/4K1ftMftI6B/wVE/aH0HQPH/AIksbGy+IviWG3t7fVbyOGKOPUp1RI41lCoqqAAAMADjivzw/wCGr/2pP+ik+Kf/AAc33/x6gD/d5ppdV69q/wAIj/hq/wDak/6KT4p/8HN9/wDHq/2kv+CZmrajrf8AwTn+A2s61cy3l5d/D7w1NPPO5kkkkbTLdnd3PLMzEkk8nPNAH3JvQcZp9fx7f8HlXxH+Ivw1/YW+FurfDnXtR8P3U/jtYZZtMuprWR0/sy9bYzwshK5AO31Ff5x//DV/7Un/AEUnxT/4Ob7/AOPUAf7u+5elOrwL9lm7u779mX4c39/I8883hjSHkkdtzM7WURZmY8kk9Sa99oAKbkdBTq/wxfij+1X+0/B8TPEUEHxI8Uxxx6ndqqrq96AqiZsAATYGMUAf7nVN3LX+EX/w1X+1Px/xcjxV/wCDm+/+PVu+Gf2rf2on8S6eknxJ8UlTcwgg6xe4xuAx/rvSgD/dYyKbvXiqGmEnTLdpDz5S/wDoNfwOf8Hpfxd+K/wz+Jn7P9t8NvE+r+H0u9M8QNOum3s9oJSk1hsLiF0D7cnGemeKAP79aK/whv8Ahq/9qT/opPin/wAHN9/8eo/4av8A2pP+ik+Kf/Bzff8Ax6gD/d5or/CH/wCGrf2pe3xJ8U/+Dm+/+PUv/DVn7U2M/wDCyfFPH/UZvf8A49QB/u703eucV/hEf8NX/tSf9FJ8U/8Ag5vv/j1f6TP/AAZz/EXx/wDEj/gnR461r4i65qGv3kXxBu4Y59SuprqRYxpmnMEV5WYhQSTtHHNAH9cFFM8xB3p9ABTdw6U6vzO/4LH63rPhv/glT+0Jr/h27msb2z8Ca1Nb3Fu7RSxOlo5V0dMMrKQMEHigD9MabvXgA1/hEf8ADV/7Un/RSfFP/g5vv/j1f6kP/BqD438afEL/AIJE6N4j8e6ve63qDeJ9bQ3N/cSXMpRZU2rvlZmwvQDOBQB/SxRTcinUAFFN3CjcKAHUwug70+v8k3/g49/aH+P/AIJ/4LT/ABu8M+CvHGv6Rplpc6MILSx1K7t4Ig2h6ezbI45VVdzklsDqfWgD/Wyor/CH/wCGrv2pf+ik+Kf/AAc33/x6k/4av/ak/wCik+Kf/Bzff/HqAP8Ad33CnV+Sf/BCrXvEHiz/AIJEfAPxF4qvp9Sv7vwxC89zdSNNNK3nSfM7yFmY8YyTmv1ryBQAtFFFADdy+tOr+S3/AIPE/iF49+HH/BNTwTrnw613UNAvZPiNp8ElxptzLaytEdL1RyjPCyEqSinaeMgV/msf8NX/ALUn/RSfFP8A4Ob7/wCPUAf7u5ZQMmjco4r4q/4Juajqetf8E7vgLrWsTy3d5efDrwtPPPM5kkklk0m2Z3d25ZmYkknkmv5zP+Dy74j/ABC+Gf7C/wALdX+Hevaj4fup/HawyTabcy2sjx/2ZettZ4WQlcgHHTigD+wqiv8ACG/4av8A2pP+ik+Kf/Bzff8Ax6nf8NW/tTf9FI8Vf+Dm+/8Aj1AH+7vRX+EN/wANX/tSf9FJ8U/+Dm+/+PUf8NX/ALUn/RSfFP8A4Ob7/wCPUAf7vNFf4Q3/AA1f+1J/0UnxT/4Ob7/49R/w1f8AtSf9FJ8U/wDg5vv/AI9QB/u80V/hDf8ADV/7Un/RSfFP/g5vv/j1H/DV/wC1J/0UnxT/AODm+/8Aj1AH+7zTd69M1/hFf8NWftTf9FJ8U/8Ag5vf/j1e9fstftS/tN3/AO018ObC8+I/iiaCbxNpMbxvq96yMj3kQKsplwQRwR0oA/2/aKKKACiiigD/ADgf+DwH/lJX4H/7Jlpv/p51mv5Ta/qy/wCDwH/lJX4H/wCyZab/AOnnWa/lNoAKKKKACiiigAooooAKKKKACiiigAooooA//9X+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAK/zhf8Ag92/5On+B/8A2Kuof+lwr/R6r/OF/wCD3b/k6b4H/wDYq6j/AOlwoA/jh+AXwun+Onxz8F/BC0vF06XxlrunaFHdunmLbtqN1HbCUoCpcJ5m4qGXOOor+1z/AIgdPin/ANHE6V/4Tk//AMsK/kD/AOCe/wDyfz8Dv+x/8Nf+nW2r/c4oA/zw/wDiB0+Kf/RxOlf+E5P/APLCj/iB0+Kf/RxOlf8AhOT/APywr/Q63ClyKAP88T/iB0+Kf/RxOlf+E5P/APLCj/iB0+Kf/RxOlf8AhOT/APywr/Q7yKMigD/PE/4gdPin/wBHE6V/4Tk//wAsKP8AiB0+Kf8A0cTpX/hOT/8Aywr/AEOt6+tOoA/xN/8Agq//AME59Y/4JYftd3v7JuveKoPGNzZ6ZY6l/aVvaNZIwvULCPyWklPy7f71fR3/AAbe/wDKbT4B/wDYV1D/ANNN7X1//wAHeH/KZHW/+xV0H/0S9fIH/Bt7/wAptPgH/wBhXUP/AE03tAH+x1X8cf8AwVl/4NaPH/8AwUq/bv8AGX7Y2ifGSw8JWviqLTIk0ubRpLx4f7P063sjmZbuEPvMG8fKMBsc4r+xyigD/LY/4KX/APBq54//AOCcP7FfjL9snW/jLp/iq18IfYN2lwaLLaPP9tvrexXEzXcoXYZw/wB08Liv5Lq/1+P+Dodl/wCHHXxqH/Yv/wDp+0+v8gjB9KAP9gj/AINif+UIPwT/AOuWt/8Ap7v6+u/+CuP7AGs/8FNf2G/Ev7H+h+JYfCFxr93ptyupzWpvEj+wXcVyQYVkhJ3iPb94Yr5D/wCDYxgv/BEH4J54/da1/wCnu/xX74UAf54f/EDp8U/+jidK/wDCcn/+WFf22f8ABPX9lPUP2IP2LPh1+ydqmsx+IrjwNpCaY+pRQG3S4KOz71hZ5Cn3um49K+0KKAPyu/4K7/8ABTTRP+CTP7Ktt+1F4g8IT+Nbe412z0L+z7a8WxdWu4Z5BL5rwzDC+Rjbt/i61/Mp/wARxXwr/wCjdtV/8KOD/wCV9ffn/B5Hz/wSR00D/of9G/8ASTUK/wAsjB9KAP7z9W/4NdvHn/BVjVLn/gpr4e+MVh4Lsf2gZG+IVvoFxo0t7NpcXiI/2ilm90l5Cs7QCcRmQRRhtuQqj5ay/wDiB0+Kf/RxOlf+E5P/APLCv7Gv+CPLp/w6i/Zu56fDTwx/6bLev0ioA/zw/wDiB0+Kf/RxOlf+E5P/APLCv7t/2Ufgld/s2/swfDv9nm+1BNWl8DeG9K0F71IzClw2nWkVsZREWYoH8vcF3Nj1r6Fpm9PX2oA/Ef8A4Llf8EjvEX/BX/8AZ98JfBLw943tvAsvhnxCNce7uLFr8TKLSa28pUWaEof3obdk9Pu1/L9/xA6fFP8A6OJ0r/wnJ/8A5YV/oc70BxT6APNPhD4Cn+GPwo8L/Da5uFvH8O6TZaYZwuwSG0gSHeF527tmcZ4r0uiigAr/AAR/iv8A8lR8S/8AYVvP/Rz1/vcV/gkfFcH/AIWj4l/7Cl4fw856AP2Z/wCCKv8AwRE8Uf8ABZO5+Idr4Z+Idr4CPgBdMaQ3OnPf/af7S+0gBdlxBs2fZj653dq/eZf+DJX4peGSPEj/ALQmlyrp/wDpBRfD067hF85X/j/74xXWf8GOXGrftIHt5Xhf+eqV/fX4q58LakAOfss3H/ADQB/DCP8Ag96+F2lqNNP7PGqP9nHlFv8AhI4OdnH/AED68+8a+B5v+DyCaD4lfDS4HwFT4DhtNuLfUk/t86kdfxKro0P2HyfJFiwIIfdvGNuOf4GdV/5CVxj/AJ6P/Ov9Cv8A4MeFKfC/9okNxnVPDeP+/GoUAfP3/EDp8U/+jidK/wDCcn/+WFH/ABA6fFP/AKOJ0r/wnJ//AJYV/oc+YnT/ADxT6AP8a/8A4LO/8Ed/En/BHb4neC/hp4n8d23jt/GOlz6nHPa6e2ni3FvOITGVaabdk85BWvy3+AXwun+Onxz8F/BC0vF06XxlrunaFHdunmLbtqN1HbCUoCpcJ5m4qGXOOor+x3/g90YN+1L8DyvT/hFdQ/8AS4V/KL/wT2Rv+G+PgefTx/4Z/wDTrbUAf18/8QOnxT/6OJ0r/wAJyf8A+WFf1Nf8EP8A/glH4h/4JD/sxeIv2fNf8Z2/jibXPEc2vLeW9k1gkay2ltbCExtNMSR9nJ3bh97pxX7Q5FGRQB89/tW/Ha2/Zb/Zm+IH7Sl9pr6zB4C8P6hr0lhHIIHul0+3e4MSyFWCFwm0MVOPSv4yP+I4r4V/9G7ar/4UcH/yvr+qr/greyn/AIJbftEY7/DrxJ/6bZq/xGaAP9Dz/iOK+Ff/AEbtqv8A4UcH/wAr6x9Z/wCDmzwR/wAFetKuP+CXfhz4R33ga/8Aj6n/AAg0HiG41iO/h0x9YH2Vbp7VbSAzLCX3FBJGWx95a/z3/KcAEjAr9PP+CKaN/wAPb/2cuP8Amf8AQ/8A0rSgD+nz/iB0+Kf/AEcTpX/hOT//ACwr1bwn/wAFU9A/4NZdIH/BJ3x54MuPjJqGkMfEjeI7C9TRYXTWcSrB9klhu2zEEwW83Df3Vr++av8AKF/4O71J/wCCyOtY7+FdBx/35egD+or/AIJ4/wDB2B8P/wDgoD+2d4F/Y/0f4K6h4ZufG11PbJqc2txXSW/2e0muSTCtnGWyIivDL1r+vCv8cb/g2+BH/BbT4Ce2q6h/6ab2v9jjIoA/k0/4KZ/8HTngX/gm1+2f4t/Y71v4NX3iy78KpYs+qQazFZpN9tsobwAQtaTFdolCfePSj/gmZ/wdOeBf+Ckv7Z/hL9jvQ/g1feE7vxUl6yapPrMV4kP2GymvCDCtpCW3CEpwwxmv44/+DpEZ/wCC3fxfYdPK0H/0yWNH/BrcMf8ABbv4Psenla9/6ZL6gD/Xor+MP/gqL/wal+P/APgoh+3h4+/bI0b4z6f4WtfGkthImlzaJLdPb/Y9PtrIgzLeRhtxt9/CDg4r+zvIpNy5xQB/le/8FR/+DXjx3/wTH/Y08Qftga58YrHxfa6BdafbNpcGjS2TyG/uo7VSszXcwGwy7sbOcV/KXX+tz/wdeEH/AIIm/EfH/QV8O/l/a1rX+SPg+lAH+zx/wQJ/5Q2/s9/9irD/AOjpa67/AIK7/wDBTTRP+CTP7Ktt+1F4g8IT+Nbe412z0L+z7a8WxdWu4Z5BL5rwzDCiDG3b361x/wDwQKI/4c3fs9j/AKlWH/0dLX5gf8HkfP8AwSR00D/of9G/9JNQoA+A/wDiOK+Ff/Ru2q/+FHB/8r6P+I4r4V/9G7ar/wCFHB/8r6/zxMH0p3lt0xQB/VB/wW9/4ONPBf8AwV2/ZW0D9nLQPhVe+BptF8T23iH7dcatHfo629nd2ph8tbWAgn7SDu3fw9K/lcoooA/3GP8AgmR/yja/Z7/7Jp4T/wDTPa1/NF/wez/8mC/Cj/sf1/8ATVe1/S7/AMEyP+UbX7Pf/ZNPCf8A6Z7Wv5ov+D2f/kwX4Uf9j+v/AKar2gD/ADRK/uD+Fn/Bln8Tvid8MfDvxKtvj/pdmniHS7PUlt28PTOYhdwpLsLC+UHaHxkKK/h8r/d1/ZN/5NZ+Gv8A2Kui/wDpDDQB/CN/xA6fFP8A6OJ0r/wnJ/8A5YUf8QOnxT/6OJ0r/wAJyf8A+WFf6HPmJnaD04+lOyKAP88T/iB0+Kf/AEcTpX/hOT//ACwo/wCIHT4p/wDRxOlf+E5P/wDLCv8AQ7yKMigD/PE/4gdPin/0cTpX/hOT/wDywo/4gdPin/0cTpX/AITk/wD8sK/0OtyinUAf45v/AAWm/wCCLXij/gjd4l+H/hrxR8QLXx63jy11C5jktdPfT/so057dCpDzz79/njGNuNtfl5+yb/ydN8Nf+xp0X/0uhr+zv/g+I/5Kn+zv/wBgrxJ/6O0+v4xP2TuP2pvhqf8AqadG/wDS6GgD/d1ooooAKKKKAP8AOB/4PAf+Ulfgf/smWm/+nnWa/lNr+rL/AIPAf+Ulfgf/ALJlpv8A6edZr+U2gAooooAKKKKACiiigAooooAKKKKACiiigD//1v4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr/OE/wCD3Yf8ZTfA8f8AUqah/wClwr/R7r/OF/4Pdv8Ak6j4H/8AYqah/wClwoA/lB/4J7/8n8/A7/sf/DX/AKdbav8Ac4r/AAx/+Ce//J/PwO/7H/w1/wCnW2r/AHOKAP8AM1/4PS9Y1fSv+Cjvw3ttPuprdD8NrRiI5GQHOsapngcdv8jFfx5f8Jb4p/6CV1/3+f8Axr+vv/g9e/5SSfDb/smln/6eNVr+OOgDof8AhLfFP/QSuv8Av8/+NH/CW+Kf+gldf9/n/wAa56igD9Xf+CLvibxDc/8ABWf9nS3mv7iRG8faGrK0rlSPtUYwRnHT2r/abr/FF/4Ip/8AKW/9nL/soGh/+laV/tdUAf5Qn/B3h/ymR1v/ALFXQf8A0S9fIH/Bt7/ym0+Af/YV1D/003tfX/8Awd4f8pkdb/7FXQf/AES9fIH/AAbe/wDKbT4B/wDYV1D/ANNN7QB/sdUUUUAZt3a297C1pdxJLG2Mo4DLwQfukVQ/4RLwt/0DbX/vzH/8TXw1/wAFRP24P+Hb37Dfjb9slvDP/CXjwj/Z/wDxKftf2Hz/ALdf29j/AK/yZ9mzz9/+qO7bt4zkfyE/8Ryf/VtP/l2//eigD++y0sobKIW9pCkMa/dVAFA9RgDA/CrokjPQj/I/wr+Ab/iOT/6tp/8ALt/+9Ffo1/wSh/4OjR/wU6/ba8N/sen4Kf8ACGf2/a6jc/2r/wAJB/aHlf2faSXWPI/s633b/L2/6wbevPSgD+uKiiigDNvNNtNQi+z38Ec8Y52yAMM4xnGPwqh/wiXhb/oG2v8A35j/APia6GigCtFbpbxJBboqIgCqigBVC8DA7YFT71zjNOr8gv8Ags9/wVNP/BIf9lvSP2kz4H/4T3+1fEVtoH9n/wBo/wBmbPtFtcz+d532a63bRb7dmwfe68UAfr7X+Ix/wU98TeJLf/gpJ+0BBFf3SxJ8RPEoVVlcAKNTuAowCB0x+HSv66/+I5P/AKtp/wDLt/8AvRRH/wAGorf8FI/+Nh6/HL/hD/8Ahen/ABXv9g/8I79u/sz/AISP/iZfY/tf9pwef5H2jy/M8mPft3bEztAB8p/8GV2saxqX7e3xVi1G6muFXwAxxLIWGf7Ush3/AM/yr/Sor+AJv2VP+IPTH7cB1z/hf/8Aws3/AIob+xxbf8Ix9jz/AMTP7X9p8zVPN/48/K8ryk+9u3fKFK/8Ryf/AFbT/wCXb/8AeigD+/oOp6U6vOPhL42/4Wh8K/DXxLFt9i/4SLS7PU/s+4SeT9sgSby921d23ft3bRn0Fej0AFc2fCfhotltNtSW6nyk79e3NdJRQBlWWjaZprMdOt4rfeBu8tFTOOmdoHStAqCuxhxj8MVLWZq18dM0m51Lbv8As0TybfXYucfpQBn/APCJeFScnTLXP/XGPv8AhX+fT/wezE+Gvih+z4vhz/iXLNpXiIyC1/db9s1hjITAOK9Eu/8Ag+K+zXMtv/wzXny2ZM/8JZ6cf9Aiv53f+C4P/Baxf+Cyvin4eeJW+HX/AAr3/hArTUbby/7U/tT7UdQe3fO77Ha+X5fkY6Nu3fw4oA/MH9lDxT4lP7UPw1R7+6ZT4p0fIMr9Bew5HWv91Wv8E74T+PF+GHxR8N/EkW/23/hHtUstT+z7vL877HMk3l7trbd2zbu2nHoa/u1/4jk/+raf/Lt/+9FAH98t9oul6oVfUrSG4ZRhTKiuQPTkcfyr41/b/wDDmgWf7BvxsubSxt45IfAXiV0dIkDKw0q4wy4UYPHUY/w/jk/4jk/+raf/AC7f/vRXjn7Qn/B50Pjv8A/HHwQ/4Z4/sv8A4TLw/qehfbP+Ep877P8A2jaSW3m+V/ZKb/L8zO3cu7H3hQB/EP8A8Jb4p/6CV1/3+f8Axo/4S3xT/wBBK6/7/P8A41z1FAHQz+JPEU8Bgnvrh43GCrSuVIxjBGcVz1fR37JHwJX9qX9qP4d/s2jVP7FPjzxFpmgf2h5Pn/Zf7QuUt/O8nfH5mzfu2713YxuFf23/APEDaf8Ao5b/AMtL/wC+9AH6S/8ABnboeiX/APwSZ1GbUbOGaT/hPtYGZI1LYFrYY6jsen41/VrB4Y8P2063FvYW8bqcqyxICDnPGBx271+Xn/BHD/gmEf8Agkz+yRc/st/8JkPHZufEF7rn9pf2f/Zu0XkVvF5PkfaLn7vkfe385+6MV+slABWFeeHtF1CQz6hZQTyEY3PGjHA6DJB9cf4Vu0UAfhR/wcV6LpOjf8EWPjvqOk20NtcxaXYFJYUVHT/ibWX3WQAjj36V/j//APCW+Kf+gldf9/n/AMa/28P+Cj/7Gr/8FA/2JPHn7Hh1/wD4RT/hN7W2tv7VFqL37N9nvILrd9n82DzN3k7ceYn3s9sV/HX/AMQNp/6OW/8ALS/++9AH8CN3fT38zXN5I8srY+ZyWPHHU+1FnfT2Ey3NlI8MqdGQlTzx1HtX993/ABA2n/o5b/y0v/vvR/xA2n/o5b/y0v8A770AfwR/8Jb4p/6CV1/3+f8Axr/X5/4No7q5vP8AgiJ8Crm7cyubXW/mckn/AJDuojqeen+QOn88X/EDaf8Ao5b/AMtL/wC+9N/4fxD/AIN1/wDjTT/wrD/hbf8AwpX/AEb/AISz+1/7D/tH+2P+J3n+z/sd95Hlf2h5H/HzJu8vf8u7YoB/fbdWEF/B9mvo0mjbG5HUMvHI4Ofb+lZ3/CJeFv8AoG2v/fmP/wCJr+CT/iOT/wCraf8Ay7f/AL0Uf8Ryf/VtP/l2/wD3ooA/vwgtYrWMW9tGsUajhUAUD2AGMVBd6dZ6hF9nv4I7iMc7ZAGGcY6Y/Cv4Fv8AiOT/AOraf/Lt/wDvRX6uf8Ebv+DlU/8ABWf9ri5/Zc/4U7/wght/D95rn9pf29/aOfsk0EXleR/Z9r97z/veZ/D92gD+n/8A4RLwt/0DbX/vzH/8TX+Jv/wVoigtv+CoP7Q1tCqpGnxE8SBVUYUAajMAAOgx/TjFf7dNf4i3/BXD/lKP+0R/2UXxJ/6cZqAPzy2mm1+wX/BFv/gla3/BXr9qHW/2b08cf8IF/Y3hm58Q/wBof2d/aXmC3u7W18jyvtNrtz9qzu3n7uNvOR/T3/xA2n/o5b/y0v8A770Af2M/8EyWC/8ABNv9nsH/AKJp4T/9M9rX80n/AAez/wDJgvwo/wCx/X/01Xtf1j/sy/Bh/wBnT9m74ffs+DUBq/8AwgnhrSfD327yvI+1f2XZxWnneVuk8vzPK3bNzbc43N1r+Tj/AIPZ/wDkwX4Uf9j+v/pqvaAP80Sv93b9k3n9ln4aEf8AQqaN/wCkMNf4RNf7u37Jf/Jq/wANP+xU0b/0hhoA/jT/AOD3jVNT0v4Yfs8nT7mW336p4iz5TlN2IdPxnbjp/nFf563/AAlvin/oJXX/AH+f/Gv9Bv8A4Pif+SX/ALOv/YU8R/8AonTq/wA8OgDof+Et8U/9BK6/7/P/AI0f8Jb4p/6CV1/3+f8AxrnqKAPQPC3irxOfE+mq2pXRH2qHjznx98e9f73Ff4E/hX/kadN/6+of/Q1r/fYoA/zxf+D4j/kqf7O//YK8Sf8Ao7T6/jD/AGT+f2pPhoB28VaN/wCl0Nf2ef8AB8R/yVP9nf8A7BXiT/0dp9fxifsm/wDJ03w1/wCxp0X/ANLoaAP93WiiigAooooA/wA4H/g8B/5SV+B/+yZab/6edZr+U2v6sv8Ag8B/5SV+B/8AsmWm/wDp51mv5TaACiiigAooooAKKKKACiiigAooooAKKKKAP//X/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACv84X/AIPdv+Tp/gef+pU1D/0uFf6PVf5wn/B7sP8AjKX4H/8AYqah/wClwoA/lC/4J7/8n8/A7/sf/DX/AKdbav8Ac4r/AAx/+Ce//J/PwO/7H/w1/wCnW2r/AHOKAP8AMj/4PXf+Uknw1/7JpZ/+njVa/jjr+xz/AIPWgW/4KQ/DVl6f8K0sx/5WNVr+OTB9KAEopcH0owfSgD9Pf+CKf/KW/wDZy/7KBof/AKVpX+11X+KP/wAEVEYf8Fb/ANnLI/5n/Q//AErjr/a4oA/yhP8Ag7w/5TI63/2Kug/+iXr5A/4Nvf8AlNp8A/8AsK6h/wCmm9r6/wD+DvD/AJTI63/2Kug/+iXr5A/4Nvf+U2nwD/7Cuof+mm9oA/2OqxrvxDoFhObW9vYIZFHKPIqkfgTWzX+Rj/wdN397bf8ABb/4uRRyyKBa+G8YYjH/ABILDHFAH94H/Bznq2la3/wRH+M2l6LcxXdzL/YGyKF1d2xr2nk4Vck4HP0r/Iz/AOEV8T/9A26/78v/AIV+9P8AwbCXVze/8Fvfgva3LtLHJ/b+5HOVP/Eg1HqOh9q/14v7K0v/AJ9ov++F/wAKAP8AAgubG8spmtryJoZExlHG0jIyOD7dK/oz/wCDUL/lNn8OP+wT4i/9NNzXl/8Awc1xQ2//AAW4+NcMSBFE2jYC/wDYEsK9Q/4NRPk/4LZ/Djdx/wASrxF/6aLmgD/W7rDufE3huzma3u9QtopE+8ryopX6gnityv8AGW/4L36jqEX/AAWN/aCjimkAXxVNwGYYxDF0/wA4oA/2Sv8AhK/C3/QStf8Av8n+NH/CV+Fv+gla/wDf5P8AGv8AA4/tPUf+e8v/AH0aP7U1T/n4l/76NAH++/Dc29xCtxbuskbAFWU5BB6YI4xiv5Iv+DzSxvtS/wCCXfhCDToXncfETTTtjUscf2dqQzgDp0H5V+4P/BH5nl/4JT/s4OSWY/DXwxlj1P8AxLIOtfovNaQ3CCO4iV1HZgCOlAH+Bj/wivif/oG3X/fl/wDCv9uv/gl3G9v/AME1/gBbzqUdPh14YDKRggjS7cYI7V9wf2Vpf/PtF/3wv+FSrGkYG0BVXtjgAelAH8a//B6zp99qf7BXwph02F52Xx8pIjUtgf2Xejt74H6V/mr/APCK+J/+gbdf9+X/AMK/3zbiC2nHlzqrqOzDPb0+n6U3+ytL/wCfaL/vhf8ACgD5w/ZS8TeG7b9l74bW0+oWySJ4W0dSplQEEWMQxjPt+le//wDCV+Fv+gla/wDf5P8AGv8AC4/arv71f2ofiVGk7hR4o1kABuMfbZRgc/hivn7+1NQ/5+Jf++jQB/vkf8JX4W/6CVr/AN/k/wAaP+Er8Lf9BK1/7/J/jX+Bv/aup/8APzL/AN9H/Gj+1dT/AOfmX/vo/wCNAH++tY6vpOp7hptzFcbMbvKdXx9dvSs/xX/yKup/9es3/oBr+Bv/AIMfrq6vNV/aPE8jOBD4XGGOcc6p6/T/APX2/vk8V/8AIq6n/wBes3/oBoA/wOdU/wCQjc/9dX/9CrOrR1T/AJCVz/11f+dUAjEZFADaKXB9KMH0oASilwfSnFGA5FADKKKdsb0oA/Qr/gkrJFbf8FQv2ebi4YJGnxE8NlmY4UAajD1PQV/tm/8ACV+Fv+gla/8Af5P8a/wMFlMbB48gr0PcfT0qx/amqf8APxL/AN9GgD/fH/4Svwt/0ErX/v8AJ/jR/wAJX4W/6CVr/wB/k/xr/A4/tTVP+fiX/vo0p1LVV63Eo/4Ef8aAP98b/hK/C3/QStf+/wAn+Nadnf2GoQi40+aOeM9GjYMvHuOK/wACT+1NQ/5+Jf8Avo1/q1f8GjMs1x/wR20Z53Zz/wAJTro+Y5/5ax/jx6foKAP6dLm8tLKIz3kqQovVnIUDnHU+/FZP/CV+Fv8AoJWv/f5P8a/F3/g47kaH/gij8eZYm2kaVYYK9v8AibWQ4xj/ADxX+Oz/AGrqf/PzL/30f8aAP99y1vrK+hFxZSpNG2cMhDLxweRxxjH4Vbr+fD/g10mmn/4IkfCKaZy+Zdf+YnPA1u9/ljH+HSv6DC6jr0oAfX+PP/wcz/8AKcT47/8AX1on/pg02v8AYYr/AB5/+Dmf/lOJ8d/+vrRP/TBptAH4P0UUUAFf1gf8Gbv/AClv1L/sQNZ/9K7Cv5QdpFf1ff8ABm9x/wAFb9Sz/wBCBrP/AKV6fQB/qcV/iZf8FavDHiSf/gqH+0LNBp9y6P8AEXxIVZYnII/tGY8EDB49O1f7ZtZD6Xp0jmSSCMs3U7Rnr3oA/wAy7/gzA0TWdM/4Ke+N7jUbOa3jPw11FQ0kbKMnVdJIGSB2HFf6dFZ0Gn2lq++2gRD0yqgHHX+n+e2jQAV/GF/wez/8mC/Cj/sf1/8ATVe1/Z7X8YX/AAez/wDJgvwo/wCx/X/01XtAH+aJX+7t+yZx+yx8NB/1Kmjf+kMNf4RNf7u37J3/ACaz8NPbwro3/pDDQB/GL/wfE/8AJL/2df8AsKeI/wD0Tp1f54df6Hf/AAfD8/C79nYjoNU8R/8AonT/APCv88XB9KAEopcH0owfSgDf8K/8jTpv/X1D/wChrX++xX+BR4UU/wDCUacMf8vUP/oxa/316AP88X/g+I/5Kn+zv/2CvEn/AKO0+v4xP2TuP2pvhqf+pp0b/wBLoa/s7/4PiP8Akqf7O/8A2CvEn/o7T6/jD/ZP5/ak+GgHbxVo3/pdDQB/u7UUUUAFFFFAH+cD/wAHgP8Aykr8D/8AZMtN/wDTzrNfym1/Vl/weA/8pK/A/wD2TLTf/TzrNfym0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/0P4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr/OF/wCD3b/k6b4Hj/qVdR/9LhX+j1X+cL/we7f8nUfA/wD7FTUP/S4UAfyg/wDBPf8A5P5+B3/Y/wDhr/0621f7nFf4Xn7BF/YaP+3R8FtX1eeO1tLTx34cmmmmZUjjjTU7dmd2bAVVUZJPAFf7Yf8Aw1j+yz/0Urwr/wCDiy/+O0Afhr/wWP8A+Ddbwf8A8Fe/2ivDn7QPiP4p3ngaXw/4di8PrZW+kxX6yrFd3N15xke5g2n/AEnZtCkfLnPNfkd/xA7/AAr/AOjiNV/8Jy3/APk+v7Ov+Gs/2Vv+imeFP/BzY/8Ax6j/AIaz/ZW/6KZ4U/8ABzY//HqAP4xf+IHf4V/9HEar/wCE5b//ACfR/wAQO/wr/wCjiNV/8Jy3/wDk+v7Ov+Gs/wBlb/opnhT/AMHNj/8AHqP+Gs/2Vv8AopnhT/wc2P8A8eoA/la/Y4/4NBfh1+yF+1X8Pv2otN+OWo65ceAdesdcj0+TQYbdLk2col8oyrevsDYxuCHHYV/ZNXz/AP8ADWP7LP8A0Urwr/4OLL/47Sf8NZ/srf8ARTPCn/g5sf8A49QB/mC/8HeH/KZHW/8AsVdB/wDRL18gf8G3v/KbT4B/9hXUP/TTe19Mf8HYHjbwZ8Q/+CvGs+I/AOr2Wt6c/hjQ41urC4juISyQtuXzImZcrkZGeK+Z/wDg29/5TafAP/sK6h/6ab2gD/Y6r/Il/wCDqX/lOJ8Xf+vXw3/6YLCv9dqv8iX/AIOpf+U4nxd/69fDf/pgsKAMD/g15/5Ti/BT/uP/APph1Cv9fmv8gb/g15/5Ti/BT/uP/wDph1Cv9fmgD/H3/wCDnT/lN78bP+uui/8ApksK+IP+CW/7f+rf8Eyv2y/Dv7X+ieGofF1xoFtf2y6ZPctZpL9utZLYkzJHKV2eZuGE5xjpX2//AMHOn/Kb342f9ddF/wDTJYV+GnhPwZ4v8ea3H4Z8DaVd6zqUwYx2lhA9xOwRSzFY4lZiFUEnA4AoA/uV/wCI4n4qf9G7aV/4Uc//AMr69p0D/g3K8G/8FvdFt/8AgrH4o+Kt58PL/wCOqf8ACSz+G7XSY9Rh015f3RgS7e5t2mA8sfMYk+lfwuf8MnftTf8ARNPFX/gmvf8A4zX+tR/wRI+OHwV+FH/BJ/4GfDr4peL9E8NeINI8NxQX2l6rqFtZ3lrKJZCY5red0kjcAj5WUH2oA/BT/iB3+Ff/AEcRqv8A4Tlv/wDJ9H/EDv8ACv8A6OI1X/wnLf8A+T6/tl8G/Hf4H/EXWD4d+HvjLQ9d1BY2mNrp2oW11MI0wGfy4ZGbaCQCcYGRXq1AH+elrP8AwdD+Of8AglNq1z/wTL0H4O2PjWx/Z+lf4e2+v3GsyWMuqR+HT/ZyXb2qWkywGYQBzEJHC527m61nf8RxPxU/6N20r/wo5/8A5X1/LJ/wWG/5SuftJf8AZS/E/wD6c7ivhDwX8PfHvxH1RtD+HeiX+vXscZma3062lupVjUgFykKswUEgZxjkUAf3Ff8AEcT8VP8Ao3bSv/Cjn/8AlfX93H7KPxnuv2kv2YPh3+0Ld6cuky+OfDWla89kkpmW2bUbSO5MSyFU3hPM27igzjoK/wAQ3/hk79qb/omnir/wTXv/AMZr/Yk/4JvftEfs/wDgX/gnv8DvBfjbxz4f0fWNI8BeHbK+sb3U7W3uba5g02COWCaGSRXjkjdSrowDKRggUAeLf8Fzf+CtniH/AII+/s+eEfjd4e8EW/jmXxN4hGhtaXF89gsQ+yT3Pmh0hm3H9yF2lQOa/l+/4jifip/0btpX/hRz/wDyvr7p/wCDvnxDoH7TH7Enwz8K/s4X1v8AEDVNP8brd3Vn4bkTVZ4Lf+zbyPzZIrMyske9lXcQFyQOpFf57n/DJ37U3/RNPFX/AIJr3/4zQBwPxT8dv8Tfid4j+JU1uLSTxDqd3qbQKxYRG7meYoGIG4KXxkgdK89qzd2d3YXUljfRPBNC5jkjkUqyOpwyspwQQeCO1dp4H+FfxP8AidLcW/w18Oap4he0CtOumWc12Yg+QpcQo20Ng4zjOOKAOCor6A/4ZO/am/6Jp4q/8E17/wDGa8ElgmglaCZCjoSrKwwQR1BHbFAH98//AAY5f8hf9pD/AK5eF/56pX99fiv/AJFXU/8Ar1m/9ANfwKf8GOX/ACF/2kP+uXhf+eqV/fX4r/5FXU/+vWb/ANANAH+B1qv/ACErn/ro/wDOv6MP+CEH/BCHwr/wWR8LfEnxJ4j+JF34DPgK70y2jjttNjvxc/2glw5LF7iHZs8gAdc5r+c7VP8AkI3P/XV//Qq/0K/+DHb/AJJf+0V/2FPDf/onUKAF/wCIHf4V/wDRxGq/+E5b/wDyfR/xA7/Cv/o4jVf/AAnLf/5Pr+7K7vLPT7SW+v5UgggRpJJJCFREQZZmJwAAOp6CvB/+Gs/2Vv8AopnhT/wc2P8A8eoA/jF/4gd/hX/0cRqv/hOW/wD8n14x+0b/AMGZ/wAOPgR+z148+N1p8e9S1OTwZ4e1TXEtH8PQxLOdPtJLgRFxfNtD+Xt3bTj0r++nwP8AE/4a/E21nvvht4h0zxDBauI5pNMu4btI3IyFcwswU46A4r53/wCChP8AyYL8cf8AsQPEv/pquKAP8Miv6nv+CH3/AAbp+Dv+CvX7MPiL9oTxB8VL3wPLofiSbQBZW+kxXySLDaWtyJfMa5hKn/SNu3bj5a/lhr/Tr/4Mrf8AlGn8QP8Asot5/wCmrTKAPlH/AIgd/hX/ANHEar/4Tlv/APJ9H/EDv8K/+jiNV/8ACct//k+v7qNW1rR9A0u41zXbqGysrONpp7id1iiijQZZ3diFVVAySSABXiP/AA1n+yt/0Uzwp/4ObH/49QB/GL/xA7/Cv/o4jVf/AAnLf/5Pr5W/bi/4NBvh5+yB+x38S/2otO+Oeo67P4B8O32uJp8ugw26XJs4Wk8ppVvnKB8Y3bGI9K/0N/Bnj7wJ8R9HPiD4ea1Ya9YLI0JudOuIrqESKBuTfCzLuAIyM5GRX53f8Fq/+USH7Rv/AGT/AFz/ANJHoA/xRa/qT/4JQf8ABzb42/4JZfsi2f7J3h/4Q2HjK3s9TvdT/tKfWJbJ2N44cx+StpMMJjAO7mv5bK9Y8IfAX45fEHRl8R+AvBmua3p7O0YurDT7m5hLpjcvmRRsuVyMjPFAH9SX/BQz/g7A8fft/wD7Gnjn9j/WPgtp/hm28bW1vbPqcOty3T2/2e6huQwhazjD58kLy49a/kVr2TxJ+zp+0F4N0O48TeL/AAL4h0rTbMBp7u80y6ggiBYIC8kkSqo3ELyepArxugD+sX/gmX/wdO+O/wDgm5+xj4T/AGO9F+DWn+LLbwq18yanNrMto83229mvMGFbSULsMxQYc5xu9q/oM/4JRf8AB0547/4KSft3eDP2Ota+DVh4Tt/FSag76pBrUt08P2KwnvBiE2cQbd5IT74x1r/ON8Lfs9/HvxxocPibwV4I1/WNNuN3lXdjpt1cQPsYo22SONlO1gVODwRiv3t/4Nv/AIU/FH4G/wDBYX4V/E741+G9U8H+GtOi1oXWq63ZzafYwebo95FH5txcpHEm+RlRdzDLEAckUAf61lf48/8Awcz/APKcT47/APX1on/pg02v9Zf/AIaz/ZW/6KZ4U/8ABzY//Hq/yrP+Dhr4Q/Fj41f8Fi/jR8Tvg34X1bxb4a1W50hrLVtGsp7+xuRFothDIYbi3R4pAkkbo21jhlI6igD+duivXPFn7P8A8d/AOiSeJfHXgrXtF02Eqr3V9p1zbwIXO1Q0kkaqNxwBk89q8joA/ty/4J6f8Gknw/8A23/2K/hx+1lqvxu1Dw7P460lNTfTYtDhuEti7snlrK14hcDb94oPpX0/4y/4Jz6P/wAGm+jj/gqD8P8AxXN8a76/dfA//CPahaLocKpqwNy119qhlvG3R/YAoTyud/LDbz/TR/wQJ/5Q2/s9/wDYqw/+jpa/L/8A4PIv+USem/8AY/6N/wCkmoUAfkB/xHE/FT/o3bSv/Cjn/wDlfX91H7Hfx2vP2pf2Uvhv+0pfaYmjTePPDWma89gkpnS2bULZLgxLIVQuE37d2xS2Ogr/AAna/wBuf/gkZ/yi1/Z3/wCyc+G//TbBQB+iNFcZ41+Ivw++GulJrvxG13T/AA/YySCBLjUrmK0iaQqWCB5mVSxVSQoOcA+leY/8NZ/srf8ARTPCn/g5sf8A49QB9A1/GF/wez/8mC/Cj/sf1/8ATVe1/Zdpeq6Zrem2+s6LcRXdndxJNBPA4kilikXcjo65VlZcFSDgjpxX8aP/AAez/wDJgvwo/wCx/X/01XtAH+aJX+7r+yb/AMmsfDX/ALFXRf8A0hhr/CKr/b+/ZX/am/Zi0/8AZi+HNhf/ABG8LwTweF9Ijkjk1eyVkdLKEMrKZQQQeCO1AHxr/wAFpf8Agit4a/4LH+Gvh/4b8S+P7nwGPAVzqNzFJa6dHfm5/tBLdCpDzwbNn2cdM7s9q/Aj/iB3+Ff/AEcRqv8A4Tlv/wDJ9f2ef8NYfss/9FK8K/8Ag5sf/j1H/DWH7LP/AEUrwr/4ObH/AOPUAfxh/wDEDv8ACv8A6OI1X/wnLf8A+T6P+IHf4V/9HEar/wCE5b//ACfX9nX/AA1n+yt/0Uzwp/4ObH/49R/w1n+yt/0Uzwp/4ObH/wCPUAfxo6X/AMGQvwx0vU7bUk/aG1RzbSpIF/4RyAZ2EHH/AB/+1f3X18/f8NZ/srf9FM8Kf+Dmx/8Aj1L/AMNY/ss/9FK8K/8Ag4sv/jtAH8Iv/B8R/wAlT/Z3/wCwV4k/9HafX8Yn7Jv/ACdN8Nf+xp0X/wBLoa/r/wD+D0/4pfDH4n/E79n+b4a+I9L8QpZ6X4hWdtMu4bsRF5rDYHMLNt3YOM4zjiv5AP2Tf+Tpvhr/ANjTov8A6XQ0Af7utFFFABRRRQB/nA/8HgP/ACkr8D/9ky03/wBPOs1/KbX9WX/B4D/ykr8D/wDZMtN/9POs1/KbQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//0f4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr/OF/wCD3Xn9qf4IEdB4U1D/ANLhX+j1X4V/8FZv+CC37O3/AAV4+IvhL4kfGzxh4j8NXfg/Tp9NtY9DNoI5I55vOLSfaYJm3A8DaQKAP8eJW2EFTg8dKiwK/wBLr/iCZ/YI/wCir+P/APvrS/8A5Co/4gmf2CP+ir+P/wDvrS//AJCoA/zRsH1owfWv9Ln/AIgmf2CP+ir+P/8AvrS//kKj/iCZ/YI/6Kv4/wD++tL/APkKgD/NGwfWjB9a/wBLn/iCZ/YI/wCir+P/APvrS/8A5Co/4gmf2CP+ir+P/wDvrS//AJCoA/zRcClwfWv9Ln/iCZ/YI/6Kv4//AO+tL/8AkKj/AIgmf2CP+ir+P/8AvrS//kKgD/NJBXOa/br/AINvVI/4LafAQ/8AUV1D/wBNN7X9fn/EEz+wR/0Vfx//AN9aX/8AIVfWn7Cv/Bqx+x/+wT+1f4O/a3+HPxE8Y6xrXgu4mubSz1I6f9llaa2ltiJPJtY5MBZSRtYcigD+oiv8ib/g6kGf+C4fxcI/59fDf/pgsK/12a/md/4KHf8ABsF+yX/wUd/a38T/ALYHxT8feLtC1zxRHYRz2ekmwFrGLCyhsU2efaySfNHCrNuc8kgccUAfw0/8GvQx/wAFxfgrnt/b/wD6YNQr/X4r+ZL/AIJ+f8Guv7I3/BO/9rjwn+2D8MfiB4v1vXPCH237NZ6mdP8Assn22ynsX3+TaxyfKlwWG1hyB24r+m2gD/H3/wCDnL5v+C3vxsK/89dF/wDTHYV6l/wajD/jdj8OB6aV4h/9NNz/AI1/aB+37/wa2/sif8FCv2s/Fn7XnxM+IHjDRdb8XNatc2elnTxax/ZLSG0Xy/OtZJOUhBO5jzmvzN/aF/4JB/BP/g2q+F15/wAFcv2VfE2t+O/GngKSHTbPRvFZtjpcqa7INMmaUWENrOTHHcF0CyKNwGcjigD+6fmv8Yz/AIL5c/8ABY39oIH/AKGqbp2Hkxf57V+2/wDxGzft9f8ARKPh/wD986r/APJ1fpz8IP8Ag3g/Zk/4LV/DPR/+Cqnx78beJ/CnjD44QDxJquk6AbIaZaXEp8ox2oureebywIwf3kjHnrQB+Jn/AAZwqf8Ah7XqQHbwBrP6Xen4xX+pvX87/wDwS7/4Nxv2Xf8AglX+0rP+038HfHHinxDqtxot1ohtNZNkbYQ3ckMjP/o9vE24GFQOccniv6IKAP8AEm/4LDf8pXP2kv8Aspfif/053Ffub/wZhYP/AAVI8XDH/NOtS+n/ACEtM7fy9q/DL/gsN/ylc/aS/wCyl+J//TncV+53/BmB/wApSfF3/ZOtS/8ATjptAH+oVzX+H3/wVFbH/BSj9oBTjP8AwsXxP/6dLj/Pp6cV/uC1/h7f8FRx/wAbLP2gf+yi+J//AE6XFAH9Jn/Bk8ok/b6+KpxnHgBv/TpZf54r/S85r/NF/wCDJf8A5P5+K/8A2T9v/TpY1/pd0Af4RX7Vu3/hqP4lAjgeKtY9v+X2YduK/s7/AODHzn4o/tEDgf8AEq8Oe3/LfUPyx/hX8Yf7V/H7UnxLH/U1az/6XS1+g3/BJH/gsz8c/wDgj94h8b+Ivgj4X0HxNJ46t7G3u01wXRWJbF5XQxfZpocFvOYHdnoKAP8AZv5r/BM+K3HxP8Sf9hS89v8Als36dq/r3/4jZv2+v+iUfD//AL51X/5Or+OLxJrkviTxFf8AiO6RUk1C4luXVPuq0rlyB7AnFAH953/Bjl/yF/2kP+uXhf8Anqlf31+K/wDkVdT/AOvWb/0A1/Ap/wAGOX/IX/aQ/wCuXhf+eqV/fX4r/wCRV1P/AK9Zv/QDQB/gc6p/yEbn/rq//oVf6Ff/AAY7f8kv/aK/7Cnhv/0TqFf56mqf8hK5/wCur/zr/Qr/AODHb/kl/wC0V/2FPDf/AKJ1CgD+zb9q/P8Awy18S/UeFNZx2/5cZvT+lf4SGD61/vd/EjwNZfEv4da78NtUke3tNf06502WSLb5kcd1C0LMmQV3ANxkYr+P3/iCZ/YI/wCir+P/APvrS/8A5CoA89/4MjB/xi58bw3/AENWnjn2sjX9Xv8AwUJ/5MF+OP8A2IHiX/01XFfKf/BJn/gkF8Ff+CQ3w78W/Df4I+Jtb8S2ni/UYNSuZNcNsXjeCHyVSP7NDCoUjk5BNfVn/BQn/kwX44/9iB4l/wDTVcUAf4ZFf6dX/BlcQv8AwTU+IAP/AEUW8P4f2Vpv+Ff5itf0Af8ABKn/AIOGf2mv+CS/wG1r4AfBfwX4Y8SabrmuS67Lca0t4Z0mlt4LYxr9muIU2BbdTyuck80Af6cX/BXAqP8Aglt+0PjP/JOvEg/8ps46/wCenFf4j/PrX9Zf7Sv/AAd3/trftOfs9eOP2dPFnw18EWGl+OtDv9Bu7m0XUfPihv4Ht3eLzLtkDqr5XcrLkdK/kyoA/wBTf/gzgP8AxqU1MAf8z9rP/pHp+MCv2B/4LVsP+HSP7Ro/6p/rn/pI9f5sv/BLv/g43/ah/wCCVf7Nc/7Mnwd8D+FfEOlT6zda2bvWVvftImuooYmT/R7mFNgEK4+XPJ5r9V/hd/wcpftVf8Fa/iLon/BMb4z+BPCfhvwl8d7yLwTq+qaKL8ajaWmsN9mlmtPtFzNB5yK+U8yN0yOVNAH8ReK/1dv+DRPd/wAOb9F7f8VVrv8A6OTt+lfIn/EEz+wR/wBFX8f/APfWl/8AyFX56/tG/wDBUT4u/wDBr/8AEub/AIJU/sk6Bo/j/wAH6TBD4lTV/Fy3B1N7jWB5ssbfYJbWDy0KAJiLPqTQB/UD/wAHIGf+HJ3x6B6/2Xp//p3se1f45uK/uM+Cf/BeX9or/gvb8U9H/wCCRn7RnhDw34O8FfGmR9N1TWPDa3a6paJZI2po9t9rnng3NJaKh3xuNpPfBH6X/wDEEz+wR/0Vfx//AN9aX/8AIVAH6T/8GtwH/DkP4Qj/AKba/wAf9xu++nb+nanf8HSO3/hyL8XcdfO0AZH/AGGrEfh+Hb2r9Ov+Cev7DvgD/gnP+yb4Z/ZC+F2rahreh+F2vTb3mqGI3T/bbuW7ff5KRx/K8pUbUHAFH/BQr9h3wB/wUY/ZN8TfshfFDVtQ0PQ/FDWRuLzSzELqP7FdxXabPOSSP5nhVTlDxmgD/DjwfWv9hD/g2aBT/gh78CR3+za3/wCn7Ufyr8qP+IJn9gj/AKKv4/8A++tL/wDkKvzY+Of/AAXJ/aC/4N8/itq3/BH39mrwl4e8a+B/gy0dtpmteJhdnVbpdXhTWpTc/Yp7a3JSa/eNNkSfu1XOTliAf0Q/8HXQI/4In/EYAA/8TTw99f8AkK238uPwr/JJr+lb/go1/wAHOP7WP/BSn9lDXf2Rvit4B8I6FoevXFjcS3mkrfi6jaxuY7lAnn3UkeC0YBynSv5qaAP9nf8A4IFMB/wRu/Z7H/Uqw/8Ao6WvzA/4PIj/AMalNNH/AFP+jf8ApJqFfy0fsaf8HYH7ZH7Ff7Lvgr9lTwF8OvBeq6N4G01dNtLu/XUftEqIzMGl8q7RN3zY+VFFfPn/AAVE/wCDjf8Aah/4Kqfs1wfsyfGLwP4V8PaVb6za62LvRlvRc+daRTRKn+kXMqbCJjn5c8DmgD+eGv8Abn/4JGf8otf2d/8AsnPhv/02wV/iMV/tz/8ABI3j/glt+zv/ANk68N/+m2CgD8EP+D0nKf8ABMHwNnH/ACUrTh/5SdW/ziv8wnn1r/T4/wCD07/lGB4E/wCylad/6adWr/MFoA/3E/8AgmWHP/BNz9nzA6/DXwoevT/iT2vev5qP+D2UF/2BvhRt7eP1/L+y72v6XP8AgmR/yja/Z7/7Jp4T/wDTPa14b/wVe/4JPfBz/grh8HPDnwX+NPiPWvDVh4a1r+24J9ENsJnlFvLbbG+0QzLs2yk8AHIHNAH+K1ipiQc5r/S1/wCIJn9gj/oq/j//AL60v/5Co/4gmf2CP+ir+P8A/vrS/wD5CoA/zRefb9KOfb9K/wBLr/iCZ/YI/wCir+P/APvrS/8A5Co/4gmf2CP+ir+P/wDvrS//AJCoA/zRsH1owfWv9Ln/AIgmf2CP+ir+P/8AvrS//kKj/iCZ/YI/6Kv4/wD++tL/APkKgD/NGwfWkwK/0uv+IJn9gj/oq/j/AP760v8A+QqP+IJn9gj/AKKv4/8A++tL/wDkKgD/ADSsj7ufpXv37JykftS/DRj0PirRf/S6Gv8AQ3/4gmf2CP8Aoq/j/wD760v/AOQq7L4cf8GaX7DPw0+IegfEbSfih47nu9A1K11KKOVtL8t3tJlmRW22QO0lADg0Af2FUUUUAFFFFAH+cD/weA/8pK/A/wD2TLTf/TzrNfym1/Vl/wAHgP8Aykr8D/8AZMtN/wDTzrNfym0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//S/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACiimb1oAy9c1/Q/C+h3nibxLeQadpunQSXN3dXLrDBBBCpeSSWRyFREUFmZiAAMnivjf8A4ea/8E3P+jg/hr/4Vmj/APyVWt/wUI2/8MDfHADH/IgeJcD/ALhdyK/w0sj0oA/3F/8Ah5r/AME3P+jg/hr/AOFZo/8A8lUf8PNf+Cbn/Rwfw1/8KzR//kqv8OjI9KdtPpQB/uK/8PNf+Cbn/Rwfw1/8KzR//kqj/h5r/wAE3P8Ao4P4a/8AhWaP/wDJVf4dP+e1H+e1AH+4t/w81/4Juf8ARwfw1/8ACs0f/wCSqP8Ah5r/AME3P+jg/hr/AOFZo/8A8lV/h08jtSZHpQB/uL/8PNf+Cbn/AEcH8Nf/AArNH/8Akqj/AIea/wDBNz/o4P4a/wDhWaP/APJVf4dQUngCl2n06fSgD/cU/wCHmv8AwTc/6OD+Gv8A4Vmj/wDyVX1F8Nfin8MfjP4NtfiL8HvEel+LPD98XFtqejXcN/ZzGJzG4jnt2eNtjqVbDcMCDyMV/gjZHpX+ut/wavLn/gh78Iscj7V4k/8AT9f9P8igD+iCim71p1ABX84P/B17/wAoTfiP/wBhXw7/AOna1r+j6v5v/wDg67dW/wCCJ3xHC9tU8On8P7WtaAP8kev9nn/ggT/yht/Z7/7FWH/0dLX+MPiv9nb/AIIEkf8ADm79nz/sVYf/AEdLQB+wNFFFAH+JN/wWG/5SuftJf9lL8T/+nO4r9e/+DRz44/BT9n//AIKSeKfGfx48YaH4J0efwDqFrHfa9qFtpts07ahpzLEs11JGhcqrEKDkhTgcGvyF/wCCwyn/AIet/tJHt/wsvxP/AOnO4r85vMAAK9f8OlAH+4l/w81/4Juf9HB/DX/wrNH/APkqv8b3/gpF4i8P+M/+ChXxz8W+D7631XStT8e+IrqzvLOVJ7e4gl1Kd45YpYyUeN0IZWUkEcjivirI9Kl3Jjg9sdKAP7Nv+DJf/k/n4r/9k/b/ANOljX+l3X+aJ/wZMf8AJ/PxX/7J+3/p0sa/0u6AP8Vv9p7/AIJu/wDBRDW/2lPiFrOjfAX4i3dnd+JdWlgnh8L6s8Uscl7KyMjrbFWVgQQRwR0r4i+Mf7LX7Tf7O1tYXn7QPw58T+BYtUZ0sn8Q6ReaYtw0QBcQm6iiEhQMu4LnGRmv93hc5A7V/CV/wfB8fDD9ncEc/wBqeIz9MQaf0H+elAH+eLRRTtrelAH99X/Bjl/yF/2kP+uXhf8Anqlf31+K/wDkVdT/AOvWb/0A1/Ap/wAGOXGrftIZ4/deFv56pX99Pitl/wCEV1Mf9Ok3/oBoA/wPNV/5CVz/ANdH/nX92n/Bmz+1H+zL+zr8N/j1aftBfEXwx4Fl1XUvD72SeIdXstLa5WKG/wDMMIu5YvMCbl3bc4yK/hL1X/kJXH/XV/51TLLggHg+3TFAH+4n/wAPNf8Agm5/0cH8Nf8AwrNH/wDkqj/h5r/wTc/6OD+Gv/hWaP8A/JVf4dGR6UZHpQB/uL/8PNf+Cbn/AEcH8Nf/AArNH/8AkqvlH9uz/go1/wAE9fFH7EHxk8NeGfjv8O9R1HUfA/iG1tLW28UaTLNPPLplwkcUUaXJZ3ZsKqqCSeAK/wAZnbx2/Sn7lXhcY/z9KAK9fRfwj/Y//a0/aA8Pz+LPgN8LvFvjbSrWc2k15oGiX2pW8c4VXMTS2sMiK4RlbaTnBBxgivnXFf6dH/Blocf8E1fiABjH/Cxbw/8AlK00c8fl+XagD/P2/wCHZH/BST/o3v4lf+EnrH/yLR/w7I/4KSf9G9/Er/wk9Y/+Ra/3F8UYoA/wVvix8E/jL8BfFC+B/jn4S1nwXrTQJdDT9dsLjTrowSEqkvk3KRvsYqQrbcHBx0r7w/4Ip/8AKW/9nL/soGh/+laV+wf/AAeOJj/grXpw64+H+jnp0/0vUP8APtX4+/8ABFQY/wCCt/7OQP8A0UDQ/wD0rjoA/wBrmv8AMe/4OnP2Kf2yPjp/wVk1jx98EvhL4y8YaFJ4Z0SJdR0TQdQ1C0MkcTB0E9tA8e5Dwwzkd6/04ahCtj6f5/lQB/k8/wDBv5+wd+3H8KP+CwnwR+IXxS+DPjrw1oGmanfPd6lqnh3UrOzt1bS7xFMs81ukaAsQo3MOSB1r/WMqrnkbj0OB/kf54q1QB8sfEj9uf9ib4NeMLr4efF74w+CPCuv2AQ3Omax4g02xvIfMQSJ5lvPOkibkIZcqMqQRxiuH/wCHmv8AwTc/6OD+Gv8A4Vmj/wDyVX+Xv/wdHFR/wW8+L4YYIh0DGP8AsCWPX8OPwA6V/PkAT0FAH+4r/wAPNf8Agm5/0cH8Nf8AwrNH/wDkqv8AM9/4LwfstftN/td/8FYPi5+0V+yd8OfE/wAT/h94luNKbR/E/hLSL3WtG1BbfR7G1mNpf2EU1tOIp4ZIX8uRtskbocMpA/mr/wA9q/2D/wDg2bOP+CHnwJ2Drba2Mcf9B/Uh6dv889QD/KO+Jv7D/wC2l8FPCE/xB+Mnwg8a+EtAtGRJtS1nw/qNhZxNKwSMPPcQRxqWYhVBYZPA5r5er/W4/wCDrjI/4In/ABGPQ/2r4exjPbVrb+g/Cv8AJHoA+t/BH7AX7dvxM8JWPj74b/BTx54g0LVI/Os9R03w5qd3aXEfTfDPDbtG68dVJFdT/wAOyP8AgpJ/0b38Sv8Awk9Y/wDkWv8AWU/4IFY/4c4fs9njP/CKwj/yLL0/IcV+wG5egNAH+HX/AMOyP+Ckn/RvfxK/8JPWP/kWv9WT/gm/+3H+xT8EP+CfvwU+Dnxo+MHgnwh4u8LeCtD0rWdD1rxBpun6jp1/aWMUNxaXdpcTxzW88MilJYpEV0YFWAIxX7Z4r/Ee/wCCtp/42i/tE8c/8LF8SDPH/QSnGO1AH91n/B0p8Tfht/wUC/YF8I/B79gzxDpnxt8W6d46stXu9E8A3cPiTUYNPi03UYHvJbTS2uJktklmijaZkEYeRFJyyg/wO/8ADsj/AIKSf9G9/Er/AMJPWP8A5Fr+h/8A4Mus/wDD0Hxzu/6JrqP/AKdtJ/w/z2/0+MUAfG3/AATr8P694P8A+CffwK8JeLbG40vVdL+Hnhi0vLK7iaC4t54NKto5YpYnCvHJG4KujAFSMECvsqqpJD5yOOgz+H5D6VaoAK+LdT/4KR/8E7dF1K40XWPj38ObS8tJHhngm8U6RHJFJGdro6NcgqyngggEHivtKv8ACO/aw2/8NSfEvH/Q1ax6f8/s1AH+0l/w81/4Juf9HB/DX/wrNH/+SqB/wU0/4JukhV/aC+GxJwMDxXo/fp/y9V/h1AE9BV/SiBqdsR2lT+dAH+/BFNFPGs0LBkYAqR0Ixxipa5rwouPCumY/59YOOmBsWuloAKKbuFOoA8I+MX7Uv7Mn7O9xYWf7QHxF8MeBZdUV2sk8Q6vZaW1wsW0SGEXcsXmBNy7tucZGeoryTTP+Ckf/AATt1rUrfRdG+Pfw5u7y7kSGCCHxTpDySySHaiIi3JLMx4UAZJ4FfxKf8Hwhz8Uf2dwP+gV4jGMdMT2H+f8AIr+Mv9k/b/w1J8NMjp4q0f0/5/Yf89sUAf7uNFFFABRRRQB/nA/8HgP/ACkr8D/9ky03/wBPOs1/KbX9WX/B4D/ykr8D/wDZMtN/9POs1/KbQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//0/4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr+S7/g4o/wCC6/7Wn/BI740fDr4cfs5+H/CusWXi7RbrUrt/EFreTyJLDc+SoiNreWqhSvXcpOe9f1o1/nC/8Hu3/J0/wPP/AFKmof8ApcKAPjf4x/8AB33/AMFIPjd8IvFXwY8U+Dfh5b6X4u0e+0W7ktdP1RJ0gv7d7aVoi2qOokCuSpZWUEcqa/lJrb8O+GvEHi7xBYeE/CtlNqOp6pcRWlnaWyGSaeeZgkUUaLks7sQqqBkngV96f8Ojv+CpP/Ru/wARf/Cb1H/4xQB+eFfU/wCxP8GPCn7SH7Y3wo/Z68aTXNro3jnxdougX81myJcx22o3sVrK0LSI6CQJIdhZGUEcqa9n/wCHR/8AwVJ/6N3+Iv8A4Tepf/GK+3v+CaH/AAS+/wCCj/gH/gop8BvHXjf4EePNI0XR/iB4bvb6+u9Av4be2trfU7d5ppZHhCpHGg3MxIAXnpQB/Yd/xBY/8EwP+h7+Jf8A4MdJ/wDlTR/xBY/8EwP+h7+Jf/gx0n/5U1/X9RQB/Bz/AMFC/wDg03/4J5/snfsNfFf9pj4e+MPH13rngXwxqWt2EF/faY9rJPZwNJGkyxabE5jyACFdW96/zza/2uv+C1f/ACiQ/aN/7J/rn/pI9f4otAH9t3/BCr/g2+/Yl/4Kc/sDWH7U3x18UeM9K1671vUtNa30O7sIbQRWbosZC3FhcPu55+fHtXu3/BWr/g1t/YK/YQ/4J3/Ez9rX4S+LvHWoeIvBllaXFnb6tfadLZu017b2rCVIdOgkIEcpxtdeQO3FfbX/AAa5ft+/sOfs6/8ABKTSPht8e/i94P8ABniGLxLrNw2m6zrNnZXQimkQxv5M0qvtYD5Tjmvqf/gvr/wUh/4J+/Gj/gkL8a/hh8IfjV4J8T+I9W0yxjstM0vXLG6u7hk1OzkZYoYpWdiEUsQB0BPQUAf5TVf67X/Bq1/yg7+EX/X14k/9P1/X+RLX+u1/watf8oO/hF/19eJP/T9f0AfbX/BZL9tD4o/8E8/+Cc3xB/a9+DthpmpeI/Cf9l/ZLfV45ZbN/tup2lnJ5qQSwSHEczFdrr8wBORxX8I//Eab/wAFQv8AoR/hp/4LdW/+W1f1/f8AB0P/AMoOfjV/3L//AKftPr/IFoA/r8/4jTf+CoX/AEI/w0/8Furf/Lavo/8AZR/4K4ftGf8AByL8btN/4JMftt6N4d8L/Dvx1Fcajfah4Mt7qz1iOTQ4X1O3EM1/c39uqtNAiSBrYkxkhSp+av4dK/o9/wCDUL/lNn8OP+wT4i/9NNzQB/V7/wAQWP8AwTA/6Hv4l/8Agx0n/wCVNfjB8fP+Dg79sf8A4IwfGTxB/wAEs/2YvDnhDXPAHwSuz4c0S+8S2l7carPaxASh7uW0vbWBpcyYzHBGvH3a/wBJ2v8AJh/4LZf8E1P+ChfxZ/4KufHL4lfC/wCCHjjxD4e1fxLLcWOpadoV9cWlxEY4wHimjhKOvynlTQB9Rf8AEab/AMFQv+hH+Gn/AILdW/8AltR/xGm/8FQv+hH+Gn/gt1b/AOW1fgj/AMOj/wDgqT/0bv8AEX/wm9S/+MUf8Oj/APgqR/0bx8RP/Cb1H/4xQB8xftH/AB38U/tP/tAeNv2kPHkFraa5471u/wBfv4bBXjtkudQne4lWFJHkdYwzkKGdiB3NeHV1HjLwT4x+HXi3UvAPj7S7rRdc0a6lsr+wvYmguba5gYpLDLE4DI6MCrKwBBrl6ACiiigD+zz/AIMmf+T+fiv/ANiAf/TrY1/peV/mh/8ABkx/yfz8V/8AsQD/AOnWxr/S8oA/zU/jd/weJf8ABSr4a/Gfxf8ADvRPBXw5ls9A1rUNOt3m0/VTI0NpcPCm8rqiqW2rzhVGe1fiZ/wVQ/4LgftUf8FddB8GeHf2j9C8MaNB4GuL24sD4etry3aRr9IUkE32q7usgCFdu3bjJzmsb9pr/glN/wAFNPEH7SHxA1/Qv2f/AIg3dje+JNWnt54fDuoPHLFJeSsjowhwyspBBHXtXhv/AA6P/wCCpP8A0bv8Rf8Awm9S/wDjFAH541/po+B/+DM7/gmX4l8F6R4hvvG/xISa/soLmQR6hpIG6WNXIGdKPGTX8Hv/AA6O/wCCpP8A0bv8Rf8Awm9R/wDjFf61Hw+/4Kuf8EyPD/gPQ9A1z9oD4fWd7Y6fbW9xby+ItPSSKWOJVdHUzAqykYII4PFAH8o37cVhF/waGx+G9R/4JxE+MpPjubqLXv8AhYX+ni3Hh4RG1+xf2X/Zezf/AGhL5vm+bnCbdu07vzy1H/g8+/4Kdalp8+nTeCPhsI7iNo2xp2rZAcEcf8TXtX0h/wAHiv7Xf7K/7U2nfAOP9mv4i+HPHp0STxEdQGgalbah9lFwNOEPnfZ3fZv8t9u7Gdpx0r+H6gCxPN9ouJJ24MhJ/M1XoooAKK1NH0TV/EGq2uhaHbSXd7eypBbwQqXklkkIVERRyzMSAABzX31/w6P/AOCpP/Ru/wARf/Cb1L/4xQB+4X/Bux/wQn/ZO/4K4/Bn4i/Eb9orxF4q0a98IazaabaJ4fubOCJ4prbzm80XNndEkEYG0qMdq/oq/wCILH/gmB/0PfxL/wDBjpP/AMqa+XP+DXTxf4V/4Jf/AAG+KXgH/go9qNt8Cdb8U69Zaho9h48kXQLi/tIbXypJ7aK/MLSxJIQjOgKg8V/Uj/w9y/4Jaf8ARxHw6/8ACk03/wCP0Afgj/xBY/8ABMD/AKHv4l/+DHSf/lTX5h/tp/ti/Ev/AINQPiXp/wCwN/wT3stO8X+EPGmnJ45vLvx7HJfahHqF1LJpzxRSaZLpsQt/K0+IhDEzhy534IVf7Kv+HuX/AAS0/wCjiPh1/wCFJpv/AMfr/O7/AODt/wDaN+AP7Tf/AAUG8EeNv2dfGmieOdHtPAdpZz3uhX0F/BHcLqOoSGJ5IGdVcI6NtJzhgehFAHrH/Eab/wAFQv8AoR/hp/4LdW/+W1H/ABGm/wDBUL/oR/hp/wCC3Vv/AJbV/IHRQB+hn/BSr/gpH8av+CpX7RMP7THx+0vRdJ12DSLbRRBoUM8FqYLWSaSNitxPcPvzM2479vA+Wvm/9mH9obxh+yf+0T4K/aX+HdtZ3eueBdXtNasIL9JHtZJ7OQSRrMsTxOUyMEK6n3rwOur8D+BPGnxM8YaZ8Pvh3pV3rmu6zcR2dhp9hC09zczykLHFDFGCzuxIAVRk0Af1o/8AEab/AMFQv+hH+Gn/AILdW/8AltR/xGm/8FQv+hH+Gn/gt1b/AOW1fgj/AMOj/wDgqT/0bv8AEX/wm9S/+MUf8Oj/APgqT/0bv8Rf/Cb1L/4xQB/YJ/wSV/4Okf2+P27f+CiHwy/ZJ+LXhPwJp/h3xne3VteXGk2OoxXkaw2VxdKYmm1GaMHdEAdyNwT35r++av8AKZ/4IE/8E3v+CgPwX/4K9fBT4n/F34K+NvDHhzSdSvpL3U9U0O9tbS3RtLu41Ms0sSogLsqjJHJAr/VmoA/yFf8Ag6S/5TffF/8A65aD/wCmSyr49/4I0fsUfC3/AIKJ/wDBRXwJ+yP8Zb/U9M8O+J01M3NxpEkUV4n2PTri7j8pp4pox+8iXdujb5c96/Yr/g46/wCCd37enx3/AOCwfxT+KHwV+DXjPxZ4b1GLRRa6ppOiXt3aTeTo9nFJ5c0MTI2x1Ktg8EEdq85/4IOfsnftPfsIf8FSfhz+0/8Atq/D7xD8J/hx4cj1ZdV8T+LdOuNI0myN1pd1awC4vLtI4YvNnljiTcw3OyqOSBQB/TV/xBY/8EwP+h7+Jf8A4MdJ/wDlTX48/tNf8Fvf2qf+CAPxx13/AIJE/sfaD4X8RfDn4ONBbaPqPiy2vLrWZ11aCPWZjdzWV3ZWzFZ7+VI/Lto8RhAckFm/t0/4e5f8Es/+jifhz/4Umm//AB+v84b/AILh/se/tXftv/8ABUz4r/tR/scfDfxL8Uvht4rn0uTRfFHhXTLnVtI1BbXSbKznNre2kckEwiuIZYX2MdsiMpwVIoA84/4KC/8ABy9+3J/wUg/Ze1r9kz42eF/BWl+HdduLK4uLjRbK/hvAbG4S6iCNcX9xGAXjAOUPy8DB5r+devsP4uf8E9v27PgD4Gufib8cPg74x8IeHbNo0n1PV9FvLO0iaVxHGHmmiVFLuQqgnk8CvjygD+mz9kT/AIOrP+Cgn7GH7NPg79ln4YeEvAd/4f8ABOnrp1jPqVjqUl08SsxBmaLUooy3zfwoo9q/pG/4IF/8HE/7aP8AwVM/blu/2aPj94a8HaTocHhe/wBaWfQrO+guvPtZ7WNE3XF/cR+WRM2RszwPmr+Cj4e/8E1P+Chfxa8E6d8Sfhf8EPHHiHw9q8QnsdS07Qr64tLiI5G+KaOEo6/KeVOK/o4/4Ns/gd8Zf+Cbn/BQ2+/aF/4KCeFdV+CfgOXwjqWkJ4g8bWkuhaY1/c3FpJBai6vlii86RIZGSPduIRiBhTQB/py1/LL+0V/waS/8E7v2l/j14z/aH8ceMfiBa61441q91y+hsr/TEtop7+Z55UhR9MdxGGchQzsQByTX7Ff8Pcv+CWn/AEcR8Ov/AApNN/8Aj9fdXg/xn4R+IXhPTfHngTU7XWdE1i2jvLG/spVntri3mUPHLFKhKOjqQVZTgjpQB+Iv/BMb/g3v/Y6/4JSfHfVf2hP2e/Efi7WNZ1fQ5vD8sPiC7sZ7ZbWe5t7pmRLaxtnEge2TB3lcbvlyQV/eCvF/jh+0b8Af2ZvCtv45/aJ8aaL4G0W6uVsob7Xb2CwtnuXRpFhWWdkQuUjdguc7VJ6Cvlf/AIe5f8Es/wDo4n4c/wDhSab/APH6AP4oP2wf+Du3/go58AP2tvil8B/B/gz4eXGk+CvF+t6BZS3en6o9xJbabfzWsLTNHqaIZDHEN5VFUnoqjivnL/iNN/4Khf8AQj/DT/wW6t/8tq/Lj9uP/gnB/wAFAfjf+2v8X/jT8G/gr428U+EPF/jbX9b0PWtK0O+u7DUdM1DUp7izvLS4iiaOa3uIXSSKVCUdGDKcEV+dfxz/AGJP2w/2Y/D9p4s/aM+F/ijwLpl/cfZLa613SrrT4ZZ9hfykeeNAz7FZto5wCegoA/pb/wCI03/gqF/0I/w0/wDBbq3/AMtq/k6+IXjjUviR481v4ia2kUV7r9/c6jcRwhhEst1K0rhAxZgu5sAEk471xFffukf8Epv+Cmmv6Ra6/of7P/xBu7G+hS4t7iHw7qDxyxSKGR0ZYcFWUgqR1HSgD9Xf+Dc3/gjr+zT/AMFdvGfxU8O/tF614j0aDwNZaTc2B8PXFrbtI1/JdJKJvtVrcggCBdu3bjnOa/qltv8Agy4/4Jh208dwvjj4k5jYH/kI6T2P/YJr5N/4M8P2PP2r/wBlr4kfHa+/aT+G3iXwFDrGmeH47F9e0y509bhoZb4yLEbiNN5QMu4L0yK/uroAz9OsI9N0+DTYclLeNIwT1wgAGa0KKKAMfW72bTNFvNQgALwQySKD0yi5AP5V/mN/8Rpn/BT/AP6Eb4af+C3Vf/ltX+m34r/5FXU/+vWb/wBANf4FFAH+gX+w74K0z/g7s0zxD8Q/+CjUkvg29+B0ttp2hp8PCunxTxa8sktz9sGqDVGco1jEIvLaMAFtwbI2/o/8Pf8Agzq/4JsfDbx9ofxD0Txv8RpbzQNQttSt0m1DSzE8trIssYkC6Wrbdy4O1lOO9fkD/wAGd/7Yn7J/7LXw5+O9j+0n8SfDXgKbWNS0B7BNe1O109rlYYr4SGIXDpvCFl3bemRX9pmkf8FXP+CZGv6ta6Bof7QHw+u76+lSC3t4fEOnvJLJIwRERBNksxICgDntQB+gFFFFABRRRQB/nA/8HgP/ACkr8D/9ky03/wBPOs1/KbX9WX/B4D/ykr8D/wDZMtN/9POs1/KbQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//1P4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr/OD/wCD3b/k6X4H+3hTUP8A0uFf6Plfjf8A8FMf+CHf7Gv/AAVd8deGPiF+09deJLe/8JWM2nWQ0O9gtI2hnk81vMWW2nLHd0wVxQB/kvf8E+G2/t8fA8nnHj/w1j8NUtv89vav9y/5vQV/IL8Uv+DXb/gm1+xd8M/En7YvwgvvGkniv4TaXd+MtETUNUtprNtR0GF9QtFuIkso2kh86BA6CRSy5AZetfzgf8Rkf/BXD/oG/D//AME13/8ALCgD/U3BB6VGAd2Fx7+tfz8/8G53/BTX9o//AIKp/sgeMfjj+0zDo0Gs6F4wn0G2GiWslrAbWLT7G5BdJZpiX33D85Axjjiv1f8A25PjF4w/Z0/Yt+Lfx+8Apbvrngjwfreu6et2hktzc6dYS3EIlRWUshdBuUMpI7igD6vor/LE/wCIyP8A4K4f9A34f/8Agmu//lhR/wARkf8AwVw/6Bvw/wD/AATXf/ywoA/v8/4LV/8AKJD9o3/sn+uf+kj1/ijV/Sj+0l/wdSf8FMv2p/gD4w/Zv+Jlh4Kj8PeN9IudF1FrLSrmG4FvdxmOQxO164V9p4JUgelfzXUATnH4fTH+f6U7cSCR071/cf8A8EE/+Ddj9gT/AIKUf8E+NP8A2nf2hbvxXb+I7rW9T0110jUbe2tvKs3RYyI5LSY555+avfP+Cvf/AAbHf8E5v2Gv+CcPxP8A2q/gvfeMpvE3g6ytLiwTUtTtp7TfNf29s3mRLZRlh5cp4DLyBQB/n11/rsf8GrbKv/BDz4RBuP8ASvEn/p+v6/yJ6/oH/YY/4OTf+ChP/BPb9mPw/wDsmfAay8Iy+FvDb3klo+q6bcXF1m9upbyUPJHdxK37yZwvyDC4HbNAH9+X/B0L83/BDr40qvJ/4p/p/wBh7T6/yBq/oQ/bd/4OWP8Agof+35+zJ4k/ZN+OVl4Ph8LeKfsn2xtL0y4t7ofYrqG8i8uR7uVV/eQIDlD8uR71/PfQA7aegr+jz/g1DBX/AILZfDgnj/iVeIh/5Sbmv25/4Iy/8G0P/BOz9vn/AIJt/Dn9q/4333jCHxR4qTUTeLpmpW1vaD7JqNzaReXE9nKV/dwpnLHnPtX9Av7B3/Bt/wD8E/P+Cdf7Smj/ALVXwAvfF0vifRILu3t01bUre4tdl7A9tLvjjtIiT5ch2/MMEUAfv5UW08YHTpUtFADcGl5paKAP8Sn/AILBMF/4Kt/tI8f81K8Tj/yp3H0r83a/R/8A4LDf8pXP2kv+yl+J/wD053FfnBQAUUUUAf2e/wDBkv8A8n8/Ff8A7J+3/p0sa/0u6/zRP+DJf/k/n4r/APZP2/8ATpY1/pd0AQBGzxwP8/59qfkZxUlfzEf8HJ//AAV2/as/4JN+C/hNr/7L9toNxN42vdXt9QGuWkt0oSxitWi8oQzwbTmZs53dvSgD+nX5vQV/go/Fcn/haHiXHbVLz1/57N/hX9Ov/EZH/wAFcP8AoG/D/wD8E13/APLCv6aND/4NEf8AglZ8RdGtPiF4g1Dx2t9rsCajcLFq9osYlulErhFNgSFBY454oA/y4A655/Soa/1O/wDiDb/4JH/9BHx//wCDm0/+V9H/ABBt/wDBI/8A6CPj/wD8HNp/8r6AP8sSl2nFf6nX/EG3/wAEj/8AoI+P/wDwc2n/AMr6/k7/AODk/wD4JEfsqf8ABJvxr8JvD/7L9zr1xD42stXuNQ/ty7huiGsZbVYvK8mCDaMTNnO7t6UAfgb+yeQf2pfhqo6f8JTo3/pdD6Y/+tX+7jg1/hGfsncftTfDU/8AU06N/wCl0Nf7utAH+cN/we5Nt/al+COeh8Kaj/6XLX8QWa/t6/4Pdv8Ak6X4H/8AYqah/wClwr+IOgB2amfqNvTt9Kr1/Z3/AMG6n/BBH9h//gqb+x34q+Ov7St54ng1rRvFs+iQLot/BawfZorKzuFLRyWsxL75353YxgY4oA/jG2kcelNr/SH/AG8f+DUn/gmJ+zb+xP8AFn9oL4fX/jZ9e8EeEtY1vThd6rayW5ubG0lniEsa2SFk3qMqGU471/m8UALg1+oP/BFhgP8AgrZ+zmzDgeP9CPTp/pcf4D+lf0Wf8G+X/Bvn+wl/wU9/YPvP2jf2jrvxTB4gg8U6joyro2oQWtt9ntoLSSM+XJaynfmZwTux04r9aP2hP+Ddj9gb/gld8DvFn/BSH9me88Vz/EH4IaXceMvDsetajb3WnNqOkxtcW4u4IrSB5Id6jeiSoSOAwoA/sgwabuUV/lkf8Rkf/BXD/oG/D/8A8E13/wDLCv7lv+CCX7fXxz/4KUf8E+tO/ae/aGi0yDxHda3qenOukW721t5VnIqxkRvLMc4PPzUAfs6IjxkA4qxRRQBW25wAMYP+f0r+fX/g6QVf+HIvxe9p9AP/AJW7I/5/yR+F/wDwWs/4OUf+Chv/AAT7/wCCkPj39k74E2XhCTwx4YTSzaNqemXFxcn7Zpttdyb5I7yJTiSU7cIOK+TP2Mv+CwX7V3/BwN+0ZoH/AASi/bst9BtPhh8ShcyatL4Ws5dP1VTo9tJqlt5FzPPdRpm4tIw+YW3JuUbScgA/idr/AGE/+DZwf8aPPgRt6G11v/0/ajxivif/AIg2/wDgkf8A9BHx/wD+Dm0/+V9fgv8Atf8A/Baf9sD/AIINftG+Jf8Agk5+xHa+Hbv4XfCGS2t9Dl8TWUt/qrJqttDrFx9puYJ7WOQi5vZQm2Fdse1eSNxAP6Zf+Drg/wDGk/4jdf8AkKeHcev/ACFrb6fSv8kev7cv2Jf+Cr37T3/BxP8AtDaT/wAEp/2+YNDsvhj44gutQ1GTwnaS6dqgl0SF9StvKuLie7jVTPAm8GFsrkDHWv3J/wCINv8A4JH/APQR8f8A/g5tP/lfQB+nX/BAoZ/4I4fs98dPCsP/AKOlFfmD/wAHjo2/8Ek9N39P+E/0bH/gJf8A+f6Cv6OP2U/2Zvh5+xz+zv4R/Zj+Ej3cnhvwVYrp2ntfyLNcmFSzDzZESMMct2Va/nJ/4PJP+USOm/8AY/6N/wCkmoUAf5ZGa/24f+CSKuf+CW37O57/APCufDeO3/MNt/8AD8q/xHK/26P+CR3/ACi2/Z2x/wBE68N/+m2CgD8Ef+D0n5f+CYXgUv8A9FK07oP+oTqv5fh9O9f5gtf6fX/B6d/yjA8Cf9lK07/006tX+YLQB/uJf8Ey4/8AjW5+z4Rjn4a+FP8A0zWg9q/mn/4PYcp+wP8ACncTg+P1/wDTXe/5/Sv6Xv8AgmR/yja/Z7/7Jp4T/wDTPa1/NF/wez/8mC/Cj/sf1/8ATVe0Af5olf7uH7J4A/Za+GgGP+RV0b2/5cYf8+1f4R9f1KeBP+Du7/gqn8OfAui/D3w9p/gRrDQrG2062MukXbSGG1iWGPewvlBO1Rn5RQB/qu7G64HWpsj8q/yxf+IyP/grh/0Dfh//AOCa7/8AlhVyy/4PHP8AgrZcXcVvJp3gDa7qv/IGu+/H/P8A0Af6l2RS1j6DeT6jolnqFwAJJ4I5Gx0yygmtigDnvFf/ACKup/8AXrN/6Aa/wKK/31/Ff/Iq6n/16zf+gGv8CigCcSDnnGRjj/PSvf8A9k9s/tSfDVc/8zVo3/pdD6Y/+tXzzX0H+ydx+1N8NT/1NOjf+l0NAH+7rRRRQAUUUUAf5wP/AAeA/wDKSvwP/wBky03/ANPOs1/KbX9WX/B4D/ykr8D/APZMtN/9POs1/KbQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//V/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACvif8Aam/4KOfsOfsS69pXhf8Aau+JWj+BtQ1u3e6sINSd1aeGNtjOmxG4DcV9sV/nC/8AB7ngftS/A8Ht4V1DA/7fh6UAf1BftTf8FmP+CXP7QX7MXxG+AvwX+Nfh3xF4x8b+GNX0DQtKtJJTPfalqVlLa2drEDGB5k00iRoCQMkV/m+/8OCP+CyX/Rvfir/vzD/8dr5I/wCCfDqP29/ggFx83j/w0Me39qW36V/uXbB/dFAH8SX/AAbyfG/4Tf8ABFj9knxf+zf/AMFUddtfgh468SeL5/EumaL4jJiubnSZrCys47xFiEg8pri0niByPmjbiv0h/wCCjv8AwW2/4JRfFf8A4J9fHH4Y/Dr45eG9W1/xF4C8RaZptjBJKZbm7utNmighQGIDc7sqr0r+XL/g9Ywn/BSP4bA/9E2sz/5WNV/z+Ffx2HYO3Hp/n/IoArUU7Y3pRsb0oAbRTtp9KbQB/o5/8Gzn/BVn/gnZ+yN/wS60r4OftKfFrQ/B/ieHxHrF0+nX7yLMIZ5EaN8LGwwwHHNfeH/BWn/go3+w9/wUd/4J2/E39in9hv4laR8Svir49srW08P+GtHd3vb+a3vbe7lSFXRFylvBJIcsPlQ1/lR9WxjnuP8A639MV+3/APwbhZ/4fZfAQNw39q6h+mk3v5f5+lAHm/8Aw4I/4LJf9G9+Kv8AvzD/APHaT/hwT/wWR/6N68V/9+Yv/jtf7PGwf3RScf5xQB/jEf8ADgn/AILI/wDRvXiv/vzF/wDHaP8AhwT/AMFkf+jevFf/AH5i/wDjtf7PPye1Hye1AH8pv/BHT/goH+xh/wAEyf8AgnP8PP2I/wBvf4iaT8Lviv4JTUU1zwzrLul7Ym91G5vbcSrGjqPMtriKVcMflcV+m3/D/f8A4I2/9HCeFP8Av9L/APGq/wA3f/g5u4/4Ld/GwtyPN0UZx/1BLDH5dO2O3avwTw+OCfwoA/2dP+H+/wDwRt/6OE8Kf9/pf/jVH/D/AH/4I2/9HCeFP+/0v/xqv8YjcfU075uxNAH+3v8As1f8FS/+Ce37YnxEf4S/sxfFfQ/GfiSOzlv20/T5HaUW0LIskmGRRtUuoPPevvyv8sf/AIM4cN/wVt1IYHPw/wBY/D/S9Pr/AFOKAP8AEm/4LDf8pXP2kv8Aspfif/053FfnBX6Qf8Fhh/xtd/aSH/VSvE//AKc7ivzh2N6UANr9UfAX/BET/grF8UfA2j/Er4f/AAK8S6roPiCyg1DTr2GKLyri1uY1lhlTMgO10ZSOBxX5YbG9K/2//wDgluf+Nav7P2eP+Lc+GPbppVuPp+HagD+IL/g3e+EXxL/4Io/tOeN/j3/wVX0a4+B3g7xV4XOgaRqviQCK3u9SN7b3QtYzEZD5nkQSSYwBtQ1/Xt/w/wB/+CNv/RwnhT/v9L/8ar8Qf+D2DP8AwwP8KSR/zP6jp/1C73/P6V/mjbj6mgD/AH2/D3iLQ/FegWPinw7cpd6fqVvFdWs6fckhmUPG69OGUgiv5Dv+Dt/9hX9rr9uD4ffBDSv2TPAWp+Orjw5qGuS6lHpiIxtkuYrFYS+5l4cxsBj0r+oX9k1T/wAMs/DXAH/Iq6NyP+vGH2/LivoDYR0/z/8Aq7UAf4xf/Dgj/gsl/wBG9+Kv+/MP/wAdr/ZD+G1ldaX8PNA0vUIzFcW2m2sUqHqrpEqkfgRiu02D+6KTaRj+VAElQXFxDaW73VwdscalmPoFGT+lT1znivDeFdTH/TpN/wCizQB+Uz/8F9P+COEbtE/7QfhUFDtI82bqOP8AnlX8rH/BxroOsf8ABb7xp8KvFH/BJq3b466f8PLLVrXxHP4Z/epps2pSWr2iT+b5eDMtvKVxn7h6V/B7qmBqdzkf8tX/AJ1/oUf8GPhz8Lv2iAR93VfDn/oi/wCnvxQB/Ml8Ef8AgiT/AMFXfhT8ZvB/xR+InwM8S6T4f8N61Yarqd9PFEIraysrhJ7iZ8SE7I4kLHA6Cv8ASs/4f7/8Ebf+jhPCn/f6X/41X3t+1ghH7LPxL3AAHwrrJP8A4Azf5+lf4SW4+poA/rT/AODtD9tr9lH9tv8AaG+Enin9lDxzpvjnT9D8N3trfz6azMkE0l2HRH3KuCV5r+U/wd4N8T/EHxbpXgPwXZSajrGt3cFhYWkWPMnubl1ihiQHHzO7Ko+tc+WU9a+v/wDgnu2P2+Pgft4I8f8AhrH4apb+mP8A61AH1x/w4J/4LI/9G9eK/wDvzF/8dr+/7/g1M/ZC/aW/Yu/YN8a/DP8Aan8HX/gjXr/xzdahb2WoqqyyWradYRLKArMNpeN1/wCA1/T1j2/lTVVu9AHxH/wUs+H/AIy+Lv8AwTz+N3wu+Guny6x4g8Q+Btd07TbG3AMlxdXNjLHDEmcDc7MAORX+TL/w4J/4LI/9G9eK/wDvzF/8dr/Zzx/n/Pofpipvk9qAP5xP+DXH9lT9on9jn/gmvf8Awj/ae8JX3gvxJJ401S/XT9QVVmNtNbWSRyYUsNrGNgPpX6c/8FXPhn49+NH/AATV+OXwk+Felz634k8ReC9X0/TdPtgDLc3M9syRxIDgbmYgDJFffhHYDj/P+elLgkc4/wA/h+VAH+MX/wAOCf8Agsj/ANG9eK/+/MX/AMdr+27/AIIU/td/s1f8EjP2BNP/AGOf+ClHjCw+D3xPstb1LVZ/Dmvlo7xLK+kV7acrGrrslVTt57V/YX8ntX+UR/wd18f8Fj9az/0Kuhf+inoA/wBE/wCCf/BYj/gmN+0b8UdI+CnwO+M/h7xL4r16R4tP0yzkkM9w8cbSsEDRgcIjN16Cv0qr/HN/4NwSV/4LZfAQEY/4muocdP8AmE3w/Sv9jKgD/Mv/AODhb/gkX/wUo/aj/wCCtXxN+N37Pvwe1/xV4T1iPRlstTsY42gmMGk2kEm0tIp+WRGU8dRR/wAG9P8AwSL/AOClH7Ln/BWr4ZfG79oL4Pa/4U8J6PHrC3up3scawQmfSbuCLcVkJ+aR1UYHU1/pk+W3/wBbjFHlt/LjjA//AFdqAJ6/x5/+Dmf/AJTifHf/AK+tE/8ATBptf7DFf48//BzP/wApxPjv/wBfWif+mDTaAKf/AAbjftF/BD9lH/grD4F+Nn7RXiSz8JeFNO03W4rnU75isET3GmzxRBioY/M7Ko46mv8ASm/4f7/8Ebf+jhPCn/f6X/41X+McMr83b9P/AK+Kj/ee9AH+zr/w/wB/+CNv/RwnhT/v9L/8ar8R/wDgvx+058Av+Cxf7DVp+yX/AMEw/FNl8Z/iRbeKNP16TQPDzNJdrptnBdRXF0VkWNfLjeeJW5/jHFf5oX7z3r+r3/gzh+b/AIK2al6/8IBrOf8AwLsKAPy6/wCHBP8AwWR/6N68V/8AfmL/AOO1/op/sL/8Fb/+CbX7JH7GHwq/Zd/aR+MGgeD/AIgfDzwnpHh3xJod/JIt1puqabaR213aThY2USwTIyOATgiv6Jce38q/xH/+Ctrgf8FR/wBocNjj4i+JP/TlP0oA/r4/4Or/APgpx+wN+2j/AME+/CHww/ZY+KOi+N9fsPHljqVxY6a8jSx2kem6lE0xDIo2h5Y1/wCBCv8APyqyCMfLjA/z7f5xUGxvSgD/AHFv+CZH/KNr9nv/ALJp4T/9M9rX4d/8HYn7G37UH7a/7Gnw48A/sp+C9Q8cazpXjRb+7tNNVGkitv7Ou4vNIZl+Xe6rx61+4X/BMllH/BNv9nwZ/wCaa+E//TPa19thcccf/WoA/wAYv/hwT/wWR/6N68V/9+Yv/jtfk54h8O634T1+98LeIrZ7TUNNuJLW5gf70U0LFJEOO6sCDX++58ntX+Eh+1hz+1L8SSM4PirWSB9b6bpQB137K/7CP7Xv7bt9rOmfsneAdT8dT+HY4JdRTTFRjbJcFlhL7mX75jYDHpX2vp3/AAQM/wCCx0V/A8n7PnioBHUn9zDwAf8ArrX9GP8AwY9Dd8Uv2iR/1CvDmP8Av9qHH+fSv9Dn5qAMbw3BLaeHbC1uF2SRW8SMvoVQAitumEHtS7h0oAwPFf8AyKup/wDXrN/6Aa/wKK/31vFZH/CK6kPW1mx/3wa/wK9jelADa+gv2T+f2pPhoB28VaN/6XQ18/7G6Y/yK+gf2Tf+Tpvhr/2NOi/+l0NAH+7rRRRQAUUUUAf5wP8AweA/8pK/A/8A2TLTf/TzrNfym1/Vl/weA/8AKSvwP/2TLTf/AE86zX8ptABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/1v4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr/OF/wCD3b/k6f4H/wDYq6h/6XCv9Hqv84X/AIPdv+Tpvgf/ANirqP8A6XCgD+UH/gnv/wAn8/A7/sf/AA1/6dbav9ziv8Jv9jTxx4W+GH7X/wAKfiV46uhYaJ4d8YaFqeoXJR3ENraahBNNJsjVnbZGhO1FLHGACcCv9Yb/AIiZ/wDgh1/0Xa1/8Eev/wDytoA/kB/4PXf+Uknw1/7JpZ/+njVa/mh/YE+FXgf47/tx/Bz4JfEq3e88O+MPG2g6LqdvHI0LSWd9fw28yCWPa6Fo2ZdykEZ4INf1jf8ABcn9nj4x/wDBwR+034Y/av8A+CQGit8ZPh/4S8LQeE9W1a2mg0hbbWIL27vpLUwa1JYTsVtry3fekbRnftDblYL+cH7I/wDwQz/4Kp/sWftUfDX9sH9pv4TXHhb4cfCzxRpPizxTrL6ppFyun6Po15He310YLS9muJRDbxO/lwxPI2NqIzECgD+1X/iFA/4Imf8AROdV/wDCh1b/AOSaP+IUD/giZ/0TnVf/AAodW/8AkmvX/wDiJp/4Ic/9F3tf/BHr/wD8ra/S79jz9uP9lf8Ab7+GV38Y/wBkbxZH4w8N2GoSaVPeR2t3aBLuGOKV4vLvIYJDhJozuCbecA5BAAP5jP8Agpj/AMG2H/BJT9mz/gnx8Zfj98JfAmpWHibwd4R1TVdLuJdd1KdIrq1t2kiYxSTsjgMAdrAg9xX+ZXX+11/wWr/5RIftG/8AZP8AXP8A0kev8UWgD+/L/g3k/wCCD/8AwTW/4KBf8E39M/aJ/ae8IX+teK7nXtVsHuYNXv7KMwWkiLEvk28yR/KD12896/pE/Zd/4N2/+CVv7HPx58PftKfATwRqGl+LvCs0k2m3U2tajcpE8sLwMTDNO0bZjkYfMp6+tfz9/wDBt/8A8Fpv+CZH7Df/AATM0v4C/tUfFGDwn4stvEGrXslhJpmq3RWC5kRoX8y0s5ojuA6B8juBX7z/APETT/wQ5/6Lva/+CPX/AP5W0Afu/X+eR/wXk/4OAP8Agp7+wr/wVE+IX7Mf7N/jSw0fwd4eg0V7K0m0fT7t0a90m0u5iZp4HkbM0rN8zHGcDjiv6Wf+Imf/AIIdf9F2tf8AwR6//wDK2v8AOF/4OBv2ovgP+2Z/wVZ+I/7RP7NGvp4n8G65BoiWOopBcWyym00i0tZh5V1FDKuyaJ1+ZBnGRlcGgD6f/wCIr3/gtl/0UfSv/Cd0n/5Go/4ivf8Agtl/0UfSv/Cd0n/5Gr+cCigD/Ti/4J2f8Elv2IP+C137H3hH/gpn/wAFCPDd34r+L3xLW8fX9UstRu9KgnbTLybTLUpaWMsNvFstbSFDsjGSu45JJPx7/wAF9v8AggT/AMEx/wBg3/gmR4z/AGlf2avBl/o/i7Rr/R4LW6n1jULxFS81CCCYGGeZ4zmNyv3eM5HIr3//AIIPf8F0/wDglP8Asg/8Eqvhb+zx+0Z8Wrfw14x8PJqi6hpz6Vq9wYTcapd3EX721spYW3RSo3yOcZwcEED0n/grr/wUO/Y4/wCC037DPiX/AIJ8f8EyPGkXxR+MPiq70280rw7BZ3umPcQaXeRXt2wudVt7O0TyreF3w8yltu1AWIUgH+YvX+lP/wAEl/8Ag3H/AOCUP7Vv/BN74QftEfGzwNqOpeKvFugx3+p3MWt6lbJLO0jqWEUU6xpwvRVAr+Tb/iGX/wCC4v8A0Qm6/wDB5oH/AMsa/tx/4J6/8FgP+Ccv/BND9ir4c/sGftv/ABJh8C/Fn4YaSmjeJ9Al03U757C+jdnaE3FhaXFrJhXU7oZnTng0Afpd+xD/AMEM/wDgnL/wTt+M8nx+/ZU8I3uieJ5tOn0pri41a+vU+y3DxySL5VzM6Z3RIQcZ461+vdfmL+yH/wAFlP8Agmt+3l8VpPgh+yb8TYfF3imGwm1N7GPTdUtCLW3eOOSTzLyzgi+VpUG3fuOeBgHH6dUAfgj8bf8Ag2l/4JG/tC/GLxR8d/ij4C1K98SeMdVu9Z1WePXdSgSW8vpTNO4ijnVEDOxO1QAOwry//iFA/wCCJn/ROdV/8KHVv/kmv6PqKAP5wf8AiFA/4Imf9E51X/wodW/+Sa/jr/aP/wCDhf8A4KlfsPftBeOP2Mf2dPGun6R8P/hNruoeD/DVjNo2nXUltpOiXEljZQvPPA8szRwRIpeRmZsZYk81/qpV/h7/APBUf/lJX+0CP+qi+Jv/AE6XFAHtH7eP/BaH9v8A/wCClPw70f4V/tc+KrPXtE0HURqtlDbaVY2JS6ELwbi9tFGxHlyONpJHPSvynr7C/Y0/YF/a4/4KC+OdU+Gv7H3g6Txlrei2H9p3ltHd2dmYrUSpB5m+9ngQ/vJEXarFuc4wDj9HP+IZf/guL/0Qm6/8Hmgf/LGgD/WY/ZM4/ZX+Gn/Yq6N/6Qw19BV41+zv4Y1zwT+z/wCBvBvieD7LqWk+H9MsruHcreXPb2kUcibkJU7WUjKkg44OK8D/AG1P+CkP7FX/AATu0zw/rH7ZPjeLwVbeKJbiHS3ksr68+0ParG0wAsbe4K7BIn3woOeM4OAD7hor8If+Imf/AIIdf9F2tf8AwR6//wDK2v3P0rU7HWtMttY0x/NtruJJoXwRujdQynBAIyCOCBQBfqneWcV/aS2N0N0cylGHT5WGCPyr4f8A21f+Cl/7EH/BOyLw9N+2V46i8FL4rNyulGSxv7z7QbPyvPx9htrjZs86P7+3Oflzg4+DP+Imn/ghz/0Xe1/8Eev/APytoA8jm/4NRv8AgijNK0snw51Us5yT/wAJDqvc/wDXzX6U/sA/8Esv2M/+CZOkeJtE/Y/8PXWgW/i6a1n1NbnULq/817JZFhINzJJs2iV/u4znmvjL/iJp/wCCHP8A0Xe1/wDBHr//AMra+/v2K/8AgpF+xV/wUR0zxBrH7G3jeLxpbeFpLeHVHisr6z+zvdq7Qgi9t7ctuET/AHAwGOccUAev/tZ/8mr/ABL/AOxV1n/0hmr/AAia/wB3X9rH/k1n4le3hXWf/SGav8IqgAr7A/4J7/8AJ/PwO/7H/wANf+nW2r4/r6U/Y08ceFvhh+1/8KfiV46uhYaJ4d8YaFqeoXJR3ENraahBNNJsjVnbZGhO1FLHGACcCgD/AHZKK/CD/iJp/wCCHP8A0Xe1/wDBHr//AMra/Sf9jj9u39lD/goB8Ob/AOLP7IXi6Pxj4e0zUH0q5u47W8tBHdxxRTNFsvYIJDiOaM7gpXnGcggAGd/wUI+LXjr4A/sJ/GH44/DG4Sy8R+EPB2s6vplw8STJFdWVlLNAzROCjhXUHawIPcV/mH/8RXv/AAWy/wCij6V/4Tuk/wDyNX+nP/wUa+F/jv43fsB/Gj4OfC6wOq+JPFPgrW9K0uyV44jcXd3ZSwwxB5WSNNzsBudlUdyBX+Vv/wAQy/8AwXF/6ITdf+DzQP8A5Y0Aew/8RXv/AAWy/wCij6V/4Tuk/wDyNR/xFe/8Fsv+ij6V/wCE7pP/AMjV49/xDL/8Fxf+iE3X/g80D/5Y0f8AEMv/AMFxf+iE3X/g80D/AOWNAHsP/EV7/wAFsv8Aoo+lf+E7pP8A8jV/TL/wS1/4J8fsuf8ABwJ+yhaf8FFP+Cn+i3HjT4q6lqV7oU+p2F7caNC1jpbLHap9k094IAUViCwTLdya/k5/4hl/+C4v/RCbr/weaB/8sa/ro/4I3ftz/sq/8EOf2KrH9g3/AIKneLE+FHxZ0/VtQ1m40Ce0vNUdLHUXWS1l+0aRBe2p8xVJ2iYsuMMooA/XD9l3/g3b/wCCVv7HPx58PftKfATwRqGl+LvCs0k2m3U2tajcpE8sLwMTDNO0bZjkYfMp6+tfuFX4Qf8AETT/AMEOf+i72v8A4I9f/wDlbS/8RM//AAQ6/wCi7Wv/AII9f/8AlbQB+71FeB/sy/tP/An9sb4L6T+0N+zbr6eJvB2uGdbHUUguLZZTazPby/urqOGVdssbL8yDOMjIwa98oAK/x5/+Dmf/AJTifHf/AK+tE/8ATBptf7DFf48//BzP/wApxPjv/wBfWif+mDTaAPP/APggR+x58Bf28f8Agpx4M/Zr/aU0uXWPCOsafrE91aQXM1m7PZ6fPPCRNA6SLtdFPB5xg8V/oNf8QoH/AARM/wCic6r/AOFDq3/yTX+f7/wbz/tWfAD9ir/gqZ4J/aD/AGnPEKeFvB+lafrMF1qL29xcrHJd6dPBCPKtIppTukdV+VCBnJwBmv8ARh/4iaf+CHP/AEXe1/8ABHr/AP8AK2gDyD/iFA/4Imf9E51X/wAKHVv/AJJr7D/Yh/4IZ/8ABOX/AIJ2/GeT4/fsqeEb3RPE82nT6U1xcatfXqfZbh45JF8q5mdM7okIOM8da8b/AOImn/ghz/0Xe1/8Eev/APytpf8AiJn/AOCHX/RdrX/wR6//APK2gD93q/xFv+CuH/KUf9oj/soviT/04zV/qFf8RNP/AAQ5/wCi72v/AII9f/8AlbX+Vv8A8FGfih4E+N37ffxo+MfwuvxqvhvxT401vVNLvFjkiFxaXd7LLDII5VSRNyMDtdFYdCAeKAP1Z/4No/8Agn3+y9/wUj/bl8U/BD9rHRrjXvDul+CbzWra3t724sHW8hv9Pt0fzbV43IEc8g2k7ec4yBX9yH/EKB/wRM/6Jzqv/hQ6t/8AJNfxIf8ABrz+3L+yt/wT+/b38V/GH9r3xZH4O8N6j4FvdIt7yS1u7sPeS6hp06ReXZQTyDMcEjbioUbcZyQD/ed/xE0/8EOf+i72v/gj1/8A+VtAH8RH7Q3/AAcQ/wDBU/8AYp+P/jn9jf8AZ68b6fpPgH4SeINS8GeGbGbRdOupLbR9BupdOsIHuJoHlmaO2hjQySMzuRuYkkmvHP8AiK9/4LZf9FH0r/wndJ/+Rq/G79u34heDvi5+3B8Y/iv8O7waj4f8T+OfEOraZdhHjE9ne6lPPby7JVSRN8Tq211VlzggHitT9jT9gX9rj/goL451T4a/sfeDpPGWt6LYf2neW0d3Z2ZitRKkHmb72eBD+8kRdqsW5zjAOAD9ff8AiK9/4LZf9FH0r/wndJ/+Rq/nq8Z+LdZ8e+LtU8ceJZRNqOs3c99dOFCBp7mQySMFUADLMTgDA7V+2n/EMv8A8Fxf+iE3X/g80D/5Y0f8Qy//AAXF/wCiE3X/AIPNA/8AljQB+8H/AAY7/wDJU/2iP+wV4b/9HahX+h1X8YX/AAal/wDBLn9u/wD4J3eP/jRrH7ZPgGXwVbeKdP0SDS3kv9OvPtD2kt40wAsbm4K7BKn3woOeM4OP7OJZo4ImmlOFQZPsBQBLX8j/APwdH/8ABV39tn/gmH/wpT/hj7xHa+H/APhM/wDhIP7V+06faX/m/YP7O8jH2qKTZt8+T7uM55zgV+hF3/wcv/8ABECxupLK6+OtqskLFHX+xNeOGU4I407Hav47f+Drz/gpn+w7/wAFFf8AhRn/AAxn47i8a/8ACJf8JF/a3lWN/Z/Zvt39nfZ/+P62t9+/yJPubtu35sZGQD4803/g6m/4LSa/qEGh6n8RNLe3vZUglUeHtJGUkIVhn7NxkHtX9t//ABCgf8ETP+ic6r/4UOrf/JNf5Lvh66gsdesry6bbFDPE7HGcKrAngewr/YC/4iZ/+CHX/RdrX/wR6/8A/K2gD+Jb/g6G/wCCW/7G3/BMfx18HtB/Y/8AD11oFt4v0/WZ9UW6v7q/817KW0WEqbmSQptErfdxnPPSv50f2Tf+Tpvhr/2NOi/+l0Nf0t/8HWf/AAUg/Yr/AOCiPxA+C+sfsbeOIvGlt4W0/W4NUeOyvrP7O93LZtAMX1vbltwif7gYDHOMiv5pP2TuP2pvhqf+pp0b/wBLoaAP93WiiigAooooA/zgf+DwH/lJX4H/AOyZab/6edZr+U2v6sv+DwH/AJSV+B/+yZab/wCnnWa/lNoAKKKKACiiigAooooAKKKKACiiigAooooA/9f+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAK/zg/8Ag91wf2pPggR28KagP/J4V/o+V+aX7cn/AASM/YG/4KPeKtC8b/tg+CX8U6n4atJLLT5V1G/svKglfzGXbZzwq2W5ywNAH+JwRtHbFR1/qr/ti/8ABtb/AMEbvhV+yP8AFT4oeBfhVLY634b8Ia3qmnz/ANuaw/lXVnYTTwvsa8KtsdVO1gVOMEEV/lUUAf6bf/BlMN3/AATe+JJ6/wDFyrv/ANM+lV/Qx/wVdA/4df8A7RZxyPhp4q/L+ybjP+cV/PR/wZRkf8O3PiUP+ql3n/pn0qv6Gv8Agq/z/wAEvv2i8f8ARNPFX/ppuKAP8QrJr/UJ/wCDMAk/8Et/F3oPiLqXp/0DdNr/AC9a/wBQn/gy+wP+CW/i8enxF1L/ANNum0Aftj/wWr/5RIftG/8AZP8AXP8A0kev8UWv9rr/AILV/wDKJD9o3/sn+uf+kj1/ii0AS4xwf6Uz5q/0D/8Ag3T/AOCHn/BM79vP/gmvpn7QP7UXw/fxH4suPEGq2L3g1XUrQGC2kVYU8q1uYo/lB67Oe9fuv/xC1/8ABEH/AKJBL/4Ptb/+TqAP8hjFPwRj9BX+vL/xC1f8EQv+iQS/+D7W/wD5Or/Or/4L6fso/Ar9iT/gqd8Rv2a/2bdFOgeDdCg0R7Gxa4nujG13pFnczHzbl5JDumkduWOM4XA4oA/Gza3pSYr9fv8AghJ+y58EP20/+Cp/ww/Zs/aL0c674O8Rf2v9vsVnntTL9l0i8uov3ts8ci7ZYkb5WGcYPHFf6NX/ABC1f8EQv+iQS/8Ag+1v/wCTqAP8hv8Aizmv6O/+DUX/AJTZ/DfpzpXiL/00XPT8a/uo/wCIWz/giD/0SCX/AMH2t/8AydX0h+yX/wAEJP8AgmF+w/8AG/Tv2jf2Z/h2/h/xfpMVzDaXratqd0ES7haCYeVc3MkZ3Ruy8qcZyOaAP2Ar/GI/4L6bR/wWQ/aDA7eK5v8A0VFX+zvX+ML/AMF9B/xuS/aEP/U1zf8AoqKgD9Qf+DOAgf8ABW3UQR/zT/We3/T3p9f6nNf4YH7GH7cX7S//AAT9+Lknx2/ZQ8Qjwz4ol0+fS2vDa215m1uGjeSPy7uKaLlokOduRjg1+qn/ABFJ/wDBb3/or8X/AIINE/8AkGgD/Xp3L0/Ck3pnGa+J/wDgnB8W/H3x+/4J/fBP44fFS+Go+JvF/gjQdX1W7EccInvLyximmk8uJUjTc7E7VUKOgAFflV/wcz/t4/tR/wDBPL9g3w58af2S/EY8MeI7/wAZ2OkzXTWlrebrSWyvZXj8u7iljGXhQ5C54680Af0YV/h7f8FR1P8Aw8r/AGgT2/4WN4n/APTpcV+j3/EUn/wW9/6K/F/4INE/+Qa/DX4p/E/xn8aPiX4g+L/xGvPt/iDxTqNzq2pXIRIvOu7yUzTybIwqLukYnaoCjoABQB/X1/wZOY/4b5+K2e/w/b/062Nf6Xdf4b/7EP8AwUL/AGsv+CdHxA1X4ofsheJx4X1vW9POl3s7WVpeeZamVJ/L2XcMyj540OVAPGM4r9Nf+IpP/gt7/wBFfi/8EGif/INAH+vOW9P/ANQr+Eb/AIPhht+Fv7OwA/5iniP9INPr+1j9nzxRrnjj4CeB/G3ieX7RqOr6Bpt9dzYVd81xaxSyNsUBRliThQAO1fxT/wDB8R/yS/8AZ1/7CniT/wBE6fQB/niV/vafCYj/AIVZ4ZAP/MJs/wD0Qlf4Jdfv/pH/AAc+f8FrND0m10XS/i3FHbWUKQRJ/YOi/KkahVH/AB5c4AFAH9Bn/B8V/wAgv9nDZ0Enij8Pl0v8q/z9vmr+/H/giPczf8HJd18RbH/gsWf+Fqx/CJNLfwqIv+JJ9ibWjdC+J/sf7H5vm/YoP9bu27Plxk5/fb/iFq/4Ihf9Egl/8H2t/wDydQB/kMfNX+hx/wAGPJX/AIVb+0QDx/xNPDn/AKIv6/a//iFq/wCCIX/RIJf/AAfa3/8AJ1fz6f8ABbTxPrn/AAbb+Kfh54J/4I6z/wDCqtM+LFrqN74oikVdb+2TaS9vHZMG1cXbReUt1MMRlA275s4XAB/ct+1gyn9ln4lkdP8AhFNZ/wDSGWv8IzFf0mfCv/g4+/4LC/HP4oeHPgp8TPinFqHhvxhqtnomq2o0TSIvOsb+dLa5i8yKzR13wuy7lYMM5Ug81/c5/wAQtX/BEL/okEv/AIPtb/8Ak6gD/IXxT+nAxX+vL/xC1f8ABEL/AKJBL/4Ptb/+TqT/AIhbP+CIP/RIJf8Awfa3/wDJ1AH+Qz81f6c//Blhj/h2r8QOf+ai3npx/wASvTa/QD/iFq/4Ihf9Egl/8H2t/wDydX8z3/BZj9pn4z/8G7f7SGg/se/8Ej9VHww+H3ijw9D4t1LTJIINaM2rT3VzZyT+fqyXc65gtIE8tXEY25C5JJAP9GvgqMdMf55qWv8ALe/4J3/8HHX/AAWA+Ov7enwa+CvxP+KUWoeG/FnjPRNJ1O1Gi6RD51peXsUM0fmRWiSLuRiMqwI/hIr/AFIaAG7l/pQGU9DX8Dv/AAco/wDBa/8A4KR/8E/P+Ch1l8CP2UfHyeGfDEvhDTdUezbStNvM3VxcXkbv5l3bSycrEgxu2jHAr85v+CYn/BxR/wAFc/2iv+Ch/wAGPgT8XPihFqfhfxd4v0vS9UsxoukQeda3NwkckfmRWiSLuU4yjAjsaAP9P2v8ob/g7u4/4LIa0vp4U0Ef+QXr/V5r/KE/4O8P+UyOt/8AYq6D/wCiXoA/mFw/Sm4r9T/+CKv7OXwd/a7/AOCofwl/Zy+PmlnW/CHim/u4NSshNNbGaOLT7qdB5sDpIuJIkPysOmOlf6TP/ELV/wAEQv8AokEv/g+1v/5OoAT/AINbj/xpF+EAPH73Xsf+Dq99hX9B25ema+cv2Vv2UvgZ+xV8C9H/AGbv2b9HOgeDtBNw1lYmee6MZupnuJf3ly8krbpZHb5mOM4HHFfAX/Beb9qj46fsU/8ABLX4jftHfs36yNA8Y6FLpAsb428FyIxc6na2837m5jkiO6KRl5Q4zkc80AfsZX+PP/wcz/8AKcT47/8AX1on/ph02ut/4ik/+C3v/RX4v/BBon/yDX9ef/BNb/glD+wp/wAFjf2I/Av/AAUk/wCChPg5/HPxj+JkN7N4j1yPUL7TBdvp1/caXbf6Jp89vbRbLS0hi/dRLnZuOWJJAP8AME2Hbk9Kjya/0PP+Dgf/AIIT/wDBML9hz/gl940/aN/Zn+Hcnh7xdpOoaNBa3jatqV0ES71CCCYeVc3MkZ3Rsw5U4zlcGv8APCoAXJpKXBowaADJp2RimUuDQA7dTcmkooAmCkj2H5V/Zx/wZOD/AIz4+KxPAPw/Yf8AlVsq/oD/AGG/+Dbf/gjt8ZP2KPg78XfiH8K5b/XvFfgjw9q+p3P9t6vF5t5e6bb3E8myO7VE3yOxwoCjOAAK+Ff+C0nwD+Fn/Bud8B/Cv7UP/BIbTT8LvG3jjXh4V1m/llk1sXGlG0mvfs/k6u13En7+2ibeih/lxnaSCAf3Q03cvSv8hb/iKT/4Le/9Ffi/8EGif/INf6w37PfijXPHPwE8D+NvEsv2jUdY0DTb67mwq75ri1ilkbaoCjLMTgAAdqAPYCQuMniqWq/8gy4/65P/AOg1/KP/AMHTv/BTL9tD/gm34C+DWtfsd+LR4VuPFl/rUOps1jZ3vmpaRWbQAC7hmC7TI/3MZzzmv45rX/g6I/4LaXtzHaXPxdiaOVgjD+wdGGVY4I4svSgD8DPFSsPE+o8f8vU3/oZrC61/rp6V/wAGwH/BFLXNLttZ1T4SSvc3kSTSv/b2sjc8ihmOBeYHJ7V/I5/wdR/8Et/2If8Agmv/AMKQH7HPhF/C3/CY/wDCQ/2tvv72+877D/Zv2f8A4+5ptmzz3+7jO7nOBgA/kLxRitrQLaC+12ys7kbo5Z4o2HT5WYAj8q/1zv8AiFq/4Ihf9Egl/wDB9rf/AMnUAf5DR5Ne/wD7KCn/AIai+Gh7f8JVo3/pdDX+rL/xC1/8EQen/CoJf/B9rf8A8nVv+Ef+DZb/AIIweB/FemeN/DXwmlt9S0e7hvbSX+3dZby5rd1kjba14VOGUHDAigD98aKKKACiiigD/OB/4PAf+Ulfgf8A7Jlpv/p51mv5Ta/qy/4PAf8AlJX4H/7Jlpv/AKedZr+U2gAooooAKKKKACiiigAooooAKKKKACiiigD/0P4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr80/25f+CuX7A/8AwTh8V6F4J/bB8aP4W1LxJaSXunxJp1/feZBE/lO260t5lXD8YYg+gxX6WV/nCf8AB7sP+Mp/gef+pV1D/wBLhQB/QX+0B/wcLf8ABJb9qn4C+N/2YPgX8TZNY8bfEjQdR8LeH7A6Nq1uLrVNYtZLGygM01pHFEJJ5UTfI6IucsyqCR/EL/xC2f8ABbv/AKJDF/4P9E/+Tq/LX/gnuVH7fXwOx/0UDwz/AOnW2r/cywaAP5sP+DYL/gn9+1d/wTq/Yo8b/CP9rvw0vhfX9Y8bXGsWlst5a3oeyfTbC3V99pLMi/vIJF2swb5c4wQT+x//AAUF+Ffjf44/sJfGb4MfDO0XUPEXizwRr2j6XamRIlmvL3T5oIIzJIyIm6R1Xc7Ko6kgc19gDI7UwMucHigD/Ia/4hbP+C3f/RIIv/B/on/ybX93v/Bsv+wd+1H/AME8/wBgrxF8F/2tPDq+GfEd/wCM73V4LVLu1vQ1pNZWMKSeZaSzRjLwuNpYMNuSACM/0V4NHNAH5h/8Fq/+USH7Rv8A2T/XP/SR6/xRa/2uf+C1RDf8Ekf2jQvP/Fv9c/8ASR6/xSNjUAf6Bn/Bun/wXD/4Jm/sG/8ABNbTP2ff2pPiDJ4d8V22v6rfSWS6VqV4BBcyIYm821tZYvmA6BsjuBX9Jv7NX/BwF/wSk/a6+N/h/wDZw/Z/+JMmteL/ABRLJBptkdH1W2ErxQvO482e1jiTEcbH5mUcYHOBX+NRtOa/b3/g2/TH/BbP4Cf9hXUP/TTe0Af7G9f503/BfP8A4IOf8FR/22/+Cp/xE/aS/Zs+HEeveDteg0RLG9OraXamQ2ekWlrN+6uLmKVds0Tr8yDOMjIwa/0WaiJ4AoA/zk/+CEX/AAQS/wCCp37GP/BVH4Y/tJ/tG/DePQfB3hz+2Pt98NX0u6Mf2rSLy1h/dW9zJK26aVF+VDjOThQSP9HGmAEDbT6APxs/ai/4L6f8Er/2NPjhrn7N37RPxIk0Lxh4cMC6hYrpGqXQiNxBHcRfvbe1kibdFKjfK5xnBwQQNX9kr/gu1/wS/wD24fjdpv7OP7M3xEk8Q+MNXiuJ7WyOk6naB0tImnmPm3NtFEu2NCcFhnGBk8V/m6/8HOI/43d/Gw9hLovPH/QEsP8APtXqP/BqJkf8Fs/hznj/AIlXiEf+Um5oA/1t6/zMf+Cun/BvT/wVq/ah/wCClXxh/aB+CXwyj1jwp4q1+S+0y8Os6TB50DRxqGMU10ki8qeGQH2r/TOpuP0oA/xZf2z/APgih/wUj/4J+/CGL46/tX+AI/DXhiXUYdKS8XVNNvCbq4SR4k8q0uZZPmWJznbtGMEgkV+Udf6nX/B5Bz/wSR00f9T/AKN/6SX9f5YtAH+on/wTf/4ONP8AgkF8AP8Agn98FPgd8VPijJpniXwh4J0LRtUtBomrzCG8srGKGeMSRWjxvsdSu5GKnHykivyp/wCDmf8A4LP/APBOb/gob+wZ4d+Cn7JXjyTxN4jsPGdjq81o2l6hZBLSGyvoXk8y7toUOHmQbQ27nIGAcfwj7TnPrSbfagCOinbGo2t2FADaKdsbGccUbGoA/wBYf9n3/g5q/wCCL/gb4CeB/BXif4sS2+o6NoGm2N1ENC1ltk1vaRxyJuWzKnaykZUkHscV/Mz/AMHTv/BV39hT/gpH4D+DWh/sdeMX8U3HhO/1mbU1bTr6x8mO7itFhIN5bwhtxicYTOMcgcV/HBtPpRg0AR1+/uj/APBsF/wWu13SbXW9L+EcUlteRJPC39vaKu6ORQynBvQRkEcEZr8BNjV/vZ/Cf/klvhrH/QKs/wD0QlAH8n//AAau/wDBLL9uH/gm1qHxqn/bF8HL4UXxdHoS6Vsv7K+842Rv/Pz9jnm2bPOj+/tznjODj+vu7uoLG1kvbptsUKl3OM4VRk8D2qTK9PSsHxYyjwvqQ/6dZv8A0A0AfgtL/wAHR/8AwRGhlaGT4vShkO0j+wNb6jj/AJ8a/nw/4LZ+F9a/4OSfE/w98a/8EdYf+Fqab8J7XUbHxPJKy6J9im1d7eSyULq5s2l3razHMQcLt+bblQf4MtUAGp3H/XV/51/oV/8ABj0pHwt/aHVxjOqeHO3/AEwv8UAfhf8As+f8Gy//AAWh8DfHrwR418TfCWK303R9e029upf7d0ZtkFvdRySNtW8LHaqk4UEnoBX+sZUe4d+PTtUlABXFfEbx74X+FHw+134o+OLg2eieG9OudV1CcI8hitbOJppn2RqztsjQnailjjABPFdnuXGe1fH3/BQkp/wwL8cCe3w/8S/+mq4oA/LT/iKT/wCCIf8A0V6X/wAEGt//ACDX8LP/AAc5/t+fsrf8FEf23/CPxf8A2R/EbeJvD+leDLbSLm5ayurLZdx317M0ey7ihc4jmQ7gpXnAOQQP5v8AB9P5UFT2oA+yP+Cd/wAWPAvwI/bz+DXxq+J14dO8OeE/Geiavqd0sbymG0s72KaaQRxK7ttRSdqKWOMKCcCv9R7/AIik/wDgiH/0V6X/AMEGt/8AyDX+QyykD2puR6UAf2wf8Fgv2M/2i/8Ag4E/awt/27f+CUOhD4lfC+00Gz8LS6tJdW+jldU06Wee4g+zarJa3BCR3MLbxH5Z3YViVYDxb/gmJ/wbq/8ABXf9nX/god8F/jv8XPhdHpfhjwl4v0rVdUuxrWkTGG1trhHlcRQ3byNtUZ2opY9AK/pA/wCDN4Y/4JJaj2/4r/Wf/SSw4xX9XakHgflQBJX+UJ/wd4f8pkdb/wCxV0H/ANEvX+r3X+UL/wAHd4z/AMFkNbYdP+EV0H/0S9AHx/8A8G3v/KbT4B/9hXUP/TTe1/sdV/jj/wDBt8hH/BbX4CA/9BXUP/TTe1/scUAfjp+1T/wXq/4JbfsVfHHWP2bv2kPiNJoPjDQBbm+sl0jVLoRi6gS4i/e21rJE26KRG+VzjODgggfz6f8ABef/AIL1f8Etv21P+CW3xG/Zv/Zv+Ismv+MNek0g2NkdI1S1EgtdTtbiX97cWsUS7Yo2b5nGcYGTgV/Nb/wdHbm/4LefF7HP7rQMf+CSxxX8+oDccdfSgCGv9IX/AIIcf8F+P+CVX7HH/BK/4Ufs2/tDfEiTQvGPhmDVE1GxGj6pciI3Gr3l1EPNt7WSJt0MqN8jkDODgggf5vVP3DOaAP8AQ9/4OBv+C7P/AAS//bi/4Je+NP2cf2Z/iJJ4g8X6vqGjT2tkdI1O0Dx2moQzzHzbm2iiXbGhOCwzjA54r/O/p2abQB+137P3/BvX/wAFaf2ovg14d/aC+CHwyj1fwp4qtBe6ZeHWdJt/NgYlQximukkXlTwyqfavLf2z/wDgih/wUj/4J+/CGL46/tX+AI/DXhiXUYdKS8XVNNvCbq4SR4k8q0uZZPmWJznbtGMEgkV/qNf8ECsf8Ob/ANnsHj/ilYfp/rpa/MP/AIPIOf8Agkjpo/6n/Rv/AEkv6AP8sWv3J+EP/BuN/wAFgPjx8KvDvxp+F/wsTUfDfivTbbV9LujrWjwma0vI1lhkMct2kibkYHa6qw6EA8V+G1f7cn/BI7C/8Etv2d1/6p34b4H/AGDoKAP8yn/iFs/4Ld/9Egi/8H+if/JtH/ELZ/wW7/6JBF/4P9E/+Ta/15dyevtT8GgD+YP9mr/g4B/4JSfsc/s4eAP2Q/2iPiU+h+P/AIV+G9K8H+JdNXR9VuVs9Y0Ozi0+/txPb2skMoiuIZI98UjxttyjMpDH8B/+DoL/AILDf8E+P+CjH7I3w/8Ahb+yF45fxRreheLxqt5A+m39kEtRYXUG/fd28KN+8kRdqktznGBkfyx/8FM1Y/8ABSL9oM4J/wCLleLPf/mMXXFfDwUnPGMUARV/u7fsl/8AJq/w0/7FTRv/AEhhr/CJr/dz/ZMYf8Ms/DQenhTRv/SGGgD+bz/g6d/4Jmfto/8ABSPwH8GtD/Y68JL4qufCd/rU2qK19Z2PkpdxWiwkG7mhDbjE/CZxjnHFfxy2v/Brv/wW1sbqO8ufhFEsULB2P9vaIcKpyeBe+npX+u6xz0x+VUtV/wCQZcj/AKZP/wCg0Afz5aX/AMHP/wDwRQ0PS7fRNT+LkqXFnEkMq/2DrR2vGoVhkWRBwR249K/CD/gtz/x0nt8Nv+HOP/F1f+FP/wBrf8JX5v8AxI/sP9u/ZP7Px/bH2PzvN+wXH+p37PL+fbuTd/BN4q48Ual/19Tf+hmv72/+DHAY/wCGld3/AFKX/uXoA/Cfw/8A8Gu//Bbay12xvLr4RQpFDPE7n+3tEOFVgTwL30Ff66lMp9AH5y/t0/8ABVz9hT/gm3qvhzQ/2xvGLeFbjxZFczaWqadfX3nR2hjWYk2dvME2mVOHK5zxnBx8U+Ev+Dmr/gi9448VaZ4K8MfFiW41LWLuGxtYjoWsoHnuHEcSbmswq7mIGSQB3wK/mz/4Phefil+ztt/6BPiL/wBHWFfxj/snjH7Unw1wP+Zq0b/0uhoA/wB3SiiigAooooA/zgf+DwH/AJSV+B/+yZab/wCnnWa/lNr+rL/g8B/5SV+B/wDsmWm/+nnWa/lNoAKKKKACiiigAooooAKKKKACiiigAooooA//0f4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr/OF/wCD3Xn9qb4H4/6FXUP/AEuFf6PVfx1f8HL/APwRZ/bj/wCCovxx+GXj39lGw0e70/wtoV3p9+dS1BLJhNNciVAiup3Lt70Af573/BPhGH7e/wADien/AAn/AIa/9OltX+5rkV/lpfB3/g2g/wCCo37Hnxb8Lftc/GjSPDkHg/4WavY+LtcktNXinnj03RJ47+8aKFVBkcQwuUjUjc2BX9V3/EXj/wAEcP8AoN+Kv/BDN/8AHKAP6fgwr4y/4KIfEnxp8HP2B/jX8W/hpfvpXiLwv4E8Qappd7GEd7e7tNOmnglVZFdCUkRWAZSpxggiuO/4J5f8FIv2Zf8Agp98I9Y+Nn7K11qF3oeiaxJoly2pWjWUgu44ILkhY3LZUR3Efzeua9L/AG8Pg/4z/aA/Yj+L/wACPh1HFJr/AIz8Ga7ommLPIIojd39hNbwB5D9xTI65btQB/k+/8RIH/BbL/overf8Agu0n/wCQqP8AiJA/4LZf9F71b/wXaT/8hV9f/wDEIb/wWP8A+gJ4V/8AB9D/APG6P+IQ3/gsf/0BPCv/AIPof/jdAFP9hD/gsb/wUp/bx/bN+GH7GH7W3xUvvGfwx+KHiPT/AA34o0G4tbCCLUdM1CZYLm2eS2t4Z0WSNiC0ciMP4SK/vE/4hvP+CJn/AEQTSv8AwYat/wDJtfxg/sxf8G/n/BRP/gmH+0R4M/4KHftTaZodp8N/gxrFp4v8Szabqkd5eJpmlSLcXLQ26KrTOI1O2MEbjX9P3/EXl/wRv/6DPir/AMEMv/xygD7A/wCIbz/giZ/0QTSv/Bhq3/ybXwD/AMFQv+CXn7CH/BLv9gv4i/t6/sFfDuz+HXxe+HNnbXnhzxHZ3N5cz2E1zeQWczJDeTz27F7eeSP95G4G/I5ANd9/xF5f8Eb/APoM+Kv/AAQy/wDxyvzK/wCCxn/ByT/wTE/bV/4Jq/FT9l74Hap4hn8VeLbG0g0+O70iS3gLw39rcNvkZsKPLibtQB/L5/xEg/8ABbH/AKL5q3/gv0n/AOQq/wBI7/g3z/aZ+OP7X/8AwSf+G37QP7R2vy+J/F+tXGuR3mozxwxPKtrrF5bQDZbxxxjZDGifKg4Ga/xsa/0BP+CGf/BxT/wTa/YJ/wCCZnw//ZZ/aG1TX7bxZ4dn1l7yOx0qS6gAvtVu7uHbKrAN+6mUtxw3HagD+/Siv5f/APiLy/4I3/8AQZ8Vf+CGX/45R/xF5f8ABG//AKDPir/wQy//ABygD9Jv2h/+CJX/AAS3/av+MGsfH79ob4Rad4l8X68YTf6lNeajE83kQpBFlILmONdscaL8qjgZr8Vv+CxH7AX7IX/BHL9gzxP+3t/wTV8FW/wq+Lnhe702z0vxHYT3N1Pbw6neRWV2ghvpbi3YS28rxndGSM5XB5r+mL9jr9rT4Q/t0/s6+Hf2pfgJNc3HhLxQLhrCS9ga2nItbiW1k3RMSV/eQsB7V+MX/B17/wAoTfiP/wBhXw7/AOna1oA/gF/4iQf+C2P/AEXzVv8AwX6T/wDIVH/ESD/wWx/6L5q3/gv0n/5Cr8P6KAP0r/aw/wCCvP8AwUb/AG4vhhH8F/2q/iffeL/DEV9FqSWE9rYwoLmFHSOTdbW8L/KsjjG7bz0r81cH0r7h/YF/4J//ALRH/BSn44zfs7/sxW1jdeJIdMuNYaPULpbOH7NbPFHIfMYEbszLgYr9nv8AiEN/4LH/APQE8K/+D6H/AON0Af1rf8E0f+CCH/BIr43f8E7/AIHfGL4q/BfTdY8S+KfAugarqt9Jfakj3F5d2EMs0pWK7RFLuxOFUKP4QK+4v+Ibz/giZ/0QTSv/AAYat/8AJtfml+zd/wAHDv8AwTh/4Jwfs/eCv+Cf/wC01qevWvxE+CeiWHgjxNDp+lSXdpHquhW6WF4lvcKwWWJZoWCOMBl5xXtv/EXl/wAEb/8AoM+Kv/BDL/8AHKAPsD/iG8/4Imf9EE0r/wAGGrf/ACbX+UT+398O/Bnwj/bn+Mnwr+HVgul+HvDnjXXtM0yzjZ3SC0tL+eKCMNIWdgkaqMsSfU1/pbf8ReX/AARv/wCgz4q/8EMv/wAcr+WL48f8G4P/AAUy/bx+NvjD9t39nzS/D9x4E+L+s33jPw9Le6vHa3Mmla5cPf2bTQMhMUpgmQuhPytxmgDyv/g1d/YV/ZP/AG9v2wfiH8OP2ufB1t4z0TRvBx1Kztrme5gEV19vtYRIGtpYWJ8uRxgkjnpX92P/ABDef8ETP+iCaV/4MNW/+Ta/l6/4Je/s4/Ez/g1/+Luv/tc/8FV4rfSPB3xA0c+ENJk8NSjWLhtSM8V+EkhiCFI/ItZD5mfvBR3r9xf+IvL/AII3/wDQZ8Vf+CGX/wCOUAfYH/EN5/wRM/6IJpX/AIMNW/8Ak2j/AIhvP+CJn/RBNK/8GGrf/JtfH/8AxF5f8Eb/APoM+Kv/AAQy/wDxyj/iLy/4I3/9BnxV/wCCGX/45QB9f/8AEN9/wRL/AOiCaT/4MNW/+Ta/a3S9Ms9F0u20bTY/Kt7SJIYkHREjUKo/AAV/Mn/xF4/8EcP+g34q/wDBDN/8cpP+IvH/AII3f9BrxX/4Ipf/AI5QB83f8HYf/BRv9tX/AIJ/af8AA6b9j3x5deCD4pl19dUNrb2k/wBo+xrYeTn7VBLt8vzn+7j73PQV/HZo/wDwcX/8FpNY1a10fU/jtqkttdypDKh0/ShujkYKw4suMg9q/ot/4Kp3kP8AwdPweCtP/wCCTI/teT4Ktfv4m/4Sb/iSeWNdEAsvI83f5277BNuxjZgf3q/IrT/+DSj/AILC+Hr6HXdQ0Twt9nsnSeUrrkJOyIhjj5PQUAf3RWX/AAbkf8EU7yzjurn4D6U0kqLIx/tDVeSwyT/x+1/NX/wX68R61/wQA8X/AAy8I/8ABH64PwT034nWep3niaHTAt8NQm0t7aOzdzqYuynlJcSgCIoDv5zhcfszb/8AB3H/AMEdLCBLG51rxTvgURnGhzdVGD/HX8kH/BzV/wAFYP2Qv+Cpnjf4Q69+yfe6neW/g2w1iDUf7SsXsir3slo0OwMTuBELZx0oA8S/Z1/4OHP+Cy3jL9oHwL4Q8S/HPVLvTtV8Q6XZ3UJsNKUSwT3UUciErZAgMrEcHI7V/rpV/hFfsm/8nTfDX/sadF/9Loa/3daAP4ff+DrP/gqJ+3t+wH+0D8KPB37IfxEu/BWm+IPD15eX8FrbWcwmmiuxGjk3MEpXCcYUgV/Nv+zX/wAF0v8Agq9+0t+0X8P/ANnL44/GLUPEHgvx94j0rw5r+mS2Wmxx32l6peRWl7bO8VokirNBK6FkZWXOVIPNfqh/we7f8nUfA/8A7FTUP/S4V/IV+yV8SPC3we/ap+GXxc8as6aN4W8V6Lq9+Yk8yQW1jfQzy7E/iYIh2jvQB/rXf8Q3v/BEz/ogmlf+DDVv/k2l/wCIbz/giZ/0QTSv/Bhq3/ybXx9/xF4/8Ebv+g14r/8ABFL/APHKX/iLy/4I3/8AQZ8Vf+CGX/45QBkf8FH/APggZ/wSG+C//BP341fFz4Y/BXTNJ8ReF/BWuanpl7Hfamz293a2MssMirJdujFHUHDKV9q/yn8H0r/UN/aJ/wCDiX/gm1/wUO+AfjL9gz9m3U9fufiD8ZNGvvBfhuK/0qS0tX1TW4HsrRZ52YiGIzSqGcghF5xxX8uP/EIb/wAFj/8AoCeFf/B9D/8AG6APyp/ZQ/4K9f8ABRv9hz4XyfBf9lT4n33g/wAMS30upPYW9rYzIbqZUR5N1zbSvlljQY3beOlfsf8A8Es/+C8//BWz47/8FHfgj8Gfi18aNS1nwx4o8ZaTpmqWEtlpiJcWtxcoksZMVojqHU4yrAjsa4b/AIhDf+Cx/wD0BPCv/g+h/wDjde8/sxf8G/n/AAUU/wCCYf7RHgz/AIKHftTabodp8NvgxrFp4v8AEs2m6pHeXiaZpUi3FyYLdFVppBGp2oCNxoA/0/6/Mf8Aal/4I4f8E1/21fivN8cv2n/hXYeLfFk9tDZvqE93fwuYLcbYk2W9zHH8gPXZzX5b/wDEXl/wRv8A+gz4q/8ABDL/APHKP+IvL/gjf/0GfFX/AIIZf/jlAHAf8FQ/+CXn7Bv/AAS5/YL+In7ev7Bnw7s/hz8XPh1aW154c8R2dzeXM9hNc3kFnMyQ3k89u2+3nlj+eNwN+RyAa/iH/wCIkD/gtl/0XvVv/BdpP/yFX9hv7av/AAWl/Yf/AOC1H7L3i7/gl9+w7f6vf/Fb4t28Nh4fg1fTpNOsXms7iLUJRNdOxWMCC1lIyMZAXvX82P8AxCG/8Fj/APoCeFf/AAfQ/wDxugD+o3/gkb/wTp/Yu/4K6fsDeCv2/P8Agov4Etfih8XfGz6jHrfiS9uLu1nuxpt/Pp9qGhsZ7e3Xyra3iiGyJchMnJJNeG/8HAH/AARU/wCCXv7In/BKb4lftAfs6fCWw8LeLtEl0dbLUobzUZXi+06ra28uEnuZIzvikdOUOM5Fa37BP/BWv9j7/ggz+y54c/4Jc/8ABQO81TTvix8OWu31m30OxfU7JRq91Lqdr5V0hVX/ANGuYt3Hytle1H7e3/BWv9j7/gvN+y54j/4Jc/8ABPy81TUfix8Rms30a31uxfS7JhpF1Fqdz5t05ZY/9GtZdvHzNhaAP80/B9KXY2MgV/T9/wAQhv8AwWP/AOgJ4V/8H0P/AMbr8HP2wP2Ufi5+w3+0b4m/ZY+PENrb+LPCb20eoR2U4uYAbm2hu4tkqgBv3UyE8cHigD5iooooA/XD4If8F0/+Cr/7OPwm0P4HfBL4x6joHhXwzbC00zT4bLTZEt4FOQgaW0dyMnqzGvOf2r/+CvX/AAUb/bj+F8fwX/ar+J994v8ADEV9FqSWE9rYwoLqFXSOTdbW0L5VZHGN23npX29+zF/wbPf8FR/2ufgD4W/aT+DmkeHJvDHjCyXUNOkutYigmaEkqN8ZUlDlTxXvH/EIb/wWP/6AnhX/AMH0P/xugD+YDB9K/YX4W/8ABfL/AIK7fBb4b6D8Ivhh8adT0jw54YsLfTNMso7HTHS3tbWMRQxBpLN3YIigZZifevvr/iEN/wCCx/8A0BPCv/g+h/8AjdH/ABCG/wDBY/8A6AnhX/wfQ/8AxugD9lP+DW//AIK0f8FDv27/ANvrxZ8Iv2tPiXe+MvDun+BL3VbaxuLaxgSO7i1HToElzbW8TEiOaQYLbec44Ff3yV/Ep/wbf/8ABCn9vr/gmX+234n+On7U2naLaeHtV8GXmiQNp2pR3khu5r+wuEBjVRhRHbyfN9K/troA/Gz4h/8ABAH/AII+/Fb4g658UfiH8EtN1PX/ABNqF1qupXb32po093eStPcSlEu1Rd8jscKAozgACv5Tv+DqL/glT/wT8/YJ/Y++HfxH/ZH+G1n4L1vWPGK6beXNtc3s5ltf7PupvLK3NxKoHmRocqAeOtf0DfGD/g6a/wCCTXwM+Lfij4J+PdX8Sx654Q1i90TUUg0WWSMXenztbTBHDjcokjO1h1Ar+Yf/AIOUf+C3/wCwd/wU/wD2VPAnwi/ZWv8AWbvWPD/itdYu11LTXsoxbCxubf5XZmy2+VeKAP4va/afwz/wcPf8FlPB3hvT/CHhn456paabpVtFZ2sIsNKYRQQII40UtZk4VFA5Oa/FiigD/Sp/4NQP+Cmf7c37f3j741aN+2B8QLvxtbeF9O0ObTFubazgFu9zLeLMQbaCHO8RJ97OMV/Z5qpX+zLnkf6p/wD0Gv8AKt/4Nlf+CsH7IX/BLLxv8Xde/awvdTs7fxlYaPBpv9mWL3pZ7KS7aXeEI2ACZdvr+Ff1t33/AAd1/wDBHGexmgi1rxVuaNlH/Eim6kcfx0Af5WXisZ8UaiP+nqb/ANDNfYf7HH/BSD9tn/gn9/wkA/Y98eXXgj/hK/sv9q/Zba0n+0/YvN+z5+1QTbdnnyfcxndznAr4z128gv8AXLy+tv8AVzzyOufRmJH6V+ln/BOH/gkX+2R/wVR/4S//AIZKsdKvD4I+w/2p/aV8llt/tHz/ACNm9Tvz9nk3Y6cUAfSnh7/g43/4LV3fiCxtbr486q0cs8SMv9n6SMqzAH/ly9K/2H8iv8pPT/8Ag0o/4LC+Hr6HXdQ0Twt9nsnSeUrrkJOyIhjj5PQV/Xb/AMReP/BHD/oN+Kv/AAQzf/HKAP2O/bH/AOCZX7DX/BQHVNA1n9sH4fWnja48LxXEOmPc3N5B9nS6KNMFFrPCG3mNPvZxjivkjw3/AMG8n/BGjwd4k0/xb4a+Bml2mo6VcxXdrOL/AFU+XPC4kjZQ14VO11BwRivij/iLy/4I3/8AQZ8Vf+CGX/45XS+B/wDg6/8A+CRXxA8Z6R4B8N6z4nbUNavbfT7UPocqIZbmRYogzb+F3MMntQB/S3RRRQAUUUUAf5wP/B4D/wApK/A//ZMtN/8ATzrNfym1/Vl/weA/8pK/A/8A2TLTf/TzrNfym0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/9L+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAKZvUfyp9fwa/wDB3X+3b+2Z+yL+0Z8IPDv7MHxO8SeArDVvDd9cXlvoeoTWUdxKl3sR5ViZQzKvAyOlAH9g/wDwUIdT+wL8ccH/AJkDxL/6ariv8Mqv0k8Vf8Ffv+CpPjjwxqPgvxh+0B461LSdXtZrK9tLjWbp4bi2uEMc0UiF8MjoSrKRgg4r826AP9N3/gyj/wCUbnxK/wCyl3n/AKZ9Jr+xjetfxzf8GUhC/wDBNz4lA/8ARS7z/wBM+lf4V/R7/wAFJvGni74bf8E8vjr8RPAOo3Gj65oXgDxHf6dfWjmK4trq202eWGaKQcq8bgMrDkEUAfb9Ff4o3/D63/grh/0cb4//APB5d/8AxdO/4fVf8Fcv+jjPiBx/1HLv/wCLoA/1d/8AgtWy/wDDpH9o0D/on+uf+kj1/ij1/Q5/wTa/4KS/t9/tY/t8/B/9mb9pf4weLPHXw88c+K9L0XxF4d1rU57vTtT068uFhuLS7glcpLDKjFXRgQw7Gv8ASd/4cpf8Ej/+jcvh/wD+CO0/+IoA/wAUaiv9rn/hyl/wSP8A+jcvh/8A+CO0/wDiKP8Ahyl/wSP/AOjcvh//AOCO0/8AiKAP8UanBGPFf7W//DlL/gkf/wBG5fD/AP8ABHaf/EV/mJ/8HG/wQ+D/AOzj/wAFfPid8IfgR4b07wj4X0y20FrTStJgS2tYDPotlNL5cSAKu+R2c4H3mJoA/DXYw4plftj/AMG8XwV+Ef7Q3/BX74TfCD45+HNP8WeF9X/tv7ZpWqwpcWk/k6LfTRb4nBVtkiI65HBUHtX+oR/w5S/4JH/9G5fD/wD8Edp/8RQB8nf8GxRC/wDBEL4JqeMRa3/6e7+vMf8Ag69/5Qm/Ef8A7Cvh3/07WtfvT8HPgv8ACf8AZ9+HWnfCL4IeHrDwp4Y0jzBZaVpcCW1rAJZGlfyoowqrud2Y4A5Jr8Ff+Drshv8Agib8R9vONV8O/wDp2taAP8kanbG7D2ptf6uv/BFf/glJ/wAE2PjT/wAErfgh8Vfi18DfBniLxJrnhyO41DUr/SLaa5uZWlkUvJIyEs2AOtAH8pf/AAZvqV/4K3akSOP+Ff6z/wCldhX+pvX8bX/BxN+z38Dv+CWP7All+0z/AME3/Cml/BH4hT+LNO0STxF4Mtk0nUW0+5gu5Z7Q3FsEbyZHhiZ0zgmNcj5RX8Nf/D63/grh/wBHG+P/APweXf8A8XQBgf8ABYRSf+Crf7SLDofiV4nx/wCDO4r84jG4GSMV2Pjzx34z+J/jXVviT8R9Tuda8Qa9dzahqOoXkhluLm6uWMks0rtks7uxZmPJNf0i/wDBqH+zJ+z1+1h/wUW8T/Dr9pXwZo/jnQbXwJf30Wn6zax3dulzHf6fGkqxyAqHVJHUN6MaAP5hq/3Bf+CWzKv/AATT/Z9U8E/Dnwxgf9wq2rzP/hyl/wAEj/8Ao3L4f/8AgjtP/iK/zK/23v8AgqP/AMFF/wBnT9sz4s/AL4FfGvxh4R8FeCfGGtaHoGiaVqtxbWOnabp99LbWlpbQxsFjhghjSONAMKqgAAUAf1q/8HspD/sDfCgJzjx+vT/sFXtf5otfX/7Q37fv7a/7Wfhmx8G/tN/FPxN480rTLn7ZaWmt6jPeRQ3ARo/NRZWIV9jFdwGcGvkCgB/lsO1Mr/ZL/Zq/4I4f8Eq/E37OfgDxFr/7PngS8vr/AMN6VcXNxNotq0ksstnEzu7GPJLMSTXt3/DlL/gkf/0bl8P/APwR2n/xFAH+KNRX+1z/AMOUv+CR/wD0bl8P/wDwR2n/AMRR/wAOUv8Agkf/ANG5fD//AMEdp/8AEUAfyZ/8GOY26t+0fnjMXhf+eqV/fV4r/wCRV1P/AK9Zv/QDXzx+zj+xP+yP+yC2rSfsufDjw/4AbXhANROhWEVl9qFvv8nzfJC7tnmPtz03GvobxX/yKmp/9es3/oBoA/wOtU/5CNz/ANdX/wDQqoBGPSr+qf8AISuf+ur/APoVf3A/8GhH7Dv7H37Xvw8+OepftR/DXw94+n0PUdBi059csIb02yzw3rSrF5obaG2Luxj7ooA/jx/ZOGP2pfhqe3/CU6N/6XQ1/u6V+Mnx5/4JGf8ABMH4b/Azxp8Q/h98BvBGja7oGhajqWm39po9tHPa3lpbSSwTxOEBWSGRVZGGCpAxiv8ALh/4fW/8FcP+jjfH/wD4PLv/AOLoA/o//wCD3bn9qb4HsOn/AAiuoj8r4V/EDX+il/wbPeCfB/8AwVz+B/xN+Iv/AAU9022+POveENdtNN0W/wDG0a6xcWFnPamWWC3e53mON5BuKjjNf0z/APDlL/gkf/0bl8P/APwR2n/xFAH+KNRX+1z/AMOUv+CR/wD0bl8P/wDwR2n/AMRR/wAOUv8Agkf/ANG5fD//AMEdp/8AEUAf5K//AASQUr/wVH/Z3zx/xcbw3/6cYK/256/AH9v3/gmL/wAE9v2ZP2H/AIu/tF/s9/Bnwj4M8deBfCGsa74e17R9Lt7W/wBN1LT7OWe1u7WeNQ8U0MqI8bqQVZQRiv8ANE/4fW/8FcP+jjfH/wD4PLv/AOLoA/2ua/L/AP4LVsp/4JI/tGj/AKp/rn/pI9f5RA/4LVf8FcT0/aM8f/8Ag8uu3/A6+2/+CbX/AAUl/b8/ax/b6+D37Mn7S/xf8WeOvh9468V6ZoniHw5rWp3F3p2p6ddzrFcWl3byOUlhljYq6MCGHUUAfzx07Yw7e1f7W/8Aw5S/4JH/APRuXw//APBHaf8AxFf5sf8Awc8/s+fA39mH/gqjq/wp/Z58J6X4L8Nw+G9GuI9N0i2S1tllmiYyOI4wBuYgZoA8i/4NvVI/4LZ/AQnoNV1D/wBNN7X+xxX+Cp8JvjB8UfgN8QtM+LXwZ1+98L+JtFdpbDU9Nma3urd3jMTNFIhBUsjFTjsa+8v+H1v/AAVw/wCjjfH/AP4PLv8A+LoA+0P+DpEZ/wCC3nxfYdPK0D/0yWVH/BrcMf8ABbz4QMeAItf/AE0S9r8SPjP8b/i1+0R8RL74t/HPxJqHi3xPqYjF3qmqTNcXU4hjWKPfI5LNsjUIMnoB6UfBj43/ABa/Z2+Ilh8W/gX4k1Dwl4n0wSC01TSpmtrqATRtFJ5ckZVl3RsUOD0JoA/3oK/x6P8Ag5mBP/BcP474/wCfrRP/AEwabXy7/wAPrf8Agrh/0cb4/wD/AAeXf/xdfCXxf+MnxV+P/wARtS+L/wAb/EF/4q8UayY2vtV1OZri6uDFEkMfmyOSzbYo0QZPCqBQB5hsY8AflTK/er/g2y+BHwa/aR/4K3eAvhL8fvC+neL/AAzqGna5LcaXq1ulzaStBps8sTNE4Kko6hl46iv9M/8A4cpf8Ej/APo3L4f/APgjtP8A4igDz3/ggSyn/gjf+z4o7eFYf/R0tfsDX+Sb/wAFWf8AgoT+3F+xf/wUS+LX7LH7JfxX8T/Dv4b+CNck03QPDWgajNZaXptmsaMILW2iZY4owWOFUAV+fH/D63/grh/0cb4//wDB5d//ABdAH+1zRX+KN/w+t/4K4f8ARxvj/wD8Hl3/APF05f8AgtV/wVyb7v7RnxA/8Hl3/wDF0Af7WfmJnGakr/PK/wCDTn/goV+3H+1f/wAFD/GHw8/aY+K/ifxzoVp8P76/gsdZ1Ge7t47qPUtMiSYRyMQHCSuobrhiO4r/AENaAP8ADr/4KaIx/wCCkf7QRx/zUrxX/wCni6r4e2N6V/tqeMf+CQv/AAS6+IPi3VPHnjf4B+BtW1nW7ue+v7250a1kmuLq5kMs00jlctI7sWYnkk1/JR/wdt/sCfsUfsj/ALFvw28a/syfCzwx4C1bUvGosrq70TToLOaW3Om3cnlO0Sgsm9VbaTjIHpQB/n/0UUUAFLil2MOCMVc09Fl1CBJOjSKCPYmgCkQRwa/v6/4MbcKf2lc/9Sl/7l6/qg8N/wDBFr/gkvceHbC5uf2dfADvJbRMzHQ7TJLICf4K+t/2cP2K/wBkj9kEax/wyz8OvD/gH/hIPI/tL+wrKGy+1fZvM8jzfKVd3l+a+3PTcaAPoPxYyjwrqWf+fSb/ANANf4FVf7+M9vFcwvbTqGjkUqynoQRgivzH/wCHKX/BI/8A6Ny+H/8A4I7T/wCIoA/xRq+hP2TR/wAZTfDU/wDU1aL/AOl0Nf7GX/DlX/gkb/0bl8Px/wBwO0/+IrT0T/gjd/wSs8Na3aeIPD/7PfgSzvbCaO4triLRbRZIpYiGR0YJkFWAIoA/S+iiigAooooA/wA4H/g8B/5SV+B/+yZab/6edZr+U2v6sv8Ag8B/5SV+B/8AsmWm/wDp51mv5TaACiiigAooooAKKKKACiiigAooooAKKKKAP//T/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACv84X/AIPdv+Tpvgf/ANirqP8A6XCv9Hqv84P/AIPdfm/am+B+3/oVNQ/9LhQB/Gb8JPhx4h+M/wAVPDHwd8HNCmreLNWstGsvtDFIftN9OtvCZGAbageQbiFOF6A1/Tr/AMQbv/BXD/oJeAP/AAc3f/yBX4B/8E942/4b5+B3H/M/+Gf/AE621f7mtAH8Iv8AwT3/AGr/AIXf8Grnwl1f9hv/AIKaR31/418das/jrTn8FRJqtiNLuYIdMRZZbl7Jln8/TpsoIyNmw78nC+nftyf8HXn/AAS//aJ/Yt+LfwB8A6f44TXfG/g/W9C05rvSbWOAXOo2M1tCZXF65VA8gyQrEL0Ga/I7/g9b+b/gpH8Ndv8A0TSz/wDTxqtfxyUAFfuD/wAE4f8AggN+3N/wVI+B2oftA/sz3Xhe30LTdXm0SYa1qE9rP9qghhnYrHHazDZsnTB3ZznjpX4fV/qE/wDBl+Qv/BLfxfnjHxE1L/026bQB+DX7Pn/Buz+33/wSw+OHhT/gpB+0zd+FJvh78ENTt/GXiKPRNRnu9QbTtJcXFwLS3ltIUkm2IditKgJH3hX9Cv8AxGRf8Ej/APoGeP8A/wAE1p/8n1+v/wDwWqdT/wAEkP2jQP8Aon+uf+kj1/ij0Af6nP8AxGRf8Ej/APoGeP8A/wAE1p/8n0f8RkX/AASP/wCgZ4//APBNaf8AyfX+WRtNJg+lAH+px/xGRf8ABI//AKBnj/8A8E1p/wDJ9fhd+2d/wSI/at/4OEf2jdd/4KyfsFz6DZ/C74kx2lvpMXiq7l07VFfQ7SHRrrzra3guo4x9ps5THiZtybScZ2j+JjB9K/11/wDg1bZR/wAEPPhEP+nrxIP/ACvX9AH4bf8ABFr/AINpv+Cif7AP/BSf4dftZfHK98Hy+F/C39q/bV0vU7i4uz9t0u7s4/LjeziU/vJk3ZcYXJHPFf300UUAfzy/tsf8HLv/AATs/YH/AGmvE37KPxxsvGE3ijwqbZbxtL0y3ntM3dtFdx+XI95Ezfu5V3ZQYOQOK/nh/wCC5X/ByD/wT4/4KJ/8E5fFv7KvwCsvF0PibW73Sbi2fVdOt7a1CWV9Dcyb5I7uVgdkZ24Q88cCvww/4OcgW/4Le/GzaP8Alrov/pksa/A/B9KAEr/Z5/4IE/8AKG39nv8A7FWH/wBHS1/jD4PpX+zt/wAECWX/AIc3fs9j/qVYf/R0tAHmP/BwX/wTp+P/APwU6/YRs/2cf2b5tJg8QQeKdP1hjrNw9tbm2tYLuNx5kcUx37pk2jZjrzX8Sv8AxBu/8FcP+gl4A/8ABzd//IFf6m+5c7RTqAP8HH9oT4I+Mf2Zfjt4y/Z1+Ir27a/4F1m90HUTZuZbc3VhM1vMYnZULJvT5TtUlewr+oL/AIMv/wDlKT4u/wCydal/6ctNr8Mv+Cw3/KVz9pL/ALKX4n/9OdxX7nf8GX4/42k+Lh/1TrUv/TjptAH+oXX+Hv8A8FR/+UlX7QP/AGUTxN/6dLiv9wiv8Pf/AIKjf8pK/wBoEf8AVRfEw/8AKpcUAfB9FOCMegpMH0oA/wB3T9k3/k1j4a/9iro3/pDDX0HXz3+yaQv7LXw0U9R4U0bj/txh/wAK+hKACiikyKAPyh/4Kdf8FiP2S/8AgkxB4On/AGo7bX518cm+XTv7Ds4bvH9n+R53m+bPBt/4+E24znnpgV+ROuf8Hiv/AASV1HRLvTrfTvH4eeCSNd2jWmAWUgdL+vzn/wCD4v8AeaZ+zf5fP73xR/LS6/z9KALl9NHPeyzxdGdiPoTxX9XP/Btj/wAFqv2Pf+CTngz4taD+1DbeIZ5/G17pFxp/9h2MV2oSxju1l83zbiDaf3ybcbu9fydU4Kx6CgD/AFCfG3/B1z/wTA/aL8F6x+z38P8AT/HCa747srjw9pzXelWsdv8Aa9TjNpb+c63rlY/MkXewViFHANfzZ/8AEG7/AMFcP+gl4A/8HN3/APIFfzifsnAr+1N8Nc/9DVoo/wDJ6H/Cv93SgD+bX/g2+/4JQftRf8EpPgn8SPh9+0/caHcX/izW7TUbM6Hdy3cYhhtjE4kaWCAq27oADX9JVN3Dp6U6gAooooA/O/8A4K4f8otv2if+ydeJP/TbNX+IvX+3P/wVwK/8Otv2iBkf8k68Sf8Aptnr/EYoA/dP/gnZ/wAG+v7d3/BT34ATftIfs23fhaDw9Bq1zozLrOoT2tx9ptY4ZHPlx2sw2YmQKd2evFft/wD8E6f+DVz/AIKa/ss/t3fCL9o/4m3/AIKfw/4H8U6ZrOoLZarcy3JtrOdZJBEjWSBn2jCjco96/ab/AIM3CF/4JJ6kp6/8J/rP/pJp9f1gUAFf5Qn/AAd4f8pkdb/7FXQf/RL1/q91/lC/8Hd4J/4LI63j/oVdB/SF6APwi/Y5/ZU+Jv7cn7SvhT9lP4LvZReKPGE8tvp7ajK1vaB4YJLlvMkRJGUbImxhDycdK/oe/wCIN3/grh/0EvAH/g5u/wD5Ar4A/wCDb5Sv/BbP4CE/9BXUP/TTe1/scUAf5Y3/ABBu/wDBXD/oJeAP/Bzd/wDyBR/xBu/8FcP+gl4A/wDBzd//ACBX+pvuWnUAf5Y3/EG7/wAFcP8AoJeAP/Bzd/8AyBX89f7aX7IvxU/YM/aa8Ufsl/G+Swl8UeEHto759Llae1zd2kN2nlyPHEzfup0zlBg5A4r/AHTa/wAef/g5n/5TifHf/r60T/0wabQB4z/wQ4/bi+C3/BO3/go34Q/ar+PkOozeGNEstWt7lNJt0uLrde2E1tFsjkkiUjfIN3zDC1/d/wD8RkX/AASP/wCgZ4//APBNaf8AyfX+WSI3OAB16U3B9KAPv3/gqR+0t8Of2xP+CgnxV/ad+Eq3kXhzxprkmo2C38Sw3KwtGigSxqzqrZU8ByK+AaXB9KMH0oASv6ZvgD/walf8FPP2kvgf4P8A2g/h7f8AglNB8a6PZa1p63mrXMc4tb6FZ4hKi2ThX2MNyhiAehr+ZrB9K/25f+CR7L/w63/Z2AOf+Ld+G+n/AGDYKAP4yP8Agn5+xx8Wv+DWf4yaj+35/wAFLpNPvvAvi3SJfAlkngqZtVvxql7NBqMRkhuY7JEgEGnThnEhO7YAmCSP2K/4jIv+CR//AEDPH/8A4JrT/wCT68//AOD0whv+CYHgXbz/AMXK04/h/ZGrV/mD4PpQB/vR/BT4q+Gfj18HPCXxz8DLMuieNNGsNdsBdKI5xa6jbx3MIlRSwVxHINyhiFPAJFfyLf8AB7P/AMmC/Cj/ALH9f/TVe1/S1/wTJdB/wTa/Z85/5pr4T/8ATPa1/NN/weygv+wN8KNo6fEBf/TVe0Af5odFFO2NjOKAP1N/4Jkf8Eif2qv+CsWt+LvD/wCy1PoNvceCILO41D+3LyW0UpfNKkPlGKCfcf3L7s7ccYr9erD/AIM4v+CtlvexTyaj4Awjqf8AkM3fQH/sH197f8GPAI+KX7RGR/zCvDf/AKP1Cv8AQ4yMUAZGhWM2m6JaafcY328EcRx0yqgf0r8s/wDgp3/wWO/ZH/4JLDwYv7Utt4guB47+3/2aNDs4bvH9m/Z/O87zbiDbn7THtxuzznGK/WLctfwC/wDB8lz/AMM04/6m39P7HoA/T3/iMi/4JH/9Azx//wCCa0/+T6P+IyL/AIJH/wDQM8f/APgmtP8A5Pr/ACx8H0owfSgD/ao/4Jj/APBXX9lX/grHoni7X/2W7fXbe38ET2dvqH9uWcVoxa+WVovKEU84YYgfdnbjjFfqfX8IX/BjvgfC/wDaJz/0FfDf/onUK/u9oAKKKKACiiigD/OB/wCDwH/lJX4H/wCyZab/AOnnWa/lNr+rL/g8B/5SV+B/+yZab/6edZr+U2gAooooAKKKKACiiigAooooAKKKKACiiigD/9T+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAK+YPjr+xj+yL+1Dq1hr37R3wy8M+O73S4jb2dxr2l2uoSQROdzJE1xG5RSeTtxX0/X4h/8ABVT/AILt/ssf8EjvH3hT4dftB+HPE2uXni7T5tRtH0GC0ljSKCXyWEpuLm3IbPI2gigDZ/bC/wCCan/BPT4Pfsj/ABR+K/wr+CPgbw34m8LeENc1fRtV03QrC1vNPv7KwmuLW5tpo4VeGaCVFkikQqUYArg1/ldf8PcP+Co3/Rw/xE/8KPUf/j9f3UePv+Dq39gz9tzwNrX7GPwx8G+ONO8SfF6xuPBek3WpWunpZwXuvxNp1tJctFfyusKSzqZSkbsFBKqx4r8Vf+IK7/gpb/0UD4df+Bmqf/K2gD+WL44/tJfHz9pjxNaeNf2h/Gut+OdYsLVbG3vNdvp7+eK1V3kEKSXDOyxh5HbaDjLHjrnxAIx6Cv7C/wDiCu/4KW/9D98Of/A3VP8A5W15D+0N/wAGjv8AwUG/Zt+AvjT9oXxp428B3ej+BNC1DX76CzvNRa4kttOt5LmVIVfT0QuUjIUMVGTycUAfyoV9ZfBH9ur9s39mjwnL4D/Z5+K/ivwRolxdNey2Gh6td2Nu1w6qhmMUEiL5hVFBbrgAdq+TaKAPunxx/wAFN/8Agon8TPB2pfDz4i/HPx3rmgazbPZ3+nX2v39xbXNvKu2SKWJ5SjxuDhlIIPoa+FqKKAP9L/8A4Nd/2Af2IP2if+CUuk/Ej4+fCHwh4y8Qy+JdZgfUta0azvbpoopEEaebNEz7Vz8vNf0Uf8Oi/wDgln/0bt8Of/Cb03/4xX8PH/BDD/g5I/Yw/wCCY37BOn/sr/G7wn4v1fXbTWtS1FrjRbaxltDHeOjIA097A+4Y+b93j0r9if8AiNS/4Jqf9E/+Iv8A4B6X/wDLKgD9/v8Ah0b/AMEtf+jdvh1/4Tem/wDxiv8AO1/4L2ftWftNfsG/8FS/iL+y/wDsT+P/ABB8Jvht4dg0R9K8L+EdQudH0iyN5pFpdXJgs7N4oYjNcTSyybU+Z3Zm+Ymv6Tf+I1D/AIJpf9E/+In/AIBaX/8ALGv4Zf8Ags/+3H8MP+CjH/BRbxz+158G9P1HSvD3iaHSY7W21aOKK8Q2GmW1nIXWCWaMZkhYrhz8uM80AcF/w9s/4Kk4z/w0R8Rv/Cj1H/4/TP8Ah7f/AMFRv+jifiN/4Ueo/wDx+vOP2CP2LviX/wAFDP2rPC/7IXwfv9O0vxD4s+2fZLnVnlis0+w2c14/mNBFM4ykDKu2M/MRniv6RP8AiCu/4KW/9D98Of8AwN1T/wCVtAH9N3/BDP8AZA/ZU/bj/wCCXPwv/af/AGzPhx4b+KnxH8Txam2r+J/FemWur6tfm11S6tYPtN5dxyTTeVBDHFHvc7Y0VRgKAP1s/wCHRv8AwS1/6N2+HX/hN6b/APGK/mM/Zu/4Lafsy/8ABvr8GdH/AOCR37XPh3xF4n+IXwmE0eral4UgtbjSJzqsr6tAbaW8ubOdtsF3Gr74I8OrAZABPu3/ABGof8E0v+if/ET/AMAtL/8AljQB+/3/AA6M/wCCWf8A0bt8Of8AwmtN/wDjFf5oX/BW/wDbl/bM/ZL/AOCkvxh/Zu/Zb+Kviv4efD7whr8mn6J4a8Oavd6dpWm2qxRkQWlpbyJDDGCT8iIB7V/V9/xGpf8ABNT/AKJ/8Rf/AAD0v/5ZV+P/AMdf+De79rz/AILRfFrXv+Cpn7NfifwpoHgX423R8R6Lp/iO4vYdUt7aUCJUu47W0uYFkBjPEcsi89aALH/BqV+3d+2v+0d/wU7v/h7+0F8WPFvjTQI/BGq3g07W9XvL62E8dzYqkoinkZPMQOQGxnBPNf6Q9fxi/wDBBL/g3T/bF/4JZftwXX7S/wAdvFHhLWNEm8Mahoq2+iXF7Lcie6mtpEbbcWcCbAsLAnfnkcV/Z1QB/iTf8Fhv+Urn7SX/AGUvxP8A+nO4r9z/APgzA/5Sl+Lf+yc6l/6cdNr8MP8AgsN/ylc/aS/7KX4n/wDTncV+5/8AwZgf8pSvFvt8OdS/9OOm0Af6hVf4e3/BUb/lJb+0D/2UbxP/AOnS4r/cJr/D2/4Kjf8AKS39oH/so3if/wBOlxQB+8H/AAaIfs1fs9ftP/tsfErwn+0V4I0Px1peneCGu7a012xgvoYZ/wC0rNPNjSdHVX2sV3AA4Jr/AEGf+HRn/BLP/o3b4c/+E1pv/wAYr+FP/gyY/wCT+fiv/wBiAf8A062Nf6XlAGRo2h6T4e0i10DQraKzsbGJILe3hRUiiijAVERVGFVVAAA6CtXeo706vyL/AOCrP/BYv9nX/gkNoPgvxF+0LoOv63D45uL23sl0CG2maNrBIWkMv2m4twAfPXbtz0OcUAfrpX+Kh8Sv+Csf/BT2w+I/iCysP2g/iFDDDqV2kaJ4j1AKqrM2FX990AAwK/uh/wCI1D/gml/0T/4if+AWl/8Ayxr/ADQPGuuWviPxjqviKxVkiv7ye5QPjcFlkLgNjjIz2oA9j+O/7XH7U/7Ui6Wv7SXxD8R+PRovm/2f/b+o3Go/ZjcbPN8n7Q77PM8pN23GdozXzlgiv2C/4JS/8EX/ANpP/gr3ceN7X9nnX/DuiN4EGntfHX5rqHzP7R+0CPyfs1tcZ2/Zm3btvVcd8fr/AKh/wZe/8FKNM06fUZvHvw7KQRvIwW91TJCDOP8AkG+goA/j+wa/up/4M9P2O/2T/wBqP4dfHW+/aT+G3hrx5No2p6Ali+v6Za6gbZZYb4yCL7RG+wOUXcF9BX8LtxC1tO8DcmMlfy4r+pX/AIN1P+C4n7MP/BIjwb8U/Dv7Qnh7xJrcvji90m5sjoEFpKsa2Edykgl+03Nvgnzl27c9DmgD/RZ0j/glH/wTL8P6taa/oX7P/wAPrO9sJUuLaeHw7pySQyxkMjxusIKlSOMEV+gVfx4f8RqX/BNT/on/AMRf/APS/wD5ZUf8RqX/AATU/wCif/EX/wAA9L/+WVAHxV/wd+/tm/tc/sxftH/B7Qf2cfiX4m8CWOqeGr+4u7fQdUutPjuJUvAivKtvIgdgvA3A4r+Pv/h7h/wVG/6OH+In/hR6j/8AH6/Rj/g4f/4K5/s9f8Fb/jJ8O/iJ+z7oevaHaeENFutNuk16K3ikeSe4EqmIW1xcKVC8HcQfav516AP0Q/4e4f8ABUb/AKOH+In/AIUeo/8Ax+n/APD2z/gqR/0cR8Rv/Ck1H/4/X52V+8//AAS7/wCDfj9rn/grF8DtZ+P3wA8TeFdE0rRNbk0KaHXLi8huGnit4Lkugt7S4XYVnQZLA5zxQB8D+Mf+Cn3/AAUZ+IfhLUvAfjz47eO9Y0XWLWSyvrG91+/ntrm2mUpJDLE8pV42ViCrDGOK+EK/sN/4grv+Clv/AEP3w5/8DdU/+VtH/EFd/wAFLf8Aofvhz/4G6p/8raAP5qvgn+3j+2v+zf4Nb4e/s+/Fnxb4K0F7h7ttO0TV7uxtTPIqq8vlQyKnmMEUFsZ4Fetf8Pbf+CpGM/8ADRHxG/8ACj1H/wCP0f8ABTP/AIJvfGf/AIJY/tFw/sy/HXVdI1jW7jR7XWluNEknktRBdSTRomZ4YG3gwkkbMDjBr5t/Ze/Z98W/tZ/tGeCv2Z/AF1aWWt+O9YtdFsZ79nW2jnvJBEjStGkjhASMlUJ9BQB9If8AD2//AIKjf9HE/Eb/AMKPUf8A4/X+gD/wbtfs6fAL/gof/wAE29M/aP8A28vBei/GT4g3Gv6rYTeJPGdjBreqta2sqiCBru9SWby4gxCR7sL2Ar+fv/iCu/4KW/8AQ/fDn/wN1T/5W1+o37KP/BT74H/8Gx3wkh/4JZ/tu6Rrfi7x3pN1N4jl1DwZHBc6UbXWCJIEV7+eym8xFTDjysDsTQB+pP8AwWm/Yz/ZF/Yw/wCCX/xa/ac/ZE+Gnhj4ZfEbwlYWc+ieJ/DGl2ulatp0suoWttI9reWscc0JaGWSI7HHyOy9CRX+bn/w9w/4Kjf9HD/ET/wo9R/+P1/bf+0L/wAF3P2V/wDgvD8Gtb/4JKfsq+G/E3hv4g/GaOPTdH1LxRBawaTbyWMqalIbqWzurq4VTFaSKuyF/nKg/KSR+R3/ABBXf8FLf+igfDr/AMDNU/8AlbQB/Y1/wbjfF/4q/Hf/AIJAfC34n/GrxHqPivxLqMuti61TVrmS7vJ/J1e7jj3zTMzNtjUIuSflA7DFfubvWvy5/wCCNf7EXxO/4J3f8E7fAv7I/wAYL/TdU8Q+GX1Nrq50l5ZLN/tuoXF3HsaeOFziOVVbMY+YHHFe8/t+ftsfDP8A4J2fsqeJP2uPjDp+pan4e8MNZrdW2kpFLeP9suorSPYs8sMZw8q7suPlBxzQB9oV/j0f8HM6n/h+H8dz/wBPWif+mDTa/sI/4jUv+Can/RP/AIi/+Ael/wDyyr8lf2jf+CH/AO0//wAF/wD40a1/wV4/ZK8QeGvDHw9+MTQ3Oj6b4pmurfV7ddJgj0aYXMVla3cClp7CR02TvlGUnBJAAPx0/wCDaP4LfCP9oD/grv4C+GXxy8MaX4u8OXum668+mavaRXlpK0GlzvGXhmVkYowDDKnBFf6ef/Dov/gln/0bt8Of/Cb03/4xX8Vf7Lv/AASN/aG/4NuPjHp3/BWj9s/W9A8V/D/wJHcadfab4PmubnVpJNbibTLcwxX1vZW5VJrhXfdMMIDjLYWv1W/4jUv+Can/AET/AOIv/gHpf/yyoA/fwf8ABI7/AIJYnp+zt8Of/Cb03/4xQP8Agkf/AMEsz0/Z2+HX/hN6b/8AGK97/Y+/ae8Efto/sy+Df2p/htZ3un6D4309NRsrfUVjS6jjZmXEqxSSIG+X+FyK8E/4Kaf8FIPgz/wSw/Z0g/aZ+Ouk6vrGiT6xa6KtvokUElyJ7qOaRG2zzQJs2wMGO/I4wKAHf8Ojf+CWv/Ru3w6/8JvTf/jFfc3g/wAGeFvh74T07wH4D0y10bRdHto7KwsbKJYba2toVCRQxRJtVI0UAKqgAAYAFfyOf8RqH/BNL/on/wARP/ALS/8A5Y0n/Eal/wAE1P8Aon/xF/8AAPS//llQB/VD8cP2cfgN+0x4Vt/A37RHgvRfHGi2l0t9FYa5YwX1ulyiPGsyxTo6hwjsobqAxr5d/wCHRn/BLP8A6N2+HP8A4TWm/wDxivwA/wCI1L/gmp/0T/4i/wDgHpf/AMsqP+I1L/gmp/0T/wCIv/gHpf8A8sqAP4zv24v+Cj//AAUA+CH7aXxf+DHwc+NXjXwt4Q8HeNvEGiaHoula3e2mn6dp1hqM9taWVpbQyrFDbwQRpFFEihEjUKABxX52/HL9tv8Aa/8A2nPD1p4T/aL+KHinxzpen3H2u1tNd1W6v4YZ9hj81EuJHVX2MV3AZwSKyv2vfjD4c+P/AO1l8UPjx4RguLbSfG3i3WtesobpUSeO21K/muoo5VQugdUkAYKSoI4JFfN1ABX+zr+zJ/wSn/4Jk+If2bvh/r2t/AD4fXt7f+GtJnuZ5vDunPJNLJZxM7u5gJYsTk5Jr/GKr/SX+Cf/AAeNf8E5/ht8GvCPw71rwH8QJbvQNF0/Tp3htNMMbSWlukLlC2oAlcrlcgH1oA/rL+A37HH7KP7Ld3qd7+zZ8NvDXgKXWViS+fQNMtdPNysO4xiX7PGm8IXO3PTJr6F1NzHptw6cERsR/wB88V/IF/xGof8ABNL/AKJ/8RP/AAC0v/5Y1FL/AMHof/BNnUYm0+HwD8RFeceWpNlpeAXGM/8AIS7UAfwj+JP+CtP/AAVBg8SahFB+0N8RFRbmUKF8R6jjAYgY/f1/Wd/wax/8bSP+F3f8PJf+L9f8IT/wjv8AYH/Cff8AFQf2X/aH9o/a/sf9oed5Hn/ZofN2Y3+UmfujHw3df8GZf/BSTxJcyeIbHx78PEhv2NzGHvNT3BJSXUNjTcZGR0r7j/Yr/wCOQY+Iv+Hhv/Fcf8L8+y/2F/wgP+l/Zv8AhGvN+1/bP7S/s/b5n9pw+V5fmZ2Pu24XIB/Xb/w6L/4JZ/8ARu3w5/8ACb03/wCMUf8ADo3/AIJa/wDRu3w6/wDCb03/AOMV+AP/ABGpf8E1P+if/EX/AMA9L/8AllS/8RqH/BNL/on/AMRP/ALS/wD5Y0Af1EfAn9k/9mf9l211Kw/Zs+H/AIf8BQ6w8b36aBp1vp63LQhljaUW6JvKBjt3dMn1r6E3qOtfx5f8RqX/AATU/wCif/EX/wAA9L/+WVdf8PP+Dxn/AIJz/Enx/ofw70XwJ8QYbvxBqFtp1u81ppgjWS6lWFC5XUCQoLZOAT6UAf1wUUUUAFFFFAH+cD/weA/8pK/A/wD2TLTf/TzrNfym1/Vl/wAHgP8Aykr8D/8AZMtN/wDTzrNfym0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//V/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACv84T/AIPdh/xlL8D/APsVNQ/9LhX+j3X+cL/we64/4am+B/8A2Kuo/wDpcKAP5Qv+Ce6n/hvn4Hcf8z/4Z/8ATrbV/ub1/gQ6PrereHNWtfEHh27lsNQsZY7i2ubaRopYJYiGSSORSGV1YAhlwQRwa+qP+Hg/7fH/AEW/x/8A+FLqn/yRQB/ubV+ff/BV9h/w6/8A2i/+ya+Kf/TTcV/jm/8ADwf9vf8A6Lh4+/8ACl1T/wCSK+0v+Cc37Y37XXxb/wCCgfwP+FvxT+KfjDxL4Y8SePPDul6vpGq63f3lhqFjealbxXFtdWs87RTwTRsUlikVkdSVII4oA/GunbW9K/3Nf+Hen7Av/RD/AIf/APhM6V/8jV/m3/8AB3Z8HfhH8EP+ClXhbwp8GvCuj+EtLm8AadcvZaLY29hbtK2oagpkaK2SNN5ChS2M7VUZoA/lZ2mkr9Jf+CPvhnwx43/4Klfs/wDg7xjp1rq2k6l460W3vLK9hS4triJ7pA0csUgZHRh1Vhj2r/YS/wCHen7Av/RD/h//AOEzpX/yNQB/hkUV/uaD/gnv+wFnaPgh8P8APp/wjOlf/I1H/Dvf9gPOP+FH/D//AMJnSv8A5GoA/wAMunBSeBX+5r/w70/YF/6If8P/APwmdK/+Rq/ytv8Ag5h+HXw8+Ev/AAWW+KngP4X6Fp/hvQ7O28PfZ9O0q1hsrWLzNCsXcpBAqRrudixwoySc0AaX/Br0Nv8AwXF+Cmf+o/8A+mDUK/1+K/wQPAvxD8e/C3xXbePPhjrd/wCGtcsdwttQ0u5ls7qHehjfy5oSkibkZlO1hlSR04r6J/4eD/t7/wDRcPH3/hS6p/8AJFAH6Xf8HOf/ACm9+Nn/AF10X/0yWFfgjtb06V2nj34g+Ovil4puvHPxM1u/8R63fbDc6hqdzJd3U3losa+ZNMWkbaihRljhQB2r91P+DYj4a/Dv4uf8FiPh/wCB/ir4f07xNolzpmvtLp+q2kN7auY9LuGQtDOjxkowBX5eCKAP59a/2eP+CBRA/wCCN37Pg/6lWH/0dLX1/wD8O9P2Bf8Aoh/w/wD/AAmdK/8Akav8sH/gst+1P+0z+z7/AMFRPjX8FfgL8RvFHgfwf4d8RS2mlaF4f1e803TLGARRkQ2tnayxQQRgn7saKvtQB/r+5FOr/NG/4NLP2rf2ovjV/wAFS9R8I/GL4k+KfFmlL4G1e4Wy1jWL2+tvNS5sVWTyriV03qGIDYyMnmv9LmgD/En/AOCwoJ/4KuftIkd/iX4nx/4M7iv3N/4Mwf8AlKT4uH/VOtS/9OOmV/oweJP2GP2LfGXiG+8W+L/hB4I1XVdUme5vLy78P6bPcXE8pLPLLLJAzO7E5ZmJJPUmus+GP7Kv7MvwS16TxT8GPhz4X8JanNCbaS70XSLLT52hYqxjMltDGxQlVJXOMqOOKAPf6/w9v+Co4/42WftA/wDZRfE//p0uK/3Ca/w9/wDgqN/ykr/aBH/VRfEw/wDKpcUAf0m/8GS//J/PxX/7J+3/AKdLGv8AS7r/ADRP+DJj/k/n4r/9k/b/ANOljX+l3QA3evSv4Rv+D4cE/C/9nUAf8xTxH/6J06v4+v2n/wBvb9ufSP2lPiJpWlfGnx3a2tt4n1eKKCLxFqccaJHeSqqqi3AChRwABxX9SH/BpNe3v7dnxC+N2kftvSv8Y7Xw3p2hSaTB45b/AISGOwe6lvVna1XU/tAgMojQOYwu/au7O0YAP4N6K/3N/wDh3p+wL/0Q/wCH/wD4TOlf/I1J/wAO9v2BO3wP+H//AITOlf8AyNQB/Fr/AMGOfGrftH5/55eF/wCeqV/fV4rIHhXUx/06Tf8AoBr+DH/g7eiT9hKw+Bc37EAX4Nt4kk8QDVz4G/4p06gLRdONt9q/sz7P5/keY/leZu8veduNxz/FvJ/wUD/bzlTy5fjb4+ZWGCD4l1QgjpyPtFAHyjqg/wCJlcj/AKaP/Os/aw7UrOzks3Xr+df3pf8ABmf+zn+z78d/ht8e7n42+BPD3jKXTdS8PraNrml2moG3EkN9vERuY5CgYoNwXHQelAH8FVFf7mv/AA72/YD/AOiH/D//AMJnSv8A5Gpf+Hev7Af/AEQ/4f8A/hM6V/8AI1AH+GTT9jYziv8AcyH/AAT3/YCPT4IfD/8A8JnSv/kavk79vD9gz9h/w7+w/wDGXxD4f+DPgWwv9P8AA3iOe2ubfw7pkU0MsemXDJJG624ZXVgCGBBBHBoA/wAXuv8ATr/4MreP+CafxA/7KLef+mrTa/zFK/06f+DLD5f+CafxAB4/4uJef+mvTaAP7D6KaGB6U6gD/LH/AODyHB/4K36bj/on+jf+ld/X4/f8EVFK/wDBW79nInjHj/Q//SuOv9jP4mfsp/su/GrxEPF3xj+G3hfxZqqQrbi91jR7K/uBEmSsYluIXfYpZsLnAyeK/Lv/AIKsfskfsqfBD/gmv8cfjB8Fvhn4U8IeLfDXgzV9R0jW9E0Wx0/UdPvILZ3iuLW6toUmgmjOCkkbqykcEUAfuVX+UN/wd3qW/wCCyGuED/mVdB/9EvX4g/8ADwj9vf8A6Lh4/wD/AApdU/8Akiv9G3/g2g+Dfwf/AGxP+CXmlfGf9rfwpo/xT8Yy+ItYtX1zxdY2+t6m1vbyIIoTd36TTlIx9xd+1ewFAH8SH/Bt8CP+C2fwEJ7arqH/AKab2v8AY5r5h8FfsYfse/DbxVZ+Ofhx8J/Bvh/WtOJa01DTtC0+0uoCylCYpoYEkQlWKnaw44r6eoAbuWv58P8Ag6TZf+HIXxf/AOuugf8Ap7sq/i2/4OUP2w/2ufhT/wAFkPit4D+GHxT8XeGtDsotDNvp+ma3f2drF5mj2cjbIYZ0jXczFjhRyc1x3/BvX8fvjx+1X/wVn+GPwM/af8ba98SPBWsR6yb/AMP+KNSutY0q6+z6TeTRefZ3sk0EnlyIsib0O1wGGCAaAP5kq/2F/wDg2YIH/BDz4ED0tdbH/lf1IV+kH/DvT9gX/oh/w/8A/CZ0r/5Gr6L8CeAfAnwv8K2fgP4aaLYeHdDsAwtdO0y2is7WAO7OwighVI0y7Fm2qOST3oA/n3/4Ovf+UJvxH/7Cvh3/ANO1rX+SLX+tx/wdesv/AA5O+Iy5Gf7V8O8f9xa2/wAK/wAkegD/AGef+CBP/KG39nv/ALFWH/0dLX5ff8HkXzf8EkdN2/8ARQNG/wDSTUK/UD/ggUR/w5u/Z7Xv/wAIrDx/22lr9NfiV8JfhV8ZvDq+D/jD4Z0rxZpCyrOtlrNlBf2wljBCSeTcI671DEBsZGSM0Af4KVFf7m//AA70/YF/6If8P/8AwmdK/wDkaj/h3p+wL/0Q/wCH/wD4TOlf/I1AH+GUFJ4FNr/SB/4O+v2Wv2Zfgd/wTd8FeKPgz8OfC/hHU5/iHp9rJd6JpFlp87wNpeqOYjJbQxsYyUUlScZVeOK/zfqAHbW9Pam1/s0f8E5/2Ef2IvE//BPf4FeJvEnwb8DajqOp/DzwvdXd3deHdMlnnnl0m1d5ZZGtyzuzEks3JPevs3/h3v8AsB9P+FH/AA//APCZ0r/5GoA/wyqK/wBzb/h3r+wH/wBEP+H/AP4TOlf/ACNSf8O9v2A/+iH/AA//APCZ0r/5GoA/wzAjHoKv6V/yErb/AK6p/Ov7xP8Ag8w/Zz/Z8+A/w2+Alz8EfAnh7wZLqWpeIFu20LS7TTzcCKGx2CU20cZcKXO0NnGTX8Hmlf8AIStv+uqfzoA/3xvCf/Iq6Z/16Q/+gCv4Iv8Ag+T5P7NOP+pt/wDcPX97fhNl/wCEV0z/AK9If/Ra1518Vf2efgJ8dhYj43+CPD/jH+y/M+xnXNNtNR+zebt8zyftMUnl79i7tuM7VznFAH+DdRX+5r/w72/YD6f8KP8Ah/8A+EzpX/yNTv8Ah3p+wL/0Q/4f/wDhM6V/8jUAf4ZWxsZxxX0B+yfz+1J8NAO3irRv/S6Gv64/+Dy/4B/Ar4F/Ev4CWvwR8FaD4Oj1PTdfe7TQtNtdPFw0U1iEMotoow5UM23d0ya/kd/ZN/5Om+Gp/wCpp0X/ANLoaAP93WiiigAooooA/wA4H/g8B/5SV+B/+yZab/6edZr+U2v6sv8Ag8B/5SV+B/8AsmWm/wDp51mv5TaACiiigAooooAKKKKACiiigAooooAKKKKAP//W/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACv5ef+C+P/AAQM+L3/AAWB+LvgD4kfDfx9o/g+HwfpFzps0OpW1xM0zTziUMhhOAABjBr+oaigD/OD/wCIIf8Aan/6Lf4U/wDBffUf8QQ/7U3/AEW/wr/4Lr3/ABr/AEfKKAP84P8A4gh/2p/+i3+FP/BffV9I/sd/8GfH7SX7NH7WXwy/aJ1z4w+G9TsvAfinR/EE9pBY3aSTxabeRXLxIWyoZ1jKgnpmv766KACv8vX/AIPP/wDlKX4S/wCyc6b/AOnHUq/1Cq/y9f8Ag8//AOUpfhL/ALJzpv8A6cdSoA/E/wD4Ip/8pb/2cv8AsoGh/wDpWlf7XVf4ov8AwRT/AOUt/wCzl/2UDQ//AErSv9rqgD+ZX/gqT/wcwfA3/glz+1dd/sn+PvhlrvinULPTbLUjfWF3bQwlLxC6pskG7K4we1eWfsB/8HWf7Pv7fn7X3gn9kHwh8KPEPh/UfGtzPbQX95e2ssEJgtZbkl0jG4giEjj1Ffyhf8Hdw3f8FkdbK/8AQraD/wCiXr5B/wCDb1WH/BbP4CHHTVdQ/D/iU3tAH+xxX+RL/wAHUv8AynE+Lv8A16+G/wD0wWFf67Vf5Ev/AAdS/wDKcT4u/wDXr4b/APTBYUAfmN/wTl/Yk8Uf8FGf2xvCP7HPgnW7Tw3qXi77d5OoXsbywQ/YbGe9bekfzncsBQY6E+lf1L/8QQ/7U/8A0W/wp/4L76vyC/4Nef8AlOL8FP8AuP8A/ph1Cv8AX5oA/wA4P/iCH/an/wCi3+FP/BffV+of/BHj/g2C+O3/AATQ/bz8Mfte+OPidoPiXTtAtNStn0+xs7mKeQ31nLbIVeQ7BsMgJ47cV/ZsXQdeKN64zQA+v8YX/gvp/wApkv2hP+xrm/8ARUVf7PVf4wv/AAX0/wCUyX7Qn/Y1zf8AoqKgD9Qv+DN3/lLfqX/Ygaz/AOldhX+pxX+WP/wZu/8AKW/Uv+xA1n/0rsK/1OKACiimGSNThiBQA+v8Pb/gqN/ykt/aB/7KN4n/APTpcV/uE1/h8f8ABUVD/wAPLP2gSP8Aoovic/8AlUuKAP6S/wDgyZ/5P5+K/wD2IB/9OtjX+l5X+aF/wZNED9vn4rA/9E/P/p1sa/0vaAP8834xf8GYP7T3xL+Lfir4jaf8aPC9pB4g1i+1KOF7C9LxpdzvKqEg4JAfB+lfuj/wQF/4IU/Fj/gjv4u+JniP4k+OtI8Yp47s9LtoF0y2ntzbmwkuXYv53Xd54xjptr+mGmb0/KgB9fxO+Jf+D1r9l7wz4j1Dw5P8FPFMr6fcy2zOuoWQDGJyhI474r+2Kv8ABH+K/wDyVHxL/wBhW8/9HPQB/d78cL0f8Hiw03TP2al/4U43wB82S/bxN/p/9oDxHtEQh+x/c8n+zW37uu8Y6V846l/wZL/tSaXptxqL/G3wqy28TyFRp97yEGcdfavff+DHL/kL/tIf9cvC/wDPVK/vr8V/8irqf/XrN/6AaAP8DG5h+zXDwE5MbFc/Tiv9DP8A4Mdv+SX/ALRX/YU8N/8AonUK/wA9TVP+Qjc/9dX/APQq/wBCv/gx2/5Jf+0V/wBhTw3/AOidQoA/t++J/ja1+GPw18QfEi+ge5g8P6Zd6lJDGQHkS0haZlUngEhMCv4wf+I3j9ln/oh/ir/wY2X+Ff18/tZkf8MsfEtf+pV1n/0hmr/CKoA/2bf+CPn/AAWC+G3/AAWD+G3jH4kfDjwdqfg+DwfqUGmzQ6lPDO0z3EHnBkMPAUDjBr7K/wCChP8AyYL8cf8AsQPEv/pquK/lC/4MiuP2WvjgD/0NWnf+kJr+r3/goT/yYL8cf+xA8S/+mq4oA/wyK/rD/wCCEf8AwcRfBj/gkb+yv4k/Z9+Inw61rxdea54nn15LvTbq3gjSOW0tbYRFZRnINuW/4FX8nlO2MADjg/0oA/06/wBmD/g7+/Zw/ag/aP8AAn7N/h/4QeJNKvfHevafoNveXF9aPFbyahOlusjqoyVQvkgdcV/YXX+Ix/wSQRh/wVI/Z446fEbw1/6cYK/256AP5sf+Crv/AAchfBH/AIJRftPwfsvfEP4a654sv7jRLTWxe6fd20EAju5Z4lj2SjduBgJPbmvwc/bv/wCDur9nL9rn9jL4nfsw+HPhF4j0i/8AHvhu/wBEgvbi+tHhgkvIWiEjogBKqSCQK/Pj/g8h/wCUt+m/9iBo3/pXf1/J/QAV/Yp/wRb/AODmD4F/8Euv2HbD9k/x98Mtc8U39prGoakb6wvLaGApeOrqmyUbsrjB7V/HXRQB/qd/sA/8HWf7Pv7ff7X/AIK/ZB8IfCnxDoGo+Nbme2gv7y9tJIIDBay3JLpGA5ysJHB6mv6va/xxf+Db3/lNp8A/+wrqH/ppva/2OqAP4q/+CuH/AAa2fHr/AIKN/t9eNv2wfBPxR0Dw3pnipdNWLT72zupZ4fsWn29m254zsO5oSy4HANH/AASP/wCDWz49f8E4/wBvrwT+2D42+KOgeI9M8KrqKy6fZWd1FPL9t0+4s02vIdg2tMGPHQV/apRQAV/Kj/wUN/4OpPgB/wAE8/2xfGn7HXjL4VeIPEWpeDJLSKfULK9tYreb7ZY296uxJBuG1bgKc919K/qur/Hn/wCDmf8A5TifHf8A6+tE/wDTBptAH6sf8Fif+Dn34Ef8FL/2C/E/7IPgX4X694Z1HX7vTbmPUL68tpYIxY3kVyylIhuO5Yyox0zX8Y9FFAH90P8AwTl/4Ozv2d/2JP2H/hr+yh4p+EviLXL/AMDaOmmz31re2kcM7o7PuRHG4D5uhr+gn/glD/wchfBH/gq7+0/P+y98PPhrrnhO/t9EutbN7qF3bTQGO0lgiaPZEN24mcEdvlr/ACVa/rA/4M3f+Ut+pf8AYgaz/wCldhQB/qcUUUzzE9elAH8gn/B6d/yjA8Cf9lK07/006tX+YLX+nz/wemEN/wAEwPAoHb4lad/6adVr/MGoA/3GP+CZH/KNr9nv/smnhP8A9M9rXzf/AMFff+Cs3w8/4JCfBPwz8bfiP4R1HxfaeJdcGiRW2mzxQSRSG2mufMYyjBXERGB619If8EyP+UbX7Pf/AGTTwn/6Z7Wv5ov+D2Ubv2BvhRt7eP1/9Nd7QBwH/Ebx+yz/ANEP8Vf+DGy/wr+z74YeNrX4nfDXw98SLGB7WDxBplpqUcLkF40uoUmVSRxkB8HHpX+CLX+7r+yYR/wyx8NF/wCpV0b9LGGgD+Mb/g+J/wCSX/s6/wDYU8R/+idOr/POtJkt7qKdhkRspx9DX+hj/wAHxP8AyS/9nX/sKeI//ROnV/niYPSgD/Ro0f8A4Paf2W9M0i102T4I+KWaCJIyRqFlzsULnp7Vp/8AEbx+yz/0Q/xV/wCDGy/wr/OF2t6U2gD/AEhtN/4Paf2XNS1C30yL4I+KUaeRIgx1Cy43nHpX9uVf4FHhRSfFGm47XUP/AKGtf769AH8z3/Bfr/ghT8WP+CxHi74Z+I/hr460jwcngSz1O2nXU7aeczm/ktnUp5OMbfIOc+tfhd8Hf+DMH9p74Z/Fvwr8RtQ+NHhe6g8PaxYak8KWF6HkS0nSVkUk4BITAr/Qypu9emaAHUUUUAFFFFAH+cD/AMHgP/KSvwP/ANky03/086zX8ptf1Zf8HgP/ACkr8D/9ky03/wBPOs1/KbQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9f+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAKbuXGe1Or+eD/gtB/wX68Jf8Edvid4L+GviT4Z3fjp/GWlz6mlxbamlgLdYJvJ2FWtpt2TzwVoA/ofor+EP/iOK+Ff/AEbtqv8A4UcH/wAr6P8AiOK+Ff8A0btqv/hRwf8AyvoA/u8or+EP/iOK+Ff/AEbtqv8A4UcH/wAr6P8AiOK+Ff8A0btqv/hRwf8AyvoA/u8r/L1/4PPef+CpXhIj/onOmf8Apx1Kv1O/4jivhX/0btqv/hRwf/K+v5U/+C2v/BUzw9/wVv8A2sNH/aT0DwZceB4dL8N2ugmxuL1b93a2urq483zFhhABFwF27f4etAHl3/BFQEf8Fbv2cj2/4WBof/pXHX+1zX+Fr+w/+0hZfsh/thfDX9qLUdKfXIPAPiKw1yTT4pRA9ytlKshiWVkcIWxjdtOPSv7jv+I4r4V/9G7ar/4UcH/yvoA/tf8AF/wE+B/xB1hvEXj/AMGaFruoOixtc6hp1rczFE+6u+WNmwueBnAqn4c/Zy+AHg3W7bxJ4P8AAvh7StRszugurPTLSCaIkbSUkjiVlypI4PSv4rP+I4r4V/8ARu2q/wDhRwf/ACvo/wCI4r4V/wDRu2q/+FHB/wDK+gD+7yv8iX/g6j+f/guH8XSvT7L4b/8ATDYD/wCtX9D3/EcV8K/+jdtV/wDCjg/+V9fxzf8ABWT9vHSP+Clf7d3jH9sfRfDcvhG28UxaZGmlz3K3jw/2fp9vYnMyxQh95g3j5RgNjtQB9uf8GvXyf8Fxfgpu4/5GD/0w6j/n9K/1+a/xGv8AglX+3JpX/BOH9vDwR+2Tq/h2XxXbeEf7R3aVBci0ef7dp1zYriZo5Quwzh/uHhcV/ZT/AMRxXwr/AOjdtV/8KOD/AOV9AH4Lf8HI/wC0L8ffBX/BZ/4zeGfBXjjX9J061l0fybSy1K6t4IgdHsmYJHHKqruYlmwOuTXpP/Brl8ffjv49/wCCzHw78N+OvGuvazps2l6+XtL/AFG6uYGKaVcMuY5ZGU7WAI44PSv1C8Sf8EMPFf8AwcW63P8A8Fi/BfxGtfhVpvxg2yQ+F73TX1aex/scDR2D3sdxarL5jWXmriFdoYJ2yX+Fv+COvib/AINktaj/AOCwPjnx3bfF3TvACtpknhmwsG0ae6bXh/Zaut5LNdoghNwJCDCd4XHyn5qAP9Bev8Yb/gvoD/w+S/aEx/0Nc3/oqKv6vf8AiOK+Ff8A0btqv/hRwf8AyvrxrXf+Dczxp/wW81i5/wCCsnhb4q2Xw80/46t/wklv4butJk1GXTUkxEIHuo7q3SYjys7hEg/2aAPzp/4M3lI/4K26k+OP+EA1n/0rsK/1N6/z8PCP/BOfW/8Ag051Y/8ABUP4heKoPjZYagh8Djw/p9o2hzLJq2LkXX2qWS8XbGLEqU8rJ3jkYr1P/iOK+Ff/AEbtqv8A4UcH/wAr6AP7ud6dM1/KD/weFfEDx78Nf+CZnhPXPh3rd/oF7J8QdOie4065ltZWjOnaiSheFlJUkKcdOK/o1/ZJ+Ptr+1d+y78O/wBpyx0ttFg8f+HNN8QxWEkone1XUbZLgQmQKgcoH27gq5x0FfzO/wDB6D/yi38If9lE03/03alQB/m6f8NX/tSf9FJ8U/8Ag5vv/j1f7EP/AATh/Z5+AHjr/gnz8DvGXjXwN4e1jWdW8BeHby+vr3TLS4ubm5m023eWeaWSJmkkkclndiSzHJ5r/Ffr+7n9lH/g8c+Gv7Nv7MPw8/Z6vfgPqWqy+BvDelaC97Hr0MKXB060itjKsZsWKBzHuCljj1NAH3X/AMHefh/w/wDs0/sSfDXxT+zjY2/w/wBTvvG4tLq78NxrpU81v/Zt2/kyyWYiZ496q2wnbuUHqBX+e1/w1f8AtSf9FJ8U/wDg5vv/AI9X9w/jT9qqy/4PArGL9iH4b6K/wMufhk48cS6tqUw16O8jUHTfsqwQpYmM5vN+/ewwuNvOR5r/AMQOnxT/AOjidK/8Jyf/AOWFAH8Yn/DVv7U3/RSfFPH/AFGb7/49X9wP/Bln8Xfit8TPiZ8f7f4keKNW8QR2ml+H2t11K9nuxEXmv95QTO4TIC5x6DNfwgfFPwQ/wv8Aib4j+GstwLuTw9qd3pjTquwSGzmaEuqnO0MUzjPFft3/AMEIf+C1Hhj/AII3eK/iP4l8SeALrx6PHlpptskdtqKaf9m/s97h8nfbz79/n4GNuNtAH+v1X+CT8V0YfFHxLx11S8I+nnPX9/X/ABHFfCv/AKN21X/wo4P/AJX14NL/AMGWXxP+J0jfEm3+P+l2cfiHOprbnw9M5jF3+9CFhfKDtD4ztH0oA6n/AIMc/l1b9pDP/PLwt/PVP8+1f31+K/8AkVdT/wCvWb/0A1/Px/wQf/4IZeK/+CN158S7rxN8RrXx8PH6aUkYttNfT/sv9mm6677iffv+0DGNuNtf0D+K/wDkVdT/AOvWb/0A0Af4HOqf8hK5/wCur/zr/Qq/4MdyB8L/ANokf9RTw3/6J1Cv89bVf+Qlc/8AXR/51/Rb/wAEIf8Agu/4T/4I3+FPiP4b8S/De78e/wDCeXemXMbW2pJYC1Gnx3KEFXt59+/zx02420Af61l3Y2uoWsthfxJNBOjRyRuAyMjDaVKnggjgg8V4V/wyZ+yx/wBE08Kf+CWx/wDjNfxi/wDEcV8K/wDo3bVf/Cjg/wDlfR/xHFfCv/o3bVf/AAo4P/lfQB/b/wCCPhh8OfhlazWHw28P6b4eguX8yaPTLSG0SRwMBnWFFDEDgGvnn/goSw/4YG+OP/YgeJf/AE1XFfyDf8RxXwr/AOjdtV/8KOD/AOV9eKftG/8AB5j8Nfjr+z347+CNl8BNS0yXxl4e1TQ0u38QQyi3OoWklsspQWKlgnmbtoI6YoA/gur/AEmP+DOj4KfBn4k/8E6PHetfEfwjomv3cXxBu4Y59S0+3upRGNM05givKjEKGLHA45r/ADZ6/qc/4Igf8HF3gz/gkP8Asx+If2fNf+Fd745l1zxHNry3tvq0dgkay2ltbCExtazEkfZ927cPvdOKAP8ATl0r9mf9m7QNUttb8P8Aw+8NWV9Zus0E9vpNnHLE6HKOjrECjKQCpHIxxXu9fxe/sp/8Hh3w4/aj/aa+H/7Nth8CdR0ebx74g07QUvn16GZLZtQnS3EpiFihcIXyUDLnHUV/aFQB/lj/APB5Bz/wVv03H/QgaN/6V39fyf1/qY/8FqP+Da7xr/wVj/bCtv2ovD/xXsvBUFv4dstDOn3GkyXrlrSW4kMvmpdQjDCfG3b/AA9a/Ir/AIgdPin/ANHE6V/4Tk//AMsKAP4Q6K/u8/4gdPin/wBHE6V/4Tk//wAsKP8AiB0+Kf8A0cTpX/hOT/8AywoA/AT/AINvkdf+C2nwEyP+YpqB/D+yb2v9jev8+Lw7/wAEBvGH/Bv9rEH/AAWB8XfEuz+Jum/BI/2nP4Zs9LfS59QF6v8AZaxpeSXFykOw3nmZMLcJtAyQV9h/4jivhX/0btqv/hRwf/K+gD+7ym7hX8Iv/EcV8K/+jdtV/wDCjg/+V9feH/BMz/g6c8C/8FJf2z/CX7Heh/Bq+8J3fipL1k1SfWYrxIfsNlNeEGFbSEtuEJThhjNAH9Zlf49H/BzMC3/BcP47lf8An60T/wBMOm//AKq/2F6/jD/4Ki/8Gpfj/wD4KIft4ePv2yNG+M+n+FrXxpLYSJpc2iS3T2/2PT7ayIMy3kYbcbffwg4OKAP80Oiv7vP+IHT4p/8ARxOlf+E5P/8ALCj/AIgdPin/ANHE6V/4Tk//AMsKAP4RdjcYHtX9X3/Bm/8AL/wVv1Ldx/xb/Wf/AErsK/n4/bs/ZXvf2IP2vPHv7Juq6zH4huPAmqPpj6lFAbdLkoiPvEJZyg+bGCzV9f8A/BFj/gpv4f8A+CTf7YVz+1Hr3hCfxrBP4evdDGn294ti4a7lt5PN81oZhhfIxt2/xdeKAP8AaAr/ABif+CrH7S/7SWg/8FMvj9ougfEDxJZ2Np8QfEUUFvb6reRxRRrqM4REjWUKiquAqjgY4r+rr/iOK+Ff/Ru2q/8AhRwf/K+v4WP2wvj3ZftR/tWfEj9pKx019Gh8e+JNT15LCSUTvbLqF09wITKFQOUD7dwVc4+6KAPP/Gvxv+MvxJ0qPQviJ4v1rX7KOQTJBqV/cXUSSKCodUldlDBWYZAzgmvKqKKAP9xX/gmTIg/4Jt/s9rn/AJpp4T/TR7T+VfVXjj4afDz4m6fDpPxJ0DTvENpBJ5sUOpWsN1Gj4K7lSVWUNtJGR2NfwA/st/8AB5H8N/2df2Zfh1+z9e/AbUtVl8C+GNI8PPep4ghiW4Ol2UVoZhGbFigcxbgpZsZ6173/AMRxXwr/AOjdtV/8KOD/AOV9AH9nX/DJn7LH/RNPCn/glsf/AIzXutnZW2n2sVhp8SQQQIscccYCoiINqqqjgKBwAOBX8KH/ABHFfCv/AKN21X/wo4P/AJX0f8RxXwr/AOjdtV/8KOD/AOV9ACf8HxBH/Cr/ANnX/sKeJP8A0Tp1f56mmKr6jbqwyPMUY9s1/Rd/wXd/4LweFf8Agsh4V+G/hzw18OLvwEfAd3qdxI9zqaX4uRqCWyKAEtoNmzyO+etfzp6V/wAhK2/66J/OgD/dF8LfsofsuS+GdNkk+GvhVma2hJJ0ax/55r/0xrc/4ZQ/ZUztHw18J5/7A1j/APGa9l8J/wDIq6Z/16Q/+gCvw9/4LW/8FwfCv/BGk/DhvE3w6uvHv/Cwv7V8v7NqMen/AGX+y/snXfbz7/M+18Y27dvvwAfqD4l/ZT/Zeh8OahPb/DbwskkdtKysujWQKkIcFSIfUV/iT/8ADV/7Un/RSfFP/g5vv/j1f3bP/wAHtfww8TIfDafs86pGb8fZg58RwnaZcID/AMg/tmvBv+IHT4p/9HE6V/4Tk/8A8sKAP4xP+GrP2pv+ik+Kf/Bze/8Ax6vev2Wv2pf2m7/9pr4c2F58R/FE0E3ibSY3jfV71kZHvIgVZTLggjgjpX2X/wAFpv8Agi14o/4I3eJfh/4a8UfEC18et48tdQuY5LXT30/7KNOe3QqQ88+/f54xjbjbX5efsm/8nTfDX/sadF/9LoaAP93WiiigAooooA/zgf8Ag8B/5SV+B/8AsmWm/wDp51mv5Ta/qy/4PAf+Ulfgf/smWm/+nnWa/lNoAKKKKACiiigAooooAKKKKACiiigAooooA//Q/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACv84r/AIPbrW6u/wBqP4ItaxPIF8KagDtUnH+nD0r/AEdax73RtL1NkfULaKcqODJGrYB7DNAH+Ba2maiilngkAXr8p44z/Ln6VRr/AHFf+Cgvhjw5D+wT8bpotPtkZPAPiXBEKDbjS7jHQdsD8q/w68H0oAtRWF7OpeCF3A4yqk9PpUn9lan/AM+0v/fB/wAK/wBLn/gy10XR9R/4JxfEea/tIZpF+JF0AZI1bj+yNLx1Hr6Y/nX9h3/CK+Fv+gda/wDflP8A4mgD/A4/srU/+faX/vg/4VBNaXNuQtxGUJ6Bhiv99D/hE/C//QNtf+/Mf/xNf5hf/B5bYWOnf8FRvCUGmwJbofh3ppKxoFBP9o6kM4XAPAH4YoA/kbooooAuRaffzoJIIXdT0KqT0+lK+m6hEhklhdVUZJK4AHT/AOtX+qp/waP6Fod//wAEd9GuL6xhnkPijXPmeNWbAlTAOR+VfXf/AAcceHtAsv8Agip8eLmzsII5U0vTyGjiUMM6rZLwRg9D+VAH+PHRRS4NACUUu0+lJQB/sE/8GxP/AChA+Cf/AFy1v/0939eZf8HW6PP/AMEUPiNHApdjqvh0gKMnA1a2PQewr0v/AINimA/4IhfBNe/la3/6er6v3hurO2vojbXsaSxt1R1BU4OehHbjt9KAP8Cb+ytT/wCfaX/vg/4V/sv/APBBK/sbT/gjn+z7b3UyRyJ4WhBVmAI/eynGPpX61f8ACJ+F/wDoG2v/AH5j/wDia/xuv+C8uuazpP8AwWD+P+m6VdzW0EPimVEihkZEUCKPACrgAA0Af3Nf8HjuoWFz/wAEldNhtpkdv+E/0f5VYE8Wl/ngemR9K/y0q2bzXtZ1CEW9/eTTxgg7ZHZhwMdCccDgVjUAf7bP/BHn/lFF+zb/ANk08Mf+my3r8Nf+DzqCa6/4JdeEYrVDI3/CxNN4UZP/ACDtS9P89B6V+5X/AAR5/wCUUX7Nv/ZNPDH/AKbLev0LvNPsdSi8jUYEnQHhZEDDI4zg5Hf8qAP8Cr+ytT/59pf++D/hVRopEbY64I4weoxx0r/fU/4RPwv/ANA21/78x/8AxNf4jP8AwVAihg/4KR/H6KFAqJ8RPEoVV6KBqdyAMDpjA49qAP6S/wDgyY/5P5+K/wD2T9v/AE6WNf6Xdf5of/Bk1hf2+fiuD/0IBH/lVsa/0vKAP8Jj9rDTNRb9qX4kstvIR/wlWsdFPe9mx27jpXz7/ZWp/wDPtL/3wf8ACv8AfGfwr4clcvLp1sxJOf3SHPfPTvT/APhE/C//AEDbX/vzH/8AE0Af4G39lan/AM+0v/fB/wAK/wB6f4T4Hwt8NZ426VZg+xECcV0X/CJ+F/8AoG2v/fmP/wCJraVNqhAOBwOnGOn+cUATVz3irJ8LakqjJ+yzcD/cNb+9QcHimFVI2MMjH4elAH+Bbqulan/aVxi2l/1j/wAB9fpWPLZ3dvjz42TIyNwxxX++afCnhYkt/Ztrn/rknf8A4DX+ez/we66Vp2m/FH9nldOtorffpfiPd5aKmcTafjOB2oA/hSWN2IVRk+gq5/ZWp/8APtL/AN8H/Cvdf2UhG/7UXw2jlXcD4p0cEdQc3sIx+P5V/uqf8In4X/6Btr/35j/+JoA/wNv7K1P/AJ9pf++D/hR/ZWp/8+0v/fB/wr/fH/4RXwtj/kG2vp/qE/8Aiad/wifhf/oG2v8A35j/APiaAP8AA2/srU/+faX/AL4P+FQTWl1bt5dxG0Z9GGPav99D/hE/C/8A0DbX/vzH/wDE1/mU/wDB59Yafpn/AAUn8BQabBHbKfh3Z/LGqoMnVNRGflx6UAfgZ/wSQ/5Sj/s7/wDZRPDf/pxgr/bpr/EW/wCCSHH/AAVH/Z3z/wBFF8Nf+nGCv9umgAqNpokUu7BVUZJPAwP8Kkr8wP8AgtHLLb/8EmP2ibi3Yo8fgLWyrLwQRavg59sUAfpf/a2lf8/MX/fa1Yhura4QSW7q6noVORX+Bh/wlnif/oJXX/f1/wDGv9WD/g0fvr3UP+CO+jXF/M87nxRrnLkscebH68/09KAPrn/g5C/5QlfHv/sFaf8A+nayr/HFr/Y4/wCDkJh/w5L+PY/6hWnj/wAq1lX+ORg+lACV/QZ/wa5yR2//AAW3+EE87BEEWvckgD/kCXor+fTB9K0LW9ubG4F3ZyPFKnRkJVuevIoA/wB9f+1tK/5+Yv8Avtasx3NvLGJYXDKeAV5H6V/gYf8ACVeKf+gldf8Af1/8a/1+v+DaW6uL7/giH8C7u9laWRrXW9zudx413UccnPQfyx2xQB+7lFFFAH+Ml/wX00++l/4LHftByRQuynxVNghSR/qYq/H+WwvbePzZ4mReOWGBz0/lx9K/3zrjw3oN3O1xcWFvJI33neJCTx1zjn0r+Uj/AIPEtC0TTv8Agkzps+n2cMEn/CfaON8caK2Pst/xkAfjQB/lu1fTStSkRXjt5CrDIIU4NUK/2xv+CSvhnw7df8Evf2eZrjT7aR2+HfhvLNCjbidNgJOSOaAP8UWbT763TzJ4XRemWUgdM4/L9Kp1/pw/8HnuhaLpn/BMXwNc6dZwwO3xJ04ZjjVDg6Vqp/hA9P8APFf5j1ABVmGzurg4gjZzjOFGfbt78VWr+zD/AIMqdO0/U/29firDfwJOi+AWIEihh/yFLEdx/kUAfxvf2Vqf/PtL/wB8H/CqbRuh2sMEdq/31f8AhE/C/wD0DbX/AL8x/wDxNf4Vn7ViJH+1F8SI4l2AeKNX2jpgC9mAGPbt246UAeBw2d3cf8e8bPgZ+UZwPwrZ0vSdVXUrbNtKMSJ/AfX6V/cb/wAGRWl6dqXxR/aFGo20U+zSvDm3zED7czX+eowK/wBBXVPCfhb+zLnbptqD5T9IU/u/TtQBJ4T1bSx4V03NzFxawg/OOMIvFfwZ/wDB8J/xNf8Ahmv+y/8ASNn/AAlmfK+bH/II9Pp+lfwi+KPFPiceKNR26lcjbcygfvn4w5xjkelf3c/8GRn/ABU3/DSP/CSf8TDyP+ET8v7V+98vP9r5xvztzgdPT2oA/gz8KaVqY8Uadm2k4uYc/IeAHX24r/e5/tbSv+fmL/vta4zxT4U8L/8ACL6jt022+W2lI/cpxhDjHA9K/wAGz/hKvFP/AEErr/v6/wDjQB/cr/we/wBzb3nxS/Z5+xusu3SvEgOwg4/faf6fT9K/jL/ZN/5Om+Gv/Y06L/6XQ14lf6pqOpFDqNxJcbfu+Y5fb+ecV7b+yb/ydN8Nf+xp0X/0uhoA/wB3WiiigAooooA/zgf+DwH/AJSV+B/+yZab/wCnnWa/lNr+rL/g8B/5SV+B/wDsmWm/+nnWa/lNoAKKKKACiiigAooooAKKKKACiiigAooooA//0f4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr+bL/guD/wAF/br/AII6/FPwN8Nofhanj7/hMdKudU89tX/s37P5E/kbNotLndn727K/Sv6Ta/zg/wDg92/5Ol+B/wD2Kmof+lwoA9wT/g7f1D9uyZP2IpvgXF4aX4yY8DHV18Qm6OnjxD/xLPtQt/7Oi83yPtAl8vzE3bdu5fvV0H/EDjpf/Rx8n/hLj/5aV/Fb/wAE/wC4t7P9vD4JXd26xRRePfDbO7kKqquqW5JJPAAFf7f3/C2fhX/0Mulf+BkH/wAXQB+Wn/BFn/gk3F/wSC/Zv8Sfs+w+OG8er4g8STeIftrWA07yvNs7W08nyhPcbsC23btw+9jbxmv0C/aw+N7/ALMP7L3xF/aPj00ax/wgPhnVfEP2Ay+R9p/sy0kufI80I/l+Z5YXdsbb/dNek/8AC2fhX/0Mulf+BkH/AMXXwZ/wVJ+Ifw/17/gml+0Houh65p95eXfw58TwQQQXMTySSPpVwqIiKxLMxIAAGTxigD+SX/iOO1T/AKNvi/8ACpb/AOVdfzE/8Fl/+Cpsn/BXL9qHSP2lLrwWvgVtL8O22gf2et8dQDi3uLm487zTBb43faNu3Zxt61+ZX/Cpvin/ANCzqv8A4BT/APxFH/Cpvin/ANCzqv8A4BT/APxFAHn9Fegf8Km+Kf8A0LOq/wDgFP8A/EUf8Km+Kf8A0LOq/wDgFP8A/EUAf05f8Ej/APg5xvf+CWP7Hdl+ybB8HY/GqWeqX2p/2k2tmwLG9cNs8kWM4+XGN2/n0Feu/wDBRv8A4OxL/wD4KBfsU+PP2PZ/ghF4WTxta29t/ag183ht/s91Dc58g6fCH3eTt++uM1/Jh/wqb4p/9Czqv/gFP/8AEVQ1L4d/EDRbF9T1jQtQtLaIAvLNayxxqCQoyzKAOSAKAOOr+vz/AIJUf8GtFn/wUu/Yb8IftlTfGl/CDeKpdSj/ALLXQRfCD+zr+exH777dBu3+Rv4RdudoyOa/kDr/AFq/+DW/4g+AtB/4IlfCXS9b1uws7mO58R7oZrmKN1zrt+RlWYEccjjpigD+V/8A4Kjf8GrNn/wTd/Ya8a/tlQ/Gt/FreD/7OxpTaAtms/27ULayP777fNt2efv/ANWc7dvA5r+PSv8AXJ/4OcfiJ8P9e/4Ik/GbSdD1zT7y6k/sHZDBcxSSNt13TycKrE8AEnjgCv8AI2oA/r4/4Jmf8HV19/wTp/Ym8Ffscw/BOLxYng9b1Rqh19rMz/bL2e8/1H9nzBNvnbPvn7ufav6E/wDgk5/wdFXv/BTj9t3w3+x5L8GI/Bya/aajc/2ouum+8r7BZyXOPI+wQBt/lbfvjb71/mS6V8O/H+u2Kapomh6heW0mdksFtLJGdpwcMqkcEEe2Mdq/oo/4NbvDHiTwF/wWY+Hnibxzp1zoumw6X4gSS7voXt4EZ9KuFUNJIFQEkgAZ6kCgD/Wfr/GG/wCC+ox/wWS/aEz/ANDXN/6Kir/Y5/4Wz8K/+hl0r/wMg/8Ai6/xvP8AgvPf2Gr/APBYT4/6lpM8dzbzeKZmjliYOjL5MXIZeCPpQB+RVFbGj+H9d8Q3f9n6BZTX04Xd5VvG0j7R1O1ATgfT0rqP+FTfFP8A6FnVf/AKf/4igD/aZ/4I8/8AKKL9m3/smnhj/wBNlvXjn/BaX/gqXcf8Eiv2WtI/aSt/BS+OjqviO20D7A1+dP2C4trq487zRBcZ2/Zwu3YPvdeK7X/gkl8QPAfh3/glx+ztoPiDWrCwvrP4c+GoJ7a4uIopYpE02BWR0dgyspGCCARivw2/4PJvG/gvxL/wTB8JWHhzV7K/nT4h6czR208crhRp2ogkqhJABIH4igD4I/4jjtU/6Nvi/wDCpb/5V1/Ef+0/8bT+0j+0l4+/aFew/sg+OfEWp6+bESed9m/tG6kufJEuxN4TzNu7au7H3RXgldzafDD4lX9tHeWPh7UpoZVDI8dpMysrAEFSFwQRjGO1AH6w/wDBFX/grhN/wR9+PXir4323gZfHn/CTaAdD+xtqB07yf9KgufN8wW9xu/1O3btA561/Sj/xHHap/wBG3xf+FS3/AMq6/g61rwV4x8N26XXiLSbywikO1XuIJIlJxnALqAeB+QrmaAP76/8AiOO1T/o2+L/wqW/+VdH/ABHHap/0bfF/4VLf/Kuv4UYvhX8T540lg8Oao6SKGQrZzEMpGQRhOQR09qf/AMKm+Kf/AELOq/8AgFP/APEUAf3V/wDEcdqn/Rt8X/hUt/8AKuj/AIjjtU/6Nvi/8Klv/lXX8Kn/AAqb4p/9Czqv/gFP/wDEUf8ACpvin/0LOq/+AU//AMRQB/rS/wDBDH/guXd/8FlL34k21x8Nk+H/APwr5NKYFNU/tH7V/aRusj/j1tvL2fZv9rdu7Y5/oA1W9Ol6Vc6lt3fZonkx67Fzj9K/gl/4MjvCfinwxqv7RZ8S6ZdaeJovDHl/aYXi37Tqedu8DOMjp0yK/vM8VAt4X1JFGSbWYAD/AHDQB/A5d/8AB8NqttdSW/8AwzjEfLZl/wCRoPbj/oF1Z07wMP8Ag8j3/EnULgfAA/AXGmC3iT/hI/7TGv8A77eWb+zfI8j7Djbtk3b+q7Rn+FPVPhR8UW1G4K+GtVx5jf8ALnP6/wC5X983/BlfND8MPhl+0DF8SmHh5rzU/DrW66l/ohlVIb8MUE2zcFyASOmRQByUv/BnPp/7MMZ/aTT4+yawfh6P+El+wHw2sH2r+yR9s8jzBqL+X5hi2btr7fvbW6Vgf8Rx2qf9G3xf+FS3/wAq6/tS/an+Jvw21H9mT4jafp/iHTJ55/C+rxxxx3cLM7NZShVVQ2SSSAAK/wAQL/hU3xT/AOhZ1X/wCn/+IoA/17v+CH3/AAWKn/4LF/Crxx8SZ/AC+AP+EM1W20wW66j/AGiJxPB52/d9mttm3pt2ke9fuVX8Tn/BlL4Z8SeGP2XfjZD4k0+5095fFOnlFuYXiLAWRBwHAzg8cV/a5cXNtZwPdXcixRRKWd3IVVVRkkk8AAfpQBPX8yP/AAWe/wCDc+1/4K8/tKaD+0Nc/Fd/AZ0Pw5DoAsV0ZdR8wRXVxcibzDeW+3/j427Qh+796v6Lv+Fs/Cv/AKGXSv8AwMg/+Lo/4Wz8K/8AoZdK/wDAyD/4ugD+E6b/AINZrP8A4JcQv/wUlh+ND+M5PgKP+E9XQToIsV1M+Hx/aH2Q3Qvp/I8/yfL8zypNm7dsb7tYf/Ecdqn/AEbfF/4VLf8Ayrr+sT/grL8T/hrf/wDBMD9oWxsfEOmzTS/DzxGsccd1CzMTp0wAVQ2Tk8DFf4qFAH99f/Ecdqn/AEbfF/4VLf8Ayrr5h/bR/wCDv7Uv2vv2TfiL+y5J8B4tBXx9oF9oR1EeITcm1F5EYvN8n+zohJtz93cn1r+LKigAr+rL/gkf/wAHON7/AMEsf2O7L9k2D4Ox+NUs9UvtT/tJtbNgWN64bZ5IsZx8uMbt/PoK/lNooA/vutv+C/V1/wAHAdwv/BHq6+F0fwtj+Nv/ABLD4pj1Y6sdOFh/xMw/2E2doJ9/2Pytvnx7d+4E7QDvf8QOOl/9HHyf+EuP/lpX82P/AAbe/wDKbT4B/wDYV1D/ANNN7X+x1QB/An/xA46X/wBHHyf+EuP/AJaUf8QOOl/9HHyf+EuP/lpX99lFAH8Cf/EDjpf/AEcfJ/4S4/8AlpWNdf8ABeG7/wCDdq4b/gjXZ/DNPitF8Ff9GXxU+qnRzqH9sD+28/YBa3gg8r+0DDxO+7y93y7tq/6Atf48/wDwcz/8pxPjv/19aJ/6YNNoA/oL/wCI47VP+jb4v/Cpb/5V0f8AEcdqn/Rt8X/hUt/8q6/go0rRNZ129XTdEtJry4cErFBG0jkKMnCqCTgDJ44FdZ/wqb4p/wDQs6r/AOAU/wD8RQB/dX/xHHap/wBG3xf+FS3/AMq6/Kb/AILE/wDBynff8FZf2S7b9ly4+EUfgdbfX7PXP7RXWm1An7JFcReT5X2K3Hzefndv/h+7X8vV/puoaVeSadqcEltcQna8UqlHU+hU4IPtirWj+H9d8Q3f9n6BZT31wF3eVbxtI+0dTtQE4H0oAyK/tk/ZL/4PEdQ/Zb/Ze+Hf7NsXwDi1keAvDmm6B9vPiJoPtP8AZ1vHbibyhpzhN+zdt3Nt7Ma/jb/4VN8U/wDoWdV/8Ap//iK4m7sbywuZLK+heCaFijxupVlYHBBU4IIPGKAP6aP+Czv/AAca3f8AwV3/AGY9D/ZyufhPH4EGjeJLfxD9uXWDqPmfZ7S6tvI8o2dvtz9p3bgx+7935uP5ja2dG8O+IPEd0bDw9Y3F9Oq7jHbxNKwUEDO1ATgEgfiK6f8A4VN8U/8AoWdV/wDAKf8A+IoA8/r+zz/gyY/5P5+K/wD2IB/9OtjX8Zl1Z3VjcPaXkbQyxMUdHG1lZTggg9CDxiv7NP8AgyX/AOT+fiv/ANk/b/06WNAH+l3X8KnxW/4MrtO+J3xR8S/Eg/tCy2f/AAkWq3mpm3/4RlX8r7VM8uzd/aS7tu/G7aOnSv7q64KX4q/C+3keGfxHpaPGSrKbyEFSDggjdxg8e1AH4S/8ERf+CDtt/wAEbvE3xD8SW/xLb4gf8J7a6bbGNtKGm/Zf7Pe4cEMLq437/P8ARdu3jNf0G3Vt9ptZbXp5ilM/UYrif+Fs/Cv/AKGXSv8AwMg/+LoHxY+FhO0eJdK/8DIP/i6AP4YtV/4MgdN1PVbnUj+0ZKv2iV5Nv/CML8u9if8AoJ1z9/8A8caGz+z/APjID/hoX7/m/wDFN/2V/wAIv027f7R+0faP7U/6ZeX5X8e75f7+ldHAKHIPTFfwTf8AB7t4T8U+KP8Ahm7/AIRnTLrUfI/4SvzPs0Ly7M/2RjdsBxnHGfSgDjf+I3DVPE//ABTX/DOkUP8AaH+jeZ/wk5bb5uEzt/swetdF/wAQOOl/9HHyf+EuP/lpX8J/hf4WfE6LxLp8knhzU1VbmEkmzmAADr/sdq/3XP8AhbPwr/6GXSv/AAMg/wDi6AP8jL/guT/wRYtv+CNniv4d+G4fiG3j/wD4Ty11K58xtMGnfZv7Pe3QKFFzcB9/n/7O3bxmvyX/AGTf+Tpvhr/2NOi/+l0Nf2O/8Htfirwv4o+J/wCz3L4Z1K11FYdL8RhzazJKFJm0/AbYTjOOPpX8cX7Jv/J03w1/7GnRf/S6GgD/AHdaKKKACiiigD/OB/4PAf8AlJX4H/7Jlpv/AKedZr+U2v6sv+DwH/lJX4H/AOyZab/6edZr+U2gAooooAKKKKACiiigAooooAKKKKACiiigD//S/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACv84P/AIPdv+Tpfgf/ANipqH/pcK/0fK/zhP8Ag92H/GU3wPH/AFKmof8ApcKAP4jAcA/7XH1/zx/9aq2D6V7Z+zn8Lrb47ftB+BPghd3radH4z8Q6Xob3ap5rW66jdx2xlCFl3FPM3bcgN04r+9D/AIgd/hX/ANHEar/4Tlv/APJ9AH+eHg+lfoJ/wSlJH/BUD9nQp1X4leFcf+De2/8A1fSv7OP+IHf4V/8ARxGq/wDhOW//AMn17t+y5/wZ1fDr9mX9pX4fftGWXx31LWJvAXiPS/EMdjJoEMKXLaZdR3KwtIL5igfywu7a23sDQB/aLRRRQAUUUUANDoehr8PP+DkDb/w5O+PTDvpWn/8Ap2sh1/T9K/Nj/gsd/wAHNnjn/glh+2pffsm6B8IrHxlBZ6Rp+pf2lcaxLZuTeIz7PKS0lGFxjO7mv53P+Chn/B1/4/8A2/8A9jPxz+x9rHwW0/wzbeNrW3tn1OHW5bp7f7PdQ3IYQtZxh8+SF5cetAH8i1Wm2sG2nPT/ADj6VVr+x7/gk1/wa1eBv+Cl37B3g79sfW/jJf8AhK58Uy6lG+lwaLFeJCNO1C4sRiZruEtvEAf7g25289aAP46twbr/AJ/D+VV8H0r/AEPP+IHf4V/9HEar/wCE5b//ACfR/wAQO/wr/wCjiNV/8Jy3/wDk+gD9yP8Ag2OGf+CIvwT3f88taHPX/kNX2PfpwPbHavMP+Drcj/hyd8R2GD/xNfDv/p2tuMH0Havwj8T/APBc7xT/AMG6OuT/APBHPwZ8ObP4qaZ8HyI4fE97qT6TPfjV1GsNvs4re5SLymvTCMTNuCbjjdgTeFP+CxfiT/g5s1uH/gj9428CWvwi07x8G1N/E1hfvrE9qdBU6oiLZywWauJmtxGT5y7Q2RnGKAP4IMH0qbOcZ9a/0Nv+IHf4V/8ARxGq/wDhOW//AMn0f8QO/wAK/wDo4jVf/Cct/wD5PoA/IL/gzic/8PbNRUnr4A1kf+TVhxX+pxX8xP8AwSI/4NsPB3/BJv8AaruP2ofD/wAWL3xrPcaDd6GdPn0iOxQLdy28vm+al1Mcr5AG3bjnrX9O1AH+JX/wWBwf+CrX7SIx1+JXifP/AINLj8MV+cW7PH9On0r/AEuv2tv+DPj4e/tWftR/ET9pm/8AjrqWizeP/EepeIX09NBhnS2bUbl7gwrKb5C4TeV3bF3Y6Cvnv/iB3+Ff/RxGq/8AhOW//wAn0Af54eD6V/t//wDBLfn/AIJq/s/9Ofh14Y+n/ILt+K/k8/4gd/hX/wBHEar/AOE5b/8AyfXheqf8HWPj3/gm/qdx/wAE89H+C+n+LLL4GyP4Bh1qbW5bSTUY/Drf2al29utnIsRmWAOYg77c7dzdaAPvL/g9fG39gn4U7Mf8j+p+n/ErvfTHpX+aJX9HP/BZT/g4Y8X/APBYD4F+F/gj4k+F9l4Fi8M66NcS7ttUkv2mYWs1t5RR7aDaP3xbcGPTGK/nGoA/3cv2Tkx+yz8NMd/Cujf+kMNfQ1fPv7JvP7LPw0I/6FTRv/SGGvoKgAooooAg2vnoKkIyu0j/APVT6KAGjNf55H/B8CB/wtP9nhjx/wASvxHj/v8AWHb2/Dp9K/0Oa/AH/gtN/wAEH/C3/BY/xN8PvEfiT4kXfgM+A7XULZEttNjv/tIv3t3JYvcQbNnkD+9nNAH+Ub+ygw/4aj+GpPbxTo/p/wA/0P8An2r/AHcK/h++F3/Bll8Nvhj8TvDnxKt/j/qd3J4e1Oz1NYG8PwoJTaTJME3C/JXcUxuA/Cv7gaAKzfL/AE/Kvj//AIKEjP7A/wAcB1/4t/4l/wDTXcfpxxX4yf8ABdT/AIL9+MP+COvxZ8CfDXw58M7Px2njLSbjU2nudTksDAYJxCIwqW0wYH14r8MdP/4O2vH/AO3XfQfsRat8EdO8OWvxkkXwPNq0WuTXMlgniEjTWukgazjWVoBPvCF03bdu5RzQB/B1g+lGD6V/oef8QO/wr/6OI1X/AMJy3/8Ak+j/AIgd/hX/ANHEar/4Tlv/APJ9AH+eWQFHB/z61Wr+6v8AbE/4M8/h5+y1+yf8SP2kbH47alrMvgPw1qevJp76BDAly2n2z3AiaUXzlA+zbu2tt9DX8KlADthxSYPpX9Y//BFf/g2w8F/8FZP2Prn9qDX/AIs3vgqe38Q3uhjT7fSI75CtpDbSiXzXuoTlvPPy7MDHWv11/wCIHf4V/wDRxGq/+E5b/wDyfQB/nh4PpRg+lf6Hn/EDv8K/+jiNV/8ACct//k+j/iB3+Ff/AEcRqv8A4Tlv/wDJ9AH8wX/Bt+pT/gtp8A9wx/xNdQ/9NN7X+xxX8E3iT/ggL4V/4N/9DuP+CwPhL4mXfxN1H4JKNSh8MXelx6VBqBvSNL2Pdx3Ny0IRbwyZELZKbejZHjX/ABHE/FT/AKN20r/wo5//AJX0Af6H1Ff54P8AxHE/FT/o3bSv/Cjn/wDlfR/xHE/FT/o3bSv/AAo5/wD5X0Af6H1f49H/AAczg/8AD8T47j/p60T/ANMGm1+7P/EcT8VP+jdtK/8ACjn/APlfX8ln/BR79tjUf+CiH7aPjf8AbF1rQIvC1x40ls5W0uCc3SW/2Oxt7HCzMkRfeLcPygxnb0GaAP1Y/wCDUfA/4LYfDlCcZ0rxD6f9Am5PTtjA+mK/1ua/xGP+CW/7f+rf8Eyv2y/Dv7X+ieGofF1xoFtf2y6ZPctZpL9utZLYkzJHKV2eZuGE5xjpX9VP/EcT8VP+jdtK/wDCjn/+V9AH85H/AAX1P/G479oI+niqb/0TF/nFfp9/wZwsx/4K3aio5/4t/rP/AKV6fX8+37dX7Vd9+27+1349/aw1TRo/Ds/jnU31OTTYpjcJblkVNiysiFx8vUoK/oI/4M3f+Ut+pf8AYgaz/wCldhQB/qcV/iO/8FbcH/gqN+0Pz/zUXxJj2/4mU309v/rV/txV/GF+1Z/wZ4fDv9qL9pjx/wDtH33x21LR5fHniDUdeewTQIZ1tW1C4e4MSym9QuEL43bV3Y6CgD8RP+DLldv/AAU/8cbuR/wrXUcex/tbSR/L6cV/p8V/NN/wR1/4NyvB/wDwSL/aX1r9o3w/8VLzxxLrPh248PGwuNJjsEjWe6tbkzeYlzMWI+zbdu0D5uvAr+lmgD/Du/4KasP+HkP7QXOD/wALK8V4Hb/kMXX/AOr6elf0rf8ABkz8v7fHxXJ/6EBv/TpZV/NJ/wAFNf8AlJJ+0F/2UrxX/wCni6r6m/4I0/8ABW/Xv+CQHx18UfG/w74Jt/HMviXQToTWlzfPYLEv2mC580OkMxY/uAu3AHPWgD/Zwr/CP/awP/GU3xJPf/hKdY/9LZv/AK2Olf2Zf8RxPxU/6N20r/wo5/8A5X17zZ/8Gdnw7/aetIv2lL7476lpE3xBRfE0lgmgQzLavqw+2NCspvlLrH5uwNtUnGcDpQB/nnbSBmtDS8f2lbcceYn86/ox/wCC7/8AwQi8Kf8ABG3wp8NvEXhz4kXfjw+PbvU7aRLnTY7AW39npbOGUpcTb9/n45xtx3r+c3S/+Qjbf9dU/wDQqAP98Xwpn/hFdM7/AOiw/wDoArb2vvzgYrG8J/8AIq6Z/wBekP8A6AK6CgDm/FQYeF9SYdRazYP0Q9OnpX+BXX++v4r/AORV1P8A69Zv/QDX+BRQBOHUDC8dK98/ZO4/am+Gp/6mnRv/AEuhr58r6C/ZP5/ak+GgHbxVo3/pdDQB/u7UUUUAFFFFAH+cD/weA/8AKSvwP/2TLTf/AE86zX8ptf1Zf8HgP/KSvwP/ANky03/086zX8ptABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//T/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACv88z/AIPP/g58Xfib+058Fr/4beFdY8QQWvhe/jmk02xuLtI2N6CFdoUYKcdAe1f6GdQ7G+93/CgD/E0/YY/Zw/aH8I/ttfBzxV4r8BeItM0vTPG/h+7u7y70u7hgt7eDUreSWWWR4lRI40BZ2YhVUZOBX+yj/wANY/ss/wDRSvCv/g4sv/jtecf8FCo/+MBvjgP+pA8SZ/DS7j/Pav8ADP4oA/3dv+Gs/wBlb/opnhT/AMHNj/8AHq0NK/ac/Zs13VbbQtD+IPhq8vbyRIbe3g1WzkllkkO1EjRZSzMxwFAGT2r/AAeufWv0C/4JRkf8PPP2dh6/Erwr/wCna2/T29KAP9vSiiigDJ1vXtD8NaTc694jvINPsbKMzXFzcusUMUajJd3chVUAckkAV4p/w1n+yt/0Uzwp/wCDmx/+PV8e/wDBaghf+CSf7RfYDwBrfH/bo+O4r/FNwfWgD+qn/g6S+H3j39oL/grBrHxF+Amh3/jfw9L4b0WBNT0C2l1KzaWKFxJGLi1WSIunRl3ZHcV/On/wyd+1N/0TTxV/4Jr3/wCM1/p7/wDBol8v/BHHRen/ACNOu9u3mpX9P28dOKAP8Ir/AIZO/am/6Jp4q/8ABNe//Ga/1e/+DYXwj4r8B/8ABFf4UeF/G+mXejalb3PiLzbS9he3nQPrt8y7opArLuUgjI5GCOK/fzmoth6CgCaiiigD/JX/AODkz9nn4/eN/wDgtB8ZfFHgvwN4g1fTLmXR/Ju7LTLqeCTZotijbJI4yjYYFTg8EYrpv+DZv4Y/En4Cf8FffAPxL+Onh7UvBfhuy0zXo7jVddtJtNsYnm0y4jjV7i5WOJS7kKoLDJIA5r/V8xIHyOn+cV/OL/wddgj/AIInfEY+mq+Hv/TtbD8OPSgD9v8A/hrP9lb/AKKZ4U/8HNj/APHqP+Gs/wBlb/opnhT/AMHNj/8AHq/wiufWjn1oA/3oPBvx3+B/xF1g+Hfh74y0PXdQWNpja6dqFtdTCNMBn8uGRm2gkAnGBkV6tX+WR/wZwg/8Pa9SA6DwBrP/AKV6fjFf6m9ABRTSwFBdRwTQA6v8Wj/gpj+zF+0nrn/BRr48a3onw98S3llefEHxJNBPBpN5JFLE+p3DI6OsRVlZSCCOCOlf7S9V9oUfKP8A61AH+Ef/AMMnftTf9E08Vf8Agmvf/jNH/DJ37U3/AETTxV/4Jr3/AOM1/u780c0AeC/sr2t1p/7MXw50+/ieCeDwvo8ckcilXR0soQyspwQQeCO1d944+Knww+GMVvP8SfEel+HkuyywNqV3DaCUpjcEMzJu25GcdMiu1yBhR6Dj0r+En/g+E/5Jf+zu3/UU8R/T/Uaf9KAP7Pv+Gsf2Wf8AopXhX/wcWX/x2l/4aw/ZZ/6KV4V/8HNj/wDHq/wh+KdhvSgD/d0/4az/AGVv+imeFP8Awc2P/wAeo/4az/ZW/wCimeFP/BzY/wDx6v8ACLwfWjn1oA/3dP8AhrP9lb/opnhT/wAHNj/8er0TwN8VPhh8Torif4a+I9L8QpZlVnbTLuG7ERfO0OYWbbu2nGcZxxX+CNz61/ocf8GPXPww/aIK9tU8Oe3/ACx1CgD+76iiigD/ADhf+D3b/k6j4H/9ipqH/pcK/lB/4J7/APJ/PwO/7H/w1/6dbav6vf8Ag92IP7U/wPI6f8IpqH/pcK/lE/4J7q3/AA3v8DjjgeP/AAyP/Kpb0Af7m1eXeNfjf8F/hrqcei/Ebxdovh+8mjE0cGpX9vaSNGSVDqkzoSuQRkDHFeo1/mK/8Hpo/wCNlfgH2+HVl/6dNS7f54xQB/b1/wAFRP2g/gJ8QP8Agm/8d/AvgLxvoGt63q/gLxBZ2Gn2GpWtzdXVzNYSxxQwQxSM8kjuQqIqlmJAAr/H3/4ZO/am/wCiaeKv/BNe/wDxmvpX/gkllf8AgqP+zwAOB8RfDQ6dP+JlB/nH9K/24uaAP5Gf+DULxv4L/Zz/AOCYF/4A/aD1ey8Ca6/jfVrpdN8Qzx6Zdm3ktbFUlEF00cnlsUYK23adpweK/pm/4az/AGVv+imeFP8Awc2P/wAer/NJ/wCDx3/lLZpwA/5p/o//AKVX/wDn6V/KDg+tAH+7p/w1n+yt/wBFM8Kf+Dmx/wDj1eseEPHPgr4g6MviPwDq9lrmns7Ri60+eO5hLrwyiSJmXK9xniv8DPB9a/1dP+DRTP8Aw5x0X/satd/9HR9qAPt3/g4e8NeI/GX/AARn+Ofhjwhp9zqupXel2CwWlnC888hGq2bEJHGCzYUE8DoK/wAiv/hk79qb/omnir/wTXv/AMZr/dyVW79v8/l+FS80Af4RH/DJ37U3/RNPFX/gmvf/AIzR/wAMnftTf9E08Vf+Ca9/+M1/u6hs9KN2OvagD/CK/wCGTv2pv+iaeKv/AATXv/xmj/hk79qb/omnir/wTXv/AMZr/d35o5oA/wAGTxZ+z/8AHfwDokniXx14K17RdNhKq91fadc28CFztUNJJGqjccAZPPavI6/1tf8Ag66OP+CJvxFPGP7U8PfX/kK2/wDKv8kvFACV/Un/AMGiPj7wL8N/+CrGoa/8Q9asNBsG8CavCLnUbiK1h8xrqwKpvlZV3EA4Gc8V/LcEY9BUoZRwMYNAH+7l/wANYfss/wDRSvCv/g5sf/j1e2aRrWj6/pdtrmg3UN7ZXkazW9xbuskUsbjKujoSrKw5BBwR0r/AbzX+3F/wSPx/w62/Z4Bz/wAk68Nj0/5hsA60AfcXjX4i/D74a6Umu/EbXdP8P2MkggS41K5itImkKlggeZlUsVUkKDnAPpXmP/DWf7K3/RTPCn/g5sf/AI9X8wH/AAej5H/BMDwMeP8AkpWnD/yk6t3/AKV/mFYPrQB+of8AwUP/AGdf2gfGv7f/AMcvGXg3wL4h1bR9W+IPia9sb6y0y6uLa5tp9VuJIZ4ZY4mSSKRGVkdSVZSCDgivjn/hk79qb/omnir/AME17/8AGa/2j/8AgmSF/wCHbv7PpzwPhr4U+n/IHtce2PpX3RzQB/hEf8MnftTf9E08Vf8Agmvf/jNf7Q37MX7Tf7Nugfs2fD3Qdd+IPhqyvrLw1pNvcW8+rWccsUsdnEjxujShldGG1lIBBGCK+8ea/wAI/wDavCr+1L8SueB4p1jGMdPts3YcD/OOKAP7cf8Ag9Q+L3wm+J/w0/Z+g+GvijSPEL2ep+IWnXTL2C7MQeHT9pcQu20Ng4zjOOK/gY0v/kI23/XVP/QqqEjG3t/n/wDVVzSx/wATK2H/AE1T+dAH++N4T/5FXTP+vSH/ANAFdBXPeE/+RV0z/r0h/wDQBXQ0Ac/4oVpPDGoxxjczWswAH+4a/wAKf/hk79qb/omnir/wTXv/AMZr/dzPT0qTmgD/AARfHHwq+J/wxlt7f4k+HNT8PPdhmgXUrSa0MoTG4oJkTcFyM46ZFejfsm/8nTfDX/sadF/9Loa/s6/4PhP+Sofs7j/qF+I+n/XbT/p6V/GP+ycpH7Uvw0PY+KtF/wDS6GgD/dzooooAKKKKAP8AOB/4PAf+Ulfgf/smWm/+nnWa/lNr+rL/AIPAf+Ulfgf/ALJlpv8A6edZr+U2gAooooAKKKKACiiigAooooAKKKKACiiigD//1P4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAoor54+NH7XP7K37OGp2Oi/tB/Ejwx4GvNSiaa0g17VbTTpJ40O1miW5kjLqDwSvAoA4X/goT/wAmC/HH/sQPEv8A6ariv8Miv9l79uv/AIKVf8E7vFP7EPxj8M+Gfjr4A1DUdS8D+IbW0tbfxHpsk088umTpHFFGs5Z3diFVVGSeAK/xoaACv0A/4JRf8pPv2dP+yleFf/TtbV+f9foB/wAEov8AlJ9+zp/2Urwr/wCna2oA/wBviiivmf4w/tofsgfs8+JovBfx6+KPhPwVrE9ut3HY65rFlp9w9u7MiyrFcSo5QsjAMBjKn0NAGj+1d+zr4b/a1/Zr8c/syeMr660zSfHmi3eiXd1ZbPtEMN5GY2eLzFZAyg8ZUj2r+Ur/AIgmf2CP+ir+P/8AvrS//kKv6Tf+HpH/AATT/wCjgfh1/wCFNpf/AMkUn/D0n/gml/0cD8Ov/Cm0v/5IoA/iq/aN/wCCovxd/wCDX/4lzf8ABKr9kjQNH8f+D9Jgh8SJq3i4XB1N7jWR5ssbfYJbWDy4ygCYjz6k19If8Eqv+DqT9sL9vf8A4KB/Db9kb4ifD3wdo2ieNLy5trq801dQ+1RLBZXFypi867kjB3RAHch4Nfkl/wAHH/wE+OH7eX/BTTVf2gP2IfB2tfF/wJc+H9IsYvEPgywuNc0t7m2iZZ4Vu7BJoTJESA6bsr3Ar5t/4Iifsj/tUfsi/wDBU74QftGftVfDfxN8Nvh/4X1C8m1jxL4n0q70nSbCOTTrqCN7q9u4ooIVaWSONS7gF3VRyQKAP9bSivhD/h6R/wAE0/8Ao4H4df8AhTaX/wDJFfV3ww+LHwu+Nngq0+JPwc8Rab4q8O35kW21PSLqK9s5jDIYpBHPAzRtskVkbB4YEdqAPQaKKKACv5wf+Dr3/lCb8R/+wr4d/wDTta1+xPxI/b4/Yc+DnjS9+G/xa+MPgvwx4h03YLvTNV1ywtLuDzEWRPNgmmWRNyMrLlRlSCOK/nK/4Oa/27P2J/jh/wAEgfH3w4+DHxc8HeLPEF3qegvBpmj63Y3t3IsWp20khSCCZ3YIgLNheFGTxQB/l40UV9g+BP8Agnt+3n8UPCFh8QPhr8F/HHiDQdUiE1lqOnaBqFzaXEZ4DxTRQNG68dVJFAHsH/BL3/gpZ8VP+CVf7Sk/7Tfwc0HSfEOq3Gi3WiG01gTm2EN3JDIz/wCjyRPvBhUDnbyeK/oa/wCI2b9vr/olHw//AO+dV/8Ak6v5sv8Ah1x/wUr/AOjfviL/AOExqn/yPS/8Ot/+Cln/AEb98Rf/AAmdU/8AkegD/ZZ/Ya+O/iT9qb9jP4U/tK+LrO20/VPHvhPSPEF3a2e77PDNqFpFcPHF5jMwRGcqu4k4HWvzs/4L2/8ABTv4tf8ABJv9jvQ/2jPgzoGkeI9U1PxRaaE9rrQuDbrDcWt1Ozj7NNC28NbqBztwTxVb/gmr+3b+xN8Af+CefwP+CHxz+Lvg3wb4z8IeBtC0bXNC1rW7Gw1HTdRsrGGC5s7u1nmSWC4glUxyxSKrowIYAivyd/4Ofviv8L/+Chn7Afhv4LfsFeItN+NPjCw8aWOrXOh+BrqLX9RhsIbK+hkuntdPaaVYEkmiRpCu0M6LnLAUAfjh/wARs37fX/RKPh//AN86r/8AJ1f6FH7Hvxj179o39k74ZfH/AMU2lvY6j438LaRrt1b2u7yIptQs4rl44g7M2xWchdxJwOTX+MV/w64/4KV/9G/fEX/wmNU/+R6/1Yv2BP2+v2Gvgr+w18HPg98YfjF4L8K+LPCvgrQdJ1rRtW12ws7/AE6/stPhgubW7tppklgmhlRo5I5FVkYFSARQB+1FFfOHwZ/bE/ZM/aM1y68Mfs/fE3wt431Gxg+1XFroOr2eoTRQbgnmvHbSuypuIXcQBkgV9H0Af5x/xp/4PLP26Phl8ZPFnw50j4X+BJ7TQNYv9NhklXU/MdLS4eFGbbeKuSEyQABX4Yf8FbP+C5n7QP8AwWB8PeCPDvxw8I+HvDEfgW4vri0bQhdhpjfpCjrL9pnmGFEK427epryf9p3/AIJnf8FF9c/aT+IOt6L8B/iBd2d54l1aaCeHw3qTxyxyXsrI6MtvhlYEFSOD2r4d+NX7KH7UH7Nttp95+0L8OvEngWHVWkSyfX9LutOW4aEL5giNzHGHKBl3Bc4yKAPAK/0lfBn/AAZbfsH+JvCGk+I7r4p+PIpNQs4Ll0Q6XtUyxq5AzZZwCa/zaq/3t/hN/wAkt8M/9gmz/wDRCUAfyCf8QTP7BH/RV/H/AP31pf8A8hVma1/wZU/sG6bo91qUXxW8fs1tC8oBbS8ExrkD/jy9q/rY+NX7UX7NX7Nq6c/7Q3j/AMO+BRq5lFidf1O1077T5O3zPJ+0yR79m9d23ONw9RXzT4n/AOCon/BNabwzqMMPx/8Ah27tbTABfE2lk52kY4uKAP8AEgvYFtrqW3XpG7L+XFf6GH/Bjt/yS/8AaK/7Cnhv/wBE6hX+enqbK2oXDLyDIxH0zX+hZ/wY7f8AJL/2iv8AsKeG/wD0TqFAH93lFZuq6vpWh6Xca1rVzFaWdnE8088rBI4o4xud3Y4CqoGSTwBXxD/w9J/4Jpf9HA/Dr/wptL/+SKAPhv8A4Kz/APBBb9nX/grz8RPCfxI+Nfi/xF4au/CGnTabax6IbQRyJPN5xaT7TBMxYHgBSor8c/GX/BqD+xx+w/4Q1X9tTwB8RvGWra98H7OfxrptjqH9nGzubzw/GdSt4bjyrRJPIkkt1STYyttJ2lTzX9e3wX/aR/Z6/aP0y81r9nzxzoHjiz02VYLubQdRttRjgkYZVJGtncIxAyAccV55+3XoeteKf2IvjH4X8NWk1/qWpeCPENraWtuhkmnnl0ydI4oo1BZ3diFVVGSeAKAP8+//AIjZv2+v+iUfD/8A751X/wCTq+6/2Xv2M/Av/B2j4Evf2/f2ztUv/hv4k8E3reBbXTvBXlLYy2VrGmpLPL/aK3cvnGS/dDtdU2qvy5yT/GR/w63/AOCln/Rv3xF/8JnVP/kev7wf+DXX4n/Df/gnf+w14x+D37fOv6d8FPFmq+NLnVrLRvHNzF4fv7iwfT7GBbqK21BoJXgMsMkYkVdu5GXOVOADmfiN/wAGwv7Jn/BMf4f6z/wUX+E/j/xdr/ij4FWU3jrSNM1Y2H2C7vdAjN/BBdCC1jm8h5IlV/LkR9pO1gea/LD/AIjZv2+v+iUfD/8A751X/wCTq/rd/wCCov8AwUd/4J9eO/8Agm58ePBXgn44eA9X1jVvAWv2tlY2XiHTp7i4nmsJkjiiijnLu7twqqMk9BX+PPQB/ocfsz/8E8fhl/wdV/Dh/wDgpt+2DrWp/DvxbYXkngpdL8G+QNPaz0lUuYpj/aEd1N5ztesG/ebMKu1RzX0J/wAQTP7BH/RV/H//AH1pf/yFXP8A/Bpz+2v+x1+z9/wS91DwH8dvip4S8G623jjVroafres2VhcmCS1sVSXyZ5UfYSrANjHB9K/ps/4ek/8ABNL/AKOB+HX/AIU2l/8AyRQB/Nn/AMQTP7BH/RV/H/8A31pf/wAhV+e37Rv/AAVF+Lv/AAa//Eub/glV+yRoGj+P/B+kwQ+JE1bxcLg6m9xrI82WNvsEtrB5cZQBMR59Sa/tV/4ek/8ABNL/AKOB+HX/AIU2l/8AyRX+eb/wcf8AwE+OH7eX/BTTVf2gP2IfB2tfF/wJc+H9IsYvEPgywuNc0t7m2iZZ4Vu7BJoTJESA6bsr3AoA9l/4jZv2+v8AolHw/wD++dV/+TqP+I2b9vr/AKJR8P8A/vnVf/k6v5fviH+wB+3V8IvBt98Rfir8GvG3hrw/paq95qWqaDqFpaW6s6xqZZ5oVjQF2VRkjkgV8i0Af7XP/BHb9tz4gf8ABRj/AIJ7+B/2vvihpOn6Jrfil9SW4stLEgtY/sWoXFomzznkk+ZIQTuY80f8Fif23PiB/wAE5/8Agnv44/a++F+k6fret+Fn01bey1MSG1k+26hb2jb/ACXjk+VJSRtYcivi/wD4Na/+UIXwf/666/8A+nu9rvP+DkX4WfEz41/8Edvip8N/g74e1LxV4h1CTQza6ZpNrLeXcwi1ezkfy4IVaRtiKWOF4UE9BQB/Ir/xGzft9f8ARKPh/wD986r/APJ1H/EbN+31/wBEo+H/AP3zqv8A8nV/Nl/w64/4KV/9G/fEX/wmNU/+R6X/AIdb/wDBSz/o374i/wDhM6p/8j0Af1b/ALPf/BXr42f8HKnxTsv+CRv7VXhrRPAngvx7HNqN5rHhQXI1SJ9CjOpwpF9vmuoAskluEfMRO0nGDzX6Lf8AEEz+wR/0Vfx//wB9aX/8hV+Ff/Bsr+wr+2t8Df8AgsB4B+I3xo+EfjHwl4fs9M15J9S1jQ76ytIml0u4SMPPPCkal2IVQTyeBzX+ohQB/h3f8FJ/2XfB/wCxP+3Z8Tv2VPAmoXeqaR4G1l9NtLu/8s3EsaIjBpfKRE3fN/CgFfDFfsB/wX35/wCCyP7QgH/Q1zf+iYq/NH4RfA74z/tAeKz4E+BXhPV/GWtrA90dP0Synv7kQRlQ8vk26O+xSygtjAyKAPLa/rN/Zq/4O7v21v2Y/wBnrwP+zp4T+Gvgi/0vwJodhoVnc3a6l58sNhAlujy+Xdom9ljBO1VXJ6V+EP8Aw63/AOCln/Rv3xF/8JnVP/kevjDxX4T8UeBPEuoeC/G2nXOkaxpNxJaXtjeRNBcW88LbJIpYnCujowwysAQRjFAH91X7L/7a/j7/AIOzfHt5/wAE7v2zNK0/4ceGfCFi/j+21LwUJVv5L2xkj0xbeQ6jJdxGBo9Skc7UVwyIAduQfvL/AIgmf2CP+ir+P/8AvrS//kKvxA/4Msv+UoXjj/smeo/+nbSa/wBPugD/ADbPHf8AwdR/thf8E+PG+sfsD/DP4eeDta8OfA++uPAGk6hqY1A3t3ZeGpDpdtPdeTdxxefLFbK8vloiFydqqvFcr/xGzft9f9Eo+H//AHzqv/ydX803/BTX/lJJ+0F/2UrxX/6eLqvh2gD+zv8A4jZv2+v+iUfD/wD751X/AOTq/Wnw5/waF/sUftLeH7H9o3xV8S/G9hqnj+3i8S3ltaHTfs8NxqqC8ljh8y0Z/LRpSqbiWwOSa/zW6/2lf2Yf+Cmf/BObQv2bPh7omtfHn4fWl5Z+GdJgngm8SaYkkUkdlEro6mcFWUggg9KAPwm/4gmf2CP+ir+P/wDvrS//AJCqW2/4Mof2Cra4juF+K3j/ADGwI+bSux4/5cq/q3+Cn7V/7L/7SVzf2f7PPxE8NeOZdKWN71NA1S01FrdZciMyi2kfYH2nbuxnBx0r6AoAztNsE0zToNNhJKW8aRgnrhAAP5Vo0UUAZGtXkmm6Pd6jEoZreF5QD0yi5A/Sv81n/iNm/b6/6JR8P/8AvnVf/k6v9JzxX/yKup/9es3/AKAa/wACigD/AECP2VPBNh/weBWGtfEb9tqZ/hld/AqS307SI/A4Cx3aa8Hlna6/tL7Wd0ZsUEfllANx3bvlx9zfDj/gzS/YZ+GnxE0D4j6T8UPHdxdeH9RtdSijmbS/Ld7SZZUVttkDtJQA4NfJv/Bjt/yS/wDaK/7Cnhv/ANE6hX93lABRRRQAUUUUAf5wP/B4D/ykr8D/APZMtN/9POs1/KbX9WX/AAeA/wDKSvwP/wBky03/ANPOs1/KbQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//9X+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAK/zhP8Ag9wx/wANSfBADgf8IpqPp/z/AAr/AEe6/Fb/AIKi/wDBCv8AZI/4K0+PfC3xF/aO1nxNpV94RsJtOs10G6tYI3ink81vNFxa3BJDdNpWgD/G4UEnK9vT25qvX+kh+1R/waIf8E2fgn+zH8R/jL4W8VeP5tT8I+FtX1mzS41DTmheewspbiJZFXTlYoXjAYKynbwGFf5t9ABX6Bf8Eo1Yf8FP/wBnUY6fErwr/wCna2r8/a9j+AHxo8S/s5fHTwZ+0H4IitrjWvA+t2GvWEV2jPbNc6dcJcxLMiMjMheMbgrKSvAK0Af7ytf5e3/B5yT/AMPSfCWev/CudMH5alqf4D146emDTP8AiNA/4Kl/9Cl8Ov8AwWaj/wDLOvwq/wCCl3/BTL47f8FUfjxp37Qv7Q+n6NpmtaXosGhwxaHBNb232eCaadSUnnnbfunYE7sYA4oA/OrGDjFLtf0/Svsz/gnl+z/4J/at/bn+E/7NHxDnurbQvHPijTdFv5bB0juUt7udIpDC8iSIrhTwWQgelf6Hf/EF7/wS2/6G/wCIv/gy03/5WUAe2/8ABomB/wAOc9Gz/wBDVrvHT/ltH2r67/4OQAf+HJvx6yOmlad79NWssdsfpx+tfyxftj/8FN/j3/wbNfGqf/glt+wdp2i+Ifh9pNpb+IorzxnBNe6obrWAZZ0M1lPYw+UpUbB5G4d2Ncd+zN/wXS/a2/4LrfHLw9/wSb/a40bwxovw5+Ms0mna1e+F7W6tNWhisoZNSjNrNdXV1Ah860jB3wP8m4dSGUA/idx7V/rrf8Gr4Yf8EPvhHzn/AErxH/6ftQr4y/4gv/8Aglv/ANDd8RP/AAY6b/8AK2v6If2Cv2IPhV/wTt/ZZ8O/sjfBK81LUPDXhmS9ktJtXlimuyb+7mvJN7wxQIcSTMFwi8AfWgD7J3pT6/Lf/gst+2b8VP8Agnt/wTg+If7XXwZtNNv/ABN4U/sv7HDqsckto323U7Wzk8xIZIXOI5m24dcMAenFfwd/8RoH/BUv/oUvh1/4LNR/+WdAHwL/AMHOA/43dfGzcP8AltouP/BJYf8A6vbAFfgsOoA7cZHv+XFf6Pn7K/8AwRS/ZW/4OAPgTof/AAVs/bJ1fxHoXxH+LInk1ex8KXNtZ6TCdJnk0mD7NDd2t5MmYLONn3zyZfcRtBCr8Of8Fuf+Daz9hb/gnB/wTv8AFn7WfwO8Q+Mb/wARaFe6VbW8Gr3tlNaMl9ew2sm9IbGFyQkny4deRzmgD+F2v9nX/ggUCf8Agjf+z4f+pVix/wB/pRX+MVX+zz/wQJ/5Q2/s9/8AYqw/+jpaAP18yucUuT/kV+H/APwX7/4KN/HL/glt+wxaftK/s/6fpGpa7P4o0/RTFrcM09qILqC6kdtkE0D7wYVCnfgZPy1/Ft/xGgf8FSf+hS+HX/gs1H/5Z0Afhv8A8Fgzj/gqx+0iSOf+FleJxn/uJz9OlfuV/wAGYuB/wVK8WgD/AJpzqXH/AHEtM/yPb6cfud8Gf+Dar9hb/gp98IfDH/BRz49+IfGWneOfjvplp491+10W9srfTYdR8QRLqF1HaRTWM8qW6SzMIkeV3CgBnY/NX6vf8Ezv+DfH9jL/AIJW/HjUf2hf2etc8V6nrWp6LPocsWuXlpPbC2nmgnYhILOBt4aBQDuxgn5aAP3cwK/w/f8AgqF/ykp/aAx0/wCFi+J+nT/kKXHb+df7gdfyz/Hj/g0i/wCCcP7Qnxu8X/Hnxr4o8ew6v411q+12+js9RsEgS51Cd7iURK+nuwjDudqlmIHGaAP53P8AgyfA/wCG+firgc/8IA3P/cUsT/n6dK/0u6/D7/gmF/wQR/ZA/wCCTvxa8QfGX9nLW/FOqap4j0f+xbmPXbu1nhEH2iK43ItvaW7B98S8liMEjbX7g0ARAN3HSv4Rv+D4PaPhf+zvwB/xNfEf/ojT/wDP4V/d9X5Of8FSf+CPH7NH/BW7Q/Bvh/8AaR1bxBpcHge4vbiwOgXFvbs7X6QpKJftFvcZAEK7du3vQB/i14PpX+9r8Jj/AMWs8M/9gqz/APRCV/Kp/wAQX/8AwS3/AOhu+In/AIMdN/8AlbX8+Orf8HhP/BTH4b6rdfD3QvCnw+ey0GV9Ot3m03UDIYrVjDHvK6kqk7VycKvNAH6Hf8HxeP7K/Zw7DzfFAxjtt0v8v8+lf5/G4V+vn/BUz/gtN+1J/wAFcofBdv8AtKaT4c0tfApv2sP7Atbm33/2gIPN877Rc3GcfZ027duOetfj/QA4Y6V/odf8GO3/ACS/9or/ALCnhv8A9E6hX+eHX+h5/wAGO3/JL/2iv+wp4b/9E6hQB/Zt+1luX9lr4lMB/wAyrrP/AKQy/wCHpX+Edmv93X9rPn9lj4lgf9CprP8A6QzV/hE0Af6PX/BkZz+y18b8c48Vad/6Qmv7d9rfQmv4iP8AgyJ/5NZ+OH/Y1ad/6Qmv7fqAE5r/ADFf+D0oEf8ABSvwAOo/4VzZf+nTU+34du2K/wBOuvws/wCCmv8Awb+/sb/8FWfjdo/x7/aI1vxXpWs6Losehwx6Fd2cEDW8M81wpdbizuGL75253AYAG2gD/Hj4PGOg/wA/5FVq/wBF/wDbq/4NMP8AgnN+zR+xb8Vv2hPAnijx3ca14I8J6trtjFe6hYPbPc2FpLPGJUj09GMZZQCqspx3r/OgoAs5+T/OPyqDmv7Tv+CAf/BvB+xT/wAFR/2Gbv8AaV/aA13xbp2uweKL/RVi0S8s4Lb7PaQWkiNsms5335mYE78cD5a+8P8Agob/AMGoX/BO79lL9hf4s/tLfD3xP46udd8DeF9S1qwhv9QsJLZ57OBpI1mWPT43KZGCFdT70Af54Ga/1dv+DRIA/wDBHLRT2/4SrXP/AEbH27dK/wAoiv6BP+Cdv/Bx1+2//wAEzv2bLb9lv4C+H/B+oeHrXULrUUm1myvJ7rzbtgZAXhvIE28cfJxQB/oW/wDBx+q/8OS/jzkA/wDEq04Djp/xNrL/AD7da/xzq/pI/bS/4Ohv2/f26/2X/Fv7J3xe8OeCrHw74yt4be9m0uwvYbpVguIrlTE8l9KgJeEZ3IeCa/m3oA/16P8Ag1rI/wCHIfwgHpLr/wD6e72v6CPLOMEZ/wDrflX+R7+wf/wc0ft4f8E8/wBl7w7+yV8FPDvgu+8NeGGu2tZtWsb2W7b7bcy3cm94b2FDiSU7cIuFAFfX3/EaB/wVL/6FL4df+CzUf/lnQB/qF4FJk/5Ff5e3/EaD/wAFSv8AoUfhz/4LNS/+WdH/ABGgf8FSf+hS+HX/AILNR/8AlnQB/qBYB9v8+1Wa/hb/AOCIv/Byl+3X/wAFHf8Agon4S/ZM+OHh7wbYeG9cstVuZ5dIsr2G7V7Gxluo9jz3s6Ab4wD8h+Xpiv7pKAP8Yb/gvoD/AMPkv2hD/wBTXN/6Kir9Qv8AgzhGf+CtepKOn/CAax/6V6f/AJ/DpX9an7W3/Bq3/wAE9v2zP2k/GH7UnxR8S+OLPxB41vzqN9Dp19YR2qSsqqREklhK4XC/xOa91/4Js/8ABu9+xT/wS5/aHm/aV/Z/13xbqWvTaRc6KYtbvLSe28i6khkkbZBZwPvBhUA78cn5aAP3t5r/ABHP+CtjKP8AgqN+0QD/ANFF8Sf+nKf0x/Kv9uSv8Rb/AIK4f8pR/wBoj/soviT/ANOM1AH73f8ABll/ylC8cf8AZM9R/wDTtpNf6fdf5gn/AAZZf8pQvHH/AGTPUf8A07aTX+n3QB/h1/8ABTRWP/BSP9oLA/5qV4s/9O91Xw7sb0r/AFWfjl/waO/8E3vj98a/GHx18ZeKPHsGr+Ndb1DX76O01HT0gS51G4kuZViVtOdhGHkIUMWIHev5pv8Ag4j/AOCCn7Hn/BJz9mLwR8Zf2dtc8U6nqfiTxQNFuY9durS4hW3NlcXG5Bb2tuwffEBkkjBI20Afx+1Y47fliq9f6XHwR/4M9f8Agmd8SPgt4P8AiHrniv4gJe69omn6jcJDqOnLGJbq2SZwgbTSQuW4yzUAfAn/AAY+Z/4Wl+0P/wBgnw5x2/1+of0r/Q6yK/gU/bw8FaX/AMGjmleGviH/AME25JfFF98b5brTtdXx6V1CKKLQliltjaLp404xkteyB95fI2424Ofzg/4jQP8AgqT/ANCl8Ov/AAWaj/8ALOgD/ULpu4Cv8vX/AIjQP+Cpf/QpfDr/AMFmo/8Ayzr+oH/g2/8A+Czv7Un/AAV2Pxe/4aQ0jw5pR8A/2H/Z/wDYFtc22/8AtL7d53nfaLm4zj7LHs27cc5zQB/TT4rP/FK6n/16z/8AoBr/AAKsH0r/AH59QsU1LT59OnyI7iNozjrhgQf0r+SL/iC//wCCW/8A0N3xE/8ABjpv/wAraAPjD/gx4+T4XftEluM6p4bx/wB+dQr+7vIr/Py/bx8Z6t/waPav4c+Hn/BNuOHxRY/G+G51HXX8eg6hLFLoTRQ2wtDp505UDLeyGTer5O3btwc/KXwR/wCDwj/gpn8R/jT4P+Hmu+Ffh8ljr2t6fp1y0Om6gsghurlIX2FtRKggHjKtQB/pd0UUUAFFFFAH+cD/AMHgP/KSvwP/ANky03/086zX8ptf1Zf8HgP/ACkr8D/9ky03/wBPOs1/KbQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9b+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAKKKbkdKAPkD/goT/wAmC/HH/sQPEv8A6ariv8Miv9zX/goSy/8ADA3xwH/UgeJf00q4r/DKoAKKXBpSrDqKAG0UU7aR2oA/Tz/gin/ylv8A2cv+ygaH/wClaV/tdV/ijf8ABFQY/wCCt/7OX/ZQND/9K0r/AGuaAP8ANI/4Ohv+Cef7d/7SH/BVnWPiZ+z78HPGXjbw7J4b0W3TUtD0S9v7QyxRMJIxNBE6bkJG4ZyK+Hf+CL37Ef7Yv7Ef/BTr4TftT/ti/C3xV8Lfhp4Qv7u41zxT4p0m70nSNOim0+5tonur26jjghV5pY4lLsAXdVHJFf6yPbJ6/wCR+VfiD/wcgAr/AMETvj0D/wBAvT/b/mLWXb/P4dgD6o/4fDf8Eov+jkfhr/4U+mf/AB+vtL4QfGj4RftA+ALL4rfAvxNpfjDwxqRkW01XRrqK9s5zBI0MojnhZo22SIyNg/KykHkV/gq/lX+un/wavYX/AIIffCPPT7X4j4PB/wCQ9f8AT/61AHtf/BxZ8H/it8fP+CPHxb+FPwQ8N6l4u8T6n/Yn2PSdItZby8n8nWrGaTyoIVZ32RozttHCqSeBX+W7/wAOef8Agq9/0bb8Sv8AwmNT/wDkev8AbSx8w2VYoA/l8/4Idftk/sl/sHf8Evfhj+yr+2v8SvDPwm+JnhWPU11nwr4t1S10fWLA3WqXd1ALmxu5Ip4fNt5Y5U3oN0bqw4Irhv8Agvx+1Z+zL/wUM/4JjeM/2Wv2D/iB4e+MfxK1u/0e40/wt4M1G31rV7qGy1CC5uXhsrJ5ZnWCBGkkKphEUk4Ar+LT/g5tfP8AwW6+NjH/AJ7aL09tEsBwfb+leo/8Go3y/wDBa/4cAHg6V4h/P+ybnp9KAPzb/wCHPP8AwVe/6Nt+JX/hMan/API9f6VH/BJb9vP9ib9kD/gm78IP2Z/2q/i14R+HHxE8G6DHp+veGfEmsWematpl2skjG3u7O5kjmglCkHY6A4I4r+jKv8Yr/gvo4/4fH/tBoe3iqYD/AL8xCgD+1z/g5D+PXwS/4KZ/8E97L9nT/gnZ4t0j45ePofF2maxJ4c8C3kOvaomn21veRz3ZtLBpphBE80SvJt2qXUEjIr+D7/hzz/wVe/6Nt+JX/hMan/8AI9ftH/wZwnP/AAVu1H1/4QDWe/H/AB9af+tf6m9AH4Jf8E5/+CjH7An7NP7AvwW/Z5/aG+NHgrwP488D+CdD0PxD4e1zXLGw1PStTsLGKC6sry0nlSWC4glRo5YpFVkdSrAHivs//h8N/wAEov8Ao5H4a/8AhT6Z/wDH6/yS/wDgsGD/AMPW/wBpBT3+JXifA+up3Ffm7tPtQB/trf8AD4b/AIJRf9HI/DX/AMKfTP8A4/R/w+G/4JRf9HI/DX/wp9M/+P1/iT/lTtrf5HpQB/ulfAX9uj9jD9qbxHeeD/2avit4T8e6rp1t9surPQNXtNQnht96x+bJHbyOypvZV3EAZIFfVVf5on/BlCuf2+Pitj/on7Y/8GliOO3p+lf6XdABRRSZHSgBa/xW/iV/wSG/4Ko6j8RfEGoaf+zn8R5oJ9SupI3j8M6kyujTNgqRByCCOlf7UlRbD2H+e1AH+JV/w55/4Kvf9G2/Er/wmNT/APkeo5v+CP8A/wAFWLeJp5/2cPiSiICWJ8MamAABk/8ALD0Ff7bm4YzXO+LB/wAUrqYx/wAukw9vuGgD/AueN42KOMEHGPpX+hz/AMGO3/JL/wBor/sKeG//AETqFf56uq86nck/89X/AJ1/oVf8GO3/ACS/9or/ALCnhv8A9E6hQB/Z1+1j/wAms/Ev/sVdZ/8ASGWv8Imv93X9rHn9ln4lAf8AQq6z/wCkM1f4RVAH97X/AAaDfts/sefsqfs4fGDw/wDtM/FDwt8P77VvElhcWVv4g1W006S4iSzKM8S3EiFlDcEjjNf2NeGv+CsP/BMLxl4i0/wh4S/aD+Hmp6rq1xFZ2Vna+I9OlnuLiZxHFFFGk5Znd2CqoGSTgV/iI717cV9h/wDBPfn9vf4Hk5OPiB4Z/D/ia23egD/cvr5O+O37eP7E/wCy94ptvA37SHxa8I+A9ZvLVb2Cx17WLPT7iS2Z2jEqRXEiMyF0ZQwGMqR2r6xr/MU/4PTML/wUq+H6t2+HVn/6dNTx/n9KAP7CP+Chf/BR3/gn/wDtG/sJfGL4A/AH41eCfGnjjxn4N1rRdA0DRNcsb7UtT1K+s5YLWzs7WCVpZ7ieVljiijUu7EBQTX+YR/w55/4Kvf8ARtvxK/8ACY1P/wCR6q/8EkWB/wCCo37Oyrxj4i+Gx35/4mUB5/T8hX+3JQB/ND/wam/s9fHb9mT/AIJiX/w5/aL8Haz4F19/G+rXi6drtlNp90beS1sVSUQzoj7GKMFbGDtOOlfpB/wWr/5RIftG/wDZP9c/9JHr9ONjbtwr8xv+C1f/ACiQ/aN/7J/rn/pI9AH+KNX2L8Fv+Cef7eH7R/gaP4m/s/8Awb8Z+NfDss0lump6Hol7fWjSxYEkYmgidNyZG4Z4r46r/V2/4NEwjf8ABG/RgOf+Kq178P3qUAf5tPxQ/wCCZ3/BRH4I+AtR+Kfxi+Bvjrwt4a0dFkvtV1XQL+0s7ZHdY1aWeWFY0BdlUEkckCvh+v8AYx/4OP1H/Dk/48jgn+y9Ox7f8Tex6fTjH4V/jnUAfavwj/4Ju/8ABQT4/eAbL4q/A/4J+N/F3hnUjItpquj6FfXlnMYnMUnlzwwsjbHVlbB4II7V6T/w55/4Kvf9G2/Er/wmNT/+R6/0x/8Ag1wX/jSP8Iex83Xv/T3e9vp6etf0J0Af4kv/AA55/wCCr3/RtvxK/wDCY1P/AOR6+Jvit8Ifin8CvH2o/Cn40+HNR8J+JtIMa3uk6vbSWd5bmWNZoxLBMqyJujdXXKjKsCOCK/3s6/x6f+DmIj/h+D8dxwQbrROnT/kA6d/n2oA9b/4NQv8AlNn8OP8AsE+Iv/TTc1/rd1/kjf8ABqGCP+C2Pw4J6f2V4i/9NNzX+tzQAV458cP2h/gP+zN4MX4jftE+MdG8DaA9wlmuo67ew2FqbiQMUiEs7Im9gjFVzk4OOlew71r+UD/g8eH/ABqT00sMkeP9G69v9EvxxQB+0f8Aw+G/4JRf9HI/DX/wp9M/+P1/mC/8FCf+CcX/AAUA/aM/bs+MXx8+AXwV8beM/A/jPxlrWtaBr+i6FfXum6npt9eSz2t5Z3UELRT288TK8UsbFHUgqSK/CH8q/wBt/wD4JIKP+HW/7OwXj/i3Xhv/ANNsAwfwoA/jN/4NKP2DP22v2Xv+CinjDx9+0j8JPF3gPQ7v4fX9hBf6/o95p9tJdPqemSLAktxEimQpG7BAc7VJxgGv9Emq3lv16H8P84H9Ks0AfAXiz/gqz/wTK8B+KdS8D+Nf2gPh7pOs6NdTWN/Y3fiLToZ7a5tnMU0MsbzBkkjcFXVgCpGCK/mI/wCDnP4lfD3/AIKmfsl+APhB/wAE1dbsfj34q8PeLhrGqaP4AnTxDe2WnCwurf7XcW+nmaSKDzZY4/MZQu91XOSBX8Mf/BTLB/4KRftBcZ/4uV4rA46/8Te6/wA8Yr+lb/gyfAH7fPxWA5/4oBvp/wAhSy/+tQB/O/8A8Oef+Cr3/RtvxK/8JjU//kev9V79n/8A4Kq/8Ezvh58CPBPw/wDHnx++H2ja7oWgaZp+o6fe+ItOgubS7trWOKeCaJ5g8csUilHRgCrAggYr9fK/wj/2sGCftS/EoL1PinWfoP8ATpv6f/qoA/ui/wCDozWNJ/4Ks+Bvg3oH/BMq5j/aAvvBd9rVxr9v8PWHiKTS4r2KzW1e8TTvOMCzmGQRGQKHKMFzg1/Hn/w55/4Kvf8ARtvxK/8ACY1P/wCR6/qe/wCDHwZ+KP7Q4HH/ABKvDnp/z3v+nFf6HlAH+JL/AMOef+Cr3/RtvxK/8JjU/wD5Hr+2v/gzs/Y8/au/ZQP7QP8Aw078NvEvw+/t3/hGP7O/4SHS7nTftX2b+1PO8j7RGnmeX5ke/bnbuXPUV/bfVbkcjAoAfNPDbQtcTsERASxPAAAr85/+Hw3/AASi/wCjkfhr/wCFPpn/AMfr758WAf8ACLakpGf9Em49thr/AALvyoA/s3/4PCf2tv2XP2rfiP8AArUP2ZPiJ4c+IEGi6br8d/J4e1K21FbVppbExLMbd3CFwjbQ2M7TjpX8pH7J/P7Unw0A7eKtG/8AS6GvBTIp+n6V75+ycCP2pfhqx6f8JTo36X0NAH+7pRRRQAUUUUAf5wP/AAeA/wDKSvwP/wBky03/ANPOs1/KbX9WX/B4D/ykr8D/APZMtN/9POs1/KbQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//X/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACv5Dv+DkP/AILhftm/8Eovjb8N/h5+zHa+HJ7DxZod3qN4dbspruQSw3QiQRmK5gCrt6gg1/XjX8LP/B2h/wAE5/23/wBtv9oj4SeKv2T/AIbav4607Q/Dt7aX8+mIjJBM94HVH3OuCV5oA/Cv4t/8Ha3/AAVI+M/wp8T/AAd8X6f4GXSfFukXmjXpttIuo5Vt76B7eUxsb5gr+W52kqQD2NfzA1+vv/Dgn/gsj/0b14r/AO/MX/x2l/4cEf8ABZL/AKN78Vf9+Yf/AI7QB+2n/Bud/wAEF/2I/wDgqn+yH4w+On7TN54mg1rQvGE+g2w0S/gtYDbRafY3ILpLazkvvuH5yBjAxxX6u/ty/wDBqH/wTD/Z1/Ys+Lfx98A6h43bXPA/g/W9e05bvVbWS3Nzp1hLcQiWNbJSyF4xuUMpI4yK+4f+DUX9j79pr9ir9hLx58OP2qvBmoeB9c1Lx5c6nbWWpKqSSWj6XpsKzKFZhtMkTr9VNfsN/wAFX/8AlF9+0Z/2TTxV/wCmm4oA/wAQmv7Tv+Dd7/ggL+wz/wAFR/2KNe/aC/aTuvFEGu6b4uvNEiXRb+C1t/ssFnZToTHJazHfvnfJ3Yxj5a/ixr/Qa/4NWv8Agp3+wJ+xj/wTz8TfC79qT4paL4J8QXfji/1GGx1F5Fle1ksLCNZQERhtLRuP+A0AfsZ+zZ/watf8Ezf2V/j94O/aQ+Gd/wCNZPEHgfV7XWdOW91W2ltzcWkgkjEsa2UZZMgZUMp96/pSr8gf+H+//BG3/o4Twp/3+l/+NUf8P9/+CNv/AEcJ4U/7/S//ABqgD+eP/gvX/wAHE/7fn/BNX/goNqP7MP7PNn4Un8OWmiaZqKNq+nT3Nz5t5GzSAyR3cI28cDbX84/7Yn/Bzh/wUa/bi/Zo8Vfsp/Gmy8HReGfGEENvfvpul3EF0EgniuEEUjXkiqfMiXOUPGRX3L/wXW/ZE/aV/wCCuX7fepftjf8ABNfwdf8Axh+GF5o2maVB4i0BVks3vbCMpcwBpGjbdEzAN8tfjj/w4J/4LI/9G9eK/wDvzF/8doA/IKv6B/2GP+Dk3/goT/wT2/Zj8P8A7JnwGsvCMvhbw295JaPqum3FxdZvbqW8lDyR3cSt+8mcL8gwuB2zXzt/w4I/4LJf9G9+Kv8AvzD/APHa/Oj4+/s7/Gz9ln4qaj8EP2hPDl34T8WaQsD3ml3wVZ4VuYknh3BSR88UisMHoaAP7pP+CLf/AAcrf8FEP+CgH/BSf4dfsl/HOy8Hx+FvFX9q/bG0vTLi3uv9D0u7vItkj3kqr+8gQHKH5civ77a/xqP+DfL49/B39l//AIK4fCj44ftAeILXwr4S0X+2ft2qXpKwQfaNGvoIt5UEjdK6oOOpr/TZ/wCH+/8AwRt/6OE8Kf8Af6X/AONUAfM37a3/AAbP/wDBO79vf9pjxL+1f8c73xfD4p8VG2N6ul6nbwWo+yWsVpH5cb2crL+7hTOXPOa2/wBg7/g2/wD+Cfn/AATr/aU0f9qr4AXvi6XxPokF3b26atqVvcWuy9ge2l3xx2kRJ8uQ7fmGCK/Z74FfHv4OftNfC3S/jZ8BPEFr4o8Ka0JDY6nZEmCcQytBJsLBT8siMp46ivXqACv8YX/gvp/ymS/aE/7Gub/0VFX+z1X+V3/wWW/4Iz/8FRvj3/wVH+Nfxj+DnwT8ReIPC/iDxHJdadqNrFGYbiFo41DoTIDjKnsKAPxC/wCCd3/BRb49/wDBMP49zftH/s2RaTP4gn0m50Zk1m2kubcW908Mkh2RywnfmFNp3YHPFfuN/wARkf8AwVw/6Bvw/wD/AATXf/ywr8Pf2lv+CWv/AAUI/Y6+HafFr9p34Ua54L8NyXcVgt/qEcawm5mV3ji+V2OWWNscY4+lfAlAH+m/8Bf+DcD/AIJ9/wDBTD4J+Ev+Cif7RF54tt/H/wAc9Hs/HXiOPRtStrXT01TX4Vv7sWkElnM8UHmzN5aNI5VcAs2M1+N//BxB/wAEBv2Gv+CW/wCxPoH7QP7Nd14om13UfF1nokq61fwXVv8AZZ7O8mciOK1hO/fAmDuwBkba/uK/4I8/8oov2bf+yaeGP/TZb1+XX/B1L+yT+0j+2d/wT08MfC39lvwhfeNfEFr44sNRlsdOVWlS1jsL+N5SGZRtVpEHXuKAP8muv9Jv9if/AINPf+CYH7QH7HPwq+Ovjq/8cLrXjPwlout362urWscAub+yiuJRGhsmKpvkO1SxIHGTX8cP/Dgn/gsj/wBG9eK/+/MX/wAdr/W1/wCCefgbxb8Lf2C/gt8M/iFYS6Tr3h7wN4f07UbKcASW91a6dBFNC+MjcjoVIB7UAfD/APwTV/4IQ/sUf8Eqviprvxi/ZjuvE1xq/iHSf7GuRrd/BdQi3M8VwSixWsBD74U5JIxxiv2moooAK/mI/wCDk/8A4K7ftWf8Em/Bfwm1/wDZfttBuJ/G17q9vqA1y0lulCWMVq0XlCGeDaczNuzu7elfoj4h/wCC63/BIfwnr994V8RfHvwvaahpk8trcwPLLuimhYpIhxF1VlINfxv/APB29/wUJ/Yr/bg+H3wP0v8AZM+Iuk+Op/Duoa7LqSaY7sbZLiKxWEvuRfvmNgMelAHyV/xGR/8ABXD/AKBvw/8A/BNd/wDywo/4jI/+CuH/AEDfh/8A+Ca7/wDlhX8oVfrlp3/BBj/gsJqthBqenfs/+KZbe5jWWJ1hhwyOoZSP3vcEUAf3uf8ABtZ/wWU/a3/4KzXvxdtv2obbw/br4GTRG07+w7KW0/4/ze+b5vm3E+7/AI9024245r+onxX/AMirqf8A16zf+gGv41f+DRz9gH9sr9h/U/jrL+1n8PdV8CL4jj8PDTP7TRE+0/ZTqHneXsZvueYmenUV/ZV4r/5FXU/+vWb/ANANAH+Bzqn/ACEbn/rq/wD6FX+hX/wY7f8AJL/2iv8AsKeG/wD0TqFf56mqf8hG5/66v/6FX9sX/BpB/wAFCf2K/wBh/wCHvxw0z9rL4jaT4En8RajoMumpqTupuEt4r5ZSmxG+4XXOcdRQB/opePvBOlfEbwLrPw917ethrtjcadcGIhZBDdRmGTYSCA21jt4OK/l1/wCINv8A4JH/APQR8f8A/g5tP/lfX6f/APD/AH/4I2/9HCeFP+/0v/xqj/h/v/wRt/6OE8Kf9/pf/jVAH5gf8Qbf/BI//oI+P/8Awc2n/wAr6774Sf8ABpT/AMEt/gv8VvDHxi8I6h45bVvCWr2es2S3Or2rxNcWM6XEQkUWCkpvjG4AqSOMiv0B/wCH+/8AwRt/6OE8Kf8Af6X/AONUf8P9/wDgjb/0cJ4U/wC/0v8A8aoA/X6v8xL/AIPUf+UlvgD/ALJzZf8Ap01Kv7b/APh/v/wRt/6OE8Kf9/pf/jVfx0/8HCfwK+L3/BaL9rzwx+0r/wAEsdAuvjd4D8P+E7fw7qOteHFEtrb6rDe3d1JaOZTGfNWC5hcgD7si0AfzVf8ABI//AJSj/s7/APZRfDX/AKcYK/26a/yYP+Caf/BE3/gq18Jf+ChXwR+KHxI+BviTR/D/AId8c6DqOpX1xFEIra1tr6KSWV8SE7URSTgdK/1n6ACvC/2kv2f/AAT+1P8AALxh+zf8THuo/D3jfSbrRtQaykWK5FtdxmOTypGV1V9p+UlSB6V7pXBfFD4ofD/4K/DvWvi18VNVg0Tw34ds5b/UtQuCRDbW0K7pJHIBO1QOwoA/l/8A+INv/gkf/wBBHx//AODm0/8AlfX4k/t1f8FLP2h/+DbD4+XH/BML/gnnBpF78N9JsrbxDBJ4utn1LU/terq0twDcW8tnH5YKjYvlZXuTX9ev/D/f/gjb/wBHCeFP+/0v/wAar+JD/gut+yJ+0r/wVy/b71L9sb/gmv4Ov/jD8MLzRtM0qDxFoCrJZve2EZS5gDSNG26JmAb5aAO9/ZN/4Lgftlf8FyP2iPDH/BKj9s218OWvwx+ME8un67J4bsprHVFisoH1KL7NcTXNzHGfPtI85hbK5HU5H75/8Qbf/BI//oI+P/8Awc2n/wAr6/lY/wCCSv8AwTl/bh/4Jxf8FEvhl+2t+3H8NdX+Gvwq8BXt1deIPEuroiWWnw3FjcWkTzNG7sA088UYwp+ZhX983/D/AH/4I2/9HCeFP+/0v/xqgD7E/Yc/Yu+Ef/BPv9mbw/8Aso/AqTUJfDHhk3TWjanMlxdH7Zcy3cm+RI4lP7yVtuEXCgCvrqvG/gL+0H8F/wBqH4Wab8bf2f8AxFaeKvCermVbLU7IkwTGCVoJNpYKflkRlPHUV7JQAV/PH+2l/wAGzP8AwTr/AG8f2m/FH7WXxuvfGEXinxc9rJfLpep29vag2lrDZx+XG9nKy/uoEzlz82T7V/Q5X5t/HL/gsB/wTM/Zo+KmrfBD48fGXw/4X8WaE0SX+l3kkiz25mhSeMOFjIG6KRHHPQigD+bD9tr/AIJQfsxf8G7H7POrf8FV/wBga41u9+J3gee00/TYvFd3DqOlmHWpk025822t7e0kYiCd/LxMu1sE5A21+G//ABGR/wDBXD/oG/D/AP8ABNd//LCv3r/4OOf+CtH/AATg/au/4JP+Ofgn+zp8XtB8XeK9R1HRJbbTLCSRppEttSgllKho1GEjRmPPQfSv81egD/b4/wCCW/7SnxG/bG/4J8fCj9p34sraR+I/GeiR6hqC2ETQ2wlZ3UiKNnkKr8vQsas/8FEf+CdPwD/4KefAOH9nD9pKXVYPD9vq1trKPo1zHa3H2i1jmijG+SKYbNszZG3PTnivxA/4I0f8Fmf+CXHwD/4Jc/BT4OfGP41+HfD3ifw94djtdR066klE1vMskjFHAjIzgjoa/bv9mr/gqV/wT3/bF+Ij/CX9mL4r6H4z8SR2cl+2n6dI7Si2hZFeTDIo2qXUHnvQB+Hv/EG3/wAEj/8AoI+P/wDwc2n/AMr6/nV+OP8Awck/8FCf+Cbvxn8V/wDBP79n2y8IzeBPgpq154I8PPq2m3FzftpmhytY2puZo7uFJJjFCm9ljQFskKvSv9Oev8mD/gpX/wAETf8Agq18Wv8AgoV8bvih8Nvgb4k1jw/4h8c67qOm31vFEYri1ub6WSGVMyA7XRgRwOKAPZP+IyP/AIK4f9A34f8A/gmu/wD5YUf8Rkf/AAVw/wCgb8P/APwTXf8A8sK/DD9p3/gmL+31+xf4EtPid+1N8Lda8EaBfXyabb3uopGkUl28byrCNrsdxSJz0/hNfCNAH+nl8Hv+DY3/AIJy/t6fCTwt+3N8b77xjF40+M+kWPjrX00zU7a3sV1TxFBHqd6LaF7KVo4BPcOIo2kcqmFLEjNfrB/wTV/4IQ/sUf8ABKr4qa78Yv2Y7rxNcav4h0n+xrka3fwXUItzPFcEosVrAQ++FOSSMcYr7G/4Jkf8o2v2e/8AsmnhP/0z2tfcFABX+EV+1l/ydN8Sv+xp1n/0umr/AHda/wAIr9rL/k6b4lf9jTrP/pdNQB9lf8Eyv+CvH7U//BJzWvF2v/suW+g3E/ja3s7fURrlpNdgJYtM0XleVPBtOZnznd29K/XD/iMj/wCCuH/QN+H/AP4Jrv8A+WFfz7/sr/sI/te/tu32s6Z+yd4B1Px1P4djgl1FNMVGNslwWWEvuZfvmNgMelfYz/8ABAz/AILHxRtK/wCz54qCoMn9zD0H/bWgD9Qv+IyP/grh/wBA34f/APgmu/8A5YV/U3/wbUf8FkP2t/8AgrR/wuIftRW2gW//AAgv9g/2b/YVnNaZ/tL+0PO83zZ593/HtHtxtxzX+VdcW01rO9rcLteNirD0K8EV/fp/wY19f2lv+5S/9y9AH99+oWMWo2E2nXGfLmQxtjg4YYP6V/Kh/wAQbf8AwSP/AOgj4/8A/Bzaf/K+v6tri4htLd7q4O2ONSzH0CjJ/SvyI/4f7/8ABG3/AKOE8Kf9/pf/AI1QB+YH/EG3/wAEj/8AoI+P/wDwc2n/AMr66nwJ/wAGh/8AwSs+HPjnRfiD4d1Hx219oV9bahbCXV7RozLayrLGHUWCkruUZGRX6Lf8P9/+CNv/AEcJ4U/7/S//ABqtjw9/wXW/4JD+K9fsfCvhz49+F7vUNSnitbWBJZd0k0zBI0X90OWYgCgD9ZqKKKACiiigD/OB/wCDwH/lJX4H/wCyZab/AOnnWa/lNr+rL/g8B/5SV+B/+yZab/6edZr+U2gAooooAKKKKACiiigAooooAKKKKACiiigD/9D+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAKiKngCpaKAGAoen+cUmE9BXzl+194/8VfCX9kz4n/FXwRMtrrfhfwlrWrafM6LIsd1ZWE08LFGBVgsiKdrKQcciv8tf/iK9/wCC2X/RR9K/8J3Sf/kagD/WwVeoHA+mPrXwJ/wVeIP/AAS+/aLH/VNPFQ/8pNxX5if8Gy3/AAUN/ap/4KTfsYeNvjJ+1trdvr2v6N41uNFtZ7ext7ALZR6dYXCoY7aONCRJPIdxBPOM4Ar98vjD8JvBvx4+E/ib4I/Eq2e88OeL9KvNF1SCOV4Wls76FoJ0WSMq6Fo3K7lIIzlSDQB/grbG9Km7D5en5e1f62X/ABCgf8ETP+ic6r/4UOrf/JNJ/wAQoP8AwRK7fDrVf/Ch1b/5JoA/yS/n9TTdx9TX+mh/wUx/4Nsf+CSn7Nn/AAT4+Mvx/wDhL4E1Kw8TeD/COp6rpVxLrmpzpFdWsDSRMYpJ2RgGAO1gQe4r/MsoA/1eP+DRQsP+CN+int/wlOuY/wC/yD/9Vf0/fJ7V/jK/sW/8F4f+ClH/AAT9+CEH7O/7MHjGx0bwpb3lxfpa3GkWF44muiGlbzriF5OSBxuwO1fWn/EV5/wWy/6KPpX/AITuk/8AyNQB/raYT0Ff5Fn/AAdQE/8AD8P4uq3/AD6+Gzx/2ANP/wD1Vvf8RXv/AAWy/wCij6V/4Tuk/wDyNX9R3/BNn/glv+xp/wAFz/2O/C//AAU3/wCCjvh+68YfF74gS38GtapZX91pEE0ej3s2lWYWzsZIbePZaWkKHYg3FdxySSQD/M7+nBGPb/PbFQ7j6mv9En/guf8A8G+n/BLv9iL/AIJc/Ev9pv8AZ18FahpHjDw1/ZP2C7l1nULpI/terWdpLmGed42zDK68qcZyOea/zs6AP9gX/g2NU/8ADkP4KEf88tb/APT3f/5PTmv3w3p0+lfgp/wbFf8AKEH4J/8AXLW//T3f16Z/wX3/AGw/j1+wb/wTG8ZftJ/s06nFo/i7R7/R4LS7mtobtES71CCCYGGdHjO6NmHK8ZyOaAP2hyKiI9P8/wCfSv8AJM/4ivf+C2X/AEUfSv8AwndJ/wDkaj/iK9/4LZf9FH0r/wAJ3Sf/AJGoA/r4/wCDx/I/4JJaWOhHxA0b8cWeoV/lkV+vf7b3/Bcv/goz/wAFEvgzF8Af2qvF9lrfhiHUYNVS3t9JsLF/tVskkcbebbQo+AsrjbnBz0r8hKAP9tj/AII9cf8ABKL9m3/smnhj/wBNlvX6M7eeOK/x/fgl/wAHLH/BXL9nn4O+FvgN8KvHum2PhvwdpVpo2lQSaHpkzw2djEsMCGWW3ZnKooG5iSe5Neof8RXv/BbL/oo+lf8AhO6T/wDI1AH+tv8AJ7VDyOPTH+e1f5J3/EV7/wAFsv8Aoo+lf+E7pP8A8jV/qDfsKfE/xn8cP2KPhH8aPiJcLea/4s8H6Jq+pTpGkSyXV7YwzTMsUYCIC7k7VAUdhQB9Z0UmRS0Af4R37WGT+1J8SQOR/wAJVrOPxvpv8K8AJbjqccfhX+ur4y/4Nb/+CNXj3xdqvjjxP8PNUm1HWrye/upF8Qaqoaa5kMkjBVuQFyzE4AwO1c5/xCgf8ETP+ic6r/4UOrf/ACTQB/kj7G9K/wB7D4Tjb8LfDWO2k2Xtj9wnavwH/wCIUD/giZ/0TnVf/Ch1b/5Jr+ijRtHstA0i10LS08u2soUghXOdqRqFUfgAKAL2NvHAx/n/AArF8Vkf8IrqY/6dZv8A0A1/KX/wdGf8FVv21/8AgmNZfBi4/Y98RW3h9vGL66uqG5060v8AzRYiwMGBdRSbNvnP93Gc89BX8iN5/wAHWX/Bau/s5bC5+IulmOZSjD/hHtK+6wwR/wAe3pQB/O5qvGpXIP8Az1f/ANCqrkduOP0ollaeVp5D8znJP1r+wb/g14/4JGfsM/8ABTfwH8Y9b/a/8N3ev3HhG/0aDTGtdRu7DykvIrtpgRbSxhsmJPvZxjigD+PfEnqabuPqa/1Wvj9/wa4f8EavAPwJ8a+OPC/w81SHUtF0HUr61kbxBqjBJra1kkjYq1wVOGUHGMV/lRUASEuOCSMUfN6niv7N/wDg2E/4I7fsG/8ABTH4EfFDxx+154Xu9e1Hwxr1nYae9tqV5YCOCW181lK20satlucsCa/fX9rz/g2H/wCCPPwk/ZM+KHxU8DfD/U7bW/DPhHW9V0+Z9e1SVY7qysJZ4GKNcFWCuinawIOMEUAf5aW4+pr/AE5f+DLIFv8Agmt4/IxgfES8/wDTXp3+f0r/ADF6/wBOr/gyvB/4dp/EAf8AVRbz/wBNWm0Af2EbCOB2xU1FFADdy9q/Lz/gtVx/wSS/aLP/AFIGuDjj/l0f0r+YD/g5A/4Lk/8ABR3/AIJ2f8FBrP4A/sreLbLQ/DE3hHTtVa3uNJsL1jdXFxdxyP5tzDI+NsSDbnHHSvyW/ZG/4Lwf8FKP+Ck37T/gH9gL9rPxjY678MfjDrll4T8Uadb6RYWEt1pepyrBdRR3NtDHNCzRsVDxOrDsQaAP5Of3nvX+rn/waJlv+HOGjAf9DTrg+n71K9C/4hQP+CJn/ROdV/8ACh1b/wCSa/mY/wCCpP8AwUG/aj/4N/P2sLv/AIJ2f8Ev9at/Bfwq03TbLXYNMv7K21iZb3VEMly/2rUEnnKsyghS+1ewFAH9b/8AwceY/wCHJ3x7VMH/AIlWn8D/ALCtl1/LA6V/jpfvPev6/P2BP+Cw/wC3h/wWN/a/8E/8E0P29fE9n4o+EXxUuZ7HxFpdpplnpk9xDZ2s1/CqXdnFFcQ7bi2ifMbqTt2n5SRX9XP/ABCgf8ETP+ic6r/4UOrf/JNAHU/8Gt/P/BET4QrwP3mv8f8Acbve34j0r+hLenrX+Zb/AMFHf+CqP7aP/BDv9sLxT/wTN/4J0+IrXwj8Ifh6li+iaVe6dZ6tPA2q2cOpXe67vopriQNc3MrDe/yg7RgACvpT/ghR/wAHA/8AwVB/bk/4KffDv9mX9ozxpYav4Q8QpqzXtpDo2nWjsbTTLq6hxNbwJIu2SJD8pGcYPFAH+iDX+PX/AMHMrbf+C4Xx3Un/AJetD/8ATBpv8u1f7Clf48//AAcz/wDKcT47/wDX1on/AKYNNoA/CnGORnA6emB16e1V9jelfs9/wQI/Y8+Av7eP/BTnwZ+zX+0tpkus+EdZ0/WZ7q0guZrR2ez0+eeEiaB0kXa6KeDzjB4r/Qa/4hQP+CJn/ROdV/8ACh1b/wCSaAP8kwA4wR9OK/q5/wCDOID/AIe26jnAz4A1kDt/y9afX9fX/EKB/wAETP8AonOq/wDhQ6t/8k1+Zv8AwVd/Ym/Z4/4N1/2X7f8Ab7/4JU6TP4H+Jt7rdp4Tl1G/uZ9ahOl6jFNPcRfZdReeEFpLSEhwm5duAQCcgH9t+RUO3I5x+df5Jv8AxFe/8Fsv+ij6V/4Tuk//ACNR/wARXv8AwWy/6KPpX/hO6T/8jUAf1c/8HpH/ACjA8D9h/wALK03j/uEatj9K/wAwev1o/bs/4La/8FDP+CkHwl074I/tZeLLLXfDul6rFrVvBb6TY2LpeQwzQI/mW0MbkCOeQbc456cCvyXoA/3F/wDgmSQv/BNz9ntTwf8AhWnhP/0z2tfcGRX+QV8J/wDg5v8A+Cv3wT+Fvhr4N/Dzx/ptpoHhLSbLRdMt30HTJTFZ2EC20CF3tyzlY0UbmJJxkkmu9/4ivf8Agtl/0UfSv/Cd0n/5GoA/1uMiv8Iz9rEZ/am+JOP+hp1nH/gdN0r9u/8AiK9/4LZf9FH0r/wndJ/+Rq/nr8Z+LtZ8feLtU8ceJpRNqOs3k9/dOFVA09y5kkYKoAGWY8AYHagD+5H/AIMeyP8AhaX7RAP/AECfDmPp52of5/Cv9CjVc/2Xchv+eT/+g/Sv8S79gD/gqT+2Z/wTJ1fxLrn7H3iG10C48XQ2sGqNc6fa3/mpZmRoQBcxyBNplb7uM5r9Mrb/AIOsv+C1d9Oljc/EXSzHMwRh/wAI9pPKscEf8e1AH873ioE+KNSJ73UwH/fZr+9f/gxt+U/tK54/5FL/ANy9ftjpf/Bqx/wRc17TbfXNT+HWqNcXsSTSsPEGqjLyKGY4+04GSe1fpT/wT/8A+CUH7FH/AATG/wCEq/4Y88N3Xh//AITL7F/av2nULu/877B53kbftUsmzb58n3cZzznAoA/QDxYM+FNTz/z6Tf8AoBr/AALdx9TX++p4r/5FXU/+vWb/ANANf4FFAD9x9TX0H+yc3/GUnw1H/U1aN/6XQ4r55r6D/ZN/5Om+Gv8A2NOi/wDpdDQB/u60UUUAFFFFAH+cD/weA/8AKSvwP/2TLTf/AE86zX8ptf1Zf8HgP/KSvwP/ANky03/086zX8ptABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//R/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACiikyKAPj/AP4KE/8AJgvxx/7EDxL/AOmq4r/DIr/c1/4KEsv/AAwN8cR/1IHiX/01XFf4ZVAH91//AAa6f8FfP+CeH/BPT9iTxx8J/wBrv4gp4R1/V/HFxq1rbNp2oXe+zfTbC3WTfaW00YzJBIu0sG+XOMEZ/pY/4ic/+CIP/RbIf/BJrf8A8gV/j95+lGGxQB/sCf8AETn/AMEQf+i2Q/8Agk1v/wCQK/Tr9jb9ub9l39v/AOF938Zv2S/FC+LPDdjqEmlT3a2t1aBLuGOKV4/Lu4YZDhJozuC7ecA5BA/wv8mv9Qj/AIMwcH/glv4vH/VRdSx/4LdMoA/fv/gqJ8HfiJ+0F/wTq+NfwP8AhHp51bxR4r8H6ppml2QkjiM91cW7JFGHmZI03MQMuyqO5Ar/AC6v+IY7/gt7/wBETl/8Heif/J9f7AuDjAqSgD/H2/4hjv8Agt7/ANETl/8AB3on/wAn14p+0X/wQY/4KufsmfBbXf2hfj98K5dA8IeGoo5tRvzqmlTiFJZUgQ+XBdyStmSRFwiHGc9ASP8AZzyK/D7/AIOQf+UJfx7B/wCgXp//AKdrGgD/ABya/wBG7/ggB/wXM/4JcfsXf8Eqfh1+zn+0n8T4/DfjHQ59be9sDpmp3JiW71a7uoP3ltaSxNuhlRvlc4zg4IIH+cjT85NAH+kJ/wAF6P8Agut/wSx/bG/4JU/E/wDZz/Zy+KMfiPxj4g/sf7Bp40vU7czfZdXs7qb95cWkUS7YYnb5nGcYGSQK/wA3ipN3zZ/Ko6AP9gn/AINif+UIHwT/AOuWt/8Ap7v67r/g4T/ZO+Pn7a//AAS28a/s9fsz6AfEvi/VdQ0ae1sFngtvMjtNRhnmPmXMkUQ2RoWwXGcYGTgVwn/BsVx/wRB+CYP/ADy1r/0931fvbznjigD/AB+v+IY3/gt5/wBETl/8HWif/J9J/wAQx3/Bb3/oicv/AIO9E/8Ak+v9gmigD/FM/bB/4Izf8FJP2CPhPF8b/wBq/wCHMnhPwvNfw6Yl42o6bdA3VwjvFH5drdTSfMsTndt2jGCRxX5dV/qcf8HkIx/wSS03H/Q/6N/6SahX+WPQB+1fwi/4N5f+Cv3x3+Fnhz41fCr4RSar4Z8WadbatpV4NW0iIT2d3Es0EoSW9SRQ8bA7XVWHQgHivRP+IY7/AILe/wDRE5f/AAd6J/8AJ9f6c3/BHoD/AIdS/s3Hj/kmvhgfT/iWQdq/SHctAH+Px/xDHf8ABb3/AKInL/4O9E/+T6/1UP2Bvhv4z+Df7Dnwe+EfxHs/7P8AEHhfwXoWl6la70k8i7s7CGGaPfGzRtsdCu5GKnGQSMV9c0zbigD43/bS/b//AGS/+CengTSviX+174sXwjoutX/9mWdw1rd3YluvKeby9lnDM6/u42OWULxjOcCvzZ/4ic/+CIP/AEWyH/wSa3/8gV+WX/B7Gf8AjAb4UbccfEBfw/4lV72r/NGyaAP9gb/iJz/4Ig/9Fsh/8Emt/wDyBR/xE5/8EQf+i2Q/+CTW/wD5Ar/H5yaMmgD/AGB/+InH/giH/wBFri/8Emt//IFfvDpWp2OtaZbaxpj+bbXcSTQvgjdG6hlOCARkEcECv8Bav97b4TD/AItZ4ZH/AFCbP/0QlAH8o3/B1j/wTL/bZ/4KMWPwSg/Y58FP4wbwk+vHVAl5ZWfkC8FgIP8Aj8ng3b/Jk+5uxt5xkZ/jx/4hjv8Agt7/ANETl/8AB3on/wAn1/sC7T06U/IoA/x+P+IY3/gt5/0ROX/wdaJ/8n1/RZ/wQt8TaL/wbp+E/iN4M/4LFTf8Ke1H4qXem3nheKVW1f7dDpSTx3jBtIF6sflNcwjEpQtu+UEBsf3t1/ni/wDB8KR/wtP9nfb/ANArxH/6OsKAP3q/aF/4OTP+CL3jb4A+OfBvhn4yRXWpav4f1KytIRo2sr5k9xaSRRJuaxCrudgMsQB3IFf5LFPyB0/T0plAH9s3/BrB/wAFX/2Bf+CdvwB+Kngz9sHx2nhDUfEPiCzvbCJtPv7vzoIrQxO26zt5lXDcYYg+gxX9CP7ZH/Bxv/wRs+KP7IPxV+GfgT4wxX2t+IvB2uaZp9suj6whmurvT5oII9z2Sou+R1XLFVHUkCv8osbQaN2On+FADK/u5/4Nff8AgsD/AME7f+CfP7D3jH4Sftc/EFPCPiDUvGlzqltatp2oXe+0k0+xhWTfaW00YzJC67Swb5c4wRn+EapffigD/YC/4ic/+CIP/RbIf/BJrf8A8gUf8ROf/BEH/otkP/gk1v8A+QK/x+cmjJoA/tX/AOCzf7Hn7Rf/AAXt/a9tv24P+CUPh0/FX4YWnh6y8MTa1FcW+lBdUsJbie4t/s+qS2dwTHHdQneIvLO7CsSrAfHH7En/AART/wCCmH/BPj9r34bftwftd/DWTwl8L/hT4hsPE/inWm1LTLpbDS9PlWe5uPItLqa4lEcaltkUTucYVScCv6p/+DN7n/gklqP/AGP+s/8ApJp9fr7/AMFqQw/4JJftGf8AZP8AXP8A0kf9KAPlH/iJz/4Ig/8ARbIf/BJrf/yBX+e5/wAHHP7Yn7O37dH/AAUu1T49/sueIl8UeE7jQNJso74W9xa5ntomWVPLuooZBtJAzswe2a/BzJqQjPagD9UP+CJX7RHwf/ZN/wCCpHwh/aG+P+rjQPB/hnULybUb8wzTiFJdOuoEPl26SStmSRFwiHGc9Aa/0s/+InH/AIIh/wDRa4v/AASa3/8AIFf4/PHam0Afsf8A8F8f2ovgZ+2V/wAFUfiR+0T+zjrY8R+Dtdj0hbG/EM9uJTa6Xa20v7u4jilXbLGy/MgzjIyMGvoD/g1t/wCU3vwg/wCuWvf+mS9r+fPIx/Sv6DP+DW0H/h978ID/ANMte/8ATJe0Af69Nf48/wDwcz/8pxPjv/19aJ/6YNNr/YYr/Hn/AODmf/lOJ8d/+vrRP/TBptAHrv8Awahf8ps/hx/2CfEX/ppua/1u6/yRf+DUIH/h9n8OOP8AmE+Iv/TTc1/rdUAFfz0f8HL/AOxT+0v+3v8A8E6rL4H/ALKPho+K/FEPjDTNTezW5trUi1t7e7jkk33UsMfytKg27txzwMA4/oXqLcpO0H8BQB/j+f8AEMb/AMFvP+iJy/8Ag60T/wCT6T/iGO/4Le/9ETl/8Heif/J9f7BNN3LQB/j8f8Qx3/Bb3/oicv8A4O9E/wDk+l/4hjf+C3n/AEROX/wdaJ/8n1/sEUUAf4IHxL+HXjH4QfEbX/hP8Q7T+z/EHhjUbrSdStS6SeReWUzQTxb4maNtkiMu5GKnGVJGDXDV9y/8FM8n/gpH+0H1P/FyvFh/LWLqvhqgAooooA+6v2Jf+CbH7aH/AAUV1PxDo37HXg1/GFx4Vit5tTRLyytPIjuy6wnN5PAG3GJxhM4xzjiv0Mtv+DZb/gttZXMd5c/BWVY4WDs39taKcKpyeBfenpX7jf8ABjz/AMlT/aIzx/xKvDn/AKPv6/0KtW/5Blzx/wAsn/8AQaAPwQ0j/g5g/wCCKGi6TbaLqfxoiiubOJIJU/sXWTteNQrDK2JBwR249K/Qb9iD/gpz+xD/AMFGf+EjH7G/jVfF/wDwiP2T+1dtje2f2f7b532f/j8gh3b/ACJPuZ27fmxlc/4knitSPFGo9h9qm/8AQzX97X/Bjh979pYn/qUun/cXoA/vb8V/8irqf/XrN/6Aa/wKK/31vFZH/CK6mP8Ap1m/9ANf4FNABX0H+yb/AMnTfDX/ALGnRf8A0uhr5+2NjpX0D+yb/wAnTfDX/sadF/8AS6GgD/d1ooooAKKKKAP84H/g8B/5SV+B/wDsmWm/+nnWa/lNr+rL/g8B/wCUlfgf/smWm/8Ap51mv5TaACiiigAooooAKKKKACiiigAooooAKKKKAP/S/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACv4oP+Dpb/AIK0/t//APBOX4+fCvwT+x148/4RHTPEfh+9vdQh/s3Tr7zZ4rry0bde207LhOMKQvtX9r9fxaf8HRf/AASE/b//AOCk3x5+Fvjb9jrwVF4p03w1oF5Y6hJJqmm6f5U8t0JETbe3MDNlOcoCB0yDQB/JF8Q/+Dkj/gsv8VPh/rnww8d/GD7doniTT7rS9Rt/7C0SPzrS8iaGaPfHYK67o3IyhBHYg1+F9f0Pf8QrP/BcX/okNr/4Umgf/J9H/EKz/wAFxf8AokVr/wCFJoH/AMsKAP54a+xf+Cfvww8EfG/9u/4MfBn4mWP9peHPFnjjQNI1S08ySHz7K91CCGeLzImSRN0bMNyMGGcqQea/Vn/iFZ/4Li/9Ehtf/Ck0D/5Pr69/4J//APBtf/wWM+Bf7dfwa+NPxN+Fttp/hvwj420HWNUul8QaJKYbOx1CGeeQRxXryPsjQnaisxxhQTgUAf2Pf8Qu/wDwQ5/6Ir/5cGv/APywr9Pf2MP2Dv2W/wDgnz8Lbz4LfsjeGP8AhE/DV/qMmrTWn2y7vd15LFFC8nmXk08gykKLtDbeM4yTn7CooAKKKKAP8+L/AIOMf+C3P/BTf9g//gpXqnwA/ZZ+JH/CMeErfw/pN7HZf2TpV3ie5iZpW827tJpPmIHG7A7AV/Np+0h/wX3/AOCrv7WvwT179nX4/fFL+3fB3ieKKHUrD+xtHtvOSKVJ0Hm21lFKuJI0PysOmOnFf0w/8HE3/BC3/gpv+3v/AMFJtT/aF/ZW+H0HiHwncaBpVjHePrOk2RM9tEyyr5N3dQyjaSOdmD2NfhZ/xCs/8Fxf+iQ2v/hSaB/8n0Afzw0uK/od/wCIVn/guL/0SK1/8KTQP/lhX46ftafsmfHf9h748ax+zV+0vo66B4z0BbZ76xS6t7xY1vLeO6h/fWsksLboZUb5XOM4OCCAAfNlFFFAH7Cfsx/8F5/+Cq37HHwR0T9nL9nP4of8I94O8Oicafp/9j6Pc+V9pme4l/fXNlLM26aRm+ZzjOB8vFe9/wDEUN/wXH/6LT0/6l/QP/lfXjv7LH/Bv/8A8FV/20PgXof7Sv7Ofw4t9c8G+IxOdOvX1vR7RpRbTvbS/ubm7ilTbLE6/MgzjI4wayv2uf8Aggx/wVE/YX+B2pftI/tOfDyDw/4O0iW2gur1Na0m8ZHu5VghHk2l3LKd0jqvyoQM5OAM0Ae6/wDEUN/wXG/6LV/5b+gf/K6l/wCIoX/guP8A9Fq/8t/QP/ldX4A1+3f7PX/Bu3/wVw/am+C3hz9of4HfDO31bwn4rtBe6XeNrui2xlgYlQxhnvI5U5U8Oin2oA/aH/gjd+2P+0Z/wX9/a2uf2F/+CsniD/hafwttPD954oi0b7LbaNt1XT5beC2uPtOjRWVydkd1MvlmXyzuyVJCkf1O/wDELv8A8EOf+iK/+XBr/wD8sK/Cj/g20/4Iif8ABSr/AIJ6/wDBQ29+PP7WXgKDw34Xl8IanpSXker6XfE3VxcWbxR+VZ3c0g3LE53bNoxyRkZ/vWoA8x+D3wk+H/wD+FPhr4I/Cmw/srwz4R0210fSrLzZJvs9nZxLDBF5kzPI+1FC7nYse5Jr8F/+Dm79ur9qf/gnv+wR4c+NP7I3if8A4RTxJfeNLHSZ7z7HaXu6zmsb6Z4vLvYZ4hl4YzuC7uMZwTn2H4zf8HIv/BHr9n34u+JvgX8WPifc6b4m8HapdaNq1ouga1OsF7ZStDPGJYbJ43COhXcjMpxlSRzX4q/8Fhf2s/gN/wAHFH7M+k/sS/8ABI3WX+JfxI0HxBbeLb7S7i1n0JY9Is7a5tJp/tOsx2duxSe8gTy1kMh35ClVYqAfzB/8RQ3/AAXG/wCi1f8Alv6B/wDK6lH/AAdC/wDBcf8A6LV/5b+gf/K6ug/4hWf+C4v/AESG1/8ACk0D/wCT6/CT4r/DHxp8Evif4i+DnxHtBYeIfCmpXWkanbCSOYQ3dlK0E8fmRM8b7JEK7kYqcZUkYoA+8P22P+CwH/BQr/gon4B0r4Y/tg+P/wDhLdD0O/GqWVt/Zmm2PlXQieDfvsrWB2/dyOuGJXnpmvzMoooAXaen4UYNfv54Q/4Nhv8AgtR478J6Z438LfCi1uNM1i0hvbSU+ItCTfBcIskTbWvgy7kYHDAEdCBXxJ+3h/wSZ/bw/wCCaeleG9a/bJ8GxeFbbxdLcw6W0Wp6fqHnPZrG0wIsbicptEqffCg54zg4APzdr/e3+E//ACS3wz/2CbP/ANEJX+CRX+tV8Pv+DpD/AIIkaD4C0PQ9U+LV1Hc2en20Eq/8I5rx2vHEqsuRYEHBGOOPSgD+k6sTxDc3FjoN7eWx2vDbyOh9GVSRX8/n/EVN/wAEOv8Aort1/wCE3r//AMr6x/EP/B05/wAEQr7QL2ytfi3dNLNbyIi/8I5rwyWUgDmwAoA/hHv/APg6A/4LgQX00MXxqwqOygf8I/oHbj/oHV+dP7cP/BS/9tL/AIKOap4c1v8AbH8Y/wDCXXPhSK5h0tvsFjY+Ql2Y2mGLKCANuMSfezjb8uMmvhe/ljmvp5ojlXdiPoTxX6LfsHf8EmP28f8AgpZpXiTWv2NvB0Xim28Iy20GqNJqen6f5D3iyNCAL24gL7hE/wBwEDHOMigD83aK/oe/4hWf+C4v/RIbX/wpNA/+T6P+IVn/AILi/wDRIbX/AMKTQP8A5PoA/nhpcEcGv6Hf+IVn/guL/wBEhtf/AApNA/8Ak+uO+I3/AAbNf8FmfhN8PNe+Kfjz4VW1nofhnTrnVdQnXxBochitbOJppn2R3zO2yNCdqKWOMAE4FAH4JV/dj/wbC/8ABHL/AIJ0f8FD/wBh/wAX/F/9rv4e/wDCWeIdL8aXOkW11/aep2WyzjsLKdYvLsrqCM4eZzuKlucZ2hQP4Tq/06/+DK3j/gmn8QP+yi3n/pq02gD9DP8AiF5/4Ib4z/wpb/y4Nf8A/lhTv+IXf/ghz/0RX/y4Nf8A/lhX7Z/GL4s+BfgL8J/Enxt+KN4dO8N+EtNudW1S6WKSYw2lnEZZpBFEryPtRSdqKzHoATxX4W/8RU3/AAQ6/wCiu3X/AITev/8AyvoA/mC/4LIftk/tF/8ABAL9ra3/AGFv+CTXiD/hVnwtu/D9n4ol0X7LbaznVb+W4gubj7TrEV7cjfHawr5Yl8sbcqoJYn8UfjV/wcPf8FfP2iPhH4j+Bfxf+LP9reFvFmnz6Zqtl/Ymiwefa3C7JY/MhsY5F3KcZRgR/CRX7cf8Fdf2Lf2jv+DhT9qu3/bz/wCCTOhJ8SfhbaaFZ+FZdVuLu10Nl1XTpZ57iD7JrEtnckJHdQtvEXlndhWJVgPxk+OH/BuL/wAFff2cPg/4l+PXxf8Ahhb6X4W8IadPquq3a69ok5htbZC8riKC9eR9qjO1EZj2FAH4Z1/oN/8ABud/wRE/4Jj/ALeH/BNXS/j/APtTfDf/AISfxbceINWspL3+1tUs8wW0iLCnlWl3DF8oPXZk9ya/z5K/0BP+Ddn/AILof8Ex/wBgb/gmzpn7PX7U/wAQJ/Dviy31/Vb6Szj0bVb1RBcupibzbS0li+YDoHyO4FAH76f8Qu//AAQ4/wCiK/8Alwa//wDLCnf8QvH/AAQ5/wCiK/8Alf17/wCWFeqfszf8HCP/AASd/bA+OXh79mz9n34kXGteMPFEskGmWT6HrFqsrxQvO4864s44kxHGx+d1HGBzgV+1VAH8/wD/AMQvH/BDj/oiv/lwa/8A/LCvoL9lv/ghB/wSw/Yw+Nuj/tGfs2/DH/hHfGOgrOtjf/2vq115X2mB7eX9zdXksLbopGX5ozjOVweax/2rf+C+3/BLD9iT466x+zV+0n8RLjQfGOgC3N9ZJomrXixi6gS4i/fWtpLE26KRG+VzjODgggH7KP8AwX2/4JYftt/HXRv2av2a/iJca94x18Tmwsn0TVrNZBawPcS/vrm0iiXbFGzfM4zjAycCgD9lq/x5/wDg5n/5TifHf/r60T/0wabX+wxX+cL/AMFwv+Dfj/gq1+2X/wAFS/it+0t+zt8OLfW/BviefS3029fXNHtDKttpFlay/ubm7ilTbNE6/Oi5xkfKQaAP5Ff2U/2uPj9+xH8a9M/aJ/Zj17/hG/GOkRXENrf/AGa3u9iXcLQTDybqKWI7o3ZeUOM5GDzX60/8RQ3/AAXG/wCi1f8Alv6B/wDK6uh/4hWf+C4v/RIbX/wpNA/+T6P+IVn/AILi/wDRIbX/AMKTQP8A5PoA57/iKG/4Ljf9Fq/8t/QP/ldX9CH/AAbT/wDBab/gpR+39/wURvfgZ+1h8Rf+Eq8LReENS1RbL+ytLssXVvcWaRyeZZ2kMnCyOMbtpzyOBX4If8QrP/BcX/okNr/4Umgf/J9f0Cf8G2n/AARE/wCClX/BPb/gobe/Hn9rLwFB4b8Ly+ENS0pLyPV9Lvibq4uLR44/Ks7uaQblic7tm0Y5IyKAP71q/wAtH/gol/wcW/8ABYj4Gft7fGb4L/C34t/2Z4a8KeNNb0nS7P8AsPRJfIs7O9lhhi8yaxeRtkahdzMWPck1/qXV/l2/8FDv+DbT/gsT8ev28fjH8bPhd8LrbUfDXi3xnrWr6XdNr+iQma0vL2WWGQxy3qSJuRgdrqrDoQDxQB8Lj/g6F/4LjngfGr/y39A/+V1J/wARQ3/Bcb/otX/lv6B/8rq+WP24P+CLP/BRr/gnP8K7D41fteeBYPDHhzUtUj0a3uotW0y/L3ksMs6R+XZXU0gzHBI24qFG3BIJAP5U0Ad98SviR4x+MPxI8Q/Fv4i3f9oeIPFOpXesandeXHF515fTNcTyeXEqxrvkdjtRVVc4AA4rga/eb4Xf8G0v/BZL4z/DLw58YPhx8LLa+8PeK9Ls9Z0u5bxBocJmsr+FLiBzHJepIm6J1ba6qy5wQCMV3H/EKz/wXF/6JDa/+FJoH/yfQB/PDRX9D3/EKz/wXF/6JDa/+FJoH/yfR/xCs/8ABcX/AKJDa/8AhSaB/wDJ9AH5rfsPf8FLv20v+CcWp+Itb/Y38Y/8Ijc+K4raHVG+wWN956WhkaAYvYJwmwyv93Gc85wK/RG1/wCDnv8A4LeX1zHZ3Xxn3RysqMP7A0EZVjgjjT6+G/28P+CTP7eH/BNPSvDWt/tk+DYvCtt4uluYNLaLU9P1DznsxG0wIsricptEqffCg54zg4/O7Sv+Qlbf9dU/nQB/rr6R/wAGxn/BErXNLtta1P4M+ZcXkSTSv/b+ujc8ihmOBfgDJPav0O/Yc/4Jd/sPf8E3x4l/4Y18Ff8ACIf8Jf8AZP7W/wBPv77z/sPm/Z/+P24n8vZ58n+r25zznC4+4vCf/Iq6Z/16Q/8AoAroKAKl3Zw31rJZXK7o5UKMOnysMEV+Bn/ELx/wQ5/6Ir/5X9e/+WFfv9RQB/lrf8HUf/BNL9iz/gnB4++DGi/sc+Df+ERtvFen61Pqifb76+897SWzWA5vZ5ymwSv9zGc85wK/mz/ZN/5On+Gv/Y1aN/6XQ1/osf8AB0t/wSX/AG8f+Clfj34N65+xt4Ni8VW3hLT9Zg1RpdT0/T/Jku5bRoQBe3MBfcIn+4CBjnHFfzQfs/f8Gwv/AAWq8CfHnwR428T/AAntbfTNG17Tb27lHiLQm2QW91HJI21L4sdqqThQSegFAH+r5RRRQAUUUUAf5wP/AAeA/wDKSvwP/wBky03/ANPOs1/KbX9WX/B4D/ykr8D/APZMtN/9POs1/KbQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//T/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACm7lxntTq/h8/4Osv+Cof7ev7Af7QPwo8H/sifES78Fadr/h68vL+G1trOYTTRXYjRibmCUrhOMKQKAP7g6K/xyf8AiI//AOC2f/Re9W/8F+k//IVJ/wARIH/BbL/overf+C7Sf/kKgD/Y3or/AByP+IkD/gtl/wBF71b/AMF2k/8AyFR/xEgf8Fsv+i96t/4LtJ/+QqAP9jeiv8cj/iJA/wCC2X/Re9W/8F2k/wDyFR/xEgf8Fsv+i96t/wCC7Sf/AJCoA/2N6K/xyP8AiJA/4LZf9F71b/wXaT/8hUf8RIH/AAWy/wCi96t/4LtJ/wDkKgD/AGN6aCO3av8AHK/4iP8A/gtl2+Perf8Agv0n/wCQ6/Vz/gh9/wAFwv8Agqj+1J/wVT+EHwC+PPxg1DxH4Q8SaheQ6jp01lp0STpFp11OgLQWqSLiSND8rjpjpQB/pt1/kS/8HUv/ACnE+Lv/AF6+G/8A0wWFf67Vf5Ev/B1L/wApxPi7/wBevhv/ANMFhQB/PJsYcY6fpSbGr9j/APggV+zh8Ev2uf8AgrD8K/2fv2iPD8Pifwfrv9sfb9NmklhSb7No95cw5eB45BsmiR/lcZ246cV/pT/8Q3n/AARM/wCiCaV/4MNW/wDk2gDkP+DYz5f+CIXwTDcfutb/APT3f15f/wAHXnP/AARO+I4HbVfDv/p2ta/kc/4Kv/8ABSn9t/8A4JN/t9ePv2BP+Ce3j+7+Gnwh8BtYR6B4bsre0uoLFb/T7a/uQk19BcXDeZc3E0p3yNgthcKFA63/AII7ft+/td/8Fjf28/C/7BP/AAUq8a3PxU+Efiiz1K81Tw5fwW1pBcTaZZS3lo5msIba4UxXEKSAJIASMHK8UAfx/bGr/Z1/4IFMB/wRu/Z7B/6FWH/0dLXAf8Q3n/BEz/ogmlf+DDVv/k2v1n+CPwR+F/7OHwo0P4HfBLSI9A8KeGrYWemafE8kiW8CksEVpXeQ8k8sxNAHrNFFFAH+JR/wWFRj/wAFXP2kcf8ARS/E/wD6c7iv3M/4Mv1P/D0nxdx0+HWpf+nLTK/uG+Kv/BBD/gkV8bviZ4g+MHxU+C2m6x4l8Vahcarqt9Je6lG9xeXUhlnlKxXaIpd2JwqhR2Ffg7/wXS/Zn+Bn/BCr9kfRP2uv+CTvh+H4OfEfWPE9p4Zvda0+SW+kl0i6tbu6mtTFqT3cIV5rWB8rGGGzAbBIIB/bPX+Hx/wVGGf+ClX7QJH/AEUXxN/6dLivtD/iJA/4LZf9F71b/wAF2k//ACFX99v7JH/BEf8A4Ja/tc/srfDb9qn9o34R6f4m+IHxJ8L6T4m8S6xPeahDJqGrarZx3d7dPHBcxxIZp5WcrEiIucKAOKAP8lPY3p0ptf3a/wDB1F/wSo/4J+/sE/sffDz4kfsjfDaz8F61q/jFdNvLm2ub2cyWp0+6m8src3EqgeZGhyoB461/CXg+lAH+7p+yb/yaz8Nf+xV0X/0hhr+Mb/g+J/5Jf+zr/wBhTxH/AOidOr+zj9k9lX9ln4Z5P/MqaN/6Qw1/GP8A8HxHPwv/AGdcf9BTxJ/6J06gD/PDoopwU9qADY2MgUmK/sO/4NPP+Ccf7Ff/AAUA1H44Rfth+A7XxunhaLQDpYuri7t/s5u2v/Px9lnh3b/Jj+9nGOOtf2H+Iv8Ag3H/AOCKtp4evrq2+A2lK8NvK6H+0NV4ZUyP+Xz2oA/x4gpPAr/Q7/4Mdv8Akl/7RX/YU8N/+idQr/PRv41gvp4o+FSRgB7A1/oXf8GO3/JL/wBor/sKeG//AETqFAH93W5elOrxL9ovxJrPg39n7x14t8N3H2TUNK8Pand2swCny54LSSSNgGBU7WUHBGPWv8jX/iJA/wCC2X/Re9W/8F2k/wDyFQB/sa7hXyB/wUJ/5MF+OP8A2IHiX/01XFfgJ/wanft+ftd/t9/s/fFfxf8Ate+NrrxrqHh/xBZWdhNdQWsBggltPMdALaGFSC4z8wJr9+/+ChP/ACYL8cf+xA8S/wDpquKAP8Miv9Or/gyvGP8Agmn8QP8Asot5/wCmrTa/zFa/Rr9kb/grH/wUI/YP+H178Kv2S/iVe+DPD+pXzanc2dta2UyyXUkccLSlrm3mYExxRjAIXjpQB/rmf8FbyG/4JbftEbf+ideJP/TbPX+I3sav6V/2M/8AgtJ/wU+/bQ/a3+GX7In7TvxYvvFvw4+JvifSvDPifRbiz0+GLUNI1S6jtby1klt7WKZFlgkZMxSIwzlWB5r+9/8A4hvP+CJn/RBNK/8ABhq3/wAm0AfAH/Bm4Cv/AASS1IMMf8V/rPb/AKdNPr9fv+C1Tqf+CSH7RoH/AET/AFz/ANJHr+JP/guD+1n+0N/wQ5/bMtv2Mf8AglV4ml+D3wxuvDdj4jl0LT4oL2JtUvpbmC4uPM1GO5nDSR28KlfM2jZkAEnP4Y/F3/gvH/wVu+PHwv174L/Fv4zalrXhjxRYTabqdhLY6YiXFrOvlyRkxWiOoZTjKMCOxoA/IKnbTjNNr/RG/wCDbb/gjl/wTU/bV/4JkaX8dP2n/hXY+LfFdx4h1ezfULi7voXMFtIixJst7mKPCA/3Oe9AH8vH/Bt6CP8Agtp8BP8AsK6h/wCmm9r/AGOa/Jz4Bf8ABDz/AIJW/svfF/RPjz8A/hDp/hzxf4bkebTtRgvdRle3eWJ4XISa5kjOY5GHzIetfrHQB/kLf8HSPP8AwW8+MBHQRaD/AOmSxo/4Nbvl/wCC3nwfJ4Bi17H/AIJL6v8ASY/aO/4Iqf8ABL79rr4w6p8ff2jfhLp/ijxhrQgF7qU17qMLyi2hSCLKQXMcY2RxonyoOnPNO/Zw/wCCKX/BMD9kX4w6X8fv2cvhJYeF/GGiicWWpQ3uozPCLmF4JcJPcyRndHI68ocA8UAfqfRRSZFAC0U3cvTNOoAbuUUFlHFf5ev/AAWH/wCC6v8AwVf/AGcf+CnHxn+BvwT+Mmo6D4V8NeIpLPTNPistNkS3gWKMhA0to7sMnqzGvvf/AINkP+CvP/BRz9uP/go7e/Bf9qv4oXvi/wAMR+DtT1JLC4tbGFBdQXFmkb5traF8qsjjGdvPSgD/AEFaKTIpaAP5Af8Ag9N4/wCCYHgX/spWnf8App1Wv8wWv9Pn/g9N5/4Jf+BcdviXp3/pp1av8wagD/cY/wCCZH/KNr9nv/smnhP/ANM9rX29vXpmviH/AIJkf8o2v2e/+yaeE/8A0z2tfiv/AMHUX7dX7WH7A/7H3w8+I37I3jG58F61rHjFdNvbm2gtpzLa/wBn3U3llbmGZQPMjQ5UA8daAP6iKbuXpX+OV/xEgf8ABbL/AKL3q3/gu0n/AOQq/wBcr9nTxJrPjL9n7wL4t8SXH2vUNU8PaZd3UxCjzJ5rSKSRiFAUbmYnAGB2oA/iw/4Pif8Akl/7Ov8A2FPEf/onTq/z1dK/5CVt/wBdE/nX+hV/wfE/8kv/AGdf+wp4j/8AROnV/nkxSvDKs0ZwyYIP0oA/30fCZH/CLaYP+nSH/wBAFb+5a/xxLf8A4ON/+C1lnbx2lr8eNVSOJQiL/Z+lcKowB/x5elf2Pf8ABpz/AMFH/wBtn/goH/wvT/hsPx7deNv+EU/4Rz+yvtVtaQfZvtn9o+fj7LBDu3+RH97ONvGOaAP7H6KQEdqMigBNy0blr+LL/g6//wCCmf7c37AHj74K6N+x98QLvwTbeKNO1ubUltbaznFw9rLZrCSbmCbGwSPjbjOa/l7/AGdP+Dhv/gst4y/aB8DeEfEvxz1S607VfEGl2d1AbDSlEkE13FG6ErZAjcjEZBoA/wBdOiiigAooooA/zgf+DwH/AJSV+B/+yZab/wCnnWa/lNr+rL/g8B/5SV+B/wDsmWm/+nnWa/lNoAKKKKACiiigAooooAKKKKACiiigAooooA//1P4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr/OF/wCD3b/k6j4H/wDYqah/6XCv9Hqv84X/AIPdv+Tp/gef+pU1D/0uFAH8Ynwr+HXiP4w/E7w38JPBgjfWPFGp2ej2CSv5cZur6ZbeEO5+6pdxk9hX9Hv/ABCG/wDBY/8A6AnhX/wfQ/8Axuvw/wD+Ce//ACfz8Dv+x/8ADX/p1tq/3OKAP8of/iEN/wCCx/8A0BPCv/g+h/8AjdH/ABCG/wDBY/8A6AnhX/wfQ/8Axuv9XUOrdKfQB/lD/wDEIb/wWP8A+gJ4V/8AB9D/APG6P+IQ3/gsf/0BPCv/AIPof/jdf6vFFAH+UP8A8Qhv/BY//oCeFf8AwfQ//G6P+IQ3/gsf/wBATwr/AOD6H/43X+rtuXtTqAP8NP8Abq/YX+Pn/BOr4+3H7Nf7SlvZWnie1srbUHjsLlbuHybtS0R8xQBnA5HavvL/AINvf+U2nwD/AOwrqH/ppva+v/8Ag7w/5TI63/2Kug/+iXr5A/4Nvf8AlNp8A/8AsK6h/wCmm9oA/wBjqv8AIl/4Opf+U4nxd/69fDf/AKYLCv8AXar/ACJf+DqX/lOJ8Xf+vXw3/wCmCwoAwP8Ag15/5Ti/BT/uP/8Aph1Cv9fmv8gb/g15/wCU4vwU/wC4/wD+mHUK/wBfmgD/AB9/+DnT/lN78bP+uui/+mSwr03/AINQv+U2fw4/7BPiL/003NeZf8HOXP8AwW8+NhHTzdF/9MlhXpv/AAaifL/wWz+HGf8AoFeIh/5SLmgD/W7oopu5QM5oAdRRRQB/Or8ev+DoP/glN+zd8bfFv7P3xN1bxJF4i8E6xeaJqaW+jSzQrd2EzQTBHDAModDtYDnH0r8kP+Cmv7Y3wV/4OZPgJp37Bf8AwS4uLzVviD4e1qDxpeQ+I7c6PaDSrGCeylZZ5C6tKJb6EKmOVyc/LX8YH/BYQbv+Crf7SLLyD8SvE+Mf9hOev3O/4MwP+UpXi3/snOpf+nHTaAPEf+IQ3/gsf/0BPCv/AIPof/jdf6Z37D/wl8YfAf8AYy+E/wAEPiBHFFrvhDwhomjaikDiWIXVhYw28wSQY3KHQ4bvX1VRQB/OH/wco/8ABMz9qL/gp/8Asp+BPhH+ytaadd6zoHisaxdrqV2tlGLYWNzB8rsGy2+VeP6V/GH/AMQhv/BY/wD6AnhX/wAH0P8A8br/AFdty06gD+Uz4e/8HR//AASj/Z88A6H8BfiLq/iSLxD4I0+10HVEg0WWSIXmmRLazqkgfDIssZCsOoFfzRf8HNX/AAWP/Yq/4KmeB/hFoP7J1/q15P4NvtYuNRGp6e9kFS8itFh2FmO7mF846V/M3+1kP+MpviV/2NWsj/yemr57oAK/pt0T/g0n/wCCwfiHRLPXdO0Xwsbe9gjuIi2uRBtkqhlyNnHBFfzJV/va/CdlHws8M/8AYKsv/RCUAfy8/wDBsj/wSB/bM/4JZX/xjuf2s7HSrNfGsehrpn9m30d7k2BvfO37FGz/AF6Y9a/qo8V/8irqf/XrN/6Aa396+tYHiv8A5FXU/wDr1m/9ANAH+Bzqn/IRuf8Arq//AKFX+hX/AMGO3/JL/wBor/sKeG//AETqFf56mqf8hK5/66v/ADr/AEKv+DHchfhf+0Tnvqnhv/0TqFAH9sHx58Ha58QPgZ4z8A+HFRtQ1vQtR0+1V22qZrm2kijDN2G5hk1/lyf8Qhv/AAWP/wCgJ4V/8H0P/wAbr/V4ooA/mY/4NoP+CWv7V/8AwS5+B/xM8CftXWem2moeKdds9QsF029S8TyYbUxNvZFXa27jFftN/wAFCf8AkwX44/8AYgeJf/TVcV9g18d/8FCXT/hgb444P/MgeJf/AE1XFAH+GXX7If8ABPX/AIIZft7f8FOvhFqfxu/ZX0/RbrQdH1aTRbhtS1GOzkF1HBDOwWNg2V2Tp83+FfjfX+nX/wAGVvH/AATT+IH/AGUW8/8ATVptAH8/n7O//Bu1/wAFJf8Agnh8efBv7eX7SWl+H7b4ffBvWbHxn4klsNViu7pNL0SdL27aCBVBllWGFiiDG5uM1/Uh/wAReX/BG/8A6DPir/wQy/8Axyv1t/4K5MD/AMEtv2iAP+ideJP/AE2z1/iNUAf3D/8ABSj9hb4+/wDByd+0TB/wUM/4JiW9lqvw3stItfCEs3iG5XSLv+0tMkluLgC3kDN5Yju4tr98kdq/Jf8AaF/4Nh/+CqX7MPwN8V/tD/FbSPDkXhvwXplzrGpSW2sxTTLbWqGSQpGEBdto4ANf2Mf8GbzKv/BJTUVJ5/4T/WRj/t00/t+FfsD/AMFqmB/4JIftG4/6J/rg/wDJR6AP8Uev7wv+Df3/AIOBf+Cdf/BOv/gndp/7Nf7Sepa7a+JrbXdTv3TT9Ke6h8m7dDGfMVgM4HIr+D2igD/X/wD2TP8Ag5J/4Jjftq/tE+GP2XvgZqniCfxV4tnlt9PjvNIkt4C8MD3Db5WYhcRxN29q/fmv8cX/AINvf+U2nwD/AOwrqH/ppva/2OqAPwf/AGzf+Div/gmv+wb+0Xrv7LX7QWp6/beLPDgtjeR2OlS3NuBd28dzFtkVgG/dSrnjrx2r5f8A+IvL/gjf/wBBnxV/4IZf/jlfxK/8HSX/ACm++L//AFy0H/0yWVfz5hGPAFAH+rt/xF5f8Eb/APoM+Kv/AAQy/wDxyk/4i8f+CN3/AEGvFf8A4Ipf/jlf5RFFAH+xP+xL/wAHDf8AwTg/4KBftD6T+y7+znqWvXPirWYLqe1ivtKktYDHZwNcTZlLEDEaNjjtj0r90a/yRv8Ag1DRh/wWy+HBIwP7J8Rf+mm5r/W5oA/xhf8Agvp/ymS/aE/7Gub/ANFRV7P/AMG7X/BQX9nb/gmx+31eftD/ALTlzfWnhyfwnqOjq+n2jXkv2m5ntJIx5akHbiFsnNeMf8F9P+UyP7Qh/wCprm/9FRV+QNAH+rv/AMReP/BG7/oNeK//AARS/wDxyl/4i8v+CN//AEGfFX/ghl/+OV/lD0UAf21f8HIP/BdX9gX/AIKbfsS+GPgX+yzqGtXXiDSvGdnrc66jpr2UQtIdPv7d9rsSC3mXEfy/Wv4laKKAP9xj/gmR/wAo2v2e/wDsmnhP/wBM9rX5Sf8AByj/AMEzP2ov+Cn37KfgT4Q/sq2mnXmseH/FY1i7GpXa2UYthY3MGVdwctvlXgfyr9WP+CZLqP8Agm3+z2P+qa+E/wD0z2tfcdAH+UP/AMQhv/BY/wD6AnhX/wAH0P8A8br/AFG/gN4O1z4f/AzwZ4B8Rqi6homhadp9yqNuUTW1tHFIFYdRuU4Neu0UAfwh/wDB8T/yS/8AZ1/7CniP/wBE6dX+eTBC08qwp1chR9TwK/0Nf+D4cg/C/wDZ2x21TxH/AOidPr/PV0r/AJCVt/11T+dAH9Mtl/waN/8ABYrULKG/tdF8K+XOiuudch6MMj+D0r+sL/g2O/4JC/tk/wDBLE/GY/ta2OlWf/Cbf2B/Zf8AZl8l7n+zv7Q87fsVdmPtEe315r+qDwn/AMirpn/XpD/6AK3twoAqXt1Dp9lLfz8RwIZGx6KMn+VfzGf8ReP/AARw/wCg34q/8EM3/wAcr+l3xWy/8Ipqftazf+gNX+BVQB/Un/wc1f8ABWD9kL/gqZ43+EOvfsn3up3lv4NsNYg1H+0rF7Iq97JaNDsDE7gRC2cdK/nv/ZN/5Om+Gv8A2NOi/wDpdDXz/sbGe1fQH7Jv/J03w1/7GnRf/S6GgD/d1ooooAKKKKAP84H/AIPAf+Ulfgf/ALJlpv8A6edZr+U2v6sv+DwH/lJX4H/7Jlpv/p51mv5TaACiiigAooooAKKKKACiiigAooooAKKKKAP/1f4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr/OD/wCD3b/k6X4H/wDYqah/6XCv9Hyv84T/AIPdh/xlN8Dx/wBSpqH/AKXCgD+UL/gnv/yfz8Dv+x/8Nf8Ap1tq/wBziv8ADH/4J7/8n8/A7/sf/DX/AKdbav8Ac4oA/wA+P/g7U/4KB/tvfslft7eAfAf7M3xV8TeBNG1D4f2t/c2OiajPZwS3LapqURmdImUFykaLuxnCiv5Yv+H1v/BXD/o43x//AODy7/8Ai6/dz/g9d/5SR/DX/smln/6eNVr+OSgD9P8A/h9b/wAFcP8Ao43x/wD+Dy7/APi6P+H1v/BXD/o43x//AODy7/8Ai6/MCigD+kz/AIJM/wDBWj/gpn8W/wDgpr8Cfhj8S/jt4113w9r3jbR7LUNOvtXuZra5t5blFeKWNnKsjKcFTX+tZX+KL/wRT/5S3/s5f9lA0P8A9K0r/a6oA/yhP+DvD/lMjrf/AGKug/8Aol6+QP8Ag29/5TafAP8A7Cuof+mm9r6//wCDvD/lMjrf/Yq6D/6JevkD/g29/wCU2nwD/wCwrqH/AKab2gD/AGOq/wAiX/g6l/5TifF3/r18N/8ApgsK/wBdqv8AIl/4Opf+U4nxd/69fDf/AKYLCgDB/wCDXoEf8Fxfgpn/AKmD/wBMGo1/r75Ff4p//BGr9tP4V/8ABPj/AIKO/Dv9rf4z2eo3/hrwp/an2uDSo45bxvtumXVnF5SSyQocSTIWy4woJHPFf3hf8RoP/BLb/oUfiL/4LdN/+WVAH78fF/8A4Jef8E7P2g/iJqHxc+OPwV8H+K/FGrGM3uqanpVtcXU/kxrFH5kjoWbZGiIMngKKu/BP/gmV/wAE+/2bfiJafFr4BfBvwl4P8TWKSx2+qaTpdvbXUSTxmKRUkjUEBkJU+orrv2GP2xfhh/wUA/Zd8L/tcfBm01Cy8N+LFums4NWjjhu1+yXUto/mJDJMg+eFtu1z8pGea+vKACv8or/gtP8A8FWP+ClHwW/4Ko/G74WfCT45eM/DvhrQ/Ecltp+mWGr3MFtbQrFGwSKNHAVck9K/1da/z5/+Cnn/AAat/wDBQz9sv9v34p/tR/C7xJ4Hs/D/AI21t9RsYdQv76K6SJkjUCVI7CRA3ynhXIoA/lg/4fVf8Fch1/aM+IHH/Ucu/wD4um/8Prf+CuH/AEcb4/8A/B5d/wDxdfWP/BSX/g3h/bX/AOCW/wCzzD+0p+0FrvhLUtCm1e20VYtEvLue4+0Xcc0iNsns4F2AQMCd+emBX4H0Adp488e+M/il411f4kfEfU7nW/EGvXc9/qOoXkhluLm6uXMks0rtyzu7FmY8k1/Vz/wZgDH/AAVJ8W+/w61Ij6DUtMFeNfs3/wDBpx/wUd/ae/Z/8FftHeAfFHgSDQvHeh2Ou6fDfahfpcx2uoQJPEsyJp7oHCP8wVyARwTX9IH/AAb6f8G+X7aH/BK79s/Xf2hv2htc8Kanoup+E7vQ4o9Du7ue5FxPd2c6syT2cC7Ntu2SHznbx1oA/swooooA/k//AODt39qn9pP9kj9i34b+Nf2ZPHGs+A9W1Pxqtjd3eiXclnNNbf2ddy+S7REFo96q20nGRX8A3/D63/grh/0cb4//APB5d/8Axdf2+f8AB7P/AMmC/Cj/ALH9f/TVe1/miUAbut63rHiXV7vxH4huZLy/v5XuLieU7pJZZSWd3Y8ksSSawq/rB+H3/Bnv/wAFNfiR4C0T4i6D4p+H0djr1hbajbrNqWoLIsV3EsqBlXTSoYKwBAJHpXW/8QX/APwVK/6G34c/+DPUv/lZQB/IjX6c2P8AwWc/4KyabZQ6bp37Q/j6KC3QRxomt3YCoqgAAb+AABX7a/8AEGB/wVL/AOhu+HX/AIM9R/8AlZX8l3iHR7jw5r174evWVprCeS2kKZK7omKNtzjjIoA/0b/+DQL9tf8Aa5/a+1L48xftQ/EfxB4/Ggx+HTpw12+lvfsv2g6h53leaTt3+Wm7GM7RX9pXisj/AIRXU/8Ar0m/9ANf5Uv/AAbif8Fmf2Xf+CR998W7j9pTSfEOqL45j0VdPGgW1tcbP7PN55vnfaLi325Fwm3bnPzZxxX9PGuf8Hmf/BLzUtGu9Pg8JfEQPPBJEpOm6dgFkIHTUqAP8x7VR/xM7gf9NXH619Nfs6ftx/tf/sh2Wq6d+y78SvEPgCDXHhk1BNCvprIXLW4ZYml8oruKB2256bjXy9ezx3F5LcJwsjswH1NU6AP1B/4fVf8ABXL/AKOM8f8AH/Ucuv8A4um/8Prf+CuH/Rxvj/8A8Hl3/wDF1+e3w+8G6p8SPHuh/DzQ3iS912/tdOt2mLCMS3UqxIXKgkLuYZwDgdBX9XH/ABBf/wDBUr/obfhz/wCDPUv/AJWUAfih/wAPrf8Agrh/0cb4/wD/AAeXf/xdYnij/gr9/wAFTPHHhbUPBfi/4/8AjrUtI1a1msr20uNZupIZ7e4QxzRSIXwyPGSrKRjBxiv3K/4gv/8AgqV/0Nvw5/8ABnqX/wArK88+MH/Boj/wUq+CXwj8U/GXxX4o8ATaX4R0i+1m8jttQ1Bpnt7C3e5kWJW09AXKx4UMwG7vigD+VSv9Or/gyv8A+UafxA/7KJef+mrTa/zFa/06v+DK7/lGn8QP+yi3n/pq02gD+t3xx4C8HfEvwXqvw5+IWmW+taDrlpLYahp93Gslvc2s6mOWGWM8NG6MVKnjHavzx/4cpf8ABI//AKNy+H//AII7T/4iv0/ooA/zKf8Ag4m/aE+OP/BLD9vuz/Zl/wCCcPivVPgh8Pp/Cena1J4d8G3L6TpzahdT3cU90be2KR+dKkMSu2MkIufuiv56viF/wVn/AOCmXxa8Dat8Mvib8dvGuu+HtdtZLLUdPvdXuZre6t5V2yQyxs+GRgcFTxX7Z/8AB5D/AMpb9N/7EDRv/Su/r+T+gAp2xhTa/oG/4J2f8G4/7cf/AAU0/Zttf2pfgHr/AIP07w/dahdackOs3t7BdCWzIVyUhsp028jb89AHnP8AwbfKw/4LafAMkf8AMV1D/wBNN7X+xxX8CH/BJT/g13/4KA/sLf8ABRP4ZftY/F/xF4KvfDng29urm9h0u/vZbtlmsbi2URJLYRITvlXOXHyg96/vvoA/yF/+DpEE/wDBbv4vkdPK0H/0yWNeX/8ABur8EfhF+0R/wV0+F/wi+O3hvT/FnhfVI9aN3peqQLcWs/k6Rdyxb4nBVtsih1yOoFf09/8ABZ3/AINmP29/+ChX/BRnx5+1r8FfEXgux8N+J49LW1h1a9vIbtfsWnW9pJvSKxmQZeJtuHPy4zzR/wAEYf8Ag2Y/b3/4J6/8FGfAf7Wvxq8ReC77w34Yj1NbqHSb28mu2+2adcWkexJbGFDh5V3ZcfKDjmgD+n7/AIcpf8Ej/wDo3L4f/wDgjtP/AIij/hyl/wAEj/8Ao3L4f/8AgjtP/iK/T+igD+TP/gu9+yN+y7/wTc/4JqeMf2tv2BPAWh/B/wCJ2gX2kW2neKPCdlDpmq2kV9fw21ykVzbqsiCa3keOQAjKMQeK/gS/4fW/8FcP+jjfH/8A4PLv/wCLr/VM/wCC3X7Cvxf/AOCj3/BO7xZ+yf8AA680zT/EeuXmlXFvNrEssNoFsb6G5kDvDFM4JSPC4Q8+1fwxf8QX/wDwVK/6G34c/wDgz1L/AOVlAH8qnxO+KXxG+NHj7VPin8WdavPEfiTW5jcX+pahK09zcytgF5ZGJLNwOtef+W46ivo79rf9mTx3+xn+0j4w/Zb+KNzZXfiHwTqD6bfS6c7yWryqobMTyRxsy4I6oK93/wCCbH/BOT44f8FRv2hpv2af2fb7SNO1230i51oy63NLBbfZ7WSGN13QQztvzMpUbMcHJFAH570/y244r+uv/iDA/wCCpf8A0N3w6/8ABnqP/wArK/l7/aG+Cfin9mj47+Mv2efHk1tca14H1m90K+ksmZ7d7iwmaCVomdEYoWQ7SyA46igDxcIx6Cm1+j//AATJ/wCCZnx7/wCCrHx21T9nv9nbUNF0zWtI0ObXZZddnnt7f7LBcW9s6q0EFw2/fcpgbMbc85AFfub/AMQX3/BUv/obvhz/AODPUv8A5WUAfhr4N/4K8/8ABUX4e+E9K8B+CPj5450nRtEtILDT7K11i6jgtrW2jEMEMSB8LHGihFUDAA6Vu/8AD63/AIK4f9HG+P8A/wAHl3/8XXw18cPhP4j+AHxp8YfAfxlLBPrHgrW7/Qb57Vi9u9zptw9rK0TMqMULxnaWUEqeQDXktAH6f/8AD63/AIK4f9HG+P8A/wAHl3/8XR/w+t/4K4f9HG+P/wDweXf/AMXX5gUUAfVv7Rf7cf7X/wC13ZaVp37UXxK8Q+PoNDeaTT01y+mvRatcBFlaLzSdpcImcY+6K+ZNK/5CVt/10T+dZtaWlf8AIStv+uifzoA/3xvCf/Iq6Z/16Q/+gCv4wf8Ag8A/bU/a2/Y+/wCFA/8ADLnxG1/4f/8ACQf8JN/aX9h30tl9q+y/2Z5HneSy7vL819uem41/Z94T/wCRV0z/AK9If/QBX8Ef/B8n/wA20/8Ac2/+4igD+VvQf+Czv/BWLUddstN1D9ojx9LBcTxRyI+t3ZDIzBSD8/Qg1/qv/wDDlX/gkb/0bn8P/wDwR2n/AMRX+K/ol7Fpus2moT5KQSxyMF64VgcfkK/09P8AiNB/4Ja/9Cj8Rf8AwW6d/wDLKgD8Hv8Ag74/Y4/ZW/ZC+InwM079lz4faF4Bg13Tddk1BNDsobJbpreaxWJpfKVdxQO23P8AeNfysfsm/wDJ03w1/wCxp0X/ANLoa/dv/g45/wCCwv7MX/BW7xp8KvEX7NuleINKh8EWWrW18Netre3LtfyWzxmIW9xcZA8lt2cdsV+En7Jv/J03w1/7GnRf/S6GgD/d1ooooAKKKKAP84H/AIPAf+Ulfgf/ALJlpv8A6edZr+U2v6sv+DwH/lJX4H/7Jlpv/p51mv5TaACiiigAooooAKKKKACiiigAooooAKKKKAP/1v4x6KKKACiiigAooooAKKKKACiiigAooooAK/3MK/wz6/3MKACiiigAr/OF/wCD3b/k6j4H/wDYqah/6XCv9Hqv84X/AIPdv+Tp/gef+pU1D/0uFAH8oP8AwT3/AOT+fgd/2P8A4a/9OttX+5xX+GP/AME9/wDk/n4Hf9j/AOGv/TrbV/ucUAf5kf8Awevf8pJPht/2TSz/APTxqtfxx1/Y7/weuAt/wUj+GrL0Pw0s8Ht/yGNVr+OKgAooooA/T7/gin/ylv8A2cv+ygaH/wClaV/tdV/ij/8ABFRSP+Ct37OR7f8ACwND/wDSuOv9rigD/KE/4O8P+UyOt/8AYq6D/wCiXr5A/wCDb3/lNp8A/wDsK6h/6ab2vr//AIO8P+UyOt/9iroP/ol6+QP+Db3/AJTafAP/ALCuof8AppvaAP8AY6r/ACJf+DqX/lOJ8Xf+vXw3/wCmCwr/AF2q/wAiX/g6l/5TifF3/r18N/8ApgsKAP54yjDqMUmD6V+4f/BuZ8Kvhf8AHD/gsb8Ivhn8ZfD2m+LPDuo/239q0vV7WK8s5/J0S+mj8yCdWjfZIiuu4cMAeor/AFM/+HT3/BLv/o3T4af+ErpP/wAjUAfB/wDwbFMo/wCCIHwTz/zy1v8A9Pd/X737l6V558MfhR8Nfgp4Hsvhj8HfDum+FPDmmeYLTTNItYrOzgEjmR/KghVI03OzMdqjknvzX4mf8HMPxh+LPwE/4JC+PfiX8EvE+reD/ENnqWgxwapot5NYXkSy6nbxyKk9u6SKro2xgpGVODkcUAfvxTdy/lX+IR/w9b/4Kff9HF/Ev/wqtW/+SK/1o/8AgiP8QfHfxU/4JQ/Az4ifEvWr3xDr+r+Gop73UdSuJLq6uZTJIC8s0pZ3bjqxJ96APyV/4PIiP+HSemj/AKn/AEb/ANI9Qr/LIwfSv95b4xfAf4I/tE+El8AfH3wjo3jbQUuEul0/XbGDULQTxBlSTybhHj3oHYBsZGTXy/8A8Onv+CXf/Runw0/8JXSf/kagDn/+CPbKn/BKP9m0McY+Gvhgf+Uy3r9Ia/x4f+CkX7fP7cv7Pn/BQT42fAj4C/GPxr4K8EeDfG+vaLoHh/Qtev7DS9L02xvpYLWysrO3mjgtreCFFjihiRURQFUADFfE3/D1j/gqBjP/AA0V8S8f9jVq3/yT7UAf7e9R+ZGBnIxX+IV/w9b/AOCn3/RxfxL/APCq1b/5Ir/Yf/4JweKfEnjn/gn38DvGXjLULjVdY1bwH4dvL29vJXmubiebTYGllmlkJd3diWZ2JJY5NAH8zn/B7N837AvwoI6f8LAX/wBNV7X+aLg+lf7w3xu/Zx/Z9/aW0Cz8KftEeB9A8eaXYXAurW08QadbalBDcBSnmRpdJIqSbSV3KN2CRXzf/wAOnv8Agl3/ANG6fDT/AMJXSf8A5GoA9+/ZNIX9lj4aKev/AAimjf8ApDDX0HX+LX+0J/wUv/4KL+Avj3448DeCfjv8QdH0TRdf1KxsNPs/EmpwWtra211JFBBDEk4RIoo1CRooCqoAAA4rxz/h6x/wU/xn/hor4l/+FVq3/wAk0Af7e9f4JPxYRh8UPEpP/QVvP/R719e/8PW/+Cn3/RxfxL/8KrVv/kiv9cT4ff8ABLj/AIJqa94C0PW9a/Z++HN5eXthbT3E8vhjSpJJZZYgzySObcsxYnJJOc96AP8AE/EbngDpSbDX9w//AAeMfsmfsufsxad8An/Zw+HHhnwCdYk8Ri+Ph3SbTTPtQt103yvO+yxR7/L3nbuzt3HHWv4lvDUUU3iPT4J1Do1xCCp5BBYAg0AYG09hTtjZxiv9uXTP+CUX/BL9tOt2b9nX4a58tST/AMIrpPdf+vav4Xv+DxL9l39mv9mP4jfAiy/Zw+H/AIc8Aw6vpuvvfR+HtMtdNW5ME9iIjMLWOPeYw5C7vu5OMUAfyefsnAj9qX4aHt/wlOjf+l0Nf7ulf4EOj6rqeg6nba3ok8tpeWciT29xAzRyRSxkMjo64KsjAYK4IPevuX/h63/wU+/6OL+Jf/hVat/8kUAf7fNfHn/BQll/4YG+OAyP+RA8S/ppdxX+OV/w9a/4Kfjj/hor4l/+FVq3/wAkV9K/sc/8FGf+CgXxb/a5+Fnwn+KXxw8e+JPDHibxdoek6tpGp+IdSu7G/sLy+hgurS5tpZ2ingmhdo5Y3Uq6Eqy44oA/GvB9K/06f+DK75f+CanxAz/0UW8/9Nemiv6Df+HT3/BLv/o3T4af+ErpP/yNX8J3/Bzx8UfiT/wTf/bg8IfBr/gnp4g1H4G+D9W8GWusXmieAbmXw5p1xqEl9ewPeSW2mtbxPcNDDFGZSu/y441zhQAAf6V/mJ0z0p9f4+//AATA/wCCln/BRPx5/wAFHPgP4G8c/Hj4gaxomrePfD9ne6fe+JNTntriCfUIEliliecpJG68MjKVI4Nf7BFAH+WP/wAHkP8Aylv03/sQNG/9K7+v5Qdpr+r7/g8hGf8AgrdppHT/AIQDRv8A0rv6/Fz/AIJG+CfB/wASv+CoHwE8A/ELSbPXdC1jxvo1pfaffwR3Nrc28tyiyRTQyBkdGBwyFSPagD848H0r/V2/4NDsL/wRv0UH/oa9d/8ARsdfsB/w6e/4Jd/9G6fDT/wldJ/+Rq+qfhB8Evg3+z94OT4efArwro/gvQI5XnTTNEsoNPtFllPzuILdEjDOQMnbk+tAHq25Rj3p1fjh/wAF+Pib8Rfg9/wSB+NfxK+Euvah4X8RaTp1i9nqek3MtneW7PqdnGTFPCyOhKMVO1h8pIr/AClf+Hrf/BT7/o4v4l/+FVq3/wAkUAf7fNFf4hH/AA9Y/wCCoH/RxXxL4H/Q1at/8k0f8PWP+CoHH/GRXxL5HH/FVat/8k0Af7e9M3qODxX+IT/w9b/4Kff9HF/Ev/wqtW/+SK/1Tv8Ag3m+KHxI+NX/AAR0+C3xJ+MHiDUfFXiPU7bWDeapq9zLeXk5h1q/hj82eZnkfbEiou4/dUAcCgD9q6KKKAP8YX/gvp/ymS/aE/7Gub/0VFX6hf8ABm9/ylu1I/8AUgaz/wClen1+X/8AwX1Uj/gsl+0H/wBjXL/6Jir83/g78d/jd+zt4sPxA+Ani7WfBGuPbvatqGhXs+nXRgkKl4jNbtG/lsUUlM44HHFAH+8xX+Ix/wAFbkZ/+CpH7RG0Z/4uL4k/9OM9Zv8Aw9b/AOCn3/RxfxL/APCq1b/5Ir/Uq/4J1/8ABP79hT4/fsE/Bj43/HT4MeB/GPjTxb4M0TWNc17W9A0+/wBS1HUbyyimuby7u7iB5prieVjJJLIxd2JJOaAP40/+DLP5f+CoXjjdx/xbTUf/AE7aTX+n3X8YH/Bzr8J/hj/wTd/YP8K/Gv8A4J7eHNN+BvjHU/HFlot5rngC1i8O6jPp0un6hcPZy3WmpbyvbPNBDI0LMULxo2CUXH8Iv/D1v/gp9/0cX8S//Cq1b/5IoAw/+Cmqn/h5J+0Fx0+JXiz/ANPF1Xw7g+lf7JP7C/8AwTv/AGB/jX+xN8HfjJ8Yfgn4E8V+LvFngfw9rWua1q/h7TrzUdR1G/0y3nur27uZoHlnuLiZ3kkldi7uxYktnP1b/wAOnv8Agl3/ANG6fDT/AMJXSf8A5GoA/wAQnB9KdsbGccV/t6f8Onv+CXf/AEbp8NP/AAldJ/8Akav8X/8AaZ0nS9C/aQ+IOg6HbRWlnY+JNVt7e3hQJFFDFeSqkcaKAqqijAAAAHagDwvY2cYq/pan+0rYY/5aJ/Ov7Nf+DOz9l39mv9pz4jfHey/aO+H/AIc8ew6RpugPYx+IdMtdSW1M898JTCLqOTYXCKG243YGelf3YJ/wSj/4JfIwdP2dvhqDwR/xS2k9v+3agD7f8JMv/CK6Zj/n0g/9AFfwSf8AB8n1/Zp/7m3/ANw9f36xRRwRJBCoRUACqOgGMDHpiv4Cv+D5L5j+zTt/6m39P7HoA/gEooooAK+g/wBk3/k6b4a/9jTov/pdDXz9sYcGvoH9k7j9qb4an/qadG/9LoaAP93WiiigAooooA/zgf8Ag8B/5SV+B/8AsmWm/wDp51mv5Ta/qy/4PAf+Ulfgf/smWm/+nnWa/lNoAKKKKACiiigAooooAKKKKACiiigAooooA//X/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACv84P/AIPdv+Tpfgf/ANipqH/pcK/0fK/zg/8Ag92/5Ol+B/8A2Kmof+lwoA/lD/4J7/8AJ/PwO/7H/wANf+nW2r/c4r/DI/4J7qf+G+fgdx/zP/hn/wBOttX+5vQB/IL/AMHBP/Bvd+1h/wAFaf2svCfx7+AnizwloGl6D4Tg0CeDX576Kd54r+9ui6C1srhDGVuUHLA5DcYxX4Qf8QUX/BST/opXw1/8C9Y/+VVf6bNFAH+ZN/xBRf8ABST/AKKV8Nf/AAL1j/5VUf8AEFF/wUk/6KV8Nf8AwL1j/wCVVf6bNFAH+fN/wT8/4NKv29/2S/24PhV+01488e+AL/RPAnibTtavbewutUe6lgs5lkdIVl06KPeVGFDOo9TX+gzRRQB/lCf8HeH/ACmR1v8A7FXQf/RL18gf8G3v/KbT4B/9hXUP/TTe19gf8Hd4J/4LI62R0/4RXQf/AES9fH//AAbe/wDKbT4B/wDYV1D/ANNN7QB/sdV/kS/8HUv/ACnE+Lv/AF6+G/8A0wWFf67Vf5Ev/B1Jz/wXD+LuP+fXw3/6YLCgDA/4Nef+U4vwU/7j/wD6YdQr/X5r/IG/4NeeP+C4vwU/7mD/ANMGo1/r80AFfzg/8HXv/KE34j/9hXw7/wCna1r+j6v5wf8Ag685/wCCJvxGx31Xw7j/AMG1rQB/ki1/fj/wTO/4Ouf2Ev2K/wBgv4X/ALK3xI8CePNS1zwRoqabe3Om2umNaSSK7tuhabUYnK/N/FGpr+A6n7G6YoA/15v+CY//AAcY/sf/APBVP9o+4/Zl+Bng7xhoWtQaPc601xrtvp8dqYLSSGJ13W19cPvJmXaNmODyK/oPr/LH/wCDN7j/AIK3akT/ANCBrP8A6V2Ff6nFAH+ep+3X/wAGjn7fX7UX7afxX/aT8D+Pvh/ZaN488Waxr1jbX91qi3MNvqF3JcRRzLHpsiB1V8MEcqD0Jr8Lf+Con/BvF+1z/wAEoP2f9N/aL+PPi7whr2kanrcGhRW+g3F/Lcie4gnnV2W5sbZNgW3YHD5yV464/wBf2v5Ef+Dz/Df8Et/CAX/ooumj/wApupf4UAf5etf6I37G/wDwd7f8E/v2df2Sfhh8APF/w++IF5qvgjwrpGhXk9naaUbeWfTrKK2keEvqUbFC0eVLIp29Rmv87migD/Ya/wCCVn/Bfz9lP/grj8YfEXwW+AXhTxXoGpeGtG/tq4l1+CxigeATxW21Pst5ctv3SqcFQNoPOeK/d6v80X/gyZUr+3z8V8/9CA3/AKdLKv8AS6oA/wA3T41/8GbX/BRL4lfGTxb8RNH+Inw5hs9f1m/1K3jmu9WEiR3Vw8yK4XTCoYBsNtJGenFfh9/wVg/4IcftNf8ABH/w/wCCPEX7QPifwx4gi8cXF9bWI8OzXsrRNYJC7mb7XaWwAPnrt2Z6HOK/2TK/hE/4PhwT8L/2dQB/zFPEf/onTqAP88Kv9LHwV/wef/8ABOTw14M0fw3e/Dj4jvLp1lBbOUtNI2FoowhK51UHBx3r/NOpdpoA/v8A/wBsW8i/4O/k0DTf+CfQ/wCFfP8AAU3Emt/8LC/0QXQ8RCMWos/7K/tLd5f9nS+b5nl43Js3ZOPiW2/4MwP+Cjnhu5j8R33xH+HEkOnsLhwl3q+4rEd5C50sDJwetfY3/Bjl/wAhf9pD/rl4X/nqlf31+K/+RV1P/r1m/wDQDQB/H9D/AMHpv/BOHTI1sJ/hv8SWeACNttppGMoMcZ1Wvhf9sPwTqf8Awd9aloXxE/4J+SRfD6z+Bcdxp2tR/ELdayXUmvFJbY2Y0oakrKi2Mgk8wxkFl27snH8Eeq/8hK5/66P/ADr/AEKv+DHf5fhd+0STwDqvhvH/AH41CgD8sPiJ/wAGbn/BRH4Z/D7XfiLrPxE+HM1l4f0651K4jhu9WMjx2kTTOqBtMC7tqYXJAz1r+RKv93T9rIg/ss/Esf8AUqaz/wCkM1f4RdAH7i/8Ep/+CD37Un/BXf4e+K/iN8APFXhXw/Z+ENQg027j8QTXsUkkk0PnK0QtbO5UqFGDuKnNfuf+y/8A8Gev/BQj4I/tK/Dv40eKPiF8PLvTvB/ibSdauoba71YzyQWF7DcyJEJNMVC7LGQoYqu48nFfcv8AwZE/8ms/HD/satO/9ITX9vm9RQA+v4/f+DgP/g3q/a1/4Kyfta+Gfj78BfFvhHQdJ0XwrBoU0Gvz30Vw08V7d3JdBa2NwhjKXCjlw2QeMYr+wKigD/PK/Yh/4NF/2/8A9mX9sf4WftFeM/H/AMPrzR/A3irSddvbexu9Va5lt9Pu47h44Vk02NC7LHhQzquepr/Q1oooA/jP/wCC8v8Awbl/tgf8FUf23rX9pr4G+L/B2g6LD4YsNFa312e/jujPazXMjMFtrG4j2FZlAO/PB4r4X/4J+/8ABpV+3v8Asl/twfCn9pnx5498AX+ieBPE+na1e29hdao91LBZzLI6QrLp0SbyowoaRV9SK/0GKbuFADq/nY/4KR/8HJv7G/8AwTA/abuv2VPjX4N8Za1rlnp1nqT3OiW+nyWhjvVLIoa4vreTcAPm/d49K/onr/KF/wCDu8E/8FkdbI6f8IroP/ol6AP1K/4Kvf8AB09+w5+3n/wT2+JX7JHws8C+OdK1/wAZ2VtbWl1qttpq2cbQ3tvdEytBqEsgG2IgbYz82O1fwb07aRTaAP6U/wDgn/8A8Gwn7bH/AAUX/ZR8M/tefB/xt4I0fw/4nN4traaxcajHeJ9hupbR/MW3sJoxl4SV2yH5SM88Uf8ABQD/AINhP22P+CdH7KPib9rz4weNvBGseH/DBs1ubTR7jUZLx/tt1DaJ5a3FhDGdrygtmQfKDjniv7lf+DWwgf8ABEL4P5/566//AOnu9pf+DpT/AJQhfF//AK66B/6e7KgD/IWr+7X/AIJE/wDB0l+xD/wT8/4J2/Df9kH4s+B/HOr+IPB0Oox3d3pNtpslnIbzU7q9QxNPqEMhwk6q26NfmBxxiv4SqKAP9Nv/AIjXf+CbX/RNfiX/AOAmj/8Ay1o/4jXf+CbX/RNfiX/4CaP/APLWv8ySigD7s/4KY/tReB/20v28vif+1V8N7K+03RPG+tPqVla6isaXcUboi7ZlhkljDfL/AAORXWf8Exf+CbXxk/4KpftHTfsyfAzWNG0PWrfRrnWmuNdkuIrUwWskMbqDbW9w+/MylRsxwcmvznr+sD/gze4/4K3akT/0IGs/+ldhQB6//wAQUX/BST/opXw1/wDAvWP/AJVV+vnwu/4Odf2KP+CZHw40H/gnX8aPBHjbWvF/wL0+38CazqGiW2mvpt1faDGLC4ls2uL+3ma3eSEmIyQxuVILIp4r+12v8Rj/AIK3K3/D0f8AaIIHH/CxPEf/AKcZqAP33/4L/wD/AAcMfsj/APBWP9j3w3+zz8B/CPi7QNX0bxZa6/LPr1vYRWzW8Fje2rIhtb24ffuuVIBQLtDc5xX8e9OCk8D/ADim0Af6KH7If/B33/wT6/Z9/ZM+F/wD8W/D74g3eq+B/Cei6BeT2lppTW8k+m2ENrK8JfUkYxs0ZKbkU7TyAeK+i/8AiNd/4Jtf9E1+Jf8A4CaP/wDLWv8AMm2N6e1NoA/02/8AiNd/4Jtf9E1+Jf8A4CaP/wDLWvxf8T/8GiP7f37S3iO//aL8F/ED4fWej+PriXxHY297d6qtzDa6oxu4Y5lj0x0EqpKocI5UMDtJFfxiV/u6fsmED9ln4aD/AKlTRv8A0hhoA/h5/Y88E6n/AMGgupa78RP+CgckXxBs/jnHb6dosfw9LXUlrJoJeW4a7GqjTFVXW9jEXlmQkq27bgZ+87b/AIPVv+Cb1zOluvw2+JIMjBf+PPR+/A/5itfLf/B8QCfhd+zrgf8AMV8Rj/yDp9f56ukg/wBp2w/6aJ/OgD/fU068TU9Pg1GFSEnjSRQeuHGcHHtX80H/AAcVf8ET/wBpH/gsCPhJ/wAM/eJPDfh7/hAP7b+3f8JDNeReb/af2HyvJ+yWtznb9lbfu24yu3PNf0neEmH/AAiumf8AXpD/AOi1roqAP8yb/iCi/wCCkn/RSvhr/wCBesf/ACqo/wCIKL/gpJ/0Ur4a/wDgXrH/AMqq/wBNmigD/GD/AOCsP/BG39of/gkDr3gvw3+0F4i8O+IJvHNve3Ni3h6W7lSJbB4UkE32q1tiCfOXbtDdDnFfAv7J/P7Unw0A7eKtG/8AS6Gv7O/+D4c5+Kf7PAHbSvEf/o/TxX8Yv7J3H7U3w1P/AFNOjf8ApdDQB/u60UUUAFFFFAH+cD/weA/8pK/A/wD2TLTf/TzrNfym1/Vl/wAHgP8Aykr8D/8AZMtN/wDTzrNfym0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//Q/jHooooAKKKKACiiigAooooAKKKKACiiigAr/cwr/DPr/cwoAKKKKACv84P/AIPdv+Tpfgf/ANipqH/pcK/0fK/l5/4L4/8ABAz4vf8ABYH4u+APiR8N/H2j+D4fB+kXOmzQ6lbXEzTNPOJQyGE4AAGMGgD/ACp9H1vVvDmrWviDw7dy2GoWMsdxbXNtI0UsEsRDJJHIpDK6sAQy4II4NfVH/Dwf9vj/AKLf4/8A/Cl1T/5Ir+rr/iCH/an/AOi3+FP/AAX31H/EEP8AtTf9Fv8ACv8A4Lr3/GgD+UX/AIeD/t7/APRcPH3/AIUuqf8AyRR/w8H/AG9/+i4ePv8AwpdU/wDkiv6uv+IIf9qf/ot/hT/wX31H/EEP+1P/ANFv8Kf+C++oA/lF/wCHg/7e/wD0XDx9/wCFLqn/AMkUf8PB/wBvf/ouHj7/AMKXVP8A5Ir+rr/iCH/an/6Lf4U/8F99R/xBD/tT/wDRb/Cn/gvvqAP5Rf8Ah4P+3x/0W/x//wCFLqn/AMkUf8PB/wBvf/ouHj7/AMKXVP8A5Ir+rr/iCH/am/6Lf4V/8F17/jR/xBD/ALU//Rb/AAp/4L76gD+MX4i/FP4mfGDxM3jT4teI9T8U6w6LE1/q93Ne3JSP7imad3fC5+UbsCv19/4NvgR/wWz+Ah7DVdQ/9NN7X7e/8QQ/7U//AEW/wp/4L76vv3/gl3/wal/tBfsCft5/Dr9rzxf8VvD2v6d4KvLm5n0+zsrqKeYT2c9sAjyHYNplB5HagD+3+vmr4gfsdfsl/FjxXceO/il8LPCPiTXLsIJ9Q1XRLC8upRGgjQPNPC8jbUVVXLHCgAcDFfStFAH8zf8AwcFfs9/AP9lj/gkf8Vvjp+zH4I8P/Djxvof9if2d4h8L6Za6Pqtn5+s2VvL9nvbKKG4i8yGR4n2SDdGzIcqxB/zLf+Hg/wC3v/0XDx9/4Uuqf/JFf7Cf/BWr9h/xX/wUY/YC8dfsdeCtctfDmp+Lf7N8nUb2N5beH7DqNretvSMhzuSAoMdC3pX8U3/EEP8AtT/9Fv8ACn/gvvqAP5Rf+Hg/7e//AEXDx9/4Uuqf/JFfun/wbk/HP42ftb/8FYfA3wP/AGq/GGufE3wVqWm65JeaB4rv7nWtLuHttNnlhaWyv5JoHMUih0LISrAEYPNfc/8AxBD/ALU//Rb/AAp/4L76v1D/AOCPH/BsF8dv+CaH7efhj9r3xx8TtB8S6doFpqVs+n2NncxTyG+s5bZCryHYNhkBPHbigD+nj/h3p+wL/wBEP+H/AP4TOlf/ACNX+RN/wXD8G+Evh7/wVp+PHgvwFpVpomjab4nmitLHT4I7a1t08uMhIoolVEXn7qqBX+01X8Lv/BRn/g0w/aJ/ba/bg+JX7V3hb4teHNDsPHOsPqUFjdWN3JNAjoqbHaPCkjb2oA/z8vhr8W/in8GfELeMPg94m1TwlqzRNbm90a8nsLkxSYLR+bbPG2wlVyuccDjiveP+HhH7e/8A0XDx/wD+FLqn/wAkV/V3/wAQQ/7U/wD0W/wp/wCC++p3/EEP+1L/ANFv8Kf+C6+/xoA/lC/4eEft7/8ARcPH/wD4Uuqf/JFf0v8A/BrD8RviF+21/wAFC/Evwo/bL13Ufi34WtPA+oalBo/jS5l1+whvY76wiS4S11EzwrMscrqsqoHCswB2kg+vf8QQ/wC1L/0W/wAKf+C6+/xr9ov+CFv/AAbnfGz/AIJLftca1+0f8Q/iNoni2x1XwxdaCtlp1rcQyJJcXVrcCQtLxtUW5XH+1QB/Qv8A8O9P2Bf+iH/D/wD8JnSv/kaj/h3p+wL/ANEP+H//AITOlf8AyNX2DRQB/E9/wde+DfCP7Dv7Gvw5+IP7FmlWnwf17VfGY06+1LwRBH4fu7mzOnXkn2eafTlt5JId6K/lMxXcAcZANfwVf8PB/wBvf/ouHj7/AMKXVP8A5Ir/AFYv+C9H/BJb4i/8Fef2dPB/wT+HHi3TvCF14a8RjW5bnUoZZo5YxaT23lqsPIbMoPPHFfyr/wDEEP8AtT/9Fv8ACn/gvvqAP5Rf+Hg/7e//AEXDx9/4Uuqf/JFf2Df8Gk17e/t2fEL43aR+29K/xjtfDenaFJpMHjlv+EhjsHupb1Z2tV1P7QIDKI0DmMLv2ruztGPM/wDiCH/an/6Lf4U/8F99X9Df/BAX/ghT8WP+CO/i74meI/iT460jxinjuz0u2gXTLae3NubCS5di/ndd3njGOm2gD9oP+Hen7Av/AEQ/4f8A/hM6V/8AI1f4g/xPggtPiT4htrRFijj1K7RUUAKqrMwAA9AMYr/e5r/Op8Yf8GUv7UXiXxbqviKD41+Foo9Qu57hUOn3pKiWQuAee2aAPSv+DHP5dX/aQDcfuvC389Ur++rxWR/wiupj/p1m/wDQDX87P/BAD/gh58Vf+COd58ULn4k+ONK8Yjx8mkJbjTLaaD7P/Zpuy2/zeu/7SMY6ba/oz1ixfUtIutNjO0zxPGGPbcpXNAH+Bbqn/ISuf+ur/wA69b+FX7Rn7QfwLt722+CXjvxD4NTUmRrxdD1O708XBjyEMotpIw5UMQu7pk+tf2NXP/Bkf+1LcXUs4+N3hUCRmbH9n3vGT9aq/wDEEP8AtTf9Fv8ACv8A4Lr3/GgD+bD9nL9uf9tjxf8AtCeBPCvin4weNtT0zVPEWl2t5Z3fiDUp4Lm3nu4o5IZonnZXR0JV1YFWXgg1/sFf8O9P2Bf+iH/D/wD8JnSv/kav4jvg7/wZg/tPfDP4t+FfiNqHxo8L3UHh7WLDUnhSwvQ8iWk6SsiknAJCYFf6GVAH+c1/wdl+INf/AGGP2hfhN4T/AGKb64+D2l694cvbrUrPwRI3h6C8njvBGk1xFppgWV1X5VZwSF4zX88H7CH7eH7cPiL9uD4N+HvEHxl8dX9jf+OPDtvc2tx4h1OSGaKTUrdXjkja4KsjLlSpBBXjFf3/AH/BfH/ggZ8Xv+CwPxd8AfEj4b+PtH8Hw+D9IudNmh1K2uJmmaecShkMJwAAMYNfjt+zV/wZu/tMfAz9ovwB8a9V+Mfhi+tfB/iPStbmtorG8Ek0en3cVw0aE4ALiPaM8CgD/QPooooAKKKKACvzY/4LBeJvE/gr/glp8f8Axh4M1C60nVtN8DazcWd7ZSvb3NvKlq7LJFLFteN1xwykEetfpPXyN+3d+znrf7XP7GXxO/Zg8O6hBpF/488N6holve3Kl4beS8haISOqYYqpOSAKAP8AGC/4eD/t7/8ARcPH3/hS6p/8kV8//EX4p/Ez4weJm8afFrxHqfinWHRYmv8AV7ua9uSkf3FM07u+Fz8o3YFf2df8QQ/7U/8A0W/wp/4L76j/AIgh/wBqf/ot/hT/AMF99QB+Dn/Bvv4E8D/Ev/gsL8EPAvxH0ax8QaJqOpXy3Wn6lbRXdrOqaXduFkhmVo3AZQRleoFf6z3/AA70/YF/6If8P/8AwmdK/wDkav5Qf+CXX/BqX+0F+wJ+3p8Ov2vPGHxW8PeINN8FXdzcz2FpZXUU8wns57YBHkO0bTKDz6V/b/QBw3w/+G/gH4UeFbbwL8L9C0/w3olnvNvp2l20Vpaw72MjbIIVSNdzMWO1Rya/Cj/g6TIP/BEP4wAf89fD/wD6e7Gv6EK/NP8A4K4fsMeLP+Cjv7AnjT9jzwTrlp4a1LxS+mvFqF7E8tvF9iv7e8fckfzHcsJUehNAH+Jpikr+3z/iCH/an/6Lf4U/8F99Tv8AiCH/AGpf+i3+FP8AwXX3+NAH8QWKMV/b3/xBD/tT/wDRb/Cn/gvvqP8AiCH/AGp/+i3+FP8AwX31AH8QmK9I+Gvxb+KnwZ8Qt4w+D3ibVfCWrNE1ub3RryewuTFJgtH5ts0bbCVXK5xwOOK/sz/4gh/2p/8Aot/hT/wX31H/ABBD/tTf9Fv8K/8Aguvf8aAP5RP+HhH7e/8A0XDx/wD+FLqn/wAkV/rJ/wDBNT9jv9kv4wf8E9fgf8Vvi38LfCPijxP4i8D6FqWr6xq2h2F9f397dWEUtxcXN1PA8000rsWeWRmZ2JLHPNfyU/8AEEP+1L/0W/wp/wCC6+/xr+939jH4D6x+y9+yN8Mv2cNdv4tUvvAnhjS9BnvbdSkU8mn2sdu0qK/IVymQD0oA/kk/4O+f2Wv2Y/gh/wAE3fBfin4MfDnwv4R1Of4h6fayXeiaRZafO0LaXqjGIyW0MbGMsikrnGVXjiv84DFf7Iv/AAXY/wCCWXxB/wCCtv7Jfh/9nX4c+KNP8I3ujeKbXxA15qMMs0bxQWV5bGILDyGJuVOemFNfya/8QQ/7U/8A0W/wp/4L76gD+ur/AIJz/sKfsQeJf+Ce/wACPE3iX4OeBtQ1HU/h54Xuru7ufD2mSzTzy6TbO8ssr25Z3ZjuLMck819o/wDDvT9gX/oh/wAP/wDwmdK/+Rq7/wDZR+Dep/s8/sufDb4A6zeR6heeB/C2j+H57uBdkc8umWUNq8qKRkK5iyAegNfQVAHx9/w70/YF/wCiH/D/AP8ACZ0r/wCRq/x9f2jf25/22PB/7Qnjvwr4V+MHjbS9M0vxFqlrZWdn4g1KCC2t4LuSOOGGKOdVjSNFCoqgKqjAAr/bLr/PN+MX/BmD+098S/i34q+I2n/GjwvaQeINYvtSjhewvS8aXc7yqhIOCQHwfpQA/wD4NJL69/bq+Ifxu0n9tuV/jFaeG9O0OTSYPHDHxBHYPdS3qztarqXnrAZQiCQxhd+1d3Rcf2val/wT5/YJh06eWL4IeAFZI3II8M6VkYGR/wAu3avxv/4IC/8ABCj4sf8ABHfxd8TPEnxJ8daP4xTx3Z6XbQJpltPbm3NhJcuxfzuDu88Yx021/SteW5urOW2BwZEZM+mRigD/AA7vEX7f/wC3daeIL+1tvjZ48jjiuJURE8SamFVQ5ACj7R0AFYv/AA8H/b3/AOi4ePv/AApdU/8Akiv6zdZ/4Mlv2ptT1a51GL43eFlE8ryBTp97xuYnHWsz/iCH/an/AOi3+FP/AAX31AH8ov8Aw8H/AG9/+i4ePv8AwpdU/wDkij/h4P8At8f9Fv8AH/8A4Uuqf/JFf1df8QQ/7U//AEW/wp/4L76j/iCH/am/6Lf4V/8ABde/40Afxx/FT49/HL46S2Vx8bfGmueMZNNDpaNrmo3OoG3WTG9YjcyPsDbV3BcZwPSuj/ZQGf2o/hpj/oatG/8AS6Kv6+f+IIf9qf8A6Lf4U/8ABffV6V8Hf+DMH9p74Z/Fvwr8RtQ+NHhe6g8PaxYak8KWF6HkS0nSVkUk4BITAoA/0MqKKKACiiigD/OB/wCDwH/lJX4H/wCyZab/AOnnWa/lNr+rL/g8B/5SV+B/+yZab/6edZr+U2gAooooAKKKKACiiigAooooAKKKKACiiigD/9H+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/zgf+DwH/lJX4H/AOyZab/6edZr+U2v6sv+DwH/AJSV+B/+yZab/wCnnWa/lNoAKKKKACiiigAooooAKKKKACiiigAooooA/9L+MeiiigAooooAKKKKACiiigAooooAKKKKACv9zCv8M+v9zCgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/zgf+DwH/lJX4H/AOyZab/6edZr+U2v6sf+Dv8AZW/4KWeBwp6fDLTf/TzrNfynUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/0/4x6KKKACiiigAooooAKKKKACiiigAooooAKXNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFACc9O2f5f54Ix/QLRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9T+MeiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z", sn = (C) => (iA("data-v-f28ea355"), C = C(), cA(), C), yn = { class: "qun-section" }, Qn = /* @__PURE__ */ sn(() => /* @__PURE__ */ i("div", { class: "qun-section-title" }, "扫码加入交流群，报 Bug，提需求，约团！", -1)), pn = { class: "qun-list" }, En = { class: "qun-item" }, Vn = ["src"], Hn = /* @__PURE__ */ Q({
  __name: "QunSection",
  setup(C) {
    return (A, w) => (L(), b("div", yn, [
      Qn,
      i("div", pn, [
        i("div", En, [
          i("img", {
            class: "qun-image",
            src: z(mn)
          }, null, 8, Vn)
        ])
      ])
    ]));
  }
}), Sn = /* @__PURE__ */ V(Hn, [["__scopeId", "data-v-f28ea355"]]);
function MA() {
  return PC("pc");
}
function BA() {
  return PC("pageData");
}
function cM() {
  return PC("viewData");
}
function Yg() {
  return PC("suggestion");
}
const Xn = { class: "jobs-container" }, Wn = { class: "job-card-header" }, hn = ["onClick"], kn = { class: "job-card-row" }, Yn = { key: 0 }, Jn = { class: "job-card-row" }, On = /* @__PURE__ */ Q({
  __name: "JobList",
  props: {
    label: {}
  },
  setup(C) {
    const { jobGroups: A, jobs: w } = dC, M = MA(), g = W([]), I = _(() => A.map((v) => ({
      name: v.name,
      items: v.jobs.map((o) => {
        const n = w.get(o.name), c = Hg(n.name), t = c.multiSkillTexts.map((P) => `${P}、`).join("") + c.text, { point: Z, text: U } = Vg(
          n.name,
          M == null ? void 0 : M.value.attributes
        );
        return {
          name: n.name,
          wealth: n.wealth,
          skillText: t,
          pointText: U,
          pointValue: Z
        };
      })
    })));
    function D(v) {
      M && (M.value.job = v);
    }
    return (v, o) => {
      const n = vA("el-icon"), c = vA("el-collapse-item"), t = vA("el-collapse");
      return L(), b("div", null, [
        l(t, {
          class: "job-list",
          modelValue: g.value,
          "onUpdate:modelValue": o[0] || (o[0] = (Z) => g.value = Z)
        }, {
          default: y(() => [
            (L(!0), b(O, null, AA(I.value, (Z) => (L(), $(c, {
              key: Z.name,
              title: Z.name,
              name: Z.name
            }, {
              default: y(() => [
                i("div", Xn, [
                  (L(!0), b(O, null, AA(Z.items, (U) => (L(), b("div", {
                    key: U.name,
                    class: "job-card"
                  }, [
                    i("div", Wn, [
                      i("span", null, s(U.name), 1),
                      i("span", null, "信用评级：" + s(U.wealth[0]) + "~" + s(U.wealth[1]), 1),
                      i("a", {
                        class: "job-card-action-use",
                        onClick: () => D(U.name)
                      }, [
                        l(n, { size: "0.9em" }, {
                          default: y(() => [
                            l(z(Wg))
                          ]),
                          _: 1
                        }),
                        DA(" 使用 ")
                      ], 8, hn)
                    ]),
                    i("div", kn, [
                      i("span", null, "职业点数：" + s(U.pointText), 1),
                      U.pointValue ? (L(), b("span", Yn, " (当前结果: " + s(U.pointValue) + ") ", 1)) : H("", !0)
                    ]),
                    i("div", Jn, "本职技能：" + s(U.skillText), 1)
                  ]))), 128))
                ])
              ]),
              _: 2
            }, 1032, ["title", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), qn = /* @__PURE__ */ V(On, [["__scopeId", "data-v-6425fe8f"]]), _n = { class: "weapons-container" }, $n = { class: "weapon-card-header" }, Ai = { class: "weapon-card-row" }, Ci = { class: "weapon-card-row" }, wi = { class: "weapon-card-row weapon-card-row-4" }, Mi = ["onClick"], gi = /* @__PURE__ */ Q({
  __name: "WeaponList",
  props: {
    label: {}
  },
  setup(C) {
    const A = eI, w = MA(), M = W([]), g = _(() => {
      const Z = new Map(
        oM.map((U) => [
          U.name,
          {
            ...U,
            range: `${Number(U.range)}` === U.range ? `${U.range}m` : U.range
          }
        ])
      );
      return Eg.map(([U, P]) => ({
        name: P,
        groupKey: U,
        items: pg[U].map((R) => Z.get(R))
      }));
    });
    function I(Z) {
      return `${Number(Z)}` === Z ? `${Z}m` : Z || "N/A";
    }
    const D = W([]), v = W(-1), o = W(!1);
    function n(Z) {
      const U = Z.target, P = D.value.findIndex((R) => R.el === U);
      P !== -1 && (v.value = P, o.value = !0);
    }
    function c() {
      o.value = !1;
    }
    function t(Z, U) {
      !w || !U || (w.value.weapons[Z] = U);
    }
    return (Z, U) => {
      var d;
      const P = vA("el-icon"), R = vA("el-collapse-item"), T = vA("el-collapse"), a = vA("el-popover");
      return L(), b("div", null, [
        l(T, {
          class: "weapon-list",
          modelValue: M.value,
          "onUpdate:modelValue": U[0] || (U[0] = (B) => M.value = B)
        }, {
          default: y(() => [
            (L(!0), b(O, null, AA(g.value, (B) => (L(), $(R, {
              key: B.groupKey,
              title: B.name,
              name: B.groupKey
            }, {
              default: y(() => [
                i("div", _n, [
                  (L(!0), b(O, null, AA(B.items, (G) => (L(), b("div", {
                    key: G.name,
                    class: "weapon-card"
                  }, [
                    i("div", $n, [
                      i("span", null, "【" + s(G.name) + "】" + s(G.skill), 1),
                      $A((L(), b("a", {
                        class: "job-card-action job-card-action-use",
                        ref_for: !0,
                        ref: (u) => {
                          D.value.push({
                            el: u,
                            weapon: G
                          });
                        },
                        onClick: n
                      }, [
                        l(P, {
                          size: "0.9em",
                          class: "job-card-action-use-icon"
                        }, {
                          default: y(() => [
                            l(z(Wg))
                          ]),
                          _: 1
                        }),
                        DA(" 使用 ")
                      ])), [
                        [z(A), c]
                      ])
                    ]),
                    i("div", Ai, [
                      i("span", null, "伤害：" + s(G.dam), 1),
                      i("span", null, "次数：" + s(G.round || "N/A"), 1),
                      i("span", null, s(G.tho ? "贯穿" : "非贯穿"), 1)
                    ]),
                    i("div", Ci, [
                      i("span", null, "射程：" + s(I(G.range)), 1),
                      i("span", null, "装弹量：" + s(G.num || "N/A"), 1),
                      i("span", null, "故障率：" + s(G.err || "N/A"), 1)
                    ]),
                    i("div", wi, [
                      i("span", null, "年代：" + s(G.time), 1),
                      i("span", null, "价格：" + s(G.price || "N/A"), 1)
                    ])
                  ]))), 128))
                ])
              ]),
              _: 2
            }, 1032, ["title", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        l(a, {
          placement: "left-start",
          "popper-class": "weapon-card-places-container",
          trigger: "click",
          "virtual-triggering": "",
          visible: o.value,
          width: 200,
          "virtual-ref": (d = D.value[v.value]) == null ? void 0 : d.el
        }, {
          default: y(() => [
            (L(), b(O, null, AA(5, (B) => i("a", {
              key: B,
              class: "job-card-action",
              onClick: (G) => {
                var u;
                return t(B - 1, (u = D.value[v.value]) == null ? void 0 : u.weapon);
              }
            }, s(B), 9, Mi)), 64))
          ]),
          _: 1
        }, 8, ["visible", "virtual-ref"])
      ]);
    };
  }
}), Ii = /* @__PURE__ */ V(gi, [["__scopeId", "data-v-7f79e323"]]), Di = {
  特殊: ["信用评级", "克苏鲁神话"],
  探索: [
    "侦查",
    "聆听",
    "图书馆使用",
    "计算机使用Ω",
    "潜行",
    "追踪",
    "导航"
    // '读唇',
  ],
  社交: ["话术", "说服", "取悦", "恐吓", "心理学", "母语", "外语"],
  战斗: [
    "闪避",
    "格斗",
    "射击",
    "投掷"
    // '爆破',
    // '炮术',
  ],
  医疗: [
    "急救",
    "医学",
    "精神分析"
    // '催眠',
  ],
  运动: [
    "攀爬",
    "跳跃",
    "游泳"
    // '潜水',
  ],
  知识: [
    "博物学",
    "神秘学",
    "考古学",
    "人类学",
    "估价",
    "会计",
    "法律",
    "历史",
    "电子学Ω",
    "科学"
  ],
  技术: [
    "乔装",
    "妙手",
    "锁匠",
    "机械维修",
    "电气维修",
    "驯兽",
    "技艺",
    "生存"
  ],
  操纵: ["汽车驾驶", "骑术", "驾驶", "操作重型机械"],
  其它: [""]
}, vi = [
  "特殊",
  "探索",
  "社交",
  "战斗",
  "医疗",
  "运动",
  "知识",
  "技术",
  "操纵",
  "其它"
];
function oi({
  skills: C,
  groups: A,
  groupOrder: w
}) {
  const M = /* @__PURE__ */ new Map();
  return C.forEach((I) => {
    M.set(I.name, I);
  }), w.map((I) => {
    const v = A[I].map((o) => M.get(o));
    return {
      groupName: I,
      groupSkills: v
    };
  });
}
const Sw = oi({
  skills: nM,
  groups: Di,
  groupOrder: vi
}), ww = {
  母语: (C) => C.attributes.edu || 0,
  闪避: (C) => Math.floor((C.attributes.dex || 0) / 2)
};
function ni(C, A) {
  const { attributes: w, deriveAttributes: M, skillPoints: g } = C, {
    str: I = 0,
    con: D = 0,
    siz: v = 0,
    dex: o = 0,
    app: n = 0,
    int: c = 0,
    pow: t = 0,
    edu: Z = 0,
    luc: U = 0
  } = w, {
    hp: P = { start: 0 },
    mp: R = { start: 0 },
    sanity: T = { start: 0 }
  } = M || {}, a = `力量${I}str${I}敏捷${o}dex${o}体质${D}con${D}外貌${n}app${n}智力${c}灵感${c}int${c}意志${t}pow${t}体型${v}siz${v}教育${Z}edu${Z}幸运${U}运气${U}luck${U}`, d = `hp${P.start}体力${P.start}mp${R.start}魔法${R.start}san${T.start}理智${T.start}理智值${T.start}san值${T.start}`;
  let B = "";
  const G = {};
  return g.forEach(([u, e]) => {
    let K, f, F;
    Array.isArray(u) ? ([K, , F] = u, f = A.showingChildSkills.get(K)[F]) : K = u;
    const N = f ? `${K}-${f}` : K;
    G[N] = e;
  }), nM.forEach((u) => {
    const { name: e, init: K, group: f } = u;
    let F = ww[e] ? ww[e](C) : K;
    const N = e.includes("Ω") ? e.slice(0, -1) : e;
    if (f) {
      let x = 0;
      if (A.showingChildSkills.get(e).forEach((m) => {
        var j, S;
        if (!m)
          return;
        const p = `${e}-${m}`, E = G[p];
        if (e && (F = ((S = (j = u.group) == null ? void 0 : j.skills.find((X) => X.name === m)) == null ? void 0 : S.init) || F), E) {
          const { b: X = e ? F : 0, p: q = 0, i: h = 0, g: wA = 0 } = E;
          x = X + q + h + wA;
        } else
          f.show.includes(m) && (x = F);
        B += `${m}${x}`;
        const r = JM[m];
        r && (B += r.map((X) => `${X}${x}`).join("")), delete G[p];
      }), e === "母语")
        if (x)
          B += `母语${x}`;
        else {
          const m = G[e];
          if (m) {
            const { b: p = e ? F : 0, p: E = 0, i: r = 0, g: j = 0 } = m;
            B += `母语${p + E + r + j}`;
          } else
            B += `母语${F}`;
        }
    } else {
      const x = G[e];
      let m = 0;
      if (x) {
        const { b: E = e ? F : 0, p: r = 0, i: j = 0, g: S = 0 } = x;
        m = E + r + j + S;
      } else
        m = F;
      B += `${N}${m}`;
      const p = JM[e];
      p && (B += p.map((E) => `${E}${m}`).join("")), delete G[e];
    }
  }), `${a}${d}${B}`;
}
const ii = (C) => (iA("data-v-98af2d38"), C = C(), cA(), C), ci = { class: "modal-body" }, Zi = { class: "group" }, Ui = /* @__PURE__ */ ii(() => /* @__PURE__ */ i("div", null, "录卡指令", -1)), ti = /* @__PURE__ */ Q({
  __name: "DiceMaid",
  setup(C) {
    const A = MA(), w = cM(), M = _(
      () => ".st " + (A && w ? ni(A.value, w) : "")
    ), g = W(!1);
    function I(v) {
      var o;
      (o = v.target) == null || o.select();
    }
    function D() {
      Sg(M.value), zA.success("已复制录卡指令");
    }
    return (v, o) => {
      const n = vA("el-input");
      return L(), b(O, null, [
        l(FA, {
          label: "骰娘相关",
          icon: z(So),
          onClick: o[0] || (o[0] = (c) => g.value = !0)
        }, null, 8, ["icon"]),
        l(qA, {
          title: "骰娘相关",
          modelValue: g.value,
          "onUpdate:modelValue": o[1] || (o[1] = (c) => g.value = c)
        }, {
          default: y(() => [
            i("div", ci, [
              i("div", Zi, [
                i("div", { class: "label" }, [
                  Ui,
                  i("div", null, [
                    i("a", {
                      class: "link",
                      onClick: D
                    }, "复制")
                  ])
                ]),
                l(n, {
                  type: "textarea",
                  rows: 5,
                  value: M.value,
                  readonly: "",
                  onFocus: I
                }, null, 8, ["value"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), ei = /* @__PURE__ */ V(ti, [["__scopeId", "data-v-98af2d38"]]);
function _A(C, A = 1, w = 0) {
  return Array.from({ length: A }).reduce((M) => {
    const g = Math.floor(Math.random() * C) + 1;
    return M + g;
  }, w);
}
function VA(C, A = 1) {
  if (A < 1)
    return C;
  let w = C;
  return _A(100) > C && (w += _A(10)), VA(w, A - 1);
}
const li = ["str", "dex", "con", "app", "pow"], Li = ["siz", "edu", "int"], Ki = ["luc"];
function Xw() {
  const C = {};
  return li.forEach((A) => {
    C[A] = _A(6, 3) * 5;
  }), Li.forEach((A) => {
    C[A] = _A(6, 2, 6) * 5;
  }), Ki.forEach((A) => {
    C[A] = _A(6, 3) * 5;
  }), C;
}
function zi(C, A) {
  let w = fC(C);
  return A < 15 || (A < 20 ? (w = HA(w, ["str", "siz"], 5), w.luc = Math.max(w.luc, _A(6, 3) * 5)) : A < 40 ? w.edu = VA(w.edu) : A < 50 ? (w = HA(w, ["str", "con", "dex"], 5), w.app = w.app - 5, w.edu = VA(w.edu, 2)) : A < 60 ? (w = HA(w, ["str", "con", "dex"], 10), w.app = w.app - 10, w.edu = VA(w.edu, 3)) : A < 70 ? (w = HA(w, ["str", "con", "dex"], 20), w.app = w.app - 15, w.edu = VA(w.edu, 4)) : A < 80 ? (w = HA(w, ["str", "con", "dex"], 40), w.app = w.app - 20, w.edu = VA(w.edu, 4)) : A < 90 && (w = HA(w, ["str", "con", "dex"], 80), w.app = w.app - 25, w.edu = VA(w.edu, 4))), w.app = Math.max(w.app, 5), w.edu = Math.min(w.edu, 99), w;
}
function rC(C) {
  const { str: A, con: w, dex: M, app: g, pow: I, siz: D, edu: v, int: o } = C;
  return [A, w, M, g, I, D, v, o].reduce((c, t) => c + t, 0);
}
function Pw(C) {
  const { luc: A } = C;
  return rC(C) + A;
}
function fC(C) {
  return {
    str: 0,
    dex: 0,
    con: 0,
    app: 0,
    pow: 0,
    siz: 0,
    edu: 0,
    int: 0,
    luc: 0,
    ...C
  };
}
function HA(C, A, w) {
  const M = { ...C };
  if (A.reduce((D, v) => D + M[v], 0) < w + A.length * 5)
    return A.forEach((D) => M[D] = 5), M;
  let I = w;
  return A.forEach((D, v) => {
    if (v === A.length - 1) {
      if (M[D] - I < 5)
        return HA(M, A, I);
      M[D] = M[D] - I;
    } else {
      let o = _A(I + 1) - 1;
      M[D] - o < 5 && (o = M[D] - 5), I = I - o, M[D] = M[D] - o;
    }
  }), M;
}
function Ri(C, A) {
  if (C.match(/^[a-z]+:\/\//i))
    return C;
  if (C.match(/^\/\//))
    return window.location.protocol + C;
  if (C.match(/^[a-z]+:/i))
    return C;
  const w = document.implementation.createHTMLDocument(), M = w.createElement("base"), g = w.createElement("a");
  return w.head.appendChild(M), w.body.appendChild(g), A && (M.href = A), g.href = C, g.href;
}
const fi = /* @__PURE__ */ (() => {
  let C = 0;
  const A = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (C += 1, `u${A()}${C}`);
})();
function TA(C) {
  const A = [];
  for (let w = 0, M = C.length; w < M; w++)
    A.push(C[w]);
  return A;
}
function Mw(C, A) {
  const M = (C.ownerDocument.defaultView || window).getComputedStyle(C).getPropertyValue(A);
  return M ? parseFloat(M.replace("px", "")) : 0;
}
function Fi(C) {
  const A = Mw(C, "border-left-width"), w = Mw(C, "border-right-width");
  return C.clientWidth + A + w;
}
function ai(C) {
  const A = Mw(C, "border-top-width"), w = Mw(C, "border-bottom-width");
  return C.clientHeight + A + w;
}
function Jg(C, A = {}) {
  const w = A.width || Fi(C), M = A.height || ai(C);
  return { width: w, height: M };
}
function bi() {
  let C, A;
  try {
    A = process;
  } catch {
  }
  const w = A && A.env ? A.env.devicePixelRatio : null;
  return w && (C = parseInt(w, 10), Number.isNaN(C) && (C = 1)), C || window.devicePixelRatio || 1;
}
const fA = 16384;
function Ni(C) {
  (C.width > fA || C.height > fA) && (C.width > fA && C.height > fA ? C.width > C.height ? (C.height *= fA / C.width, C.width = fA) : (C.width *= fA / C.height, C.height = fA) : C.width > fA ? (C.height *= fA / C.width, C.width = fA) : (C.width *= fA / C.height, C.height = fA));
}
function gw(C) {
  return new Promise((A, w) => {
    const M = new Image();
    M.decode = () => A(M), M.onload = () => A(M), M.onerror = w, M.crossOrigin = "anonymous", M.decoding = "async", M.src = C;
  });
}
async function ri(C) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(C)).then(encodeURIComponent).then((A) => `data:image/svg+xml;charset=utf-8,${A}`);
}
async function Pi(C, A, w) {
  const M = "http://www.w3.org/2000/svg", g = document.createElementNS(M, "svg"), I = document.createElementNS(M, "foreignObject");
  return g.setAttribute("width", `${A}`), g.setAttribute("height", `${w}`), g.setAttribute("viewBox", `0 0 ${A} ${w}`), I.setAttribute("width", "100%"), I.setAttribute("height", "100%"), I.setAttribute("x", "0"), I.setAttribute("y", "0"), I.setAttribute("externalResourcesRequired", "true"), g.appendChild(I), I.appendChild(C), ri(g);
}
const RA = (C, A) => {
  if (C instanceof A)
    return !0;
  const w = Object.getPrototypeOf(C);
  return w === null ? !1 : w.constructor.name === A.name || RA(w, A);
};
function Ti(C) {
  const A = C.getPropertyValue("content");
  return `${C.cssText} content: '${A.replace(/'|"/g, "")}';`;
}
function Bi(C) {
  return TA(C).map((A) => {
    const w = C.getPropertyValue(A), M = C.getPropertyPriority(A);
    return `${A}: ${w}${M ? " !important" : ""};`;
  }).join(" ");
}
function Gi(C, A, w) {
  const M = `.${C}:${A}`, g = w.cssText ? Ti(w) : Bi(w);
  return document.createTextNode(`${M}{${g}}`);
}
function $M(C, A, w) {
  const M = window.getComputedStyle(C, w), g = M.getPropertyValue("content");
  if (g === "" || g === "none")
    return;
  const I = fi();
  try {
    A.className = `${A.className} ${I}`;
  } catch {
    return;
  }
  const D = document.createElement("style");
  D.appendChild(Gi(I, w, M)), A.appendChild(D);
}
function ji(C, A) {
  $M(C, A, ":before"), $M(C, A, ":after");
}
const Ag = "application/font-woff", Cg = "image/jpeg", di = {
  woff: Ag,
  woff2: Ag,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Cg,
  jpeg: Cg,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function ui(C) {
  const A = /\.([^./]*?)$/g.exec(C);
  return A ? A[1] : "";
}
function ZM(C) {
  const A = ui(C).toLowerCase();
  return di[A] || "";
}
function xi(C) {
  return C.split(/,/)[1];
}
function Ww(C) {
  return C.search(/^(data:)/) !== -1;
}
function Og(C, A) {
  return `data:${A};base64,${C}`;
}
async function qg(C, A, w) {
  const M = await fetch(C, A);
  if (M.status === 404)
    throw new Error(`Resource "${M.url}" not found`);
  const g = await M.blob();
  return new Promise((I, D) => {
    const v = new FileReader();
    v.onerror = D, v.onloadend = () => {
      try {
        I(w({ res: M, result: v.result }));
      } catch (o) {
        D(o);
      }
    }, v.readAsDataURL(g);
  });
}
const Tw = {};
function mi(C, A, w) {
  let M = C.replace(/\?.*/, "");
  return w && (M = C), /ttf|otf|eot|woff2?/i.test(M) && (M = M.replace(/.*\//, "")), A ? `[${A}]${M}` : M;
}
async function UM(C, A, w) {
  const M = mi(C, A, w.includeQueryParams);
  if (Tw[M] != null)
    return Tw[M];
  w.cacheBust && (C += (/\?/.test(C) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let g;
  try {
    const I = await qg(C, w.fetchRequestInit, ({ res: D, result: v }) => (A || (A = D.headers.get("Content-Type") || ""), xi(v)));
    g = Og(I, A);
  } catch (I) {
    g = w.imagePlaceholder || "";
    let D = `Failed to fetch resource: ${C}`;
    I && (D = typeof I == "string" ? I : I.message), D && console.warn(D);
  }
  return Tw[M] = g, g;
}
async function si(C) {
  const A = C.toDataURL();
  return A === "data:," ? C.cloneNode(!1) : gw(A);
}
async function yi(C, A) {
  if (C.currentSrc) {
    const I = document.createElement("canvas"), D = I.getContext("2d");
    I.width = C.clientWidth, I.height = C.clientHeight, D == null || D.drawImage(C, 0, 0, I.width, I.height);
    const v = I.toDataURL();
    return gw(v);
  }
  const w = C.poster, M = ZM(w), g = await UM(w, M, A);
  return gw(g);
}
async function Qi(C) {
  var A;
  try {
    if (!((A = C == null ? void 0 : C.contentDocument) === null || A === void 0) && A.body)
      return await ow(C.contentDocument.body, {}, !0);
  } catch {
  }
  return C.cloneNode(!1);
}
async function pi(C, A) {
  return RA(C, HTMLCanvasElement) ? si(C) : RA(C, HTMLVideoElement) ? yi(C, A) : RA(C, HTMLIFrameElement) ? Qi(C) : C.cloneNode(!1);
}
const Ei = (C) => C.tagName != null && C.tagName.toUpperCase() === "SLOT";
async function Vi(C, A, w) {
  var M, g;
  let I = [];
  return Ei(C) && C.assignedNodes ? I = TA(C.assignedNodes()) : RA(C, HTMLIFrameElement) && (!((M = C.contentDocument) === null || M === void 0) && M.body) ? I = TA(C.contentDocument.body.childNodes) : I = TA(((g = C.shadowRoot) !== null && g !== void 0 ? g : C).childNodes), I.length === 0 || RA(C, HTMLVideoElement) || await I.reduce((D, v) => D.then(() => ow(v, w)).then((o) => {
    o && A.appendChild(o);
  }), Promise.resolve()), A;
}
function Hi(C, A) {
  const w = A.style;
  if (!w)
    return;
  const M = window.getComputedStyle(C);
  M.cssText ? (w.cssText = M.cssText, w.transformOrigin = M.transformOrigin) : TA(M).forEach((g) => {
    let I = M.getPropertyValue(g);
    g === "font-size" && I.endsWith("px") && (I = `${Math.floor(parseFloat(I.substring(0, I.length - 2))) - 0.1}px`), RA(C, HTMLIFrameElement) && g === "display" && I === "inline" && (I = "block"), g === "d" && A.getAttribute("d") && (I = `path(${A.getAttribute("d")})`), w.setProperty(g, I, M.getPropertyPriority(g));
  });
}
function Si(C, A) {
  RA(C, HTMLTextAreaElement) && (A.innerHTML = C.value), RA(C, HTMLInputElement) && A.setAttribute("value", C.value);
}
function Xi(C, A) {
  if (RA(C, HTMLSelectElement)) {
    const w = A, M = Array.from(w.children).find((g) => C.value === g.getAttribute("value"));
    M && M.setAttribute("selected", "");
  }
}
function Wi(C, A) {
  return RA(A, Element) && (Hi(C, A), ji(C, A), Si(C, A), Xi(C, A)), A;
}
async function hi(C, A) {
  const w = C.querySelectorAll ? C.querySelectorAll("use") : [];
  if (w.length === 0)
    return C;
  const M = {};
  for (let I = 0; I < w.length; I++) {
    const v = w[I].getAttribute("xlink:href");
    if (v) {
      const o = C.querySelector(v), n = document.querySelector(v);
      !o && n && !M[v] && (M[v] = await ow(n, A, !0));
    }
  }
  const g = Object.values(M);
  if (g.length) {
    const I = "http://www.w3.org/1999/xhtml", D = document.createElementNS(I, "svg");
    D.setAttribute("xmlns", I), D.style.position = "absolute", D.style.width = "0", D.style.height = "0", D.style.overflow = "hidden", D.style.display = "none";
    const v = document.createElementNS(I, "defs");
    D.appendChild(v);
    for (let o = 0; o < g.length; o++)
      v.appendChild(g[o]);
    C.appendChild(D);
  }
  return C;
}
async function ow(C, A, w) {
  return !w && A.filter && !A.filter(C) ? null : Promise.resolve(C).then((M) => pi(M, A)).then((M) => Vi(C, M, A)).then((M) => Wi(C, M)).then((M) => hi(M, A));
}
const _g = /url\((['"]?)([^'"]+?)\1\)/g, ki = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Yi = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Ji(C) {
  const A = C.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${A})(['"]?\\))`, "g");
}
function Oi(C) {
  const A = [];
  return C.replace(_g, (w, M, g) => (A.push(g), w)), A.filter((w) => !Ww(w));
}
async function qi(C, A, w, M, g) {
  try {
    const I = w ? Ri(A, w) : A, D = ZM(A);
    let v;
    if (g) {
      const o = await g(I);
      v = Og(o, D);
    } else
      v = await UM(I, D, M);
    return C.replace(Ji(A), `$1${v}$3`);
  } catch {
  }
  return C;
}
function _i(C, { preferredFontFormat: A }) {
  return A ? C.replace(Yi, (w) => {
    for (; ; ) {
      const [M, , g] = ki.exec(w) || [];
      if (!g)
        return "";
      if (g === A)
        return `src: ${M};`;
    }
  }) : C;
}
function $g(C) {
  return C.search(_g) !== -1;
}
async function AI(C, A, w) {
  if (!$g(C))
    return C;
  const M = _i(C, w);
  return Oi(M).reduce((I, D) => I.then((v) => qi(v, D, A, w)), Promise.resolve(M));
}
async function EC(C, A, w) {
  var M;
  const g = (M = A.style) === null || M === void 0 ? void 0 : M.getPropertyValue(C);
  if (g) {
    const I = await AI(g, null, w);
    return A.style.setProperty(C, I, A.style.getPropertyPriority(C)), !0;
  }
  return !1;
}
async function $i(C, A) {
  await EC("background", C, A) || await EC("background-image", C, A), await EC("mask", C, A) || await EC("mask-image", C, A);
}
async function A9(C, A) {
  const w = RA(C, HTMLImageElement);
  if (!(w && !Ww(C.src)) && !(RA(C, SVGImageElement) && !Ww(C.href.baseVal)))
    return;
  const M = w ? C.src : C.href.baseVal, g = await UM(M, ZM(M), A);
  await new Promise((I, D) => {
    C.onload = I, C.onerror = D;
    const v = C;
    v.decode && (v.decode = I), v.loading === "lazy" && (v.loading = "eager"), w ? (C.srcset = "", C.src = g) : C.href.baseVal = g;
  });
}
async function C9(C, A) {
  const M = TA(C.childNodes).map((g) => CI(g, A));
  await Promise.all(M).then(() => C);
}
async function CI(C, A) {
  RA(C, Element) && (await $i(C, A), await A9(C, A), await C9(C, A));
}
function w9(C, A) {
  const { style: w } = C;
  A.backgroundColor && (w.backgroundColor = A.backgroundColor), A.width && (w.width = `${A.width}px`), A.height && (w.height = `${A.height}px`);
  const M = A.style;
  return M != null && Object.keys(M).forEach((g) => {
    w[g] = M[g];
  }), C;
}
const wg = {};
async function Mg(C) {
  let A = wg[C];
  if (A != null)
    return A;
  const M = await (await fetch(C)).text();
  return A = { url: C, cssText: M }, wg[C] = A, A;
}
async function gg(C, A) {
  let w = C.cssText;
  const M = /url\(["']?([^"')]+)["']?\)/g, I = (w.match(/url\([^)]+\)/g) || []).map(async (D) => {
    let v = D.replace(M, "$1");
    return v.startsWith("https://") || (v = new URL(v, C.url).href), qg(v, A.fetchRequestInit, ({ result: o }) => (w = w.replace(D, `url(${o})`), [D, o]));
  });
  return Promise.all(I).then(() => w);
}
function Ig(C) {
  if (C == null)
    return [];
  const A = [], w = /(\/\*[\s\S]*?\*\/)/gi;
  let M = C.replace(w, "");
  const g = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const o = g.exec(M);
    if (o === null)
      break;
    A.push(o[0]);
  }
  M = M.replace(g, "");
  const I = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, D = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", v = new RegExp(D, "gi");
  for (; ; ) {
    let o = I.exec(M);
    if (o === null) {
      if (o = v.exec(M), o === null)
        break;
      I.lastIndex = v.lastIndex;
    } else
      v.lastIndex = I.lastIndex;
    A.push(o[0]);
  }
  return A;
}
async function M9(C, A) {
  const w = [], M = [];
  return C.forEach((g) => {
    if ("cssRules" in g)
      try {
        TA(g.cssRules || []).forEach((I, D) => {
          if (I.type === CSSRule.IMPORT_RULE) {
            let v = D + 1;
            const o = I.href, n = Mg(o).then((c) => gg(c, A)).then((c) => Ig(c).forEach((t) => {
              try {
                g.insertRule(t, t.startsWith("@import") ? v += 1 : g.cssRules.length);
              } catch (Z) {
                console.error("Error inserting rule from remote css", {
                  rule: t,
                  error: Z
                });
              }
            })).catch((c) => {
              console.error("Error loading remote css", c.toString());
            });
            M.push(n);
          }
        });
      } catch (I) {
        const D = C.find((v) => v.href == null) || document.styleSheets[0];
        g.href != null && M.push(Mg(g.href).then((v) => gg(v, A)).then((v) => Ig(v).forEach((o) => {
          D.insertRule(o, g.cssRules.length);
        })).catch((v) => {
          console.error("Error loading remote stylesheet", v);
        })), console.error("Error inlining remote css file", I);
      }
  }), Promise.all(M).then(() => (C.forEach((g) => {
    if ("cssRules" in g)
      try {
        TA(g.cssRules || []).forEach((I) => {
          w.push(I);
        });
      } catch (I) {
        console.error(`Error while reading CSS rules from ${g.href}`, I);
      }
  }), w));
}
function g9(C) {
  return C.filter((A) => A.type === CSSRule.FONT_FACE_RULE).filter((A) => $g(A.style.getPropertyValue("src")));
}
async function I9(C, A) {
  if (C.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const w = TA(C.ownerDocument.styleSheets), M = await M9(w, A);
  return g9(M);
}
async function D9(C, A) {
  const w = await I9(C, A);
  return (await Promise.all(w.map((g) => {
    const I = g.parentStyleSheet ? g.parentStyleSheet.href : null;
    return AI(g.cssText, I, A);
  }))).join(`
`);
}
async function v9(C, A) {
  const w = A.fontEmbedCSS != null ? A.fontEmbedCSS : A.skipFonts ? null : await D9(C, A);
  if (w) {
    const M = document.createElement("style"), g = document.createTextNode(w);
    M.appendChild(g), C.firstChild ? C.insertBefore(M, C.firstChild) : C.appendChild(M);
  }
}
async function o9(C, A = {}) {
  const { width: w, height: M } = Jg(C, A), g = await ow(C, A, !0);
  return await v9(g, A), await CI(g, A), w9(g, A), await Pi(g, w, M);
}
async function n9(C, A = {}) {
  const { width: w, height: M } = Jg(C, A), g = await o9(C, A), I = await gw(g), D = document.createElement("canvas"), v = D.getContext("2d"), o = A.pixelRatio || bi(), n = A.canvasWidth || w, c = A.canvasHeight || M;
  return D.width = n * o, D.height = c * o, A.skipAutoScale || Ni(D), D.style.width = `${n}`, D.style.height = `${c}`, A.backgroundColor && (v.fillStyle = A.backgroundColor, v.fillRect(0, 0, D.width, D.height)), v.drawImage(I, 0, 0, D.width, D.height), D;
}
async function i9(C, A = {}) {
  return (await n9(C, A)).toDataURL("image/jpeg", A.quality || 1);
}
async function Dg(C) {
  return C ? await i9(C, {
    canvasWidth: 210 * 8,
    canvasHeight: 297 * 8,
    pixelRatio: 1,
    quality: 0.5,
    skipFonts: !0
  }) : "";
}
async function c9({
  paperEls: C,
  paperKey: A
}) {
  return new Promise((w) => {
    eg(async () => {
      const M = {};
      (A === void 0 || A === "front") && (M.front = await Dg(C.front)), (A === void 0 || A === "back") && (M.back = await Dg(C.back)), w(M);
    });
  });
}
function Z9(C) {
  const A = xA({
    front: "",
    back: ""
  });
  async function w(M) {
    if (!C.front || !C.back)
      throw "Setup Error: `paperEls` not exists";
    return c9({
      paperEls: C,
      paperKey: M
    }).then((g) => (Object.assign(A, g), A));
  }
  return {
    paperImages: A,
    printPaper: w
  };
}
  /* @__PURE__ */ i("div", null, "建议 PC 端使用，移动端兼容性较差："),
  /* @__PURE__ */ i("div", null, "· 如果头像未加载，重新生成几次即可")
], -1)), R9 = { class: "in-out-modal-body" }, f9 = { class: "in-out-modal-panel" }, F9 = { class: "in-out-modal-panel" }, a9 = { class: "reward-modal-body" }, b9 = /* @__PURE__ */ wI(() => /* @__PURE__ */ i("div", { class: "reward-texts" }, [
  /* @__PURE__ */ i("div", null, "喜欢这个工具？欢迎投喂！"),
  /* @__PURE__ */ i("div", null, "本项目为 github pages 纯前端项目，所以不用担心停运哦！")
], -1)), N9 = { class: "reward-qr-container" }, r9 = ["src"], P9 = { class: "reward-qr-container" }, T9 = ["src"], B9 = /* @__PURE__ */ Q({
  __name: "ControlSection",
  props: {
    paperEls: {},
    cheating: { type: Boolean, default: !1 }
  },
  emits: ["switch-paper", "switch-cheating", "reset-card"],
  setup(C, { emit: A }) {
    const w = C, M = MA(), g = cM(), I = BA(), D = W(""), v = _(() => {
      const F = {};
      g == null || g.showingChildSkills.forEach((m, p) => {
        F[p] = m;
      });
      const N = JSON.stringify({
        pc: M == null ? void 0 : M.value,
        viewData: {
          ...g,
          showingChildSkills: F
        }
      });
      return qM.compressToEncodedURIComponent(N);
    }), o = _(() => {
      const F = new Blob([v.value], { type: "text/plain;charset=utf-8" });
      return URL.createObjectURL(F);
    }), n = W(!1), c = W(!1), t = W(!1), Z = W(!1), U = W("features"), P = W(0);
    function R() {
      if (!M)
        return;
      const F = Array.from({
        length: w.cheating ? 5 : P.value % 3 + 1
      }).map(() => Xw()).sort((N, x) => rC(x) - rC(N))[0];
      M.value.attributes = F, zA.success("已为您生成一组数据，看看符不符合心意吧！"), P.value++;
    }
    const { paperImages: T, printPaper: a } = Z9(w.paperEls), d = _(() => {
      const { name: F, playerName: N } = (M == null ? void 0 : M.value) || {}, x = "【TRPG赛高】", m = [F, N].filter((p) => p).join("-");
      return `${x}${m}${m ? "-" : ""}`;
    });
    function B(F) {
      if (I) {
        if (I.printing) {
          zA.info("已经在运行啦，请不要同时多次生成图片");
          return;
        }
        I.printing = !0, zA.info({
          message: "图片生成中，页面会有轻微抖动，请稍候…",
          duration: 1e3,
          onClose() {
            a(F).then(() => {
              c.value = !0, I.printing = !1;
            });
          }
        });
      }
    }
    function G() {
      if (M != null && M.value) {
        if (!M.value.age || M.value.age === "0") {
          zA.error("请先在人物卡中填写年龄");
          return;
        }
        M.value.attributes = zi(
          M.value.attributes,
          Number(M.value.age || 0)
        ), zA.success("已为您进行年龄修正！");
      }
    }
    function u() {
      Sg(v.value), zA.success("已复制到剪贴板");
    }
    function e() {
      const F = qM.decompressFromEncodedURIComponent(D.value), N = JSON.parse(F);
      if (N && N.viewData && N.pc && g && M)
        try {
          M.value = N.pc, g.showingChildSkills = new Map(
            Object.entries(N.viewData.showingChildSkills)
          ), ["jobSkills"].forEach((m) => {
            g[m] = N.viewData[m];
          }), zA.success("已成功导入"), n.value = !1;
        } catch {
          zA.error("数据有误，无法导入。页面可能因此受损，建议刷新");
        }
      else
        zA.error("数据有误，无法导入");
    }
    function K() {
      I && (I.showTotalSeparation = !I.showTotalSeparation, zA.info(
        `已切换成功率显示方式为：${I.showTotalSeparation ? "全面（普通 | 困难 | 极难）" : "极简"}`
      ));
    }
    const f = sA(Z, (F) => {
      if (F) {
        const N = new Image();
        N.src = vg, eg(() => {
          N.src = og;
        }), f();
      }
    });
    return (F, N) => {
      const x = vA("el-tab-pane"), m = vA("el-tabs"), p = vA("el-input"), E = vA("el-button");
      return L(), b("div", t9, [
        i("div", e9, [
          l(FA, {
            label: "天命一",
            icon: z(yo),
            onClick: R
          }, null, 8, ["icon"]),
          l(FA, {
            label: "翻面",
            icon: z(Mn),
            onClick: N[0] || (N[0] = (r) => F.$emit("switch-paper"))
          }, null, 8, ["icon"]),
          l(FA, {
            label: "保存",
            icon: z(ko),
            onClick: N[1] || (N[1] = () => B())
          }, null, 8, ["icon"]),
          l(FA, {
            label: "更多",
            icon: z($o),
            onClick: N[2] || (N[2] = (r) => Z.value = !Z.value)
          }, null, 8, ["icon"])
        ]),
        Z.value ? (L(), $(m, {
          key: 0,
          class: "more-container",
          modelValue: U.value,
          "onUpdate:modelValue": N[8] || (N[8] = (r) => U.value = r)
        }, {
          default: y(() => [
            l(x, {
              class: "more-pane",
              label: "更多功能",
              name: "features"
            }, {
              default: y(() => [
                i("div", l9, [
                  l(FA, {
                    label: "快速年龄修正",
                    icon: z(Dn),
                    onClick: G
                  }, null, 8, ["icon"]),
                  l(FA, {
                    label: "重置人物卡",
                    icon: z(Xg),
                    onClick: N[3] || (N[3] = (r) => F.$emit("reset-card"))
                  }, null, 8, ["icon"]),
                  l(FA, {
                    label: "导入/导出数据",
                    icon: z(Wo),
                    onClick: N[4] || (N[4] = (r) => n.value = !0)
                  }, null, 8, ["icon"]),
                  l(FA, {
                    label: `${F.cheating ? "关闭" : "开启"}灌铅模式`,
                    icon: z(qo),
                    onClick: N[5] || (N[5] = (r) => F.$emit("switch-cheating"))
                  }, null, 8, ["label", "icon"]),
                  l(ei),
                  l(FA, {
                    label: "下载空白卡PDF",
                    icon: z(po),
                    onClick: N[6] || (N[6] = (r) => z(hg)(z(U9), "【TRPG 赛高】空白卡.pdf"))
                  }, null, 8, ["icon"]),
                  l(FA, {
                    label: "切换成功率模式",
                    icon: z(Cn),
                    onClick: K
                  }, null, 8, ["icon"]),
                  l(FA, {
                    label: "投喂作者",
                    icon: z(Jo),
                    onClick: N[7] || (N[7] = (r) => t.value = !0)
                  }, null, 8, ["icon"])
                ]),
                l(Sn)
              ]),
              _: 1
            }),
            l(x, {
              class: "more-pane more-pane-less",
              label: "职业列表",
              name: "jobs"
            }, {
              default: y(() => [
                l(qn)
              ]),
              _: 1
            }),
            l(x, {
              class: "more-pane more-pane-less",
              label: "武器列表",
              name: "weapons"
            }, {
              default: y(() => [
                l(Ii)
              ]),
              _: 1
            }),
            l(x, {
              class: "more-pane",
              label: "使用指南",
              name: "guide"
            }, {
              default: y(() => [
                l(xn)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : H("", !0),
        l(qA, {
          modelValue: c.value,
          "onUpdate:modelValue": N[11] || (N[11] = (r) => c.value = r),
          title: "下载图片/数据"
        }, {
          default: y(() => [
            i("div", L9, [
              i("div", K9, [
                l(rw, {
                  title: "正面",
                  refreshable: "",
                  previewImage: z(T).front,
                  download: {
                    url: z(T).front,
                    name: d.value,
                    type: "jpg"
                  },
                  onRefresh: N[9] || (N[9] = () => B("front"))
                }, null, 8, ["previewImage", "download"]),
                l(rw, {
                  title: "背面",
                  refreshable: "",
                  previewImage: z(T).back,
                  download: {
                    url: z(T).back,
                    name: d.value,
                    type: "jpg"
                  },
                  onRefresh: N[10] || (N[10] = () => B("back"))
                }, null, 8, ["previewImage", "download"]),
                l(rw, {
                  title: "车卡数据",
                  download: {
                    url: o.value,
                    name: d.value,
                    type: "txt"
                  }
                }, null, 8, ["download"])
              ]),
              z9
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        l(qA, {
          modelValue: n.value,
          "onUpdate:modelValue": N[13] || (N[13] = (r) => n.value = r),
          title: "导入/导出数据",
          onClosed: N[14] || (N[14] = (r) => D.value = "")
        }, {
          default: y(() => [
            i("div", R9, [
              i("div", f9, [
                l(p, {
                  type: "textarea",
                  value: v.value,
                  rows: 16,
                  readonly: !0,
                  resize: "none"
                }, null, 8, ["value"]),
                l(E, {
                  type: "primary",
                  onClick: u
                }, {
                  default: y(() => [
                    DA(" 复制以上内容 ")
                  ]),
                  _: 1
                })
              ]),
              i("div", F9, [
                l(p, {
                  type: "textarea",
                  modelValue: D.value,
                  "onUpdate:modelValue": N[12] || (N[12] = (r) => D.value = r),
                  rows: 16,
                  placeholder: "将文本粘贴到这里",
                  resize: "none"
                }, null, 8, ["modelValue"]),
                l(E, {
                  type: "primary",
                  onClick: e
                }, {
                  default: y(() => [
                    DA(" 导入以上内容 ")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        l(qA, {
          modelValue: t.value,
          "onUpdate:modelValue": N[15] || (N[15] = (r) => t.value = r),
          title: "投喂作者"
        }, {
          default: y(() => [
            i("div", a9, [
              b9,
              i("div", N9, [
                i("img", {
                  class: "reward-qr",
                  src: z(vg)
                }, null, 8, r9)
              ]),
              i("div", P9, [
                i("img", {
                  class: "reward-qr",
                  src: z(og)
                }, null, 8, T9)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), G9 = /* @__PURE__ */ V(B9, [["__scopeId", "data-v-574787b2"]]), j9 = /* @__PURE__ */ Q({
  __name: "PaperLayout",
  props: {
    setRef: {}
  },
  setup(C) {
    const A = BA();
    return (w, M) => {
      var g;
      return L(), b("div", {
        class: CA(["paper theme-light", {
          "printing-image": (g = z(A)) == null ? void 0 : g.printing
        }])
      }, [
        i("div", {
          class: "paper-content",
          ref: w.setRef
        }, [
          ZC(w.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 2);
    };
  }
}), MI = /* @__PURE__ */ V(j9, [["__scopeId", "data-v-55bb5c66"]]), d9 = { class: "paper-section" }, u9 = { class: "heading" }, x9 = { class: "title" }, m9 = { class: "subtitle" }, s9 = { class: "body" }, y9 = /* @__PURE__ */ Q({
  __name: "PaperSection",
  props: {
    title: {},
    subTitle: {},
    centered: { type: Boolean, default: !0 }
  },
  setup(C) {
    return (A, w) => (L(), b("div", d9, [
      i("div", {
        class: CA(["header", {
          "header-centered": A.centered
        }])
      }, [
        ZC(A.$slots, "header", {}, () => [
          i("h1", u9, [
            i("span", x9, s(A.title), 1),
            i("span", m9, s(A.subTitle), 1)
          ])
        ], !0)
      ], 2),
      i("div", s9, [
        ZC(A.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), LA = /* @__PURE__ */ V(y9, [["__scopeId", "data-v-02b334f4"]]), Q9 = { class: "label" }, p9 = { class: "label-title" }, E9 = {
  key: 0,
  class: "label-hint"
}, V9 = ["placeholder", "readonly", "value"], H9 = /* @__PURE__ */ Q({
  __name: "WritableRow",
  props: {
    label: {},
    hint: {},
    placeholder: {},
    char: { default: 5 },
    modelValue: { default: "" },
    readonly: { type: Boolean }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(C) {
    const A = C, w = BA(), M = xA({
      width: `${A.char}em`
    });
    return (g, I) => {
      var D, v;
      return L(), b("div", {
        class: CA(["writable-row", {
          "writable-row-with-hint": !!g.hint,
          "printing-image": (D = z(w)) == null ? void 0 : D.printing
        }])
      }, [
        i("div", Q9, [
          i("div", p9, s(g.label), 1),
          g.hint ? (L(), b("div", E9, s(g.hint), 1)) : H("", !0)
        ]),
        i("input", {
          type: "text",
          class: "input",
          style: NC(M),
          placeholder: (v = z(w)) != null && v.printing ? "" : g.placeholder,
          readonly: g.readonly,
          value: g.modelValue,
          onInput: I[0] || (I[0] = (o) => g.$emit("update:modelValue", o.target.value)),
          onFocus: I[1] || (I[1] = (o) => g.$emit("focus")),
          onBlur: I[2] || (I[2] = (o) => g.$emit("blur"))
        }, null, 44, V9)
      ], 2);
    };
  }
}), gA = /* @__PURE__ */ V(H9, [["__scopeId", "data-v-94c60336"]]), S9 = { class: "flatten-tree" }, X9 = { class: "group-label" }, W9 = { class: "options" }, h9 = ["onClick"], k9 = /* @__PURE__ */ Q({
  __name: "FlattenTree",
  props: {
    tree: {}
  },
  emits: ["select"],
  setup(C) {
    return (A, w) => (L(), b("div", S9, [
      (L(!0), b(O, null, AA(A.tree, (M) => (L(), b("div", {
        class: "group",
        key: M.key
      }, [
        i("div", X9, s(M.label), 1),
        i("div", W9, [
          (L(!0), b(O, null, AA(M.children, (g) => (L(), b("a", {
            class: "option",
            key: g.key,
            onClick: (I) => A.$emit("select", g, M)
          }, s(g.label), 9, h9))), 128))
        ])
      ]))), 128))
    ]));
  }
}), gI = /* @__PURE__ */ V(k9, [["__scopeId", "data-v-7cc86512"]]), tM = {
  mounted(C, A) {
    C._clickOutsideEvent = function(w) {
      C === w.target || C.contains(w.target) || A.value(w, C);
    }, document.addEventListener("click", C._clickOutsideEvent), document.addEventListener("focus", C._clickOutsideEvent, !0);
  },
  unmounted: function(A) {
    document.removeEventListener("click", A._clickOutsideEvent), document.removeEventListener("focus", A._clickOutsideEvent, !0);
  }
}, Y9 = { class: "rel only-wide" }, J9 = {
  key: 0,
  class: "job-selector"
}, O9 = { class: "job-selector-header" }, q9 = { class: "only-compact" }, _9 = { class: "info-row" }, $9 = { class: "info-row" }, Ac = /* @__PURE__ */ Q({
  __name: "InvestigatorSection",
  setup(C) {
    const A = MA(), w = BA(), { jobGroups: M } = dC, g = W(!1), I = W("");
    function D() {
      g.value = !0;
    }
    function v() {
      g.value = !1;
    }
    sA(
      () => g.value,
      () => {
        I.value = "";
      }
    );
    const o = _(() => {
      const c = I.value;
      return M.reduce((Z, U) => {
        const { name: P, pinyin: R, jobs: T } = U, a = T.reduce((d, B) => ((!c || P.includes(c) || R.includes(c) || B.name.includes(c) || B.pinyin.includes(c)) && d.push({ label: B.name, key: B.name }), d), []);
        return a.length && Z.push({
          label: P,
          key: P,
          children: a
        }), Z;
      }, []);
    });
    function n(c) {
      A && (A.value.job = c, v());
    }
    return (c, t) => z(A) ? (L(), $(LA, {
      key: 0,
      title: "调查员",
      subTitle: "Investigator"
    }, {
      default: y(() => {
        var Z;
        return [
          i("div", {
            class: CA(["info-section", {
              "printing-image": (Z = z(w)) == null ? void 0 : Z.printing
            }])
          }, [
            l(gA, {
              label: "姓名",
              placeholder: "角色姓名",
              modelValue: z(A).name,
              "onUpdate:modelValue": t[0] || (t[0] = (U) => z(A).name = U)
            }, null, 8, ["modelValue"]),
            l(gA, {
              label: "玩家",
              placeholder: "玩家昵称",
              modelValue: z(A).playerName,
              "onUpdate:modelValue": t[1] || (t[1] = (U) => z(A).playerName = U)
            }, null, 8, ["modelValue"]),
            l(gA, {
              label: "时代",
              modelValue: z(A).time,
              "onUpdate:modelValue": t[2] || (t[2] = (U) => z(A).time = U)
            }, null, 8, ["modelValue"]),
            $A((L(), b("div", Y9, [
              l(gA, {
                label: "职业",
                modelValue: z(A).job,
                "onUpdate:modelValue": t[3] || (t[3] = (U) => z(A).job = U),
                placeholder: "自定义职业或选择预设职业",
                onFocus: D
              }, null, 8, ["modelValue"]),
              l(kw, { name: "slide-up" }, {
                default: y(() => [
                  g.value ? (L(), b("div", J9, [
                    i("div", O9, [
                      $A(i("input", {
                        class: "job-search-input",
                        type: "text",
                        placeholder: "输入职业名称或拼音可以进行搜索",
                        "onUpdate:modelValue": t[4] || (t[4] = (U) => I.value = U)
                      }, null, 512), [
                        [UI, I.value]
                      ])
                    ]),
                    l(gI, {
                      tree: o.value,
                      onSelect: t[5] || (t[5] = (U) => n(U.label))
                    }, null, 8, ["tree"])
                  ])) : H("", !0)
                ]),
                _: 1
              })
            ])), [
              [z(tM), v]
            ]),
            i("div", q9, [
              l(gA, {
                label: "职业",
                modelValue: z(A).job,
                "onUpdate:modelValue": t[6] || (t[6] = (U) => z(A).job = U),
                placeholder: "自定义或从“更多”→“职业列表”中选择"
              }, null, 8, ["modelValue"])
            ]),
            i("div", _9, [
              l(gA, {
                label: "年龄",
                char: 6,
                modelValue: z(A).age,
                "onUpdate:modelValue": t[7] || (t[7] = (U) => z(A).age = U)
              }, null, 8, ["modelValue"]),
              l(gA, {
                label: "性别",
                char: 6,
                modelValue: z(A).gender,
                "onUpdate:modelValue": t[8] || (t[8] = (U) => z(A).gender = U)
              }, null, 8, ["modelValue"])
            ]),
            i("div", $9, [
              l(gA, {
                label: "住地",
                char: 6,
                modelValue: z(A).location,
                "onUpdate:modelValue": t[9] || (t[9] = (U) => z(A).location = U)
              }, null, 8, ["modelValue"]),
              l(gA, {
                label: "故乡",
                char: 6,
                modelValue: z(A).hometown,
                "onUpdate:modelValue": t[10] || (t[10] = (U) => z(A).hometown = U)
              }, null, 8, ["modelValue"])
            ])
          ], 2)
        ];
      }),
      _: 1
    })) : H("", !0);
  }
}), Cc = /* @__PURE__ */ V(Ac, [["__scopeId", "data-v-81d21179"]]), GA = (C) => (iA("data-v-cda9d724"), C = C(), cA(), C), wc = /* @__PURE__ */ GA(() => /* @__PURE__ */ i("div", { class: "ponits-button-text" }, "花式加点", -1)), Mc = [
  wc
], gc = { class: "modal-body" }, Ic = { class: "method-section" }, Dc = { class: "method-section-header" }, vc = /* @__PURE__ */ GA(() => /* @__PURE__ */ i("div", { class: "method-section-title" }, "枫笛式", -1)), oc = { class: "header-action" }, nc = { class: "method-section-content" }, ic = /* @__PURE__ */ GA(() => /* @__PURE__ */ i("div", null, "将 5组 3D6×5 分配到左侧，3组 2D6+6×5 分配到右侧", -1)), cc = {
  key: 0,
  class: "column-section-content"
}, Zc = { class: "column-section-content-column kaede-value-column" }, Uc = { class: "column-section-content-column kaede-value-column" }, tc = {
  key: 1,
  class: "column-section-content"
}, ec = { class: "column-section-content-column" }, lc = { class: "kaede-choice-row-label" }, Lc = { class: "column-section-content-column" }, Kc = { class: "kaede-choice-row-label" }, zc = { class: "column-section-content-column-actions" }, Rc = { class: "method-section" }, fc = { class: "method-section-header" }, Fc = /* @__PURE__ */ GA(() => /* @__PURE__ */ i("div", { class: "method-section-title" }, "天命式", -1)), ac = { class: "header-action" }, bc = /* @__PURE__ */ GA(() => /* @__PURE__ */ i("div", { class: "header-action-label" }, "组数", -1)), Nc = { class: "method-section-content" }, rc = /* @__PURE__ */ GA(() => /* @__PURE__ */ i("div", null, "点击“生成”后，点击数据组卡片使用", -1)), Pc = ["onClick"], Tc = { class: "action-roll-result-item action-roll-result-item-sum" }, Bc = { class: "method-section" }, Gc = { class: "method-section-header" }, jc = /* @__PURE__ */ GA(() => /* @__PURE__ */ i("div", { class: "method-section-title" }, "购点式", -1)), dc = { class: "header-action" }, uc = /* @__PURE__ */ GA(() => /* @__PURE__ */ i("div", { class: "header-action-label" }, "总点数", -1)), xc = { class: "method-section-content" }, mc = /* @__PURE__ */ GA(() => /* @__PURE__ */ i("div", null, "点击“购点”，填写，点击“应用”", -1)), sc = {
  key: 0,
  class: "column-section-content"
}, yc = { class: "column-section-content-column" }, Qc = { class: "column-section-content-column" }, pc = { class: "column-section-content-column-actions" }, Ec = /* @__PURE__ */ Q({
  __name: "BuyPointsButton",
  props: {
    cheating: { type: Boolean }
  },
  setup(C) {
    const A = MA(), w = W(!1);
    function M(F) {
      A != null && A.value && (Object.entries(F).forEach(([N, x]) => {
        A.value.attributes[N] = x || void 0;
      }), w.value = !1, u());
    }
    const g = W(fC({})), I = W(!1), D = W({});
    function v() {
      u(), g.value = Xw(), D.value.luc = "luc", I.value = !0;
    }
    function o() {
      if (Object.values(D.value).filter(
        (x) => x
      ).length < 9) {
        zA.error("请完成所有选择");
        return;
      }
      const N = fC({});
      Object.entries(D.value).forEach(
        ([x, m]) => {
          m && (N[x] = g.value[m]);
        }
      ), M(N);
    }
    function n(F) {
      return Object.values(D.value).some(
        (N) => N === F
      );
    }
    const c = W(5), t = W(0), Z = W([]);
    function U() {
      u(), Z.value = Array.from(
        { length: c.value },
        () => Xw()
      ), t.value++;
    }
    function P(F) {
      M(F);
    }
    const R = W(420), T = W(!1), a = W(fC({})), d = _(() => R.value - Pw(a.value));
    function B() {
      u(), T.value = !0, a.value = fC({});
    }
    function G() {
      M(a.value);
    }
    function u() {
      I.value = !1, t.value = 0, Z.value = [], T.value = !1;
    }
    const e = [
      { key: "str", label: "力量", hint: "STR" },
      { key: "con", label: "体质", hint: "CON" },
      { key: "dex", label: "敏捷", hint: "DEX" },
      { key: "app", label: "外貌", hint: "APP" },
      { key: "pow", label: "意志", hint: "POW" }
    ], K = [
      { key: "siz", label: "体型", hint: "SIZ" },
      { key: "edu", label: "教育", hint: "知识 EDU" },
      { key: "int", label: "智力", hint: "灵感 INT" }
    ], f = [
      { key: "luc", label: "幸运", hint: "Luck" }
    ];
    return (F, N) => {
      const x = vA("el-button"), m = vA("el-option"), p = vA("el-select"), E = vA("el-input");
      return L(), b(O, null, [
        i("button", {
          class: "ponits-button web-only",
          onClick: N[0] || (N[0] = (r) => w.value = !0)
        }, Mc),
        l(qA, {
          modelValue: w.value,
          "onUpdate:modelValue": N[3] || (N[3] = (r) => w.value = r),
          title: "花式加点"
        }, {
          default: y(() => [
            i("div", gc, [
              i("div", Ic, [
                i("div", Dc, [
                  vc,
                  i("div", oc, [
                    l(x, {
                      size: "small",
                      type: "default",
                      onClick: v
                    }, {
                      default: y(() => [
                        DA(" 生成 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                i("div", nc, [
                  ic,
                  I.value ? (L(), b("div", cc, [
                    i("div", Zc, [
                      DA(" · "),
                      (L(), b(O, null, AA(e, (r) => i("span", {
                        key: r.key
                      }, s(g.value[r.key]), 1)), 64))
                    ]),
                    i("div", Uc, [
                      DA(" · "),
                      (L(), b(O, null, AA(K, (r) => i("span", {
                        key: r.key
                      }, s(g.value[r.key]), 1)), 64))
                    ])
                  ])) : H("", !0),
                  I.value ? (L(), b("div", tc, [
                    i("div", ec, [
                      (L(), b(O, null, AA(e, (r) => i("div", {
                        key: r.key,
                        class: "kaede-choice-row"
                      }, [
                        i("div", lc, s(r.label), 1),
                        l(p, {
                          modelValue: D.value[r.key],
                          "onUpdate:modelValue": (j) => D.value[r.key] = j,
                          placeholder: "请选择",
                          size: "small",
                          clearable: ""
                        }, {
                          default: y(() => [
                            (L(), b(O, null, AA(e, (j) => l(m, {
                              key: j.key,
                              label: g.value[j.key],
                              value: j.key,
                              disabled: n(j.key)
                            }, null, 8, ["label", "value", "disabled"])), 64))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ])), 64))
                    ]),
                    i("div", Lc, [
                      (L(), b(O, null, AA(K, (r) => i("div", {
                        key: r.key,
                        class: "kaede-choice-row"
                      }, [
                        i("div", Kc, s(r.label), 1),
                        l(p, {
                          modelValue: D.value[r.key],
                          "onUpdate:modelValue": (j) => D.value[r.key] = j,
                          placeholder: "请选择",
                          size: "small",
                          clearable: ""
                        }, {
                          default: y(() => [
                            (L(), b(O, null, AA(K, (j) => l(m, {
                              key: j.key,
                              label: g.value[j.key],
                              value: j.key,
                              disabled: n(j.key)
                            }, null, 8, ["label", "value", "disabled"])), 64))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ])), 64)),
                      i("div", null, [
                        i("span", null, "总点数 " + s(z(rC)(g.value)), 1),
                        i("span", null, "(" + s(z(Pw)(g.value)) + ")", 1)
                      ]),
                      i("div", zc, [
                        l(x, {
                          size: "small",
                          type: "default",
                          onClick: o
                        }, {
                          default: y(() => [
                            DA(" 应用 (幸运 " + s(g.value.luc) + ") ", 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])) : H("", !0)
                ])
              ]),
              i("div", Rc, [
                i("div", fc, [
                  Fc,
                  i("div", ac, [
                    bc,
                    l(E, {
                      size: "small",
                      type: "number",
                      min: 1,
                      max: 10,
                      modelValue: c.value,
                      "onUpdate:modelValue": N[1] || (N[1] = (r) => c.value = r)
                    }, null, 8, ["modelValue"]),
                    l(x, {
                      size: "small",
                      type: "default",
                      onClick: U
                    }, {
                      default: y(() => [
                        DA(" 生成 "),
                        t.value ? (L(), b(O, { key: 0 }, [
                          DA(" (已生成 " + s(t.value) + " 次) ", 1)
                        ], 64)) : H("", !0)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                i("div", Nc, [
                  rc,
                  (L(!0), b(O, null, AA(Z.value, (r, j) => (L(), b("div", {
                    key: j,
                    class: "action-roll-result"
                  }, [
                    (L(!0), b(O, null, AA([...e, ...K, ...f], (S) => (L(), b("div", {
                      key: S.key,
                      class: "action-roll-result-item",
                      onClick: (X) => P(r)
                    }, s(S.label) + " " + s(r[S.key]), 9, Pc))), 128)),
                    i("div", Tc, " 总点数 " + s(z(rC)(r)) + " / 含运 " + s(z(Pw)(r)), 1)
                  ]))), 128))
                ])
              ]),
              i("div", Bc, [
                i("div", Gc, [
                  jc,
                  i("div", dc, [
                    uc,
                    l(E, {
                      size: "small",
                      type: "number",
                      min: 0,
                      max: 720,
                      modelValue: R.value,
                      "onUpdate:modelValue": N[2] || (N[2] = (r) => R.value = r)
                    }, null, 8, ["modelValue"]),
                    l(x, {
                      size: "small",
                      type: "default",
                      onClick: B
                    }, {
                      default: y(() => [
                        DA(" 购点 "),
                        T.value ? (L(), b(O, { key: 0 }, [
                          DA(" (剩余 " + s(d.value) + ") ", 1)
                        ], 64)) : H("", !0)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                i("div", xc, [
                  mc,
                  T.value ? (L(), b("div", sc, [
                    i("div", yc, [
                      (L(), b(O, null, AA(e, (r) => l(gA, {
                        key: r.key,
                        label: r.label,
                        hint: r.hint,
                        modelValue: `${a.value[r.key] ?? ""}`,
                        "onUpdate:modelValue": (j) => a.value[r.key] = Number(j)
                      }, null, 8, ["label", "hint", "modelValue", "onUpdate:modelValue"])), 64))
                    ]),
                    i("div", Qc, [
                      (L(), b(O, null, AA(K, (r) => l(gA, {
                        key: r.key,
                        label: r.label,
                        hint: r.hint,
                        modelValue: `${a.value[r.key] ?? ""}`,
                        "onUpdate:modelValue": (j) => a.value[r.key] = Number(j)
                      }, null, 8, ["label", "hint", "modelValue", "onUpdate:modelValue"])), 64)),
                      (L(), b(O, null, AA(f, (r) => l(gA, {
                        key: r.key,
                        label: r.label,
                        hint: r.hint,
                        modelValue: `${a.value[r.key] || ""}`,
                        placeholder: "不含运请忽略",
                        "onUpdate:modelValue": (j) => a.value[r.key] = Number(j)
                      }, null, 8, ["label", "hint", "modelValue", "onUpdate:modelValue"])), 64)),
                      i("div", pc, [
                        l(x, {
                          size: "small",
                          type: "default",
                          onClick: G
                        }, {
                          default: y(() => [
                            DA(" 应用 ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])) : H("", !0)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), Vc = /* @__PURE__ */ V(Ec, [["__scopeId", "data-v-cda9d724"]]), eM = (C) => (iA("data-v-cc03af2e"), C = C(), cA(), C), Hc = { class: "info-section" }, Sc = { class: "attributes-group" }, Xc = /* @__PURE__ */ eM(() => /* @__PURE__ */ i("div", { class: "dice-hint" }, "🎲 3D6×5", -1)), Wc = /* @__PURE__ */ eM(() => /* @__PURE__ */ i("div", { class: "divider" }, null, -1)), hc = { class: "attributes-group" }, kc = /* @__PURE__ */ eM(() => /* @__PURE__ */ i("div", { class: "dice-hint" }, "🎲 (2D6+6)×5", -1)), Yc = { class: "attributes-actions" }, Jc = {
  key: 0,
  class: "ponits-sum"
}, Oc = { class: "web-only" }, qc = /* @__PURE__ */ Q({
  __name: "AttributesSection",
  props: {
    cheating: { type: Boolean }
  },
  setup(C) {
    const A = MA(), w = [
      { key: "str", label: "力量", hint: "STR" },
      { key: "con", label: "体质", hint: "CON" },
      { key: "dex", label: "敏捷", hint: "DEX" },
      { key: "app", label: "外貌", hint: "APP" },
      { key: "pow", label: "意志", hint: "POW" }
    ], M = [
      { key: "siz", label: "体型", hint: "SIZ" },
      { key: "edu", label: "教育", hint: "知识 EDU" },
      { key: "int", label: "智力", hint: "灵感 INT" }
    ], g = _(() => {
      if (!A)
        return 0;
      const { str: D, con: v, dex: o, app: n, pow: c, siz: t, edu: Z, int: U } = A.value.attributes, P = [D, v, o, n, c, t, Z, U];
      return P.every((T) => T) ? P.reduce((T, a) => T + (a || 0), 0) : 0;
    });
    function I(D, v) {
      A && (A.value.attributes[D] = v ? +v : void 0);
    }
    return (D, v) => z(A) ? (L(), $(LA, {
      key: 0,
      title: "属性",
      subTitle: "Characteristics"
    }, {
      default: y(() => [
        i("div", Hc, [
          i("div", Sc, [
            Xc,
            (L(), b(O, null, AA(w, (o) => {
              var n;
              return l(gA, {
                key: o.key,
                label: o.label,
                hint: o.hint,
                readonly: D.cheating,
                modelValue: `${((n = z(A)) == null ? void 0 : n.attributes[o.key]) ?? ""}`,
                "onUpdate:modelValue": (c) => I(o.key, c)
              }, null, 8, ["label", "hint", "readonly", "modelValue", "onUpdate:modelValue"]);
            }), 64))
          ]),
          Wc,
          i("div", hc, [
            kc,
            (L(), b(O, null, AA(M, (o) => {
              var n;
              return l(gA, {
                key: o.key,
                label: o.label,
                hint: o.hint,
                readonly: D.cheating,
                modelValue: `${((n = z(A)) == null ? void 0 : n.attributes[o.key]) ?? ""}`,
                "onUpdate:modelValue": (c) => I(o.key, c)
              }, null, 8, ["label", "hint", "readonly", "modelValue", "onUpdate:modelValue"]);
            }), 64)),
            i("div", Yc, [
              g.value ? (L(), b("div", Jc, "总点数 " + s(g.value), 1)) : H("", !0),
              i("div", Oc, [
                l(Vc)
              ])
            ])
          ])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), _c = /* @__PURE__ */ V(qc, [["__scopeId", "data-v-cc03af2e"]]), $c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAG+xJREFUeF7tXXuwzdUX3wh5/Sg9kEd5JnmFEuJKF1Oe08MjNV4jaUIxI5Q0lUncGJlKec3QlfSkyZSJROOVd1Qq8m5Q8rpRHr/5HN0z957vWut8977f7znnstbM+Ws/vvu7vvtz1t5rr/1ZBYwxF0w+li+//NKkp6cH9ganT582xYoVC6w/dNSjRw+TmZlJ9pmRkWGGDx/Olj399NPWY7nrrrvMypUryXa//PKLqVatmnWfLg3wbdq1a+fSNGXaFFCA5P4WCpDg5qYCJDhdOvekFsSrOrUgztPJ01AtSIxK1IIEN7nUggSnS+ee1IKoBXGePD4aqgVRC+JjmrhVUQvipjfrVrNmzTJ9+vQh233xxRembdu21n1yDVyXWC1btjTffPMN2W337t3NvHnz1IsV2FcKtqMDBw6YChUqkJ2yFuSGG24w+/btC3Ykjr0BHLNnzw4UIFdffbU5evSo1YiqV69ufv75Z7INwNGqVSur/lAZbly4em0FoJs/fz47FmzUky3482rfvj05DHzTmTNnJnuIkecDHAcPHlSA5NSAAiT8uakACV/HkSeoBfEqWi1IcJNPLQihS7UgwU0wrie1IOHrWC0Io2O1IMFNPrUgakGCm00WPV3SFqRixYpm7969pDpOnDhh1q9fb6Gqi1ULFChgLlygYyOrVq1qKleuTPbZr18/1uPhelDYqVMng/eIFWmM8OzNnTuXHOOWLVvMkCFDrHXSrFkzNthSGsuHH35ovv/+e/J5U6ZMMXXr1rUeS9ANlixZwrrg8U2nT59OPnL37t1m165d1sOR9NWoUSNTqlQpsk/M9f3795NlTm7e7777zjRp0sT6BaQGL7/8shk1ahRZJYxNeqCDz0Nnr732mhk2bJh1D++9957p1q2bdbtENnC1IJgLzz77bKBDxZwFSCgJfImlAAnu2ylAvLpUgBDzSy2IHejUgtjpSy2Inb5SprZaELUgviajWhBfaopWUgtipy+1IHb6SpnaakHyqQWR3LxhbNLHjRtnRo4cSU5cVzfvunXrzKlTp8g+09LSAgXJsWPHzMaNG2lXoeDeXr16tYG3h5KdO3eaPXv2kGVjxowxrVu3tn6Hpk2bmiuvvJJsh4DL8+fPe8ok92nJkiVN48aNyf5c3byJ3qRftm7eW2+91Wzbto38eH/++ae56qqrrCcY12DFihUGIe+2AhfvxIkTyWaI9J00aZJtl2J9ibQBZBUI97cRnLfgDIgSdfPaaDJO3TD2IAoQr9IVIF6dXLbnIAoQBUi2BnSTTlgoBYgCRAEiXLlVgChAFCAKEKudoO5BAtqDJNrNK23SXd288LBwEa9wKRctWtSjrcKFC7NBk7jDjkhZTrhIZXjSPvjgA7IZaEcnTJjAeoFWrVpFlknRvAju5CKjCxYsyEZUjx071gpsqFyvXj2zefNmsp3EatK3b18zY8YMsl2i3byI0gZxAyWXdDSvBBBuJsDVmZWVRRbj37dGjRpkGUgSOFYTMJr07NmTbJdo0gYQT/z666/WQOAaqJuX0EwYB4VhuHkVIN6PpwAJaIkl0f4oQLxKVgvi1YkeFAZmqI1RC2KnTNc76WpB1IJENaBLLF1iqZtXcPMqQBQgoQFEcvPCJfb222/brQni1G7Tpo3h6DJd3bxvvPGGOXToEO2+YyJs4eYdPXo02QYBjpybFxGvnMDNu2DBArK4efPmLGkDsjMh+pYSZK3CnRBKoK9KlSqRZa+//rr5448/yDLcAy9UqJDVd73++uvN448/TrZxdfPCG7h06VKr74bKUtTxgAEDWP7dwN28VhoMoHJ+IG1wjeaV1IO7Ik899ZQ1QFxVzp3juPbnukl3fZ5ru8CDFV0H4tpOAeLVnGRBXPWsAPFqzumg0PUDuLZTgChAXOeOn3ZqQfxoKY91dInlVaAusfI4qfw2VwuiFsTvXHGppxbERWuWbdSCXGYWpHTp0qwHRXKnhVG2cOFCs2HDBtaVmJ6eTpa9+eabrJt3xIgRLHnBCy+8QPaHlAlPPvkkWSYBBBGvXbt2JdtJpA2uXixEynJu3qlTp7JuXm6Tjnvq48ePJ8cPN+/AgQPZbwNXNSW33XabAT8yJWHMIalP6Pn48eP0WIwxNJu05T9osqpL5NUuF6b+/vtvU7x4cfJ1qlWrZhDRS4mUgi2MHIWuoSZ4B7ClUIJ3pxhPcP5TtmxZsg10vHXrVmuAJGu+2D73ks5yqwDxTgcFiB1EFCAx+lIL4uXMUgtiB6qUqq1LLO/nwHKPC9tRC2I3fdWCqAWJakD3IF7wKEAUIAoQwagUWLZsGenFcnW1SQbMtU+pXf369VkKURduXrg0cS+dEni3br/9drJMSkv38MMPs6nbQC2Ke+mUoGzo0KFk2fbt21kXdsOGDQ3c9JTgTj3niePcvH/99RerY+h/06ZN5LNAcsEROkjfNIw55NznhaAj1OyWeClXWwKI62ARWJiZmUk2z8jIMGA2oQRlHHhcx5LIPYjrGFOpXQEFSO7PoQAJzouVShPddSwKkBjNKUAUIDmnhAJEARLaJt31XzuV2ilAFCAKEAGRChAFiAJEAkhaWpp1sGLt2rUNCBGClJkzZ5o5c+aQXYJPlkoNhspS2axZs8yNN95I9tm5c2cygrNIkSJsKjhXV6HEzQsCjB07dpBd16xZkyUakFKwwTXMuVcl13fQbl7X+TF37lyWt1f63uBWa9asmetjyXZOB4VNmjQxa9euDXQgYNTACwYpIK6uU6cO2SXSr8G/HyuIZsWJcpAC9hG4eoMUKcstUsEh/N5WOIC4xmLZPj+7vit59aeffsqG0LuORQESozkFiHcqKUAs4aUWxE5hakHs9KUWhNCXLrHsJpEusbz60iWW3RyKJM/RPYh/pekexKurfL8HwX2Qtm3bkrMAV0Fxq5CS/LBJx11pLhYLSXlw7ZYSaZOO5DmIx6Ik6HB3/9DMXVNaYoFngKM6/eSTTwy8k0GKE0CkAXTp0sV8/PHHZBW4hp944gmy7KWXXmI5caXnARxLlixJCEBcM0y5fjCAAxG9lLgCxGUsIKvg+HzxJwRSCkrwbcCNRQlc8CCXsBUAhCOJwNzDMstW4GovX7482UwBEqMWyYulAPHOIQWIJRzVglgqTKiuFsSrHLUglvNLl1hehbkeFHKq1yWW5aTUPYhXA1KOQlf1qgVRCxLVgG7SvZNBAZJPAYKTdAS9UQI3G9xtlKgXy86WJBogRYsWNWfOnPEMEi5xhJtQEsYmHYfG+MPk5hDn5pW8WMjM3LhxY7LP/fv3s0GhCQ13dwUI3IFwC9qKdFDI9eVKHGc7tuz6OOsYNmyYa3PrdjgHqVq1qlW7MGKxwnDzWr2Uz8oKkBhFKUC8M0cB4hNNea2mFsSrQbUgdrNKcvPa9eSvtloQtSBxZ4pakLgqCqaCWhC1INka0D0IgSkFiAIk3wHEhXr0f//7n0GGIEqOHDkSCTOnBJmiuOC7cePGsXfBX331VbN48WKyT7gZuUA6yYv17bffmn///dfT57lz51gXIxLO4740JceOHTMbN24ky5CFCff4KZGoRyW7jTD+a6+9lqwi0XoOHjyYpRFNS0sj+wOtKpcNSsowhRN4LpAR3xPflZI9e/awSX7g+u7YsSPZrm7dumyiH9c1kFOwonSjENGU8EfbCkKcR40aZdssEuqeqGheaXCuGaZcN+nShSlpnC7Uo1J/rucgUp+X9I1CBYj300sp2BQgXn0pQIi/D7UgdsZTLYhXX/niyq1aELUg2RqQLkzpEsvuDzHCiaV7EP9KUwuiFsTXbNFNui81RSvpJt1OX05eLGRZWrNmDfkkaYlVsWJFU716dbJdmzZtTIsWLazdliNGjGBZHl2oR5FF6tSpU+Q4EKfFvTdck1xAJd4NEaqULFiwgKVxldy1EvWoNAV69eplEL1KybJly9imX3/9NVl2+PBhdvz41siuRQnugNeqVYssk6hHJZ24Uo+uWrWKjGLG4JwAIrl5EeretWtX8sURpsxx+obBi2X3X3GxNtKvZWVlkU0TfSfdZfxhtHENNQFhQ/v27ckh9enTx4CPORWkQoUK5uDBg/SfszHGmrxaAeLVZRg3ClNh8mAMChDLL6EAkQGCZUAyJKx0kwoQy6+pAFGAZGsAxHw4TadEl1iEVnQPYoxakIsTQwGiAIlqIOceRAFyCQGEyzAludNuvvlmg5tdlEhuXtCOTp06lWw3Y8YMNlJWGotrGee2lNy8uM/NualbtWplsvtMNkA2bdpEJgeC4iV9cSvtkydPshG0iNblslkhiJTjTb7vvvvY/PDSil/KuiW1W79+vUFUMiUPPfSQgbuaksBvFLousSy3QXmu7kJe7dfNm2yABE0cJykbIeZbtmwhq4BYvF27dnn+Vjk7cL1yi30zmE1sRQESo7EguHkVIBeVqgAJcA9ii+y81lcLklcNXmyvFsRSj7rESr4XS5dY3kmrSyxLICfSghQuXNj89ttv0RF+/vnnkcQ43KYx9lVKlSplcLHq3nvvjRYhvXXsleHsg0IFiALEEg7e6okCCFgMV69e7bk/DopP7Hf8yOnTpw1oQXMKvC5NmzbNdXdbAcJr09mCjB07lozFktyBIC/o378/OZoff/zR4K4CJdLm1dVd+8gjj1hTaWJs48ePJ/Oh499+9OjR5PgRcjFlyhSyrEqVKgYBeJCc7wmiCo5kgCNCiH0A+qBk0aJFucgUsgGCqOLdu3eTbeBm50guEDBaqFAhTzsAFPqiRHLzwi0+Z84csh1c0Vw2KFjA1q1bk+0KFixouJCaeC5sl1CcwKN5pX9EuOgGDRrk50/Tdx14StLT033XT0RFvwDJ61g4gEj9utwHcY3FksaBSN5+/fqRVfAHxZFXY/5wZ3DS8+DibdSokbXKFSDWKovfwC9AevfuzbKmZz8F1DmzZ8+2siAKEK8GFCDx523CavgFyBVXXGHAwyUJljxnz55VgPynAbUgltM41ZdYeJ0NGzYYhEiUKFEisn7GkgVRsL///ruvty1XrlyEjA/WBODDjccdO3Z4yPv8rLF1ieVL5dFKusSy05ev2pQz4rHHHou4aeG9AoskNqk20qBBgwipBbxZcBNPmzbN01wBwmtUl1g2sy3kuskONdE9SIB7kOeff5508yKCMyMjg9S1RNogfRzJi+VK2iBNRqxXOf5a8MKChCFW4Obl6IeOHj0qunmx6YakMkDgpubSqUnjllyr3Dd3dbvG0x83lvfff9/88MMP5HAkC4JDWO7Qlg1WBPMFWEgoQa43LkehBBBXdnepz0TS/uSXaF5XA4mDS9schdgbIR7LVpBWD1ccKIGL97nnniPLMIe4HIXIj8mdGWG+cjkKRdKGCwwcFSDe76MA8epEAULgWC2IVymXwo1CtSDe76pLrBidXAr3QWyXO9n1FSAKkKgGEhWs6DpZXdr5cfNK/SpAFCAKEAEhChALgKAqR2wgpWBDajOOhxYnx4j2pURKwTZhwoTI4Rgljz76qLnpppvIMriVDx06RJY988wznhByVERoB/YTlEjcvGXKlDE4zIPEc1O6WAc/bbItyNChQ1kihczMTANeXEqQJev8+fOeIri+mzdvTrbBqT7n0ZTcvCB6wOU6SqRoXqRuW7t2Ldlu+/bt7PeW3LwiNy/nxfLzQag6YeQHQRg5F7AH7iWOOQPhHNu2bSNfBWcBWGaFIckGCAC+cuVK8tXgiUO4SbIl30TzKkCCnyoKkPg6VYDE11GuGlICHbUg/pSZvcRSC+LVl3MslloQf5PPppZakPjaUgsSX0eXrAWxfPXAq6sFUQsS1UAqbtIDn/GWHSpAAgQIx82LKFhER9qK5MVC5qnBgweTXYL9o3LlymTZTz/9xGYAql+/PuuNQhAdYoUoQWQuXLM2cuDAATalGMYxefJkm+7i1oWbmvsGUgq2tLQ0s3z5crL/Zs2amSJFipBl8aJv4w44pgIIFii3MarB/Q63LCWgNMKPkg4dOrB3y6GTFStWkO0QHlWyZEmyTBone2EKzCX79u2z1UnEt+2Sgs36QT4aBO3m9Rus6GNovqqAO2vSpElk3Xnz5pnu3buTZYnkxfL1IgFWkrh5u3TpwjKluA5BAWKhOQWIhbJCqqoACVCxakECVGaKdKUACfBDKEACVGaKdKUACfBDKEACVGaKdKUACfBDKEACVGaKdJUyAClWrJi54447SLXUrl3b4G4wJUeOHGFdq0iD9dlnn1m72iQ3nFQmkTYgQjgrK8szFoR8I2KUEr8p2Gzm0oIFC1hd7tq1i+XYBf9xt27dyEe5pmDj+HCl90Hg4/Tp08kq+N7Dhw8ny6QUbHPnzmXvqyP9H3jCKOnRo0eEf8xWxBRsxhiS1UR6iJQGWmoXBjev9DycgdSpU4esEuaFKZsPBEaNYcOG2TSJ1JUAYt3Zfw3wpwiiahuREui4ZrlFXB53ZUIaG87g/BKC5+xHJG1QgORWeRBXbm0mmALEqy0FiM0MykNdtSB2ylML4tVXvqce1SWWHQik2goQBUhUA7oH8U4GBYgFQBCLBfI4Slx5scLYpIPdnbtyu3Xr1giLOiX5ASDYnyAeixIpFsvVpnAAAas8R1cK/ULPlISxSccc4pgVEQcIdkVbcdqkS8GKuKQPfl5bwYtx7mFkFQJxAyW4XJOd3iy2HInqARJb4aJ5QcxQvHhxsju4NBGPFaS4btKlMSCitUWLFtbDTBUL4ko9av3CPho4BSsqQHxo1mcVBYhXUQoQYvKoBfGJKB/V1IL4UJLPKmpBYhSlS6zkHxSqBVELEtWALrF0iRXVgG7SvZNBAaIASRpAcJLOuXk5ZsX8ssRCLBZ35RYUohx9qrT0ThU3b75fYvnc33iqhXUOkp6eTg4p6HB3KZrXVScIVJw4cSLZXO+ke9WSMuHurqQN0kRRgHi1owCx+2tRgNjpK3JIqBYkt9KU1cRyEgnVndy8ro9XC6IWxHXuZLdTC2KpQbUgXoWpBbGcRGpBvBpwyQ+im/TgJp5rTwm3IEFTj0ovjiuRHD2nRHspleFuOZf/WqIexd34EiVKeIYrZZgKAyC4Vz5w4EBSbW+99ZaZP38+WSZduW3VqpWBq9dW0I5ipj937hxL6Qk6T07/0vOlb7pnzx6zc+dO1rPXsWNHsgy64jKYuc4vNsutrXJTsb4EEG68OAugyBxQPwyAuOpNAohEXi09D2dAuHIcK7C2ZcuWJZtK4e6u75boK7cikIPOD+KqlDDaKUDstKoA8epLLUiMTtSCqAXJOSUUIAqQqAbUgqgFibvmUAuiFkQtiAATBYgCJBdAli1bRjIrurrFXF17rs9zzTDFjRP30U+dOkUWSxmmpPEfPnyYzdce16QxFVzdvE2bNiU9VXgM2Azh5o6VkydPGs61Wq9ePbN582ZylLj3z5WVL1/e1KpVi2zn6sUCp8Gdd95J9tmoUSNTqlQpa3U78WJZPyXEBq4n6dyQJGZF19fAZAZvbJDi6uYF6QTIJyhJFdIGV4BI+nVOA+1CPRrkh85rXwoQrwZdk3gqQIhNugIkt1LUgiT/TrpakLyajRzt1YKoBfEznXSJRWhJulGoexCvBnSJpUusuH82usTSJVbOScJ6sUqXLm2GDh1KTqigE87jIVKfixYtMhs2bCDHIi2xpFisESNGkO5OKpo1+8Gurmi0O3/+PDn+1atXG3DYUgJaVbhlKXnggQdYQopZs2axmamGDBliwEtMCcgSzp496ylCUp3x48eTbSQ3L4I758yZQ7Zr2LAhy6Mr7UE6dOhg4LKlRPo+AwYMMODgpQTMMidOnKD75DbpYdxJj/v3zVQAL+/s2bPJUkwujrzahbQBkwFLjSAFLt7MzEyyy4yMDDZNGco48uogxxevr0RH8yaa1SRw8up4Cg26XAEStEbt+lOAEPpSC2I3iaTaakHsdKkWxE5fkdQHusSyVFqA1dWCqAWJakD3IN7JoABRgChABIujACGUU7FiRbN3715SbYhqfeedd6xdbZLVv/vuu1k+2X79+hlkmaJEcvMim9WhQ4fIdgULFjQXLngDmUFQ8OKLLwa4QDGmZ8+e5t133yX7XLVqFevmlVzOcPNyOeBdBw/3KufmfeWVV8huy5Urx5JOuLrFkd/kq6++Ip+HqGLOzQuuYi5CGPMV85YSeAsDdfPi2L5Jkyau34Fsh48zatQossx1DyINEHn3EI6dCJE26dLzXbl5Xd/J5STd9VlhtANrTqdOnciuwbyyfv1668c6MSsqQOz0rACx05drbQUIoTnpoFAtiN1UUwvi1ZdaELs55FRbLYiT2qwbqQVRCxLVQCLzpFvP1CQ1UIAoQBQgAvgSChDJzZvoTbqrm1f6I0N0KnigYkVyTcLrNWXKFLLbKlWqmN69e5NliCq+//77rf9XkVwHkaaUPPjgg6ybF16/ypUrWz+Pi+aVOgIhBdzplNSoUSPi4g5SFi9ebNauXUt2iaWs5Obdv3+/9VAu2z2ItaaMMSA8wEenBPfAXQijpXFIAJHaueZJd9HJ1q1bDULeKUGUNRfK7/IstBk0aJABw3uiRAFioWkFiFdZChBiAiV6iRXGQaEFLqJVFSAKkKgGpHB3BYh3ougSy6sTXWK5/A0zbRIdauIydLUgakHUggjIUYAoQKIaSLSbF7yqI0eOJKdn//79zYwZM8iyJUuWmHvuucfFIFi3gVt4zZo1ZLsyZcqYBg0akGVLly5lI4SlFGzDhw83iDSlZMyYMaZ169ZkGQgRQLphKyCJ+OeffzzNEPnMkU5IOrnmmmtYYgmpT8nVDiIILsrc9n2z63/00UcskYV6sVy1atEOp97ceQAidjkQaDSvhZLzUBVh8CDTpkQBkgfF+m2qAPGrqeTUU4AkR+/RpypAkvwB4jxeAZLk76MASfIHUIC0TekvoABJ6c8TuYqre5AkfiMFSBKV7+PRTgCR3Ly44O50v7dAAZIoAe9QtWpVNgLV1c3bt29fs2vXLlJFnJvR1f2IVHCTJ08mnwXiiO3bt5NllSpVYjM+SW7eW265xVx33XVkn4g4RgQxJb169TJcVCuXgs2VfEFqhyBGjgjCx5y2rjJt2jRTs2ZNst2kSZPM8ePHg/NiWY8ujw1cY7Ek8uo8DsnTvGXLlmb58uWBdiu5eaUHIaoYoS+UIP3azp07yTIuDXSgL/VfZyDYxh9YokTKD3LZcvMqQLzTTwHi1YkCJAF/U2pB7JSsFsROX2JtXWLZKVOXWF596RKLmEO6xNIlVrYGFCAJAEj16tUj124pCeM+iG7S7SwnSBs6d+5MNlq3bp0BuyIlTnsQu6Elr7ZrCjZuxCBPy8rKIosRSQqQ5GfBO8ClTgnyM545c8ZThJRtILAOUsC1DDIOSkaPHm1AIGErAMfChQutASI9hw1WtB1csuorQOw0rwCx05cCJEZfakHUguScEgoQBUhUA7rE8loXBYgCRAEirLoUIAoQBUh+BwhOXXFYSImU/kA6BwGNKLwzsYJlBkVJinr5xYsFZkUuFgtuaoSbqBfL32b9//2MmtUsKa1FAAAAAElFTkSuQmCC", A2 = (C) => (iA("data-v-cbe022d6"), C = C(), cA(), C), C2 = { class: "luck-section-group" }, w2 = { class: "luck-section" }, M2 = /* @__PURE__ */ A2(() => /* @__PURE__ */ i("div", { class: "qr-section-header" }, "扫码车卡", -1)), g2 = { class: "qr-container" }, I2 = ["src"], D2 = /* @__PURE__ */ Q({
  __name: "LuckSection",
  setup(C) {
    const A = MA();
    return (w, M) => (L(), b("div", C2, [
      z(A) ? (L(), $(LA, {
        key: 0,
        title: "幸运",
        subTitle: "Luck"
      }, {
        default: y(() => [
          i("div", w2, [
            l(gA, {
              label: "幸运",
              modelValue: `${z(A).attributes.luc ?? ""}`,
              placeholder: "3D6×5",
              "onUpdate:modelValue": M[0] || (M[0] = (g) => z(A).attributes.luc = +g)
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      })) : H("", !0),
      l(LA, { class: "qr-section" }, {
        header: y(() => [
          M2
        ]),
        default: y(() => [
          i("div", g2, [
            i("img", {
              class: "qr-code",
              src: z($c),
              alt: "二维码渲染失败，请手动访问 https://masquevil.github.io/trpg-saikou/#/coc-card"
            }, null, 8, I2)
          ])
        ]),
        _: 1
      })
    ]));
  }
}), v2 = /* @__PURE__ */ V(D2, [["__scopeId", "data-v-cbe022d6"]]), hw = "https://masquevil.github.io/avatar-marker", o2 = "/g-data/shine.json", II = "/output", ng = {
  白: "white",
  银: "white",
  灰: "white",
  黑: "black",
  红: "red",
  赤: "red",
  黄: "yellow",
  金: "yellow",
  棕: "brown",
  褐: "brown",
  紫: "purple",
  蓝: "blue",
  碧: "blue",
  绿: "green",
  粉: "pink"
};
function n2(C) {
  for (let A = C.length - 1; A > 0; A--) {
    const w = Math.floor(Math.random() * (A + 1));
    [C[A], C[w]] = [C[w], C[A]];
  }
  return C;
}
const DI = [
  // age
  "young",
  "old",
  // sex
  "female",
  "male",
  // hair style
  "long hair",
  "short hair",
  "back hair",
  "ponytail hair",
  // hair color
  "white hair",
  "black hair",
  "red hair",
  "yellow hair",
  "brown hair",
  "purple hair",
  "blue hair",
  "green hair",
  "pink hair",
  // eye color
  "black eyes",
  "red eyes",
  "yellow eyes",
  "brown eyes",
  "purple eyes",
  "blue eyes",
  "green eyes",
  "pink eyes"
], vI = new Map(
  DI.map((C, A) => [C, 2 ** A])
);
let VC = "init", RC = [], HC = {};
const Bw = [];
function oI(C) {
  let A = 0;
  for (const w of C)
    A |= vI.get(w);
  return A;
}
async function nI() {
  if (VC === "finished")
    return {
      names: RC,
      data: HC
    };
  if (VC === "pending")
    return new Promise((w) => {
      Bw.push(w);
    });
  VC = "pending";
  const A = await (await fetch(`${hw}${o2}`)).json();
  for (RC = Object.keys(A.imageLabels), HC = RC.reduce((w, M) => {
    const g = A.imageLabels[M], I = oI(A.imageLabels[M]), D = `${hw}${II}/${M}.jpg`;
    return w[M] = {
      name: M,
      url: D,
      labels: g,
      binary: I
    }, w;
  }, {}), VC = "finished"; Bw.length; )
    Bw.shift()({
      names: RC,
      data: HC
    });
  return {
    names: RC,
    data: HC
  };
}
function i2({
  sex: C = "",
  age: A = "",
  description: w = ""
}) {
  const M = [];
  C.match(/女|girl|female/) && M.push("female"), (C.match(/男|boy/) || C.includes("male") && !C.includes("female")) && M.push("male");
  const g = Number(A);
  A && (g < 40 ? M.push("young") : M.push("old")), w.match(/长发|long hair/) && M.push("long hair"), w.match(/短发|short hair/) && M.push("short hair"), w.match(/马尾|ponytail/) && M.push("ponytail hair"), w.match(/背头|盘发|back hair/) && M.push("back hair");
  for (const I of w.matchAll(/(.)色?头?发/g)) {
    const D = I[1], v = ng[D];
    v && M.push(`${v} hair`);
  }
  for (const I of w.matchAll(
    /(white|black|red|yellow|brown|purple|blue|green|pink) hair/g
  )) {
    const D = I[1];
    M.push(`${D} hair`);
  }
  for (const I of w.matchAll(/(.)色?(?:眼|瞳)/g)) {
    const D = I[1], v = ng[D];
    v && M.push(`${v} eyes`);
  }
  for (const I of w.matchAll(
    /(black|red|yellow|brown|purple|blue|green|pink) eye(?:s)/g
  )) {
    const D = I[1];
    M.push(`${D} eyes`);
  }
  return M;
}
async function c2(C) {
  const A = i2(C), w = oI(A), M = [], g = [], { names: I, data: D } = await nI();
  return I.forEach((v) => {
    const o = D[v], n = o.binary & w, c = DI.filter(
      (t) => n & vI.get(t)
    ).length;
    M[c] ?? (M[c] = []), M[c].push(o);
  }), M.reverse().forEach((v) => {
    g.length >= 30 || g.push(...n2(v));
  }), g;
}
var iI = { exports: {} };
(function(C, A) {
  (function(w, M) {
    C.exports = M();
  })(Lg, function() {
    return function(w) {
      var M = {};
      function g(I) {
        if (M[I])
          return M[I].exports;
        var D = M[I] = { i: I, l: !1, exports: {} };
        return w[I].call(D.exports, D, D.exports, g), D.l = !0, D.exports;
      }
      return g.m = w, g.c = M, g.d = function(I, D, v) {
        g.o(I, D) || Object.defineProperty(I, D, { enumerable: !0, get: v });
      }, g.r = function(I) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(I, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(I, "__esModule", { value: !0 });
      }, g.t = function(I, D) {
        if (1 & D && (I = g(I)), 8 & D || 4 & D && typeof I == "object" && I && I.__esModule)
          return I;
        var v = /* @__PURE__ */ Object.create(null);
        if (g.r(v), Object.defineProperty(v, "default", { enumerable: !0, value: I }), 2 & D && typeof I != "string")
          for (var o in I)
            g.d(v, o, (function(n) {
              return I[n];
            }).bind(null, o));
        return v;
      }, g.n = function(I) {
        var D = I && I.__esModule ? function() {
          return I.default;
        } : function() {
          return I;
        };
        return g.d(D, "a", D), D;
      }, g.o = function(I, D) {
        return Object.prototype.hasOwnProperty.call(I, D);
      }, g.p = "", g(g.s = 0);
    }([function(w, M, g) {
      var I;
      function D(e) {
        return ["image/png", "image/jpeg", "image/gif"].some((K) => K === e);
      }
      g.r(M), g.d(M, "canvastoDataURL", function() {
        return o;
      }), g.d(M, "canvastoFile", function() {
        return n;
      }), g.d(M, "dataURLtoFile", function() {
        return t;
      }), g.d(M, "dataURLtoImage", function() {
        return Z;
      }), g.d(M, "downloadFile", function() {
        return U;
      }), g.d(M, "filetoDataURL", function() {
        return P;
      }), g.d(M, "imagetoCanvas", function() {
        return T;
      }), g.d(M, "urltoBlob", function() {
        return a;
      }), g.d(M, "urltoImage", function() {
        return d;
      }), g.d(M, "compress", function() {
        return G;
      }), g.d(M, "compressAccurately", function() {
        return u;
      }), g.d(M, "EImageType", function() {
        return I;
      }), function(e) {
        e.PNG = "image/png", e.JPEG = "image/jpeg", e.GIF = "image/gif";
      }(I || (I = {}));
      var v = function(e, K, f, F) {
        return new (f || (f = Promise))(function(N, x) {
          function m(r) {
            try {
              E(F.next(r));
            } catch (j) {
              x(j);
            }
          }
          function p(r) {
            try {
              E(F.throw(r));
            } catch (j) {
              x(j);
            }
          }
          function E(r) {
            var j;
            r.done ? N(r.value) : (j = r.value, j instanceof f ? j : new f(function(S) {
              S(j);
            })).then(m, p);
          }
          E((F = F.apply(e, K || [])).next());
        });
      };
      function o(e, K = 0.92, f = I.JPEG) {
        return v(this, void 0, void 0, function* () {
          return D(f) || (f = I.JPEG), e.toDataURL(f, K);
        });
      }
      function n(e, K = 0.92, f = I.JPEG) {
        return new Promise((F) => e.toBlob((N) => F(N), f, K));
      }
      var c = function(e, K, f, F) {
        return new (f || (f = Promise))(function(N, x) {
          function m(r) {
            try {
              E(F.next(r));
            } catch (j) {
              x(j);
            }
          }
          function p(r) {
            try {
              E(F.throw(r));
            } catch (j) {
              x(j);
            }
          }
          function E(r) {
            var j;
            r.done ? N(r.value) : (j = r.value, j instanceof f ? j : new f(function(S) {
              S(j);
            })).then(m, p);
          }
          E((F = F.apply(e, K || [])).next());
        });
      };
      function t(e, K) {
        return c(this, void 0, void 0, function* () {
          const f = e.split(",");
          let F = f[0].match(/:(.*?);/)[1];
          const N = atob(f[1]);
          let x = N.length;
          const m = new Uint8Array(x);
          for (; x--; )
            m[x] = N.charCodeAt(x);
          return D(K) && (F = K), new Blob([m], { type: F });
        });
      }
      function Z(e) {
        return new Promise((K, f) => {
          const F = new Image();
          F.onload = () => K(F), F.onerror = () => f(new Error("dataURLtoImage(): dataURL is illegal")), F.src = e;
        });
      }
      function U(e, K) {
        const f = document.createElement("a");
        f.href = window.URL.createObjectURL(e), f.download = K || Date.now().toString(36), document.body.appendChild(f);
        const F = document.createEvent("MouseEvents");
        F.initEvent("click", !1, !1), f.dispatchEvent(F), document.body.removeChild(f);
      }
      function P(e) {
        return new Promise((K) => {
          const f = new FileReader();
          f.onloadend = (F) => K(F.target.result), f.readAsDataURL(e);
        });
      }
      var R = function(e, K, f, F) {
        return new (f || (f = Promise))(function(N, x) {
          function m(r) {
            try {
              E(F.next(r));
            } catch (j) {
              x(j);
            }
          }
          function p(r) {
            try {
              E(F.throw(r));
            } catch (j) {
              x(j);
            }
          }
          function E(r) {
            var j;
            r.done ? N(r.value) : (j = r.value, j instanceof f ? j : new f(function(S) {
              S(j);
            })).then(m, p);
          }
          E((F = F.apply(e, K || [])).next());
        });
      };
      function T(e, K = {}) {
        return R(this, void 0, void 0, function* () {
          const f = Object.assign({}, K), F = document.createElement("canvas"), N = F.getContext("2d");
          let x, m;
          for (const p in f)
            Object.prototype.hasOwnProperty.call(f, p) && (f[p] = Number(f[p]));
          if (f.scale) {
            const p = f.scale > 0 && f.scale < 10 ? f.scale : 1;
            m = e.width * p, x = e.height * p;
          } else
            m = f.width || f.height * e.width / e.height || e.width, x = f.height || f.width * e.height / e.width || e.height;
          switch ([5, 6, 7, 8].some((p) => p === f.orientation) ? (F.height = m, F.width = x) : (F.height = x, F.width = m), f.orientation) {
            case 3:
              N.rotate(180 * Math.PI / 180), N.drawImage(e, -F.width, -F.height, F.width, F.height);
              break;
            case 6:
              N.rotate(90 * Math.PI / 180), N.drawImage(e, 0, -F.width, F.height, F.width);
              break;
            case 8:
              N.rotate(270 * Math.PI / 180), N.drawImage(e, -F.height, 0, F.height, F.width);
              break;
            case 2:
              N.translate(F.width, 0), N.scale(-1, 1), N.drawImage(e, 0, 0, F.width, F.height);
              break;
            case 4:
              N.translate(F.width, 0), N.scale(-1, 1), N.rotate(180 * Math.PI / 180), N.drawImage(e, -F.width, -F.height, F.width, F.height);
              break;
            case 5:
              N.translate(F.width, 0), N.scale(-1, 1), N.rotate(90 * Math.PI / 180), N.drawImage(e, 0, -F.width, F.height, F.width);
              break;
            case 7:
              N.translate(F.width, 0), N.scale(-1, 1), N.rotate(270 * Math.PI / 180), N.drawImage(e, -F.height, 0, F.height, F.width);
              break;
            default:
              N.drawImage(e, 0, 0, F.width, F.height);
          }
          return F;
        });
      }
      function a(e) {
        return fetch(e).then((K) => K.blob());
      }
      function d(e) {
        return new Promise((K, f) => {
          const F = new Image();
          F.onload = () => K(F), F.onerror = () => f(new Error("urltoImage(): Image failed to load, please check the image URL")), F.src = e;
        });
      }
      var B = function(e, K, f, F) {
        return new (f || (f = Promise))(function(N, x) {
          function m(r) {
            try {
              E(F.next(r));
            } catch (j) {
              x(j);
            }
          }
          function p(r) {
            try {
              E(F.throw(r));
            } catch (j) {
              x(j);
            }
          }
          function E(r) {
            var j;
            r.done ? N(r.value) : (j = r.value, j instanceof f ? j : new f(function(S) {
              S(j);
            })).then(m, p);
          }
          E((F = F.apply(e, K || [])).next());
        });
      };
      function G(e, K = {}) {
        return B(this, void 0, void 0, function* () {
          if (!(e instanceof Blob))
            throw new Error("compress(): First arg must be a Blob object or a File object.");
          if (typeof K != "object" && (K = Object.assign({ quality: K })), K.quality = Number(K.quality), Number.isNaN(K.quality))
            return e;
          const f = yield P(e);
          let F = f.split(",")[0].match(/:(.*?);/)[1], N = I.JPEG;
          D(K.type) && (N = K.type, F = K.type);
          const x = yield Z(f), m = yield T(x, Object.assign({}, K)), p = yield o(m, K.quality, N), E = yield t(p, F);
          return E.size > e.size ? e : E;
        });
      }
      function u(e, K = {}) {
        return B(this, void 0, void 0, function* () {
          if (!(e instanceof Blob))
            throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");
          if (typeof K != "object" && (K = Object.assign({ size: K })), K.size = Number(K.size), Number.isNaN(K.size) || 1024 * K.size > e.size)
            return e;
          K.accuracy = Number(K.accuracy), (!K.accuracy || K.accuracy < 0.8 || K.accuracy > 0.99) && (K.accuracy = 0.95);
          const f = K.size * (2 - K.accuracy) * 1024, F = 1024 * K.size, N = K.size * K.accuracy * 1024, x = yield P(e);
          let m = x.split(",")[0].match(/:(.*?);/)[1], p = I.JPEG;
          D(K.type) && (p = K.type, m = K.type);
          const E = yield Z(x), r = yield T(E, Object.assign({}, K));
          let j, S = 0.5;
          const X = [null, null];
          for (let h = 1; h <= 7; h++) {
            j = yield o(r, S, p);
            const wA = 0.75 * j.length;
            if (h === 7) {
              (f < wA || N > wA) && (j = [j, ...X].filter((ZA) => ZA).sort((ZA, aA) => Math.abs(0.75 * ZA.length - F) - Math.abs(0.75 * aA.length - F))[0]);
              break;
            }
            if (f < wA)
              X[1] = j, S -= Math.pow(0.5, h + 1);
            else {
              if (!(N > wA))
                break;
              X[0] = j, S += Math.pow(0.5, h + 1);
            }
          }
          const q = yield t(j, m);
          return q.size > e.size ? e : q;
        });
      }
    }]);
  });
})(iI);
var Z2 = iI.exports, SC = Z2;
const U2 = ["for"], t2 = ["id"], Gw = 132 * 2, jw = 172 * 2, e2 = /* @__PURE__ */ Q({
  __name: "UploadAvatarButtonWrapper",
  props: {
    id: {}
  },
  emits: ["uploaded"],
  setup(C, { emit: A }) {
    const w = A, M = MA();
    async function g(I) {
      const D = I.target, v = D.files[0];
      if (D.value = null, !v || !M)
        return;
      const o = await SC.filetoDataURL(v);
      let { width: n, height: c } = await Un(o);
      n > Gw && (c = c / n * Gw, n = Gw), c > jw && (n = n / c * jw, c = jw);
      const t = await SC.imagetoCanvas(await SC.urltoImage(o), {
        width: n,
        height: c
      }), Z = await SC.canvastoDataURL(t, 0.4);
      w("uploaded", Z);
    }
    return (I, D) => (L(), b("label", { for: I.id }, [
      i("input", {
        id: I.id,
        class: "input-file",
        type: "file",
        accept: "image/*",
        onChange: g
      }, null, 40, t2),
      ZC(I.$slots, "default", {}, void 0, !0)
    ], 8, U2));
  }
}), l2 = /* @__PURE__ */ V(e2, [["__scopeId", "data-v-d714e9db"]]), L2 = { class: "avatar-input-row" }, K2 = { class: "label" }, z2 = ["placeholder", "readonly", "value"], R2 = /* @__PURE__ */ Q({
  __name: "AvatarInputRow",
  props: {
    label: {},
    placeholder: {},
    char: { default: 5 },
    modelValue: { default: "" },
    readonly: { type: Boolean }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(C) {
    const w = xA({
      width: `calc(${C.char}em + 4px)`
    });
    return (M, g) => (L(), b("div", L2, [
      i("div", K2, s(M.label), 1),
      i("input", {
        type: "text",
        class: "input",
        style: NC(w),
        placeholder: M.placeholder,
        readonly: M.readonly,
        value: M.modelValue,
        onInput: g[0] || (g[0] = (I) => M.$emit("update:modelValue", I.target.value)),
        onFocus: g[1] || (g[1] = (I) => M.$emit("focus")),
        onBlur: g[2] || (g[2] = (I) => M.$emit("blur"))
      }, null, 44, z2)
    ]));
  }
}), dw = /* @__PURE__ */ V(R2, [["__scopeId", "data-v-2c6b2955"]]), f2 = (C) => (iA("data-v-185b8f78"), C = C(), cA(), C), F2 = { class: "avatar-modal-content" }, a2 = { class: "action-buttons" }, b2 = { key: 0 }, N2 = {
  key: 0,
  class: "avatar-input-rows"
}, r2 = { class: "refresh-row" }, P2 = { class: "refresh-row-inputs" }, T2 = ["disabled"], B2 = /* @__PURE__ */ f2(() => /* @__PURE__ */ i("div", { class: "avatar-input-rows-hint" }, "* 目前预设形象库中只有年轻女性", -1)), G2 = { class: "sd-avatars" }, j2 = ["onClick"], d2 = ["src"], u2 = /* @__PURE__ */ Q({
  __name: "AvatarModalContent",
  emits: ["finished"],
  setup(C, { emit: A }) {
    const w = A, M = MA();
    nI();
    const g = W([]), I = W(0), D = _(() => g.value.slice(
      I.value,
      I.value + 6
    ));
    function v(a) {
      M && (M.value.avatar = a, M.value.sdAvatar = "", w("finished"));
    }
    function o(a) {
      M && (M.value.sdAvatar = a.name, M.value.avatar = "", w("finished"));
    }
    const n = W(0);
    function c() {
      n.value = 3;
      const a = setInterval(() => {
        n.value--, n.value <= 0 && clearInterval(a);
      }, 1e3);
    }
    const t = _(() => {
      const { gender: a, age: d, stories: B } = (M == null ? void 0 : M.value) || {};
      return {
        sex: a,
        age: d,
        description: B == null ? void 0 : B.app
      };
    }), Z = _(() => JSON.stringify(t.value)), U = W(""), P = _(() => !!g.value.length && U.value !== Z.value);
    function R() {
      U.value = Z.value, c2(t.value).then((a) => {
        g.value = a, I.value = 0;
      }), c();
    }
    function T() {
      I.value += 6, I.value >= g.value.length && (I.value = 0), c();
    }
    return (a, d) => {
      const B = vA("el-icon");
      return L(), b("div", F2, [
        i("div", a2, [
          l(l2, { onUploaded: v }, {
            default: y(() => [
              l(Hw, {
                tag: "div",
                fullWidth: ""
              }, {
                default: y(() => [
                  DA(" 上传形象 ")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(Hw, {
            fullWidth: "",
            onClick: R,
            disabled: n.value > 0
          }, {
            default: y(() => [
              n.value ? (L(), b(O, { key: 0 }, [
                DA(s(`${n.value} ……`), 1)
              ], 64)) : (L(), b(O, { key: 1 }, [
                DA(s(P.value ? "形象描述已更新，重新匹配" : "匹配形象"), 1)
              ], 64))
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        g.value.length ? (L(), b("div", b2, [
          z(M) ? (L(), b("div", N2, [
            i("div", r2, [
              i("div", P2, [
                l(dw, {
                  label: "性别",
                  placeholder: "修改",
                  char: 2,
                  modelValue: z(M).gender,
                  "onUpdate:modelValue": d[0] || (d[0] = (G) => z(M).gender = G)
                }, null, 8, ["modelValue"]),
                l(dw, {
                  label: "年龄",
                  placeholder: "修改",
                  char: 2,
                  modelValue: z(M).age,
                  "onUpdate:modelValue": d[1] || (d[1] = (G) => z(M).age = G)
                }, null, 8, ["modelValue"])
              ]),
              !P.value && g.value.length > I.value ? (L(), b("button", {
                key: 0,
                class: "refresh-button",
                onClick: T,
                disabled: n.value > 0
              }, [
                l(B, null, {
                  default: y(() => [
                    l(z(Xg))
                  ]),
                  _: 1
                }),
                DA(" " + s(n.value ? `${n.value} ……` : "换一批"), 1)
              ], 8, T2)) : H("", !0)
            ]),
            l(dw, {
              label: "形象描述",
              placeholder: "修改",
              modelValue: z(M).stories.app,
              "onUpdate:modelValue": d[2] || (d[2] = (G) => z(M).stories.app = G)
            }, null, 8, ["modelValue"]),
            B2
          ])) : H("", !0),
          i("div", G2, [
            (L(!0), b(O, null, AA(D.value, (G) => (L(), b("div", {
              key: G.name,
              class: "sd-avatar-container",
              onClick: (u) => o(G)
            }, [
              i("img", {
                class: "sd-avatar",
                src: G.url
              }, null, 8, d2)
            ], 8, j2))), 128))
          ])
        ])) : H("", !0)
      ]);
    };
  }
}), x2 = /* @__PURE__ */ V(u2, [["__scopeId", "data-v-185b8f78"]]), m2 = (C) => (iA("data-v-441a49c1"), C = C(), cA(), C), s2 = {
  key: 0,
  class: "avatar-placeholder"
}, y2 = /* @__PURE__ */ m2(() => /* @__PURE__ */ i("div", null, "设置形象", -1)), Q2 = [
  y2
], p2 = /* @__PURE__ */ Q({
  __name: "AvatarSection",
  setup(C) {
    const A = MA(), w = BA(), M = W(!1), g = _(() => {
      const I = A != null && A.value.sdAvatar ? `${hw}${II}/${A == null ? void 0 : A.value.sdAvatar}.jpg` : "";
      return (A == null ? void 0 : A.value.avatar) || I || "";
    });
    return (I, D) => {
      var v;
      return L(), b("div", {
        class: CA(["avatar-section", {
          "printing-image": (v = z(w)) == null ? void 0 : v.printing
        }]),
        style: NC({ "background-image": g.value ? `url(${g.value})` : "none" }),
        onClick: D[2] || (D[2] = (o) => M.value = !0)
      }, [
        g.value ? H("", !0) : (L(), b("div", s2, Q2)),
        l(qA, {
          class: "coc-card-avatar-modal",
          title: "设置形象",
          modelValue: M.value,
          "onUpdate:modelValue": D[1] || (D[1] = (o) => M.value = o)
        }, {
          default: y(() => [
            l(x2, {
              onFinished: D[0] || (D[0] = (o) => M.value = !1)
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 6);
    };
  }
}), E2 = /* @__PURE__ */ V(p2, [["__scopeId", "data-v-441a49c1"]]), V2 = { class: "writable-unit" }, H2 = { class: "label" }, S2 = ["value", "readonly"], X2 = /* @__PURE__ */ Q({
  __name: "WritableUnit",
  props: {
    label: {},
    modelValue: { default: "" },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(C) {
    return (A, w) => (L(), b("div", V2, [
      i("div", H2, s(A.label), 1),
      i("input", {
        type: "text",
        class: "input",
        value: A.modelValue,
        readonly: A.readonly,
        onInput: w[0] || (w[0] = (M) => A.$emit("update:modelValue", M.target.value))
      }, null, 40, S2)
    ]));
  }
}), pA = /* @__PURE__ */ V(X2, [["__scopeId", "data-v-1f3adbbb"]]), W2 = {}, h2 = (C) => (iA("data-v-3d69914f"), C = C(), cA(), C), k2 = { class: "writable-divider" }, Y2 = /* @__PURE__ */ h2(() => /* @__PURE__ */ i("div", { class: "writable-divider-line" }, null, -1)), J2 = [
  Y2
];
function O2(C, A) {
  return L(), b("div", k2, J2);
}
const XC = /* @__PURE__ */ V(W2, [["render", O2], ["__scopeId", "data-v-3d69914f"]]), q2 = { class: "status-checkbox" }, _2 = ["checked"], $2 = { class: "label" }, AZ = /* @__PURE__ */ Q({
  __name: "StatusCheckbox",
  props: {
    label: {},
    checked: { type: Boolean, default: !1 }
  },
  setup(C) {
    return (A, w) => (L(), b("label", q2, [
      i("input", {
        type: "checkbox",
        class: "checkbox",
        checked: A.checked
      }, null, 8, _2),
      i("div", $2, s(A.label), 1)
    ]));
  }
}), EA = /* @__PURE__ */ V(AZ, [["__scopeId", "data-v-05b9ad5f"]]), CZ = {
  key: 0,
  class: "computed-sections"
}, wZ = { class: "units-section" }, MZ = { class: "units-section" }, gZ = { class: "units-section" }, IZ = { class: "body-status-section" }, DZ = { class: "san-status-section" }, vZ = /* @__PURE__ */ Q({
  __name: "DeriveSections",
  setup(C) {
    const A = MA();
    function w(g, I, D) {
      !A || !A.value.deriveAttributes || (A.value.deriveAttributes[g][I] = D || void 0);
    }
    const M = _(() => {
      var n;
      if (!A || !A.value.attributes.pow)
        return "";
      const g = (n = A.value.skillPoints.find(([c]) => c === "克苏鲁神话")) == null ? void 0 : n[1], { p: I = 0, i: D = 0, g: v = 0 } = g || {};
      return `${99 - (g ? I + D + v : 0)}`;
    });
    return (g, I) => z(A) ? (L(), b("div", CZ, [
      l(LA, {
        title: "理智值",
        subTitle: "Sanity"
      }, {
        default: y(() => {
          var D, v, o, n;
          return [
            i("div", wZ, [
              l(pA, {
                label: "当前理智",
                modelValue: `${((v = (D = z(A).deriveAttributes) == null ? void 0 : D.sanity) == null ? void 0 : v.now) ?? ""}`,
                "onUpdate:modelValue": I[0] || (I[0] = (c) => w("sanity", "now", c))
              }, null, 8, ["modelValue"]),
              l(XC),
              l(pA, {
                label: "起始理智",
                modelValue: `${((n = (o = z(A).deriveAttributes) == null ? void 0 : o.sanity) == null ? void 0 : n.start) ?? ""}`,
                "onUpdate:modelValue": I[1] || (I[1] = (c) => w("sanity", "start", c))
              }, null, 8, ["modelValue"]),
              l(XC),
              l(pA, {
                label: "最大理智",
                modelValue: M.value,
                readonly: ""
              }, null, 8, ["modelValue"])
            ])
          ];
        }),
        _: 1
      }),
      l(LA, {
        title: "生命值",
        subTitle: "HP"
      }, {
        default: y(() => {
          var D, v, o, n;
          return [
            i("div", MZ, [
              l(pA, {
                label: "当前生命",
                modelValue: `${((v = (D = z(A).deriveAttributes) == null ? void 0 : D.hp) == null ? void 0 : v.now) ?? ""}`,
                "onUpdate:modelValue": I[2] || (I[2] = (c) => w("hp", "now", c))
              }, null, 8, ["modelValue"]),
              l(XC),
              l(pA, {
                label: "最大生命",
                modelValue: `${((n = (o = z(A).deriveAttributes) == null ? void 0 : o.hp) == null ? void 0 : n.start) ?? ""}`,
                "onUpdate:modelValue": I[3] || (I[3] = (c) => w("hp", "start", c))
              }, null, 8, ["modelValue"])
            ])
          ];
        }),
        _: 1
      }),
      l(LA, {
        title: "魔法值",
        subTitle: "MP"
      }, {
        default: y(() => {
          var D, v, o, n;
          return [
            i("div", gZ, [
              l(pA, {
                label: "当前魔法",
                modelValue: `${((v = (D = z(A).deriveAttributes) == null ? void 0 : D.mp) == null ? void 0 : v.now) ?? ""}`,
                "onUpdate:modelValue": I[4] || (I[4] = (c) => w("mp", "now", c))
              }, null, 8, ["modelValue"]),
              l(XC),
              l(pA, {
                label: "最大魔法",
                modelValue: `${((n = (o = z(A).deriveAttributes) == null ? void 0 : o.mp) == null ? void 0 : n.start) ?? ""}`,
                "onUpdate:modelValue": I[5] || (I[5] = (c) => w("mp", "start", c))
              }, null, 8, ["modelValue"])
            ])
          ];
        }),
        _: 1
      }),
      l(LA, { title: "身体状态" }, {
        default: y(() => [
          i("div", IZ, [
            l(EA, { label: "重伤" }),
            l(EA, { label: "昏迷" }),
            l(EA, { label: "濒死" }),
            l(EA, { label: "死亡" })
          ])
        ]),
        _: 1
      }),
      l(LA, {
        title: "精神状态",
        class: "col-0"
      }, {
        default: y(() => [
          i("div", DZ, [
            l(EA, { label: "临时疯狂" }),
            l(EA, { label: "永久疯狂" }),
            l(EA, { label: "不定期疯狂" })
          ])
        ]),
        _: 1
      })
    ])) : H("", !0);
  }
}), oZ = /* @__PURE__ */ V(vZ, [["__scopeId", "data-v-b3425134"]]), cI = (C) => (iA("data-v-fa5add12"), C = C(), cA(), C), nZ = {
  key: 0,
  class: "suggestion-content"
}, iZ = /* @__PURE__ */ cI(() => /* @__PURE__ */ i("span", null, "默认本职技能：", -1)), cZ = { class: "multi-skill-text" }, ZZ = /* @__PURE__ */ cI(() => /* @__PURE__ */ i("span", null, "、", -1)), UZ = /* @__PURE__ */ Q({
  __name: "HintSection",
  setup(C) {
    const A = Yg(), w = BA();
    return (M, g) => {
      var I, D;
      return L(), b("div", {
        class: CA(["hint-section", {
          "printing-image": (I = z(w)) == null ? void 0 : I.printing
        }])
      }, [
        (D = z(A)) != null && D.text ? (L(), b("div", nZ, [
          iZ,
          (L(!0), b(O, null, AA(z(A).multiSkillTexts, (v) => (L(), b(O, { key: v }, [
            i("span", cZ, s(v), 1),
            ZZ
          ], 64))), 128)),
          i("span", null, s(z(A).text), 1)
        ])) : H("", !0)
      ], 2);
    };
  }
}), tZ = /* @__PURE__ */ V(UZ, [["__scopeId", "data-v-fa5add12"]]), eZ = { class: "sox-checkbox" }, lZ = ["checked"], LZ = /* @__PURE__ */ Q({
  __name: "SoxCheckbox",
  props: {
    checked: { type: Boolean, default: !1 },
    xOnFalse: { type: Boolean, default: !1 }
  },
  emits: ["check", "change"],
  setup(C, { emit: A }) {
    const w = C, M = A, g = W(w.checked);
    sA(
      () => w.checked,
      () => {
        g.value = w.checked;
      }
    );
    function I(D) {
      const v = D.target.checked;
      g.value = v, M("check", v, D), M("change", D);
    }
    return (D, v) => {
      const o = vA("el-icon");
      return L(), b("label", eZ, [
        l(o, { size: "0.9em" }, {
          default: y(() => [
            g.value ? (L(), $(z(on), { key: 0 })) : H("", !0),
            !g.value && D.xOnFalse ? (L(), $(z(Vo), { key: 1 })) : H("", !0)
          ]),
          _: 1
        }),
        i("input", {
          type: "checkbox",
          class: "sox-checkbox-input",
          checked: g.value,
          onChange: I
        }, null, 40, lZ)
      ]);
    };
  }
}), lM = /* @__PURE__ */ V(LZ, [["__scopeId", "data-v-7a23fb3d"]]), KZ = { class: "skill-td-label" }, zZ = { class: "skill-td-checkbox-label" }, RZ = {
  key: 0,
  class: "child-skill-display"
}, fZ = { key: 0 }, FZ = { class: "child-skill-input-container" }, aZ = ["value"], bZ = {
  key: 0,
  class: "child-skill-options"
}, NZ = ["onClick"], rZ = {
  key: 1,
  class: "skill-td-label-comments"
}, PZ = /* @__PURE__ */ Q({
  __name: "SkillTdLabel",
  props: {
    skillName: {},
    comments: {},
    childSkillData: {}
  },
  emits: ["selectChildSkill"],
  setup(C, { emit: A }) {
    const w = C, M = MA(), g = PC("viewData"), I = A, D = W(!1), v = _(
      () => g == null ? void 0 : g.showingChildSkills.get(w.skillName)
    ), o = _(() => ["母语", "外语"].includes(w.skillName) ? [
      ...(g == null ? void 0 : g.showingChildSkills.get("母语")) || [],
      ...(g == null ? void 0 : g.showingChildSkills.get("外语")) || []
    ] : v.value), n = _(() => !M || !g ? !1 : M.value.proSkills.some((U) => {
      var a;
      if (typeof U == "string")
        return U === w.skillName;
      const [P, R, T] = U;
      return P === w.skillName && T === ((a = w.childSkillData) == null ? void 0 : a.place);
    }));
    function c(U) {
      if (!(!w.childSkillData || !v.value)) {
        if (n.value && M) {
          const P = M.value.proSkills.find(
            ([R, T, a]) => {
              var d;
              return R === w.skillName && a === ((d = w.childSkillData) == null ? void 0 : d.place);
            }
          );
          P && typeof P != "string" && (P[1] = U);
        }
        v.value[w.childSkillData.place] = U;
      }
    }
    function t(U) {
      c(U.name), I("selectChildSkill", U), D.value = !1;
    }
    function Z(U) {
      if (M)
        if (U) {
          let P = w.skillName;
          w.childSkillData && (P = [
            w.skillName,
            w.childSkillData.name,
            w.childSkillData.place
          ]), M.value.proSkills.push(P);
        } else
          M.value.proSkills = M.value.proSkills.filter((P) => {
            if (!w.childSkillData)
              return P !== w.skillName;
            const [R, T, a] = P;
            return R !== w.skillName || a !== w.childSkillData.place;
          });
    }
    return (U, P) => {
      var R, T;
      return L(), b("div", KZ, [
        i("label", zZ, [
          l(lM, {
            checked: n.value,
            onCheck: Z
          }, null, 8, ["checked"])
        ]),
        i("div", null, s(U.skillName), 1),
        U.childSkillData ? (L(), b("div", RZ, [
          U.skillName ? (L(), b("div", fZ, ":")) : H("", !0),
          $A((L(), b("div", FZ, [
            i("input", {
              type: "text",
              class: "child-skill-input",
              value: (R = v.value) == null ? void 0 : R[U.childSkillData.place],
              onInput: P[0] || (P[0] = (a) => c(a.target.value)),
              onFocus: P[1] || (P[1] = (a) => D.value = !0)
            }, null, 40, aZ),
            (T = U.childSkillData.list) != null && T.length ? $A((L(), b("div", bZ, [
              (L(!0), b(O, null, AA(U.childSkillData.list, (a) => {
                var d;
                return L(), b("div", {
                  key: a.name,
                  class: CA(["child-skill-option", {
                    "child-skill-option-existed": (d = o.value) == null ? void 0 : d.includes(
                      a.name
                    )
                  }]),
                  onClick: (B) => t(a)
                }, s(a.name), 11, NZ);
              }), 128))
            ], 512)), [
              [lg, D.value]
            ]) : H("", !0)
          ])), [
            [z(tM), () => D.value = !1]
          ])
        ])) : H("", !0),
        U.comments ? (L(), b("div", rZ, s(U.comments), 1)) : H("", !0)
      ]);
    };
  }
}), TZ = /* @__PURE__ */ V(PZ, [["__scopeId", "data-v-bbad9aee"]]), BZ = ["value"], GZ = /* @__PURE__ */ Q({
  __name: "BaseTdInput",
  props: {
    value: { default: "" }
  },
  emits: ["input", "focus"],
  setup(C, { emit: A }) {
    const w = A;
    function M(g) {
      g.target.select(), w("focus", g);
    }
    return (g, I) => (L(), b("input", {
      type: "text",
      class: "base-td-input",
      value: g.value,
      onInput: I[0] || (I[0] = (D) => g.$emit("input", D.target.value)),
      onFocus: M
    }, null, 40, BZ));
  }
}), SA = /* @__PURE__ */ V(GZ, [["__scopeId", "data-v-878b7cee"]]), jZ = { class: "skill-td-input" }, dZ = /* @__PURE__ */ Q({
  __name: "SkillTdInput",
  props: {
    value: { default: "" },
    checkable: { type: Boolean, default: !1 },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["input", "check"],
  setup(C) {
    return (A, w) => (L(), b("div", jZ, [
      A.checkable ? (L(), $(lM, {
        key: 0,
        class: "skill-td-input-checkbox",
        checked: A.checked,
        onCheck: w[0] || (w[0] = (M) => A.$emit("check", M))
      }, null, 8, ["checked"])) : H("", !0),
      l(SA, {
        class: "skill-td-input-input",
        value: A.value,
        onInput: w[1] || (w[1] = (M) => A.$emit("input", M))
      }, null, 8, ["value"])
    ]));
  }
}), WC = /* @__PURE__ */ V(dZ, [["__scopeId", "data-v-f5f16aad"]]), uZ = (C) => (iA("data-v-42f36190"), C = C(), cA(), C), xZ = { class: "skill-table" }, mZ = /* @__PURE__ */ uZ(() => /* @__PURE__ */ i("thead", null, [
  /* @__PURE__ */ i("tr", null, [
    /* @__PURE__ */ i("th", { class: "skill-th th-deep" }),
    /* @__PURE__ */ i("th", { class: "skill-th th-deep th-skill" }, [
      /* @__PURE__ */ i("div", { class: "th-skill-label" }, [
        /* @__PURE__ */ i("div", { class: "th-skill-label-pro" }, [
          /* @__PURE__ */ i("span", {
            class: "th-skill-label-pro-text",
            style: { "transform-origin": "50% 40%" }
          }, " 本 "),
          /* @__PURE__ */ i("span", {
            class: "th-skill-label-pro-text",
            style: { "transform-origin": "0% 40%" }
          }, " 职 "),
          /* @__PURE__ */ i("span", {
            class: "th-skill-label-pro-text",
            style: { "transform-origin": "50% 10%" }
          }, " 技 "),
          /* @__PURE__ */ i("span", {
            class: "th-skill-label-pro-text",
            style: { "transform-origin": "0% 10%" }
          }, " 能 ")
        ]),
        /* @__PURE__ */ DA(" 技能 ")
      ])
    ]),
    /* @__PURE__ */ i("th", { class: "skill-th th-light" }, "基础%"),
    /* @__PURE__ */ i("th", { class: "skill-th th-deep" }, "职业%"),
    /* @__PURE__ */ i("th", { class: "skill-th th-light" }, "兴趣%"),
    /* @__PURE__ */ i("th", { class: "skill-th th-deep" }, [
      /* @__PURE__ */ i("div", { class: "th-grow" }, "成长%")
    ]),
    /* @__PURE__ */ i("th", { class: "skill-th th-light" }, "成功率%")
  ])
], -1)), sZ = ["rowspan"], yZ = {
  key: 0,
  class: "init-placeholder"
}, QZ = { class: "init-placeholder-content" }, pZ = { key: 1 }, EZ = {
  key: 0,
  class: "total-separation"
}, VZ = { key: 1 }, HZ = /* @__PURE__ */ Q({
  __name: "SkillTable",
  props: {
    data: {},
    suggestion: {}
  },
  setup(C) {
    const A = C, w = MA(), M = cM(), g = BA();
    function I(c, t) {
      return c.reduce(
        (U, P) => {
          const R = P.groupSkills.reduce((T, a, d) => {
            const B = P.groupName === "特殊";
            let G = a.init;
            w && a.name in ww && (G = ww[a.name](w.value));
            const u = B || d === 0, e = a.name, K = v(e), f = (K == null ? void 0 : K[1]) || {}, [F, N] = (t == null ? void 0 : t.wealth) ?? [-1, -1], x = e === "信用评级" && F >= 0 && N >= 0 ? `(${F}~${N})` : "", m = n(f, G);
            let p = {
              key: a.name,
              skillName: a.name,
              skillKey: a.name,
              comments: x,
              init: G,
              initPlaceholder: a.initPlaceholder,
              points: f,
              total: m,
              totalSeparation: [m, ~~(m / 2), ~~(m / 5)],
              ...u ? {
                isGroupStart: u,
                groupName: P.groupName,
                groupSize: P.groupSkills.length
              } : {},
              ...B ? { isSpecialGroup: B, groupSize: 1 } : {}
            }, E = [...T], r = [p];
            if (a.group) {
              const j = a.group.show.length, S = E.find((X) => X.isGroupStart) || p;
              S.groupSize += j - 1, r = a.group.show.map((X, q) => {
                var CC, QA, dA;
                const h = ((CC = M == null ? void 0 : M.showingChildSkills.get(a.name)) == null ? void 0 : CC[q]) ?? X, wA = (QA = a.group) == null ? void 0 : QA.skills.find(
                  ({ name: bA }) => bA === h
                );
                let ZA = (wA == null ? void 0 : wA.init) ?? p.init;
                const aA = [
                  a.name,
                  h,
                  q
                ], UA = v(aA), jA = (UA == null ? void 0 : UA[1]) || {};
                return w && !a.name && (ZA = jA.b || 0), {
                  ...p,
                  // group info
                  isGroupStart: q ? !1 : p.isGroupStart,
                  // skill info
                  key: `${a.name}:_:${q}`,
                  skillKey: aA,
                  init: ZA,
                  points: jA,
                  total: n(jA, ZA),
                  // child skill info
                  childSkillData: {
                    name: h,
                    place: q,
                    list: (dA = a.group) == null ? void 0 : dA.skills
                  }
                };
              });
            }
            return [...E, ...r];
          }, []);
          return [...U, ...R];
        },
        []
      );
    }
    const D = _(() => I(A.data, A.suggestion));
    function v(c) {
      if (w)
        return w.value.skillPoints.find((t) => {
          const [Z] = t;
          if (typeof c == "string")
            return c === Z;
          const [U, P, R] = Z, [T, a, d] = c;
          return U === T && R === d;
        });
    }
    function o(c, t, Z) {
      if (!w)
        return;
      let U = v(c);
      U || (U = [typeof c == "string" ? c : [...c], {}], w.value.skillPoints.push(U));
      const P = U[1];
      if (typeof Z == "boolean")
        P.c = Z;
      else {
        const R = t;
        Z ? P[R] = Number(Z) : delete P[R];
      }
    }
    function n(c, t) {
      const { p: Z = 0, i: U = 0, g: P = 0 } = c;
      return t + Number(Z) + Number(U) + Number(P);
    }
    return (c, t) => (L(), b("table", xZ, [
      mZ,
      i("tbody", null, [
        (L(!0), b(O, null, AA(D.value, (Z, U) => {
          var P;
          return L(), b("tr", {
            key: Z.skillName
          }, [
            Z.isGroupStart ? (L(), b("td", {
              key: 0,
              rowspan: Z.groupSize,
              class: CA(["skill-td td-group-name", {
                "td-group-name-visible": !Z.isSpecialGroup,
                "td-color-1": Z.isSpecialGroup && U % 2,
                "td-color-2": Z.isSpecialGroup && (U + 1) % 2
              }])
            }, s(Z.isSpecialGroup ? "" : Z.groupName), 11, sZ)) : H("", !0),
            i("td", {
              class: CA(["skill-td td-skill-name", {
                "td-skill-name-special": Z.isSpecialGroup,
                "td-color-1": U % 2,
                "td-color-2": (U + 1) % 2
              }])
            }, [
              l(TZ, {
                skillName: Z.skillName,
                comments: Z.comments,
                childSkillData: Z.childSkillData
              }, null, 8, ["skillName", "comments", "childSkillData"])
            ], 2),
            i("td", {
              class: CA(["skill-td", {
                "td-color-0": U % 2,
                "td-color-1": (U + 1) % 2
              }])
            }, [
              !Z.init && Z.initPlaceholder ? (L(), b("div", yZ, [
                i("span", QZ, s(Z.initPlaceholder), 1)
              ])) : Z.groupName !== "其它" ? (L(), b("span", pZ, s(Z.init), 1)) : (L(), $(WC, {
                key: 2,
                value: `${Z.points.b ?? ""}`,
                onInput: (R) => o(Z.skillKey, "b", R)
              }, null, 8, ["value", "onInput"]))
            ], 2),
            i("td", {
              class: CA(["skill-td", {
                "td-color-1": U % 2,
                "td-color-2": (U + 1) % 2
              }])
            }, [
              l(WC, {
                value: `${Z.points.p ?? ""}`,
                onInput: (R) => o(Z.skillKey, "p", R)
              }, null, 8, ["value", "onInput"])
            ], 2),
            i("td", {
              class: CA(["skill-td", {
                "td-color-0": U % 2,
                "td-color-1": (U + 1) % 2
              }])
            }, [
              l(WC, {
                value: `${Z.points.i ?? ""}`,
                onInput: (R) => o(Z.skillKey, "i", R)
              }, null, 8, ["value", "onInput"])
            ], 2),
            i("td", {
              class: CA(["skill-td", {
                "td-color-1": U % 2,
                "td-color-2": (U + 1) % 2
              }])
            }, [
              l(WC, {
                checkable: !0,
                checked: Z.points.c,
                value: `${Z.points.g ?? ""}`,
                onInput: (R) => o(Z.skillKey, "g", R),
                onCheck: (R) => o(Z.skillKey, "c", R)
              }, null, 8, ["checked", "value", "onInput", "onCheck"])
            ], 2),
            i("td", {
              class: CA(["skill-td", {
                "td-color-0": U % 2,
                "td-color-1": (U + 1) % 2
              }])
            }, [
              (P = z(g)) != null && P.showTotalSeparation ? (L(), b("span", EZ, [
                (L(!0), b(O, null, AA(Z.totalSeparation, (R, T) => (L(), b("span", {
                  key: T,
                  class: "total-sep"
                }, s(R), 1))), 128))
              ])) : Z.total !== Z.init ? (L(), b("span", VZ, s(Z.total), 1)) : H("", !0)
            ], 2)
          ]);
        }), 128))
      ])
    ]));
  }
}), ig = /* @__PURE__ */ V(HZ, [["__scopeId", "data-v-42f36190"]]), LM = (C) => (iA("data-v-93a79d61"), C = C(), cA(), C), SZ = { class: "header" }, XZ = { class: "header-left points-container" }, WZ = { class: "point-container" }, hZ = {
  key: 0,
  class: "point-rest"
}, kZ = { class: "point-container" }, YZ = {
  key: 0,
  class: "point-rest"
}, JZ = /* @__PURE__ */ LM(() => /* @__PURE__ */ i("h1", { class: "heading" }, [
  /* @__PURE__ */ i("span", { class: "title" }, "技能表"),
  /* @__PURE__ */ i("span", { class: "subtitle" }, "Skill")
], -1)), OZ = { class: "header-right points-container" }, qZ = /* @__PURE__ */ LM(() => /* @__PURE__ */ i("div", null, "技能成功率上限", -1)), _Z = { class: "point-container" }, $Z = { class: "point-container" }, AU = { class: "skill-section-body" }, CU = /* @__PURE__ */ LM(() => /* @__PURE__ */ i("div", { class: "divider" }, null, -1)), cg = 6, wU = /* @__PURE__ */ Q({
  __name: "SkillSection",
  setup(C) {
    const A = MA(), w = Yg(), M = BA();
    function g() {
      const { pro: n, interest: c } = (A == null ? void 0 : A.value.pointValues) || {};
      return {
        pro: {
          point: Number(n || 0),
          str: n || ""
        },
        interest: {
          point: Number(c || 0),
          str: c || ""
        }
      };
    }
    const I = xA(g()), D = _(() => {
      let n = 0, c = 0;
      return A == null || A.value.skillPoints.forEach(([t, Z]) => {
        n += Z.p || 0, c += Z.i || 0;
      }), {
        proPoint: I.pro.point - n,
        interestPoint: I.interest.point - c
      };
    });
    function v(n, c = "") {
      const t = I[n], Z = A == null ? void 0 : A.value.pointValues[n];
      if (t.str = Z || c, t.str) {
        const U = Number(t.str);
        t.point = Number.isNaN(U) ? 0 : U;
      } else
        t.point = 0;
    }
    function o(n, c) {
      A && A.value.pointValues[n] !== c && (A.value.pointValues[n] = c);
    }
    return sA(
      () => ({
        job: A == null ? void 0 : A.value.job,
        attributes: A == null ? void 0 : A.value.attributes
      }),
      ({ job: n, attributes: c }) => {
        const { point: t } = Vg(n, c);
        t && v("pro", `${t > 0 ? t : ""}`);
        const Z = c == null ? void 0 : c.int, U = Z ? `${Z * 2}` : "";
        U && v("interest", U);
      },
      { deep: !0 }
    ), sA(
      () => ({
        pointValues: A == null ? void 0 : A.value.pointValues,
        pro: A == null ? void 0 : A.value.pointValues.pro,
        interest: A == null ? void 0 : A.value.pointValues.interest
      }),
      ({ pointValues: n, pro: c, interest: t }, { pointValues: Z, pro: U, interest: P }) => {
        if (n !== Z) {
          v("pro", c), v("interest", t);
          return;
        }
        c !== U && v("pro", c), t !== P && v("interest", t);
      },
      { deep: !0 }
    ), (n, c) => {
      var t;
      return L(), $(LA, {
        class: CA(["skill-section", {
          "printing-image": (t = z(M)) == null ? void 0 : t.printing
        }])
      }, {
        header: y(() => {
          var Z;
          return [
            i("div", SZ, [
              i("div", XZ, [
                i("div", WZ, [
                  l(gA, {
                    class: "point-writer",
                    label: "职业点数",
                    placeholder: (Z = z(A)) != null && Z.job ? "问KP" : "",
                    char: 3,
                    modelValue: I.pro.str,
                    "onUpdate:modelValue": c[0] || (c[0] = (U) => o("pro", U))
                  }, null, 8, ["placeholder", "modelValue"]),
                  I.pro.point > 0 ? (L(), b("div", hZ, " 剩余: " + s(D.value.proPoint), 1)) : H("", !0)
                ]),
                i("div", kZ, [
                  l(gA, {
                    class: "point-writer",
                    label: "兴趣点数",
                    char: 3,
                    modelValue: I.interest.str,
                    "onUpdate:modelValue": c[1] || (c[1] = (U) => o("interest", U))
                  }, null, 8, ["modelValue"]),
                  I.interest.point > 0 ? (L(), b("div", YZ, " 剩余: " + s(D.value.interestPoint), 1)) : H("", !0)
                ])
              ]),
              JZ,
              i("div", OZ, [
                qZ,
                i("div", _Z, [
                  l(gA, {
                    class: "point-writer",
                    label: "本职",
                    char: 2,
                    modelValue: "70"
                  })
                ]),
                i("div", $Z, [
                  l(gA, {
                    class: "point-writer",
                    label: "其它",
                    char: 2,
                    modelValue: "50"
                  })
                ])
              ])
            ])
          ];
        }),
        default: y(() => [
          i("div", AU, [
            l(ig, {
              data: z(Sw).slice(0, cg),
              suggestion: z(w)
            }, null, 8, ["data", "suggestion"]),
            CU,
            l(ig, {
              data: z(Sw).slice(cg)
            }, null, 8, ["data"])
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), MU = /* @__PURE__ */ V(wU, [["__scopeId", "data-v-93a79d61"]]), gU = (C) => (iA("data-v-eff12c4b"), C = C(), cA(), C), IU = ["value"], DU = /* @__PURE__ */ gU(() => /* @__PURE__ */ i("option", {
  value: "",
  disabled: ""
}, null, -1)), vU = ["value"], oU = /* @__PURE__ */ Q({
  __name: "BaseTdSelect",
  props: {
    value: { default: "" },
    options: {}
  },
  emits: ["change"],
  setup(C) {
    return (A, w) => (L(), b("select", {
      class: "base-td-select",
      value: A.value,
      onChange: w[0] || (w[0] = (M) => A.$emit("change", M.target.value))
    }, [
      DU,
      (L(!0), b(O, null, AA(A.options, (M) => (L(), b("option", {
        key: M.value,
        value: M.value
      }, s(M.label), 9, vU))), 128))
    ], 40, IU));
  }
}), nU = /* @__PURE__ */ V(oU, [["__scopeId", "data-v-eff12c4b"]]);
function iU(C = !1) {
  const A = W(C);
  return {
    value: A,
    setTrue() {
      A.value = !0;
    },
    setFalse() {
      A.value = !1;
    },
    setToggle() {
      A.value = !A.value;
    }
  };
}
const cU = { class: "weapon-section-row" }, ZU = { class: "weapon-td-name" }, UU = { class: "weapon-selector" }, tU = { class: "show-in-print" }, eU = {
  key: 0,
  class: "wp-point-placeholder"
}, lU = /* @__PURE__ */ Q({
  __name: "WeaponSectionRow",
  props: {
    index: {},
    weapon: {}
  },
  emits: ["input", "focus"],
  setup(C) {
    const A = C, w = MA();
    function M(R, T) {
      const a = R % 2 ? 0 : 1, d = T % 2 ? 0 : 1;
      return `td-color-${a + d}`;
    }
    function g(R) {
      var G;
      const [T, a] = R.split(")")[0].split("("), d = ((G = v.value.find((u) => u.name === R)) == null ? void 0 : G.init) || 0;
      let B = 0;
      return w == null || w.value.skillPoints.some((u) => {
        const e = (
          // 投掷
          !a && T === u[0] || // 格斗 or 射击
          a && typeof u[0] != "string" && T === u[0][0] && a === u[0][1]
        );
        if (e) {
          const { p: K = 0, i: f = 0, g: F = 0 } = u[1];
          B = K + f + F;
        }
        return e;
      }), {
        initPoint: d,
        result: B ? `${d + B}` : ""
      };
    }
    const I = _(() => A.weapon || Ew()), D = _(() => g(I.value.skill)), v = _(() => Sw.find(({ groupName: T }) => T === "战斗").groupSkills.filter(({ name: T }) => T !== "闪避").reduce((T, a) => {
      const { name: d, init: B, group: G } = a, u = G ? G.skills.map((e) => ({
        name: `${d}(${e.name})`,
        init: e.init || B
      })) : [{ name: d, init: B }];
      return [...T, ...u];
    }, [])), o = _(() => v.value.map(({ name: R }) => ({
      value: R,
      label: R
    }))), {
      value: n,
      setTrue: c,
      setFalse: t
    } = iU(), Z = _(() => Eg.map(([R, T]) => ({
      key: R,
      label: T,
      children: pg[R].map((a) => ({
        key: a,
        label: a
      }))
    })));
    function U(R) {
      if (!w)
        return;
      w.value.weapons[A.index] || (w.value.weapons[A.index] = Ew());
      const T = w.value.weapons[A.index];
      Object.assign(T, R);
    }
    function P(R) {
      const T = oM.find((G) => G.name === R);
      if (!T)
        return;
      const { price: a, time: d, ...B } = T;
      U({
        ...B
      }), t();
    }
    return (R, T) => (L(), b("div", cU, [
      i("div", {
        class: CA(["wp-td", {
          [M(R.index, 0)]: !0
        }])
      }, [
        $A((L(), b("div", ZU, [
          l(SA, {
            value: I.value.name,
            onInput: T[0] || (T[0] = (a) => U({ name: a })),
            onFocus: T[1] || (T[1] = () => z(c)())
          }, null, 8, ["value"]),
          l(kw, { name: "slide-down" }, {
            default: y(() => [
              $A(i("div", UU, [
                l(gI, {
                  tree: Z.value,
                  onSelect: T[2] || (T[2] = (a) => P(a.label))
                }, null, 8, ["tree"])
              ], 512), [
                [lg, z(n)]
              ])
            ]),
            _: 1
          })
        ])), [
          [z(tM), z(t)]
        ])
      ], 2),
      i("div", {
        class: CA(["wp-td", {
          [M(R.index, 1)]: !0
        }])
      }, [
        i("span", tU, s(I.value.skill), 1),
        l(nU, {
          class: "hide-in-print",
          value: I.value.skill,
          options: o.value,
          onChange: T[3] || (T[3] = (a) => U({ skill: a }))
        }, null, 8, ["value", "options"])
      ], 2),
      i("div", {
        class: CA(["wp-td", {
          [M(R.index, 2)]: !0
        }])
      }, [
        DA(s(D.value.result) + " ", 1),
        !D.value.result && D.value.initPoint ? (L(), b("span", eU, s(D.value.initPoint), 1)) : H("", !0)
      ], 2),
      i("div", {
        class: CA(["wp-td", {
          [M(R.index, 3)]: !0
        }])
      }, [
        l(SA, {
          value: I.value.dam,
          onInput: T[4] || (T[4] = (a) => U({ dam: a }))
        }, null, 8, ["value"])
      ], 2),
      i("div", {
        class: CA(["wp-td", {
          [M(R.index, 4)]: !0
        }])
      }, [
        l(SA, {
          value: I.value.range,
          onInput: T[5] || (T[5] = (a) => U({ range: a }))
        }, null, 8, ["value"])
      ], 2),
      i("div", {
        class: CA(["wp-td", {
          [M(R.index, 5)]: !0
        }])
      }, [
        l(lM, {
          xOnFalse: !!I.value.name,
          checked: !!I.value.tho,
          onCheck: T[6] || (T[6] = (a) => U({ tho: +a }))
        }, null, 8, ["xOnFalse", "checked"])
      ], 2),
      i("div", {
        class: CA(["wp-td", {
          [M(R.index, 6)]: !0
        }])
      }, [
        l(SA, {
          value: I.value.round,
          onInput: T[7] || (T[7] = (a) => U({ round: a }))
        }, null, 8, ["value"])
      ], 2),
      i("div", {
        class: CA(["wp-td", {
          [M(R.index, 7)]: !0
        }])
      }, [
        l(SA, {
          value: I.value.num,
          onInput: T[8] || (T[8] = (a) => U({ num: a }))
        }, null, 8, ["value"])
      ], 2),
      i("div", {
        class: CA(["wp-td", {
          [M(R.index, 8)]: !0
        }])
      }, [
        l(SA, {
          value: I.value.err,
          onInput: T[9] || (T[9] = (a) => U({ err: a }))
        }, null, 8, ["value"])
      ], 2)
    ]));
  }
}), LU = /* @__PURE__ */ V(lU, [["__scopeId", "data-v-7590d02c"]]), KU = (C) => (iA("data-v-83320a0b"), C = C(), cA(), C), zU = { class: "weapon-section-body" }, RU = /* @__PURE__ */ KU(() => /* @__PURE__ */ i("div", { class: "weapon-section-row" }, [
  /* @__PURE__ */ i("div", { class: "wp-th th-deep" }, "武器名称"),
  /* @__PURE__ */ i("div", { class: "wp-th th-light" }, "使用技能"),
  /* @__PURE__ */ i("div", { class: "wp-th th-deep" }, "%"),
  /* @__PURE__ */ i("div", { class: "wp-th th-light" }, "伤害"),
  /* @__PURE__ */ i("div", { class: "wp-th th-deep" }, "射程"),
  /* @__PURE__ */ i("div", { class: "wp-th th-light" }, "贯穿"),
  /* @__PURE__ */ i("div", { class: "wp-th th-deep" }, "次数"),
  /* @__PURE__ */ i("div", { class: "wp-th th-light" }, "装弹量"),
  /* @__PURE__ */ i("div", { class: "wp-th th-deep" }, "故障")
], -1)), fU = /* @__PURE__ */ Q({
  __name: "WeaponSection",
  setup(C) {
    const A = MA(), w = _(() => Array.from({ length: 5 }).map((M, g) => (A == null ? void 0 : A.value.weapons[g]) || void 0));
    return (M, g) => (L(), $(LA, {
      title: "武器",
      subTitle: "Weapons"
    }, {
      default: y(() => [
        i("div", zU, [
          RU,
          (L(!0), b(O, null, AA(w.value, (I, D) => (L(), $(LU, {
            class: "weapon-section-row",
            key: D,
            index: D,
            weapon: I
          }, null, 8, ["index", "weapon"]))), 128))
        ])
      ]),
      _: 1
    }));
  }
}), FU = /* @__PURE__ */ V(fU, [["__scopeId", "data-v-83320a0b"]]), aU = {
  key: 0,
  class: "battle-section-body"
}, bU = /* @__PURE__ */ Q({
  __name: "BattleSection",
  setup(C) {
    const A = MA();
    return sA(
      () => A == null ? void 0 : A.value.attributes,
      () => {
        if (!A)
          return;
        const { str: w, siz: M, dex: g } = A.value.attributes, I = Number(A.value.age);
        if (w && M) {
          const D = w + M;
          if (D < 65)
            A.value.battleAttributes.db = "-2", A.value.battleAttributes.size = "-2";
          else if (D < 85)
            A.value.battleAttributes.db = "-1", A.value.battleAttributes.size = "-1";
          else if (D < 125)
            A.value.battleAttributes.db = "0", A.value.battleAttributes.size = "0";
          else if (D < 165)
            A.value.battleAttributes.db = "1D4", A.value.battleAttributes.size = "1";
          else if (D < 205)
            A.value.battleAttributes.db = "1D6", A.value.battleAttributes.size = "2";
          else {
            const v = Math.floor((D - 205) / 80) + 2;
            A.value.battleAttributes.db = `${v}D6`, A.value.battleAttributes.size = `${v + 1}`;
          }
        }
        if (w && M && g) {
          let D = 8;
          if (w < M && g < M ? D = 7 : w > M && g > M ? D = 9 : D = 8, I >= 40) {
            const v = Math.floor((I - 40) / 10) + 1;
            D -= v;
          }
          A.value.battleAttributes.mov = `${D}`;
        }
      },
      { deep: !0 }
    ), (w, M) => (L(), $(LA, {
      title: "战斗",
      subTitle: "Combat"
    }, {
      default: y(() => [
        z(A) ? (L(), b("div", aU, [
          l(gA, {
            label: "伤害加值",
            hint: "DB",
            modelValue: z(A).battleAttributes.db,
            "onUpdate:modelValue": M[0] || (M[0] = (g) => z(A).battleAttributes.db = g),
            char: 4
          }, null, 8, ["modelValue"]),
          l(gA, {
            label: "体格",
            modelValue: z(A).battleAttributes.size,
            "onUpdate:modelValue": M[1] || (M[1] = (g) => z(A).battleAttributes.size = g),
            char: 4
          }, null, 8, ["modelValue"]),
          l(gA, {
            label: "护甲",
            modelValue: z(A).battleAttributes.armor,
            "onUpdate:modelValue": M[2] || (M[2] = (g) => z(A).battleAttributes.armor = g),
            char: 4
          }, null, 8, ["modelValue"]),
          l(gA, {
            label: "移动力",
            modelValue: z(A).battleAttributes.mov,
            "onUpdate:modelValue": M[3] || (M[3] = (g) => z(A).battleAttributes.mov = g),
            char: 4
          }, null, 8, ["modelValue"])
        ])) : H("", !0)
      ]),
      _: 1
    }));
  }
}), NU = /* @__PURE__ */ V(bU, [["__scopeId", "data-v-81d849bd"]]), rU = {}, KM = (C) => (iA("data-v-b85a4f33"), C = C(), cA(), C), PU = { class: "copyright-section" }, TU = /* @__PURE__ */ KM(() => /* @__PURE__ */ i("div", { class: "commercial-info" }, [
  /* @__PURE__ */ DA(" 商业合作请联系: "),
  /* @__PURE__ */ i("a", {
    class: "link commercial-link",
    href: "mailto:masquevil@gmail.com"
  }, " masquevil@gmail.com (侠小然) "),
  /* @__PURE__ */ i("a", {
    class: "link commercial-link",
    href: "mailto:705422032@qq.com"
  }, " 705422032@qq.com (听枫馆·枫笛) ")
], -1)), BU = { class: "copyright" }, GU = /* @__PURE__ */ KM(() => /* @__PURE__ */ i("span", null, "©「克苏鲁的呼唤」7版人物卡", -1)), jU = /* @__PURE__ */ KM(() => /* @__PURE__ */ i("span", { class: "footprint" }, "🐾", -1));
function dU(C, A) {
  return L(), b("div", PU, [
    TU,
    i("div", BU, [
      GU,
      i("span", null, "Copyright 侠小然 " + s((/* @__PURE__ */ new Date()).getFullYear()), 1),
      jU
    ])
  ]);
}
const uU = /* @__PURE__ */ V(rU, [["render", dU], ["__scopeId", "data-v-b85a4f33"]]), xU = { class: "section-row" }, mU = { class: "section-row" }, sU = /* @__PURE__ */ Q({
  __name: "PaperFront",
  props: {
    setRef: {},
    cheating: { type: Boolean }
  },
  setup(C) {
    return (A, w) => (L(), $(MI, { setRef: A.setRef }, {
      default: y(() => [
        i("div", xU, [
          l(Cc),
          l(_c, { cheating: A.cheating }, null, 8, ["cheating"]),
          l(v2, { class: "col-0" }),
          l(E2)
        ]),
        l(oZ),
        l(tZ),
        l(MU),
        i("div", mU, [
          l(FU, { class: "col-0" }),
          l(NU)
        ]),
        l(uU)
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), Zg = /* @__PURE__ */ V(sU, [["__scopeId", "data-v-71079a91"]]), yU = (C) => (iA("data-v-aa230195"), C = C(), cA(), C), QU = { class: "label" }, pU = ["rows", "placeholder", "value", "maxlength", "readonly"], EU = { class: "lines" }, VU = /* @__PURE__ */ yU(() => /* @__PURE__ */ i("div", { class: "line" }, null, -1)), HU = /* @__PURE__ */ Q({
  __name: "WritableArea",
  props: {
    label: {},
    rows: { default: 3 },
    placeholder: {},
    modelValue: { default: "" },
    maxlength: {},
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(C) {
    const A = BA();
    return (w, M) => {
      var g, I;
      return L(), b("div", {
        class: CA(["writable-area", {
          "printing-image": (g = z(A)) == null ? void 0 : g.printing
        }])
      }, [
        i("div", QU, s(w.label), 1),
        i("textarea", {
          class: "input",
          style: NC({
            textIndent: w.label.length ? `${w.label.length + 0.4}em` : void 0
          }),
          rows: w.rows,
          placeholder: (I = z(A)) != null && I.printing ? "" : w.placeholder,
          value: w.modelValue,
          maxlength: w.maxlength,
          readonly: w.readonly,
          onInput: M[0] || (M[0] = (D) => w.$emit("update:modelValue", D.target.value))
        }, null, 44, pU),
        i("div", EU, [
          (L(!0), b(O, null, AA(w.rows, (D) => (L(), b("div", {
            class: "line-row",
            key: D
          }, [
            D === 1 && w.label ? (L(), b("div", {
              key: 0,
              class: "line-row-label",
              style: NC({
                width: `${w.label.length}em`
              })
            }, null, 4)) : H("", !0),
            VU
          ]))), 128))
        ])
      ], 2);
    };
  }
}), nA = /* @__PURE__ */ V(HU, [["__scopeId", "data-v-aa230195"]]), SU = { class: "story-section-body" }, XU = { class: "story-section-column" }, WU = { class: "story-section-column" }, hU = /* @__PURE__ */ Q({
  __name: "StorySection",
  setup(C) {
    const A = MA();
    return (w, M) => z(A) ? (L(), $(LA, {
      key: 0,
      title: "背景故事",
      subTitle: "Story"
    }, {
      default: y(() => [
        i("div", SU, [
          i("div", XU, [
            l(nA, {
              label: "形象描述",
              modelValue: z(A).stories.app,
              "onUpdate:modelValue": M[0] || (M[0] = (g) => z(A).stories.app = g),
              maxlength: 3 * 29 - 5
            }, null, 8, ["modelValue"]),
            l(nA, {
              label: "思想与信念",
              modelValue: z(A).stories.belief,
              "onUpdate:modelValue": M[1] || (M[1] = (g) => z(A).stories.belief = g),
              maxlength: 3 * 29 - 6
            }, null, 8, ["modelValue"]),
            l(nA, {
              label: "重要之人",
              modelValue: z(A).stories.IPerson,
              "onUpdate:modelValue": M[2] || (M[2] = (g) => z(A).stories.IPerson = g),
              maxlength: 3 * 29 - 5
            }, null, 8, ["modelValue"]),
            l(nA, {
              label: "意义非凡之地",
              modelValue: z(A).stories.IPlace,
              "onUpdate:modelValue": M[3] || (M[3] = (g) => z(A).stories.IPlace = g),
              maxlength: 3 * 29 - 7
            }, null, 8, ["modelValue"]),
            l(nA, {
              label: "宝贵之物",
              modelValue: z(A).stories.IItem,
              "onUpdate:modelValue": M[4] || (M[4] = (g) => z(A).stories.IItem = g),
              maxlength: 3 * 29 - 5
            }, null, 8, ["modelValue"]),
            l(nA, {
              label: "特质",
              modelValue: z(A).stories.trait,
              "onUpdate:modelValue": M[5] || (M[5] = (g) => z(A).stories.trait = g),
              maxlength: 3 * 29 - 3
            }, null, 8, ["modelValue"])
          ]),
          i("div", WU, [
            l(nA, {
              label: "伤口与疤痕",
              modelValue: z(A).stories.scar,
              "onUpdate:modelValue": M[6] || (M[6] = (g) => z(A).stories.scar = g),
              maxlength: 3 * 29 - 6
            }, null, 8, ["modelValue"]),
            l(nA, {
              label: "精神症状",
              modelValue: z(A).stories.mad,
              "onUpdate:modelValue": M[7] || (M[7] = (g) => z(A).stories.mad = g),
              maxlength: 3 * 29 - 5
            }, null, 8, ["modelValue"]),
            l(nA, {
              label: "个人介绍",
              rows: 12,
              modelValue: z(A).stories.desc,
              "onUpdate:modelValue": M[8] || (M[8] = (g) => z(A).stories.desc = g),
              maxlength: 12 * 29 - 5
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), kU = /* @__PURE__ */ V(hU, [["__scopeId", "data-v-a7b1d5bf"]]), YU = { class: "section-body" }, JU = /* @__PURE__ */ Q({
  __name: "AssetsSection",
  setup(C) {
    const A = MA(), w = _(() => {
      var v;
      const M = ((v = A == null ? void 0 : A.value.skillPoints.find(([o]) => o === "信用评级")) == null ? void 0 : v[1]) || {};
      if (Object.keys(M).length === 0)
        return "";
      const { p: g = 0, i: I = 0, g: D = 0 } = M;
      return `${g + I + D}`;
    });
    return (M, g) => z(A) ? (L(), $(LA, {
      key: 0,
      title: "资产",
      subTitle: "Cash & Assets"
    }, {
      default: y(() => [
        i("div", YU, [
          l(nA, {
            label: "信用评级",
            rows: 1,
            modelValue: w.value,
            readonly: ""
          }, null, 8, ["modelValue"]),
          l(nA, {
            label: "现金",
            rows: 1,
            maxlength: 15,
            modelValue: z(A).assets.cash,
            "onUpdate:modelValue": g[0] || (g[0] = (I) => z(A).assets.cash = I)
          }, null, 8, ["modelValue"]),
          l(nA, {
            label: "消费水平",
            rows: 1,
            maxlength: 13,
            modelValue: z(A).assets.consumption,
            "onUpdate:modelValue": g[1] || (g[1] = (I) => z(A).assets.consumption = I)
          }, null, 8, ["modelValue"]),
          l(nA, {
            label: "资产",
            rows: 9,
            maxlength: 17 * 9 - 2,
            modelValue: z(A).assets.assets,
            "onUpdate:modelValue": g[2] || (g[2] = (I) => z(A).assets.assets = I)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), OU = /* @__PURE__ */ V(JU, [["__scopeId", "data-v-5cf28b2f"]]), qU = { class: "section-body" }, _U = /* @__PURE__ */ Q({
  __name: "ItemSection",
  setup(C) {
    const A = MA();
    return (w, M) => z(A) ? (L(), $(LA, {
      key: 0,
      title: "物品与装备",
      subTitle: "Possessions"
    }, {
      default: y(() => [
        i("div", qU, [
          l(nA, {
            label: "",
            rows: 12,
            maxlength: 18 * 12,
            modelValue: z(A).assets.items,
            "onUpdate:modelValue": M[0] || (M[0] = (g) => z(A).assets.items = g)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), $U = /* @__PURE__ */ V(_U, [["__scopeId", "data-v-5cfffc06"]]), At = { class: "section-body" }, Ct = /* @__PURE__ */ Q({
  __name: "MythosSection",
  setup(C) {
    const A = MA();
    return (w, M) => z(A) ? (L(), $(LA, {
      key: 0,
      title: "克苏鲁神话",
      subTitle: "Cthulu Mythos"
    }, {
      default: y(() => [
        i("div", At, [
          l(nA, {
            label: "魔法物品与典籍",
            rows: 4,
            maxlength: 18 * 4 - 8,
            modelValue: z(A).assets.magicItems,
            "onUpdate:modelValue": M[0] || (M[0] = (g) => z(A).assets.magicItems = g)
          }, null, 8, ["modelValue"]),
          l(nA, {
            label: "法术",
            rows: 4,
            maxlength: 18 * 4 - 3,
            modelValue: z(A).assets.magics,
            "onUpdate:modelValue": M[1] || (M[1] = (g) => z(A).assets.magics = g)
          }, null, 8, ["modelValue"]),
          l(nA, {
            label: "第三类接触",
            rows: 4,
            maxlength: 18 * 4 - 6,
            modelValue: z(A).assets.touches,
            "onUpdate:modelValue": M[2] || (M[2] = (g) => z(A).assets.touches = g)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), wt = /* @__PURE__ */ V(Ct, [["__scopeId", "data-v-c2b3ec34"]]), Mt = { class: "section-body" }, gt = /* @__PURE__ */ Q({
  __name: "FriendSection",
  setup(C) {
    const A = MA();
    return (w, M) => z(A) ? (L(), $(LA, {
      key: 0,
      title: "人物关系",
      subTitle: "Relationships"
    }, {
      default: y(() => [
        i("div", Mt, [
          l(nA, {
            label: "",
            rows: 9,
            modelValue: z(A).friends,
            "onUpdate:modelValue": M[0] || (M[0] = (g) => z(A).friends = g),
            placeholder: "角色  玩家  职业  关系 —— 懒得结构化了，应该不会有人在网上车卡时候就填吧？"
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), It = /* @__PURE__ */ V(gt, [["__scopeId", "data-v-0e2298e3"]]), Dt = { class: "section-body" }, vt = /* @__PURE__ */ Q({
  __name: "ExperienceSection",
  setup(C) {
    const A = MA();
    return (w, M) => z(A) ? (L(), $(LA, {
      key: 0,
      title: "经历过的模组",
      subTitle: "Experienced Scenarios"
    }, {
      default: y(() => [
        i("div", Dt, [
          l(nA, {
            label: "",
            rows: 9,
            maxlength: 18 * 9,
            modelValue: z(A).experiencedModules,
            "onUpdate:modelValue": M[0] || (M[0] = (g) => z(A).experiencedModules = g)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), ot = /* @__PURE__ */ V(vt, [["__scopeId", "data-v-e4b53600"]]), nt = (C) => (iA("data-v-8db5e252"), C = C(), cA(), C), it = { class: "section-row" }, ct = { class: "section-row col-2" }, Zt = { class: "section-row" }, Ut = /* @__PURE__ */ nt(() => /* @__PURE__ */ i("div", { class: "inspiration-row" }, [
  /* @__PURE__ */ i("div", { class: "inspiration-item special-thanks" }, " Special Thanks 听枫馆·枫笛(北京) "),
  /* @__PURE__ */ i("div", { class: "inspiration-item inspiration" }, " Inspired By 猫爷TRPG 人格解体 "),
  /* @__PURE__ */ i("div", { class: "inspiration-item copyright" }, " 「克苏鲁的呼唤」7版人物卡 Copyright 侠小然 ")
], -1)), tt = /* @__PURE__ */ Q({
  __name: "PaperBack",
  props: {
    setRef: {}
  },
  setup(C) {
    return (A, w) => (L(), $(MI, { setRef: A.setRef }, {
      default: y(() => [
        l(kU),
        i("div", it, [
          i("div", ct, [
            l($U, { class: "col-0" }),
            l(OU, { class: "col-0" })
          ]),
          l(wt, { class: "col-1" })
        ]),
        i("div", Zt, [
          l(It, { class: "col-2" }),
          l(ot, { class: "col-1" })
        ]),
        Ut
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), Ug = /* @__PURE__ */ V(tt, [["__scopeId", "data-v-8db5e252"]]), et = (C) => (iA("data-v-2ec329e8"), C = C(), cA(), C), lt = { class: "page theme-dark" }, Lt = /* @__PURE__ */ et(() => /* @__PURE__ */ i("h1", { class: "title web-only" }, "COC 7版人物卡 车卡工具", -1)), Kt = { class: "paper-container theme-light" }, zt = { class: "papers-animation-container papers-editing web-only" }, Rt = { class: "sticky-footer web-only" }, ft = /* @__PURE__ */ Q({
  __name: "COCCardView",
  setup(C) {
    const A = zo.parse(location.search.slice(1)), w = W(YM()), M = xA({
      showingChildSkills: /* @__PURE__ */ new Map()
    }), g = xA({
      printing: A.debug === "true",
      showTotalSeparation: A.sep === "true"
    }), I = W(A.turn !== "back"), D = W(A.cheating === "true");
    Ro(w);
    const v = Po(w, M);
    sC("pc", w), sC("viewData", M), sC("pageData", g), sC("suggestion", v);
    const o = xA({});
    function n() {
      w.value = xA(YM()), zA.info("已重置人物卡");
    }
    function c() {
      D.value = !D.value, w.value.attributes = {}, zA.info(`灌铅模式已${D.value ? "开启" : "关闭"}`);
    }
    return (t, Z) => (L(), b("main", lt, [
      Lt,
      i("div", Kt, [
        i("div", zt, [
          l(kw, { name: "swipe-paper" }, {
            default: y(() => [
              (L(), $(tI, null, [
                I.value ? (L(), $(Zg, {
                  key: 0,
                  cheating: D.value
                }, null, 8, ["cheating"])) : (L(), $(Ug, { key: 1 }))
              ], 1024))
            ]),
            _: 1
          })
        ]),
        i("div", {
          class: CA(["papers-animation-container papers-printing", {
            "papers-printing-active": g.printing
          }])
        }, [
          l(Zg, {
            setRef: (U) => {
              o.front = U;
            },
            cheating: D.value
          }, null, 8, ["setRef", "cheating"]),
          l(Ug, {
            setRef: (U) => {
              o.back = U;
            }
          }, null, 8, ["setRef"])
        ], 2)
      ]),
      i("div", Rt, [
        l(G9, {
          paperEls: o,
          cheating: D.value,
          onSwitchPaper: Z[0] || (Z[0] = () => I.value = !I.value),
          onSwitchCheating: c,
          onResetCard: n
        }, null, 8, ["paperEls", "cheating"])
      ])
    ]));
  }
}), bt = /* @__PURE__ */ V(ft, [["__scopeId", "data-v-2ec329e8"]]);
export {
  bt as default
};