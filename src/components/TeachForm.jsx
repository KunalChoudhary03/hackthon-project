import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TeachForm = () => {
  const [data, setdata] = useState({});
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("mentoredata"));
    if (store) setdata(store);
  }, []);

  const onSubmit = (formData) => {
    setdata(formData);
    localStorage.setItem("mentoredata", JSON.stringify(formData));
    toast.success("Application Submitted Successfully");
    navigate("/mentore");
    reset();
  };

  return (
    <div className="bg-black min-h-screen py-10 px-4">
      <motion.div
        className="flex flex-col items-center justify-center text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl text-white font-bold mb-6 mt-20">Become Mentor</h1>
        <p className="text-lg text-gray-300 max-w-xl">
          Share your expertise and inspire others. Fill out the form below to get started.
        </p>
      </motion.div>

      <motion.div
        className="max-w-xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ToastContainer />
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Skills</label>
            <input
              {...register("skills", { required: "Skills are required" })}
              type="text"
              placeholder="Enter your skills separated by commas"
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.skills && <p className="text-red-400 text-sm mt-1">{errors.skills.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              {...register("description", { required: "Description is required" })}
              rows="4"
              placeholder="Describe your mentoring style or experience..."
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            ></textarea>
            {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Experience Level</label>
            <select
              {...register("level", { required: "Please select experience level" })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="">-- Select Level --</option>
              <option value="newbie">Newbie</option>
              <option value="pro">Pro</option>
              <option value="ultra-pro">Ultra-Pro</option>
              <option value="guru">Guru</option>
            </select>
            {errors.level && <p className="text-red-400 text-sm mt-1">{errors.level.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Avatar URL</label>
            <input
              {...register("avatar")}
              type="url"
              placeholder="Enter URL of your avatar"
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Demo Video (YouTube)</label>
            <input
              {...register("yt", { required: "YouTube video link is required" })}
              type="url"
              placeholder="https://youtube.com/demo"
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.yt && <p className="text-red-400 text-sm mt-1">{errors.yt.message}</p>}
          </div>
          <div className="pt-4">
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Submit Application
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default TeachForm;
