
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/text/Helloworld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7bd8GNAVtMBo60B0KaTt4V', 'Helloworld');
// text/Helloworld.ts

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
var ABCCtl_1 = require("./ABCCtl");
var ABCView_1 = require("./ABCView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eView = null;
        return _this;
    }
    Helloworld.prototype.onLoad = function () {
        ABCCtl_1.default.getInstace().init({ name: "zhangs", age: 1 }, this.eView);
    };
    __decorate([
        property(ABCView_1.default)
    ], Helloworld.prototype, "eView", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy90ZXh0L0hlbGxvd29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCxtQ0FBOEI7QUFDOUIscUNBQWdDO0FBRTFCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBUUM7UUFMVSxXQUFLLEdBQVksSUFBSSxDQUFDOztJQUtqQyxDQUFDO0lBSFUsMkJBQU0sR0FBYjtRQUNJLGdCQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFKRDtRQURDLFFBQVEsQ0FBQyxpQkFBTyxDQUFDOzZDQUNXO0lBSFosVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQVE5QjtJQUFELGlCQUFDO0NBUkQsQUFRQyxDQVJ1QyxFQUFFLENBQUMsU0FBUyxHQVFuRDtrQkFSb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEsIEZsaWNrZXJpbmcgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogQXV0aG9yOiB3ZW5xaWFucWluICh3ZW5xaWFucWluQGZsaWNrZXJpbmcuYWkpXG4gKlxuICogRGVzY3JpcHRpb246XG4gKi9cblxuaW1wb3J0IEFCQ0N0bCBmcm9tICcuL0FCQ0N0bCc7XG5pbXBvcnQgQUJDVmlldyBmcm9tICcuL0FCQ1ZpZXcnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoQUJDVmlldylcbiAgICBwdWJsaWMgZVZpZXc6IEFCQ1ZpZXcgPSBudWxsO1xuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgQUJDQ3RsLmdldEluc3RhY2UoKS5pbml0KHsgbmFtZTogXCJ6aGFuZ3NcIiwgYWdlOiAxIH0sIHRoaXMuZVZpZXcpO1xuICAgIH1cbn1cbiJdfQ==