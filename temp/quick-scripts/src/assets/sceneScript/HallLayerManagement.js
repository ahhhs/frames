"use strict";
cc._RF.push(module, '7ffc29RrN9DyJrMcpgR8PIW', 'HallLayerManagement');
// sceneScript/HallLayerManagement.ts

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
var LayerBase_1 = require("../script/management/LayerBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HallLayerManagement = /** @class */ (function (_super) {
    __extends(HallLayerManagement, _super);
    function HallLayerManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallLayerManagement_1 = HallLayerManagement;
    Object.defineProperty(HallLayerManagement, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new HallLayerManagement_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    var HallLayerManagement_1;
    HallLayerManagement = HallLayerManagement_1 = __decorate([
        ccclass
    ], HallLayerManagement);
    return HallLayerManagement;
}(LayerBase_1.LayerBase));
exports.default = HallLayerManagement;

cc._RF.pop();