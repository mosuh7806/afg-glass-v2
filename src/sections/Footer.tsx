import { Phone, Mail, MapPin, Landmark } from 'lucide-react'

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-[#1e3a5f] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* BRAND SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {/* Logo Container - Circular frame matching Header style */}
              <div className="w-16 h-16 rounded-full border-2 border-[#c9a227] overflow-hidden bg-white p-1.5 shadow-xl flex-shrink-0 flex items-center justify-center">
                <img 
                  src="/images/logo.jpg" 
                  alt="AFG Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/images/')) {
                      target.src = '/logo.jpg';
                    }
                  }}
                />
              </div>
              
              <div className="flex flex-col whitespace-nowrap">
                <h1 className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase leading-none">
                  AFG Glass & Aluminum
                </h1>
                <span className="text-[#c9a227] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                  Sole Proprietorship L.L.C.
                </span>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs font-medium">
              UAE's leading provider of glass, aluminum, and metal works for residential and commercial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-10">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-[#c9a227]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-[#c9a227] transition-all text-sm font-semibold uppercase tracking-widest"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-[#c9a227]">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 group">
                <Landmark className="w-4 h-4 text-[#c9a227]" />
                <a href="tel:026220991" className="text-slate-300 group-hover:text-white transition-colors text-sm">
                  02 622 0991 (Landline)
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-[#c9a227]" />
                <a href="tel:0569618286" className="text-slate-300 group-hover:text-white transition-colors text-sm">
                  056 961 8286 (Mobile)
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-[#c9a227]" />
                <a href="mailto:info@afguae.com" className="text-slate-300 group-hover:text-white transition-colors text-sm">
                  info@afguae.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a227] mt-1" />
                <span className="text-slate-300 text-sm">
                  Musaffah - M43 - Abu Dhabi
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">
            © {currentYear} AFG Glass & Aluminum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}