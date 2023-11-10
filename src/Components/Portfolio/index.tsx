import * as Style from "./style";
import "animate.css";
import swaggerImg from "../../assets/image/swaggerImg.png";
import DataRainVideo from "../../assets/media/DataRainVideo.mp4";
import CoffeAppVideo from "../../assets/media/CoffeAppVideo.mp4";

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

          <div className="title">
            <h3>• [Reat Native] Coffee Delivery</h3>
            {!isEua ? (
              <a
                href="https://github.com/thulerjoao/CoffeeProject-Native"
                target="_blank"
              >
                Repositório
              </a>
            ) : (
              <a
                href="https://github.com/thulerjoao/CoffeeProject-Native"
                target="_blank"
              >
                Repository
              </a>
            )}
          </div>
          {!isEua ? (
            <h4>
              Projeto feito a partir de um desafio da escola de programação
              Rocketseat. A aplicação foi feita com o intuito de demonstrar as
              possíbilidades do framework em seguir um design também, mostrar as
              interação entre as telas. Portanto, não há até o momento interação
              com alguma API.
            </h4>
          ) : (
            <h4>
              Project made from a programming school challenge Rocketseat. The
              application was made with the aim of demonstrating the
              possibilities of the framework in following a design as well,
              showing the interaction between screens. Therefore, there is
              currently no interaction with some API.
            </h4>
          )}
          {!isEua ? (
            <h3>Tecnologias principais:</h3>
          ) : (
            <h3>Main technologies:</h3>
          )}

          <p>React Native</p>
          {!isEua ? (
            <>
              <p>Styled Components - Ferramenta de estilização</p>
              <p>
                React Native Snap Carousel - Utilizado para fazer slide dos
                cards
              </p>
              <p>React Native Animatable - Responsável pelas animações</p>
              <p>React Redux - Ferramenta de gerenciamento de estado global</p>
            </>
          ) : (
            <>
              <p>Styled Components - Styling tool</p>
              <p>React Native Snap Carousel - Used to slide cards</p>
              <p>React Native Animatable - Responsible for animations</p>
              <p>React Redux - Global State Management Tool</p>
            </>
          )}

          {!isEua ? (
            <h4>Visão geral do projeto:</h4>
          ) : (
            <h4>Application overview:</h4>
          )}

          <div className="video front native">
            <video controls>
              <source src={CoffeAppVideo} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>

          {!isEua ? (
            <h4>Confira o figma que fiz como base para o projeto:</h4>
          ) : (
            <h4>Check out the figma I made as a basis for the project:</h4>
          )}

          <iframe
            className="figma"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2QegOxAYZLb5UmANQsO0en%2FUntitled%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DyT6y2Vyu5rt9l7FT-1"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mainDiv">
          <div className="title">
            <h3>• [Reat.js] dataRain tool</h3>
            {!isEua ? (
              <a
                href="https://github.com/thulerjoao/FrontEnd-finance-tool-dataRain.git"
                target="_blank"
              >
                Repositório
              </a>
            ) : (
              <a
                href="https://github.com/thulerjoao/FrontEnd-finance-tool-dataRain.git"
                target="_blank"
              >
                Repository
              </a>
            )}
          </div>

          {!isEua ? (
            <h4>
              Projeto feito para a empresa dataRain e vencedor de um bootcamp
              onde fui responsável pelo front-end. A principal funcionalidade da
              aplicação é criar um formulário, onde cada resposta objetiva tem
              atribuindo a ela uma equipe de desenvolvedores, e também um valor
              pre-determinado de horas para aquela função. Com a resposta deste
              formulário é possível editar os valores, e então gerar um
              orçamento para o cliente. Além disto, a aplicação também faz
              gestão dos funcionário, clientes e projetos ativos na empresa.
              Também é possível ter o controle do cartão de ponto e pedidos de
              hora extra dos colaboradores.
            </h4>
          ) : (
            <h4>
              Project made for the company dataRain and winner of a bootcamp
              where I was responsible for the front end. The main functionality
              of the application is to create a form, where each objective
              answer has attributing to it a team of developers, and also a
              predetermined amount of hours for that function. With the answer
              of this form it is possible to edit the values, and then generate
              a budget for the client. In addition, the application also manages
              employees, customers and active projects in the company. It is
              also possible to have time card control and overtime requests from
              employees.
            </h4>
          )}

          {!isEua ? (
            <h3>Tecnologias principais:</h3>
          ) : (
            <h3>Main technologies:</h3>
          )}

          <p>React.Ts</p>
          {!isEua ? (
            <>
              <p>Styled Components - Ferramenta de estilização</p>
              <p>
                Mui material - Lib usada na criação dos botões e barra de
                progresso do formulário
              </p>
              <p>pdfmake - Gerar arquivos pdf com dados dos orçamentos</p>
            </>
          ) : (
            <>
              <p>Styled Components - Styling tool</p>
              <p>
                Mui material - Lib used to create buttons and toolbar form
                progress
              </p>
              <p>pdfmake - Generate pdf files with budget data</p>
            </>
          )}

          {!isEua ? (
            <h4>Visão geral do projeto:</h4>
          ) : (
            <h4>Application overview:</h4>
          )}

          <div className="video front">
            <video controls>
              <source src={DataRainVideo} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>

          {!isEua ? (
            <h4>Confira o figma que fiz como base para o projeto:</h4>
          ) : (
            <h4>Check out the figma I made as a basis for the project:</h4>
          )}

          <iframe
            className="figma"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fxz7GoBLP3omHao64Uux4vg%2FUntitled%3Fnode-id%3D0%253A1%26t%3DBJjPRLJoA8tNPx0w-1"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mainDiv last">
          <h2>BackEnd</h2>
          <div className="title">
            <h3>• [Nest.js] PizzaFresh</h3>
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
              até cadastro de mesas e produtos. Também são lançados pedidos que
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
          <div className="video back">
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
