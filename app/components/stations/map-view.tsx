"use client";
import React, { useEffect, useRef } from "react";
// @ts-expect-error
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapView = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current).setView([0, 0], 6);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);
  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full rounded-lg shadow-lg"
      style={{ minHeight: "400px" }}
    />
  );
};

export default MapView;
