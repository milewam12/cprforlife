import React, { Component } from "react";
import "./FooterFormStyle.css";
import helpers from "../../../utils/helpers";

class FooterForm extends Component {
    state = {
        name: "",
        email: "",
        comments: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        console.log("handleform");
        event.preventDefault();
        if (!this.state.email || !this.state.name) {
            alert("Please provide your email and name")
        } else if (this.state.email && this.state.comments && this.state.name) {
            helpers.saveContactf({
                name: this.state.name,
                email: this.state.email,
                comments: this.state.comments
            })
    
            // .then(err => this.setState({ name:" ", email:" ", comments:" "}))
            // .catch(err => console.log(err));

        }

        this.setState({
            name: "",
            email: "",
            comments: ""
        });
    }

    handleModal= event=>{
        if (this.state.email && this.state.comments && this.state.name) {
            return (
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.state.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <p> Many thanks for your message. We will be in touch within 24 hours. Meanwhile learn more about <a href="/whycpr"> why is so important to learn CPR</a></p>
  </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            )
        } 

    }


    render() {
        return (
            <div>
                <form className="form" id="footerForm">
                    <input
                     className="form-control"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Name (required)"
                    />

                    <input
                     className="form-control"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="E-mail (required)"
                    />

                    <textarea
                     className="form-control"
                        value={this.state.comments}
                        name="comments"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Comments"

                    />

                    {/* <Button bsSize="small" id="footerFormButton" bsStyle="danger"
                        // disabled={!(this.state.name && this.state.email)}
                        onClick={this.handleFormSubmit}
                    >

                        Submit</Button> */}

                        <div >
                    <button type="button" id="footerFormButton" className="btn btn-danger small" data-toggle="modal" data-target="#exampleModal"
                    onClick={this.handleFormSubmit}
                    >
                    Submit 
                    </button>
                    {this.handleModal()}
                    </div>

                </form>


            </div>
        )
    }


}
export default FooterForm;

