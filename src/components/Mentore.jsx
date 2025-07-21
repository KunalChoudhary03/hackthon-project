import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Mentore = () => {
  const [mentoredata, setmentoredata] = useState(null);
  const [learndata, setlearndata] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("mentoredata"));
    if (savedData) setmentoredata(savedData);
  }, []);

  useEffect(() => {
    const savedLearnData = JSON.parse(localStorage.getItem("userData"));
    if (savedLearnData) setlearndata(savedLearnData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">
      
      {/* Back button - top right */}
      <Link
        to="/teach"
        className="absolute top-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition z-10"
      >
        ← Back
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-[#111827] rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.06)] w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden border border-white/10"
      >
        {/* Mentor Card */}
        {mentoredata && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 p-8 border-r border-white/10"
          >
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-400">🎓 Mentor</h2>
            {mentoredata.avatar && (
              <img
                src={mentoredata.avatar}
                alt="Mentor Avatar"
                className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 mx-auto mb-4"
              />
            )}
            <div className="space-y-2 text-center">
              <p><span className="font-semibold text-blue-300">Skills:</span> {mentoredata.skills}</p>
              <p><span className="font-semibold text-blue-300">Level:</span> {mentoredata.level}</p>
              <p className="text-sm text-gray-400">{mentoredata.description}</p>
              {mentoredata.yt && (
                <p>
                  <a
                    href={mentoredata.yt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    🔗 Demo Video
                  </a>
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* Learner Card */}
        {learndata && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex-1 p-8"
          >
            <h2 className="text-2xl font-bold text-center mb-4 text-green-400">📘 Want's to learn</h2>
            <div className="space-y-4 text-center">
              <div>
                <h3 className="text-sm text-gray-400">Learning Skills</h3>
                <p className="text-lg font-medium text-white">{learndata.skills}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Time Commitment</h3>
                <p className="text-lg font-medium text-white">{learndata.time}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Preferred Language</h3>
                <p className="text-lg font-medium text-white">{learndata.language}</p>
              </div>
              <p className="text-sm mt-4 text-gray-400">
                Stay consistent and curious. You're doing great!
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Mentore;
