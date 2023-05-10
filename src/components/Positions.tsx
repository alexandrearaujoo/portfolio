'use client';

import Typewriter from 'typewriter-effect';

const Positions = ({ translate }: { translate: string }) => {
  return (
    <div className="flex gap-2 items-center text-white text-2xl">
      <h2>{translate}</h2>
      <Typewriter
        options={{
          loop: true,
          autoStart: true,
          delay: 100,
          wrapperClassName: 'text-red-500'
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('Dev Front-End')
            .pauseFor(100)
            .deleteAll()
            .typeString('Dev Back-End')
            .pauseFor(100)
            .deleteAll()
            .typeString('Dev Full-Stack')
            .start();
        }}
      />
    </div>
  );
};

export default Positions;
