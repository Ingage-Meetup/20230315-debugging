// Fix me!
function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => arr1.includes(item) || !arr2.includes(item));
};

// Tests
test('diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should be [ 4 ]', () => {
    const result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    expect(result).toStrictEqual([4]);
});

test('diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should be ["pink wool"]', () => {
    const result = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
    expect(result).toStrictEqual(["pink wool"]);
});
