import React, { Component } from "react";
import "./MarketingStyle.css";
import { Button } from 'react-bootstrap';



class Marketing extends Component {
    render() {
        return (
            <div>
                <div className="row marketingElements">
                    <div className="col-lg-4">
                    <div>
                    <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140" />
                    </div>
                       
                        <h3 className="mkTitle" >CPR Certification</h3>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p> <Button bsStyle="danger">BOOK NOW</Button></p>
                    </div>

                    <div className="col-lg-4">
                        <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140" />
                        <h3 className="mkTitle">CPR & First Aid Certification</h3>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p> <Button bsStyle="danger">BOOK NOW</Button></p>
                    </div>


                    <div className="col-lg-4">
                        <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140" />
                        <h3 className="mkTitle" >Group CPR Classes</h3>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p> <Button bsStyle="danger">GET DETAILS</Button></p>
                    </div>

                </div>

            </div>


        )
    }
}

export default Marketing;