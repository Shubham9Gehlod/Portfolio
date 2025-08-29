import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

function SkillBar({ skill, percentage, delay = 0 }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setWidth(percentage);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [percentage, delay, isVisible]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{skill}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div 
          className="skill-progress" 
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const frontendSkills = [
    { name: "React.js", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "Material UI", percentage: 80 },
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 88 },
    { name: "Express.js", percentage: 85 },
    { name: "MongoDB", percentage: 82 },
    { name: "REST APIs", percentage: 90 },
  ];

  const toolsSkills = [
    { name: "Git & GitHub", percentage: 85 },
    { name: "Docker", percentage: 75 },
    { name: "RAG & LangChain", percentage: 78 },
    { name: "n8n Automation", percentage: 80 },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-mono font-black mb-6">
            <span className="text-gradient">SKILLS</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 card-3d"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow">
                <i className="fab fa-react text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gradient">Frontend</h3>
            </div>
            
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  delay={index * 200}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 card-3d"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow delay-200">
                <i className="fab fa-node-js text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gradient">Backend</h3>
            </div>
            
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  delay={index * 200}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 card-3d"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow delay-400">
                <i className="fas fa-tools text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gradient">Tools & AI</h3>
            </div>
            
            <div className="space-y-6">
              {toolsSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  delay={index * 200}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
