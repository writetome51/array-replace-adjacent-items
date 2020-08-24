# _replaceAdjacentItems(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingIndex,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numItemsToReplace,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newValues: any[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Beginning at `startingIndex`, replaces adjacent `numItemsToReplace` with `newValues`, in `array`.   
`startingIndex` can be negative or positive.  
The number of items in `newValues` does not have to match `numItemsToReplace`.

## Examples
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

_replaceAdjacentItems(0, 1, [30, 40], arr);
// arr is now [30, 40, 2, 3, 4, 5, 6, 7, 8]

arr = [1, 2, 3, 4, 5, 6, 7, 8];

_replaceAdjacentItems(3, 3, ['x'], arr);
// arr is now  [1, 2, 3, 'x', 7, 8];

arr = [1, 2, 3, 4, 5, 6, 7, 8];

_replaceAdjacentItems(-4, 2, ['x', 'y', 'z'], arr);
// arr is now  [1, 2, 3, 4, 'x', 'y', 'z', 7, 8];
```


## Installation
```bash
npm i @writetome51/array-replace-adjacent-items
```

## Loading
```js
import { _replaceAdjacentItems } from '@writetome51/array-replace-adjacent-items';
```
