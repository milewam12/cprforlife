import React from "react";
import "./VideoStyle.css"

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video
    const imageURL = video.snippet.thumbnails.default.url;

    return (
        <li onClick={()=> onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <img className="media-object" src={imageURL} alt=""/>
            </div>
            <div className="media-body">
                <div className="media-heading"> {video.snippet.title}</div>
            </div>


        </li>
    )
};

export default VideoListItem;