'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Lottie from 'react-lottie';

import { useTranslation } from '@/i18n/client';
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
  const lang = usePathname().split('/')[1];
  const { t } = useTranslation(lang, 'not-found');

  return (
    <main className="mt-10 flex flex-col items-center justify-center">
      <Lottie
        options={defaultOptions}
        style={{ cursor: 'default' }}
        height={500}
        isClickToPauseDisabled
      />
      <Link
        href=""
        className="block text-center text-white text-2xl font-bold underline transition-all duration-200s hover:text-white/60"
      >
        {t('title')}
      </Link>
    </main>
  );
};

export default NotFoundAnimate;
