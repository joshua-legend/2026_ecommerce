type TitleProps = {
  title: string;
};

const Title = ({ title = "희찬이보고싶다." }: Partial<TitleProps>) => {
  return <h2 className="py-2 text-4xl font-bold">{title}</h2>;
};

export default Title;
