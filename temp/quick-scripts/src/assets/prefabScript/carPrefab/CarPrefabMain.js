"use strict";
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