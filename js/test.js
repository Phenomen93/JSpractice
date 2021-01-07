'use strict';


function copy(objMain) {
    let objCopy = {};

    let key;
    for (key in objMain) {
        objCopy[key] = objMain[key];
    }
    return objCopy;
}