'use client';

import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { TbNetwork } from 'react-icons/tb';

import { useTranslation } from '@/i18n/client';
import { Project } from '@/interfaces';

interface ProjectCardProps {
  project: Project;
  lang: string;
}

const ProjectCard = ({ project, lang }: ProjectCardProps) => {
  const { t } = useTranslation(lang, 'projects');

  return (
    <li className="relative p-3 w-full flex flex-col items-center justify-center lg:flex-row">
      <img
        src={project.thumbnail ?? ''}
        alt={project.title}
        width={592}
        height={290}
        className="w-full object-fill lg:max-w-xl lg:h-96"
      />
      <div className="bg-black p-5 w-full space-y-6 lg:-ml-6 lg:mt-40 lg:max-w-md">
        <h1 className="text-red-500 text-3xl font-semibold">{project.title}</h1>
        <p className="text-md text-gray-300">
          {t(project.description as string)}
        </p>
        <div className="flex gap-5 items-center justify-center">
          <Link
            href={project.linkRepository}
            target="_blank"
            className="flex items-center gap-2 p-4 rounded-md font-semibold text-gray-300 transition-all duration-200 text-md relative z-[1] overflow-hidden border-2 border-red-500 hover:text-white hover:border-red-500 before:content-[''] before:absolute before:-left-[50px] before:top-0 before:w-0 before:h-full before:bg-red-500 before:-z-[1] before:transition-all before:duration-1000 hover:before:w-[250%] before:skew-x-[45deg]"
          >
            <AiFillGithub size={24} />{' '}
            <span className="hidden sm:block">{t('view-repository')}</span>
          </Link>
          <Link
            href={project.linkWebsite}
            target="_blank"
            className="flex items-center gap-2 p-4 rounded-md font-semibold text-gray-300 transition-all duration-200 text-md relative z-[1] overflow-hidden border-2 border-red-500 hover:text-white hover:border-red-500 before:content-[''] before:absolute before:-left-[50px] before:top-0 before:w-0 before:h-full before:bg-red-500 before:-z-[1] before:transition-all before:duration-1000 hover:before:w-[250%] before:skew-x-[45deg]"
          >
            <TbNetwork size={24} />{' '}
            <span className="hidden sm:block">{t('view-website')}</span>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
