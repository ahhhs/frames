/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

const { ccclass, property } = cc._decorator;

@ccclass
export class RoleBase extends cc.Component {
    @property({ type: cc.Sprite, displayName: '角色图片' })
    RolePic: cc.Sprite = null;

    onLoad() {}
}
