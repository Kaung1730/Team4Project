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
    switch (90) { //currentPosition //
        case 1:
            document.getElementById("pointOne").style.left = "155px";
            // window.alert("1");
            break;
        case 2:
            document.getElementById("pointOne").style.left = "235px";
            // window.alert("2");
            break;
        case 3:
            document.getElementById("pointOne").style.left = "315px";
            // window.alert("3");
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
                document.getElementById("pointOne").style.left = "470px";
            }, 500);

            currentPosition = 25;
            console.log(currentPosition);
            break;
        case 5:
            document.getElementById("pointOne").style.top = "28%";
            document.getElementById("pointOne").style.left = "480px";
            // window.alert("5");
            break;
        case 6:
            document.getElementById("pointOne").style.left = "560px";
            // window.alert("6");
            break;
        case 7:
            document.getElementById("pointOne").style.left = "640px";
            // window.alert("7");
            break;
        case 8:
            document.getElementById("pointOne").style.left = "720px";
            // window.alert("8");
            break;
        case 9:
            document.getElementById("pointOne").style.left = "800px";
            // window.alert("9");
            break;
        case 10:
            document.getElementById("pointOne").style.left = "875px";
            // window.alert("10");
            break;
        case 11:
            document.getElementById("pointOne").style.left = "870px";
            document.getElementById("pointOne").style.top = "-47px";
            // window.alert("11");
            break;
        case 12:
            document.getElementById("pointOne").style.left = "790px";
            document.getElementById("pointOne").style.top = "-47px";
            //window.alert("12");
            break;
        case 13:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-47px";
            setTimeout(() => {
                document.getElementById("pointOne").style.top = "-120px";
                document.getElementById("pointOne").style.left = "710px";
                document.getElementById("pointOne").style.top = "-180px";
                document.getElementById("pointOne").style.left = "770px";
                document.getElementById("pointOne").style.top = "-210px";
                document.getElementById("pointOne").style.left = "870px";
                document.getElementById("pointOne").style.top = "-270px";
                document.getElementById("pointOne").style.left = "810px";
                document.getElementById("pointOne").style.top = "-330px";
                document.getElementById("pointOne").style.left = "870px";
            }, 500);
            currentPosition = 51;
            // window.alert("13");
            break;
        case 14:
            document.getElementById("pointOne").style.left = "635px"
            document.getElementById("pointOne").style.top = "-47px";
            //window.alert("14");
            break;
        case 15:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-47px";
            //window.alert("15");
            break;
        case 16:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-47px";
            //window.alert("16");
            break;
        case 17:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-47px";
            //window.alert("17");
            break;
        case 18:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-47px";
            //window.alert("18");
            break;
        case 19:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-47px";
            //window.alert("19");
            break;
        case 20:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-47px";
            //window.alert("20");
            break;
        case 21:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-115px";
            //window.alert("21");
            break;
        case 22:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-115px";
            //window.alert("15");
            break;
        case 23:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-115px";
            setTimeout(() => {
            document.getElementById("pointOne").style.left = "290px";
            document.getElementById("pointOne").style.top = "-125px";
            document.getElementById("pointOne").style.left = "295px";
            document.getElementById("pointOne").style.top = "-160px";
            document.getElementById("pointOne").style.left = "280px";
            document.getElementById("pointOne").style.top = "-180px";
            document.getElementById("pointOne").style.left = "250px";
            document.getElementById("pointOne").style.top = "-210px";
            document.getElementById("pointOne").style.left = "235px";
            document.getElementById("pointOne").style.top = "-255px";
            }, 500);
            currentPosition = 42;
            //window.alert("15");
            break;
        case 24:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-115px";
            //window.alert("15");
            break;
        case 25:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-115px";
            //window.alert("15");
            break;
        case 26:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-115px";
            //window.alert("15");
            break;
        case 27:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-115px";
            //window.alert("15");
            break;
        case 28:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-115px";
            //window.alert("15");
            break;
        case 29:
            document.getElementById("pointOne").style.left = "790px";
            document.getElementById("pointOne").style.top = "-115px";
            //window.alert("15");
            break;
        case 30:
            document.getElementById("pointOne").style.left = "870px";
            document.getElementById("pointOne").style.top = "-115px";
            //window.alert("15");
            break;
        case 31:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-185px";
            //window.alert("15");
            break;
        case 32:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-185px";
            //window.alert("15");
            break;
        case 33:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-185px";
            //window.alert("15");
            break;
        case 34:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-185px";
            //window.alert("15");
            break;
        case 35:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-185px";
            //window.alert("15");
            break;
        case 36:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-185px";
            //window.alert("15");
            break;
        case 37:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-185px";
            //window.alert("15");
            break;
        case 38:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-185px";
            //window.alert("15");
            break;
        case 39:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-185px";
            //window.alert("15");
            break;
        case 40:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-185px";
            //window.alert("15");
            break;
        case 41:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-255px";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "160px";
                document.getElementById("pointOne").style.top = "-170px";
                document.getElementById("pointOne").style.left = "160px";
                document.getElementById("pointOne").style.top = "-140px";
                document.getElementById("pointOne").style.left = "160px";
                document.getElementById("pointOne").style.top = "-120px";
                document.getElementById("pointOne").style.left = "170px";
                document.getElementById("pointOne").style.top = "-100px";
                document.getElementById("pointOne").style.left = "200px";
                document.getElementById("pointOne").style.top = "-100px";
                document.getElementById("pointOne").style.left = "220px";
                document.getElementById("pointOne").style.top = "-47px";
                document.getElementById("pointOne").style.left = "320px";
                document.getElementById("pointOne").style.top = "30px"; 
            }, 500);
            //window.alert("15");
            break;
        case 42:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-260px";
            //window.alert("15");
            break;
        case 43:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-260px";
            //window.alert("15");
            break;
        case 44:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-260px";
            //window.alert("15");
            break;
        case 45:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-260px";
            //window.alert("15");
            break;
        case 46:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-260px";
            //window.alert("15");
            break;
        case 47:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-260px";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "615px";
                document.getElementById("pointOne").style.top = "-330px";
                document.getElementById("pointOne").style.left = "600px";
                document.getElementById("pointOne").style.top = "-360px";
                document.getElementById("pointOne").style.left = "580px";
                document.getElementById("pointOne").style.top = "-390px";
                document.getElementById("pointOne").style.left = "550px";
                document.getElementById("pointOne").style.top = "-450px";
                document.getElementById("pointOne").style.left = "520px";
                document.getElementById("pointOne").style.top = "-480px";
                document.getElementById("pointOne").style.left = "480px";
                document.getElementById("pointOne").style.top = "-610px";
                currentPosition = 46;
            }, 500);
            //window.alert("15");
            break;
        case 48:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-260px";
            //window.alert("15");
            break;
        case 49:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-260px";
            //window.alert("15");
            break;
        case 50:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-260px";
            //window.alert("15");
            break;
        case 51:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-330px";
            //window.alert("15");
            break;
        case 52:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-330px";
            //window.alert("15");
            break;
        case 53:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-330px";
            //window.alert("15");
            break;
        case 54:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-330px";
            //window.alert("15");
            break;
        case 55:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-330px";
            //window.alert("15");
            break;
        case 56:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-330px";
            //window.alert("15");
            break;
        case 57:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-330px";
            //window.alert("15");
            break;
        case 58:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-330px";
            //window.alert("15");
            break;
        case 59:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-330px";
            //window.alert("15");
            break;
        case 60:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-330px";
            //window.alert("15");
            break;
        case 61:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-400px";
            //window.alert("15");
            break;
        case 62:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-400px";
            //window.alert("15");
            break;
        case 63:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-400px";
            //window.alert("15");
            break;
        case 64:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-400px";
            //window.alert("15");
            break;
        case 65:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-400px";
            //window.alert("15");
            break;
        case 66:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-400px";
            //window.alert("15");
            break;
        case 67:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-400px";
            //window.alert("15");
            break;
        case 68:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-400px";
            //window.alert("15");
            break;
        case 69:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-400px";
            //window.alert("15");
            break;
        case 70:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-400px";
            //window.alert("15");
            break;
        case 71:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-475px";
            //window.alert("15");
            break;
        case 72:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-475px";
            //window.alert("15");
            break;
        case 73:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-475px";
            //window.alert("15");
            break;
        case 74:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-475px";
            //window.alert("15");
            break;
        case 75:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-475px";
            //window.alert("15");
            break;
        case 76:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-475px";
            //window.alert("15");
            break;
        case 77:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-475px";
            //window.alert("15");
            break;
        case 78:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-475px";
            //window.alert("15");
            break;
        case 79:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-475px";
            //window.alert("15");
            break;
        case 80:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-475px";
            //window.alert("15");
            break;
        case 81:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-545px";
            //window.alert("15");
            break;
        case 82:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-545px";
            //window.alert("15");
            break;
        case 83:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-545px";
            //window.alert("15");
            break;
        case 84:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-545px";
            //window.alert("15");
            break;
        case 85:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-545px";
            //window.alert("15");
            break;
        case 86:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-545px";
            //window.alert("15");
            break;
        case 87:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-545px";
            //window.alert("15");
            break;
        case 88:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-545px";
            //window.alert("15");
            break;
        case 89:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-545px";
            //window.alert("15");
            break;
        case 90:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-545px";
            //window.alert("15");
            break;
        case 91:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 92:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 93:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 94:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 95:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 96:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 97:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 98:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 99:
            document.getElementById("pointOne").style.left = "";
            window.alert("15");
            break;
        case 100:
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