import React from "react";
import ReactDOM from 'react-dom';
import Posed from 'react-pose';

const styles = {
    width: '100px',
    height: '100px',
    background: '#ff1c68',
    'transform-origin': '50% 50%'
};

const Box = Posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

export class Pose extends React.Component {
    constructor() {
        super();
        this.state = { isVisible: true };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ isVisible: !this.state.isVisible });
        }, 1000);
    }

    render() {
        const { isVisible } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="s12">

                        </div>
                    </div>

                    <div className="row">
                        <div className="s8 offset-s2 center-align">
                            <Box style={{...styles}} pose={isVisible ? 'visible' : 'hidden'} />;
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

