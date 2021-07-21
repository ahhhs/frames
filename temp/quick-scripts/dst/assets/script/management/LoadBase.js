
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/management/LoadBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a59a83i71GR72ERIyE6TEb', 'LoadBase');
// script/management/LoadBase.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 加载基类
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadBase = /** @class */ (function () {
    function LoadBase() {
        this.loadArr = new Map();
    }
    LoadBase_1 = LoadBase;
    Object.defineProperty(LoadBase, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new LoadBase_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 加载预制体
     * @param url 路径
     * @param asserts 资源name
     * @returns
     */
    LoadBase.prototype.loadPrefab = function (url, asserts) {
        var _this = this;
        return new Promise(function (res) {
            cc.assetManager.loadBundle(url, function (ell, bundle) {
                bundle.load(asserts, function (ell, asserts) {
                    if (asserts instanceof cc.Prefab) {
                        _this.loadArr.set(asserts.name, asserts);
                        res();
                    }
                });
            });
        });
    };
    /**
     * 加载预制体文件夹
     * @param url 路径
     * @param fileName 文件夹name
     */
    LoadBase.prototype.loadPrefabs = function (url, fileName) {
        var _this = this;
        return new Promise(function (res) {
            cc.assetManager.loadBundle(url, function (ell, bundle) {
                bundle.loadDir(fileName, function (ell, asserts) {
                    for (var i = 0; i < asserts.length; i++) {
                        _this.loadArr.set(asserts[i].name, asserts[i]);
                    }
                    res();
                });
            });
        });
    };
    /**
     * 获得加载列表
     * @returns
     */
    LoadBase.prototype.getLoadList = function () {
        return this.loadArr;
    };
    var LoadBase_1;
    LoadBase = LoadBase_1 = __decorate([
        ccclass
    ], LoadBase);
    return LoadBase;
}());
exports.default = LoadBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9Mb2FkQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBR1ksWUFBTyxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBb0RsRCxDQUFDO2lCQXZEb0IsUUFBUTtJQUt6QixzQkFBa0Isb0JBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVEsRUFBRSxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0Q7Ozs7O09BS0c7SUFDSSw2QkFBVSxHQUFqQixVQUFrQixHQUFXLEVBQUUsT0FBZTtRQUE5QyxpQkFZQztRQVZHLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxHQUFHO1lBQ3pCLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUE4QjtnQkFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTztvQkFDOUIsSUFBSSxPQUFPLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRTt3QkFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDeEMsR0FBRyxFQUFFLENBQUM7cUJBQ1Q7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw4QkFBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsUUFBZ0I7UUFBaEQsaUJBV0M7UUFWRyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsR0FBRztZQUN6QixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBOEI7Z0JBQ2hFLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87b0JBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUNyQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNqRDtvQkFDRCxHQUFHLEVBQUUsQ0FBQTtnQkFDVCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksOEJBQVcsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7SUF0RGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1RDVCO0lBQUQsZUFBQztDQXZERCxBQXVEQyxJQUFBO2tCQXZEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBdXRob3I6IGFoaGggKG5ld19xOEAxNjMuY29tKVxuICpcbiAqIERlc2NyaXB0aW9uOiDliqDovb3ln7rnsbtcbiAqL1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZEJhc2Uge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBMb2FkQmFzZTtcbiAgICBwcml2YXRlIGxvYWRBcnI6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgTG9hZEJhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9vemihOWItuS9k1xuICAgICAqIEBwYXJhbSB1cmwg6Lev5b6EXG4gICAgICogQHBhcmFtIGFzc2VydHMg6LWE5rqQbmFtZVxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkUHJlZmFiKHVybDogc3RyaW5nLCBhc3NlcnRzOiBzdHJpbmcpIHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUodXJsLCAoZWxsLCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpID0+IHtcbiAgICAgICAgICAgICAgICBidW5kbGUubG9hZChhc3NlcnRzLCAoZWxsLCBhc3NlcnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3NlcnRzIGluc3RhbmNlb2YgY2MuUHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRBcnIuc2V0KGFzc2VydHMubmFtZSwgYXNzZXJ0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9vemihOWItuS9k+aWh+S7tuWkuVxuICAgICAqIEBwYXJhbSB1cmwg6Lev5b6EXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIOaWh+S7tuWkuW5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZFByZWZhYnModXJsOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHVybCwgKGVsbCwgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgYnVuZGxlLmxvYWREaXIoZmlsZU5hbWUsIChlbGwsIGFzc2VydHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NlcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRBcnIuc2V0KGFzc2VydHNbaV0ubmFtZSwgYXNzZXJ0c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635b6X5Yqg6L295YiX6KGoXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIGdldExvYWRMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQXJyO1xuICAgIH1cbn1cbiJdfQ==