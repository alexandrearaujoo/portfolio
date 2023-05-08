'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';

import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const SnowParticles = () => {
  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="snow"
      init={init}
      options={{
        style: {
          zIndex: '-1'
        },
        background: {
          color: '#18181B'
        },
        particles: {
          color: {
            value: '#fff'
          },
          move: {
            direction: 'bottom',
            enable: true,
            outModes: 'out',
            speed: { min: 3, max: 7 }
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 30
          },
          opacity: {
            value: { min: 0.3, max: 1 }
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 }
          },
          wobble: {
            enable: true,
            distance: 10,
            speed: 5
          }
        }
      }}
    />
  );
};

export default SnowParticles;
