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
      <Container>Main page</Container>
    </div>
  );
}
