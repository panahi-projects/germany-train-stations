"use client";
import { useEffect, useState } from "react";
import { Container } from "./components";
import { Station } from "./types";
import { fetchStations } from "./lib/api";

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
      <Container>
        <div className="bg-white rounded-lg shadow-lg p-4 overflow-hidden flex flex-col">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Stations ({stations.length})
          </h2>
          <div
            className="overflow-y-auto flex-1"
            style={{ maxHeight: "600px" }}
          >
            {stations.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No stations found
              </p>
            ) : (
              <ul className="space-y-2">
                {stations.map((station) => (
                  <li key={station.id}>
                    <div className="font-medium text-gray-900">
                      {station.name}
                    </div>
                    <div className="text-sm text-gray-600">{station.city}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
