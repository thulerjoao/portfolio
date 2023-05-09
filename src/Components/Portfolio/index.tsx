import * as Style from "./style";
import "animate.css";
import { DiReact } from "react-icons/di";

interface prop {
  active: number;
  lastOne: number;
  isEua: boolean;
}

// "animate__bounceInLeft" : "animate__fadeOutLeftBig"

const Portfolio = ({ active, lastOne, isEua }: prop) => {
  return (
    <Style.PortfolioComponent
      className={`animate__animated ${
        active === 1
          ? active < lastOne
            ? "animate__fadeInLeftBig"
            : "animate__fadeInRightBig"
          : active < lastOne
          ? "animate__fadeOutRightBig"
          : "animate__fadeOutLeftBig"
      }  animate__delay-0.5s`}
    >
      <section>
        <div className="mainDiv">
          <h2>FrontEnd</h2>

          <h4>
            Aplicação React feita para gerar orçamentos a clientes e também
            gerenciar a carga de trabalho dos funcionários
          </h4>

          <h3>Tecnologias principais:</h3>

          <p>React Ts</p>
          <p>Styled Components</p>

          <div className="video">VIDEO</div>

          <h4>Confira o figma que fiz como base para o projeto:</h4>

          <iframe
          className="figma"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fxz7GoBLP3omHao64Uux4vg%2FUntitled%3Fnode-id%3D0%253A1%26t%3DBJjPRLJoA8tNPx0w-1"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mainDiv last">
          <h2>BackEnd</h2>

          <h4>
            API criada para uma pizzaria, com cadastro de produtos e lançamento de pedidos destinados a uma determinada mesa.
          </h4>

          <h3>Tecnologias principais:</h3>

          <p>Nest Ts</p>
          <p>Prisma</p>
          <p>PostgreSQL</p>

          <div className="video">VIDEO</div>
          </div>

        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YVI-q3idGiM"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
      </section>
    </Style.PortfolioComponent>
  );
};

export default Portfolio;
