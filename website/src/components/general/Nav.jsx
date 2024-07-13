import cookpotLogo from '../../assets/cookpot.png';
import './Nav.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../state/user/user.slice';


function Nav() {
    const loggedIn = useSelector(state => state.user.loggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                { loggedIn ? 
                    <a onClick={() => { dispatch(logout()); navigate('/discover') }} className='login-button'>Logout</a>
                    :
                    <a onClick={() => navigate('/login')} className='login-button'>Login</a>
                }
            </div>
        </nav>
    )
}

export default Nav