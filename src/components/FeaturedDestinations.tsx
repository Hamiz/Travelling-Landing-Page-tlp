import DestinationCard from "./DestinationCard";

// Featured Destinations Section
const FeaturedDestinations = () => {
  const destinations = [
    {
      title: "Paris, France",
      image: "/images/fd1.jpg",
      description:
        "Experience the city of love and lights with our curated tours.",
    },
    {
      title: "Maldives",
      image: "/images/fd2.jpg",
      description:
        "Discover paradise on Earth with crystal clear waters and white beaches.",
    },
    {
      title: "Skardu, Pakistan",
      image: "/images/fd3.jpg",
      description:
        "Explore the majestic mountains and rich culture of Northern Pakistan.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
