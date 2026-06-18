import { motion } from "framer-motion";
import { Star, Monitor, Briefcase, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "Jobin David",
    role: "Python Developer at TechCorp",
    text: "Axentra transformed my career completely. Their resume optimization and interview coaching helped me land my dream job at a Fortune 500 company. The personalized approach and attention to detail were exceptional.",
    result: "Landed Senior Python Developer role with 40% salary increase",
  },
  {
    name: "Tahira Singh",
    role: "Quality Analyst at QualityFirst",
    text: "The career guidance and networking support I received was invaluable. They didn't just help me with my resume — they helped me understand my career path and connect with the right opportunities.",
    result: "Secured Senior QA Lead position at leading startup",
  },
  {
    name: "Denis Christian",
    role: "Data Analyst at DataFlow Inc",
    text: "I was struggling to transition from academia to industry. Axentra's technical training and interview preparation gave me the confidence and skills I needed to succeed in the corporate world.",
    result: "Successfully transitioned to Senior Data Analyst role",
  },
  {
    name: "Rutul Shah",
    role: "Full Stack Developer at InnovateTech",
    text: "The offer negotiation support was game-changing. They helped me understand my worth and negotiate a package that exceeded my expectations. The entire process was professional and results-driven.",
    result: "Negotiated 35% higher compensation package",
  },
  {
    name: "Gautam Patil",
    role: "Business Analyst at GrowthCo",
    text: "As a professional looking to pivot, I needed help translating my skills into the right language. Axentra helped me craft a compelling narrative that showcased my value to potential employers.",
    result: "Landed Lead Business Analyst role at top consulting firm",
  },
  {
    name: "Jyoti Singh",
    role: "Software Developer at SalesPro",
    text: "The comprehensive career services exceeded my expectations. From resume crafting to long-term career planning, they provided the support I needed at every stage of my career transition.",
    result: "Achieved Senior Developer position with equity package",
  },
];

const stats = [
  {
    icon: Monitor,
    title: "Tech Industry Transition",
    description: "Helped 50+ professionals transition from non-tech to tech roles",
    stat: "85% Success Rate",
  },
  {
    icon: Briefcase,
    title: "Executive Placements",
    description: "Successfully placed 25+ executives in senior-level positions",
    stat: "Average 50% Salary Increase",
  },
  {
    icon: RefreshCw,
    title: "Career Pivots",
    description: "Supported 100+ professionals in complete career changes",
    stat: "90% Client Satisfaction",
  },
];

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Client <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from professionals who have transformed their careers with our comprehensive services and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-primary/20 transition-colors flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                  "{t.text}"
                </p>
                <div className="bg-primary/10 rounded-lg px-3 py-2 mb-5">
                  <p className="text-sm text-primary font-medium">Result: {t.result}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Our <span className="gradient-text">Track Record</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Proven results across various industries and career levels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-5">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                <span className="text-primary font-bold text-lg">{s.stat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Write Your <span className="gradient-text">Success Story</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join hundreds of professionals who have transformed their careers with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/contact")}
                className="gradient-primary text-primary-foreground glow-sm font-semibold px-8 py-6 text-base"
              >
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/services")}
                className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-base"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
