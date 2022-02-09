var player1 = "Player 1";
var player2 = "Player 2";

function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change Player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}
function rollTheDice(){
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random()*6)+1;
        var randomDiceImage = "dice" + randomNumber1 + ".png";
        var randomImageSource = "images/" + randomDiceImage;
        var image1 = document.querySelectorAll("img")[0];
        image1.setAttribute("src", randomImageSource);

        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = player1 + " Won!";
        }
        else if(randomNumber2 > randomNumber1) {
            document.querySelector("h1").innerHTML = player2 + " Won!";
        }
        else{
            document.querySelector("h1").innerHTML = "Draw!";
        }
    } ,500);
}
