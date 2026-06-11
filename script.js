/******************************
 Name of task: Maths
 ******************************/


//Variables 
let username ;
let year = 2026;
let age = 28;
let money = 20;
let birthYear;
let oldAge;
oldAge = age + 10;
birthYear = year - age;
let halfMoney = money / 2;

let OUTPUT = document.getElementById("javaScriptOutput");

function welcome(){
  OUTPUT.innerHTML += "<p>Welcome to the page "+username+"</p>";
}


function displayProduct(_name,_price){
  OUTPUT.innerHTML += "<p>The product "+_name+" costs "+_price+" pounds</p>";
}
function getFormInput(){
  const NAME_FIELD = document.getElementById("nameField");
  username = NAME_FIELD.value;





/******************************
 Main code
 ******************************/


console.log("Hello world");
  OUTPUT.innerHTML = "<p>Welcome to the page "+username+"</p>";
  OUTPUT.innerHTML += "<p>You are "+age+" years old</p>";

welcome();
}


