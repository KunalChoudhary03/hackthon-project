import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LearnForm = () => {
  const [storedData, setStoredData] = useState(null);
 const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("userData"));
    if (localData) setStoredData(localData);
  }, []);

  const onSubmit = (data) => {
    setStoredData(data);
    localStorage.setItem("userData", JSON.stringify(data));
    toast.success("Application Submitted Successfully 🚀", {
      autoClose: 2000,
    });
    navigate('/mentore');
    reset();
  };

  return (
    <div className="bg-black min-h-screen py-16 px-4">
      
      <motion.div
        className="text-center text-white mb-8 mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 py-3 px-6 rounded-xl shadow-md w-fit mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-lg font-semibold">You will be next! 🌟</h2>
      </motion.div>

      <motion.div
        className="text-center max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl text-white font-bold mb-4">Want to Learn?</h1>
        <p className="text-lg text-gray-300">
          Learn something new from your mentor. Just fill out the form below.
        </p>
      </motion.div>

      <motion.div
        className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Learning Form</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
              Skills You Want to Learn
            </label>
            <input
              {...register("skills", { required: "This field is required" })}
              type="text"
              placeholder="e.g., React, Python"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.skills && (
              <p className="text-red-400 text-sm mt-1">{errors.skills.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
              Preferred Time
            </label>
            <input
              {...register("time", { required: "Please enter a time preference" })}
              type="text"
              placeholder="e.g., Weekends, 5 PM - 6 PM"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.time && (
              <p className="text-red-400 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
              Preferred Language
            </label>
            <select
              {...register("language", { required: "Please select a language" })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Language --</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">Tamil</option>
              <option value="Other">Other</option>
            </select>
            {errors.language && (
              <p className="text-red-400 text-sm mt-1">{errors.language.message}</p>
            )}
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Submit
          </motion.button>
        </form>

        <ToastContainer position="top-right" />
      </motion.div>
    </div>
  );
};

export default LearnForm;
