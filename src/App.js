import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ['?', '?', '?', '?', '?', '?', '?', '?', '?']
    }
  }

  handleGameplay = (index) => {
    const { board } = this.state
    board[index] = '🌴'
    this.setState({board: board})
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
      </>
    )
  }
}
export default App
