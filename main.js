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

/******** 
var btn = document.getElementById("btn-click");

function onButtonClick(){
    alert("Button clicked");
}

btn.onclick = onButtonClick;

***********************************/

/****************************************
 * On click Listener

var btn = document.getElementById("btn-click");
var topSection = document.querySelector("div")

function onButtonClick(){
    topSection.style.backgroundColor = "rgb("+ Math.floor(Math.random()*255)+","+ Math.floor(Math.random()*255)+","+ Math.floor(Math.random()*255)+")"
}

btn.addEventListener('click',onButtonClick)

 **********************************************/

/***************************************
 * 


var greetings = document.getElementById('data-link');

var btn = document.getElementById('btn-click');

// greetings.classList.add('big')

// setTimeout(function(){
//     greetings.classList.remove('big')
// },1500)


btn.addEventListener('click',function(){
    if(greetings.classList.contains('small')){
        greetings.classList.remove('small')
        greetings.classList.add('big')

    } else {
        greetings.classList.remove('big')
        greetings.classList.add('small')
    }
})

 */

/********
 * form events
 * input
 * focus
 * blur
 * submit
 
var firstName = document.getElementById('first-name');
var namesForm = document.getElementById('names')

firstName.addEventListener("input",function(event){
    console.log(event.target.value);
})

namesForm.addEventListener("submit",function(event){
    alert("oya inado kazi");
    event.preventDefault();
})
*/

/**************
 * Keyboard events 

document.body.addEventListener("keydown",function(e){
    var keyCode = e.key;
    console.log(keyCode + " key down")
})
document.body.addEventListener("keyup",function(e){
    var keyCode = e.key;
    console.log(keyCode + " key uped")
})
document.body.addEventListener("keypress",function(e){
    var keyCode = e.key;
    console.log(keyCode + " key pressed")
})

************/

/****************************************************8
 * Piano challenge
 

document.body.addEventListener("keydown",function(e){
    var keyPressed = e.key;
    if(keyPressed == "A" || keyPressed == "a"){
        var audio = new Audio('./assets/Drumset Audio Files/clap.wav')
        audio.play()
    } else if(keyPressed == "S" || keyPressed == "s"){
        var audio = new Audio('./assets/Drumset Audio Files/tink.wav') 
        audio.play()
    } else if(keyPressed == "D" || keyPressed == "d"){
        var audio = new Audio('./assets/Drumset Audio Files/snare.wav') 
        audio.play()
    } else if(keyPressed == "F" || keyPressed == "f"){
        var audio = new Audio('./assets/Drumset Audio Files/ride.wav') 
        audio.play()
    } else if(keyPressed == "G" || keyPressed == "g"){
        var audio = new Audio('./assets/Drumset Audio Files/openhat.wav') 
        audio.play()
    } else if(keyPressed == "H" || keyPressed == "h"){
        var audio = new Audio('./assets/Drumset Audio Files/kick.wav') 
        audio.play()
    } else if(keyPressed == "J" || keyPressed == "j"){
        var audio = new Audio('./assets/Drumset Audio Files/hihat.wav') 
        audio.play()
    } else if(keyPressed == "K" || keyPressed == "k"){
        var audio = new Audio('./assets/Drumset Audio Files/tom.wav') 
        audio.play()
    } else if(keyPressed == "L" || keyPressed == "l"){
        var audio = new Audio('./assets/Drumset Audio Files/boom.wav') 
        audio.play()
    }
})

*/

// var hoverMe = document.getElementById("hover-me");

// hoverMe.addEventListener("mouseover",function(){
    
//     hoverMe.classList.add('hovering-now')
//     if( hoverMe.classList.contains('hover-me')){
//         hoverMe.classList.add('hovering-now')
//     } else {
//         hoverMe.classList.add('hover-me')
//     }
    
// })

/******************
 * Adding html elements in vanilla javascript
 * 
 * appendChild end of list
 * 
 * insertBefore(newitem, item to be inserted b4) top of list 2 parameters
 

var shoppingList = document.getElementById('shopping-list')
var btnAddList = document.getElementById('add-item')

btnAddList.addEventListener('click',function(){
    var newElement = document.createElement('li')
    var textWritable = document.createTextNode('List item ' + (shoppingList.childElementCount + 1))
    newElement.appendChild(textWritable)
    newElement.id = "item" + (shoppingList.childElementCount + 1)
    shoppingList.appendChild(newElement)
})

*******************************************************/

/****************************************************************
 * 
 * SIMPLE TO DO LIST
 

var list = document.getElementById('items-list')
var shoppingForm = document.getElementById('shopping-form')
var shoppingItem = document.getElementById('input-item')
var updateItem = document.getElementById('btn-update')
var addItem = document.getElementById('btn-submit')
var deleteItem = document.getElementById('btn-delete')


function createNewItem(){
    var newShoppingItem = document.createElement('li')
    var textWritable = document.createTextNode(shoppingItem.value)
    newShoppingItem.appendChild(textWritable)
    // list.appendChild(newShoppingItem)

    return newShoppingItem;
}

addItem.addEventListener('click',function(e){
    e.preventDefault()
    if(shoppingItem.value){
        var newShoppingItem = document.createElement('li')
        var textWritable = document.createTextNode(shoppingItem.value)
        newShoppingItem.appendChild(textWritable)
        list.appendChild(newShoppingItem)

        shoppingItem.value="";

    } else {
        alert("Kindly fill a value")
    }
})


updateItem.addEventListener("click",function(e){
    e.preventDefault()
    var firstElement = list.firstElementChild;
    var newItem = createNewItem();

    list.replaceChild(newItem,firstElement)
    shoppingItem.value="";
})

deleteItem.addEventListener("click",function(e){
    e.preventDefault()
    var firstElement = list.firstElementChild;
    list.removeChild(firstElement)
})

*/

/**************************************************
 * BROWSER OBJECT MODEL
 */



/*****************************************************
 * SMART WATCH CHALLENGE
 * 
 */

function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
}

// function currentTime(){
//     var date = new Date();
//     var hour = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     hour = updateTime(hour);
//     min = updateTime(minutes);
//     sec = updateTime(seconds);
//     var timeFormart = hour + ":" + min + ":" + sec;
//     // var timeForm = document.getElementsByClassName('time').innerHTML = timeFormart;
//     var timeElement = document.getElementById("time")
//     // console.log(timeFormart)
//     // timeSection.appendChild(timeFormart)
//     console.log(timeElement.innerText == "")
//     console.log(timeElement.innerText)

//     setTimeout(function(){
//         if(timeElement.innerText == ""){
//             timeElement.appendChild(document.createTextNode(timeFormart))
//             currentTime()
//         } else {
//             var newElement = document.createElement('h2')
//             newElement.id = "time"
//             var parentElement = document.getElementsByClassName('paro')
//             var childElement = document.querySelector('#time')
//             parentElement.removeChild(childElement)
//             newElement.appendChild(document.createTextNode(timeFormart))
//             timeElement.append(newElement)
//             currentTime()
//         }
//     },1000)
// }

// currentTime();

function currentTime(){
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();

    hour = updateTime(hours)
    min = updateTime(mins)
    sec = updateTime(secs)
    
    var timeFormart = hour + ":" + min + ":" + sec;

    document.getElementById('time').innerHTML = timeFormart;
    
    setTimeout(function(){
        currentTime();
    },1000)
}

currentTime();

var redWatch = document.getElementsByClassName('btn-danger-custom')[0]
var purpleWatch = document.getElementsByClassName('btn-secondary-custom')[0]
var blueWatch = document.getElementsByClassName('btn-primary-custom')[0]
var pinkWatch = document.getElementsByClassName('btn-brown-custom')[0]
var blackWatch = document.getElementsByClassName('btn-dark-custom')[0]



redWatch.addEventListener('click',function(){
    document.getElementById('watch-img').src = "./assets/watches/red.png"
})

purpleWatch.addEventListener('click',function(){
    document.getElementById('watch-img').src = "./assets/watches/purple.png"
})

blueWatch.addEventListener('click',function(){
    document.getElementById('watch-img').src = "./assets/watches/blue.png"
})

blackWatch.addEventListener('click',function(){
    document.getElementById('watch-img').src = "./assets/watches/black.png"
})

pinkWatch.addEventListener('click',function(){
    document.getElementById('watch-img').src = "./assets/watches/pink.png"
})

