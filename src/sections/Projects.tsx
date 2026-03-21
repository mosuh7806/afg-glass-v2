import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  client: string
  images: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ADNEC Residences',
    category: 'Mirrors & Shower Partitions',
    client: 'Al Firas General Contracting',
    images: [
      '/images/Adnec Residences Image 1.jpeg',
      '/images/Adnec Residences Image 2.jpeg',
      '/images/Adnec Residences Image 3.jpeg',
      '/images/Adnec Residences Image 4.jpeg',
      '/images/Adnec Residences Image 5.jpeg',
    ],
  },
  {
    id: 2,
    title: 'Waterfront Towers',
    category: 'Back Painted Glass',
    client: 'Dhabi Contracting LLC',
    images: [
      '/images/Waterfront Towers Image 1.jpeg',
      '/images/Waterfront Towers Image  2.jpeg',
      '/images/Waterfront Towers Image 3.jpeg',
      '/images/Saadiyat 4.jpg',
      '/images/Saadiyat 5.jpg',
    ],
  },
  {
    id: 3,
    title: 'Radiant Square',
    category: 'Shower Partition, Mirrors & Aluminum Works',
    client: 'Malaih Investment',
    images: [
      '/images/Radiant Square Image 1.jpeg',
      '/images/Radiant Square Image 2.jpeg',
      '/images/Radiant Square 1.jpg',
      '/images/Radiant Square 2.jpeg',
      '/images/Radiant Square 3.jpeg',
    ],
  },
  {
    id: 4,
    title: 'Raha Beach Commercial',
    category: 'Commercial Glass & Aluminum',
    client: 'Al Diyar General Contracting Co',
    images: [
      '/images/Raha Beach Commercial 1.webp',
      '/images/Raha Beach Commercial 2.webp',
    ],
  },
  {
    id: 5,
    title: 'Saadiyat Lagoons Villas',
    category: 'Premium Glass Works',
    client: 'Residential Project',
    images: [
      '/images/Saadiyat 1.webp',
      '/images/Saadiyat 2.webp',
      '/images/Saadiyat 3.webp',
    ],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openGallery = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    
    // Disable background scroll
    document.body.style.overflow = 'hidden'
    
    // Slide header away
    const header = document.querySelector('header');
    if (header) {
      header.style.transform = 'translateY(-100%)';
      header.style.transition = 'transform 0.3s ease-in-out';
    }
  }

  const closeGallery = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    
    // Enable background scroll
    document.body.style.overflow = 'unset'
    
    // Bring header back
    const header = document.querySelector('header');
    if (header) {
      header.style.transform = 'translateY(0)';
    }
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  return (
    <section className="py-24 bg-slate-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c9a227] font-bold tracking-widest text-sm mb-3">Our Portfolio</p>
          <h2 className="text-4xl font-black text-[#1e3a5f] tracking-tighter">Featured Projects</h2>
          {/* Added requested line below */}
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">Explore our completed works across the UAE. Click on any project to see detailed images.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openGallery(project)} 
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-[#c9a227] text-xs font-black uppercase tracking-[0.2em] mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY MODAL */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300" 
          onClick={closeGallery}
        >
          {/* Soft Dark Blue Blur Backdrop */}
          <div className="absolute inset-0 bg-[#1e3a5f]/85 backdrop-blur-xl" />
          
          <div 
            className="relative bg-white rounded-3xl w-full max-w-7xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-8 py-5 border-b flex justify-between items-center bg-white">
              <div>
                <h2 className="text-2xl font-black text-[#1e3a5f] uppercase tracking-tighter">{selectedProject.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-1 w-8 bg-[#c9a227] rounded-full" />
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{selectedProject.client}</p>
                </div>
              </div>
              <button 
                onClick={closeGallery} 
                className="p-3 bg-slate-100 hover:bg-[#c9a227] hover:text-white rounded-2xl transition-all duration-300 group"
              >
                <X className="w-6 h-6 text-slate-600 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden flex flex-col lg:flex-row bg-slate-50">
               {/* Main Image View */}
               <div className="relative flex-1 flex items-center justify-center p-4 lg:p-10 group bg-slate-100/50">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt="Project view"
                    className="max-w-full max-h-[45vh] lg:max-h-[65vh] object-contain rounded-xl shadow-2xl border-4 border-white transition-all duration-500" 
                  />
                  
                  {/* Floating Navigation Arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-6 p-4 bg-white/90 hover:bg-[#c9a227] hover:text-white text-[#1e3a5f] rounded-2xl shadow-xl transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-6 p-4 bg-white/90 hover:bg-[#c9a227] hover:text-white text-[#1e3a5f] rounded-2xl shadow-xl transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
               </div>

               {/* Thumbnails Sidebar */}
               <div className="lg:w-40 bg-white p-6 border-t lg:border-t-0 lg:border-l overflow-x-auto lg:overflow-y-auto">
                 <div className="flex lg:flex-col gap-4">
                   {selectedProject.images.map((img, i) => (
                     <button 
                        key={i} 
                        onClick={() => setCurrentImageIndex(i)}
                        className={`relative flex-shrink-0 w-24 h-24 lg:w-full lg:h-28 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                          currentImageIndex === i 
                            ? 'border-[#c9a227] scale-105 shadow-lg' 
                            : 'border-transparent opacity-40 hover:opacity-100'
                        }`}
                     >
                       <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                     </button>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}