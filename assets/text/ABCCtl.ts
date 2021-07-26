/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import { IAbc } from './Model';

export interface IAbcCtlDelegate {
    onSubmitResult(): void;
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class ABCCtl {
    private static _instace: ABCCtl = null;

    public static getInstace() {
        if (!this._instace) {
            this._instace = new ABCCtl;
        }
        return this._instace;
    }

    public mData: IAbc = null;
    private mDelegate: IAbcCtlDelegate = null;
    public init(data: IAbc, mDelegate: IAbcCtlDelegate) {
        this.mData = data;
        this.mDelegate = mDelegate;
    }
    public summit() {
        this.mDelegate.onSubmitResult();
    }
}
