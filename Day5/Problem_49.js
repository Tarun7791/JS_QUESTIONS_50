function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
        let last = arr.pop(); // remove last element
        arr.unshift(last);    // add it at the beginning
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, 2)); // [4, 5, 1, 2, 3]
