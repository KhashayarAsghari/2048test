

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
            boxes[i].firstChild.style = prevStyle + `background-color: ${foundColor.color}`
        } else {
            boxes[i].firstChild.style = prevStyle + `background-color: #7c7a7d`
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
    setColors();

}

function goDown() {

    for (let i = 12; i > 0; i--) {
        if (i > 8 &&
            i < 13 &&
            boxes[i - 1].firstChild.getAttribute('cellNum') != "" &&
            boxes[i + 4 - 1].firstChild.getAttribute("cellNum") == boxes[i - 1].firstChild.getAttribute("cellNum")) {


            let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
            boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(+100% + 20px)); transition: .1s";
            boxes[i - 1].firstChild.setAttribute("cellNum", "")
            boxes[i + 4 - 1].firstChild.setAttribute("cellNum", boxes[i + 4 - 1].firstChild.getAttribute("cellNum") * 2)


            setTimeout(() => {
                // merge boxes

                boxes[i + 4 - 1].firstChild.textContent = boxes[i + 4 - 1].firstChild.getAttribute("cellNum");
                boxes[i - 1].firstChild.textContent = "";
                boxes[i - 1].firstChild.style = prevStyle;
            }, 100)

            break;
        }

        if (i > 8 &&
            i < 13 &&
            boxes[i - 1].firstChild.getAttribute('cellNum') != "" &&
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
        }


        break;

    }

    setTimeout(() => {
        setColors();
    }, 100);
}















// addNumber();
// addNumber();
setColors();
setColors();

// EVENTS
window.addEventListener("keydown", keyCheck)