"use strict";

window.onload = init;



function init(){
    const googleBtn = document.getElementById("googleBtn");
    googleBtn.onclick = googlebtnOnClick;

    const W3Schoolbtn = document.getElementById("W3Schoolbtn");
    W3Schoolbtn.onclick = W3SchoolbtnOnClick;

    const imagebtn = document.getElementById("imagebtn");
    imagebtn.onclick = imagebtnOnClick;


}

function googlebtnOnClick(){
    window.open("https://www.google.com/");
}
 
function W3SchoolbtnOnClick (){
    window.open("https://www.w3schools.com/js/");
}

function imagebtnOnClick (){
    window.open("images.html");
}
