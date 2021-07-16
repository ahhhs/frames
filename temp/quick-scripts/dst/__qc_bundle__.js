
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/hall/TestPrefabUI');
require('./assets/hall/demo');
require('./assets/script/common/AdaptiveComm');
require('./assets/script/common/GameBase');
require('./assets/script/management/BaseLayerManagement');
require('./assets/script/management/LoadManagement');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/GameBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77c54Bf0k9IybH/2KD4YwL5', 'GameBase');
// script/common/GameBase.ts

"use strict";
/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameBase = /** @class */ (function () {
    function GameBase() {
    }
    GameBase = __decorate([
        ccclass
    ], GameBase);
    return GameBase;
}());
exports.default = GameBase;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0dhbWVCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRzs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBR0EsQ0FBQztJQUhvQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBRzVCO0lBQUQsZUFBQztDQUhELEFBR0MsSUFBQTtrQkFIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEsIEZsaWNrZXJpbmcgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogQXV0aG9yOiB3ZW5xaWFucWluICh3ZW5xaWFucWluQGZsaWNrZXJpbmcuYWkpXG4gKlxuICogRGVzY3JpcHRpb246XG4gKi9cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCYXNlIHtcblxuICAgXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/management/BaseLayerManagement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7448agyD2tD4re4jizMrGBG', 'BaseLayerManagement');
// script/management/BaseLayerManagement.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: ui层级管理器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLayerManagement = exports.NodeSize = exports.LayerType = void 0;
var AdaptiveComm_1 = require("../common/AdaptiveComm");
var LayerType;
(function (LayerType) {
    LayerType[LayerType["UI"] = 0] = "UI";
    LayerType[LayerType["ADAPTIVE"] = 1] = "ADAPTIVE";
    LayerType[LayerType["POPUP"] = 2] = "POPUP";
})(LayerType = exports.LayerType || (exports.LayerType = {}));
var NodeSize = /** @class */ (function () {
    function NodeSize() {
    }
    return NodeSize;
}());
exports.NodeSize = NodeSize;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseLayerManagement = /** @class */ (function () {
    function BaseLayerManagement() {
        this.root = undefined;
    }
    BaseLayerManagement_1 = BaseLayerManagement;
    Object.defineProperty(BaseLayerManagement, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new BaseLayerManagement_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    BaseLayerManagement.prototype.init = function (node, size) {
        this.root = node;
        this.initData(size);
        this.addLayerMain();
    };
    /**
     * 初始化参数
     * @param size
     */
    BaseLayerManagement.prototype.initData = function (size) {
        this.size = size;
    };
    /**
     * 添加层级入口
     */
    BaseLayerManagement.prototype.addLayerMain = function () {
        for (var i = 0; i < Object.values(LayerType).length / 2; i++) {
            this.addLayer(LayerType[i]);
        }
    };
    /**
     * 添加层级
     */
    BaseLayerManagement.prototype.addLayer = function (string) {
        var node = new cc.Node();
        node.name = string + "Layer";
        node.width = this.size.width;
        node.height = this.size.height;
        node.addComponent(AdaptiveComm_1.default);
        this.root.addChild(node, this.rootZIndex++);
    };
    /**
     * 获得一个层级
     * @param name nodeName
     * @returns
     */
    BaseLayerManagement.prototype.getLayer = function (name) {
        return this.root.getChildByName(name + "Layer");
    };
    /**
     * 获得根节点
     * @returns
     */
    BaseLayerManagement.prototype.getRootNode = function () {
        return this.root;
    };
    /**
     * 层级添加node
     * @param parentNode 父节点
     * @param node 目标节点
     * @param script 目标脚本
     */
    BaseLayerManagement.prototype.addNode = function (parentNode, node, script, ZIndex) {
        if (ZIndex === void 0) { ZIndex = 0; }
        var nodes = cc.instantiate(node);
        nodes.addComponent(script).init();
        nodes.zIndex = ZIndex;
        BaseLayerManagement_1.instance.getLayer(LayerType[parentNode]).addChild(nodes);
    };
    var BaseLayerManagement_1;
    BaseLayerManagement = BaseLayerManagement_1 = __decorate([
        ccclass
    ], BaseLayerManagement);
    return BaseLayerManagement;
}());
exports.BaseLayerManagement = BaseLayerManagement;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9CYXNlTGF5ZXJNYW5hZ2VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztHQUlHOzs7Ozs7Ozs7QUFFSCx1REFBa0Q7QUFFbEQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLHFDQUFJLENBQUE7SUFDSixpREFBVSxDQUFBO0lBQ1YsMkNBQU8sQ0FBQTtBQUNYLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUVEO0lBQUE7SUFHQSxDQUFDO0lBQUQsZUFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksNEJBQVE7QUFJZixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBR1ksU0FBSSxHQUFZLFNBQVMsQ0FBQztJQXFFdEMsQ0FBQzs0QkF4RVksbUJBQW1CO0lBTTVCLHNCQUFrQiwrQkFBUTthQUExQjtZQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQW1CLEVBQUUsQ0FBQzthQUM5QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVNLGtDQUFJLEdBQVgsVUFBWSxJQUFhLEVBQUUsSUFBYztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ssc0NBQVEsR0FBaEIsVUFBaUIsSUFBYztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0Q7O09BRUc7SUFDSywwQ0FBWSxHQUFwQjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFDRDs7T0FFRztJQUNLLHNDQUFRLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNEOzs7O09BSUc7SUFDSSxzQ0FBUSxHQUFmLFVBQWdCLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNEOzs7T0FHRztJQUNJLHlDQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNJLHFDQUFPLEdBQWQsVUFBZSxVQUFrQixFQUFFLElBQWEsRUFBRSxNQUFjLEVBQUUsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxVQUFrQjtRQUNoRixJQUFJLEtBQUssR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIscUJBQW1CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7SUF2RVEsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0F3RS9CO0lBQUQsMEJBQUM7Q0F4RUQsQUF3RUMsSUFBQTtBQXhFWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXV0aG9yOiBhaGhoIChuZXdfcThAMTYzLmNvbSlcbiAqXG4gKiBEZXNjcmlwdGlvbjogdWnlsYLnuqfnrqHnkIblmahcbiAqL1xuXG5pbXBvcnQgQWRhcHRpdmVDb21tIGZyb20gJy4uL2NvbW1vbi9BZGFwdGl2ZUNvbW0nO1xuXG5leHBvcnQgZW51bSBMYXllclR5cGUge1xuICAgIFwiVUlcIixcbiAgICBcIkFEQVBUSVZFXCIsXG4gICAgXCJQT1BVUFwiLFxufVxuXG5leHBvcnQgY2xhc3MgTm9kZVNpemUge1xuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbn1cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQmFzZUxheWVyTWFuYWdlbWVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEJhc2VMYXllck1hbmFnZW1lbnQ7XG4gICAgcHJpdmF0ZSByb290OiBjYy5Ob2RlID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgcm9vdFpJbmRleDogMDtcbiAgICBwcml2YXRlIHNpemU6IE5vZGVTaXplO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEJhc2VMYXllck1hbmFnZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQobm9kZTogY2MuTm9kZSwgc2l6ZTogTm9kZVNpemUpIHtcbiAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcbiAgICAgICAgdGhpcy5pbml0RGF0YShzaXplKTtcbiAgICAgICAgdGhpcy5hZGRMYXllck1haW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5Y+C5pWwXG4gICAgICogQHBhcmFtIHNpemUgXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbml0RGF0YShzaXplOiBOb2RlU2l6ZSkge1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDlsYLnuqflhaXlj6NcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZExheWVyTWFpbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3QudmFsdWVzKExheWVyVHlwZSkubGVuZ3RoIC8gMjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZExheWVyKExheWVyVHlwZVtpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5re75Yqg5bGC57qnXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRMYXllcihzdHJpbmc6IHN0cmluZykge1xuICAgICAgICBjb25zdCBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgbm9kZS5uYW1lID0gc3RyaW5nICsgXCJMYXllclwiO1xuICAgICAgICBub2RlLndpZHRoID0gdGhpcy5zaXplLndpZHRoO1xuICAgICAgICBub2RlLmhlaWdodCA9IHRoaXMuc2l6ZS5oZWlnaHQ7XG4gICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KEFkYXB0aXZlQ29tbSk7XG4gICAgICAgIHRoaXMucm9vdC5hZGRDaGlsZChub2RlLCB0aGlzLnJvb3RaSW5kZXgrKyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+W+l+S4gOS4quWxgue6p1xuICAgICAqIEBwYXJhbSBuYW1lIG5vZGVOYW1lXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIGdldExheWVyKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290LmdldENoaWxkQnlOYW1lKG5hbWUgKyBcIkxheWVyXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflvpfmoLnoioLngrlcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Um9vdE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWxgue6p+a3u+WKoG5vZGVcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSDniLboioLngrlcbiAgICAgKiBAcGFyYW0gbm9kZSDnm67moIfoioLngrlcbiAgICAgKiBAcGFyYW0gc2NyaXB0IOebruagh+iEmuacrFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGROb2RlKHBhcmVudE5vZGU6IG51bWJlciwgbm9kZTogY2MuTm9kZSwgc2NyaXB0OiBzdHJpbmcsIFpJbmRleDogbnVtYmVyID0gMCkge1xuICAgICAgICBsZXQgbm9kZXM6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShub2RlKTtcbiAgICAgICAgbm9kZXMuYWRkQ29tcG9uZW50KHNjcmlwdCkuaW5pdCgpO1xuICAgICAgICBub2Rlcy56SW5kZXggPSBaSW5kZXg7XG4gICAgICAgIEJhc2VMYXllck1hbmFnZW1lbnQuaW5zdGFuY2UuZ2V0TGF5ZXIoTGF5ZXJUeXBlW3BhcmVudE5vZGVdKS5hZGRDaGlsZChub2Rlcyk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/AdaptiveComm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8d30Bgd+dIerkWJfSBUXF+', 'AdaptiveComm');
// script/common/AdaptiveComm.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 适配脚本
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AdaptiveComm = /** @class */ (function (_super) {
    __extends(AdaptiveComm, _super);
    function AdaptiveComm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdaptiveComm.prototype.onLoad = function () {
        this.node.width = cc.winSize.width;
        this.node.height = cc.winSize.height;
    };
    AdaptiveComm = __decorate([
        ccclass
    ], AdaptiveComm);
    return AdaptiveComm;
}(cc.Component));
exports.default = AdaptiveComm;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0FkYXB0aXZlQ29tbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7O0lBTUEsQ0FBQztJQUpHLDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBTGdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FNaEM7SUFBRCxtQkFBQztDQU5ELEFBTUMsQ0FOeUMsRUFBRSxDQUFDLFNBQVMsR0FNckQ7a0JBTm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXV0aG9yOiBhaGhoIChuZXdfcThAMTYzLmNvbSlcbiAqXG4gKiBEZXNjcmlwdGlvbjog6YCC6YWN6ISa5pysXG4gKi9cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYXB0aXZlQ29tbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IGNjLndpblNpemUud2lkdGg7XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICB9XG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/management/LoadManagement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a59a83i71GR72ERIyE6TEb', 'LoadManagement');
// script/management/LoadManagement.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 加载管理器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadManagement = /** @class */ (function () {
    function LoadManagement() {
        this.loadArr = new Map();
    }
    LoadManagement_1 = LoadManagement;
    Object.defineProperty(LoadManagement, "install", {
        get: function () {
            if (!this._install) {
                this._install = new LoadManagement_1();
            }
            return this._install;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 加载预制体
     * @param url
     * @param asserts
     * @returns
     */
    LoadManagement.prototype.loadPrefab = function (url, asserts) {
        var _this = this;
        return new Promise(function (res) {
            cc.assetManager.loadBundle(url, function (ell, bundle) {
                bundle.load(asserts, function (ell, asserts) {
                    if (asserts instanceof cc.Prefab) {
                        _this.loadArr.set(asserts.name, asserts);
                        res();
                    }
                });
            });
        });
    };
    /**
     * 加载预制体文件夹
     * @param url
     * @param asserts
     */
    LoadManagement.prototype.loadPrefabs = function (url, fileName) {
        var _this = this;
        return new Promise(function (res) {
            cc.assetManager.loadBundle(url, function (ell, bundle) {
                bundle.loadDir(fileName, function (ell, asserts) {
                    for (var i = 0; i < asserts.length; i++) {
                        _this.loadArr.set(asserts[i].name, asserts[i]);
                    }
                    res();
                });
            });
        });
    };
    /**
     * 获得加载列表
     * @returns
     */
    LoadManagement.prototype.getLoadList = function () {
        return this.loadArr;
    };
    var LoadManagement_1;
    LoadManagement = LoadManagement_1 = __decorate([
        ccclass
    ], LoadManagement);
    return LoadManagement;
}());
exports.default = LoadManagement;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9Mb2FkTWFuYWdlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBR1ksWUFBTyxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBcURsRCxDQUFDO3VCQXhEb0IsY0FBYztJQUsvQixzQkFBa0IseUJBQU87YUFBekI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdCQUFjLEVBQUUsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVEOzs7OztPQUtHO0lBQ0ksbUNBQVUsR0FBakIsVUFBa0IsR0FBVyxFQUFFLE9BQWU7UUFBOUMsaUJBWUM7UUFWRyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsR0FBRztZQUN6QixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBOEI7Z0JBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87b0JBQzlCLElBQUksT0FBTyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7d0JBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQ3hDLEdBQUcsRUFBRSxDQUFDO3FCQUNUO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksb0NBQVcsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLFFBQWdCO1FBQWhELGlCQVdDO1FBVkcsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLEdBQUc7WUFDekIsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQThCO2dCQUNoRSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxPQUFPO29CQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDakQ7b0JBQ0QsR0FBRyxFQUFFLENBQUE7Z0JBQ1QsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNEOzs7T0FHRztJQUNJLG9DQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7O0lBdkRnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBd0RsQztJQUFELHFCQUFDO0NBeERELEFBd0RDLElBQUE7a0JBeERvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEF1dGhvcjogYWhoaCAobmV3X3E4QDE2My5jb20pXG4gKlxuICogRGVzY3JpcHRpb246IOWKoOi9veeuoeeQhuWZqFxuICovXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkTWFuYWdlbWVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFsbDogTG9hZE1hbmFnZW1lbnQ7XG4gICAgcHJpdmF0ZSBsb2FkQXJyOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFsbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YWxsID0gbmV3IExvYWRNYW5hZ2VtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L296aKE5Yi25L2TXG4gICAgICogQHBhcmFtIHVybCBcbiAgICAgKiBAcGFyYW0gYXNzZXJ0cyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZFByZWZhYih1cmw6IHN0cmluZywgYXNzZXJ0czogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHVybCwgKGVsbCwgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgYnVuZGxlLmxvYWQoYXNzZXJ0cywgKGVsbCwgYXNzZXJ0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXJ0cyBpbnN0YW5jZW9mIGNjLlByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQXJyLnNldChhc3NlcnRzLm5hbWUsIGFzc2VydHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3pooTliLbkvZPmlofku7blpLlcbiAgICAgKiBAcGFyYW0gdXJsIFxuICAgICAqIEBwYXJhbSBhc3NlcnRzIFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkUHJlZmFicyh1cmw6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUodXJsLCAoZWxsLCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpID0+IHtcbiAgICAgICAgICAgICAgICBidW5kbGUubG9hZERpcihmaWxlTmFtZSwgKGVsbCwgYXNzZXJ0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2VydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEFyci5zZXQoYXNzZXJ0c1tpXS5uYW1lLCBhc3NlcnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXMoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflvpfliqDovb3liJfooahcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TG9hZExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRBcnI7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/hall/demo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9c63cpDxlNLaP5MwynZCQY', 'demo');
// hall/demo.ts

"use strict";
/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseLayerManagement_1 = require("../script/management/BaseLayerManagement");
var LoadManagement_1 = require("../script/management/LoadManagement");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        BaseLayerManagement_1.BaseLayerManagement.instance.init(this.node, { height: 750, width: 1334 });
                        return [4 /*yield*/, LoadManagement_1.default.install.loadPrefab("prefabAB", "testPrefab")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, LoadManagement_1.default.install.loadPrefabs("prefabAB", "prefabArr")];
                    case 2:
                        _a.sent();
                        BaseLayerManagement_1.BaseLayerManagement.instance.addNode(BaseLayerManagement_1.LayerType.UI, LoadManagement_1.default.install.getLoadList().get("testPrefab"), "TestPrefabUI");
                        return [2 /*return*/];
                }
            });
        });
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9oYWxsL2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCxnRkFBMEY7QUFDMUYsc0VBQWlFO0FBRTNELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQVNBLENBQUM7SUFQUyx5QkFBTSxHQUFaOzs7Ozt3QkFDSSx5Q0FBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUMzRSxxQkFBTSx3QkFBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxFQUFBOzt3QkFBakUsU0FBaUUsQ0FBQzt3QkFDbEUscUJBQU0sd0JBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFBQTs7d0JBQWpFLFNBQWlFLENBQUM7d0JBRWxFLHlDQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsK0JBQVMsQ0FBQyxFQUFFLEVBQUUsd0JBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDOzs7OztLQUM5SDtJQVJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBUzVCO0lBQUQsZUFBQztDQVRELEFBU0MsQ0FUcUMsRUFBRSxDQUFDLFNBQVMsR0FTakQ7a0JBVG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIxLCBGbGlja2VyaW5nIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEF1dGhvcjogd2VucWlhbnFpbiAod2VucWlhbnFpbkBmbGlja2VyaW5nLmFpKVxuICpcbiAqIERlc2NyaXB0aW9uOlxuICovXG5cbmltcG9ydCB7IEJhc2VMYXllck1hbmFnZW1lbnQsIExheWVyVHlwZSB9IGZyb20gJy4uL3NjcmlwdC9tYW5hZ2VtZW50L0Jhc2VMYXllck1hbmFnZW1lbnQnO1xuaW1wb3J0IExvYWRNYW5hZ2VtZW50IGZyb20gJy4uL3NjcmlwdC9tYW5hZ2VtZW50L0xvYWRNYW5hZ2VtZW50JztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgICAgQmFzZUxheWVyTWFuYWdlbWVudC5pbnN0YW5jZS5pbml0KHRoaXMubm9kZSwgeyBoZWlnaHQ6IDc1MCwgd2lkdGg6IDEzMzQgfSk7XG4gICAgICAgIGF3YWl0IExvYWRNYW5hZ2VtZW50Lmluc3RhbGwubG9hZFByZWZhYihcInByZWZhYkFCXCIsIFwidGVzdFByZWZhYlwiKTtcbiAgICAgICAgYXdhaXQgTG9hZE1hbmFnZW1lbnQuaW5zdGFsbC5sb2FkUHJlZmFicyhcInByZWZhYkFCXCIsIFwicHJlZmFiQXJyXCIpO1xuXG4gICAgICAgIEJhc2VMYXllck1hbmFnZW1lbnQuaW5zdGFuY2UuYWRkTm9kZShMYXllclR5cGUuVUksIExvYWRNYW5hZ2VtZW50Lmluc3RhbGwuZ2V0TG9hZExpc3QoKS5nZXQoXCJ0ZXN0UHJlZmFiXCIpLCBcIlRlc3RQcmVmYWJVSVwiKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/hall/TestPrefabUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd93eYGUP5M7r6N/Kz/FJh7', 'TestPrefabUI');
// hall/TestPrefabUI.ts

"use strict";
/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPrefabUI = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestPrefabUI = /** @class */ (function (_super) {
    __extends(TestPrefabUI, _super);
    function TestPrefabUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestPrefabUI.prototype.init = function () {
        console.log("初始化了");
    };
    TestPrefabUI = __decorate([
        ccclass
    ], TestPrefabUI);
    return TestPrefabUI;
}(cc.Component));
exports.TestPrefabUI = TestPrefabUI;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9oYWxsL1Rlc3RQcmVmYWJVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyxnQ0FBWTtJQUE5Qzs7SUFLQSxDQUFDO0lBSFUsMkJBQUksR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUpRLFlBQVk7UUFEeEIsT0FBTztPQUNLLFlBQVksQ0FLeEI7SUFBRCxtQkFBQztDQUxELEFBS0MsQ0FMaUMsRUFBRSxDQUFDLFNBQVMsR0FLN0M7QUFMWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEsIEZsaWNrZXJpbmcgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogQXV0aG9yOiB3ZW5xaWFucWluICh3ZW5xaWFucWluQGZsaWNrZXJpbmcuYWkpXG4gKlxuICogRGVzY3JpcHRpb246XG4gKi9cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBUZXN0UHJlZmFiVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyW5LqGXCIpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
