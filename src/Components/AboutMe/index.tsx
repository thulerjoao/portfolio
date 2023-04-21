import * as Style from "./style";
import jptl from "../../assets/image/jptl.jpg";
import 'animate.css';

interface prop {
  active:number
}

const AboutMe = ({active}:prop) => {
  return (
    <Style.AbouMeComponent className={`animate__animated ${active === 0? 'animate__fadeInLeftBig' : 'animate__backOutLeft'}  animate__delay-0.2s`}>
      <section >
        <div className="firstBlock">
          <img alt="profile image" src={jptl}></img>
          <div>
            <h2>João Pedro Thuler Lima</h2>
            <p>Full Stack Developer</p>
          </div>
        </div>
        <div className="mainText">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            voluptas iusto soluta rerum unde tempore incidunt praesentium,
            distinctio quaerat earum nihil, beatae nobis sit quia asperiores
            ratione et odit facilis!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates voluptas iusto soluta rerum unde
            tempore incidunt praesentium, distinctio quaerat earum nihil, beatae
            nobis sit quia asperiores ratione et odit facilis!Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptates voluptas iusto
            soluta rerum unde tempore incidunt praesentium, distinctio quaerat
            earum nihil, beatae nobis sit quia asperiores ratione et odit
            facilis!
          </p>
        </div>
        <footer>
          <a href="https://github.com/thulerjoao" target="_blank">
            <Style.BtnGit />
            <p>GitHub</p>
          </a>
          <a href="http://www.linkedin.com/in/thulerjoao" target="_blank">
            <Style.BtnIn />
            <p>Linkedin</p>
          </a>
        </footer>
      </section>
    </Style.AbouMeComponent>
  );
};

export default AboutMe;
