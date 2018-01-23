import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import "./Style.css"

// videos
import YTSearch from "youtube-api-search";
import VideoList from "../components/video_list";
import VideoDetail from "../components/video_detail";
const API_KEY = "AIzaSyAEL_3fsrsOXhhDky5yhjaH8RMcRjUUCKs";




class WhyCpr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };


        YTSearch({ key: API_KEY, term: "Why is important to know CPR" }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <Jumbotron
                    title="Learn CPR. Save Lives!"
                    subtitle="Text of the printing and typesetting industry"
                    id="item3"

                />
                <div className="container">

                    <div className="row">
                        <div className="col-md-8">
                            <div>
                            <h3> Top 3 Reasons to Get CPR Training Now </h3>
                                <p>
                                    Some people think that performing CPR is a job for for paramedics or medical professionals. Others believe CPR is only for those with years of training and extensive experience in medicine. At <a href="/">CPR for Life Orlando</a>, we believe that CPR training is for everyone. We have seen how CPR saves lives and keeps families from being turn apart by loss.
                </p>
                                <h5>CPR Is Easy to Learn</h5>
                                <p>
                                    You don’t have to be a genius or complete years of medical school to learn and perform CPR effectively. One of the main benefits of CPR is the fact that it can be performed by just about anyone at any time.
                </p>

                                <h5>You will Feel Confident in An Emergency</h5>
                                <p>
                                    When you complete CPR training, you will have the skills and knowledge necessary to perform CPR in an emergency situation. You’ll also have the confidence you need to make good decisions and do everything possible to help.
                </p>
                            </div>
                            <div className="videoCPR">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <VideoList
                                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                                videos={this.state.videos} />
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default WhyCpr;