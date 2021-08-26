/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

const { ccclass, property } = cc._decorator;

@ccclass
export class AttributesData extends cc.Component {
    @property({ type: cc.SpriteFrame, displayName: '属性图片' })
    attributesPic: cc.SpriteFrame = null;

    @property({ type: cc.Label, displayName: '属性值' })
    attributesValue: cc.Label = null;

    onLoad() {}

    public init(data) {
        this.setStr(data.str);
        this.setPic(data.pic);
    }
    private setStr(data: string) {
        this.attributesValue.string = data;
    }
    private setPic(pic: cc.SpriteFrame) {
        this.attributesPic = pic;
    }
}
