/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 核心类
 */

import AdaptiveComm from '../commponent/AdaptiveComm';
import AdaptivesComm from '../commponent/AdaptivesComm';
import PrLoadResouceManager from '../manager/PrLoadResourceManager';
import { PrLayerUtil } from '../util/PrLayerUtil';
import { PrLogUtil } from '../util/PrLogUtil';
import { PathData } from './PathData';

const { ccclass, property } = cc._decorator;

@ccclass
export default class PrData {
    static pathData = PathData;//路径
    static loadPresource = PrLoadResouceManager.instance;//加载资源管理器
    static log = PrLogUtil;//log工具
    static adaptive = AdaptiveComm;//适配模块
    static adaptives = AdaptivesComm;
    static layer = PrLayerUtil;//层级工具
}
