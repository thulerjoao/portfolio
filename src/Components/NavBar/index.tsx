import { Dispatch, SetStateAction, useState } from "react";
import * as Styled from "./style";

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
    </Styled.Header>
  );
};

export default NavBar;
