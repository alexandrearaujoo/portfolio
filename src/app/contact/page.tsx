import ContactForm from '@/components/ContactForm';
import SectionTitle from '@/components/SectionTitle';
import SendEmailAnimation from '@/components/SendEmailAnimation';

export default function Contatct() {
  return (
    <main>
      <SectionTitle title="Contate me" />
      <section className="flex flex-col items-center justify-around gap-5 md:flex-row">
        <ContactForm />
        <SendEmailAnimation />
      </section>
    </main>
  );
}
