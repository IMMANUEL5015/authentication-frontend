import React from 'react';
import './main.css';

export const Main = () => (
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
);