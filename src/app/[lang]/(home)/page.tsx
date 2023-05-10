import Positions from '@/components/Positions';
import SnowParticles from '@/components/SnowParticles';
import Socials from '@/components/Socials';

import { useTranslation } from '@/i18n';

export default async function Home({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'home');

  return (
    <>
      <SnowParticles />
      <main className="flex flex-col-reverse px-14 md:px-0 h-[85vh] justify-between items-center lg:flex-row">
        <Socials />
        <section className="absolute top-[45%] left-1/2 -translate-x-1/2 flex flex-col items-start gap-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <h1 className="text-6xl text-red-500 font-bold">Alexandre</h1>
            <h1 className="text-6xl text-white font-bold">Araujo</h1>
          </div>
          <Positions translate={t('i-am')} />
        </section>
      </main>
    </>
  );
}
