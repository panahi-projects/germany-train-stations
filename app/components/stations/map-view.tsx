"use client";

import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapViewProps } from "@/app/types";

const MapView = ({ stations, selectedStationId }: MapViewProps) => {
  const mapRef = useRef<any>(null);
  const leafletRef = useRef<any>(null);
  const markersRef = useRef<Map<number, any>>(new Map());
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const hasInitializedRef = useRef(false);

  const [isMapReady, setIsMapReady] = useState(false);

  // Initialize map
  useEffect(() => {
    if (hasInitializedRef.current) return;
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    hasInitializedRef.current = true;

    const initMap = async () => {
      const L = (await import("leaflet")).default;
      leafletRef.current = L;

      // Fix marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@1.0.0/img/marker-icon-2x-orange.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapContainerRef.current!).setView(
        [51.1657, 10.4515],
        6,
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      mapRef.current = map;
      setIsMapReady(true);
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update markers AFTER map is ready
  useEffect(() => {
    if (!isMapReady || !mapRef.current || !leafletRef.current) return;

    const L = leafletRef.current;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current.clear();

    stations.forEach((station) => {
      const marker = L.marker([station.lat, station.lng])
        .bindPopup(`<strong>${station.name}</strong><br/>${station.city}`)
        .addTo(mapRef.current);

      markersRef.current.set(station.id, marker);
    });

    if (stations.length > 0) {
      const bounds = L.latLngBounds(
        stations.map((s) => [s.lat, s.lng] as [number, number]),
      );
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [stations, isMapReady]);

  // Handle selected station
  useEffect(() => {
    if (!isMapReady || !selectedStationId) return;

    const marker = markersRef.current.get(selectedStationId);
    if (marker) {
      mapRef.current.setView(marker.getLatLng(), 12, { animate: true });
      marker.openPopup();
    }
  }, [selectedStationId, isMapReady]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full rounded-lg shadow-lg"
      style={{ minHeight: "800px" }}
    />
  );
};

export default MapView;
