import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { errorIfArrayTooShortToMeetAdjacentItemsRequest }
	from '@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortToMeetAdjacentItemsRequest';
import { errorIfIndexNotValid } from '@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid';

// Use this function as a more reliable alternative to Array.splice() when only
// replacing items in the array.
// startingIndex can be negative or positive.

export function _replaceAdjacentItems(startingIndex, numItemsToReplace, newValues: any[], arrayToModify): void {
	errorIfIndexNotValid(startingIndex, arrayToModify);
	errorIfNotInteger(numItemsToReplace);

	errorIfNotArray(newValues);
	errorIfArrayTooShortToMeetAdjacentItemsRequest(
		startingIndex, numItemsToReplace, arrayToModify
	);

	if (numItemsToReplace > 0) arrayToModify.splice(startingIndex, numItemsToReplace, ...newValues);
	else throw new Error('The number of items to replace must be greater than zero');
}
