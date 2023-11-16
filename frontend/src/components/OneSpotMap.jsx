import React from "react";
import { GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api';


const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '24px'
}

//static for now
const center = {
  lat: 48.424158647072495,
  lng: -123.41913232109277
};

export default function OneSpotMap (props) {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCZ4m4MUuWXxIlkrriyTTQp4f3TRby2yes',
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <div className="one-spot__map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        options = {{
          streetViewControl: true,
          fullscreenControl: false,
          zoomControl: false,
          mapTypeControl: false
        }}
      > 
        <MarkerF position={{lat: Number(center.lat), lng: Number(center.lng)}} />
      </GoogleMap>
    </div>
  );
};