import { useEffect, useState } from 'react';
import cookpotLogo from '../../../assets/cookpot.png';
import './Login.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../state/user/user.slice';

import axios from 'axios';

function Login() {
    useEffect(() => {
        document.title = 'cookpot | Login';
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signup, setSignup] = useState(false);

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupCPassword, setSignupCPassword] = useState('');

    const passwordRegex =
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

    async function doLogin(e) {
        e.preventDefault();

        const res = await axios.post(
            'http://localhost:4000/auth/login',
            {
                username: loginUsername,
                password: loginPassword,
            },
            {
                withCredentials: true,
                validateStatus: (status) => status >= 200 && status <= 500,
            }
        );

        if (res.status === 200) {
            dispatch(login());
            navigate('/discover');
        } else {
            alert(res.data.message);
        }
    }

    async function doSignin(e) {
        e.preventDefault();

        if (!passwordRegex.test(signupPassword)) {
            alert(
                'Password must contain a Number, a Capital letter, and Symbol! Length: 6 - 16 Characters'
            );
            return;
        }

        if (signupPassword !== signupCPassword) {
            alert('Passwords do not match');
            return;
        }

        const res = await axios.post(
            'http://localhost:4000/auth/signup',
            {
                username: signupUsername,
                password: signupPassword,
            },
            {
                withCredentials: true,
                validateStatus: (status) => status >= 200 && status <= 500,
            }
        );

        if (res.status === 201) {
            dispatch(login());
            navigate('/discover');
        } else {
            alert(res.data.message);
        }
    }

    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <div className="logo-container-login">
                        <img src={cookpotLogo} alt="" className="logo-login" />
                        <span className="logo-text-login">cookpot</span>
                    </div>
                    {signup ? (
                        <form
                            className="login-form-container"
                            onSubmit={async (e) => await doSignin(e)}
                        >
                            <div className="login-form">
                                <div className="login-field">
                                    <label
                                        htmlFor="username"
                                        className="login-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        value={signupUsername}
                                        onChange={(e) =>
                                            setSignupUsername(e.target.value)
                                        }
                                        type="text"
                                        className="login-input"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="login-field">
                                    <label htmlFor="pw" className="login-label">
                                        Password
                                    </label>
                                    <input
                                        id="pw"
                                        name="password"
                                        value={signupPassword}
                                        onChange={(e) =>
                                            setSignupPassword(e.target.value)
                                        }
                                        type="password"
                                        className="login-input"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="login-field">
                                    <label
                                        htmlFor="cpw"
                                        className="login-label"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        id="cpw"
                                        name="cpassword"
                                        value={signupCPassword}
                                        onChange={(e) =>
                                            setSignupCPassword(e.target.value)
                                        }
                                        type="password"
                                        className="login-input"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                className="standard-button form-button"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </form>
                    ) : (
                        <form
                            className="login-form-container"
                            onSubmit={async (e) => await doLogin(e)}
                        >
                            <div className="login-form">
                                <div className="login-field">
                                    <label
                                        htmlFor="username"
                                        className="login-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        value={loginUsername}
                                        onChange={(e) =>
                                            setLoginUsername(e.target.value)
                                        }
                                        type="text"
                                        className="login-input"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="login-field">
                                    <label
                                        htmlFor="cpw"
                                        className="login-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="cpw"
                                        name="password"
                                        value={loginPassword}
                                        onChange={(e) =>
                                            setLoginPassword(e.target.value)
                                        }
                                        type="password"
                                        className="login-input"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                className="standard-button form-button"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                    )}
                    <div className="pick-login">
                        <button
                            className={`switch-login-signup ${
                                signup ? '' : 'switch-selected'
                            }`}
                            onClick={() => setSignup(false)}
                        >
                            Login
                        </button>
                        <button
                            className={`switch-login-signup ${
                                signup ? 'switch-selected' : ''
                            }`}
                            onClick={() => setSignup(true)}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
