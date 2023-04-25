import { useState } from "react";
import * as Style from "./style";
import NavBar from "../../Components/NavBar";
import InitialComponent from "../../Components/InitialGlobe";
import AboutMe from "../../Components/AboutMe";
import Portfolio from "../../Components/Portfolio";
import Contact from "../../Components/Contact";

const MainPage = () => {
  const [active, setActive] = useState<number>(0); //values from 0 to 3
  

  return (
    <Style.MainPageComponent>
      <section className="mainSection">
        <InitialComponent/>
        <NavBar active={active} setActive={setActive} />
         {active=== 0 && <AboutMe active={active}/>}
         {active=== 1 && <Portfolio active={active}/>}
         {active=== 3 && <Contact active={active}/>}
      </section>
    </Style.MainPageComponent>
  );
};

export default MainPage;
