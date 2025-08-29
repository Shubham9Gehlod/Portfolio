import { motion } from "framer-motion";

export default function FloatingParticles() {
  const particles = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    size: i % 3 === 0 ? 'w-3 h-3' : i % 3 === 1 ? 'w-2 h-2' : 'w-1 h-1',
    left: `${10 + i * 10}%`,
    opacity: i % 3 === 0 ? 'opacity-80' : i % 3 === 1 ? 'opacity-60' : 'opacity-40',
    delay: i * 2,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`particle ${particle.size} ${particle.opacity}`}
          style={{ left: particle.left }}
          animate={{
            y: [window.innerHeight + 50, -50],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
