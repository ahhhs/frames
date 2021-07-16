// Copyright (C) 2019, Flickering Inc. All rights reserved.
// Author: hongchangfu (hongchangfu@flickering.ai)

// 用于界面适配

const { ccclass, property } = cc._decorator;

@ccclass
export default class AdaptiveComms extends cc.Component {

    init() {
        this.fixedViewSize();
    }
    private fixedViewSize() {
        const disignSize = cc.view.getDesignResolutionSize();
        const designScale = disignSize.width / disignSize.height;
        const nodeSize = cc.size(disignSize.width, disignSize.height);
        let size = cc.view.getFrameSize();
        let scale = size.width / size.height;
        if (scale < designScale) nodeSize.height = nodeSize.width / scale;
        else nodeSize.width = nodeSize.height * scale;

        console.log("输出:",nodeSize);
        this.node.setContentSize(nodeSize);
    }
}
