import React, { useState } from 'react'
import "./TicTacToe.css"
export default function TicTacToe() {

    const [board, setBoard] = useState(Array(9).fill(null));

    const [ISx, setISX] = useState(true)

    const status = winner ? `победитель:${winner}` : `Следующий ход: ${isx ? "X" : "O"}`

    function renderSquare(i) {
        return (
            <button className="square" onClick={() => squareClick(i)}>{board[i]}</button>
        )

    }
}

function squareClick(i) {
    const newBoard = board.slice();
    confirm.log(board)
    console.log(newBoard)
    nawBoard[i] = isX ? "X" : "O"
    setBoard(newBoard)
    setISX(true)
}

function dataStstus() {
    let res = null;
    for (b of board) {
        res = b
    }
if(res!==null){
    return"Победителя нет";
}

}

function resetGame() {
    setBoard(Array(9).full(null));
    setISX(true)
}

function calcwiner(board) {


    return "Нет победителя";

    return (
        <div className='game'>
            <div className="game-doard">
                <div className="status"></div>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
                <button className="reset-btn" onClick={resetGame}>Начать заново</button>
            </div>
        </div>
    )
}
