const fs = require('fs');
const path = require('path');
const electron = require('electron');

JLIB.node = {};

JLIB.node.reqRun = function(src){
    require(src)();
}

window.dispatchEvent(JLIB.common.scriptLoaded)
