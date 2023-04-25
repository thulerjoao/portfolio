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
            ? "animate__backInLeft"
            : "animate__backInRight"
          : lastOne === 2 && active < lastOne
          ? "animate__backOutRight"
          : "animate__backOutLeft"
      }  animate__delay-0.2s`}
    >
      <section>CURRICULO</section>
    </Style.CurriculoComponent>
  );
};

export default Curriculo;
