import React from 'react';
import './form.css';

export const Form = () => (
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
);