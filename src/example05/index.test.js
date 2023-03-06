// Fix me!
function filteredArray(arr, elem) {
    let newArr = [...arr];
    // Only change code below this line
    for (let i = 0; i < newArr.length; i++) {
        let elemCheck = newArr[i].indexOf(elem);
        if (elemCheck != -1) {
            newArr.splice(i, 1);
        }
    }
    // Only change code above this line
    return newArr;
}

// Tests
test('filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [ ["flutes", 4] ]', () => {
    const result = filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2);
    expect(result).toStrictEqual([["flutes", 4]]);
});

test('filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") should return [ ["amy", "beth", "sam"] ]', () => {
    const result = filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter");
    expect(result).toStrictEqual([["amy", "beth", "sam"]]);
});

test('filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return [ ]', () => {
    const result = filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3);
    expect(result).toStrictEqual([]);
});