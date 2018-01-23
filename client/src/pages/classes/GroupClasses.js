import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./Style.css"
import GroupClassesForm from "./GroupClassesForm";

class GroupClasses extends Component {
    render() {
        return (
            <div>
                <Jumbotron
                    title="CPR Group Classes"
                    subtitle="Text of the printing and typesetting industry"
                    id="item2"
                />

                <div className="container" >
                    <div className="row">
                        <div className="col-lg-5">
                            <h3>CPR classes</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut suscipit orci. Sed sit amet sagittis dui, et consectetur nisl. Maecenas venenatis tristique dolor. Fusce lacinia, ligula eget interdum luctus, elit tortor volutpat nisl, eget ultrices ex dolor nec lorem. Quisque non risus non lectus dignissim tempus. In interdum nibh vitae nisi pellentesque hendrerit. Praesent ullamcorper vehicula urna quis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur eu ante sed diam rutrum elementum at a tortor. Donec vitae viverra neque. Aenean quis consectetur orci. Ut ac ipsum ante. Nam accumsan pretium magna id iaculis.
                        </p>
                        </div>
                        <div className="col-lg-7">
                            <GroupClassesForm />

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}



export default GroupClasses;