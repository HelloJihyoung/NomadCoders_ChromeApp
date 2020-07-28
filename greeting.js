const form = document.querySelector(".js-form"), //gets the first one that he finds 
// + querySelectorAll gets elements by class name -> this gives us array
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")

const User_LS = "currentUser",
    Showing_ClassName = "showing";


function askForName(){
    form.classList.add(Showing_ClassName);
}

function paintGreeting(text){
    form.classList.remove(Showing_ClassName);
    greeting.classList.add(Showing_ClassName);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(User_LS);
    if(currentUser === null){

    } else {
        paintGreeting(currentUser);
    }
} 
function init(){
    loadName();
}

init();