import React, { useState } from 'react'

export default function TicTocToe() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXTurn , setXTurn] = useState(true)
  const [winner, setwinner] =useState(null)
const renderSquare =(index)=>{
  return(
  <button className='square'onClick={()=>handleClick(index)}>{board[index]}</button>
)

}

const handleClick = (index) => {


  if(board[index] != null ){
    return;
  }
  // Prevent clicking on an already filled square

console.log(index, "click")
  const newBoard = [...board];
  newBoard[index] = isXTurn ? 'X' : 'O';
  setBoard(newBoard);
  setXTurn(!isXTurn);
  const winnerCombination =checkWinner(newBoard);
  if(winnerCombination){
setwinner(newBoard[winnerCombination[0]])
  }

};
 const checkWinner = (newBoard) =>{
  const combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < combination.length; i++) {
    const [a, b, c] = combination[i];
    if (board[a] === board[b] && board[b]  ===  board[c]) {
      return combination[i];
    }
  }
  return null
 }
const handleReset =()=>{
  setBoard(Array(9).fill(null))
  setwinner(null)
}
  return (
<>
    <div className='board'>
    <h>TicTocToe</h>

      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}


      </div>
      <div className='board-row'>
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}


      </div>
      <div className='board-row'>
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}

      </div>

    </div>
    <button onClick={handleReset}>Reset</button>
   {winner && <div>{winner} winner</div>}
    </>
  )
}
