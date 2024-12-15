import React, { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
// import "./CustomCropper.css"; // Add custom styles here

const CustomCropper = () => {
  const cropperRef = useRef(null);

  return (
    <div>
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
      />
    </div>
  );
};

export default CustomCropper;
