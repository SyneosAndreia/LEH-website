import React from 'react';
import PropTypes from 'prop-types';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';


const GoogleMapsContainer = ({
  // this prop is injected by GoogleApiWrapper
  google,
  points,
}) => {
  // Display image when no point is given.
  if (points.length === 0) {
    return <div className="GoogleMaps__no_coordinates" />;
  }

  const center = points[0];

  let bounds;

  // Adjust map zoom / center to include all points (when more than 1 point).
  // if (points.length > 1) {
  //   bounds = new google.maps.LatLngBounds();
  //   points.forEach((point) => {
  //     bounds.extend({ lat: point.lat, lng: point.lng });
  //   });
  // } else {
  //   bounds = null;
  // }

  return (
    <Map    
      item
      xs={8}
      google={google}
      zoom={10}
      initialCenter={center}
      center={center}
      bounds={bounds}
    >
      {points.map(point => (
        <Marker
          key={point.id}
          title={point.name}
          position={{ lat: point.lat, lng: point.lng }}
        />
      ))}
    </Map>
  );
};


GoogleMapsContainer.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  })),
  google: PropTypes.shape().isRequired,
};

GoogleMapsContainer.defaultProps = {
  points: [],
};

export default GoogleApiWrapper({
  api: "AIzaSyBysHx45reXxgv8wrdYVp3OEeqzN9TfMWg",
})(GoogleMapsContainer);
