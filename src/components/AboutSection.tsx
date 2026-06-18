import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">About Us</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Who is <span className="gradient-text">Axentra</span>?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            We are a US-based staffing and consulting firm connecting top IT and non-IT
            talent with leading organizations to drive growth and success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To empower businesses with the right talent across IT and non-IT domains, driving efficiency, innovation, and sustainable growth.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "To be the leading staffing and consulting partner in the US, bridging the gap between exceptional talent and top organizations.",
            },
            {
              icon: Award,
              title: "Our Values",
              desc: "Innovation, integrity, and client-first thinking guide every project we deliver and every relationship we build.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
