/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: ui层级管理器
 */

import AdaptiveComm from '../common/AdaptiveComm';

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
export class BaseLayerManagement {

    private static _instance: BaseLayerManagement;
    private root: cc.Node = undefined;
    private rootZIndex: 0;
    private size: NodeSize;
    public static get instance() {

        if (!this._instance) {
            this._instance = new BaseLayerManagement();
        }
        return this._instance;
    }

    public init(node: cc.Node, size: NodeSize) {
        this.root = node;
        this.initData(size);
        this.addLayerMain();
    }

    private initData(size: NodeSize) {
        this.size = size;
    }

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
        node.addComponent(AdaptiveComm);
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

    public getRootNode() {
        return this.root;
    }
}
