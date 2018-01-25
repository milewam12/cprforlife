import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import "./ContactStyle.css";

import FooterForm from "../../components/Footer/FooterForm";



class Contact extends Component {


    render(){
        return(
            <div className="container">
            <Jumbotron
            title="Contact Us"
            id="contactImage"
            />

            <div className="row">
        <div className="col-lg-7">

        <FooterForm />


            </div>
            <div className="col-lg-5">
            <h3>Serving the ONLY Orlando area! </h3>
            <p>We aim to reach out to individuals, health care professionals, and school districts throughout the Orlando Area. We want our community footprint to be one of positive change and embetterment. We strive to be that difference in the number of lives that get saved everyday.</p>
            <h4>Call Us: 407.000.00 </h4>

       
            </div>

            </div>
            </div>
        )
    }
}

export default Contact;