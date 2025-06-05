import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
      >
        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 shadow"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Welcome back! 
        </h1>
        <p className="text-gray-600 text-base">
          This is a <span className="font-medium text-blue-600">protected</span>{" "}
          page, accessible only to authenticated users.
        </p>
      </motion.div>
    </div>
  );
};

export default Profile;
