import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./Style.css"
import Calendar from "../../components/Calendar";
import Eventsform from "./Eventsform";
import Events from "../../components/Calendar/Events";
import Text from "./Text"
import ConfirmationMessage from "./ConfirmationMessage";


class CprAndFirstAid extends Component {
    state = {
        eventSelected: false,
        Events,
        selectedEvent: null,
        formSubmit: false

    };

    handleEventSelect = event => {
        // event.preventDefault();
        this.setState(
            {
                eventSelected: true,
                selectedEvent: event
            }
        );
    };

    handleFormSubmit = event => {
        this.setState({ formSubmit: true });

    }


    render() {

        return (

            <div>
                <Jumbotron
                    title="Class Registration"
                    subtitle="CPR and First Aid Certification"
                    id="item4"
                />
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-12">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">


                            {this.state.eventSelected ? (
                                (this.state.formSubmit ? (
                                    <ConfirmationMessage

                                    />

                                ) : (
                                        <Eventsform
                                            selectedEvent={this.state.selectedEvent}
                                            formSubmit={this.handleFormSubmit}

                                        >
                                            <h1>
                                                {this.state.eventSelected.image}
                                            </h1>
                                        </Eventsform>
                                    )
                                )
                            ) : (
                                    <div>
                                         <Text />
                                     
                                           <Calendar
                                            handleEventSelect={this.handleEventSelect}
                                        />
                                       

                                    </div>
                                )}



                        </div>


                    </div>

                </div>
            </div>

        );
    }
}



export default CprAndFirstAid;