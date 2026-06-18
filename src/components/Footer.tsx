import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Axentra" className="h-20 w-20 object-contain" />
              <span className="font-display font-bold text-4xl">Axentra</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for IT & non-IT staffing, consulting, and career services.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "AI Tools", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(/\s/g, "-")}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              {["IT Staffing", "Non-IT Staffing", "Career Services", "Training & Upskilling", "Executive Placement"].map((s) => (
                <span key={s} className="block text-sm text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024–2026 Axentra. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
