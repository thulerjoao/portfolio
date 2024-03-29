import { useState } from "react";
import * as Style from "./style";
import NavBar from "../../Components/NavBar";
import InitialComponent from "../../Components/InitialGlobe";
import AboutMe from "../../Components/AboutMe";
import Portfolio from "../../Components/Portfolio";
import Contact from "../../Components/Contact";
import Curriculo from "../../Components/Curriculo";
import startDust from "../../assets/image/start-dust.png";


const MainPage = () => {
  const [active, setActive] = useState<number>(0); //values from 0 to 3
  const [lastOne, setlastOne] = useState<number>(0); //values from 0 to 3
  const [isEua, setIsEua] = useState<boolean>(true);

  const LIMIT = 50;

  const [initialTouch, setInitialTouch] = useState<number | null>(null);
  const [difference, setDifference] = useState<number>(0);

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const initialTouch = e.touches[0].clientX;
    setInitialTouch(initialTouch);
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (initialTouch === null) return;
    const currentTouch = e.touches[0].clientX;
    const gap = initialTouch - currentTouch;
    setDifference(gap);
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (difference > LIMIT) {
      if (active === 3) return;
      setlastOne(active);
      const newValue = active + 1;
      setActive(newValue);
    } else if (difference < -LIMIT) {
      if (active === 0) return;
      setlastOne(active);
      const newValue = active - 1;
      setActive(newValue);
    }
    setInitialTouch(null);
    setDifference(0);
  }; 

  return (
    <Style.MainPageComponent>
      <section className="mainSection">
        {/* <img src={startDust}></img> */}
        <InitialComponent />
        <NavBar active={active} setActive={setActive} setlastOne={setlastOne} isEua={isEua} setIsEua={setIsEua} />
        <div
          className="mainCards"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {<AboutMe active={active} isEua={isEua}/>}
          {(active === 1 || lastOne === 1) && (
            <Portfolio active={active} lastOne={lastOne} isEua={isEua}/>
          )}
          {(active === 2 || lastOne === 2) && (
            <Curriculo active={active} lastOne={lastOne} isEua={isEua}/>
          )}
          {<Contact active={active} isEua={isEua}/>}
        </div>
      </section>
    </Style.MainPageComponent>
  );
};

export default MainPage;
