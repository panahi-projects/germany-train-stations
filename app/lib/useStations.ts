"use client";

import { useState, useEffect } from "react";
import { Station, UseStationsReturn } from "@/app/types";
import { fetchStations } from "@/app/lib/api";

export function useStations(): UseStationsReturn {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStations() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchStations();
        setStations(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch stations",
        );
      } finally {
        setLoading(false);
      }
    }

    loadStations();
  }, []);

  return { stations, loading, error };
}
