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
        active === 3 ? "animate__backInRight" : "animate__backOutRight"
      }  animate__delay-0.2s`}
    >
      <section>CONTACT</section>
    </Style.ContactComponent>
  );
};

export default Contact;
