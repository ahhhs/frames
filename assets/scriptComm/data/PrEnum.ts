/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 枚举类
 */

/**
 * 用户事件
 */
export enum EventUserType {
    StartGanme,//开始游戏
    Shop,//商店
}
/**
 * 职业
 */
export enum OccupationType {

}
/**
 * 种族
 */
export enum RaceType {

}
/**
 * 怪物星级
 */
export enum MonsterLevelType {

}
/**
 * 攻击范围
 */
export enum AtkScopeType {

}
/**
 * 天赋技能
 */
export enum TalentSkillType {

}
/**
 * 种族特性
 */
export enum TaecPeculiarityType {

}
/**
 * 枚举类
 */
export class PrEnum {
    public EventUser: EventUserType;
    public Occupation: OccupationType;
    public Race: RaceType;
    public MonsterLevel: MonsterLevelType;
    public AtkScope: AtkScopeType;
    public TalentSkill: TalentSkillType;
    public taecPeculiarityType: TaecPeculiarityType;
}