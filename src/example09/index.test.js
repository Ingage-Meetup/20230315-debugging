// Fix me!
function largestPalindromeProduct(digit) {
    if (digit === 2) {
        for (let i = 99; i > 9; i--) {
            for (let j = 99; j > 9; j--) {
                let number = i * j;
                let str = number.toString();
                if (str === str.split("").reverse().join(""))
                    return number;
            }
        }
    }

    for (let i = 999; i > 99; i--) {
        for (let j = 999; j > 99; j--) {
            let number = i * j;
            let str = number.toString();
            if (str === str.split("").reverse().join(""))
                return number;
        }
    }
    return undefined;
}

// Tests
test('largestPalindromeProduct(2) should return 9009', () => {
    const result = largestPalindromeProduct(2);
    expect(result).toStrictEqual(9009);
});

test('largestPalindromeProduct(3) should return 580085', () => {
    const result = largestPalindromeProduct(3);
    expect(result).toStrictEqual(580085);
});
