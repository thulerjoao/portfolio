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
            <p>
              {language === "bra"
                ? "Desenvolvedor Full-stack"
                : "Full-Stack Developer"}
            </p>
          </div>
        </div>
        <div className="mainText">
          {language === "bra" ? (
            <div>
              <p style={{ textIndent: "2em" }}>
                Sou engenheiro mecânico de formação, mas encontrei minha
                verdadeira paixão na tecnologia e no desenvolvimento de
                software. Desde 2022, mergulhei de cabeça no mundo da
                programação, iniciando meus estudos em arquitetura de software e
                desenvolvimento web com foco em JavaScript, TypeScript, Node.js
                e frameworks como NestJS, Express e React.
              </p>
              <br />
              <p style={{ textIndent: "2em" }}>
                Ao longo dos últimos anos, atuei como desenvolvedor autônomo,
                com ênfase em projetos front-end. Tenho me especializado na
                criação de interfaces modernas, responsivas e funcionais,
                utilizando tecnologias como React, Next.js e React Native.
              </p>
              <br />
              <p style={{ textIndent: "2em" }}>
                Gosto de transformar ideias em experiências visuais e
                interativas, e meu maior interesse está em criar telas que unam
                estética, usabilidade e performance. Hoje, sigo evoluindo
                constantemente, em busca de boas práticas, novas ferramentas e
                desafios que me façam crescer como desenvolvedor.
              </p>
              <br />
              <p style={{ textIndent: "2em" }}>
                Atualmente, tenho como objetivo integrar uma equipe de
                desenvolvimento onde eu possa crescer ao lado de outras pessoas,
                fortalecendo não apenas minhas habilidades técnicas, mas também
                minhas capacidades interpessoais, como comunicação, colaboração
                e troca de conhecimento. Tudo isso proporcionado por um ambiente
                que estimule o aprendizado contínuo e o trabalho em conjunto.
              </p>
            </div>
          ) : (
            <div>
              <p style={{ textIndent: "2em" }}>
                I'm a mechanical engineer by degree, but I found my true passion
                in technology and software development. Since 2022, I've fully
                immersed myself in programming, starting with software
                architecture and backend development using JavaScript,
                TypeScript, Node.js, and frameworks like NestJS, Express and
                React.
              </p>
              <br />
              <p style={{ textIndent: "2em" }}>
                Over the past few years, I've been working as a freelance
                developer, focusing primarily on front-end projects. I've
                specialized in building modern, responsive, and user-friendly
                interfaces using technologies like React, Next.js, and React
                Native.
              </p>{" "}
              <br />
              <p style={{ textIndent: "2em" }}>
                I truly enjoy crafting UI experiences that combine clean design,
                usability, and performance. I'm constantly seeking to improve,
                learn new tools, follow best practices, and take on challenges
                that push me forward as a developer.
              </p>
              <br />
              <p style={{ textIndent: "2em" }}>
                Currently, my goal is to join a development team where I can
                grow alongside others, strengthening not only my technical
                skills but also my interpersonal abilities, such as
                communication, collaboration, and knowledge sharing. All of this
                provided by an environment that encourages continuous learning
                and teamwork.
              </p>
            </div>
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
