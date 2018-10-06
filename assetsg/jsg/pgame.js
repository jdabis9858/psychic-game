

var wins = 0
var losses = 0
var guess = ""
var compnmbr = ""
 

document.getElementById("start").onclick = function() { 

    var compnmbr = Math.floor((Math.random() * 3) + 1);

    guess = prompt("what is your guess?");

    document.getElementById("guess2").innerHTML = guess;

    console.log(compnmbr)
    
    if (compnmbr == guess) {
         alert("you win");
        wins = wins + 1;
        document.getElementById("wins2").innerHTML = wins;
        document.getElementById("past").innerHTML = guess;
        console.log(wins)
        
    }
    else {
        alert("you lose");
        losses = losses + 1;
        document.getElementById("losses2").innerHTML = losses;
        document.getElementById("past").innerHTML = guess;
        
    }

    
     
    
 }
 


    






