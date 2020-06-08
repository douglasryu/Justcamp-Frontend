import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/reset.css";
import "./stylesheets/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
