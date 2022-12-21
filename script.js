var y = Math.floor(Math.random() * 100 + 1);
var guess = 1;
  
document.getElementById("submitButton").onclick = function(){
var x = document.getElementById("userInput").value;

if(x == y) {    
            document.getElementById('response').innerHTML = 'Congratulations! You guessed correctly in ' + guess + ' tries!';
            document.getElementById('again').style.visibility = 'visible';
        } else if (x < y) {
            guess++;
            document.getElementById('response').innerHTML = 'Your guess is too low! Guess again!';
      } else if (x > y) {
            guess++;
            document.getElementById('response').innerHTML = 'Your guess is too high! Guess again!';
      }
    }

    function refresh() {
        document.location.reload(true);
    }

    
    
    
