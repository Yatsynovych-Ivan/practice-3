function generateArray(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

function printArray(arr) {
    const elements = arr.map((val, index) => `[cell - ${index},value - ${val}]`).join(',');
    console.log(`{${elements}}`);
}

function bubbleSort(arr, isAscending) {
    let res = [...arr];
    for (let i = 0; i < res.length - 1; i++) {
        for (let j = 0; j < res.length - i - 1; j++) {
            if (isAscending ? res[j] > res[j + 1] : res[j] < res[j + 1]) {
                [res[j], res[j + 1]] = [res[j + 1], res[j]];
            }
        }
    }
    return res;
}

function insertionSort(arr, isAscending) {
    let res = [...arr];
    for (let i = 1; i < res.length; i++) {
        let key = res[i];
        let j = i - 1;
        while (j >= 0 && (isAscending ? res[j] > key : res[j] < key)) {
            res[j + 1] = res[j];
            j--;
        }
        res[j + 1] = key;
    }
    return res;
}

function selectionSort(arr, isAscending) {
    let res = [...arr];
    for (let i = 0; i < res.length - 1; i++) {
        let targetIdx = i;
        for (let j = i + 1; j < res.length; j++) {
            if (isAscending ? res[j] < res[targetIdx] : res[j] > res[targetIdx]) {
                targetIdx = j;
            }
        }
        if (targetIdx !== i) {
            [res[i], res[targetIdx]] = [res[targetIdx], res[i]];
        }
    }
    return res;
}

const originalArray = generateArray(6, 1, 20);

console.log("Початковий масив:");
printArray(originalArray);

console.log("\nBubble Sort (true - прямий):");
printArray(bubbleSort(originalArray, true));
console.log("Bubble Sort (false - зворотний):");
printArray(bubbleSort(originalArray, false));

console.log("\nInsertion Sort (true - прямий):");
printArray(insertionSort(originalArray, true));
console.log("Insertion Sort (false - зворотний):");
printArray(insertionSort(originalArray, false));

console.log("\nSelection Sort (true - прямий):");
printArray(selectionSort(originalArray, true));
console.log("Selection Sort (false - зворотний):");
printArray(selectionSort(originalArray, false));
