var promise = new Promise(resolve => {
    setTimeout(()=>{
        resolve("Udało się!");
    }, 5000);
}).then(string => {console.log(string);});