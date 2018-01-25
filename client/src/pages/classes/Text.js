import React, { Component } from "react";
import "./Style.css"
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
// import Calendar from "../../components/Calendar";


class Text extends Component {

    render() {
        return (
            <div>

                <div className="container" >


                    <div className="card-deck mb-3 text-center">

                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">CPR</h4>
                            </div>
                            <div className="card-body">
                                <img className="rounded-circle" src={icon1} alt="CPR icon" width="80" height="80" />
                                <h1 className="card-title pricing-card-title">$39.95 <small className="text-muted">/ per person</small></h1>
                                <p className="lead">
                                    CPR/BLS course provides the instruction you need to perform CPR on adults as well as children and infants. In addition, our industry leading course provides detailed instructions for how to use the Automated External Defibrillator or AED.
                            You’ll find that our study material and training is easy to understand and easy to use, thus providing you with the best learning outcome in the shortest time possible.
                        </p>
                            </div>
                        </div>
                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">CPR + First Aid Training</h4>
                            </div>
                            <div className="card-body">
                                <img className="rounded-circle" src={icon2} alt="CPR icon" width="80" height="80" />
                                <h1 className="card-title pricing-card-title">$49.95 <small className="text-muted">/ per person</small></h1>
                                <p className="lead">
                                    This is the Best Deal on CPR Certification + First Aid in Orlando. If you choose to combine <strong>BLS CPR and FIRST AID training</strong> you will receive both, the American Heart Association BLS Healthcare Provider and a CPR Certification Card. This CPR class offers the Best Hands on AHA BLS CPR Card paired with the Our First Aid Training.

                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12  text-center sel ">
                            <h2>Select the certification and date of your preference to register.</h2>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}



export default Text;