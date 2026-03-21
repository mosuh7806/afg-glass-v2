import bgImg from './bg.jpg';

export default function Hero({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      
      {/* SOFT LIGHT OVERLAY */}
      <div className="absolute inset-0 z-10 bg-white/30 backdrop-blur-[1px]" />

      {/* CONTENT - FONT SIZES REDUCED FOR BETTER BALANCE */}
      <div className="relative z-20 text-center px-6 pt-24 md:pt-32">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1e3a5f] uppercase tracking-tighter leading-[0.9] mb-6">
          Crafted in Glass,<br/>
          <span className="text-[#c9a227]">Built to Last.</span>
        </h1>
        
        <p className="text-slate-900 font-extrabold tracking-[0.3em] uppercase mb-10 text-xs md:text-base opacity-90">
          Glass • Aluminum • Metal Works
        </p>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="px-10 py-4 bg-[#c9a227] text-white font-black uppercase tracking-widest text-xs hover:bg-[#1e3a5f] transition-all shadow-xl hover:-translate-y-1 active:scale-95"
        >
          Explore Our Work
        </button>
      </div>

      {/* Bottom fade for smooth section transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}