import ContactForm from '@/components/ContactForm';
import SectionTitle from '@/components/SectionTitle';
import SendEmailAnimation from '@/components/SendEmailAnimation';

import { useTranslation } from '@/i18n';

export default async function Contact({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'contact');

  return (
    <main className="px-16 md:px-0">
      <SectionTitle title={t('title')} />
      <section className="flex flex-col items-center justify-around gap-5 md:flex-row">
        <ContactForm lang={lang} />
        <SendEmailAnimation />
      </section>
    </main>
  );
}
