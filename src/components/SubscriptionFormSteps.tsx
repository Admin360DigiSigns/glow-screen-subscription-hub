
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface SubscriptionFormStepsProps {
  currentStep: number;
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  onNext: () => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

// Animation variants for steps
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

// Form validation schemas
const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

const businessDetailsSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  address: z.string().min(5, "Please enter a valid address"),
  industry: z.string().min(2, "Please select or enter your industry"),
});

// Steps components
const PersonalInfoStep = ({ onNext }: { onNext: () => void }) => {
  const form = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof personalInfoSchema>) {
    console.log(values);
    onNext();
  }

  return (
    <motion.div
      key="personal-info"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white">Personal Information</h2>
        <p className="text-gray-400">Tell us a bit about yourself</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="bg-white/10 border-white/20 text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" className="bg-white/10 border-white/20 text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456-7890" className="bg-white/10 border-white/20 text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-rgb bg-300% animate-flow-rgb transition-all hover:bg-opacity-90"
          >
            Continue
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

const PlanSelectionStep = ({ 
  selectedPlan, 
  setSelectedPlan, 
  onNext 
}: { 
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  onNext: () => void;
}) => {
  const plans = [
    {
      id: "standard",
      name: "Standard",
      price: "$79.99",
      features: ["1M x 1M Display", "HD Resolution", "Basic CMS"]
    },
    {
      id: "premium",
      name: "Premium",
      price: "$129.99",
      features: ["1.5M x 1.5M Display", "4K Resolution", "Advanced CMS"]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$199.99",
      features: ["Custom Size", "8K Resolution", "AI-Powered CMS"]
    }
  ];

  return (
    <motion.div
      key="plan-selection"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white">Select Your Plan</h2>
        <p className="text-gray-400">Choose the plan that fits your needs</p>
      </div>

      <div className="space-y-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`p-4 rounded-lg cursor-pointer transition-all border ${
              selectedPlan === plan.id
                ? "border-digi-green bg-white/10"
                : "border-white/10 hover:bg-white/5"
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-white">{plan.name}</h3>
                <p className="text-gray-400">{plan.price}/month</p>
              </div>
              {selectedPlan === plan.id && (
                <div className="h-6 w-6 bg-digi-green rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-black" />
                </div>
              )}
            </div>
            <div className="mt-2">
              <ul className="text-sm text-gray-400">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 mt-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-digi-green"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Button 
        onClick={onNext}
        className="w-full bg-gradient-rgb bg-300% animate-flow-rgb transition-all hover:bg-opacity-90"
      >
        Continue
      </Button>
    </motion.div>
  );
};

const BusinessDetailsStep = ({ onNext }: { onNext: () => void }) => {
  const form = useForm<z.infer<typeof businessDetailsSchema>>({
    resolver: zodResolver(businessDetailsSchema),
    defaultValues: {
      companyName: "",
      address: "",
      industry: "",
    },
  });

  function onSubmit(values: z.infer<typeof businessDetailsSchema>) {
    console.log(values);
    onNext();
  }

  return (
    <motion.div
      key="business-details"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white">Business Details</h2>
        <p className="text-gray-400">Tell us about your company</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." className="bg-white/10 border-white/20 text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Business Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St, City, Country" className="bg-white/10 border-white/20 text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Industry</FormLabel>
                <FormControl>
                  <Input placeholder="Retail, Technology, etc." className="bg-white/10 border-white/20 text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-rgb bg-300% animate-flow-rgb transition-all hover:bg-opacity-90"
          >
            Continue
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

const ConfirmationStep = ({ selectedPlan }: { selectedPlan: string }) => {
  const planInfo = {
    standard: {
      name: "Standard Plan",
      price: "$79.99/month",
      features: ["1M x 1M Digital Display", "HD Resolution", "Basic Content Management"]
    },
    premium: {
      name: "Premium Plan",
      price: "$129.99/month",
      features: ["1.5M x 1.5M Digital Display", "4K Ultra HD Resolution", "Advanced Content Management"]
    },
    enterprise: {
      name: "Enterprise Plan",
      price: "$199.99/month",
      features: ["Custom Size Digital Display", "8K Resolution", "AI-Powered Content Optimization"]
    }
  };

  const plan = selectedPlan === "premium" ? planInfo.premium : 
              selectedPlan === "enterprise" ? planInfo.enterprise : 
              planInfo.standard;

  return (
    <motion.div
      key="confirmation"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-digi-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-10 w-10 text-digi-green" />
        </div>
        <h2 className="text-2xl font-bold text-white">Subscription Confirmed!</h2>
        <p className="text-gray-400">Thank you for subscribing to our service</p>
      </div>

      <div className="bg-white/10 border border-white/20 rounded-lg p-4">
        <h3 className="font-medium text-white text-lg mb-2">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-400">Plan:</span>
            <span className="text-white">{plan.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Price:</span>
            <span className="text-white">{plan.price}</span>
          </div>
          <div className="border-t border-white/10 my-2"></div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Includes:</p>
            <ul className="text-sm text-white">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 mt-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-digi-green"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400">
        You will receive an email with all details and our team will contact you shortly to schedule the installation.
      </p>
    </motion.div>
  );
};

// Main component to handle the form steps
const SubscriptionFormSteps: React.FC<SubscriptionFormStepsProps> = ({
  currentStep,
  selectedPlan,
  setSelectedPlan,
  onNext,
  onBack,
  onSubmit
}) => {
  // Render the appropriate step based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep onNext={onNext} />;
      case 2:
        return (
          <PlanSelectionStep
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            onNext={onNext}
          />
        );
      case 3:
        return <BusinessDetailsStep onNext={onNext} />;
      case 4:
        return <ConfirmationStep selectedPlan={selectedPlan} />;
      default:
        return <PersonalInfoStep onNext={onNext} />;
    }
  };

  return <div className="min-h-[400px]">{renderStep()}</div>;
};

export { SubscriptionFormSteps };
