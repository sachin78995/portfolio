
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
            <p className="text-muted-foreground max-w-md">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out!
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/sachin78995" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sachin-sankole-3975832ab/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/sachin_sankole0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="sachinsankole6@gmail.com" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
