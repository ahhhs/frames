
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
        this.loadList = new Map();
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
            if (CC_EDITOR) {
                var path = "db://assets/prefabAB/carPrefab.prefab";
                _this.editorLoad(path);
            }
            else {
                cc.assetManager.loadBundle(url, function (ell, bundle) {
                    bundle.load(asserts, function (ell, asserts) {
                        if (asserts instanceof cc.Prefab) {
                            _this.loadList.set(asserts.name, asserts);
                            res();
                        }
                    });
                });
            }
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
                        _this.loadList.set(asserts[i].name, asserts[i]);
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
        return this.loadList;
    };
    /**
     * 编辑器模式加载
     * @param path
     * @param cb
     */
    LoadBase.prototype.editorLoad = function (path, cb) {
        var fileUuid = Editor.assetdb.remote.urlToUuid(path);
        this.getAssetByUuid(fileUuid, cb);
    };
    LoadBase.prototype.getAssetByUuid = function (uuid, cb) {
        cc.assetManager.loadAny(uuid, function (err, asset) {
            if (cb) {
                cb(err, asset);
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9Mb2FkQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBR1ksYUFBUSxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBdUVuRCxDQUFDO2lCQTFFb0IsUUFBUTtJQUt6QixzQkFBa0Isb0JBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVEsRUFBRSxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0Q7Ozs7O09BS0c7SUFDSSw2QkFBVSxHQUFqQixVQUFrQixHQUFXLEVBQUUsT0FBZTtRQUE5QyxpQkFnQkM7UUFmRyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsR0FBRztZQUN6QixJQUFJLFNBQVMsRUFBRTtnQkFDWCxJQUFJLElBQUksR0FBRyx1Q0FBdUMsQ0FBQztnQkFDbkQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtpQkFBTTtnQkFDSCxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBOEI7b0JBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87d0JBQzlCLElBQUksT0FBTyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7NEJBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7NEJBQ3pDLEdBQUcsRUFBRSxDQUFDO3lCQUNUO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksOEJBQVcsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLFFBQWdCO1FBQWhELGlCQVdDO1FBVkcsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLEdBQUc7WUFDekIsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQThCO2dCQUNoRSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxPQUFPO29CQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEQ7b0JBQ0QsR0FBRyxFQUFFLENBQUE7Z0JBQ1QsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNEOzs7T0FHRztJQUNJLDhCQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksNkJBQVUsR0FBakIsVUFBa0IsSUFBWSxFQUFFLEVBQWE7UUFDekMsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDTSxpQ0FBYyxHQUFyQixVQUFzQixJQUFZLEVBQUUsRUFBYTtRQUM3QyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSztZQUNyQyxJQUFHLEVBQUUsRUFBQztnQkFDRixFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOztJQXpFZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBFNUI7SUFBRCxlQUFDO0NBMUVELEFBMEVDLElBQUE7a0JBMUVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEF1dGhvcjogYWhoaCAobmV3X3E4QDE2My5jb20pXG4gKlxuICogRGVzY3JpcHRpb246IOWKoOi9veWfuuexu1xuICovXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkQmFzZSB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IExvYWRCYXNlO1xuICAgIHByaXZhdGUgbG9hZExpc3Q6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgTG9hZEJhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9vemihOWItuS9k1xuICAgICAqIEBwYXJhbSB1cmwg6Lev5b6EXG4gICAgICogQHBhcmFtIGFzc2VydHMg6LWE5rqQbmFtZVxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkUHJlZmFiKHVybDogc3RyaW5nLCBhc3NlcnRzOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChDQ19FRElUT1IpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGF0aCA9IGBkYjovL2Fzc2V0cy9wcmVmYWJBQi9jYXJQcmVmYWIucHJlZmFiYDtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckxvYWQocGF0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHVybCwgKGVsbCwgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkKGFzc2VydHMsIChlbGwsIGFzc2VydHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhc3NlcnRzIGluc3RhbmNlb2YgY2MuUHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTGlzdC5zZXQoYXNzZXJ0cy5uYW1lLCBhc3NlcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqDovb3pooTliLbkvZPmlofku7blpLlcbiAgICAgKiBAcGFyYW0gdXJsIOi3r+W+hFxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSDmlofku7blpLluYW1lXG4gICAgICovXG4gICAgcHVibGljIGxvYWRQcmVmYWJzKHVybDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzKSA9PiB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZSh1cmwsIChlbGwsIGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkRGlyKGZpbGVOYW1lLCAoZWxsLCBhc3NlcnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTGlzdC5zZXQoYXNzZXJ0c1tpXS5uYW1lLCBhc3NlcnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXMoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflvpfliqDovb3liJfooahcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TG9hZExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRMaXN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnvJbovpHlmajmqKHlvI/liqDovb1cbiAgICAgKiBAcGFyYW0gcGF0aCBcbiAgICAgKiBAcGFyYW0gY2IgXG4gICAgICovXG4gICAgcHVibGljIGVkaXRvckxvYWQocGF0aDogc3RyaW5nLCBjYj86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZpbGVVdWlkID0gRWRpdG9yLmFzc2V0ZGIucmVtb3RlLnVybFRvVXVpZChwYXRoKTtcbiAgICAgICAgdGhpcy5nZXRBc3NldEJ5VXVpZChmaWxlVXVpZCwgY2IpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0QXNzZXRCeVV1aWQodXVpZDogc3RyaW5nLCBjYj86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQW55KHV1aWQsIChlcnIsIGFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZihjYil7XG4gICAgICAgICAgICAgICAgY2IoZXJyLCBhc3NldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19