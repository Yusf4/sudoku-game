import React from "react";
import Cell from "./cell";
const Board=({board,onCellChange})=>{
    return (
        <div className="grid grid-cols-9 gap-[1px] bg-gray-400">
            {board.map((row,rowIndex)=>(
                <div key={rowIndex} className="sudoku-row">
                    { row.map((cell,colIndex)=>{
                       const value= cell!==null ? cell:null ;
                       const fixed=cell !==null ;
                       return (
                        <Cell 
                        key={`${rowIndex}-${colIndex}`}
                        value={value}
                        fixed={fixed}
                        onChange={(newValue)=>onCellChange(rowIndex,colIndex,newValue)}
                        
                        />
                    );
})}
</div>
                       
                     
                
            ))}
        
        </div>
    );
}
export default Board;