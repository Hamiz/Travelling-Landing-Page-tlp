import React from "react";

interface DestinationCardProps {
  title: string;
  image: string;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-scale-up">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="relative p-6 z-10">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm -z-10" />
        <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 transform transition-all duration-300 group-hover:translate-y-0">
          {description}
        </p>
        <button className="inline-flex items-center text-primary-500 hover:text-primary-700 font-semibold transition-all duration-300 group-hover:translate-x-2">
          View More
          <svg
            className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-accent-gold/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500/10 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default DestinationCard;
