import * as Style from "./style";
import "animate.css";
import swaggerImg from "../../assets/image/swaggerImg.png";

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
          <div className="title">
            <h3>- PizzaFresh</h3>
            {!isEua ? (
              <a
                href="https://github.com/thulerjoao/nest_ts-pizza_fresh_api.git"
                target="_blank"
              >
                Repositório
              </a>
            ) : (
              <a
                href="https://github.com/thulerjoao/nest_ts-pizza_fresh_api.git"
                target="_blank"
              >
                Repository
              </a>
            )}
          </div>

          {!isEua ? (
            <h4>
              API Nest.ts criada para servir de sistema a uma pizzaria. A
              aplicação abrange rotas desde a criação de um usuário (atendente)
              até cadastro de mesas e produtos. Também são lançados pedidos e
              devem estar atrelados as entidades anteriores. Uma aplicação
              simples, com poucas entidades, mas que carrega conceitos bastante
              úteis e práticos.
            </h4>
          ) : (
            <h4>
              API Nest.ts created to serve as a system for a restaurant. The
              application covers routes from creating a user (attendant) to
              registering tables and products. Orders are also launched and must
              be linked to the previous entities. An simple application, with
              few entities, but which carries concepts quite useful and
              practical.
            </h4>
          )}

          {!isEua ? (
            <h3>Tecnologias principais:</h3>
          ) : (
            <h3>Main technologies:</h3>
          )}
          <p>Nest.Ts</p>
          <p>Prisma - ORM</p>
          <p>PostgreSQL - DB</p>
          {!isEua ? (
            <>
              <p>Bcrypt - Criptografar senhas de usuários</p>
              <p>JWT - Gerar tokens de autenticação para login</p>
              <h4>Swagger com as rotas da API:</h4>
            </>
          ) : (
            <>
              <p>Bcrypt - Encrypt user`s passwords</p>
              <p>JWT - Create authentication tokens to login</p>
              <h4>Swagger with API routers:</h4>
            </>
          )}
          <div className="video">
            <img src={swaggerImg}></img>
          </div>
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
