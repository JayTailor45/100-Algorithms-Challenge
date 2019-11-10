function absoluteValuesSumMinimization(a: number[]): number {
    const finalIndex = a.length % 2 == 0 ? (a.length / 2) - 1 : a.length / 2;  
    return a[Math.floor(finalIndex)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));