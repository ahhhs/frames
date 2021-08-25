/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 核心类
 */

import { PrEventManager } from '../manager/PrEventManager';
import { PrLayerUtil } from '../util/PrLayerUtil';
import { PrLogUtil } from '../util/PrLogUtil';
import { PrPathData } from './PrPathData';
import { PrEnum } from './PrEnum';
import { AdaptiveComm } from '../commponent/AdaptiveComm';
import { AdaptivesComm } from '../commponent/AdaptivesComm';
import { PrLoadResouceManager } from '../manager/PrLoadResourceManager';

export default class pr {
    static pathUrl = PrPathData; //路径

    static logUtil = PrLogUtil; //log工具
    static layerUtil = PrLayerUtil; //层级工具

    static adaptive = AdaptiveComm; //适配模块
    static adaptives = AdaptivesComm;

    static loadPresource = PrLoadResouceManager.instance; //加载资源管理器
    static event = PrEventManager.instance; //事件管理器

    static enumMain = PrEnum; //枚举类
}
