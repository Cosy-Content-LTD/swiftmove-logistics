import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";

const areas = [
  "Westminster",
  "Mayfair",
  "St. James's",
  "City of London",
  "Chelsea",
  "Kensington",
  "Canary Wharf",
  "Shoreditch",
  "Islington",
  "Camden",
  "Hammersmith",
  "Greater London",
];

export default function Coverage() {
  return (
    <section id="coverage" className="bg-background py-32 relative overflow-hidden">
      {/* Oversized numeral */}
      <div className="absolute left-0 top-0 text-[20vw] font-black text-primary/[0.04] leading-none select-none pointer-events-none">
        04
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-sm font-black uppercase tracking-widest text-primary mb-4">Where We Operate</div>
            <h2 className="font-display text-4xl lg:text-6xl font-black text-heading leading-tight mb-6">
              Covering
              <br />
              <span className="text-primary">All of London</span>
            </h2>
            <p className="text-lg text-foreground/65 font-medium leading-relaxed mb-10">
              Based in St. James&apos;s Square, Westminster, SwiftMove operates across the whole of Greater London. Whether you&apos;re moving within Mayfair or across the city, we&apos;ve got you covered.
            </p>

            <div className="bg-section-alt rounded-3xl p-6 mb-8 border border-border/30">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <div className="font-black text-heading text-sm uppercase tracking-wider mb-1">Our Base</div>
                  <div className="text-foreground/70 font-medium text-sm leading-relaxed">
                    8, St James&apos;s Square, St. James&apos;s, Westminster,<br />
                    Mayfair, City of Westminster,<br />
                    Greater London, SW1Y 4JU
                  </div>
                </div>
              </div>
            </div>

            <a
              href="tel:0234567891"
              className="inline-flex items-center gap-3 bg-primary text-white font-black text-base px-8 py-5 rounded-full shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <MapPin size={18} />
              Check Your Area
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden aspect-square shadow-2xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80"
                  alt="Modern London office district served by SwiftMove"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {areas.map((area, i) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-2 bg-section-alt border border-border/30 rounded-2xl px-4 py-3"
                  >
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    <span className="text-xs font-bold text-heading">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
