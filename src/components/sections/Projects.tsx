
import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "ai-music-generator",
    description: "A modern e-commerce platform built with React, Redux, and Firebase. Features include product filtering, cart functionality, user authentication, and payment processing.",
    tags: ["React", "Redux", "Firebase", "Stripe"],
    image: import.meta.env.VITE_PROJECT_IMAGE_1, // Vite (for React Vite projects)
    liveUrl: "https://v0-perfect-frontend-code.vercel.app/",
    githubUrl: "https://github.com/sachin78995/ai-music"
  },
  {
    title: "stay-finder",
    description: "A task management application inspired by Trello. Built with React, React Beautiful DnD, and a Node.js backend.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: import.meta.env.VITE_PROJECT_IMAGE_2,
    liveUrl: "https://airbnb-8qv1.onrender.com/login",
    githubUrl: "https://github.com/sachin78995/StayFinder"
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current weather conditions and forecasts. Integrates with OpenWeather API.",
    tags: ["JavaScript", "API Integration", "CSS Grid"],
    image: import.meta.env.VITE_PROJECT_IMAGE_3,
    liveUrl: "https://weather-app-lac-phi-27.vercel.app/",
    githubUrl: "https://github.com/sachin78995/weather-app"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS. Features smooth scrolling, dark mode, and contact form.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: import.meta.env.VITE_PROJECT_IMAGE_4,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Noughts-Crosses-2.0",
    description: "If you want to create a Noughts and Crosses (Tic-Tac-Toe) game using only JavaScript, you can do so with HTML, CSS, and vanilla JavaScript (no frameworks like React). Below is a simple implementation",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: import.meta.env.VITE_PROJECT_IMAGE_5,
    liveUrl: "https://noughts-crosses-2-0.vercel.app/",
    githubUrl: "https://github.com/sachin78995/Noughts-Crosses-2.0"
  },
];


const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects");
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

  return (
    <section id="projects" className="section-spacing">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'reveal active' : 'reveal'}`}>
          <Badge variant="outline" className="mb-4">Projects</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Recent Work</h2>
          <p className="text-lg text-muted-foreground">
            Here are some of the projects I've worked on recently. Each project represents different
            skills and challenges I've tackled.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover-scale border-border backdrop-blur-sm bg-background/50 ${
                isVisible ? `reveal active reveal-delay-${index % 4 + 1}` : 'reveal'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/40 flex items-center justify-center text-white text-xl font-bold"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  Project Image
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button asChild variant="outline" size="sm" className="flex items-center gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex items-center gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className={`text-center mt-12 ${isVisible ? 'reveal active reveal-delay-4' : 'reveal'}`}>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="https://github.com/sachin78995" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
