function split(wholeArray) {
    //console.log(wholeArray);
    let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
    let secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));
    return [firstHalf, secondHalf];
}

function merge (left, right) { //[2, 4, 5], [10, 11, 12]
    var mergedArray = [];
    var leftPointer = 0;
    var rightPointer = 0;
    while (leftPointer < left.length && rightPointer < right.length) {
        if (left[leftPointer] > right[rightPointer]) {
            mergedArray.push(right[rightPointer]);
            rightPointer++;
        } else {
            mergedArray.push(left[leftPointer]);
            leftPointer++;
        }
    }
    //console.log(left.slice(leftPointer));
    if (leftPointer < left.length) {
        mergedArray = mergedArray.concat(left.slice(leftPointer));
    } else if (rightPointer < right.length) {
        mergedArray = mergedArray.concat(right.slice(rightPointer));
    }
    //console.log(mergedArray);
    return mergedArray;
}

function mergeSort(array) { 
    if (array.length > 1) {
        let left = split(array)[0];
        let right = split(array)[1];
        return merge(mergeSort(left), mergeSort(right));
    } else {
        return array;
    }
}

/*
mergeSort()
if arr.length > 1
    left = split (arr) [0]
    right = split (arr) [1]
    return merge (mergeSort(left), mergeSort(right))

else return arr
*/