
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/sceneScript/HallLayerManagement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZVNjcmlwdC9IYWxsTGF5ZXJNYW5hZ2VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsNERBQTJEO0FBRXJELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFTO0lBQTFEOztJQVNBLENBQUM7NEJBVG9CLG1CQUFtQjtJQUdwQyxzQkFBa0IsK0JBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFtQixFQUFFLENBQUM7YUFDOUM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7O0lBUmdCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBU3ZDO0lBQUQsMEJBQUM7Q0FURCxBQVNDLENBVGdELHFCQUFTLEdBU3pEO2tCQVRvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIxLCBGbGlja2VyaW5nIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEF1dGhvcjogd2VucWlhbnFpbiAod2VucWlhbnFpbkBmbGlja2VyaW5nLmFpKVxuICpcbiAqIERlc2NyaXB0aW9uOlxuICovXG5cbmltcG9ydCB7IExheWVyQmFzZSB9IGZyb20gJy4uL3NjcmlwdC9tYW5hZ2VtZW50L0xheWVyQmFzZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsTGF5ZXJNYW5hZ2VtZW50IGV4dGVuZHMgTGF5ZXJCYXNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEhhbGxMYXllck1hbmFnZW1lbnQ7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgSGFsbExheWVyTWFuYWdlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG59XG4iXX0=