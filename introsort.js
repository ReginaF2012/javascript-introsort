// swap
function swap(array, index1, index2) {
    [([array[index1], array[index2]] = [array[index2], array[index1]])];
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

function partition(arr, start, end) {
    const pivot = medianOfThree(arr, start, end);

    const pivotVal = arr[pivot];

    while (start <= end) {
        while (arr[start] < pivotVal) {
            start++;
        }
        while (arr[end] > pivotVal) {
            end--;
        }

        if (start <= end) {
            // swap
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
    }

    return start;
}

function medianOfThree(arr, start, end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[start] < arr[left]) swap(arr, start, end);

    if (arr[mid] < arr[end]) swap(arr, mid, start);

    if (arr[start] < arr[mid]) swap(arr, start, mid);

    return mid;
}
