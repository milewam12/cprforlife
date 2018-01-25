import React, { Component } from "react";
// import { Button } from "react-bootstrap";
import "./Style.css";
import cprCard from "../../images/cprCard.jpg";
import FirstAid from "../../images/firstaidCard.jpg";
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
                .catch(err => console.log(err));
        }

        this.setState({
            name: "",
            email: "",
            address: "",
            telephone: "",
            city: "",
            state: ""

        })
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

    handleClick = () =>{
        window.location.assign("https://www.w3schools.com")
   
      
    }

    // onClick={window.location.reload()}

    handleModal = event => {
        if (this.state.email && this.state.telephone && this.state.name) {
            return (
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{this.state.name}</h5>
                                
                                <button  type="button" className="close" data-dismiss="modal" aria-label="Close"  >
                                    <span aria-hidden="true">&times;</span>
                                 
                                </button>

                               
                            </div>
                            <div className="modal-body">
                                <p> Many thanks for your message. We will be in touch within 24 hours. Meanwhile learn more about <a href="/whycpr"> why is so important to learn CPR</a></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"  data-dismiss="modal" onClick={this.handleClick}>Close</button>
                                {/* {this.handleClick} */}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }



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
                        <h4>Date: January {this.props.selectedEvent.startDate.getDate()}, 2018 </h4>
                        <h4> Price per person: {this.props.selectedEvent.cost}</h4>
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
                                value={this.state.address}
                                onChange={this.handleInputChange}
                                name="address"
                                type="text"
                                id="inputAddress"
                                placeholder="1234 Main St"
                                required />


                            <label htmlFor="inputCity">City</label>
                            <input

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
                                value={this.state.email}
                                name="email"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="youremail@mail.com"
                                required
                            />

                            <label htmlFor="exampleFormControlSelect1">Telephone:</label>
                            <input
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
                                {this.handleModal()}
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }


}
export default EventsForm;

