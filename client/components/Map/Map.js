import React, { Component } from "react";
import L from "leaflet";

class Map extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var map = L.map("map").setView([44.48696447992683, -88.03761242571646], 13);
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&amp;copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }

  render() {
    return (
      <div>
        <div>
          <h1>welcome to the map</h1>
        </div>
        <div id="map"></div>
      </div>
    );
  }
}

export default Map;
