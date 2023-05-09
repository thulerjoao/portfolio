import { Dispatch, SetStateAction, useState } from "react";
import * as Styled from "./style";
import euaFlag from "../../assets/image/euaFlag.png";
import braFlag from "../../assets/image/braFlag.png";

interface Selected {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  setlastOne: Dispatch<SetStateAction<number>>;
}

const NavBar = ({ active, setActive, setlastOne }: Selected) => {


    const handleChange = (current: number, newOne: number) =>{
        current !== newOne && setlastOne(current)
        setActive(newOne)
    }

  return (
    <Styled.Header>
      <div
        onClick={() => handleChange(active, 0)}
      >
        <a className={active === 0 ? "active" : ""}>SOBRE MIM</a>
      </div>
      <div
        onClick={() => handleChange(active, 1)}
      >
        <a className={active === 1 ? "active" : ""}>PORTFOLIO</a>
      </div>
      <div
        onClick={() => handleChange(active, 2)}
      >
        <a className={active === 2 ? "active" : ""}>FORMAÇÃO</a>
      </div>
      <div
        onClick={() => handleChange(active, 3)}
      >
        <a className={active === 3 ? "active" : ""}>CONTATO</a>
      </div>
      <section className="idiom">
        <img alt="flag eua"src={euaFlag} onClick={()=> console.log("funcionei")}></img>
        <img alt="flag brazil"src={braFlag}  onClick={()=> console.log("funcionei2")}></img>
      </section>
    </Styled.Header>
  );
};

export default NavBar;
