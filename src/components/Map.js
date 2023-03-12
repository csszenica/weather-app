import React from 'react'
import LocationPin from './LocationPin'
import GoogleMapReact from 'google-map-react';



const Map = ({location}) => {
  return (
    <div style={{ height: '300px', width: '600px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_GEOLOCATION_API_KEY }}
        center={location}
        defaultZoom={12}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map