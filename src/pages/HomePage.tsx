import { motion } from "framer-motion";
import Header from "../components/header";
import actor1 from "../assets/actor1.webp";
import actor2 from "../assets/actor2.webp";
import actor3 from "../assets/actor3.webp";

const actors = [
  { name: "Mr. Bean", img: actor1 },
  { name: "Jackie Chan", img: actor2 },
  { name: "Legend", img: actor3 },
];

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
        <section className="text-center px-4 py-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to the World of Actors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Discover famous actors, their roles, and iconic moments in cinema.
          </motion.p>
        </section>

        <section className="py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {actors.map((actor, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg bg-yellow-500 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={actor.img}
                alt={actor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-white text-2xl font-semibold">
                  {actor.name}
                </h2>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </>
  );
};

export default HomePage;
