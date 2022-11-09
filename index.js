function checkPrimeRange(lowerBound, UpperBound) {
    var notPrime = false;

    for (let i = lowerBound; i <= UpperBound; i++) {
        for (let j = 2; j <= i/2; j++) {
            if ((i % j) == 0) {
                console.log(i, 'not prime', j, i/j);
                notPrime = true;
                break;
            }
        }
        if (!notPrime) {
            console.log(i, 'prime')
        }
        notPrime = false;
    }

}

checkPrimeRange(2, 15)