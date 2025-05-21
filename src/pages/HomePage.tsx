import { motion } from "framer-motion";
import actor1 from "../assets/actor1.webp";
import actor2 from "../assets/actor2.webp";
import actor3 from "../assets/actor3.webp";

const actors = [
  { name: "Mr. Bean", img: actor1 },
  { name: "Jackie Chan", img: actor2 },
  { name: "Legend", img: actor3 },
];

const quotes = [
  {
    text: "To be or not to be, that is the question.",
    author: "William Shakespeare (via many actors)",
  },
  {
    text: "With great power comes great responsibility.",
    author: "Spider-Man (Tobey Maguire)",
  },
  {
    text: "Life is like a box of chocolates.",
    author: "Forrest Gump (Tom Hanks)",
  },
];

const HomePage = () => {
  return (
    <>
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

        <section className="bg-gray-100 py-12 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About This Site</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            This project celebrates legendary actors from around the world.
            Whether you're a film buff or just discovering classic performances,
            our aim is to entertain, inform, and inspire through the stories of
            unforgettable on-screen talent.
          </p>
        </section>

        <section className="py-12 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Iconic Quotes</h2>
          <div className="space-y-6">
            {quotes.map((quote, i) => (
              <motion.blockquote
                key={i}
                className="bg-white shadow-md p-6 rounded-2xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <p className="text-xl italic">“{quote.text}”</p>
                <footer className="mt-4 text-gray-600">— {quote.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section className="bg-yellow-500 py-12 px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore More?
          </h2>
          <p className="text-lg text-white mb-6">
            Dive deeper into the lives and careers of your favorite actors.
          </p>
          <button className="bg-white text-yellow-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Browse Full List
          </button>
        </section>
      </div>
    </>
  );
};

export default HomePage;
