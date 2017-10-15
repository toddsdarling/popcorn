import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
</GoogleMap>
))


export default MapComponent;