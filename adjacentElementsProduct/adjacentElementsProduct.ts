function adjacentElementsProduct(inputArray: number[]): number {
    let largest: number = -Infinity;
    for (let i = 0; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i + 1];
        largest = largest < product ? product : largest;
    }
    return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));