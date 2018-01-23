import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./CarouselStyle.css";

class Carousel extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" id="item1">
                            <a href="/classes/cpr">
                                <div className="d-block w-100 imgWidth" alt="Same Day CPR Certification" src="../../images/cpr_1.jpg">
                                </div>
                            </a>
                            <div className="carousel-caption d-none d-md-block">
                                <div className="shadow">
                                    {/* <Link to="/classes/cpr"><h3>Same Day CPR Certification</h3></Link> */}
                                    <h3>Same Day CPR Certification</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </div>

                            </div>
                        </div>


                        <div className="carousel-item" id="item2">

                            <a href="/classes/cprandfirstaid">
                                <div className="d-block w-100 imgWidth" alt="CPR and First Aid Certification"
                                    src="../../images/cpr_2.jpg"> </div>
                            </a>

                            <div className="carousel-caption d-none d-md-block">
                                <div className="shadow">
                                    <h3>CPR & First Aid Certification</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item" id="item3">
                            <a href="/whycpr">
                                <div className="d-block w-100 imgWidth" alt="Learn CPR"> </div>
                            </a>

                            <div className="carousel-caption d-none d-md-block">
                                <div className="shadow">
                                    <h3>Why is important to learn CPR?</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>


                </div>
            </div>
        )
    }

}

export default Carousel;

