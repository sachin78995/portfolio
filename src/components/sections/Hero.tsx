import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";






const Hero = () => {
  const projectImage = import.meta.env.VITE_PROJECT_IMAGE_6; // Fetch from .env

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="md:col-span-7 space-y-6 animate-slide-up">
            <div className="flex flex-wrap gap-2">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Frontend Developer
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
                Backend Developer
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Creating <span className="text-primary">beautiful</span> digital experiences
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              I design and build modern full-stack applications with a focus on user experience, 
              performance, robust architecture, and clean code.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Get in touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    window.scrollTo({
                      top: projectsSection.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                View my work
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="md:col-span-5 flex justify-center md:justify-end animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <img src={projectImage} alt="Project" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        {/* Scroll Button */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce hidden md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={scrollToAbout}
          >
            <ArrowDown size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
