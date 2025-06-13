import { useState } from "react";
import jptl from "../../assets/image/jptl.jpg";
import {
  AsideMenuContainer,
  BtnGit,
  BtnIn,
  MenuButton,
  MenuIcon,
} from "./style";

const AsideMenu = () => {
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
          <div className="picAndName">
            <img alt="profile image" src={jptl} />
            <div className="nameText">
              <p className="name">{name}</p>
              <p className="stack">Desenvolver Full-Stack</p>
            </div>
          </div>
          <div className="buttonsList">
            <MenuButton>Qualificações</MenuButton>
            <MenuButton>Portfolio</MenuButton>
            <MenuButton>Experiência</MenuButton>
            <MenuButton>Sobre mim</MenuButton>
            <MenuButton>Constato</MenuButton>
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
