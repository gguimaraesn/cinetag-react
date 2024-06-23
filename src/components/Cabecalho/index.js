import { Link } from "react-router-dom";
import logo from "./Logo.png"; 
import Styles from "./Cabecalho.module.css";
import CabecalhoLink from "../CabecalhoLink";

function Header() {
    return (
        <header className={Styles.cabecalho}>
            <Link to="./">
            <img src={logo} alt="Logo do cinetag">
            </img> 
            </Link>
            <nav>

                <CabecalhoLink url="./">
                    Home
                 </CabecalhoLink>
                 <CabecalhoLink url="./Favoritos">
                         Favoritos        
                  </CabecalhoLink>
            </nav>
        </header>
    )
}


export default Header;