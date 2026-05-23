import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Get in Touch",
    desc: "Call us or fill out the quote form. We&apos;ll discuss your move date, volume, and any special requirements.",
  },
  {
    num: "02",
    title: "Receive Your Quote",
    desc: "We provide a clear, transparent quote — no hidden fees. You know exactly what you&apos;re paying, upfront.",
  },
  {
    num: "03",
    title: "We Pack & Prepare",
    desc: "Our certified team arrives with all materials. We carefully pack and inventory everything for your move.",
  },
  {
    num: "04",
    title: "Swift Delivery",
    desc: "Your belongings are transported safely and delivered to your new location — right on time, every time.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-secondary py-32 relative overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80')` }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="text-sm font-black uppercase tracking-widest text-accent mb-4">How It Works</div>
          <h2 className="font-display text-5xl lg:text-7xl font-black text-white leading-tight">
            Your Move,<br />
            <span className="text-accent">Simplified.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%-1rem)] w-8 h-0.5 bg-white/10" />
              )}

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500">
                <div className="font-black text-6xl text-accent/30 leading-none mb-4 group-hover:text-accent/50 transition-colors duration-300">
                  {num}
                </div>
                <h3 className="font-display text-xl font-black text-white mb-3">{title}</h3>
                <p
                  className="text-white/55 text-sm font-medium leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-accent text-secondary font-black text-base px-10 py-5 rounded-full shadow-2xl hover:shadow-accent/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Start Your Move Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
