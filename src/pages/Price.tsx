import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Basic",
    price: "$9.99/mo",
    features: ["Access to basic content", "2 actor profiles", "Email support"],
  },
  {
    title: "Standard",
    price: "$19.99/mo",
    features: ["All Basic features", "10 actor profiles", "Priority support"],
  },
  {
    title: "Premium",
    price: "$29.99/mo",
    features: ["All Standard features", "Unlimited profiles", "1-on-1 support"],
  },
];

const Price = () => {
  return (
    <div className="bg-yellow-400 text-stone-900 min-h-screen pt-20 px-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Choose Your Plan
      </motion.h1>

      <motion.p
        className="text-center max-w-2xl mx-auto text-white mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Select the subscription that best fits your needs and dive into the
        world of actors!
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, idx) => (
          <motion.div
            key={idx}
            className="bg-neutral-300 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {plan.title}
            </h2>
            <p className="text-3xl font-bold text-center mb-6">{plan.price}</p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-stone-900">
                  • {feature}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-xl hover:bg-yellow-400 transition">
                Select
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Price;
