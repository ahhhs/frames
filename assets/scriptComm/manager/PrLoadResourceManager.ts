/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 加载管理器
 */

import Pr from '../data/Pr';

const { ccclass, property } = cc._decorator;

@ccclass
export default class PrLoadResouceManager {

    private static _instance: PrLoadResouceManager;
    private loadList: Map<string, any> = new Map();

    public static get instance() {
        if (!this._instance) {
            this._instance = new PrLoadResouceManager();
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
        Pr.logUtil.log1("查看加载资源的路径:", url, asserts);
        return new Promise<void>((res, rej) => {
            if (CC_EDITOR) {
                this.editorLoad(Pr.pathUrl.ABFilePath + url + "/" + asserts + ".prefab");
            } else {
                cc.assetManager.loadBundle(url, (ell, bundle: cc.AssetManager.Bundle) => {
                    if (ell) {
                        Pr.logUtil.log2("加载ab包 " + bundle + " 失败...",)();
                        rej();
                    } else {
                        bundle.load(asserts, (ell, asserts) => {
                            if (ell) {
                                Pr.logUtil.log2("加载预制体 " + asserts + " 失败...",)();
                                rej();
                            } else {
                                if (asserts instanceof cc.Prefab) {
                                    Pr.logUtil.log2("加载预制体 " + asserts.name + " 成功...",)();
                                    this.loadList.set(asserts.name, asserts);
                                    res();
                                }
                            }
                        });
                    }
                });
            }
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
                        this.loadList.set(asserts[i].name, asserts[i]);
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
        return this.loadList;
    }
    /**
     * 编辑器模式加载
     * @param path 
     * @param cb 
     */
    public editorLoad(path: string, cb?: Function) {
        const fileUuid = Editor.assetdb.remote.urlToUuid(path);
        this.getAssetByUuid(fileUuid, cb);
    }
    public getAssetByUuid(uuid: string, cb?: Function) {
        cc.assetManager.loadAny(uuid, (err, asset) => {
            if (cb) {
                cb(err, asset);
            }
        })
    }
}
