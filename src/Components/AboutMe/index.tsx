import "animate.css";
import jptl from "../../assets/image/jptl.jpg";
import { LanguageType } from "../../types/languageType";
import * as Style from "./style";

interface prop {
  active: number;
  language: LanguageType;
}

const AboutMe = ({ active, language }: prop) => {
  return (
    <Style.AbouMeComponent
      className={`animate__animated ${
        active === 0 ? "animate__fadeInLeftBig" : "animate__fadeOutLeftBig"
      }  animate__delay-0.5s`}
    >
      <section>
        <div className="firstBlock">
          <img alt="profile image" src={jptl}></img>
          <div>
            <h2>João Pedro Thuler Lima</h2>
            <p>{language === "bra"? "Desenvolvedor Full-stack" : "Full-Stack Developer"}</p>
          </div>
        </div>
        <div className="mainText">
          {language === "bra" ? (
            <p>
              Engenheiro mecânico completamente apaixonado por tecnologia. Em
              2022 fui apresentado mais a fundo ao mundo da programação e fiquei
              completamente encatado com todas as possibilidades. Perante a
              isso, resolvi abandonar a carreira de engenheiro e mergulhar de
              cabeça nessa jornada que quero levar pelo resto da vida. Comecei
              então, a estudar arquitetura de software, NodeJS e alguns
              frameworks back-end como NestJS e Express, e também front-end como
              ReactJS, que até então foi o que mais me identifiquei
            </p>
          ) : (
            <p>
              I am a mechanical engineer completely passionate about technology.
              In 2022 I was introduced to the world of programming more deeply
              and I was completely delighted with all the possibilities. Faced
              with this, I decided to abandon my career as an engineer and dive
              headlong into this journey that I want to take for the rest of my
              life. So I started to study software architecture, NodeJS and some
              back-end frameworks like NestJS and Express, and also front-end
              like ReactJS, that is so far the technology I identified the most.
            </p>
          )}
        </div>
        <footer>
          <a href="https://github.com/thulerjoao" target="_blank">
            <Style.BtnGit />
            <p>GitHub</p>
          </a>
          <a href="http://www.linkedin.com/in/thulerjoao" target="_blank">
            <Style.BtnIn />
            <p>Linkedin</p>
          </a>
        </footer>
      </section>
    </Style.AbouMeComponent>
  );
};

export default AboutMe;
