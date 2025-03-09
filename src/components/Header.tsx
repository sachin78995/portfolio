
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Check user preference for dark mode
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };
  
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-background/80 backdrop-blur-lg border-b border-border" 
          : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="font-heading text-xl font-semibold">
          <span className="text-primary">Portfolio</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.name}
            </button>
          ))}
          
          <Button 
            size="icon" 
            variant="ghost" 
            onClick={toggleDarkMode}
            className="ml-2"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button 
            size="icon" 
            variant="ghost" 
            onClick={toggleDarkMode}
            className="mr-2"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-20 flex flex-col animate-fade-in">
          <div className="container mx-auto px-6 flex flex-col space-y-6 py-10">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-medium px-4 py-3 text-left border-b border-border animate-slide-down`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
