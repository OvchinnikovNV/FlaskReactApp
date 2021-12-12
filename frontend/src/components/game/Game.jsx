import React, { Component} from "react";
import './game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: '',
      gameChoice: '',
      winner: '',
      userScore: 0,
      gameScore: 0
    }
    this.userChoice = ''
    this.gameChoice = ''
    this.winner = ''
  }

  clickStone = () => {
    this.userChoice = 'stone'
    this.gameChoicer()
    this.getResult()
  }

  clickScissors = () => {
    this.userChoice = 'scissors'
    this.gameChoicer()
    this.getResult()
  }

  clickPaper = () => {
    this.userChoice = 'paper'
    this.gameChoicer()
    this.getResult()
  }

  gameChoicer = () => {
    let arr = ["stone", "scissors", "paper"]
    this.gameChoice = arr[Math.floor(Math.random() * 3)]
  }

  getResult = () => {
    if (this.userChoice == this.gameChoice) {
      this.setState({
        userChoice: this.userChoice,
        gameChoice: this.gameChoice,
        winner: 'draw'
      })
      return
    }

    switch (this.userChoice) {
      case 'stone':
        if (this.gameChoice === 'scissors')
          this.winner = 'user'
        else
          this.winner = 'game'
        break
      
      case 'scissors':
        if (this.gameChoice === 'paper')
          this.winner = 'user'
        else
          this.winner = 'game'
        break

      case 'paper':
        if (this.gameChoice === 'stone')
          this.winner = 'user'
        else
          this.winner = 'game'
        break

      default:
        console.log('Switch Error!')
    }

    this.setState((state) => {
      return {
        userChoice: this.userChoice,
        gameChoice: this.gameChoice,
        winner: this.winner,
        userScore: this.winner == 'user' ? state.userScore + 1 : state.userScore,
        gameScore: this.winner == 'game' ? state.gameScore + 1 : state.gameScore
      }
    })
  }

  choice = (
    <div className="choice">
      <img src={require("./stone.png")} onClick={this.clickStone}/>
      <img src={require("./scissors.png")} onClick={this.clickScissors}/>
      <img src={require("./paper.png")} onClick={this.clickPaper}/>
    </div>
  )

  render() {
    if (this.state.userChoice == "") {
      return(this.choice)
    } else {
      return(
        <>
          {this.choice}
          <div className="choice">
            <img src={require('./' + this.state.userChoice + '.png')} />
            <img src={require("./vs.png")} />
            <img src={require('./' + this.state.gameChoice + '.png')} />
          </div>
          <div className="result">
            {this.state.winner}<br/>
            {this.state.userScore} - {this.state.gameScore}
          </div>
        </>
      )
    }
  }
}

export default Game;
