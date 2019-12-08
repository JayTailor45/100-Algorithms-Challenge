function alphabeticShift(inputString: string): string {
    const newString : string[] = [];
    inputString.split('').forEach(el => {
        let charCode = el.charCodeAt(0);
        if (charCode >= 122) {
            charCode = 97;
        } else {
            charCode += 1;
        }
        newString.push(String.fromCharCode(charCode));
    });
    return newString.join('');
}

console.log(alphabeticShift('crazy'));