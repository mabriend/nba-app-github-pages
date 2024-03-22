import axios from 'axios'

const getTeamsValues = async () => {
    const options = {
        method: 'GET',
        url: 'https://api.balldontlie.io/v1/teams',
        params: {page: '0'},
        headers: {
          "Authorization": "93a94e2f-51a3-474f-94d8-2411ca98fb11"
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data.data;
      } catch (error) {
          console.error(error);
      }
}

const getTodayGames = async (date) => {
    const options = {
        method: 'GET',
        url: 'https://api.balldontlie.io/v1/games?dates[]=' + date,
        params: {page: '0'},
        headers: {
          "Authorization": "93a94e2f-51a3-474f-94d8-2411ca98fb11"
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data.data;
      } catch (error) {
          console.error(error);
      }
}

const getTeamGames = async (teamId) => {
    const year = new Date().getFullYear() - 1;

    const options = {
        method: 'GET',
        url: 'https://api.balldontlie.io/v1/games?seasons[]=' + year +'&team_ids[]=' + teamId,
        params: {page: '0', per_page : '100'},
        headers: {
          "Authorization": "93a94e2f-51a3-474f-94d8-2411ca98fb11"
        }
      };
      
      try {
          const response = await axios.request(options);
          const games = response.data.data;
          games.sort(function(a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return d-c;
          });
          const gamesFinal = games.filter((game) => game.period > 0 ? game : null);
          return gamesFinal;
      } catch (error) {
          console.error(error);
      }
}

const getPlayers = async(name) => {
  const options = {
    method: 'GET',
    url: 'https://api.balldontlie.io/v1/players',
    params: {page: '0', per_page: '50'},
    headers: {
      "Authorization": "93a94e2f-51a3-474f-94d8-2411ca98fb11"
    }
  };
  
  try {
      const response = await axios.request(options);
      return response.data.data;
  } catch (error) {
      console.error(error);
  }
}

export { getTeamsValues, getTodayGames, getTeamGames, getPlayers }