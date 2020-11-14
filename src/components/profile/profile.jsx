import React from 'react';
import {Link} from 'react-router-dom';

export const Profile = (props) => (
    <div id="profile-container">
        <h1>Your Profile</h1>
        <p id="email">
            <strong>Email:</strong>
            immanueldiai@gmail.com
        </p>
        <p id="username">
            <strong>Username:</strong>
            immanuel
        </p>
    </div>
);