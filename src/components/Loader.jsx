import { useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [buttonVisible, setButtonVisible] = useState(false);

  useState(() => {
    const timer = setTimeout(() => setButtonVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-wide"
      >
        MentorConnect
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-gray-400 text-lg mb-8"
      >
        Learn. Teach. Grow.
      </motion.p>

      {buttonVisible && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onFinish}
          className="px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Let’s Start 📘
        </motion.button>
      )}
    </div>
  );
};

export default Loader;
