import { useState } from "react"
import * as Style from "./style"
import HeaderComponent from "../../Components/Header"

const MainPage = () =>{

    const [active, setActive] = useState<number>(0)

    return(
        <Style.MainPageComponent>
            <section className="mainSection">
                <HeaderComponent active={active} setActive={setActive}/> 
            </section>
           
        </Style.MainPageComponent>
        
    )
}

export default MainPage
