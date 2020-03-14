function main() {
    var array = [3,2,1]
    var sortedArray = insertionSort(array);
}
main();

function insertionSort(array) {
    for(var _currentPosition=1; array.length>_currentPosition; _currentPosition++) {
        let _key = _currentPosition;
	   console.log("current key: " + _key);
        for(let _swapKey=_key; _swapKey>=0; _swapKey--) {
console.log("swap key: " + _swapKey);
            if(array[_swapKey-1] > array[_swapKey]) {
                let tempSort = array[_swapKey];
                array[_swapKey] = array[_swapKey - 1];
		array[_swapKey - 1] = tempSort;
            console.log(array);

	    } else {
		break;
	    }
        }
    }
	console.log(array);
}
