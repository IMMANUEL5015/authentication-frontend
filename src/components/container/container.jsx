import React from 'react';
import { Header } from '../header/header';
import { Main } from '../main/main';
import './container.css';

export const Container = (props) => (
    <div id="container">
        <Header {...props} focus="focus" />
        <Main />
        <footer>
            <p>or sign up with one of these services</p>
            <div id="oauth">
                <div id="facebook">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    FACEBOOK</div>
                <div id="twitter">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    TWITTER</div>
            </div>
        </footer>
    </div>
);