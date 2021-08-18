/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 基础弹窗  
 */

import Pr from '../data/Pr';

const { ccclass, property } = cc._decorator;

@ccclass
export class PopUpBase extends cc.Component {

    @property({ type: cc.Node, displayName: "确定按钮" })
    confirmBtn: cc.Node = null;

    @property({ type: cc.Node, displayName: "返回按钮" })
    returnBtn: cc.Node = null;

    public onLoad() {
        if (this.confirmBtn) {
            this.confirmBtn.on("click", this.onClick, this);
        }
        if (this.returnBtn) {
            this.returnBtn.on("click", this.onReturn, this);
        }
        this.node.scale = 0.6;
        cc.tween(this.node)
            .to(0.2, { scale: 1.1 })
            .to(0.1, { scale: 1 })
            .start();
    }
    public onClick() {
        Pr.logUtil.log1("点击弹窗确定")();
    };
    public onReturn() {
        Pr.logUtil.log1("点击弹出退出")();
        this.node.destroy();
    }
}
