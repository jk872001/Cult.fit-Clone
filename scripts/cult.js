import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("icon").addEventListener("click",()=>{
    window.location.href = "index.html";
});

document.getElementById("userPic").addEventListener("click",()=>{
    window.location.href = "profile.html";
});