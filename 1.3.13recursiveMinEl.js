function minElement(arr) {
    if (arr.length < 2) {
        return arr[0];
    }
    ///for num
    if (canParseNum(arr)) {
        var parseAsInt = arr.every(num => {
            return Number.isInteger(num);
        });

        if (parseAsInt) {
            var arrNum = arr.map(item => {
                return parseInt(item, 10);
            });
        }
        else {
            var arrNum = arr.map(item => {
                return parseFloat(item);
            });
        }
        return findMinNum(arrNum);
    }

    ///for string
    else if (typeof arr[0] == "string") {
        return findMinString(arr);
    }
}

function findMinNum(arr) {
    if (arr.length < 2) {
        return arr[0];
    }
    return Math.min(arr.shift(), findMinNum(arr));
}

function findMinString(arr) {
    if (arr.length < 2) {
        return arr[0];
    }
    if (arr[0].toString() >= arr[1].toString()) {
        arr.shift();
        return findMinString(arr);
    } else {
        arr.splice(1, 1);
        return findMinString(arr);
    }
}

function canParseNum(arrayToCheck) {
    return !arrayToCheck.some(item => {
        return isNaN(parseInt(item));
    });
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (line) => {
    var array = line.split(" ");
    rl.close();
    console.log(minElement(array));
});
