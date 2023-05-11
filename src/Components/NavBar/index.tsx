import { Dispatch, SetStateAction, useState } from "react";
import * as Styled from "./style";
import euaFlag from "../../assets/image/euaFlag.png";
import braFlag from "../../assets/image/braFlag.png";

interface Selected {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  setlastOne: Dispatch<SetStateAction<number>>;
  isEua: boolean;
  setIsEua: Dispatch<SetStateAction<boolean>>;
}


const NavBar = ({ active, setActive, setlastOne, isEua, setIsEua }: Selected) => {


    const handleChange = (current: number, newOne: number) =>{
        current !== newOne && setlastOne(current)
        setActive(newOne)
    }

  return (
    <Styled.Header>
      <div
        onClick={() => handleChange(active, 0)}
      >
        <a className={active === 0 ? "active" : ""}>{!isEua? "SOBRE MIM": "ABOUT ME"}</a>
      </div>
      <div
        onClick={() => handleChange(active, 1)}
      >
        <a className={active === 1 ? "active" : ""}>{!isEua? "PORTFÓLIO":"PORTFOLIO"}</a>
      </div>
      <div
        onClick={() => handleChange(active, 2)}
      >
        <a className={active === 2 ? "active" : ""}>{!isEua? "FORMAÇÃO":"EDUCATION"}</a>
      </div>
      <div
        onClick={() => handleChange(active, 3)}
      >
        <a className={active === 3 ? "active" : ""}>{!isEua? "CONTATO":"CONTACT"}</a>
      </div>
      <section className="idiom">
        <img className={isEua? "selected": ""} alt="flag eua"src={euaFlag} onClick={()=> setIsEua(true)}></img>
        <img className={!isEua? "selected": ""} alt="flag brazil"src={braFlag}  onClick={()=> setIsEua(false)}></img>
      </section>
    </Styled.Header>
  );
};

export default NavBar;
