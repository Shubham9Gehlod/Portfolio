import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import FloatingNav from "@/components/floating-nav";
import ScrollIndicator from "@/components/scroll-indicator";
import FloatingParticles from "@/components/floating-particles";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const elementId = target.href.split('#')[1];
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <ScrollIndicator />
      <FloatingParticles />
      <FloatingNav />
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl font-mono font-bold mb-4">
              <span className="text-gradient">SHUBHAM GEHLOD</span>
            </h3>
            <p className="text-muted-foreground mb-8">Full Stack Developer | MERN Stack Specialist</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="link-linkedin">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="link-github">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="link-twitter">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="link-instagram">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>&copy; 2024 Shubham Gehlod. All rights reserved.</p>
              <p className="mt-2">Crafted with ❤️ and cutting-edge web technologies</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
