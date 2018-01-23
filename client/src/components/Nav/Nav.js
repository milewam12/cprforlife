import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavStyle.css";
import { Button } from 'react-bootstrap';
import logo from "../../images/logo.svg";


class Nav extends Component {
  render() {
    return (
      <div className=" fixed-top">
            <nav className="navbar navbar-light bg-light  ">
                <div className="container">
                    <span className="small">Same day CPR certification PRIVATE CLASSES | 407 .000.000 | info@email.com </span>
                    <Button bsStyle="danger"> BOOK NOW</Button>

                </div>
            </nav>


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* <Link className="navbar-brand" to="/">CPR for life Orlando</Link> */}
       
          
          <img  src={logo} alt="CPR for life Orlando brand"/> 
      
      
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Class Registration</Link>
                <div className="dropdown-menu" aria-labelledby="dropdown07">
                  <Link className="dropdown-item" to="/classes/cpr">CPR</Link>
                  <Link className="dropdown-item"to="/classes/cprandfirstaid">CPR & First Aid</Link>
                  <Link className="dropdown-item" to="/classes/groupcprclasses">Group CPR Classes</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/howitworks">How it works</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/whycpr">Why CPR</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>


        </div>

      </nav>

      </div>
    )
  }
}

export default Nav;

