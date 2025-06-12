import { useEffect, useRef, useState } from "react";
import DataRainVideo from "../../../../assets/media/DataRainVideo.mp4";
import { LanguageType } from "../../../../types/languageType";
import { DatarainContainer } from "./style";

interface Props {
  language: LanguageType;
}

const Datarain = ({ language }: Props) => {
  const [isMuted, setIsMuted] = useState(true);
const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
  const video = videoRef.current;

  const handleFullscreenChange = () => {
    const fullscreenElement = 
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement;

    if (fullscreenElement === video) {
      setIsMuted(false);  // desmutar no fullscreen
    } else {
      setIsMuted(true);   // mutar fora do fullscreen (opcional)
    }
  };

  document.addEventListener("fullscreenchange", handleFullscreenChange);
  document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
  document.addEventListener("mozfullscreenchange", handleFullscreenChange);
  document.addEventListener("MSFullscreenChange", handleFullscreenChange);

  return () => {
    document.removeEventListener("fullscreenchange", handleFullscreenChange);
    document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
    document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
  };
}, []);

  return (
    <DatarainContainer>
      <div className="title">
        <h3>• DataRain tool</h3>
        {language === "bra" ? (
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

      {language === "bra" ? (
        <h4 style={{ textIndent: "2em" }}>
          Projeto feito para a empresa dataRain e vencedor de um bootcamp onde
          fui responsável pelo front-end. A principal funcionalidade da
          aplicação é criar um formulário, onde cada resposta objetiva tem
          atribuindo a ela uma equipe de desenvolvedores, e também um valor
          pre-determinado de horas para aquela função. Com a resposta deste
          formulário é possível editar os valores, e então gerar um orçamento
          para o cliente. Além disto, a aplicação também faz gestão dos
          funcionário, clientes e projetos ativos na empresa. Também é possível
          ter o controle do cartão de ponto e pedidos de hora extra dos
          colaboradores.
        </h4>
      ) : (
        <h4 style={{ textIndent: "2em" }}>
          Project made for the company dataRain and winner of a bootcamp where I
          was responsible for the front end. The main functionality of the
          application is to create a form, where each objective answer has
          attributing to it a team of developers, and also a predetermined
          amount of hours for that function. With the answer of this form it is
          possible to edit the values, and then generate a budget for the
          client. In addition, the application also manages employees, customers
          and active projects in the company. It is also possible to have time
          card control and overtime requests from employees.
        </h4>
      )}
      {language === "bra" ? (
        <h3>Tecnologias principais:</h3>
      ) : (
        <h3>Main technologies:</h3>
      )}
      <div className="tecnologies">
        <p>• React.js</p>
        <p>• TypeScript</p>
        {language === "bra" ? (
          <>
            <p>• Styled Components - Ferramenta de estilização</p>
            <p>
              • Mui material - Lib usada na criação dos botões e barra de
              progresso do formulário
            </p>
            <p> • pdfmake - Gerar arquivos pdf com dados dos orçamentos</p>
          </>
        ) : (
          <>
            <p>• Styled Components - Styling tool</p>
            <p>
              • Mui material - Lib used to create buttons and toolbar form
              progress
            </p>
            <p>• pdfmake - Generate pdf files with budget data</p>
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
            <video ref={videoRef} controls autoPlay playsInline muted={isMuted} loop>
              <source src={DataRainVideo} type="video/mp4" />
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
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fxz7GoBLP3omHao64Uux4vg%2FUntitled%3Fnode-id%3D0%253A1%26t%3DBJjPRLJoA8tNPx0w-1"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </DatarainContainer>
  );
};

export default Datarain;
