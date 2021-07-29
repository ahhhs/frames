
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabScript/carPrefab/CarPreafbC.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e21d8/XN61F1bqB2i7DZ4oF', 'CarPreafbC');
// prefabScript/carPrefab/CarPreafbC.ts

"use strict";
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
var LayerBase_1 = require("../../script/management/LayerBase");
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: CarC
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CarPrefabC = /** @class */ (function (_super) {
    __extends(CarPrefabC, _super);
    function CarPrefabC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CarPrefabV = null;
        _this.CarPrefabM = null;
        return _this;
    }
    CarPrefabC_1 = CarPrefabC;
    Object.defineProperty(CarPrefabC, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new CarPrefabC_1;
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    CarPrefabC.prototype.init = function (v, m) {
        this.CarPrefabV = v;
        this.CarPrefabM = m;
        this.initLayerBase(this.CarPrefabV.node, false);
        this.main();
    };
    CarPrefabC.prototype.main = function () {
        // console.log("遍历根节点:", this.getAllNodeData());
    };
    var CarPrefabC_1;
    CarPrefabC = CarPrefabC_1 = __decorate([
        ccclass
    ], CarPrefabC);
    return CarPrefabC;
}(LayerBase_1.LayerBase));
exports.default = CarPrefabC;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9wcmVmYWJTY3JpcHQvY2FyUHJlZmFiL0NhclByZWFmYkMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQThEO0FBSzlEOzs7O0dBSUc7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBUztJQUFqRDtRQUFBLHFFQXVCQztRQWJXLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLGdCQUFVLEdBQWUsSUFBSSxDQUFDOztJQVkxQyxDQUFDO21CQXZCb0IsVUFBVTtJQUczQixzQkFBa0Isc0JBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVUsQ0FBQzthQUNuQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUtNLHlCQUFJLEdBQVgsVUFBWSxDQUFhLEVBQUUsQ0FBYTtRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLGdEQUFnRDtJQUNwRCxDQUFDOztJQXRCZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXVCOUI7SUFBRCxpQkFBQztDQXZCRCxBQXVCQyxDQXZCdUMscUJBQVMsR0F1QmhEO2tCQXZCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheWVyQmFzZSB9IGZyb20gJy4uLy4uL3NjcmlwdC9tYW5hZ2VtZW50L0xheWVyQmFzZSc7XG5pbXBvcnQgQ2FyUHJlZmFiTSBmcm9tICcuL0NhclByZWFmYk0nO1xuaW1wb3J0IENhclByZWZhYlYgZnJvbSAnLi9DYXJQcmVmYWJWJztcblxuXG4vKlxuICogQXV0aG9yOiBhaGhoIChuZXdfcThAMTYzLmNvbSlcbiAqXG4gKiBEZXNjcmlwdGlvbjogQ2FyQ1xuICovXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyUHJlZmFiQyBleHRlbmRzIExheWVyQmFzZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDYXJQcmVmYWJDO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IENhclByZWZhYkM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgQ2FyUHJlZmFiVjogQ2FyUHJlZmFiViA9IG51bGw7XG4gICAgcHJpdmF0ZSBDYXJQcmVmYWJNOiBDYXJQcmVmYWJNID0gbnVsbDtcblxuICAgIHB1YmxpYyBpbml0KHY6IENhclByZWZhYlYsIG06IENhclByZWZhYk0pIHtcbiAgICAgICAgdGhpcy5DYXJQcmVmYWJWID0gdjtcbiAgICAgICAgdGhpcy5DYXJQcmVmYWJNID0gbTtcbiAgICAgICAgdGhpcy5pbml0TGF5ZXJCYXNlKHRoaXMuQ2FyUHJlZmFiVi5ub2RlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMubWFpbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtYWluKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumBjeWOhuagueiKgueCuTpcIiwgdGhpcy5nZXRBbGxOb2RlRGF0YSgpKTtcbiAgICB9XG59XG4iXX0=