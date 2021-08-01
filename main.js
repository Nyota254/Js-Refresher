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


function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
}


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

var heartRate = document.getElementsByClassName('btn-heart-rate')[0]

heartRate.addEventListener('click',function(){
    document.getElementById('time').innerHTML = '78';
})

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



 SMART WATCH CHALLENGE END
 ************************************************************************************/

/******************************8
 * Brush up on oop in js
 * 
 * creating a video object with everything it needs
 * 
 */

/*
 var video = {
     videoName: "Heavy Js Refresher",
     fileFormat : "mp4",
     duration: "2:48",
     owner: "Nyota",

     getVideoName: function(){
         return this.videoName
     },
     getFileFormart:function(){
         return this.fileFormat
     },
     getDuration:function(){
         return this.duration
     },
     getOwner:function(){
        return this.owner
     }

 }
 console.log(video.getVideoName());
*********/


/************
 * this keyword refers to property thats a part of the object 
 * and doesn't pick from global
 */
/********* 
 * 
 * 
  var video = {
    videoName: "Heavy Js Refresher",
    fileFormat : "mp4",
    duration: "2:48",
    owner: "Nyota",
  }


**************/



/**************************
 * Creating a simple constructor vanilla js
 * Other programming languages its whats known as a class
 */

/*
function Video(vName,vFileFormart,vDuration,vOwner) {
  this.videoName = vName;
  this.fileFormart = vFileFormart;
  this.duration = vDuration;
  this.owner = vOwner

  this.adsPoint = function(){
      console.log(this.duration - 2)
  }
}

var jessVideo = new Video('Data Science','mp4',9.00,'jess');
console.log(jessVideo)
jessVideo.adsPoint()
********************************/


/*********************
 * simple inheritance and prototype chain
 * 
 * top code make it prototype chained to avoid duplicate code
 */

/***********
   function Video(vName,vFileFormart,vDuration,vOwner) {
    this.videoName = vName;
    this.fileFormart = vFileFormart;
    this.duration = vDuration;
    this.owner = vOwner
  }

  Video.prototype.adsPoint = function () {
    console.log(this.duration - 2)
  }

  var mosesVideo = new Video('Data Science','mp4',9.00,'moses');
  mosesVideo.adsPoint()


***************/

/*********************
 * AJAX VANILLA JS
 * Api calls
 

var todoList = document.getElementById('todo-list')

function addItem(todoId,todoData){
    var elementTodo = document.createElement('li');
    var todoData = document.createTextNode(todoData)
    elementTodo.id = todoId
    elementTodo.appendChild(todoData)

    return todoList.appendChild(elementTodo)
}

function getTodoList(){
    var http = new XMLHttpRequest()

    http.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                var response = JSON.parse(this.responseText)

                for(i = 0 ; i < response.length ; i ++){
                    // console.log(response[i].id + ' ' +  response[i].title )
                    addItem(response[i].id,response[i].title)
                }

            } else {
                console.log('Failure')
            }
        }
    }

    http.open('GET','https://jsonplaceholder.typicode.com/todos',true)
    http.send()
}

getTodoList();

*/

/****************************
 * TOUCH UI VANILLA JS ATTEMPT
 * 
 

var profiles = document.getElementById('profile-cards')
var editForm = document.getElementById('patch-form')

function addProfiles(profileId,
                    profileName, 
                    profileOccupation, 
                    profileEmail, 
                    profileBio, 
                    ProfileCreatedtime, 
                    profileUpdatedtime) {

    var addTag = document.createElement('div');
    addTag.className = "col-md-4"
    var addTagCard = document.createElement('div');
    addTagCard.className = "card";
    var headName = document.createElement("h5");
    headName.className = "card-title";
    var content = document.createElement("p");
    content.className = "card-text";
    var breakGap = document.createElement('br')
    var profileHeading = document.createTextNode("profileName: " + profileName);
    var contentOccupation = document.createTextNode("profileOccupation: " + profileOccupation)
    headName.appendChild(profileHeading)
    content.appendChild(contentOccupation)
    
    var contentEmail = document.createElement("p");
    contentEmail.className = "card-text";
    var contentEmailText = document.createTextNode("profileEmail: " + profileEmail)
    contentEmail.appendChild(contentEmailText)

    var contentBio = document.createElement("p");
    contentBio.className = "card-text";
    var contentBioText = document.createTextNode("profileBio: " + profileBio)
    contentBio.appendChild(contentBioText)

    var contentProfileCreated = document.createElement("p");
    contentProfileCreated.className = "card-text";
    var contentProfileCreatedText = document.createTextNode("Profile Created: " + ProfileCreatedtime)
    contentProfileCreated.appendChild(contentProfileCreatedText)

    var contentUpdatedT = document.createElement("p");
    contentUpdatedT.className = "card-text";
    var contentUpdatedTText = document.createTextNode("profileEmail: " + profileUpdatedtime)
    contentUpdatedT.appendChild(contentUpdatedTText)

    var buttonEdit = document.createElement('button')
    buttonEdit.className = "btn btn-primary";
    buttonEdit.id = profileId;
    buttonEdit.textContent = "Edit Bio";

    var formInputBio = document.createElement("input");
    formInputBio.type = "text";
    formInputBio.name = "bio";
    formInputBio.id = "bio"+profileId;
    formInputBio.placeholder = "Bio here";


    editForm.innerHTML = `<label for="bio">Bio</label>
    <input type="text" name="bio" id="bio">
    <label for="email">Email</label>
    <input type="text" name="email" id="email">
    <label for="name">Name</label>
    <input type="text" name="name" id="name">
    <label for="bio">Occupation</label>
    <input type="text" name="occupation" id="occupation">
    <button type="submit" id="${profileId}">Edit</button>`

    

    // var profileData = document.createTextNode("Profile occupation: " + profileOccupation + "Profile Email: " + profileEmail + "Profile bio: " + profileBio)
    // addTag.appendChild(profileData)
    var formEditing = editForm.appendChild(formInputBio)
    return profiles.append(addTag,addTagCard,headName,content,contentEmail,contentBio,contentProfileCreated,contentUpdatedT,buttonEdit,formEditing)
    // addTag.class = 'col-md-4';
    // return profiles.innerHTML = `<div id="col-md-4"><div class="card"><div class="card-body"><h5 class="card-title">${profileName}</h5><p class="card-text">Occupation:${profileOccupation} Email:${profileEmail} Bio:${profileBio} Time Profile Created:${ProfileCreatedtime} Updated at: ${profileUpdatedtime}</p><button type="button" class="btn btn-primary" id="${profileId}">Button</button></div></div></div>`

}

function getProfiles() {
    var http = new XMLHttpRequest()

    http.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var response = JSON.parse(this.responseText)

                for (i = 0; i < response.length; i++) {
                    addProfiles(response[i].id, response[i].name, response[i].occupation, response[i].email, response[i].bio, response[i].created_at, response[i].updated_at)
                    // console.log(response[i].id, response[i].name, response[i].occupation, response[i].email, response[i].bio, response[i].created_at, response[i].updated_at)
                }
            }
        }
    }

    http.open('GET', 'https://ti-react-test.herokuapp.com/users', true)
    http.send()
}

function patchProfile(){
    var http = new XMLHttpRequest()

    http.open('PATCH','https://ti-react-test.herokuapp.com/users/36',true)
    var data = JSON.stringify({
        "bio":"Hi i am js dev",
        "email":"js@programmer.ke",
        "occupation": "Developer",
    })
    http.send(data)
}

getProfiles();

// patchProfile();
// addProfiles();

*/



/******************************************************
 * TODO LIST IMPLEMENTING BOTH GET AND POST APIS VANILLA JS
 * 
 
var inputItem = document.getElementById("add-item");
var list = document.getElementById("todo-list");
var addItemButton = document.getElementById("btn-add");

addItemButton.addEventListener("click",function(e){
    e.preventDefault();
    // var elementList = document.createElement("li");
    // var item = document.createTextNode(inputItem.value);
    // elementList.appendChild(item)
    // list.appendChild(elementList);
    postTodoItems();
})


function appendItems(listItem){
    var elementList = document.createElement("li");
    var item = document.createTextNode(listItem);
    elementList.appendChild(item)
    list.appendChild(elementList);
}


function getTodoItems(){
    var http = new XMLHttpRequest();
    
    http.onreadystatechange = function(){

        if(this.readyState === 4){
            var response = JSON.parse(this.responseText)

            for(i=0 ; i < response.length ; i++){
                appendItems(response[i].title)
                // console.log(response[i])
            }
        } 
    }

    http.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    http.send();
}

function postTodoItems(){
    var http = new XMLHttpRequest();
    
    http.onreadystatechange = function(){

        if(this.readyState === 4){
            var response = JSON.parse(this.responseText)
            appendItems(inputItem.value)
        }
    }

    http.open('POST','https://jsonplaceholder.typicode.com/todos',true)
    var data = JSON.stringify({
        "title": inputItem.value
    })
    http.send(data)
}

getTodoItems();

***************************************************************************/




/**************************************************************************
 * JQUERY REFRESH
 * ABOVE TODO LIST REWRITTEN WITH JQUERY


$(document).ready(function(){
    var addItem = $("#add-item")
    var list = $("#todo-list")
    var addButton = $("#btn-add")
    

    $.get("https://jsonplaceholder.typicode.com/todos",function(data,status){
        for(i = 0 ; i < data.length ; i++){
            list.append("<li>" + data[i].title + "</li>")
        }
        
    })

    var postData = {
        "title": addItem.val()
    }


    addButton.click(function(e){
        e.preventDefault()

        $.post("https://jsonplaceholder.typicode.com/todos", postData ,function(data,status){
            
            list.append("<li>" + addItem.val() + "</li>")

    })
    })
    
})


*****************************************************************************************/


// $(document).ready(function(){
    // var list = $('#todo-list')
    // var addItem = $('#add-item')
    // var  list = $('#todo-list')
    // var justAnElement = "<li>Make a change</li>"
    // list.append(justAnElement)//can also append multiple elements

    // var elementList = $('#first-thing').html()
    // console.log(elementList)
    //Remove elements using JQuery
    // list.remove();
    // Method chaining in jquery
    // $('li').first().remove() remove item from first position
    // $('li').last().remove() removes item from last position
    // $('li').eq(0).remove() removes item from specified position

    //.css() method jquery
    //check specific style
    // console.log($('li').css('font-size'))
    //add style to elements
    // $('li').css('font-size','40px')
    //multiple styles pass object
    // $('li').css({
    //     'font-size':'40px',
    //     'color': 'blue',
    // })
    //addClass()
    // $('body').addClass('dark-mode')

    // setTimeout(function(){
    //     $('body').removeClass('dark-mode')
    // },1000)

    //toggle class
    // setInterval(function(){
    //     $('body').toggleClass('dark-mode')
    // },2000)

    //HTML events
    // $('#btn-add').click(function(){
    //    //code here after button
    // })

// })

/***********************************************************************************8
 * Regex101.com
 * 
 * [] => range
 * 
 * [A-Z] => words that start with any word in range
 * 
 * [A-Z]ame => words macthing the partern either ending start
 * 
 * [0-9] => Numbers
 * 
 * [a-z][0-9] => alphabet followed by numbers
 *  
 */


/********************************************************************
 * ES6 refresh Prep for React Js
 * 
 * Babel Preprocesser converts es6 for backwards compatability
 * 
 * let const
 * 
 * Hoisting is unsupported
 * 
 * Template strings
 * 
 * backticks
 * const name = "john"
 * const greetings = `Hello ${name}`
 * 
 * functions can also be called
 * e.g 
 * const moreGreetings = `Hello ${yourName()}` 
 * 
 * Arrow Functions
 * const greetings = name = return `Hello ${name}`
 * 
 * Rest and Spread Operator
 *
 * REST OPERATOR

const mSum = (...args) => {
    sum = 0;
    for(let i = 0 ; i < args.length; i++){
        sum += args[i]
    }
    return sum
}

console.log(mSum(1,2,3,4,5,6,7))

*
*Spread Operator

allows working with objects and arrays

let array1 = [0,1,2,3,4]
let array2 = [...array1]

join arrays

let array1 = [0,1,2,3,4]
let array2 = [5,6,7,8,9]

let array3 = [...array1,...array2]
console.log(array3)

can also join two objects


ES6 Destructuring

map() function
iterates array for us inorder to pass a callback function 
to perform some operations for us returning the new array

e.g 
currentArray = [0,1,3,4,5,6,7]

let newArr = currentArray.map(data,pos) => {
    console.log(`item at pos: ${pos} is ${data}`);
    return data * 2;
}

reduce() function


const array1 = [1,2,3,4,5,6,7]

let array2 = array1.reduce((acc,item) => {
    // console.log(item);
    // console.log(acc);
    return acc + item
})

console.log(array2)

filter() function
Returns new array based on some conditions if true
e.g

returns an array of even numbers


const oldArray = [0,1,2,3,4,5,6,7]
const newArray = oldArray.filter(item => {
    return item % 2 === 0;
})

console.log(newArray)

find() and findIndex() functions
search functions
find() -> returns element that matches the condition
findIndex() -> returns index that matches the condition


const newArray = [-1,-2,-3,-4,1,2,3,4]

let conditionTrue = newArray.findIndex(item => {
    return (item % 3 === 0 && item > 0 );
})

console.log(conditionTrue)

classes in ES6



class Person {
    constructor(name,yob){
        this.name = name;
        this.yob = yob;
    }

    getDetails = () => {
        return `Hi there ${this.name} your age is ${2021 - this.yob}`
    }
}

// let citizen = new Person("bill",1990);

// console.log(citizen.getDetails())

//Inheritance



class Pilot extends Person{
    constructor(name,yob,experience,craft){
        super(name,yob);
        this.experience = experience
        this.craft = craft
    }

    getData = () => {
        return `Name: ${this.name}  Years of experience: ${this.experience}yrs aircraft type: ${this.craft}`;
    }
}

let pilot1 = new Pilot("bill",1998,23,"Boeing")

console.log(pilot1.getData())

callback hell and promises
states of promises
Pending
Fulfilled
Rejected

Using Promises
Syntax
const workPromise = new Promise((resolve,reject)=>{
    promise body
    call resolve() when operation is complete
    call reject() when the operation is failed
})


const workPromise = new Promise((resolve,reject)=>{ 
    $.get("https://jsonplaceholder.typicode.com/posts",(data)=> {
        // console.log(data);
        resolve(data)

    }).fail(err => {
        console.log(err)
        reject(`Get Posts Failed with ${err.status}`)
    })
})

workPromise
.then(response=> {
    console.log(response)
})
.catch(error => {
    console.log("error from promise",error)
})


Working with axios makes it easier
*/