import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Col } from "reactstrap";
import DrumDisplay from '../Week1/DrumKit/DrumDisplay'
import ClockDisplay from '../Week1/Clock/ClockDisplay'

import Home from './Home'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'




const Header = () => {
    return (
        <div className="top">
            <div className="navBar">
                <Col>
                    <header>
                        <Navbar className="header">
                            <NavbarBrand href="/">30 React Apps</NavbarBrand>
                            <Nav className="ml-auto" navbar>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/DrumDisplay">DrumKit</Link></li>
                                <li><Link to="/ClockDisplay">Clock</Link></li>
                            </Nav>
                        </Navbar>
                    </header>
                </Col>
            </div>
            <div className="nav-route">
                <Col>
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/DrumDisplay"><DrumDisplay /></Route>
                        <Route path="/ClockDisplay"><ClockDisplay /></Route>
                    </Switch>
                </Col>
            </div>
        </div>

    );
};

export default Header;