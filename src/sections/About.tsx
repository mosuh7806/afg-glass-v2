import { Award, Users, Building2, Clock } from 'lucide-react'

const stats = [
  {
    icon: <Clock className="w-8 h-8" />,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    value: '500+',
    label: 'Projects Completed',
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: '50+',
    label: 'Expert Team',
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: '15+',
    label: 'Years of Excellence in UAE',
  },
]

export default function About() {
  return (
    <section className="py-20 bg-[#1e3a5f] text-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-[#c9a227] font-semibold mb-4 tracking-widest uppercase text-sm">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              A simple, transparent process designed to keep your project on time and on spec.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {/* UPDATED: Changed 25 years to 15+ years */}
              With over 15+ years of excellence in the UAE, we have built a reputation for quality craftsmanship and reliable service.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our team of skilled professionals handles everything from initial design consultation to final installation, ensuring every project meets the highest standards of quality and safety.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#c9a227]/10 rounded-xl flex items-center justify-center text-[#c9a227] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}