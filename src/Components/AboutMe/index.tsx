import * as Style from "./style";
import jptl from "../../assets/image/jptl.jpg";
import "animate.css";

interface prop {
  active: number;
}

const AboutMe = ({ active }: prop) => {
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
            <p>Full Stack Developer</p>
          </div>
        </div>
        <div className="mainText">
          <p>
            Engenheiro mecânico completamente apaixonado por tecnologia. Em 2022
            fui apresentado mais a fundo ao mundo da programação e fiquei
            completamente encatado com todas as possibilidades. Perante a isso,
            resolvi abandonar a carreira de engenheiro e mergulhar de cabeça
            nessa jornada que quero levar pelo resto da vida. Comecei então, a
            estudar arquitetura de software, NodeJS e alguns frameworks back-end
            como NestJS e Express, e também front-end como ReactJS, que até
            então foi o que mais me identifiquei. Atualmente estou a procura de uma
            primeira oportunidade para ingressar na área e assim dar
            continuidade a minha carreira de desenvolvedor.
          </p>
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
