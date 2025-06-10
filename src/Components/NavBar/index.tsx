import { Dispatch, SetStateAction } from "react";
import braFlag from "../../assets/image/braFlag.png";
import euaFlag from "../../assets/image/euaFlag.png";
import { LanguageType } from "../../types/languageType";
import * as Styled from "./style";

interface Selected {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  setlastOne: Dispatch<SetStateAction<number>>;
  language: LanguageType;
  setLanguage: Dispatch<SetStateAction<LanguageType>>;
}

const NavBar = ({
  active,
  setActive,
  setlastOne,
  language,
  setLanguage,
}: Selected) => {
  const handleChange = (current: number, newOne: number) => {
    current !== newOne && setlastOne(current);
    setActive(newOne);
  };

  return (
    <Styled.Header>
      <div onClick={() => handleChange(active, 0)}>
        <a className={active === 0 ? "active" : ""}>
          {language === "bra" ? "SOBRE MIM" : "ABOUT ME"}
        </a>
      </div>
      <div onClick={() => handleChange(active, 1)}>
        <a className={active === 1 ? "active" : ""}>
          {language === "bra" ? "PROJETOS" : "PROJECTS"}
        </a>
      </div>
      <div onClick={() => handleChange(active, 2)}>
        <a className={active === 2 ? "active" : ""}>
          {language === "bra" ? "FORMAÇÃO" : "EDUCATION"}
        </a>
      </div>
      <div onClick={() => handleChange(active, 3)}>
        <a className={active === 3 ? "active" : ""}>
          {language === "bra" ? "CONTATO" : "CONTACT"}
        </a>
      </div>
      <section className="idiom">
        <img
          className={language === "eua" ? "selected" : ""}
          alt="flag eua"
          src={euaFlag}
          onClick={() => setLanguage("eua")}
        ></img>
        <img
          className={language === "bra" ? "selected" : ""}
          alt="flag brazil"
          src={braFlag}
          onClick={() => setLanguage("bra")}
        ></img>
      </section>
    </Styled.Header>
  );
};

export default NavBar;
