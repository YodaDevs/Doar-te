import React, { useState, useEffect } from 'react'
import './styles.css'


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from '../firebase'

import { createBrowserHistory } from "history";

// pages for this product
import Components from "../views/Components/Components";
import LandingPage from "../views/LandingPage/LandingPage.js";
import ProfilePage from "../views/ProfilePage/ProfilePage.js";
import LoginPage from "../views/LoginPage/LoginPage.js";
import Dashboard from "../views/Dashboard/DashboardPage";
import Register from "../views/Register/RegisterPage";
import DoarPage from "../views/DoarPage/DoarPage";
import ReceberPage from "../views/ReceberPage/ReceberPage";

const theme = createMuiTheme();


export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})

    var hist = createBrowserHistory();

	return firebaseInitialized !== false ? (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router history={hist}>
                <Switch>
                    <Route path="/landing-page" component={LandingPage} />
                    <Route path="/profile-page" component={ProfilePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/register" component={Register} />
					<Route path="/doar" component={DoarPage} />
					<Route path="/receber" component={ReceberPage} />
                    <Route path="/" component={Components} />
                </Switch>
            </Router>
		</MuiThemeProvider>
	) : <div id="loader"><CircularProgress /></div>
}