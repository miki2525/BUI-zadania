
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var charArr = line.split(' ');
    var floatArr = charArr.map(str => {
        return Number(str)
    });
    var floatSum = floatArr.reduce(function(x, y){
        return x + y;
    });
    rl.close();
    console.log(floatSum);
});




