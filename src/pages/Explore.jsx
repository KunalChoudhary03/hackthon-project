import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import CircularGallery from '../components/CircularGallery';
import GlitchText from '../components/GlitchText ';
import Storu from '../components/Storu';
import DataRetrev from '../components/DataRetrev';
import About from './About';

const Explore = () => {
  return (
    <div className="bg-black text-white m-0 overflow-hidden">
      <Nav />

      <motion.div
        className="mt-20 p-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <GlitchText speed={1} enableShadows enableOnHover className="custom-class">
          Tranding Skills
        </GlitchText>

        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>
      </motion.div>

    
      <motion.div
        className="mt-20 p-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <GlitchText speed={1} enableShadows enableOnHover className="custom-class">
          Meet our Mentores
        </GlitchText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <DataRetrev />
      </motion.div>

      <motion.div
        className="mt-20 p-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <GlitchText speed={1} enableShadows enableOnHover className="custom-class">
          Skill Success Stories
        </GlitchText>
      </motion.div>

      <motion.div
        className="flex gap-3 overflow-auto p-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Storu />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <About />
      </motion.div>
    </div>
  );
};

export default Explore;
