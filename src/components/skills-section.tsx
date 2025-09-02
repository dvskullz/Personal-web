import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java(Core)", level: 95 },
        { name: "Python", level: 85 },
        { name: "LaTeX", level: 80 },
      ]
    },
    {
      title: "DataBases", 
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 80 },
      ]
    },
    {
      title: "OS", 
      skills: [
        { name: "Linux(Arch)", level: 100 },
        { name: "Windows", level: 100 },
      ]
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git/GitHub", level: 95 },
      ]
    },
    {
      title: "Other Interests", 
      skills: [
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "CLI", level: 80 },
        { name :" Data Science", level:75},
        { name :" AI/ML", level:85}
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="hover:shadow-glow transition-all duration-500 border-border/50 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{
                        animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}