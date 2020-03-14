function main() {
    var array = [3,2,1]
    var sortedArray = insertionSort(array);
}
main();

function insertionSort(array) {
    for(var _currentPosition=1; array.length>_currentPosition; _currentPosition++) {
        var _swapKey = _currentPosition;
        for(_swapKey; _swapKey>0; _swapKey--) {
            if(array[_swapKey-1] > array[_swapKey]) {
                var tempSort = array[_swapKey]:
                array[_swapKey] = array[_swapKey - 1];
            }
            break;
        }
    }
}
