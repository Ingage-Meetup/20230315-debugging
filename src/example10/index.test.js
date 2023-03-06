// Fix me!
function primeSummation(n) {
    // Good luck!
    //base case 
    let vecOfPrimes = [2]
    let total = 0

    //Helper Function that will test if the number we are looking at is Prime or Not  
    function isPrime(arr, number) {
        var result = arr.every(function (e) {
            return number % e
        });

        //If it is true then we will push the element into the array 
        if (result == true) {
            arr.push(number)
        }
    }

    /* Use recursion to run the helper function repeatedly to get the nth
    prime number up to the 10001st prime number */
    for (let i = 3; vecOfPrimes.length < 10001; i++) {
        isPrime(vecOfPrimes, i)

    }

    function isSmallEnough(value) {
        return value < n;
    }

    var filtered = vecOfPrimes.filter(isSmallEnough);

    for (let i = 0; i < filtered.length; i++) {
        total += filtered[i]
    }
    return total;
}

// Tests
test('primeSummation(17) should return 41', () => {
    const result = primeSummation(2);
    expect(result).toStrictEqual(41);
});

test('primeSummation(2001) should return 277050', () => {
    const result = primeSummation(2001);
    expect(result).toStrictEqual(277050);
});

test('primeSummation(140759) should return 873608362', () => {
    const result = primeSummation(140759);
    expect(result).toStrictEqual(873608362);
});

test('primeSummation(2000000) should return 142913828922', () => {
    const result = primeSummation(2000000);
    expect(result).toStrictEqual(142913828922);
});
