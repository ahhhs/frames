/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 用户数据
 */

import { CDMonsterClassData } from './PrClassData';

const { ccclass, property } = cc._decorator;
@ccclass
export class PrUserData {
    static UDiceDetails: Array<CDMonsterClassData> = []; //用户骰子库
}
