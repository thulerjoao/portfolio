import * as Style from "./style";
import jptl from "../../assets/image/jptl.jpg";

const AboutMe = () => {
  return (
    <Style.AbouMeComponent>
      <section>
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
          <div>
            <img></img>
            <a></a>
          </div>
          <div>
            <img></img>
            <a></a>
          </div>
        </footer>
      </section>
    </Style.AbouMeComponent>
  );
};

export default AboutMe;
