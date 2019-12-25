import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="Nav">
            <ul className="nav-links-left">
                <Link to='/'>
                    <li>App</li>
                </Link>
            </ul>
            <ul className="nav-links-right">
                <Link to='/designs'>
                    <li>Designs</li>
                </Link>
                <Link to='/instructions'>
                    <li>Instructions</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;