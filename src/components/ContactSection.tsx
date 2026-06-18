import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: MapPin, label: "Visit Us", value: "30 N Gould St, Ste 4000, Sheridan, WY 82801, USA" },
              { icon: Mail, label: "Email Us", value: "info@axentra.com" },
              { icon: Phone, label: "Call Us", value: "123456789" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-medium mt-1">{item.value}</div>
                </div>
              </div>
            ))}

            <div className="glass rounded-xl p-5">
              <div className="text-sm text-muted-foreground mb-1">Opening Hours</div>
              <div className="font-medium">Monday to Friday: 9AM to 5PM EST</div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-muted/50 border-border" />
              <Input placeholder="Your Email" type="email" className="bg-muted/50 border-border" />
            </div>
            <Input placeholder="Subject" className="bg-muted/50 border-border" />
            <Textarea placeholder="Your Message" rows={5} className="bg-muted/50 border-border" />
            <Button className="gradient-primary text-primary-foreground glow-sm font-semibold w-full" size="lg">
              Send Message <Send className="ml-2 w-4 h-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
