
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/gameLogicScript/gameV/CarPrefabV');
require('./assets/sceneScript/hallMain');
require('./assets/script/common/AdaptiveComm');
require('./assets/script/common/AdaptiveComms');
require('./assets/script/common/GameBase');
require('./assets/script/management/LayerManagement');
require('./assets/script/management/LoadManagement');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/GameBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77c54Bf0k9IybH/2KD4YwL5', 'GameBase');
// script/common/GameBase.ts

"use strict";
/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameBase = /** @class */ (function () {
    function GameBase() {
    }
    GameBase = __decorate([
        ccclass
    ], GameBase);
    return GameBase;
}());
exports.default = GameBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0dhbWVCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRzs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBR0EsQ0FBQztJQUhvQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBRzVCO0lBQUQsZUFBQztDQUhELEFBR0MsSUFBQTtrQkFIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEsIEZsaWNrZXJpbmcgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogQXV0aG9yOiB3ZW5xaWFucWluICh3ZW5xaWFucWluQGZsaWNrZXJpbmcuYWkpXG4gKlxuICogRGVzY3JpcHRpb246XG4gKi9cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCYXNlIHtcblxuICAgXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/AdaptiveComm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8d30Bgd+dIerkWJfSBUXF+', 'AdaptiveComm');
// script/common/AdaptiveComm.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 适配脚本
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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AdaptiveComm = /** @class */ (function (_super) {
    __extends(AdaptiveComm, _super);
    function AdaptiveComm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdaptiveComm.prototype.onLoad = function () {
        this.node.width = cc.winSize.width;
        this.node.height = cc.winSize.height;
    };
    AdaptiveComm = __decorate([
        ccclass
    ], AdaptiveComm);
    return AdaptiveComm;
}(cc.Component));
exports.default = AdaptiveComm;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0FkYXB0aXZlQ29tbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7O0lBTUEsQ0FBQztJQUpHLDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBTGdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FNaEM7SUFBRCxtQkFBQztDQU5ELEFBTUMsQ0FOeUMsRUFBRSxDQUFDLFNBQVMsR0FNckQ7a0JBTm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXV0aG9yOiBhaGhoIChuZXdfcThAMTYzLmNvbSlcbiAqXG4gKiBEZXNjcmlwdGlvbjog6YCC6YWN6ISa5pysXG4gKi9cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYXB0aXZlQ29tbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IGNjLndpblNpemUud2lkdGg7XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICB9XG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/gameLogicScript/gameV/CarPrefabV.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd93eYGUP5M7r6N/Kz/FJh7', 'CarPrefabV');
// gameLogicScript/gameV/CarPrefabV.ts

"use strict";
/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarPrefabV = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CarPrefabV = /** @class */ (function (_super) {
    __extends(CarPrefabV, _super);
    function CarPrefabV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarPrefabV.prototype.init = function () {
        console.log("init", this.node.width, this.node.height);
    };
    CarPrefabV = __decorate([
        ccclass
    ], CarPrefabV);
    return CarPrefabV;
}(cc.Component));
exports.CarPrefabV = CarPrefabV;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nYW1lTG9naWNTY3JpcHQvZ2FtZVYvQ2FyUHJlZmFiVi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnQyw4QkFBWTtJQUE1Qzs7SUFLQSxDQUFDO0lBSFUseUJBQUksR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUpRLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FLdEI7SUFBRCxpQkFBQztDQUxELEFBS0MsQ0FMK0IsRUFBRSxDQUFDLFNBQVMsR0FLM0M7QUFMWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEsIEZsaWNrZXJpbmcgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogQXV0aG9yOiB3ZW5xaWFucWluICh3ZW5xaWFucWluQGZsaWNrZXJpbmcuYWkpXG4gKlxuICogRGVzY3JpcHRpb246XG4gKi9cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBDYXJQcmVmYWJWIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluaXRcIix0aGlzLm5vZGUud2lkdGgsdGhpcy5ub2RlLmhlaWdodClcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/sceneScript/hallMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9c63cpDxlNLaP5MwynZCQY', 'hallMain');
// sceneScript/hallMain.ts

"use strict";
/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
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
var LayerManagement_1 = require("../script/management/LayerManagement");
var LoadManagement_1 = require("../script/management/LoadManagement");
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
                        LayerManagement_1.LayerManagement.instance.init(this.node, { height: 720, width: 1280 });
                        return [4 /*yield*/, LoadManagement_1.default.install.loadPrefab("prefabAB", "carPrefab")];
                    case 1:
                        _a.sent();
                        LayerManagement_1.LayerManagement.instance.addNode(LayerManagement_1.LayerType.UI, LoadManagement_1.default.install.getLoadList().get("carPrefab"), "CarPrefabV");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZVNjcmlwdC9oYWxsTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILHdFQUFrRjtBQUNsRixzRUFBaUU7QUFFM0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBUUEsQ0FBQztJQU5TLHlCQUFNLEdBQVo7Ozs7O3dCQUVJLGlDQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzt3QkFDdkUscUJBQU0sd0JBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFBQTs7d0JBQWhFLFNBQWdFLENBQUM7d0JBQ2pFLGlDQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQywyQkFBUyxDQUFDLEVBQUUsRUFBRSx3QkFBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7Ozs7O0tBQ3ZIO0lBUGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FRNUI7SUFBRCxlQUFDO0NBUkQsQUFRQyxDQVJxQyxFQUFFLENBQUMsU0FBUyxHQVFqRDtrQkFSb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEsIEZsaWNrZXJpbmcgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogQXV0aG9yOiB3ZW5xaWFucWluICh3ZW5xaWFucWluQGZsaWNrZXJpbmcuYWkpXG4gKlxuICogRGVzY3JpcHRpb246XG4gKi9cblxuaW1wb3J0IHsgTGF5ZXJNYW5hZ2VtZW50LCBMYXllclR5cGUgfSBmcm9tICcuLi9zY3JpcHQvbWFuYWdlbWVudC9MYXllck1hbmFnZW1lbnQnO1xuaW1wb3J0IExvYWRNYW5hZ2VtZW50IGZyb20gJy4uL3NjcmlwdC9tYW5hZ2VtZW50L0xvYWRNYW5hZ2VtZW50JztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxNYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcblxuICAgICAgICBMYXllck1hbmFnZW1lbnQuaW5zdGFuY2UuaW5pdCh0aGlzLm5vZGUsIHsgaGVpZ2h0OiA3MjAsIHdpZHRoOiAxMjgwIH0pO1xuICAgICAgICBhd2FpdCBMb2FkTWFuYWdlbWVudC5pbnN0YWxsLmxvYWRQcmVmYWIoXCJwcmVmYWJBQlwiLCBcImNhclByZWZhYlwiKTtcbiAgICAgICAgTGF5ZXJNYW5hZ2VtZW50Lmluc3RhbmNlLmFkZE5vZGUoTGF5ZXJUeXBlLlVJLCBMb2FkTWFuYWdlbWVudC5pbnN0YWxsLmdldExvYWRMaXN0KCkuZ2V0KFwiY2FyUHJlZmFiXCIpLCBcIkNhclByZWZhYlZcIik7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/management/LayerManagement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7448agyD2tD4re4jizMrGBG', 'LayerManagement');
// script/management/LayerManagement.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: ui层级管理器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerManagement = exports.NodeSize = exports.LayerType = void 0;
var AdaptiveComms_1 = require("../common/AdaptiveComms");
var LayerType;
(function (LayerType) {
    LayerType[LayerType["UI"] = 0] = "UI";
    LayerType[LayerType["ADAPTIVE"] = 1] = "ADAPTIVE";
    LayerType[LayerType["POPUP"] = 2] = "POPUP";
})(LayerType = exports.LayerType || (exports.LayerType = {}));
var NodeSize = /** @class */ (function () {
    function NodeSize() {
    }
    return NodeSize;
}());
exports.NodeSize = NodeSize;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LayerManagement = /** @class */ (function () {
    function LayerManagement() {
        this.root = undefined;
    }
    LayerManagement_1 = LayerManagement;
    Object.defineProperty(LayerManagement, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new LayerManagement_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 初始化
     * @param node 根节点
     * @param size 屏幕大小
     */
    LayerManagement.prototype.init = function (node, size) {
        this.root = node;
        this.initData(size);
        this.addLayerMain();
    };
    /**
     * 初始化参数
     * @param size
     */
    LayerManagement.prototype.initData = function (size) {
        this.size = size;
    };
    /**
     * 添加层级入口
     */
    LayerManagement.prototype.addLayerMain = function () {
        for (var i = 0; i < Object.values(LayerType).length / 2; i++) {
            this.addLayer(LayerType[i]);
        }
    };
    /**
     * 添加层级
     */
    LayerManagement.prototype.addLayer = function (string) {
        var node = new cc.Node();
        node.name = string + "Layer";
        node.width = this.size.width;
        node.height = this.size.height;
        node.addComponent(AdaptiveComms_1.default).init();
        this.root.addChild(node, this.rootZIndex++);
    };
    /**
     * 获得一个层级
     * @param name nodeName
     * @returns
     */
    LayerManagement.prototype.getLayer = function (name) {
        return this.root.getChildByName(name + "Layer");
    };
    /**
     * 获得根节点
     * @returns
     */
    LayerManagement.prototype.getRootNode = function () {
        return this.root;
    };
    /**
     * 层级添加node
     * @param parentNode 父节点
     * @param node 目标节点
     * @param script 目标脚本
     */
    LayerManagement.prototype.addNode = function (parentNode, node, script, ZIndex) {
        if (ZIndex === void 0) { ZIndex = 0; }
        var nodes = cc.instantiate(node);
        nodes.addComponent(script).init();
        nodes.zIndex = ZIndex;
        this.getLayer(LayerType[parentNode]).addChild(nodes);
        if (nodes.getComponent(cc.Widget)) {
            nodes.getComponent(cc.Widget).alignMode = cc.Widget.AlignMode.ONCE;
        }
    };
    var LayerManagement_1;
    LayerManagement = LayerManagement_1 = __decorate([
        ccclass
    ], LayerManagement);
    return LayerManagement;
}());
exports.LayerManagement = LayerManagement;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9MYXllck1hbmFnZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7Ozs7Ozs7OztBQUdILHlEQUFvRDtBQUVwRCxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIscUNBQUksQ0FBQTtJQUNKLGlEQUFVLENBQUE7SUFDViwyQ0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBRUQ7SUFBQTtJQUdBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSw0QkFBUTtBQUlmLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFHWSxTQUFJLEdBQVksU0FBUyxDQUFDO0lBNEV0QyxDQUFDO3dCQS9FWSxlQUFlO0lBTXhCLHNCQUFrQiwyQkFBUTthQUExQjtZQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWUsRUFBRSxDQUFDO2FBQzFDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0Q7Ozs7T0FJRztJQUNJLDhCQUFJLEdBQVgsVUFBWSxJQUFhLEVBQUUsSUFBYztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ssa0NBQVEsR0FBaEIsVUFBaUIsSUFBYztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0Q7O09BRUc7SUFDSyxzQ0FBWSxHQUFwQjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFDRDs7T0FFRztJQUNLLGtDQUFRLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNEOzs7O09BSUc7SUFDSSxrQ0FBUSxHQUFmLFVBQWdCLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNEOzs7T0FHRztJQUNJLHFDQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNJLGlDQUFPLEdBQWQsVUFBZSxVQUFrQixFQUFFLElBQWEsRUFBRSxNQUFjLEVBQUUsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxVQUFrQjtRQUNoRixJQUFJLEtBQUssR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQixLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ3RFO0lBQ0wsQ0FBQzs7SUE5RVEsZUFBZTtRQUQzQixPQUFPO09BQ0ssZUFBZSxDQStFM0I7SUFBRCxzQkFBQztDQS9FRCxBQStFQyxJQUFBO0FBL0VZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEF1dGhvcjogYWhoaCAobmV3X3E4QDE2My5jb20pXG4gKlxuICogRGVzY3JpcHRpb246IHVp5bGC57qn566h55CG5ZmoXG4gKi9cblxuaW1wb3J0IEFkYXB0aXZlQ29tbSBmcm9tICcuLi9jb21tb24vQWRhcHRpdmVDb21tJztcbmltcG9ydCBBZGFwdGl2ZUNvbW1zIGZyb20gJy4uL2NvbW1vbi9BZGFwdGl2ZUNvbW1zJztcblxuZXhwb3J0IGVudW0gTGF5ZXJUeXBlIHtcbiAgICBcIlVJXCIsXG4gICAgXCJBREFQVElWRVwiLFxuICAgIFwiUE9QVVBcIixcbn1cblxuZXhwb3J0IGNsYXNzIE5vZGVTaXplIHtcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XG59XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIExheWVyTWFuYWdlbWVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IExheWVyTWFuYWdlbWVudDtcbiAgICBwcml2YXRlIHJvb3Q6IGNjLk5vZGUgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSByb290WkluZGV4OiAwO1xuICAgIHByaXZhdGUgc2l6ZTogTm9kZVNpemU7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgTGF5ZXJNYW5hZ2VtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJZcbiAgICAgKiBAcGFyYW0gbm9kZSDmoLnoioLngrlcbiAgICAgKiBAcGFyYW0gc2l6ZSDlsY/luZXlpKflsI9cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdChub2RlOiBjYy5Ob2RlLCBzaXplOiBOb2RlU2l6ZSkge1xuICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICB0aGlzLmluaXREYXRhKHNpemUpO1xuICAgICAgICB0aGlzLmFkZExheWVyTWFpbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJblj4LmlbBcbiAgICAgKiBAcGFyYW0gc2l6ZSBcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXREYXRhKHNpemU6IE5vZGVTaXplKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOWxgue6p+WFpeWPo1xuICAgICAqL1xuICAgIHByaXZhdGUgYWRkTGF5ZXJNYWluKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC52YWx1ZXMoTGF5ZXJUeXBlKS5sZW5ndGggLyAyOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGF5ZXIoTGF5ZXJUeXBlW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDlsYLnuqdcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZExheWVyKHN0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBub2RlLm5hbWUgPSBzdHJpbmcgKyBcIkxheWVyXCI7XG4gICAgICAgIG5vZGUud2lkdGggPSB0aGlzLnNpemUud2lkdGg7XG4gICAgICAgIG5vZGUuaGVpZ2h0ID0gdGhpcy5zaXplLmhlaWdodDtcbiAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoQWRhcHRpdmVDb21tcykuaW5pdCgpO1xuICAgICAgICB0aGlzLnJvb3QuYWRkQ2hpbGQobm9kZSwgdGhpcy5yb290WkluZGV4KyspO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflvpfkuIDkuKrlsYLnuqdcbiAgICAgKiBAcGFyYW0gbmFtZSBub2RlTmFtZVxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMYXllcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5nZXRDaGlsZEJ5TmFtZShuYW1lICsgXCJMYXllclwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635b6X5qC56IqC54K5XG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIGdldFJvb3ROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlsYLnuqfmt7vliqBub2RlXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUg54i26IqC54K5XG4gICAgICogQHBhcmFtIG5vZGUg55uu5qCH6IqC54K5XG4gICAgICogQHBhcmFtIHNjcmlwdCDnm67moIfohJrmnKxcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkTm9kZShwYXJlbnROb2RlOiBudW1iZXIsIG5vZGU6IGNjLk5vZGUsIHNjcmlwdDogc3RyaW5nLCBaSW5kZXg6IG51bWJlciA9IDApIHtcbiAgICAgICAgbGV0IG5vZGVzOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUobm9kZSk7XG4gICAgICAgIG5vZGVzLmFkZENvbXBvbmVudChzY3JpcHQpLmluaXQoKTtcbiAgICAgICAgbm9kZXMuekluZGV4ID0gWkluZGV4O1xuICAgICAgICB0aGlzLmdldExheWVyKExheWVyVHlwZVtwYXJlbnROb2RlXSkuYWRkQ2hpbGQobm9kZXMpO1xuICAgICAgICBpZiAobm9kZXMuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkpIHtcbiAgICAgICAgICAgIG5vZGVzLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmFsaWduTW9kZSA9IGNjLldpZGdldC5BbGlnbk1vZGUuT05DRTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/AdaptiveComms.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e698vmH65J24tFNPwJYmFO', 'AdaptiveComms');
// script/common/AdaptiveComms.ts

"use strict";
// Copyright (C) 2019, Flickering Inc. All rights reserved.
// Author: hongchangfu (hongchangfu@flickering.ai)
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
Object.defineProperty(exports, "__esModule", { value: true });
// 用于界面适配
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AdaptiveComms = /** @class */ (function (_super) {
    __extends(AdaptiveComms, _super);
    function AdaptiveComms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdaptiveComms.prototype.init = function () {
        this.fixedViewSize();
    };
    AdaptiveComms.prototype.fixedViewSize = function () {
        var disignSize = cc.view.getDesignResolutionSize();
        var designScale = disignSize.width / disignSize.height;
        var nodeSize = cc.size(disignSize.width, disignSize.height);
        var size = cc.view.getFrameSize();
        var scale = size.width / size.height;
        if (scale < designScale)
            nodeSize.height = nodeSize.width / scale;
        else
            nodeSize.width = nodeSize.height * scale;
        console.log("输出:", nodeSize);
        this.node.setContentSize(nodeSize);
    };
    AdaptiveComms = __decorate([
        ccclass
    ], AdaptiveComms);
    return AdaptiveComms;
}(cc.Component));
exports.default = AdaptiveComms;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0FkYXB0aXZlQ29tbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEyRDtBQUMzRCxrREFBa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxTQUFTO0FBRUgsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7O0lBaUJBLENBQUM7SUFmRyw0QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDTyxxQ0FBYSxHQUFyQjtRQUNJLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNyRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLEtBQUssR0FBRyxXQUFXO1lBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7WUFDN0QsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUU5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBaEJnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBaUJqQztJQUFELG9CQUFDO0NBakJELEFBaUJDLENBakIwQyxFQUFFLENBQUMsU0FBUyxHQWlCdEQ7a0JBakJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChDKSAyMDE5LCBGbGlja2VyaW5nIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIEF1dGhvcjogaG9uZ2NoYW5nZnUgKGhvbmdjaGFuZ2Z1QGZsaWNrZXJpbmcuYWkpXG5cbi8vIOeUqOS6jueVjOmdoumAgumFjVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRhcHRpdmVDb21tcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmZpeGVkVmlld1NpemUoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBmaXhlZFZpZXdTaXplKCkge1xuICAgICAgICBjb25zdCBkaXNpZ25TaXplID0gY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpO1xuICAgICAgICBjb25zdCBkZXNpZ25TY2FsZSA9IGRpc2lnblNpemUud2lkdGggLyBkaXNpZ25TaXplLmhlaWdodDtcbiAgICAgICAgY29uc3Qgbm9kZVNpemUgPSBjYy5zaXplKGRpc2lnblNpemUud2lkdGgsIGRpc2lnblNpemUuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuICAgICAgICBsZXQgc2NhbGUgPSBzaXplLndpZHRoIC8gc2l6ZS5oZWlnaHQ7XG4gICAgICAgIGlmIChzY2FsZSA8IGRlc2lnblNjYWxlKSBub2RlU2l6ZS5oZWlnaHQgPSBub2RlU2l6ZS53aWR0aCAvIHNjYWxlO1xuICAgICAgICBlbHNlIG5vZGVTaXplLndpZHRoID0gbm9kZVNpemUuaGVpZ2h0ICogc2NhbGU7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCLovpPlh7o6XCIsbm9kZVNpemUpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUobm9kZVNpemUpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
