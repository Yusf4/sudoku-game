export const generateSudoku=(level)=>{
  const levels={
    Easy:30,
    Medium:45,
    Hard:60,
    Expert:65,
  };

  const blanks=levels[level];

  //console.log("blanks:"+blanks);
  const generateSolvedBoard = () => {
    const board = Array.from({ length: 9 }, () => Array(9).fill(null));
    
    // Shuffle numbers before solving
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Fill the board with shuffled numbers and solve
    for (let i = 0; i < 9; i++) {
        board[0][i] = numbers[i];
    }

    solveSudoku(board);
    return board;
};

    
    const removeCells=(board,numberToRemove)=>{
        const puzzle=JSON.parse(JSON.stringify(board));
        let cellsRemoved=new Set();
        while(cellsRemoved.size<numberToRemove){
            const row=Math.floor(Math.random() *9);
            const col=Math.floor(Math.random()*9);
          const key=`${row},${col}`;
            if(!cellsRemoved.has(key) && puzzle[row][col]!==null){
                puzzle[row][col]=null;
                cellsRemoved.add(key);
            }
        }
        return puzzle;
    };
    const baseBoard=generateSolvedBoard();
   const solution= JSON.parse(JSON.stringify(baseBoard));
    const puzzle=removeCells(baseBoard,blanks);
    return {puzzle,solution};
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