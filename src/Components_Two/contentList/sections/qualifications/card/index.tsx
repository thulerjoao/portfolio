import { ReactElement } from "react";
import { CardContainer } from "./style";

interface Props {
  title: string;
  description: string;
  icon: ReactElement;
}

const Card = ({ title, description, icon }: Props) => {
  return <CardContainer>
    <div className="title">
        {icon}
        <p>{title}</p>
    </div>
    <p className="description">{description}</p>
  </CardContainer>;
};

export default Card;
