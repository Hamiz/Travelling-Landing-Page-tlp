import { motion } from "framer-motion";
import DestinationCard from "./DestinationCard";
import FeaturedDestinations from "./FeaturedDestinations";

const Destinations = () => {
  // Extended list of destinations
  const allDestinations = [
    {
      title: "Paris, France",
      image: "images/fd1.jpg",
      description:
        "Experience the city of love and lights with our curated tours.",
    },
    {
      title: "Maldives",
      image: "images/fd2.jpg",
      description:
        "Discover paradise on Earth with crystal clear waters and white beaches.",
    },
    {
      title: "Skardu, Pakistan",
      image: "images/fd3.jpg",
      description:
        "Explore the majestic mountains and rich culture of Northern Pakistan.",
    },
    {
      title: "Santorini, Greece",
      image: "images/d1.jpg",
      description:
        "Experience stunning sunsets and white-washed architecture on this magical island.",
    },
    {
      title: "Tokyo, Japan",
      image: "images/d2.jpg",
      description:
        "Immerse yourself in the perfect blend of tradition and modern technology.",
    },
    {
      title: "Machu Picchu, Peru",
      image: "images/d3.jpg",
      description:
        "Discover the ancient Incan civilization in this mystical mountain setting.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Featured Destinations */}
      <FeaturedDestinations />

      {/* All Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            All Destinations
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {allDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DestinationCard {...destination} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
