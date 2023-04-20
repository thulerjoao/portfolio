import { useEffect, useState } from "react";
import * as Style from "./style";
import HeaderComponent from "../../Components/Header";
import ballUp from "../../assets/image/ballUp.png";

const MainPage = () => {
  const [active, setActive] = useState<number>(0); //values from 0 to 3
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isBlowing, setIsBlowing] = useState<boolean>(false);
  const [wasClicked, setWasClicked] = useState<boolean>(false);

  const handleBlow = () => {
    setWasClicked(true);
    setTimeout(() => {
      setIsBlowing(true);
      setTimeout(() => {
        setIsFinished(true);
      }, 2000);
    }, 3000);
  };

  return (
    <Style.MainPageComponent>
      <section className="mainSection">
        <HeaderComponent active={active} setActive={setActive} />
        <Style.BlowUp>
          <section className={isFinished ? "done" : ""}>
            <div className={isBlowing ? "bomb" : ""}></div>
            <div
              className={wasClicked ? (isBlowing ? "blow" : "finished") : ""}
            >
              <img alt="globe" src={ballUp} onClick={() => handleBlow()}></img>
            </div>
          </section>
        </Style.BlowUp>
      </section>
    </Style.MainPageComponent>
  );
};

export default MainPage;
