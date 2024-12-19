"use client";
import React, { useEffect } from "react";

const TwinkleDots = () => {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          const cropperCanvas = document.querySelector(".cropper-canvas");
          const cropperBox = document.querySelector(".cropper-view-box");
          console.log(cropperCanvas);
          if (cropperCanvas) {
            addTwinkleAnimation(cropperCanvas, 50);
            observer.disconnect(); // Stop observing once the canvas is found
          }
          if (cropperBox) {
            addTwinkleAnimation(cropperBox, 10);
            observer.disconnect(); // Stop observing once the canvas is found
          }
        }
      });
    });

    const targetNode = document.body; // Replace with a more specific parent if needed
    console.log(targetNode);
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
    }
    const addTwinkleAnimation = (cropperCanvas, starCount) => {
      const stars = [];

      // Create stars
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "twinkle absolute bg-white  rounded-full opacity-0";
        star.style.width = `${Math.random() * 4 + 2}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animation = `twinkle 3s ease-in-out ${Math.random() * 3}s`;
        stars.push(star);
        cropperCanvas.appendChild(star);
      }

      // Cleanup after animation
      setTimeout(() => {
        stars.forEach((star) => {
          cropperCanvas.removeChild(star);
        });
      }, 4000); // Cleanup after animation duration
    };
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default TwinkleDots;
