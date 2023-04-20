import { useEffect, useState } from "react";
import * as Style from "./style";
import HeaderComponent from "../../Components/Header";
import ballUp from "../../assets/image/ballUp.png";

const MainPage = () => {
  const [active, setActive] = useState<number>(0); //values from 0 to 3
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isBlowing, setIsBlowing] = useState<boolean>(false);
  const [wasClicked, setWasClicked] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFinished(true);
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
        setIsBlowing(true);
    }, 7500);
  }, []);

  return (
    <Style.MainPageComponent>
      <section className="mainSection">
        <HeaderComponent active={active} setActive={setActive} />
        <Style.BlowUp>
            <div className={isBlowing ? "bomb" : ""}></div>
          <div className={isFinished ? isBlowing? "blow": "finished" : ""}>
            <img alt="ball" src={ballUp}></img>
          </div>
        </Style.BlowUp>
      </section>
    </Style.MainPageComponent>
  );
};

export default MainPage;
