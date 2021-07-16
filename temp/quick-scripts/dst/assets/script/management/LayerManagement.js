
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/management/LayerManagement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7448agyD2tD4re4jizMrGBG', 'LayerManagement');
// script/management/LayerManagement.ts

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
exports.LayerManagement = exports.NodeSize = exports.LayerType = void 0;
var AdaptiveComms_1 = require("../common/AdaptiveComms");
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
var LayerManagement = /** @class */ (function () {
    function LayerManagement() {
        this.root = undefined;
    }
    LayerManagement_1 = LayerManagement;
    Object.defineProperty(LayerManagement, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new LayerManagement_1();
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
    LayerManagement.prototype.init = function (node, size) {
        this.root = node;
        this.initData(size);
        this.addLayerMain();
    };
    /**
     * 初始化参数
     * @param size
     */
    LayerManagement.prototype.initData = function (size) {
        this.size = size;
    };
    /**
     * 添加层级入口
     */
    LayerManagement.prototype.addLayerMain = function () {
        for (var i = 0; i < Object.values(LayerType).length / 2; i++) {
            this.addLayer(LayerType[i]);
        }
    };
    /**
     * 添加层级
     */
    LayerManagement.prototype.addLayer = function (string) {
        var node = new cc.Node();
        node.name = string + "Layer";
        node.width = this.size.width;
        node.height = this.size.height;
        node.addComponent(AdaptiveComms_1.default).init();
        this.root.addChild(node, this.rootZIndex++);
    };
    /**
     * 获得一个层级
     * @param name nodeName
     * @returns
     */
    LayerManagement.prototype.getLayer = function (name) {
        return this.root.getChildByName(name + "Layer");
    };
    /**
     * 获得根节点
     * @returns
     */
    LayerManagement.prototype.getRootNode = function () {
        return this.root;
    };
    /**
     * 层级添加node
     * @param parentNode 父节点
     * @param node 目标节点
     * @param script 目标脚本
     */
    LayerManagement.prototype.addNode = function (parentNode, node, script, ZIndex) {
        if (ZIndex === void 0) { ZIndex = 0; }
        var nodes = cc.instantiate(node);
        nodes.addComponent(script).init();
        nodes.zIndex = ZIndex;
        this.getLayer(LayerType[parentNode]).addChild(nodes);
        if (nodes.getComponent(cc.Widget)) {
            nodes.getComponent(cc.Widget).alignMode = cc.Widget.AlignMode.ONCE;
        }
    };
    var LayerManagement_1;
    LayerManagement = LayerManagement_1 = __decorate([
        ccclass
    ], LayerManagement);
    return LayerManagement;
}());
exports.LayerManagement = LayerManagement;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFuYWdlbWVudC9MYXllck1hbmFnZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7Ozs7Ozs7OztBQUdILHlEQUFvRDtBQUVwRCxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIscUNBQUksQ0FBQTtJQUNKLGlEQUFVLENBQUE7SUFDViwyQ0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBRUQ7SUFBQTtJQUdBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSw0QkFBUTtBQUlmLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFHWSxTQUFJLEdBQVksU0FBUyxDQUFDO0lBNEV0QyxDQUFDO3dCQS9FWSxlQUFlO0lBTXhCLHNCQUFrQiwyQkFBUTthQUExQjtZQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWUsRUFBRSxDQUFDO2FBQzFDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0Q7Ozs7T0FJRztJQUNJLDhCQUFJLEdBQVgsVUFBWSxJQUFhLEVBQUUsSUFBYztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ssa0NBQVEsR0FBaEIsVUFBaUIsSUFBYztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0Q7O09BRUc7SUFDSyxzQ0FBWSxHQUFwQjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFDRDs7T0FFRztJQUNLLGtDQUFRLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNEOzs7O09BSUc7SUFDSSxrQ0FBUSxHQUFmLFVBQWdCLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNEOzs7T0FHRztJQUNJLHFDQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNJLGlDQUFPLEdBQWQsVUFBZSxVQUFrQixFQUFFLElBQWEsRUFBRSxNQUFjLEVBQUUsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxVQUFrQjtRQUNoRixJQUFJLEtBQUssR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQixLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ3RFO0lBQ0wsQ0FBQzs7SUE5RVEsZUFBZTtRQUQzQixPQUFPO09BQ0ssZUFBZSxDQStFM0I7SUFBRCxzQkFBQztDQS9FRCxBQStFQyxJQUFBO0FBL0VZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEF1dGhvcjogYWhoaCAobmV3X3E4QDE2My5jb20pXG4gKlxuICogRGVzY3JpcHRpb246IHVp5bGC57qn566h55CG5ZmoXG4gKi9cblxuaW1wb3J0IEFkYXB0aXZlQ29tbSBmcm9tICcuLi9jb21tb24vQWRhcHRpdmVDb21tJztcbmltcG9ydCBBZGFwdGl2ZUNvbW1zIGZyb20gJy4uL2NvbW1vbi9BZGFwdGl2ZUNvbW1zJztcblxuZXhwb3J0IGVudW0gTGF5ZXJUeXBlIHtcbiAgICBcIlVJXCIsXG4gICAgXCJBREFQVElWRVwiLFxuICAgIFwiUE9QVVBcIixcbn1cblxuZXhwb3J0IGNsYXNzIE5vZGVTaXplIHtcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XG59XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIExheWVyTWFuYWdlbWVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IExheWVyTWFuYWdlbWVudDtcbiAgICBwcml2YXRlIHJvb3Q6IGNjLk5vZGUgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSByb290WkluZGV4OiAwO1xuICAgIHByaXZhdGUgc2l6ZTogTm9kZVNpemU7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgTGF5ZXJNYW5hZ2VtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJZcbiAgICAgKiBAcGFyYW0gbm9kZSDmoLnoioLngrlcbiAgICAgKiBAcGFyYW0gc2l6ZSDlsY/luZXlpKflsI9cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdChub2RlOiBjYy5Ob2RlLCBzaXplOiBOb2RlU2l6ZSkge1xuICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICB0aGlzLmluaXREYXRhKHNpemUpO1xuICAgICAgICB0aGlzLmFkZExheWVyTWFpbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJblj4LmlbBcbiAgICAgKiBAcGFyYW0gc2l6ZSBcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXREYXRhKHNpemU6IE5vZGVTaXplKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOWxgue6p+WFpeWPo1xuICAgICAqL1xuICAgIHByaXZhdGUgYWRkTGF5ZXJNYWluKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC52YWx1ZXMoTGF5ZXJUeXBlKS5sZW5ndGggLyAyOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGF5ZXIoTGF5ZXJUeXBlW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDlsYLnuqdcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZExheWVyKHN0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBub2RlLm5hbWUgPSBzdHJpbmcgKyBcIkxheWVyXCI7XG4gICAgICAgIG5vZGUud2lkdGggPSB0aGlzLnNpemUud2lkdGg7XG4gICAgICAgIG5vZGUuaGVpZ2h0ID0gdGhpcy5zaXplLmhlaWdodDtcbiAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoQWRhcHRpdmVDb21tcykuaW5pdCgpO1xuICAgICAgICB0aGlzLnJvb3QuYWRkQ2hpbGQobm9kZSwgdGhpcy5yb290WkluZGV4KyspO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflvpfkuIDkuKrlsYLnuqdcbiAgICAgKiBAcGFyYW0gbmFtZSBub2RlTmFtZVxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMYXllcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5nZXRDaGlsZEJ5TmFtZShuYW1lICsgXCJMYXllclwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635b6X5qC56IqC54K5XG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIGdldFJvb3ROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlsYLnuqfmt7vliqBub2RlXG4gICAgICogQHBhcmFtIHBhcmVudE5vZGUg54i26IqC54K5XG4gICAgICogQHBhcmFtIG5vZGUg55uu5qCH6IqC54K5XG4gICAgICogQHBhcmFtIHNjcmlwdCDnm67moIfohJrmnKxcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkTm9kZShwYXJlbnROb2RlOiBudW1iZXIsIG5vZGU6IGNjLk5vZGUsIHNjcmlwdDogc3RyaW5nLCBaSW5kZXg6IG51bWJlciA9IDApIHtcbiAgICAgICAgbGV0IG5vZGVzOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUobm9kZSk7XG4gICAgICAgIG5vZGVzLmFkZENvbXBvbmVudChzY3JpcHQpLmluaXQoKTtcbiAgICAgICAgbm9kZXMuekluZGV4ID0gWkluZGV4O1xuICAgICAgICB0aGlzLmdldExheWVyKExheWVyVHlwZVtwYXJlbnROb2RlXSkuYWRkQ2hpbGQobm9kZXMpO1xuICAgICAgICBpZiAobm9kZXMuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkpIHtcbiAgICAgICAgICAgIG5vZGVzLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmFsaWduTW9kZSA9IGNjLldpZGdldC5BbGlnbk1vZGUuT05DRTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==