import { useState } from "react";
import * as Style from "./style";
import NavBar from "../../Components/NavBar";
import InitialComponent from "../../Components/InitialGlobe";
import AboutMe from "../../Components/AboutMe";
import Portfolio from "../../Components/Portfolio";
import Contact from "../../Components/Contact";
import Curriculo from "../../Components/Curriculo";

const MainPage = () => {
  const [active, setActive] = useState<number>(0); //values from 0 to 3
  const [lastOne, setlastOne] = useState<number>(0); //values from 0 to 3
  

  return (
    <Style.MainPageComponent>
      <section className="mainSection">
        {/* <InitialComponent/> */}
        <NavBar active={active} setActive={setActive} setlastOne={setlastOne}/>
        <section className="mainCards">
         {<AboutMe active={active} />}
         {<Portfolio active={active} lastOne={lastOne}/>}
         {<Curriculo active={active} lastOne={lastOne}/>}
         {<Contact active={active}/>}
        </section>
      </section>
    </Style.MainPageComponent>
  );
};

export default MainPage;
