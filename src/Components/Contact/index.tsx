import * as Style from "./style";
import jptl from "../../assets/image/jptl.jpg";
import "animate.css";

interface prop {
  active: number;
}

const Contact = ({ active }: prop) => {
  return (
    <Style.ContactComponent
      className={`animate__animated ${
        active === 3 ? "animate__fadeInRightBig" : "animate__fadeOutRightBig"
      }  animate__delay-0.5s`}
    >
      <section>CONTACT</section>
    </Style.ContactComponent>
  );
};

export default Contact;
