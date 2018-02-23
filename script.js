const numCols = 6;
const destination = document.getElementById("board");
let col1 = 0;

let clickCount = 0;

const gameArray = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

//Creates game board based on number of cols and rows defined above
for (let i = 0; i < numCols; i++) {
    const column = document.createElement("div");
    column.classList.add('column');
    column.id = 'col-' + (String(i));
    destination.appendChild(column);
}

// Fixes id so it can be used in function
function prepareId(p) {
    let noDash = p.split("-");
    let removeLetters = noDash.pop();
    return removeLetters;
}


const getToken = function (event) {
    let destination = this;
    let idNum = prepareId(destination.id);

    if (clickCount % 2) {
        var redDisc = document.createElement("div");
        redDisc.className = ("red");
        destination.appendChild(redDisc);
        gameArray[idNum].shift();
        gameArray[idNum].push(1);

    } else {
        var blackDisc = document.createElement("div");
        blackDisc.className = ("black");
        destination.appendChild(blackDisc);
        gameArray[idNum].shift();
        gameArray[idNum].push(2);
    }
    clickCount++
}


// This checks vertically in the game and horizontally in the array
const checkWinVertical = function () {
    for (let y = 0; y < gameArray.length; y++) {
        let row = gameArray[y];

        for (let x = 0; x < row.length; x++) {
            let cell = row[x];
            if (cell !== 0) {
                if (cell === gameArray[y][x + 1] && cell === gameArray[y][x + 2] && cell === gameArray[y][x + 3]) {
                    alert('current player wins!');
                }
            }
        }
    }
}

// This checks horizontally in the game and vertically in the array
const checkWinHorizontal = function () {
    for (let y = 0; y < gameArray.length; y++) {
        let row = gameArray[y];

        for (let x = 0; x < row.length; x++) {
            let cell = gameArray[y][x];

            if (cell !== 0) {
                if (cell === gameArray[y + 1][x] && cell === gameArray[y + 2][x] && cell === gameArray[y + 3][x]) {
                    alert('current player wins!');
                }
            }
        }
    }
}


// Click event for choices.
var columns = document.querySelectorAll(".column");

for (let i = 0; i < columns.length; i++) {
    let column = columns[i];
    column.addEventListener('click', getToken);
    // column.addEventListener('click', checkWinVertical);
    column.addEventListener('click', checkWinHorizontal);
}