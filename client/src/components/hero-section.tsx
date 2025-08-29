import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        // Reset after a pause
        setTimeout(() => {
          i = 0;
        }, 2000);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/resume/download');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Shubham_Gehlod_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Futuristic coding workspace" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-9xl font-mono font-black mb-6">
              <span className="text-gradient">SHUBHAM</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8">
              <span className="text-gradient">GEHLOD</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="text-xl md:text-3xl font-light mb-8 typewriter">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting innovative web solutions with the MERN stack, turning complex problems into elegant digital experiences
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button 
              onClick={handleDownloadResume}
              className="glass-strong neon-border rounded-full px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 hover:animate-glow"
              data-testid="button-download-resume"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </button>
            <button 
              onClick={scrollToContact}
              className="glass rounded-full px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 border border-primary hover:bg-primary hover:text-primary-foreground"
              data-testid="button-contact"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-2 border-primary rotate-45 opacity-30"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-16 h-16 border-2 border-secondary rounded-full opacity-40"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-12 h-12 bg-accent rotate-45 opacity-20"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
}
