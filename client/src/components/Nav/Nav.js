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
               
                <div className="col-lg-10">
                <span className="small">Same day CPR certification PRIVATE CLASSES | 407 .000.000 | info@email.com </span>
                </div>

                <div className="col-lg-2" >
                <Button  id="topbtn"  href="/classes/cprandfirstaid"> BOOK NOW</Button>
     
                </div>

                </div>
            </nav>
           


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

        <a className="navbar-brand" href="/">
    <img src={logo} alt="CPR for life Orlando brand" width="300" height="60" />
  </a>
       

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/classes/cprandfirstaid" >Class Registration </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/classes/groupcprclasses" >Group CPR Classes </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">About </Link>
              </li> */}
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

