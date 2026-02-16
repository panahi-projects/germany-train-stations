import { Station } from "@/app/types";

const API_URL =
  "https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/fc7dc242f41393845d90edaa99e32e28f1ddfe24/train-stations.json";

export async function fetchStations(): Promise<Station[]> {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });
    console.log("response > ", response);

    if (!response.ok) {
      throw new Error(`Failed to fetch stations: ${response.status}`);
    }

    const data: Station[] = await response.json();

    console.log("data: ", data);

    return data;
  } catch (error) {
    console.error("Error fetching stations:", error);
    throw error;
  }
}
