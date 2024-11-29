import React from "react";
const Cell=({value,fixed,onChange})=>{
    return (
        <input
        type="text"
        className={`sudoku-cell${fixed ? 'fixed': ''}`}
        value={value|| ''}
        disabled={fixed}
        onChange={(e)=>onChange(e.target.value)}
    
    />
);
}
export default Cell;