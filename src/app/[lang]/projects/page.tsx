import SectionTitle from '@/components/SectionTitle';

import { useTranslation } from '@/i18n';

export default async function Projects({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'projects');
  return (
    <main className="px-16 md:px-0">
      <SectionTitle title={t('title')} />
      <section>
        <h1 className="text-white text-2xl md:text-6xl font-bold animate-bounce text-center">
          {t('message')}
        </h1>
      </section>
    </main>
  );
}
