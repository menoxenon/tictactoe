    let player1 = "Player 1" //o
    let player2 = "Player 2" //x
    let counter = 0
    counter = counter * 1

    let XScore = 0
    let OScore = 0

    let ticValues = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    let ticTab = ["number1", "number2", "number3", "number4", "number5", "number6", "number7", "number8", "number9"]

    function hoverSwitch() {
        for(let i = 0; i < 9; i++){
            document.getElementById(ticTab[i]).classList.toggle('ticCross')
        }
    }

    function whatIsUrName() {
        player1 = prompt("Set first player name:", "")
        player2 = prompt("Set second player name:", "")
        document.getElementById("nowplaying").innerHTML = player1
    }

    function ticSelect(s) {
        let cell = s / 1

        if (ticValues[cell] == 0) {
            xOrO(counter, s)
            hoverSwitch()
            counter++
        } else {
            alert("Select another cell!");
        }

        winCheck();
    }

    function xOrO(y, which) {
        if (y % 2 == 0) {
            document.getElementById("nowplaying").innerHTML = player2
            ticValues[which] = 1
            inserto(which)
        } else {
            document.getElementById("nowplaying").innerHTML = player1
            ticValues[which] = 2
            insertx(which)
        }
    }

    function insertx(x) {
        document.getElementById(ticTab[x]).innerHTML = '<img src="https://img.icons8.com/fluent/96/000000/delete-sign.png"/>'
    }

    function inserto(o) {
        document.getElementById(ticTab[o]).innerHTML = '<img src="https://img.icons8.com/fluent/96/000000/active-state.png"/>'
    }

    function ticReset() {
        for (i = 0; i < 9; i++) {
            document.getElementById(ticTab[i]).innerHTML = ""
        }

        for (i = 0; i < 9; i++) {
            ticValues[i] = 0
        }

        XScore = 0;
        OScore = 0;

        document.getElementById("scorex").innerHTML = "000"
        document.getElementById("scoreo").innerHTML = "000"

        counter = 0;

        //whatIsUrName();
    }

    function winCheck() {
        let poolCount = 0
        for (i = 1; i < 4; i++) {
            if (ticValues[(i * 3) - 3] == ticValues[(i * 3) - 2] && ticValues[(i * 3) - 2] == ticValues[(i * 3) - 1]) {
                if (ticValues[(i * 3) - 3] == 0) {
                    continue
                } else {
                    ticWin((i * 3) - 3)
                }
            }
        } //linecheck landscape

        for (i = 1; i < 4; i++) {
            if (ticValues[(i - 1)] == ticValues[(i + 2)] && ticValues[(i + 2)] == ticValues[(i + 5)]) {
                if (ticValues[i + 5] == 0) {
                    continue
                } else {
                    ticWin(i + 5)
                }
            }
        }  //linecheck portrait

        if (ticValues[0] == ticValues[4] && ticValues[4] == ticValues[8]) {
            ticWin(8)
        }

        if (ticValues[2] == ticValues[4] && ticValues[4] == ticValues[6]) {
            ticWin(6)
        }

        for (i = 0; i < 9; i++) {
            if (ticValues[i] == 0) {
                break
            } else {
                poolCount++
            }
            if (poolCount == 9){
                cler()
            } //tofix
        }
    }

    function ticWin(w = 0, isWin = true) {
        if(isWin == false){
            if(counter%2 == 1){
                winO()
            } else {
                winX()
            }
        } else {
            if (ticValues[w] == 1) {
                winO()
            } else if (ticValues[w] == 2) {
                winX()
            }
        }

    }

    function winX() {
        XScore++;
        if (XScore < 100) {
            XScore = "0" + XScore
            if (XScore < 10) {
                XScore = "0" + XScore
            }
        }
        document.getElementById("scorex").innerHTML = XScore
        counter = counter % 2
        cler()
    }

    function winO() {
        OScore++;
        if (OScore < 100) {
            OScore = "0" + OScore
            if (OScore < 10) {
                OScore = "0" + OScore
            }
        }
        document.getElementById("scoreo").innerHTML = OScore
        counter = counter % 2
        cler()
    }

    function cler(countin = false) {
        for (i = 0; i < 9; i++) {
            document.getElementById(ticTab[i]).innerHTML = ""
        }

        for (i = 0; i < 9; i++) {
            ticValues[i] = 0
        }

        if (countin == true){
            ticWin(0, false)
            counter++
            hoverSwitch()
        }
    }

    function playersSubmit(form){
        player1 = form.player1.value
        player2 = form.player2.value
        document.getElementById("nowplaying").innerHTML = player1
    }

    function bot () {
        firstMove ()
        
    }

    function firstMove () {
        if(ticValues[4] == 1) {
            ticValues[2] = 2
            document.getElementById(ticTab[2]).innerHTML = '<img src="https://img.icons8.com/fluent/96/000000/delete-sign.png"/>'
            counter++
        } else {
            ticValues[0] = 2
            document.getElementById(ticTab[0]).innerHTML = '<img src="https://img.icons8.com/fluent/96/000000/delete-sign.png"/>'
            counter++ //random shit make here
        }
    }

    //dodać dunkcje "you cant surrender after one move "
    //saintPope easteregg