import React, { Component } from "react";
import "./Style.css"
// import Calendar from "../../components/Calendar";


class Text extends Component {

    render() {
        return (
            <div>
            
                <div className="container" >
                    <div className="row">
                    <div className="col-lg-6">
                    <h3>CPR Training </h3>
                            <p>
                            CPR/BLS course provides the instruction you need to perform CPR on adults as well as children and infants. In addition, our industry leading course provides detailed instructions for how to use the Automated External Defibrillator or AED.
                            You’ll find that our study material and training is easy to understand and easy to use, thus providing you with the best learning outcome in the shortest time possible.
                        </p>
                        </div>
                        <div className="col-lg-6">
                        <h3>CPR + First Aid Training</h3>
                        <p>
                            This is the Best Deal on CPR Certification + First Aid in Orlando. If you choose to combine <strong>BLS CPR and FIRST AID training</strong> you will receive both, the American Heart Association BLS Healthcare Provider and a CPR Certification Card. This CPR class offers the Best Hands on AHA BLS CPR Card paired with the Our First Aid Training.
                    
                    </p>
                        </div>

                    </div>

                    <div className="row">
                    <div className="col-lg-12">
                    <h2>Select the course and date of your preference to register.</h2>
                    </div>
                    </div>

                </div>

            </div>
        );
    }
}



export default Text;