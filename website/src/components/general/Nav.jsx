import React from 'react'

import './Nav.css';

import cookpotLogo from '../../assets/cookpot.png';

function Nav() {
    return (
        <nav className='navbar-container'>
            <div className="navbar-left">
                <div className="logo-container">
                    <img src={cookpotLogo} alt="" className="logo" />
                    <span className="logo-text">cookpot</span>
                </div>
                <ul className="navbar-list">
                </ul>
            </div>
            <div className="navbar-right">
                <ul className="navbar-list">
                    <a href='/discover' className="navbar-item">Discover</a>
                    <a href='/search' className="navbar-item">Search</a>
                    <a href='/myrecipes' className="navbar-item">My Recipes</a>
                </ul>
                <a href='/login' className='login-button'>Login</a>
            </div>
        </nav>
    )
}

export default Nav