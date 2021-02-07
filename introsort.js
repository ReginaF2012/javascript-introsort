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

// partition for quick sort
function partition(arr, start, end) {
    // use median of three to select pivot
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

    if (arr[mid] < arr[start]) {
        if (arr[end] < arr[mid]) {
            return mid;
        } else {
            return arr[end] < arr[start] ? end : start;
        }
    } else {
        if (arr[end] < arr[mid]) {
            return arr[end] < arr[start] ? start : end;
        } else {
            return mid;
        }
    }
}

function heapSort(array, start, end) {
    for (let i = Math.floor((end - start) / 2); i >= 0; i--) {
        heapifyDown(array, i, end);
    }

    for (let i = end + 1; i > 0; i--) {
        swap(array, start, i);
        heapifyDown(array, start, i);
    }
}

function heapifyDown(array, start, end = array.length) {
    let largest = start,
        left = start * 2 + 1,
        right = start * 2 + 2;

    // compare element to it's left and right child
    if (left < end && array[left] > array[largest]) {
        largest = left;
    }
    if (right < end && array[right] > array[largest]) {
        largest = right;
    }

    // if the parent node isn't the largest element, swap it with the largest child
    if (largest !== start) {
        swap(array, start, largest);

        // continue to heapify down
        heapifyDown(array, largest, end);
    }

    return array;
}
