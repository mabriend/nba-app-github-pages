import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleMenu = () => {
        setShowLinks(!showLinks);
    };

    return (
        <div className="Menu">
            <div className="ImageAndIcon">
                <img src="https://freelogopng.com/images/all_img/1692211460nba-logo-png.png" alt="NBA Logo"/>
                <button className="menu-toggle-btn" onClick={toggleMenu}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" 
                    alt="Menu"/>
                </button>
            </div>
            <ul className={showLinks ? "show" : ""}>
                <Link to='/' className="menu-li"><li>Home</li></Link>
                <Link to='/teams' className="menu-li"><li>Teams</li></Link>
                <Link to='/games' className="menu-li"><li>Games</li></Link>
            </ul>
        </div>
    )
}

export default Menu;
