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
  
  // Generate the full rental agreement text with dynamic values
  const generateRentalAgreement = () => {
    const businessName = form.getValues("businessName") || "[Business Name]";
    const businessAddress = form.getValues("businessAddress") || "[Business Address]";
    const city = form.getValues("city") || "[City]";
    const province = form.getValues("province") || "[Province]";
    const postalCode = form.getValues("postalCode") || "[Postal Code]";
    const fullAddress = `${businessAddress}, ${city}, ${province} ${postalCode}, ${form.getValues("businessCountry") || "Canada"}`;
    const price = calculatedPrice();
    const today = new Date();
    const formattedDate = format(today, "d 'day of' MMMM yyyy");
    
    return `
      <h4 class="text-xl font-bold text-white mb-4">EQUIPMENT RENTAL AGREEMENT</h4>
      <p class="mb-4">THIS EQUIPMENT RENTAL AGREEMENT (this "Agreement") dated this ${formattedDate}</p>
      
      <p class="mb-4 font-medium">BETWEEN:</p>
      <p class="mb-4 ml-4">Axis of Desire Inc. (360DigiSigns) of Unit 9, 168 Kennedy Road S, Brampton, L6W3G6 (the "Lessor") of the First Part</p>
      
      <p class="mb-4 font-medium">- AND -</p>
      <p class="mb-4 ml-4">(the "Lessee") of the Second Part</p>
      
      <p class="mb-2 font-medium">Business Name: <span class="text-digi-red font-bold">${businessName}</span></p>
      <p class="mb-4 font-medium">Business Address: <span class="text-digi-red font-bold">${fullAddress}</span></p>
      
      <p class="mb-4">(the Lessor and Lessee are collectively the "Parties")</p>
      
      <p class="mb-4 font-medium">IN CONSIDERATION OF:</p>
      <p class="mb-6">The mutual covenants and promises in this Agreement, the receipt and sufficiency of which consideration is hereby acknowledged, the Lessor leases the Equipment to the Lessee, and the Lessee leases the Equipment from the Lessor on the following terms:</p>
      
      <h5 class="text-lg font-semibold text-white mb-2">Definitions</h5>
      <ul class="list-disc ml-6 mb-4">
        <li class="mb-2">"Casualty Value" means the market value of the Equipment at the end of the Term or when in relation to a Total Loss, the market value the Equipment would have had at the end of the Term but for the Total Loss. The Casualty Value may be less than but will not be more than the original purchase price of the Equipment.</li>
        <li class="mb-2">"Equipment" means LED Indoor screen 4000 CDI with an approximate value of $1,000.00.</li>
        <li class="mb-2">"Total Loss" means any loss or damage that is not repairable or that would cost more to repair than the market value of the Equipment.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Lease</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>The Lessor agrees to lease the Equipment to the Lessee, and the Lessee agrees to lease the Equipment from the Lessor in accordance with the terms set out in this Agreement.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Term</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>The Agreement commences on ${formattedDate} and will continue until Cancelled.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Rent</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>The rent, exclusive of HST, will be paid in instalments of <span class="text-digi-red font-bold">CA $${price}</span> each month, in advance, beginning on 7th March and will be paid on the first day of each succeeding month throughout the Term (the "Rent").</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Delivery of Equipment</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>The Lessor will, at the Lessor's own expense and risk, deliver the Equipment to the Lessee at the location specified by the Lessee.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Use of Equipment</h5>
      <ul class="list-disc ml-6 mb-4">
        <li class="mb-2">The Lessee will use the Equipment in a good and careful manner and comply with all of the manufacturer's requirements and applicable laws, including environmental and copyright law.</li>
        <li class="mb-2">The Lessee will use the Equipment for the purpose for which it was designed.</li>
        <li>Unless with prior written consent of the Lessor, the Lessee will not alter or modify the Equipment.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Warranties</h5>
      <ul class="list-disc ml-6 mb-4">
        <li class="mb-2">The Equipment will be in good working order and condition upon delivery.</li>
        <li>The Equipment is fit for its ordinary use and of merchantable quality.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Loss and Damage</h5>
      <ul class="list-disc ml-6 mb-4">
        <li class="mb-2">The Lessee is responsible for risk of loss, theft, damage, or destruction to the Equipment.</li>
        <li class="mb-2">If the Equipment is lost or damaged, the Lessee will continue paying Rent, notify the Lessor, and repair the Equipment if possible.</li>
        <li>In the case of Total Loss, the Lessee will pay the Lessor all unpaid Rent and the Casualty Value of the Equipment, transferring ownership to the Lessee.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Ownership, Right to Lease, and Quiet Enjoyment</h5>
      <ul class="list-disc ml-6 mb-4">
        <li class="mb-2">The Equipment remains the property of the Lessor.</li>
        <li class="mb-2">The Lessee will not encumber the Equipment or pledge it as security.</li>
        <li>The Lessor warrants the right to lease the Equipment according to this Agreement.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Surrender</h5>
      <p class="ml-6 mb-4">At the end of the Term or upon termination, the Lessee will make the Equipment available for pickup at the location where the LED screen was originally installed. If the Lessee fails, they will pay any unpaid Rent plus the Casualty Value if any, transferring ownership to the Lessee.</p>
      
      <h5 class="text-lg font-semibold text-white mb-2">Insurance</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>No insurance coverage is required under this Agreement.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Indemnity</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>The Lessee will indemnify and hold harmless the Lessor against all claims, suits, or damages arising from the Lessee's use of the Equipment.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Default</h5>
      <ul class="list-disc ml-6 mb-4">
        <li class="mb-2">Failure to pay Rent or breach of obligations constitutes an Event of Default.</li>
        <li class="mb-2">Insolvency or bankruptcy proceedings also constitute an Event of Default.</li>
        <li>A writ of attachment on the Equipment that is not satisfied within 10 days is an Event of Default.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Remedies</h5>
      <ul class="list-disc ml-6 mb-4">
        <li class="mb-2">The Lessor may declare the entire Rent for the Term due and payable immediately.</li>
        <li>The Lessor may take possession of the Equipment, commence legal action, or terminate this Agreement upon default.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Renewal</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>The Lessee may renew this Agreement for an additional Term with 30 days' notice and if no defaults exist.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Entire Agreement</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>This Agreement constitutes the entire agreement between the Parties.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Address for Notice</h5>
      <p class="ml-6 mb-1">All notices should be delivered personally or sent by registered mail or courier to the following addresses:</p>
      <p class="ml-6 mb-1"><span class="font-medium">Lessor:</span> Axis of Desire Inc., Unit 9, 168 Kennedy Road S, Brampton, L6W3G6</p>
      <p class="ml-6 mb-1"><span class="font-medium">Lessee:</span></p>
      <p class="ml-6 mb-1"><span class="font-medium">Business Name:</span> <span class="text-digi-red font-bold">${businessName}</span></p>
      <p class="ml-6 mb-4"><span class="font-medium">Business Address:</span> <span class="text-digi-red font-bold">${fullAddress}</span></p>
      
      <h5 class="text-lg font-semibold text-white mb-2">Payment</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>All payments are in Canadian dollars, unless otherwise agreed upon by the Parties.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Interpretation</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>Headings are for convenience only and should not be considered when interpreting this Agreement.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Governing Law</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>This Agreement is governed by the laws of Ontario, Canada.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Severability</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>If any part of this Agreement is deemed invalid, the remaining provisions will remain in effect.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">General Terms</h5>
      <ul class="list-disc ml-6 mb-4">
        <li class="mb-2">This Agreement may be executed in counterparts. Facsimile signatures are considered valid.</li>
        <li>Time is of the essence in this Agreement.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Cancellation</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>Either party may cancel this agreement with 2 weeks' notice.</li>
      </ul>
      
      <h5 class="text-lg font-semibold text-white mb-2">Notice to Lessee</h5>
      <ul class="list-disc ml-6 mb-4">
        <li>This is a lease, not a purchase. You are entitled to a completed copy of this Agreement when you sign it.</li>
      </ul>
      
      <div class="mt-8 grid grid-cols-2 gap-8">
        <div>
          <p class="mb-2 font-medium text-lg">Signature</p>
          <p class="mb-2">Name & Designation:</p>
          <p class="mb-2">Lessee:</p>
          <p class="mb-2">Date:</p>
        </div>
        <div>
          <p class="mb-2 font-medium text-lg">Signature</p>
          <p class="mb-2">Name & Designation:</p>
          <p class="mb-2">Lessor:</p>
          <p class="mb-2">Date:</p>
        </div>
      </div>
    `;
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
                                <RadioGroupItem value="single" id="single"
