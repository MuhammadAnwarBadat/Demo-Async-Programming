console.log("Before prepare food")
function prepareFood(callback) {
    setTimeout(()=>{
        console.log("Prepare food");
        callback("Food is ready");
    },10)
}
function prepareFrenchToast(callback) {
    setTimeout(()=>{
        console.log("Prepare French Toast");
        callback("French Toast is ready");
    },20)
}
function prepareCoffee(callback) {
    setTimeout(()=>{
        console.log("Prepare Coffee");
        callback("Coffee is ready");
    },30)
}
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

console.log("After prepare food dinner is ready");