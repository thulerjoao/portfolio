import { useState } from "react"
import * as Style from "./style"
import HeaderComponent from "../../Components/Header"

const MainPage = () =>{


    return(
        <Style.MainPageComponent>
            <section className="mainSection">
                <HeaderComponent/> 
            </section>
           
        </Style.MainPageComponent>
        
    )
}

export default MainPage
