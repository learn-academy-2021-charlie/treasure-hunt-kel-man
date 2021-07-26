import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'
import GameStatus from './components/GameStatus'
import WinningCard from './components/WinningCard'
import LosingCard from './components/LosingCard'
import RestartButton from './components/RestartButton'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
      treasureLocation: null,
      bombLocation: null,
      guesses: 5,
      playing: true,
      winStatus: 2
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
    if(this.state.playing){
      const { board } = this.state
      let winStatus
      let playing = true
      if(index === this.state.treasureLocation){
        board[index] = '💎'
        winStatus = 1
        playing = false
      } else if(index === this.state.bombLocation){
        board[index] = '💣'
        winStatus = 0
        playing = false
      }else {
        board[index] = '🌴'
      }
      if(this.state.guesses === 1 && board[index] !== '💎'){
        winStatus = 0
        playing = false
      }
      this.setState({
        board: board,
        guesses: this.state.guesses - 1,
        winStatus: winStatus,
        playing: playing
      })
    }
  }

  restart = () => {
    let treasure = Math.floor(Math.random()*this.state.board.length)
    let bomb = Math.floor(Math.random()*this.state.board.length)
    while(bomb === treasure){
      bomb = Math.floor(Math.random()*this.state.board.length)
    }
    this.setState({
      treasureLocation: treasure,
      bombLocation: bomb,
      board: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
      guesses: 5,
      playing: true,
      winStatus: 2
    })
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        {this.state.winStatus === 1 && <WinningCard/>}
        {this.state.winStatus === 0 && <LosingCard/>}
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
        {!this.state.playing && <RestartButton restart={this.restart}/>}
      </>
    )
  }
}
export default App
