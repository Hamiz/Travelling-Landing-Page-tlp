import { Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Destination {
  name: string;
  type: string;
}

const HeroSection = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Sample destinations data - in a real app, this would come from your backend
  const destinations: Destination[] = [
    { name: "Paris, France", type: "City" },
    { name: "Maldives", type: "Country" },
    { name: "Skardu, Pakistan", type: "City" },
    { name: "Santorini, Greece", type: "Island" },
    { name: "Tokyo, Japan", type: "City" },
    { name: "Machu Picchu, Peru", type: "Landmark" },
  ];

  // Filter destinations based on search query
  const filteredDestinations = destinations.filter((dest) =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle search submission
  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/destinations?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (destination: Destination) => {
    setSearchQuery(destination.name);
    setShowSuggestions(false);
    navigate(`/destinations?search=${encodeURIComponent(destination.name)}`);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="images/herosection.jpg"
        alt="Scenic Travel Destination"
        className="w-full h-full object-cover transform scale-105 animate-float"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-primary-900/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent animate-pulse-slow" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 space-y-8 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-accent-gold">
              Explore the World
            </span>
            <br />
            <span className="text-4xl md:text-6xl">
              with Wanderlust Adventures
            </span>
          </h1>

          <div className="max-w-xl mx-auto relative" ref={searchRef}>
            <div className="relative transform transition-all duration-300 hover:scale-105">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                placeholder="Where do you want to go?"
                className={`w-full px-6 py-4 rounded-full text-gray-900 bg-white/90 backdrop-blur-md border-2 transition-all duration-300 ${
                  isSearchFocused
                    ? "border-primary-500 shadow-lg shadow-primary-500/30"
                    : "border-transparent"
                }`}
                onFocus={() => {
                  setIsSearchFocused(true);
                  setShowSuggestions(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white p-3 rounded-full hover:bg-primary-600 transition-all duration-300 hover:scale-110"
              >
                <Search className="animate-pulse-slow" />
              </button>
            </div>

            {/* Search Suggestions */}
            {showSuggestions && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
                {filteredDestinations.length > 0 ? (
                  filteredDestinations.map((dest, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between transition-colors duration-200"
                      onClick={() => handleSuggestionClick(dest)}
                    >
                      <span className="text-gray-800">{dest.name}</span>
                      <span className="text-sm text-gray-500">{dest.type}</span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500">
                    No destinations found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-2s" }}
      />
    </div>
  );
};

export default HeroSection;
