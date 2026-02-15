import { toast } from 'sonner';

// Service ID, Template ID, and Public Key should ideally be in environment variables
// But for this client-side demo, we'll keep them here or use placeholders
const SERVICE_ID = 'service_onenegrosads'; // Replace with actual EmailJS Service ID
const TEMPLATE_ID = 'template_contact_form'; // Replace with actual EmailJS Template ID
const PUBLIC_KEY = 'user_your_public_key'; // Replace with actual EmailJS Public Key

export interface EmailData {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const templateParams = {
        from_name: data.user_name,
        from_email: data.user_email, // Make sure your EmailJS template uses this variable for reply-to
        subject: data.subject,
        message: data.message,
        to_name: 'One Negros Ads Team',
    };

    // Note: Since we don't have real keys yet, we will simulate a success for the UI demo
    // In a real app, you would uncomment the line below:
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    
    // Simulating network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Email sent successfully (simulation):", templateParams);
    toast.success("Message sent!", {
        description: "We'll get back to you as soon as possible."
    });
    return true;
  } catch (error) {
    console.error("Email Error:", error);
    toast.error("Failed to send message.", {
        description: "Please try again later or contact us directly."
    });
    return false;
  }
};
