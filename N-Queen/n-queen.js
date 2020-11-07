let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let solution = 0;

let board = [];


function hasAnyQueensConflicts(x){ 
    for(let i=0; i<x; i++){ 
        if(board[i] === board[x]) { // 이전말과 같은 행 같은 열인지 체크
            return true;
        }
        if(Math.abs(board[x] - board[i]) === x-i){ // 대각선 체크
            return true;
        }
    }

    return false;
}


function findNQueen(row){
    if(row === num){
        solution ++;
        return;
    }
    for(let col=0; col<num; col++){
        board[row] = col;
        if(!hasAnyQueensConflicts(row)){ // 충돌 안한다면
            findNQueen(row+1);
        }
    }
}


findNQueen(0);

console.log(solution);

// 2번째
// for (let i = 0; i < num; i++) {
//     let arr = [];
//     for (let j = 0; j < num; j++) {
//         arr.push(0);
//     }
//     board.push(arr);
// }


// function hasAnyQueensConflicts(board, row, col) {
//     let count = 0;
//     for (let i = 0; i < num; i++) {
//         count = count + board[row][i] + board[i][col]; // 같은 행 같은 열 체크
//     }
//     console.log('1 : ' + count);
//     if (count > 2) {
//         return true;
//     }
//     count = 0;
//     for (let i = 0, j = row + col; i < num && j >= 0; i++, j--) { // 슬래시 대각선 체크
//         count = count + board[i][j];
//     }
//     console.log('2 : ' + count);

//     for (let i = 0, j = col - row; i < num && j < num; i++, j++) { // 역슬래시 대각선 체크
//         count = count + board[i][j];
//     }
//     console.log('3 : ' + count);

//     return count > 2;
// }

// function findNQueen(row) {
//     if (row === num) {
//         solution++;
//         return;
//     }
//     for (let col = 0; col < num; col++) { // 충돌 안한다면
//         board[row][col] = 1;
//         if (!hasAnyQueensConflicts(board, row, col)) {
//             findNQueen(row + 1);
//         }
//         board[row][col] = 0;
//     }
// }

// 3번째
// function hasAnyQueensConflicts(x){ 
//     for(let i=0; i<x; i++){ 
//         if(board[i] === board[x]) { // 같은 행 같은 열 체크
//             return true;
//         }
//         if(Math.abs(board[x] - board[i]) === x-i){ // 대각선 체크
//             return true;
//         }
//     }

//     return false;
// }


// function findNQueen(row){
//     if(row === num){
//         solution ++;
//         return;
//     }
//     for(let col=0; col<num; col++){
//         board[row] = col;
//         if(!hasAnyQueensConflicts(row)){ // 충돌 안한다면
//             findNQueen(row+1);
//         }
//     }
// }

/* 4번째

const N = num;
const col = [];
const result = 0;

function promising(i)
{
    for(let j=0;j<i;j++)
    {
        // 새로운 퀸과 기존의 퀸이 같은 행에 있거나 대각선에 있을 경우
        if(col[j] == col[i] || Math.abs(col[i]-col[j]) == (i-j))
            return false;
    }
    return true;
}
function N_Queen(i)
{
    if(i == N)
        result += 1;
    else
    {
        for(let j=0;j<N;j++)
        {
            col[i] = j;
            if(promising(i))
                N_Queen(i+1);
        }
    }
}

    N_Queen(0);

    console.log(result);
*/