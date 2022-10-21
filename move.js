var interval;
function move(speed){
    var rover=document.getElementById("rotated");
    var left=0;
    interval=setInterval(function()
    {
        var speed2=parseInt(speed)
        left+=speed2/5;
        rover.style.left=left+"px";
        display(left)
        if(left>=1000){         
            clearInterval(interval)
            document.getElementById("start").disabled=false;
            document.getElementById("stop").disabled=true;
        }
    },10);
}

function start(){
    var speed = document.getElementById("speed").value;
    if (speed<=3){
        document.getElementById("rotated").style.background="red"
    }
    else if (speed>3&&speed<=7){
        document.getElementById("rotated").style.background="yellow"
    }
    else {
        document.getElementById("rotated").style.background="green"
    }
    move(speed);
    document.getElementById("start").disabled=true;
    document.getElementById("stop").disabled=false;
}

function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled=false;
    document.getElementById("stop").disabled=true;
}