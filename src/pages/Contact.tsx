import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        variants={itemVariants}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto"
        variants={itemVariants}
      >
        Got a question or just want to say hello? We'd love to hear from you.
        Use the form below or reach out directly via email or phone.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-10 mb-16"
        variants={itemVariants}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
          <p className="text-gray-600 mb-1">123 Creative Avenue</p>
          <p className="text-gray-600 mb-1">Innovation City, CA 90210</p>
          <p className="text-gray-600 mb-1">United States</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Reach Out</h2>
          <p className="text-gray-600 mb-1">
            Email:{" "}
            <a
              href="mailto:info@youragency.com"
              className="text-blue-600 hover:underline"
            >
              info@youragency.com
            </a>
          </p>
          <p className="text-gray-600 mb-1">
            Phone:{" "}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-gray-600">Mon – Fri: 9AM – 5PM</p>
        </div>
      </motion.div>

      <motion.div className="mb-16" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </motion.div>

      <motion.div className="text-center" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center gap-6 text-blue-600 text-xl">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            Facebook
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            Twitter
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            Instagram
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
