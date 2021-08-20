/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 参数类型
 */

/**
 * 怪物详情
 */
export class MonsterClassData {
    public monsterPic: cc.SpriteFrame; //图片
    public monsterName: string = ''; //名字
    public race: number = 1;
    public monsterLevel: number = 1; //5个等级 1星,2星,3星,4星,5星
    public hp: number = 0; //血量
    public def: number = 1; //防御
    public atk: number = 1; //攻击力
    public atkscope: number = 1; //攻击距离
    public skill: Array<string> = []; //技能
    public talentSkill: number = 1; //天赋技能
    public brief: string = ''; //简介
    public dice: DiceClassData; //骰子实例
    constructor(data: {
        monsterName: string;
        race: number;
        monsterLevel: number;
        hp: number;
        def: number;
        atk: number;
        atkscope: number;
        skill: Array<string>;
        talentSkill: number;
        monsterPic: cc.SpriteFrame;
        brief: string;
        dice: DiceClassData;
    }) {
        this.monsterName = data.monsterName;
        this.race = data.race;
        this.monsterLevel = data.monsterLevel;
        this.hp = data.hp;
        this.def = data.def;
        this.atk = data.atk;
        this.atkscope = data.atkscope;
        this.skill = data.skill;
        this.talentSkill = data.talentSkill;
        this.monsterPic = data.monsterPic;
        this.brief = data.brief;
        this.dice = data.dice;
    }
    getDice() {
        return this.dice;
    }
}
/**
 * 骰子
 */
export class DiceClassData {
    diceId: number = 1;
    diceLevel: number = 1; //共有5个等级 岩灰,梨黄,幽蓝.绯红,暗黑
    diceSurface: DiceAreaClassData; //共有6个面 移动,攻击,技能,禁忌,召唤
    gold: number = 1; //出售价格
    constructor(data: {
        diceId: number;
        diceLevel: number;
        diceSurface: DiceAreaClassData;
        gold: number;
    }) {
        this.diceId = data.diceId;
        this.diceLevel = data.diceLevel;
        this.diceSurface = data.diceSurface;
        this.gold = data.gold;
    }
    getDiceId() {
        return this.diceId;
    }
    getDiceLevel() {
        return this.diceLevel;
    }
    getDiceSurface() {
        return this.diceSurface;
    }
    getGold() {
        return this.gold;
    }
}

/**
 * 骰子面
 */
export class DiceAreaClassData {
    atk: number = 0;
    move: number = 0;
    skill: number = 0;
    taboo: number = 0; //禁忌
    summon: number = 0; //召唤
    constructor(atk, move, skill, taboo, summon) {
        this.atk = atk;
        this.move = move;
        this.skill = skill;
        this.taboo = taboo;
        this.summon = summon;
    }
}

const { ccclass, property } = cc._decorator;

@ccclass
export class PrClassData {
    static monster: MonsterClassData;
    static dice: DiceClassData;
}
