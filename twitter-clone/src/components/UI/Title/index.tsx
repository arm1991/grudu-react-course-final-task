import './styles.scss';

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <div className="page-title__wrapper">
      <h1 className="page-title">{text}</h1>
    </div>
  );
}

export default Title;
