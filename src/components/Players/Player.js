import React from 'react'
import './Player.css'

const Player = (props) => {
    const player = props.player

  return (
    <div className='Player'>
        <span>{ player.first_name + " " + player.last_name }</span>
    </div>
  )
}

export default Player