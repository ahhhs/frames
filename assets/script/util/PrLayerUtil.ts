/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 层级管理器
 */

import PrData from '../data/PrData';

/**
 * 层级类型
 */
export enum LayerType {
    "UI",
    "ADAPTIVE",
    "POPUP",
}
/**
 * node uuid类型
 */
export class NodeType {
    public name: string;
    public uuid: string;

    constructor(name: string, uuid: string) {
        this.name = name;
        this.uuid = uuid;
    }
}
/**
 * node 宽高大小
 */
export class NodeSize {
    public height: number;
    public width: number;
}
const { ccclass, property } = cc._decorator;

@ccclass
export class PrLayerUtil {

    private root: cc.Node = undefined;
    private rootZIndex: 0;
    private nodeList: Array<NodeType> = [];

    /**
     * 初始化
     * @param node 根节点
     * @param isAddLayer 是否要添加基础层级
     */
    public initLayerBase(node: cc.Node, isAddLayer: boolean = true) {
        this.root = node;
        if (isAddLayer) {
            this.addLayerMain();
        }
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
        if (this.getLayer(string)) return;

        const node = new cc.Node();
        node.name = string + "Layer";
        node.addComponent(PrData.adaptive).init();
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
     * @param isAdpitve 是否使用默认适配方式
     * @param ZIndex 层级
     */
    public addNode(parentNode: number, node: cc.Node, isAdpitve: boolean = true, ZIndex: number = 0) {
        let nodes: cc.Node = cc.instantiate(node);
        nodes.zIndex = ZIndex;
        this.getLayer(LayerType[parentNode]).addChild(nodes);
    }
    /**
     * 获得所有的node属性
     * @returns 
     */
    public getAllNodeData() {
        this.traverseNodeData(this.root);
        return this.nodeList;
    }
    /**
     * 遍历目标node数据
     * @param node 需要遍历获得的目标节点
     */
    public traverseNodeData(node: cc.Node) {
        for (let i = 0; i < node.children.length; i++) {
            let childNode: cc.Node = node.children[i];
            let type = new NodeType(childNode.name, childNode.uuid);
            this.nodeList.push(type);
            if (childNode.children.length > 0) {
                this.traverseNodeData(childNode);
            }
        }
    }
}
