import React from 'react';
import './header.css';

export const Header = (props) => (
    <header>
        <nav>
            <div id={props.focus}>
                <p onClick={() => props.history.push('/login')}>Sign In</p>
            </div>
            <div>
                <p onClick={() => props.history.push('/signup')}>Sign Up</p>
            </div>
        </nav>
    </header>
);