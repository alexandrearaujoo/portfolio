'use client';

import Link from 'next/link';
import Lottie from 'react-lottie';

import NotFoundAnimation from '@/lotties/not-found.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NotFoundAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const NotFoundAnimate = () => {
  return (
    <main className="mt-10 flex flex-col items-center justify-center">
      <Lottie
        options={defaultOptions}
        style={{ cursor: 'default' }}
        height={500}
        isClickToPauseDisabled
      />
      <Link
        href="/"
        className="block text-center text-white text-2xl font-bold underline transition-all duration-200s hover:text-white/60"
      >
        Back to home
      </Link>
    </main>
  );
};

export default NotFoundAnimate;
