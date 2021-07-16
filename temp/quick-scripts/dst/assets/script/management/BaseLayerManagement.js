
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9CYXNlTGF5ZXJNYW5hZ2VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztHQUlHOzs7Ozs7Ozs7QUFFSCx1REFBa0Q7QUFFbEQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLHFDQUFJLENBQUE7SUFDSixpREFBVSxDQUFBO0lBQ1YsMkNBQU8sQ0FBQTtBQUNYLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUVEO0lBQUE7SUFHQSxDQUFDO0lBQUQsZUFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksNEJBQVE7QUFJZixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBR1ksU0FBSSxHQUFZLFNBQVMsQ0FBQztJQW9FdEMsQ0FBQzs0QkF2RVksbUJBQW1CO0lBTTVCLHNCQUFrQiwrQkFBUTthQUExQjtZQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQW1CLEVBQUUsQ0FBQzthQUM5QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVNLGtDQUFJLEdBQVgsVUFBWSxJQUFhLEVBQUUsSUFBYztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ssc0NBQVEsR0FBaEIsVUFBaUIsSUFBYztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0Q7O09BRUc7SUFDSywwQ0FBWSxHQUFwQjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFDRDs7T0FFRztJQUNLLHNDQUFRLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNEOzs7O09BSUc7SUFDSSxzQ0FBUSxHQUFmLFVBQWdCLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNEOzs7T0FHRztJQUNJLHlDQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNJLHFDQUFPLEdBQWQsVUFBZSxVQUFrQixFQUFFLElBQWEsRUFBRSxNQUFjLEVBQUUsTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxVQUFtQjtRQUNqRixJQUFJLEtBQUssR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMscUJBQW1CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7SUF0RVEsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0F1RS9CO0lBQUQsMEJBQUM7Q0F2RUQsQUF1RUMsSUFBQTtBQXZFWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXV0aG9yOiBhaGhoIChuZXdfcThAMTYzLmNvbSlcbiAqXG4gKiBEZXNjcmlwdGlvbjogdWnlsYLnuqfnrqHnkIblmahcbiAqL1xuXG5pbXBvcnQgQWRhcHRpdmVDb21tIGZyb20gJy4uL2NvbW1vbi9BZGFwdGl2ZUNvbW0nO1xuXG5leHBvcnQgZW51bSBMYXllclR5cGUge1xuICAgIFwiVUlcIixcbiAgICBcIkFEQVBUSVZFXCIsXG4gICAgXCJQT1BVUFwiLFxufVxuXG5leHBvcnQgY2xhc3MgTm9kZVNpemUge1xuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbn1cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQmFzZUxheWVyTWFuYWdlbWVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEJhc2VMYXllck1hbmFnZW1lbnQ7XG4gICAgcHJpdmF0ZSByb290OiBjYy5Ob2RlID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgcm9vdFpJbmRleDogMDtcbiAgICBwcml2YXRlIHNpemU6IE5vZGVTaXplO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEJhc2VMYXllck1hbmFnZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQobm9kZTogY2MuTm9kZSwgc2l6ZTogTm9kZVNpemUpIHtcbiAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcbiAgICAgICAgdGhpcy5pbml0RGF0YShzaXplKTtcbiAgICAgICAgdGhpcy5hZGRMYXllck1haW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5Y+C5pWwXG4gICAgICogQHBhcmFtIHNpemUgXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbml0RGF0YShzaXplOiBOb2RlU2l6ZSkge1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDlsYLnuqflhaXlj6NcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZExheWVyTWFpbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3QudmFsdWVzKExheWVyVHlwZSkubGVuZ3RoIC8gMjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZExheWVyKExheWVyVHlwZVtpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5re75Yqg5bGC57qnXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRMYXllcihzdHJpbmc6IHN0cmluZykge1xuICAgICAgICBjb25zdCBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgbm9kZS5uYW1lID0gc3RyaW5nICsgXCJMYXllclwiO1xuICAgICAgICBub2RlLndpZHRoID0gdGhpcy5zaXplLndpZHRoO1xuICAgICAgICBub2RlLmhlaWdodCA9IHRoaXMuc2l6ZS5oZWlnaHQ7XG4gICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KEFkYXB0aXZlQ29tbSk7XG4gICAgICAgIHRoaXMucm9vdC5hZGRDaGlsZChub2RlLCB0aGlzLnJvb3RaSW5kZXgrKyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+W+l+S4gOS4quWxgue6p1xuICAgICAqIEBwYXJhbSBuYW1lIG5vZGVOYW1lXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIGdldExheWVyKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290LmdldENoaWxkQnlOYW1lKG5hbWUgKyBcIkxheWVyXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflvpfmoLnoioLngrlcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Um9vdE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWxgue6p+a3u+WKoG5vZGVcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSDniLboioLngrlcbiAgICAgKiBAcGFyYW0gbm9kZSDnm67moIfoioLngrlcbiAgICAgKiBAcGFyYW0gc2NyaXB0IOebruagh+iEmuacrFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGROb2RlKHBhcmVudE5vZGU6IG51bWJlciwgbm9kZTogY2MuTm9kZSwgc2NyaXB0OiBzdHJpbmcsIFpJbmRleD86IG51bWJlciA9IDApIHtcbiAgICAgICAgbGV0IG5vZGVzOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUobm9kZSk7XG4gICAgICAgIG5vZGVzLmFkZENvbXBvbmVudChzY3JpcHQpLmluaXQoKTtcbiAgICAgICAgQmFzZUxheWVyTWFuYWdlbWVudC5pbnN0YW5jZS5nZXRMYXllcihMYXllclR5cGVbcGFyZW50Tm9kZV0pLmFkZENoaWxkKG5vZGVzKTtcbiAgICB9XG59XG4iXX0=