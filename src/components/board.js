import React from "react";
import Cell from "./cell";
const Board=({board,onCellChange})=>{
    return (
        <div className="grid grid-cols-9 gap-[1px] bg-gray-400">
            {board.map((row,rowIndex)=>(
                <div key={rowIndex} className="sudoku-row">
                    { row.map((cell,colIndex)=>(
                        <Cell 
                        key={`${rowIndex}-${colIndex}`}
                        value={cell.value}
                        fixed={cell!==null}
                        onChange={(value)=>onCellChange(rowIndex,colIndex,value)}
               
                        />
                    ) )}
                </div>
            ))}
        
        </div>
    );
}
export default Board;