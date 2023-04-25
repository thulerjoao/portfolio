import * as Style from "./style";
import jptl from "../../assets/image/jptl.jpg";
import "animate.css";

interface prop {
  active: number;
  lastOne: number;
}

const Portfolio = ({ active, lastOne }: prop) => {
  return (
    <Style.PortfolioComponent
      className={`animate__animated ${
        active === 1
          ? active < lastOne
            ? "animate__backInLeft"
            : "animate__backInRight"
          : lastOne === 1 && active < lastOne
          ? "animate__backOutRight"
          : "animate__backOutLeft"
      }  animate__delay-0.2s`}
    >
      <section>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YVI-q3idGiM"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
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
