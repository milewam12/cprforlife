import React, { Component } from "react";
// import { link } from "react-router-dom";
import "./NavStyle.css";
import { Button } from 'react-bootstrap';

class TopNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <span className="small">Same day CPR certification PRIVATE CLASSES | 407 .000.000 | info@email.com </span>
                    <Button bsStyle="danger"> BOOK NOW</Button>

                </div>
            </nav>
        )
    }
}

export default TopNav;

