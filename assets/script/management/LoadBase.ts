/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 加载基类
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadBase {

    private static _instance: LoadBase;
    private loadArr: Map<string, any> = new Map();

    public static get instance() {
        if (!this._instance) {
            this._instance = new LoadBase();
        }
        return this._instance;
    }
    /**
     * 加载预制体
     * @param url 路径
     * @param asserts 资源name
     * @returns 
     */
    public loadPrefab(url: string, asserts: string) {
        return new Promise<void>((res) => {
            cc.assetManager.loadBundle(url, (ell, bundle: cc.AssetManager.Bundle) => {
                bundle.load(asserts, (ell, asserts) => {
                    if (asserts instanceof cc.Prefab) {
                        this.loadArr.set(asserts.name, asserts);
                        res();
                    }
                });
            });
        });
    }

    /**
     * 加载预制体文件夹
     * @param url 路径
     * @param fileName 文件夹name
     */
    public loadPrefabs(url: string, fileName: string) {
        return new Promise<void>((res) => {
            cc.assetManager.loadBundle(url, (ell, bundle: cc.AssetManager.Bundle) => {
                bundle.loadDir(fileName, (ell, asserts) => {
                    for (let i = 0; i < asserts.length; i++) {
                        this.loadArr.set(asserts[i].name, asserts[i]);
                    }
                    res()
                });
            });
        });
    }
    /**
     * 获得加载列表
     * @returns 
     */
    public getLoadList() {
        return this.loadArr;
    }
}
