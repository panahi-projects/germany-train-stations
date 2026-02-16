"use client";
import { useEffect, useState } from "react";
import { Container } from "./components";
import { Station } from "./types";
import { fetchStations } from "./lib/api";
import StationsList from "./components/stations/stations-list";

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
        <div className="grid grid-cols-12">
          {/* List of stations */}
          <div className="md:col-span-4 col-span-12 mb-8 md:mb-0">
            <h1 className="text-2xl font-bold mb-4">
              Train Stations in Germany
            </h1>
            <StationsList
              stations={stations}
              selectedStationId={null}
              onStationClick={() => {}}
            />
          </div>
          {/* Stations map view */}
        </div>
      </Container>
    </div>
  );
}
