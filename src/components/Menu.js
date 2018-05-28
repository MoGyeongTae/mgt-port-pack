import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './css/Menu.css';

const Menu = () => {
    return (
        <div className="Menu">
            <ul className="menu">
                <NavLink exact to="/" className="item" activeClassName="active"><span>PortFolio</span></NavLink>
                <NavLink to="/about" className="item" activeClassName="active"><span>About</span></NavLink>
                <NavLink to="/contact" className="item" activeClassName="active"><span>Contact</span></NavLink>
            </ul>
        </div>
    )
}

export default Menu;