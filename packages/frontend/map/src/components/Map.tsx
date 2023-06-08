"use client";
import React, { useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Image } from "../types";
import { LatLng } from "leaflet";

interface MapProps {
  images: Image[];
}

const position = new LatLng(50.5, 30.5);

const Map = ({ images }: MapProps) => {
  const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });

  return (
    <div>
      return (
      <MapContainer
        center={[geoData.lat, geoData.lng]}
        zoom={12}
        style={{ height: "90vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData.lat && geoData.lng && (
          <Marker position={[geoData.lat, geoData.lng]} />
        )}
      </MapContainer>
      );
    </div>
  );
};

export default Map;
