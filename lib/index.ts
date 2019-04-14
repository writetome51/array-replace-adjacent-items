import { errorIfNotInteger } from 'error-if-not-integer';
import { errorIfNotArray } from 'error-if-not-array';
import { errorIfArrayTooShortToMeetAdjacentItemsRequest }
	from 'error-if-array-too-short-to-meet-adjacent-items-request';
import { errorIfIndexNotValid } from 'error-if-index-not-valid';

// Use this function as a more reliable alternative to Array.splice() when only
// replacing items in the array.
// startingIndex can be negative or positive.

export function _replaceAdjacentItems(
	startingIndex, numItemsToReplace, newValues: any[], arrayToModify
): void {
	errorIfIndexNotValid(startingIndex, arrayToModify.length);
	errorIfNotInteger(numItemsToReplace);

	errorIfNotArray(newValues);
	errorIfArrayTooShortToMeetAdjacentItemsRequest(
		startingIndex, numItemsToReplace, arrayToModify.length
	);

	if (numItemsToReplace > 0) arrayToModify.splice(startingIndex, numItemsToReplace, ...newValues);
	else throw new Error('The number of items to replace must be greater than zero');
}
