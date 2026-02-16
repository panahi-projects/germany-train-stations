"use client";
import { useEffect, useState } from "react";
import { Container } from "./components";
import { Station } from "./types";
import { fetchStations } from "./lib/api";
import StationsList from "./components/stations/stations-list";
import MapView from "./components/stations/map-view";

export default function Home() {
  const [stations, setStations] = useState<Station[]>([]);
  useEffect(() => {
    async function loadData() {
      const data = await fetchStations();
      console.log("Data: ", data);

      setStations(data);
    }
    loadData();
  }, []);

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
