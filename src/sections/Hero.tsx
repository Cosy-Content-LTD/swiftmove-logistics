import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/80 to-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />

      {/* Decorative oversized numeral */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[40vw] font-black text-white/[0.03] leading-none select-none pointer-events-none pr-0">
        01
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-40 pt-48">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-5 py-2 mb-8"
          >
            <span className="text-accent text-xs font-black uppercase tracking-widest">London&apos;s Premier Removals</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.0] tracking-tight mb-8"
          >
            Move With
            <br />
            <span className="text-accent">Confidence.</span>
            <br />
            Move Swift.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-white/75 font-medium leading-relaxed max-w-xl mb-12"
          >
            Fully insured, certified professionals serving Westminster, Mayfair & Greater London. Over 10 years of trusted removals — your belongings, our priority.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-accent text-secondary font-black text-base px-8 py-5 rounded-full shadow-2xl hover:shadow-accent/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get Your Free Quote
              <ArrowRight size={20} />
            </a>
            <a
              href="tel:0234567891"
              className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white font-bold text-base px-8 py-5 rounded-full backdrop-blur-sm hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Call 0234567891
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Shield, label: "Fully Insured" },
              { icon: Clock, label: "10+ Years Experience" },
              { icon: Star, label: "Certified Professionals" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/70">
                <Icon size={16} className="text-accent" />
                <span className="text-sm font-bold uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
