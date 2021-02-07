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

  
function partition(arr, start, end) {
    // For random pivot use => arr[Math.floor(Math.random() * (end - start + 1) + start)];
    const pivotVal = arr[Math.floor((start + end) / 2)];

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