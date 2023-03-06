// Fix me!
function largestOfFour(arr) {
    let current = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        current = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (current < arr[i][j]) {
                current = arr[i][j];
            }
        }
        if (arr[i].indexOf(current) >= 0) {
            result = arr[i];
        }
    }
    return result;
}

// Tests
test('largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [5, 27, 39, 1001]', () => {
    const result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    expect(result).toStrictEqual([5, 27, 39, 1001]);
});

test('largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000]', () => {
    const result = largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
    expect(result).toStrictEqual([9, 35, 97, 1000000]);
});
