/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: ui层级管理器
 */

import AdaptiveComm from '../common/AdaptiveComm';
import AdaptiveComms from '../common/AdaptiveComms';

export enum LayerType {
    "UI",
    "ADAPTIVE",
    "POPUP",
}

export class NodeSize {
    public height: number;
    public width: number;
}
const { ccclass, property } = cc._decorator;

@ccclass
export class LayerManagement {

    private static _instance: LayerManagement;
    private root: cc.Node = undefined;
    private rootZIndex: 0;
    private size: NodeSize;
    public static get instance() {

        if (!this._instance) {
            this._instance = new LayerManagement();
        }
        return this._instance;
    }
    /**
     * 初始化
     * @param node 根节点
     * @param size 屏幕大小
     */
    public init(node: cc.Node, size: NodeSize) {
        this.root = node;
        this.initData(size);
        this.addLayerMain();
    }
    /**
     * 初始化参数
     * @param size 
     */
    private initData(size: NodeSize) {
        this.size = size;
    }
    /**
     * 添加层级入口
     */
    private addLayerMain() {
        for (let i = 0; i < Object.values(LayerType).length / 2; i++) {
            this.addLayer(LayerType[i]);
        }
    }
    /**
     * 添加层级
     */
    private addLayer(string: string) {
        const node = new cc.Node();
        node.name = string + "Layer";
        node.width = this.size.width;
        node.height = this.size.height;
        node.addComponent(AdaptiveComms).init();
        this.root.addChild(node, this.rootZIndex++);
    }
    /**
     * 获得一个层级
     * @param name nodeName
     * @returns 
     */
    public getLayer(name: string) {
        return this.root.getChildByName(name + "Layer");
    }
    /**
     * 获得根节点
     * @returns 
     */
    public getRootNode() {
        return this.root;
    }
    /**
     * 层级添加node
     * @param parentNode 父节点
     * @param node 目标节点
     * @param script 目标脚本
     */
    public addNode(parentNode: number, node: cc.Node, script: string, ZIndex: number = 0) {
        let nodes: cc.Node = cc.instantiate(node);
        nodes.addComponent(script).init();
        nodes.zIndex = ZIndex;
        this.getLayer(LayerType[parentNode]).addChild(nodes);
        if (nodes.getComponent(cc.Widget)) {
            nodes.getComponent(cc.Widget).alignMode = cc.Widget.AlignMode.ONCE;
        }
    }
}
