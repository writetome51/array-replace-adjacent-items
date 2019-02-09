# _replaceAdjacentItems()

####  _replaceAdjacentItems(startingIndex, numItemsToReplace, newValues: any[], array): void

Replaces adjacent items in <b>array</b>.  
Replaces total of <b>numItemsToReplace,</b> beginning at <b>startingIndex</b>, with <b>newValues</b>.  
Use this function as a more reliable alternative to Array.splice() when only replacing items in the 
array.  
<b>startingIndex</b> can be negative or positive.

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/array-replace-adjacent-items
```

## Loading
```
// If using TypeScript:
import {  _replaceAdjacentItems } from '@writetome51/array-replace-adjacent-items';
// If using ES5 JavaScript:
var  _replaceAdjacentItems = 
    require('@writetome51/array-replace-adjacent-items')._replaceAdjacentItems;
```
