import React, { Component } from "react";
import "./MarketingStyle.css";
import { Button } from 'react-bootstrap';
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";
import aha from "../../images/aha.jpg"



class Marketing extends Component {
    render() {
        return (
            <div>
 
                <div className="row marketingElements">

                    <div className="col-lg-4">
                        <div>
                            <img className="rounded-circle" src={icon1} alt="CPR icon" width="140" height="140" />
                        </div>

                        <h3 className="mkTitle" >CPR Certification</h3>
                        <p>CPR/BLS course provides the instruction you need to perform CPR on adults as well as children and infants. In addition, our industry leading course provides detailed instructions for how to use the Automated External Defibrillator or AED.</p>
                        <p> <Button bsStyle="danger" href="/classes/cprandfirstaid">BOOK NOW</Button></p>
                    </div>

                    <div className="col-lg-4">
                        <img className="rounded-circle" src={icon2} alt="CPR and First Aid icon" width="140" height="140" />
                        <h3 className="mkTitle">CPR & First Aid Certification</h3>
                        <p>This is the Best Deal on CPR Certification + First Aid in Orlando. If you choose to combine BLS CPR and FIRST AID training you will receive both, the American Heart Association BLS Healthcare Provider and a CPR Certification Card.</p>
                        <p> <Button bsStyle="danger" href="/classes/cprandfirstaid">BOOK NOW</Button></p>
                    </div>


                    <div className="col-lg-4">
                        <img className="rounded-circle" src={icon3} alt="Group Icon" width="140" height="140" />
                        <h3 className="mkTitle" >Group CPR Classes</h3>
                        <p>We offer private classes for both small groups and large offices. We can come to your office or home to teach high quality BLS CPR with or without First AID added on. Our private classes can sometimes be scheduled the same day depending on availability.</p>
                        <p> <Button bsStyle="danger" href="/classes/groupcprclasses">GET DETAILS</Button></p>
                    </div>

                </div>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading ">Personalized Class <br /> <span className="text-muted">Get certified the same day!</span></h2>
                        <p className="lead">CPR For life Orlando offers CPR and First Aid classes to certify and renew certifications. A certified instructor will come to your location, train you and certified you in the same day!
            Our certification is accepted by every employer we ever met, so we meet the certification needs of a nurse or nursing student, a personal trainer, a construction worker, schools, an EMT or Paramedic in need of an advanced certification, girl/boy scouts, children of all ages, and more.
            </p>
                    </div>

                    <hr />

                    <div className="col-md-5">
                        <a href="/contact">
                            <img className="featurette-image img-fluid mx-auto myimage" data-src="holder.js/500x500/auto" alt="250x250" width="400px" src={aha} data-holder-rendered="true" />
                        </a>
                    </div>
                </div>

            </div>


        )
    }
}

export default Marketing;