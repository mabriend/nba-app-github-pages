import React from 'react'
import './PlayerInformation.css'
import teamsLogos from '../../const/teamsLogos';

const PlayerInformation = (props) => {

  if(props.player.team.name === 'Trail Blazers') {
    props.player.team.name = 'Blazers';
} else if(props.player.team.name === '76ers') {
    props.player.team.name = 'Sixers';
}

  return (
    <div className='PlayerInformation'>
      <img onClick={props.handleChange} alt='Close Player Information' src='https://cdn.icon-icons.com/icons2/930/PNG/512/cross_icon-icons.com_72347.png'></img>
      <span className='PlayerName'>{ props.player.first_name + " " + props.player.last_name }</span>
      <hr/>
      <span className='PlayerDetails'>Country : { props.player.country }</span>
      <span className='PlayerDetails'>Number : { props.player.jersey_number }</span>
      <img src={teamsLogos[`${props.player.team.name.toUpperCase()}_LOGO`]} alt="logo"></img>
      <span className='PlayerDetails'>{ props.player.team.full_name }</span>
    </div>
  )
}

export default PlayerInformation