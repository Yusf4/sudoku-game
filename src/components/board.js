import React from "react";
import Cell from "./cell";
const Board=({board,onCellChange})=>{
    return (
        <div className="grid grid-cols-3 gap-[2px] bg-gray-600 p-[10px]">
            {board.map((block,blockIndex)=>(
                <div key={blockIndex} className="grid grid-cols-3 gap-[1px] bg-gray-300 p-[5px]">
                    { block.map((cell,cellIndex)=>{
                       const value= cell!==null ? cell:null ;
                       const fixed=cell !==null ;
                       return (
                        <Cell 
                        key={`${blockIndex}-${cellIndex}`}
                        value={value}
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