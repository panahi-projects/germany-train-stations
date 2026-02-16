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
    <div className="w-full h-full bg-text-primary/5 rounded flex items-center justify-center border border-text-primary/10">
      <p className="text-xs text-text-primary/60">Loading map...</p>
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
      <Container className="my-6">
        <div className="grid grid-cols-12 gap-3">
          {/* Title */}
          <div className="col-span-12 mb-2">
            <h1 className="text-base font-medium text-text-primary-700 tracking-wide">
              TRAIN STATIONS IN GERMANY
            </h1>
            <p className="text-xs text-text-primary-400/70 mt-0.5">
              {filteredStations.length} stations • {cities.length} cities
            </p>
          </div>

          {/* List of stations */}
          <div className="md:col-span-4 col-span-12">
            <div className="flex flex-col gap-3">
              <CityFilter
                cities={cities}
                selectedCity={selectedCity}
                onCityChange={handleCityChange}
              />
              <StationsList
                stations={filteredStations}
                selectedStationId={selectedStationId}
                onStationClick={handleStationClick}
              />
            </div>
          </div>

          {/* Stations map view */}
          <div className="md:col-span-8 col-span-12 min-h-[600px]">
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
