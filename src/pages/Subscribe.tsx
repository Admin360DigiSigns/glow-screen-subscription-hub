
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const subscriptionFormSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  plan: z.enum(["standard", "premium", "enterprise"]),
  businessName: z.string().min(2, { message: "Please enter your business name" }),
  address: z.string().min(5, { message: "Please enter your business address" }),
  city: z.string().min(2, { message: "Please enter your city" }),
  state: z.string().min(2, { message: "Please enter your state" }),
  zipCode: z.string().min(5, { message: "Please enter a valid zip code" })
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
      plan: (planType as "standard" | "premium" | "enterprise") || "standard",
      businessName: "",
      address: "",
      city: "",
      state: "",
      zipCode: ""
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
          <motion.div 
            className="max-w-3xl mx-auto bg-black/60 p-8 rounded-xl border border-white/10 backdrop-blur-sm shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-center mb-6">
              <span className="text-rgb-animated">Subscribe</span> to Our Services
            </h1>
            
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
                            <FormLabel className="text-white">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                {...field} 
                                className="bg-black/50 border-white/20 text-white"
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
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your email" 
                                type="email"
                                {...field} 
                                className="bg-black/50 border-white/20 text-white"
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
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your phone number" 
                                {...field} 
                                className="bg-black/50 border-white/20 text-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="plan"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white text-lg">Select Your Plan</FormLabel>
                            <div className="mt-4">
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-4"
                              >
                                <div className="flex items-center space-x-2 bg-red-900/20 p-4 rounded-lg border border-red-500/30">
                                  <RadioGroupItem value="standard" id="standard" className="text-red-400" />
                                  <label htmlFor="standard" className="flex flex-col cursor-pointer w-full">
                                    <span className="font-bold text-red-400">Standard</span>
                                    <span className="text-gray-300">$79.99/month - Perfect for small businesses</span>
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                                  <RadioGroupItem value="premium" id="premium" className="text-green-400" />
                                  <label htmlFor="premium" className="flex flex-col cursor-pointer w-full">
                                    <span className="font-bold text-green-400">Premium</span>
                                    <span className="text-gray-300">$129.99/month - Ideal for growing businesses</span>
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                                  <RadioGroupItem value="enterprise" id="enterprise" className="text-blue-400" />
                                  <label htmlFor="enterprise" className="flex flex-col cursor-pointer w-full">
                                    <span className="font-bold text-blue-400">Enterprise</span>
                                    <span className="text-gray-300">$199.99/month - For maximum business impact</span>
                                  </label>
                                </div>
                              </RadioGroup>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
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
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Business Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your business name" 
                                {...field} 
                                className="bg-black/50 border-white/20 text-white"
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
                            <FormLabel className="text-white">Street Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your street address" 
                                {...field} 
                                className="bg-black/50 border-white/20 text-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">City</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your city" 
                                {...field} 
                                className="bg-black/50 border-white/20 text-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">State</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your state" 
                                {...field} 
                                className="bg-black/50 border-white/20 text-white"
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
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Zip Code</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your zip code" 
                                {...field} 
                                className="bg-black/50 border-white/20 text-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  </motion.div>
                )}
                
                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={itemVariants} className="text-center">
                      <h2 className="text-2xl font-bold mb-4">Review Your Information</h2>
                      <p className="text-gray-300 mb-8">Please review your subscription details before finalizing.</p>
                      
                      <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-left">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-gray-400">Personal Information</h3>
                            <p className="font-medium">{form.getValues("fullName")}</p>
                            <p>{form.getValues("email")}</p>
                            <p>{form.getValues("phone")}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-gray-400">Selected Plan</h3>
                            <p className="font-medium capitalize">{form.getValues("plan")} Plan</p>
                            <p className="text-digi-green">
                              {form.getValues("plan") === "standard" ? "$79.99" : 
                               form.getValues("plan") === "premium" ? "$129.99" : "$199.99"}/month
                            </p>
                          </div>
                          
                          <div className="col-span-2 mt-4">
                            <h3 className="text-gray-400">Business Information</h3>
                            <p className="font-medium">{form.getValues("businessName")}</p>
                            <p>{form.getValues("address")}</p>
                            <p>{form.getValues("city")}, {form.getValues("state")} {form.getValues("zipCode")}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
                
                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                  <Button 
                    type="button"
                    onClick={handlePrevious}
                    variant="outline"
                    disabled={currentStep === 1}
                    className="border-white/20 text-white"
                  >
                    Previous
                  </Button>
                  
                  <Button 
                    type="submit"
                    className={`${currentStep === 4 ? 'bg-gradient-rgb bg-300% animate-flow-rgb' : 'bg-digi-blue'}`}
                  >
                    {currentStep < 4 ? "Next" : "Complete Subscription"}
                  </Button>
                </div>
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
