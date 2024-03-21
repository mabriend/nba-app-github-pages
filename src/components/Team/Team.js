import React from 'react';
import './Team.css';
import teamsLogos from '../../const/teamsLogos';
import { Link } from 'react-router-dom';

const Team = ({team}) => {

    if(team.name === 'Trail Blazers') {
        team.name = 'Blazers';
    } else if(team.name === '76ers') {
        team.name = 'Sixers';
    }

    return (
        <Link to={'/teams/games/' + team.id}>
            <div className="Team">
                <div className="Team-informations">
                    <h1>{ team.name }</h1>
                    <span>{ team.full_name }</span>
                </div>
                <img src={teamsLogos[`${team.name.toUpperCase()}_LOGO`]} alt="logo"></img>
            </div>
        </Link>
    )

}

export default Team;