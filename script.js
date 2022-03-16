let randonNum;
let place = () => {
    for (let index = 1; index <= 100; index++) {
        document.getElementById(index).innerHTML = index;
        console.log(index);
    }
}
place();
// randomRollDice
let count = 0;
let dicePic = ["./img/d1.png", "./img/d2.png", "./img/d3.png", "./img/d4.png", "./img/d5.png", "./img/d6.png"];
let randomDice = () => {
    randonNum = Math.floor(Math.random() * 5);
    document.getElementById("dice").src = dicePic[randonNum];
    if (count % 2 == 0) {
        document.getElementById("playerOne-turn").style.background = "blue";
        document.getElementById("playerOne-turn").style.color = "white";
        document.getElementById("one").style.color = "white";
        document.getElementById("playerTwo-turn").style.background = "white";
        document.getElementById("two").style.color = "red";
        document.getElementById("playerTwo-turn").style.color = "black";
        playerOne();
    } else {
        document.getElementById("playerTwo-turn").style.background = "red";
        document.getElementById("playerTwo-turn").style.color = "white";
        document.getElementById("two").style.color = "white";
        document.getElementById("playerOne-turn").style.background = "white";
        document.getElementById("one").style.color = "blue";
        document.getElementById("playerOne-turn").style.color = "black";
        playerTwo();
    }
    count++;
}

let playerOne = () => {
    let currentPosition = 0;
    let currentDiceNum = randonNum + 1;
    console.log(currentDiceNum);
    currentPosition += currentDiceNum;
    console.log(currentPosition);
    switch (10) { //currentPosition //
        case 1:
            document.getElementById("pointOne").style.left = "145px";
            window.alert("1");
            break;
        case 2:
            document.getElementById("pointOne").style.left = "225px";
            window.alert("2");
            break;
        case 3:
            document.getElementById("pointOne").style.left = "300px";
            window.alert("3");
            break;
        case 4:
                document.getElementById("pointOne").style.left = "360px";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "355px";
            document.getElementById("pointOne").style.top = "10%";
            document.getElementById("pointOne").style.left = "360px";
            document.getElementById("pointOne").style.top = "-10%";
            document.getElementById("pointOne").style.left = "365px";
            document.getElementById("pointOne").style.top = "-20%";
            document.getElementById("pointOne").style.left = "370px";
            document.getElementById("pointOne").style.top = "-30%";
            document.getElementById("pointOne").style.left = "380px";
            document.getElementById("pointOne").style.top = "-40%";
            document.getElementById("pointOne").style.left = "385px";
            document.getElementById("pointOne").style.top = "-65%";
            document.getElementById("pointOne").style.left = "390px";
            document.getElementById("pointOne").style.top = "-95%";
            document.getElementById("pointOne").style.left = "420px";
            document.getElementById("pointOne").style.top = "-120%";
            }, 500);
            
            currentPosition = 25;
            console.log(currentPosition);
            break;
        case 5:
            document.getElementById("pointOne").style.top = "28%";
            document.getElementById("pointOne").style.left = "460px";
            window.alert("5");
            break;
        case 6:
            document.getElementById("pointOne").style.left = "550px";
            window.alert("6");
            break;
        case 7:
            document.getElementById("pointOne").style.left = "630px";
            window.alert("7");
            break;
        case 8:
            document.getElementById("pointOne").style.left = "710px";
            window.alert("8");
            break;
        case 9:
            document.getElementById("pointOne").style.left = "790px";
            window.alert("9");
            break;
        case 10:
            document.getElementById("pointOne").style.left = "865px";
            window.alert("10");
            break;
        case 11:
            document.getElementById("pointOne").style.left = "770px";
            document.getElementById("pointOne").style.top = "-50px";
            window.alert("11");
            break;
        case 12:
            document.getElementById("pointOne").style.left = "700px";
            document.getElementById("pointOne").style.top = "-50px";
            window.alert("12");
            break;
        case 13:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-335px";
            document.getElementById("pointOne").style.left = "770px";
            currentPosition = 51;
            window.alert("13");
            break;

        case 14:
            document.getElementById("pointOne").style.left = "560px"
            document.getElementById("pointOne").style.top = "-50px";
            window.alert("14");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "490px";
            document.getElementById("pointOne").style.top = "-50px";
            window.alert("15");
            break;
        case 16:
            document.getElementById("pointOne").style.left = "415px";
            document.getElementById("pointOne").style.top = "-50px";
            window.alert("16");
            break;
        case 17:
            document.getElementById("pointOne").style.left = "355px";
            document.getElementById("pointOne").style.top = "-50px";
            window.alert("17");
            break;
        case 18:
            document.getElementById("pointOne").style.left = "280px";
            document.getElementById("pointOne").style.top = "-50px";
            window.alert("18");
            break;
        case 19:
            document.getElementById("pointOne").style.left = "215px";
            document.getElementById("pointOne").style.top = "-50px";
            window.alert("19");
            break;
        case 20:
            document.getElementById("pointOne").style.left = "145px";
            document.getElementById("pointOne").style.top = "-50px";
            window.alert("20");
            break;
        case 21:
            document.getElementById("pointOne").style.left = "";
            document.getElementById("pointOne").style.top = "-50px";
            window.alert("21");
            break;
        case 22:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 23:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 24:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
    }
}


let playerTwo = () => {
    let currentPosition = 0;
    let currentDiceNum = randonNum + 1;
    console.log(currentDiceNum);
    currentPosition += currentDiceNum;
    console.log(currentPosition);
    switch (1) {
        case 1:
            document.getElementById("1").innerHTML = '<ion-icon name="golf" id="pointOne"></ion-icon>';
            break;
        case 2:
            document.getElementById("2").innerHTML = '<ion-icon name="golf" id="pointOne"></ion-icon>';
            break;
        case 3:
            document.getElementById("3").innerHTML = '<ion-icon name="golf" id="pointOne"></ion-icon>';
            break;
        case 4:
            document.getElementById("4").innerHTML = '<ion-icon name="golf" id="pointOne"></ion-icon>';
            break;
        case 5:
            document.getElementById("5").innerHTML = '<ion-icon name="golf" id="pointOne"></ion-icon>';
            break;
        case 6:
            document.getElementById("6").innerHTML = '<ion-icon name="golf" id="pointOne"></ion-icon>';
            break;
        default:
            break;
    }
}