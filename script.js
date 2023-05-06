function rollDice(dice) {
    let number = Math.floor(Math.random() * 4) + 1;
    document.getElementById("dice" + dice).innerHTML = number;
    let diceValue = number;
    calculateResult();
    alert("zar" + dice + "=" + diceValue);
}


function getLetter(number) {
    switch (number) {
      case 1:
        return "o";
      case 2:
        return "oo";
      case 3:
        return "ooo";
      case 4:
        return "oooo";
      default:
        return "-";
    }
  }
  

function calculateResult() {
    let dice1 = parseInt(document.getElementById("dice1").innerHTML);
    let dice2 = parseInt(document.getElementById("dice2").innerHTML);
    let dice3 = parseInt(document.getElementById("dice3").innerHTML);
    let total = dice1 + dice2 + dice3;
    document.getElementById("result").innerHTML = "Sonuç: " + total;
    let letter1 = getLetter(dice1);
    let letter2 = getLetter(dice2);
    let letter3 = getLetter(dice3);
    let letters = letter1 + " " + letter2 + " " + letter3;
    document.getElementById("result").innerHTML += "<br>Harfler: " + letters;
    if (letter1 == "o" && letter2 == "o" && letter3 == "o") {
        // Final değerini ekrana yazdır
        document.getElementById("result").innerHTML += "<br>Fal: Beyaz alacalı doğan kuşuyum. Sandal ağacı üzerinde oturup eğlenirim.”, demiş. Bilin ki bu.. ";
    }
}