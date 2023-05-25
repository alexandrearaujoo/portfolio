'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import { CgMenuRight } from 'react-icons/cg';
import { HiOutlineLanguage } from 'react-icons/hi2';

import Logo from './Logo';

import { links } from '@/constants/links';
import { useTranslation } from '@/i18n/client';
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' }
};

const Header = ({ lang }: { lang: string }) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { t } = useTranslation(lang, 'home');

  const pathnameToRedirect = pathName.split('/')[2]
    ? pathName.split('/')[2]
    : '';

  return (
    <>
      <header className="hidden md:flex py-5 w-full justify-between items-center">
        <Link href={`/${lang}`}>
          <Logo />
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            {links.map(({ id, href, icon: Icon, label }) => (
              <li
                key={id}
                className={`${href === pathName ? 'underline' : ''}`}
              >
                <Link
                  href={`/${lang}${href}`}
                  className={`flex items-center gap-2 font-bold transition-all duration-200 ${
                    `/${lang}${href}` === pathName
                      ? 'text-red-500 hover:text-red-400'
                      : 'text-white hover:text-white/70'
                  }`}
                >
                  <Icon size={24} />
                  {t(label)}
                </Link>
              </li>
            ))}
            <li
              className="relative flex gap-2 items-center"
              onMouseEnter={() => setIsOpenLanguage(true)}
              onMouseLeave={() => setIsOpenLanguage(false)}
            >
              <HiOutlineLanguage size={24} className="text-white" />
              <label className="text-white font-bold">
                {lang === 'en' ? t('english') : t('portuguese')}
              </label>
              <AiFillCaretRight
                size={24}
                className={`text-white transition duration-200 ${
                  isOpenLanguage && 'rotate-90'
                }`}
              />
              {isOpenLanguage && (
                <div className="absolute top-6 right-0 bg-white shadow-md rounded-md p-2 flex flex-col gap-2">
                  <Link
                    href={
                      pathName.split('/').length === 4
                        ? '/en/projects/all'
                        : `/en/${pathnameToRedirect}`
                    }
                    className="font-bold transition duration-200 p-1 rounded-md hover:bg-gray-300"
                  >
                    {t('english')}
                  </Link>
                  <Link
                    href={
                      pathName.split('/').length === 4
                        ? '/pt/projects/all'
                        : `/pt/${pathnameToRedirect}`
                    }
                    className="font-bold transition duration-200 p-1 rounded-md hover:bg-gray-300"
                  >
                    {t('portuguese')}
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <motion.aside className="relative w-full py-5 flex justify-between items-center md:hidden">
        <Link href={`/${lang}`} className="px-14">
          <Logo />
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="transition-all duration-200 px-14"
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
          className="fixed top-0 w-screen bg-black h-screen z-50 p-10"
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
              <li key={id}>
                <Link
                  href={`/${lang}${href}`}
                  className={`flex items-center gap-2 font-bold text-2xl transition-all duration-200 ${
                    `/${lang}${href}` === pathName
                      ? 'text-red-500 hover:text-red-400'
                      : 'text-white hover:text-white/70'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={24} />
                  {t(label)}
                </Link>
              </li>
            ))}
            <li
              className="relative flex gap-2 items-center"
              onClick={() => setIsOpenLanguage(!isOpenLanguage)}
            >
              <HiOutlineLanguage size={24} className="text-white" />
              <label className="text-white text-2xl font-bold">
                {lang === 'en' ? t('english') : t('portuguese')}
              </label>
              <AiFillCaretRight
                size={24}
                className={`text-white transition duration-200 ${
                  isOpenLanguage && 'rotate-90'
                }`}
              />
              {isOpenLanguage && (
                <div className="absolute top-10 right-0 bg-white w-32 shadow-md rounded-md p-2 flex flex-col gap-2">
                  <Link
                    href={`/en/${pathnameToRedirect}`}
                    className="font-bold transition duration-200 p-1 rounded-md hover:bg-gray-300"
                  >
                    {t('english')}
                  </Link>
                  <Link
                    href={`/pt/${pathnameToRedirect}`}
                    className="font-bold transition duration-200 p-1 rounded-md hover:bg-gray-300"
                  >
                    {t('portuguese')}
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </motion.nav>
      </motion.aside>
    </>
  );
};

export default Header;
