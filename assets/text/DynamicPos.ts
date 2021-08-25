/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 动态修改node的位置
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class DynamicPos extends cc.Component {
    @property({ type: cc.Prefab })
    ball: cc.Prefab = null;
    @property({ type: cc.Node })
    layout: cc.Node[] = [];

    onLoad() {
        let obj = [4, 6, 2];
        let data = this.demo(obj);
        this.setBallPos(data);
    }
    demo(data) {
        let arr = [
            {
                ballValue: 0, //当前行有几组球
                line: true, //是否已经有一组是5个球
                disaffinity: -1, //从第几个开始球不相同
            },
            {
                ballValue: 0, //当前行有几组球
                line: true, //是否已经有一组是5个球
                disaffinity: -1, //从第几个开始球不相同
            },
            {
                ballValue: 0, //当前行有几组球
                line: true, //是否已经有一组是5个球
                disaffinity: -1, //从第几个开始球不相同
            },
        ];
        let index = 0;
        let func = (arr, index) => {
            if (arr[index].ballValue >= 5) {
                arr[index].line = false;
                index++;
            }
        };
        let judge = true;
        for (let i = 0; i < data.length; i++) {
            //如果当组球小于5个,并且该行的球没有5个一组的球,并且还可以放得下
            if (data[i] < 5 && arr[index].ballValue + data[i] <= 5) {
                judge = true;
                if (arr[index].ballValue > 0) {
                    arr[index].disaffinity = arr[index].ballValue;
                }
            } else if (data[i] < 5 && arr[index].ballValue + data[i] >= 5) {
                judge = false;
            } else if (data[i] >= 5 && arr[index].line && arr[index].ballValue <= 0) {
                judge = true;
            } else if (data[i] >= 5 && arr[index].line && arr[index].ballValue >= 0) {
                judge = false;
            } else if (data[i] >= 5 && !arr[index].line) {
                judge = false;
            }
            if (!judge) {
                index++;
            }
            arr[index].ballValue += data[i];
            func(arr, index);
        }
        console.log('数据:', arr);
        return arr;
    }

    public setBallPos(data) {
        let WidthValue = 720;
        let startPosX = 0;
        let startPosY = 0;
        let disaffinity = 0;
        let isFeedLine = false;
        //第几行
        for (let i = 0; i < data.length; i++) {
            let value = data[i].ballValue;
            //获得当前行的长度
            let w = value * 40 + value * 10;
            startPosX = (WidthValue - w) / 2;
            if (i != 0) {
                startPosY -= 30 + disaffinity;
            }
            if (value > 5 && !isFeedLine) {
                disaffinity += 50;
                isFeedLine = true;
            }
            console.log('查看长度:', startPosX, startPosY, '总长度:', w);
            this.addBall(data[i], i, w, cc.v2(startPosX, startPosY));
        }
    }
    public addBall(data, is, w, pos: cc.Vec2) {
        let location = pos;
        console.log('pos:', location.x, '总数:', data);
        let isFeedLine = false; //判断是否要换行
        let index = 0; //x
        let disaffinity = 0; //是否是不同类型的球,是的话,相距加大
        if (data.ballValue >= 5) {
            //如果当行球大于等于5,重新计算长度,
            w = 5 * 40 + 5 * 10;
            this.layout[is].height * 2;
        }
        for (let i = 0; i < data.ballValue; i++) {
            if (i >= 5 && !isFeedLine) {
                index = 0;
                location.x = pos.x;
                location.y = pos.y - 40 - 10;
                isFeedLine = true;
            }
            if (data.disaffinity == i) {
                disaffinity = 20;
            }
            location.x = index * (40 + 10) - w / 2 + disaffinity;
            let node = cc.instantiate(this.ball);
            node.position = cc.v3(location);
            this.layout[is].addChild(node);
            index++;
            console.log('查看x', location.x);
        }
        console.log('------');
    }
}
