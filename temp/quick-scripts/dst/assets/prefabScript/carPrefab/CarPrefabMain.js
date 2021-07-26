
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabScript/carPrefab/CarPrefabMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd93eYGUP5M7r6N/Kz/FJh7', 'CarPrefabMain');
// prefabScript/carPrefab/CarPrefabMain.ts

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
exports.CarPrefabMain = void 0;
var CarPreafbC_1 = require("./CarPreafbC");
var CarPrefabV_1 = require("./CarPrefabV");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CarPrefabMain = /** @class */ (function (_super) {
    __extends(CarPrefabMain, _super);
    function CarPrefabMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.carPrefabV = null;
        return _this;
    }
    CarPrefabMain.prototype.onLoad = function () {
        CarPreafbC_1.default.instance.init(this.carPrefabV, {});
    };
    __decorate([
        property(CarPrefabV_1.default)
    ], CarPrefabMain.prototype, "carPrefabV", void 0);
    CarPrefabMain = __decorate([
        ccclass
    ], CarPrefabMain);
    return CarPrefabMain;
}(cc.Component));
exports.CarPrefabMain = CarPrefabMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9wcmVmYWJTY3JpcHQvY2FyUHJlZmFiL0NhclByZWZhYk1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsMkNBQXNDO0FBQ3RDLDJDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyxpQ0FBWTtJQUEvQztRQUFBLHFFQVFDO1FBTEcsZ0JBQVUsR0FBZSxJQUFJLENBQUM7O0lBS2xDLENBQUM7SUFIVSw4QkFBTSxHQUFiO1FBQ0ksb0JBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUpEO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7cURBQ1M7SUFIckIsYUFBYTtRQUR6QixPQUFPO09BQ0ssYUFBYSxDQVF6QjtJQUFELG9CQUFDO0NBUkQsQUFRQyxDQVJrQyxFQUFFLENBQUMsU0FBUyxHQVE5QztBQVJZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMSwgRmxpY2tlcmluZyBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBBdXRob3I6IHdlbnFpYW5xaW4gKHdlbnFpYW5xaW5AZmxpY2tlcmluZy5haSlcbiAqXG4gKiBEZXNjcmlwdGlvbjpcbiAqL1xuXG5pbXBvcnQgQ2FyUHJlZmFiQyBmcm9tICcuL0NhclByZWFmYkMnO1xuaW1wb3J0IENhclByZWZhYlYgZnJvbSAnLi9DYXJQcmVmYWJWJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBDYXJQcmVmYWJNYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShDYXJQcmVmYWJWKVxuICAgIGNhclByZWZhYlY6IENhclByZWZhYlYgPSBudWxsO1xuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgQ2FyUHJlZmFiQy5pbnN0YW5jZS5pbml0KHRoaXMuY2FyUHJlZmFiViwge30pO1xuICAgIH1cbn1cbiJdfQ==