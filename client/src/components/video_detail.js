import React from "react";
import "./VideoStyle.css"

const VideoDetail = ({video}) => {
    // const video = props.video;
    if(!video) {
        return <div>Loading...</div>
    }
    
    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;
    const uniqueTitle = "video"

    // const url = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} title={uniqueTitle}></iframe>

            </div>
            
            <div>
                <div> {video.snippet.title}</div>
                <div> {video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
