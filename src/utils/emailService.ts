
import { useToast } from "@/hooks/use-toast";

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = async (formData: EmailData): Promise<boolean> => {
  try {
    // Email service credentials - in a real app, these would be stored securely
    // Note: This is not secure for production use as it exposes the credentials in client-side code
    const emailServiceCredentials = {
      senderEmail: "nandish@360digisigns.com",
      recipientEmail: "info@360digisigns.com",
      // Password would be managed securely in a proper backend
    };

    // In a real application, this would be a call to your backend API or serverless function
    // For demo purposes, we're just simulating a successful API call
    
    // Simulating network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Email sent with data:", {
      to: emailServiceCredentials.recipientEmail,
      from: emailServiceCredentials.senderEmail,
      subject: `New Inquiry from ${formData.name}`,
      body: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
    });
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
