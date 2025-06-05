import { motion, useScroll } from "motion/react";
import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        style={box}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Spara
      </motion.button>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress, originX: 0 }}
      ></motion.div>
    </>
  );
}

const box = {
  height: 100,
  width: 100,
  backgroundColor: "#ff00b0",
  borderRadius: 5,
};

export default App;
