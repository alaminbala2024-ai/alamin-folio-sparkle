import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Available for freelance work</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Alamin Isah Bala</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              A creative web developer passionate about crafting beautiful,
              modern digital experiences with clean code and elegant design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="gradient-hero hover:opacity-90 transition-opacity text-lg"
              >
                See My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-lg border-2"
              >
                Hire Me
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center slide-up">
            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Alamin Isah Bala"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
