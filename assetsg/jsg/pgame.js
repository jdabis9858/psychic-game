

var wins = 0
var losses = 0
var guess = ""
var compnmbr = ""
var past = [];
 

document.getElementById("start").onclick = function() { 

    var compnmbr = Math.floor((Math.random() * 3) + 1);

    guess = prompt("what is your guess?");

    document.getElementById("guess2").innerHTML = guess;

    console.log(compnmbr)
    
    if (compnmbr == guess) {
         alert("you win");
        wins = wins + 1;
        document.getElementById("wins2").innerHTML = wins;
        past.push(guess);
        document.getElementById("past2").innerHTML = past;
        console.log(wins)
        
    }
    else {
        alert("you lose");
        losses = losses + 1;
        document.getElementById("losses2").innerHTML = losses;
        past.push(guess);
        document.getElementById("past2").innerHTML = past;
        
    }

    
     
    
 }
 


    






