"use client";

import { Station } from "@/app/types";

interface StationsListProps {
  stations: Station[];
  selectedStationId: number | null;
  onStationClick: (stationId: number) => void;
}

export default function StationsList({
  stations,
  selectedStationId,
  onStationClick,
}: StationsListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 overflow-hidden flex flex-col">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Stations ({stations.length})
      </h2>
      <div className="overflow-y-auto flex-1" style={{ maxHeight: "600px" }}>
        {stations.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No stations found</p>
        ) : (
          <ul className="space-y-2">
            {stations.map((station) => (
              <li key={station.id}>
                <button
                  onClick={() => onStationClick(station.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedStationId === station.id
                      ? "bg-blue-100 border-2 border-blue-500"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <div className="font-medium text-gray-900">
                    {station.name}
                  </div>
                  <div className="text-sm text-gray-600">{station.city}</div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
