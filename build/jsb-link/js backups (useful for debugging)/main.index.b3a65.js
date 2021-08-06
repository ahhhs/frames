window.__require = function e(t, r, n) {
function o(i, a) {
if (!r[i]) {
if (!t[i]) {
var u = i.split("/");
u = u[u.length - 1];
if (!t[u]) {
var f = "function" == typeof __require && __require;
if (!a && f) return f(u, !0);
if (c) return c(u, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = u;
}
var s = r[i] = {
exports: {}
};
t[i][0].call(s.exports, function(e) {
return o(t[i][1][e] || e);
}, s, s.exports, e, t, r, n);
}
return r[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < n.length; i++) o(n[i]);
return o;
}({
ABCCtl: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "bac0a36FbNJjJRNyEiTJbMY", "ABCCtl");
var n = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, c = o.ccclass, i = (o.property, function() {
function e() {
this.mData = null;
this.mDelegate = null;
}
t = e;
e.getInstace = function() {
this._instace || (this._instace = new t());
return this._instace;
};
e.prototype.init = function(e, t) {
this.mData = e;
this.mDelegate = t;
};
e.prototype.summit = function() {
this.mDelegate.onSubmitResult();
};
var t;
e._instace = null;
return t = n([ c ], e);
}());
r.default = i;
cc._RF.pop();
}, {} ],
ABCView: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "0a83fW3AUhKooaXE/CVlQlv", "ABCView");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), c = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = e("./ABCCtl"), a = cc._decorator, u = a.ccclass, f = a.property, s = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.demo = null;
return t;
}
t.prototype.onClickSummit = function() {
i.default.getInstace().summit();
};
t.prototype.onSubmitResult = function() {};
c([ f(cc.Node) ], t.prototype, "demo", void 0);
return c([ u ], t);
}(cc.Component);
r.default = s;
cc._RF.pop();
}, {
"./ABCCtl": "ABCCtl"
} ],
AdaptiveComms: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "5e698vmH65J24tFNPwJYmFO", "AdaptiveComms");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), c = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, u = (i.property, i.executeInEditMode), f = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function() {
this.fixedViewSize();
};
t.prototype.fixedViewSize = function() {
var e = cc.view.getDesignResolutionSize(), t = e.width / e.height, r = cc.size(e.width, e.height), n = cc.view.getFrameSize(), o = n.width / n.height;
o < t ? r.height = r.width / o : r.width = r.height * o;
this.node.setContentSize(r);
};
return c([ a, u ], t);
}(cc.Component);
r.default = f;
cc._RF.pop();
}, {} ],
AdaptiveComm: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "e8d30Bgd+dIerkWJfSBUXF+", "AdaptiveComm");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), c = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, u = (i.property, function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function() {
this.node.width = cc.winSize.width;
this.node.height = cc.winSize.height;
};
return c([ a ], t);
}(cc.Component));
r.default = u;
cc._RF.pop();
}, {} ],
CarPreafbC: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "e21d8/XN61F1bqB2i7DZ4oF", "CarPreafbC");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), c = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = e("../../script/management/LayerBase"), a = cc._decorator, u = a.ccclass, f = (a.property, 
function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.CarPrefabV = null;
t.CarPrefabM = null;
return t;
}
r = t;
Object.defineProperty(t, "instance", {
get: function() {
this._instance || (this._instance = new r());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function(e, t) {
this.CarPrefabV = e;
this.CarPrefabM = t;
this.initLayerBase(this.CarPrefabV.node, !1);
this.main();
};
t.prototype.main = function() {};
var r;
return r = c([ u ], t);
}(i.LayerBase));
r.default = f;
cc._RF.pop();
}, {
"../../script/management/LayerBase": "LayerBase"
} ],
CarPreafbM: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "7e87bMiZuVCwKlhqIJ8Tv/C", "CarPreafbM");
var n = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, c = o.ccclass, i = (o.property, function() {
function e() {}
t = e;
Object.defineProperty(e, "instance", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
var t;
return t = n([ c ], e);
}());
r.default = i;
cc._RF.pop();
}, {} ],
CarPrefabMain: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "fd93eYGUP5M7r6N/Kz/FJh7", "CarPrefabMain");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), c = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CarPrefabMain = void 0;
var i = e("./CarPreafbC"), a = e("./CarPrefabV"), u = cc._decorator, f = u.ccclass, s = u.property, l = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.carPrefabV = null;
return t;
}
t.prototype.onLoad = function() {
i.default.instance.init(this.carPrefabV, {});
};
c([ s(a.default) ], t.prototype, "carPrefabV", void 0);
return c([ f ], t);
}(cc.Component);
r.CarPrefabMain = l;
cc._RF.pop();
}, {
"./CarPreafbC": "CarPreafbC",
"./CarPrefabV": "CarPrefabV"
} ],
CarPrefabV: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "a5559+MrHZArrB0Tq+TYDpK", "CarPrefabV");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), c = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, u = (i.property, i.executeInEditMode), f = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
r = t;
Object.defineProperty(t, "instance", {
get: function() {
this._instance || (this._instance = new r());
return this._instance;
},
enumerable: !1,
configurable: !0
});
var r;
return r = c([ a, u ], t);
}(cc.Component);
r.default = f;
cc._RF.pop();
}, {} ],
GameBase: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "77c54Bf0k9IybH/2KD4YwL5", "GameBase");
var n = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, c = o.ccclass, i = (o.property, function() {
function e() {}
return n([ c ], e);
}());
r.default = i;
cc._RF.pop();
}, {} ],
HallLayerC: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "4ff0bZfgmZMz5K1mq84F2Yp", "HallLayerC");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), c = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
}, i = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(o, c) {
function i(e) {
try {
u(n.next(e));
} catch (e) {
c(e);
}
}
function a(e) {
try {
u(n.throw(e));
} catch (e) {
c(e);
}
}
function u(e) {
e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(i, a);
var t;
}
u((n = n.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var r, n, o, c, i = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return c = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
return this;
}), c;
function a(e) {
return function(t) {
return u([ e, t ]);
};
}
function u(c) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, c[1])).done) return o;
(n = 0, o) && (c = [ 2 & c[0], o.value ]);
switch (c[0]) {
case 0:
case 1:
o = c;
break;

case 4:
i.label++;
return {
value: c[1],
done: !1
};

case 5:
i.label++;
n = c[1];
c = [ 0 ];
continue;

case 7:
c = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
i = 0;
continue;
}
if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
i.label = c[1];
break;
}
if (6 === c[0] && i.label < o[1]) {
i.label = o[1];
o = c;
break;
}
if (o && i.label < o[2]) {
i.label = o[2];
i.ops.push(c);
break;
}
o[2] && i.ops.pop();
i.trys.pop();
continue;
}
c = t.call(e, i);
} catch (e) {
c = [ 6, e ];
n = 0;
} finally {
r = o = 0;
}
if (5 & c[0]) throw c[1];
return {
value: c[0] ? c[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var u = e("../../script/management/LayerBase"), f = e("../../script/management/LoadBase"), s = cc._decorator, l = s.ccclass, p = (s.property, 
function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.hallLayerV = null;
t.hallLayerM = null;
return t;
}
r = t;
Object.defineProperty(t, "instance", {
get: function() {
this._instance || (this._instance = new r());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function(e, t) {
return i(this, void 0, void 0, function() {
return a(this, function(r) {
switch (r.label) {
case 0:
this.hallLayerV = e;
this.hallLayerM = t;
this.initLayerBase(this.hallLayerV.node);
return [ 4, this.loadResource() ];

case 1:
r.sent();
return [ 4, this.addNode(u.LayerType.UI, f.default.instance.getLoadList().get("carPrefab")) ];

case 2:
r.sent();
return [ 2 ];
}
});
});
};
t.prototype.loadResource = function() {
return i(this, void 0, void 0, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
return [ 4, f.default.instance.loadPrefab("prefabAB", "carPrefab") ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
var r;
return r = c([ l ], t);
}(u.LayerBase));
r.default = p;
cc._RF.pop();
}, {
"../../script/management/LayerBase": "LayerBase",
"../../script/management/LoadBase": "LoadBase"
} ],
HallLayerM: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "5ab52OOyZlIP5YlrE8BggX7", "HallLayerM");
var n = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, c = o.ccclass, i = (o.property, function() {
function e() {}
return n([ c ], e);
}());
r.default = i;
cc._RF.pop();
}, {} ],
HallLayerV: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "6e37bu9SN1FhZZKGGd4JX84", "HallLayerV");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), c = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, u = (i.property, i.executeInEditMode), f = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {};
return c([ a, u ], t);
}(cc.Component);
r.default = f;
cc._RF.pop();
}, {} ],
HallMain: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "d9c63cpDxlNLaP5MwynZCQY", "HallMain");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), c = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
}, i = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(o, c) {
function i(e) {
try {
u(n.next(e));
} catch (e) {
c(e);
}
}
function a(e) {
try {
u(n.throw(e));
} catch (e) {
c(e);
}
}
function u(e) {
e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(i, a);
var t;
}
u((n = n.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var r, n, o, c, i = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return c = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
return this;
}), c;
function a(e) {
return function(t) {
return u([ e, t ]);
};
}
function u(c) {
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, c[1])).done) return o;
(n = 0, o) && (c = [ 2 & c[0], o.value ]);
switch (c[0]) {
case 0:
case 1:
o = c;
break;

case 4:
i.label++;
return {
value: c[1],
done: !1
};

case 5:
i.label++;
n = c[1];
c = [ 0 ];
continue;

case 7:
c = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
i = 0;
continue;
}
if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
i.label = c[1];
break;
}
if (6 === c[0] && i.label < o[1]) {
i.label = o[1];
o = c;
break;
}
if (o && i.label < o[2]) {
i.label = o[2];
i.ops.push(c);
break;
}
o[2] && i.ops.pop();
i.trys.pop();
continue;
}
c = t.call(e, i);
} catch (e) {
c = [ 6, e ];
n = 0;
} finally {
r = o = 0;
}
if (5 & c[0]) throw c[1];
return {
value: c[0] ? c[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var u = e("./HallLayerC"), f = e("./HallLayerV"), s = cc._decorator, l = s.ccclass, p = s.property, d = (s.executeInEditMode, 
function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.hallLayerV = null;
return t;
}
Object.defineProperty(t.prototype, "config", {
get: function() {
return !1;
},
set: function() {
this.demo();
},
enumerable: !1,
configurable: !0
});
t.prototype.demo = function() {};
t.prototype.onLoad = function() {
return i(this, void 0, void 0, function() {
return a(this, function() {
cc.log("onLoad");
u.default.instance.init(this.hallLayerV, {});
this.demo();
return [ 2 ];
});
});
};
c([ p(f.default) ], t.prototype, "hallLayerV", void 0);
c([ p({
displayName: "更新配置"
}) ], t.prototype, "config", null);
return c([ l ], t);
}(cc.Component));
r.default = d;
cc._RF.pop();
}, {
"./HallLayerC": "HallLayerC",
"./HallLayerV": "HallLayerV"
} ],
Helloworld: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "a7bd8GNAVtMBo60B0KaTt4V", "Helloworld");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), c = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var i = e("./ABCCtl"), a = e("./ABCView"), u = cc._decorator, f = u.ccclass, s = u.property, l = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.eView = null;
return t;
}
t.prototype.onLoad = function() {
i.default.getInstace().init({
name: "zhangs",
age: 1
}, this.eView);
};
c([ s(a.default) ], t.prototype, "eView", void 0);
return c([ f ], t);
}(cc.Component);
r.default = l;
cc._RF.pop();
}, {
"./ABCCtl": "ABCCtl",
"./ABCView": "ABCView"
} ],
LayerBase: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "7448agyD2tD4re4jizMrGBG", "LayerBase");
var n = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LayerBase = r.NodeSize = r.NodeType = r.LayerType = void 0;
var o, c = e("../common/AdaptiveComm");
(function(e) {
e[e.UI = 0] = "UI";
e[e.ADAPTIVE = 1] = "ADAPTIVE";
e[e.POPUP = 2] = "POPUP";
})(o = r.LayerType || (r.LayerType = {}));
var i = function(e, t) {
this.name = e;
this.uuid = t;
};
r.NodeType = i;
r.NodeSize = function() {};
var a = cc._decorator, u = a.ccclass, f = (a.property, function() {
function e() {
this.root = void 0;
this.nodeList = [];
}
e.prototype.initLayerBase = function(e, t) {
void 0 === t && (t = !0);
this.root = e;
t && this.addLayerMain();
};
e.prototype.addLayerMain = function() {
for (var e = 0; e < Object.values(o).length / 2; e++) this.addLayer(o[e]);
};
e.prototype.addLayer = function(e) {
if (!this.getLayer(e)) {
var t = new cc.Node();
t.name = e + "Layer";
t.addComponent(c.default).init();
this.root.addChild(t, this.rootZIndex++);
}
};
e.prototype.getLayer = function(e) {
return this.root.getChildByName(e + "Layer");
};
e.prototype.getRootNode = function() {
return this.root;
};
e.prototype.addNode = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = 0);
var c = cc.instantiate(t);
c.zIndex = n;
this.getLayer(o[e]).addChild(c);
};
e.prototype.getAllNodeData = function() {
this.traverseNodeData(this.root);
return this.nodeList;
};
e.prototype.traverseNodeData = function(e) {
for (var t = 0; t < e.children.length; t++) {
var r = e.children[t], n = new i(r.name, r.uuid);
this.nodeList.push(n);
r.children.length > 0 && this.traverseNodeData(r);
}
};
return n([ u ], e);
}());
r.LayerBase = f;
cc._RF.pop();
}, {
"../common/AdaptiveComm": "AdaptiveComm"
} ],
LoadBase: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "5a59a83i71GR72ERIyE6TEb", "LoadBase");
var n = this && this.__decorate || function(e, t, r, n) {
var o, c = arguments.length, i = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (c < 3 ? o(i) : c > 3 ? o(t, r, i) : o(t, r)) || i);
return c > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, c = o.ccclass, i = (o.property, function() {
function e() {
this.loadList = new Map();
}
t = e;
Object.defineProperty(e, "instance", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.loadPrefab = function(e, t) {
var r = this;
return new Promise(function(n) {
cc.assetManager.loadBundle(e, function(e, o) {
o.load(t, function(e, t) {
if (t instanceof cc.Prefab) {
r.loadList.set(t.name, t);
n();
}
});
});
});
};
e.prototype.loadPrefabs = function(e, t) {
var r = this;
return new Promise(function(n) {
cc.assetManager.loadBundle(e, function(e, o) {
o.loadDir(t, function(e, t) {
for (var o = 0; o < t.length; o++) r.loadList.set(t[o].name, t[o]);
n();
});
});
});
};
e.prototype.getLoadList = function() {
return this.loadList;
};
e.prototype.editorLoad = function(e, t) {
var r = Editor.assetdb.remote.urlToUuid(e);
this.getAssetByUuid(r, t);
};
e.prototype.getAssetByUuid = function(e, t) {
cc.assetManager.loadAny(e, function(e, r) {
t && t(e, r);
});
};
var t;
return t = n([ c ], e);
}());
r.default = i;
cc._RF.pop();
}, {} ],
MD5: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "c4a89l2WQ9GzbkoBJmvY66Z", "MD5");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.MD5 = void 0;
var n = 0, o = 8;
function c(e, t) {
e[t >> 5] |= 128 << t % 32;
e[14 + (t + 64 >>> 9 << 4)] = t;
for (var r = 1732584193, n = -271733879, o = -1732584194, c = 271733878, i = 0; i < e.length; i += 16) {
var p = r, d = n, h = o, y = c;
r = a(r, n, o, c, e[i + 0], 7, -680876936);
c = a(c, r, n, o, e[i + 1], 12, -389564586);
o = a(o, c, r, n, e[i + 2], 17, 606105819);
n = a(n, o, c, r, e[i + 3], 22, -1044525330);
r = a(r, n, o, c, e[i + 4], 7, -176418897);
c = a(c, r, n, o, e[i + 5], 12, 1200080426);
o = a(o, c, r, n, e[i + 6], 17, -1473231341);
n = a(n, o, c, r, e[i + 7], 22, -45705983);
r = a(r, n, o, c, e[i + 8], 7, 1770035416);
c = a(c, r, n, o, e[i + 9], 12, -1958414417);
o = a(o, c, r, n, e[i + 10], 17, -42063);
n = a(n, o, c, r, e[i + 11], 22, -1990404162);
r = a(r, n, o, c, e[i + 12], 7, 1804603682);
c = a(c, r, n, o, e[i + 13], 12, -40341101);
o = a(o, c, r, n, e[i + 14], 17, -1502002290);
r = u(r, n = a(n, o, c, r, e[i + 15], 22, 1236535329), o, c, e[i + 1], 5, -165796510);
c = u(c, r, n, o, e[i + 6], 9, -1069501632);
o = u(o, c, r, n, e[i + 11], 14, 643717713);
n = u(n, o, c, r, e[i + 0], 20, -373897302);
r = u(r, n, o, c, e[i + 5], 5, -701558691);
c = u(c, r, n, o, e[i + 10], 9, 38016083);
o = u(o, c, r, n, e[i + 15], 14, -660478335);
n = u(n, o, c, r, e[i + 4], 20, -405537848);
r = u(r, n, o, c, e[i + 9], 5, 568446438);
c = u(c, r, n, o, e[i + 14], 9, -1019803690);
o = u(o, c, r, n, e[i + 3], 14, -187363961);
n = u(n, o, c, r, e[i + 8], 20, 1163531501);
r = u(r, n, o, c, e[i + 13], 5, -1444681467);
c = u(c, r, n, o, e[i + 2], 9, -51403784);
o = u(o, c, r, n, e[i + 7], 14, 1735328473);
r = f(r, n = u(n, o, c, r, e[i + 12], 20, -1926607734), o, c, e[i + 5], 4, -378558);
c = f(c, r, n, o, e[i + 8], 11, -2022574463);
o = f(o, c, r, n, e[i + 11], 16, 1839030562);
n = f(n, o, c, r, e[i + 14], 23, -35309556);
r = f(r, n, o, c, e[i + 1], 4, -1530992060);
c = f(c, r, n, o, e[i + 4], 11, 1272893353);
o = f(o, c, r, n, e[i + 7], 16, -155497632);
n = f(n, o, c, r, e[i + 10], 23, -1094730640);
r = f(r, n, o, c, e[i + 13], 4, 681279174);
c = f(c, r, n, o, e[i + 0], 11, -358537222);
o = f(o, c, r, n, e[i + 3], 16, -722521979);
n = f(n, o, c, r, e[i + 6], 23, 76029189);
r = f(r, n, o, c, e[i + 9], 4, -640364487);
c = f(c, r, n, o, e[i + 12], 11, -421815835);
o = f(o, c, r, n, e[i + 15], 16, 530742520);
r = s(r, n = f(n, o, c, r, e[i + 2], 23, -995338651), o, c, e[i + 0], 6, -198630844);
c = s(c, r, n, o, e[i + 7], 10, 1126891415);
o = s(o, c, r, n, e[i + 14], 15, -1416354905);
n = s(n, o, c, r, e[i + 5], 21, -57434055);
r = s(r, n, o, c, e[i + 12], 6, 1700485571);
c = s(c, r, n, o, e[i + 3], 10, -1894986606);
o = s(o, c, r, n, e[i + 10], 15, -1051523);
n = s(n, o, c, r, e[i + 1], 21, -2054922799);
r = s(r, n, o, c, e[i + 8], 6, 1873313359);
c = s(c, r, n, o, e[i + 15], 10, -30611744);
o = s(o, c, r, n, e[i + 6], 15, -1560198380);
n = s(n, o, c, r, e[i + 13], 21, 1309151649);
r = s(r, n, o, c, e[i + 4], 6, -145523070);
c = s(c, r, n, o, e[i + 11], 10, -1120210379);
o = s(o, c, r, n, e[i + 2], 15, 718787259);
n = s(n, o, c, r, e[i + 9], 21, -343485551);
r = l(r, p);
n = l(n, d);
o = l(o, h);
c = l(c, y);
}
return Array(r, n, o, c);
}
function i(e, t, r, n, o, c) {
return l((i = l(l(t, e), l(n, c))) << (a = o) | i >>> 32 - a, r);
var i, a;
}
function a(e, t, r, n, o, c, a) {
return i(t & r | ~t & n, e, t, o, c, a);
}
function u(e, t, r, n, o, c, a) {
return i(t & n | r & ~n, e, t, o, c, a);
}
function f(e, t, r, n, o, c, a) {
return i(t ^ r ^ n, e, t, o, c, a);
}
function s(e, t, r, n, o, c, a) {
return i(r ^ (t | ~n), e, t, o, c, a);
}
function l(e, t) {
var r = (65535 & e) + (65535 & t);
return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
}
function p(e) {
for (var t = Array(), r = (1 << o) - 1, n = 0; n < e.length * o; n += o) t[n >> 5] |= (e.charCodeAt(n / o) & r) << n % 32;
return t;
}
function d(e) {
for (var t = n ? "0123456789ABCDEF" : "0123456789abcdef", r = "", o = 0; o < 4 * e.length; o++) r += t.charAt(e[o >> 2] >> o % 4 * 8 + 4 & 15) + t.charAt(e[o >> 2] >> o % 4 * 8 & 15);
return r;
}
var h = function() {
function e() {}
e.hexMd5 = function(e) {
return d(c(p(t = e), t.length * o));
var t;
};
return e;
}();
r.MD5 = h;
cc._RF.pop();
}, {} ],
Model: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "f9775RC/OtAaqxKPHaipUPI", "Model");
Object.defineProperty(r, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ]
}, {}, [ "HallLayerC", "HallLayerM", "HallLayerV", "HallMain", "CarPreafbC", "CarPreafbM", "CarPrefabMain", "CarPrefabV", "AdaptiveComm", "AdaptiveComms", "GameBase", "MD5", "LayerBase", "LoadBase", "ABCCtl", "ABCView", "Helloworld", "Model" ]);