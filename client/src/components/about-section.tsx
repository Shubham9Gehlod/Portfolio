import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-mono font-black mb-6">
            <span className="text-gradient">ABOUT ME</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8 card-3d">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Clean minimal coding setup" 
                className="rounded-2xl w-full h-64 object-cover mb-6" 
              />
              <h3 className="text-2xl font-bold mb-4 text-gradient">Passionate Developer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated Full Stack Developer with expertise in the MERN stack, passionate about creating innovative web solutions that solve real-world problems.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8 card-3d">
              <h3 className="text-3xl font-bold mb-6 text-gradient">Journey</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-primary rounded-full animate-glow"></div>
                  <div>
                    <h4 className="font-semibold">Master of Engineering</h4>
                    <p className="text-muted-foreground">BM College of Technology, RGPV University (8.5 CGPA)</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-secondary rounded-full animate-glow delay-200"></div>
                  <div>
                    <h4 className="font-semibold">Bachelor of Engineering</h4>
                    <p className="text-muted-foreground">Medicaps Institute, RGPV University (7.6 CGPA)</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-accent rounded-full animate-glow delay-400"></div>
                  <div>
                    <h4 className="font-semibold">Current Role</h4>
                    <p className="text-muted-foreground">Full Stack Developer at Samyotech Software Solutions</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 card-3d"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">Location & Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span>Indore, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-primary"></i>
                  <span>+91 8770798010</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-primary"></i>
                  <span>shubhamgehlod1221@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
