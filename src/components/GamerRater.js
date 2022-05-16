import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar";

export const GamerRater = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("gr_token")) {
                return <>
                    <Route>
                        <NavBar />
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>
    </>
)