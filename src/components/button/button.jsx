import React from 'react';
import './button.css';

export const Button = (props) => (
    <div id="submit">
        <button>{props.text}</button>
    </div>
);