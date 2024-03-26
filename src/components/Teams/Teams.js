import './Teams.css'
import { getTeamsValues } from '../../api/getApi';
import Team from '../Team/Team';
import React from 'react';
import Menu from '../Menu/Menu';

const teams = await getTeamsValues();

const Teams = () => {

  return (
      <div>

        <Menu></Menu>

        <h1 className='PageTitle'>NBA Teams</h1>

        <hr/>

        <div className="allTeams">
          { teams.map(team => team.id <= 30 ? <Team team={team} id={Math.random()}></Team> : null) }
        </div>

      </div>
  );

}

export default Teams