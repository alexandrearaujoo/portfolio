import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Page not Found'
};

export default function NotFoundCatchAll() {
  notFound();
}
