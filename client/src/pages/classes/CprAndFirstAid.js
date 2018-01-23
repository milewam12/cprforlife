import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./Style.css"
import Calendar from "../../components/Calendar";
import Eventsform from "./Eventsform";
import Events from "../../components/Calendar/Events";
import Text from "./Text"


class CprAndFirstAid extends Component {
    state = {
        eventSelected: false,
        Events,
        selectedEvent: null

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



    render() {

        return (
            
            <div>
                <Jumbotron
                    title="CPR and First Aid Certification"
                    subtitle="Text of the printing and typesetting industry"
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
                                <Eventsform
                                    selectedEvent={this.state.selectedEvent}
                                >
                                    <h1>
                                        {this.state.eventSelected.image}
                                    </h1>
                                </Eventsform>
                            ) : (
                                    <div>
                                    <Text />
                                    <Calendar
                                        handleEventSelect={this.handleEventSelect}
                                    /> 

                                    </div>
                                ) }
                               

                        </div>


                    </div>

                </div>
            </div>

        );
    }
}



export default CprAndFirstAid;