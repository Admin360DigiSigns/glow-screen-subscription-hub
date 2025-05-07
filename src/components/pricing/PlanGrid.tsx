
import { motion } from "framer-motion";
import PlanCard from "./PlanCard";

interface PlanGridProps {
  plans: any[];
  type: "digital" | "led";
  selectedPlan?: string;
  onSelectPlan?: (plan: string) => void;
}

const PlanGrid = ({ plans, type, selectedPlan, onSelectPlan }: PlanGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {plans.map((plan, index) => (
        <PlanCard 
          key={index} 
          plan={plan} 
          type={type} 
          index={index}
          isSelected={selectedPlan === plan.id}
          onClick={onSelectPlan ? () => onSelectPlan(plan.id) : undefined}
        />
      ))}
    </motion.div>
  );
};

export default PlanGrid;
