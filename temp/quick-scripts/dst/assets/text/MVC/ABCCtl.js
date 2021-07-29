
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/text/MVC/ABCCtl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy90ZXh0L0FCQ0N0bC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7Ozs7Ozs7O0FBUUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQVVXLFVBQUssR0FBUyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFvQixJQUFJLENBQUM7SUFROUMsQ0FBQztlQW5Cb0IsTUFBTTtJQUdULGlCQUFVLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQU0sQ0FBQztTQUM5QjtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBSU0scUJBQUksR0FBWCxVQUFZLElBQVUsRUFBRSxTQUEwQjtRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ00sdUJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7SUFqQmMsZUFBUSxHQUFXLElBQUksQ0FBQztJQUR0QixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBbUIxQjtJQUFELGFBQUM7Q0FuQkQsQUFtQkMsSUFBQTtrQkFuQm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIxLCBGbGlja2VyaW5nIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEF1dGhvcjogd2VucWlhbnFpbiAod2VucWlhbnFpbkBmbGlja2VyaW5nLmFpKVxuICpcbiAqIERlc2NyaXB0aW9uOlxuICovXG5cbmltcG9ydCB7IElBYmMgfSBmcm9tICcuL01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBJQWJjQ3RsRGVsZWdhdGUge1xuICAgIG9uU3VibWl0UmVzdWx0KCk6IHZvaWQ7XG59XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBQkNDdGwge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YWNlOiBBQkNDdGwgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YWNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhY2UgPSBuZXcgQUJDQ3RsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBtRGF0YTogSUFiYyA9IG51bGw7XG4gICAgcHJpdmF0ZSBtRGVsZWdhdGU6IElBYmNDdGxEZWxlZ2F0ZSA9IG51bGw7XG4gICAgcHVibGljIGluaXQoZGF0YTogSUFiYywgbURlbGVnYXRlOiBJQWJjQ3RsRGVsZWdhdGUpIHtcbiAgICAgICAgdGhpcy5tRGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMubURlbGVnYXRlID0gbURlbGVnYXRlO1xuICAgIH1cbiAgICBwdWJsaWMgc3VtbWl0KCkge1xuICAgICAgICB0aGlzLm1EZWxlZ2F0ZS5vblN1Ym1pdFJlc3VsdCgpO1xuICAgIH1cbn1cbiJdfQ==