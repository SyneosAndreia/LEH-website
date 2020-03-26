import React from "react";
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps/types"


import '../../styles/map.scss';


const MapWithAMarker = compose(withScriptjs, withGoogleMap)((props, markers) => {
  console.log(props);

  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 51.507351, lng: -0.127758 }}>
      {props.markers.map(marker => {
        // const onClick = props.onClick.bind(this, marker)
        return (
          <Marker
            key={marker.id}
            // onClick={onClick}
            position={{ lat: marker.latitude, lng: marker.longitude }}
          >
          </Marker>
        )
      })}
    </GoogleMap>
  )
})


export default class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clinics: []
    }
  }
  componentDidMount() {
    fetch("../data/data.json")
      .then(r => r.json())
      .then(data => {
        this.setState({ clinics: data.clinics })
      })
  }

  render() {
    return (
      <div className="map-container"  style={{width: '75vw', height: '75vh'}}>
        <MapWithAMarker
          markers={this.state.clinics}
          // onClick={this.handleClick}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBysHx45reXxgv8wrdYVp3OEeqzN9TfMWg&callback=initMap"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}
