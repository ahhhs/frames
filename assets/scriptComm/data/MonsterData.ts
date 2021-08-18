/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 怪物基类
 */
export class MonsterData {
    public monsterName: string = "";//名字
    public occupation = 1;//职业
    public race = 1;//种族
    public monsterLevel = 1;//5个等级 1星,2星,3星,4星,5星
    public hp = 0;
    public def = 1;//防御
    public atk = 1;//攻击力
    public atkscope = 1;//攻击距离
    public skill = [];//技能
    public talentSkill = 1;//天赋技能
    public raecPeculiarity = 1;//种族特性
    public occupationPeculiarity = 1;//职业特性
}
