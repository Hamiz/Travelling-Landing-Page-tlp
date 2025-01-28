import React from "react";
import { Star, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  image: string;
  text: string;
  location: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  image,
  text,
  location,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-600"
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white" />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-lg">{name}</h4>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin size={14} className="mr-1" />
            {location}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Star size={16} fill="currentColor" />
            </motion.div>
          ))}
        </div>
        <p className="text-gray-600 italic">&quot;{text}&quot;</p>
      </div>
      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center text-gray-500 text-sm">
          <Clock size={14} className="mr-1" />
          <span>Visited 2 months ago</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
