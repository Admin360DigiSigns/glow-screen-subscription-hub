
import { motion } from "framer-motion";
import { Check, Receipt, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PlanCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    color: string;
    value: string;
    id?: string;
  };
  type: "digital" | "led";
  index: number;
  selected?: boolean;
  onClick?: () => void;
}

const PlanCard = ({ plan, type, index, selected, onClick }: PlanCardProps) => {
  const navigate = useNavigate();

  const handleSubscribe = (planType: string) => {
    navigate(`/subscribe/${planType}`);
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className={`relative rounded-2xl overflow-hidden ${selected ? 'ring-2 ring-white/50 shadow-glow' : ''}`}
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${
        plan.color === "digi-red" ? "from-digi-red/30 to-black/90" :
        plan.color === "digi-green" ? "from-digi-green/30 to-black/90" :
        "from-digi-blue/30 to-black/90"
      } opacity-80`}></div>
      
      <div className="relative z-[1] p-8 border border-white/20 rounded-2xl backdrop-blur-sm h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-2xl font-bold ${
            plan.color === "digi-red" ? "text-red-400" :
            plan.color === "digi-green" ? "text-green-400" :
            "text-blue-400"
          }`}>{plan.name}</h3>
          <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm shadow-sm">
            {type === "digital" ? "Digital Screen" : "LED Wall"}
          </Badge>
        </div>
        
        <p className="text-gray-200 mb-6">{plan.description}</p>
        
        <div className="flex items-end mb-8">
          <DollarSign className={`h-6 w-6 mr-1 ${
            plan.color === "digi-red" ? "text-red-400" :
            plan.color === "digi-green" ? "text-green-400" :
            "text-blue-400"
          }`} />
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          <span className="text-gray-300 ml-1">/month</span>
        </div>
        
        <ul className="space-y-3 mb-8 flex-grow">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <div className={`h-5 w-5 mr-3 flex items-center justify-center rounded-full ${
                plan.color === "digi-red" ? "bg-red-500/20" :
                plan.color === "digi-green" ? "bg-green-500/20" :
                "bg-blue-500/20"
              }`}>
                <Check className={`h-3 w-3 ${
                  plan.color === "digi-red" ? "text-red-400" :
                  plan.color === "digi-green" ? "text-green-400" :
                  "text-blue-400"
                }`} />
              </div>
              <span className="text-white">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full shadow-lg ${
            plan.color === "digi-red" ? 'bg-red-600 hover:bg-red-700 text-white' :
            plan.color === "digi-green" ? 'bg-green-600 hover:bg-green-700 text-white' :
            'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          onClick={onClick || (() => handleSubscribe(plan.value))}
        >
          {selected ? 'Selected' : <><Receipt className="mr-2 h-4 w-4" /> Subscribe Now</>}
        </Button>
      </div>
    </motion.div>
  );
};

export default PlanCard;
