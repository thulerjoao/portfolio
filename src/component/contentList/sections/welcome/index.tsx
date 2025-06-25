import "animate.css";
import jptl from "../../../../assets/image/jptl.jpg";
import { SectionsType } from "../../../../types/sectionsType";
import { DownArrow, WelcomeContainer } from "./style";
import { LanguageType } from "../../../../types/languageType";

interface Props {
  language: LanguageType;
  scrollToSection: (sectionId: SectionsType) => void;
}

const Welcome = ({ language, scrollToSection }: Props) => {
  return (
    <WelcomeContainer>
      <div className="picture">
        <img alt="profile image" src={jptl} />
      </div>
      <div className="about desktopAbout">
        <p>
          {language === "bra" ? "Olá," : "Hello,"}
          <br />
          {language === "bra" ? "me chamo " : "I am"}{" "}
          <span className="colorful"> João Pedro Thuler Lima</span>
          <br />
          {language === "bra"
            ? "Desenvolvedor Full-stack"
            : "Full-stack Developer"}
        </p>
      </div>
      <div className="about mobileAbout">
        <p>
          {language === "bra" ? "Olá," : "Hello,"}
          <br />
          {language === "bra" ? "me chamo" : "I am"}{" "}
          <span className="colorful"> João Lima</span>
          <br />
          {language === "bra"
            ? "Desenvolvedor Full-stack"
            : "Full-stack Developer"}
        </p>
      </div>
      <div
        className="scrollDown"
        onClick={() => scrollToSection("qualifications")}
      >
        <p>
          {language === "bra"
            ? "Confira abaixo \nminhas qualificações"
            : "Check below \nmy qualifications"}
        </p>
        <div className="animate__animated animate__bounce animate__infinite animate__duration-2s">
          <DownArrow />
        </div>
      </div>
    </WelcomeContainer>
  );
};

export default Welcome;
