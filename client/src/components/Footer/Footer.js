import React, { Component } from "react";
import "./FooterStyle.css";
import FooterForm from "./FooterForm/FooterForm";
import Twitter from "../Twitter";
import logo from "../../images/logo-grey.svg";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer cprFooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 cprBand">
                                <img src={logo} alt="CPR for life Orlando brand"/>
                                <h3>Same day CPR certification</h3>
                                   <p>PRIVATE CLASSES
                                    Serving the Orlando area!
                                    407.000.000 | info@email.com</p>
                            </div>

                            <div className="col-lg-4 cprTestimonials">
                                <Twitter />
                            </div>

                            <div className="col-lg-4 footerForm">
                                <h5>Got questions? Get in touch with us</h5>
                                <FooterForm />
                            </div>

                        </div>
                    </div>

                    {/* Copyright */}

                    <div className="footer-copyright">
                        <div className="container-fluid">
                        © CPR for Life Orlando {new Date().getFullYear()} |All rights reserved by <a href="http://mgfactor.com/" > MG Factor</a> 
                        </div>
                    </div>
                </footer>


            </div>
        )
    }
}

export default Footer;