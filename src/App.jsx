import React, { Fragment } from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={"DASHBOARD"} />
                <Route path="/register" element={"REGISTER"} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/" element={"DASHBOARD"} />
                <Route path="*" element={"ERROR"} />
            </Routes>
        </Fragment>
    );
};

export default App;
