import { useState } from "react";
import * as Style from "./style";
import HeaderComponent from "../../Components/Header";
import InitialComponent from "../../Components/InitialGlobe";

const MainPage = () => {
  const [active, setActive] = useState<number>(0); //values from 0 to 3
  

  return (
    <Style.MainPageComponent>
      <section className="mainSection">
        <HeaderComponent active={active} setActive={setActive} />
        <InitialComponent/>
      </section>
    </Style.MainPageComponent>
  );
};

export default MainPage;
