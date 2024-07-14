import cookpotLogo from '../../assets/cookpot.png';
import './Nav.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../state/user/user.slice';

import axios from 'axios';

function Nav() {
    const loggedIn = useSelector((state) => state.user.loggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogout() {
        const res = await axios.delete('http://localhost:4000/auth/logout', {
            withCredentials: true,
            validateStatus: (status) => status >= 200 && status <= 500,
        });

        if (res.status === 204) {
            dispatch(logout());
            navigate('/discover');
        } else {
            alert('Failed to logout');
        }
    }

    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <div className="logo-container">
                    <img src={cookpotLogo} alt="" className="logo" />
                    <span className="logo-text">cookpot</span>
                </div>
            </div>
            <div className="navbar-right">
                <ul className="navbar-list">
                    <a
                        onClick={() => navigate('/discover')}
                        className="navbar-item"
                    >
                        Discover
                    </a>
                    <a
                        onClick={() => navigate('/search')}
                        className="navbar-item"
                    >
                        Search
                    </a>
                    <a
                        onClick={() => navigate('/myrecipes')}
                        className="navbar-item"
                    >
                        My Recipes
                    </a>
                </ul>
                {loggedIn ? (
                    <a
                        onClick={async () => await handleLogout()}
                        className="standard-button"
                    >
                        Logout
                    </a>
                ) : (
                    <a
                        onClick={() => navigate('/login')}
                        className="standard-button"
                    >
                        Login
                    </a>
                )}
            </div>
        </nav>
    );
}

export default Nav;
