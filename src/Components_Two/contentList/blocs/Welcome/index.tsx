import { DownArrow, WelcomeContainer } from "./style";
import "animate.css";
import jptl from "../../../../assets/image/jptl.jpg";

const Welcome = () => {
  return (
    <WelcomeContainer>
      <div className="picture">
        <img alt="profile image" src={jptl} />
      </div>
      <div className="about desktopAbout">
        <p>
          Olá
          <br />
          me chamo <span className="colorful"> João Pedro Thuler Lima</span>,
          <br />
          sou desenvolvedor Full-stack
        </p>
      </div>
      <div className="about mobileAbout">
        <p>
          Olá
          <br />
          me chamo <span className="colorful"> João Lima</span>,
          <br />
          Desenvolvedor Full-stack
        </p>
      </div>
      <div className="scrollDown">
        <p>{"Confira abaixo \nminhas qualificações"}</p>
        <div className="animate__animated animate__bounce animate__infinite animate__duration-2s">
          <DownArrow />
        </div>
      </div>
    </WelcomeContainer>
  );
};

export default Welcome;
