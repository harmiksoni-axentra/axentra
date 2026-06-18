import { motion } from "framer-motion";
import { FileText, Lightbulb, TrendingUp, Settings, Target, CheckSquare, Handshake, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: FileText,
    title: "Resume Crafting",
    desc: "Professional resume creation tailored to your industry and career goals. We craft compelling resumes that highlight your achievements and stand out to recruiters.",
    features: ["ATS Optimization", "Industry-Specific Formatting", "Achievement Quantification", "Professional Templates"],
  },
  {
    icon: Lightbulb,
    title: "Resume Understanding Sessions",
    desc: "One-on-one sessions to help you understand your resume strengths and areas for improvement. Learn how to effectively present your experience.",
    features: ["Personalized Feedback", "Skill Gap Analysis", "Career Alignment Review", "Interview Preparation"],
  },
  {
    icon: TrendingUp,
    title: "Resume Marketing & Interview Scheduling",
    desc: "Strategic resume distribution and interview coordination. We help you get your resume in front of the right people and manage your interview pipeline.",
    features: ["Targeted Job Applications", "Recruiter Network Access", "Interview Coordination", "Follow-up Management"],
  },
  {
    icon: Settings,
    title: "Technical Training & Guidance",
    desc: "Comprehensive technical skill development and industry-specific training to enhance your marketability and career prospects.",
    features: ["Industry Certifications", "Technical Skill Assessment", "Hands-on Training", "Mentorship Programs"],
  },
  {
    icon: Target,
    title: "Interview Counselling",
    desc: "Expert interview preparation and coaching to boost your confidence and performance. Practice with mock interviews and receive detailed feedback.",
    features: ["Mock Interview Sessions", "Behavioral Question Prep", "Technical Interview Training", "Confidence Building"],
  },
  {
    icon: CheckSquare,
    title: "Compliance Onboarding & Background Checks",
    desc: "Complete support through the onboarding process, including background check assistance and compliance documentation.",
    features: ["Document Verification", "Background Check Support", "Compliance Guidance", "Onboarding Assistance"],
  },
  {
    icon: Handshake,
    title: "Offer Negotiation & Acceptance",
    desc: "Strategic negotiation support to help you secure the best possible offer. We guide you through the entire negotiation process.",
    features: ["Salary Negotiation", "Benefits Analysis", "Contract Review", "Acceptance Strategy"],
  },
  {
    icon: Rocket,
    title: "Career Pathing & Long-term Growth",
    desc: "Long-term career planning and development strategies to ensure sustained professional growth and advancement.",
    features: ["Career Roadmapping", "Skill Development Planning", "Leadership Training", "Growth Strategy"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive career services designed to support you at every stage of your professional journey. From resume creation to long-term career planning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-8 hover:border-primary/30 transition-all group hover:-translate-y-1 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                  <ul className="space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 hover:text-primary"
                    onClick={() => window.location.href = "/contact"}
                  >
                    Learn More
                  </Button>
                </div>
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
            className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how our services can help you achieve your career goals.
            </p>
            <Button
              className="gradient-primary text-primary-foreground glow-sm font-semibold px-8 py-3 text-base"
              onClick={() => window.location.href = "/#contact"}
            >
              Book a Session
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
