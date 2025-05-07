import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { FormSteps } from "./SubscriptionFormSteps";
import { User, Calendar, Check, ChevronRight, Plus, Minus, FileText, MapPin, CreditCard } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  // Personal Info Step
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  country: z.string().min(1, "Please select a country"),
  phoneNumber: z.string().min(5, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  installationDate: z.date({
    required_error: "Installation date is required",
  }),
  locationType: z.enum(["single", "multiple"], {
    required_error: "Please select a location type",
  }),

  // Plan Selection Step
  plan: z.enum(["standard", "premium", "enterprise"], {
    required_error: "Please select a plan",
  }),

  // Business Details Step
  businessType: z.string().min(2, "Business type is required"),
  businessName: z.string().min(2, "Business name is required"),
  businessAddress: z.string().min(5, "Business address is required"),
  businessCountry: z.string().min(1, "Country is required"),
  province: z.string().min(1, "Province/State is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  contractDuration: z.string().min(1, "Contract duration is required"),
  totalScreens: z.number().min(1, "At least one screen is required"),
});

type FormValues = z.infer<typeof formSchema>;

const countries = [
  "Canada", 
  "United States", 
  "United Kingdom", 
  "Australia", 
  "Germany",
  "France"
];

interface PlanOption {
  name: string;
  price: string;
  description: string;
  color: string;
  value: string;
  features: string[];
  icon: React.ReactNode;
}

const planOptions: PlanOption[] = [
  {
    name: "Standard Plan",
    price: "$79.99/month",
    value: "standard",
    description: "Perfect for small businesses",
    color: "from-blue-800 to-blue-950",
    icon: <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    features: [
      "1M x 1M Digital Display",
      "HD Resolution",
      "Basic Content Management",
      "8 Hours Daily Operation",
      "Monthly Content Updates",
      "Standard Support"
    ]
  },
  {
    name: "Premium Plan",
    price: "$129.99/month",
    value: "premium",
    description: "Ideal for growing businesses",
    color: "from-purple-600 to-blue-600",
    icon: <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    features: [
      "1.5M x 1.5M Digital Display",
      "4K Ultra HD Resolution",
      "Advanced Content Management",
      "12 Hours Daily Operation",
      "Weekly Content Updates",
      "Priority Support",
      "Analytics Dashboard"
    ]
  },
  {
    name: "Enterprise Plan",
    price: "$199.99/month",
    value: "enterprise",
    description: "For maximum business impact",
    color: "from-blue-600 to-blue-900",
    icon: <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    features: [
      "Custom Size Digital Display",
      "8K Resolution",
      "AI-Powered Content Optimization",
      "24/7 Operation",
      "Unlimited Content Updates",
      "Premium Support & Consultation",
      "Advanced Analytics",
      "Multi-Screen Management"
    ]
  }
];

export interface SubscriptionFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialPlan?: "standard" | "premium" | "enterprise";
}

export default function SubscriptionForm({ 
  open, 
  onOpenChange,
  initialPlan = "standard" 
}: SubscriptionFormProps) {
  const [step, setStep] = useState(1);
  const [subscriptionDetails, setSubscriptionDetails] = useState<{
    plan: "standard" | "premium" | "enterprise";
    price: number;
    screens: number;
  }>({
    plan: initialPlan,
    price: initialPlan === "standard" ? 79.99 : initialPlan === "premium" ? 129.99 : 199.99,
    screens: 1
  });
  
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      country: "Canada",
      phoneNumber: "",
      email: "",
      installationDate: undefined,
      locationType: "single",
      plan: initialPlan,
      businessType: "",
      businessName: "",
      businessAddress: "",
      businessCountry: "Canada",
      province: "",
      city: "",
      postalCode: "",
      contractDuration: "12 months",
      totalScreens: 1
    },
  });
  
  const handleNextStep = async () => {
    if (step === 1) {
      const valid = await form.trigger([
        "fullName", 
        "country", 
        "phoneNumber",
        "email",
        "installationDate",
        "locationType"
      ]);
      
      if (valid) {
        setStep(2);
      }
    } else if (step === 2) {
      const valid = await form.trigger(["plan"]);
      
      if (valid) {
        setStep(3);
      }
    } else if (step === 3) {
      const valid = await form.trigger([
        "businessType",
        "businessName",
        "businessAddress",
        "businessCountry",
        "province",
        "city",
        "postalCode",
        "contractDuration",
        "totalScreens"
      ]);
      
      if (valid) {
        setStep(4);
      }
    }
  };
  
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    toast({
      title: "Subscription Successful!",
      description: `Thank you for subscribing to our ${data.plan} plan! Our team will contact you shortly.`,
    });
    
    // Reset form and close dialog
    form.reset();
    setStep(1);
    onOpenChange(false);
  };
  
  const handleIncreaseScreens = () => {
    const currentScreens = form.getValues("totalScreens") || 1;
    form.setValue("totalScreens", currentScreens + 1);
    setSubscriptionDetails({
      ...subscriptionDetails,
      screens: currentScreens + 1
    });
  };
  
  const handleDecreaseScreens = () => {
    const currentScreens = form.getValues("totalScreens") || 1;
    if (currentScreens > 1) {
      form.setValue("totalScreens", currentScreens - 1);
      setSubscriptionDetails({
        ...subscriptionDetails,
        screens: currentScreens - 1
      });
    }
  };
  
  // Get the selected plan details
  const selectedPlan = form.watch("plan");
  const planDetails = planOptions.find(p => p.value === selectedPlan);
  
  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };
  
  // Calculate total price
  const calculatedPrice = () => {
    const basePrice = selectedPlan === "standard" ? 79.99 : 
                      selectedPlan === "premium" ? 129.99 : 199.99;
    return (basePrice * form.getValues("totalScreens")).toFixed(2);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <div className="p-6 bg-black text-white">
          <FormSteps currentStep={step} />
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={stepVariants}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-digi-red/20 p-2 rounded-full">
                        <User className="h-6 w-6 text-digi-red" />
                      </div>
                      <h2 className="text-xl font-bold">Personal Information</h2>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} className="bg-black border-gray-700 text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Country *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-black border-gray-700 text-white">
                                  <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black text-white border-gray-700">
                                {countries.map((country) => (
                                  <SelectItem key={country} value={country}>{country}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Phone Number *</FormLabel>
                            <FormControl>
                              <div className="flex">
                                <div className="flex items-center px-3 bg-gray-800 border border-r-0 border-gray-700 rounded-l-md">
                                  <span className="text-gray-400 flex items-center gap-1">
                                    <img 
                                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MzYgNDgwIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjY3IiBkPSJNMCAwaDYzNnY0ODBIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS13aWR0aD0iMXB0IiBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xODEuNzYgMGg0NzkuNnY0OGgtNDc5LjZ6bTAgMTkxLjk5aDQ3OS42djQ4aC00NzkuNnptMCAxOTEuOTloNDc5LjZ2NDhoLTQ3OS42ek0wIDBoMjM5Ljk5djI0MGgzOTZWMGgtNjM2eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05My45MiA2MC4yVjIwLjM3TDEyMC43OCAwaDI2LjgydjYwLjJIODcuMjV6TTM0LjIxIDE4NC42TDApIGQ9Ik0xMTMuNSAyMC4zN2gtMTYuOUw4MC4xIDQwLjE5aDMzLjM3em0tMzMuMzcgMHYxOS44Mkw2MCw2MC4yaDMzLjM3di0yMC4xbC0xMy4yNS0xOS43M3oiLz48L2c+PC9zdmc+" 
                                      alt="Canada Flag" 
                                      className="w-5 h-3.5 mr-1"
                                    />
                                    +1
                                  </span>
                                </div>
                                <Input 
                                  placeholder="Enter phone number" 
                                  {...field} 
                                  className="rounded-l-none bg-black border-gray-700 text-white" 
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email ID *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email address" type="email" {...field} className="bg-black border-gray-700 text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="installationDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-white">Installation Date *</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal bg-black border-gray-700 text-white",
                                    !field.value && "text-gray-400"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>yyyy-mm-dd</span>
                                  )}
                                  <Calendar className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-black border-gray-700" align="start">
                              <CalendarComponent
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className="p-3 pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="locationType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-white">Location Type</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex space-x-6"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="single" id="single" className="border-gray-500 text-digi-red" />
                                <Label htmlFor="single" className="text-white">Single Location</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="multiple" id="multiple" className="border-gray-500 text-digi-red" />
                                <Label htmlFor="multiple" className="text-white">Multiple Locations</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4 flex justify-end">
                      <Button 
                        type="button" 
                        onClick={handleNextStep}
                        className="bg-digi-red hover:bg-digi-red/90 text-white"
                      >
                        Continue <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Visual element showing benefits */}
                    <motion.div 
                      className="mt-6 p-4 bg-gradient-to-br from-digi-red/30 to-transparent rounded-lg border border-digi-red/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">Why Choose 360 DIGI-SIGNS?</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-digi-red mr-2 mt-0.5" />
                          <span className="text-gray-300">Free installation and setup included with all plans</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-digi-red mr-2 mt-0.5" />
                          <span className="text-gray-300">No long-term contracts - cancel anytime</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-digi-red mr-2 mt-0.5" />
                          <span className="text-gray-300">24/7 technical support for all subscribers</span>
                        </li>
                      </ul>
                    </motion.div>
                  </motion.div>
                )}
                
                {/* Step 2: Plan Selection */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={stepVariants}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-digi-green/20 p-2 rounded-full">
                        <FileText className="h-6 w-6 text-digi-green" />
                      </div>
                      <h2 className="text-xl font-bold">Pricing Plan *</h2>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="plan"
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormControl>
                            <RadioGroup
                              onValueChange={(value) => {
                                field.onChange(value);
                                setSubscriptionDetails({
                                  ...subscriptionDetails,
                                  plan: value as any,
                                  price: value === "standard" ? 79.99 : value === "premium" ? 129.99 : 199.99
                                });
                              }}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            >
                              {planOptions.map((plan) => (
                                <div key={plan.value} className="relative">
                                  <Label
                                    htmlFor={plan.value}
                                    className={cn(
                                      "flex flex-col h-full cursor-pointer rounded-lg p-4 border-2 transition-colors",
                                      field.value === plan.value 
                                        ? "border-digi-green bg-gradient-to-b from-black to-digi-green/10" 
                                        : "border-gray-700 bg-black hover:border-gray-500"
                                    )}
                                  >
                                    <RadioGroupItem
                                      value={plan.value}
                                      id={plan.value}
                                      className="sr-only"
                                    />
                                    {plan.value === "premium" && (
                                      <div className="absolute -top-3 inset-x-0 flex justify-center">
                                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/90 to-yellow-600/90 text-white text-xs font-bold">
                                          Popular 🔥
                                        </div>
                                      </div>
                                    )}
                                    <div className={cn(
                                      "h-12 w-12 rounded-full flex items-center justify-center mb-3",
                                      `bg-gradient-to-br ${plan.color}`
                                    )}>
                                      {plan.icon}
                                    </div>
                                    <div className="font-bold text-lg mb-1">{plan.name}</div>
                                    <div className="text-xl font-bold mb-2">{plan.price}</div>
                                    <div className="text-sm text-gray-400 mb-4">{plan.description}</div>
                                    <ul className="space-y-2 text-sm mt-auto">
                                      {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                          <Check className="h-4 w-4 text-digi-green mr-2 mt-0.5 flex-shrink-0" />
                                          <span className="text-gray-300">{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                    {field.value === plan.value && (
                                      <div className="absolute bottom-2 right-2">
                                        <div className="w-6 h-6 rounded-full bg-digi-green flex items-center justify-center">
                                          <Check className="h-4 w-4 text-black" />
                                        </div>
                                      </div>
                                    )}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-between pt-4">
                      <Button 
                        type="button" 
                        
                        onClick={() => setStep(1)}
                        className="bg-digi-green hover:bg-digi-green/90 text-white"
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={handleNextStep}
                        className="bg-digi-green hover:bg-digi-green/90 text-white"
                      >
                        Continue <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Visual element showing benefits of selected plan */}
                    <motion.div 
                      className="mt-6 p-4 bg-gradient-to-br from-digi-green/30 to-transparent rounded-lg border border-digi-green/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {selectedPlan === "standard" && "Standard Plan Benefits"}
                        {selectedPlan === "premium" && "Premium Plan Benefits"}
                        {selectedPlan === "enterprise" && "Enterprise Plan Benefits"}
                      </h3>
                      
                      {selectedPlan === "standard" && (
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <p className="text-gray-300">Perfect for small businesses looking to start with digital signage</p>
                            <ul className="space-y-1">
                              <li className="flex items-center">
                                <Check className="h-4 w-4 text-digi-green mr-2" />
                                <span className="text-gray-300 text-sm">Simple content scheduling</span>
                              </li>
                              <li className="flex items-center">
                                <Check className="h-4 w-4 text-digi-green mr-2" />
                                <span className="text-gray-300 text-sm">Basic image and video support</span>
                              </li>
                            </ul>
                          </div>
                          
                        </div>
                      )}
                      
                      {selectedPlan === "premium" && (
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <p className="text-gray-300">Enhanced features for businesses ready to maximize engagement</p>
                            <ul className="space-y-1">
                              <li className="flex items-center">
                                <Check className="h-4 w-4 text-digi-green mr-2" />
                                <span className="text-gray-300 text-sm">Social media integration</span>
                              </li>
                              <li className="flex items-center">
                                <Check className="h-4 w-4 text-digi-green mr-2" />
                                <span className="text-gray-300 text-sm">Analytics to measure performance</span>
                              </li>
                            </ul>
                          </div>
                          
                        </div>
                      )}
                      
                      {selectedPlan === "enterprise" && (
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <p className="text-gray-300">Complete solution with advanced features for maximum impact</p>
                            <ul className="space-y-1">
                              <li className="flex items-center">
                                <Check className="h-4 w-4 text-digi-green mr-2" />
                                <span className="text-gray-300 text-sm">AI-powered content optimization</span>
                              </li>
                              <li className="flex items-center">
                                <Check className="h-4 w-4 text-digi-green mr-2" />
                                <span className="text-gray-300 text-sm">Multi-screen synchronization</span>
                              </li>
                            </ul>
                          </div>
                          
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                )}
                
                {/* Step 3: Business Details */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={stepVariants}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-digi-blue/20 p-2 rounded-full">
                        <MapPin className="h-6 w-6 text-digi-blue" />
                      </div>
                      <h2 className="text-xl font-bold">Business Details</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <FormField
                        control={form.control}
                        name="businessType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Business Type *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Business Type" {...field} className="bg-black border-gray-700 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Business Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Business Name" {...field} className="bg-black border-gray-700 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="businessAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Business Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Business Address" {...field} className="bg-black border-gray-700 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="businessCountry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Country *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-black border-gray-700 text-white">
                                  <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black text-white border-gray-700">
                                {countries.map((country) => (
                                  <SelectItem key={country} value={country}>{country}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="province"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Province/State *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Province/State" {...field} className="bg-black border-gray-700 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">City *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter City" {...field} className="bg-black border-gray-700 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Postal Code *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Postal Code" {...field} className="bg-black border-gray-700 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="contractDuration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Contract Duration *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-black border-gray-700 text-white">
                                  <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black text-white border-gray-700">
                                <SelectItem value="3 months">3 months</SelectItem>
                                <SelectItem value="6 months">6 months</SelectItem>
                                <SelectItem value="12 months">12 months</SelectItem>
                                <SelectItem value="24 months">24 months</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="totalScreens"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Total Screens *</FormLabel>
                            <FormControl>
                              <div className="flex">
                                <Input 
                                  type="number" 
                                  {...field}
                                  onChange={(e) => {
                                    const value = parseInt(e.target.value) || 1;
                                    field.onChange(value);
                                    setSubscriptionDetails({
                                      ...subscriptionDetails,
                                      screens: value
                                    });
                                  }}
                                  className="bg-black border-gray-700 text-white" 
                                />
                                <div className="flex flex-col ml-2">
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    onClick={handleIncreaseScreens}
                                    className="h-5 w-8 border-gray-700 text-white bg-gray-800"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    onClick={handleDecreaseScreens}
                                    disabled={form.getValues("totalScreens") <= 1}
                                    className="h-5 w-8 mt-1 border-gray-700 text-white bg-gray-800"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button 
                        type="button" 
                         
                        onClick={() => setStep(2)}
                        className="bg-digi-blue hover:bg-digi-blue/90 text-white"
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={handleNextStep}
                        className="bg-digi-blue hover:bg-digi-blue/90 text-white"
                      >
                        Continue <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Visual element showing installation process */}
                    <motion.div 
                      className="mt-6 p-4 bg-gradient-to-br from-digi-blue/30 to-transparent rounded-lg border border-digi-blue/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">Installation Process</h3>
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <p className="text-gray-300">Our professional installation team will:</p>
                          <ul className="space-y-1">
                            <li className="flex items-center">
                              <Check className="h-4 w-4 text-digi-blue mr-2" />
                              <span className="text-gray-300 text-sm">Survey your location</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 text-digi-blue mr-2" />
                              <span className="text-gray-300 text-sm">Install hardware with minimal disruption</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 text-digi-blue mr-2" />
                              <span className="text-gray-300 text-sm">Set up content management system</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 text-digi-blue mr-2" />
                              <span className="text-gray-300 text-sm">Train your team on usage</span>
                            </li>
                          </ul>
                        </div>
                        
                      </div>
                    </motion.div>
                  </motion.div>
                )}
                
                {/* Step 4: Review & Confirmation */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={stepVariants}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-gradient-rgb p-2 rounded-full">
                        <CreditCard className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-xl font-bold">Order Summary</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="rounded-lg border border-gray-700 overflow-hidden">
                        <div className="flex items-center gap-3 bg-gray-800 p-4 border-b border-gray-700">
                          <img 
                            src="/lovable-uploads/31ca5d5e-9078-4081-b275-427104aac166.png" 
                            alt="Confirmation" 
                            className="w-10 h-10 rounded-full" 
                          />
                          <h3 className="text-lg font-semibold">Order Details</h3>
                        </div>
                        
                        <div className="p-4 bg-black space-y-3">
                          <div className="flex justify-between items-center py-2">
                            <span className="text-gray-400">Total Screens:</span>
                            <span className="text-white font-medium">{form.getValues("totalScreens")}</span>
                          </div>
                          
                          <div className="flex justify-between items-center py-2">
                            <span className="text-gray-400">Display Price:</span>
                            <span className="text-white font-medium">{
                              form.getValues("plan") === "standard" ? `CA $79.99` :
                              form.getValues("plan") === "premium" ? `CA $129.99` :
                              `CA $199.99`
                            }</span>
                          </div>
                          
                          <div className="flex justify-between items-center py-2 border-t border-gray-700 mt-2">
                            <span className="text-gray-200 font-semibold">Total Monthly Charge:</span>
                            <span className="text-digi-red font-bold text-lg">{`CA $${calculatedPrice()}`}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border border-gray-700 p-4">
                        <h3 className="text-lg font-semibold mb-3">Selected Plan</h3>
                        <div className="bg-gradient-to-br from-gray-800 to-black p-4 rounded-md">
                          <div className="flex items-center gap-3 mb-2">
                            {planDetails?.icon}
                            <h4 className="font-bold">{planDetails?.name}</h4>
                          </div>
                          <p className="text-gray-400 mb-3">{planDetails?.description}</p>
                          <ul className="space-y-1">
                            {planDetails?.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="h-4 w-4 text-digi-green mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border border-gray-700 p-4">
                        <h3 className="text-lg font-semibold mb-3">Terms & Conditions</h3>
                        <div className="max-h-60 overflow-y-auto mb-4 p-5 text-sm text-gray-200 bg-black/50 rounded border border-gray-700 leading-relaxed">
                          <h4 className="font-medium text-white mb-3">EQUIPMENT RENTAL AGREEMENT</h4>
                          <p className="mb-3">THIS EQUIPMENT RENTAL AGREEMENT (this "Agreement") dated this 7 day of May, 2025</p>
                          
                          <p className="mb-3">By subscribing to our service, you agree to the terms and conditions outlined in our rental agreement.</p>
                          
                          <h5 className="font-medium text-white mt-4 mb-2">1. Equipment Ownership</h5>
                          <p className="mb-3">The equipment remains the property of 360 DIGI-SIGNS at all times. Customer shall not make any alterations, changes or modifications to the equipment without written permission from 360 DIGI-SIGNS.</p>
                          
                          <h5 className="font-medium text-white mt-4 mb-2">2. Payment Terms</h5>
                          <p className="mb-3">Monthly fees are charged in advance on the first day of each month. Late payments will incur a 2% fee per month on the outstanding amount.</p>
                          
                          <h5 className="font-medium text-white mt-4 mb-2">3. Cancellation Policy</h5>
                          <p className="mb-3">Cancellation requires 30 days written notice to be provided to 360 DIGI-SIGNS. Any outstanding fees must be paid in full prior to cancellation being processed.</p>
                          
                          <h5 className="font-medium text-white mt-4 mb-2">4. Damage & Liability</h5>
                          <p className="mb-3">Damage to equipment may result in repair charges. Customer is responsible for maintaining appropriate insurance coverage for the equipment while it is in their possession.</p>
                          
                          <h5 className="font-medium text-white mt-4 mb-2">5. Content Guidelines</h5>
                          <p>Customer agrees to display only appropriate content that complies with all applicable laws and regulations. 360 DIGI-SIGNS reserves the right to review and reject any content deemed inappropriate.</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <input 
                            type="checkbox" 
                            id="terms" 
                            className="h-5 w-5 rounded border-gray-500 text-digi-red focus:ring-digi-red"
                            required 
                          />
                          <label htmlFor="terms" className="text-sm text-gray-300">
                            I agree to the Terms & Conditions
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setStep(3)}
                        className="border-gray-700 text-white hover:bg-gray-800"
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit"
                        className="bg-gradient-rgb bg-300% animate-flow-rgb text-white"
                      >
                        Complete Order
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
