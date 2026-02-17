# Train Stations in Germany

An interactive web application that displays train stations across Germany on a dynamic map with city-based filtering and station selection.

Built with Next.js, React, Leaflet, and TypeScript.

## ✨ Features

- 📍 Interactive map powered by Leaflet
- 🏙️ Filter stations by city
- 📋 Scrollable station list with selection highlight
- 🎯 Click a station to focus and open its popup on the map
- ⚡ Dynamic import to prevent SSR issues
- 🎨 Clean, minimal UI styling

## 🛠 Tech Stack

- Framework: Next.js (App Router)
- UI Library: React
- Language: TypeScript
- Mapping: Leaflet
- Styling: Tailwind CSS

## 🧠 How It Works

### 1️⃣ Data Fetching

`useStations()` is a custom hook responsible for:

- Fetching station data
- Handling loading state
- Handling errors

### 2️⃣ Filtering Logic

Utility functions:

- `getUniqueCities()` → extracts unique city names
- `filterStationsByCity()` → filters stations by selected city
- Memoization (`useMemo`) ensures efficient recalculation.

### 3️⃣ Map Rendering

The MapView component:

- Dynamically imports Leaflet (`ssr: false`)
- Initializes the map inside `useEffect`
- Manages markers with `useRef`
- Automatically fits bounds to visible stations
- Focuses and opens popup when a station is selected

To prevent SSR errors like:

```ts
ReferenceError: window is not defined
```

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run development server

```bash
npm run dev
```

Visit:

```sh
http://localhost:3000
```

### 3️⃣ Production Build

```bash
npm run build
npm start
```

## ⚠️ Important Notes

**Leaflet + Next.js**

Because Leaflet depends on `window`, it must:

- Be dynamically imported
- Be initialized inside useEffect
- Avoid top-level imports

The map component uses:

```ts
dynamic(() => import(...), { ssr: false })
```

to avoid server-side rendering issues.

## UI Overview

- Left panel: City filter + station list
- Right panel: Interactive map
- Selected station:
  - Highlighted in list
  - Focused on map
  - Popup opened automatically

## Possible Improvements

- Add clustering for large datasets
- Add search by station name
- Add marker clustering plugin
- Add dark mode
- Add station details drawer
- Connect to real API endpoint

### Node.js version used:

```bash
v24.11.1
```
