
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/text/MVC/ABCView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a83fW3AUhKooaXE/CVlQlv', 'ABCView');
// text/ABCView.ts

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
/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */
var ABCCtl_1 = require("./ABCCtl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ABCView = /** @class */ (function (_super) {
    __extends(ABCView, _super);
    function ABCView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.demo = null;
        return _this;
    }
    ABCView.prototype.onClickSummit = function () {
        ABCCtl_1.default.getInstace().summit();
    };
    ABCView.prototype.onSubmitResult = function () {
    };
    __decorate([
        property(cc.Node)
    ], ABCView.prototype, "demo", void 0);
    ABCView = __decorate([
        ccclass
    ], ABCView);
    return ABCView;
}(cc.Component));
exports.default = ABCView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy90ZXh0L0FCQ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSCxtQ0FBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFZQztRQVRHLFVBQUksR0FBWSxJQUFJLENBQUM7O0lBU3pCLENBQUM7SUFQVSwrQkFBYSxHQUFwQjtRQUNJLGdCQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7SUFFQSxDQUFDO0lBUkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRztJQUhKLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FZM0I7SUFBRCxjQUFDO0NBWkQsQUFZQyxDQVpvQyxFQUFFLENBQUMsU0FBUyxHQVloRDtrQkFab0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEsIEZsaWNrZXJpbmcgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogQXV0aG9yOiB3ZW5xaWFucWluICh3ZW5xaWFucWluQGZsaWNrZXJpbmcuYWkpXG4gKlxuICogRGVzY3JpcHRpb246XG4gKi9cbmltcG9ydCBBQkNDdGwsIHsgSUFiY0N0bERlbGVnYXRlIH0gZnJvbSAnLi9BQkNDdGwnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUJDVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCBpbXBsZW1lbnRzIElBYmNDdGxEZWxlZ2F0ZSB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkZW1vOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHB1YmxpYyBvbkNsaWNrU3VtbWl0KCkge1xuICAgICAgICBBQkNDdGwuZ2V0SW5zdGFjZSgpLnN1bW1pdCgpO1xuICAgIH1cblxuICAgIG9uU3VibWl0UmVzdWx0KCk6IHZvaWQge1xuICAgICAgICBcbiAgICB9XG59XG4iXX0=