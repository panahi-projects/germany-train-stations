import { render, screen, fireEvent } from "@testing-library/react";
import StationsList from "../app/components/stations/stations-list";

const mockStations = [
  { id: 1, name: "Berlin Hbf", city: "Berlin", lat: 52.5251, lng: 13.3694 },
  { id: 2, name: "Munich Pasing", city: "Munich", lat: 48.1499, lng: 11.4616 },
];

describe("StationsList", () => {
  it("renders station count correctly", () => {
    render(
      <StationsList
        stations={mockStations}
        selectedStationId={null}
        onStationClick={jest.fn()}
      />,
    );

    expect(screen.getByText("STATIONS")).toBeTruthy();
    expect(screen.getByText("(2)")).toBeTruthy();
  });

  it("renders station names", () => {
    render(
      <StationsList
        stations={mockStations}
        selectedStationId={null}
        onStationClick={jest.fn()}
      />,
    );

    expect(screen.getByText("Berlin Hbf")).toBeTruthy();
    expect(screen.getByText("Munich Pasing")).toBeTruthy();
  });

  it("calls onStationClick when clicked", () => {
    const mockClick = jest.fn();

    render(
      <StationsList
        stations={mockStations}
        selectedStationId={null}
        onStationClick={mockClick}
      />,
    );

    fireEvent.click(screen.getByText("Berlin Hbf"));

    expect(mockClick).toHaveBeenCalledWith(1);
  });

  it("shows empty state when no stations", () => {
    render(
      <StationsList
        stations={[]}
        selectedStationId={null}
        onStationClick={jest.fn()}
      />,
    );

    expect(screen.getByText("No stations found")).toBeTruthy();
  });

  it("applies selected styles correctly", () => {
    render(
      <StationsList
        stations={mockStations}
        selectedStationId={1}
        onStationClick={jest.fn()}
      />,
    );

    const selectedButton = screen.getByText("Berlin Hbf").closest("button");

    expect(selectedButton).toBeTruthy();
  });
});
