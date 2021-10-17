import React from "react";
import 'antd/dist/antd.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Home} from "./features/profile/views/Home";
import {About} from "./features/profile/views/About";
import {Resume} from "./features/profile/views/Resume";
import {Portfolio} from "./features/profile/views/Portfolio";
import {Contact} from "./features/profile/views/Contact";
import RedirectExternal from "./routes/RedirectExternal";

import user from "./mock/profile.json";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact={true}>
                        <Home/>
                    </Route>

                    <Route path="/home" exact={true}>
                        <Home/>
                    </Route>

                    <Route path="/about" exact={true}>
                        <About/>
                    </Route>
                    <Route path="/resume" exact={true}>
                        <Resume/>
                    </Route>
                    <Route path="/portfolio" exact={true}>
                        <Portfolio/>
                    </Route>
                    <Route path="/contact" exact={true}>
                        <Contact/>
                    </Route>

                    <Route path="/facebook"
                           component={RedirectExternal}
                           target={user.facebook}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
