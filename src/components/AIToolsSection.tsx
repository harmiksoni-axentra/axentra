import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const itRoles = [
  "AI/ML Engineer", "Python Developer", "Full Stack Developer",
  "Data Scientist", "DevOps Engineer", "Cloud Architect",
  "Business Analyst", "Cybersecurity Analyst", "Data Engineer",
];

const nonItRoles = [
  "Healthcare Professional", "Financial Analyst", "Project Manager",
  "HR Specialist", "Supply Chain Manager", "Marketing Specialist",
  "Accounting & Finance", "Administrative Assistant", "Operations Manager",
];

const AIToolsSection = () => {
  return (
    <section id="ai-tools" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">IT & Non-IT Talent</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Roles we <span className="gradient-text">specialize in</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We train, mentor, and place top-tier talent across IT and non-IT roles
              in the most in-demand industries. Our candidates work at Fortune 500 companies.
            </p>
            <Button size="lg" className="gradient-primary text-primary-foreground glow-sm font-semibold">
              Schedule Meeting <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">IT Roles</h3>
              <div className="flex flex-wrap gap-3">
                {itRoles.map((role, i) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="glass rounded-xl px-5 py-3 text-sm font-medium hover:border-primary/40 transition-colors cursor-default"
                  >
                    {role}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Non-IT Roles</h3>
              <div className="flex flex-wrap gap-3">
                {nonItRoles.map((role, i) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="glass rounded-xl px-5 py-3 text-sm font-medium hover:border-primary/40 transition-colors cursor-default"
                  >
                    {role}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Client logos marquee */}
        <div className="mt-24">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-10">
            Where our talent is employed
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-16 px-8">
                  {["Amazon", "IBM", "JPMorgan", "Dell", "Infosys", "Capgemini", "MetLife", "CVS Health", "Merck", "Morgan Stanley"].map((name) => (
                    <span key={`${setIdx}-${name}`} className="text-muted-foreground/40 font-display font-bold text-xl whitespace-nowrap">
                      {name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
