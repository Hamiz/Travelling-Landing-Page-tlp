import HeroSection from "./components/HeroSection";
import FeaturedDestinations from "./components/FeaturedDestinations";
import PackageCard from "./components/PackageCard";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";
import { motion } from "framer-motion";

// Home Component
const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedDestinations />
      <motion.section
        id="packages"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 container mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Popular Packages
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <PackageCard
            image="src/images/hm.jpg"
            title="Honeymoon Getaway"
            price="1999"
            description="7 days of romance in paradise with luxury accommodations and private tours."
            features={["Luxury Suite", "Private Tours", "Spa Access"]}
          />
          <PackageCard
            image="src/images/at.jpg"
            title="Adventure Trails"
            price="1499"
            description="5 days of thrilling activities including hiking, rafting, and rock climbing."
            features={["Expert Guides", "Equipment", "Safety Training"]}
          />
          <PackageCard
            image="src/images/ft.jpg"
            title="Family Trip"
            price="2499"
            description="10 days of family fun with kid-friendly activities and comfortable stays."
            features={["Kid-Friendly", "All Meals", "Activities"]}
          />
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <Testimonial
              name="John Doe"
              image="src/images/t1.jpg"
              text="Amazing experience! The team made our honeymoon absolutely perfect."
              location="Paris, France"
            />
            <Testimonial
              name="Jane Smith"
              image="src/images/t2.jpg"
              text="Professional service and unforgettable adventures. Highly recommended!"
              location="Bali, Indonesia"
            />
            <Testimonial
              name="Mike Johnson"
              image="src/images/t3.jpg"
              text="Best family vacation ever! Everything was well-planned and stress-free."
              location="Tokyo, Japan"
            />
            <Testimonial
              name="John Doe"
              image="src/images/t4.jpg"
              text="Amazing experience! Thanks to the Wanderlust Adventure and The team, they made our honeymoon absolutely perfect."
              location="United Kingdom, London"
            />
            <Testimonial
              name="Jane Smith"
              image="src/images/t5.jpg"
              text="Professional service and unforgettable adventures. Highly recommended! Thanks to the Wanderlust Adventure"
              location="Pakistan, Islamabad"
            />
            <Testimonial
              name="Mike Johnson"
              image="src/images/t6.jpg"
              text="Best family vacation ever! Thanks to the Wanderlust Adventure. Everything was well-planned and stress-free."
              location="India, Jaipur"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center py-8 container mx-auto px-4"
      >
        <div className="w-full max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Contact Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
