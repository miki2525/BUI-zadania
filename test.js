function getValue(object, path) {
    var destination = object;
    var pathToArr = path.split(".");
    pathToArr.map(function (currPlace) {
        destination = destination[currPlace];
    });
    if (destination === undefined) {
        return null;
    }else {
        return destination.length;
    }
}


const obj = {
    person: {
        address: {
            street: 'Wiejska'
        },
        name: 'Tomasz'
    }
}
console.log(getValue(obj, 'person.address.street'))
console.log(getValue(obj, 'person.name'))
console.log(getValue(obj, 'person.lastName'))
const obj1 = obj.person;
const obj2 = obj1.address;