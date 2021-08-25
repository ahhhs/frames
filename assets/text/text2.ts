/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

const { ccclass, property } = cc._decorator;

@ccclass
export class Text1 {
    @property()
    string: string = '';
    get strings() {
        return this.string;
    }
    set strings(s) {}
}
