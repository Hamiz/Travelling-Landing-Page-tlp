import { useState, useEffect } from "react";
import {
  Send,
  Sparkles,
  Star,
  Loader,
  CheckCircle,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

const ContactForm = () => {
  const [focused, setFocused] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);
  const [formActive, setFormActive] = useState(false);

  useEffect(() => {
    setTimeout(() => setFormActive(true), 100);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  return (
    <div
      className={`relative w-full max-w-md transform transition-all duration-700 ${
        formActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Animated border effect */}
      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur transition duration-1000" />

      <div className="relative p-8 rounded-xl border border-white/10">
        {/* Animated decorative elements */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full
                     animate-ping opacity-75
                     ${
                       i === 0
                         ? "top-4 right-4 delay-0"
                         : i === 1
                         ? "bottom-4 left-4 delay-300"
                         : "top-1/2 right-4 delay-700"
                     }`}
          />
        ))}

        <h2 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div
            className={`transform transition-all duration-300 ${
              focused === "name" ? "scale-[1.02]" : ""
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative flex items-center">
                <User
                  size={16}
                  className={`absolute left-3 transition-all duration-300 ${
                    focused === "name" ? "text-blue-400" : "text-gray-400"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 bg-[#151C30]/80 text-white rounded-lg
                           border border-white/5 transition-all duration-300
                           focus:outline-none focus:border-blue-500/50 focus:bg-[#151C30]
                           placeholder-gray-400"
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                />
              </div>
            </div>
          </div>

          {/* Email Input */}
          <div
            className={`transform transition-all duration-300 ${
              focused === "email" ? "scale-[1.02]" : ""
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative flex items-center">
                <Mail
                  size={16}
                  className={`absolute left-3 transition-all duration-300 ${
                    focused === "email" ? "text-purple-400" : "text-gray-400"
                  }`}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-3 bg-[#151C30]/80 text-white rounded-lg
                           border border-white/5 transition-all duration-300
                           focus:outline-none focus:border-purple-500/50 focus:bg-[#151C30]
                           placeholder-gray-400"
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                />
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div
            className={`transform transition-all duration-300 ${
              focused === "message" ? "scale-[1.02]" : ""
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative flex items-center">
                <MessageSquare
                  size={16}
                  className={`absolute left-3 top-3 transition-all duration-300 ${
                    focused === "message" ? "text-pink-400" : "text-gray-400"
                  }`}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 bg-[#151C30]/80 text-white rounded-lg
                           border border-white/5 transition-all duration-300
                           focus:outline-none focus:border-pink-500/50 focus:bg-[#151C30]
                           placeholder-gray-400"
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
            disabled={isSubmitting || submitted}
            className="group relative w-full py-3 rounded-lg font-medium text-white overflow-hidden"
          >
            {/* Button background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-105" />

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-full group-hover:translate-x-0 transition-all duration-700" />

            {/* Button content */}
            <div className="relative flex items-center justify-center space-x-2">
              {isSubmitting ? (
                <Loader className="animate-spin" size={18} />
              ) : submitted ? (
                <>
                  <CheckCircle size={18} className="text-green-400" />
                  <span>Sent Successfully!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send
                    size={16}
                    className={`transition-all duration-300 ${
                      hoverButton ? "translate-x-1" : ""
                    }`}
                  />
                </>
              )}
            </div>
          </button>
        </form>

        {/* Decorative sparkles */}
        <Sparkles
          size={16}
          className="absolute top-6 right-6 text-blue-400 opacity-75"
        />
        <Star
          size={16}
          className="absolute bottom-6 left-6 text-purple-400 opacity-75"
        />
      </div>
    </div>
  );
};

export default ContactForm;
