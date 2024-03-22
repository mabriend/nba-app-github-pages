import React from 'react'
import { getPlayers } from '../../api/getApi'
import Menu from '../Menu/Menu';
import Player from './Player';
import './Players.css'

const players = await getPlayers();

const Players = () => {

  return (
    <div>
        <Menu></Menu>

        <h1>NBA Players</h1>

        <hr/>

        <div className='PlayersForm'>
        <form>
              <span>Player Name : </span> 
              <input id="name" type="text" name="name"></input> 
              <button className='PlayersForm-submit'>Search</button>
        </form>
        </div>

        <div className="allPlayers">
          { players.map(player => <Player player={player}></Player>) }
        </div>
    </div>
  )
}

export default Players