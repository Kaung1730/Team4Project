let randonNum;
let p1totalScore = 0, p2totalScore = 0;
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
        // playerTwo();
    }
    count++;
}
//PlayerOne Move function
let playerOne = () => {
    let p1currentPosition = 0;
    let currentDiceNum = randonNum + 1;
    console.log(currentDiceNum);
    p1currentPosition += currentDiceNum;
    console.log(p1currentPosition);
    switch (99) { //p1currentPosition //
        case 1:
            document.getElementById("pointOne").style.left = "155px";
            break;
        case 2:
            document.getElementById("pointOne").style.left = "235px";
            break;
        case 3:
            document.getElementById("pointOne").style.left = "315px";
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

            p1currentPosition = 25;
            console.log(p1currentPosition);
            break;
        case 5:
            document.getElementById("pointOne").style.top = "28%";
            document.getElementById("pointOne").style.left = "480px";
            break;
        case 6:
            document.getElementById("pointOne").style.left = "560px";
            break;
        case 7:
            document.getElementById("pointOne").style.left = "640px";
            break;
        case 8:
            document.getElementById("pointOne").style.left = "720px";
            break;
        case 9:
            document.getElementById("pointOne").style.left = "800px";
            break;
        case 10:
            document.getElementById("pointOne").style.left = "875px";
            break;
        case 11:
            document.getElementById("pointOne").style.left = "870px";
            document.getElementById("pointOne").style.top = "-47px";
            break;
        case 12:
            document.getElementById("pointOne").style.left = "790px";
            document.getElementById("pointOne").style.top = "-47px";
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
            p1currentPosition = 51;
            break;
        case 14:
            document.getElementById("pointOne").style.left = "635px"
            document.getElementById("pointOne").style.top = "-47px";
            break;
        case 15:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-47px";
            break;
        case 16:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-47px";
            break;
        case 17:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-47px";
            break;
        case 18:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-47px";
            break;
        case 19:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-47px";
            break;
        case 20:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-47px";
            break;
        case 21:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-115px";
            break;
        case 22:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-115px";
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
            p1currentPosition = 42;
            break;
        case 24:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-115px";
            break;
        case 25:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-115px";
            break;
        case 26:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-115px";
            break;
        case 27:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-115px";
            break;
        case 28:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-115px";
            break;
        case 29:
            document.getElementById("pointOne").style.left = "790px";
            document.getElementById("pointOne").style.top = "-115px";
            break;
        case 30:
            document.getElementById("pointOne").style.left = "870px";
            document.getElementById("pointOne").style.top = "-115px";
            break;
        case 31:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-185px";
            break;
        case 32:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-185px";
            break;
        case 33:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-185px";
            break;
        case 34:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-185px";
            break;
        case 35:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-185px";
            break;
        case 36:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-185px";
            break;
        case 37:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-185px";
            break;
        case 38:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-185px";
            break;
        case 39:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-185px";
            break;
        case 40:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-185px";
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
            p1currentPosition = 3;
            break;
        case 42:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-260px";
            break;
        case 43:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-260px";
            break;
        case 44:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-260px";
            break;
        case 45:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-260px";
            break;
        case 46:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-260px";
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
            }, 500);
            p1currentPosition = 96;
            break;
        case 48:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-260px";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "690px";
                document.getElementById("pointOne").style.top = "-150px";
                document.getElementById("pointOne").style.left = "650px";
                document.getElementById("pointOne").style.top = "-120px";
                document.getElementById("pointOne").style.left = "620px";
                document.getElementById("pointOne").style.top = "-60px";
                document.getElementById("pointOne").style.left = "560px";
                document.getElementById("pointOne").style.top = "28%";
            }, 500);
            p1currentPosition = 6;
            break;
        case 49:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-260px";
            break;
        case 50:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-260px";
            break;
        case 51:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-330px";
            break;
        case 52:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-330px";
            break;
        case 53:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-330px";
            break;
        case 54:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-330px";
            break;
        case 55:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-330px";
            break;
        case 56:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-330px";
            break;
        case 57:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-330px";
            break;
        case 58:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-330px";
            break;
        case 59:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-330px";
            break;
        case 60:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-330px";
            break;
        case 61:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-400px";
            break;
        case 62:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-400px";
            break;
        case 63:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-400px";
            break;
        case 64:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-400px";
            break;
        case 65:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-400px";
            break;
        case 66:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-400px";
            break;
        case 67:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-400px";
            break;
        case 68:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-400px";
            break;
        case 69:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-400px";
            break;
        case 70:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-400px";
            break;
        case 71:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-475px";
            break;
        case 72:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-475px";
            break;
        case 73:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-475px";
            break;
        case 74:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-475px";
            break;
        case 75:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-475px";
            break;
        case 76:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-475px";
            break;
        case 77:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-475px";
            break;
        case 78:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-475px";
            break;
        case 79:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-475px";
            break;
        case 80:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-475px";
            break;
        case 81:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-545px";
            break;
        case 82:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-545px";
            break;
        case 83:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-545px";
            break;
        case 84:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-545px";
            break;
        case 85:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-545px";
            break;
        case 86:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-545px";
            break;
        case 87:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-545px";
            break;
        case 88:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-545px";
            break;
        case 89:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-545px";
            break;
        case 90:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-545px";
            break;
        case 91:
            document.getElementById("pointOne").style.left = "875px";
            document.getElementById("pointOne").style.top = "-615px";
            break;
        case 92:
            document.getElementById("pointOne").style.left = "795px";
            document.getElementById("pointOne").style.top = "-615px";
            break;
        case 93:
            document.getElementById("pointOne").style.left = "720px";
            document.getElementById("pointOne").style.top = "-615px";
            break;
        case 94:
            document.getElementById("pointOne").style.left = "635px";
            document.getElementById("pointOne").style.top = "-615px";
            break;
        case 95:
            document.getElementById("pointOne").style.left = "555px";
            document.getElementById("pointOne").style.top = "-615px";
            break;
        case 96:
            document.getElementById("pointOne").style.left = "475px";
            document.getElementById("pointOne").style.top = "-615px";
            break;
        case 97:
            document.getElementById("pointOne").style.left = "395px";
            document.getElementById("pointOne").style.top = "-615px";
            break;
        case 98:
            document.getElementById("pointOne").style.left = "320px";
            document.getElementById("pointOne").style.top = "-615px";
            break;
        case 99:
            document.getElementById("pointOne").style.left = "245px";
            document.getElementById("pointOne").style.top = "-615px";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "230px";
                document.getElementById("pointOne").style.top = "-500px";
                document.getElementById("pointOne").style.left = "330px";
                document.getElementById("pointOne").style.top = "-430px";
                document.getElementById("pointOne").style.left = "350px";
                document.getElementById("pointOne").style.top = "-380px";
                document.getElementById("pointOne").style.left = "475px";
                document.getElementById("pointOne").style.top = "-330px";
            }, 500);
            break;
        case 100:
            document.getElementById("pointOne").style.left = "160px";
            document.getElementById("pointOne").style.top = "-615px";
            break;
    }
    p1totalScore = p1currentPosition;//to store score according to the position
    document.getElementById("p1score").innerHTML = p1totalScore;
}

//Player two move function
let playerTwo = () => {
    let p2currentPosition = 0;
    let currentDiceNum = randonNum + 1;
    console.log(currentDiceNum);
    p2currentPosition += currentDiceNum;
    console.log(p2currentPosition);
    switch (1) { //p2currentPosition //
        case 1:
            document.getElementById("pointTwo").style.left = "155px";
            break;
        case 2:
            document.getElementById("pointTwo").style.left = "235px";
            break;
        case 3:
            document.getElementById("pointTwo").style.left = "315px";
            break;
        case 4:
            document.getElementById("pointTwo").style.left = "360px";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "355px";
                document.getElementById("pointTwo").style.top = "10%";
                document.getElementById("pointTwo").style.left = "360px";
                document.getElementById("pointTwo").style.top = "-10%";
                document.getElementById("pointTwo").style.left = "365px";
                document.getElementById("pointTwo").style.top = "-20%";
                document.getElementById("pointTwo").style.left = "370px";
                document.getElementById("pointTwo").style.top = "-30%";
                document.getElementById("pointTwo").style.left = "380px";
                document.getElementById("pointTwo").style.top = "-40%";
                document.getElementById("pointTwo").style.left = "385px";
                document.getElementById("pointTwo").style.top = "-65%";
                document.getElementById("pointTwo").style.left = "390px";
                document.getElementById("pointTwo").style.top = "-95%";
                document.getElementById("pointTwo").style.left = "420px";
                document.getElementById("pointTwo").style.top = "-120%";
                document.getElementById("pointTwo").style.left = "470px";
            }, 500);
            p2currentPosition = 25;
            console.log(p2currentPosition);
            break;
        case 5:
            document.getElementById("pointTwo").style.top = "28%";
            document.getElementById("pointTwo").style.left = "480px";
            break;
        case 6:
            document.getElementById("pointTwo").style.left = "560px";
            break;
        case 7:
            document.getElementById("pointTwo").style.left = "640px";
            break;
        case 8:
            document.getElementById("pointTwo").style.left = "720px";
            break;
        case 9:
            document.getElementById("pointTwo").style.left = "800px";
            break;
        case 10:
            document.getElementById("pointTwo").style.left = "875px";
            break;
        case 11:
            document.getElementById("pointTwo").style.left = "870px";
            document.getElementById("pointTwo").style.top = "-47px";
            break;
        case 12:
            document.getElementById("pointTwo").style.left = "790px";
            document.getElementById("pointTwo").style.top = "-47px";
            break;
        case 13:
            document.getElementById("pointTwo").style.left = "720px";
            document.getElementById("pointTwo").style.top = "-47px";
            setTimeout(() => {
                document.getElementById("pointTwo").style.top = "-120px";
                document.getElementById("pointTwo").style.left = "710px";
                document.getElementById("pointTwo").style.top = "-180px";
                document.getElementById("pointTwo").style.left = "770px";
                document.getElementById("pointTwo").style.top = "-210px";
                document.getElementById("pointTwo").style.left = "870px";
                document.getElementById("pointTwo").style.top = "-270px";
                document.getElementById("pointTwo").style.left = "810px";
                document.getElementById("pointTwo").style.top = "-330px";
                document.getElementById("pointTwo").style.left = "870px";
            }, 500);
            p2currentPosition = 51;
            break;
        case 14:
            document.getElementById("pointTwo").style.left = "635px"
            document.getElementById("pointTwo").style.top = "-47px";
            break;
        case 15:
            document.getElementById("pointTwo").style.left = "555px";
            document.getElementById("pointTwo").style.top = "-47px";
            break;
        case 16:
            document.getElementById("pointTwo").style.left = "475px";
            document.getElementById("pointTwo").style.top = "-47px";
            break;
        case 17:
            document.getElementById("pointTwo").style.left = "395px";
            document.getElementById("pointTwo").style.top = "-47px";
            break;
        case 18:
            document.getElementById("pointTwo").style.left = "320px";
            document.getElementById("pointTwo").style.top = "-47px";
            break;
        case 19:
            document.getElementById("pointTwo").style.left = "245px";
            document.getElementById("pointTwo").style.top = "-47px";
            break;
        case 20:
            document.getElementById("pointTwo").style.left = "160px";
            document.getElementById("pointTwo").style.top = "-47px";
            break;
        case 21:
            document.getElementById("pointTwo").style.left = "160px";
            document.getElementById("pointTwo").style.top = "-115px";
            break;
        case 22:
            document.getElementById("pointTwo").style.left = "245px";
            document.getElementById("pointTwo").style.top = "-115px";
            break;
        case 23:
            document.getElementById("pointTwo").style.left = "320px";
            document.getElementById("pointTwo").style.top = "-115px";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "290px";
                document.getElementById("pointTwo").style.top = "-125px";
                document.getElementById("pointTwo").style.left = "295px";
                document.getElementById("pointTwo").style.top = "-160px";
                document.getElementById("pointTwo").style.left = "280px";
                document.getElementById("pointTwo").style.top = "-180px";
                document.getElementById("pointTwo").style.left = "250px";
                document.getElementById("pointTwo").style.top = "-210px";
                document.getElementById("pointTwo").style.left = "235px";
                document.getElementById("pointTwo").style.top = "-255px";
            }, 500);
            p2currentPosition = 42;
            break;
        case 24:
            document.getElementById("pointTwo").style.left = "395px";
            document.getElementById("pointTwo").style.top = "-115px";
            break;
        case 25:
            document.getElementById("pointTwo").style.left = "475px";
            document.getElementById("pointTwo").style.top = "-115px";
            break;
        case 26:
            document.getElementById("pointTwo").style.left = "555px";
            document.getElementById("pointTwo").style.top = "-115px";
            break;
        case 27:
            document.getElementById("pointTwo").style.left = "635px";
            document.getElementById("pointTwo").style.top = "-115px";
            break;
        case 28:
            document.getElementById("pointTwo").style.left = "720px";
            document.getElementById("pointTwo").style.top = "-115px";
            break;
        case 29:
            document.getElementById("pointTwo").style.left = "790px";
            document.getElementById("pointTwo").style.top = "-115px";
            break;
        case 30:
            document.getElementById("pointTwo").style.left = "870px";
            document.getElementById("pointTwo").style.top = "-115px";
            break;
        case 31:
            document.getElementById("pointTwo").style.left = "875px";
            document.getElementById("pointTwo").style.top = "-185px";
            break;
        case 32:
            document.getElementById("pointTwo").style.left = "795px";
            document.getElementById("pointTwo").style.top = "-185px";
            break;
        case 33:
            document.getElementById("pointTwo").style.left = "720px";
            document.getElementById("pointTwo").style.top = "-185px";
            break;
        case 34:
            document.getElementById("pointTwo").style.left = "635px";
            document.getElementById("pointTwo").style.top = "-185px";
            break;
        case 35:
            document.getElementById("pointTwo").style.left = "555px";
            document.getElementById("pointTwo").style.top = "-185px";
            break;
        case 36:
            document.getElementById("pointTwo").style.top = "-185px";
            document.getElementById("pointTwo").style.left = "475px";
            break;
        case 37:
            document.getElementById("pointTwo").style.left = "395px";
            document.getElementById("pointTwo").style.top = "-185px";
            break;
        case 38:
            document.getElementById("pointTwo").style.left = "320px";
            document.getElementById("pointTwo").style.top = "-185px";
            break;
        case 39:
            document.getElementById("pointTwo").style.left = "245px";
            document.getElementById("pointTwo").style.top = "-185px";
            break;
        case 40:
            document.getElementById("pointTwo").style.left = "160px";
            document.getElementById("pointTwo").style.top = "-185px";
            break;
        case 41:
            document.getElementById("pointTwo").style.left = "160px";
            document.getElementById("pointTwo").style.top = "-255px";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "160px";
                document.getElementById("pointTwo").style.top = "-170px";
                document.getElementById("pointTwo").style.left = "160px";
                document.getElementById("pointTwo").style.top = "-140px";
                document.getElementById("pointTwo").style.left = "160px";
                document.getElementById("pointTwo").style.top = "-120px";
                document.getElementById("pointTwo").style.left = "170px";
                document.getElementById("pointTwo").style.top = "-100px";
                document.getElementById("pointTwo").style.left = "200px";
                document.getElementById("pointTwo").style.top = "-100px";
                document.getElementById("pointTwo").style.left = "220px";
                document.getElementById("pointTwo").style.top = "-47px";
                document.getElementById("pointTwo").style.left = "320px";
                document.getElementById("pointTwo").style.top = "30px";
            }, 500);
            p2currentPosition = 3;
            break;
        case 42:
            document.getElementById("pointTwo").style.left = "245px";
            document.getElementById("pointTwo").style.top = "-260px";
            break;
        case 43:
            document.getElementById("pointTwo").style.left = "320px";
            document.getElementById("pointTwo").style.top = "-260px";
            break;
        case 44:
            document.getElementById("pointTwo").style.left = "395px";
            document.getElementById("pointTwo").style.top = "-260px";
            break;
        case 45:
            document.getElementById("pointTwo").style.left = "475px";
            document.getElementById("pointTwo").style.top = "-260px";
            break;
        case 46:
            document.getElementById("pointTwo").style.left = "555px";
            document.getElementById("pointTwo").style.top = "-260px";
            break;
        case 47:
            document.getElementById("pointTwo").style.left = "635px";
            document.getElementById("pointTwo").style.top = "-260px";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "615px";
                document.getElementById("pointTwo").style.top = "-330px";
                document.getElementById("pointTwo").style.left = "600px";
                document.getElementById("pointTwo").style.top = "-360px";
                document.getElementById("pointTwo").style.left = "580px";
                document.getElementById("pointTwo").style.top = "-390px";
                document.getElementById("pointTwo").style.left = "550px";
                document.getElementById("pointTwo").style.top = "-450px";
                document.getElementById("pointTwo").style.left = "520px";
                document.getElementById("pointTwo").style.top = "-480px";
                document.getElementById("pointTwo").style.left = "480px";
                document.getElementById("pointTwo").style.top = "-610px";
            }, 500);
            p2currentPosition = 96;
            break;
        case 48:
            document.getElementById("pointTwo").style.left = "720px";
            document.getElementById("pointTwo").style.top = "-260px";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "690px";
                document.getElementById("pointTwo").style.top = "-150px";
                document.getElementById("pointTwo").style.left = "650px";
                document.getElementById("pointTwo").style.top = "-120px";
                document.getElementById("pointTwo").style.left = "620px";
                document.getElementById("pointTwo").style.top = "-60px";
                document.getElementById("pointTwo").style.left = "560px";
                document.getElementById("pointTwo").style.top = "28%";
            }, 500);
            p2currentPosition = 6;
            break;
        case 49:
            document.getElementById("pointTwo").style.left = "795px";
            document.getElementById("pointTwo").style.top = "-260px";
            break;
        case 50:
            document.getElementById("pointTwo").style.left = "875px";
            document.getElementById("pointTwo").style.top = "-260px";
            break;
        case 51:
            document.getElementById("pointTwo").style.left = "875px";
            document.getElementById("pointTwo").style.top = "-330px";
            break;
        case 52:
            document.getElementById("pointTwo").style.left = "795px";
            document.getElementById("pointTwo").style.top = "-330px";
            break;
        case 53:
            document.getElementById("pointTwo").style.left = "720px";
            document.getElementById("pointTwo").style.top = "-330px";
            break;
        case 54:
            document.getElementById("pointTwo").style.left = "635px";
            document.getElementById("pointTwo").style.top = "-330px";
            break;
        case 55:
            document.getElementById("pointTwo").style.left = "555px";
            document.getElementById("pointTwo").style.top = "-330px";
            break;
        case 56:
            document.getElementById("pointTwo").style.left = "475px";
            document.getElementById("pointTwo").style.top = "-330px";
            break;
        case 57:
            document.getElementById("pointTwo").style.left = "395px";
            document.getElementById("pointTwo").style.top = "-330px";
            break;
        case 58:
            document.getElementById("pointTwo").style.left = "320px";
            document.getElementById("pointTwo").style.top = "-330px";
            break;
        case 59:
            document.getElementById("pointTwo").style.left = "245px";
            document.getElementById("pointTwo").style.top = "-330px";
            break;
        case 60:
            document.getElementById("pointTwo").style.left = "160px";
            document.getElementById("pointTwo").style.top = "-330px";
            break;
        case 61:
            document.getElementById("pointTwo").style.left = "160px";
            document.getElementById("pointTwo").style.top = "-400px";
            break;
        case 62:
            document.getElementById("pointTwo").style.left = "245px";
            document.getElementById("pointTwo").style.top = "-400px";
            break;
        case 63:
            document.getElementById("pointTwo").style.left = "320px";
            document.getElementById("pointTwo").style.top = "-400px";
            break;
        case 64:
            document.getElementById("pointTwo").style.left = "395px";
            document.getElementById("pointTwo").style.top = "-400px";
            break;
        case 65:
            document.getElementById("pointTwo").style.left = "475px";
            document.getElementById("pointTwo").style.top = "-400px";
            break;
        case 66:
            document.getElementById("pointTwo").style.left = "555px";
            document.getElementById("pointTwo").style.top = "-400px";
            break;
        case 67:
            document.getElementById("pointTwo").style.left = "635px";
            document.getElementById("pointTwo").style.top = "-400px";
            break;
        case 68:
            document.getElementById("pointTwo").style.left = "720px";
            document.getElementById("pointTwo").style.top = "-400px";
            break;
        case 69:
            document.getElementById("pointTwo").style.left = "795px";
            document.getElementById("pointTwo").style.top = "-400px";
            break;
        case 70:
            document.getElementById("pointTwo").style.left = "875px";
            document.getElementById("pointTwo").style.top = "-400px";
            break;
        case 71:
            document.getElementById("pointTwo").style.left = "875px";
            document.getElementById("pointTwo").style.top = "-475px";
            break;
        case 72:
            document.getElementById("pointTwo").style.left = "795px";
            document.getElementById("pointTwo").style.top = "-475px";
            break;
        case 73:
            document.getElementById("pointTwo").style.left = "720px";
            document.getElementById("pointTwo").style.top = "-475px";
            break;
        case 74:
            document.getElementById("pointTwo").style.left = "635px";
            document.getElementById("pointTwo").style.top = "-475px";
            break;
        case 75:
            document.getElementById("pointTwo").style.left = "555px";
            document.getElementById("pointTwo").style.top = "-475px";
            break;
        case 76:
            document.getElementById("pointTwo").style.left = "475px";
            document.getElementById("pointTwo").style.top = "-475px";
            break;
        case 77:
            document.getElementById("pointTwo").style.left = "395px";
            document.getElementById("pointTwo").style.top = "-475px";
            break;
        case 78:
            document.getElementById("pointTwo").style.left = "320px";
            document.getElementById("pointTwo").style.top = "-475px";
            break;
        case 79:
            document.getElementById("pointTwo").style.left = "245px";
            document.getElementById("pointTwo").style.top = "-475px";
            break;
        case 80:
            document.getElementById("pointTwo").style.left = "160px";
            document.getElementById("pointTwo").style.top = "-475px";
            break;
        case 81:
            document.getElementById("pointTwo").style.left = "160px";
            document.getElementById("pointTwo").style.top = "-545px";
            break;
        case 82:
            document.getElementById("pointTwo").style.left = "245px";
            document.getElementById("pointTwo").style.top = "-545px";
            break;
        case 83:
            document.getElementById("pointTwo").style.left = "320px";
            document.getElementById("pointTwo").style.top = "-545px";
            break;
        case 84:
            document.getElementById("pointTwo").style.left = "395px";
            document.getElementById("pointTwo").style.top = "-545px";
            break;
        case 85:
            document.getElementById("pointTwo").style.left = "475px";
            document.getElementById("pointTwo").style.top = "-545px";
            break;
        case 86:
            document.getElementById("pointTwo").style.left = "555px";
            document.getElementById("pointTwo").style.top = "-545px";
            break;
        case 87:
            document.getElementById("pointTwo").style.left = "635px";
            document.getElementById("pointTwo").style.top = "-545px";
            break;
        case 88:
            document.getElementById("pointTwo").style.left = "720px";
            document.getElementById("pointTwo").style.top = "-545px";
            break;
        case 89:
            document.getElementById("pointTwo").style.left = "795px";
            document.getElementById("pointTwo").style.top = "-545px";
            break;
        case 90:
            document.getElementById("pointTwo").style.left = "875px";
            document.getElementById("pointTwo").style.top = "-545px";
            break;
        case 91:
            document.getElementById("pointTwo").style.left = "875px";
            document.getElementById("pointTwo").style.top = "-615px";
            break;
        case 92:
            document.getElementById("pointTwo").style.left = "795px";
            document.getElementById("pointTwo").style.top = "-615px";
            break;
        case 93:
            document.getElementById("pointTwo").style.left = "720px";
            document.getElementById("pointTwo").style.top = "-615px";
            break;
        case 94:
            document.getElementById("pointTwo").style.left = "635px";
            document.getElementById("pointTwo").style.top = "-615px";
            break;
        case 95:
            document.getElementById("pointTwo").style.left = "555px";
            document.getElementById("pointTwo").style.top = "-615px";
            break;
        case 96:
            document.getElementById("pointTwo").style.left = "475px";
            document.getElementById("pointTwo").style.top = "-615px";
            break;
        case 97:
            document.getElementById("pointTwo").style.left = "395px";
            document.getElementById("pointTwo").style.top = "-615px";
            break;
        case 98:
            document.getElementById("pointTwo").style.left = "320px";
            document.getElementById("pointTwo").style.top = "-615px";
            break;
        case 99:
            document.getElementById("pointTwo").style.left = "245px";
            document.getElementById("pointTwo").style.top = "-615px";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "230px";
                document.getElementById("pointTwo").style.top = "-500px";
                document.getElementById("pointTwo").style.left = "330px";
                document.getElementById("pointTwo").style.top = "-430px";
                document.getElementById("pointTwo").style.left = "350px";
                document.getElementById("pointTwo").style.top = "-380px";
                document.getElementById("pointTwo").style.left = "475px";
                document.getElementById("pointTwo").style.top = "-330px";
            }, 500);
            break;
        case 100:
            document.getElementById("pointTwo").style.left = "160px";
            document.getElementById("pointTwo").style.top = "-615px";
            break;
    }
    p2totalScore = p2currentPosition; //to store score according to the p2 position
    document.getElementById("p2score").innerHTML = p2totalScore;
}