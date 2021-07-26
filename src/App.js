import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'
import GameStatus from './components/GameStatus'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
      treasureLocation: null,
      bombLocation: null,
      guesses: 5,
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
    if(index === this.state.treasureLocation){
      board[index] = '💎'
    } else if(index === this.state.bombLocation){
      board[index] = '💣'
    }else {
      board[index] = '🌴'
    }
    this.setState({
      board: board,
      guesses: this.state.guesses - 1
    })
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
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
