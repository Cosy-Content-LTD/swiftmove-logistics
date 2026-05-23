import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    moveFrom: "",
    moveTo: "",
    moveDate: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="bg-warm-bg py-32 relative overflow-hidden">
      {/* Oversized numeral */}
      <div className="absolute right-0 top-0 text-[20vw] font-black text-secondary/[0.05] leading-none select-none pointer-events-none">
        05
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="text-sm font-black uppercase tracking-widest text-primary mb-4">Get In Touch</div>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-heading leading-tight mb-6">
              Ready to
              <br />
              <span className="text-primary">Move?</span>
            </h2>
            <p className="text-lg text-foreground/65 font-medium leading-relaxed mb-10">
              Get your free, no-obligation quote today. Our friendly team is ready to make your move as smooth and stress-free as possible.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="tel:0234567891"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-foreground/50 mb-0.5">Call Us</div>
                  <div className="font-black text-xl text-heading group-hover:text-primary transition-colors duration-300">0234567891</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-section-alt border border-border/40 flex items-center justify-center">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-foreground/50 mb-0.5">Our Office</div>
                  <div className="font-bold text-sm text-heading leading-relaxed">
                    8, St James&apos;s Square<br />
                    Westminster, SW1Y 4JU
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-section-alt border border-border/40 flex items-center justify-center">
                  <Mail size={22} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-foreground/50 mb-0.5">Email</div>
                  <div className="font-bold text-sm text-heading">info@swiftmovelogistics.co.uk</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-[2rem] shadow-2xl border border-border/30 p-8 sm:p-10"
            >
              <h3 className="font-display text-2xl font-black text-heading mb-8">Free Quote Request</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/50">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="border border-border/60 rounded-xl px-4 py-3.5 text-sm font-medium text-heading bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/50">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                    className="border border-border/60 rounded-xl px-4 py-3.5 text-sm font-medium text-heading bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/50">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="border border-border/60 rounded-xl px-4 py-3.5 text-sm font-medium text-heading bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/50">Move Date</label>
                  <input
                    type="date"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleChange}
                    className="border border-border/60 rounded-xl px-4 py-3.5 text-sm font-medium text-heading bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/50">Moving From *</label>
                  <input
                    type="text"
                    name="moveFrom"
                    value={formData.moveFrom}
                    onChange={handleChange}
                    required
                    placeholder="Current address"
                    className="border border-border/60 rounded-xl px-4 py-3.5 text-sm font-medium text-heading bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/50">Moving To *</label>
                  <input
                    type="text"
                    name="moveTo"
                    value={formData.moveTo}
                    onChange={handleChange}
                    required
                    placeholder="Destination address"
                    className="border border-border/60 rounded-xl px-4 py-3.5 text-sm font-medium text-heading bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/50">Additional Notes</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your move — property type, floors, special items..."
                    className="border border-border/60 rounded-xl px-4 py-3.5 text-sm font-medium text-heading bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full flex items-center justify-center gap-3 bg-primary text-white font-black text-base py-5 rounded-2xl shadow-xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Send size={18} />
                Request My Free Quote
                <ArrowRight size={18} />
              </button>

              <p className="text-xs text-foreground/40 font-medium text-center mt-4">
                No obligation. We typically respond within 2 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
