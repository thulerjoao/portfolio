import * as Style from "./style";
import jptl from "../../assets/image/jptl.jpg";
import "animate.css";

interface prop {
  active: number;
  isEua: boolean;
}

const Contact = ({ active, isEua }: prop) => {
  return (
    <Style.ContactComponent
      className={`animate__animated ${
        active === 3 ? "animate__fadeInRightBig" : "animate__fadeOutRightBig"
      }  animate__delay-0.5s`}
    >
      <section>
        <h3>{!isEua? "Informações gerais de contato:":" General contact information:"}</h3>
        <div className="divOut">
          <p>Email</p>
          <div className="divIn">
            <p>thuler_lima@hotmail.com</p>
            <Style.LgEmail />
          </div>
        </div>
        <div className="divOut">
          <p>{!isEua? "Telefone":"Phone"}</p>
          <div className="divIn">
            <p>+55 (22) 99905-9574</p>
            <Style.LgTel />
          </div>
        </div>
      </section>
    </Style.ContactComponent>
  );
};

export default Contact;
