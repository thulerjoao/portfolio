import Name from "./images/nameGlodShort.png";
import { BtnGit, BtnIn, ContactContainer, Email } from "./style";

const Contact = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("thulerlima.dev@gmail.com");
    alert("Email copiado para a área de transferência.");
  };

  return (
    <ContactContainer>
      <section>
        <p className="contact">Contato</p>
        <div className="enviroment" onClick={() => handleCopy()}>
          <a>
            <Email />
            <p>thulerlima.dev@gmail.com</p>
          </a>
        </div>
        <div className="enviroment">
          <a
            href="https://github.com/thulerjoao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BtnGit />
            <p>thulerjoao</p>
          </a>
        </div>
        <div className="enviroment">
          <a
            href="http://www.linkedin.com/in/thulerjoao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BtnIn />
            <p>thulerjoao</p>
          </a>
        </div>
        {/* <p className="goodBye">
        Obrigado por vir até aqui!
      </p>
      <p className="lastName">
        Joao Pedro Thuler Lima
      </p> */}
      </section>
      <img src={Name} />
    </ContactContainer>
  );
};

export default Contact;
