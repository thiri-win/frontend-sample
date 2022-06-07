const toggle = document.querySelector(".toggle");
const navbarmenu=document.querySelector(".navbar-menu");

toggle.onclick=()=>navbarmenu.classList.toggle("active");

const up=document.querySelector("#up");
up.onclick=()=>window.scrollTo({top:0, behavior: "smooth"});