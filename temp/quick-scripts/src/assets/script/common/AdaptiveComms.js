"use strict";
cc._RF.push(module, '5e698vmH65J24tFNPwJYmFO', 'AdaptiveComms');
// script/common/AdaptiveComms.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 等比例适配
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
        this.node.setContentSize(nodeSize);
    };
    AdaptiveComms = __decorate([
        ccclass
    ], AdaptiveComms);
    return AdaptiveComms;
}(cc.Component));
exports.default = AdaptiveComms;

cc._RF.pop();