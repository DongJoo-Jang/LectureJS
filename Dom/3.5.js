const h1 = document.querySelector("div>h1");

console.log(h1);
function handleMouseClick(){
    h1.style.color = "red";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"; 
}

function handlwWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD")
}

h1.addEventListener("click",handleMouseClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handlwWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

