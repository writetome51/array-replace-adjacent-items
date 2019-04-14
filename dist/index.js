"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_integer_1 = require("error-if-not-integer");
var error_if_not_array_1 = require("error-if-not-array");
var error_if_array_too_short_to_meet_adjacent_items_request_1 = require("error-if-array-too-short-to-meet-adjacent-items-request");
var error_if_index_not_valid_1 = require("error-if-index-not-valid");
// Use this function as a more reliable alternative to Array.splice() when only
// replacing items in the array.
// startingIndex can be negative or positive.
function _replaceAdjacentItems(startingIndex, numItemsToReplace, newValues, arrayToModify) {
    error_if_index_not_valid_1.errorIfIndexNotValid(startingIndex, arrayToModify.length);
    error_if_not_integer_1.errorIfNotInteger(numItemsToReplace);
    error_if_not_array_1.errorIfNotArray(newValues);
    error_if_array_too_short_to_meet_adjacent_items_request_1.errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, numItemsToReplace, arrayToModify.length);
    if (numItemsToReplace > 0)
        arrayToModify.splice.apply(arrayToModify, [startingIndex, numItemsToReplace].concat(newValues));
    else
        throw new Error('The number of items to replace must be greater than zero');
}
exports._replaceAdjacentItems = _replaceAdjacentItems;
