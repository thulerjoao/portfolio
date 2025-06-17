import { useState } from "react";
import jptl from "../../assets/image/jptl.jpg";
import { SectionsType } from "../../types/sectionsType";
import {
  AsideMenuContainer,
  BtnGit,
  BtnIn,
  MenuButton,
  MenuIcon,
} from "./style";

interface Props {
  activeSection: SectionsType;
  scrollToSection: (sectionId: SectionsType) => void;
}

const AsideMenu = ({ activeSection, scrollToSection }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const name = "João Lima";

  return (
    <AsideMenuContainer isOpen={isOpen}>
      <section className="globalContainer">
        <div className="menuIcon" onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </div>
        <div className="rightCoverArea" onClick={() => setIsOpen(false)} />
        <section className="menuContent">
          <div className="picAndName" >
            <img alt="profile image" src={jptl}  onClick={() => scrollToSection("welcome")}/>
            <div className="nameText">
              <p className="name"  onClick={() => scrollToSection("welcome")}>{name}</p>
              <p className="stack">Desenvolvedor Full-Stack</p>
            </div>
          </div>
          <div className="buttonsList">
            <MenuButton active={activeSection === "qualifications"} onClick={() => scrollToSection("qualifications")}>Qualificações</MenuButton>
            <MenuButton active={activeSection === "portfolio"}  onClick={() => scrollToSection("portfolio")}>Portfolio</MenuButton>
            <MenuButton active={activeSection === "experience"} onClick={() => scrollToSection("experience")}>Experiência</MenuButton>
            <MenuButton active={activeSection === "about me"} onClick={() => scrollToSection("about me")}>Sobre mim</MenuButton>
            <MenuButton active={activeSection === "contact"} onClick={() => scrollToSection("contact")}>Constato</MenuButton>
          </div>
          <footer>
            <a href="https://github.com/thulerjoao" target="_blank">
              <BtnGit />
            </a>
            <a href="http://www.linkedin.com/in/thulerjoao" target="_blank">
              <BtnIn />
            </a>
          </footer>
        </section>
      </section>
    </AsideMenuContainer>
  );
};

export default AsideMenu;
