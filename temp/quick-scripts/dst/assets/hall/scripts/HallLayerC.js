
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/hall/scripts/HallLayerC.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ff0bZfgmZMz5K1mq84F2Yp', 'HallLayerC');
// hall/scripts/HallLayerC.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 大厅层级基类
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LayerBase_1 = require("../../script/management/LayerBase");
var LoadBase_1 = require("../../script/management/LoadBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HallLayerC = /** @class */ (function (_super) {
    __extends(HallLayerC, _super);
    function HallLayerC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hallLayerV = null;
        _this.hallLayerM = null;
        return _this;
    }
    HallLayerC_1 = HallLayerC;
    Object.defineProperty(HallLayerC, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new HallLayerC_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    HallLayerC.prototype.init = function (v, m) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hallLayerV = v;
                        this.hallLayerM = m;
                        this.initLayerBase(this.hallLayerV.node);
                        return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.addNode(LayerBase_1.LayerType.UI, LoadBase_1.default.instance.getLoadList().get("carPrefab"));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 加载资源
     */
    HallLayerC.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, LoadBase_1.default.instance.loadPrefab("prefabAB", "carPrefab")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var HallLayerC_1;
    HallLayerC = HallLayerC_1 = __decorate([
        ccclass
    ], HallLayerC);
    return HallLayerC;
}(LayerBase_1.LayerBase));
exports.default = HallLayerC;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9oYWxsL3NjcmlwdHMvSGFsbExheWVyQy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsK0RBQXlFO0FBQ3pFLDZEQUF3RDtBQUlsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBUztJQUFqRDtRQUFBLHFFQTBCQztRQWhCVyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFlLElBQUksQ0FBQzs7SUFlMUMsQ0FBQzttQkExQm9CLFVBQVU7SUFHM0Isc0JBQWtCLHNCQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFVLEVBQUUsQ0FBQzthQUNyQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUtZLHlCQUFJLEdBQWpCLFVBQWtCLENBQWEsRUFBRSxDQUFhOzs7Ozt3QkFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pDLHFCQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQTs7d0JBQXpCLFNBQXlCLENBQUM7d0JBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxFQUFFLEVBQUUsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Ozs7O0tBQ2hGO0lBQ0Q7O09BRUc7SUFDVyxpQ0FBWSxHQUExQjs7Ozs0QkFDSSxxQkFBTSxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxFQUFBOzt3QkFBM0QsU0FBMkQsQ0FBQzs7Ozs7S0FDL0Q7O0lBekJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBMEI5QjtJQUFELGlCQUFDO0NBMUJELEFBMEJDLENBMUJ1QyxxQkFBUyxHQTBCaEQ7a0JBMUJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEF1dGhvcjogYWhoaCAobmV3X3E4QDE2My5jb20pXG4gKlxuICogRGVzY3JpcHRpb246IOWkp+WOheWxgue6p+Wfuuexu1xuICovXG5cbmltcG9ydCB7IExheWVyQmFzZSwgTGF5ZXJUeXBlIH0gZnJvbSAnLi4vLi4vc2NyaXB0L21hbmFnZW1lbnQvTGF5ZXJCYXNlJztcbmltcG9ydCBMb2FkQmFzZSBmcm9tICcuLi8uLi9zY3JpcHQvbWFuYWdlbWVudC9Mb2FkQmFzZSc7XG5pbXBvcnQgSGFsbExheWVyTSBmcm9tICcuL0hhbGxMYXllck0nO1xuaW1wb3J0IEhhbGxMYXllclYgZnJvbSAnLi9IYWxsTGF5ZXJWJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxMYXllckMgZXh0ZW5kcyBMYXllckJhc2Uge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogSGFsbExheWVyQztcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBIYWxsTGF5ZXJDKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFsbExheWVyVjogSGFsbExheWVyViA9IG51bGw7XG4gICAgcHJpdmF0ZSBoYWxsTGF5ZXJNOiBIYWxsTGF5ZXJNID0gbnVsbDtcblxuICAgIHB1YmxpYyBhc3luYyBpbml0KHY6IEhhbGxMYXllclYsIG06IEhhbGxMYXllck0pIHtcbiAgICAgICAgdGhpcy5oYWxsTGF5ZXJWID0gdjtcbiAgICAgICAgdGhpcy5oYWxsTGF5ZXJNID0gbTtcbiAgICAgICAgdGhpcy5pbml0TGF5ZXJCYXNlKHRoaXMuaGFsbExheWVyVi5ub2RlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkUmVzb3VyY2UoKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKExheWVyVHlwZS5VSSwgTG9hZEJhc2UuaW5zdGFuY2UuZ2V0TG9hZExpc3QoKS5nZXQoXCJjYXJQcmVmYWJcIikpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqDovb3otYTmupAgXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkUmVzb3VyY2UoKSB7XG4gICAgICAgIGF3YWl0IExvYWRCYXNlLmluc3RhbmNlLmxvYWRQcmVmYWIoXCJwcmVmYWJBQlwiLCBcImNhclByZWZhYlwiKTtcbiAgICB9XG59XG4iXX0=