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

const testimonials = [
  {
    name: "Mark Smith",
    role: "Aspiring Actress",
    quote: "This platform helped me find the perfect roles and grow my career!",
  },
  {
    name: "John Doe",
    role: "Casting Director",
    quote:
      "Excellent tools for browsing actor profiles – it saves me hours of work!",
  },
];

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan from your account settings at any time.",
  },
  {
    question: "Are there discounts for teams?",
    answer:
      "Yes, we offer special packages for teams. Contact us for more details.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "Cancelling is easy – just go to your account settings and click 'Cancel Subscription'.",
  },
];

const PricePage = () => {
  return (
    <div className="text-stone-900 h-auto pt-20 px-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Choose Your Plan
      </motion.h1>
      <motion.p
        className="text-center max-w-2xl mx-auto text-stone-700 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Pick the subscription that fits your needs and dive into the world of
        acting!
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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

      <div className="max-w-4xl mx-auto mb-16">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          What Our Users Say
        </motion.h2>
        <div className="space-y-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-stone-100 rounded-2xl p-6 shadow-md"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.2 }}
            >
              <p className="italic mb-4">"{t.quote}"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-stone-600">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-4 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.15 }}
            >
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-stone-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="bg-yellow-500 rounded-2xl p-10 text-center mx-auto max-w-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4">Get Started Today!</h2>
        <p className="mb-6">
          Join our community of actors and take your skills to the next level.
        </p>
        <button className="bg-stone-900 text-white px-8 py-3 rounded-xl hover:opacity-90 transition">
          Start Your Free Trial
        </button>
      </motion.div>
    </div>
  );
};

export default PricePage;
