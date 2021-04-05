// APP JS
import './App.scss';
import {Button} from "./components/button/Button";
import React from "react";

function App() {
    return (
        <div>
            <div className="app-holder">
                <h1 className="welcome">Welcome to Wish Work App</h1>
                <div className="placeholder-preview">
                    <p>If you want to change this file or develop, please use <code>./src</code></p>
                </div>
                <p className="readme-text">
                    For having better understanding of this project please click on the below
                    button</p>
                <a href="https://github.com/wish-team/wishwork-cli#wish-work-react-application" target="_blank"><Button
                    label="Go To Readme"
                    primary={true}/></a>
            </div>
        </div>
    );
}

export default App;
