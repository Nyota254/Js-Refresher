//Some advanced concepts relearning

//Type coercion implicit

//Using operators on number strings it converts
//e.g 

// console.log(+"2")
//var value1 = 2>="2"
//console.log(value1)

//null,undefined,0 all return false below but anything else true
// if("g"){
//     console.log("True")
// } else {
//     console.log("false")
// }


//Type coercion explicit
//changing type programmatically
//String() function changes numbers or bool to string
// e.g
// console.log(typeof(String(-99.68)))
// console.log(typeof(Number("90")))
// console.log(Boolean(0),typeof(Boolean(1)))


//Objects
var cars = {
    car : "galado",
    speed : "300kph",
    drive : '4wd',
    manufacture : {
        name : "lamborgini",
        location : "luxenborg",
        cartypes : "4"
    },
    applyBrakes : function (){
        setTimeout (function (){
            console.log("brakes applied");
        },10000)
    }
    
}

console.log(cars.manufacture.name)
console.log(cars.applyBrakes())