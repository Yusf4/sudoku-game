export const generateSudoku=()=>{
  
    const generateSolvedBoard=()=>{
        const board=Array.from({length:9},()=>Array(9).fill(null));
        solveSudoku(board);
        return board;
    }
    const removeCells=(board,numberToRemove)=>{
        const puzzle=JSON.parse(JSON.stringify(board));
        let cellsRemoved=0;
        while(cellsRemoved<numberToRemove){
            const row=Math.floor(Math.random() *9);
            const col=Math.floor(Math.random()*9);
            if(puzzle[row][col]!==null){
                puzzle[row][col]=null;
                cellsRemoved++;
            }
        }
        return puzzle;
    };
    const baseBoard=generateSolvedBoard();
    const puzzle=removeCells(baseBoard,50);
    return {puzzle,solution:baseBoard};
   /* const solution = JSON.parse(JSON.stringify(puzzle));
    solveSudoku(solution);
    return {puzzle,solution};*/
};
/*const flattenBoard=(board)=>{
    const flatBoard=Array.from({length :9},()=>
    Array(9).fill(null));
    board.forEach((block,blockIndex)=>{
        const startRow=Math.floor(blockIndex/3)*3;
        const startCol=(blockIndex %3)*3;
        block.forEach((row,rowIndex)=>{
            row.forEach((value,colIndex)=>{
                flatBoard[startRow+rowIndex][startCol+colIndex]=value;
            });
        });
    });
    return flatBoard;
}*/
const isValidMove=(board,row,col,value)=>{
    for(let i=0;i<9;i++){
        if(board[row][i]==value || board[i][col]===value) return false;
        const gridRow=Math.floor(row/3)*3 +Math.floor(i/3);
        const gridCol=Math.floor(col/3)*3 +(i%3);
        if(board[gridRow][gridCol]===value) return false;

    }
    return true;
};
const solveSudoku=(board)=>{
    for(let row=0;row<9;row++){
        for(let col=0;col<9;col++){
            if(board[row][col]===null){
                for(let value=1;value<=9;value++){
            if(isValidMove(board,row,col,value)){
                board[row][col]=value;
                if(solveSudoku(board))return true;
                board[row][col]=null;
            }
            }
            return false;
        }
    }
}
return true;
}