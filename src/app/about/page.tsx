import Image from 'next/image';

import SectionTitle from '@/components/SectionTitle';

import { skills } from '@/constants/skills';

export default function About() {
  return (
    <main>
      <SectionTitle title="Sobre mim" />
      <section className="flex flex-col-reverse gap-10 items-center justify-between md:flex-row">
        <article className="w-full md:w-2/4 flex flex-col gap-5">
          <h1 className="text-white text-3xl">
            Sou{' '}
            <span className="text-red-500">Desenvolvedor Web Full Stack</span>
          </h1>
          <p className="text-white text-2xl">
            Desde 2018 na área de tecnologia, minha paixão é criar soluções
            criativas e eficazes para problemas complexos de negócios usando
            tecnologias de ponta. Eu sou um profissional motivado e
            colaborativo, que adora trabalhar em equipe para alcançar objetivos
            ambiciosos.
          </p>
          <a
            className="p-5 bg-red-500 text-white text-center font-normal text-xl rounded-md max-w-xs transition-all duration-200 hover:bg-red-400"
            href="/CV Alexandre Araujo.pdf"
            download="CV Alexandre Araujo"
          >
            Download CV
          </a>
        </article>
        <div>
          <Image
            src="/images/profile-photo.jpg"
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-md"
          />
        </div>
      </section>
      <SectionTitle title="Minhas Habilidades" />
      <section className="pb-10">
        <ul className="grid grid-cols-auto-fit gap-5">
          {skills.map(({ hoverColor, icon: Icon, id, name }) => (
            <li key={id} className="flex flex-col items-center gap-2">
              <Icon
                size={50}
                className={`text-white transition-all duration-200 hover:text-[${hoverColor}]`}
              />
              <span className="text-white">{name.split(' ')}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
