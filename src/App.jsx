import { useRef } from 'react'
import Hero from "./components/Heropage.jsx";
import About from "./components/About.jsx";
import ProjectsPage from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const aboutRef = useRef(null);
  
  return (
    <div className="app-container">
      <section className="hero-section">
        <Hero aboutRef={aboutRef} />
      </section>
      
      <section className="about-section" ref={aboutRef}>
        <About />
      </section>
      <section className="projects-section">
        <ProjectsPage />
      </section>
      <Footer />
    </div>
  )
}

export default App