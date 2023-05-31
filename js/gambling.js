function rollDice() {

    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var total = dice1 + dice2;

    var resultText = "Dice #1: " + dice1 + "<br>Dice #2: " + dice2 + "<br>Total: " + total;

    if (total >= 7 || total === 11) {
      resultText += "You win!";
    } else {
      resultText += "You lose!";
    }
    document.getElementById("result").innerHTML = resultText;
  }