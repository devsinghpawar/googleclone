import React, { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
// import "./CustomCropper.css"; // Add custom styles here

const CustomCropper = () => {
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
  }, []);

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    console.log(croppeyr.getCroppedCanvas().toDataURL());
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-lg group"
    >
      <Cropper
        src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"
        style={{ height: "100%", width: "100%", opacity: 100 }}
        initialAspectRatio={1}
        aspectRatio={1}
        guides={false}
        center={false}
        highlight={false}
        crop={onCrop}
        ref={cropperRef}
        viewMode={0}
        background={false} /* Disable grid background */
        autoCropArea={1} /* Make crop area cover most of the image */
        className="transition-all duration-30000 group-hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.7)]"
      />
    </div>
  );
};

export default CustomCropper;
