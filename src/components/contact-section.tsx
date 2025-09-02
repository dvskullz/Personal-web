import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin,Download, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground text-center">
                  sharmadaksh275@gmail.com
                </p>
              </CardContent>
            </Card>
  {/* Resume Download */}
  <Card className="hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/20">
    <CardContent className="p-6 text-center">
      <Download className="h-8 w-8 mx-auto text-primary mb-4" /> 
      <h3 className="font-semibold mb-2">Resume</h3>
      <a
        href="/resume.pdf"
        download
        className="text-sm text-muted-foreground hover:text-primary transition"
      >
        Download 
      </a>
    </CardContent>
  </Card>
            <Card className="hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">India</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/20">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Mailto form */}
                <form
                  action="mailto:sharmadaksh275@gmail.com"
                  method="POST"
                  encType="text/plain"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
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
                      placeholder="Project discussion"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
