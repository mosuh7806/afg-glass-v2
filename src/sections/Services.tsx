import { useState } from 'react'
import { X, Scissors, Wrench, Settings, Hammer } from 'lucide-react'

interface SubService {
  title: string
  image: string
}

interface Service {
  id: number
  number: string
  title: string
  description: string
  icon: React.ReactNode
  subServices?: SubService[]
}

const glassSupplySubServices: SubService[] = [
  { title: 'Glass Cutting', image: '/images/Glass Cutting.jpg' },
  { title: 'Glass Edging', image: '/images/Glass Edging.jpg' },
  { title: '45 Degree Polishing', image: '/images/45 Degree Polishing.jpg' },
  { title: 'Hole and Drilling', image: '/images/Hole and Drilling.jpg' },
  { title: 'Sand Blasting', image: '/images/Sand Blasting.jpg' },
  { title: 'Back Painted Glass', image: '/images/Back Painted Glass.jpg' },
  { title: 'Round Polishing', image: '/images/Round Polishing.jpg' },
  { title: 'Beveling', image: '/images/Beveling.jpg' },
  { title: 'Stained Glass', image: '/images/Stained Glass.jpg' },
]

const installationSubServices: SubService[] = [
  { title: 'Glass Partition with Frame and Frameless', image: '/images/Glass Partition with Frame and Frameless.jpg' },
  { title: 'Glass Door', image: '/images/Glass Door.jpg' },
  { title: 'Sliding Door', image: '/images/Sliding Door.jpg' },
  { title: 'Shower Cubical', image: '/images/Shower Cubical.jpg' },
  { title: 'Mirror', image: '/images/Mirror.jpeg' },
  { title: 'Decorative Glass', image: '/images/Decorative Glass.jpg' },
  { title: 'Glass Balcony Handrail', image: '/images/Glass Balcony Handrail.webp' },
  { title: 'Glass Staircase Handrail', image: '/images/Glass Staircase Hhandrail.jpeg' },
]

const services: Service[] = [
  {
    id: 1,
    number: '01',
    title: 'Glass Supply & Processing',
    description:
      'Cutting, edging, tempering, lamination, and coating—tailored to spec. From glass cutting and 45° polishing to sand blasting and back-painted glass.',
    icon: <Scissors className="w-8 h-8" />,
    subServices: glassSupplySubServices,
  },
  {
    id: 2,
    number: '02',
    title: 'Installation & Sealing',
    description:
      'Site-ready crews, weatherproofing, and quality handover. Glass partitions, shower cubicles, mirrors, and handrail installation.',
    icon: <Wrench className="w-8 h-8" />,
    subServices: installationSubServices,
  },
  {
    id: 3,
    number: '03',
    title: 'Aluminum Fabrication',
    description:
      'Curtain walls, windows, doors, and custom extrusions with thermal performance. Including ACP cladding and structural glazing systems.',
    icon: <Settings className="w-8 h-8" />,
  },
  {
    id: 4,
    number: '04',
    title: 'Architectural Metal Works',
    description:
      'Custom metal fabrication, balcony and staircase handrails—engineered for the Gulf climate.',
    icon: <Hammer className="w-8 h-8" />,
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const openServiceModal = (service: Service) => {
    if (service.subServices) {
      setSelectedService(service)
    }
  }

  const closeServiceModal = () => {
    setSelectedService(null)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a227] font-semibold mb-2">What We Do</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We manage the full lifecycle—design assist, fabrication, and installation—so your Interior Glass performs beautifully and stays within budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => openServiceModal(service)}
              className={`group relative bg-slate-50 rounded-2xl p-8 transition-all duration-300 ${
                service.subServices
                  ? 'cursor-pointer hover:bg-[#c9a227]/10 hover:shadow-xl'
                  : 'hover:shadow-lg'
              }`}
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-slate-200 group-hover:text-[#c9a227]/30 transition-colors">
                {service.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-xl flex items-center justify-center text-[#c9a227] mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {service.subServices && (
                  <div className="mt-4 flex items-center text-[#c9a227] font-medium">
                    <span>View Details</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Dialog - Custom implementation for proper scrolling */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeServiceModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b flex items-center justify-between flex-shrink-0 bg-white rounded-t-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1e3a5f] rounded-xl flex items-center justify-center text-[#c9a227]">
                  {selectedService.icon}
                </div>
                <h2 className="text-2xl font-bold text-[#1e3a5f]">
                  {selectedService.title}
                </h2>
              </div>
              <button
                onClick={closeServiceModal}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {selectedService.subServices?.map((subService, index) => (
                  <div
                    key={index}
                    className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={subService.image}
                        alt={subService.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-[#1e3a5f] text-center">
                        {subService.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
