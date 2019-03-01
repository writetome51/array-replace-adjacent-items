"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var errorIfArrayTooShortToMeetAdjacentItemsRequest_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortToMeetAdjacentItemsRequest");
var errorIfIndexNotValid_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid");
// Use this function as a more reliable alternative to Array.splice() when only
// replacing items in the array.
// startingIndex can be negative or positive.
function _replaceAdjacentItems(startingIndex, numItemsToReplace, newValues, arrayToModify) {
    errorIfIndexNotValid_1.errorIfIndexNotValid(startingIndex, arrayToModify);
    errorIfNotInteger_1.errorIfNotInteger(numItemsToReplace);
    errorIfNotArray_1.errorIfNotArray(newValues);
    errorIfArrayTooShortToMeetAdjacentItemsRequest_1.errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, numItemsToReplace, arrayToModify);
    if (numItemsToReplace > 0)
        arrayToModify.splice.apply(arrayToModify, [startingIndex, numItemsToReplace].concat(newValues));
    else
        throw new Error('The number of items to replace must be greater than zero');
}
exports._replaceAdjacentItems = _replaceAdjacentItems;
