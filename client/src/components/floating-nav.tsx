import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      // ✅ Highlight active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      // ✅ Show nav only after scrolling 50px
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
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
    <div className="w-full flex justify-center">
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: showNav ? 1 : 0,
          y: showNav ? 0 : -50,
        }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 flex items-center translate-x-1/2 z-50 floating-nav rounded-full px-8 py-4 w-auto justify-center"
      >
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-primary"
                  : "hover:text-primary"
              }`}
              data-testid={`nav-${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}
