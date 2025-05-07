
import React from "react";

const FormBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 opacity-60">
      {/* Animated circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-digi-red/20 blur-2xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-40 h-40 rounded-full bg-digi-blue/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-1/3 w-48 h-48 rounded-full bg-digi-green/20 blur-3xl animate-pulse-slow"></div>
      
      {/* Stars background */}
      <div className="stars w-full h-full opacity-40"></div>
      <div className="twinkling w-full h-full opacity-30"></div>
      
      {/* RGB glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
    </div>
  );
};

export default FormBackground;
