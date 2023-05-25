import Link from 'next/link';

import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';

import { useTranslation } from '@/i18n';
import { getProjects } from '@/utils/getProjects';

export default async function Projects({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const [projects, { t }] = await Promise.all([
    getProjects(),
    useTranslation(lang, 'projects')
  ]);

  return (
    <main className="px-16 md:px-0">
      <SectionTitle title={t('title')} />
      <section>
        <ul className="space-y-10 w-full">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} />
          ))}
        </ul>
      </section>
      <footer className="block text-center p-3">
        <Link
          href="/projects/all"
          className="text-gray-300 text-xl font-semibold border-b-2 border-gray-300 transition-all duration-200 hover:opacity-80"
        >
          {t('see-more').split(' ')[0]} {t('see-more').split(' ')[1]}{' '}
          <span className="text-red-500">{t('see-more').split(' ')[2]}</span>
        </Link>
      </footer>
    </main>
  );
}
