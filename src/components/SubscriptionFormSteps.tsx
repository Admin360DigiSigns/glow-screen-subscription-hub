
import React from "react";
import { User, FileText, MapPin, CreditCard } from "lucide-react";
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
  
  // Determine the color based on step number
  const getColor = (step: number) => {
    switch(step) {
      case 1: return "text-red-500 border-red-500";
      case 2: return "text-green-500 border-green-500";
      case 3: return "text-blue-500 border-blue-500";
      case 4: return "text-red-500 border-red-500";
      default: return "text-gray-400 border-gray-400";
    }
  };
  
  const getActiveColor = (step: number) => {
    switch(step) {
      case 1: return "bg-red-500/10";
      case 2: return "bg-green-500/10";
      case 3: return "bg-blue-500/10";
      case 4: return "bg-red-500/10";
      default: return "bg-gray-400/10";
    }
  };
  
  const getIconColor = (step: number) => {
    switch(step) {
      case 1: return "text-red-500";
      case 2: return "text-green-500";
      case 3: return "text-blue-500";
      case 4: return "text-red-500";
      default: return "text-gray-400";
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center border-2 relative z-10",
          isActive && getActiveColor(stepNumber),
          isActive && getColor(stepNumber),
          isComplete && "border-green-500 bg-green-500/10",
          !isActive && !isComplete && "border-gray-400 bg-gray-400/10"
        )}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: stepNumber * 0.2 }}
      >
        {isComplete ? (
          <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <div className={cn(
            "h-6 w-6",
            isActive ? getIconColor(stepNumber) : "text-gray-400"
          )}>
            {icon}
          </div>
        )}
      </motion.div>
      <span className={cn(
        "mt-2 text-xs",
        isActive ? getIconColor(stepNumber) : isComplete ? "text-green-500" : "text-gray-400"
      )}>
        {name}
      </span>
    </div>
  );
};

export const FormSteps = ({ currentStep }: { currentStep: number }) => {
  const getProgressColor = (step: number, nextStep: number) => {
    if (currentStep > nextStep) {
      switch (step) {
        case 1: return "bg-gradient-to-r from-red-500 to-green-500";
        case 2: return "bg-gradient-to-r from-green-500 to-blue-500";
        case 3: return "bg-gradient-to-r from-blue-500 to-red-500";
        default: return "bg-gray-300";
      }
    }
    return "bg-gray-300";
  };

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
          getProgressColor(1, 1)
        )} />
        
        <Step 
          currentStep={currentStep} 
          stepNumber={2}
          icon={<FileText className="w-full h-full" />} 
          name="Plan Selection"
        />
        
        <div className={cn(
          "h-0.5 flex-grow mx-1",
          getProgressColor(2, 2)
        )} />
        
        <Step 
          currentStep={currentStep} 
          stepNumber={3} 
          icon={<MapPin className="w-full h-full" />}
          name="Business Details"
        />
        
        <div className={cn(
          "h-0.5 flex-grow mx-1",
          getProgressColor(3, 3)
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
