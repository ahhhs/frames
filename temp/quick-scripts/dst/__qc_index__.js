
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
require('./assets/hall/scripts/HallLayerC');
require('./assets/hall/scripts/HallLayerM');
require('./assets/hall/scripts/HallLayerV');
require('./assets/hall/scripts/HallMain');
require('./assets/prefabScript/carPrefab/CarPreafbC');
require('./assets/prefabScript/carPrefab/CarPreafbM');
require('./assets/prefabScript/carPrefab/CarPrefabMain');
require('./assets/prefabScript/carPrefab/CarPrefabV');
require('./assets/script/common/AdaptiveComm');
require('./assets/script/common/AdaptiveComms');
require('./assets/script/common/GameBase');
require('./assets/script/common/MD5');
require('./assets/script/management/LayerBase');
require('./assets/script/management/LoadBase');
require('./assets/text/ABCCtl');
require('./assets/text/ABCView');
require('./assets/text/Helloworld');
require('./assets/text/Model');

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