import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { validateToken } from "./api/authentication";
import Navbar from "./components/Navbar";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        var token = localStorage.getItem("token");
        if (token !== null) {
            validateToken(token).then((valid) => {
                setIsLoggedIn(valid);
            });
        }
    }, []);

    return (
        <BrowserRouter>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <Home {...props} isLoggedIn={isLoggedIn} />
                    )}
                />
                <Route
                    exact
                    path="/login"
                    render={(props) => (
                        <Login
                            {...props}
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    )}
                />
                <Route exact path="/registration" component={Registration} />
            </Switch>
        </BrowserRouter>
    );
}
