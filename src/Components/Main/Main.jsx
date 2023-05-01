import "./Main_style.scss"
import Card from "./Card/Card"
import { Produtos } from "./products"
export default function Main(){
    return(
        <main>
            <div className="DivText">
                <p className="promotionText">PROMOÇÃO</p>
                <p className="productsText">9 produtos</p>
            </div>
            <section className="products">
                {Produtos.map((item)=>(
                    <Card products={item}/>
                ))}
            </section>
        </main>
    )
}