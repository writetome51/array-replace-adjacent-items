import {_replaceAdjacentItems} from 'index.js';
import {arraysMatch} from '@writetome51/arrays-match';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

_replaceAdjacentItems(0, 1, [90], arr);
if (arraysMatch(arr, [90, 2, 3, 4, 5, 6, 7, 8, 9, 10])) console.log('test 1 passed');
else console.log('test 1 FAILED');


_replaceAdjacentItems(-1, 1, [], arr);
if (arraysMatch(arr, [90, 2, 3, 4, 5, 6, 7, 8, 9])) console.log('test 2 passed');
else console.log('test 2 FAILED');


_replaceAdjacentItems(0, 1, [30, 40], arr);

if (arraysMatch(arr, [30, 40, 2, 3, 4, 5, 6, 7, 8, 9])) console.log('test 3 passed');
else console.log('test 3 FAILED');


_replaceAdjacentItems(0, 2, [50, 60], arr);
if (arraysMatch(arr, [50, 60, 2, 3, 4, 5, 6, 7, 8, 9])) console.log('test 4 passed');
else console.log('test 4 FAILED');


_replaceAdjacentItems(1, 2, ['x', 'y', 'z', 'a', 'b'], arr);
if (arraysMatch(arr, [50, 'x', 'y', 'z', 'a', 'b', 3, 4, 5, 6, 7, 8, 9])) console.log('test 5 passed');
else console.log('test 5 FAILED');


_replaceAdjacentItems(-4, 3, ['x', 'y', 'z'], arr);
if (arraysMatch(arr, [50, 'x', 'y', 'z', 'a', 'b', 3, 4, 5, 'x', 'y', 'z', 9])) console.log('test 6 passed');
else console.log('test 6 FAILED');

// ->
_replaceAdjacentItems(-6, 4, [[1]], arr);
if (arraysMatch(arr, [50, 'x', 'y', 'z', 'a', 'b', 3, [1], 'z', 9])) console.log('test 7 passed');
else console.log('test 7 FAILED');


let errorTriggered = false;
try {
	_replaceAdjacentItems(11, 4, [], arr); // invalid index
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


errorTriggered = false;
try {
	_replaceAdjacentItems(1, 0, [], arr); // 0 items to replace
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');


errorTriggered = false;
try {
	_replaceAdjacentItems('', 1, [], arr); // must be integer
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 10 passed');
else console.log('test 10 FAILED');


errorTriggered = false;
try {
	_replaceAdjacentItems(1, '', [], arr); // must be integer
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 11 passed');
else console.log('test 11 FAILED');


errorTriggered = false;
try {
	_replaceAdjacentItems(1, 1, {}, arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 12 passed');
else console.log('test 12 FAILED');


errorTriggered = false;
try {
	_replaceAdjacentItems(1, 1, [], {}); // must be array
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 13 passed');
else console.log('test 13 FAILED');


errorTriggered = false;
try {
	_replaceAdjacentItems(5, 6, [1, 2], arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 14 passed');
else console.log('test 14 FAILED');


errorTriggered = false;
try {
	_replaceAdjacentItems(-5, 6, [1, 2], arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 15 passed');
else console.log('test 15 FAILED');


