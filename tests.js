"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _replaceAdjacentItems_1 = require("./_replaceAdjacentItems");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
_replaceAdjacentItems_1._replaceAdjacentItems(0, 1, [90], arr);
console.log(arr);
// -> [ 90, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
_replaceAdjacentItems_1._replaceAdjacentItems(-1, 1, [], arr);
console.log(arr);
// -> [ 90, 2, 3, 4, 5, 6, 7, 8, 9 ]
_replaceAdjacentItems_1._replaceAdjacentItems(0, 1, [30, 40], arr);
console.log(arr);
// -> [ 30, 40, 2, 3, 4, 5, 6, 7, 8, 9 ]
_replaceAdjacentItems_1._replaceAdjacentItems(0, 2, [50, 60], arr);
console.log(arr);
// -> [ 50, 60, 2, 3, 4, 5, 6, 7, 8, 9 ]
_replaceAdjacentItems_1._replaceAdjacentItems(1, 2, ['x', 'y', 'z', 'a', 'b'], arr);
console.log(arr);
// -> [ 50, 'x', 'y', 'z', 'a', 'b', 3, 4, 5, 6, 7, 8, 9 ]
_replaceAdjacentItems_1._replaceAdjacentItems(-4, 3, ['x', 'y', 'z'], arr);
console.log(arr);
// -> [ 50, 'x', 'y', 'z', 'a', 'b', 3, 4, 5, 'x', 'y', 'z', 9 ]
_replaceAdjacentItems_1._replaceAdjacentItems(-6, 4, [[1]], arr);
console.log(arr);
// -> [ 50, 'x', 'y', 'z', 'a', 'b', 3, [ 1 ], 'z', 9 ]
// should trigger error:
//  _replaceAdjacentItems(11, 4, [], arr); // invalid index
// should trigger error:
//  _replaceAdjacentItems(1, 0, [], arr); // 0 items to replace
// should trigger error:
//  _replaceAdjacentItems('', 1, [], arr); // must be integer
// should trigger error:
//  _replaceAdjacentItems(1, '', [], arr); // must be integer
// should trigger error:
//  _replaceAdjacentItems(1, 1, {}, arr); // must be array
// should trigger error:
//  _replaceAdjacentItems(1, 1, [], {}); // must be array
// should trigger error:
//  _replaceAdjacentItems(5, 6, [1, 2], arr);
// should trigger error:
//  _replaceAdjacentItems(-5, 6, [1, 2], arr);
