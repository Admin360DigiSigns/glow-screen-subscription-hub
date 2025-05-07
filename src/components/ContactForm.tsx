
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      toast({
        title: "Inquiry Submitted",
        description: "We'll get back to you as soon as possible!",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <div className="w-full">
      <DialogHeader className="mb-6">
        <DialogTitle className="text-2xl font-display">
          <span className="text-rgb-animated">Get Started</span> with 360 DIGI-SIGNS
        </DialogTitle>
        <DialogDescription className="text-gray-400">
          Fill out the form below and our team will reach out to discuss how our digital displays can illuminate your business.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name
          </label>
          <Input 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-gray-900 border-gray-700 text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <Input 
            id="email"
            name="email" 
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="bg-gray-900 border-gray-700 text-white"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number (Optional)
          </label>
          <Input 
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            className="bg-gray-900 border-gray-700 text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Tell us about your business needs
          </label>
          <Textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What are you looking for? Any specific requirements or questions?"
            required
            rows={4}
            className="bg-gray-900 border-gray-700 text-white"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-rgb-animated mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <Mail className="animate-pulse mr-2" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <Send className="mr-2" />
              Submit Inquiry
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
