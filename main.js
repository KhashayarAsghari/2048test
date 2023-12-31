let scoreCounter = document.querySelector(".scoreboard__score__number")


let isMoved = false;
let score = 0;

// FUNCTIONS
function setColors() {

    for (let i = 0; i < boxes.length; i++) {
        // keep width and height of box
        let prevStyle = boxes[i].firstChild.getAttribute('style');

        if (boxes[i].firstChild.getAttribute("cellNum") == "") {
            boxes[i].firstChild.style = prevStyle + "background-color: #00000000";
        } else if (boxes[i].firstChild.getAttribute("cellNum") <= 4096) {
            let temp = boxes[i].firstChild.getAttribute("cellNum");
            let foundColor = COLORS.find(item => item.number == temp);
            boxes[i].firstChild.style = prevStyle + `background-color: ${foundColor.color}; color: ${foundColor.fontColor}`
        } else {
            boxes[i].firstChild.style = prevStyle + `background-color: #7c7a7d; color: white`
        }
    }
}

function keyCheck(evt) {
    switch (evt.key) {
        case "ArrowUp":
            goUp();
            break;
        case "ArrowRight":
            goRight();
            break;
        case "ArrowDown":
            goDown();
            break;
        case "ArrowLeft":
            goLeft();
            break;
        default:
            console.log("default");
    }
}

function addNumber() {
    let randomNum = Math.floor(Math.random() * 100);
    let number;
    let emptyBoxes = [];


    if (randomNum < 65) {
        number = 2;
    } else {
        number = 4;
    }

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].firstChild.getAttribute("cellNum") == "") {
            emptyBoxes.push(boxes[i]);
        }
    }

    if (emptyBoxes.length == 0) {
        alert("Game over!!")
    } else {
        randomNum = Math.floor(Math.random() * emptyBoxes.length);

        emptyBoxes[randomNum].firstChild.textContent = number;
        emptyBoxes[randomNum].firstChild.setAttribute("cellNum", number);

    }
    isMoved = false;
    setColors();

}

function goDown() {

    for (let i = 12; i > 0; i--) {

        if (boxes[i - 1].firstChild.getAttribute("cellNum") != "") {

            // THIRD ROW
            // if bottom box was equal to current box
            if (i > 8 &&
                i < 13 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+100% + 20px)); transition: .1s";
                boxes[i + 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 - 1].firstChild.textContent = boxes[i + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // THIRD ROW
            // if bottom box was empty
            if (i > 8 &&
                i < 13 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+100% + 20px)); transition: .1s";
                boxes[i + 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")

                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 - 1].firstChild.textContent = boxes[i + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)
                isMoved = true;
                continue;
            }


            // SECOND ROW
            // if second bottom box was equal to current box and bottom box was empty
            if (i > 4 &&
                i < 9 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 4 + 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+200% + 40px)); transition: .1s";
                boxes[i + 4 + 4 - 1].firstChild.setAttribute("cellNum", boxes[i + 4 + 4 - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")

                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 + 4 - 1].firstChild.textContent = boxes[i + 4 + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;
            }

            // SECOND ROW
            // if all bottom boxes were empty
            if (i > 4 &&
                i < 9 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 4 + 4 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+200% + 40px)); transition: .1s";
                boxes[i + 4 + 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")

                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 + 4 - 1].firstChild.textContent = boxes[i + 4 + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;
            }


            // SECOND ROW
            // if bottom box was equal to current box
            if (i > 4 &&
                i < 9 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+100% + 20px)); transition: .1s";
                boxes[i + 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")

                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 - 1].firstChild.textContent = boxes[i + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;
            }


            // SECOND ROW
            // if bottom box was empty
            if (i > 4 &&
                i < 9 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+100% + 20px)); transition: .1s";
                boxes[i + 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")

                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 - 1].firstChild.textContent = boxes[i + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;
            }


            // FIRST ROW
            // if third bottom box was equal to current box
            if (i < 5 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 4 + 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 4 + 4 + 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+300% + 60px)); transition: .1s";
                boxes[i + 4 + 4 + 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")

                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 + 4 + 4 - 1].firstChild.textContent = boxes[i + 4 + 4 + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;
            }

            // FIRST ROW
            // if all bottom boxes were empty
            if (i < 5 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 4 + 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 4 + 4 + 4 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+300% + 60px)); transition: .1s";
                boxes[i + 4 + 4 + 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")

                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 + 4 + 4 - 1].firstChild.textContent = boxes[i + 4 + 4 + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;
            }


            // FIRST ROW
            // if second bottom box was equal to current box
            if (i < 5 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 4 + 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+200% + 40px)); transition: .1s";
                boxes[i + 4 + 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")

                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 + 4 - 1].firstChild.textContent = boxes[i + 4 + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;
            }


            // FIRST ROW
            // if first and second bottom boxes were empty and third bottom box was not equal to current box
            if (i < 5 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 4 + 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 4 + 4 + 4 - 1].firstChild.getAttribute("cellNum") != boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+200% + 40px)); transition: .1s";
                boxes[i + 4 + 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")

                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 + 4 - 1].firstChild.textContent = boxes[i + 4 + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;
            }


            // FIRST ROW
            // if bottom box was equal to current box
            if (i < 5 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+100% + 20px)); transition: .1s";
                boxes[i + 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")

                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 - 1].firstChild.textContent = boxes[i + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;
            }


            // FIRST ROW
            // if bottom box was empty
            if (i < 5 &&
                boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+100% + 20px)); transition: .1s";
                boxes[i + 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")

                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 - 1].firstChild.textContent = boxes[i + 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
            }

        }

    }

    setTimeout(() => {
        setColors();
        if(isMoved){
            addNumber();
        }
        scoreCounter.textContent = score;

    }, 101);
}


function goUp() {
    for (let i = 5; i <= 16; i++) {
        if (boxes[i - 1].firstChild.getAttribute("cellNum") != "") {


            // SECOND ROW
            // if top box was equal to current box
            if (i < 9 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .1s";
                boxes[i - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 1].firstChild.textContent = boxes[i - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // SECOND ROW
            // if top box was empty
            if (i < 9 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .1s";
                boxes[i - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 1].firstChild.textContent = boxes[i - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;
            }


            // THIRD ROW
            // if second top box was equal to current box and top box was empty
            if (i > 8 &&
                i < 13 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 4 - 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-200% - 40px)); transition: .1s";
                boxes[i - 4 - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 4 - 1].firstChild.textContent = boxes[i - 4 - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // THIRD ROW
            // if first and second top boxes were empty
            if (i > 8 &&
                i < 13 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 4 - 4 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-200% - 40px)); transition: .1s";
                boxes[i - 4 - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 4 - 1].firstChild.textContent = boxes[i - 4 - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // THIRD ROW
            // if first top box was equal to current box
            if (i > 8 &&
                i < 13 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .1s";
                boxes[i - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 1].firstChild.textContent = boxes[i - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // THIRD ROW
            // if first top box was empty
            if (i > 8 &&
                i < 13 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .1s";
                boxes[i - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 1].firstChild.textContent = boxes[i - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // FOURTH ROW
            // if third top box was equal to current and first and second top box were empty
            if (i > 12 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 4 - 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 4 - 4 - 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-300% - 60px)); transition: .1s";
                boxes[i - 4 - 4 - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 4 - 4 - 1].firstChild.textContent = boxes[i - 4 - 4 - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }

            // FOURTH ROW
            // if first, second and third top boxex were empty
            if (i > 12 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 4 - 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 4 - 4 - 4 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-300% - 60px)); transition: .1s";
                boxes[i - 4 - 4 - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 4 - 4 - 1].firstChild.textContent = boxes[i - 4 - 4 - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // FOURTH ROW
            // if second top box was equal to current box and top box was empty
            if (i > 12 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 4 - 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-200% - 40px)); transition: .1s";
                boxes[i - 4 - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 4 - 1].firstChild.textContent = boxes[i - 4 - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // FOURTH ROW
            // if first and second top boxes were empty
            if (i > 12 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 4 - 4 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-200% - 40px)); transition: .1s";
                boxes[i - 4 - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 4 - 1].firstChild.textContent = boxes[i - 4 - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // FOURTH ROW
            // if top box was equal to current box
            if (i > 12 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .1s";
                boxes[i - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 1].firstChild.textContent = boxes[i - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // FOURTH ROW
            // if top box was empty
            if (i > 12 &&
                boxes[i - 4 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .1s";
                boxes[i - 4 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 1].firstChild.textContent = boxes[i - 4 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }

        }
        setTimeout(() => {
            setColors();
            if(isMoved){
                addNumber();
            }
            scoreCounter.textContent = score;
        }, 101);
    }
}


function goRight() {

    // THIRD COLUMN
    for (let i = 3; i < 16; i += 4) {
        if (boxes[i - 1].firstChild.getAttribute("cellNum") != "") {


            // if right box was equal to current box
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+100% + 20px)); transition: .1s";
                boxes[i + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 - 1].firstChild.textContent = boxes[i + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // if right box was empty
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+100% + 20px)); transition: .1s";
                boxes[i + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 - 1].firstChild.textContent = boxes[i + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }
        }
    }


    // SECOND COLUMN
    for (let i = 2; i < 15; i += 4) {

        if (boxes[i - 1].firstChild.getAttribute("cellNum") != "") {

            // if second right box was equal to current box and right box was empty
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 1 + 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+200% + 40px)); transition: .1s";
                boxes[i + 1 + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 + 1 - 1].firstChild.textContent = boxes[i + 1 + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // if first and second right boxes were empty
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 1 + 1 - 1].firstChild.getAttribute("cellNum") == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+200% + 40px)); transition: .1s";
                boxes[i + 1 + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 + 1 - 1].firstChild.textContent = boxes[i + 1 + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // if right box was equal to current box
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+100% + 20px)); transition: .1s";
                boxes[i + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 - 1].firstChild.textContent = boxes[i + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // if right box was empty
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+100% + 20px)); transition: .1s";
                boxes[i + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 - 1].firstChild.textContent = boxes[i + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }

        }
    }


    // FIRST COLUMN
    for (let i = 1; i < 14; i += 4) {

        if (boxes[i - 1].firstChild.getAttribute("cellNum") != "") {

            // if third right box was equal to current box and first and second right boxes were empty
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 1 + 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 1 + 1 + 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+300% + 60px)); transition: .1s";
                boxes[i + 1 + 1 + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 + 1 + 1 - 1].firstChild.textContent = boxes[i + 1 + 1 + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }



            // if three right boxes were empty
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 1 + 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 1 + 1 + 1 - 1].firstChild.getAttribute("cellNum") == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+300% + 60px)); transition: .1s";
                boxes[i + 1 + 1 + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 + 1 + 1 - 1].firstChild.textContent = boxes[i + 1 + 1 + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // if second right box was equal to current and right box was empty
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 1 + 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+200% + 40px)); transition: .1s";
                boxes[i + 1 + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 + 1 - 1].firstChild.textContent = boxes[i + 1 + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // if two right boxes were empty
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i + 1 + 1 - 1].firstChild.getAttribute("cellNum") == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+200% + 40px)); transition: .1s";
                boxes[i + 1 + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 + 1 - 1].firstChild.textContent = boxes[i + 1 + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }



            // if right box was equal to current box
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+100% + 20px)); transition: .1s";
                boxes[i + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 - 1].firstChild.textContent = boxes[i + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // if right box was empty
            if (boxes[i + 1 - 1].firstChild.getAttribute("cellNum") == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(+100% + 20px)); transition: .1s";
                boxes[i + 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 - 1].firstChild.textContent = boxes[i + 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            
        }
    }

    setTimeout(() => {
        setColors();
        if(isMoved){
            addNumber();
        }
        scoreCounter.textContent = score;
    }, 101);
}


function goLeft() {

    // SECOND COLUMN
    for(let i = 2; i < 15; i += 4){
        if(boxes[i - 1].firstChild.getAttribute("cellNum") != ""){

            // if left box was equal to current box
            if (boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-100% - 20px)); transition: .1s";
                boxes[i - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1].firstChild.textContent = boxes[i - 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // if left box was empty
            if (boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-100% - 20px)); transition: .1s";
                boxes[i - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1].firstChild.textContent = boxes[i - 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }
            
        }
    }


    // THIRD COLUMN
    for(let i = 3; i < 16; i += 4){
        if(boxes[i-1].firstChild.getAttribute("cellNum") != ""){

            // if second left box was equal to current box and left box was empty
            if (boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 1 - 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-200% - 40px)); transition: .1s";
                boxes[i - 1 - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1 - 1].firstChild.textContent = boxes[i - 1 - 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // if first and second left boxes were empty
            if (boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 1 - 1 - 1].firstChild.getAttribute("cellNum") == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-200% - 40px)); transition: .1s";
                boxes[i - 1 - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1 - 1].firstChild.textContent = boxes[i - 1 - 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }


            // if left box was equal to current box
            if (boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-100% - 20px)); transition: .1s";
                boxes[i - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1].firstChild.textContent = boxes[i - 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }

            // if left box was empty
            if (boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-100% - 20px)); transition: .1s";
                boxes[i - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1].firstChild.textContent = boxes[i - 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }
        }
    }


    // FOURTH COLUMN
    for(let i = 4; i < 17; i += 4){
        if(boxes[i - 1].firstChild.getAttribute("cellNum") != ""){

            // if third left box was equal to current box and first and second left boxes were empty
            if (boxes[i - 1 - 1 - 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum") &&
                boxes[i - 1 - 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == "") {

                    let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                    boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-300% - 60px)); transition: .1s";
                    boxes[i - 1 - 1 - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                    score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                    boxes[i - 1].firstChild.setAttribute("cellNum", "")
    
    
                    setTimeout(() => {
                        // merge boxes
    
                        boxes[i - 1 - 1 - 1 - 1].firstChild.textContent = boxes[i - 1 - 1 - 1 - 1].firstChild.getAttribute("cellNum");
                        boxes[i - 1].firstChild.textContent = "";
                        boxes[i - 1].firstChild.style = prevStyle;
    
                    }, 100)
    
                    isMoved = true;
                    continue;
    
                }
                
                
            // if all left boxes were empty
            if (boxes[i - 1 - 1 - 1 - 1].firstChild.getAttribute("cellNum") == "" &&
            boxes[i - 1 - 1 - 1].firstChild.getAttribute("cellNum") == "" &&
            boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-300% - 60px)); transition: .1s";
                boxes[i - 1 - 1 - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1 - 1 - 1].firstChild.textContent = boxes[i - 1 - 1 - 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }

            // if second left box was equal to current box and left box was empty
            if (boxes[i - 1 - 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum") &&
                boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == "") {

                    let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                    boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-200% - 40px)); transition: .1s";
                    boxes[i - 1 - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                    score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                    boxes[i - 1].firstChild.setAttribute("cellNum", "")
    
    
                    setTimeout(() => {
                        // merge boxes
    
                        boxes[i - 1 - 1 - 1].firstChild.textContent = boxes[i - 1 - 1 - 1].firstChild.getAttribute("cellNum");
                        boxes[i - 1].firstChild.textContent = "";
                        boxes[i - 1].firstChild.style = prevStyle;
    
                    }, 100)
    
                    isMoved = true;
                    continue;
    
                }


            // if first and second left boxes were empty
            if (boxes[i - 1 - 1 - 1].firstChild.getAttribute("cellNum") == "" &&
                boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-200% - 40px)); transition: .1s";
                boxes[i - 1 - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1 - 1].firstChild.textContent = boxes[i - 1 - 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }

            // if left box was equal to current box
            if (boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {

                    let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                    boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-100% - 20px)); transition: .1s";
                    boxes[i - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum") * 2)
                    score += +boxes[i - 1].firstChild.getAttribute("cellNum")
                    boxes[i - 1].firstChild.setAttribute("cellNum", "")
    
    
                    setTimeout(() => {
                        // merge boxes
    
                        boxes[i - 1 - 1].firstChild.textContent = boxes[i - 1 - 1].firstChild.getAttribute("cellNum");
                        boxes[i - 1].firstChild.textContent = "";
                        boxes[i - 1].firstChild.style = prevStyle;
    
                    }, 100)
    
                    isMoved = true;
                    continue;
    
                }


            // if left box was empty
            if (boxes[i - 1 - 1].firstChild.getAttribute("cellNum") == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-100% - 20px)); transition: .1s";
                boxes[i - 1 - 1].firstChild.setAttribute("cellNum", boxes[i - 1].firstChild.getAttribute("cellNum"))
                boxes[i - 1].firstChild.setAttribute("cellNum", "")


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1].firstChild.textContent = boxes[i - 1 - 1].firstChild.getAttribute("cellNum");
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;

                }, 100)

                isMoved = true;
                continue;

            }
                
        }
    }

    setTimeout(() => {
        setColors();
        if(isMoved){
            addNumber();
        }
        scoreCounter.textContent = score;
    }, 101);
}













addNumber();
addNumber();
setColors();
setColors();

// EVENTS
window.addEventListener("keydown", keyCheck)