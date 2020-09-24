console.log("Before prepare food");

function prepareFood(data) {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            if(data !== 2) {   
            console.log("Prepare food");
            resolve("Food is ready");
        }
        else {
            reject("Value not acceptable")
        }

        },10);
    });

    return promise;
}
function prepareFrenchToast() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare French Toast");
            resolve("French Toast is ready");
        },20);
    });

    return promise;
}
function prepareCoffee() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is ready");
        },30);
    });

    return promise
}

let promise = prepareFood(2);
//console.log("Promise = ",promise);
promise.then(function(value) {
    console.log("Food is ready call back = ",value);
    return prepareFrenchToast();
})
.then(function(frenchToastValue) {
    console.log("French is ready call back = ",frenchToastValue);
    return prepareCoffee()
})
.then(function(coffeeValue) {
    console.log("French is ready call back = ",coffeeValue);})
.catch(function(error) {
    console.log("Error = ",error);
});

/*
function mycallback(value) {
    console.log("Food is ready call back = ",value);
    prepareFrenchToast  (frenchToastcallback);
}
function frenchToastcallback(value)  {
    console.log("French is ready call back = ",value);
    prepareCoffee(coffeecallback);
}
function coffeecallback(value)  {
    console.log("Coffee is ready call back = ",value);
}
prepareFood(mycallback);

*/

console.log("After prepare food dinner is ready");
