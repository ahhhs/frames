"use strict";
cc._RF.push(module, '7448agyD2tD4re4jizMrGBG', 'LayerManagement');
// script/management/LayerManagement.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: ui层级管理器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerManagement = exports.NodeSize = exports.LayerType = void 0;
var AdaptiveComms_1 = require("../common/AdaptiveComms");
var LayerType;
(function (LayerType) {
    LayerType[LayerType["UI"] = 0] = "UI";
    LayerType[LayerType["ADAPTIVE"] = 1] = "ADAPTIVE";
    LayerType[LayerType["POPUP"] = 2] = "POPUP";
})(LayerType = exports.LayerType || (exports.LayerType = {}));
var NodeSize = /** @class */ (function () {
    function NodeSize() {
    }
    return NodeSize;
}());
exports.NodeSize = NodeSize;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LayerManagement = /** @class */ (function () {
    function LayerManagement() {
        this.root = undefined;
    }
    LayerManagement_1 = LayerManagement;
    Object.defineProperty(LayerManagement, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new LayerManagement_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 初始化
     * @param node 根节点
     * @param size 屏幕大小
     */
    LayerManagement.prototype.init = function (node, size) {
        this.root = node;
        this.initData(size);
        this.addLayerMain();
    };
    /**
     * 初始化参数
     * @param size
     */
    LayerManagement.prototype.initData = function (size) {
        this.size = size;
    };
    /**
     * 添加层级入口
     */
    LayerManagement.prototype.addLayerMain = function () {
        for (var i = 0; i < Object.values(LayerType).length / 2; i++) {
            this.addLayer(LayerType[i]);
        }
    };
    /**
     * 添加层级
     */
    LayerManagement.prototype.addLayer = function (string) {
        var node = new cc.Node();
        node.name = string + "Layer";
        node.width = this.size.width;
        node.height = this.size.height;
        node.addComponent(AdaptiveComms_1.default).init();
        this.root.addChild(node, this.rootZIndex++);
    };
    /**
     * 获得一个层级
     * @param name nodeName
     * @returns
     */
    LayerManagement.prototype.getLayer = function (name) {
        return this.root.getChildByName(name + "Layer");
    };
    /**
     * 获得根节点
     * @returns
     */
    LayerManagement.prototype.getRootNode = function () {
        return this.root;
    };
    /**
     * 层级添加node
     * @param parentNode 父节点
     * @param node 目标节点
     * @param script 目标脚本
     */
    LayerManagement.prototype.addNode = function (parentNode, node, script, ZIndex) {
        if (ZIndex === void 0) { ZIndex = 0; }
        var nodes = cc.instantiate(node);
        nodes.addComponent(script).init();
        nodes.zIndex = ZIndex;
        this.getLayer(LayerType[parentNode]).addChild(nodes);
        if (nodes.getComponent(cc.Widget)) {
            nodes.getComponent(cc.Widget).alignMode = cc.Widget.AlignMode.ONCE;
        }
    };
    var LayerManagement_1;
    LayerManagement = LayerManagement_1 = __decorate([
        ccclass
    ], LayerManagement);
    return LayerManagement;
}());
exports.LayerManagement = LayerManagement;

cc._RF.pop();