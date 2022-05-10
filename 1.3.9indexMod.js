const abc = [
    {
        id: 'abc',
        name: 'Ala'
    },
    {
        id: 'def',
        name: 'Tomek'
    },
    {
        id: 'ghi',
        name: 'Jan'
    }
];
const objMod = {};
abc.map(function (obj) {
    Object.defineProperty(objMod, obj.id.toString(),{
        value: {
            id: obj.id,
            name: obj.name
        },
        enumerable:true
    });
});
console.log(objMod);
// II ver
const objArr = abc.map(function(objOld) {
    const objTemp = {};
    objTemp[objOld.id] = objOld;
    return objTemp;
});
const objNew= Object.assign(...objArr)

console.log(objNew);