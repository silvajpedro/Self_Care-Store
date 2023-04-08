import "./Card_style.scss"

export default function Card({products}){
    return(
        <>
            <figure>
                <div className="productBox">
                <img src={products} alt="produto loja" />
                </div>
                <figcaption>Lorem ipsum dolor sit</figcaption>
                <p>R$<span>50,00</span></p>
            </figure>
           
        </>
    )
}