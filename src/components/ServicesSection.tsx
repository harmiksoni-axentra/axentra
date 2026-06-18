import { motion } from "framer-motion";
import { Bot, Code, BarChart3, Shield, Cloud, Cpu, Users, Briefcase } from "lucide-react";

const services = [
  { icon: Code, title: "IT Staffing", desc: "Expert placement of software developers, data engineers, cloud architects, and cybersecurity professionals." },
  { icon: Cpu, title: "AI/ML Talent", desc: "Specialized recruitment of AI/ML engineers, data scientists, and automation experts for cutting-edge projects." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Skilled cloud architects and DevOps engineers for seamless infrastructure and deployment solutions." },
  { icon: Shield, title: "Cybersecurity", desc: "Top-tier security analysts and compliance specialists to protect your digital assets." },
  { icon: Users, title: "Non-IT Staffing", desc: "Qualified professionals for healthcare, finance, HR, operations, and administrative roles." },
  { icon: Briefcase, title: "Executive Placement", desc: "Senior-level recruitment for management, leadership, and C-suite positions across industries." },
  { icon: BarChart3, title: "Career Services", desc: "Resume crafting, interview coaching, and career development support for job seekers." },
  { icon: Bot, title: "Training & Upskilling", desc: "Technical and professional training programs to prepare candidates for in-demand roles." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Unleashing Innovation, <span className="gradient-text">Powering Progress</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all group hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
