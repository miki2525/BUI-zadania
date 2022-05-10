const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    array = line.split(" ");
    arrayEven = array.filter(number => number % 2 === 0)
    rl.close();
    console.log(arrayEven.join(" "));
});