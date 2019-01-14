import React from "react";

export class Pose extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="s12">

                        </div>
                    </div>

                    <div className="row">
                        <div className="s8 offset-s2 center-align">
                            <div className="card deep-purple z-depth-2">
                                <div className="card-content white-text">
                                    <span className="card-title">Awesome Animations!</span>
                                    <p>CSS Animations are pretty cool. But combined with ReactJS ... &lt;3</p>
                                </div>
                                <div className="card-action">
                                    card
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

