import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 

// var API_KEY= "AIzaSyBdGWKrkjy-dcFiiHyvNfX6bQzKgEDrxeY"



class Map extends Component {
  static defaultProps = {
    center: {lat: 28.538335, lng: -81.379236},
    zoom: 11
  };
 
  render() {
    return (
      <div>

      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
    
      </GoogleMapReact>
      </div>
    );

  }
}
export default Map;