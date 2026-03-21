import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote:
      'AFG delivered exceptional quality on our mirror and shower partition installations across 411 flats. Their attention to detail and on-time delivery made them a trusted partner.',
    client: 'Al Firas General Contracting',
    project: 'ADNEC Residences Project',
  },
  {
    id: 2,
    quote:
      "The back-painted glass installations exceeded our expectations. AFG's team demonstrated professional competence throughout the 513-flat project.",
    client: 'Dhabi Contracting LLC',
    project: 'Waterfront Towers Project',
  },
  {
    id: 3,
    quote:
      'From shower partitions to aluminum and glass works, AFG consistently delivered high-quality results across multiple towers. A reliable partner for large-scale developments.',
    client: 'Malaih Investment',
    project: 'Radiant Square, Reem Island',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a227] font-semibold mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f]">
            Client Voices
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="w-10 h-10 text-[#c9a227] mb-6" />
              <p className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-slate-200 pt-6">
                <p className="font-semibold text-[#1e3a5f]">
                  {testimonial.client}
                </p>
                <p className="text-slate-500 text-sm">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
