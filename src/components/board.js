import React from "react";
import Cell from "./cell";
const Board=({board,onCellChange})=>{
    return (
        <div className="grid grid-cols-3 gap-[2px] bg-gray-600 p-[10px]">
            {board.map((block,blockIndex)=>(
                <div key={blockIndex} className="grid grid-cols-3 gap-[1px] bg-gray-300 p-[5px]">
                    { block.map((cell,cellIndex)=>{
                   const    value = cell && typeof cell === "object" ? cell.value : cell;
                       const isWrong = cell && typeof cell === "object" ? cell.isWrong : false;
                       const fixed = cell !== null && typeof cell !== "object"; // Fixed cells are non-object values
                       return (
                        <Cell 
                        key={`${blockIndex}-${cellIndex}`}
                        value={value}
                        isWrong={isWrong}
                        fixed={fixed}
                        onChange={(newValue)=>onCellChange(blockIndex,cellIndex,newValue)}
                        
                        />
                    );
})}
</div>
                       
                     
                
            ))}
        
        </div>
    );
}
export default Board;