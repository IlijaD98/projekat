import Header from "./Header"

import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-pozadina.mp4" autoPlay loop muted />
      <h1>AVANTURA TE ČEKA</h1>
      <p>Pridruži se najvećoj porodici ljubitelja knjiga</p>
      
    </div>
  );
}

export default HeroSection;
