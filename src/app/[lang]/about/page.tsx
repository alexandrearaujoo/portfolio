import Image from 'next/image';
import Link from 'next/link';

import SectionTitle from '@/components/SectionTitle';

import ProfileImage from '../../../../public/images/profile-photo.jpg';

import { skills } from '@/constants/skills';
import { useTranslation } from '@/i18n';

export default async function About({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'about-me');

  return (
    <main className="px-16 md:px-0">
      <SectionTitle title={t('title')} />
      <section className="flex flex-col-reverse gap-10 items-center justify-between md:flex-row">
        <article className="w-full md:w-2/4 flex flex-col gap-5">
          <h1 className="text-white text-3xl">
            {t('i-am')} <span className="text-red-500">{t('position')}</span>
          </h1>
          <p className="text-white text-2xl">{t('about-me')}</p>
          <Link
            className="p-5 bg-red-500 text-white text-center font-normal text-xl rounded-md max-w-xs transition-all duration-200 hover:bg-red-400"
            href={process.env.NEXT_PUBLIC_CV_LINK as string}
            target="_blank"
          >
            {t('cv')}
          </Link>
        </article>
        <div>
          <Image
            src={ProfileImage}
            alt="Profile Photo"
            priority
            width={300}
            height={300}
            draggable={false}
            className="rounded-md"
          />
        </div>
      </section>
      <SectionTitle title={t('my-skills')} />
      <section className="pb-10">
        <ul className="grid grid-cols-auto-fit gap-5">
          {skills.map(({ color, icon: Icon, id, name }) => (
            <li key={id} className="flex flex-col items-center gap-2">
              <Icon
                size={50}
                color={color}
                className="transition-all duration-200 hover:opacity-50"
              />
              <span className="text-white">{name.split(' ')}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
