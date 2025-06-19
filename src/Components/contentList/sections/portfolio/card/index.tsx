import { CardContainer } from "./style";

interface Props {
  title?: string;
  link?: string;
  linkName?: string;
  figma?: string;
  img: string;
}

const Card = ({ title, link, linkName, img, figma }: Props) => {
  return (
    <CardContainer>
      <div className="imageContainer">
        <a
          className="imageLink"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img} />
        </a>
      </div>
      <a
        className="title"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <a
        className="linkName"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkName}
      </a>
    </CardContainer>
  );
};

export default Card;
