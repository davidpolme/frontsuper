import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss'

const Header = () => (
    <header className="header">
        <div className="header__menu">
            <Link to="/home">Inicio</Link>
        </div>
    </header>

);

export default Header;
