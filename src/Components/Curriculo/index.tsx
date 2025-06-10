import "animate.css";
import { LanguageType } from "../../types/languageType";
import * as Style from "./style";

interface prop {
  active: number;
  lastOne: number;
  language: LanguageType;
}

const Curriculo = ({ active, lastOne, language }: prop) => {
  const pdfURL = "../../assets/image/curriculo.pdf";

  return (
    <Style.CurriculoComponent
      className={`animate__animated ${
        active === 2
          ? active < lastOne
            ? "animate__fadeInLeftBig"
            : "animate__fadeInRightBig"
          : active < lastOne
          ? "animate__fadeOutRightBig"
          : "animate__fadeOutLeftBig"
      }  animate__delay-0.5s`}
    >
      <section>
        {language === "bra" ? (
          <div>
            <h2>Formação</h2>
            <h4>
              2022-2023 | Blue EdTech<br></br> Desenvolvedor Web FullStack
            </h4>
            <p>
              • Curso online, prático e intensivo na formação em Desenvolvimento
              Web FullStack
            </p>
            <p>• Criação de Aplicações FrontEnd com React Ts</p>
            <p>
              • Construção de Rest API's utilizando o Express e também o Nest Ts
            </p>
            <p>
              • Consumo de banco de dados relacionais (PostgreSQL) e não
              relacionais (MongoDB)
            </p>

            <h4>2012-2019 | Universidade do Estado do Rio de Janeiro (UERJ)</h4>
            <p>• Graduação em Engenharia Mecânica</p>
          </div>
        ) : (
          <div>
            <h2>Education</h2>
            <h4>
              2022-2023 | Blue EdTech<br></br> FullStack Web Developer
            </h4>
            <p>
              • Online, practical and intensive course in FullStack Web
              Development
            </p>
            <p>• Creating FrontEnd Applications with React Ts</p>
            <p>• Building Rest API's using Express and also Nest Ts</p>
            <p>
              • Consumption of relational database (PostgreSQL) and not
              relational (MongoDB)
            </p>

            <h4>2012-2019 | State University of Rio de Janeiro (UERJ)</h4>
            <p>• Graduated in Mechanical Engineering</p>
          </div>
        )}
      </section>
    </Style.CurriculoComponent>
  );
};

export default Curriculo;
