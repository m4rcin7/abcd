import { motion } from "framer-motion";

const featuredVideos = [
  {
    title: "Masterclass: Acting Techniques",
    description:
      "Join our top instructor as they guide you through essential techniques every actor must know.",
    thumbnail: "https://via.placeholder.com/400x200",
  },
  {
    title: "Behind the Scenes: Film Set Tour",
    description:
      "Explore the dynamics of a real film set and learn how professionals operate behind the camera.",
    thumbnail: "https://via.placeholder.com/400x200",
  },
  {
    title: "Voice Training Basics",
    description:
      "Warm-ups and exercises to strengthen your voice and improve delivery for stage and screen.",
    thumbnail: "https://via.placeholder.com/400x200",
  },
];

const WatchNow = () => {
  return (
    <div className="pt-20 px-4 text-stone-900 bg-neutral-100 min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Watch Now
      </motion.h1>

      <motion.p
        className="text-center max-w-2xl mx-auto text-gray-700 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Explore our curated library of video content. Learn, get inspired, and
        enhance your skills — anytime, anywhere.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {featuredVideos.map((video, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              <p className="text-gray-600">{video.description}</p>
              <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-xl hover:bg-yellow-400 transition">
                Watch Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-20 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4">New videos every week!</h3>
        <p className="text-gray-700 mb-6">
          Stay ahead of the game. Our expert-led content is updated weekly to
          keep you inspired and growing.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
          Browse Full Library
        </button>
      </motion.div>
    </div>
  );
};

export default WatchNow;
