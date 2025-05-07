
import React from "react";
import { Check, User, FileText, MapPin, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StepProps {
  currentStep: number;
  stepNumber: number;
  icon: React.ReactNode;
  name: string;
}

const Step = ({ currentStep, stepNumber, icon, name }: StepProps) => {
  const isActive = currentStep === stepNumber;
  const isComplete = currentStep > stepNumber;
  
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center border-2 relative z-10",
          isActive && "border-digi-red bg-digi-red/20",
          isComplete && "border-green-500 bg-green-500/20",
          !isActive && !isComplete && "border-gray-400 bg-gray-400/20"
        )}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: stepNumber * 0.2 }}
      >
        {isComplete ? (
          <Check className="h-6 w-6 text-green-500" />
        ) : (
          <div className={cn(
            "h-6 w-6",
            isActive ? "text-digi-red" : "text-gray-400"
          )}>
            {icon}
          </div>
        )}
      </motion.div>
      <span className={cn(
        "mt-2 text-xs",
        isActive ? "text-digi-red" : isComplete ? "text-green-500" : "text-gray-400"
      )}>
        {name}
      </span>
    </div>
  );
};

export const FormSteps = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="w-full flex items-center justify-center mb-8 relative">
      <div className="w-full max-w-2xl flex justify-between items-center">
        <Step 
          currentStep={currentStep} 
          stepNumber={1} 
          icon={<User className="w-full h-full" />}
          name="Personal Info"
        />
        
        <div className={cn(
          "h-0.5 flex-grow mx-1",
          currentStep > 1 ? "bg-gradient-to-r from-digi-red to-digi-green" : "bg-gray-300"
        )} />
        
        <Step 
          currentStep={currentStep} 
          stepNumber={2}
          icon={<FileText className="w-full h-full" />} 
          name="Plan Selection"
        />
        
        <div className={cn(
          "h-0.5 flex-grow mx-1",
          currentStep > 2 ? "bg-gradient-to-r from-digi-green to-digi-blue" : "bg-gray-300"
        )} />
        
        <Step 
          currentStep={currentStep} 
          stepNumber={3} 
          icon={<MapPin className="w-full h-full" />}
          name="Business Details"
        />
        
        <div className={cn(
          "h-0.5 flex-grow mx-1",
          currentStep > 3 ? "bg-gradient-to-r from-digi-blue to-digi-red" : "bg-gray-300"
        )} />
        
        <Step 
          currentStep={currentStep} 
          stepNumber={4} 
          icon={<CreditCard className="w-full h-full" />}
          name="Confirmation"
        />
      </div>
    </div>
  );
};
