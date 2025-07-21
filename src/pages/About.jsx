import { motion } from "framer-motion";
import GlitchText from "../components/GlitchText ";

const About = () => {
  return (
    <>
  <div className='mt-20 p-5 mb-0'><GlitchText
  speed={1}
  enableShadows={true}
  enableOnHover={true}
  className='custom-class'
>
About us
</GlitchText></div>
      <div className="min-h-screen bg-black flex items-center justify-center px-4 ">
        <motion.div
          className="max-w-4xl bg-white/10 backdrop-blur-md p-10 rounded-3xl text-white shadow-lg border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-white">
            About MentorConnect 
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-white font-semibold">MentorConnect</span> is more than just a platform — it’s a movement to make real learning accessible for all.
            Whether you're eager to <span className="text-green-400 font-medium">learn something new</span> or excited to <span className="text-yellow-400 font-medium">share your knowledge</span>,
            this is your space to shine.
          </p>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            We believe in the power of community learning — that everyone has something to teach and something to learn.
            Our goal is to make skill development collaborative, inspiring, and effective.
          </p>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            Whether you're a budding developer, a design guru, or just getting started — you’ll find people who support, guide, and grow with you.
          </p>

          <p className="mt-6 text-sm text-center text-gray-500 italic">
            Made with ❤️ by  Learner, for  learners 
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default About;

