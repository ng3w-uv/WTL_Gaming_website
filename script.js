
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
