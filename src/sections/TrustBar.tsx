import { motion } from "framer-motion";
import { Shield, Award, Users, MapPin, Star } from "lucide-react";

const stats = [
  { icon: Shield, value: "Fully", suffix: "Insured", label: "Every move protected" },
  { icon: Award, value: "10+", suffix: "Years", label: "Industry experience" },
  { icon: Users, value: "500+", suffix: "Moves", label: "Successfully completed" },
  { icon: Star, value: "5★", suffix: "Rated", label: "Certified professionals" },
  { icon: MapPin, value: "London", suffix: "Wide", label: "Greater London coverage" },
];

export default function TrustBar() {
  return (
    <section className="bg-background py-12 border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <Icon size={22} className="text-primary" />
              </div>
              <div className="font-black text-2xl text-heading leading-none">
                {value} <span className="text-primary">{suffix}</span>
              </div>
              <div className="text-xs font-medium text-foreground/50 mt-1 uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
