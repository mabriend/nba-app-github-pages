import React, { useEffect } from 'react'
import { getAllPlayers, getSearchedPlayers } from '../../api/getApi'
import Menu from '../Menu/Menu';
import Player from './Player';
import './Players.css'
import { useState } from 'react';


const Players = (props) => {
    const [players, setPlayers] = useState([])
    const [playerName, setPlayerName] = useState('')
    const [playersDefined, setPlayersDefined] = useState(false)

    useEffect(() => {
        const getPlayersList = async() => {
            setPlayers(await getAllPlayers())
        }

        if(playersDefined === false) {
            getPlayersList()
            setPlayersDefined(true)
        }
    }, [setPlayersDefined, playersDefined])

    const handleChange = (event) => {
        const name = event.target.value
        setPlayerName(name)
    }

    const handleSearchPlayers = async() => {
        setPlayers(await getSearchedPlayers(playerName))
    }

  return (
    <div>
        <Menu></Menu>

        <h1>NBA Players</h1>

        <hr/>

        <div className='PlayersForm'>
              <span>Player Name : </span> 
              <input autoComplete='off' id="name" type="text" name="name" value={playerName} onChange={handleChange}></input> 
              <button onClick={handleSearchPlayers} className='PlayersForm-submit'>Search</button>
        </div>

        <div className="allPlayers">
          { players.map(player => <Player player={player}></Player>) }
        </div>
    </div>
  )
}

export default Players