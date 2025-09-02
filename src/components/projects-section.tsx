import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "CoreChain - Java BlockChain",
      description: "Implemented a basic blockchain in Java demonstrating block structure, proof of work, hashing, and validation. Highlights understanding of distributed systems & cryptography.",
      technologies: ["Java", "Git", "IntelliJ IDEA"],
      github: "https://github.com/dvskullz/CoreChain",
      featured: false
    },
    {
      title: "Blackjack Game",
      description: "Built a console-based Blackjack game applied Object-Oriented Programming (OOP) principles such as encapsulation, inheritance, and polymorphism to structure game entities.",
      technologies: ["Java"],
      github: "https://github.com/dvskullz/Card-Game",
      featured: false
    },
    {
      title: "Pen-Testing SickOS 1.2",
      description: "Performed penetration testing on a vulnerable VM to escalate privileges and capture the root flag.",
      technologies: ["Bash", "Shell", "Python3", "nmap", "netcat", "Metasploit", "dirb"],
      github: "https://github.com/dvskullz/Pen-Testing-SickOs-1.2",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern design principles with smooth animations and interactive elements.",
      technologies: ["React", "Framer Motion", "Tailwind", "Vite"],
      github: "https://github.com/dvskullz/web-portfolio",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing different technologies and approaches to problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/20 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                      {project.featured && (
                        <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary border-primary/20">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group/btn"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
