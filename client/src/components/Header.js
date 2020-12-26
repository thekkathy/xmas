import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import './CSS/Header.css';

const Header = () =>    {
    return(
        <div className="navbar">
            <Link to="/openPresent" className="headerLink">
                Open present
            </Link>
            <Link to="/list" className="headerLink">
                Present List
            </Link>
            <GoogleAuth />
        </div>
    )
}

export default Header;