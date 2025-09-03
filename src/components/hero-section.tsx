import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hr" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4 animate-fade-in">
          <Badge
            variant="outline"
            className="text-sm font-mono border-primary/30 bg-primary/5"
          >
            Software Developer
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Hi! I'm Daksh
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
            Building digital experiences with{" "}
            <span className="text-accent-cyan font-semibold">modern tech</span>
          </h2>
        </div>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}

        >Creating cutting-edge technologies with cutting-edge passion because to create is to endure burning.
        </p>

          {/* I enjoy working in minimal environments, experimenting with new
          tools, and constantly learning.  */}

        {/* Action Buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Get In Touch */}
          <a href="mailto:sharmadaksh275@gmail.com">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
          </a>

          {/* Download CV */}
          <a href="/resume.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          {/* GitHub */}
        <a href="https://github.com/dvskullz" target="_blank" rel="noopener noreferrer">
  <Button
    variant="ghost"
    size="icon"
    className="rounded-full hover:bg-primary/10 hover:shadow-glow transition-all duration-300 group"
  >
    <Github className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:text-primary" />
  </Button>
</a>

          {/* LinkedIn */}
       <a href="https://linkedin.com/in/dakshsharma275" target="_blank" rel="noopener noreferrer">
  <Button
    variant="ghost"
    size="icon"
    className="rounded-full hover:bg-primary/10 hover:shadow-glow transition-all duration-300 group"
  >
    <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:text-primary" />
  </Button>
</a>
        </div>
      </div>
    </section>
  )
}
