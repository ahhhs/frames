
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/hall/scripts/HallMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9c63cpDxlNLaP5MwynZCQY', 'HallMain');
// hall/scripts/HallMain.ts

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
var HallLayerC_1 = require("./HallLayerC");
var HallLayerV_1 = require("./HallLayerV");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var HallMain = /** @class */ (function (_super) {
    __extends(HallMain, _super);
    // @executeInEditMode
    function HallMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hallLayerV = null;
        return _this;
    }
    Object.defineProperty(HallMain.prototype, "config", {
        get: function () {
            return false;
        },
        set: function (fiag) {
            this.demo();
        },
        enumerable: false,
        configurable: true
    });
    HallMain.prototype.demo = function () {
        if (CC_EDITOR) {
            var path = "db://assets/config/config1.json";
            var nodeName = {};
            for (var i = 0; i < this.node.children.length; i++) {
                nodeName[this.node.children[i].name + "Id"] = this.node.children[i].uuid;
            }
            Editor.assetdb.createOrSave(path, JSON.stringify(nodeName), function (err, results) {
                this.isSave = false;
                cc.log('配置已更新');
            });
        }
    };
    HallMain.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                cc.log("onLoad");
                HallLayerC_1.default.instance.init(this.hallLayerV, {});
                this.demo();
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(HallLayerV_1.default)
    ], HallMain.prototype, "hallLayerV", void 0);
    __decorate([
        property({ displayName: "更新配置" })
    ], HallMain.prototype, "config", null);
    HallMain = __decorate([
        ccclass
        // @executeInEditMode
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9oYWxsL3NjcmlwdHMvSGFsbE1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlILDJDQUFzQztBQUN0QywyQ0FBc0M7QUFFaEMsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFJL0Q7SUFBc0MsNEJBQVk7SUFEbEQscUJBQXFCO0lBQ3JCO1FBQUEscUVBNkJDO1FBM0JHLGdCQUFVLEdBQWUsSUFBSSxDQUFDOztJQTJCbEMsQ0FBQztJQXpCRyxzQkFBVyw0QkFBTTthQUdqQjtZQUNJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7YUFMRCxVQUFrQixJQUFJO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUlELHVCQUFJLEdBQUo7UUFDSSxJQUFJLFNBQVMsRUFBRTtZQUNYLElBQUksSUFBSSxHQUFHLGlDQUFpQyxDQUFDO1lBQzdDLElBQUksUUFBUSxHQUFHLEVBQ2QsQ0FBQTtZQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQzVFO1lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxHQUFHLEVBQUUsT0FBTztnQkFDOUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDbkIsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFDSyx5QkFBTSxHQUFaOzs7Z0JBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakIsb0JBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztLQUNmO0lBMUJEO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7Z0RBQ1M7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7MENBR2pDO0lBTmdCLFFBQVE7UUFGNUIsT0FBTztRQUNSLHFCQUFxQjtPQUNBLFFBQVEsQ0E2QjVCO0lBQUQsZUFBQztDQTdCRCxBQTZCQyxDQTdCcUMsRUFBRSxDQUFDLFNBQVMsR0E2QmpEO2tCQTdCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBdXRob3I6IGFoaGggKG5ld19xOEAxNjMuY29tKVxuICpcbiAqIERlc2NyaXB0aW9uOiBIYWxs5YWl5Y+jXG4gKi9cblxuaW1wb3J0IHsgTGF5ZXJUeXBlIH0gZnJvbSAnLi4vLi4vc2NyaXB0L21hbmFnZW1lbnQvTGF5ZXJCYXNlJztcbmltcG9ydCBMb2FkQmFzZSBmcm9tICcuLi8uLi9zY3JpcHQvbWFuYWdlbWVudC9Mb2FkQmFzZSc7XG5pbXBvcnQgSGFsbExheWVyQyBmcm9tICcuL0hhbGxMYXllckMnO1xuaW1wb3J0IEhhbGxMYXllclYgZnJvbSAnLi9IYWxsTGF5ZXJWJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG4vLyBAZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxNYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoSGFsbExheWVyVilcbiAgICBoYWxsTGF5ZXJWOiBIYWxsTGF5ZXJWID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLmm7TmlrDphY3nva5cIiB9KVxuICAgIHB1YmxpYyBzZXQgY29uZmlnKGZpYWcpIHtcbiAgICAgICAgdGhpcy5kZW1vKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGRlbW8oKSB7XG4gICAgICAgIGlmIChDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIGxldCBwYXRoID0gYGRiOi8vYXNzZXRzL2NvbmZpZy9jb25maWcxLmpzb25gO1xuICAgICAgICAgICAgbGV0IG5vZGVOYW1lID0ge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBub2RlTmFtZVt0aGlzLm5vZGUuY2hpbGRyZW5baV0ubmFtZSArIFwiSWRcIl0gPSB0aGlzLm5vZGUuY2hpbGRyZW5baV0udXVpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEVkaXRvci5hc3NldGRiLmNyZWF0ZU9yU2F2ZShwYXRoLCBKU09OLnN0cmluZ2lmeShub2RlTmFtZSksIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2F2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNjLmxvZygn6YWN572u5bey5pu05pawJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgICAgY2MubG9nKFwib25Mb2FkXCIpO1xuICAgICAgICBIYWxsTGF5ZXJDLmluc3RhbmNlLmluaXQodGhpcy5oYWxsTGF5ZXJWLCB7fSk7XG4gICAgICAgIHRoaXMuZGVtbygpO1xuICAgIH1cbn1cblxuIl19