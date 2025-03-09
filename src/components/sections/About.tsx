
import { useState, useEffect } from "react";
import { Code, Layout, Server, Sparkles, Database, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  // Frontend Skills
  "JavaScript", "TypeScript", "React", "Next.js", 
  "Tailwind CSS", 
  // Backend Skills
  "Node.js", "Express", "MongoDB", 
  
  // Tools & Others
  "Git", "GitHub", 

  "java prl", "c++","c programming ","DSA"
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
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

  const services = [
    {
      icon: <Layout className="h-6 w-6 text-primary" />,
      title: "Web Development",
      description: "I build responsive, modern websites that offer great user experiences."
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Frontend Development",
      description: "I specialize in React.js to create interactive and dynamic user interfaces."
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Backend Development",
      description: "I build robust server-side applications with Node.js and Express."
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Database Design",
      description: "I create efficient database schemas and integrate with MongoDB and PostgreSQL."
    },
    {
      icon: <Terminal className="h-6 w-6 text-primary" />,
      title: "API Development",
      description: "I design and implement RESTful and GraphQL APIs for seamless integration."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "UI/UX Design",
      description: "I create intuitive designs that enhance the user experience."
    }
  ];

  return (
    <section id="about" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'reveal active' : 'reveal'}`}>
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">I'm Sachin Sankole</h2>
          <p className="text-lg text-muted-foreground">
            I'm a passionate full-stack developer in both frontend and backend technologies.
            With a keen eye for design and a commitment to creating efficient, scalable applications,
            I love turning complex problems into elegant solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'reveal active reveal-delay-1' : 'reveal'}`}>
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground">
              With over 1 years of experience in full-stack web development, I've worked on a variety of projects 
              ranging from small business websites to complex enterprise-level web applications and 
              microservices architectures.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about staying up-to-date with the latest technologies and best practices in 
              web development. My approach combines clean code principles with pragmatic solutions to 
              deliver high-performance applications.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isVisible ? 'reveal active reveal-delay-2' : 'reveal'}`}>
            {services.map((service, index) => (
              <Card key={index} className="hover-scale backdrop-blur-sm bg-background/50 border-border">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
