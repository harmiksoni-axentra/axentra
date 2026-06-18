import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jobin David",
    role: "Python Developer",
    text: "Axentra was incredibly attentive and a massive help every step of the way. I received my first offer very quickly and from there many more followed.",
  },
  {
    name: "Tahira Singh",
    role: "Quality Analyst",
    text: "A great organization to work with. The service was very professional and punctual in terms of communication and meetings. Highly recommended!",
  },
  {
    name: "Denis Christian",
    role: "Data Analyst",
    text: "Had a wonderful experience working with Axentra. They explained their process very clearly and were organized and patient throughout.",
  },
  {
    name: "Rutul Shah",
    role: "Full Stack Developer",
    text: "From the moment I reached out, I was impressed by their professionalism and dedication to finding the right fit for me. Truly outstanding.",
  },
  {
    name: "Gautam Patil",
    role: "Business Analyst",
    text: "I tried many platforms but Axentra made it possible. I would definitely suggest them whether you are a fresher or experienced professional.",
  },
  {
    name: "Jyoti Singh",
    role: "Software Developer",
    text: "Highly recommend Axentra — well worth it. The team was very cooperative and always available whenever I needed help, even after working hours.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Success Stories from <span className="gradient-text">Our Clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/20 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
