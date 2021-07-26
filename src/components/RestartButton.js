import React from 'react'

const RestartButton = (props) => {
  return(
    <div id='restartButton' onClick={props.restart}>Play again?</div>
  )
}

export default RestartButton
