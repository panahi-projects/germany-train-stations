export interface Station {
  id: number;
  name: string;
  city: string;
  lat: number;
  lng: number;
}

export interface MapViewProps {
  stations: Station[];
  selectedStationId: number | null;
}

export interface UseStationsReturn {
  stations: Station[];
  loading: boolean;
  error: string | null;
}
