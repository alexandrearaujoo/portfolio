'use client';

import Link from 'next/link';

import { socials } from '@/constants/socials';

const Socials = () => {
  return (
    <>
      <aside className="hidden lg:flex flex-col justify-center items-center gap-4">
        {socials.map(({ id, href, icon: Icon }) => (
          <Link href={href} key={id} target="_blank">
            {' '}
            <Icon
              size={24}
              className="text-white transition-all duration-200 hover:text-white/60"
            />{' '}
          </Link>
        ))}
      </aside>
      <footer className="py-4 flex justify-center items-center gap-4 lg:hidden">
        {socials.map(({ id, href, icon: Icon }) => (
          <Link href={href} key={id} target="_blank">
            {' '}
            <Icon size={24} className="text-white" />{' '}
          </Link>
        ))}
      </footer>
    </>
  );
};

export default Socials;
