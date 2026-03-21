import { useState } from 'react'
// Added Landmark to the imports
import { Phone, Mail, MapPin, Send, Landmark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

const contactInfo = [
  {
    icon: <Landmark className="w-6 h-6" />,
    label: 'Call Us (Landline)',
    value: '02 622 0991',
    href: 'tel:026220991',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Call Us (Mobile)',
    value: '056 961 8286',
    href: 'tel:0569618286',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email Us',
    value: 'info@afguae.com',
    href: 'mailto:info@afguae.com',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Visit Us',
    value: 'Musaffah - M43 - Abu Dhabi',
    href: 'https://maps.google.com/?q=Musaffah+M43+Abu+Dhabi',
  },
]

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Inquiry Sent!',
      description: 'We will respond within 48 hours with next steps and a preliminary estimate.',
    })
    setFormData({ name: '', email: '', projectType: '', message: '' })
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a227] font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e3a5f] uppercase tracking-tighter mb-4">
            Start Your Project
          </h2>
          <div className="w-20 h-1 bg-[#c9a227] mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tell us what you're building. We'll respond within 48 hours with next steps and a preliminary estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100"
              >
                <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center text-[#c9a227] group-hover:bg-[#c9a227] group-hover:text-white transition-all shadow-lg group-hover:shadow-[#c9a227]/20">
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-[#1e3a5f] font-bold text-lg group-hover:text-[#c9a227] transition-colors leading-tight">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-inner"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#1e3a5f] font-bold">
                    Name <span className="text-[#c9a227]">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-white border-slate-200 focus:border-[#c9a227] focus:ring-[#c9a227]"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#1e3a5f] font-bold">
                    Email <span className="text-[#c9a227]">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white border-slate-200 focus:border-[#c9a227] focus:ring-[#c9a227]"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="projectType" className="text-[#1e3a5f] font-bold">Project Type</Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, projectType: value })
                  }
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select project type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="glass-processing">Glass Processing & Installation</SelectItem>
                    <SelectItem value="aluminum">Aluminum Fabrication</SelectItem>
                    <SelectItem value="curtain-wall">Curtain Wall Systems</SelectItem>
                    <SelectItem value="acp">ACP Cladding</SelectItem>
                    <SelectItem value="metal-works">Architectural Metal Works</SelectItem>
                    <SelectItem value="other">Other / Multiple Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message" className="text-[#1e3a5f] font-bold">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-white border-slate-200 focus:border-[#c9a227] focus:ring-[#c9a227]"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto bg-[#1e3a5f] hover:bg-[#c9a227] text-white font-bold py-6 px-10 rounded-xl transition-all shadow-lg hover:shadow-[#c9a227]/30"
              >
                <Send className="w-4 h-4 mr-2" />
                SEND INQUIRY
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}