import React from "react";

const Cell = ({ value, fixed, onChange, isWrong }) => {
    // Extract display value
    const displayValue = value && typeof value === "object" ? value.value : value;

    return (
        <input
            type="text"
            maxLength="1"
            className={`w-10 h-10 text-center font-bold border ${
                fixed
                    ? "bg-gray-200 cursor-not-allowed"
                    : isWrong
                    ? "text-red-500 border-red-500"
                    : "bg-white text-black"
            }`}
            value={displayValue || ""}
            disabled={fixed && displayValue!==null} // Disable only fixed cells
            onChange={(e) => {
                const inputValue = e.target.value;

                if (inputValue === "") {
                    // Clear the value if the input is empty
                    onChange(null);
                } else {
                    const val = parseInt(inputValue, 10);
                    if (val >= 1 && val <= 9) {
                        // Accept only valid Sudoku values (1-9)
                        onChange(val);
                    }
                }
            }}
        />
    );
};

export default Cell;
