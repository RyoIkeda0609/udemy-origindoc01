type SentenceDivProps = {
  children: React.ReactNode;
};

const SentenceDiv = ({ children }: SentenceDivProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      {children}
    </div>
  );
};

export default SentenceDiv;
