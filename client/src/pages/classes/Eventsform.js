import React, { Component } from "react";
// import { Button } from "react-bootstrap";
import "./Style.css";
import cprCard from "../../images/cprCard.png";
import FirstAid from "../../images/firstaidCard.png";
import helpers from "../../utils/helpers";


// import { Link} from "react-router-dom";


class EventsForm extends Component {
    state = {
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        telephone: "",
        eventId: "",
        startDate: ""

    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };




    handleFormSubmit = (event) => {
        console.log("handleform");
        event.preventDefault();
        if (!this.state.email || !this.state.name || !this.state.telephone) {
            alert("Please provide your name, email and telephone number");

        } else if (this.state.name && this.state.email) {

            helpers.saveEvents({
                name: this.state.name,
                email: this.state.email,
                address: this.state.address,
                telephone: this.state.telephone,
                city: this.state.city,
                startDate: this.state.startDate,
                eventId: this.state.eventId

            })
            .then(response => {
                console.log(response);
                this.setState({
                    name: "",
                    email: "",
                    address: "",
                    telephone: "",
                    city: "",
                    state: ""

                });

                this.props.formSubmit();
            })
            .catch(err => console.log(err));
        }

     
    }


    componentDidMount() {
        if (this.props.selectedEvent) {
            this.setState({
                eventId: this.props.selectedEvent.id,
                startDate: JSON.stringify(this.props.selectedEvent.startDate.toLocaleTimeString())
                // startDate: this.props.selectedEvent.startDate

            })
        }

    }

    handleCardCpr = event => {
        if (this.props.selectedEvent.title === "BLS CPR") {
            return <img
                src={cprCard}
                alt="CPR Card"
            ></img>
        }
    }

    handleCardFirst = event => {
        if (this.props.selectedEvent.title === "BLS CPR + First Aid") {
            return <img
                src={FirstAid}
                alt="CPR Card"
            ></img>
        }
    }






    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className=" col-lg-5 lead cardcp">
                    <br />
                    <h1 className="lead">You have selected: </h1>
                        {this.props.selectedEvent && (
                            <h3> {this.props.selectedEvent.title} Certification</h3>
                        )}
                     
                        {this.handleCardCpr()}
                        {this.handleCardFirst()}
                        <ul>
                            <li>Hour: {this.props.selectedEvent.time} </li>
                            <li> Date: January {this.props.selectedEvent.startDate.getDate()}, 2018</li>
                            <li>Price per person: {this.props.selectedEvent.cost} </li>

                        </ul>
               
                    </div>

                    <div className="col-lg-7 ">
                        <h2>Please fill up the form to complete your registration</h2>
                        <form className="form" id="classesForm">
                            <label htmlFor="exampleFormControlSelect1">Name</label>
                            <input
                            className="form-control"
                                value={this.state.name}
                                name="name"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Name"
                                required
                            />


                            <label htmlFor="inputAddress">Address</label>
                            <input
                            className="form-control"
                                value={this.state.address}
                                onChange={this.handleInputChange}
                                name="address"
                                type="text"
                                id="inputAddress"
                                placeholder="1234 Main St"
                                required />

                            <label htmlFor="inputCity">City</label>
                            <input
                            className="form-control"
                                value={this.state.city}
                                onChange={this.handleInputChange}
                                name="city"
                                type="text"
                                id="inputCity" />

                            <label htmlFor="inputState">State</label>
                            <select id="inputState"
                                value={this.state.state}
                                onChange={this.handleInputChange}
                                className="form-control">
                                <option defaultValue>Florida</option>
                            </select>

                            <label htmlFor="exampleFormControlInput1">Email address:</label>
                            <input
                            className="form-control"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="youremail@mail.com"
                                required
                            />

                            <label htmlFor="exampleFormControlSelect1">Telephone:</label>
                            <input
                            className="form-control"
                                value={this.state.telephone}
                                name="telephone"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Telephone"
                                required
                            />
                            <div >
                                <button type="button" id="footerFormButton" className="btn btn-danger small" data-toggle="modal" data-target="#exampleModal"
                                    onClick={this.handleFormSubmit}
                                >Submit</button>
                                {/* {this.handleModal()} */}
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }


}
export default EventsForm;

