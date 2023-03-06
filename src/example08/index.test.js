// Fix me!
var sum = 0;
function multiplesOf3and5(number) {
    for (var i = 1; i < number; i++) {
        if ((i % 3 === 0) || (i % 5 === 0) || (i % 3 === 0 && i % 5 === 0)) {
            sum = sum + i;
        }
    }
    return sum;
}

// Tests
test('multiplesOf3and5(49) should return 543', () => {
    const result = multiplesOf3and5(49);
    expect(result).toStrictEqual(543);
});

test('multiplesOf3and5(1000) should return 233168', () => {
    const result = multiplesOf3and5(1000);
    expect(result).toStrictEqual(233168);
});

test('multiplesOf3and5(8456) should return 16687353', () => {
    const result = multiplesOf3and5(8456);
    expect(result).toStrictEqual(16687353);
});
