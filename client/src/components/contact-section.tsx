import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/resume/download');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Shubham_Gehlod_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      toast({
        title: "Error downloading resume",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-mono font-black mb-6">
            <span className="text-gradient">GET IN TOUCH</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 neon-border"
          >
            <h3 className="text-3xl font-bold mb-8 text-gradient">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John" 
                            className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            data-testid="input-first-name"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Doe" 
                            className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            data-testid="input-last-name"
                            {...field} 
                          />
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
                      <FormLabel className="text-sm font-semibold">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          data-testid="input-email"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project Discussion" 
                          className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          data-testid="input-subject"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5}
                          placeholder="Tell me about your project..." 
                          className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                          data-testid="textarea-message"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:animate-glow"
                  data-testid="button-send-message"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8 card-3d">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">shubhamgehlod1221@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+91 8770798010</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Indore, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-3xl p-8 card-3d">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Follow Me</h3>
              
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:animate-glow" data-testid="link-contact-linkedin">
                  <i className="fab fa-linkedin text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:animate-glow" data-testid="link-contact-github">
                  <i className="fab fa-github text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:animate-glow" data-testid="link-contact-twitter">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:animate-glow" data-testid="link-contact-instagram">
                  <i className="fab fa-instagram text-white"></i>
                </a>
              </div>
            </div>
            
            <div className="glass rounded-3xl p-8 card-3d text-center">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Download Resume</h3>
              <p className="text-muted-foreground mb-6">Get a detailed overview of my skills and experience</p>
              <button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                data-testid="button-download-resume-contact"
              >
                <i className="fas fa-download mr-2"></i>
                Download PDF
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
