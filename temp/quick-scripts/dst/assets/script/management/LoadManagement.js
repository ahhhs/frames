
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/management/LoadManagement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a59a83i71GR72ERIyE6TEb', 'LoadManagement');
// script/management/LoadManagement.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 加载管理器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadManagement = /** @class */ (function () {
    function LoadManagement() {
        this.loadArr = new Map();
    }
    LoadManagement_1 = LoadManagement;
    Object.defineProperty(LoadManagement, "install", {
        get: function () {
            if (!this._install) {
                this._install = new LoadManagement_1();
            }
            return this._install;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 加载预制体
     * @param url
     * @param asserts
     * @returns
     */
    LoadManagement.prototype.loadPrefab = function (url, asserts) {
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
     * @param url
     * @param asserts
     */
    LoadManagement.prototype.loadPrefabs = function (url, fileName) {
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
    LoadManagement.prototype.getLoadList = function () {
        return this.loadArr;
    };
    var LoadManagement_1;
    LoadManagement = LoadManagement_1 = __decorate([
        ccclass
    ], LoadManagement);
    return LoadManagement;
}());
exports.default = LoadManagement;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9Mb2FkTWFuYWdlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBR1ksWUFBTyxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBcURsRCxDQUFDO3VCQXhEb0IsY0FBYztJQUsvQixzQkFBa0IseUJBQU87YUFBekI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdCQUFjLEVBQUUsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVEOzs7OztPQUtHO0lBQ0ksbUNBQVUsR0FBakIsVUFBa0IsR0FBVyxFQUFFLE9BQWU7UUFBOUMsaUJBWUM7UUFWRyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsR0FBRztZQUN6QixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBOEI7Z0JBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87b0JBQzlCLElBQUksT0FBTyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7d0JBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQ3hDLEdBQUcsRUFBRSxDQUFDO3FCQUNUO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksb0NBQVcsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLFFBQWdCO1FBQWhELGlCQVdDO1FBVkcsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLEdBQUc7WUFDekIsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQThCO2dCQUNoRSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxPQUFPO29CQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDakQ7b0JBQ0QsR0FBRyxFQUFFLENBQUE7Z0JBQ1QsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNEOzs7T0FHRztJQUNJLG9DQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7O0lBdkRnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBd0RsQztJQUFELHFCQUFDO0NBeERELEFBd0RDLElBQUE7a0JBeERvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEF1dGhvcjogYWhoaCAobmV3X3E4QDE2My5jb20pXG4gKlxuICogRGVzY3JpcHRpb246IOWKoOi9veeuoeeQhuWZqFxuICovXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkTWFuYWdlbWVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFsbDogTG9hZE1hbmFnZW1lbnQ7XG4gICAgcHJpdmF0ZSBsb2FkQXJyOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFsbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YWxsID0gbmV3IExvYWRNYW5hZ2VtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L296aKE5Yi25L2TXG4gICAgICogQHBhcmFtIHVybCBcbiAgICAgKiBAcGFyYW0gYXNzZXJ0cyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZFByZWZhYih1cmw6IHN0cmluZywgYXNzZXJ0czogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHVybCwgKGVsbCwgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgYnVuZGxlLmxvYWQoYXNzZXJ0cywgKGVsbCwgYXNzZXJ0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXJ0cyBpbnN0YW5jZW9mIGNjLlByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQXJyLnNldChhc3NlcnRzLm5hbWUsIGFzc2VydHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3pooTliLbkvZPmlofku7blpLlcbiAgICAgKiBAcGFyYW0gdXJsIFxuICAgICAqIEBwYXJhbSBhc3NlcnRzIFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkUHJlZmFicyh1cmw6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUodXJsLCAoZWxsLCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpID0+IHtcbiAgICAgICAgICAgICAgICBidW5kbGUubG9hZERpcihmaWxlTmFtZSwgKGVsbCwgYXNzZXJ0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2VydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEFyci5zZXQoYXNzZXJ0c1tpXS5uYW1lLCBhc3NlcnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXMoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflvpfliqDovb3liJfooahcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TG9hZExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRBcnI7XG4gICAgfVxufVxuIl19