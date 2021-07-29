
(function () {
var scripts = [{"deps":{"./assets/text/MVC/Helloworld":17,"./assets/text/MVC/Model":18,"./assets/text/MVC/ABCCtl":15,"./assets/text/demo":19,"./assets/hall/scripts/HallLayerV":13,"./assets/hall/scripts/HallMain":1,"./assets/hall/scripts/HallLayerC":5,"./assets/hall/scripts/HallLayerM":10,"./assets/prefabScript/carPrefab/CarPrefabMain":2,"./assets/prefabScript/carPrefab/CarPrefabV":7,"./assets/prefabScript/carPrefab/CarPreafbC":8,"./assets/prefabScript/carPrefab/CarPreafbM":6,"./assets/script/common/GameBase":12,"./assets/script/common/MD5":14,"./assets/script/common/AdaptiveComm":11,"./assets/script/management/LoadBase":4,"./assets/script/management/LayerBase":9,"./assets/script/common/AdaptiveComms":3,"./assets/text/MVC/ABCView":16},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./HallLayerC":5,"./HallLayerV":13},"path":"preview-scripts/assets/hall/scripts/HallMain.js"},{"deps":{"./CarPreafbC":8,"./CarPrefabV":7},"path":"preview-scripts/assets/prefabScript/carPrefab/CarPrefabMain.js"},{"deps":{},"path":"preview-scripts/assets/script/common/AdaptiveComms.js"},{"deps":{},"path":"preview-scripts/assets/script/management/LoadBase.js"},{"deps":{"../../script/management/LoadBase":4,"../../script/management/LayerBase":9},"path":"preview-scripts/assets/hall/scripts/HallLayerC.js"},{"deps":{},"path":"preview-scripts/assets/prefabScript/carPrefab/CarPreafbM.js"},{"deps":{},"path":"preview-scripts/assets/prefabScript/carPrefab/CarPrefabV.js"},{"deps":{"../../script/management/LayerBase":9},"path":"preview-scripts/assets/prefabScript/carPrefab/CarPreafbC.js"},{"deps":{"../common/AdaptiveComm":11},"path":"preview-scripts/assets/script/management/LayerBase.js"},{"deps":{},"path":"preview-scripts/assets/hall/scripts/HallLayerM.js"},{"deps":{},"path":"preview-scripts/assets/script/common/AdaptiveComm.js"},{"deps":{},"path":"preview-scripts/assets/script/common/GameBase.js"},{"deps":{},"path":"preview-scripts/assets/hall/scripts/HallLayerV.js"},{"deps":{},"path":"preview-scripts/assets/script/common/MD5.js"},{"deps":{},"path":"preview-scripts/assets/text/MVC/ABCCtl.js"},{"deps":{"./ABCCtl":15},"path":"preview-scripts/assets/text/MVC/ABCView.js"},{"deps":{"./ABCCtl":15,"./ABCView":16},"path":"preview-scripts/assets/text/MVC/Helloworld.js"},{"deps":{},"path":"preview-scripts/assets/text/MVC/Model.js"},{"deps":{},"path":"preview-scripts/assets/text/demo.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    