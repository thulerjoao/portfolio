import Name from "./images/nameGold.png";
import { BtnGit, BtnIn, ContactContainer, Email } from "./style";

const Contact = () => {
  return (
    <ContactContainer>
      <section>
        <p className="contact">Contato</p>
        <div className="enviroment">
          <Email />
          <p>thulerlima.dev@gmail.com</p>
        </div>
        <div className="enviroment">
          <BtnGit />
          <p>thulerjoao</p>
        </div>
        <div className="enviroment">
          <BtnIn />
          <p>thulerjoao</p>
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
