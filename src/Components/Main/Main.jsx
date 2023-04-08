import "./Main_style.scss"
import Card from "./Card/Card"
import Produto1 from "../../assets/produto4.jpg"
import Produto2 from "../../assets/produto2.jpg"
import Produto3 from "../../assets/produto3.jpg"
import Produto4 from "../../assets/produto5.jpg"
import Produto5 from "../../assets/produto6.jpg"
import Produto6 from "../../assets/produto8.jpg"
import Produto7 from "../../assets/produto7.jpg"
import Produto9 from "../../assets/produto1.jpg"
import Produto8 from "../../assets/produto9.jpg"
export default function Main(){
    return(
        <main>
            <div className="DivText">
                <p className="promotionText">PROMOÇÃO</p>
                <p className="productsText">9 produtos</p>
            </div>
            <section className="products">
                <Card products={Produto1}/>
                <Card products={Produto2}/>
                <Card products={Produto3}/>
                <Card products={Produto4}/>
                <Card products={Produto5}/>
                <Card products={Produto6}/>
                <Card products={Produto7}/>
                <Card products={Produto8}/>
                <Card products={Produto9}/>
            </section>
        </main>
    )
}