
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/management/LayerBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7448agyD2tD4re4jizMrGBG', 'LayerBase');
// script/management/LayerBase.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 层级基类
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerBase = exports.NodeSize = exports.NodeType = exports.LayerType = void 0;
var AdaptiveComm_1 = require("../common/AdaptiveComm");
/**
 * 层级类型
 */
var LayerType;
(function (LayerType) {
    LayerType[LayerType["UI"] = 0] = "UI";
    LayerType[LayerType["ADAPTIVE"] = 1] = "ADAPTIVE";
    LayerType[LayerType["POPUP"] = 2] = "POPUP";
})(LayerType = exports.LayerType || (exports.LayerType = {}));
/**
 * node uuid类型
 */
var NodeType = /** @class */ (function () {
    function NodeType(name, uuid) {
        this.name = name;
        this.uuid = uuid;
    }
    return NodeType;
}());
exports.NodeType = NodeType;
/**
 * node 宽高大小
 */
var NodeSize = /** @class */ (function () {
    function NodeSize() {
    }
    return NodeSize;
}());
exports.NodeSize = NodeSize;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LayerBase = /** @class */ (function () {
    function LayerBase() {
        this.root = undefined;
        this.nodeList = [];
    }
    /**
     * 初始化
     * @param node 根节点
     * @param isAddLayer 是否要添加基础层级
     */
    LayerBase.prototype.initLayerBase = function (node, isAddLayer) {
        if (isAddLayer === void 0) { isAddLayer = true; }
        this.root = node;
        if (isAddLayer) {
            this.addLayerMain();
        }
    };
    /**
     * 添加层级入口
     */
    LayerBase.prototype.addLayerMain = function () {
        for (var i = 0; i < Object.values(LayerType).length / 2; i++) {
            this.addLayer(LayerType[i]);
        }
    };
    /**
     * 添加层级
     *
     * @description 添加层级node,并且添加适配脚本
     */
    LayerBase.prototype.addLayer = function (string) {
        if (this.getLayer(string))
            return;
        var node = new cc.Node();
        node.name = string + "Layer";
        node.addComponent(AdaptiveComm_1.default).init();
        this.root.addChild(node, this.rootZIndex++);
    };
    /**
     * 获得一个层级
     * @param name nodeName
     * @returns
     */
    LayerBase.prototype.getLayer = function (name) {
        return this.root.getChildByName(name + "Layer");
    };
    /**
     * 获得根节点
     * @returns
     */
    LayerBase.prototype.getRootNode = function () {
        return this.root;
    };
    /**
     * 层级添加node
     * @description 添加目标节点到父节点上,并且绑点相应的脚本
     * @param parentNode 父节点
     * @param node 目标节点
     * @param isAdpitve 是否使用默认适配方式
     * @param ZIndex 层级
     */
    LayerBase.prototype.addNode = function (parentNode, node, isAdpitve, ZIndex) {
        if (isAdpitve === void 0) { isAdpitve = true; }
        if (ZIndex === void 0) { ZIndex = 0; }
        var nodes = cc.instantiate(node);
        nodes.zIndex = ZIndex;
        this.getLayer(LayerType[parentNode]).addChild(nodes);
    };
    /**
     * 获得所有的node属性
     * @returns
     */
    LayerBase.prototype.getAllNodeData = function () {
        this.traverseNodeData(this.root);
        return this.nodeList;
    };
    /**
     * 遍历目标node数据
     * @param node 需要遍历获得的目标节点
     */
    LayerBase.prototype.traverseNodeData = function (node) {
        for (var i = 0; i < node.children.length; i++) {
            var childNode = node.children[i];
            var type = new NodeType(childNode.name, childNode.uuid);
            this.nodeList.push(type);
            if (childNode.children.length > 0) {
                this.traverseNodeData(childNode);
            }
        }
    };
    LayerBase = __decorate([
        ccclass
    ], LayerBase);
    return LayerBase;
}());
exports.LayerBase = LayerBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9MYXllckJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7Ozs7Ozs7OztBQUVILHVEQUFrRDtBQUVsRDs7R0FFRztBQUNILElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNqQixxQ0FBSSxDQUFBO0lBQ0osaURBQVUsQ0FBQTtJQUNWLDJDQUFPLENBQUE7QUFDWCxDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFDRDs7R0FFRztBQUNIO0lBSUksa0JBQVksSUFBWSxFQUFFLElBQVk7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLDRCQUFRO0FBU3JCOztHQUVHO0FBQ0g7SUFBQTtJQUdBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSw0QkFBUTtBQUlmLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFWSxTQUFJLEdBQVksU0FBUyxDQUFDO1FBRTFCLGFBQVEsR0FBb0IsRUFBRSxDQUFDO0lBb0YzQyxDQUFDO0lBbEZHOzs7O09BSUc7SUFDSSxpQ0FBYSxHQUFwQixVQUFxQixJQUFhLEVBQUUsVUFBMEI7UUFBMUIsMkJBQUEsRUFBQSxpQkFBMEI7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSyxnQ0FBWSxHQUFwQjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ssNEJBQVEsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQUUsT0FBTztRQUVsQyxJQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixJQUFZO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRDs7O09BR0c7SUFDSSwrQkFBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRztJQUNJLDJCQUFPLEdBQWQsVUFBZSxVQUFrQixFQUFFLElBQWEsRUFBRSxTQUF5QixFQUFFLE1BQWtCO1FBQTdDLDBCQUFBLEVBQUEsZ0JBQXlCO1FBQUUsdUJBQUEsRUFBQSxVQUFrQjtRQUMzRixJQUFJLEtBQUssR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRDs7O09BR0c7SUFDSSxrQ0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRDs7O09BR0c7SUFDSSxvQ0FBZ0IsR0FBdkIsVUFBd0IsSUFBYTtRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxTQUFTLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0o7SUFDTCxDQUFDO0lBdkZRLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0F3RnJCO0lBQUQsZ0JBQUM7Q0F4RkQsQUF3RkMsSUFBQTtBQXhGWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBdXRob3I6IGFoaGggKG5ld19xOEAxNjMuY29tKVxuICpcbiAqIERlc2NyaXB0aW9uOiDlsYLnuqfln7rnsbtcbiAqL1xuXG5pbXBvcnQgQWRhcHRpdmVDb21tIGZyb20gJy4uL2NvbW1vbi9BZGFwdGl2ZUNvbW0nO1xuaW1wb3J0IEFkYXB0aXZlQ29tbXMgZnJvbSAnLi4vY29tbW9uL0FkYXB0aXZlQ29tbXMnO1xuLyoqXG4gKiDlsYLnuqfnsbvlnotcbiAqL1xuZXhwb3J0IGVudW0gTGF5ZXJUeXBlIHtcbiAgICBcIlVJXCIsXG4gICAgXCJBREFQVElWRVwiLFxuICAgIFwiUE9QVVBcIixcbn1cbi8qKlxuICogbm9kZSB1dWlk57G75Z6LXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlVHlwZSB7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgdXVpZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB1dWlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICB9XG59XG4vKipcbiAqIG5vZGUg5a696auY5aSn5bCPXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlU2l6ZSB7XG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xufVxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBMYXllckJhc2Uge1xuXG4gICAgcHJpdmF0ZSByb290OiBjYy5Ob2RlID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgcm9vdFpJbmRleDogMDtcbiAgICBwcml2YXRlIG5vZGVMaXN0OiBBcnJheTxOb2RlVHlwZT4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMllxuICAgICAqIEBwYXJhbSBub2RlIOagueiKgueCuVxuICAgICAqIEBwYXJhbSBpc0FkZExheWVyIOaYr+WQpuimgea3u+WKoOWfuuehgOWxgue6p1xuICAgICAqL1xuICAgIHB1YmxpYyBpbml0TGF5ZXJCYXNlKG5vZGU6IGNjLk5vZGUsIGlzQWRkTGF5ZXI6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG5vZGU7XG4gICAgICAgIGlmIChpc0FkZExheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmFkZExheWVyTWFpbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOWxgue6p+WFpeWPo1xuICAgICAqL1xuICAgIHByaXZhdGUgYWRkTGF5ZXJNYWluKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC52YWx1ZXMoTGF5ZXJUeXBlKS5sZW5ndGggLyAyOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGF5ZXIoTGF5ZXJUeXBlW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDlsYLnuqdcbiAgICAgKiBcbiAgICAgKiBAZGVzY3JpcHRpb24g5re75Yqg5bGC57qnbm9kZSzlubbkuJTmt7vliqDpgILphY3ohJrmnKxcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZExheWVyKHN0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmdldExheWVyKHN0cmluZykpIHJldHVybjtcblxuICAgICAgICBjb25zdCBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgbm9kZS5uYW1lID0gc3RyaW5nICsgXCJMYXllclwiO1xuICAgICAgICBub2RlLmFkZENvbXBvbmVudChBZGFwdGl2ZUNvbW0pLmluaXQoKTtcbiAgICAgICAgdGhpcy5yb290LmFkZENoaWxkKG5vZGUsIHRoaXMucm9vdFpJbmRleCsrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635b6X5LiA5Liq5bGC57qnXG4gICAgICogQHBhcmFtIG5hbWUgbm9kZU5hbWVcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TGF5ZXIobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0Q2hpbGRCeU5hbWUobmFtZSArIFwiTGF5ZXJcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+W+l+agueiKgueCuVxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRSb290Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5bGC57qn5re75Yqgbm9kZVxuICAgICAqIEBkZXNjcmlwdGlvbiDmt7vliqDnm67moIfoioLngrnliLDniLboioLngrnkuIos5bm25LiU57uR54K555u45bqU55qE6ISa5pysXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUg54i26IqC54K5XG4gICAgICogQHBhcmFtIG5vZGUg55uu5qCH6IqC54K5XG4gICAgICogQHBhcmFtIGlzQWRwaXR2ZSDmmK/lkKbkvb/nlKjpu5jorqTpgILphY3mlrnlvI9cbiAgICAgKiBAcGFyYW0gWkluZGV4IOWxgue6p1xuICAgICAqL1xuICAgIHB1YmxpYyBhZGROb2RlKHBhcmVudE5vZGU6IG51bWJlciwgbm9kZTogY2MuTm9kZSwgaXNBZHBpdHZlOiBib29sZWFuID0gdHJ1ZSwgWkluZGV4OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGxldCBub2RlczogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKG5vZGUpO1xuICAgICAgICBub2Rlcy56SW5kZXggPSBaSW5kZXg7XG4gICAgICAgIHRoaXMuZ2V0TGF5ZXIoTGF5ZXJUeXBlW3BhcmVudE5vZGVdKS5hZGRDaGlsZChub2Rlcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+W+l+aJgOacieeahG5vZGXlsZ7mgKdcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QWxsTm9kZURhdGEoKSB7XG4gICAgICAgIHRoaXMudHJhdmVyc2VOb2RlRGF0YSh0aGlzLnJvb3QpO1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlTGlzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6YGN5Y6G55uu5qCHbm9kZeaVsOaNrlxuICAgICAqIEBwYXJhbSBub2RlIOmcgOimgemBjeWOhuiOt+W+l+eahOebruagh+iKgueCuVxuICAgICAqL1xuICAgIHB1YmxpYyB0cmF2ZXJzZU5vZGVEYXRhKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGROb2RlOiBjYy5Ob2RlID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCB0eXBlID0gbmV3IE5vZGVUeXBlKGNoaWxkTm9kZS5uYW1lLCBjaGlsZE5vZGUudXVpZCk7XG4gICAgICAgICAgICB0aGlzLm5vZGVMaXN0LnB1c2godHlwZSk7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYXZlcnNlTm9kZURhdGEoY2hpbGROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==