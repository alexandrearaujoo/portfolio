'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuRight } from 'react-icons/cg';

import { links } from '@/constants/links';
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, y: '-100%' }
};

const Header = () => {
  const matches = useMediaQuery('(min-width: 768px)');
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {matches ? (
        <header className="py-5 w-full flex justify-end">
          <nav>
            <ul className="flex items-center gap-4">
              {links.map(({ id, href, icon: Icon, label }) => (
                <li
                  key={id}
                  className={`${href === pathName ? 'underline' : ''}`}
                >
                  <Link
                    href={href}
                    className={`flex items-center gap-2 font-bold transition-all duration-200 ${
                      href === pathName
                        ? 'text-red-500 hover:text-red-400'
                        : 'text-white hover:text-white/70'
                    }`}
                  >
                    <Icon size={24} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      ) : (
        <motion.aside className="relative w-full py-5 flex justify-end">
          <button
            onClick={() => setIsOpen(true)}
            className="transition-all duration-200"
          >
            <CgMenuRight
              size={24}
              className="text-white transition-all duration-200 hover:text-white/60"
            />
          </button>
          <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
            className="absolute top-0 w-full bg-black h-screen z-10 p-10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="transition-all duration-200 block ml-auto"
            >
              <AiOutlineClose
                size={24}
                className="text-white transition-all duration-200 hover:text-white/60"
              />
            </button>
            <ul className="flex flex-col gap-5 items-center justify-center h-full">
              {links.map(({ id, href, icon: Icon, label }) => (
                <li
                  key={id}
                  className={`${href === pathName ? 'underline' : ''}`}
                >
                  <Link
                    href={href}
                    className={`flex items-center gap-2 font-bold text-2xl transition-all duration-200 ${
                      href === pathName
                        ? 'text-red-500 hover:text-red-400'
                        : 'text-white hover:text-white/70'
                    }`}
                  >
                    <Icon size={24} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </motion.aside>
      )}
    </>
  );
};

export default Header;
