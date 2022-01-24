function check(form){
    var x=Math.round(Math.random()*10)
    var y=Math.round(Math.random()*10)
    var z=Math.round(Math.random()*10)
    if(form.out.value=="Lost! Let's try again"){
        form.out.value=""
    }
    else if(x==form.num.value || y==form.num.value || z==form.num.value){
        form.preview.src="win.gif"
        form.out.value="Yeah! Won"
    }
    else{
        form.preview.src="lost.gif"
        form.out.value="Lost! Let's try again"
    }
}

function ghostgame(z){

    if(ghost1.src=="ghostwin.gif" || ghost2.src=="ghostwin.gif" || ghost3.src=="ghostwin.gif" || ghost4.src=="ghostwin.gif" || ghost5.src=="ghostwin.gif"){
        ghost1.src="ghost.gif"
        ghost2.src="ghost.gif"
        ghost3.src="ghost.gif"
        ghost4.src="ghost.gif"
        ghost5.src="ghost.gif"
    }
    else if(ghost1.src=="ghostlose.gif" || ghost2.src=="ghostlose.gif" || ghost3.src=="ghostlose.gif" || ghost4.src=="ghostlose.gif" || ghost5.src=="ghostlose.gif"){
        ghost1.src="ghost.gif"
        ghost2.src="ghost.gif"
        ghost3.src="ghost.gif"
        ghost4.src="ghost.gif"
        ghost5.src="ghost.gif"
    }
    else{
        var ghosts=new Array("ghost1", "ghost2", "ghost3", "ghost4", "ghost5")
        var y=ghosts[Math.floor(Math.random()*ghosts.length)]
        if(y==z){
            if(z=='ghost1') 
            {
                ghost1.src="yes.gif"
                setTimeout(() => {
                    ghost1.src="ghostwin.gif"
                }, 500);
            }
            else if(z=='ghost2')
            {
                ghost2.src="yes.gif"
                setTimeout(() => {
                    ghost2.src="ghostwin.gif"
                }, 500);
            }
            else if(z=='ghost3')
            {
                ghost3.src="yes.gif"
                setTimeout(() => {
                    ghost3.src="ghostwin.gif"
                }, 500);
            }
            else if(z=='ghost4')
            {
                ghost4.src="yes.gif"
                setTimeout(() => {
                    ghost4.src="ghostwin.gif"
                }, 500);
            }
            else if(z=='ghost5')
            {
                ghost5.src="yes.gif"
                setTimeout(() => {
                    ghost5.src="ghostwin.gif"
                }, 500);
            }
        }
        else{
            if(z=='ghost1') 
            {
                ghost1.src="nope.gif"
                setTimeout(() => {
                    ghost1.src="ghostlose.gif"
                }, 500);
            }
            else if(z=='ghost2')
            {
                ghost2.src="nope.gif"
                setTimeout(() => {
                    ghost2.src="ghostlose.gif"
                }, 500);
            }
            else if(z=='ghost3')
            {
                ghost3.src="nope.gif"
                setTimeout(() => {
                    ghost3.src="ghostlose.gif"
                }, 500);
            }
            else if(z=='ghost4')
            {
                ghost4.src="nope.gif"
                setTimeout(() => {
                    ghost4.src="ghostlose.gif"
                }, 500);
            }
            else if(z=='ghost5')
            {
                ghost5.src="nope.gif"
                setTimeout(() => {
                    ghost5.src="ghostlose.gif"
                }, 500);
            }
        }
    }
}

function game3(){
var character = document.getElementById("character");
var game = document.getElementById("game");
var score=document.getElementById("score");
var interval;
var both = 0;
var counter = 0;
var currentBlocks = [];
game.style.borderColor="lightgreen";
game.style.borderStyle="solid";
score.style.borderColor="lightgreen";

function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0){
        character.style.left = left - 2 + "px";
    }
}
function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<380){
        character.style.left = left + 2 + "px";
    }
}
document.addEventListener("keydown", event => {
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            interval = setInterval(moveLeft, 1);
        }
        if(event.key==="ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
    }
});
document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});

var blocks = setInterval(function(){
    var blockLast = document.getElementById("block"+(counter-1));
    var holeLast = document.getElementById("hole"+(counter-1));
    if(counter>0){
        var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }
    if(blockLastTop<400||counter==0){
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block");
        hole.setAttribute("class", "hole");
        block.setAttribute("id", "block"+counter);
        hole.setAttribute("id", "hole"+counter);
        block.style.top = blockLastTop + 100 + "px";
        hole.style.top = holeLastTop + 100 + "px";
        var random = Math.floor(Math.random() * 360);
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
    }
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var drop = 0;

    if(characterTop <= 0){
        var s=counter-9;
        score.value=s;
        clearInterval(blocks);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    for(var i = 0; i < currentBlocks.length;i++){
        let current = currentBlocks[i];
        let iblock = document.getElementById("block"+current);
        let ihole = document.getElementById("hole"+current);
        let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
        iblock.style.top = iblockTop - 0.5 + "px";
        ihole.style.top = iblockTop - 0.5 + "px";
        if(iblockTop < -20){
            currentBlocks.shift();
            iblock.remove();
            ihole.remove();
        }
        if(iblockTop-20<characterTop && iblockTop>characterTop){
            drop++;
            if(iholeLeft<=characterLeft && iholeLeft+20>=characterLeft){
                drop = 0;
            }
        }
    }
    if(drop==0){
        if(characterTop < 480){
            character.style.top = characterTop + 2 + "px";
        }
    }else{
        character.style.top = characterTop - 0.5 + "px";
    }
},1);
}

function game4(z) {
    if(z=="rock"){
        rpsgame.src="rock.png";
    }
    else if(z=="paper"){
        rpsgame.src="paper.png";
    }
    else{
        rpsgame.src="scissor.png";
    }
    var element=new Array("rock", "paper", "scissor")
    var y=element[Math.floor(Math.random()*element.length)]

    if(y=="rock"){
        rps.src="rockleft.png";
    }
    else if(y=="paper"){
        rps.src="paperleft.png";
    }
    else{
        rps.src="scissorleft.png";
    }


    if(z==y){
        game4output.value='Draw';
    }
    else if(z=="rock" && y=="scissor"){
        game4output.value='Win';
    }
    else if(z=="paper" && y=="rock"){
        game4output.value='Win';
    }
    else if(z=="scissor" && y=="paper"){
        game4output.value='Win';
    }
    else{
        game4output.value='Lost';
    }
}
