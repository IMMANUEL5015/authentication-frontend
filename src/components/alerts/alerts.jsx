import React from 'react';
import './alerts.css';

export const Alert = (props) => (
    <div>
        <aside id={props.success} className="flash">
            <p>{props.message}</p>
        </aside>
    </div>
);