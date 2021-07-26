import React from 'react'

// Testing out using functional components within a class app, works fine
const GameStatus = (props) => {
  return(
    <>
      <div id='counter'>
        {props.guesses}
      </div>
    </>
  )
}

export default GameStatus
