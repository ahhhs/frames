
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/AdaptiveComms.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e698vmH65J24tFNPwJYmFO', 'AdaptiveComms');
// script/common/AdaptiveComms.ts

"use strict";
/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 等比例适配
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var AdaptiveComms = /** @class */ (function (_super) {
    __extends(AdaptiveComms, _super);
    function AdaptiveComms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdaptiveComms.prototype.init = function () {
        this.fixedViewSize();
    };
    AdaptiveComms.prototype.fixedViewSize = function () {
        var disignSize = cc.view.getDesignResolutionSize();
        var designScale = disignSize.width / disignSize.height;
        var nodeSize = cc.size(disignSize.width, disignSize.height);
        var size = cc.view.getFrameSize();
        var scale = size.width / size.height;
        if (scale < designScale)
            nodeSize.height = nodeSize.width / scale;
        else
            nodeSize.width = nodeSize.height * scale;
        this.node.setContentSize(nodeSize);
    };
    AdaptiveComms = __decorate([
        ccclass,
        executeInEditMode
    ], AdaptiveComms);
    return AdaptiveComms;
}(cc.Component));
exports.default = AdaptiveComms;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0FkYXB0aXZlQ29tbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQTJDLGlDQUFZO0lBQXZEOztJQWVBLENBQUM7SUFiRyw0QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDTyxxQ0FBYSxHQUFyQjtRQUNJLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNyRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLEtBQUssR0FBRyxXQUFXO1lBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7WUFDN0QsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBZGdCLGFBQWE7UUFGakMsT0FBTztRQUNQLGlCQUFpQjtPQUNHLGFBQWEsQ0FlakM7SUFBRCxvQkFBQztDQWZELEFBZUMsQ0FmMEMsRUFBRSxDQUFDLFNBQVMsR0FldEQ7a0JBZm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXV0aG9yOiBhaGhoIChuZXdfcThAMTYzLmNvbSlcbiAqXG4gKiBEZXNjcmlwdGlvbjog562J5q+U5L6L6YCC6YWNXG4gKi9cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYXB0aXZlQ29tbXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5maXhlZFZpZXdTaXplKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZml4ZWRWaWV3U2l6ZSgpIHtcbiAgICAgICAgY29uc3QgZGlzaWduU2l6ZSA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKTtcbiAgICAgICAgY29uc3QgZGVzaWduU2NhbGUgPSBkaXNpZ25TaXplLndpZHRoIC8gZGlzaWduU2l6ZS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IG5vZGVTaXplID0gY2Muc2l6ZShkaXNpZ25TaXplLndpZHRoLCBkaXNpZ25TaXplLmhlaWdodCk7XG4gICAgICAgIGxldCBzaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgbGV0IHNjYWxlID0gc2l6ZS53aWR0aCAvIHNpemUuaGVpZ2h0O1xuICAgICAgICBpZiAoc2NhbGUgPCBkZXNpZ25TY2FsZSkgbm9kZVNpemUuaGVpZ2h0ID0gbm9kZVNpemUud2lkdGggLyBzY2FsZTtcbiAgICAgICAgZWxzZSBub2RlU2l6ZS53aWR0aCA9IG5vZGVTaXplLmhlaWdodCAqIHNjYWxlO1xuICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUobm9kZVNpemUpO1xuICAgIH1cbn1cbiJdfQ==