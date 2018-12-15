import React, { Component } from "react";
import './progressLog.css'


class ProgressLog extends Component {
    render() {
        return (
            <div className="notificationsFrame">

                <textarea
                />
                <div className="panel">
                    <div className="header">



                        <span className="title">ProgressLog</span>


                        <div className="fa fa-search searchIcon"></div>
                    </div>
                    <div className="content">
                        <div className="line"></div>
                        <div className="item">



                            <span className="time">
                                An hour ago
              </span>
                            <p></p>
                        </div>

                        <div className="item">


                            <span className="time">10 am</span>
                            <p></p>
                        </div>

                        <div className="item">


                            <span className="time">10 am</span>
                            <p></p>
                        </div>

                        <div className="item">


                            <span className="time">2:21 pm</span>
                            <p></p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProgressLog;