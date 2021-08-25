/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 怪物详情
 */

import { PopUpBase } from '../../scriptComm/base/PopUpBase';
import pr from '../../scriptComm/data/pr';
import {
    CDDiceAreaClassData,
    CDDiceClassData,
    CDMonsterClassData,
} from '../../scriptComm/data/PrClassData';

import { DiceDetatils } from './DiceDetatils';

const { ccclass, property } = cc._decorator;

@ccclass
export class MonsterDetails extends PopUpBase {
    @property({ type: cc.Sprite, displayName: '怪物立绘' })
    private monsterPic: cc.Sprite = null;

    /**
     * 怪物详情
     */
    private MonsterDetailsData: CDMonsterClassData = null;
    private MonsterDetailsM = new pr.layerUtil();
    async onLoad() {
        super.onLoad();

        let pics: cc.SpriteFrame;
        await pr.loadPresource.loadPicRes('PicCommAB', 'key').then((pic: cc.SpriteFrame) => {
            pic.addRef();
            pics = pic;
        });
        let monsterUI: cc.SpriteFrame;
        await pr.loadPresource.loadPicRes('PicCommAB', 'key').then(() => {});

        this.init(
            new CDMonsterClassData({
                atk: 10,
                monsterName: '哈哈',
                race: 9,
                monsterLevel: 1,
                hp: 0,
                def: 5,
                atkscope: 1,
                skill: [],
                talentSkill: 1,
                brief: '',
                monsterPic: pics,
                dice: new CDDiceClassData({
                    diceId: 1,
                    diceLevel: 1,
                    diceSurface: new CDDiceAreaClassData(1, 2, 3, 4, 5),
                    gold: 1,
                }),
                monsterUI: monsterUI,
            })
        );
    }
    /**
     * 初始化
     */
    public async init(data) {
        let pics: cc.SpriteFrame;
        await pr.loadPresource
            .loadPicRes('PicCommAB', data.monsterPic)
            .then((pic: cc.SpriteFrame) => {
                pics = pic;
            });
        //传过来的图片没有进行动态加载,在这里加载拿到相应资源后,重新赋值
        data.monsterPic = pics;
        this.initData(data);
    }
    private initData(data: CDMonsterClassData) {
        this.MonsterDetailsData = data;
        let content: cc.Node = this.node.getChildByName('content');
        for (let i = 0; i < content.children.length; i++) {
            if (i == 0) {
                this.setPic(
                    content.children[i].getComponent(cc.Sprite).spriteFrame,
                    data.monsterPic
                );
            } else if (data.hasOwnProperty(content.children[i].name)) {
                this.setStr(
                    content.children[i].getChildByName('label').getComponent(cc.Label),
                    data[content.children[i].name]
                );
            }
        }
        this.MonsterDetailsM.addNodeMain(
            0,
            'prefabAB/baseAB',
            'diceDetails',
            false,
            this.node.getChildByName('content'),
            (nodes: cc.Node) => {
                nodes.getComponent(DiceDetatils).init(data.getDice());
            }
        );
    }
}
