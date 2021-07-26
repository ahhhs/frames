"use strict";
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