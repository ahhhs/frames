/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

const { ccclass, property,menu } = cc._decorator;

@ccclass
@menu("CommonPools/ClickFinger")
export default class demos extends cc.Component {
    onLoad() { 
        console.log("输出");
    }
}
