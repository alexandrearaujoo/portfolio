import { AiFillHtml5 } from 'react-icons/ai';
import { DiNodejs } from 'react-icons/di';
import { RiReactjsFill } from 'react-icons/ri';
import {
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiExpress,
  SiPrisma,
  SiJest,
  SiPostgresql,
  SiMongodb,
  SiCss3
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import TypeORMIcon from '@/components/TypeORMIcon';

export const skills = [
  {
    id: 1,
    name: 'ReactJS',
    icon: RiReactjsFill,
    hoverColor: '#61DBFB'
  },
  {
    id: 2,
    name: 'NextJS',
    icon: TbBrandNextjs,
    hoverColor: '#d0d0d0'
  },
  { id: 3, name: 'TypeScript', icon: SiTypescript, hoverColor: '#007acc' },
  {
    id: 4,
    name: 'JavaScript',
    icon: SiJavascript,
    hoverColor: '#F7DF1E'
  },
  {
    id: 5,
    name: 'Styled Components',
    icon: SiStyledcomponents,
    hoverColor: '#DB7093'
  },
  {
    id: 6,
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    hoverColor: '#06B6D4'
  },
  {
    id: 7,
    name: 'NodeJS',
    icon: DiNodejs,
    hoverColor: '#339933'
  },
  {
    id: 8,
    name: 'ExpressJS',
    icon: SiExpress,
    hoverColor: '#339933'
  },
  {
    id: 9,
    name: 'PrismaORM',
    icon: SiPrisma,
    hoverColor: '#2D3748'
  },
  {
    id: 10,
    name: 'TypeORM',
    icon: TypeORMIcon,
    hoverColor: '#ffc04c'
  },
  {
    id: 11,
    name: 'Jest',
    icon: SiJest,
    hoverColor: '#C63D14'
  },
  {
    id: 12,
    name: 'PostgreSQL',
    icon: SiPostgresql,
    hoverColor: '#0064a5'
  },
  {
    id: 13,
    name: 'MongoDB',
    icon: SiMongodb,
    hoverColor: '#3FA037'
  },
  {
    id: 14,
    name: 'HTML5',
    icon: AiFillHtml5,
    hoverColor: '#E44D26'
  },
  {
    id: 15,
    name: 'CSS3',
    icon: SiCss3,
    hoverColor: '#264DE4'
  }
];
