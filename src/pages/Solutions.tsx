import { motion } from "framer-motion";
import { roadmapSteps } from "../data/roadmapSteps";

const Solutions = () => {
  return (
    <div className="text-stone-900 h-auto pt-20 px-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Your Acting Journey
      </motion.h1>

      <motion.p
        className="text-center max-w-2xl mx-auto text-white mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Every actor's path is unique — but a clear roadmap helps you grow with
        purpose. Follow our structured approach to elevate your craft and
        career.
      </motion.p>

      <div className="relative border-l-4 border-yellow-400 max-w-4xl mx-auto pl-6">
        {roadmapSteps.map((step, index) => (
          <motion.div
            key={index}
            className="mb-10 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="absolute -left-[37px] top-1 w-6 h-6 rounded-full bg-yellow-400 border-4 border-white shadow-lg" />
            <h3 className="text-xl font-semibold mb-1">
              {step.step} — {step.title}
            </h3>
            <p className="text-gray-700">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
