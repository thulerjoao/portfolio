import React, { useEffect, useState } from "react";
import ballUp from "../../assets/image/ballUp.png";
import * as Style from "./style";

interface Props {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const InitialComponent = ({ setStart }: Props) => {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isBlowing, setIsBlowing] = useState<boolean>(false);
  const [wasClicked, setWasClicked] = useState<boolean>(false);
  const [isText, setIsText] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      handleBlow();
    }, 10400);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsText(false);
    }, 10000);
  }, []);

  const handleBlow = () => {
    setIsText(false);
    setTimeout(() => {
      setWasClicked(true);
      setTimeout(() => {
        setIsBlowing(true);
        setTimeout(() => {
          setIsFinished(true);
        }, 2000);
      }, 3000);
    }, 500);
  };

  useEffect(() => {
    isFinished && setStart(true);
  }, [isFinished]);

  return (
    <Style.BlowUp onClick={() => handleBlow()} wasClicked={wasClicked}>
      <section className={isFinished ? "done" : ""}>
        <div className={isBlowing ? "bomb" : ""}></div>
        <div className={wasClicked ? (isBlowing ? "blow" : "finished") : ""}>
          <div className={`textArea ${!isText ? "hiden" : ""}`}>
            <p>WHERE IT ALL BEGAN</p>
          </div>
          <img alt="globe" src={ballUp}></img>
        </div>
      </section>
    </Style.BlowUp>
  );
};

export default InitialComponent;
