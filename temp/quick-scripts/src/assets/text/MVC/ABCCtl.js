"use strict";
cc._RF.push(module, 'bac0a36FbNJjJRNyEiTJbMY', 'ABCCtl');
// text/ABCCtl.ts

"use strict";
/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ABCCtl = /** @class */ (function () {
    function ABCCtl() {
        this.mData = null;
        this.mDelegate = null;
    }
    ABCCtl_1 = ABCCtl;
    ABCCtl.getInstace = function () {
        if (!this._instace) {
            this._instace = new ABCCtl_1;
        }
        return this._instace;
    };
    ABCCtl.prototype.init = function (data, mDelegate) {
        this.mData = data;
        this.mDelegate = mDelegate;
    };
    ABCCtl.prototype.summit = function () {
        this.mDelegate.onSubmitResult();
    };
    var ABCCtl_1;
    ABCCtl._instace = null;
    ABCCtl = ABCCtl_1 = __decorate([
        ccclass
    ], ABCCtl);
    return ABCCtl;
}());
exports.default = ABCCtl;

cc._RF.pop();