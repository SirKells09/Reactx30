import React, { Component } from 'react';
import Clock from './Clock.js';


class ClockDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            analogTime: new Date().toLocaleString(),

        }
        this.updateTime();
    }

    updateTime() {
        setInterval(() => {
            this.setState({
                analogTime: new Date().toLocaleString()
            })
        }, 1000)
    }

    render() {
        return (
            <div className="col-lg-8 offset-lg-2">
                <h1>Analog Clock</h1>
                <Clock time={this.state.analogTime} />
            </div>
        )
    }
}
export default ClockDisplay;
