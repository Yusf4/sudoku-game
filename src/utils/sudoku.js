export const generateSudoku=()=>{
    const puzzle=[
        [5, 3, null, null, 7, null, null, null, null],
        [6, null, null, 1, 9, 5, null, null, null],
        [null, 9, 8, null, null, null, null, 6, null],
        [8, null, null, null, 6, null, null, null, 3],
        [4, null, null, 8, null, 3, null, null, 1],
        [7, null, null, null, 2, null, null, null, 6],
        [null, 6, null, null, null, null, 2, 8, null],
        [null, null, null, 4, 1, 9, null, null, 5],
        [null, null, null, null, 8, null, null, 7, 9],
    ];
    const solution = JSON.parse(JSON.stringify(puzzle));
    solveSudoku(solution);
    return {puzzle,solution};
};
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