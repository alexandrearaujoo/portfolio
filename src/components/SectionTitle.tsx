interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  const titleSplited = title.split(' ');

  return (
    <section className="flex flex-col items-center justify-center gap-4 my-20">
      <div className="flex items-center gap-2 justify-center">
        <h1 className="text-white font-normal text-5xl">{titleSplited[0]}</h1>
        <h1 className="text-red-500 font-normal text-5xl truncate w-2/4 sm:w-full">
          {titleSplited[1]}
        </h1>
      </div>
    </section>
  );
};

export default SectionTitle;
