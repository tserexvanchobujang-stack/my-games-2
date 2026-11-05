let secretNumber=86;
function checkGuess(){
    let guess=
    Number(document.getElementById("guess").value);
    if(guess===0||guess===""){
        document.getElementById("result").innerHTML="please enter a number!";
    }
    else if (guess==secretNumber){
        document.getElementById("result").innerHTML="Congratulations! You guessed the number!";
    }
    
    else if (guess<secretNumber){
        document.getElementById("result").innerHTML="too low! try again";
    }
    else{
        document.getElementById("result").innerHTML="too high! try again"
    }
}