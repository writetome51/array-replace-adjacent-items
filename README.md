Use this function as a more reliable alternative to Array.splice() when only replacing items in the array.
If numItemsToReplace is less than 1, it triggers error.
startingIndex can be negative or positive.

 _replaceAdjacentItems(startingIndex, numItemsToReplace, newValues: any[], arrayToModify); // returns void.