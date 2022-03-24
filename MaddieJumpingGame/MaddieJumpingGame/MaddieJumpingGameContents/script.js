var character = document.getElementById("character");
var block = document.getElementById("block");
var bugImage = document.getElementById("bug");

function jump(){
    if(character.classList.contains("animate")){return} 
    character.classList.add("animate");
    
    setTimeout(()=>{
        character.classList.remove("animate");
        },500);
}


function delayStart() {
    if(block.classList.contains("tempPause")) {return}
    if(block.classList.contains("startBlock")) {return}
    block.classList.add("tempPause");
    bugImage.classList.add("tempPause");
    setTimeout(()=> {
        block.classList.remove("tempPause");
    },1200);
}



setInterval(function movementBegin() {
    if(block.classList.contains("tempPause")){return}
    if(block.classList.contains("startBlock")){return}
    block.classList.add("startBlock");
},1200);

var hitBox = setInterval(function() {
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<40 && blockLeft>20 && characterTop>=130) { 
        block.style.animation = "none";
        block.style.display = "none";
        if(!alert("Oh no! You've succumbed to the bugs :'(")){window.location.reload();}
    }
},10);

var img = ["bugFolder/bug1.png","bugFolder/bug2.png","bugFolder/bug3.png","bugFolder/bug4.png","bugFolder/bug6.png","bugFolder/bug8.png"]
function imgRandom(imgArr) {
        return imgArr[Math.floor(Math.random()*imgArr.length)];
    }


setInterval(function randomBugChoice() {
    if(bugImage.classList.contains("imageChosen")) {return}
    bugImage.classList.add("imageChosen");
    bugImage.src=imgRandom(img);
    setTimeout(()=> {
        bugImage.classList.remove("imageChosen");
    },1200);
},1);

  /*  
setInterval(function() {
    bugImage.src = imgRandom(img);
},200);
*/


/*
setInterval(function changeBug() {
    bugImage.src="bugFolder/bug2.png";
},300);
*/


/*
var img = document.createElement("img");
img.src = "bugFolder/bug2.png";
var div = document.getElementById("x");
div.appendChild(img);

*/