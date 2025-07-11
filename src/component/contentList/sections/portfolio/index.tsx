import { LanguageType } from "../../../../types/languageType";
import Card from "./card";
import coffee from "./images/coffee.png";
import datarain from "./images/datarain.png";
import roma from "./images/roma.png";
import fourmiga from "./images/fourmiga.png";
import { PortfolioContainer } from "./style";

interface Props {
  language: LanguageType;
}

const Portfolio = ({ language }: Props) => {
  return (
    <PortfolioContainer>
      <h2>{language === "bra" ? "Projetos Recentes" : "Recent Projects"}</h2>
      <h3>Next JS</h3>
      <div className="cardsList">
        <Card
          title="4miga games"
          linkName="https://4miga.games/"
          link="https://4miga.games/"
          img={fourmiga}
        />
      </div>
      <h3>React JS</h3>
      <div className="cardsList">
        <Card
          title="Roma Industriais"
          linkName="https://romaindustriais.link/"
          link="https://roma-industriais.vercel.app/"
          img={roma}
        />
        <Card
          title="DataRain System"
          linkName="https://datarain.link/"
          link="https://www.youtube.com/watch?v=JWMyiTIN71U"
          img={datarain}
          figma="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fxz7GoBLP3omHao64Uux4vg%2FUntitled%3Fnode-id%3D0%253A1%26t%3DBJjPRLJoA8tNPx0w-1"
        />
      </div>
      <h3>React Native</h3>
      <div className="cardsList">
        <Card
          title="Coffee App"
          linkName="https://coffeeapp.link/"
          link="https://www.youtube.com/shorts/meKTZ56yYY8"
          img={coffee}
          figma="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fxz7GoBLP3omHao64Uux4vg%2FUntitled%3Fnode-id%3D0%253A1%26t%3DBJjPRLJoA8tNPx0w-1"
        />
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;
