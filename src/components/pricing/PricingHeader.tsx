
import { motion } from "framer-motion";

const PricingHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold font-display mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Solutions that <span className="text-rgb-animated">Fit Your Budget</span>
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-400 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Find the perfect plan for your business, whether you need digital displays or immersive LED video walls. No upfront costs, just simple monthly subscriptions.
      </motion.p>
    </div>
  );
};

export default PricingHeader;
