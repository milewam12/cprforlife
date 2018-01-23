import React, { Component } from "react";
// import { Button } from "react-bootstrap";
import "./Style.css";
import cprCard from "../../images/cprCard.jpg";
import FirstAid from "../../images/firstaidCard.jpg";
import helpers from "../../utils/helpers";


class EventsForm extends Component {
    state = {
        name: "",
        email: "",
        // address: "",
        // address2: "",
        // city: "",
        // state: "",
        // telephone: "",
        // eventId: "",
        // startDate: "",

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
        if (!this.state.email || !this.state.name) {
            alert("Please provide your email and name");

        } else if (this.state.name && this.state.email) {

            helpers.saveEvents({
                name: this.state.name,
                email: this.state.email,


            })
            //     .then(err => this.setState({ name:" ", email:" "}))
            // .catch(err => console.log(err));

        }

        this.setState({
            name: "",
            email: ""
            // address: "",
            // telephone: "",

        })
    }


    // handleFormSubmit = (event) => {
    //     console.log("handleform");
    //     event.preventDefault();
    //     if (!this.state.email || !this.state.name) {
    //         alert("Please provide your email and name");

    //     } else if (this.state.name &&this.state.email){

    //         helpers.saveEvents({
    //             // eventId: this.this.props.selectedEvent.id,
    //             name: this.state.name,
    //             email: this.state.email
    //             // address: this.state.address,
    //             // address2: this.state.address2,
    //             // city: this.state.city,
    //             // state: this.state.state,

    //             // telephone: this.state.telephone
    //             // startDate: this.props.selectedEvent.startDate

    //         })
    //         //     .then(err => this.setState({ name:" ", email:" "}))
    //         // .catch(err => console.log(err));

    //     }

    //     this.setState({
    //         name: "",
    //         email: ""
    //         // address: "",
    //         // telephone: "",

    //     })
    // }


    componentDidMount() {
        if (this.props.selectedEvent) {
            this.setState({
                eventId: this.props.selectedEvent.id,
                // startDate: JSON.stringify(this.props.selectedEvent.startDate.toLocaleTimeString())
                startDate: this.props.selectedEvent.startDate

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





    // (this.state.eventId && this.state.name && this.state.address && this.state.address2 && this.state.city &&this.state.state &&this.state.email && this.state.telephone && this.state.startDate)


    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">

                        {this.props.selectedEvent && (
                            <h1> {this.props.selectedEvent.title}</h1>
                        )}
                        <h3> Certification</h3>

                        {this.handleCardCpr()}
                        {this.handleCardFirst()}
                        <h4> <br />Hour: {this.props.selectedEvent.time}</h4>
                        <h4>Date: </h4>
                        <h4> <br />Price per person: {this.props.selectedEvent.cost}</h4>

                    </div>

                    <div className="col-lg-7">
                        <h3>Please fill up the form to complete your registration</h3>
                        <form className="form" id="classesForm">
                            <label htmlFor="exampleFormControlSelect1">Name</label>
                            <input
                                value={this.state.name}
                                name="name"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Name"
                                required
                            />


                            <label htmlFor="inputAddress">Address</label>
                            <input
                                // value={this.state.address}
                                // onChange={this.handleInputChange}
                                name="address"
                                type="text"
                                id="inputAddress"
                                placeholder="1234 Main St"
                                required />

                            <label htmlFor="inputAddress2">Address2</label>
                            <input
                                // value={this.state.address2}
                                // onChange={this.handleInputChange}
                                name="address2"
                                type="text"
                                id="inputAddress2"
                                placeholder="Apartment, studio, or floor"
                                required />

                            <label htmlFor="inputCity">City</label>
                            <input

                                // value={this.state.city}
                                // onChange={this.handleInputChange}
                                name="city"
                                type="text"
                                id="inputCity" />

                            <label htmlFor="inputState">State</label>
                            <select id="inputState"
                                //   value={this.state.state}
                                //   onChange={this.handleInputChange}
                                className="form-control">
                                <option defaultValue>Florida</option>
                            </select>

                            <label htmlFor="exampleFormControlInput1">Email address:</label>
                            <input
                                value={this.state.email}
                                name="email"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="youremail@mail.com"
                                required
                            />

                            <label htmlFor="exampleFormControlSelect1">Telephone:</label>
                            <input
                                // value={this.state.telephone}
                                name="telephone"
                                // onChange={this.handleInputChange}
                                type="text"
                                placeholder="Telephone"
                                required
                            />

                            <button type="button" id="footerFormButton" className="btn btn-danger small" data-toggle="modal" data-target="#exampleModal"
                                onClick={this.handleFormSubmit}
                            >
                                Submit
                    </button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }


}
export default EventsForm;

