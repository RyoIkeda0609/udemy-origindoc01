type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <h2 className="text-2xl font-bold">{children}</h2>;
};

export default Title;
