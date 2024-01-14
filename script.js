let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let randombtn =["red","green","yellow","blue"];
let h2=document.querySelector('h2');

document.addEventListener("keypress",function() {
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
}
);

function levelUp() {
    userseq=[];
    level++;
    h2.innerHTML=`Level ${level}`;
    randindex=Math.floor(Math.random()*3);
    color=randombtn[randindex];
    let btn=document.querySelector(`.${color}`);
    btnFlash(btn);
    gameseq.push(color);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userbtn(){
    let btn = this;
    btnFlash(btn);
    color=btn.getAttribute("id");
    userseq.push(color);
    gamecheck(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",userbtn);
}
 function gamecheck(idx){
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
           setTimeout(levelUp,1000); 
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },1000);
        reset();
    }
 }
 function reset(){
        started=false;
        level=0;
        gameseq=[];
        userseq=[];
 }

