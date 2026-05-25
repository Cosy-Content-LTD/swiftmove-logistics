import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Coverage", href: "#coverage" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-black text-lg leading-none">S</span>
            </div>
            <div>
              <span className="font-black text-xl text-white tracking-tight">Swift</span>
              <span className="font-black text-xl text-primary tracking-tight">Move</span>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 leading-none mt-0.5">Logistics</div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-widest transition-colors duration-300 relative group text-white hover:text-primary"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0234567891"
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors duration-300"
            >
              <Phone size={16} className="text-primary" />
              0234567891
            </a>
            <a
              href="#contact"
              className="bg-primary text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl text-white hover:text-primary transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-background/98 backdrop-blur-md shadow-2xl border-b border-white/10 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-bold uppercase tracking-widest text-white hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <a
                  href="tel:0234567891"
                  className="flex items-center gap-3 text-white font-bold"
                >
                  <Phone size={18} className="text-primary" />
                  0234567891
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="bg-primary text-white font-bold text-sm px-6 py-4 rounded-full text-center shadow-lg"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
