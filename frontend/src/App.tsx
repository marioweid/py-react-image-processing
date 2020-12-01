import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import HomePage from "./containers/HomePage";
import MorphingPage from "./containers/MorphingPage";

function App() {
    return (
        <div className="App">
            <header/>
            <Navigation></Navigation>
            <Router>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route path="/morphing" component={MorphingPage}/>
                </Switch>
            </Router>
            <footer/>
        </div>
    );
}


export default App;
