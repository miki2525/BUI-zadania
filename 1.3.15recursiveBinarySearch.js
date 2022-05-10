const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function binarySearch(arr, start, stop, search) {
    search = parseInt(search);
    if (start > stop) {
        return console.log("Brak elementu w ciągu!!!");
    }
    let q = Math.floor((start + stop) / 2);
    if (parseInt(arr[q]) === search) {
        return console.log(q);
    }
    if (parseInt(arr[q]) > search) {
        return binarySearch(arr, start, q - 1, search);
    } else {
        return binarySearch(arr, q + 1, stop, search);
    }
}

input.on('line', function (line) {
    var string = line;
    let numberList = string.split(' ');
    input.on('line', function (line) {
        var findMe = line;
        binarySearch(numberList, 0, numberList.length - 1, findMe);
    });
});