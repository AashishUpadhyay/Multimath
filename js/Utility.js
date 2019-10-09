"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInputValue(elementId) {
    var inputELement = document.getElementById(elementId);
    return inputELement.value;
}
exports.getValue = getInputValue;
var logger = function (message) {
    console.log(message);
};
exports.logger = logger;
//# sourceMappingURL=Utility.js.map