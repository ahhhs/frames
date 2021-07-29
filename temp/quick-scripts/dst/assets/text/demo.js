
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/text/demo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d176lWcxZEPaHRvbtW6PgZ', 'demo');
// text/demo.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var demos = /** @class */ (function (_super) {
    __extends(demos, _super);
    function demos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    demos.prototype.onLoad = function () {
        console.log("输出");
    };
    demos = __decorate([
        ccclass,
        menu("CommonPools/ClickFinger")
    ], demos);
    return demos;
}(cc.Component));
exports.default = demos;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy90ZXh0L2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxJQUFBLEtBQTZCLEVBQUUsQ0FBQyxVQUFVLEVBQXhDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLElBQUksVUFBa0IsQ0FBQztBQUlqRDtJQUFtQyx5QkFBWTtJQUEvQzs7SUFJQSxDQUFDO0lBSEcsc0JBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUhnQixLQUFLO1FBRnpCLE9BQU87UUFDUCxJQUFJLENBQUMseUJBQXlCLENBQUM7T0FDWCxLQUFLLENBSXpCO0lBQUQsWUFBQztDQUpELEFBSUMsQ0FKa0MsRUFBRSxDQUFDLFNBQVMsR0FJOUM7a0JBSm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIxLCBGbGlja2VyaW5nIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEF1dGhvcjogd2VucWlhbnFpbiAod2VucWlhbnFpbkBmbGlja2VyaW5nLmFpKVxuICpcbiAqIERlc2NyaXB0aW9uOlxuICovXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbkBtZW51KFwiQ29tbW9uUG9vbHMvQ2xpY2tGaW5nZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRlbW9zIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBvbkxvYWQoKSB7IFxuICAgICAgICBjb25zb2xlLmxvZyhcIui+k+WHulwiKTtcbiAgICB9XG59XG4iXX0=