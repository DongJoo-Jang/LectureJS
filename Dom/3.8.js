const h1 = document.querySelector("div>h1");

function handleMouseClick(){
    const clickedClass = "clicked";
h1.classList.toggle(clickedClass);
}

h1.addEventListener("click",handleMouseClick);

