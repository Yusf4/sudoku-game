import React from "react";
const Cell=({value,fixed,onChange,isWrong})=>{
    /*const handleCellChange=(e)=>{
        const newValue=parseInt(e.target.value,10);
        if(!isNaN(newValue)){
            onChange(newValue);
        }
    }*/
    const displayValue=value && typeof value==="object"? value.value:value;
    return (
        <input
        type="text"
        maxLength="1"
        className={`w-10 h-10 text-center text-lg border ${
          fixed ?   "bg-gray-200 cursor-not-allowed"
          : isWrong
          ? "text-red-500 border-red-500"
          : "bg-white"
        }`}
        value={displayValue|| ''}
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