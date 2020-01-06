/**
 *  link = https://www.hackerrank.com/challenges/between-two-sets/problem
 */

function getTotalX(a, b) {

    let numbers = [];

    for (let i = a[0] ; i < b[0] + 1; i++) {

        if (a.filter((element) => i % element == 0).length == a.length) {
            numbers.push(i);
        }

    }

    numbers = numbers.filter((number) => {
        return b.filter((bNumber) => {
            return bNumber % number === 0;
        }).length === b.length;
    });

    return numbers.length;

}