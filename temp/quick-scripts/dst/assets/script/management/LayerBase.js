
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9MYXllckJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7Ozs7Ozs7OztBQUVILHVEQUFrRDtBQUVsRDs7R0FFRztBQUNILElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNqQixxQ0FBSSxDQUFBO0lBQ0osaURBQVUsQ0FBQTtJQUNWLDJDQUFPLENBQUE7QUFDWCxDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFDRDs7R0FFRztBQUNIO0lBSUksa0JBQVksSUFBWSxFQUFFLElBQVk7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLDRCQUFRO0FBU3JCOztHQUVHO0FBQ0g7SUFBQTtJQUdBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSw0QkFBUTtBQUlmLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFWSxTQUFJLEdBQVksU0FBUyxDQUFDO1FBRTFCLGFBQVEsR0FBb0IsRUFBRSxDQUFDO0lBa0YzQyxDQUFDO0lBaEZHOzs7O09BSUc7SUFDSSxpQ0FBYSxHQUFwQixVQUFxQixJQUFhLEVBQUUsVUFBMEI7UUFBMUIsMkJBQUEsRUFBQSxpQkFBMEI7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSyxnQ0FBWSxHQUFwQjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ssNEJBQVEsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixJQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixJQUFZO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRDs7O09BR0c7SUFDSSwrQkFBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRztJQUNJLDJCQUFPLEdBQWQsVUFBZSxVQUFrQixFQUFFLElBQWEsRUFBRSxTQUF5QixFQUFFLE1BQWtCO1FBQTdDLDBCQUFBLEVBQUEsZ0JBQXlCO1FBQUUsdUJBQUEsRUFBQSxVQUFrQjtRQUMzRixJQUFJLEtBQUssR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRDs7O09BR0c7SUFDSSxrQ0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRDs7O09BR0c7SUFDSSxvQ0FBZ0IsR0FBdkIsVUFBd0IsSUFBYTtRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxTQUFTLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0o7SUFDTCxDQUFDO0lBckZRLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FzRnJCO0lBQUQsZ0JBQUM7Q0F0RkQsQUFzRkMsSUFBQTtBQXRGWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBdXRob3I6IGFoaGggKG5ld19xOEAxNjMuY29tKVxuICpcbiAqIERlc2NyaXB0aW9uOiDlsYLnuqfln7rnsbtcbiAqL1xuXG5pbXBvcnQgQWRhcHRpdmVDb21tIGZyb20gJy4uL2NvbW1vbi9BZGFwdGl2ZUNvbW0nO1xuaW1wb3J0IEFkYXB0aXZlQ29tbXMgZnJvbSAnLi4vY29tbW9uL0FkYXB0aXZlQ29tbXMnO1xuLyoqXG4gKiDlsYLnuqfnsbvlnotcbiAqL1xuZXhwb3J0IGVudW0gTGF5ZXJUeXBlIHtcbiAgICBcIlVJXCIsXG4gICAgXCJBREFQVElWRVwiLFxuICAgIFwiUE9QVVBcIixcbn1cbi8qKlxuICogbm9kZSB1dWlk57G75Z6LXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlVHlwZSB7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgdXVpZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB1dWlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICB9XG59XG4vKipcbiAqIG5vZGUg5a696auY5aSn5bCPXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlU2l6ZSB7XG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xufVxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBMYXllckJhc2Uge1xuXG4gICAgcHJpdmF0ZSByb290OiBjYy5Ob2RlID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgcm9vdFpJbmRleDogMDtcbiAgICBwcml2YXRlIG5vZGVMaXN0OiBBcnJheTxOb2RlVHlwZT4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMllxuICAgICAqIEBwYXJhbSBub2RlIOagueiKgueCuVxuICAgICAqIEBwYXJhbSBpc0FkZExheWVyIOaYr+WQpuimgea3u+WKoOWfuuehgOWxgue6p1xuICAgICAqL1xuICAgIHB1YmxpYyBpbml0TGF5ZXJCYXNlKG5vZGU6IGNjLk5vZGUsIGlzQWRkTGF5ZXI6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG5vZGU7XG4gICAgICAgIGlmIChpc0FkZExheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmFkZExheWVyTWFpbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOWxgue6p+WFpeWPo1xuICAgICAqL1xuICAgIHByaXZhdGUgYWRkTGF5ZXJNYWluKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC52YWx1ZXMoTGF5ZXJUeXBlKS5sZW5ndGggLyAyOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGF5ZXIoTGF5ZXJUeXBlW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDlsYLnuqdcbiAgICAgKiBcbiAgICAgKiBAZGVzY3JpcHRpb24g5re75Yqg5bGC57qnbm9kZSzlubbkuJTmt7vliqDpgILphY3ohJrmnKxcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZExheWVyKHN0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBub2RlLm5hbWUgPSBzdHJpbmcgKyBcIkxheWVyXCI7XG4gICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KEFkYXB0aXZlQ29tbSkuaW5pdCgpO1xuICAgICAgICB0aGlzLnJvb3QuYWRkQ2hpbGQobm9kZSwgdGhpcy5yb290WkluZGV4KyspO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflvpfkuIDkuKrlsYLnuqdcbiAgICAgKiBAcGFyYW0gbmFtZSBub2RlTmFtZVxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMYXllcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5nZXRDaGlsZEJ5TmFtZShuYW1lICsgXCJMYXllclwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635b6X5qC56IqC54K5XG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIGdldFJvb3ROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlsYLnuqfmt7vliqBub2RlXG4gICAgICogQGRlc2NyaXB0aW9uIOa3u+WKoOebruagh+iKgueCueWIsOeItuiKgueCueS4iizlubbkuJTnu5Hngrnnm7jlupTnmoTohJrmnKxcbiAgICAgKiBAcGFyYW0gcGFyZW50Tm9kZSDniLboioLngrlcbiAgICAgKiBAcGFyYW0gbm9kZSDnm67moIfoioLngrlcbiAgICAgKiBAcGFyYW0gaXNBZHBpdHZlIOaYr+WQpuS9v+eUqOm7mOiupOmAgumFjeaWueW8j1xuICAgICAqIEBwYXJhbSBaSW5kZXgg5bGC57qnXG4gICAgICovXG4gICAgcHVibGljIGFkZE5vZGUocGFyZW50Tm9kZTogbnVtYmVyLCBub2RlOiBjYy5Ob2RlLCBpc0FkcGl0dmU6IGJvb2xlYW4gPSB0cnVlLCBaSW5kZXg6IG51bWJlciA9IDApIHtcbiAgICAgICAgbGV0IG5vZGVzOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUobm9kZSk7XG4gICAgICAgIG5vZGVzLnpJbmRleCA9IFpJbmRleDtcbiAgICAgICAgdGhpcy5nZXRMYXllcihMYXllclR5cGVbcGFyZW50Tm9kZV0pLmFkZENoaWxkKG5vZGVzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635b6X5omA5pyJ55qEbm9kZeWxnuaAp1xuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBbGxOb2RlRGF0YSgpIHtcbiAgICAgICAgdGhpcy50cmF2ZXJzZU5vZGVEYXRhKHRoaXMucm9vdCk7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVMaXN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDpgY3ljobnm67moIdub2Rl5pWw5o2uXG4gICAgICogQHBhcmFtIG5vZGUg6ZyA6KaB6YGN5Y6G6I635b6X55qE55uu5qCH6IqC54K5XG4gICAgICovXG4gICAgcHVibGljIHRyYXZlcnNlTm9kZURhdGEobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZE5vZGU6IGNjLk5vZGUgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBuZXcgTm9kZVR5cGUoY2hpbGROb2RlLm5hbWUsIGNoaWxkTm9kZS51dWlkKTtcbiAgICAgICAgICAgIHRoaXMubm9kZUxpc3QucHVzaCh0eXBlKTtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhdmVyc2VOb2RlRGF0YShjaGlsZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19