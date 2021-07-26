import React, { Component } from 'react'

class Square extends Component{
  handleClick = () => {
    this.props.handleGameplay(this.props.index)
  }
  render(){
    return(
      <>
        <div id='square' onClick={() => this.handleClick(this.props.index)}>
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square
