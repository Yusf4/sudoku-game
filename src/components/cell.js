import React from "react";
const Cell=({value,fixed,onChange})=>{
    return (
        <input
        type="text"
        maxLength="1"
        className={`w-10 h-10 text-center text-lg border ${
          fixed ? 'bg-gray-300 font-bold' : 'bg-white'
        }`}
        value={value|| ''}
        disabled={fixed}
        onChange={(e)=>{
            const val= parseInt(e.target.value,10);
            if(val>=1 && val<=9){
                onChange(val);
            }
            else{
                onChange(null);
            }
        }}
    
    />
);
}
export default Cell;