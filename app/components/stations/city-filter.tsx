import { CityFilterProps } from "@/app/types";
import React from "react";

const CityFilter = ({
  cities,
  selectedCity,
  onCityChange,
}: CityFilterProps) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="city-filter"
        className="block text-sm font-medium text-gray-500 mb-2"
      >
        Filter by City
      </label>
      <select
        id="city-filter"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
      >
        <option value="">All Cities ({cities.length})</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
