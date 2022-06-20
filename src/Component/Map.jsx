import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function MapCpmponent(props) {
    console.log('props', props);
    console.log('props.google', props.google);
    return (
        <Map
            google={props.google}
            style={{ width: '50vw', height: '50vh' }}
            initialCenter={{
                lat: 22.258652,
                lng: 71.192383
            }}
        >

        </Map>
    )
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCWjxfiQrpOHAc90w8YJrvuvTQXlKOWALM',
})(MapCpmponent);