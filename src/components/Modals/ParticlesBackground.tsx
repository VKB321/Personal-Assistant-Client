import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Loads only the most used features (lighter)
import type { Engine, RecursivePartial, IOptions } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // This effect runs once when the component mounts
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // You can load any extra plugins here
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: RecursivePartial<IOptions> = {
    // This handles the fixed background automatically
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: "#0d0d0d",
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  // Don't render the Particles component until the engine is ready
  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
    />
  );
};

export default ParticlesBackground;
