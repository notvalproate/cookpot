import { useState } from 'react';
import cookpotLogo from '../../../assets/cookpot.png';
import './Login.css';

function Login() {
    const [signup, setSignup] = useState(true);

    function doLogin() {
        console.log('login');
    }

    function doSignin() {
        console.log('signin');
    }

    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <div className="logo-container-login">
                        <img src={cookpotLogo} alt="" className="logo-login" />
                        <span className="logo-text-login">cookpot</span>
                    </div>
                    { signup ?
                        <div className="login-form-container">
                            <form className="login-form">
                                <div className="login-field">
                                    <label htmlFor="username" className="login-label">Username</label>
                                    <input id="username" name="username" type="text" className="login-input" autoComplete="off"/>
                                </div>
                                <div className="login-field">
                                    <label htmlFor="pw" className="login-label">Password</label>
                                    <input id="pw" name="password" type="password" className="login-input" autoComplete="off"/>
                                </div>
                                <div className="login-field">
                                    <label htmlFor="cpw" className="login-label">Confirm Password</label>
                                    <input id="cpw" name="cpassword" type="password" className="login-input" autoComplete="off"/>
                                </div>
                            </form>
                            <button className="standard-button form-button" onClick={doSignin}>Sign Up</button>
                        </div>
                        :
                        <div className="login-form-container">
                            <div className="login-form">
                                <div className="login-field">
                                    <label htmlFor="username" className="login-label">Username</label>
                                    <input id="username" name="username" type="text" className="login-input" autoComplete="off"/>
                                </div>
                                <div className="login-field">
                                    <label htmlFor="cpw" className="login-label">Password</label>
                                    <input id="cpw" name="password" type="password" className="login-input" autoComplete="off"/>
                                </div>
                            </div>
                            <button className="standard-button form-button" onClick={doLogin}>Login</button>
                        </div>
                    }
                    <div className="pick-login">
                        <button className={`switch-login-signup ${signup ? '' : 'switch-selected'}`} onClick={() => setSignup(false)}>Login</button>
                        <button className={`switch-login-signup ${signup ? 'switch-selected' : ''}`} onClick={() => setSignup(true)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;