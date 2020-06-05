import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { AppBar, Toolbar, Button, IconButton, Grid } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";

import "./Navbar.css";

export default function Navbar(props) {
    const [lastClicked, setLastClicked] = useState("");

    function handleHome() {
        setLastClicked("home");
    }

    function handleLogout() {
        props.setIsLoggedIn(false);
        localStorage.removeItem("token");
        setLastClicked("logout");
    }

    function handleLogin() {
        setLastClicked("login");
    }

    function handleRegistration() {
        setLastClicked("registration");
    }

    return (
        <AppBar className="Navbar" position="static">
            <Toolbar className="Toolbar">
                <Grid container>
                    <Grid item xs={6} className="MenuGrid">
                        <IconButton className="MenuButton">
                            <MenuIcon className="NavbarMenuIcon" />
                        </IconButton>
                        <IconButton className="HomeButton" onClick={handleHome}>
                            <HomeIcon className="NavbarHomeIcon" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={6} container justify="flex-end">
                        {props.isLoggedIn ? (
                            <Button
                                className="NavbarButton"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        ) : (
                            <div>
                                <Button
                                    className="NavbarButton"
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                                <Button
                                    className="NavbarButton"
                                    onClick={handleRegistration}
                                >
                                    Registration
                                </Button>
                            </div>
                        )}
                    </Grid>
                </Grid>
            </Toolbar>
            {lastClicked === "home" && <Redirect to="/" />}
            {lastClicked === "login" && <Redirect to="/login" />}
            {lastClicked === "registration" && <Redirect to="/registration" />}
        </AppBar>
    );
}
