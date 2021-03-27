// APP JS
import './App.scss';
import {Button} from "./components/button/Button";
import React from "react";

function App() {
    return (
        <div>
            <div>
                <a href="https://wishwork.org" target="_blank"><Button label="Redirect to Wish Work" primary={true}/></a>
            </div>
        </div>
    );
}

export default App;
