/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 加载管理器
 */

import pr from '../data/pr';

const { ccclass, property } = cc._decorator;

@ccclass
export class PrLoadResouceManager {
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
        return new Promise<void>((res, rej) => {
            if (CC_EDITOR) {
                this.editorLoad(pr.pathUrl.ABFilePath + url + '/' + asserts + '.prefab');
            } else {
                cc.assetManager.loadBundle(url, (ell, bundle: cc.AssetManager.Bundle) => {
                    if (ell) {
                        pr.logUtil.log1('加载ab包 ' + bundle + ' 失败...')();
                        rej();
                    } else {
                        bundle.load(asserts, (ell, asserts) => {
                            if (ell) {
                                pr.logUtil.log1('加载预制体 ' + asserts + ' 失败...')();
                                rej();
                            } else {
                                if (asserts instanceof cc.Prefab) {
                                    pr.logUtil.log1('加载预制体 ' + asserts.name + ' 成功...')();
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
     * 加载图片资源
     * @param url
     * @param resName
     */
    public loadPicRes(url: string, resName: string) {
        return new Promise((res, rej) => {
            cc.assetManager.loadBundle(url, (err, bundle) => {
                if (!err) {
                    bundle.load(resName, cc.SpriteFrame, (ell, ress) => {
                        pr.logUtil.log1('加载图片资源' + ress + '成功')();
                        res(ress);
                    });
                }
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
                        this.loadList.set(asserts[i].name, asserts[i]);
                    }
                    res();
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
        });
    }
}
