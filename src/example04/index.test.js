// Fix me!
function palindrome(str) {
    str = str.split(/\W*\d*[_]*/).join('').toLowerCase()
    for (var i = 0; i < str.length / 2 >> 0; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false
        }
    }

    return true;
}

// Tests
test('palindrome("My age is 0, 0 si ega ym.") should be true', () => {
    const result = palindrome("My age is 0, 0 si ega ym.");
    expect(result).toStrictEqual(true);
});

test('palindrome("0_0 (: /-\ :) 0-0") should be true', () => {
    const result = palindrome("0_0 (: /-\ :) 0-0");
    expect(result).toStrictEqual(true);
});

test('palindrome("1 eye for of 1 eye.") should be false', () => {
    const result = palindrome("1 eye for of 1 eye.");
    expect(result).toStrictEqual(false);
});