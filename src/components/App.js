import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Transition} from "./Transition";
import {Pose} from "./Pose";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <div className="nav-wrapper orange darken-2">
                            <ul className="left">
                                <li>
                                    <Link to="/">Transition</Link>
                                </li>
                                <li>
                                    <Link to="/pose">Pose</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/" component={Transition} />
                    <Route path="/pose" component={Pose} />
                </div>
            </Router>
        );
    }
}