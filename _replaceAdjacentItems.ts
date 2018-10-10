import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { ifIndexValid_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexValid_getActionResult';

// Use this function as a more reliable alternative to Array.splice() when only
// replacing items in the array. If numItemsToReplace is less than 1, it triggers error.
// startingIndex can be negative or positive.

export function _replaceAdjacentItems(startingIndex, numItemsToReplace, newValues: any[], arrayToModify): void {
	ifIndexValid_getActionResult(startingIndex,
		() => {
			errorIfNotInteger(numItemsToReplace);
			errorIfNotArray(newValues);
			if (numItemsToReplace > 0) arrayToModify.splice(startingIndex, numItemsToReplace, ...newValues);
			else throw new Error('The number of items to replace must be greater than zero');
		},
		arrayToModify
	);

}
