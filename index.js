"use strict";

window.onload = init;



function init(){
    const googleBtn = document.getElementById("googleBtn");
    googleBtn.onclick = googlebtnOnClick;

    const W3Schoolbtn = document.getElementById("W3Schoolbtn");
    W3Schoolbtn.onclick = W3SchoolbtnOnClick;

    const imagebtn = document.getElementById("imagebtn");
    imagebtn.onclick = imagebtnOnClick;


    let groupImage = document.getElementsByClassName("imageGroup");
    let imageLength = groupImage.length;
    for(let i = 0; i < imageLength; i++) {
        groupImage[i].style.border = "thick solid red";
    }
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
