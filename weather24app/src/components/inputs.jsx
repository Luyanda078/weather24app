import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

function Inputs({ setQuery, setUnits }) {
  const [city, setCity] = useState("");

  // Handle search by city
  const handleSearch = () => {
    if (city) {
      setQuery({ q: city });
      setCity(""); 
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  // Handle getting current location
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setQuery({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Handle unit toggle
  const handleUnitChange = (unit) => {
    setUnits(unit);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      {/* Search Bar */}
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search by city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
          className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <BiSearch
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearch}
        />
        <BiCurrentLocation
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocation}
        />
      </div>

      {/* Temperature Unit Toggle */}
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => handleUnitChange("metric")}
        >
          °C
        </button>
        <p className="text-2xl font-medium mx-2">|</p>
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => handleUnitChange("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
