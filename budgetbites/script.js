const navmenu = document.querySelector(".navmenu");
const button = document.getElementById("menu");
button.addEventListener("click",()=>{
    navmenu.classList.toggle("show");
    button.classList.toggle('bx-x');
    

}
)