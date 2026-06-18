import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@axentra.com" },
  { icon: Phone, label: "Phone", value: "123456789" },
  { icon: Clock, label: "Business Hours", value: "Mon - Fri: 9:00 AM - 5:00 PM EST" },
  { icon: MapPin, label: "Location", value: "Sheridan, WY, USA" },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to transform your career? Let's discuss how our services can help you achieve your professional goals. We're here to support you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h2 className="text-2xl font-display font-bold mb-6">Send us a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <Input placeholder="Your full name" className="bg-muted/50 border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <Input placeholder="your.email@example.com" type="email" className="bg-muted/50 border-border" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                    <Input placeholder="+1 (555) 123-4567" className="bg-muted/50 border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Service Interest</label>
                    <select className="flex h-10 w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Select a service</option>
                      <option>Resume Crafting</option>
                      <option>Resume Understanding Sessions</option>
                      <option>Interview Scheduling</option>
                      <option>Technical Training</option>
                      <option>Interview Counselling</option>
                      <option>Compliance Onboarding</option>
                      <option>Offer Negotiation</option>
                      <option>Career Pathing</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us about your career goals and how we can help..."
                    rows={5}
                    className="bg-muted/50 border-border"
                  />
                </div>
                <Button className="gradient-primary text-primary-foreground glow-sm font-semibold w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Contact Info */}
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{item.label}</div>
                        <div className="text-sm text-muted-foreground mt-0.5">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="glass rounded-2xl p-6 text-center">
                <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-display font-bold text-lg">Quick Response Promise</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  We respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
              </div>

              {/* Have Questions */}
              <div className="glass rounded-2xl p-6 text-center border border-accent/20">
                <HelpCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-display font-bold text-lg">Have Questions?</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  Check out our frequently asked questions or schedule a free consultation.
                </p>
                <Button variant="outline" className="border-primary/30 hover:bg-primary/10 hover:text-primary">
                  Schedule Free Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Our Office */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Visit Our <span className="gradient-text">Office</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Located in Sheridan, Wyoming, we're available for in-person consultations.
            </p>
            <div className="glass rounded-2xl p-12 max-w-3xl mx-auto flex flex-col items-center justify-center">
              <MapPin className="w-12 h-12 text-primary mb-3" />
              <h3 className="font-display font-bold text-lg">Our Location</h3>
              <p className="text-sm text-muted-foreground mt-1">
                30 N Gould St, Ste 4000, Sheridan, WY 82801, USA
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
