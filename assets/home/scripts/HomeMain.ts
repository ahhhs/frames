/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 首页入口
 */

import Pr from '../../scriptComm/data/Pr';
import HomeLayerC from './HomeLayerC';
import HomeLayerV from './HomeLayerV';

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class HomeMain extends cc.Component {
    @property(HomeLayerV)
    homeLayerV: HomeLayerV = null;

    @property({ displayName: "更新配置" })
    public set config(fiag) {
        this.stockpileUpda(Pr.pathUrl.HomeUIPaht);
    }
    public get config() {
        return false;
    }
    /**
     * 更新配置到json
     */
    public stockpileUpda(path: string) {
        if (CC_EDITOR) {
            let nodeName = {
            }
            for (let i = 0; i < this.node.children.length; i++) {
                nodeName[this.node.children[i].name + "Id"] = this.node.children[i].uuid;
            }
            Editor.assetdb.createOrSave(path, JSON.stringify(nodeName), function (err, results) {
                this.isSave = false;
                cc.log('配置已更新');
            });
        }
    }
    public onLoad() {
        HomeLayerC.instance.init(this.homeLayerV);
    }
    public editorMain() {
        if (CC_EDITOR) {
            HomeLayerC.instance.init(this.homeLayerV);
            // this.stockpileUpda(PathManagement.homeUIPaht);
        }
    }
}
