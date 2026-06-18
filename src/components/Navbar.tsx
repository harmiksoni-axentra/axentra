import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "AI Tools", href: "/#ai-tools" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(href.slice(2))?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(href.slice(2))?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass-strong rounded-2xl px-6 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Axentra" className="h-20 w-20 object-contain" />
          <span className="font-display font-bold text-4xl text-foreground">Axentra</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="gradient-primary text-primary-foreground glow-sm font-semibold px-6">
            Get a Quote
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong rounded-2xl mt-2 p-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <Button className="gradient-primary text-primary-foreground glow-sm font-semibold w-full mt-2">
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
