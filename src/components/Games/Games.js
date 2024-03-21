import './Games.css'
import Game from '../Game/Game';
import { getTeamGames, getTodayGames } from '../../api/getApi';
import { useEffect, useState } from 'react';
import Menu from '../Menu/Menu'
import { useParams } from 'react-router-dom';

const Games = (props) => {
  const [games, setGames] = useState([])
  const [gamesDefined, setGamesDefined] = useState(false)

  const params = useParams()

  useEffect(() => {
    const getGamesScheduled = async() => {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = yyyy + '-' + mm + '-' + dd ;
      setGames(await getTodayGames(today))
    }

    const getGamesFromTeam = async() => {
      setGames(await getTeamGames(params.teamId))
    }

    if(params.teamId === undefined && gamesDefined === false) {
      getGamesScheduled()
      setGamesDefined(true)
    } else if (gamesDefined === false) {
      getGamesFromTeam()
      setGamesDefined(true)
    }
  }, [gamesDefined, setGamesDefined, games, params.teamId])

  return (
    <div className='Games'>

        <Menu></Menu>

        <h1 className='PageTitle'>{props.title}</h1>

        <hr/>

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