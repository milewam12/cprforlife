import React, { Component } from "react";
import "./MarketingStyle.css";
import { Button } from 'react-bootstrap';
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";



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
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>

          <hr className="featurette-divider"/>

          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="250x250" width= "500px" height= "250px" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1612b14a20a%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1612b14a20a%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"/>
          </div>
        </div>

            </div>


        )
    }
}

export default Marketing;