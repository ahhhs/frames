
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/sceneScript/HallMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9c63cpDxlNLaP5MwynZCQY', 'HallMain');
// sceneScript/HallMain.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: Hall入口
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
var LayerBase_1 = require("../script/management/LayerBase");
var LoadBase_1 = require("../script/management/LoadBase");
var HallLayerManagement_1 = require("./HallLayerManagement");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HallMain = /** @class */ (function (_super) {
    __extends(HallMain, _super);
    function HallMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallMain.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        LoadBase_1.default;
                        HallLayerManagement_1.default.instance.init(this.node, { height: 720, width: 1280 });
                        return [4 /*yield*/, LoadBase_1.default.instance.loadPrefab("prefabAB", "carPrefab")];
                    case 1:
                        _a.sent();
                        HallLayerManagement_1.default.instance.addNode(LayerBase_1.LayerType.UI, LoadBase_1.default.instance.getLoadList().get("carPrefab"), "CarPrefabV");
                        return [2 /*return*/];
                }
            });
        });
    };
    HallMain = __decorate([
        ccclass
    ], HallMain);
    return HallMain;
}(cc.Component));
exports.default = HallMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZVNjcmlwdC9IYWxsTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0gsNERBQTJEO0FBQzNELDBEQUFxRDtBQUNyRCw2REFBd0Q7QUFFbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBU0EsQ0FBQztJQVBTLHlCQUFNLEdBQVo7Ozs7O3dCQUNJLGtCQUFRLENBQUE7d0JBQ1IsNkJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzt3QkFDM0UscUJBQU0sa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFBQTs7d0JBQTNELFNBQTJELENBQUM7d0JBQzVELDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMscUJBQVMsQ0FBQyxFQUFFLEVBQUUsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDOzs7OztLQUV0SDtJQVJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBUzVCO0lBQUQsZUFBQztDQVRELEFBU0MsQ0FUcUMsRUFBRSxDQUFDLFNBQVMsR0FTakQ7a0JBVG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXV0aG9yOiBhaGhoIChuZXdfcThAMTYzLmNvbSlcbiAqXG4gKiBEZXNjcmlwdGlvbjogSGFsbOWFpeWPo1xuICovXG5cbmltcG9ydCB7IE1ENSB9IGZyb20gJy4uL3NjcmlwdC9jb21tb24vTUQ1JztcbmltcG9ydCB7IExheWVyVHlwZSB9IGZyb20gJy4uL3NjcmlwdC9tYW5hZ2VtZW50L0xheWVyQmFzZSc7XG5pbXBvcnQgTG9hZEJhc2UgZnJvbSAnLi4vc2NyaXB0L21hbmFnZW1lbnQvTG9hZEJhc2UnO1xuaW1wb3J0IEhhbGxMYXllck1hbmFnZW1lbnQgZnJvbSAnLi9IYWxsTGF5ZXJNYW5hZ2VtZW50JztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxNYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgICAgTG9hZEJhc2VcbiAgICAgICAgSGFsbExheWVyTWFuYWdlbWVudC5pbnN0YW5jZS5pbml0KHRoaXMubm9kZSwgeyBoZWlnaHQ6IDcyMCwgd2lkdGg6IDEyODAgfSk7XG4gICAgICAgIGF3YWl0IExvYWRCYXNlLmluc3RhbmNlLmxvYWRQcmVmYWIoXCJwcmVmYWJBQlwiLCBcImNhclByZWZhYlwiKTtcbiAgICAgICAgSGFsbExheWVyTWFuYWdlbWVudC5pbnN0YW5jZS5hZGROb2RlKExheWVyVHlwZS5VSSwgTG9hZEJhc2UuaW5zdGFuY2UuZ2V0TG9hZExpc3QoKS5nZXQoXCJjYXJQcmVmYWJcIiksIFwiQ2FyUHJlZmFiVlwiKTtcblxuICAgIH1cbn1cblxuIl19