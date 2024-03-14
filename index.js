console.log("TicTacToe")

const cells = document.querySelectorAll(".cell")
const restartBtn = document.querySelector(".restartBtn")
const winner = document.querySelector(".winner")
let turn = "X"
"lala"
const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
const checkWin = () => {
    let winner
    winningConditions.forEach(condition => {
            if(cells[condition[0] - 1].innerText === "X" && cells[condition[1] - 1].innerText === "X" && cells[condition[2] - 1].innerText === "X") {
              winner = "X"
            } else if (cells[condition[0] - 1].innerText === "O" && cells[condition[1] - 1].innerText === "O" && cells[condition[2] - 1].innerText === "O") {
                winner = "O"
            }
    })

    return winner
}

const controller = (e) => {
    e.target.innerHTML = turn
    turn = turn === "X" ? "O" : "X"
    if (checkWin()) {
        winner.innerHTML = checkWin() + " "  + "Won"
        cells.forEach(cell => {
            cell.removeEventListener("click", controller)
        })
    }
}

cells.forEach(cell => {
    cell.addEventListener("click", controller, { once: true })
})


