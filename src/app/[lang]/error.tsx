'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Lottie from 'react-lottie';

import { useTranslation } from '@/i18n/client';
import ErrorAnimation from '@/lotties/error.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ErrorAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

interface ErrorProps {
  error: Error;
  lang: string;
}

export default function Error({ error, lang }: ErrorProps) {
  const pathname = usePathname().split('/')[1];
  const router = useRouter();
  const { t } = useTranslation(lang, 'error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="px-14 md:px-0 flex justify-center items-center h-[85vh]">
      <section className="flex flex-col gap-5 items-center md:flex-row md:gap-20">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-white text-2xl">{t('text-1')}</h1>
          <Link
            href={`/${pathname}`}
            className="text-white w-full text-center text-xl p-2 bg-red-500 rounded-md transition duration-200 hover:opacity-80"
          >
            {t('buttonText-1')}
          </Link>
          <h2 className="font-bold text-white text-xl">{t('text-2')}</h2>
          <button
            onClick={() => router.refresh()}
            className="text-white w-full text-center text-xl p-2 bg-red-500 rounded-md transition duration-200 hover:opacity-80"
          >
            {t('buttonText-2')}
          </button>
        </div>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          isClickToPauseDisabled
          style={{ cursor: 'default' }}
        />
      </section>
    </main>
  );
}
