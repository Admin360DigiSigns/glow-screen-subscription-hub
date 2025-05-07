
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FormSteps } from "@/components/SubscriptionFormSteps";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Calendar, Check, ChevronRight, Plus, Minus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const subscriptionFormSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  country: z.string().min(1, { message: "Please select a country" }),
  installationDate: z.date({ required_error: "Installation date is required" }),
  locationType: z.enum(["single", "multiple"]),
  plan: z.enum(["standard", "premium", "enterprise"]),
  businessType: z.string().min(2, { message: "Please enter your business type" }),
  businessName: z.string().min(2, { message: "Please enter your business name" }),
  address: z.string().min(5, { message: "Please enter your business address" }),
  businessCountry: z.string().min(1, { message: "Country is required" }),
  province: z.string().min(1, { message: "Province/State is required" }),
  city: z.string().min(1, { message: "City is required" }),
  postalCode: z.string().min(1, { message: "Please enter a valid postal code" }),
  contractDuration: z.string().min(1, { message: "Contract duration is required" }),
  totalScreens: z.number().min(1, { message: "At least one screen is required" })
});

type SubscriptionFormValues = z.infer<typeof subscriptionFormSchema>;

const Subscribe = () => {
  const { planType } = useParams<{ planType: string }>();
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "Canada",
      installationDate: undefined,
      locationType: "single",
      plan: (planType as "standard" | "premium" | "enterprise") || "standard",
      businessType: "",
      businessName: "",
      address: "",
      businessCountry: "Canada",
      province: "",
      city: "",
      postalCode: "",
      contractDuration: "12 months",
      totalScreens: 1
    }
  });

  const onSubmit = (data: SubscriptionFormValues) => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      return;
    }
    
    // Handle final submission
    toast({
      title: "Subscription successful!",
      description: `Thank you ${data.fullName}, we'll contact you soon to complete your ${data.plan} plan setup.`
    });
    
    // Navigate back to pricing after brief delay
    setTimeout(() => {
      navigate("/pricing");
    }, 3000);
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/pricing");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
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
  
  const planFeatures = {
    standard: [
      "1M x 1M Digital Display",
      "HD Resolution",
      "Basic Content Management",
      "8 Hours Daily Operation",
      "Monthly Content Updates",
      "Standard Support"
    ],
    premium: [
      "1.5M x 1.5M Digital Display",
      "4K Ultra HD Resolution",
      "Advanced Content Management",
      "12 Hours Daily Operation",
      "Weekly Content Updates", 
      "Priority Support",
      "Analytics Dashboard"
    ],
    enterprise: [
      "Custom Size Digital Display",
      "8K Resolution",
      "AI-Powered Content Optimization",
      "24/7 Operation",
      "Unlimited Content Updates",
      "Premium Support & Consultation",
      "Advanced Analytics",
      "Multi-Screen Management"
    ]
  };

  // Get pricing based on selected plan
  const getPlanPrice = () => {
    const plan = form.getValues("plan");
    return plan === "standard" ? 79.99 : 
           plan === "premium" ? 129.99 : 199.99;
  };

  // Calculate total price
  const calculateTotal = () => {
    const screens = form.getValues("totalScreens") || 1;
    const planPrice = getPlanPrice();
    return (planPrice * screens).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-digi-red/20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-digi-blue/20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back button */}
          <div className="mb-6">
            <Button 
              onClick={() => navigate("/pricing")}
              variant="outline" 
              className="flex items-center gap-1 border-white/20 text-white hover:bg-white/5"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Pricing
            </Button>
          </div>

          <motion.div 
            className="max-w-3xl mx-auto bg-white text-gray-800 p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Steps indicator */}
            <FormSteps currentStep={currentStep} />
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country *</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select country" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Canada">Canada</SelectItem>
                                  <SelectItem value="United States">United States</SelectItem>
                                  <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <div className="flex">
                                  <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                                    <span className="text-gray-500 flex items-center gap-1">
                                      <img 
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MzYgNDgwIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjY3IiBkPSJNMCAwaDYzNnY0ODBIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS13aWR0aD0iMXB0IiBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xODEuNzYgMGg0NzkuNnY0OGgtNDc5LjZ6bTAgMTkxLjk5aDQ3OS42djQ4aC00NzkuNnptMCAxOTEuOTloNDc5LjZ2NDhoLTQ3OS42ek0wIDBoMjM5Ljk5djI0MGgzOTZWMGgtNjM2eiIvPjxwYXRoIGZpbGw9InJlZCIgZD0iTTE1LjI1IDE1LjI1aDIwOS41djIwOS41aC0yMDkuNXoiLz48cGF0aCBmaWxsPSIjMDAwMDYyIiBkPSJNNjAgMTE5Ljk5TDM4LjQ1IDk1Ljk4bC0yMS4yMyAyNC41NkwyMS41IDkwLjQxbDAtMzAuNDRsMjQuMzQgMTkuMjhMMjcuNzMgNTUuNDYgNDguMSAzNC4yOCA0Ni4pIEMgOTggNDMuMTYgNzIuMDMgNzMuNzcgNjEuMvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05My45MiA2MC4yVjIwLjM3TDEyMC43OCAwaDI2Ljgydjg3LjI1TDAk9Ik0xMTMuNSAyMC4zN2gtMTYuOUw4MC4xIDQwLjE5aDMzLjM3em0tMzMuMzcgMHYxOS44Mkw2MCw2MC4yaDMzLjM3di0yMC4xbC0xMy4yNS0xOS43M3oiLz48L2c+PC9zdmc+" 
                                        alt="Canada Flag" 
                                        className="w-5 h-3.5 mr-1"
                                      />
                                      +1
                                    </span>
                                  </div>
                                  <Input 
                                    placeholder="Enter phone number" 
                                    {...field} 
                                    className="rounded-l-none" 
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email ID *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your email address" 
                                type="email" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="installationDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Installation Date *</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "yyyy-MM-dd")
                                    ) : (
                                      <span>yyyy-mm-dd</span>
                                    )}
                                    <Calendar className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <CalendarComponent
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date()}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="locationType"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Installation Location</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex gap-4"
                              >
                                <div className="flex items-center">
                                  <RadioGroupItem value="single" id="single" />
                                  <label htmlFor="single" className="ml-2">Single Location</label>
                                </div>
                                <div className="flex items-center">
                                  <RadioGroupItem value="multiple" id="multiple" />
                                  <label htmlFor="multiple" className="ml-2">Multiple Locations</label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="pt-6">
                      <Button 
                        type="button" 
                        onClick={() => form.handleSubmit(onSubmit)()}
                      >
                        Continue <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
                
                {/* Step 2: Plan Selection */}
                {currentStep === 2 && (
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h2 className="text-xl font-bold">Pricing Plan *</h2>
                    
                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="plan"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                              >
                                {/* Standard Plan */}
                                <div className={`border rounded-md overflow-hidden ${field.value === "standard" ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-300"}`}>
                                  <div className="bg-blue-700 text-white p-4">
                                    <div className="flex justify-between items-center mb-2">
                                      <div className="flex items-center">
                                        <RadioGroupItem
                                          id="standard"
                                          value="standard"
                                          className="sr-only"
                                        />
                                        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none">
                                          <path d="M3 7h18v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" stroke="currentColor" strokeWidth="2" />
                                          <path d="M3 7h18V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2z" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                      </div>
                                      <span className="font-bold">$79.99/month</span>
                                    </div>
                                    <h3 className="text-lg font-bold">Standard Plan</h3>
                                    <p className="text-sm text-blue-100">Perfect for small businesses</p>
                                  </div>
                                  <div className="p-4">
                                    <ul className="space-y-2">
                                      {planFeatures.standard.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700">
                                          <Check className="h-4 w-4 text-blue-500 mr-2 mt-1 shrink-0" />
                                          <span className="text-sm">{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                
                                {/* Premium Plan */}
                                <div className={`border rounded-md overflow-hidden ${field.value === "premium" ? "border-green-500 ring-2 ring-green-500" : "border-gray-300"}`}>
                                  <div className="bg-gray-100 text-black p-4">
                                    <div className="flex justify-between items-center mb-2">
                                      <div className="flex items-center">
                                        <RadioGroupItem
                                          id="premium"
                                          value="premium"
                                          className="sr-only"
                                        />
                                        <svg className="h-8 w-8 text-gray-700" viewBox="0 0 24 24" fill="none">
                                          <path d="M13 2L3 14h12l-1 8 10-12h-12l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                      <span className="font-bold">$129.99/month</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <h3 className="text-lg font-bold">Premium Plan</h3>
                                        <p className="text-sm text-gray-600">Ideal for growing businesses</p>
                                      </div>
                                      <div className="bg-yellow-500 text-xs font-bold py-1 px-2 rounded-full text-white">
                                        Popular 🔥
                                      </div>
                                    </div>
                                  </div>
                                  <div className="p-4">
                                    <ul className="space-y-2">
                                      {planFeatures.premium.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700">
                                          <Check className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                                          <span className="text-sm">{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                
                                {/* Enterprise Plan */}
                                <div className={`border rounded-md overflow-hidden ${field.value === "enterprise" ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-300"}`}>
                                  <div className="bg-gray-100 text-black p-4">
                                    <div className="flex justify-between items-center mb-2">
                                      <div className="flex items-center">
                                        <RadioGroupItem
                                          id="enterprise"
                                          value="enterprise"
                                          className="sr-only"
                                        />
                                        <svg className="h-8 w-8 text-gray-700" viewBox="0 0 24 24" fill="none">
                                          <path d="M21 16V8c0-.6-.4-1.1-.8-1.4l-7-4c-.3-.2-.7-.2-1 0l-7 4c-.4.3-.8.8-.8 1.4v8c0 .6.4 1.1.8 1.4l7 4c.3.2.7.2 1 0l7-4c.4-.3.8-.8.8-1.4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                      <span className="font-bold">$199.99/month</span>
                                    </div>
                                    <h3 className="text-lg font-bold">Enterprise Plan</h3>
                                    <p className="text-sm text-gray-600">For maximum business impact</p>
                                  </div>
                                  <div className="p-4">
                                    <ul className="space-y-2">
                                      {planFeatures.enterprise.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700">
                                          <Check className="h-4 w-4 text-blue-500 mr-2 mt-1 shrink-0" />
                                          <span className="text-sm">{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <div className="flex justify-between pt-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={handlePrevious}
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => form.handleSubmit(onSubmit)()}
                      >
                        Continue <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 3: Business Details */}
                {currentStep === 3 && (
                  <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="businessType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Type *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter Business Type" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter Business Name" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Address *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter Business Address" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="businessCountry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter Business Country" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="province"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Province/State *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter Province/State" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter City" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="postalCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Postal Code *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter Postal Code" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="contractDuration"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Contract Duration *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter Contract Duration" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="totalScreens"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Total Screens *</FormLabel>
                              <FormControl>
                                <div className="flex">
                                  <Input 
                                    type="number" 
                                    {...field}
                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                                  />
                                  <div className="flex ml-2">
                                    <Button
                                      type="button"
                                      size="icon"
                                      onClick={() => field.onChange((field.value || 0) + 1)}
                                      className="h-10 w-10"
                                    >
                                      <Plus className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      type="button"
                                      size="icon"
                                      onClick={() => field.value > 1 && field.onChange(field.value - 1)}
                                      disabled={field.value <= 1}
                                      className="h-10 w-10 ml-1"
                                      variant="outline"
                                    >
                                      <Minus className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={handlePrevious}
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => form.handleSubmit(onSubmit)()}
                      >
                        Continue <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 4: Review & Confirmation */}
                {currentStep === 4 && (
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="p-6 border border-gray-200 rounded-lg">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                          <div className="text-gray-700">Total Screens:</div>
                          <div className="font-medium">{form.getValues("totalScreens")}</div>
                        </div>
                        
                        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                          <div className="text-gray-700">Display Price:</div>
                          <div className="font-medium">CA ${getPlanPrice()}</div>
                        </div>
                        
                        <div className="flex justify-between items-center pt-2">
                          <div className="text-gray-800 font-bold">Total:</div>
                          <div className="font-bold text-red-500">CA ${calculateTotal()}</div>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div variants={itemVariants}>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Equipment Rental Agreement</h3>
                        <div className="h-48 overflow-y-auto mb-4 p-3 text-sm text-gray-600 bg-gray-50 rounded border border-gray-200">
                          <p className="font-bold">THIS EQUIPMENT RENTAL AGREEMENT (this "Agreement") dated this 7 day of May, 2025</p>
                          <p className="my-2">BETWEEN:</p>
                          <p>Axis of Desire Inc. of Unit 9, 168 Kennedy Road S, Brampton, L6W3G6 (the "Lessor") of the First Part</p>
                          <p className="my-2">- AND -</p>
                          <p>(the "Lessee") of the Second Part</p>
                          <p className="my-2">Business Name 1: {form.getValues("businessName")}</p>
                          <p>Business Address 1: {form.getValues("address")}</p>
                          <p className="my-4">(the Lessor and Lessee are collectively the "Parties")</p>
                          
                          <p className="font-bold">IN CONSIDERATION OF:</p>
                          <p className="my-2">The mutual covenants and promises in this Agreement, the receipt and sufficiency of which are hereby acknowledged, the Lessor leases the Equipment to the Lessee, and the Lessee leases the Equipment from the Lessor on the following terms:</p>
                          
                          <p className="font-bold mt-4">Definitions</p>
                          <ul className="list-disc pl-5 my-2">
                            <li>"Casualty Value" means the market value of the Equipment at the end of the Term or when in relation to a Total Loss, the market value the Equipment would have had at the end of the Term but for the Total Loss.</li>
                            <li>"Equipment" means LED Indoor screen 400I CDI with an approximate value of $1,000.00.</li>
                            <li>"Total Loss" means any loss or damage that is not repairable or that would cost more to repair than the value of the Equipment.</li>
                          </ul>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <input 
                            type="checkbox" 
                            id="terms" 
                            className="h-4 w-4 rounded"
                            required 
                          />
                          <label htmlFor="terms" className="text-sm text-gray-700">
                            I agree to the Terms & Conditions
                          </label>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="flex justify-between pt-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={handlePrevious}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit"
                      >
                        Complete Order
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>
            </Form>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Subscribe;
