import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 floating-nav rounded-full px-8 py-4"
    >
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-sm font-medium transition-colors duration-300 ${
              activeSection === item.id ? "text-primary" : "hover:text-primary"
            }`}
            data-testid={`nav-${item.id}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
