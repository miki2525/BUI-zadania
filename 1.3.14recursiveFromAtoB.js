const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayNumFromRange(arr, start, stop) {
    if (start <= stop) {
        arr.push(start);
        displayNumFromRange(arr, ++start, stop);
    } else {
        console.log(arr.join(" "));
    }
}

input.on('line', function (line) {
    let numbers = line.split(" ");
    let start = parseInt(numbers[0]);
    let end = parseInt(numbers[1]);
    let arr = [];
    displayNumFromRange(arr, start, end);
    input.close();
});