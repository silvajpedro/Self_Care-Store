import "./Header_style.scss"
import Logo from "../../assets/logo.svg"
import Search from "../../assets/search.svg"
import Contato from "../../assets/contato.svg"
import Carrinho from "../../assets/carrinho.svg"
import Frame from "../../assets/frame.png"
export default function Header(){
    return(
        <header>
            <section className="firstSection">
                <img className="selfcare" src={Logo} alt=""/>
                <div>
                    <img src={Search} alt="" />
                    <img src={Contato} alt="" />
                    <img src={Carrinho} alt="" />
                </div>
            </section>
            <section className="bannerSection">
        <img src={Frame} alt="" />
            </section>
        </header>
    )
}