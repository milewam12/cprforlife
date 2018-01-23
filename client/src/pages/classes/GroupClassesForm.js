import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Style.css";

class GroupClassesForm extends Component {
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
            business: "",
            telephone: "",
            numberStudents: "",
            comments: ""
        })
    }


    render() {
        return (
            <div>
                <form className="form" id="classesForm">
                    <label htmlFor="exampleFormControlSelect1">Name</label>
                    <input
                        value={this.state.name}
                        name="name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Name"
                    />
                    <label htmlFor="exampleFormControlSelect1">Business or Company Name</label>
                    <input
                        value={this.state.business}
                        name="business"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Business or Company name"
                    />
                    <label htmlFor="exampleFormControlInput1">Email address:</label>
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="youremail@mail.com"
                    />

                    <label htmlFor="exampleFormControlSelect1">Telephone:</label>
                    <input
                        value={this.state.telephone}
                        name="telephone"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Telephone"
                    />

                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Participants (max 10 students)</label>
                        <select className="form-control" id="exampleFormControlSelect1"
                            value={this.state.numberStudents}
                            name="students"
                            onChange={this.handleInputChange}
                            type="text"
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>

                        </select>
                    </div>
                    <label htmlFor="exampleFormControlSelect1">Comments</label>
                    <textarea
                        value={this.state.comments}
                        name="comments"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Comments"

                    />

                    <Button bsSize="small" id="classesFormButton" bsStyle="danger" onClick={this.handleFormSubmit}>Submit</Button>
                </form>

            </div>
        )
    }


}
export default GroupClassesForm;