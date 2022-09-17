const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);z 
    const username = loginInput.value;
    localStorage.setItem("username",username);
    greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello  + ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

loginForm.addEventListener("submit", onLoginSubmit )
