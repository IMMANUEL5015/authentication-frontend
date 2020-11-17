import React from 'react';
import './input.css';

export const Input = ({ type, name, id, placeholder }) => (
    <div>
        <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
);