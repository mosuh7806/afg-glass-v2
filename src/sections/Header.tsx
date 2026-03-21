import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['Home', 'Projects', 'Services', 'About', 'Contact']

  const handleMobileClick = (id: string) => {
    scrollToSection(id)
    setIsMenuOpen(false) 
  }

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-md transition-transform duration-300">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        
        {/* BRAND SECTION */}
        <div 
          className="flex items-center gap-3 md:gap-4 cursor-pointer group px-2" // Added px-2 to shift everything slightly inside
          onClick={() => scrollToSection('home')}
        >
          {/* Logo Container - Circular frame with Navy border */}
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#1e3a5f] overflow-hidden bg-white flex items-center justify-center p-1.5 shadow-sm flex-shrink-0">
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
            <h1 className="text-[#1e3a5f] font-black text-lg md:text-2xl tracking-tighter uppercase leading-none">
              AFG Glass & Aluminum
            </h1>
            <span className="text-[#c9a227] text-[9px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Sole Proprietorship L.L.C.
            </span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => {
            const id = item.toLowerCase().replace(' ', '');
            return (
              <button 
                key={item} 
                onClick={() => scrollToSection(id)} 
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-200 relative group/link ${
                  activeSection === id ? 'text-[#c9a227] scale-110' : 'text-[#1e3a5f] hover:text-[#c9a227]'
                }`}
              >
                {item}
                {activeSection === id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c9a227]" />
                )}
              </button>
            );
          })}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#1e3a5f] hover:text-[#c9a227] transition-colors"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navItems.map((item) => {
              const id = item.toLowerCase().replace(' ', '');
              return (
                <button
                  key={item}
                  onClick={() => handleMobileClick(id)}
                  className={`block w-full text-left px-4 py-4 text-sm font-black uppercase tracking-widest border-b border-gray-50 last:border-0 ${
                    activeSection === id ? 'text-[#c9a227] bg-slate-50' : 'text-[#1e3a5f]'
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <div className="pt-4 px-4">
              <a 
                href="tel:0569618286"
                className="w-full bg-[#1e3a5f] text-white p-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform"
              >
                <Phone className="w-5 h-5 text-[#c9a227]" />
                CALL US NOW
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}