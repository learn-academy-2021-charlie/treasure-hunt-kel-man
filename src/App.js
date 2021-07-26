import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'
import GameStatus from './components/GameStatus'
import WinningCard from './components/WinningCard'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
      treasureLocation: null,
      bombLocation: null,
      guesses: 5,
      playing: true,
      winStatus: 1,
    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random()*this.state.board.length)
    let bomb = Math.floor(Math.random()*this.state.board.length)
    while(bomb === treasure){
      bomb = Math.floor(Math.random()*this.state.board.length)
    }
    this.setState({
      treasureLocation: treasure,
      bombLocation: bomb
    })
  }

  handleGameplay = (index) => {
    const { board } = this.state
    let winStatus
    if(index === this.state.treasureLocation){
      board[index] = '💎'
      winStatus = 2
    } else if(index === this.state.bombLocation || this.state.guesses == 0){
      board[index] = '💣'
      winStatus = 1
    }else {
      board[index] = '🌴'
    }
    this.setState({
      board: board,
      guesses: this.state.guesses - 1,
      winStatus: winStatus
    })
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        {this.state.winStatus === 2 && <WinningCard/>}
        <div id='gameboard'>
          {this.state.board.map((value, index) => {
            return (
              <Square
              index={index}
              value={value}
              key={index}
              handleGameplay={this.handleGameplay}
              />
            )
          })}
        </div>
        <GameStatus guesses={this.state.guesses}/>
      </>
    )
  }
}
export default App
