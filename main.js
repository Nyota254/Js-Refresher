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


/**************************************************************************************
 
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

*********************************************************************/




/********************************************************************************************
 
 
Write a JavaScript program to find the number of even values in sequence before
    the first occurrence of a given number. Use while loop
    Array: [1,2,3,4,5,6,7,8,9,10,11,12]
Number: 8 

var array1 = [1,2,3,4,5,6,7,8,9,10,11,12] 
var counter = 0

var pointer2 = 0 
while(array1[pointer2] != 8){
    if(array1[pointer2] % 2 == 0){
        counter ++ 
    }
    pointer2 ++
}

console.log(counter)

*/

/**************************************************************************
 * Write a JavaScript program which iterates the integers from 1 to 15. But for 
 * multiples of three print "Fizz" instead of the number and for the multiples of five print
 * "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
 */

/********************************************
 * 
 * 
for(i = 0 ; i < 16 ; i++){
    if(i % 3 == 0  && i % 5 == 0){
        console.log(i + "FizzBuzz")
    } else if(i % 5 == 0){
        console.log(i + "Buzz")
    } else if(i % 3 == 0){
        console.log(i + "Fizz")
    }else {
        console.log(i)
    }
}

 */

/**************************************************************************************
 * HOISTING
 **************************************************************************************
 Variable hoisting
 javascript moves variable declarations to the top
 meaning you can use variables b4 declaring them
 e.g
 x = 10
 console.log(x)
 var x

 Function hoisting
 
 var total = 10;
 var sum = function(num1,num2){
     console.log(total)
     total = num1+num2;
     console.log(total)
     var total;
 }

 sum(4,4)

 */

//  selecting html elements
// using id
//  document.getElementById("top-bar")
// using class
//console.log(document.getElementsByClassName("para1"))
//using tagname
//console.log(document.getElementsByTagName("p"))

//Query selectors
//Query selector selector selects first class matching
//Queryselectorall
//selects all elements that match that selector

/******************************************************
 * Just an exercise to update html element

var countDownElement = document.getElementById('countdown');
 
var numberCountDownValue = countDownElement.innerHTML

setInterval(function(){
    numberCountDownValue = numberCountDownValue > 0 ? numberCountDownValue - 1 : 0 ;
    countDownElement.innerHTML = numberCountDownValue;

},1000)

********************************************************/

/**************************************************************
 
var countDownValue = document.getElementById('countdown');

var countDownValueNumber = countDownValue.innerHTML;

console.log(countDownValueNumber);

setInterval(function(){
    countDownValueNumber = countDownValueNumber > 0 ? countDownValueNumber - 1 : 0 ;
    countDownValue.innerHTML = countDownValueNumber

},1000)

***********************************************************/