import React from "react";

// CSS styles for the animation
const styles = `
@keyframes flap {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-flap {
  animation: flap 0.6s ease-in-out infinite;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-90 p-4">
      <div className="text-center">
        <img
          src="/BrandLogo.png"
          alt="Blue Bird Logo"
          className="h-24 w-24 mx-auto animate-flap"
        />
        <p className="text-gray-300 mt-4 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
