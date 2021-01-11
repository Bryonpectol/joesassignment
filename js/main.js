let h1head = document.getElementById("h1head");

let h2head = document.createElement("h2");

let toDay = document.getElementById("date");

let skills = document.getElementById("skillsul");

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

let promptAns = document.getElementById("namePrompt");


function yourName() {
    let Prompt = prompt("Please Enter Your Full Name:", "Joe Smith");

    promptAns.innerHTML = "Welcome to Joe's Bed and Breakfast, " + Prompt + ".";
}


let today = new Date();

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
toDay.innerHTML = "Today's date: " + today;

li1.className = "skillsli";
li2.className = "skillsli";
li3.className = "skillsli";

h1head.innerHTML = "Joe's Bed and Breakfast";
h2head.innerHTML = "Have the Night of Your Life @ Joe's Bed and Breakfast!";


li1.innerHTML = "I used the Date() function with the getDate(), getMonth(), and getFullYear() functions to display the current date.";
li2.innerHTML = "I also used the createElement() and the getElementById() functions to grab elements from the html file and to create new html elements.";
li3.innerHTML = "Lastly, I used a Prompt to get the user's name after clicking the button, then I used the yourName() function to display the welcome message.";


h1head.appendChild(h2head);
skills.appendChild(li1);
skills.appendChild(li2);
skills.appendChild(li3);


