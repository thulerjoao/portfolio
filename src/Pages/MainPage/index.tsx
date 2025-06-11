import { useState } from "react";
import AboutMe from "../../Components/AboutMe";
import Contact from "../../Components/Contact";
import Curriculo from "../../Components/Curriculo";
import NavBar from "../../Components/NavBar";
import Projects from "../../Components/Projects";
import { LanguageType } from "../../types/languageType";
import * as Style from "./style";
import InitialComponent from "../../Components/InitialGlobe";

const MainPage = () => {
  const [active, setActive] = useState<number>(0); //values from 0 to 3
  const [lastOne, setlastOne] = useState<number>(0); //values from 0 to 3
  const [language, setLanguage] = useState<LanguageType>("eua");

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
        <NavBar
          active={active}
          setActive={setActive}
          setlastOne={setlastOne}
          language={language}
          setLanguage={setLanguage}
        />
        <div
          className="mainCards"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* <div className="test"/> */}
          {<AboutMe active={active} language={language} />}
          {(active === 1 || lastOne === 1) && (
            <Projects active={active} lastOne={lastOne} language={language} />
          )}
          {(active === 2 || lastOne === 2) && (
            <Curriculo active={active} lastOne={lastOne} language={language} />
          )}
          {<Contact active={active} language={language} />}
        </div>
      </section>
    </Style.MainPageComponent>
  );
};

export default MainPage;
