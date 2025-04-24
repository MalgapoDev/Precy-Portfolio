import { useRef } from 'react'
import Navigation from './components/Navigation.jsx';
import Hero from "./components/Heropage.jsx";
import About from "./components/About.jsx";
import ProjectsPage from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const aboutRef = useRef(null);
  
  return (
    <div className="app-container">
      <Navigation />
      <section id="hero" className="hero-section">
        <Hero aboutRef={aboutRef} />
      </section>
      
      <section id="about" className="about-section" ref={aboutRef}>
        <About />
      </section>
      <section id="projects" className="projects-section">
        <ProjectsPage />
      </section>
      <section id="contacts" className="footer-section">
        <Footer />
      </section>
    </div>
  )
}

export default App