import React from 'react';
import { Link } from 'react-router-dom';

export const Signup = (props) => (
    <div>
        <aside id="flash-success">
            <p>Your registration was successfull!</p>
        </aside>
        <div id="container">
            <header>
                <nav>
                    <div id="focus">
                        <p onClick={() => props.history.push('/login')}>Sign In</p>
                    </div>
                    <div>
                        <p onClick={() => props.history.push('/login')}>Sign Up</p>
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
                        <input type="text" name="username" id="username" placeholder="User name" />
                    </div>
                    <div>
                        <input type="text" name="email" id="email" placeholder="Email" />
                    </div>

                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </div>

                    <div>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />

                    </div>

                    <div id="submit">
                        <button>SIGN UP</button>
                    </div>
                </form>
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
    </div>
);