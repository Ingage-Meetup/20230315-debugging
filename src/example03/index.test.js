// Fix me!
function findLongestWordLength(str) {
    const longestWord = str.split('').map((x) => x.length).sort((a, b) => b - a);
    return longestWord[0];
}

// Tests
test('findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6', () => {
    const result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
    expect(result).toStrictEqual(6);
});

test('findLongestWordLength("May the force be with you") should return 5', () => {
    const result = findLongestWordLength("May the force be with you");
    expect(result).toStrictEqual(5);
});

test('findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19', () => {
    const result = findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
    expect(result).toStrictEqual(19);
});