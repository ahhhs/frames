"use strict";
cc._RF.push(module, '5a59a83i71GR72ERIyE6TEb', 'LoadBase');
// script/management/LoadBase.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 加载基类
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadBase = /** @class */ (function () {
    function LoadBase() {
        this.loadList = new Map();
    }
    LoadBase_1 = LoadBase;
    Object.defineProperty(LoadBase, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new LoadBase_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 加载预制体
     * @param url 路径
     * @param asserts 资源name
     * @returns
     */
    LoadBase.prototype.loadPrefab = function (url, asserts) {
        var _this = this;
        return new Promise(function (res) {
            cc.assetManager.loadBundle(url, function (ell, bundle) {
                bundle.load(asserts, function (ell, asserts) {
                    if (asserts instanceof cc.Prefab) {
                        _this.loadList.set(asserts.name, asserts);
                        res();
                    }
                });
            });
        });
    };
    /**
     * 加载预制体文件夹
     * @param url 路径
     * @param fileName 文件夹name
     */
    LoadBase.prototype.loadPrefabs = function (url, fileName) {
        var _this = this;
        return new Promise(function (res) {
            cc.assetManager.loadBundle(url, function (ell, bundle) {
                bundle.loadDir(fileName, function (ell, asserts) {
                    for (var i = 0; i < asserts.length; i++) {
                        _this.loadList.set(asserts[i].name, asserts[i]);
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
    LoadBase.prototype.getLoadList = function () {
        return this.loadList;
    };
    var LoadBase_1;
    LoadBase = LoadBase_1 = __decorate([
        ccclass
    ], LoadBase);
    return LoadBase;
}());
exports.default = LoadBase;

cc._RF.pop();