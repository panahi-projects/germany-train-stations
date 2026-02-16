"use client";
import React, { useEffect, useRef } from "react";
// @ts-expect-error
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapViewProps } from "@/app/types";

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapView = ({ stations, selectedStationId }: MapViewProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<number, L.Marker>>(new Map());
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Center on Germany
    const map = L.map(mapContainerRef.current).setView([51.1657, 10.4515], 6);

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

  // Update markers when stations change
  useEffect(() => {
    if (!mapRef.current) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current.clear();

    // Add new markers
    stations.forEach((station) => {
      const marker = L.marker([station.lat, station.lng])
        .bindPopup(`<strong>${station.name}</strong><br/>${station.city}`)
        .addTo(mapRef.current!);

      markersRef.current.set(station.id, marker);
    });

    // Fit bounds if there are stations
    if (stations.length > 0) {
      const bounds = L.latLngBounds(
        stations.map((s) => [s.lat, s.lng] as [number, number]),
      );
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [stations]);

  // Handle selected station
  useEffect(() => {
    if (!mapRef.current || !selectedStationId) return;

    const marker = markersRef.current.get(selectedStationId);
    if (marker) {
      mapRef.current.setView(marker.getLatLng(), 12, { animate: true });
      marker.openPopup();
    }
  }, [selectedStationId]);
  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full rounded-lg shadow-lg"
      style={{ minHeight: "400px" }}
    />
  );
};

export default MapView;
