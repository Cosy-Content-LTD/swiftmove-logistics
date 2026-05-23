import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-black text-xl">S</span>
              </div>
              <div>
                <div className="font-black text-2xl leading-none">
                  <span className="text-white">Swift</span>
                  <span className="text-accent">Move</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Logistics</div>
              </div>
            </div>
            <p className="text-white/55 font-medium leading-relaxed max-w-sm mb-8">
              London&apos;s trusted removal specialists. Fully insured, certified professionals delivering seamless moves across Greater London for over 10 years.
            </p>
            <a
              href="tel:0234567891"
              className="inline-flex items-center gap-3 bg-accent text-secondary font-black text-sm px-7 py-4 rounded-full hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Phone size={16} />
              0234567891
            </a>
          </div>

          {/* Services */}
          <div>
            <div className="font-black text-sm uppercase tracking-widest text-white/40 mb-6">Services</div>
            <ul className="flex flex-col gap-3">
              {[
                "Residential Removals",
                "Office Relocations",
                "Packing Services",
                "Man &amp; Van",
                "Storage Solutions",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/60 font-medium text-sm hover:text-white hover:pl-1 transition-all duration-300 flex items-center gap-2 group"
                    dangerouslySetInnerHTML={{ __html: s }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-black text-sm uppercase tracking-widest text-white/40 mb-6">Contact</div>
            <div className="flex flex-col gap-5">
              <a href="tel:0234567891" className="flex items-start gap-3 group">
                <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-white/40 font-bold uppercase tracking-wider mb-0.5">Phone</div>
                  <div className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">0234567891</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-white/40 font-bold uppercase tracking-wider mb-0.5">Address</div>
                  <div className="text-white/70 text-sm font-medium leading-relaxed">
                    8, St James&apos;s Square<br />
                    Westminster, SW1Y 4JU<br />
                    London
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-white/40 font-bold uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-white/70 text-sm font-medium">info@swiftmovelogistics.co.uk</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-xs font-medium">
            &copy; {new Date().getFullYear()} SwiftMove Logistics Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/30 text-xs font-medium hover:text-white/60 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
