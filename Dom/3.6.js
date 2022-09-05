const h1 = document.querySelector("div>h1");

console.log(h1);
function handleMouseClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue")
    newColor = "tomato";
    else
    newColor = "blue";
    
    h1.style.color = newColor;
}

h1.addEventListener("click",handleMouseClick);

