const arr = [
    {key: 0, x: [4, 5, 6], y: [1, 2, 3, 4]},
    {key: 0, x: [1], y: []}
]

arr.map(obj => {
    obj.key = obj.x.length + obj.y.length;
});
console.log(arr);