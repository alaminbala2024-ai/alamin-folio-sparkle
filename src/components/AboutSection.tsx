import { Code, Database, Palette, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    { name: "HTML5", icon: Code, color: "text-orange-500" },
    { name: "CSS3", icon: Palette, color: "text-blue-500" },
    { name: "JavaScript", icon: Terminal, color: "text-yellow-500" },
    { name: "Python", icon: Code, color: "text-green-500" },
    { name: "React", icon: Code, color: "text-cyan-500" },
    { name: "TypeScript", icon: Terminal, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: Palette, color: "text-teal-500" },
    { name: "Node.js", icon: Database, color: "text-green-600" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating
            seamless user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 slide-up">
            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a web developer with a passion for creating beautiful, functional,
                and user-friendly websites. With expertise in modern web technologies,
                I transform ideas into reality through clean code and creative design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines technical excellence with aesthetic sensibility,
                ensuring every project not only works flawlessly but also looks
                stunning. I'm constantly learning and adapting to new technologies
                to deliver the best solutions for my clients.
              </p>
            </Card>
          </div>

          <div className="slide-up">
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="p-6 hover-lift cursor-pointer group"
                >
                  <skill.icon className={`w-8 h-8 mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                  <p className="font-semibold">{skill.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
