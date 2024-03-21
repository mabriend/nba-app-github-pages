import './Game.css';
import teamsLogos from '../../const/teamsLogos';

const Game = ({game}) => {

    if(game.visitor_team.name === 'Trail Blazers') {
        game.visitor_team.name = 'Blazers';
    } else if(game.visitor_team.name === '76ers') {
        game.visitor_team.name = 'Sixers';
    }

    if(game.home_team.name === 'Trail Blazers') {
        game.home_team.name = 'Blazers';
    } else if(game.home_team.name === '76ers') {
        game.home_team.name = 'Sixers';
    }

    return (
        <div className="Game">
            <span> {game.date} </span>
            <span>{ game.visitor_team.name } @ { game.home_team.name }</span>
            <span>
                <img src={teamsLogos[`${game.visitor_team.name.toUpperCase()}_LOGO`]} alt="logo"></img> 
                <img src={teamsLogos[`${game.home_team.name.toUpperCase()}_LOGO`]} alt="logo"></img> 
                </span>
            <span>{ game.visitor_team_score } - { game.home_team_score }</span>
        </div>
    )

}

export default Game;