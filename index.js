import {errorIfArrayTooShortToMeetAdjacentItemsRequest}
	from 'error-if-array-too-short-to-meet-adjacent-items-request';
import {errorIfIndex_howMany_orArray_areNotValid}
	from 'error-if-index-how-many-or-array-are-not-valid';


// Use this function as a more reliable alternative to Array.splice() when only
// replacing items in `array`. Strictly validates args.
// `startingIndex` can be negative or positive.

export function _replaceAdjacentItems(startingIndex, numItemsToReplace, newValues, array) {
	errorIfIndex_howMany_orArray_areNotValid(startingIndex, numItemsToReplace, array);
	errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, numItemsToReplace, array.length);
	array.splice(startingIndex, numItemsToReplace, ...newValues);
}
