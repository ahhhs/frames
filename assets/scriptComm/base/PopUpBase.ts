/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 基础弹窗
 */

import pr from '../data/pr';
import { NodeInitBase } from './NodeInitBase';

const { ccclass, property } = cc._decorator;

@ccclass
export class PopUpBase extends NodeInitBase {
    @property({ type: cc.Node, displayName: '确定按钮' })
    confirmBtn: cc.Node = null;

    @property({ type: cc.Node, displayName: '返回按钮' })
    returnBtn: cc.Node = null;

    public onLoad() {
        if (this.confirmBtn) {
            this.confirmBtn.on('click', this.onClick, this);
        }
        if (this.returnBtn) {
            this.returnBtn.on('click', this.onReturn, this);
        }
    }
    public onClick() {
        pr.logUtil.log1('点击弹窗确定')();
    }
    public onReturn() {
        pr.logUtil.log1('点击弹出退出')();
        this.node.destroy();
    }
}
