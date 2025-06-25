import { LanguageType } from "../../../../types/languageType";
import { AboutMeContainer, Cake, Location } from "./style";

interface Props {
  language: LanguageType;
}

const AboutMe = ({ language }: Props) => {
  function calculateAge(birthDate: string) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    const birthMonth = birth.getMonth();
    const birthDay = birth.getDate();

    // Check if the birthday hasn't occurred yet this year
    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDay < birthDay)
    ) {
      age--;
    }

    return age;
  }

  return (
    <AboutMeContainer>
      <p className="aboutMe">{language === "bra" ? "Sobre mim" : "About me"}</p>
      <p className="myName">João Pedro Thuler Lima</p>
      <div className="locationBirthday">
        <Cake />
        <p>
          {language === "bra"
            ? `26/04/1993 (${calculateAge("1993-04-26")} anos)`
            : `04/26/93 (${calculateAge("1993-04-26")} years old)`}
        </p>
      </div>
      <div className="locationBirthday">
        <Location />
        <p>{language === "bra" ? "Brasil" : "Brazil"}</p>
      </div>
      <div className="mainText">
        {language === "bra" ? (
          <div>
            <p style={{ textIndent: "2em" }}>
              Sou engenheiro mecânico de formação, mas encontrei minha
              verdadeira paixão na tecnologia e no desenvolvimento de software.
              Desde 2022, mergulhei de cabeça no mundo da programação, iniciando
              meus estudos em arquitetura de software e desenvolvimento web com
              foco em JavaScript, TypeScript, Node.js e frameworks como NestJS,
              Express e React.
            </p>
            <br />
            <p style={{ textIndent: "2em" }}>
              Ao longo dos últimos anos, atuei como desenvolvedor autônomo, com
              ênfase em projetos front-end. Tenho me especializado na criação de
              interfaces modernas, responsivas e funcionais, utilizando
              tecnologias como React, Next.js e React Native.
            </p>
            <br />
            <p style={{ textIndent: "2em" }}>
              Gosto de transformar ideias em experiências visuais e interativas,
              e meu maior interesse está em criar telas que unam estética,
              usabilidade e performance. today, sigo evoluindo constantemente,
              em busca de boas práticas, novas ferramentas e desafios que me
              façam crescer como desenvolvedor.
            </p>
            <br />
            <p style={{ textIndent: "2em" }}>
              Atualmente, tenho como objetivo integrar uma equipe de
              desenvolvimento onde eu possa crescer ao lado de outras pessoas,
              fortalecendo não apenas minhas habilidades técnicas, mas também
              minhas capacidades interpessoais, como comunicação, colaboração e
              troca de conhecimento. Tudo isso proporcionado por um ambiente que
              estimule o aprendizado contínuo e o trabalho em conjunto.
            </p>
          </div>
        ) : (
          <div>
            <p style={{ textIndent: "2em" }}>
              I'm a mechanical engineer by degree, but I found my true passion
              in technology and software development. Since 2022, I've fully
              immersed myself in programming, starting with software
              architecture and backend development using JavaScript, TypeScript,
              Node.js, and frameworks like NestJS, Express and React.
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
              Currently, my goal is to join a development team where I can grow
              alongside others, strengthening not only my technical skills but
              also my interpersonal abilities, such as communication,
              collaboration, and knowledge sharing. All of this provided by an
              environment that encourages continuous learning and teamwork.
            </p>
          </div>
        )}
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
