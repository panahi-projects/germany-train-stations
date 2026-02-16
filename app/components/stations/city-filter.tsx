import { CityFilterProps } from "@/app/types";
import React from "react";

const CityFilter = ({
  cities,
  selectedCity,
  onCityChange,
}: CityFilterProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="city-filter"
        className="block text-xs font-medium text-text-primary/60 mb-1.5 tracking-wide"
      >
        FILTER BY CITY
      </label>
      <select
        id="city-filter"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="w-full px-3 py-1.5 text-sm bg-transparent border border-text-primary-100 rounded-md text-text-primary focus:border-text-secondary focus:ring-1 focus:ring-text-secondary/30 outline-none transition-all duration-200 cursor-pointer"
      >
        <option value="" className="bg-background text-text-primary">
          All Cities ({cities.length})
        </option>
        {cities.map((city) => (
          <option
            key={city}
            value={city}
            className="bg-background text-text-primary"
          >
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
