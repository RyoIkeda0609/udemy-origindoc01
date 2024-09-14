type SentencePProps = {
  children: React.ReactNode;
};
const SentenceP = ({ children }: SentencePProps) => {
  return <p className="max-w-2xl">{children}</p>;
};

export default SentenceP;
