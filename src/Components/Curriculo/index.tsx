import * as Style from "./style";
import jptl from "../../assets/image/jptl.jpg";
import "animate.css";

interface prop {
  active: number;
  lastOne: number;
}

const Curriculo = ({ active, lastOne }: prop) => {
  return (
    <Style.CurriculoComponent
      className={`animate__animated ${
        active === 2
          ? active < lastOne
            ? "animate__fadeInLeftBig"
            : "animate__fadeInRightBig"
          : active < lastOne
          ? "animate__fadeOutRightBig"
          : "animate__fadeOutLeftBig"
      }  animate__delay-0.5s`}
    >
      <section>
        
      </section>
    </Style.CurriculoComponent>
  );
};

export default Curriculo;
