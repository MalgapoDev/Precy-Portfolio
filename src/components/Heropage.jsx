import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import profileImage from "../assets/precy.jpg";
import "./Heropage.css";

const Hero = ({ aboutRef }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xfb53fc,
          midtoneColor: 0xf9bcf9,
          lowlightColor: 0xff52ff,
          baseColor: 0xffebeb,
          blurFactor: 0.6,
          speed: 1.0,
          zoom: 1.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-container" ref={vantaRef}>
      <div className="hero-content">
        <img className="profile-picture" src={profileImage} alt="Precy Ibarra Elebado" />
        <h1 className="quote">“There are no straight lines or sharp corners in nature.”</h1>
        <p className="name">Hi! I am Precy Ibarra Elebado</p>

        <div className="social-icons">
          <a href="https://www.facebook.com/elx.presylaa" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/presylaae/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div className="scroll-down" onClick={scrollToAbout}>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
