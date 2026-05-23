import { motion } from "framer-motion";
import { Home, Building2, PackageOpen, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Removals",
    desc: "Full-service home moves with careful packing, loading, and delivery. From studio flats to large family homes across London.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Building2,
    title: "Office Relocations",
    desc: "Minimal downtime, maximum efficiency. We handle your office move with precision so you&apos;re back to business fast.",
    accent: "bg-accent/20 text-secondary",
  },
  {
    icon: PackageOpen,
    title: "Packing Services",
    desc: "Professional packing with premium materials. Fragile items, valuables, and bulky furniture — all handled with care.",
    accent: "bg-secondary/10 text-secondary",
  },
  {
    icon: Truck,
    title: "Man & Van",
    desc: "Flexible, affordable van hire with experienced movers. Perfect for smaller loads, single items, or last-minute moves.",
    accent: "bg-primary/10 text-primary",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-32 relative overflow-hidden">
      {/* Oversized numeral */}
      <div className="absolute left-0 top-0 text-[20vw] font-black text-primary/[0.04] leading-none select-none pointer-events-none">
        02
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-sm font-black uppercase tracking-widest text-primary mb-4">What We Do</div>
            <h2 className="font-display text-5xl lg:text-7xl font-black text-heading leading-tight">
              Expert<br />
              <span className="text-primary">Removal</span><br />
              Services
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:pb-4"
          >
            <p className="text-lg text-foreground/70 font-medium leading-relaxed">
              SwiftMove delivers comprehensive removal solutions across Greater London. Every service is backed by our fully insured, certified team — protecting your possessions from start to finish.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 text-primary font-bold text-base group"
            >
              Book a Service
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, desc, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-background border border-border/40 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl ${accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={26} />
              </div>
              <h3 className="font-display text-2xl font-black text-heading mb-3">{title}</h3>
              <p className="text-foreground/65 font-medium leading-relaxed">{desc}</p>
              <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all duration-300">
                Learn more <ArrowRight size={15} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-[2rem] overflow-hidden relative h-72 sm:h-96"
        >
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
            alt="SwiftMove professional team ready for your removal"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent" />
          <div className="absolute inset-0 flex items-center px-12">
            <div>
              <div className="text-white/70 font-bold uppercase tracking-widest text-sm mb-3">Certified & Insured</div>
              <div className="font-display text-3xl sm:text-4xl font-black text-white mb-6">Ready when you are.</div>
              <a
                href="tel:0234567891"
                className="inline-flex items-center gap-2 bg-accent text-secondary font-black text-sm px-7 py-4 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Call 0234567891
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
