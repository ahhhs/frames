/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 层级基类
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
export class LayerBase {

    private root: cc.Node = undefined;
    private rootZIndex: 0;
    private nodeList: Array<cc.Node> = [];

    /**
     * 初始化
     * @param node 根节点
     * @param size 屏幕大小
     */
    public init(node: cc.Node, size: NodeSize) {
        this.root = node;
        this.addLayerMain();
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
     * 
     * @description 添加层级node,并且添加适配脚本
     */
    private addLayer(string: string) {
        const node = new cc.Node();
        node.name = string + "Layer";
        node.addComponent(AdaptiveComm).init();
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
     * @description 添加目标节点到父节点上,并且绑点相应的脚本
     * @param parentNode 父节点
     * @param node 目标节点
     * @param script 目标脚本
     * @param isAdpitve 是否使用默认适配方式
     * @param ZIndex 层级
     */
    public addNode(parentNode: number, node: cc.Node, script: string, isAdpitve: boolean = true, ZIndex: number = 0) {
        let nodes: cc.Node = cc.instantiate(node);
        nodes.addComponent(script).init();
        nodes.zIndex = ZIndex;
        this.getLayer(LayerType[parentNode]).addChild(nodes);
    }
    public getAllNode() {
        return this.nodeList;
    }
    public demo(){
        
    }
}
