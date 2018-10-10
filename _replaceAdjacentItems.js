"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var ifIndexValid_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexValid_getActionResult");
// Use this function as a more reliable alternative to Array.splice() when only
// replacing items in the array. If numItemsToReplace is less than 1, it triggers error.
// startingIndex can be negative or positive.
function _replaceAdjacentItems(startingIndex, numItemsToReplace, newValues, arrayToModify) {
    ifIndexValid_getActionResult_1.ifIndexValid_getActionResult(startingIndex, function () {
        errorIfNotInteger_1.errorIfNotInteger(numItemsToReplace);
        errorIfNotArray_1.errorIfNotArray(newValues);
        if (numItemsToReplace > 0)
            arrayToModify.splice.apply(arrayToModify, [startingIndex, numItemsToReplace].concat(newValues));
        else
            throw new Error('The number of items to replace must be greater than zero');
    }, arrayToModify);
}
exports._replaceAdjacentItems = _replaceAdjacentItems;
