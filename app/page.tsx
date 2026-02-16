"use client";
import dynamic from "next/dynamic";
import { Container, LoadingSpinner } from "./components";
import StationsList from "./components/stations/stations-list";
import { useStations } from "./lib/useStations";

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

  console.log("Stations:::", stations);

  if (loading) return <LoadingSpinner />;
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
            <StationsList
              stations={stations}
              selectedStationId={null}
              onStationClick={() => {}}
            />
          </div>
          {/* Stations map view */}
          <div className="md:col-span-8 col-span-12">
            <MapView />
          </div>
        </div>
      </Container>
    </div>
  );
}
