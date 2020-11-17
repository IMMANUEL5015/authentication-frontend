import React from 'react';
import { Input } from '../input/input';
import './form.css';

export const Form = () => (
    <form action="#">
        <Input type="text" name="username" id="username" placeholder="User name" />
        <Input type="text" name="email" id="email" placeholder="Email" />
        <Input type="password" name="password" id="password" placeholder="Password" />
        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
        <div id="submit">
            <button>SIGN UP</button>
        </div>
    </form>
);