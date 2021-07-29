/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: Hall入口
 */

import { LayerType } from '../../script/management/LayerBase';
import LoadBase from '../../script/management/LoadBase';
import HallLayerC from './HallLayerC';
import HallLayerV from './HallLayerV';

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
// @executeInEditMode
export default class HallMain extends cc.Component {
    @property(HallLayerV)
    hallLayerV: HallLayerV = null;
    @property({ displayName: "更新配置" })
    public set config(fiag) {
        this.demo();
    }
    public get config() {
        return false;
    }
    demo() {
        if (CC_EDITOR) {
            let path = `db://assets/config/config1.json`;
            let nodeName = {
            }
            for (let i = 0; i < this.node.children.length; i++) {
                nodeName[this.node.children[i].name + "Id"] = this.node.children[i].uuid;
            }
            Editor.assetdb.createOrSave(path, JSON.stringify(nodeName), function (err, results) {
                this.isSave = false;
                cc.log('配置已更新')
            });
        }
    }
    async onLoad() {
        cc.log("onLoad");
        HallLayerC.instance.init(this.hallLayerV, {});
        this.demo();
    }
}

