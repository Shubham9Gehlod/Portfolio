import { motion } from "framer-motion";

export default function ExperienceSection() {
  const achievements = [
    "Built and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js)",
    "Designed and implemented responsive user interfaces in React, ensuring cross-platform compatibility", 
    "Integrated REST APIs with secure authentication and authorization mechanisms",
    "Developed and optimized database schemas, backend logic, and deployed applications to cloud platforms",
    "Collaborated in debugging, performance tuning, and improving application scalability"
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-mono font-black mb-6">
            <span className="text-gradient">EXPERIENCE</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            
            {/* Experience Item */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative pl-16 pb-16"
            >
              <div className="timeline-item relative">
                <div className="glass rounded-3xl p-8 card-3d">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gradient mb-2">Full Stack Developer</h3>
                      <h4 className="text-xl font-semibold text-primary mb-4">Samyotech Software Solutions Pvt. Ltd.</h4>
                    </div>
                    <div className="glass-strong rounded-2xl px-6 py-3">
                      <span className="text-sm font-semibold text-gradient">Aug 2022 - Present</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                          index % 3 === 0 ? 'bg-primary' :
                          index % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                        }`}></div>
                        <p>{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mt-6"
                  >
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">MERN Stack</span>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">REST APIs</span>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">Cloud Deployment</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Performance Optimization</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
