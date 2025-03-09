
import { useState, useEffect } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight / 1.2) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "sachinsankole6@gmail.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "9071504142",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "loading....",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'reveal active' : 'reveal'}`}>
          <Badge variant="outline" className="mb-4">Contact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Feel free to reach out using the form below or through my contact information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className={`lg:col-span-2 ${isVisible ? 'reveal active reveal-delay-1' : 'reveal'}`}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      {info.title}
                    </h4>
                    <a 
                      href={info.link} 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <p className="text-muted-foreground mb-4">
                I'm open to freelance opportunities, collaborations, and interesting projects.
                Let's create something amazing together!
              </p>
              <p className="text-sm text-muted-foreground">
                Available for new projects starting <span className="text-primary font-medium">January 2024</span>
              </p>
            </div>
          </div>
          
          <div className={`lg:col-span-3 ${isVisible ? 'reveal active reveal-delay-2' : 'reveal'}`}>
            <Card className="backdrop-blur-sm bg-background/50 border-border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-secondary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@example.com"
                        required
                        className="bg-secondary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto rounded-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
