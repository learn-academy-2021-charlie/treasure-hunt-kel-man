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

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div id='gameboard'>
          {this.state.board.map((value, index) => {
             return <Square value={value} key={index}/>
          })}
        </div>
      </>
    )
  }
}
export default App
