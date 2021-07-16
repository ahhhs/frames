
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
    /**
     * 初始化
     * @param node 根节点
     * @param size 屏幕大小
     */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9CYXNlTGF5ZXJNYW5hZ2VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztHQUlHOzs7Ozs7Ozs7QUFFSCx1REFBa0Q7QUFFbEQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLHFDQUFJLENBQUE7SUFDSixpREFBVSxDQUFBO0lBQ1YsMkNBQU8sQ0FBQTtBQUNYLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUVEO0lBQUE7SUFHQSxDQUFDO0lBQUQsZUFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksNEJBQVE7QUFJZixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBR1ksU0FBSSxHQUFZLFNBQVMsQ0FBQztJQXlFdEMsQ0FBQzs0QkE1RVksbUJBQW1CO0lBTTVCLHNCQUFrQiwrQkFBUTthQUExQjtZQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQW1CLEVBQUUsQ0FBQzthQUM5QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNEOzs7O09BSUc7SUFDSSxrQ0FBSSxHQUFYLFVBQVksSUFBYSxFQUFFLElBQWM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNEOzs7T0FHRztJQUNLLHNDQUFRLEdBQWhCLFVBQWlCLElBQWM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNEOztPQUVHO0lBQ0ssMENBQVksR0FBcEI7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSyxzQ0FBUSxHQUFoQixVQUFpQixNQUFjO1FBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksc0NBQVEsR0FBZixVQUFnQixJQUFZO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRDs7O09BR0c7SUFDSSx5Q0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDSSxxQ0FBTyxHQUFkLFVBQWUsVUFBa0IsRUFBRSxJQUFhLEVBQUUsTUFBYyxFQUFFLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsVUFBa0I7UUFDaEYsSUFBSSxLQUFLLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLHFCQUFtQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pGLENBQUM7O0lBM0VRLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBNEUvQjtJQUFELDBCQUFDO0NBNUVELEFBNEVDLElBQUE7QUE1RVksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEF1dGhvcjogYWhoaCAobmV3X3E4QDE2My5jb20pXG4gKlxuICogRGVzY3JpcHRpb246IHVp5bGC57qn566h55CG5ZmoXG4gKi9cblxuaW1wb3J0IEFkYXB0aXZlQ29tbSBmcm9tICcuLi9jb21tb24vQWRhcHRpdmVDb21tJztcblxuZXhwb3J0IGVudW0gTGF5ZXJUeXBlIHtcbiAgICBcIlVJXCIsXG4gICAgXCJBREFQVElWRVwiLFxuICAgIFwiUE9QVVBcIixcbn1cblxuZXhwb3J0IGNsYXNzIE5vZGVTaXplIHtcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XG59XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEJhc2VMYXllck1hbmFnZW1lbnQge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBCYXNlTGF5ZXJNYW5hZ2VtZW50O1xuICAgIHByaXZhdGUgcm9vdDogY2MuTm9kZSA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIHJvb3RaSW5kZXg6IDA7XG4gICAgcHJpdmF0ZSBzaXplOiBOb2RlU2l6ZTtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcblxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBCYXNlTGF5ZXJNYW5hZ2VtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJZcbiAgICAgKiBAcGFyYW0gbm9kZSDmoLnoioLngrlcbiAgICAgKiBAcGFyYW0gc2l6ZSDlsY/luZXlpKflsI9cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdChub2RlOiBjYy5Ob2RlLCBzaXplOiBOb2RlU2l6ZSkge1xuICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICB0aGlzLmluaXREYXRhKHNpemUpO1xuICAgICAgICB0aGlzLmFkZExheWVyTWFpbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJblj4LmlbBcbiAgICAgKiBAcGFyYW0gc2l6ZSBcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXREYXRhKHNpemU6IE5vZGVTaXplKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOWxgue6p+WFpeWPo1xuICAgICAqL1xuICAgIHByaXZhdGUgYWRkTGF5ZXJNYWluKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC52YWx1ZXMoTGF5ZXJUeXBlKS5sZW5ndGggLyAyOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGF5ZXIoTGF5ZXJUeXBlW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDlsYLnuqdcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZExheWVyKHN0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBub2RlLm5hbWUgPSBzdHJpbmcgKyBcIkxheWVyXCI7XG4gICAgICAgIG5vZGUud2lkdGggPSB0aGlzLnNpemUud2lkdGg7XG4gICAgICAgIG5vZGUuaGVpZ2h0ID0gdGhpcy5zaXplLmhlaWdodDtcbiAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoQWRhcHRpdmVDb21tKTtcbiAgICAgICAgdGhpcy5yb290LmFkZENoaWxkKG5vZGUsIHRoaXMucm9vdFpJbmRleCsrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635b6X5LiA5Liq5bGC57qnXG4gICAgICogQHBhcmFtIG5hbWUgbm9kZU5hbWVcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TGF5ZXIobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0Q2hpbGRCeU5hbWUobmFtZSArIFwiTGF5ZXJcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+W+l+agueiKgueCuVxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRSb290Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5bGC57qn5re75Yqgbm9kZVxuICAgICAqIEBwYXJhbSBwYXJlbnROb2RlIOeItuiKgueCuVxuICAgICAqIEBwYXJhbSBub2RlIOebruagh+iKgueCuVxuICAgICAqIEBwYXJhbSBzY3JpcHQg55uu5qCH6ISa5pysXG4gICAgICovXG4gICAgcHVibGljIGFkZE5vZGUocGFyZW50Tm9kZTogbnVtYmVyLCBub2RlOiBjYy5Ob2RlLCBzY3JpcHQ6IHN0cmluZywgWkluZGV4OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGxldCBub2RlczogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKG5vZGUpO1xuICAgICAgICBub2Rlcy5hZGRDb21wb25lbnQoc2NyaXB0KS5pbml0KCk7XG4gICAgICAgIG5vZGVzLnpJbmRleCA9IFpJbmRleDtcbiAgICAgICAgQmFzZUxheWVyTWFuYWdlbWVudC5pbnN0YW5jZS5nZXRMYXllcihMYXllclR5cGVbcGFyZW50Tm9kZV0pLmFkZENoaWxkKG5vZGVzKTtcbiAgICB9XG59XG4iXX0=