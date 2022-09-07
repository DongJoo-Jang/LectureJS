const loginForm = document.querySelector("#login-form");
const logininpput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){
console.log("hello", logininpput.value);
}

loginButton.addEventListener("click",onLoginBtnClick);