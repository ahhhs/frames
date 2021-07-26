"use strict";
cc._RF.push(module, '7e87bMiZuVCwKlhqIJ8Tv/C', 'CarPreafbM');
// prefabScript/carPrefab/CarPreafbM.ts

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
var CarPrefabM = /** @class */ (function () {
    function CarPrefabM() {
    }
    CarPrefabM_1 = CarPrefabM;
    Object.defineProperty(CarPrefabM, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new CarPrefabM_1;
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    var CarPrefabM_1;
    CarPrefabM = CarPrefabM_1 = __decorate([
        ccclass
    ], CarPrefabM);
    return CarPrefabM;
}());
exports.default = CarPrefabM;

cc._RF.pop();