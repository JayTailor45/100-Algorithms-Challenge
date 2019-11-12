function addBorder(picture: string[]): string[] {
    const frame = '*'.repeat(picture[0].length + 2);

    picture.push(frame)
    picture.unshift(frame)

    for (let i = 0; i < picture.length; i++) {
        if(!(i === 0 || i === picture.length - 1)){
            picture[i] = '*'.concat(picture[i],'*')
        }
    }
    return picture;
}

console.log(addBorder(["abc", "ded"]));