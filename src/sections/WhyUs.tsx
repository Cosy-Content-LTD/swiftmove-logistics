import { motion } from "framer-motion";
import { CheckCircle2, ThumbsUp, Clock3, Lock } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Certified Professionals",
    desc: "Our team holds industry certifications and undergoes rigorous training to handle every type of move safely.",
  },
  {
    icon: Lock,
    title: "Fully Insured",
    desc: "Complete peace of mind — all moves are fully insured, covering your belongings from pick-up to delivery.",
  },
  {
    icon: Clock3,
    title: "Punctual & Reliable",
    desc: "We respect your schedule. SwiftMove arrives on time, every time — no delays, no excuses.",
  },
  {
    icon: ThumbsUp,
    title: "10+ Years of Trust",
    desc: "Over a decade serving London households and businesses. Our track record speaks for itself.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-section-alt py-32 relative overflow-hidden">
      {/* Oversized numeral */}
      <div className="absolute right-0 bottom-0 text-[20vw] font-black text-secondary/[0.05] leading-none select-none pointer-events-none">
        03
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative"
          >
            <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80"
                alt="SwiftMove professional office and logistics team"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-primary text-white rounded-3xl px-7 py-5 shadow-2xl"
            >
              <div className="font-black text-4xl leading-none">10+</div>
              <div className="font-bold text-sm text-white/80 mt-1 uppercase tracking-wider">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Content column */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-sm font-black uppercase tracking-widest text-primary mb-4">Why SwiftMove</div>
              <h2 className="font-display text-4xl lg:text-6xl font-black text-heading leading-tight mb-6">
                The Standard<br />
                <span className="text-primary">Others Aspire</span><br />
                To Match.
              </h2>
              <p className="text-lg text-foreground/65 font-medium leading-relaxed mb-12">
                In a crowded market of removal companies, SwiftMove sets itself apart through certified expertise, complete insurance coverage, and a decade-long record of satisfied London clients.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-black text-lg text-heading mb-1">{title}</div>
                    <div className="text-sm text-foreground/60 font-medium leading-relaxed">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
