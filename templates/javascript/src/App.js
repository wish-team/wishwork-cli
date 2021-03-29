// APP JS
import './App.scss';
import {Button} from "./components/button/Button";
import React from "react";

function App() {
    return (
        <div>
            <div>
                <h1 className="welcome">Welcome to Wish Work App</h1>
                <p>if you want to change or develop, please use <code>./src</code></p>
                <a href="https://wishwork.org" target="_blank"><Button label="Redirect to Wish Work" primary={true}/></a>
            </div>
        </div>
    );
}

export default App;
