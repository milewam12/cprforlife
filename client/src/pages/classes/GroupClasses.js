import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./Style.css"
// import GroupClassesForm from "./GroupClassesForm";
import FooterForm from "../../components/Footer/FooterForm"

class GroupClasses extends Component {
    render() {
        return (
            <div>
                <Jumbotron
                    title="CPR and First Aid Group Classes"
                    subtitle="Get your Card the SAME DAY as class!"
                    id="item2"
                />

                <div className="container" >
                    <div className="row">
                        <div className="col-lg-5">
                            <h2>Group classes</h2>
                            <p className="lead">
                            We offer private classes for both small groups and large offices. We can come to your office or home to teach high quality BLS CPR with or without First AID added on. If you prefer more comprehensive attention for your group and need to get certified as fast as possible this is a great option for you Our private classes can sometimes be scheduled the same day depending on availability. You must fill up this form or <strong> <a href="tel:1-562-867-5309">Call Us</a> </strong> to set up a private class and we will email you an invoice. Call us today to get started.
                            </p>
                        </div>
                        <div className="col-lg-7">
                        <h2>100% Official American Heart Association Certified BLS CPR Classes</h2>
                            <FooterForm />

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}



export default GroupClasses;