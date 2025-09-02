import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="flex items-center gap-2 text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
  @dvskullz
  <img 
    src="/1.png" 
    alt="Logo" 
    className="h-15 w-20 object-contain" 
  />
</h3>



            <p className="text-muted-foreground">
              Even monkeys fall from trees.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/dvskullz" target="_blank" rel="noopener noreferrer">
  <Button
    variant="ghost"
    size="icon"
    className="rounded-full hover:bg-primary/10 hover:shadow-glow transition-all duration-300 group"
  >
    <Github className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:text-primary" />
  </Button>
</a>
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

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}