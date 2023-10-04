var timer = 60;
var score=0;
var hitrn=0;

function incrementscore(){
     score +=10;
     document.querySelector(".incscr").textContent=score;   
}


function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent=hitrn;
}
getNewHit();


function makebubble(){
    var clutter = "";

    for(var i=1;i<=180;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector(".pbtm").innerHTML=clutter;
}
makebubble();


function runtimer(){
    var timerint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timer").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML=`<div><h1> GAME OVER</h1> <h1>Your Score:${score}</h1></div>`;
        }
        
    },1000);
}
runtimer();

document.querySelector(".pbtm").addEventListener("click",function(dets){
        var clickedNumber = Number(dets.target.textContent);
        console.log(clickedNumber)
        if(clickedNumber==hitrn){
            incrementscore();
            makebubble();
            getNewHit();
        }
})









