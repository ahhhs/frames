"use strict";
cc._RF.push(module, '7448agyD2tD4re4jizMrGBG', 'LayerBase');
// script/management/LayerBase.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 层级基类
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerBase = exports.NodeSize = exports.LayerType = void 0;
var AdaptiveComm_1 = require("../common/AdaptiveComm");
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
var LayerBase = /** @class */ (function () {
    function LayerBase() {
        this.root = undefined;
        this.nodeList = [];
    }
    /**
     * 初始化
     * @param node 根节点
     * @param size 屏幕大小
     */
    LayerBase.prototype.init = function (node, size) {
        this.root = node;
        this.addLayerMain();
    };
    /**
     * 添加层级入口
     */
    LayerBase.prototype.addLayerMain = function () {
        for (var i = 0; i < Object.values(LayerType).length / 2; i++) {
            this.addLayer(LayerType[i]);
        }
    };
    /**
     * 添加层级
     *
     * @description 添加层级node,并且添加适配脚本
     */
    LayerBase.prototype.addLayer = function (string) {
        var node = new cc.Node();
        node.name = string + "Layer";
        node.addComponent(AdaptiveComm_1.default).init();
        this.root.addChild(node, this.rootZIndex++);
    };
    /**
     * 获得一个层级
     * @param name nodeName
     * @returns
     */
    LayerBase.prototype.getLayer = function (name) {
        return this.root.getChildByName(name + "Layer");
    };
    /**
     * 获得根节点
     * @returns
     */
    LayerBase.prototype.getRootNode = function () {
        return this.root;
    };
    /**
     * 层级添加node
     * @description 添加目标节点到父节点上,并且绑点相应的脚本
     * @param parentNode 父节点
     * @param node 目标节点
     * @param script 目标脚本
     * @param isAdpitve 是否使用默认适配方式
     * @param ZIndex 层级
     */
    LayerBase.prototype.addNode = function (parentNode, node, script, isAdpitve, ZIndex) {
        if (isAdpitve === void 0) { isAdpitve = true; }
        if (ZIndex === void 0) { ZIndex = 0; }
        var nodes = cc.instantiate(node);
        nodes.addComponent(script).init();
        nodes.zIndex = ZIndex;
        this.getLayer(LayerType[parentNode]).addChild(nodes);
    };
    LayerBase.prototype.getAllNode = function () {
        return this.nodeList;
    };
    LayerBase = __decorate([
        ccclass
    ], LayerBase);
    return LayerBase;
}());
exports.LayerBase = LayerBase;

cc._RF.pop();