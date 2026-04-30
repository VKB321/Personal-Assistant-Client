import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, RecursivePartial, IOptions } from "@tsparticles/engine";

const MAX_PARTICLES = 100;

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo<RecursivePartial<IOptions>>(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: "#0d0d0d" },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 2 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
        move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
        number: { density: { enable: true }, value: 80, limit: { value: MAX_PARTICLES } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;
  return <Particles id="tsparticles" options={options} />;
};

export default ParticlesBackground;
