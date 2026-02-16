"use client";
import dynamic from "next/dynamic";
import {
  CityFilter,
  Container,
  ErrorMessage,
  LoadingSpinner,
} from "./components";
import StationsList from "./components/stations/stations-list";
import { useStations } from "./lib/useStations";
import { useMemo, useState } from "react";
import { filterStationsByCity, getUniqueCities } from "./utils/stations";

// Dynamically import MapView to avoid SSR issues with Leaflet
const MapView = dynamic(() => import("@/app/components/stations/map-view"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-600">Loading map...</p>
    </div>
  ),
});

export default function Home() {
  const { stations, loading, error } = useStations();

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStationId, setSelectedStationId] = useState<number | null>(
    null,
  );

  const cities = useMemo(() => getUniqueCities(stations), [stations]);
  const filteredStations = useMemo(
    () => filterStationsByCity(stations, selectedCity),
    [stations, selectedCity],
  );

  const handleStationClick = (stationId: number) => {
    setSelectedStationId(stationId);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedStationId(null);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <div>
      <Container className="my-8">
        <div className="grid grid-cols-12 gap-4">
          {/* Title */}
          <div className="col-span-12 mb-4">
            <h1 className="text-2xl font-bold">Train Stations in Germany</h1>
          </div>
          {/* List of stations */}
          <div className="md:col-span-4 col-span-12 mb-8 md:mb-0">
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <CityFilter
                  cities={cities}
                  selectedCity={selectedCity}
                  onCityChange={handleCityChange}
                />
              </div>
              <StationsList
                stations={filteredStations}
                selectedStationId={selectedStationId}
                onStationClick={handleStationClick}
              />
            </div>
          </div>
          {/* Stations map view */}
          <div className="md:col-span-8 col-span-12 min-h-[800px]">
            <MapView
              selectedStationId={selectedStationId}
              stations={filteredStations}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
