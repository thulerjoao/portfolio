import "animate.css";
import * as Style from "./style";
import { LanguageType } from "../../types/languageType";

interface prop {
  active: number;
  language: LanguageType;
}

const Contact = ({ active, language }: prop) => {
  return (
    <Style.ContactComponent
      className={`animate__animated ${
        active === 3 ? "animate__fadeInRightBig" : "animate__fadeOutRightBig"
      }  animate__delay-0.5s`}
    >
      <section>
        <h3>
          {language === "bra"
            ? "Informações gerais de contato:"
            : " General contact information:"}
        </h3>
        <div className="divOut">
          <p>Email</p>
          <div className="divIn">
            <p>thuler_lima@hotmail.com</p>
            <Style.LgEmail />
          </div>
        </div>
        <div className="divOut">
          <p>{language === "bra" ? "Telefone" : "Phone"}</p>
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
