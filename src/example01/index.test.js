// Fix me!
function countdown(myArray, n) {
    if (n == 1) {
        return [1];
    } else if (n > 1) {
        myArray = countdown(myArray, n - 1);
        myArray.unshift(n);
        return myArray;
    }
}

// Tests
test('countdown(10) should be [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
    const result = countdown(10);
    expect(result).toStrictEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

test('countdown(5) should be [5, 4, 3, 2, 1]', () => {
    const result = countdown(5);
    expect(result).toStrictEqual([5, 4, 3, 2, 1]);
});