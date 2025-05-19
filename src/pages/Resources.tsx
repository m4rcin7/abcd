import { motion } from "framer-motion";

const resourcesList = [
  {
    title: "Acting 101",
    description: "Beginner’s guide to acting fundamentals and techniques.",
    link: "#",
  },
  {
    title: "Audition Tips",
    description: "Best practices and advice to nail your next audition.",
    link: "#",
  },
  {
    title: "Script Library",
    description: "Explore scripts for practice and performance.",
    link: "#",
  },
  {
    title: "Voice Training",
    description: "Exercises to improve voice projection and clarity.",
    link: "#",
  },
  {
    title: "Camera Presence",
    description: "How to shine on camera with confidence and control.",
    link: "#",
  },
  {
    title: "Networking",
    description: "Tips to build your professional acting network.",
    link: "#",
  },
];

const Resources = () => {
  return (
    <div className="text-stone-900 h-auto pt-20 px-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Explore Acting Resources
      </motion.h1>

      <motion.p
        className="text-center max-w-2xl mx-auto text-white mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Learn, grow, and master your craft with our curated selection of
        resources designed for aspiring and experienced actors alike.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {resourcesList.map((resource, idx) => (
          <motion.div
            key={idx}
            className="bg-neutral-300 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-center">
              {resource.title}
            </h2>
            <p className="text-sm text-center mb-4">{resource.description}</p>
            <div className="text-center">
              <a
                href={resource.link}
                className="bg-yellow-500 text-black px-5 py-2 rounded-xl hover:bg-yellow-400 transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
