import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alamin@example.com",
      href: "mailto:alamin@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 XXX XXX XXXX",
      href: "tel:+234XXXXXXXXX",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="p-6 hover-lift cursor-pointer"
              onClick={() => window.open(info.href)}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 gradient-hero rounded-lg">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-semibold">{info.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 slide-up">
          <h3 className="text-2xl font-bold mb-6 text-center">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                onClick={() => window.open(social.href, "_blank")}
                className={`transition-colors ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Let's discuss your next project
            </p>
            <Button
              size="lg"
              className="gradient-hero hover:opacity-90 transition-opacity"
              onClick={() => window.open("mailto:alamin@example.com")}
            >
              Send Email
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
