// Fix me!
function titleCase(str) {
    str = str.toLowerCase();
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        temp.toUpperCase(temp.charAt(0));
        arr[i].replace(arr[i], temp);
    }
    var newStr = arr.join(" ");
    return newStr;
}

// Tests
test('titleCase("I\'m a little tea pot") should return "I\'m A Little Tea Pot"', () => {
    const result = titleCase("I'm a little tea pot");
    expect(result).toStrictEqual("I'm A Little Tea Pot");
});

test('titleCase("sHoRt AnD sToUt") should return "Short And Stout"', () => {
    const result = titleCase("sHoRt AnD sToUt");
    expect(result).toStrictEqual("Short And Stout");
});

test('titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout."', () => {
    const result = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
    expect(result).toStrictEqual("Here Is My Handle Here Is My Spout.");
});
