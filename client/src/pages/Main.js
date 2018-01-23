import React, { Component } from "react";
import Carousel from "../components/Carousel";
import Marketing from "../components/Marketing"

class Main extends Component {
    render() {
        return (
            <div>
               <Carousel />
                <div className="container">
                <Marketing />
                </div>
            </div>
        )
    }
}


export default Main;