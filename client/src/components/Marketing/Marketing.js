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
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p> <Button bsStyle="danger">BOOK NOW</Button></p>
                    </div>

                    <div className="col-lg-4">
                        <img className="rounded-circle" src={icon2} alt="CPR and First Aid icon" width="140" height="140" />
                        <h3 className="mkTitle">CPR & First Aid Certification</h3>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p> <Button bsStyle="danger">BOOK NOW</Button></p>
                    </div>


                    <div className="col-lg-4">
                        <img className="rounded-circle" src={icon3} alt="Group Icon" width="140" height="140" />
                        <h3 className="mkTitle" >Group CPR Classes</h3>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p> <Button bsStyle="danger">GET DETAILS</Button></p>
                    </div>

                </div>

                <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading ">Personalized Class <br/> <span className="text-muted">Get certified the same day!</span></h2>
            <p className="lead">CPR For life Orlando offers CPR and First Aid classes to certify and renew certifications. A certified instructor will come to your location, train you and certified you in the same day!
            Our certification is accepted by every employer we ever met, so we meet the certification needs of a nurse or nursing student, a personal trainer, a construction worker, schools, an EMT or Paramedic in need of an advanced certification, girl/boy scouts, children of all ages, and more.
            </p>
          </div>

          <hr/>

          <div className="col-md-5">
          <a href="/about">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="250x250" width= "400px" src={aha} data-holder-rendered="true"/>
            </a>
          </div>
        </div>

            </div>


        )
    }
}

export default Marketing;