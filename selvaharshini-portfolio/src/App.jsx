import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Languages from './components/Languages'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-paper dark:bg-base text-graphite dark:text-ink transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Languages />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
