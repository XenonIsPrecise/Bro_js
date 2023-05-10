// let age =21;
// let string = "Sujal";

// age += 2;


// let student = true;
// let string2 = string+12+"bangrajdj"
// console.log(age);
// console.log("Hello ",string);
// console.log()

// document.getElementById("p1").innerHTML = "1st paragraph " + age;

// document.getElementById("submit").onclick = function(){
//     let username = document.getElementById("fname").value;
//     document.getElementById("label").innerHTML = "Hello "+username;
// }

// // let username = window.prompt("Name ?")
// // console.log(username)
// let fname = document.getElementById("fname").innerHTML;

// document.getElementById("p2").innerHTML = "2nd Paragraph " + fname;

// let x = 21;
// let y = "4.034";

// y = Number(y);

// console.log(y,typeof y);

// const PI = 3.14;
// let radius;
// let circumferece;



document.getElementById("answer").onclick = function(){
    
    

    fside = document.getElementById("fside").value;
    sside = document.getElementById("sside").value;

    fside= Number(fside);
    sside= Number(sside);
    let x = Math.pow(fside,2);
    let y = Math.pow(sside,2);
    let answer = Math.sqrt(x+y);
    // let answer = Math.pow(((Math.pow(fside,2))+(Math.pow(sside,2))),0.5)
    document.getElementById("hypo").innerHTML = "The hypotonuse of the given triangle with sides "+fside+" and "+sside+" is "+answer+".";
}

let count = 0;

document.getElementById("decrease").onclick = function(){
    count-=1;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("increase").onclick = function(){
    count+=1;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count=0;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("random").onclick = function(){
    count=Math.floor(Math.random()*50 +1);
    document.getElementById("counter").innerHTML = count;
}

let phoneNumber = "416-985-6220";
phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);

let name1 = "Sujal Acharya";
let name2 = "Jamuna Sapkota";
let name3 = "Surya Acharya";
let name4 = "Sandesh Acharya";

console.log(`${name2} and ${name3} are parents of ${name1} and ${name4}`)

let space = name1.indexOf(" ");

let fname1 = name1.slice(0,space);
let lname1 = name1.slice(space+1);
console.log(fname1);
console.log(lname1);

let space2 = name2.indexOf(" ");

let fname2 = name2.slice(0,space2);
console.log(fname2);


function happy(user){
    
    console.log("Happy");
    console.log("Happy me");
    console.log("Happy you");
    console.log("Happy everyone");
    console.log("happy",user);
}

function show(){
    let user = "Sujal";
    happy(user);
}

show();

function checkAge(age){
    return age>=18 ? console.log("You are an adult"):console.log("You are not an adult");
}

checkAge(18);

const randomAnswer = Math.floor(Math.random()*10+1);
console.log(randomAnswer);
let guesses = 0;



document.getElementById("submitGuess").onclick= function(){
    let guessedAnswer= document.getElementById("guessNumber").value;
    guesses+=1;
    if(randomAnswer == guessedAnswer){
        document.getElementById("rightWrong").innerHTML = "You guessed right! with "+guesses+" guesses";
    }
    else if(randomAnswer>guessedAnswer){
        alert("too small");
    }
    else{
        alert("too big");
    }
    
}

let numArray = [1,2,3,4,5,6,7,8,9,0];
console.log(...numArray); //Spread Operator

let maximumNum= Math.max(...numArray);
console.log(maximumNum);


//Rest Parameters
let ab=1
let bc =2
let cd =3
let de = 4
let ef =5

function sum(...numbers){
    let total =0;
    for(let number of numbers)
    {
        total+=number;
    }
    return total;
}
console.log(sum(ab,bc,cd,de,ef))


//      CALL BACK !!!


function sum(x, y, callBack) {
    let result = x + y;
    if (typeof callBack === 'function') {
        callBack(result);
    } else {
        console.error('Error: callBack is not a function');
    }
}
// function sum(x,y, callBack){
//     let result = x +y;
//     callBack(result);
// }

function displayinConsole(result){
     console.log(result);
}

// // function dispalyDOM(result)
// // {
// //     console.log(result);
// // }

// // sum(7,8,dispalyDOM);
sum(2,3,displayinConsole);




// radius = window.prompt("Enter the radius: ");
// radius = Number(radius);

// circumferece = 2* PI* radius;
// console.log(circumferece);



// Array.map
let samplenum=[1,2,3,4,5,6,7,8,9];

function square(element){
    return Math.pow(element,2);
}
let squares = samplenum.map(square);

function print(element){
    console.log(element);
}
console.log()
squares.forEach(print);

const greeting = (username) =>{console.log(`Hello ${username}.`)};
greeting("Sujal");

const percent = (x,y) => x/y*100;
console.log(percent(5,100));

var nummArray = [140000, 104, 99];
nummArray.sort(function(a, b) {
  return a - b;
});

console.log(nummArray);
nummArray.forEach(print);

let grades = [10,40,50,100,45,65]
grades.sort((a,b) => a-b);
grades.forEach((element)=>console.log(element));

cards=["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"]
shuffle(cards);

// function shuffle(array)
// {
//     let choice = Math.floor(Math.random()*13-1);
//     console.log(array[choice]);
// }

function shuffle(array){
    let currentIndex = array.length;
    while(currentIndex != 0)
    {
        let randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex-=1;

        let temp= array[currentIndex];
        console.log(temp);
        array[currentIndex]=array[randomIndex];
        console.log(array[currentIndex]);
        array[randomIndex]=temp;
    }
    return array;
}

cards.forEach(card=>console.log(card));