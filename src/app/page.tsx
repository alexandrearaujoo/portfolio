import Positions from '@/components/Positions';
import SnowParticles from '@/components/SnowParticles';
import Socials from '@/components/Socials';

export default function Home() {
  return (
    <>
      <SnowParticles />
      <main className="flex flex-col-reverse h-[85vh] justify-between items-center lg:flex-row">
        <Socials />
        <section className="absolute top-[45%] left-1/2 -translate-x-1/2 flex flex-col items-start gap-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <h1 className="text-6xl text-red-500 font-bold">Alexandre</h1>
            <h1 className="text-6xl text-white font-bold">Araujo</h1>
          </div>
          <Positions />
        </section>
      </main>
    </>
  );
}
