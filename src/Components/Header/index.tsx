import { Dispatch, SetStateAction, useState } from "react"
import * as Styled from "./style"

interface Selected {
    active: number,
    setActive: Dispatch<SetStateAction<number>>
  }

const HeaderComponent = ({active, setActive}:Selected) =>{

    return(
        <Styled.Header>
            <a className={active === 0 ? "active": ""} onClick={()=> setActive(0)}>SOBRE MIM</a>
            <a className={active === 1 ? "active": ""} onClick={()=> setActive(1)}>PORTFOLIO</a>
            <a className={active === 2 ? "active": ""} onClick={()=> setActive(2)}>CURRÍCULO</a>
            <a className={active === 3 ? "active": ""} onClick={()=> setActive(3)}>CONTATO</a>
        </Styled.Header>
    )
}

export default HeaderComponent
