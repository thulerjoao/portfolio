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
      <section>
        <h3>INFORMAÇÕES GERAIS DE CONTATO:</h3>
        <div className="divOut">
          <p>Email</p>
          <div className="divIn">
            <p>thuler_lima@hotmail.com</p>
            <Style.LgEmail/>
          </div>
        </div>
        <div className="divOut">
          <p>Telefone</p>
          <div className="divIn">
            <p>+55 (22) 99905-9574</p>
            <Style.LgTel/>
          </div>
        </div>
      </section>
    </Style.ContactComponent>
  );
};

export default Contact;
