/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import PrLoadResouceManager from '../manager/PrLoadResourceManager';
import { PrLogManagers } from '../manager/PrLogManager';
import AdaptiveUtil from '../util/AdaptiveUtil';
import AdaptiveUtils from '../util/AdaptiveUtils';
import { PathData } from './PathData';

const { ccclass, property } = cc._decorator;

@ccclass
export default class PrData {
    pathData = PathData;
    loadPresource = PrLoadResouceManager;
    log = PrLogManagers;
    adaptive = AdaptiveUtil;
    adaptives = AdaptiveUtils;
}
