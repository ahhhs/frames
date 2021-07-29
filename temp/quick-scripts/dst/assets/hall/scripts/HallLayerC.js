
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
                        return [4 /*yield*/, this.addNode(LayerBase_1.LayerType.UI, LoadBase_1.default.instance.getLoadList().get("carPrefab"))];
                    case 2:
                        _a.sent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9oYWxsL3NjcmlwdHMvSGFsbExheWVyQy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsK0RBQXlFO0FBQ3pFLDZEQUF3RDtBQUlsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBUztJQUFqRDtRQUFBLHFFQTBCQztRQWhCVyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFlLElBQUksQ0FBQzs7SUFlMUMsQ0FBQzttQkExQm9CLFVBQVU7SUFHM0Isc0JBQWtCLHNCQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFVLEVBQUUsQ0FBQzthQUNyQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUtZLHlCQUFJLEdBQWpCLFVBQWtCLENBQWEsRUFBRSxDQUFhOzs7Ozt3QkFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pDLHFCQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQTs7d0JBQXpCLFNBQXlCLENBQUM7d0JBQzFCLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxFQUFFLEVBQUUsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUE7O3dCQUFsRixTQUFrRixDQUFDOzs7OztLQUN0RjtJQUNEOztPQUVHO0lBQ1csaUNBQVksR0FBMUI7Ozs7NEJBQ0kscUJBQU0sa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFBQTs7d0JBQTNELFNBQTJELENBQUM7Ozs7O0tBQy9EOztJQXpCZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTBCOUI7SUFBRCxpQkFBQztDQTFCRCxBQTBCQyxDQTFCdUMscUJBQVMsR0EwQmhEO2tCQTFCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBdXRob3I6IGFoaGggKG5ld19xOEAxNjMuY29tKVxuICpcbiAqIERlc2NyaXB0aW9uOiDlpKfljoXlsYLnuqfln7rnsbtcbiAqL1xuXG5pbXBvcnQgeyBMYXllckJhc2UsIExheWVyVHlwZSB9IGZyb20gJy4uLy4uL3NjcmlwdC9tYW5hZ2VtZW50L0xheWVyQmFzZSc7XG5pbXBvcnQgTG9hZEJhc2UgZnJvbSAnLi4vLi4vc2NyaXB0L21hbmFnZW1lbnQvTG9hZEJhc2UnO1xuaW1wb3J0IEhhbGxMYXllck0gZnJvbSAnLi9IYWxsTGF5ZXJNJztcbmltcG9ydCBIYWxsTGF5ZXJWIGZyb20gJy4vSGFsbExheWVyVic7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsTGF5ZXJDIGV4dGVuZHMgTGF5ZXJCYXNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEhhbGxMYXllckM7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgSGFsbExheWVyQygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbGxMYXllclY6IEhhbGxMYXllclYgPSBudWxsO1xuICAgIHByaXZhdGUgaGFsbExheWVyTTogSGFsbExheWVyTSA9IG51bGw7XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdCh2OiBIYWxsTGF5ZXJWLCBtOiBIYWxsTGF5ZXJNKSB7XG4gICAgICAgIHRoaXMuaGFsbExheWVyViA9IHY7XG4gICAgICAgIHRoaXMuaGFsbExheWVyTSA9IG07XG4gICAgICAgIHRoaXMuaW5pdExheWVyQmFzZSh0aGlzLmhhbGxMYXllclYubm9kZSk7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFJlc291cmNlKCk7IFxuICAgICAgICBhd2FpdCB0aGlzLmFkZE5vZGUoTGF5ZXJUeXBlLlVJLCBMb2FkQmFzZS5pbnN0YW5jZS5nZXRMb2FkTGlzdCgpLmdldChcImNhclByZWZhYlwiKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9vei1hOa6kCBcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIGxvYWRSZXNvdXJjZSgpIHtcbiAgICAgICAgYXdhaXQgTG9hZEJhc2UuaW5zdGFuY2UubG9hZFByZWZhYihcInByZWZhYkFCXCIsIFwiY2FyUHJlZmFiXCIpO1xuICAgIH1cbn1cbiJdfQ==