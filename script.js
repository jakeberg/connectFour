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


// function selection(event) {
//     let cell = event.target;
//     console.log(cell);
//     let idNumber = cell.id;
//     console.log(idNumber);
//     let id = prepareId(idNumber);
//     console.log(id)
// }

// function prepareId(p) {
//     let noDash = p.split("-");
//     console.log(noDash);
//     let removeLetters = noDash.pop();
//     return removeLetters;

// }



// Click event for choices.
var columns = document.querySelectorAll(".column");

const getToken = function (event) {
    let destination = this;

    if (clickCount % 2) {
        var redDisc = document.createElement("div");
        redDisc.className = ("red");
        destination.appendChild(redDisc);
    } else {
        var blackDisc = document.createElement("div");
        blackDisc.className = ("black");
        destination.appendChild(blackDisc);
    }
    clickCount++
    console.log(clickCount);
}

for (let i = 0; i < columns.length; i++) {
    let column = columns[i];
    // column.onclick = getToken;
    column.addEventListener('click', getToken);
}