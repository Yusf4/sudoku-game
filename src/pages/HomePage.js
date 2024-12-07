
import { useState } from 'react';
import { generateSudoku } from '../utils/sudoku';
import Board from '../components/board';
const HomePage=()=>{
  const MAX_MISTAKES=3;
  const[mistakes,setMistakes]=useState(0);
  const [game,setGame]=useState(generateSudoku());
  const handleCellChange=(row,col,value)=>{
    const newBoard=game.puzzle.map((r,rowIndex)=>
    r.map((c,colIndex)=> (rowIndex=== row && colIndex=== col ? value:c))
    );
    if(value!==game.solution[row][col]){
      setMistakes((prevMistakes)=>{
    const updatedMistakes=prevMistakes+1;
   if(updatedMistakes >= MAX_MISTAKES){
    alert("You lost! restarting the game.");
    resetGame();
   }
   return updatedMistakes;
     });
  }
    setGame({...game,puzzle:newBoard});
  };
  const resetGame=()=>{
    setGame(generateSudoku());
    setMistakes(0);
  }
  const checkSolution=()=>{
    const isSolved= 
    JSON.stringify(game.puzzle)=== JSON.stringify(game.solution);
  alert(isSolved ? 'Congratulations ! you solved it!' :'Incorrect solution');
  };
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Sudoku Game</h1>
      <Board board={game.puzzle} onCellChange={handleCellChange}/>
      <div className="mt-4 text-red-500">Mistakes: {mistakes}{MAX_MISTAKES}</div>
      <div className="mt-4">
        <button
       className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
       onClick={resetGame}
     >
      New game
      </button>
      <button 
       className="bg-green-500 text-white px-4 py-2 rounded"
       onClick={checkSolution}
       >
      Check Solution
       </button>
       </div>
       </div>
  )

}
export default HomePage;
