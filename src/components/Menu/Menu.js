import React from "react";
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {

    return (
        <div className="Menu">
            <img src="https://freelogopng.com/images/all_img/1692211460nba-logo-png.png" alt="NBA Logo"/>
            <ul>
                <Link to='/' className="menu-li"><li>Home</li></Link>
                <Link to='/teams' className="menu-li"><li>Teams</li></Link>
                <Link to='/games' className="menu-li"><li>Games</li></Link>
            </ul>
        </div>
    )

}

export default Menu;