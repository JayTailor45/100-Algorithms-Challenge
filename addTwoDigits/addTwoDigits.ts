function addTwoDigits(n: any): number {
    return n.toString().split('').reduce((acc, current) => acc += parseInt(current), 0);
}

console.log(addTwoDigits(29));