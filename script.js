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
        return "1";
      case 2:
        return "2";
      case 3:
        return "3";
      case 4:
        return "4";
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
    let atis1 = getLetter(dice1);
    let atis2 = getLetter(dice2);
    let atis3 = getLetter(dice3);
    let letters = atis1 + " " + atis2 + " " + atis3;
    document.getElementById("result").innerHTML += "<br>Harfler: " + letters;
    if (atis1 == "2" && atis2 == "2" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>“Tanrı’nın oğluyum, hakanım. Gece gündüz altın tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "3" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>“Tanrı’nın oğluyum, hakanım. Gece gündüz gümüş tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "4" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>“Tanrı’nın oğluyum, hakanım. Gece gündüz bakır tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "1" && atis2 == "1" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>“Tanrı’nın oğluyum, hakanım. Gece gündüz demir tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "2" && atis2 == "2" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>“Tanrı’nın oğluyum, hakanım. Gece gündüz altın tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "2" && atis2 == "3" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>“Tanrı’nın oğluyum, hakanım. Gece gündüz altın tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "4" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>“Tanrı’nın oğluyum, hakanım. Gece gündüz gümüş tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "4" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>“Tanrı’nın oğluyum, hakanım. Gece gündüz bakır tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "1" && atis2 == "1" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>“Tanrı’nın oğluyum, hakanım. Gece gündüz demir tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "1" && atis2 == "4" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>“Tanrı’nın oğluyum, hakanım. Gece gündüz demir tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "2" && atis2 == "3" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>“Beyaz alacalı doğan kuşuyum. Sandal ağacı üzerinde oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "4" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>“Beyaz alacalı doğan kuşuyum. Sandal ağacı üzerinde oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "4" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>“Beyaz alacalı doğan kuşuyum. Sandal ağacı üzerinde oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "1" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>“Beyaz alacalı doğan kuşuyum. Sandal ağacı üzerinde oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "3" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>“Beyaz alacalı doğan kuşuyum. Sandal ağacı üzerinde oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "3" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>“Beyaz alacalı doğan kuşuyum. Sandal ağacı üzerinde oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "4" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>“Beyaz alacalı doğan kuşuyum. Sandal ağacı üzerinde oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "2" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>“Beyaz alacalı doğan kuşuyum. Sandal ağacı üzerinde oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 != "" || atis2 != "" || atis3 != "") {
      // Eğer zarların değerleri tabloda olmayan bir kombinasyon ise
      document.getElementById("result").innerHTML += "<br>Diğer zarları da atınız.";
    }
}
