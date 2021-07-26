
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
 * Description: CraC
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
        console.log("遍历根节点:", this.getAllNodeData());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9wcmVmYWJTY3JpcHQvY2FyUHJlZmFiL0NhclByZWFmYkMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQThEO0FBSzlEOzs7O0dBSUc7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBUztJQUFqRDtRQUFBLHFFQXVCQztRQWJXLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLGdCQUFVLEdBQWUsSUFBSSxDQUFDOztJQVkxQyxDQUFDO21CQXZCb0IsVUFBVTtJQUczQixzQkFBa0Isc0JBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVUsQ0FBQzthQUNuQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUtNLHlCQUFJLEdBQVgsVUFBWSxDQUFhLEVBQUUsQ0FBYTtRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O0lBdEJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBdUI5QjtJQUFELGlCQUFDO0NBdkJELEFBdUJDLENBdkJ1QyxxQkFBUyxHQXVCaEQ7a0JBdkJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5ZXJCYXNlIH0gZnJvbSAnLi4vLi4vc2NyaXB0L21hbmFnZW1lbnQvTGF5ZXJCYXNlJztcbmltcG9ydCBDYXJQcmVmYWJNIGZyb20gJy4vQ2FyUHJlYWZiTSc7XG5pbXBvcnQgQ2FyUHJlZmFiViBmcm9tICcuL0NhclByZWZhYlYnO1xuXG5cbi8qXG4gKiBBdXRob3I6IGFoaGggKG5ld19xOEAxNjMuY29tKVxuICpcbiAqIERlc2NyaXB0aW9uOiBDcmFDXG4gKi9cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJQcmVmYWJDIGV4dGVuZHMgTGF5ZXJCYXNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhclByZWZhYkM7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ2FyUHJlZmFiQztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDYXJQcmVmYWJWOiBDYXJQcmVmYWJWID0gbnVsbDtcbiAgICBwcml2YXRlIENhclByZWZhYk06IENhclByZWZhYk0gPSBudWxsO1xuXG4gICAgcHVibGljIGluaXQodjogQ2FyUHJlZmFiViwgbTogQ2FyUHJlZmFiTSkge1xuICAgICAgICB0aGlzLkNhclByZWZhYlYgPSB2O1xuICAgICAgICB0aGlzLkNhclByZWZhYk0gPSBtO1xuICAgICAgICB0aGlzLmluaXRMYXllckJhc2UodGhpcy5DYXJQcmVmYWJWLm5vZGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5tYWluKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1haW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi6YGN5Y6G5qC56IqC54K5OlwiLCB0aGlzLmdldEFsbE5vZGVEYXRhKCkpO1xuICAgIH1cbn1cbiJdfQ==