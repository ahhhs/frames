
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
exports.LayerBase = exports.NodeSize = exports.LayerType = void 0;
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
var LayerBase = /** @class */ (function () {
    function LayerBase() {
        this.root = undefined;
        this.nodeList = [];
    }
    /**
     * 初始化
     * @param node 根节点
     * @param size 屏幕大小
     */
    LayerBase.prototype.init = function (node, size) {
        this.root = node;
        this.addLayerMain();
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
     * @param script 目标脚本
     * @param isAdpitve 是否使用默认适配方式
     * @param ZIndex 层级
     */
    LayerBase.prototype.addNode = function (parentNode, node, script, isAdpitve, ZIndex) {
        if (isAdpitve === void 0) { isAdpitve = true; }
        if (ZIndex === void 0) { ZIndex = 0; }
        var nodes = cc.instantiate(node);
        nodes.addComponent(script).init();
        nodes.zIndex = ZIndex;
        this.getLayer(LayerType[parentNode]).addChild(nodes);
    };
    LayerBase.prototype.getAllNode = function () {
        return this.nodeList;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9MYXllckJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7Ozs7Ozs7OztBQUVILHVEQUFrRDtBQUdsRCxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIscUNBQUksQ0FBQTtJQUNKLGlEQUFVLENBQUE7SUFDViwyQ0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBRUQ7SUFBQTtJQUdBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSw0QkFBUTtBQUlmLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFWSxTQUFJLEdBQVksU0FBUyxDQUFDO1FBRzFCLGFBQVEsR0FBbUIsRUFBRSxDQUFDO0lBZ0UxQyxDQUFDO0lBOURHOzs7O09BSUc7SUFDSSx3QkFBSSxHQUFYLFVBQVksSUFBYSxFQUFFLElBQWM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRDs7T0FFRztJQUNLLGdDQUFZLEdBQXBCO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUNEOzs7O09BSUc7SUFDSyw0QkFBUSxHQUFoQixVQUFpQixNQUFjO1FBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNEOzs7O09BSUc7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNEOzs7T0FHRztJQUNJLCtCQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRDs7Ozs7Ozs7T0FRRztJQUNJLDJCQUFPLEdBQWQsVUFBZSxVQUFrQixFQUFFLElBQWEsRUFBRSxNQUFjLEVBQUUsU0FBeUIsRUFBRSxNQUFrQjtRQUE3QywwQkFBQSxFQUFBLGdCQUF5QjtRQUFFLHVCQUFBLEVBQUEsVUFBa0I7UUFDM0csSUFBSSxLQUFLLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSw4QkFBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBcEVRLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FxRXJCO0lBQUQsZ0JBQUM7Q0FyRUQsQUFxRUMsSUFBQTtBQXJFWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBdXRob3I6IGFoaGggKG5ld19xOEAxNjMuY29tKVxuICpcbiAqIERlc2NyaXB0aW9uOiDlsYLnuqfln7rnsbtcbiAqL1xuXG5pbXBvcnQgQWRhcHRpdmVDb21tIGZyb20gJy4uL2NvbW1vbi9BZGFwdGl2ZUNvbW0nO1xuaW1wb3J0IEFkYXB0aXZlQ29tbXMgZnJvbSAnLi4vY29tbW9uL0FkYXB0aXZlQ29tbXMnO1xuXG5leHBvcnQgZW51bSBMYXllclR5cGUge1xuICAgIFwiVUlcIixcbiAgICBcIkFEQVBUSVZFXCIsXG4gICAgXCJQT1BVUFwiLFxufVxuXG5leHBvcnQgY2xhc3MgTm9kZVNpemUge1xuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbn1cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTGF5ZXJCYXNlIHtcblxuICAgIHByaXZhdGUgcm9vdDogY2MuTm9kZSA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIHJvb3RaSW5kZXg6IDA7XG5cbiAgICBwcml2YXRlIG5vZGVMaXN0OiBBcnJheTxjYy5Ob2RlPiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyWXG4gICAgICogQHBhcmFtIG5vZGUg5qC56IqC54K5XG4gICAgICogQHBhcmFtIHNpemUg5bGP5bmV5aSn5bCPXG4gICAgICovXG4gICAgcHVibGljIGluaXQobm9kZTogY2MuTm9kZSwgc2l6ZTogTm9kZVNpemUpIHtcbiAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcbiAgICAgICAgdGhpcy5hZGRMYXllck1haW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5re75Yqg5bGC57qn5YWl5Y+jXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRMYXllck1haW4oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LnZhbHVlcyhMYXllclR5cGUpLmxlbmd0aCAvIDI7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGRMYXllcihMYXllclR5cGVbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOWxgue6p1xuICAgICAqIFxuICAgICAqIEBkZXNjcmlwdGlvbiDmt7vliqDlsYLnuqdub2RlLOW5tuS4lOa3u+WKoOmAgumFjeiEmuacrFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkTGF5ZXIoc3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIG5vZGUubmFtZSA9IHN0cmluZyArIFwiTGF5ZXJcIjtcbiAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoQWRhcHRpdmVDb21tKS5pbml0KCk7XG4gICAgICAgIHRoaXMucm9vdC5hZGRDaGlsZChub2RlLCB0aGlzLnJvb3RaSW5kZXgrKyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+W+l+S4gOS4quWxgue6p1xuICAgICAqIEBwYXJhbSBuYW1lIG5vZGVOYW1lXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIGdldExheWVyKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290LmdldENoaWxkQnlOYW1lKG5hbWUgKyBcIkxheWVyXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflvpfmoLnoioLngrlcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Um9vdE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWxgue6p+a3u+WKoG5vZGVcbiAgICAgKiBAZGVzY3JpcHRpb24g5re75Yqg55uu5qCH6IqC54K55Yiw54i26IqC54K55LiKLOW5tuS4lOe7keeCueebuOW6lOeahOiEmuacrFxuICAgICAqIEBwYXJhbSBwYXJlbnROb2RlIOeItuiKgueCuVxuICAgICAqIEBwYXJhbSBub2RlIOebruagh+iKgueCuVxuICAgICAqIEBwYXJhbSBzY3JpcHQg55uu5qCH6ISa5pysXG4gICAgICogQHBhcmFtIGlzQWRwaXR2ZSDmmK/lkKbkvb/nlKjpu5jorqTpgILphY3mlrnlvI9cbiAgICAgKiBAcGFyYW0gWkluZGV4IOWxgue6p1xuICAgICAqL1xuICAgIHB1YmxpYyBhZGROb2RlKHBhcmVudE5vZGU6IG51bWJlciwgbm9kZTogY2MuTm9kZSwgc2NyaXB0OiBzdHJpbmcsIGlzQWRwaXR2ZTogYm9vbGVhbiA9IHRydWUsIFpJbmRleDogbnVtYmVyID0gMCkge1xuICAgICAgICBsZXQgbm9kZXM6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShub2RlKTtcbiAgICAgICAgbm9kZXMuYWRkQ29tcG9uZW50KHNjcmlwdCkuaW5pdCgpO1xuICAgICAgICBub2Rlcy56SW5kZXggPSBaSW5kZXg7XG4gICAgICAgIHRoaXMuZ2V0TGF5ZXIoTGF5ZXJUeXBlW3BhcmVudE5vZGVdKS5hZGRDaGlsZChub2Rlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFsbE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVMaXN0O1xuICAgIH1cbn1cbiJdfQ==