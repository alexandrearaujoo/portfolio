import {
  AiOutlineFolderOpen,
  AiOutlineHome,
  AiOutlineMail
} from 'react-icons/ai';
import { MdEmojiPeople } from 'react-icons/md';

export const links = [
  { id: 1, href: '/', label: 'Home', icon: AiOutlineHome },
  { id: 2, href: '/about', label: 'Sobre mim', icon: MdEmojiPeople },
  { id: 3, href: '/projects', label: 'Projetos', icon: AiOutlineFolderOpen },
  { id: 4, href: '/contact', label: 'Contato', icon: AiOutlineMail }
];
