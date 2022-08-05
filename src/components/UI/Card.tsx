import "./Card.css";

interface ICardProps {
  className: string;
  children: React.ReactNode;
}

const Card = (props: ICardProps) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
