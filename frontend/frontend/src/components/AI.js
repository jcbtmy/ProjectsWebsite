
export function checkGameOver(board){
    //array of all possible wins
    const wins = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [6,4,2],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ];
    for(let i = 0; i < wins.length; i++){
        const win = wins[i];
        if( board[win[0]] !== null && board[win[0]] === board[win[1]] && board[win[0]] === board[win[2]]){
          return {gameOver: true, winner: board[win[0]]};
        }
    } 

    let movesLeft = 0;

    for(let i = 0; i < board.length; i++)
    {
        if(board[i] === null){
            movesLeft++;
        }
    }

    return (movesLeft === 0) ? {gameOver: true, winner: null} : {gameOver: false, winner: null };
}

export default class TicTacToe_Alpha_Beta{

    make_move(board, playerTurn, level){

        if(level === "Easy"){
            return this.randomChoice(board);
        }
        else{
            return this.Alpha_Beta_Search(board, playerTurn);
        }
    }
    
    randomChoice(board){
        const choices = this.moves_available(board);
        const index = Math.floor(Math.random() * choices.length);
        return choices[index];
    }

    Alpha_Beta_Search(board, playerTurn){

        let best_move = null;
        let alpha = Number.NEGATIVE_INFINITY;
        let beta = Number.POSITIVE_INFINITY;
        let moves = this.moves_available(board);
        let state = {board: [...board], moves_next: playerTurn};
        let v;

        for(let i = 0; i < moves.length; i++)
        {
            v = this.min_value(this.new_state(state, moves[i]), alpha, beta);
            if( v > alpha ){
                best_move = moves[i];
                alpha = v;
            }
        }

        return best_move;
    }

    moves_available(board){

        let moves = [];
        for(let i=0; i < board.length; i++){
            if(board[i] === null){
                moves.push(i);
            }
        }
        return moves;
    }

    min_value(state, alpha, beta){

        const winner = checkGameOver(state.board);

        if(winner.gameOver){
            return this.compute_utility(winner);
        }

        let v = Number.POSITIVE_INFINITY;
        let moves = this.moves_available(state.board);

        for(let i = 0; i < moves.length; i++){

            v = Math.min(v, this.max_value(this.new_state(state,moves[i]), alpha,beta));

            if( v <= alpha){
                return v;
            }

            beta = Math.min(beta, v);

        }
        return v;
    }

    max_value(state, alpha, beta){

        const winner = checkGameOver(state.board);

        if(winner.gameOver){
            return this.compute_utility(winner);
        }
        
        let moves = this.moves_available(state.board);
        let v = Number.NEGATIVE_INFINITY;

        for(let i = 0; i < moves.length; i++){

            v = Math.max(v, this.min_value(this.new_state(state, moves[i]), alpha, beta));
            
            if( v >= beta)
            {
                return v;
            }
            alpha = Math.max(alpha, v);
        }
        
        return v;
    }

    new_state(state, move){

        let move_state = {board: [...state.board]};
        move_state.board[move] = state.moves_next;
        move_state.moves_next = (state.moves_next === 'X') ? 'O' : 'X';
        return move_state;
    }

    compute_utility(winner){

        if(winner.winner === 'X'){
            return 1;
        }
        else if(winner.winner === 'O'){
            return -1;
        }
        else{
            return 0;
        }
    }
}