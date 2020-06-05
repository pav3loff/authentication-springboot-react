import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { TextField, Button, Grid } from "@material-ui/core";

import { register } from "../api/registration";

import "./Registration.css";

export default function Registration() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [success, setSuccess] = useState(false);

    function handleChange(id, value) {
        setFormData({ ...formData, [id]: value });
    }

    function handleSubmit() {
        register(formData).then((success) => {
            setSuccess(success);
        });
    }

    return (
        <div>
            {success ? (
                <Redirect to="/login" />
            ) : (
                <Grid container justify="center">
                    <Grid container item xs={12} justify="center">
                        <TextField
                            className="TextField"
                            id="username"
                            value={formData.username}
                            label="Username"
                            onChange={(event) =>
                                handleChange(
                                    event.target.id,
                                    event.target.value
                                )
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
                                handleChange(
                                    event.target.id,
                                    event.target.value
                                )
                            }
                        />
                    </Grid>
                    <Button
                        className="RegistrationSubmitButton"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Grid>
            )}
        </div>
    );
}
