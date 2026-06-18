import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">IT & Non-IT Staffing & Consulting Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Your trusted partner for{" "}
            <span className="gradient-text">IT & Non-IT</span> staffing solutions
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Axentra connects top talent with leading organizations across technology, healthcare,
            finance, engineering, and more — empowering careers and driving business success.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gradient-primary text-primary-foreground glow-sm font-semibold px-8 text-base">
              Book a Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted font-semibold px-8 text-base">
              Our Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { num: "500+", label: "Placements Made" },
            { num: "100+", label: "Enterprise Clients" },
            { num: "99%", label: "Client Satisfaction" },
            { num: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-5 text-center">
              <div className="text-2xl font-display font-bold gradient-text">{stat.num}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
