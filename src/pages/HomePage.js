
import { useState } from 'react';
import { generateSudoku } from '../utils/sudoku';
import Board from '../components/board';
import { useResolvedPath } from 'react-router-dom';
const HomePage=()=>{
  const MAX_MISTAKES=3;
  const[mistakes,setMistakes]=useState(0);
  const [level,setLevel]=useState('Easy');
  const [game,setGame]=useState(generateSudoku(level));
  const handleCellChange=(row,col,value)=>{
    const newBoard=game.puzzle.map((r,rowIndex)=>
    r.map((c,colIndex)=>{
if(rowIndex=== row && colIndex===col){
  if(value===null || value===""){
    return {value:null,isWrong:false};
  }
return {value,isWrong:value!==game.solution[row][col]};
}
return c;
    } )
   
  );
    if(value!==null && value!=="" && value!==game.solution[row][col]){
      setMistakes((prevMistakes)=>{
    const updatedMistakes=prevMistakes+1;
   if(updatedMistakes >= MAX_MISTAKES){
    alert("You lost! restarting the game.");
    resetGame(level);
   }
   return updatedMistakes;
     });
  }
    setGame({...game,puzzle:newBoard});
  };
  const resetGame=(selectedLevel=level)=>{
   const newGame=generateSudoku(selectedLevel);
    setGame(newGame);
    setMistakes(0);
  }
  const handleLevelChange=(newLevel)=>{
    setLevel(newLevel);
    resetGame(newLevel);
  }
  const checkSolution=()=>{
    const isSolved= 
    JSON.stringify(game.puzzle)=== JSON.stringify(game.solution);
  alert(isSolved ? 'Congratulations ! you solved it!' :'Incorrect solution');
  };
  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      {/* Title with Animation */}
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700 animate-bounce">
        Sudoku Game
      </h1>
      <div className="flex space-x-4 mb-4">
        {['Easy', 'Medium', 'Hard', 'Expert'].map((lvl) => (
          <button
            key={lvl}
            className={`px-4 py-2 rounded ${
              level === lvl
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
            onClick={() => handleLevelChange(lvl)}
          >
            {lvl}
          </button>
        ))}
      </div>
      {/* Board */}
      <div className="shadow-lg rounded-lg p-5 bg-white transform hover:scale-105 transition duration-300">
        <Board board={game.puzzle} onCellChange={handleCellChange} />
      </div>
  
      {/* Mistakes Counter */}
      <div className="mt-6 text-xl font-semibold text-red-600">
        Mistakes: <span className="animate-pulse">{mistakes}</span> / {MAX_MISTAKES}
      </div>
  
      {/* Buttons with Hover and Animation */}
      <div className="mt-8 space-x-4">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600 transform hover:scale-110 transition duration-300"
          onClick={resetGame}
        >
          New Game
        </button>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded shadow-lg hover:bg-green-600 transform hover:scale-110 transition duration-300"
          onClick={checkSolution}
        >
          Check Solution
        </button>
      </div>
    </div>
  );
  

}
export default HomePage;
