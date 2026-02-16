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
    <div className="bg-background-muted/30 backdrop-blur-sm border border-text-primary-200 rounded-md p-3 overflow-hidden flex flex-col">
      <h2 className="text-sm font-medium mb-2 text-text-primary-400 tracking-wide">
        STATIONS{" "}
        <span className="text-text-secondary-500 ml-1">
          ({stations.length})
        </span>
      </h2>
      <div
        className="overflow-y-auto flex-1 pr-1"
        style={{ maxHeight: "600px" }}
      >
        {stations.length === 0 ? (
          <p className="text-text-primary-300/60 text-xs text-center py-6">
            No stations found
          </p>
        ) : (
          <ul className="space-y-1.5">
            {stations.map((station) => (
              <li key={station.id}>
                <button
                  onClick={() => onStationClick(station.id)}
                  className={`w-full text-left px-3 py-2 rounded transition-all duration-200 ${
                    selectedStationId === station.id
                      ? "bg-text-secondary-500 border border-text-secondary-500"
                      : "hover:bg-text-primary-200 border border-text-primary-50 hover:border-text-primary-300"
                  }`}
                >
                  <div className="text-sm font-medium text-text-primary-700">
                    {station.name}
                  </div>
                  <div className="text-xs text-text-primary-400/80 mt-0.5">
                    {station.city}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
