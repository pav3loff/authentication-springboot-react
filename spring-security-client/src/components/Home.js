import React from "react";

import "./Home.css";

export default function Home(props) {
    return (
        <div className="MainText">
            <p>You are currently logged {props.isLoggedIn ? "in" : "out"}</p>
        </div>
    );
}
