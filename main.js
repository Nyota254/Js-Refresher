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
// var cars = {
//     car : "galado",
//     speed : "300kph",
//     drive : '4wd',
//     manufacture : {
//         name : "lamborgini",
//         location : "luxenborg",
//         cartypes : "4"
//     },
//     applyBrakes : function (){
//         setTimeout (function (){
//             console.log("brakes applied");
//         },10000)
//     }
    
// }

// console.log(cars.manufacture.name)
// console.log(cars.applyBrakes())

//Arrays => special types of objects,Positional access of data

//splice method
//splice()
//can take several args: 1. where to start working on array
//                       2.End of where to start working on arrau
//                       3.From here means it will add something from specified points

 //.concat()
 //contacts two lists together

 //.sort()
 //sorts in ascending
 //.reverse()
 //sorts in descending order

 //loops
 //still remember for loop
//  for(i = 0 ; i < 101 ; i ++){
//      console.log(i)
//  }

//While loop
// value1 = 0

// while(value1 < 50){
//     value1++
// }

// console.log(value1)

//challenge gcd of 25 and 15

array15 = []
for(i = 0 ; i < 16 ; i++){
    if (15 % i == 0 ){
        array15.push(i)
    }
}

array25 = []
for(i = 0 ; i < 26 ; i++){
    if (25 % i == 0 ){
        array25.push(i)
    }
}

var containedInBoth = []
for(i = 0 ; i < array15.length -1 ;i++){
    if(array25.includes(array15[i])){
        containedInBoth.push(array15[i])
    }
}
var ascendingSorted = containedInBoth.sort()
var gcd_number = ascendingSorted[ascendingSorted.length-1]
console.log(gcd_number)



