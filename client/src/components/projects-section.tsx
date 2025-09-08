import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;  
  image: string;
  tags: string[];
  category: string;
  categoryColor: string;
  delay?: number;
  liveUrl?: string;
}

function ProjectCard({ title, description, image, tags, category, categoryColor,liveUrl, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="glass rounded-3xl overflow-hidden project-card"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className={`${categoryColor} px-3 py-1 rounded-full text-sm font-semibold`}>{category}</span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-gradient">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={tag} 
              className={`px-3 py-1 rounded-full text-xs ${
                index % 3 === 0 ? 'bg-primary/10 text-primary' :
                index % 3 === 1 ? 'bg-secondary/10 text-secondary' :
                'bg-accent/10 text-accent'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
           {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
          // <button 
            className={`flex-1 ${
              categoryColor.includes('primary') ? 'bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground' :
              categoryColor.includes('secondary') ? 'bg-secondary/20 hover:bg-secondary text-secondary hover:text-secondary-foreground' :
              'bg-accent/20 hover:bg-accent text-accent hover:text-accent-foreground'
            } rounded-xl py-3 px-4 transition-all duration-300 font-semibold`}
            data-testid={`button-view-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <i className="fas fa-eye mr-2"></i>View
            </a>
           )}
          {/* </button> */}
          {/* <button 
            className={`flex-1 border ${
              categoryColor.includes('primary') ? 'border-primary/30 hover:border-primary hover:bg-primary/10' :
              categoryColor.includes('secondary') ? 'border-secondary/30 hover:border-secondary hover:bg-secondary/10' :
              'border-accent/30 hover:border-accent hover:bg-accent/10'
            } rounded-xl py-3 px-4 transition-all duration-300 font-semibold`}
            data-testid={`button-code-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <i className="fab fa-github mr-2"></i>Code
          </button> */}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Restaurant POS System",
      description: "Comprehensive POS system with order-to-kitchen workflow, live status updates, inventory management, and role-based access control.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "MERN Stack",
      categoryColor: "bg-primary/20 text-primary",
      liveUrl: "https://pos.samyotech.in", 
    },
    {
      title: "Inventory Management",
      description: "Complete inventory solution with stock management, supplier tracking, purchase orders, sales analytics, and comprehensive reporting dashboard.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "Full Stack",
      categoryColor: "bg-secondary/20 text-secondary",
      liveUrl: "http://ims.samyotech.in",
    },
    {
      title: "AI Chatbot & Agent",
      description: "Intelligent chatbot with RAG implementation using LangChain and FAISS Vector DB, plus automated WhatsApp ordering system with n8n.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "LangChain", "RAG", "n8n"],
      category: "AI/ML",
      categoryColor: "bg-accent/20 text-accent"
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-mono font-black mb-6">
            <span className="text-gradient">PROJECTS</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
