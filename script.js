let randonNum;
let p1currentPosition = 0,
    p2currentPosition = 0;
let p1totalScore = 0,
    p2totalScore = 0;
let finished = false;
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
let randomDice = () => { //when user click roll dice button
    setTimeout(() => {
        document.getElementById("diceSound").play();
    }, 200);
    if (finished == false) {
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
            whoWin();
        } else {
            document.getElementById("playerTwo-turn").style.background = "red";
            document.getElementById("playerTwo-turn").style.color = "white";
            document.getElementById("two").style.color = "white";
            document.getElementById("playerOne-turn").style.background = "white";
            document.getElementById("one").style.color = "blue";
            document.getElementById("playerOne-turn").style.color = "black";
            playerTwo();
            whoWin();
        }
        count++;
    }
}

//PlayerOne Move functio
let playerOne = () => {
    let currentDiceNum = randonNum + 1;
    console.log(currentDiceNum);
    p1currentPosition += currentDiceNum;
    console.log(p1currentPosition);
    switch (p1currentPosition) { //p1currentPosition //
        case 1:
            document.getElementById("pointOne").style.left = "180%";
            break;
        case 2:
            document.getElementById("pointOne").style.left = "280%";
            break;
        case 3:
            document.getElementById("pointOne").style.left = "390%";
            break;
        case 4:
            document.getElementById("pointOne").style.left = "490%";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "520%";
                document.getElementById("pointOne").style.top = "-40%";
                document.getElementById("pointOne").style.left = "550%";
                document.getElementById("pointOne").style.top = "-70%";
                document.getElementById("pointOne").style.left = "590%";
                document.getElementById("pointOne").style.top = "-120%";
                document.getElementById("pointOne").style.left = "600%";
            }, 500);
            p1currentPosition = 25;
            console.log(p1currentPosition);
            break;
        case 5:
            document.getElementById("pointOne").style.left = "610%";
            break;
        case 6:
            document.getElementById("pointOne").style.left = "720%";
            break;
        case 7:
            document.getElementById("pointOne").style.left = "830%";
            break;
        case 8:
            document.getElementById("pointOne").style.left = "940%";
            break;
        case 9:
            document.getElementById("pointOne").style.left = "1060%";
            break;
        case 10:
            document.getElementById("pointOne").style.left = "1180%";
            break;
        case 11:
            document.getElementById("pointOne").style.left = "1180%";
            document.getElementById("pointOne").style.top = "-47%";
            break;
        case 12:
            document.getElementById("pointOne").style.left = "1060%";
            document.getElementById("pointOne").style.top = "-47%";
            break;
        case 13:
            document.getElementById("pointOne").style.left = "940%";
            document.getElementById("pointOne").style.top = "-47%";
            setTimeout(() => {
                document.getElementById("pointOne").style.top = "-120%";
                document.getElementById("pointOne").style.left = "1010%";
                document.getElementById("pointOne").style.top = "-180%";
                document.getElementById("pointOne").style.left = "1050%";
                document.getElementById("pointOne").style.top = "-340%";
                document.getElementById("pointOne").style.left = "1170%";
            }, 500);
            p1currentPosition = 51;
            break;
        case 14:
            document.getElementById("pointOne").style.left = "830%"
            document.getElementById("pointOne").style.top = "-47%";
            break;
        case 15:
            document.getElementById("pointOne").style.left = "720%";
            document.getElementById("pointOne").style.top = "-47%";
            break;
        case 16:
            document.getElementById("pointOne").style.left = "610%";
            document.getElementById("pointOne").style.top = "-47%";
            break;
        case 17:
            document.getElementById("pointOne").style.left = "490%";
            document.getElementById("pointOne").style.top = "-47%";
            break;
        case 18:
            document.getElementById("pointOne").style.left = "390%";
            document.getElementById("pointOne").style.top = "-47%";
            break;
        case 19:
            document.getElementById("pointOne").style.left = "280%";
            document.getElementById("pointOne").style.top = "-47%";
            break;
        case 20:
            document.getElementById("pointOne").style.left = "180%";
            document.getElementById("pointOne").style.top = "-47%";
            break;
        case 21:
            document.getElementById("pointOne").style.left = "180%";
            document.getElementById("pointOne").style.top = "-115%";
            break;
        case 22:
            document.getElementById("pointOne").style.left = "280%";
            document.getElementById("pointOne").style.top = "-115%";
            break;
        case 23:
            document.getElementById("pointOne").style.left = "390%";
            document.getElementById("pointOne").style.top = "-115%";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "290%";
                document.getElementById("pointOne").style.top = "-125%";
                document.getElementById("pointOne").style.left = "295%";
                document.getElementById("pointOne").style.top = "-160%";
                document.getElementById("pointOne").style.left = "280%";
                document.getElementById("pointOne").style.top = "-180%";
                document.getElementById("pointOne").style.left = "250%";
                document.getElementById("pointOne").style.top = "-210%";
                document.getElementById("pointOne").style.left = "280%";
                document.getElementById("pointOne").style.top = "-255%";
            }, 500);
            p1currentPosition = 42;
            break;
        case 24:
            document.getElementById("pointOne").style.left = "490%";
            document.getElementById("pointOne").style.top = "-115%";
            break;
        case 25:
            document.getElementById("pointOne").style.left = "610%";
            document.getElementById("pointOne").style.top = "-115%";
            break;
        case 26:
            document.getElementById("pointOne").style.left = "720%";
            document.getElementById("pointOne").style.top = "-115%";
            break;
        case 27:
            document.getElementById("pointOne").style.left = "830%";
            document.getElementById("pointOne").style.top = "-115%";
            break;
        case 28:
            document.getElementById("pointOne").style.left = "940%";
            document.getElementById("pointOne").style.top = "-115%";
            break;
        case 29:
            document.getElementById("pointOne").style.left = "1060%";
            document.getElementById("pointOne").style.top = "-115%";
            break;
        case 30:
            document.getElementById("pointOne").style.left = "1180%";
            document.getElementById("pointOne").style.top = "-115%";
            break;
        case 31:
            document.getElementById("pointOne").style.left = "1180%";
            document.getElementById("pointOne").style.top = "-185%";
            break;
        case 32:
            document.getElementById("pointOne").style.left = "1060%";
            document.getElementById("pointOne").style.top = "-185%";
            break;
        case 33:
            document.getElementById("pointOne").style.left = "940%";
            document.getElementById("pointOne").style.top = "-185%";
            break;
        case 34:
            document.getElementById("pointOne").style.left = "830%";
            document.getElementById("pointOne").style.top = "-185%";
            break;
        case 35:
            document.getElementById("pointOne").style.left = "720%";
            document.getElementById("pointOne").style.top = "-185%";
            break;
        case 36:
            document.getElementById("pointOne").style.left = "610%";
            document.getElementById("pointOne").style.top = "-185%";
            break;
        case 37:
            document.getElementById("pointOne").style.left = "490%";
            document.getElementById("pointOne").style.top = "-185%";
            break;
        case 38:
            document.getElementById("pointOne").style.left = "390%";
            document.getElementById("pointOne").style.top = "-185%";
            break;
        case 39:
            document.getElementById("pointOne").style.left = "280%";
            document.getElementById("pointOne").style.top = "-185%";
            break;
        case 40:
            document.getElementById("pointOne").style.left = "180%";
            document.getElementById("pointOne").style.top = "-185%";
            break;
        case 41:
            document.getElementById("pointOne").style.left = "180%";
            document.getElementById("pointOne").style.top = "-255%";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "160%";
                document.getElementById("pointOne").style.top = "-170%";
                document.getElementById("pointOne").style.left = "160%";
                document.getElementById("pointOne").style.top = "-140%";
                document.getElementById("pointOne").style.left = "160%";
                document.getElementById("pointOne").style.top = "-120%";
                document.getElementById("pointOne").style.left = "170%";
                document.getElementById("pointOne").style.top = "-100%";
                document.getElementById("pointOne").style.left = "200%";
                document.getElementById("pointOne").style.top = "-100%";
                document.getElementById("pointOne").style.left = "220%";
                document.getElementById("pointOne").style.top = "-47%";
                document.getElementById("pointOne").style.left = "310%";
                document.getElementById("pointOne").style.top = "30%";
            }, 500);
            p1currentPosition = 2;
            break;
        case 42:
            document.getElementById("pointOne").style.left = "280%";
            document.getElementById("pointOne").style.top = "-260%";
            break;
        case 43:
            document.getElementById("pointOne").style.left = "390%";
            document.getElementById("pointOne").style.top = "-260%";
            break;
        case 44:
            document.getElementById("pointOne").style.left = "490%";
            document.getElementById("pointOne").style.top = "-260%";
            break;
        case 45:
            document.getElementById("pointOne").style.left = "610%";
            document.getElementById("pointOne").style.top = "-260%";
            break;
        case 46:
            document.getElementById("pointOne").style.left = "720%";
            document.getElementById("pointOne").style.top = "-260%";
            break;
        case 47:
            document.getElementById("pointOne").style.left = "830%";
            document.getElementById("pointOne").style.top = "-260%";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "615%";
                document.getElementById("pointOne").style.top = "-330%";
                document.getElementById("pointOne").style.left = "600%";
                document.getElementById("pointOne").style.top = "-360%";
                document.getElementById("pointOne").style.left = "580%";
                document.getElementById("pointOne").style.top = "-390%";
                document.getElementById("pointOne").style.left = "550%";
                document.getElementById("pointOne").style.top = "-450%";
                document.getElementById("pointOne").style.left = "520%";
                document.getElementById("pointOne").style.top = "-480%";
                document.getElementById("pointOne").style.left = "610%";
                document.getElementById("pointOne").style.top = "-630%";
            }, 500);
            p1currentPosition = 96;
            break;
        case 48:
            document.getElementById("pointOne").style.left = "940%";
            document.getElementById("pointOne").style.top = "-260%";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "690%";
                document.getElementById("pointOne").style.top = "-150%";
                document.getElementById("pointOne").style.left = "650%";
                document.getElementById("pointOne").style.top = "-120%";
                document.getElementById("pointOne").style.left = "620%";
                document.getElementById("pointOne").style.top = "-60%";
                document.getElementById("pointOne").style.left = "720%";
                document.getElementById("pointOne").style.top = "28%";
            }, 500);
            p1currentPosition = 6;
            break;
        case 49:
            document.getElementById("pointOne").style.left = "1060%";
            document.getElementById("pointOne").style.top = "-260%";
            break;
        case 50:
            document.getElementById("pointOne").style.left = "1180%";
            document.getElementById("pointOne").style.top = "-260%";
            break;
        case 51:
            document.getElementById("pointOne").style.left = "1180%";
            document.getElementById("pointOne").style.top = "-330%";
            break;
        case 52:
            document.getElementById("pointOne").style.left = "1060%";
            document.getElementById("pointOne").style.top = "-330%";
            break;
        case 53:
            document.getElementById("pointOne").style.left = "940%";
            document.getElementById("pointOne").style.top = "-330%";
            break;
        case 54:
            document.getElementById("pointOne").style.left = "830%";
            document.getElementById("pointOne").style.top = "-330%";
            break;
        case 55:
            document.getElementById("pointOne").style.left = "720%";
            document.getElementById("pointOne").style.top = "-330%";
            break;
        case 56:
            document.getElementById("pointOne").style.left = "610%";
            document.getElementById("pointOne").style.top = "-330%";
            break;
        case 57:
            document.getElementById("pointOne").style.left = "490%";
            document.getElementById("pointOne").style.top = "-330%";
            break;
        case 58:
            document.getElementById("pointOne").style.left = "390%";
            document.getElementById("pointOne").style.top = "-330%";
            break;
        case 59:
            document.getElementById("pointOne").style.left = "280%";
            document.getElementById("pointOne").style.top = "-330%";
            break;
        case 60:
            document.getElementById("pointOne").style.left = "180%";
            document.getElementById("pointOne").style.top = "-330%";
            break;
        case 61:
            document.getElementById("pointOne").style.left = "180%";
            document.getElementById("pointOne").style.top = "-400%";
            break;
        case 62:
            document.getElementById("pointOne").style.left = "280%";
            document.getElementById("pointOne").style.top = "-400%";
            break;
        case 63:
            document.getElementById("pointOne").style.left = "390%";
            document.getElementById("pointOne").style.top = "-400%";
            break;
        case 64:
            document.getElementById("pointOne").style.left = "490%";
            document.getElementById("pointOne").style.top = "-400%";
            break;
        case 65:
            document.getElementById("pointOne").style.left = "610%";
            document.getElementById("pointOne").style.top = "-400%";
            break;
        case 66:
            document.getElementById("pointOne").style.left = "720%";
            document.getElementById("pointOne").style.top = "-400%";
            break;
        case 67:
            document.getElementById("pointOne").style.left = "830%";
            document.getElementById("pointOne").style.top = "-400%";
            break;
        case 68:
            document.getElementById("pointOne").style.left = "940%";
            document.getElementById("pointOne").style.top = "-400%";
            break;
        case 69:
            document.getElementById("pointOne").style.left = "1060%";
            document.getElementById("pointOne").style.top = "-400%";
            break;
        case 70:
            document.getElementById("pointOne").style.left = "1180%";
            document.getElementById("pointOne").style.top = "-400%";
            break;
        case 71:
            document.getElementById("pointOne").style.left = "1180%";
            document.getElementById("pointOne").style.top = "-490%";
            break;
        case 72:
            document.getElementById("pointOne").style.left = "1060%";
            document.getElementById("pointOne").style.top = "-490%";
            break;
        case 73:
            document.getElementById("pointOne").style.left = "940%";
            document.getElementById("pointOne").style.top = "-490%";
            break;
        case 74:
            document.getElementById("pointOne").style.left = "830%";
            document.getElementById("pointOne").style.top = "-490%";
            break;
        case 75:
            document.getElementById("pointOne").style.left = "720%";
            document.getElementById("pointOne").style.top = "-490%";
            break;
        case 76:
            document.getElementById("pointOne").style.left = "610%";
            document.getElementById("pointOne").style.top = "-490%";
            break;
        case 77:
            document.getElementById("pointOne").style.left = "490%";
            document.getElementById("pointOne").style.top = "-490%";
            break;
        case 78:
            document.getElementById("pointOne").style.left = "390%";
            document.getElementById("pointOne").style.top = "-490%";
            break;
        case 79:
            document.getElementById("pointOne").style.left = "280%";
            document.getElementById("pointOne").style.top = "-490%";
            break;
        case 80:
            document.getElementById("pointOne").style.left = "180%";
            document.getElementById("pointOne").style.top = "-490%";
            break;
        case 81:
            document.getElementById("pointOne").style.left = "180%";
            document.getElementById("pointOne").style.top = "-575%";
            break;
        case 82:
            document.getElementById("pointOne").style.left = "280%";
            document.getElementById("pointOne").style.top = "-575%";
            break;
        case 83:
            document.getElementById("pointOne").style.left = "390%";
            document.getElementById("pointOne").style.top = "-575%";
            break;
        case 84:
            document.getElementById("pointOne").style.left = "490%";
            document.getElementById("pointOne").style.top = "-575%";
            break;
        case 85:
            document.getElementById("pointOne").style.left = "610%";
            document.getElementById("pointOne").style.top = "-575%";
            break;
        case 86:
            document.getElementById("pointOne").style.left = "720%";
            document.getElementById("pointOne").style.top = "-575%";
            break;
        case 87:
            document.getElementById("pointOne").style.left = "830%";
            document.getElementById("pointOne").style.top = "-575%";
            break;
        case 88:
            document.getElementById("pointOne").style.left = "940%";
            document.getElementById("pointOne").style.top = "-575%";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "690%";
                document.getElementById("pointOne").style.top = "-470%";
                document.getElementById("pointOne").style.left = "630%";
                document.getElementById("pointOne").style.top = "-400%";
                document.getElementById("pointOne").style.left = "600%";
                document.getElementById("pointOne").style.top = "-385%";
                document.getElementById("pointOne").style.left = "720%";
                document.getElementById("pointOne").style.top = "-400%";
            }, 500);
            p1currentPosition = 66;
            break;
        case 89:
            document.getElementById("pointOne").style.left = "1060%";
            document.getElementById("pointOne").style.top = "-575%";
            break;
        case 90:
            document.getElementById("pointOne").style.left = "1180%";
            document.getElementById("pointOne").style.top = "-575%";
            break;
        case 91:
            document.getElementById("pointOne").style.left = "1180%";
            document.getElementById("pointOne").style.top = "-650%";
            break;
        case 92:
            document.getElementById("pointOne").style.left = "1060%";
            document.getElementById("pointOne").style.top = "-650%";
            break;
        case 93:
            document.getElementById("pointOne").style.left = "940%";
            document.getElementById("pointOne").style.top = "-650%";
            break;
        case 94:
            document.getElementById("pointOne").style.left = "830%";
            document.getElementById("pointOne").style.top = "-650%";
            break;
        case 95:
            document.getElementById("pointOne").style.left = "720%";
            document.getElementById("pointOne").style.top = "-650%";
            break;
        case 96:
            document.getElementById("pointOne").style.left = "610%";
            document.getElementById("pointOne").style.top = "-650%";
            break;
        case 97:
            document.getElementById("pointOne").style.left = "490%";
            document.getElementById("pointOne").style.top = "-650%";
            break;
        case 98:
            document.getElementById("pointOne").style.left = "390%";
            document.getElementById("pointOne").style.top = "-650%";
            break;
        case 99:
            document.getElementById("pointOne").style.left = "280%";
            document.getElementById("pointOne").style.top = "-650%";
            setTimeout(() => {
                document.getElementById("pointOne").style.left = "230%";
                document.getElementById("pointOne").style.top = "-500%";
                document.getElementById("pointOne").style.left = "330%";
                document.getElementById("pointOne").style.top = "-430%";
                document.getElementById("pointOne").style.left = "350%";
                document.getElementById("pointOne").style.top = "-380%";
                document.getElementById("pointOne").style.left = "490%";
                document.getElementById("pointOne").style.top = "-330%";
            }, 500);
            p1currentPosition = 57;
            break;
        case 100:
            document.getElementById("pointOne").style.left = "180%";
            document.getElementById("pointOne").style.top = "-650%";
            break;
    }
    p1totalScore = p1currentPosition; //to store score according to the position
    document.getElementById("p1score").innerHTML = p1totalScore;
}

//Player two move function
let playerTwo = () => {
    let currentDiceNum = randonNum + 1;
    console.log(currentDiceNum);
    p2currentPosition += currentDiceNum;
    console.log(p2currentPosition);
    switch (p2currentPosition) { //p2currentPosition //
        case 1:
            document.getElementById("pointTwo").style.left = "180%";
            break;
        case 2:
            document.getElementById("pointTwo").style.left = "280%";
            break;
        case 3:
            document.getElementById("pointTwo").style.left = "390%";
            break;
        case 4:
            document.getElementById("pointTwo").style.left = "490%";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "520%";
                document.getElementById("pointTwo").style.top = "-40%";
                document.getElementById("pointTwo").style.left = "550%";
                document.getElementById("pointTwo").style.top = "-70%";
                document.getElementById("pointTwo").style.left = "590%";
                document.getElementById("pointTwo").style.top = "-120%";
                document.getElementById("pointTwo").style.left = "600%";
            }, 500);
            p2currentPosition = 25;
            console.log(p2currentPosition);
            break;
        case 5:
            document.getElementById("pointTwo").style.left = "610%";
            break;
        case 6:
            document.getElementById("pointTwo").style.left = "720%";
            break;
        case 7:
            document.getElementById("pointTwo").style.left = "830%";
            break;
        case 8:
            document.getElementById("pointTwo").style.left = "940%";
            break;
        case 9:
            document.getElementById("pointTwo").style.left = "1060%";
            break;
        case 10:
            document.getElementById("pointTwo").style.left = "1180%";
            break;
        case 11:
            document.getElementById("pointTwo").style.left = "1180%";
            document.getElementById("pointTwo").style.top = "-47%";
            break;
        case 12:
            document.getElementById("pointTwo").style.left = "1060%";
            document.getElementById("pointTwo").style.top = "-47%";
            break;
        case 13:
            document.getElementById("pointTwo").style.left = "940%";
            document.getElementById("pointTwo").style.top = "-47%";
            setTimeout(() => {
                document.getElementById("pointTwo").style.top = "-120%";
                document.getElementById("pointTwo").style.left = "1010%";
                document.getElementById("pointTwo").style.top = "-180%";
                document.getElementById("pointTwo").style.left = "1050%";
                document.getElementById("pointTwo").style.top = "-340%";
                document.getElementById("pointTwo").style.left = "1170%";
            }, 500);
            p1currentPosition = 51;
            break;
        case 14:
            document.getElementById("pointTwo").style.left = "830%"
            document.getElementById("pointTwo").style.top = "-47%";
            break;
        case 15:
            document.getElementById("pointTwo").style.left = "720%";
            document.getElementById("pointTwo").style.top = "-47%";
            break;
        case 16:
            document.getElementById("pointTwo").style.left = "610%";
            document.getElementById("pointTwo").style.top = "-47%";
            break;
        case 17:
            document.getElementById("pointTwo").style.left = "490%";
            document.getElementById("pointTwo").style.top = "-47%";
            break;
        case 18:
            document.getElementById("pointTwo").style.left = "390%";
            document.getElementById("pointTwo").style.top = "-47%";
            break;
        case 19:
            document.getElementById("pointTwo").style.left = "280%";
            document.getElementById("pointTwo").style.top = "-47%";
            break;
        case 20:
            document.getElementById("pointTwo").style.left = "180%";
            document.getElementById("pointTwo").style.top = "-47%";
            break;
        case 21:
            document.getElementById("pointTwo").style.left = "180%";
            document.getElementById("pointTwo").style.top = "-115%";
            break;
        case 22:
            document.getElementById("pointTwo").style.left = "280%";
            document.getElementById("pointTwo").style.top = "-115%";
            break;
        case 23:
            document.getElementById("pointTwo").style.left = "390%";
            document.getElementById("pointTwo").style.top = "-115%";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "290%";
                document.getElementById("pointTwo").style.top = "-125%";
                document.getElementById("pointTwo").style.left = "295%";
                document.getElementById("pointTwo").style.top = "-160%";
                document.getElementById("pointTwo").style.left = "280%";
                document.getElementById("pointTwo").style.top = "-180%";
                document.getElementById("pointTwo").style.left = "250%";
                document.getElementById("pointTwo").style.top = "-210%";
                document.getElementById("pointTwo").style.left = "280%";
                document.getElementById("pointTwo").style.top = "-255%";
            }, 500);
            p2currentPosition = 42;
            break;
        case 24:
            document.getElementById("pointTwo").style.left = "490%";
            document.getElementById("pointTwo").style.top = "-115%";
            break;
        case 25:
            document.getElementById("pointTwo").style.left = "610%";
            document.getElementById("pointTwo").style.top = "-115%";
            break;
        case 26:
            document.getElementById("pointTwo").style.left = "720%";
            document.getElementById("pointTwo").style.top = "-115%";
            break;
        case 27:
            document.getElementById("pointTwo").style.left = "830%";
            document.getElementById("pointTwo").style.top = "-115%";
            break;
        case 28:
            document.getElementById("pointTwo").style.left = "940%";
            document.getElementById("pointTwo").style.top = "-115%";
            break;
        case 29:
            document.getElementById("pointTwo").style.left = "1060%";
            document.getElementById("pointTwo").style.top = "-115%";
            break;
        case 30:
            document.getElementById("pointTwo").style.left = "1180%";
            document.getElementById("pointTwo").style.top = "-115%";
            break;
        case 31:
            document.getElementById("pointTwo").style.left = "1180%";
            document.getElementById("pointTwo").style.top = "-185%";
            break;
        case 32:
            document.getElementById("pointTwo").style.left = "1060%";
            document.getElementById("pointTwo").style.top = "-185%";
            break;
        case 33:
            document.getElementById("pointTwo").style.left = "940%";
            document.getElementById("pointTwo").style.top = "-185%";
            break;
        case 34:
            document.getElementById("pointTwo").style.left = "830%";
            document.getElementById("pointTwo").style.top = "-185%";
            break;
        case 35:
            document.getElementById("pointTwo").style.left = "720%";
            document.getElementById("pointTwo").style.top = "-185%";
            break;
        case 36:
            document.getElementById("pointTwo").style.left = "610%";
            document.getElementById("pointTwo").style.top = "-185%";
            break;
        case 37:
            document.getElementById("pointTwo").style.left = "490%";
            document.getElementById("pointTwo").style.top = "-185%";
            break;
        case 38:
            document.getElementById("pointTwo").style.left = "390%";
            document.getElementById("pointTwo").style.top = "-185%";
            break;
        case 39:
            document.getElementById("pointTwo").style.left = "280%";
            document.getElementById("pointTwo").style.top = "-185%";
            break;
        case 40:
            document.getElementById("pointTwo").style.left = "180%";
            document.getElementById("pointTwo").style.top = "-185%";
            break;
        case 41:
            document.getElementById("pointTwo").style.left = "180%";
            document.getElementById("pointTwo").style.top = "-255%";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "160%";
                document.getElementById("pointTwo").style.top = "-170%";
                document.getElementById("pointTwo").style.left = "160%";
                document.getElementById("pointTwo").style.top = "-140%";
                document.getElementById("pointTwo").style.left = "160%";
                document.getElementById("pointTwo").style.top = "-120%";
                document.getElementById("pointTwo").style.left = "170%";
                document.getElementById("pointTwo").style.top = "-100%";
                document.getElementById("pointTwo").style.left = "200%";
                document.getElementById("pointTwo").style.top = "-100%";
                document.getElementById("pointTwo").style.left = "220%";
                document.getElementById("pointTwo").style.top = "-47%";
                document.getElementById("pointTwo").style.left = "310%";
                document.getElementById("pointTwo").style.top = "30%";
            }, 500);
            p2currentPosition = 2;
            break;
        case 42:
            document.getElementById("pointTwo").style.left = "280%";
            document.getElementById("pointTwo").style.top = "-260%";
            break;
        case 43:
            document.getElementById("pointTwo").style.left = "390%";
            document.getElementById("pointTwo").style.top = "-260%";
            break;
        case 44:
            document.getElementById("pointTwo").style.left = "490%";
            document.getElementById("pointTwo").style.top = "-260%";
            break;
        case 45:
            document.getElementById("pointTwo").style.left = "610%";
            document.getElementById("pointTwo").style.top = "-260%";
            break;
        case 46:
            document.getElementById("pointTwo").style.left = "720%";
            document.getElementById("pointTwo").style.top = "-260%";
            break;
        case 47:
            document.getElementById("pointTwo").style.left = "830%";
            document.getElementById("pointTwo").style.top = "-260%";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "615%";
                document.getElementById("pointTwo").style.top = "-330%";
                document.getElementById("pointTwo").style.left = "600%";
                document.getElementById("pointTwo").style.top = "-360%";
                document.getElementById("pointTwo").style.left = "580%";
                document.getElementById("pointTwo").style.top = "-390%";
                document.getElementById("pointTwo").style.left = "550%";
                document.getElementById("pointTwo").style.top = "-450%";
                document.getElementById("pointTwo").style.left = "520%";
                document.getElementById("pointTwo").style.top = "-480%";
                document.getElementById("pointTwo").style.left = "610%";
                document.getElementById("pointTwo").style.top = "-630%";
            }, 500);
            p2currentPosition = 96;
            break;
        case 48:
            document.getElementById("pointTwo").style.left = "940%";
            document.getElementById("pointTwo").style.top = "-260%";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "690%";
                document.getElementById("pointTwo").style.top = "-150%";
                document.getElementById("pointTwo").style.left = "650%";
                document.getElementById("pointTwo").style.top = "-120%";
                document.getElementById("pointTwo").style.left = "620%";
                document.getElementById("pointTwo").style.top = "-60%";
                document.getElementById("pointTwo").style.left = "720%";
                document.getElementById("pointTwo").style.top = "28%";
            }, 500);
            p2currentPosition = 6;
            break;
        case 49:
            document.getElementById("pointTwo").style.left = "1060%";
            document.getElementById("pointTwo").style.top = "-260%";
            break;
        case 50:
            document.getElementById("pointTwo").style.left = "1180%";
            document.getElementById("pointTwo").style.top = "-260%";
            break;
        case 51:
            document.getElementById("pointTwo").style.left = "1180%";
            document.getElementById("pointTwo").style.top = "-330%";
            break;
        case 52:
            document.getElementById("pointTwo").style.left = "1060%";
            document.getElementById("pointTwo").style.top = "-330%";
            break;
        case 53:
            document.getElementById("pointTwo").style.left = "940%";
            document.getElementById("pointTwo").style.top = "-330%";
            break;
        case 54:
            document.getElementById("pointTwo").style.left = "830%";
            document.getElementById("pointTwo").style.top = "-330%";
            break;
        case 55:
            document.getElementById("pointTwo").style.left = "720%";
            document.getElementById("pointTwo").style.top = "-330%";
            break;
        case 56:
            document.getElementById("pointTwo").style.left = "610%";
            document.getElementById("pointTwo").style.top = "-330%";
            break;
        case 57:
            document.getElementById("pointTwo").style.left = "490%";
            document.getElementById("pointTwo").style.top = "-330%";
            break;
        case 58:
            document.getElementById("pointTwo").style.left = "390%";
            document.getElementById("pointTwo").style.top = "-330%";
            break;
        case 59:
            document.getElementById("pointTwo").style.left = "280%";
            document.getElementById("pointTwo").style.top = "-330%";
            break;
        case 60:
            document.getElementById("pointTwo").style.left = "180%";
            document.getElementById("pointTwo").style.top = "-330%";
            break;
        case 61:
            document.getElementById("pointTwo").style.left = "180%";
            document.getElementById("pointTwo").style.top = "-400%";
            break;
        case 62:
            document.getElementById("pointTwo").style.left = "280%";
            document.getElementById("pointTwo").style.top = "-400%";
            break;
        case 63:
            document.getElementById("pointTwo").style.left = "390%";
            document.getElementById("pointTwo").style.top = "-400%";
            break;
        case 64:
            document.getElementById("pointTwo").style.left = "490%";
            document.getElementById("pointTwo").style.top = "-400%";
            break;
        case 65:
            document.getElementById("pointTwo").style.left = "610%";
            document.getElementById("pointTwo").style.top = "-400%";
            break;
        case 66:
            document.getElementById("pointTwo").style.left = "720%";
            document.getElementById("pointTwo").style.top = "-400%";
            break;
        case 67:
            document.getElementById("pointTwo").style.left = "830%";
            document.getElementById("pointTwo").style.top = "-400%";
            break;
        case 68:
            document.getElementById("pointTwo").style.left = "940%";
            document.getElementById("pointTwo").style.top = "-400%";
            break;
        case 69:
            document.getElementById("pointTwo").style.left = "1060%";
            document.getElementById("pointTwo").style.top = "-400%";
            break;
        case 70:
            document.getElementById("pointTwo").style.left = "1180%";
            document.getElementById("pointTwo").style.top = "-400%";
            break;
        case 71:
            document.getElementById("pointTwo").style.left = "1180%";
            document.getElementById("pointTwo").style.top = "-490%";
            break;
        case 72:
            document.getElementById("pointTwo").style.left = "1060%";
            document.getElementById("pointTwo").style.top = "-490%";
            break;
        case 73:
            document.getElementById("pointTwo").style.left = "940%";
            document.getElementById("pointTwo").style.top = "-490%";
            break;
        case 74:
            document.getElementById("pointTwo").style.left = "830%";
            document.getElementById("pointTwo").style.top = "-490%";
            break;
        case 75:
            document.getElementById("pointTwo").style.left = "720%";
            document.getElementById("pointTwo").style.top = "-490%";
            break;
        case 76:
            document.getElementById("pointTwo").style.left = "610%";
            document.getElementById("pointTwo").style.top = "-490%";
            break;
        case 77:
            document.getElementById("pointTwo").style.left = "490%";
            document.getElementById("pointTwo").style.top = "-490%";
            break;
        case 78:
            document.getElementById("pointTwo").style.left = "390%";
            document.getElementById("pointTwo").style.top = "-490%";
            break;
        case 79:
            document.getElementById("pointTwo").style.left = "280%";
            document.getElementById("pointTwo").style.top = "-490%";
            break;
        case 80:
            document.getElementById("pointTwo").style.left = "180%";
            document.getElementById("pointTwo").style.top = "-490%";
            break;
        case 81:
            document.getElementById("pointTwo").style.left = "180%";
            document.getElementById("pointTwo").style.top = "-575%";
            break;
        case 82:
            document.getElementById("pointTwo").style.left = "280%";
            document.getElementById("pointTwo").style.top = "-575%";
            break;
        case 83:
            document.getElementById("pointTwo").style.left = "390%";
            document.getElementById("pointTwo").style.top = "-575%";
            break;
        case 84:
            document.getElementById("pointTwo").style.left = "490%";
            document.getElementById("pointTwo").style.top = "-575%";
            break;
        case 85:
            document.getElementById("pointTwo").style.left = "610%";
            document.getElementById("pointTwo").style.top = "-575%";
            break;
        case 86:
            document.getElementById("pointTwo").style.left = "720%";
            document.getElementById("pointTwo").style.top = "-575%";
            break;
        case 87:
            document.getElementById("pointTwo").style.left = "830%";
            document.getElementById("pointTwo").style.top = "-575%";
            break;
        case 88:
            document.getElementById("pointTwo").style.left = "940%";
            document.getElementById("pointTwo").style.top = "-575%";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "690%";
                document.getElementById("pointTwo").style.top = "-470%";
                document.getElementById("pointTwo").style.left = "630%";
                document.getElementById("pointTwo").style.top = "-400%";
                document.getElementById("pointTwo").style.left = "600%";
                document.getElementById("pointTwo").style.top = "-385%";
                document.getElementById("pointTwo").style.left = "720%";
                document.getElementById("pointTwo").style.top = "-400%";
            }, 500);
            p2currentPosition = 66;
            break;
        case 89:
            document.getElementById("pointTwo").style.left = "1060%";
            document.getElementById("pointTwo").style.top = "-575%";
            break;
        case 90:
            document.getElementById("pointTwo").style.left = "1180%";
            document.getElementById("pointTwo").style.top = "-575%";
            break;
        case 91:
            document.getElementById("pointTwo").style.left = "1180%";
            document.getElementById("pointTwo").style.top = "-650%";
            break;
        case 92:
            document.getElementById("pointTwo").style.left = "1060%";
            document.getElementById("pointTwo").style.top = "-650%";
            break;
        case 93:
            document.getElementById("pointTwo").style.left = "940%";
            document.getElementById("pointTwo").style.top = "-650%";
            break;
        case 94:
            document.getElementById("pointTwo").style.left = "830%";
            document.getElementById("pointTwo").style.top = "-650%";
            break;
        case 95:
            document.getElementById("pointTwo").style.left = "720%";
            document.getElementById("pointTwo").style.top = "-650%";
            break;
        case 96:
            document.getElementById("pointTwo").style.left = "610%";
            document.getElementById("pointTwo").style.top = "-650%";
            break;
        case 97:
            document.getElementById("pointTwo").style.left = "490%";
            document.getElementById("pointTwo").style.top = "-650%";
            break;
        case 98:
            document.getElementById("pointTwo").style.left = "390%";
            document.getElementById("pointTwo").style.top = "-650%";
            break;
        case 99:
            document.getElementById("pointTwo").style.left = "280%";
            document.getElementById("pointTwo").style.top = "-650%";
            setTimeout(() => {
                document.getElementById("pointTwo").style.left = "230%";
                document.getElementById("pointTwo").style.top = "-500%";
                document.getElementById("pointTwo").style.left = "330%";
                document.getElementById("pointTwo").style.top = "-430%";
                document.getElementById("pointTwo").style.left = "350%";
                document.getElementById("pointTwo").style.top = "-380%";
                document.getElementById("pointTwo").style.left = "490%";
                document.getElementById("pointTwo").style.top = "-330%";
            }, 500);
            p2currentPosition = 57;
            break;
        case 100:
            document.getElementById("pointTwo").style.left = "180%";
            document.getElementById("pointTwo").style.top = "-650%";
            break;
    }
    p2totalScore = p2currentPosition; //to store score according to the position
    document.getElementById("p2score").innerHTML = p2totalScore;
}

let whoWin = () => {
    if (p1totalScore >= 100 && p2totalScore < 100) {
        // playerOneWin
        finished = true;
        document.getElementById("winSound").play();
        document.getElementById("pointOne").style.left = "180%";
        document.getElementById("pointOne").style.top = "-650%";
        document.getElementById("opacity-page").style.display = "block";
        document.getElementById("win-box").style.display = "block";
        document.getElementById("winner").innerHTML = "Player One";
        document.getElementById("medal-wrap1").style.display = "block";
    } else if (p1totalScore < 100 && p2totalScore >= 100) {
        //playerTwoWin
        finished = true;
        document.getElementById("windSound").play();
        document.getElementById("pointTwo").style.left = "180%";
        document.getElementById("pointTwo").style.top = "-650%";
        document.getElementById("opacity-page").style.display = "block";
        document.getElementById("win-box").style.display = "block";
        document.getElementById("winner").innerHTML = "Player Two";
        document.getElementById("medal-wrap2").style.display = "block";
        
    }
}