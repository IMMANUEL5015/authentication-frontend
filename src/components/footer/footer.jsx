import React from 'react';
import './footer.css';

export const Footer = (props) => (
    <footer>
        <p>{props.text}</p>
        <div id="oauth">
            <div id="facebook">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                FACEBOOK</div>
            <div id="twitter">
                <i class="fa fa-twitter" aria-hidden="true"></i>
                TWITTER</div>
        </div>
    </footer>
);