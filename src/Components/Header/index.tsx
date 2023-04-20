import { Dispatch, SetStateAction, useState } from "react"
import * as Styled from "./style"

interface Selected {
    active: number,
    setActive: Dispatch<SetStateAction<number>>
  }

const HeaderComponent = ({active, setActive}:Selected) =>{

    return(
        <Styled.Header>
            <div onClick={()=> setActive(0)}>
                <a className={active === 0 ? "active": ""}>SOBRE MIM</a>
            </div>
            <div onClick={()=> setActive(1)}>
                <a className={active === 1 ? "active": ""} >PORTFOLIO</a>
            </div>
            <div onClick={()=> setActive(2)}>
                <a className={active === 2 ? "active": ""} >CURRÍCULO</a>
            </div>
            <div onClick={()=> setActive(3)}>
                <a className={active === 3 ? "active": ""} >CONTATO</a>
            </div>
        </Styled.Header>
    )
}

export default HeaderComponent
