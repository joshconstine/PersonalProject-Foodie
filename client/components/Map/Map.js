import React, { Component } from "react";
import L from "leaflet";
import { Link } from "react-router-dom";

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
    var marker = L.marker([44.428949779326864, -88.05635287710363]).addTo(map);
    marker.bindPopup("<b>McDoanlds</b>");
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
