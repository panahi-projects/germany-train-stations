import { Station } from "../types";

export function getUniqueCities(stations: Station[]): string[] {
  const cities = stations?.map((station) => station.city) || [];
  return Array.from(new Set(cities)).sort();
}
