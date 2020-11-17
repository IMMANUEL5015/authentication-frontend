import React from 'react';
import { Alert } from '../alerts/alerts.jsx';
import { Footer } from '../footer/footer';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Intro } from '../intro/intro.jsx';
import { Header } from '../header/header';

export const Login = (props) => (
    <div>
        <Alert success="flash-error" message="Please confirm your password!" />
        <div id="container">
            <Header {...props} focusTwo="focusTwo" />
            <main>
                <Intro></Intro>
                <form action="#">
                    <Input type="text" name="email" id="email" placeholder="Email" />
                    <Input type="password" name="password" id="password" placeholder="Password" />
                    <Button text="SIGN IN"></Button>
                </form>

                <p>Forgot your password?</p>

                <hr />
            </main>

            <Footer text="or sign in with one of these services">
            </Footer>
        </div>
        <aside id="last">Having trouble logging in?</aside>
    </div>
);