
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormBackground from "@/components/FormBackground";
import SubscriptionFormSteps from "@/components/SubscriptionFormSteps";

export interface SubscriptionFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialPlan: "standard" | "premium" | "enterprise";
}

const SubscriptionForm = ({
  open,
  onOpenChange,
  initialPlan
}: SubscriptionFormProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlan || "standard");
  
  // Reset step when dialog opens
  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen === false) {
      // Small delay to prevent visual glitch when closing
      setTimeout(() => setCurrentStep(1), 200);
    }
    onOpenChange(newOpen);
  };
  
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic
    // For now, we'll just move to the final step
    setCurrentStep(4);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 bg-black/90 border-white/10 overflow-hidden">
        {/* Add the FormBackground component */}
        <FormBackground />
        
        <div className="relative z-10">
          {/* Step indicator */}
          <div className="flex justify-center pt-6">
            {[1, 2, 3, 4].map((step) => (
              <div 
                key={step}
                className={`w-3 h-3 rounded-full mx-2 ${
                  step === currentStep 
                    ? "bg-gradient-rgb animate-pulse-rgb" 
                    : step < currentStep 
                      ? "bg-white" 
                      : "bg-gray-600"
                }`}
              />
            ))}
          </div>
          
          {/* Back button for steps 2-3 */}
          {currentStep > 1 && currentStep < 4 && (
            <button 
              onClick={handleBack}
              className="absolute left-6 top-6 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
          )}
          
          <div className="p-6">
            <SubscriptionFormSteps 
              currentStep={currentStep}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
              onNext={handleNext}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionForm;
