import { render } from "react-dom";
import "normalize.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
