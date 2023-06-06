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
      <footer className="text-center p-3 flex items-center justify-center">
        <Link
          href="/projects/all"
          target="_blank"
          className="flex items-center w-full max-w-[200px] justify-center gap-2 p-4 rounded-md font-semibold text-gray-300 transition-all duration-200 text-md relative z-[1] overflow-hidden border-2 border-red-500 hover:text-white hover:border-red-500 before:content-[''] before:absolute before:-left-[50px] before:top-0 before:w-0 before:h-full before:bg-red-500 before:-z-[1] before:transition-all before:duration-1000 hover:before:w-[250%] before:skew-x-[45deg]"
        >
          {t('see-more')}
        </Link>
      </footer>
    </main>
  );
}
