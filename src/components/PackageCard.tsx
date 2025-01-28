import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

// Package Card Component
const PackageCard: React.FC<PackageCardProps> = ({
  title,
  price,
  description,
  image,
  features,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
        <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full shadow-md">
          <span className="text-blue-600 font-bold">${price}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-500">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
              {feature}
            </div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PackageCard;
