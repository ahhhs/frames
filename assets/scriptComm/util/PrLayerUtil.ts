/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 层级管理器
 */

import pr from '../data/pr';

/**
 * 层级类型
 */
export enum LayerType {
    'UI',
    'ADAPTIVE',
    'POPUP',
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
    private static root: cc.Node = undefined;
    private static rootZIndex: 0;
    private static nodeList: Array<NodeType> = [];

    /**
     * 初始化
     * @param node 根节点
     * @param isAddLayer 是否要添加基础层级
     */
    public static initLayerBase(node: cc.Node, isAddLayer: boolean = true) {
        this.root = node;
        if (isAddLayer) {
            this.addLayerMain();
        }
    }
    /**
     * 添加层级入口
     */
    private static addLayerMain() {
        for (let i = 0; i < Object.values(LayerType).length / 2; i++) {
            this.addLayer(LayerType[i]);
        }
    }
    /**
     * 添加层级
     * @description 添加层级node,并且添加适配脚本
     */
    private static addLayer(layerName: string) {
        let layerNames = this.getLayer(layerName);
        if (layerNames) return;
        const node = new cc.Node();
        node.name = layerName + 'Layer';
        node.addComponent(pr.adaptive);
        this.getRootNode().addChild(node, this.rootZIndex++);
    }
    /**
     * 获得一个层级
     * @param name nodeName
     * @param isLayer 是否是在层级上加
     * @returns
     */
    public static getLayer(name: string) {
        return this.getRootNode().getChildByName(name + 'Layer');
    }
    /**
     * 获得根节点
     * @returns
     */
    public static getRootNode() {
        return cc.director.getScene().getChildByName('Canvas');
    }
    /**
     * 动态加载预制体,并且添加到节点上
     * @param url 资源路径
     * @param layerName 层级name
     * @param urlName 资源名字
     * @param isLayer 是否是在主层级上添加
     * @param pather 父节点
     */
    public static async addNodeMain(
        layerName: number,
        url: string,
        urlName: string,
        isLayer = true,
        pather?: cc.Node,
        cb?
    ) {
        let func = async () => {
            if (isLayer) {
                await this.addLayerNode(layerName, pr.loadPresource.getLoadList().get(urlName), cb);
            } else {
                await this.addNode(pr.loadPresource.getLoadList().get(urlName), pather, cb);
            }
        };

        if (pr.loadPresource.getLoadList().get(urlName)) {
            func();
        } else {
            let cbJudge = await this.loadResource(url, urlName);
            if (cbJudge) {
                func();
            }
        }
    }
    /**
     * 加载资源
     * @returns
     */
    public static async loadResource(url: string, urlName: string) {
        return await pr.loadPresource.loadPrefab(url, urlName).then(
            () => {
                return true;
            },
            () => {
                return false;
            }
        );
    }
    /**
     * 添加node
     * @param prefabNode
     * @param pather
     */
    public static addNode(prefabNode: cc.Node, pather: cc.Node, cb) {
        let nodes: cc.Node = cc.instantiate(prefabNode);
        pather.addChild(nodes);
        cb && cb(nodes);
        return nodes;
    }
    /**
     * 层级添加node
     * @description 添加目标节点到父节点上,并且绑点相应的脚本
     * @param parentNode 父节点
     * @param node 目标节点
     * @param isAdpitve 是否使用默认适配方式
     * @param ZIndex 层级
     */
    public static addLayerNode(parentNode: number, node: cc.Node, cb?) {
        let nodes: cc.Node = cc.instantiate(node);
        this.getLayer(LayerType[parentNode]).addChild(nodes);
        cb && cb(nodes);
        return nodes;
    }
    /**
     * 获得所有的node属性
     * @returns
     */
    public static getAllNodeData() {
        this.traverseNodeData(this.root);
        return this.nodeList;
    }
    /**
     * 遍历目标node数据
     * @param node 需要遍历获得的目标节点
     */
    public static traverseNodeData(node: cc.Node) {
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
