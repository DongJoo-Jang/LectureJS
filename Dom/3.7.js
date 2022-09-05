const h1 = document.querySelector("div>h1");

function handleMouseClick(){
    const clickedClass = "clicked"
if(h1.className === clickedClass){
    h1.className="";
}
else{
    h1.className = clickedClass;
}


}

h1.addEventListener("click",handleMouseClick);

