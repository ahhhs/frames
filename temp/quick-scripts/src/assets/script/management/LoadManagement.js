"use strict";
cc._RF.push(module, '5a59a83i71GR72ERIyE6TEb', 'LoadManagement');
// script/management/LoadManagement.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 加载管理器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadManagement = /** @class */ (function () {
    function LoadManagement() {
        this.loadArr = new Map();
    }
    LoadManagement_1 = LoadManagement;
    Object.defineProperty(LoadManagement, "install", {
        get: function () {
            if (!this._install) {
                this._install = new LoadManagement_1();
            }
            return this._install;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 加载预制体
     * @param url
     * @param asserts
     * @returns
     */
    LoadManagement.prototype.loadPrefab = function (url, asserts) {
        var _this = this;
        return new Promise(function (res) {
            cc.assetManager.loadBundle(url, function (ell, bundle) {
                bundle.load(asserts, function (ell, asserts) {
                    if (asserts instanceof cc.Prefab) {
                        _this.loadArr.set(asserts.name, asserts);
                        res();
                    }
                });
            });
        });
    };
    /**
     * 加载预制体文件夹
     * @param url
     * @param asserts
     */
    LoadManagement.prototype.loadPrefabs = function (url, fileName) {
        var _this = this;
        return new Promise(function (res) {
            cc.assetManager.loadBundle(url, function (ell, bundle) {
                bundle.loadDir(fileName, function (ell, asserts) {
                    for (var i = 0; i < asserts.length; i++) {
                        _this.loadArr.set(asserts[i].name, asserts[i]);
                    }
                    res();
                });
            });
        });
    };
    /**
     * 获得加载列表
     * @returns
     */
    LoadManagement.prototype.getLoadList = function () {
        return this.loadArr;
    };
    var LoadManagement_1;
    LoadManagement = LoadManagement_1 = __decorate([
        ccclass
    ], LoadManagement);
    return LoadManagement;
}());
exports.default = LoadManagement;

cc._RF.pop();