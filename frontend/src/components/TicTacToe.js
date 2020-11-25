
import React  from 'react';
import TicTacToe_Alpha_Beta, {checkGameOver} from "./AI";
        
import './css/TicTacToe.css';

const ButtonGroup = (props) => {
    return(
          <div className="btn-group">
            {props.children}
          </div>
      
      );

}

const Button = (props) =>{
  let active = null;
  if(props.text === props.level){
    active = "active";
  }
  return(
    <button className={active} onClick={() => props.click(props.text)}><strong>{props.text}</strong></button>
  );
}


const O = () =>{
  return(
    <svg height={100} width={100}>
      <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="6" fill="none" />
    </svg>
  );
}

const X = () =>{
  return(
    <svg height={100} width={100}>
      <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="6" />
      <line x1="0" y1="100" x2="100" y2="0" stroke="white" strokeWidth="6"/>
    </svg>
  );
}


const WinnerDisplay = (props) => {

  return(
      <div className="winner-wrap">
        <div className="winner-message">
          <span className="close" onClick={props.close}>&times;</span>
          <h2>{props.message}</h2>
        </div>
      </div>
  );
}


const Square = (props) =>{

  let disable = false;
  let display;

  if( props.player === 'X'){
    disable = true;
    display = <X />;
  }
  else if(props.player === 'O'){
    disable = true;
    display = <O />;
  }
 
  return(
      <div className="square">
          <button type="button" disabled={disable} onClick={()=> props.click(props.id)}>
            {display}
          </button>
      </div>
  )
}



class TicTacToe extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      squares : Array(9).fill(null),
      playerTurn: true,
      gameOver: false,
      winner_display: null,
      level: "Hard",
    };

    this.AI = new TicTacToe_Alpha_Beta();
  }

  handleClick = (index) => {

      let {squares, playerTurn, gameOver} = this.state;

      if(squares[index] !== null || gameOver || !playerTurn ){
          return;
      }

      squares[index] = 'O';

      this.setState({squares: squares, playerTurn: !playerTurn})

      if(this.game_over_update(squares) === false){
        this.AI_turn(squares);
      }     
  }

   AI_turn = async(squares) => {


    const ai_move = this.AI.make_move(squares, 'X', this.state.level);

    squares[ai_move] = 'X';

    this.setState({squares: squares, playerTurn: true});
    this.game_over_update(squares);

    return true;

  }

  game_over_update = (squares) =>{

    const winner = checkGameOver(squares);
    let winnerDisplayMessage;

    if(winner.gameOver){
      if(winner.winner){
          winnerDisplayMessage = winner.winner + " won!";
      }
      else{
          winnerDisplayMessage = "Tie!";
      }

      this.setState({gameOver: winner.gameOver, 
                    winner_display: <WinnerDisplay message={winnerDisplayMessage} close={this.closeWinnerDisplay}/>  });
      return true;
    }
    return false;
  }

  closeWinnerDisplay = () =>{
      this.setState({
                      winner_display: null, 
                      playerTurn: true, 
                      squares: Array(9).fill(null),
                      gameOver: false
                    });
  } 

  changeLevel = (newLevel) =>{
    this.setState({level: newLevel});
  }
  render(){
      const {squares, gameOver, winner_display, level} = this.state;

      return (
        <div className="TicTacToe">
          {gameOver && winner_display}
          <div className="board-controller">
              <ButtonGroup>
                <Button text="Easy" level={level} click={this.changeLevel}/> 
                <Button text="Hard" level={level} click={this.changeLevel}/>
                <button className="reset" onClick={this.closeWinnerDisplay}><strong>Reset</strong></button>
              </ButtonGroup>
          </div>
          <div className="board">
            {squares.map((player, index) => <Square key={index} 
                                                    id={index} 
                                                    player={player}
                                                    click={this.handleClick} />)}
          </div>
        </div>
      );
  }
}



export default TicTacToe;
