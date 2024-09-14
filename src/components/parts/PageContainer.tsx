type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="flex flex-col gap-6 p-8">{children}</div>;
};

export default PageContainer;
