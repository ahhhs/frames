
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