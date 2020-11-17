import React from 'react';
import { Alert } from '../alerts/alerts.jsx';

export const Login = (props) => (
    <div>
        <Alert success="flash-error" message="Please confirm your password!" />
        <div id="container">
            <header>
                <nav>
                    <div>
                        <p onClick={() => props.history.push('/login')}>Sign In</p>
                    </div>
                    <div id="focusTwo">
                        <p onClick={() => props.history.push('/signup')}>Sign Up</p>
                    </div>
                </nav>
            </header>

            <main>
                <h1>Log Into Your Account</h1>
                <p>
                    Your student account is your portal to all things Educef: your classroom, projects, forums, career resources and more!
                </p>
                <form action="#">
                    <div>
                        <input type="text" name="email" id="email" placeholder="Email" />
                    </div>

                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <div id="submit">
                        <button>SIGN IN</button>
                    </div>
                </form>

                <p>Forgot your password?</p>

                <hr />
            </main>

            <footer>
                <p>or sign up with one of these services</p>
                <div id="oauth">
                    <div id="facebook">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        FACEBOOK</div>
                    <div id="twitter">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        TWITTER</div>
                </div>
            </footer>
        </div>
        <aside id="last">Having trouble logging in?</aside>
    </div>
);