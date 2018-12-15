import React, { Component } from "react";
import ProgressLog from '../Week1/ProgressLog/ProgressLog'

let spacing = {
    height: '2em'
}

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Welcome to 30 React Apps</h1>
                    <div style={spacing}></div>

                    <ProgressLog />



                </div>
            </div>
        )
    }
}