import { useState, useEffect } from 'react'
import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Services from './sections/Services'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'services', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Adjusted for the fixed header height so it doesn't overlap the section title
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  return (
    /* The 'relative' class here ensures the 'fixed' header knows where to pin */
    <div className="relative min-h-screen bg-white">
      
      {/* 1. THE HEADER (Must be inside the relative wrapper) */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* 2. THE MAIN CONTENT */}
      <main>
        {/* We keep these IDs so your scrollToSection function works */}
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <Testimonials />
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default App