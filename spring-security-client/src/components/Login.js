import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { TextField, Button, Grid } from "@material-ui/core";

import { login } from "../api/authentication";

import "./Login.css";

export default function Login(props) {
    const [formData, setFormData] = useState({ username: "", password: "" });

    function handleChange(id, value) {
        setFormData({ ...formData, [id]: value });
    }

    function handleSubmit() {
        login(formData).then((response) => {
            if (response.jwt !== "") {
                localStorage.setItem("token", response.jwt);
                props.setIsLoggedIn(true);
            }
        });
    }

    return props.isLoggedIn ? (
        <Redirect to="/" />
    ) : (
        <Grid container justify="center">
            <Grid container item xs={12} justify="center">
                <TextField
                    className="TextField"
                    id="username"
                    value={formData.username}
                    label="Username"
                    onChange={(event) =>
                        handleChange(event.target.id, event.target.value)
                    }
                />
            </Grid>
            <Grid container item xs={12} justify="center">
                <TextField
                    className="TextField"
                    id="password"
                    value={formData.password}
                    label="Password"
                    onChange={(event) =>
                        handleChange(event.target.id, event.target.value)
                    }
                />
            </Grid>
            <Button className="LoginSubmitButton" onClick={handleSubmit}>
                Submit
            </Button>
        </Grid>
    );
}
