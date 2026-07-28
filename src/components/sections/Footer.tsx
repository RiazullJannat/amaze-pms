import Link from "next/link";
import { Zap, ExternalLink } from "lucide-react";

const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Solutions: ["Boutique Hotels", "Resorts", "Serviced Apartments", "Hostels"],
  Resources: ["Documentation", "Help Center", "API Reference", "Blog"],
  Company: ["About", "Careers", "Contact", "Privacy Policy"],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-[#080d1a] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.4)]">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="text-lg font-bold text-slate-100">Amaze<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">PMS</span></span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              The all-in-one property management platform for modern hotels and resorts.
            </p>
            <div className="flex gap-3">
              {[ExternalLink, ExternalLink, ExternalLink].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl border border-slate-700/60 bg-slate-900/40 flex items-center justify-center text-slate-500 hover:text-slate-200 hover:border-slate-600 hover:bg-slate-800 transition-all"
                  aria-label="Social link"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-sm text-slate-500 hover:text-slate-200 transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800/50">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} AmazePMS. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-500 font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
