import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./Style.css"
import helpers from "../../utils/helpers";
import Eventsform from "./Eventsform";


class CprForm extends Component {

state = {
    event :{}
}
    componentDidMount() {
        helpers.getEvent(this.props.match.params.id)
        .then(res => this.setState({ event: res.data }))
        .catch(err => console.log(err));

    };


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

                            <h1>
                                {this.state.event.event}

                            </h1>
                            <Eventsform />
                  


                            </div>

                        </div>

                    </div>

                </div>
            );
        }
    }



export default CprForm;


