import React from 'react';
import { Alert } from '../alerts/alerts.jsx';
import { Container } from '../container/container';

export const Signup = (props) => (
    <div>
        <Alert success="flash-success" message="Your registration was successfull!" />
        <Container {...props} />
    </div>
);