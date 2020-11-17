import React from 'react';
import { Header } from '../header/header';
import { Main } from '../main/main';
import './container.css';
import { Footer } from '../footer/footer';

export const Container = (props) => (
    <div id="container">
        <Header {...props} focus="focus" />
        <Main />
        <hr />
        <Footer text="or sign up with one of these services">
        </Footer>
    </div>
);