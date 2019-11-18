function allLongestStrings(inputArray: string[]): string[] {
    let maxLength: number = -Infinity;
    let newArr: string[] = [];
    inputArray.forEach(el => {
        maxLength = el.length > maxLength ? el.length : maxLength;
    })
    inputArray.forEach((element: string) => {
        if(element.length == maxLength) {
            newArr.push(element);
        }
    });
    return newArr;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));