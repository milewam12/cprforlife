import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {lat: 28.538335, lng: -81.379236},
    zoom: 11
  };
 
  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {/* <AnyReactComponent
          lat={28.538335}
          lng={-81.379236}
          text={''}
        /> */}
      </GoogleMapReact>
    );
  }
}
export default Map;