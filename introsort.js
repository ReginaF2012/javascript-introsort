// swap
function swap(array, index1, index2) {
    [[array[index1], array[index2]] = [array[index2], array[index1]]];
}

function insertionSort(arr, start = 0, end = arr.length - 1) {
    let left = start;
    let right = end;

    for (let i = left + 1; i <= right; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= start && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}