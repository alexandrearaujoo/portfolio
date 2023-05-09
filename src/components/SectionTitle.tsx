interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  const titleSplited = title.split(' ');

  return (
    <section className="flex flex-col items-center justify-center gap-4 my-20">
      <div className="flex items-center gap-2 justify-center">
        <h1 className="text-white font-normal text-3xl md:text-5xl flex gap-2">
          {titleSplited[0]}{' '}
          <span className="text-red-500 font-normal">{titleSplited[1]}</span>
        </h1>
      </div>
    </section>
  );
};

export default SectionTitle;
