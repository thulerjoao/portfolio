import * as Style from "./style";
import jptl from "../../assets/image/jptl.jpg";
import "animate.css";

interface prop {
  active: number;
}

const Portfolio = ({ active }: prop) => {
  return (
    <Style.PortfolioComponent>
      <section>
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/YVI-q3idGiM"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/YVI-q3idGiM"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </Style.PortfolioComponent>
  );
};

export default Portfolio;
