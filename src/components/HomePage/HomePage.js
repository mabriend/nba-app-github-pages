import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (

    <div className="HomePage">
      <img src="https://freelogopng.com/images/all_img/1692211460nba-logo-png.png" alt="NBA Logo"/>

      <hr/>

        <Link to='/teams'>
            <div className='NavigationItem'>
                <h2>NBA Teams</h2>
                <p>Click to display all NBA teams</p>
            </div>
        </Link>

        <Link to='/games'>
            <div className='NavigationItem'>
                <h2>Today Games</h2>
                <p>Click to display today's schedule</p>
            </div>
        </Link>

    </div>

  );

}

export default HomePage;