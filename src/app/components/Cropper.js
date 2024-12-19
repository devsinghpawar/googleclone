import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const CustomCropper = ({ imageURL }) => {
  const cropperRef = useRef(null);
  const containerRef = useRef(null);
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = Array.from({ length: 50 }).map(() => ({
        id: Math.random().toString(36).substring(2, 9),
        top: Math.random() * 100, // Random position
        left: Math.random() * 100,
        delay: Math.random() * 3, // Random delay for the animation
      }));
      setDots(newDots);

      setTimeout(() => setDots([]), 3000);
    };

    generateDots();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <Cropper
        src={imageURL}
        initialAspectRatio={1}
        dragMode="none"
        guides={false}
        scalable={false}
        min={"50px"}
        checkOrientation={false}
        cropBoxResizable={true}
        cropBoxMovable={true}
        zoomable={false}
        center={false}
        highlight={false}
        ref={cropperRef}
        viewMode={1}
        background={false}
        style={{ height: "60vh", width: "100%", background: "#1F2125" }}
      />
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-2 h-2 bg-white rounded-full opacity-0 animate-twinkle"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default CustomCropper;
