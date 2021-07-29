
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabScript/carPrefab/CarPrefabV.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5559+MrHZArrB0Tq+TYDpK', 'CarPrefabV');
// prefabScript/carPrefab/CarPrefabV.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CarPrefabV = /** @class */ (function (_super) {
    __extends(CarPrefabV, _super);
    function CarPrefabV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarPrefabV_1 = CarPrefabV;
    Object.defineProperty(CarPrefabV, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new CarPrefabV_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    var CarPrefabV_1;
    CarPrefabV = CarPrefabV_1 = __decorate([
        ccclass,
        executeInEditMode
    ], CarPrefabV);
    return CarPrefabV;
}(cc.Component));
exports.default = CarPrefabV;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9wcmVmYWJTY3JpcHQvY2FyUHJlZmFiL0NhclByZWZhYlYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUkvRDtJQUF3Qyw4QkFBWTtJQUFwRDs7SUFTQSxDQUFDO21CQVRvQixVQUFVO0lBRzNCLHNCQUFrQixzQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBVSxFQUFFLENBQUM7YUFDckM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7O0lBUmdCLFVBQVU7UUFGOUIsT0FBTztRQUNQLGlCQUFpQjtPQUNHLFVBQVUsQ0FTOUI7SUFBRCxpQkFBQztDQVRELEFBU0MsQ0FUdUMsRUFBRSxDQUFDLFNBQVMsR0FTbkQ7a0JBVG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIxLCBGbGlja2VyaW5nIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEF1dGhvcjogd2VucWlhbnFpbiAod2VucWlhbnFpbkBmbGlja2VyaW5nLmFpKVxuICpcbiAqIERlc2NyaXB0aW9uOlxuICovXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJQcmVmYWJWIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhclByZWZhYlY7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ2FyUHJlZmFiVigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG59XG4iXX0=