import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./Style.css"
import helpers from "../../utils/helpers";
import { Link } from "react-router-dom";
// import Calendar from "../../components/Calendar";


class Cpr extends Component {

    state = {
        events: [],
        event: "",
        date: "",
        hour: "",
        duration: ""

    }

    componentDidMount() {
        this.loadEvents();
    }

    loadEvents = () => {
        helpers.getEvents()
            .then(res =>
                this.setState({ events: res.data, event: "", date: "", hour: "", duration: "" }))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <Jumbotron
                    title="Same Day CPR Certification"
                    subtitle="Text of the printing and typesetting industry"
                    id="item1"
                />

                <div className="container" >
                    <div className="row">
                        <div className="col-lg-4">
                            <h4>CPR Certification</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut suscipit orci. Sed sit amet sagittis dui, et consectetur nisl. Maecenas venenatis tristique dolor. Fusce lacinia, ligula eget interdum luctus, elit tortor volutpat nisl, eget ultrices ex dolor nec lorem. Quisque non risus non lectus dignissim tempus.
                        </p>

                     
                        
                        </div>
                        <div className="col-lg-8">
                            <h3>Open dates for clasess</h3>
                            <h4>Register here!</h4>
                            <ul className="list-group">
                                {this.state.events.map(event => (
                                    <li className="list-group-item"
                                        key={event._id}> 
                                        <Link to={"/classes/cprform/" + event._id}
                                        event= {event.event}
                                        date= {event.date}
                                        duration = {event.duration}
                                        hour = {event.hour}
                                        
                                        >

                            {event.event} | {event.date} | {event.duration} | {event.hour}
                                        </Link>
                                    </li>

                                ))}
                            </ul>

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}



export default Cpr;