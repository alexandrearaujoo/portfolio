import {
  AiOutlineFolderOpen,
  AiOutlineHome,
  AiOutlineMail
} from 'react-icons/ai';
import { MdEmojiPeople } from 'react-icons/md';

export const links = [
  { id: 1, href: '', label: 'home', icon: AiOutlineHome },
  { id: 2, href: '/about', label: 'about-me', icon: MdEmojiPeople },
  { id: 3, href: '/projects', label: 'projects', icon: AiOutlineFolderOpen },
  { id: 4, href: '/contact', label: 'contact', icon: AiOutlineMail }
];
