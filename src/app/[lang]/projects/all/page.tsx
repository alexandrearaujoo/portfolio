import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';

import { useTranslation } from '@/i18n';
import { getProjects } from '@/utils/getProjects';

export default async function AllProjects({
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
      <SectionTitle title={t('title-all')} />
      <section>
        <ul className="space-y-10 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} />
          ))}
        </ul>
      </section>
      <footer className="block text-center p-3"></footer>
    </main>
  );
}
