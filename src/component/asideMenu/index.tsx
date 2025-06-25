import { useState } from "react";
import jptl from "../../assets/image/jptl.jpg";
import { LanguageType } from "../../types/languageType";
import { SectionsType } from "../../types/sectionsType";
import {
  AsideMenuContainer,
  BtnGit,
  BtnIn,
  MenuButton,
  MenuIcon,
} from "./style";

interface Props {
  language: LanguageType;
  activeSection: SectionsType;
  scrollToSection: (sectionId: SectionsType) => void;
}

const AsideMenu = ({ language, activeSection, scrollToSection }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const name = "João Lima";

  const handleClick = (section: SectionsType) => {
    setIsOpen(false);
    scrollToSection(section);
  };

  return (
    <AsideMenuContainer isOpen={isOpen}>
      <section className="globalContainer">
        <div className="menuIcon" onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </div>
        <div className="rightCoverArea" onClick={() => setIsOpen(false)} />
        <section className="menuContent">
          <div className="picAndName">
            <img
              alt="profile image"
              src={jptl}
              onClick={() => handleClick("welcome")}
            />
            <div className="nameText">
              <p className="name" onClick={() => handleClick("welcome")}>
                {name}
              </p>
              <p className="stack">
                {language === "bra"
                  ? "Desenvolvedor Full-Stack"
                  : "Full-Stack Developer"}
              </p>
            </div>
          </div>
          <div className="buttonsList">
            <MenuButton
              active={activeSection === "qualifications"}
              onClick={() => handleClick("qualifications")}
            >
              {language === "bra" ? "Qualificações" : "Qualifications"}
            </MenuButton>
            <MenuButton
              active={activeSection === "portfolio"}
              onClick={() => handleClick("portfolio")}
            >
              {language === "bra" ? "Portfólio" : "Portfolio"}
            </MenuButton>
            {/* <MenuButton
              active={activeSection === "experience"}
              onClick={() => handleClick("experience")}
            >
              Experiência
            </MenuButton> */}
            <MenuButton
              active={activeSection === "about me"}
              onClick={() => handleClick("about me")}
            >
              {language === "bra" ? "Sobre mim" : "About me"}
            </MenuButton>
            <MenuButton
              active={activeSection === "contact"}
              onClick={() => handleClick("contact")}
            >
              {language === "bra" ? "Contato" : "Contact"}
            </MenuButton>
          </div>
          <footer>
            <a
              href="https://github.com/thulerjoao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BtnGit />
            </a>
            <a
              href="http://www.linkedin.com/in/thulerjoao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BtnIn />
            </a>
          </footer>
        </section>
      </section>
    </AsideMenuContainer>
  );
};

export default AsideMenu;
