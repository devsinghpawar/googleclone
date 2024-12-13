import React, { useEffect, useRef } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./CustomCropper.css"; // Add custom styles here
import { CropperRef, Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";

const CustomCropper = ({ imageURL }) => {
  const cropperRef = useRef(null);

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

    const timeout = setTimeout(() => {
      stars.forEach((star) => container.removeChild(star)); // Remove each star
    }, 300);

    // Cleanup timeout on component unmount
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    console.log(croppeyr.getCroppedCanvas().toDataURL());
  };
  const onChange = (cropper) => {
    console.log(cropper.getCoordinates(), cropper.getCanvas());
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-lg shadow-lg group bg-[#1F2125]"
    >
      {/* <Cropper
        src={imageURL}
        initialAspectRatio={1}
        dragMode="none"
        guides={false}
        scalable={false}
        min={"50px"}
        cropBoxResizable={true}
        cropBoxMovable={true}
        zoomable={false}
        center={false}
        highlight={false}
        ref={cropperRef}
        viewMode={1}
        background={false}
        autoCropArea={1}
        className="  transition-all duration-30000 group-hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.7)]"
      /> */}
      <Cropper
        src={imageURL}
        onChange={onChange}
        className="h-[60vh] bg-[#87aefb]"
      />
    </div>
  );
};

export default CustomCropper;

// ${
//   containerRef?.current?.width
//     ? `w-[${containerRef?.current?.width} ]`
//     : ""
// } h-auto
