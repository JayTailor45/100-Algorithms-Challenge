function almostIncreasingSequence(sequence: number[]): boolean {
    let no_counter: number = 0;
    for (let i = 0; i < sequence.length; i++) {
        console.log(sequence[i] <= sequence[i -1])
        if(sequence[i] <= sequence[i -1]) {
            no_counter++;
 console.log(i)
 console.log(sequence[i] + ' <= ' + sequence[i - 2] + ' : ' + (sequence[i] <= sequence[i - 2]))
            if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i -1]) {
                return false;
            }
        }
    }
    return no_counter <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2])) 