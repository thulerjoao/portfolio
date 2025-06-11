import { LanguageType } from "../../../../types/languageType";
import CoffeAppVideo from "../../../../assets/media/CoffeAppVideo.mp4";
import { CoffeeAppContainer } from "./style";

interface Props {
  language: LanguageType;
}

const CoffeeApp = ({ language }: Props) => {
  return (
    <CoffeeAppContainer>
      <div className="title">
        <h3>• Coffee Delivery</h3>
        {language === "bra" ? (
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
      {language === "bra" ? (
        <h4 style={{ textIndent: "2em" }}>
          Projeto feito a partir de um desafio da escola de programação
          Rocketseat afim de criar um aplicativo mobile para uma loja de café. A
          aplicação foi feita com o intuito de demonstrar as possíbilidades do
          framework em seguir um design e também mostrar as interação entre as
          telas.
        </h4>
      ) : (
        <h4 style={{ textIndent: "2em" }}>
          Project made from a Rocketseat programming school challenge in order
          to create caffee shop mobile application. The application was made
          with the aim of demonstrating the possibilities of the framework in
          following a design and also show the interaction between screens.
        </h4>
      )}
      {language === "bra" ? (
        <h3>Tecnologias principais:</h3>
      ) : (
        <h3>Main technologies:</h3>
      )}
      <div className="tecnologies">
        <p>• TypeScript</p>
        <p>• React Native</p>
        {language === "bra" ? (
          <>
            <p>• Styled Components - Ferramenta de estilização</p>
            <p>
              • React Native Snap Carousel - Utilizado para fazer slide dos
              cards
            </p>
            <p> •React Native Animatable - Responsável pelas animações</p>
            <p>• React Redux - Ferramenta de gerenciamento de estado global</p>
          </>
        ) : (
          <>
            <p>• Styled Components - Styling tool</p>
            <p>• React Native Snap Carousel - Used to slide cards</p>
            <p>• React Native Animatable - Responsible for animations</p>
            <p>• React Redux - Global State Management Tool</p>
          </>
        )}
      </div>

      <section className="mediaContainer">
        <div className="leftContainer">
          {language === "bra" ? (
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
        </div>
        <div className="rightContainer">
          {language === "bra" ? (
            <h4>Confira o figma que foi usado no projeto:</h4>
          ) : (
            <h4>Check out the figma that was used in the project:</h4>
          )}

          <iframe
            className="figma"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2QegOxAYZLb5UmANQsO0en%2FUntitled%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DyT6y2Vyu5rt9l7FT-1"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </CoffeeAppContainer>
  );
};

export default CoffeeApp;
