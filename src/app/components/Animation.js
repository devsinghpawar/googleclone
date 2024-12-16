"use client";

import React, { useEffect, useRef } from "react";
import "./index.css"; // Tailwind CSS is included here

function Animation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Generate 20 glowing stars dynamically
    for (let i = 0; i < 15; i++) {
      const star = document.createElement("div");
      star.className = "absolute bg-white rounded-full animate-twinkle";
      star.style.width = `${Math.random() * 8 + 2}px`; // Random size between 2px and 10px
      star.style.height = star.style.width;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.opacity = Math.random();
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-4xl text-white mb-8">Glowing Stars Animation</h1>
      <div
        ref={containerRef}
        className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-lg group"
      >
        {/* Image */}
        <img
          src="https://www.google.com/imgres?q=image%20tag&imgurl=https%3A%2F%2Ffiles.codingninjas.in%2Farticle_images%2Fattributes-of-img-tag-in-html-0-1674996470.webp&imgrefurl=https%3A%2F%2Fwww.naukri.com%2Fcode360%2Flibrary%2Fhtml-img-tag&docid=a5ZJd-ngu31xfM&tbnid=m98sCr07Ze1uAM&vet=12ahUKEwjthpGKmKqKAxUydfUHHaiTCswQM3oECC8QAA..i&w=1200&h=700&hcb=2&ved=2ahUKEwjthpGKmKqKAxUydfUHHaiTCswQM3oECC8QAA"
          alt="Glowing Stars"
          className="w-[500px] h-[500px] transition-all duration-300 group-hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.7)]"
        />
      </div>
    </div>
  );
}

export default Animation;
