
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
// Copyright (C) 2019, Flickering Inc. All rights reserved.
// Author: hongchangfu (hongchangfu@flickering.ai)
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
// 用于界面适配
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
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
        console.log("输出:", nodeSize);
        this.node.setContentSize(nodeSize);
    };
    AdaptiveComms = __decorate([
        ccclass
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29tbW9uL0FkYXB0aXZlQ29tbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEyRDtBQUMzRCxrREFBa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxTQUFTO0FBRUgsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7O0lBaUJBLENBQUM7SUFmRyw0QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDTyxxQ0FBYSxHQUFyQjtRQUNJLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNyRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLEtBQUssR0FBRyxXQUFXO1lBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7WUFDN0QsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUU5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBaEJnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBaUJqQztJQUFELG9CQUFDO0NBakJELEFBaUJDLENBakIwQyxFQUFFLENBQUMsU0FBUyxHQWlCdEQ7a0JBakJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChDKSAyMDE5LCBGbGlja2VyaW5nIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIEF1dGhvcjogaG9uZ2NoYW5nZnUgKGhvbmdjaGFuZ2Z1QGZsaWNrZXJpbmcuYWkpXG5cbi8vIOeUqOS6jueVjOmdoumAgumFjVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRhcHRpdmVDb21tcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmZpeGVkVmlld1NpemUoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBmaXhlZFZpZXdTaXplKCkge1xuICAgICAgICBjb25zdCBkaXNpZ25TaXplID0gY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpO1xuICAgICAgICBjb25zdCBkZXNpZ25TY2FsZSA9IGRpc2lnblNpemUud2lkdGggLyBkaXNpZ25TaXplLmhlaWdodDtcbiAgICAgICAgY29uc3Qgbm9kZVNpemUgPSBjYy5zaXplKGRpc2lnblNpemUud2lkdGgsIGRpc2lnblNpemUuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuICAgICAgICBsZXQgc2NhbGUgPSBzaXplLndpZHRoIC8gc2l6ZS5oZWlnaHQ7XG4gICAgICAgIGlmIChzY2FsZSA8IGRlc2lnblNjYWxlKSBub2RlU2l6ZS5oZWlnaHQgPSBub2RlU2l6ZS53aWR0aCAvIHNjYWxlO1xuICAgICAgICBlbHNlIG5vZGVTaXplLndpZHRoID0gbm9kZVNpemUuaGVpZ2h0ICogc2NhbGU7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCLovpPlh7o6XCIsbm9kZVNpemUpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUobm9kZVNpemUpO1xuICAgIH1cbn1cbiJdfQ==