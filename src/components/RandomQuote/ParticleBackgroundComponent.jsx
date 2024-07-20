import React from "react";
import ParticleBackground from "react-particle-backgrounds";

const ParticleBackgroundComponent = () => {
  const settings = {
    particle: {
      particleCount: 100,
      color: "#ffffff",
      minSize: 2,
      maxSize: 4,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 4,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000,
    },
  };

  return <ParticleBackground settings={settings} />;
};

export default ParticleBackgroundComponent;
