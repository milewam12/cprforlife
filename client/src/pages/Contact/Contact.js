import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import "./ContactStyle.css";
import {Button} from "react-bootstrap";
import Map from "./Map";



class Contact extends Component {

    state = {
        name: "",
        email: "",
        comments: ""
    };
    

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.email || !this.state.comments) {
            alert("Please provide your email and comments");
        } else {
            alert(`Modal goes here. Thank you ${this.state.name} we will be in touch within 48 hours`)
        }

        this.setState({
            name: "",
            email: "",
            comments: ""
        })
    }


    render(){
        return(
            <div className="container">
            <Jumbotron
            title="Contact Us"
            id="contactImage"
            />

            <div className="row">
            <div className="col-lg-7">

            <form className="form" id="contactForm">
                    <input
                        value={this.state.name}
                        name="name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Name"
                    />

                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="E-mail"
                    />

                    <textarea 
                      value={this.state.comments}
                      name="comments"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Comments"
                    
                    />

                    <Button  bsSize="large" id="contactFormButton"  bsStyle="danger"  onClick={this.handleFormSubmit}>Submit</Button>
                </form>

            </div>
            <div className="col-lg-5">
            <h6>Serving the ONLY Orlando area! </h6>
            <Map />
            </div>

            </div>
            </div>
        )
    }
}

export default Contact;