import './Games.css'
import Game from '../Game/Game';
import { getTeamGames, getTodayGames } from '../../api/getApi';
import { useEffect, useState } from 'react';
import Menu from '../Menu/Menu'
import { useParams } from 'react-router-dom';

const Games = (props) => {
  const [games, setGames] = useState([])
  const [gamesDefined, setGamesDefined] = useState(false)
  const [dateGame, setDateGame] = useState(new Date())

  const params = useParams()

  useEffect(() => {
    const getGamesScheduled = async() => {
      var today = new Date();
      if(today.getHours() < 12) {
        today.setDate(today.getDate() - 1)
      }
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      setDateGame(today);
      today = yyyy + '-' + mm + '-' + dd ;
      setGames(await getTodayGames(today))
    }

    const getGamesFromTeam = async() => {
      setGames(await getTeamGames(params.teamId))
    }

    const getNewSelectedGames = async() => {
      var dd = String(dateGame.getDate()).padStart(2, '0');
      var mm = String(dateGame.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = dateGame.getFullYear();
      const date = yyyy + '-' + mm + '-' + dd ;
      setGames(await getTodayGames(date))
    }

    if(params.teamId === undefined && gamesDefined === false) {
      getGamesScheduled()
      setGamesDefined(true)
    } else if (gamesDefined === false) {
      getGamesFromTeam()
      setGamesDefined(true)
    } else if (params.teamId === undefined) {
      getNewSelectedGames()
    }
  }, [gamesDefined, params.teamId, dateGame])

  const setSelectedDateGame = async (selectedDate) => {
    const newDate = new Date(dateGame); // Créez une nouvelle instance de Date basée sur la valeur actuelle de dateGame
    newDate.setDate(newDate.getDate() + selectedDate); // Ajoutez ou soustrayez le nombre de jours
    setDateGame(newDate);
  }

  return (
    <div className='Games'>

        <Menu></Menu>

        <h1 className='PageTitle'>{props.title}</h1>

        <hr/>

        { params.teamId === undefined ? <span className='DateNav'> 
          <img onClick={() => setSelectedDateGame(-1)} className='arrow-left' alt='Arrow left' src="https://cdn.icon-icons.com/icons2/1580/PNG/512/2849833-arrow-arrows-forward-interface-multimedia-navigation-right_107957.png"></img>
          { String(dateGame.getDate()).padStart(2, '0') } 
          - 
          { String(dateGame.getMonth() + 1).padStart(2, '0')}
          - 
          {dateGame.getFullYear()}
          <img onClick={() => setSelectedDateGame(1)} className='arrow-right' alt='Arrow right' src="https://cdn.icon-icons.com/icons2/1580/PNG/512/2849833-arrow-arrows-forward-interface-multimedia-navigation-right_107957.png"></img>
        </span> : null}

        <div className="allGames">
        { games.map(game => {
          if(game.period > 0) {
            return <Game game={game}></Game>
          }
          if(params.teamId !== null) {
            return <Game game={game}></Game>
          }
          return null
        } ) }
        </div>

    </div>
  );

}

export default Games