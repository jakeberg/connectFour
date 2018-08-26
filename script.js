function connectFour() {

    const destination = document.getElementById("board");
    let clickCount = 0;
    var currentPlayer = "";

    const gameArray = [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]

    //Creates game board
    for (let i = 0; i < gameArray.length; i++) {
        let column = document.createElement("div");
        column.classList.add('column');
        column.id = 'col-' + (String(i));
        destination.appendChild(column);
    }


    // Fixes column id so it can be used in function
    function prepareId(p) {
        let noDash = p.split("-");
        let removeLetters = noDash.pop();
        return removeLetters;
    }

    // Adds a black or red div on the game board
    const placeChip = function (event) {
        let thisCol = event.currentTarget;

        let idNum = prepareId(thisCol.id);

        let y = 0;
        let x = document.getElementById(thisCol.id).childElementCount;

        let disc = document.createElement("div");

        if (clickCount % 2 && x < 6) {
            disc.className = ("red");
            gameArray[idNum][y + x] = 1;
            currentPlayer = "Red";
        } else if (x < 6) {
            disc.className = ("black");
            gameArray[idNum][y + x] = 2;
            currentPlayer = "Black";
        }
        clickCount++
        thisCol.appendChild(disc);
        console.log(gameArray);
    }

    // This checks vertically in the game and horizontally in the array
    const checkWinVertical = function () {
        for (let y = 0; y < gameArray.length; y++) {
            let row = gameArray[y];

            for (let x = 0; x < row.length; x++) {
                let cell = row[x];
                if (cell !== 0) {
                    if (cell === gameArray[y][x + 1] && cell === gameArray[y][x + 2] && cell === gameArray[y][x + 3]) {
                        alert(currentPlayer + ' wins vertically!');
                        reset();
                        connectFour();
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

                if (cell !== 0 && y < gameArray.length - 3) {
                    if (cell === gameArray[y + 1][x] && cell === gameArray[y + 2][x] && cell === gameArray[y + 3][x]) {
                        alert(currentPlayer + ' wins horizontally!');
                        reset();
                        connectFour();
                    }
                }
            }
        }
    }

    // Checks down and to the right for diagonal win
    const checkWinDiagonalRight = function () {
        for (let y = 0; y < gameArray.length - 3; y++) {
            let row = gameArray[y];
            // iterate each cell in the row
            for (let x = 0; x < row.length; x++) {
                cell = gameArray[y][x];
                // Only check if cell is filled
                if (cell !== 0) {
                    // Check the next two cells for the same value
                    if (cell === gameArray[y + 1][x - 1] && cell === gameArray[y + 2][x - 2] && cell === gameArray[y + 3][x - 3]) {
                        alert(currentPlayer + ' wins down and to the right!');
                        reset();
                        connectFour();
                    }
                }
            }
        }
    }

    // Checks down and to the left for diagonal win
    const checkWinDiagonalLeft = function () {
        for (let y = 0; y < gameArray.length - 3; y++) {
            let row = gameArray[y];
            // iterate each cell in the row
            for (let x = 0; x < row.length; x++) {
                cell = gameArray[y][x];

                // Only check if cell is filled
                if (cell !== 0) {

                    // Check the next two cells for the same value
                    if (cell === gameArray[y + 1][x + 1] && cell === gameArray[y + 2][x + 2] && cell === gameArray[y + 3][x + 3]) {
                        alert(currentPlayer + ' wins down and to the left!');
                        reset();
                        connectFour();
                    }
                }
            }
        }
    }

    // Removes all divs to reset game
    function reset() {
        while (destination.firstChild) {
            destination.removeChild(destination.firstChild);
        }
    }

    // Click event for choices.
    var columns = document.querySelectorAll(".column");

    for (let i = 0; i < columns.length; i++) {
        let column = columns[i];
        column.addEventListener('click', placeChip);
        column.addEventListener('click', checkWinVertical);
        column.addEventListener('click', checkWinHorizontal);
        column.addEventListener('click', checkWinDiagonalRight);
        column.addEventListener('click', checkWinDiagonalLeft);
    }

}

connectFour();